import { Box, Grid2, Typography } from "@mui/material"

const Categories = () => {
    return(
        <Box component="section" display="flex" flexDirection="column" alignItems="center" pt={5} pb={5}>
            <Typography component="h2" variant="h5" fontWeight={600}>Nuestras categorías</Typography>
            <Typography mt={2} mb={5}>Encuentra el dulce perfecto para cada ocasión</Typography>
            <Grid2 container spacing={2}>
                <Grid2>Card</Grid2>
                <Grid2>Card</Grid2>
                <Grid2>Card</Grid2>
                <Grid2>Card</Grid2>
            </Grid2>
        </Box>
    )
}

export default Categories