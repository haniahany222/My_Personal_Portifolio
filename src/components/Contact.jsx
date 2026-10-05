export default function Contact({ profile }) {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Let's build something fun 🎉</h2>
      <p className="sub">Open to internships, junior roles and freelance work.</p>
      <a className="btn" href={`mailto:${profile.email}`}>✉️ Email me</a>
      <a className="btn o" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a className="btn o" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  );
}
