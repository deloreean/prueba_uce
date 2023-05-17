
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, startDate, serieStatus }) => {
  const badgeColorStatus = {
    "running": "bg-green-600",
    "ended": "bg-red-600",
    "default": "bg-gray-600"
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-full"  alt="Serie Image" />
      </figure>
      <span className={`absolute left-0 top-0 rounded-tl-xl rounded-br-xl text-xs font-medium ${badgeColorStatus[serieStatus.toLowerCase()] ?? badgeColorStatus['default']} text-white py-1 px-2 dark:bg-gray-900`}>
          {serieStatus}
        </span>
      <div className="card-body">
        <h2 className="card-title text-sm">{name}</h2>
        <p className="text-xs">{startDate}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-sm btn-dark text-xs" to={`series/${id}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
