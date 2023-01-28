import Movie from './Movie';
import Muicard from './Muicard';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div className="d-flex ps-5" style={{flexWrap:"wrap"}}>
      {movieList.map((element,index) => {
        // return <Movie {...element} id={index} />;
        return <Muicard {...element} id={index}/>

      })}
    </div>
  );
};
export default MovieList;
