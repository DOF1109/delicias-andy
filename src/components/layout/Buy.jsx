"use client";

const { Grid2, Box, Typography, useTheme } = require("@mui/material");
import AppleIcon from '@mui/icons-material/Apple';
import CakeIcon from '@mui/icons-material/Cake';
import StyleIcon from '@mui/icons-material/Style';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Buy = () => {
    const theme = useTheme();

    return(
        <Grid2
            component="section"
            container
            spacing={{ xs: 3, md: 6 }}
            p={4}
        >
            <Grid2 size={{ xs: 12, md: 3 }}>
                Imagen
            </Grid2>
            <Grid2 size={{ xs: 12, md: 9 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        mb: 3
                    }}
                >
                    <Typography variant="body2" color={theme.palette.secondary.light}>
                        Delicias que te encantarán
                    </Typography>
                    <Typography 
                        component="h2" 
                        fontWeight={600}
                        my={1}
                        variant="h5" 
                    >
                        !Haz tu pedido hoy!
                    </Typography>
                    <Typography>
                        Descubre la mágia de nuestros sabores y sorprende a tus seres queridos.
                    </Typography>
                </Box>
                <Grid2 container spacing={2}>
                    <Grid2 
                        display="flex"
                        gap={1}
                        size={{ xs: 12, sm: 5 }}
                    >
                        <AppleIcon />
                        <Typography>
                            Ingredientes frescos
                        </Typography>
                    </Grid2>
                    <Grid2 
                        display="flex"
                        gap={1}
                        size={{ xs: 12, sm: 5 }}
                    >
                        <CakeIcon />
                        <Typography>
                            Diseños únicos
                        </Typography>
                    </Grid2>
                    <Grid2 
                        display="flex"
                        gap={1}
                        size={{ xs: 12, sm: 5 }}
                    >
                        <StyleIcon />
                        <Typography>
                            Variedad de opciones
                        </Typography>
                    </Grid2>
                    <Grid2 
                        display="flex"
                        gap={1}
                        size={{ xs: 12, sm: 5 }}
                    >
                        <EmojiEmotionsIcon />
                        <Typography>
                            Atención personalizada
                        </Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}

export default Buy