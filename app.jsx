// app.jsx — SL/26 site components

// Conference SL/25 video data (from playlist PLxMBSfqMrDTV0nIstFP-N3gNlUDZQkcU7)
const SL25_VIDEOS = [
{ id: '3NxAhPWIOlY', no: '01', title: 'Athlete Equity Changes Everything', speaker: 'Gabby Thomas', org: 'ATHLOS' },
{ id: 'Jf69gAhIsgY', no: '02', title: 'Sports Are Magic', speaker: 'Jordy Leiser', org: 'Jump' },
{ id: '4rEFsWWbuhU', no: '03', title: 'Reinventing Golf with TGL', speaker: 'Mike McCarley', org: 'TMRW Sports' },
{ id: 'ErNQYOwf1y8', no: '04', title: 'The $423B Collectibles Revolution', speaker: 'DJ Skee', org: 'Realest' },
{ id: 'cR8YFcNaFAI', no: '05', title: 'Building Superfans', speaker: 'Megan Duong', org: 'Plot' },
{ id: 'KvZh6DFVVSs', no: '06', title: 'Live Content Can’t Be Scripted', speaker: 'Vic Tixier', org: 'ScorePlay' }];


const PRESS_QUOTES = [
{ quote: 'No question the best conference I’ve attended in years. Every company was fascinating and made me want to invest on the spot. That never happens, but they curated it brilliantly.', source: 'Wyc Grousbeck, Lead Owner, Boston Celtics', headshot: 'assets/wyc-grousbeck.jpg' },
{ quote: 'The conference was exceptionally compelling. It felt like a peek under the hood of what the future of sports will look like.', source: 'Rosalyn Durant, Executive Vice President, Programming & Acquisitions, ESPN', headshot: 'assets/rosalyn-durant.jpg' },
{ quote: 'Less stage, more substance. Real demos, real builders, no buzzword theater.', source: 'Front Office Sports', headshot: null }];


const SPEAKERS_25 = [
{ name: 'Alexis Ohanian', role: 'Founder, Seven Seven Six', headshot: 'assets/alexis-ohanian.jpg' }];


// ─── ICONS ─────────────────────────────────────────────────────────
const PlayIcon = ({ size = 14 }) =>
<svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 2L12 7L3 12V2Z" fill="currentColor" />
  </svg>;


const ArrowIcon = ({ size = 14 }) =>
<svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>;


// ─── SL/26 MARK ────────────────────────────────────────────────────
function Mark() {
  return (
    <div className="sl-mark">
      <span className="sl-mark-sl">SL/26</span>
      <img src="assets/image9.png" alt="Starting Line" className="sl-mark-word" />
    </div>);

}

// ─── HEADER ────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-hd ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-hd-inner">
        <div className="site-hd-mark"><Mark /></div>
        <nav className="site-hd-nav">
          <a href="#about">About</a>
          <a href="#sessions">Sessions</a>
          <a href="#speakers">Speakers</a>
          <a href="#venue">Venue</a>
          <a href="#press">Testimonials</a>
        </nav>
        <a href="#waitlist" className="site-hd-cta">
          Get The Newsletter <ArrowIcon />
        </a>
      </div>
    </header>);

}

// ─── HERO ──────────────────────────────────────────────────────────
function Hero() {
  // Use the opening session as the muted-loop hero video
  const heroVid = SL25_VIDEOS[0];
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-meta">
          <div className="kicker">
            <span className="dot" /> SL/26 · The Starting Line Conference · A Seven Seven Six Production
          </div>
        </div>

        <h1 className="hero-h1">
          <span className="hero-h1-row" style={{ fontSize: "100px", color: "rgba(102, 102, 102, 0.4)", letterSpacing: "-1.21475px" }}>100 <span className="hero-h1-text" style={{ fontSize: "100px", color: "rgba(102, 102, 102, 0.4)" }}>BUILDERS.</span></span>
          <span className="hero-h1-row">the future</span>
          <span className="hero-h1-row">of <span className="hero-h1-text">sports</span></span>
          <span className="hero-h1-ai" aria-hidden="true"><span className="hero-h1-ai-x">×</span>A.I.</span>
        </h1>

        <div className="hero-foot">
          <div className="hero-foot-block">
            <div className="micro">Date</div>
            <div className="hero-foot-val">FRI OCT 2, 2026</div>
          </div>
          <div className="hero-foot-block">
            <div className="micro">City</div>
            <div className="hero-foot-val">New York, NY</div>
          </div>
          <div className="hero-foot-block">
            <div className="micro">Format</div>
            <div className="hero-foot-val">Invitation only</div>
          </div>
          <div className="hero-foot-block">
            <div className="micro">Hosts</div>
            <div className="hero-foot-val">776 · ATHLOS</div>
          </div>
          <a href="#waitlist" className="hero-foot-cta">
            Request an invite <ArrowIcon size={16} />
          </a>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          {Array.from({ length: 6 }).map((_, i) =>
          <span key={i}>
            SL/26 &nbsp;·&nbsp; OCT 2, 2026 &nbsp;·&nbsp; NEW YORK &nbsp;·&nbsp; AI × SPORT &nbsp;·&nbsp;
          </span>
          )}
        </div>
      </div>
    </section>);

}

// ─── ABOUT / MISSION ───────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="about">
      <div className="about-l">
        <div className="section-no">§ 01</div>
        <div className="section-label">The Thesis</div>
      </div>
      <div className="about-r">
        <h2 className="about-h2" style={{ fontSize: "53px" }}>
          Sports is the <span className="ink-accent">last</span> mass medium.
          A.I. is the <span className="ink-accent">first</span> tool that can rewire it end-to-end,
          from the practice field, to the broadcast truck, to the seat in row&nbsp;Z.
        </h2>
        <p className="about-p">
          SL/26 brings together the hundred people actually shipping that future:
          founders, athletes, GMs, league operators, and the engineers
          quietly rewriting the playbook. No keynotes. No panels-as-press-releases.
          Live demos, real numbers, hard questions.
        </p>
        <div className="about-stats">
          <div><div className="stat-n">100</div><div className="micro">decision-makers</div></div>
          <div><div className="stat-n">06</div><div className="micro">sessions, no fluff</div></div>
          <div><div className="stat-n">02:30</div><div className="micro">hours, end-to-end</div></div>
          <div><div className="stat-n">01</div><div className="micro">starting line</div></div>
        </div>
      </div>
    </section>);

}

// ─── VIDEO MOSAIC ──────────────────────────────────────────────────
function VideoMosaic({ openVideo }) {
  return (
    <section id="sessions" className="sessions" style={{ backgroundColor: "rgb(255, 15, 92)" }}>
      <div className="sessions-hd">
        <div>
          <div className="section-no">§ 02</div>
          <div className="section-label">SL/25 — Receipts</div>
        </div>
        <h2 className="sessions-h2" style={{ fontSize: "54px" }}>
          Six sessions.<br />
          <em>Watch the room we built in 2025.</em>
        </h2>
      </div>

      <div className="mosaic">
        {SL25_VIDEOS.map((v, i) =>
        <VideoCard key={v.id} video={v} index={i} onOpen={() => openVideo(v)} />
        )}
      </div>

      <div className="sessions-foot">
        <div className="micro">Full playlist on YouTube</div>
        <a className="link" href={`https://www.youtube.com/playlist?list=PLxMBSfqMrDTV0nIstFP-N3gNlUDZQkcU7`} target="_blank" rel="noreferrer">
          WATCH ON YOUTUBE <ArrowIcon />
        </a>
      </div>
    </section>);

}

function VideoCard({ video, index, onOpen }) {
  const [hover, setHover] = React.useState(false);
  // Mosaic has irregular sizes — vary which cards span tall
  const tall = index === 0 || index === 4;
  const wide = index === 2;
  return (
    <article
      className={`vc ${tall ? 'vc--tall' : ''} ${wide ? 'vc--wide' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}>
      
      <div className="vc-thumb">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          onError={(e) => {e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;}} />
        
        {hover &&
        <iframe
          className="vc-preview"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&playsinline=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media" />

        }
        <div className="vc-overlay">
          <div className="vc-play"><PlayIcon size={12} /> Play session</div>
        </div>
      </div>
      <div className="vc-meta" style={{ backgroundColor: "rgb(42, 10, 28)" }}>
        <div className="vc-title" style={{ fontSize: "22px" }}>{video.title}</div>
        <div className="vc-sub">
          <span>{video.speaker}</span>
          <span className="dot-sep">·</span>
          <span className="vc-topic">{video.org}</span>
        </div>
      </div>
    </article>);

}

// ─── THEATER MODAL ─────────────────────────────────────────────────
function Theater({ video, onClose }) {
  React.useEffect(() => {
    if (!video) return;
    const onKey = (e) => {if (e.key === 'Escape') onClose();};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);
  if (!video) return null;
  return (
    <div className="theater" onClick={onClose}>
      <div className="theater-inner" onClick={(e) => e.stopPropagation()}>
        <div className="theater-meta">
          <div className="theater-no">SESSION {video.no}</div>
          <button className="theater-x" onClick={onClose}>Close ✕</button>
        </div>
        <div className="theater-frame">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen />
          
        </div>
        <div className="theater-foot">
          <div>
            <div className="theater-title">{video.title}</div>
            <div className="theater-sub">{video.speaker} · {video.org}</div>
          </div>
        </div>
      </div>
    </div>);

}

// ─── SPEAKERS ──────────────────────────────────────────────────────
function Speakers() {
  return (
    <section id="speakers" className="speakers">
      <div className="speakers-hd">
        <div className="section-no">§ 03</div>
        <div className="section-label">SL/26 COHORT</div>
        <h2 className="speakers-h2">
          The room.<br /><em style={{ fontSize: "67px" }}>The 2026 cohort drops summer.</em>
        </h2>
      </div>
      <ul className="speakers-list">
        {SPEAKERS_25.map((s, i) =>
        <li key={s.name} className="sp-row">
            <span className="sp-no">{String(i + 1).padStart(2, '0')}</span>
            <span
              className="headshot-hept sp-headshot"
              style={s.headshot ? { backgroundImage: `url(${s.headshot})` } : undefined}
              aria-hidden="true"
            />
            <span className="sp-name">{s.name}</span>
            <span className="sp-dots" aria-hidden="true" />
            <span className="sp-role">{s.role}</span>
          </li>
        )}
        <li className="sp-row sp-row--ghost">
          <span className="sp-no">02</span>
          <span className="headshot-hept sp-headshot" aria-hidden="true" />
          <span className="sp-name">MORE SPEAKERS COMING SOON</span>
          <span className="sp-dots" aria-hidden="true" />
          <span className="sp-role">SL/26 cohort — TBA</span>
        </li>
      </ul>
    </section>);

}

// ─── VENUE ─────────────────────────────────────────────────────────
function Venue() {
  return (
    <section id="venue" className="venue">
      <div className="venue-l">
        <div className="section-no">§ 04</div>
        <div className="section-label">Venue + Run-of-Show</div>
        <h2 className="venue-h2">
          One morning.<br /><em>Midtown Manhattan.</em>
        </h2>
        <div className="venue-addr">
          <div className="venue-addr-name">LOCATION TO BE ANNOUNCED</div>
          <div>Manhattan</div>
          <div>New York, NY</div>
        </div>
        <a className="link" href="#" target="_blank" rel="noreferrer">
          Open in maps <ArrowIcon />
        </a>
      </div>
      <div className="venue-r">
        <div className="ros">
          {[
          ['09:30', 'Doors open', 'Coffee, croissants, decks closed.'],
          ['10:00', 'Speakers begin', 'Six sessions, ~15 minutes each.'],
          ['11:30', 'Light bites & drinks', 'Real conversation, no badges.'],
          ['12:30', 'The Finish Line', 'Out the door. Back to building.']].
          map(([t, label, sub]) =>
          <div key={t} className="ros-row">
              <div className="ros-t">{t}</div>
              <div className="ros-l">
                <div className="ros-label">{label}</div>
                <div className="ros-sub">{sub}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ─── PRESS ─────────────────────────────────────────────────────────
function Press() {
  return (
    <section id="press" className="press">
      <div className="press-hd">
        <div className="section-no">§ 05</div>
        <div className="section-label">Testimonials</div>
      </div>
      <div className="press-grid">
        {PRESS_QUOTES.map((q) =>
        <figure key={q.source} className="press-q">
            <div className="press-mark">"</div>
            <blockquote>{q.quote}</blockquote>
            <figcaption>
              <span
                className="headshot-hept"
                style={q.headshot ? { backgroundImage: `url(${q.headshot})` } : undefined}
                aria-hidden="true"
              />
              <span>— {q.source}</span>
            </figcaption>
          </figure>
        )}
      </div>
    </section>);

}

// ─── GALLERY ───────────────────────────────────────────────────────
function Gallery() {
  // Use video thumbnails as a stand-in gallery (real photos can swap in)
  const tiles = SL25_VIDEOS.slice(0, 6);
  return (
    <section className="gallery">
      <div className="gallery-hd">
        <div className="section-no">§ 06</div>
        <div className="section-label">SL/25 in the room</div>
      </div>
      <div className="gallery-grid">
        {tiles.map((t, i) =>
        <div key={i} className={`gal gal--${i + 1}`}>
            <img src={`https://img.youtube.com/vi/${t.id}/sddefault.jpg`} alt="" />
            <div className="gal-cap"><span>SL/25</span><span>{String(i + 1).padStart(2, '0')}/06</span></div>
          </div>
        )}
      </div>
    </section>);

}

// ─── SPONSORS ──────────────────────────────────────────────────────
function Sponsors() {
  const partners = ['Airbnb', 'ATHLOS', 'Cash App', 'Essentia Water', 'ION Television', 'Tiffany & Co.'];
  return (
    <section className="sponsors">
      <div className="sponsors-hd">
        <div className="section-no">§ 07</div>
        <div className="section-label">SL/26 PARTNERS</div>
      </div>
      <div className="sponsors-marquee">
        <div className="sponsors-track">
          {[...partners, ...partners, ...partners].map((p, i) =>
          <span key={i} className="sponsor">{p}</span>
          )}
        </div>
      </div>
    </section>);

}

// ─── WAITLIST + NEWSLETTER ─────────────────────────────────────────
function Waitlist() {
  return (
    <section id="waitlist" className="waitlist" style={{ backgroundColor: "rgb(42, 10, 28)" }}>
      <div className="waitlist-no">§ 08</div>
      <h2 className="waitlist-h2">
        Get on the line.
      </h2>
      <p className="waitlist-p">
        For everything we publish in the meantime.
      </p>

      <div className="waitlist-news">
        <iframe
          src="https://subscribe-forms.beehiiv.com/ab15edf6-94dd-4b8f-9d03-d2dff9d930d6"
          className="beehiiv-embed"
          data-test-id="beehiiv-embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '400px', height: '47px', margin: 0, border: 0, backgroundColor: 'transparent', boxShadow: 'none', maxWidth: '100%' }}
          title="Subscribe to the newsletter" />
      </div>

      <div className="waitlist-foot">
        Hosted by <a href="http://sevensevensix.com" target="_blank" rel="noreferrer">Seven Seven Six</a> &nbsp;&amp;&nbsp;
        <a href="http://athlos.com" target="_blank" rel="noreferrer">ATHLOS</a>
      </div>
    </section>);

}

// ─── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="site-ft">
      <div className="site-ft-mark">
        <div className="site-ft-glyph">SL/26</div>
        <div className="site-ft-tag">The Starting Line Conference</div>
      </div>
      <div className="site-ft-cols">
        <div>
          <div className="micro">Site</div>
          <a href="#about">About</a>
          <a href="#sessions">Sessions</a>
          <a href="#speakers">Speakers</a>
          <a href="#venue">Venue</a>
        </div>
        <div>
          <div className="micro">Hosts</div>
          <a href="http://sevensevensix.com">Seven Seven Six</a>
          <a href="http://athlos.com">ATHLOS</a>
        </div>
        <div>
          <div className="micro">Watch</div>
          <a href={`https://www.youtube.com/playlist?list=PLxMBSfqMrDTV0nIstFP-N3gNlUDZQkcU7`} target="_blank" rel="noreferrer">SL/25 playlist</a>
        </div>
      </div>
      <div className="site-ft-base">
        <div>© 2026 Seven Seven Six</div>
        <div>Made for builders, not lanyards.</div>
      </div>
    </footer>);

}

Object.assign(window, {
  Header, Hero, About, VideoMosaic, Theater,
  Speakers, Venue, Press, Gallery, Sponsors, Waitlist, Footer
});