export default function Navbar({ name, onToggleTheme }) {
  return (
    <nav>
      <b>👋 {name}</b>
      <div>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href="#" aria-label="Toggle theme" onClick={(e) => { e.preventDefault(); onToggleTheme(); }}>🌓</a>
      </div>
    </nav>
  );
}
