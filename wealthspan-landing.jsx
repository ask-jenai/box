import React, { useState } from "react";

/*
  WEALTHSPAN STRENGTH — Landing page mockup
  Brand: Bebas Neue display, black + gold (#C9A227), SVG icons only.
  Signature concept: the "capacity account." Strength as deposits, decline as withdrawals.
  Body + label face: Work Sans. Display: Bebas Neue.
  Testimonials + non-GTS pricing are placeholders pending Denis's real numbers.
*/

const gold = "#C9A227";
const goldDim = "#8F7519";
const ink = "#0B0B0C";
const panel = "#141416";
const bone = "#EDEAE2";
const gray = "#9B978E";

// ---------- SVG icons ----------
const IconBarbell = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="square">
    <line x1="2" y1="12" x2="22" y2="12" />
    <rect x="4" y="7" width="2.6" height="10" fill={gold} stroke="none" />
    <rect x="17.4" y="7" width="2.6" height="10" fill={gold} stroke="none" />
    <rect x="7.4" y="9" width="2" height="6" fill={goldDim} stroke="none" />
    <rect x="14.6" y="9" width="2" height="6" fill={goldDim} stroke="none" />
  </svg>
);

const IconTarget = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill={gold} stroke="none" />
  </svg>
);

const IconOperator = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="square">
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    <line x1="12" y1="2" x2="12" y2="4.6" stroke={goldDim} />
  </svg>
);

const IconLedger = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.6" strokeLinecap="square">
    <rect x="4" y="3" width="16" height="18" />
    <line x1="8" y1="8" x2="16" y2="8" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="8" y1="16" x2="13" y2="16" />
  </svg>
);

// ---------- Small building blocks ----------
const Eyebrow = ({ children }) => <div className="ws-eyebrow">{children}</div>;

const Section = ({ id, children, tint }) => (
  <section id={id} className={`ws-section ${tint ? "ws-tint" : ""}`}>
    <div className="ws-wrap">{children}</div>
  </section>
);

// ---------- Page ----------
export default function WealthspanLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });
  const [sent, setSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (e) => { e.preventDefault(); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);
  const setField = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submitForm = async () => {
    if (!form.name || !form.email || !form.area) return;
    try {
      await fetch("https://formspree.io/f/xkjnkvav", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch (err) {
      setSent(true);
    }
  };

  const faqs = [
    {
      q: "I've never touched a barbell.",
      a: "Most clients haven't. You start with what your gym has, machines included, and progress toward the barbell as your technique and confidence build. Denis coaches the first sessions with you, in person in Montreal or over video anywhere else.",
    },
    {
      q: "Am I too old to start?",
      a: "Denis guides and coaches clients into their late seventies. The loading is programmed to where you are now, then raised in small increments. The risk sits in staying weak, not in training.",
    },
    {
      q: "I don't have time for this.",
      a: "Then you'll need it to take care of your ill conditions over time. Two to three sessions a week, roughly 75 minutes each, on a program you don't have to think about. You walk in, the sheet tells you the lifts, the weight, and the rest. The sales work folds into the job you already do.",
    },
    {
      q: "Is this a course?",
      a: "No. It's a self-affirmative journey for a better existence. You get a weekly call with Denis, a program that changes as you change, and someone who notices when you drift. Nothing here is a video library you'll abandon in week three.",
    },
    {
      q: "Do we start with the business or the body?",
      a: "You choose. Some clients want the pipeline fixed first, some want to get under the bar. The first call establishes your targets on both fronts, then we sequence from there. Either becomes the CAUSE for the EFFECTS.",
    },
    {
      q: "What do you actually track?",
      a: "Progress on the four lifts. Protein intake. Sleep. Prospecting activity, conversations opened, and pace against your quota. Numbers don't lie, on the platform or in the pipeline.",
    },
  ];

  return (
    <div className="ws-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .ws-root {
          background: ${ink};
          color: ${bone};
          font-family: 'Work Sans', sans-serif;
          font-size: 17px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .ws-wrap { max-width: 1060px; margin: 0 auto; padding: 0 24px; }

        .ws-hero { position: relative; min-height: 86vh; display: flex; align-items: center; overflow: hidden; }
        .ws-hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .ws-hero-grad {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(11,11,12,0.95) 0%, rgba(11,11,12,0.85) 28%, rgba(11,11,12,0.35) 52%, rgba(11,11,12,0) 72%),
                      linear-gradient(0deg, rgba(11,11,12,0.85) 0%, rgba(11,11,12,0) 24%);
        }
        .ws-hero-content { position: relative; z-index: 1; width: 100%; padding-top: 96px; padding-bottom: 96px; }
        .ws-section { padding: 88px 0; border-top: 1px solid #1E1E20; }
        .ws-tint { background: ${panel}; }

        .ws-display {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          letter-spacing: 0.015em;
          line-height: 0.95;
          color: ${bone};
          margin: 0;
        }
        .ws-eyebrow {
          font-family: 'Work Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.22em;
          color: ${gold};
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .ws-mono { font-family: 'Work Sans', sans-serif; }
        .ws-muted { color: ${gray}; }

        .ws-btn {
          display: inline-block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.08em;
          padding: 14px 34px;
          background: ${gold};
          color: ${ink};
          text-decoration: none;
          border: 1px solid ${gold};
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .ws-btn:hover { background: transparent; color: ${gold}; }
        .ws-btn:focus-visible { outline: 2px solid ${bone}; outline-offset: 3px; }
        .ws-btn-ghost {
          background: transparent;
          color: ${bone};
          border: 1px solid #3A3A3C;
        }
        .ws-btn-ghost:hover { border-color: ${gold}; color: ${gold}; }

        .ws-soc { color: ${gray}; display: inline-flex; padding: 4px; transition: color 0.15s ease; }
        .ws-soc:hover { color: ${gold}; }
        .ws-soc:focus-visible { outline: 2px solid ${gold}; outline-offset: 2px; }

        .ws-form { max-width: 520px; margin: 44px auto 0; text-align: left; }
        .ws-form label { display: block; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: ${gray}; margin: 22px 0 8px; }
        .ws-input {
          width: 100%; background: ${ink}; border: 1px solid #3A3A3C; color: ${bone};
          font-family: 'Work Sans', sans-serif; font-size: 16px; padding: 12px 14px; box-sizing: border-box;
        }
        .ws-input:focus { outline: none; border-color: ${gold}; }
        .ws-radio { display: flex; align-items: baseline; gap: 10px; margin: 10px 0; font-size: 15.5px; color: ${bone}; cursor: pointer; text-transform: none; letter-spacing: 0; }
        .ws-radio input { accent-color: ${gold}; }
        .ws-radio span em { color: ${gray}; font-style: normal; }

        .ws-modal { position: fixed; inset: 0; z-index: 100; }
        .ws-modal-backdrop { position: absolute; inset: 0; background: rgba(11,11,12,0.82); }
        .ws-modal-panel {
          position: relative; max-width: 600px; margin: 5vh auto; max-height: 90vh; overflow-y: auto;
          background: ${panel}; border: 1px solid #2A2A2C; border-top: 2px solid ${gold};
          padding: 40px 36px 32px; box-sizing: border-box;
        }
        .ws-modal-close { position: absolute; top: 14px; right: 14px; background: none; border: none; color: ${gray}; cursor: pointer; padding: 6px; }
        .ws-modal-close:hover { color: ${gold}; }
        @media (max-width: 640px) { .ws-modal-panel { margin: 0; max-height: 100vh; min-height: 100vh; padding: 56px 20px 32px; } }

        .ws-grid { display: grid; gap: 28px; }
        @media (min-width: 760px) {
          .ws-grid-2 { grid-template-columns: 1fr 1fr; }
          .ws-grid-3 { grid-template-columns: repeat(3, 1fr); }
        }

        .ws-card {
          background: ${ink};
          border: 1px solid #242426;
          padding: 32px 28px;
        }
        .ws-tint .ws-card { background: #101012; }

        .ws-rule { border: none; border-top: 1px solid #242426; margin: 0; }

        .ws-ledger-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #242426;
        }
        .ws-ledger-cell { padding: 18px 22px; font-size: 15.5px; }
        .ws-ledger-cell.debit { color: ${gray}; border-right: 1px solid #242426; }
        .ws-ledger-cell.credit { color: ${bone}; }

        .ws-faq-q {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-top: 1px solid #242426;
          color: ${bone};
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.03em;
          padding: 20px 4px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ws-faq-q:focus-visible { outline: 2px solid ${gold}; outline-offset: 2px; }
        .ws-faq-a { padding: 0 4px 24px; color: ${gray}; max-width: 720px; }

        .ws-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: ${gold};
        }
        .ws-price {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px;
          line-height: 1;
          color: ${bone};
        }

        @media (prefers-reduced-motion: reduce) {
          .ws-btn { transition: none; }
        }
      `}</style>

      {/* ---------- NAV ---------- */}
      <header style={{ borderBottom: "1px solid #1E1E20" }}>
        <div className="ws-wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px" }}>
          <div className="ws-display" style={{ fontSize: 26 }}>
            WEALT<span style={{ color: gold }}>H</span>SPAN
          </div>
          <a href="#book" onClick={openModal} className="ws-btn" style={{ fontSize: 16, padding: "9px 22px" }}>
            Book a call
          </a>
        </div>
      </header>

      {/* ---------- 1. HERO (VIDEO) ---------- */}
      <section className="ws-hero">
        <video className="ws-hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="hero-ws.mp4" type="video/mp4" />
        </video>
        <div className="ws-hero-grad" />
        <div className="ws-wrap ws-hero-content">
          <div style={{ maxWidth: 520 }}>
            <Eyebrow>Go to Strength · Go to Market</Eyebrow>
            <h1 className="ws-display" style={{ fontSize: "clamp(52px, 7vw, 88px)" }}>
              You've been making withdrawals without depositing for years.
            </h1>
            <p style={{ marginTop: 28, maxWidth: 500, color: bone, fontSize: 17 }}>
              Wealthspan Strength is a life affirming performance system for professionals and growth-conscious people who have decided that care for SELF is a number one priority. Barbell strength and business performance, when coupled with discipline and a Buddhist (cause and effect) mindset, is a combined force for positive transformation.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#book" onClick={openModal} className="ws-btn">Book a targeting call</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. PROBLEM ---------- */}
      <Section tint>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)", maxWidth: 700 }}>
          What you're noticing
        </h2>
        <div className="ws-grid ws-grid-3" style={{ marginTop: 48 }}>
          <div className="ws-card">
            <p style={{ margin: 0 }}>
              You caught yourself out of breath on stairs you used to take two at a time. You said nothing and took the elevator the next day.
            </p>
          </div>
          <div className="ws-card">
            <p style={{ margin: 0 }}>
              Your numbers have plateaued for three quarters. You used to be great at this. Now the 2 p.m. fog eats the part of the day where deals used to close.
            </p>
          </div>
          <div className="ws-card">
            <p style={{ margin: 0 }}>
              Somewhere along the way you accepted decline as the price of success. Nobody billed you for that. You volunteered.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- 3. SOLUTION INTRO ---------- */}
      <Section>
        <div className="ws-grid ws-grid-2" style={{ alignItems: "center", gap: 56 }}>
        <div>
          <h2 className="ws-display" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            You need capacity, not motivation.
          </h2>
          <p style={{ marginTop: 28, fontSize: 19 }}>
            Motivation is a mood. Capacity is an asset. Your output in business runs on the same engine as your output in the gym: the body and nervous system underneath it. When that engine is underpowered, your work is capped no matter how good your strategy is.
          </p>
          <p style={{ marginTop: 18, color: gray }}>
            Wealthspan Strength applies one principle to both sides of your life: progressive overload. In the gym, you add small amounts of weight to a schedule and your body adapts. In your pipeline, you add small amounts of disciplined pressure on a schedule and your business adapts. <strong style={{ color: bone, fontWeight: 600 }}>Same math. Same account. Deposits compound; missed weeks compound too.</strong>
          </p>
        </div>
        <figure style={{ margin: 0 }}>
          <img src="wealthspan-client.jpg" alt="Wealthspan client under the bar" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", border: "1px solid #242426", display: "block" }} />
        </figure>
        </div>
      </Section>

      {/* ---------- 4. PILLARS ---------- */}
      <Section tint>
        <Eyebrow>What's inside</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)" }}>Three programs to build capacity.</h2>
        <div className="ws-grid ws-grid-3" style={{ marginTop: 48 }}>
          <div className="ws-card">
            <IconBarbell />
            <h3 className="ws-display" style={{ fontSize: 30, marginTop: 20 }}>Body</h3>
            <p className="ws-muted" style={{ marginTop: 12, fontSize: 15.5 }}>
              Barbell training built around the four big lifts: squat, deadlift, bench, overhead press. Strength is your energy supply. Train it and the 2 p.m. fog lifts, sleep deepens, and your brain gets direct benefit, because heavy lifting feeds the nervous system that runs your thinking. Three sessions a week, programmed in a shared sheet, coached by Denis from day one.
            </p>
          </div>
          <div className="ws-card">
            <IconTarget />
            <h3 className="ws-display" style={{ fontSize: 30, marginTop: 20 }}>Business</h3>
            <p className="ws-muted" style={{ marginTop: 12, fontSize: 15.5 }}>
              Capacity in business means you can take the hits and keep executing: the ghosted deal, the rough quarter, the Friday payroll scare. Coaching runs on the TEAMMS method, starting with targeting until your picture is crystal clear, because without clarity there is no execution. Then we build a weekly outbound rhythm that holds under pressure.
            </p>
          </div>
          <div className="ws-card">
            <IconOperator />
            <h3 className="ws-display" style={{ fontSize: 30, marginTop: 20 }}>Buddha</h3>
            <p className="ws-muted" style={{ marginTop: 12, fontSize: 15.5 }}>
              The mindset underneath the other two. Cause and effect: the deposits you make today decide the person who shows up next year. Drawn from Denis's two and a half decades of daily Buddhist practice, offered as a working philosophy, never a recruitment. A weekly call, a daily pulse check, and questions that keep your head clear when the pressure arrives.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- 5. BEFORE / AFTER ---------- */}
      <Section>
        <Eyebrow>Before and after</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)" }}>Current you vs a better you</h2>
        <div style={{ marginTop: 44, border: "1px solid #242426" }}>
          <div className="ws-ledger-row" style={{ background: panel }}>
            <div className="ws-ledger-cell debit ws-mono" style={{ color: gray, fontSize: 12, letterSpacing: "0.18em" }}>CURRENT YOU</div>
            <div className="ws-ledger-cell ws-mono" style={{ color: gold, fontSize: 12, letterSpacing: "0.18em" }}>A BETTER YOU</div>
          </div>
          {[
            ["The 2 p.m. fog runs through your afternoons.", "You close hard conversations at 4 p.m. with a clear head."],
            ["Pipeline activity happens when you feel like it.", "Outbound runs on a weekly rhythm you don't renegotiate."],
            ["A slip on the ice means six weeks in a cast.", "A slip on the ice means you get up, swear once, and keep walking."],
            ["Sleep is what's left after the stress wins.", "You train, you eat your protein, and you sleep like it's your job."],
            ["Your quota watches you from across the room.", "You know your pace against the targets every single week."],
          ].map(([a, b], i) => (
            <div className="ws-ledger-row" key={i}>
              <div className="ws-ledger-cell debit">{a}</div>
              <div className="ws-ledger-cell credit">{b}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 10. BIO ---------- */}
      <Section tint>
        <div className="ws-grid ws-grid-2" style={{ alignItems: "center", gap: 56 }}>
          <div>
            <img src="denis-gym.jpg" alt="Denis Champagne at the squat rack" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", border: "1px solid #242426", display: "block" }} />
          </div>
          <div>
            <Eyebrow>Your coach</Eyebrow>
            <h2 className="ws-display" style={{ fontSize: "clamp(40px, 5vw, 60px)" }}>Denis Champagne</h2>
            <p style={{ marginTop: 24 }}>
              I've been an entrepreneur for 36 years. That sentence sounds impressive until you know what's inside it.
            </p>
            <p className="ws-muted" style={{ marginTop: 16 }}>
              A bankruptcy. Payrolls that didn't clear while my staff stood there waiting. A layoff from a VP job two months before my wife landed in Canada. I rebuilt every time.
            </p>
            <p className="ws-muted" style={{ marginTop: 16 }}>
              People ask my secret. They expect a morning routine with lemon water in it. My secret weighs 450 pounds.
            </p>
            <p className="ws-muted" style={{ marginTop: 16 }}>
              I lift heavy every week, at 67. Not for the mirror. For capacity. The bar taught me what business never says out loud: the weight doesn't care about your excuses. Every rep is a deposit. Every skipped week is a withdrawal. Cause and effect, no exceptions.
            </p>
            <p className="ws-muted" style={{ marginTop: 16 }}>
              That principle rebuilt my body. It rebuilt my revenue. It works on anything you point it at. The bankruptcy took my money. My capacity stayed. That's how I came back.
            </p>
            <p className="ws-muted" style={{ marginTop: 16 }}>
              You can do the same. Get under the bar. Fix the mindset. Build the capacity, and the goals stop being wishes. One client started lifting at 76. At 77 he fell hard on a sidewalk and got up like he'd tripped on a shoelace. That's what a year of deposits buys.
            </p>
            <p style={{ marginTop: 16, color: gold }}>What are you depositing this week?</p>
          </div>
        </div>
      </Section>

      {/* ---------- 6. PROCESS ---------- */}
      <Section tint id="how">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)" }}>Four steps, in order.</h2>
        <div className="ws-grid ws-grid-2" style={{ marginTop: 48 }}>
          {[
            {
              n: "T",
              t: "Targeting call",
              d: "One conversation. Where you are, where the numbers sit, what's slipping and why. We dig until the picture is clear on both fronts, because clarity comes before any program. Then you DECIDE: a real DECISION, without wavering, as true champions do.",
            },
            {
              n: "P",
              t: "Your program",
              d: "You get one shared sheet: your lifts, your loads, your rest times, plus your sales targets and the weekly actions that move them. You never have to guess what today requires.",
            },
            {
              n: "W",
              t: "Weekly coaching",
              d: "A standing call with Denis every week. Review the numbers, adjust the loads, work the obstacles. Between calls you're in the gym twice or three times, so the plan stays in your hands six days out of seven.",
            },
            {
              n: "M",
              t: "Measure and manage",
              d: "The loads, protein, sleep, conversations opened, week's challenges and opportunities. The numbers tell us what to change, the results tell us what we've done. When life interrupts (travel, trade shows, a rough month), the program bends without breaking like bamboo.",
            },
          ].map((s, i) => (
            <div className="ws-card" key={i} style={{ display: "flex", gap: 24 }}>
              <div className="ws-display" style={{ color: gold, fontSize: 44, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="ws-display" style={{ fontSize: 28 }}>{s.t}</h3>
                <p className="ws-muted" style={{ marginTop: 10, fontSize: 15.5 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 7. PROOF ---------- */}
      <Section>
        <Eyebrow>About the coach</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)", maxWidth: 720 }}>
          Denis doesn't sell a theory. He lifts the receipts.
        </h2>
        <div className="ws-grid ws-grid-3" style={{ marginTop: 48 }}>
          <div>
            <div className="ws-stat-num">36 YRS</div>
            <p className="ws-muted" style={{ marginTop: 10, fontSize: 15 }}>
              Running companies with staff and payroll on the line, and coaching salespeople, sales teams, and revenue operations through the grind.
            </p>
          </div>
          <div>
            <div className="ws-stat-num">200+</div>
            <p className="ws-muted" style={{ marginTop: 10, fontSize: 15 }}>
              Clients served across 36 years of running companies and coaching salespeople, sales teams, and revenue operations to their best. The track record came long before the brand did.
            </p>
          </div>
          <div>
            <div className="ws-stat-num">450 LB</div>
            <p className="ws-muted" style={{ marginTop: 10, fontSize: 15 }}>
              Denis's working deadlift, pulled for five reps, as a grandfather. Programmed the same way your first 95 pounds will be.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- 8. TESTIMONIALS ---------- */}
      <Section tint>
        <Eyebrow>What clients say</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)" }}>In their words</h2>
        <img src="wealthspan-client2.jpg" alt="Wealthspan clients training" style={{ width: "100%", maxWidth: 820, aspectRatio: "3014/2243", objectFit: "cover", border: "1px solid #242426", display: "block", margin: "40px auto 0" }} />
        <div className="ws-grid ws-grid-3" style={{ marginTop: 48 }}>
          {[
            {
              quote: "I had the opportunity to work with Denis in strength and conditioning, particularly to refine my technique in the bench press, squat, overhead press, and deadlift. Denis has a wealth of knowledge and an exceptional ability to communicate it. Through his clear explanations, corrections, and attention to detail, I gained a better understanding of each movement and significantly improved my technique. What I appreciated most was his passion for his field and his genuine care for people. It's clear that he truly loves what he does and is deeply committed to sharing his knowledge and helping those he coaches progress. It was a wonderful experience. Denis is an excellent coach with a great personality, and I recommend him without hesitation.",
              who: "M.A.",
            },
            {
              quote: "When it comes to strength development, Denis is extremely knowledgeable. He is meticulous and knows how to teach the technical aspects of each movement in detail, while remaining a motivating and caring coach. I highly recommend Denis to anyone looking to improve their muscular strength.",
              who: "D.T.",
            },
            {
              quote: "I started working with Denis right when I went out on my own as an entrepreneur, when everything felt uncertain. I've never felt stronger or more sure of myself. Building strength and fixing my mindset gave me the capacity to grow my business and take on more than I thought I could.",
              who: "J.W.",
            },
          ].map((t, i) => (
            <figure className="ws-card" key={i} style={{ margin: 0 }}>
              <svg width="26" height="20" viewBox="0 0 26 20" fill={goldDim} aria-hidden="true">
                <path d="M0 20V10.4C0 4.2 3.6 0.6 10 0v4.4c-3 .5-4.6 2.2-4.8 5H10V20H0zm16 0V10.4C16 4.2 19.6 0.6 26 0v4.4c-3 .5-4.6 2.2-4.8 5H26V20H16z" />
              </svg>
              <blockquote style={{ margin: "18px 0 0", fontSize: 15.5, fontStyle: "italic" }}>{t.quote}</blockquote>
              <figcaption className="ws-mono" style={{ marginTop: 20, fontSize: 12, letterSpacing: "0.1em", color: gold }}>
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ---------- 11. FAQ ---------- */}
      <Section>
        <Eyebrow>Questions people actually ask</Eyebrow>
        <h2 className="ws-display" style={{ fontSize: "clamp(38px, 4.5vw, 56px)", marginBottom: 36 }}>FAQ</h2>
        <div style={{ borderBottom: "1px solid #242426" }}>
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                className="ws-faq-q"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
              >
                <span>{f.q}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" stroke={gold} strokeWidth="1.6" style={{ flexShrink: 0, marginLeft: 16, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.15s" }}>
                  <line x1="8" y1="2" x2="8" y2="14" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                </svg>
              </button>
              {openFaq === i && <div className="ws-faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 12. FOOTER / FINAL CTA ---------- */}
      <section id="book" style={{ background: panel, borderTop: `1px solid ${goldDim}`, padding: "96px 0 60px" }}>
        <div className="ws-wrap" style={{ textAlign: "center" }}>
          <IconLedger size={30} />
          <h2 className="ws-display" style={{ fontSize: "clamp(44px, 6vw, 76px)", marginTop: 24, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Build capacity. Start this week.
          </h2>
          <p className="ws-muted" style={{ maxWidth: 520, margin: "22px auto 0" }}>
            One call. We map your targets on all fronts, and you decide if the program fits. Bring your numbers.
          </p>
          <p className="ws-mono" style={{ color: gold, fontSize: 22, letterSpacing: "0.3em", marginTop: 26 }}>
            STRENGTH ON ALL FRONTS
          </p>
          <div style={{ marginTop: 36 }}>
            <a href="#book" onClick={openModal} className="ws-btn" style={{ fontSize: 22, padding: "16px 44px" }}>
              Book your targeting call
            </a>
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 22 }}>
            <a className="ws-soc" href="https://www.linkedin.com/in/denis-champagne/" target="_blank" rel="noopener noreferrer" aria-label="Denis Champagne on LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.8v11.2H3.2V8.8h3.3zM4.8 3.5a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zM20.8 13.6v6.4h-3.3v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.8 1.3-.1.2-.1.6-.1.9v6.1h-3.3s.04-9.9 0-11.2h3.3v1.6c.4-.7 1.2-1.7 3-1.7 2.2 0 4 1.4 4 4.9z"/></svg>
            </a>
            <a className="ws-soc" href="https://www.facebook.com/denis.champagne" target="_blank" rel="noopener noreferrer" aria-label="Denis Champagne on Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21.5v-7.4h2.5l.4-2.9h-2.9V9.3c0-.85.24-1.43 1.46-1.43h1.55V5.3c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.88v2.16H8v2.9h2.47v7.4h3.03z"/></svg>
            </a>
            <a className="ws-soc" href="https://www.instagram.com/denischampagne/" target="_blank" rel="noopener noreferrer" aria-label="Denis Champagne on Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
          <hr className="ws-rule" style={{ margin: "72px 0 28px" }} />
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div className="ws-display" style={{ fontSize: 20 }}>
              WEALT<span style={{ color: gold }}>H</span>SPAN
            </div>
            <div className="ws-mono ws-muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>
              <a href="privacy-ws.html" style={{ color: gray, textDecoration: "none" }}>Privacy Policy</a> · <a href="cookies-ws.html" style={{ color: gray, textDecoration: "none" }}>Cookie Policy</a> · © 2026 WEALTHSPAN STRENGTH
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LEAD FORM MODAL ---------- */}
      {modalOpen && (
        <div className="ws-modal open" aria-hidden="false">
          <div className="ws-modal-backdrop" onClick={closeModal} />
          <div className="ws-modal-panel" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
            <button className="ws-modal-close" type="button" aria-label="Close" onClick={closeModal}>
              <svg width="18" height="18" viewBox="0 0 18 18" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="3" x2="15" y2="15" /><line x1="15" y1="3" x2="3" y2="15" /></svg>
            </button>
            <Eyebrow>Targeting call</Eyebrow>
            <h2 id="lead-modal-title" className="ws-display" style={{ fontSize: "clamp(34px, 4vw, 44px)" }}>Start a conversation</h2>
          <div className="ws-form" style={{ maxWidth: "none", marginTop: 8 }}>
            {sent ? (
              <p style={{ textAlign: "center", color: bone, fontSize: 17 }}>
                Received. Denis reads every message himself and will get back to you.
              </p>
              <p style={{ textAlign: "center", color: gold, fontSize: 14, letterSpacing: "0.3em", marginTop: 14 }}>PEACE</p>
              <p className="ws-muted" style={{ textAlign: "center", fontSize: 14, marginTop: 22 }}>
                Want to lock in a time now? <a href="https://calendly.com/denis-lotus/30min" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>Grab 30 minutes on the calendar</a>.
              </p>
            ) : (
              <>
                <label htmlFor="f-name">Name</label>
                <input className="ws-input" id="f-name" type="text" value={form.name} onChange={setField("name")} />

                <label htmlFor="f-email">Email</label>
                <input className="ws-input" id="f-email" type="email" value={form.email} onChange={setField("email")} />

                <label>Which area interests you most?</label>
                {[
                  ["BODY", "— physical strength and capacity"],
                  ["BUDDHA", "— inner strength and direction"],
                  ["BUSINESS", "— professional strength and execution"],
                  ["THE WHOLE TRIAD", ""],
                  ["I am not sure yet", ""],
                ].map(([val, desc]) => (
                  <label className="ws-radio" key={val}>
                    <input type="radio" name="area" value={val} checked={form.area === val} onChange={setField("area")} />
                    <span><strong>{val}</strong> {desc && <em>{desc}</em>}</span>
                  </label>
                ))}

                <label htmlFor="f-msg">Is there anything you would like me to know? <span style={{ textTransform: "none", letterSpacing: 0 }}>(Optional)</span></label>
                <textarea className="ws-input" id="f-msg" rows={3} value={form.message} onChange={setField("message")} />

                <div style={{ textAlign: "center", marginTop: 30 }}>
                  <button type="button" onClick={submitForm} className="ws-btn" style={{ fontSize: 20, padding: "15px 40px" }}>
                    START A CONVERSATION
                  </button>
                  <p className="ws-muted" style={{ fontSize: 13, marginTop: 14 }}>Your information will remain private.</p>
                  <p style={{ color: gold, fontSize: 14, letterSpacing: "0.3em", marginTop: 6 }}>PEACE</p>
                </div>
              </>
            )}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
