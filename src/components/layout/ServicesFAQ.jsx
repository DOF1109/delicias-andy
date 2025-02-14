"use client";

import Image from "next/image";
import cake from "@/../public/assets/images/cake4.jpeg";

const {
  Container,
  Grid2,
  Box,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} = require("@mui/material");
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServicesFAQ = () => {
  const theme = useTheme();

  return (
    <Container component="section">
      <Grid2 container>
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={{ xs: "none", md: "block" }}
          p={4}
        >
          <Image
            src={cake}
            alt="Imágen de preguntas"
            style={{
              borderRadius: "20px",
              height: "100%",
              maxHeight: "600px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} p={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography variant="body2" color={theme.palette.secondary.light}>
              Preguntas frecuentes
            </Typography>
            <Typography component="h2" fontWeight={600} variant="h5">
              Respuestas a tus dudas
            </Typography>
            <Box>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span" fontWeight={600}>
                    ¿Cómo puedo hacer un pedido?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Puedes hacer tu pedido a través de whatsapp, llamándonos o
                    visitandonos directamente.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography component="span" fontWeight={600}>
                    ¿Ofrecen opciones personalizadas?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Sí, podemos personalizar tortas y repostería según tus
                    preferencias.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography component="span" fontWeight={600}>
                    ¿Puedo visitar la pastelería?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    ¡Claro! Nos encantaría recibirte y mostrarte nuestras
                    delicias.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ServicesFAQ;
