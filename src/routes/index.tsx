import { createFileRoute } from "@tanstack/react-router";
import { Music2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import birthdayMusic from "@/assets/hoorish-birthday-theme.mp3.asset.json";
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
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef<number | null>(null);

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

  useEffect(() => {
    void fadeInMusic();
    return clearFade;
  }, [clearFade, fadeInMusic]);

  const openInvitation = () => {
    if (opened) return;
    setCelebrating(true);
    setOpened(true);
    if (!musicPlaying && musicEnabled) void fadeInMusic();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => document.getElementById("invitation")?.scrollIntoView({ block: "start" }), reduceMotion ? 120 : 2400);
    window.setTimeout(() => setCelebrating(false), reduceMotion ? 300 : 6100);
  };

  const toggleMusic = () => {
    if (musicPlaying) {
      setMusicEnabled(false);
      fadeOutMusic();
      return;
    }
    setMusicEnabled(true);
    const audio = audioRef.current;
    if (audio) audio.volume = 0;
    void fadeInMusic();
  };

  const replayInvitation = () => {
    if (replaying) return;
    setCelebrating(false);
    setReplaying(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      setOpened(false);
    }, reduceMotion ? 20 : 600);
    window.setTimeout(() => setReplaying(false), reduceMotion ? 120 : 1350);
  };

  return (
    <main className={`${opened ? "invitation-open" : "invitation-closed"} ${replaying ? "invitation-replaying" : ""}`}>
      <div className="replay-veil" aria-hidden="true"><span>H</span></div>
      <section className="opening" aria-label="Invitation cover">
        <div className="opening-ambient opening-ambient-left"><Flourish /></div>
        <div className="opening-ambient opening-ambient-right"><Flourish mirrored /></div>
        <div className="stationery-stage">
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
          <div className="envelope-pocket">
            <span className="pocket-edge" />
            <div className="pocket-botanical pocket-botanical-left"><Flourish /></div>
            <div className="pocket-botanical pocket-botanical-right"><Flourish mirrored /></div>
            <span className="pocket-medallion">HF</span>
          </div>
          <div className="seal-wrap">
            <Button variant="seal" size="seal" onClick={openInvitation} aria-label="Open invitation" disabled={opened}>
              <span>H</span>
            </Button>
            <span className="open-label" aria-hidden="true">Open invitation</span>
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
        </header>

        <section className="portrait-section section-shell" aria-labelledby="portrait-title">
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
          </Reveal>
        </footer>

        <audio ref={audioRef} src={birthdayMusic.url} loop preload="auto" aria-hidden="true" />
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
