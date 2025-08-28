import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FeedbackRewards = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [progress, setProgress] = useState(50);
  const xpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = '';
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
  }, []);

  const canSubmit = rating > 0 && feedback.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;
    // XP animation
    if (xpRef.current) {
      xpRef.current.style.opacity = '1';
      xpRef.current.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        if (!xpRef.current) return;
        xpRef.current.style.opacity = '0';
        xpRef.current.style.transform = 'translateY(8px)';
      }, 600);
    }
    setProgress(p => Math.min(p + 20, 100));
    setTimeout(() => navigate('/'), 1600);
  };

  return (
    <main className="container" style={{ maxWidth: 900, margin: '0 auto', padding: 32, fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif', color: '#333' }}>
      <style>
        {`
          :root { --border:#EAEAEA; --blue-1:#2F6BAE; --blue-2:#5A8DC8; --green:#4CAF50; --gradient: linear-gradient(135deg, var(--blue-1), var(--blue-2)); }
          .title{ font-size:28px; font-weight:700; margin-bottom:24px }
          .card{ border:1px solid var(--border); border-radius:12px; background:#fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding:24px }
          .stars{ display:flex; gap:10px; font-size:36px; cursor:pointer }
          .star{ color:#D1D5DB; transition: color .15s ease, transform .15s ease }
          .star.filled{ color:#FFD700 }
          .star:hover{ transform: translateY(-1px) }
          .textarea{ width:100%; border:1px solid var(--border); border-radius:10px; padding:12px; min-height:120px; resize:vertical; outline:none; font:inherit }
          .textarea:focus{ border-color: var(--blue-1); box-shadow: 0 0 0 4px rgba(47,107,174,0.08) }
          .btn-primary{ background: var(--gradient); color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:800; cursor:pointer; box-shadow: 0 8px 20px rgba(47,107,174,0.25) }
          .btn-primary:disabled{ opacity:.6; cursor:not-allowed }
          .rewards{ display:grid; gap:24px; margin-top:24px }
          .progress{ border:1px solid var(--border); border-radius:12px; padding:24px; background:#fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05) }
          .bar{ height:12px; border-radius:999px; background:#F2F4F8; overflow:hidden }
          .fill{ height:100%; width:0; background: var(--green); transition: width .6s ease }
          .labels{ display:flex; justify-content:space-between; margin-top:8px; color:#666; font-size:13px }
          .badge-card{ display:flex; align-items:center; gap:16px; border:1px solid var(--border); border-radius:12px; padding:24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05) }
          .badge{ width:60px; height:60px; border-radius:14px; background: var(--gradient); display:grid; place-items:center; color:#fff; font-weight:800; font-size:20px; box-shadow: 0 6px 18px rgba(47,107,174,0.25) }
          .xp{ position:absolute; pointer-events:none; color: var(--green); font-weight:800; opacity:0; transform: translateY(8px); transition: transform .6s ease, opacity .6s ease }
        `}
      </style>

      <h1 className="title">How was your session with Sarah Chen?</h1>

      <section className="card">
        <h3 style={{ marginTop: 0 }}>Rate Your Experience</h3>
        <div className="stars" aria-label="5-star rating">
          {[1,2,3,4,5].map(v => (
            <span
              key={v}
              className={`star ${ (hover || rating) >= v ? 'filled' : '' }`}
              onMouseEnter={() => setHover(v)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(v)}
            >
              ★
            </span>
          ))}
        </div>
        <div style={{ height: 8 }} />
        <label htmlFor="feedback" style={{ color: '#666', fontSize: 14 }}>Feedback</label>
        <textarea id="feedback" className="textarea" placeholder="What was the most valuable takeaway from your session? (This feedback is shared with your mentor)" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </section>

      <section className="rewards">
        <div className="progress">
          <h3 style={{ margin: 0, marginBottom: 6 }}>You've Earned Rewards!</h3>
          <div style={{ position: 'relative' }}>
            <div ref={xpRef} className="xp">+50 XP</div>
            <div className="bar">
              <div className="fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="labels">
            <span>Novice</span><span>{progress}%</span><span>Explorer</span>
          </div>
        </div>

        <div className="badge-card">
          <div className="badge" aria-hidden>★</div>
          <div>
            <div style={{ fontWeight: 700 }}>First Connection</div>
            <div style={{ color: '#666', fontSize: 14 }}>Keep booking sessions to unlock more badges and level up your profile!</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button className="btn-primary" disabled={!canSubmit} onClick={submit}>Submit & Claim Rewards</button>
        </div>
      </section>
    </main>
  );
};

export default FeedbackRewards; 