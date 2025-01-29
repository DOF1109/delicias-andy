"use client"

import CustomItem from "../common/CustomItem"

const { Grid2, Box, Typography } = require("@mui/material")
import CakeIcon from "@mui/icons-material/Cake";
import CookieIcon from '@mui/icons-material/Cookie';
import BrushIcon from '@mui/icons-material/Brush';

const ServicesQuality = () => {
    return (
        <Grid2
            component="section"
            container
        >
            <Grid2 size={{xs:12, md:6}}>
                Imagen
            </Grid2>
            <Grid2 size={{xs:12, md:6}}>
                <Box>
                    <Typography>
                        Calidad y sabor
                    </Typography>
                    <Typography>
                        Nuestro compromiso con la calidad
                    </Typography>
                    <Typography>
                        En Delicias Andy, cada producto es una obra de arte. Utilizamos ingredientes de la más alta calidad para crear experiencias inolvidables.
                    </Typography>
                    <CustomItem 
                        icon={<CakeIcon />}
                        title="Tortas personalizadas"
                        description="Diseña la torta perfecta para cualquier ocasión especial"
                    />
                    <CustomItem 
                        icon={<CookieIcon />}
                        title="Masas dulces"
                        description=""
                    />
                    <CustomItem 
                        icon={<BrushIcon />}
                        title="Repostería creativa"
                        description="Descubre nuestra repostería que combina creatividad y sabor"
                    />
                </Box>
            </Grid2>
        </Grid2>
    )
}

export default ServicesQuality