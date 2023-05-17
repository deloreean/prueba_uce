import { useQuery } from "react-query";
import { useParams} from "react-router-dom";
import { getSerieById } from "../services/api.services";
import Nav from "./Nav";
import Loading from '../components/Loading';
const SerieInfo = () => {
  const badgeColorStatus = {
    "running": "bg-green-600",
    "ended": "bg-red-600",
    "default": "bg-gray-600"
  }
  const { serieId } = useParams();

  const { data, status, error } = useQuery(["serie", serieId], () =>
    getSerieById(serieId)
  );

  if(status === 'loading') return <Loading/>

  if(status === 'error') return <div>Error {error.message}</div>

  return (
    <>
    <Nav/>
    <div className="px-20 py-2">
      <button className="btn btn-sm btn-dark" onClick={() => history.back()}>Back</button>
    </div>
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row relative py-1 px-5">
        <img
          src={data.tvShow.image_path}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <span className={`absolute left-5 top-1 rounded-tl-lg rounded-br-lg text-sm font-medium ${badgeColorStatus[data.tvShow.status.toLowerCase()] ?? badgeColorStatus['default']} text-white py-1 px-2 dark:bg-gray-900`}>
          {data.tvShow.status}
        </span>
        <div>
          <h1 className="text-5xl font-bold">{data.tvShow.name}</h1>
          <p className="py-6">{data.tvShow.description}</p>
          <p className="font-medium">Network: {data.tvShow.network}</p>
          <p className="font-medium">Start Date: {data.tvShow.start_date ? data.tvShow.start_date : 'Date no available'}</p>
          <p className="font-medium">End Date: {data.tvShow.end_date ? data.tvShow.end_date : 'Date not available'}</p>
          <p className="font-medium">Genres: {data.tvShow.genres.length ? data.tvShow.genres.join(", ") : 'Genres not available'}</p>

        </div>
      </div>
    </div>
    </>
  );
};

export default SerieInfo;
