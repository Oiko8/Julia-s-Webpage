import { site } from "./data/site.js";

// Temporary placeholder so we can confirm React is working end-to-end.
// We'll replace this with the real routed layout in the next step.
export default function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>{site.name}</h1>
      <p>Site under construction ✨</p>
    </main>
  );
}