import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "@/data/profile";
import { useLocale } from "@/context/locale-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLocale();

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-highlight font-bold tracking-tight transition-colors hover:text-primary"
        >
          {profile.brand}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-1">
            {t.nav.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {t.nav.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-surface text-primary"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
