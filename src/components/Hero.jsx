import { useEffect, useState } from "react";

function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, c = 0, deleting = false, timer;
    const tick = () => {
      c += deleting ? -1 : 1;
      setText(words[w].slice(0, c));
      if (!deleting && c === words[w].length) { deleting = true; timer = setTimeout(tick, 1400); return; }
      if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
      timer = setTimeout(tick, deleting ? 40 : 90);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

export default function Hero({ profile }) {
  const role = useTyping(profile.roles);
  return (
    <section className="hero">
      <div>
        <span className="hi">Hello, world! 🌍</span>
        <h1>I'm <span className="grad">{profile.name}</span>,<br />I turn your ideas into clean UIs✨</h1>
        <div className="role">{role}</div>
        <div className="edu">🎓 Software Engineering graduate, <b>Faculty of Computer and Information Science, Mansoura University</b></div>
        <p>I'm a front-end developer who builds colorful, responsive,and easy-to-use websites. Below are three projects that I built, each one has its own little world. Go on, click one!</p>
        <a className="btn" href="#work">See my work ✨</a>
        <a className="btn o" href="#contact">Say hi 💌</a>
      </div>
      <div className="ph">
        <span className="st" style={{ top: -10, left: -20 }}>⭐</span>
        <span className="st" style={{ bottom: 10, right: -24, animationDelay: "-2s" }}>💻</span>
        <span className="st" style={{ top: "40%", right: -34, animationDelay: "-1s" }}>🎨</span>
        <img src={profile.photo} alt="Portrait of the developer smiling at an outdoor cafe" />
      </div>
    </section>
  );
}
