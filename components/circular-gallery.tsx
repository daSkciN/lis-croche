"use client"

import { useState } from "react"
import "./circular-gallery.css"

const IMAGES = [
  { src: "/images/bolsadiana1.jpeg", alt: "Bolsa Diana", label: "Bolsa Diana" },
  { src: "/images/bolsaminilena2.jpeg", alt: "Bolsa Mini Lena", label: "Bolsa Mini Lena" },
  { src: "/images/bolsapetra3.jpeg", alt: "Bolsa Petra", label: "Bolsa Petra" },
  { src: "/images/bolsaana1.jpeg", alt: "Bolsa Ana", label: "Bolsa Ana" },
  { src: "/images/bolsaaurora2.jpeg", alt: "Bolsa Aurora", label: "Bolsa Aurora" },
  { src: "/images/bolsalena2.jpeg", alt: "Bolsa Lena", label: "Bolsa Lena" },
  { src: "/images/bolsasafira5.jpeg", alt: "Bolsa Safira", label: "Bolsa Safira" },
]

export function CircularGallery() {
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedImages = [...IMAGES, ...IMAGES]

  return (
    <div
      className="circular-gallery"
      aria-label="Galeria animada de destaques"
    >
      <div className="circular-gallery__viewport">
        <div
          className="circular-gallery__track"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedImages.map((image, index) => (
            <figure
              className="circular-gallery__item"
              key={`${image.src}-${index}`}
            >
              <div className="circular-gallery__image-wrap">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="circular-gallery__image"
                  loading={index < IMAGES.length ? "eager" : "lazy"}
                />
              </div>

              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <a
        href="/produtos"
        className="circular-gallery__catalog-button"
      >
        Ver catálogo
      </a>
    </div>
  )
}

export default CircularGallery
