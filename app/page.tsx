import Image from "next/image";

const TOTAL = 26;
const slides = Array.from({ length: TOTAL }, (_, i) => String(i + 1).padStart(2, "0"));

export default function Home() {
  return (
    <main className="stack">
      {slides.map((n, i) => (
        <Image
          key={n}
          className={i === 0 ? "first" : i === TOTAL - 1 ? "last" : ""}
          src={`/slides/${n}.webp`}
          alt={`Proposal kemitraan Doumi — halaman ${i + 1}`}
          width={1600}
          height={1131}
          sizes="100vw"
          priority={i < 2}
          unoptimized
        />
      ))}
      <footer>© 2026 Doumi — PAK D GROUP</footer>
    </main>
  );
}
