import { Box, CircularProgress } from "@mui/material";

function Loading(props) {
   const { height } = { ...props };
   return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: height !== undefined ? height : "200px" }}>
         <CircularProgress />
      </Box>
   );
}

export default Loading;
