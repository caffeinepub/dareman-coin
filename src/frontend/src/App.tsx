import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Rocket,
  Wallet,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiOpensea, SiX } from "react-icons/si";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const MASCOT_IMG =
  "/assets/uploads/screenshot_24-3-2026_7475_opensea.io-019d1dac-606b-756d-8d78-ed17709e1cae-1.jpeg";
const OPENSEA1 =
  "/assets/uploads/screenshot_24-3-2026_7516_opensea.io-019d1dac-63c5-769c-aaab-368f7e05ddad-2.jpeg";
const OPENSEA2 =
  "/assets/uploads/screenshot_24-3-2026_75121_opensea.io-019d1dac-65fc-7168-bb5f-8910358bb2c7-3.jpeg";

const OPENSEA_URL = "https://opensea.io/collection/dareman-nfts";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "buy", label: "How to Buy" },
  { id: "community", label: "Community" },
] as const;

const STEPS = [
  {
    n: 1,
    title: "Get a Solana Wallet",
    desc: "Download Phantom or Solflare \u2014 free, fast, takes 2 minutes.",
  },
  {
    n: 2,
    title: "Buy SOL",
    desc: "Fund your wallet with SOL from Coinbase, Binance, or any exchange.",
  },
  {
    n: 3,
    title: "Find DAREMAN on pump.fun",
    desc: "Go to pump.fun and search for DAREMAN or paste the contract address.",
  },
  {
    n: 4,
    title: "Swap SOL for $DAREMAN",
    desc: "Smash that swap button and join the legend. Welcome to the family.",
  },
];

const TICKER_DOUBLE = [
  { id: "t1", text: "$DAREMAN" },
  { id: "t2", text: "\uD83D\uDE80 TO THE MOON" },
  { id: "t3", text: "0% TAX" },
  { id: "t4", text: "BORN FROM FAILURE" },
  { id: "t5", text: "BACK FROM THE DEAD" },
  { id: "t6", text: "PUMP.FUN" },
  { id: "t7", text: "1B SUPPLY" },
  { id: "t8", text: "\uD83D\uDC8E DIAMOND HANDS" },
  { id: "t9", text: "$DAREMAN" },
  { id: "t10", text: "\uD83D\uDE80 TO THE MOON" },
  { id: "t11", text: "0% TAX" },
  { id: "t12", text: "BORN FROM FAILURE" },
  { id: "t13", text: "BACK FROM THE DEAD" },
  { id: "t14", text: "PUMP.FUN" },
  { id: "t15", text: "1B SUPPLY" },
  { id: "t16", text: "\uD83D\uDC8E DIAMOND HANDS" },
];

const ORIGIN_CARDS = [
  {
    icon: "\uD83D\uDC80",
    title: "2022",
    desc: "Launched daremannfts \u2014 55 unique NFTs on Polygon. The market? Not ready. The community? Scattered.",
  },
  {
    icon: "\uD83D\uDD25",
    title: "The Rebirth",
    desc: "Born from a failed NFT experiment, Dareman rose from the ashes. What couldn't be killed on Ethereum lives again on Solana.",
  },
  {
    icon: "\uD83D\uDE80",
    title: "2025+",
    desc: "Now a meme coin on pump.fun. Same energy, zero tax, infinite potential. The dare continues.",
  },
];

const NFT_IMGS = [
  { src: OPENSEA1, alt: "daremannfts collection 1" },
  { src: OPENSEA2, alt: "daremannfts collection 2" },
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const CA = "TBA";

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handler = () => setMobileMenuOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ── Sticky Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/50">
              <img
                src={MASCOT_IMG}
                alt="Dareman mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-gradient-orange">
              DAREMAN
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-primary/90 hover:bg-primary text-primary-foreground font-semibold glow-orange"
              asChild
              data-ocid="nav.primary_button"
            >
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $DAREMAN
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((v) => !v);
            }}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border/50 bg-background/95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {NAV_LINKS.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollTo(id)}
                    className="text-sm font-medium text-left py-1"
                    data-ocid="nav.link"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground w-full mt-1"
                  asChild
                  data-ocid="nav.primary_button"
                >
                  <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy $DAREMAN
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Ticker ── */}
      <div className="fixed top-16 left-0 right-0 z-40 overflow-hidden h-8 bg-primary/90 flex items-center">
        <div className="animate-ticker flex whitespace-nowrap">
          {TICKER_DOUBLE.map((item) => (
            <span
              key={item.id}
              className="inline-block px-6 text-xs font-display font-bold text-primary-foreground tracking-widest"
            >
              {item.text} <span className="opacity-50 mx-2">\u2022</span>
            </span>
          ))}
        </div>
      </div>

      <main>
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 bg-grid"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 font-semibold text-sm px-4 py-1.5">
                \uD83D\uDE80 Now Live on pump.fun
              </Badge>
            </motion.div>

            <motion.div
              className="animate-float mb-8"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110" />
                <img
                  src={MASCOT_IMG}
                  alt="Dareman Mascot"
                  className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-primary/60 glow-orange"
                />
              </div>
            </motion.div>

            <motion.h1
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 text-gradient-orange leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              DAREMAN COIN
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              The legend that refused to die. From failed NFT to meme coin glory
              \u2014
              <span className="text-primary font-semibold">
                {" "}
                $DAREMAN is back on pump.fun.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-base px-8 h-14 glow-orange group"
                asChild
                data-ocid="hero.primary_button"
              >
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Buy on pump.fun
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border/60 bg-muted/30 hover:bg-muted/50 text-foreground font-semibold h-14 px-8"
                onClick={() => scrollTo("buy")}
                data-ocid="hero.secondary_button"
              >
                <Wallet className="mr-2 h-4 w-4" />
                How to Buy
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 bg-card/60 border border-border/50 rounded-full px-5 py-2.5 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <span className="text-muted-foreground text-sm font-medium">
                CA:
              </span>
              <span className="font-mono text-sm text-foreground">{CA}</span>
              <button
                type="button"
                onClick={handleCopy}
                className="ml-1 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Copy contract address"
                data-ocid="hero.button"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-accent" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
          <div className="relative max-w-4xl mx-auto">
            <FadeIn className="text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                The Origin Story
              </Badge>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gradient-orange mb-8">
                The Legend Never Dies
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {ORIGIN_CARDS.map((item) => (
                <FadeIn
                  key={item.title}
                  delay={ORIGIN_CARDS.indexOf(item) * 0.15}
                >
                  <div className="bg-card/60 border border-border/50 rounded-2xl p-6 text-center hover:border-primary/40 transition-colors">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4} className="mt-10">
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto italic border-l-4 border-primary pl-5 text-left">
                "Born from a failed NFT experiment in 2022, Dareman is back
                \u2014 this time as a meme coin.
                <span className="text-primary font-semibold">
                  {" "}
                  The legend never dies.
                </span>
                "
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── How to Buy ── */}
        <section id="buy" className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
          <div className="relative max-w-4xl mx-auto">
            <FadeIn className="text-center mb-14">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                How to Buy
              </Badge>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gradient-orange">
                Get $DAREMAN in 4 Steps
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-6">
              {STEPS.map((step) => (
                <FadeIn key={step.n} delay={step.n * 0.1}>
                  <div className="flex items-start gap-5 bg-card/60 border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-colors">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-extrabold text-xl glow-orange">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.5} className="text-center mt-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold text-base px-10 h-14 glow-orange"
                asChild
                data-ocid="buy.primary_button"
              >
                <a
                  href="https://pump.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Go to pump.fun
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ── NFT Legacy ── */}
        <section id="legacy" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <Badge className="mb-4 bg-muted text-muted-foreground border-border">
                NFT Legacy
              </Badge>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
                Where It All Started
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                55 unique Dareman NFTs on Polygon, 2022
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {NFT_IMGS.map((img, idx) => (
                <FadeIn key={img.alt} delay={idx * 0.2}>
                  <div className="bg-card/60 border border-border/50 rounded-2xl overflow-hidden group hover:border-primary/40 transition-colors">
                    <div className="relative overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-background/70 text-foreground border-border backdrop-blur-sm">
                          daremannfts \u2014 OpenSea 2022
                        </Badge>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.4} className="text-center mt-8">
              <a
                href={OPENSEA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                data-ocid="legacy.link"
              >
                <SiOpensea className="h-4 w-4" />
                View original collection on OpenSea
                <ExternalLink className="h-3 w-3" />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ── Community ── */}
        <section id="community" className="py-24 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
          <div className="relative max-w-3xl mx-auto text-center">
            <FadeIn>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Community
              </Badge>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gradient-orange mb-4">
                Join the Army
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                The dare never sleeps. Follow us, shill us, become a Dareman.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-foreground/10 hover:bg-foreground/20 text-foreground border border-border/50 font-semibold h-14 px-8 w-full sm:w-auto"
                  asChild
                  data-ocid="community.primary_button"
                >
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiX className="mr-3 h-5 w-5" />
                    Follow on X (Twitter)
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border/50 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/40">
                <img
                  src={MASCOT_IMG}
                  alt="Dareman"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-gradient-orange">
                $DAREMAN
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a
                href={OPENSEA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                <SiOpensea className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-border/30 pt-6 space-y-3 text-center">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              $DAREMAN is a meme coin with no intrinsic value or expectation of
              financial return. For entertainment purposes only. Not financial
              advice. Always do your own research.
            </p>
            <p className="text-xs text-muted-foreground/60">
              &copy; {new Date().getFullYear()}. Built with \u2764\uFE0F using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-muted-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
