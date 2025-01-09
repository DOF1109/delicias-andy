"use client"
import { Box, Container, Typography, useTheme } from "@mui/material"

const Footer = () => {
  const theme = useTheme()

  return (
    <Box component="footer" sx={{ backgroundColor: theme.black }}>
      <Container component="footer" sx={{ py: 3 }}>
        <Typography>Footer</Typography>
      </Container>
    </Box>
  )
}

export default Footer