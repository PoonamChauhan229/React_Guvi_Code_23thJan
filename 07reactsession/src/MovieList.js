import Movie from './Movie';

const MovieList = ({movieList}) => {
  // console.log(movieList)
  return (
    <div style={{display:"flex",flexWrap:"wrap",margin:"auto",
    width: "89%",padding: "10px"}}>
      {movieList.map((element,index) => {
        console.log(element)
        return <Movie {...element} id={index}  movieAvatar={element}/>;
        })}
    </div>
  );
};
export default MovieList;
