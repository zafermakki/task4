import React, { useState } from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import SlideCard from "./components/card/SlideCard";
import SliderControls from "./components/control/SliderControls";
import { slidesData } from "./components/data/SlidesData";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1024px)");

  const [activeIndex, setActiveIndex] = useState(1);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#0f0f0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          height: 380,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {slidesData.map((item, i) => {
          const offset = i - activeIndex;
          const total = slidesData.length;

          let wrappedOffset = offset;
          if (offset > total / 2) wrappedOffset = offset - total;
          if (offset < -total / 2) wrappedOffset = offset + total;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(i)}
              style={{ position: "absolute", inset: 0 }}
            >
              <SlideCard
                item={item}
                active={activeIndex === i}
                offset={wrappedOffset}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </div>
          );
        })}
      </Box>

      <SliderControls prevSlide={prevSlide} nextSlide={nextSlide} />
    </Box>
  );
}
