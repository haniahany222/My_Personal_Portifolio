import { useEffect, useMemo, useRef } from "react";

export default function ProjectRoom({ project, open, origin, onClose }) {
  const roomRef = useRef(null);
  const videoRef = useRef(null);

  // Random floating emojis, regenerated for each project
  const floaters = useMemo(() => {
    if (!project) return [];
    return Array.from({ length: 16 }, (_, i) => ({
      icon: project.floaters[i % project.floaters.length],
      left: Math.random() * 100,
      size: 22 + Math.random() * 28,
      duration: 8 + Math.random() * 10,
      delay: -Math.random() * 12,
    }));
  }, [project]);

  // Lock page scroll, play/pause video, close on Esc
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const v = videoRef.current;
    if (open) {
      roomRef.current?.scrollTo(0, 0);
      const t = setTimeout(() => v?.play().catch(() => {}), 700);
      return () => clearTimeout(t);
    }
    v?.pause();
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      id="room"
      ref={roomRef}
      className={`${project ? `t-${project.id}` : ""} ${open ? "on" : ""}`}
      style={{ "--x": origin.x, "--y": origin.y }}
    >
      {project && (
        <>
          <div className="fx">
            {floaters.map((f, i) => (
              <i key={i} style={{ left: `${f.left}%`, fontSize: f.size, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s`, opacity: 0.6 }}>{f.icon}</i>
            ))}
          </div>
          <div className="rin">
            <button className="back" onClick={onClose}>← Back to portfolio</button>
            <h1 className="f">{project.emoji} {project.title}</h1>
            <div className="tag">{project.kind}</div>
            <p>{project.description}</p>
            <div className="frame">
              <video ref={videoRef} src={project.video} controls playsInline loop muted preload="metadata" />
            </div>
            <div>{project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <div className="feat">{project.features.map((f) => <div key={f}>{f}</div>)}</div>
          </div>
        </>
      )}
    </div>
  );
}
