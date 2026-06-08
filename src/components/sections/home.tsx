import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/ui/hero-illustration";
import { profile } from "@/data/profile";
import { useLocale } from "@/context/locale-context";

export function Home() {
  const { t } = useLocale();
  const { hero } = t.profile;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col-reverse items-start gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-full flex-col text-left"
          >
            <p className="text-base font-semibold tracking-wide text-foreground">
              {hero.greeting.before}
              <span className="text-gradient-highlight">
                {hero.greeting.highlight}
              </span>
              {hero.greeting.after}
            </p>

            <h2 className="mt-6 max-w-3xl text-highlight font-bold leading-snug tracking-wide text-foreground">
              {hero.subtitle.line1}
              <br />
              {hero.subtitle.line2.before}
              <span className="text-gradient-highlight">
                {hero.subtitle.line2.highlight}
              </span>
            </h2>

            <div className="mt-10">
              <Button
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <HiDownload className="h-4 w-4" />
                {hero.resumeButton}
              </Button>
            </div>
          </motion.div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
