import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/6oU4gB3Wi7Fs5Rxa8y0gw08'

export const metadata: Metadata = {
  title: 'AI Fluency & Prompt Engineering for Non-Technical Founders',
  description:
    'A 1-day workshop teaching founders how to collaborate with ChatGPT and Claude as judgment-amplifying tools. Live demos, paired practice, founder-specific artifacts.',
  openGraph: {
    title: 'AI Fluency for Non-Technical Founders',
    description:
      'A 1-day workshop. ChatGPT + Claude. Live demos, paired practice, real founder artifacts.',
    type: 'website',
    url: 'https://www.ai4all.store/course-1',
  },
}

const pageStyles = `
  .half-day-root {
    --bg-dark: #0f0f14;
    --bg-panel: #16161d;
    --bg-soft: #1a1a24;
    --accent-coral: #ff6b6b;
    --accent-teal: #4ecdc4;
    --accent-gold: #ffd93d;
    --accent-blue: #6c9eff;
    --text-primary: #f8f8f2;
    --text-secondary: #a9a9b3;
    --success: #50fa7b;
    --error: #ff5555;
    --border: rgba(255, 255, 255, 0.1);
    --border-soft: rgba(255, 255, 255, 0.06);
    font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
    background: var(--bg-dark);
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .half-day-root * { margin: 0; padding: 0; box-sizing: border-box; }
  .half-day-root a { color: inherit; text-decoration: none; }

  .half-day-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 15% 10%, rgba(255, 107, 107, 0.18) 0%, transparent 45%),
      radial-gradient(ellipse at 85% 30%, rgba(78, 205, 196, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 90%, rgba(255, 217, 61, 0.08) 0%, transparent 55%);
    pointer-events: none;
    z-index: 0;
  }

  .half-day-root main,
  .half-day-root nav,
  .half-day-root header,
  .half-day-root footer { position: relative; z-index: 1; }

  .half-day-root nav {
    position: sticky;
    top: 0;
    backdrop-filter: blur(12px);
    background: rgba(15, 15, 20, 0.7);
    border-bottom: 1px solid var(--border-soft);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
  }
  .half-day-root nav .brand { font-weight: 700; font-size: 1.05rem; letter-spacing: -0.01em; }
  .half-day-root nav .brand .dot { color: var(--accent-coral); }
  .half-day-root nav .nav-links { display: flex; gap: 1.75rem; align-items: center; }
  .half-day-root nav .nav-links a { font-size: 0.92rem; color: var(--text-secondary); transition: color 0.2s; }
  .half-day-root nav .nav-links a:hover { color: var(--text-primary); }
  .half-day-root nav .cta-btn {
    background: var(--accent-teal);
    color: var(--bg-dark);
    padding: 0.55rem 1.1rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.2s;
  }
  .half-day-root nav .cta-btn:hover { transform: translateY(-1px); }

  @media (max-width: 720px) {
    .half-day-root nav .nav-links a:not(.cta-btn) { display: none; }
  }

  .half-day-root section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }

  .half-day-root h1 { font-size: clamp(2.4rem, 5.5vw, 3.8rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
  .half-day-root h2 { font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 700; line-height: 1.2; margin-bottom: 1rem; letter-spacing: -0.01em; }
  .half-day-root h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
  .half-day-root p { color: var(--text-secondary); }

  .half-day-root .gradient-text {
    background: linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .half-day-root .eyebrow {
    display: inline-block;
    font-size: 0.78rem;
    color: var(--accent-teal);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .half-day-root .hero { padding-top: 6rem; padding-bottom: 4rem; }
  .half-day-root .hero .badges { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.75rem; }
  .half-day-root .hero .badge {
    background: rgba(78, 205, 196, 0.12);
    border: 1px solid rgba(78, 205, 196, 0.3);
    color: var(--accent-teal);
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .half-day-root .hero h1 { margin-bottom: 1.25rem; }
  .half-day-root .hero .lede {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    color: var(--text-secondary);
    max-width: 680px;
    margin-bottom: 2.25rem;
  }
  .half-day-root .hero .ctas { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-bottom: 3rem; }
  .half-day-root .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.6rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.98rem;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid transparent;
    cursor: pointer;
  }
  .half-day-root .btn-primary {
    background: linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-gold) 100%);
    color: var(--bg-dark);
    box-shadow: 0 6px 24px rgba(255, 107, 107, 0.3);
  }
  .half-day-root .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4); }
  .half-day-root .btn-ghost { border-color: var(--border); color: var(--text-primary); }
  .half-day-root .btn-ghost:hover { border-color: var(--accent-teal); color: var(--accent-teal); }

  .half-day-root .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-soft);
    border-radius: 14px;
  }
  .half-day-root .hero-stats .stat .num {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--accent-teal);
    font-variant-numeric: tabular-nums;
  }
  .half-day-root .hero-stats .stat .label {
    font-size: 0.82rem;
    color: var(--text-secondary);
    margin-top: 0.15rem;
  }
  @media (max-width: 720px) {
    .half-day-root .hero-stats { grid-template-columns: repeat(2, 1fr); }
  }

  .half-day-root .section-head { margin-bottom: 3rem; max-width: 700px; }
  .half-day-root .section-head p { font-size: 1.05rem; }

  .half-day-root .four-d-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
  @media (max-width: 720px) { .half-day-root .four-d-grid { grid-template-columns: 1fr; } }
  .half-day-root .d-card {
    background: var(--bg-panel);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.75rem;
    transition: transform 0.25s, border-color 0.25s;
  }
  .half-day-root .d-card:hover { transform: translateY(-3px); border-color: var(--accent-teal); }
  .half-day-root .d-card .index {
    display: inline-block;
    font-family: var(--font-jetbrains-mono), 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--accent-gold);
    margin-bottom: 0.5rem;
  }
  .half-day-root .d-card h3 { font-size: 1.3rem; margin-bottom: 0.5rem; }
  .half-day-root .d-card p { font-size: 0.95rem; line-height: 1.55; }

  .half-day-root .audience-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
  }
  @media (max-width: 720px) { .half-day-root .audience-grid { grid-template-columns: 1fr; } }
  .half-day-root .audience-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 1.25rem 1.4rem;
  }
  .half-day-root .audience-card h4 {
    color: var(--accent-coral);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .half-day-root .audience-card p { font-size: 0.95rem; color: var(--text-secondary); }

  .half-day-root .schedule {
    background: var(--bg-panel);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
  }
  .half-day-root .schedule-row {
    display: grid;
    grid-template-columns: 130px 1fr 200px;
    gap: 1.5rem;
    padding: 1.1rem 1.75rem;
    align-items: center;
    border-bottom: 1px solid var(--border-soft);
  }
  .half-day-root .schedule-row:last-child { border-bottom: none; }
  .half-day-root .schedule-row.head {
    background: rgba(78, 205, 196, 0.08);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent-teal);
    font-weight: 600;
  }
  .half-day-root .schedule-row .time {
    font-family: var(--font-jetbrains-mono), 'JetBrains Mono', monospace;
    font-size: 0.88rem;
    color: var(--text-secondary);
    white-space: nowrap;
  }
  .half-day-root .schedule-row .module { font-weight: 500; color: var(--text-primary); }
  .half-day-root .schedule-row .output { font-size: 0.88rem; color: var(--text-secondary); }
  .half-day-root .schedule-row.break .module { color: var(--text-secondary); font-style: italic; }
  @media (max-width: 720px) {
    .half-day-root .schedule-row { grid-template-columns: 1fr; gap: 0.4rem; padding: 1rem 1.25rem; }
    .half-day-root .schedule-row.head { display: none; }
    .half-day-root .schedule-row .time { font-size: 0.8rem; color: var(--accent-teal); }
  }

  .half-day-root .takeaway-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.85rem; }
  @media (max-width: 720px) { .half-day-root .takeaway-grid { grid-template-columns: 1fr; } }
  .half-day-root .takeaway-item {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 1rem 1.25rem;
  }
  .half-day-root .takeaway-item .check {
    background: rgba(80, 250, 123, 0.15);
    color: var(--success);
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
    font-size: 0.85rem;
  }
  .half-day-root .takeaway-item p { color: var(--text-primary); font-size: 0.96rem; line-height: 1.45; }

  .half-day-root .tools-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
  @media (max-width: 720px) { .half-day-root .tools-row { grid-template-columns: 1fr; } }
  .half-day-root .tool-card {
    background: var(--bg-panel);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.75rem;
  }
  .half-day-root .tool-card .tool-name { font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem; }
  .half-day-root .tool-card .tool-tag {
    display: inline-block;
    font-size: 0.72rem;
    background: rgba(108, 158, 255, 0.15);
    color: var(--accent-blue);
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .half-day-root .tool-card p { font-size: 0.95rem; line-height: 1.55; }

  .half-day-root .cta-block {
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.12) 0%, rgba(78, 205, 196, 0.12) 100%);
    border: 1px solid rgba(255, 107, 107, 0.3);
    border-radius: 24px;
    padding: 3.5rem 3rem;
    text-align: center;
  }
  .half-day-root .cta-block h2 { margin-bottom: 1rem; }
  .half-day-root .cta-block p { font-size: 1.1rem; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
  .half-day-root .cta-block .meta { margin-top: 1.5rem; font-size: 0.88rem; color: var(--text-secondary); }

  .half-day-root .faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
  .half-day-root .faq-item {
    background: var(--bg-panel);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    overflow: hidden;
  }
  .half-day-root .faq-item summary {
    cursor: pointer;
    padding: 1.1rem 1.4rem;
    font-weight: 500;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-primary);
  }
  .half-day-root .faq-item summary::-webkit-details-marker { display: none; }
  .half-day-root .faq-item summary::after {
    content: '+';
    color: var(--accent-teal);
    font-size: 1.4rem;
    font-weight: 400;
    transition: transform 0.2s;
  }
  .half-day-root .faq-item[open] summary::after { transform: rotate(45deg); }
  .half-day-root .faq-item .answer {
    padding: 0 1.4rem 1.25rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .half-day-root footer {
    border-top: 1px solid var(--border-soft);
    padding: 2.5rem 2rem;
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.88rem;
  }
  .half-day-root footer .footer-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }
  .half-day-root footer .footer-links a:hover { color: var(--accent-teal); }
  .half-day-root footer .domain { color: var(--accent-teal); font-weight: 600; }
`

export default function HalfDayPage() {
  return (
    <div className={`half-day-root ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <nav>
        <div className="brand">
          ai4all<span className="dot">.</span>store
        </div>
        <div className="nav-links">
          <a href="#what">What you&rsquo;ll learn</a>
          <a href="#schedule">Schedule</a>
          <a href="#takeaways">Take-home</a>
          <a href="#faq">FAQ</a>
          <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">
            Reserve a seat
          </a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="badges">
            <span className="badge">1-day workshop</span>
            <span className="badge">10&ndash;20 founders</span>
            <span className="badge">ChatGPT + Claude</span>
            <span className="badge">Sydney</span>
          </div>
          <h1>
            AI fluency for founders<br />who <span className="gradient-text">make decisions</span>, not code.
          </h1>
          <p className="lede">
            A practical, vendor-agnostic workshop on collaborating with ChatGPT and Claude as
            judgment-amplifying tools. Live demos, paired practice, and one real artifact you&rsquo;ll
            take back to your company on Monday.
          </p>
          <div className="ctas">
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Reserve a seat &rarr;
            </a>
            <a href="#schedule" className="btn btn-ghost">
              See the agenda
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="num">8</div>
              <div className="label">Modules across the day</div>
            </div>
            <div className="stat">
              <div className="num">4D</div>
              <div className="label">Fluency framework</div>
            </div>
            <div className="stat">
              <div className="num">6+</div>
              <div className="label">Hands-on exercises</div>
            </div>
            <div className="stat">
              <div className="num">12</div>
              <div className="label">Prompt &amp; workflow templates</div>
            </div>
          </div>
        </section>

        <section id="what">
          <div className="section-head">
            <span className="eyebrow">What you&rsquo;ll learn</span>
            <h2>
              The <span className="gradient-text">4D framework</span> &mdash; the only AI skill that
              outlasts model versions.
            </h2>
            <p>
              From Dakan &amp; Feller&rsquo;s AI Fluency framework, adopted by Anthropic Academy. Four
              competencies that apply to every model, every tool, every task.
            </p>
          </div>
          <div className="four-d-grid">
            <div className="d-card">
              <span className="index">01 // Delegation</span>
              <h3>Decide who does what</h3>
              <p>
                Before opening Claude or ChatGPT, write a one-paragraph plan: what stays human, what
                the AI drafts, where you iterate together.
              </p>
            </div>
            <div className="d-card">
              <span className="index">02 // Description</span>
              <h3>Prompts as product specs</h3>
              <p>
                The 3Ps &mdash; Product, Process, Performance. Turn vague requests into structured
                prompts with role, context, constraints, and examples.
              </p>
            </div>
            <div className="d-card">
              <span className="index">03 // Discernment</span>
              <h3>Read every output skeptically</h3>
              <p>
                Polished output earns more scrutiny, not less. Spot hallucinated facts, biased
                framing, and fluent answers built on shaky reasoning.
              </p>
            </div>
            <div className="d-card">
              <span className="index">04 // Diligence</span>
              <h3>Own what you ship</h3>
              <p>
                Data safety, disclosure, accountability. &ldquo;AI did it&rdquo; is not a defense.
                Build practices that hold up to investors, customers, and regulators.
              </p>
            </div>
          </div>
        </section>

        <section id="tools">
          <div className="section-head">
            <span className="eyebrow">Tools we&rsquo;ll use</span>
            <h2>Both major chat tools, side by side.</h2>
            <p>
              Choose by capability, not brand. We&rsquo;ll run the same prompt through each so you can
              feel the difference yourself.
            </p>
          </div>
          <div className="tools-row">
            <div className="tool-card">
              <span className="tool-tag">OpenAI</span>
              <div className="tool-name">ChatGPT</div>
              <p>
                Regular chats, Projects, GPTs, file/data analysis, image workflows. We&rsquo;ll cover
                where each capability fits a founder workflow and how to handle privacy controls.
              </p>
            </div>
            <div className="tool-card">
              <span className="tool-tag">Anthropic</span>
              <div className="tool-name">Claude</div>
              <p>
                Regular chats, Projects with knowledge, file uploads, code execution, downloadable
                artifacts. We&rsquo;ll cover Claude-specific patterns including CLAUDE.md and
                Projects.
              </p>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="section-head">
            <span className="eyebrow">Who it&rsquo;s for</span>
            <h2>Built for non-technical founders &amp; operators.</h2>
            <p>
              You don&rsquo;t need to know Python or transformer math. You do need a real business
              problem you&rsquo;d like AI to help with.
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <h4>Seed-stage founders</h4>
              <p>Investor updates, market sizing, competitor teardowns, hiring rubrics, board prep.</p>
            </div>
            <div className="audience-card">
              <h4>Operators &amp; chiefs of staff</h4>
              <p>Meeting summaries, document analysis, recurring weekly workflows, internal comms.</p>
            </div>
            <div className="audience-card">
              <h4>Domain experts going AI-first</h4>
              <p>Lawyers, designers, marketers, analysts who want to use AI without getting burned.</p>
            </div>
          </div>
        </section>

        <section id="schedule">
          <div className="section-head">
            <span className="eyebrow">Schedule</span>
            <h2>One day. Eight modules. One artifact you keep.</h2>
            <p>
              10:00 to 16:00. Every module ends in a tangible output. The day closes with a 30-day
              adoption plan you commit to in writing.
            </p>
          </div>
          <div className="schedule">
            <div className="schedule-row head">
              <div>Time</div>
              <div>Module</div>
              <div>Output</div>
            </div>
            <div className="schedule-row">
              <div className="time">10:00&ndash;10:30</div>
              <div className="module">Opening &amp; AI fluency foundations</div>
              <div className="output">Pre-quiz &amp; task delegation map</div>
            </div>
            <div className="schedule-row">
              <div className="time">10:30&ndash;11:00</div>
              <div className="module">Tour of ChatGPT &amp; Claude</div>
              <div className="output">Tool comparison notes</div>
            </div>
            <div className="schedule-row">
              <div className="time">11:00&ndash;11:45</div>
              <div className="module">Prompt engineering 101</div>
              <div className="output">Structured investor-update prompt</div>
            </div>
            <div className="schedule-row break">
              <div className="time">11:45&ndash;12:00</div>
              <div className="module">Break</div>
              <div className="output">&mdash;</div>
            </div>
            <div className="schedule-row">
              <div className="time">12:00&ndash;13:00</div>
              <div className="module">Founder use cases: strategy &amp; ops</div>
              <div className="output">One polished founder artifact</div>
            </div>
            <div className="schedule-row break">
              <div className="time">13:00&ndash;13:30</div>
              <div className="module">Lunch</div>
              <div className="output">&mdash;</div>
            </div>
            <div className="schedule-row">
              <div className="time">13:30&ndash;14:15</div>
              <div className="module">Working with documents &amp; data</div>
              <div className="output">Three business questions answered from CSV</div>
            </div>
            <div className="schedule-row">
              <div className="time">14:15&ndash;15:00</div>
              <div className="module">Advanced techniques &amp; iterative refinement</div>
              <div className="output">Prompt chain for market research</div>
            </div>
            <div className="schedule-row">
              <div className="time">15:00&ndash;15:30</div>
              <div className="module">Data safety, failure modes &amp; bias</div>
              <div className="output">AI risk &amp; incident-response checklist</div>
            </div>
            <div className="schedule-row">
              <div className="time">15:30&ndash;16:00</div>
              <div className="module">Wrap-up, AI workflows &amp; 30-day plan</div>
              <div className="output">30-day adoption plan &amp; artifact share-out</div>
            </div>
          </div>
        </section>

        <section id="takeaways">
          <div className="section-head">
            <span className="eyebrow">What you take home</span>
            <h2>Real artifacts. Not motivational quotes.</h2>
            <p>
              Every participant leaves with reusable assets they can plug into their company on Monday
              morning.
            </p>
          </div>
          <div className="takeaway-grid">
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>A reusable prompt template tuned to your business</p>
            </div>
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>One polished founder artifact (investor update, market memo, hiring rubric&hellip;)</p>
            </div>
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>A data-analysis workflow with manual-verification checks</p>
            </div>
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>An AI workflow canvas for one weekly recurring task</p>
            </div>
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>A data-safety checklist tailored to your data sensitivity</p>
            </div>
            <div className="takeaway-item">
              <div className="check">&#x2713;</div>
              <p>Personal 30-day next-steps plan with rubric feedback</p>
            </div>
          </div>
        </section>

        <section id="reserve">
          <div className="cta-block">
            <span className="eyebrow">Reserve a seat</span>
            <h2>
              Stop guessing at AI. Start <span className="gradient-text">shipping with it</span>.
            </h2>
            <p>
              Cohorts capped at 20. Bring one real but non-sensitive business problem &mdash; we&rsquo;ll
              work on it together.
            </p>
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book your seat &rarr;
            </a>
            <div className="meta">
              Sydney, AU &middot; Next cohorts announced quarterly &middot;{' '}
              <a href="mailto:hello@ai4all.store" style={{ color: 'var(--accent-teal)' }}>
                hello@ai4all.store
              </a>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Common questions.</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Do I need a paid ChatGPT or Claude account?</summary>
              <div className="answer">
                Free tiers work for most exercises. Paid accounts unlock file uploads, project
                workspaces, and data-analysis features that we&rsquo;ll demo. The instructor keeps
                fallback demos ready if your account doesn&rsquo;t have a feature.
              </div>
            </details>
            <details className="faq-item">
              <summary>Will this teach me to code?</summary>
              <div className="answer">
                No. This workshop is explicitly for non-technical founders. We focus on collaboration
                patterns, judgment, prompting, verification, and operating workflows &mdash; not
                Python, not transformer internals.
              </div>
            </details>
            <details className="faq-item">
              <summary>Can I bring real company data?</summary>
              <div className="answer">
                Bring a real business problem, but use anonymized or synthetic data in class. Module 7
                covers exactly when uploading real data is safe, what controls matter, and how to write
                a company AI policy.
              </div>
            </details>
            <details className="faq-item">
              <summary>What if my team uses Gemini or another model?</summary>
              <div className="answer">
                The 4D framework is platform-agnostic. ChatGPT and Claude are the teaching vehicles,
                but every concept &mdash; delegation, structured prompting, discernment, diligence
                &mdash; transfers directly to Gemini, Mistral, or whatever ships next.
              </div>
            </details>
            <details className="faq-item">
              <summary>Is this workshop available in-house for my team?</summary>
              <div className="answer">
                Yes. Private cohorts can be tailored to your company&rsquo;s data, workflows, and
                policies. Email{' '}
                <a href="mailto:hello@ai4all.store" style={{ color: 'var(--accent-teal)' }}>
                  hello@ai4all.store
                </a>{' '}
                with team size and date range.
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#what">What you&rsquo;ll learn</a>
          <a href="#schedule">Schedule</a>
          <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            Reserve
          </a>
          <a href="mailto:hello@ai4all.store">Contact</a>
        </div>
        <p>
          <span className="domain">ai4all.store</span> &middot; AI fluency for non-technical founders
        </p>
      </footer>
    </div>
  )
}
