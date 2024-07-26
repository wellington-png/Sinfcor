import { Container } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cronometro from "./components/cronometro";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="lg" sx={{ marginBottom: '1rem'}}>
        <Cronometro targetDate="2024-08-15T19:00:00" />
      </Container>
      <ChallengeSection />
      <Container maxWidth="lg" sx={{ height: '80vh'}}>
      </Container>
      <Footer />
    </>
  );
}

export default App;
