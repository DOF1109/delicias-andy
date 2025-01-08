"use client"

import Image from "next/image"

const { Card, CardMedia, CardContent, Typography, useTheme } = require("@mui/material")

const CustomCard = ({img, title}) => {
    const theme = useTheme()

    return(
        <Card>
            <Image
                src={img}
                alt="Categoría"
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                }}
            />
            <CardContent sx={{backgroundColor: theme.palette.primary.main, p: 3}}>
                <Typography 
                    variant="h6"
                    textAlign="center"
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CustomCard