"use client";

import Image from "next/image";

const {
  Card,
  Typography,
  useTheme,
  alpha,
  Box,
} = require("@mui/material");

const CustomCard = ({ img, title }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Image
        src={img}
        alt="Categoría"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "250px",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          textAlign="center"
          fontWeight={600}
          sx={{
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
            p: 1,
            borderRadius: "8px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

export default CustomCard;
