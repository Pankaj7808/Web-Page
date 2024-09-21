import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImageCards from "../components/ImageCard";
import VerticalCardList from "../components/VerticalCard";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
      <header>
        <Navbar />
        <Hero />
      </header>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "64px" }}
      >
        <ImageCards />
        <VerticalCardList />
        <CardGrid />
        <Footer/>
      </section>
    </div>
  );
}

export default Home;
