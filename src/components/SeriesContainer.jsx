import { useState } from "react";
import { useQuery } from "react-query";
import { getSeries, searchSerie } from "../services/api.services";
import Loading from "./Loading";
import SerieCard from "./SerieCard";
const SeriesContainer = ({ search }) => {
  let [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(++page);
  };

  const previousPage = () => {
    setPage(--page);
  };

  const { data, isError, isLoading } = useQuery(
    search ? ["search", search, page] : ["series", page],
    search ? () => searchSerie(search, page) : () => getSeries(page)
  );

  if (isLoading) return <Loading/>;

  if (isError || !data.tv_shows.length) return <div>The serie not exist.</div>;
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {data.tv_shows.map((serie) => (
          <SerieCard
            id={serie.id}
            name={serie.name}
            startDate={serie.start_date}
            image={serie.image_thumbnail_path}
            serieStatus={serie.status}
            key={serie.id}
          />
        ))}
      </div>
      <div className="flex justify-center align-center">
        <div className="btn-group">
          <button className="btn" onClick={previousPage} disabled={page <= 1}>
            «
          </button>
          <button className="btn">Page {page}</button>
          <button className="btn" onClick={nextPage} disabled={data.tv_shows.length < 20}>
            »
          </button>
        </div>
      </div>
    </>
  );
};

export default SeriesContainer;
