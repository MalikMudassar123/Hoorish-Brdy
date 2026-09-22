import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Music2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hoorish Fatima — Birthday Invitation" },
      {
        name: "description",
        content: "You are warmly invited to Hoorish Fatima’s first birthday on 16 October.",
      },
      { property: "og:title", content: "Hoorish Fatima — Birthday Invitation" },
      {
        property: "og:description",
        content: "Hoorish Fatima’s very first birthday — 16 October.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Flourish({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={mirrored ? "flourish -scale-x-100" : "flourish"}
      viewBox="0 0 160 100"
      fill="none"
    >
      <path d="M8 91C48 84 71 57 79 8" />
      <path d="M33 78C23 65 22 54 29 45C41 50 45 61 42 72" />
      <path d="M58 57C48 45 48 34 56 25C68 31 71 42 66 52" />
      <path d="M73 30C82 20 92 18 101 23C99 35 90 41 78 40" />
      <path d="M47 69C56 66 66 68 73 77" />
      <circle cx="104" cy="20" r="3" />
    </svg>
  );
}

function Bird({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={`bird ${className}`} viewBox="0 0 80 42" fill="none">
      <path d="M4 31c13-1 21-7 28-19 3 8 3 14 0 19 10-8 21-10 34-5-11 2-19 7-25 13-8-6-20-9-37-8Z" />
      <path d="M42 18c4-7 10-11 18-12M59 6l7 2" />
    </svg>
  );
}

function CueArrow() {
  return (
    <svg aria-hidden="true" className="cue-arrow" viewBox="0 0 70 84" fill="none">
      <g className="cue-arrow-halo">
        <path className="cue-arrow-line" d="M58 4C66 26 58 50 38 62C30 67 22 70 13 72" />
        <path className="cue-arrow-head" d="M22 63L12 72L25 77" />
      </g>
      <g className="cue-arrow-ink">
        <path className="cue-arrow-line" d="M58 4C66 26 58 50 38 62C30 67 22 70 13 72" />
        <path className="cue-arrow-head" d="M22 63L12 72L25 77" />
      </g>
    </svg>
  );
}

function ScrollBunny() {
  return (
    <svg aria-hidden="true" className="scroll-bunny" viewBox="0 0 132 150" fill="none">
      <defs>
        <radialGradient id="bny-fur" cx="42%" cy="34%" r="70%">
          <stop offset="0" className="bny-fur-hi" />
          <stop offset="1" className="bny-fur-lo" />
        </radialGradient>
        <radialGradient id="bny-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0" className="bny-blush-in" />
          <stop offset="1" className="bny-blush-out" />
        </radialGradient>
        <linearGradient id="bny-tulle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="bny-tulle-top" />
          <stop offset="1" className="bny-tulle-bottom" />
        </linearGradient>
        <linearGradient id="bny-balloon" x1=".2" y1="0" x2=".8" y2="1">
          <stop offset="0" className="bny-balloon-hi" />
          <stop offset="1" className="bny-balloon-lo" />
        </linearGradient>
      </defs>

      <ellipse className="bny-ground" cx="70" cy="143.5" rx="27" ry="3.6" />

      <g className="bny-float">
        <g className="bny-balloon">
          <path className="bny-string" d="M30 55C27 66 39 73 37.5 88" />
          <path
            className="bny-balloon-body"
            d="M30 52C20 44 12 37 12 28C12 21 17 16 23 16C27 16 29.5 18.5 30 21C30.5 18.5 33 16 37 16C43 16 48 21 48 28C48 37 40 44 30 52Z"
          />
          <path className="bny-balloon-shine" d="M17.5 27c0-4 2.6-6.4 6-6.6" />
          <path className="bny-balloon-knot" d="M27.8 55.5L30 51.8l2.2 3.7z" />
        </g>

        <circle className="bny-line bny-fill" cx="90" cy="121" r="6.5" />
        <path
          className="bny-line bny-fill"
          d="M70 86C56 86 48 98 48 112C48 126 57 136 70 136C83 136 92 126 92 112C92 98 84 86 70 86Z"
        />
        <path
          className="bny-line bny-tutu"
          d="M45 114Q70 104 95 114L99 126Q94 130 89 126Q84 132 78 127Q72 133 66 127Q60 132 54 127Q48 130 42 126Z"
        />
        <circle className="bny-glint" cx="58" cy="120" r=".9" />
        <circle className="bny-glint" cx="71" cy="123" r="1" />
        <circle className="bny-glint" cx="84" cy="119" r=".9" />

        <ellipse className="bny-line bny-fill" cx="59" cy="137" rx="9" ry="5.4" />
        <ellipse className="bny-line bny-fill" cx="81" cy="137" rx="9" ry="5.4" />
        <ellipse className="bny-pad" cx="59" cy="137.6" rx="3.4" ry="2.1" />
        <ellipse className="bny-pad" cx="81" cy="137.6" rx="3.4" ry="2.1" />

        <rect
          className="bny-line bny-fill"
          x="47"
          y="93"
          width="10"
          height="21"
          rx="5"
          transform="rotate(125 52 97)"
        />
        <g className="bny-point">
          <rect
            className="bny-line bny-fill"
            x="83"
            y="93"
            width="10"
            height="28"
            rx="5"
            transform="rotate(-35 88 97)"
          />
        </g>
        <path className="bny-hint" d="M102 127.5l3 3 3-3" />

        <g className="bny-ears">
          <path
            className="bny-line bny-fill"
            d="M58 56C52 44 50 26 55 16C59 9 66 12 67 24C68 34 67 46 66 55Z"
          />
          <path
            className="bny-inner"
            d="M59.5 52C56 42 55 29 58 21C60 17 63 19 63.5 26C64 35 63.5 44 63 51Z"
          />
          <g className="bny-ear-flop">
            <path
              className="bny-line bny-fill"
              d="M76 55C77 43 81 28 90 20C97 14 104 18 100 27C97 34 90 42 84 56Z"
            />
            <path
              className="bny-inner"
              d="M79 51C80 41 84 30 90 25C95 21 98 24 96 29C93 35 88 42 83.5 51Z"
            />
          </g>
        </g>

        <ellipse className="bny-line bny-fill" cx="70" cy="70" rx="24" ry="20.5" />
        <g className="bny-eyes">
          <ellipse className="bny-eye" cx="61" cy="71" rx="2.9" ry="3.5" />
          <ellipse className="bny-eye" cx="79" cy="71" rx="2.9" ry="3.5" />
          <circle className="bny-eye-shine" cx="62.1" cy="69.6" r="1.1" />
          <circle className="bny-eye-shine" cx="80.1" cy="69.6" r="1.1" />
        </g>
        <ellipse className="bny-cheek" cx="55" cy="77" rx="4.8" ry="3" />
        <ellipse className="bny-cheek" cx="85" cy="77" rx="4.8" ry="3" />
        <path className="bny-nose" d="M68.2 75.2Q70 74.2 71.8 75.2Q71 77 70 77Q69 77 68.2 75.2Z" />
        <path className="bny-mouth" d="M67 78.4Q68.5 80.3 70 78.4Q71.5 80.3 73 78.4" />

        <g className="bny-bow">
          <path d="M84 52C79 45 73 47 74 52C75 57 80 57 84 52Z" />
          <path d="M84 52C89 45 95 47 94 52C93 57 88 57 84 52Z" />
          <circle cx="84" cy="52" r="2.4" />
        </g>
      </g>

      <path
        className="bny-sparkle bny-sparkle-1"
        d="M110 38l1.2 3.3 3.3 1.2-3.3 1.2-1.2 3.3-1.2-3.3-3.3-1.2 3.3-1.2z"
      />
      <path
        className="bny-sparkle bny-sparkle-2"
        d="M116 84l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z"
      />
      <path
        className="bny-sparkle bny-sparkle-3"
        d="M17 96l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z"
      />
    </svg>
  );
}

// The wax seal cracks and the band peels away before the flap lifts.
const SEAL_PEEL_MS = 900;

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  x: `${8 + ((index * 37) % 84)}%`,
  delay: `${(index % 9) * 0.075}s`,
  duration: `${3.2 + (index % 7) * 0.24}s`,
  drift: `${-145 + ((index * 47) % 290)}px`,
  rotation: `${120 + ((index * 71) % 480)}deg`,
  kind: index % 6,
}));

function CelebrationBurst() {
  return (
    <div className="celebration-burst" aria-hidden="true">
      {particles.map((particle) => (
        <i
          className={`particle particle-${particle.kind}`}
          key={particle.id}
          style={{
            "--particle-x": particle.x,
            "--particle-delay": particle.delay,
            "--particle-duration": particle.duration,
            "--particle-drift": particle.drift,
            "--particle-rotation": particle.rotation,
          } as React.CSSProperties}
        />
      ))}
      <Bird className="opening-bird opening-bird-left" />
      <Bird className="opening-bird opening-bird-center" />
      <Bird className="opening-bird opening-bird-right" />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

function Index() {
  const [opened, setOpened] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [replaying, setReplaying] = useState(false);
  const [breaking, setBreaking] = useState(false);
  const [guideReady, setGuideReady] = useState(false);
  const [scrolledAway, setScrolledAway] = useState(false);
  const openingRef = useRef(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const musicEnabledRef = useRef(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);

  const after = useCallback((ms: number, run: () => void) => {
    timersRef.current.push(window.setTimeout(run, ms));
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const clearFade = useCallback(() => {
    if (fadeRef.current !== null) {
      window.clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  }, []);

  const fadeInMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    clearFade();
    audio.volume = 0;
    try {
      await audio.play();
      setMusicPlaying(true);
      fadeRef.current = window.setInterval(() => {
        const currentAudio = audioRef.current;
        if (!currentAudio) return clearFade();
        currentAudio.volume = Math.min(0.3, currentAudio.volume + 0.024);
        if (currentAudio.volume >= 0.3) clearFade();
      }, 90);
      return true;
    } catch {
      setMusicPlaying(false);
      return false;
    }
  }, [clearFade]);

  const fadeOutMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    fadeRef.current = window.setInterval(() => {
      const currentAudio = audioRef.current;
      if (!currentAudio) return clearFade();
      currentAudio.volume = Math.max(0, currentAudio.volume - 0.028);
      if (currentAudio.volume <= 0) {
        currentAudio.pause();
        setMusicPlaying(false);
        clearFade();
      }
    }, 70);
  }, [clearFade]);

  useEffect(() => {
    document.body.classList.toggle("invitation-is-closed", !opened);
    return () => document.body.classList.remove("invitation-is-closed");
  }, [opened]);

  // Try to autoplay on visit. Browsers usually block this until the visitor interacts,
  // so if it's blocked, start the music on the first tap, click or key press instead.
  useEffect(() => {
    let cancelled = false;
    const events = ["pointerdown", "touchend", "keydown"] as const;
    const detach = () => events.forEach((name) => window.removeEventListener(name, onFirstGesture));
    function onFirstGesture() {
      detach();
      if (musicEnabledRef.current) void fadeInMusic();
    }
    void fadeInMusic().then((started) => {
      if (!started && !cancelled) events.forEach((name) => window.addEventListener(name, onFirstGesture));
    });
    return () => {
      cancelled = true;
      detach();
      clearFade();
    };
  }, [clearFade, fadeInMusic]);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  // Once the guest scrolls, the scroll-down guidance has done its job. It only starts
  // listening after the reveal has settled, so our own scroll to the top doesn't count.
  useEffect(() => {
    if (!guideReady || scrolledAway) return;
    const onScroll = () => {
      if (window.scrollY > 40) setScrolledAway(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [guideReady, scrolledAway]);

  const openInvitation = () => {
    // the whole envelope, the seal and the pill all open it; only the first tap counts
    if (openingRef.current) return;
    openingRef.current = true;
    if (musicEnabledRef.current && audioRef.current?.paused) void fadeInMusic();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollToInvitation = () => document.getElementById("invitation")?.scrollIntoView({ block: "start" });

    if (reduceMotion) {
      setOpened(true);
      setCelebrating(true);
      after(120, scrollToInvitation);
      after(300, () => setCelebrating(false));
      after(700, () => setGuideReady(true));
      return;
    }

    setBreaking(true);
    after(SEAL_PEEL_MS, () => {
      setCelebrating(true);
      setOpened(true);
    });
    after(SEAL_PEEL_MS + 2400, scrollToInvitation);
    after(SEAL_PEEL_MS + 3500, () => setGuideReady(true));
    after(SEAL_PEEL_MS + 6100, () => setCelebrating(false));
  };

  const toggleMusic = () => {
    if (musicPlaying) {
      musicEnabledRef.current = false;
      fadeOutMusic();
      return;
    }
    musicEnabledRef.current = true;
    const audio = audioRef.current;
    if (audio) audio.volume = 0;
    void fadeInMusic();
  };

  const scrollToStory = () => {
    document.getElementById("her-moment")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const replayInvitation = () => {
    if (replaying) return;
    clearTimers();
    setCelebrating(false);
    setReplaying(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    after(reduceMotion ? 20 : 600, () => {
      window.scrollTo({ top: 0, behavior: "auto" });
      setOpened(false);
      setBreaking(false);
      setGuideReady(false);
      openingRef.current = false;
    });
    after(reduceMotion ? 120 : 1350, () => setReplaying(false));
  };

  return (
    <main className={`${opened ? "invitation-open" : "invitation-closed"} ${replaying ? "invitation-replaying" : ""} ${breaking ? "seal-breaking" : ""}`}>
      <div className="replay-veil" aria-hidden="true"><span>H</span></div>
      <section className="opening" aria-label="Invitation cover">
        <div className="opening-ambient opening-ambient-left"><Flourish /></div>
        <div className="opening-ambient opening-ambient-right"><Flourish mirrored /></div>
        <div className="stationery-stage" onClick={openInvitation}>
          <div className="envelope-shadow" />
          <div className="envelope-back">
            <div className="envelope-liner"><Flourish /><Flourish mirrored /></div>
            <div className="envelope-imprint envelope-imprint-left"><Flourish /></div>
            <div className="envelope-imprint envelope-imprint-right"><Flourish mirrored /></div>
            <span className="envelope-rule envelope-rule-top" />
            <span className="envelope-rule envelope-rule-bottom" />
          </div>
          <div className="envelope-flap">
            <div className="flap-ornament"><Flourish /><span>H</span><Flourish mirrored /></div>
          </div>
          <div className="opening-card-clip">
          <article className="opening-card" aria-hidden={!opened}>
            <div className="opening-card-border">
              <span className="card-corner card-corner-tl" />
              <span className="card-corner card-corner-tr" />
              <span className="card-corner card-corner-bl" />
              <span className="card-corner card-corner-br" />
              <p className="eyebrow">A little celebration</p>
              <h1>Hoorish Fatima</h1>
              <span className="opening-rule" />
              <p className="card-message">is celebrating her very first birthday</p>
              <p className="card-date"><strong>16</strong><span>October</span></p>
              <p className="card-note">A beautiful day is waiting to be celebrated.</p>
            </div>
          </article>
          </div>
          <div className="envelope-pocket">
            <span className="pocket-edge" />
            <div className="pocket-botanical pocket-botanical-left"><Flourish /></div>
            <div className="pocket-botanical pocket-botanical-right"><Flourish mirrored /></div>
            <span className="pocket-medallion">HF</span>
          </div>
          <div className="seal-stage" aria-hidden="true">
            <span className="wax-band wax-band-left"><i className="band-sheen" /></span>
            <span className="wax-band wax-band-right"><i className="band-sheen" /></span>
            <span className="seal-charge" />
            <span className="seal-shock seal-shock-near" />
            <span className="seal-shock seal-shock-far" />
          </div>
          <div className="seal-wrap">
            <div className="envelope-cue" aria-hidden="true">
              <span className="envelope-cue-text">
                <span className="cue-touch">Tap here</span>
                <span className="cue-pointer">Click here</span>
              </span>
              <CueArrow />
              <span className="envelope-cue-tip" />
            </div>
            <Button
              className="wax-seal"
              variant="seal"
              size="seal"
              onClick={openInvitation}
              aria-label="Open invitation"
              disabled={opened || breaking}
            >
              <span className="wax-body" aria-hidden="true" />
              <span className="wax-ring" aria-hidden="true" />
              <span className="wax-monogram">H</span>
            </Button>
            <button
              type="button"
              className="open-label"
              onClick={openInvitation}
              disabled={opened || breaking}
            >
              Open invitation
            </button>
          </div>
        </div>
      </section>
      {celebrating && <CelebrationBurst />}

      <div id="invitation" className="invitation-page">
        <header className="story-hero section-shell">
          <span className="chapter-number">I</span>
          <div className="corner corner-top-left"><Flourish /><Bird /></div>
          <div className="corner corner-bottom-right"><Flourish mirrored /></div>
          <p className="eyebrow">A little celebration</p>
          <h2><span>Hoorish</span> <em>Fatima</em></h2>
          <p className="hero-copy">Her very first birthday is here…<br />and we would love to celebrate it with you.</p>
          <div className="date-lockup">
            <span>16</span><i /><span>October</span>
          </div>
          <button
            type="button"
            className={`scroll-cue ${guideReady ? "is-ready" : ""} ${scrolledAway ? "is-away" : ""}`}
            onClick={scrollToStory}
            aria-label="Scroll down to see the rest of the invitation"
          >
            <ScrollBunny />
            <span className="scroll-cue-text">Scroll down</span>
            <span className="scroll-cue-track" aria-hidden="true">
              <i />
            </span>
          </button>
        </header>

        <section
          id="her-moment"
          className="portrait-section section-shell"
          aria-labelledby="portrait-title"
        >
          <Reveal className="portrait-stage" delay={80}>
            <span className="portrait-folio" />
            <div className="portrait-frame">
              <img src="/hoorish-fatima.jpeg" alt="Hoorish Fatima smiling and holding a golden balloon" width="1200" height="1600" />
            </div>
            <div className="portrait-bloom portrait-bloom-left"><Flourish /></div>
            <div className="portrait-bloom portrait-bloom-right"><Flourish mirrored /></div>
          </Reveal>
          <Reveal className="portrait-copy" delay={220}>
            <span className="chapter-label">II · Her moment</span>
            <p className="eyebrow">Meet our little star</p>
            <h2 id="portrait-title"><span>Hoorish</span> <em>Fatima</em></h2>
            <p>With a smile that brightens every room and a heart already so dearly loved.</p>
            <div className="portrait-signature">A beautiful little soul</div>
          </Reveal>
        </section>

        <section className="date-section section-shell" aria-label="Celebration date">
          <div className="petal-field" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <Reveal className="date-stationery">
            <span className="chapter-label">III · The day</span>
            <p className="eyebrow">Save the date</p>
            <div className="date-composition">
              <span className="date-month">October</span>
              <strong>16</strong>
              <span className="date-occasion">A birthday celebration</span>
            </div>
            <p className="date-note">For a day filled with little joys, laughter and beautiful memories.</p>
          </Reveal>
        </section>

        <section className="family-section section-shell" aria-labelledby="family-title">
          <div className="family-botanical family-botanical-left"><Flourish /></div>
          <div className="family-botanical family-botanical-right"><Bird /><Flourish mirrored /></div>
          <Reveal>
            <span className="chapter-label">IV · With love</span>
            <p className="eyebrow">With love on her special day</p>
            <h2 id="family-title">Together,<br /><em>we celebrate</em></h2>
            <div className="family-groups">
              <div>
                <span>Her loving parents</span>
                <p>Mr. and Mrs. Mubashir</p>
              </div>
              <div className="family-divider"><span>and</span></div>
              <div>
                <span>Her cherished grandparents</span>
                <p>Mr. and Mrs. Zafar Iqbal</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="details-section section-shell" aria-labelledby="details-title">
          <Reveal className="details-paper">
            <div className="details-line" />
            <span className="chapter-label">V · Let’s celebrate</span>
            <p className="eyebrow">A day made for joy</p>
            <h2 id="details-title">Hoorish Fatima’s<br /><em>Special Day</em></h2>
            <div className="details-date"><strong>16</strong><span>October</span></div>
            <div className="details-venue">
              <MapPin className="details-venue-pin" aria-hidden="true" />
              <span className="details-venue-label">Venue</span>
              <p className="details-venue-name">Al-Hayat Marquee</p>
              <p className="details-venue-address">Halal Road, Near Khawaja Garden</p>
            </div>
            <p className="details-message">Come share the smiles, laughter and little moments that make this day so special.</p>
            <div className="details-line" />
          </Reveal>
        </section>

        <footer className="closing section-shell">
          <Reveal>
            <div className="closing-flourish"><Flourish /><Flourish mirrored /></div>
            <p className="eyebrow">With love</p>
            <h2>For Hoorish Fatima’s<br /><em>Special Day</em></h2>
            <p>We would be delighted to celebrate<br />this special day with you.</p>
            <Button
              className="closing-mark"
              variant="seal"
              size="seal"
              onClick={replayInvitation}
              disabled={replaying}
              aria-label="Close invitation and replay from the envelope"
              title="Replay invitation"
            >
              H
            </Button>
            <span className="closing-hint" aria-hidden="true">
              <span className="cue-touch">Tap to replay</span>
              <span className="cue-pointer">Click to replay</span>
            </span>
          </Reveal>
        </footer>

        <audio ref={audioRef} src="/hoorish-birthday-theme.wav" loop preload="auto" aria-hidden="true" />
        <Button
          className={`music-button ${musicPlaying ? "is-playing" : ""}`}
          variant="seal"
          size="icon"
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause background music" : "Play background music"}
          aria-pressed={musicPlaying}
          title={musicPlaying ? "Pause music" : "Play music"}
        >
          {musicPlaying ? <Music2 /> : <VolumeX />}
        </Button>
      </div>
    </main>
  );
}
