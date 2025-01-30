import ServicesBanner from "@/components/layout/ServicesBanner.jsx";
import ServicesFAQ from "@/components/layout/ServicesFAQ";
import ServicesQuality from "@/components/layout/ServicesQuality";
import { Container } from "@mui/material";

const Services = () => {

  return (
    <>
      <ServicesBanner />
      <ServicesQuality />
      <ServicesFAQ />
    </>
  );
};

export default Services;