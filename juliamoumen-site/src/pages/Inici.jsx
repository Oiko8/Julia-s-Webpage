import { site } from "../data/site.js";

// Placeholder home. The real hero (photo + latest release) comes next.
export default function Inici() {
  return (
    <section className="container" style={{ padding: "var(--space-7) 0" }}>
      <p className="eyebrow">Cantautora catalana</p>
      <h1 style={{ fontSize: "var(--step-hero)" }}>{site.name}</h1>
      <p>El lloc web s'està construint. Aviat, aquí hi haurà la seva última publicació.</p>
    </section>
  );
}