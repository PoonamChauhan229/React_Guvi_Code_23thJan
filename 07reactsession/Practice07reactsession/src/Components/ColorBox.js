import Box from "@mui/material/Box";

export const ColorBox = ({ color }) => {
  console.log(color)
  return (
        <Box
          sx={{
            width: "100%",
            height: "55px",
            backgroundColor:color,
            marginTop: "10px",
            borderRadius:"3%"
          }}>
        </Box>

  );

};
