import { useEffect, useRef } from "react";
import "../styles/projects.css";

export default function Projects() {
  const gridRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
  const grid = gridRef.current;
  if (!grid) return;

  const cards = grid.querySelectorAll(".project-card");
  const total = cards.length;
  if (!total) return;

  const step = 360 / total;

  const rotate = () => {
    grid.style.transform = `rotateY(${-indexRef.current * step}deg)`;
  };

  const handleClick = (e) => {
    const rect = grid.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    // click left half → rotate left
    if (clickX < rect.width / 2) {
      indexRef.current =
        (indexRef.current - 1 + total) % total;
    } 
    // click right half → rotate right
    else {
      indexRef.current =
        (indexRef.current + 1) % total;
    }

    rotate();
  };

  grid.addEventListener("click", handleClick);
  return () => grid.removeEventListener("click", handleClick);
}, []);


  return (
    <section aria-label="Projects">
      <div className="carousel"></div>

      <h2 className="project-title">Projects</h2>

      <div className="projects-grid" ref={gridRef}>
        <article className="project-card">
          <h3>Abstractive-Summary</h3>
          <p>
            Developed an AI-powered text summarization tool using BART, capable of generating concise, human-readable summaries from long documents. Implemented a Gradio interface for input and output, and fine-tuned model parameters to produce coherent, abstractive summaries while preserving core insights.
          </p>
          <a
            href="https://ritikashetty777.github.io/Abstractive-Summary/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>

        <article className="project-card">
          <h3>AI-Embedding-of-History</h3>
          <p>
            🧠 AI Semantic Search on History Articles A lightweight end-to-end semantic search engine built using web scraping → AI summaries → embeddings → MongoDB vector search → FastAPI → simple frontend UI.
          </p>
          <a
            href="https://ritikashetty777.github.io/AI-Embedding-of-History/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>

        <article className="project-card">
          <h3>BlueMesh-Optimized-Sensor-Network-For-Reliable-Pipeline-Fault-Detection</h3>
          <p>
            AI-driven IoT system for real-time water pipeline leak and crack detection. Uses acoustic, flow, and pressure sensors with YOLOv5 vision and FFT analysis on Raspberry Pi. Faults are mapped via GIS and alerts are sent through LoRa/GSM and Telegram for fast, efficient maintenance.
          </p>
          <a
            href="https://ritikashetty777.github.io/BlueMesh-Optimized-Sensor-Network-For-Reliable-Pipeline-Fault-Detection-/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>

        <article className="project-card">
          <h3>Skinntel-AI</h3>
          <p>
            Built a system to detect early skin disease patterns using image
            preprocessing and feature extraction techniques. Improved
            diagnostic accuracy through standardized grayscale inputs.
          </p>
          <a
            href="https://ritikashetty777.github.io/SKINNTEL-AI/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>

        <article className="project-card">
          <h3>MLP_Face_Recognition</h3>
          <p>
            This project implements a Face Recognition system using a Multi-Layer Perceptron (MLP) neural network combined with Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA) for feature extraction.
          </p>
          <a
            href="https://ritikashetty777.github.io/MLP_Face_Recognition_/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>

        <article className="project-card">
          <h3>Cooksy-recipe-app</h3>
          <p>
            Welcome to Cooksy — where every recipe tells a story! Whether you're a home cook or a passionate foodie, Cooksy provides the perfect platform to explore, create, and share recipes.
          </p>
          <a
            href="https://ritikashetty777.github.io/Cooksy-recipe-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View GitHub Repository
          </a>
        </article>
      </div>
    </section>
  );
}
