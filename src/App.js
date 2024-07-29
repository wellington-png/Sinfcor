import { Container } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cronometro from "./components/cronometro";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import ActivitySession from "./components/ActivitySession/ActivitySession";
import UpdateSession from "./components/UpdateSession/UpdateSession";
import SupportersSection from "./components/SupportersSection/SupportersSection";


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="lg" sx={{ marginBottom: '1rem'}}>
        <Cronometro targetDate="2024-08-15T19:00:00" />
      </Container>
      <ActivitySession />
      <ChallengeSection />
      <SupportersSection />
      <PartnersSection />
      <UpdateSession />
      <Footer />
    </>
  );
}

export default App;
