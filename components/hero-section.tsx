"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappLink } from "@/lib/site";

export function LisCrocheSticker() {
  return (
    <motion.div
      className="relative mb-2 inline-block cursor-grab active:cursor-grabbing select-none"
      initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
      animate={{ scale: 1, rotate: -3, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      whileTap={{ scale: 0.95, rotate: -5 }}
      drag
      dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
      dragElastic={0.1}
    >
      {/* Borda do adesivo + Sombra de elevação */}
      <div className="rounded-full bg-white p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.18)]">
        <Image
          src="/images/lis-croche-logo.png"
          alt="Lis Crochê — Feito com Amor, Feito à Mão"
          width={440}
          height={440}
          priority
          className="h-auto w-44 pointer-events-none md:w-60"
        />
      </div>
    </motion.div>
  );
}

const WHATS_HREF = whatsappLink(
  "Olá! Vim pelo site da Lis Crochê e gostaria de saber mais sobre as peças.",
);

const IMAGES = [
  "/images/bolsaana1.jpeg",
  "/images/bolsaana2.jpeg",
  "/images/bolsaana3.jpeg",
  "/images/bolsaaurora1.jpeg",
  "/images/bolsaaurora2.jpeg",
  "/images/bolsaaurora3.jpeg",
  "/images/bolsalena1.jpeg",
  "/images/bolsalena2.jpeg",
  "/images/bolsalena3.jpeg",
  "/images/bolsasafira3.jpeg",
  "/images/bolsasafira5.jpeg",
  "/images/bolsaminilena1.jpeg",
  "/images/bolsaminilena2.jpeg",
  "/images/bolsapetra1.jpeg",
  "/images/bolsapetra2.jpeg",
  "/images/bolsapetra3.jpeg",
];

const squareData = IMAGES.map((src, id) => ({ id, src }));

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

function ShuffleGrid() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(squareData);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(shuffle(squareData));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    timeoutRef.current = setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="grid h-[380px] grid-cols-4 grid-rows-4 gap-1.5 md:h-[470px]"
      style={{ overflowAnchor: "none" }}
    >
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout="position"
          transition={{ duration: 1.5, type: "spring" }}
          className="h-full w-full rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${sq.src})` }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-20"
      style={{ overflowAnchor: "none" }}
    >
      <div className="flex flex-col items-start">
        <LisCrocheSticker />
        <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent md:text-sm">
          Peças exclusivas feitas à mão
        </span>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
          Bolsas e acessórios de crochê
        </h1>
        <p className="my-5 max-w-md text-pretty leading-relaxed text-muted-foreground md:my-6 md:text-lg">
          Feito para destacar o seu look. Encomende a sua peça favorita.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={WHATS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <WhatsAppIcon className="size-4" />
            Fazer pedido no WhatsApp
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
}
