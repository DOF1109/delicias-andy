"use client"

import { Box, Grid2, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import cake1 from "@/../public/assets/images/cake1.jpeg"

const Services = () => {
    const theme = useTheme()

    return (
        <Box
            component="section"
            sx={{
                background: theme.palette.primary.main,
                p: 2,
                position: "relative"
            }}
        >
            <Image
                src={cake1}
                alt="Torta de fondo"
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    position: "absolute"
                }}
            />
            <Typography>
                Explora nuestra variedad de tortas, masas dulces y repostería. Siente el sabor y la calidez en cada bocado.
            </Typography>
            <Grid2 container>
                <Grid2>
                    <Typography>+10</Typography>
                    <Typography>Años de experiencia</Typography>
                </Grid2>
                <Grid2>
                    <Typography>+50</Typography>
                    <Typography>Productos ofrecidos</Typography>
                </Grid2>
                <Grid2>
                    <Typography>+1.000</Typography>
                    <Typography>Clientes satisfechos</Typography>
                </Grid2>
                <Grid2>
                    <Typography>+500</Typography>
                    <Typography>Pedidos personalizados</Typography>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Services;