"use client";

import { Box, Typography } from "@mui/material";

const CustomItem = ({ icon, title, description }) => {
  return (
    <Box>
      {icon}
      <Typography fontWeight={600}>{title}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default CustomItem;
