import { Container } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Cronometro from "./components/cronometro";


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth="lg" sx={{ marginBottom: '1rem'}}>
        <Cronometro targetDate="2024-10-20T19:00:00" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
