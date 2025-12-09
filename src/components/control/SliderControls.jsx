import { IconButton, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SliderControls({ prevSlide, nextSlide }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 3,
      }}
    >
      <IconButton
        onClick={prevSlide}
        sx={{
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
          width: 50,
          height: 50,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
          width: 50,
          height: 50,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
