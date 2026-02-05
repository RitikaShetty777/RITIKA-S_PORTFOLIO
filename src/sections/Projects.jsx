import { useEffect, useRef } from "react";
import "../styles/projects.css";

/* =====================================
   PROJECT DATA (Reviewer Fix Applied)
   Refactored into scalable array
===================================== */

const projectsData = [
  {
    title: "Abstractive-Summary",
    description:
      "Developed an AI-powered text summarization tool using BART, capable of generating concise, human-readable summaries from long documents.",
    link: "https://ritikashetty777.github.io/Abstractive-Summary/",
  },

  {
    title: "AI-Embedding-of-History",
    description:
      "Lightweight semantic search engine built using embeddings, MongoDB vector search, FastAPI, and frontend UI integration.",
    link: "https://ritikashetty777.github.io/AI-Embedding-of-History/",
  },

  {
    title:
      "BlueMesh-Optimized-Sensor-Network-For-Reliable-Pipeline-Fault-Detection",
    description:
      "AI-driven IoT system for pipeline leak detection using acoustic sensors, YOLOv5 vision and real-time fault alerting.",
    link:
      "https://ritikashetty777.github.io/BlueMesh-Optimized-Sensor-Network-For-Reliable-Pipeline-Fault-Detection-/",
  },

  {
    title: "Skinntel-AI",
    description:
      "System to detect early skin disease patterns using image preprocessing and feature extraction techniques.",
    link: "https://ritikashetty777.github.io/SKINNTEL-AI/",
  },

  {
    title: "MLP_Face_Recognition",
    description:
      "Face recognition system using PCA, LDA and Multi-Layer Perceptron neural networks for feature extraction.",
    link:
      "https://ritikashetty777.github.io/MLP_Face_Recognition_/",
  },

  {
    title: "Cooksy-recipe-app",
    description:
      "Recipe sharing platform allowing users to explore, create and share cooking experiences with community interaction.",
    link: "https://ritikashetty777.github.io/Cooksy-recipe-app/",
  },
];

/* =====================================
   COMPONENT
===================================== */

export default function Projects() {
  const gridRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const total = projectsData.length;
    const step = 360 / total;

    let startX = 0;

    /* ---------- Rotate Function ---------- */
    const rotate = () => {
      grid.style.transform = `rotateY(${-indexRef.current * step}deg)`;
    };

    /* ---------- Click Navigation ---------- */
    const handleClick = (event) => {
      const rect = grid.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const midpoint = rect.width / 2;

      // Left side click → Previous project
      if (clickX < midpoint) {
        indexRef.current =
          (indexRef.current - 1 + total) % total;
      }

      // Right side click → Next project
      else {
        indexRef.current =
          (indexRef.current + 1) % total;
      }

      rotate();
    };

    /* ---------- Swipe / Drag Support ---------- */
    const handlePointerDown = (event) => {
      startX = event.clientX;
    };

    const handlePointerUp = (event) => {
      const diff = event.clientX - startX;

      // Ignore tiny accidental drags
      if (Math.abs(diff) < 40) return;

      // Swipe right → Previous
      if (diff > 0) {
        indexRef.current =
          (indexRef.current - 1 + total) % total;
      }

      // Swipe left → Next
      else {
        indexRef.current =
          (indexRef.current + 1) % total;
      }

      rotate();
    };

    grid.addEventListener("click", handleClick);
    grid.addEventListener("pointerdown", handlePointerDown);
    grid.addEventListener("pointerup", handlePointerUp);

    return () => {
      grid.removeEventListener("click", handleClick);
      grid.removeEventListener("pointerdown", handlePointerDown);
      grid.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <section aria-label="Projects">
      <div className="carousel"></div>

      <h2 className="project-title">Projects</h2>

      <div className="projects-grid" ref={gridRef}>
        {projectsData.map((project, index) => (
          <article className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
