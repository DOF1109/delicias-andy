"use client"

import { Box, Typography } from "@mui/material"

const CustomItem = ({icon, title, description}) => {
    return (
        <Box>
            {icon}
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
        </Box>
    )
}

export default CustomItem