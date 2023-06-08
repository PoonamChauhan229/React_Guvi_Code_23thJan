import Movie from './Movie';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div className="App">
      {movieList.map((element,index) => {
        return <Movie {...element} id={index}/>;
      })}
    </div>
  );
};
export default MovieList;
