import Movie from './Movie';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div className="d-flex ps-5" style={{flexWrap:"wrap"}}>
      {movieList.map((element) => {
        return <Movie {...element} />;
      })}
    </div>
  );
};
export default MovieList;
