import Movie from './Movie';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div className="App">
      {movieList.map((element) => {
        return <Movie {...element} />;
      })}
    </div>
  );
};
export default MovieList;
