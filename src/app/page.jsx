import HomeBanner from "@/components/layout/HomeBanner";
import HomeBuy from "@/components/layout/HomeBuy";
import HomeCategories from "@/components/layout/HomeCategories";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <HomeBanner />
      <HomeCategories />
      <HomeBuy />
    </Container>
  );
};

export default HomePage;
