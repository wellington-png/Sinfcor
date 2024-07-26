import { Container } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cronometro from "./components/cronometro";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="lg" sx={{ marginBottom: '1rem'}}>
        <Cronometro targetDate="2024-08-15T19:00:00" />
      </Container>
      <ChallengeSection />
      <PartnersSection />
      <Footer />
    </>
  );
}

export default App;
