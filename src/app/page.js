"use client";

import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Cursor from "./components/cursor";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Cursor />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-[#121212]">
          <HashLoader color="#36d7b7" loading={loading} size={100} />
        </div>
      ) : (
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
         
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
}
