import { socialLinks } from "@/data/social-links";
import { Icon } from "@/components/ui/icon";
import { useLocale } from "@/context/locale-context";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-surface hover:text-primary"
            >
              <Icon name={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-base text-muted">
          &copy; {currentYear} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
