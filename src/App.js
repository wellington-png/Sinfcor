import React, { useState, useEffect, useRef } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Container } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StopWatch from "./components/stopwatch";
import ChallengeSection from "./components/ChallengeSection/ChallengeSection";
import ActivitySession from "./components/ActivitySession/ActivitySession";
import UpdateSession from "./components/UpdateSession/UpdateSession";
import SupportersSection from "./components/SupportersSection/SupportersSection";
import AboutsSession from "./components/Abouts/AboutsSession";
import IndividualIntervalsExample from "./components/UpdateSession/UpdateCard";
import HackathonSection from "./components/HackathonSection/HackathonSection";

function App() {
  const [targetDate, setTargetDate] = useState(new Date("2024-08-16T08:00:00"));
  const [isTimerOver, setIsTimerOver] = useState(false);
  const homeRef = useRef(null);
  const noticiasRef = useRef(null);
  const atividadesRef = useRef(null);
  const updateTargetDate = () => {
    const newTargetDate = new Date(Date.now() + 36 * 60 * 60 * 1000);
    setTargetDate(newTargetDate);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        setIsTimerOver(true);
        updateTargetDate();
      } else {
        setIsTimerOver(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>
      <SpeedInsights />
      <Navbar homeRef={homeRef} noticiasRef={noticiasRef} atividadesRef={atividadesRef} />
      <div id='home'>
        <Header />
      </div>
      <Container maxWidth="lg" sx={{ marginBottom: '1rem' }}>
        <StopWatch targetDate={targetDate} isTimerOver={isTimerOver} />
      </Container>
      <AboutsSession />
      <div id='atividades'>
        <ActivitySession />
      </div>
      <ChallengeSection />
      <HackathonSection />
      <SupportersSection />
      <UpdateSession />
      <div id='noticias'>
        <IndividualIntervalsExample />
      </div>
      <Footer />
    </>
  );
}

export default App;
