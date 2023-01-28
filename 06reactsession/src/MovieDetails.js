import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

export const MovieDetails = ({ movieList }) => {
  console.log(useParams());
  const { id } = useParams();
  console.log(movieList);
  const movie = movieList[id];
  const ratingStyle = {
    color: movie.rating > 8 ? "green" : "crimson",
    fontWeight: "bold",
  };
  const navigate = useNavigate();
  return (
    <>
      id is {id}
      <div className="col">
        <div className="card">
          <iframe
            width="100%"
            height="650"
            src={movie.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <div className="card-body m-0 p-0 d-flex justify-content-around">
              <span className="card-title m-0 p-0">
                <b>{movie.name}</b>
              </span>
              <span className="m-0 p-0" style={ratingStyle}>
                ⭐{movie.rating}
              </span>
            </div>

          </div>
        </div>
        <p className="card-text">{movie.summary}</p>
        <span
          style={{ paddingLeft: "10px", fontSize: "50px" }}
          onClick={() => {
            navigate(-1);
          }}>🔙
        </span>

        <Button variant="outlined">Outlined</Button>
      </div>
    </>
  );
};
