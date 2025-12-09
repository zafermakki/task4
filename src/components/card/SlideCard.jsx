import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function SlideCard({ active, item, offset, isMobile, isTablet }) {
  const baseZ = 100;
  const computedZ = active ? 1000 : baseZ - Math.abs(offset);

  const cardSize = isMobile ? 180 : isTablet ? 210 : 240;
  const iconSize = isMobile ? 48 : isTablet ? 56 : 64;

  const leftPosition = isMobile ? "31%" : isTablet ? "37%" : "35%";

  const Icon = item.icon;

  return (
    <motion.div
      animate={{
        x: offset * 150,
        rotate: offset * 18 + 24,
        scale: active ? 1.15 : 0.92,
        opacity: active ? 1 : 0.85,
      }}
      transition={{ type: "spring", stiffness: 130, damping: 14 }}
      style={{
        width: cardSize,
        height: cardSize,
        borderRadius: 32,
        position: "absolute",
        left: leftPosition,
        top: "25%",
        transform: "translate(-50%, -50%)",
        background: active
          ? "linear-gradient(145deg,#021802,#0c4f0c,#15c115,#3eff3e)"
          : "linear-gradient(145deg,#4E1F00,#A04000)",
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
      <Icon sx={{ fontSize: iconSize, color: "white" }} />

      {active && (
        <>
          <Typography color="white" mt={2} fontWeight="700">
            {item.label}
          </Typography>
          <Typography color="white" mt={1} fontSize={"10px"}>
            {item.more}
          </Typography>
        </>
      )}
    </motion.div>
  );
}
