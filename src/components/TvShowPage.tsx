import { useSearchParams } from "react-router";
import { useTvShow } from "../hooks/useTvShow";
import TvShowForm from "./TvShowForm";
import Loading from "./ui/Loading";
import TvShowCard from "./TvShowCard";
import { useState } from "react";

export default function TvShowPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams] = useSearchParams();

  const tvShowSearch = searchParams.get("tvshow") || "";

  const { data, isError, error, isLoading } = useTvShow(tvShowSearch);

  const tvShowPerPage = 20;

  // Total halaman
  const totalPages = Math.ceil((data?.length || 0) / tvShowPerPage);

  // Index data yang akan ditampilkan
  const startIndex = (currentPage - 1) * tvShowPerPage;
  const endIndex = startIndex + tvShowPerPage;

  // Data untuk halaman sekarang
  const currentTvShows = data?.slice(startIndex, endIndex);

  return (
    <div>
      <section>
        <TvShowForm />
      </section>

      {isLoading && <Loading />}

      {isError && <p>Error: {(error as Error).message}</p>}

      {data?.length === 0 ? (
        <p>There is no Tv Series</p>
      ) : (
        <>
          <div>
            {currentTvShows?.map((item) => (
              <TvShowCard key={item.id} show={item} />
            ))}
          </div>

          <div>
            <button
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
