import { Form, useSearchParams } from "react-router";

export default function TvShowForm() {
  const [searchParams] = useSearchParams();

  const currentTvShow = searchParams.get("tvshow") || "";

  return (
    <div>
      <Form method="get">
        <label>Find tv series</label>
        <input
          type="text"
          name="tvshow"
          defaultValue={currentTvShow}
          id="tvShowInput"
        />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}
