"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Background from "../components/Background/Background";
import About from "../components/About/About";

import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import {
  MouseGlow,
  
} from "../UI";

import { useState } from "react";

export default function Home() {


  return (
    <main className="bg-[#050816] min-h-screen overflow-x-hidden">
      <Navbar />
      <MouseGlow />

      <Background />

      

      <Hero />

      {/* Temporary Sections */}

      
      <Projects />
      <Skills />


      <About />

      

    </main>
  );
}