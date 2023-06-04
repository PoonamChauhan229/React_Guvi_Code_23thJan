export const ColorBox = ({color}) => {
  console.log(color)
  const ColorBoxStyle = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px"
  };
  return (
    <div style={ColorBoxStyle}>{color}</div>
  );

};
