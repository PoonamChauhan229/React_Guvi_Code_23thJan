import { useState } from 'react';

const Counter = () => {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  
  return (
    <span className='counterContainer'>
      <button 
       className='likeButton'
      onClick={() => {
        setLike(like + 1);
      }}>👍{like}</button>

      <button
       className='dislikeButton'
      onClick={() => {
        setdisLike(dislike + 1);
      }}>👎{dislike}</button>
    </span>
  );
};
export default Counter;