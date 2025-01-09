import { Box, Grid2, Typography } from "@mui/material"
import CustomCard from "../common/CustomCard"
import categoryOne from "@/../public/assets/images/cake1.jpeg"

const Categories = () => {
    return(
        <Box component="section" display="flex" flexDirection="column" alignItems="center" pt={5} pb={5}>
            <Typography component="h2" variant="h5" fontWeight={600}>Nuestras categorías</Typography>
            <Typography mt={2} mb={5} mx={2} textAlign="center">Encuentra el dulce perfecto para cada ocasión</Typography>
            <Grid2 container spacing={3} alignItems="center" justifyContent="center">
                <Grid2 size={{ xs: 10, sm: 5, md: 3 }} height="100%">
                    <CustomCard img={categoryOne} title="Tortas Clásicas" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 5, md: 3 }}>
                    <CustomCard img={categoryOne} title="Repostería Fina" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 5, md: 3 }}>
                    <CustomCard img={categoryOne} title="Masas Dulces" />
                </Grid2>
                <Grid2 size={{ xs: 10, sm: 5, md: 3 }}>
                    <CustomCard img={categoryOne} title="Personalizadas" />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Categories