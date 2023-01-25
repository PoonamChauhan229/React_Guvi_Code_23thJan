import Movie from './Movie';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 ps-5 container-fluid mt-1">
      {movieList.map((element) => {
        return <Movie {...element} />;
      })}
    </div>
  );
};
export default MovieList;
