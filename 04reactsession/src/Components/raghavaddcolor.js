import { useState } from 'react';
import { ColorBox } from './ColorBox';

const AddColor = () => {
  const [color, setColor] = useState("");
  const inputstyle = {
    backgroundColor: color
  };

  const initialcolorList = ["red", "orange", "yellow"];
  const [colorList, setcolorList] = useState(initialcolorList);
  return (
    <div>
      <input style={inputstyle} type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }} />

      <button onClick={() => {
        setcolorList([...colorList, color]);
      }}>Add Color</button>
      {colorList.map((element) => {
        return <ColorBox color={element} />;
      })}
    </div>
  );
};
export default AddColor;