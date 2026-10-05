import { SKILLS, SKILL_COLORS } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Toolbox 🧰</h2>
      <p className="sub">Things I use to make pixels behave.</p>
      <div className="skills">
        {SKILLS.map((s, i) => <span key={s} style={{ background: SKILL_COLORS[i % SKILL_COLORS.length] }}>{s}</span>)}
      </div>
    </section>
  );
}
