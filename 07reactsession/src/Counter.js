import { useState } from 'react';

const Counter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  
  const counterStyle={
    padding:"3px",
    margin:"2px",
    fontSize:"18px",
    backgroundColor:"transparent",
    border:"0px"
  }

  return (
    <>
      <button style={counterStyle} onClick={() => {
        setLike(like + 1);
      }}>👍{like}</button>

      <button style={counterStyle} onClick={() => {
        setdisLike(dislike + 1);
      }}>👎{dislike}</button>
    </>
  );
};
export default Counter;