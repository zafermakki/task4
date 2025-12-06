import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


import HeadsetIcon from "@mui/icons-material/Headset";
import PersonIcon from "@mui/icons-material/Person";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";

const slidesData = [
  { id: 1, label: "VOICE MODE",more: "READ MORE", icon: <HeadsetIcon sx={{ fontSize: 64 }} /> },
  { id: 2, label: "USER MODE",more: "READ MORE" ,icon: <PersonIcon sx={{ fontSize: 64 }} /> },
  { id: 3, label: "SUPPORT", more: "READ MORE",icon: <SupportAgentIcon sx={{ fontSize: 64 }}/>},
  { id: 4, label: "CALL US", more: "READ MORE",icon: <CallIcon sx={{ fontSize: 64 }} /> },
  { id: 5, label: "SETTINGS",more: "READ MORE" ,icon: <SettingsIcon sx={{ fontSize: 64 }} /> },
];


const SlideCard = ({ active, item, offset }) => {
  const baseZ = 100;
  const computedZ = active ? 1000 : baseZ - Math.abs(offset);

  return (
    <motion.div
      animate={{
        x: offset * 150,
        rotate: offset * 18 + 24,
        scale: active ? 1.18 : 0.92,
        opacity: active ? 1 : 0.85,
      }}
      transition={{ type: "spring", stiffness: 130, damping: 14 }}
      style={{
        width: 240,
        height: 240,
        borderRadius: 32,
        position: "absolute",
        left: "36%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: active
          ? "linear-gradient(145deg, #021802 0%, #0c4f0c 40%, #15c115 80%, #3eff3e 100%)"
          : "linear-gradient(145deg, #4E1F00 0%, #A04000 100%)",
        border: "2px solid rgba(255,255,255,0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.45)",
        cursor: "pointer",
        zIndex: computedZ,
        userSelect: "none",
      }}
    >
      <Typography fontSize={64}>{item.icon}</Typography>

      {/* إظهار النصوص فقط إذا كانت البطاقة نشطة */}
      {active && (
        <>
          <Typography color="white" mt={2} fontWeight="700">
            {item.label}
          </Typography>
          <Typography color="white" mt={2} fontSize={"10px"}>
            {item.more}
          </Typography>
        </>
      )}
    </motion.div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(2);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

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
              />
            </div>
          );
        })}
      </Box>

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
    </Box>
  );
}
