import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ProjectRoom from "./components/ProjectRoom.jsx";
import { PROFILE, PROJECTS } from "./data.js";

export default function App() {
  const [theme, setTheme] = useState(null);
  const [project, setProject] = useState(null);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const dark = theme ? theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(dark ? "light" : "dark");
  };

  const openProject = (p, rect) => {
    setOrigin({ x: rect.left + rect.width / 2 + "px", y: rect.top + rect.height / 2 + "px" });
    setProject(p);
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <>
      <div className="blob" style={{ width: 340, height: 340, background: "var(--p2)", top: -80, left: -80 }} />
      <div className="blob" style={{ width: 300, height: 300, background: "var(--p4)", bottom: "5%", right: -60, animationDelay: "-5s" }} />
      <Navbar name={PROFILE.name} onToggleTheme={toggleTheme} />
      <Hero profile={PROFILE} />
      <Projects projects={PROJECTS} onOpen={openProject} />
      <Skills />
      <Contact profile={PROFILE} />
      <footer>Made with love and a suspicious amount of <code>div</code>s · © {PROFILE.name}</footer>
      <ProjectRoom project={project} open={open} origin={origin} onClose={() => setOpen(false)} />
    </>
  );
}
