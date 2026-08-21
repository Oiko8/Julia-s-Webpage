import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header.jsx";

import Inici from "./pages/Inici.jsx";
import Bio from "./pages/Bio.jsx";
import Musica from "./pages/Musica.jsx";
import Concerts from "./pages/Concerts.jsx";
import Videos from "./pages/Videos.jsx";
import Versions from "./pages/Versions.jsx";
import Contacte from "./pages/Contacte.jsx";

// The shared shell: header on top, the active page in the middle.
// The Footer will slot in here in the next step.
function Layout() {
  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}

// Shown for any URL that doesn't match a route.
function NotFound() {
  return (
    <section className="container" style={{ padding: "var(--space-7) 0" }}>
      <p className="eyebrow">Error 404</p>
      <h1>Pàgina no trobada</h1>
      <p>Aquesta pàgina no existeix. <Link to="/">Torna a l'inici</Link>.</p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inici />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/contacte" element={<Contacte />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}