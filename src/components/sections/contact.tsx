import { useState, type ChangeEvent, type FormEvent } from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper, FadeIn } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { useLocale } from "@/context/locale-context";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { t } = useLocale();
  const { title, subtitle, info, form } = t.contact;

  const contactInfo = [
    {
      icon: HiMail,
      label: info.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: HiPhone,
      label: info.phone,
      value: profile.phone,
      href: profile.phoneHref,
    },
    {
      icon: HiLocationMarker,
      label: info.location,
      value: profile.location,
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="grid gap-10 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-3">
          <Card hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-base font-medium">
                  {form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-base font-medium">
                  {form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-base transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-base font-medium">
                  {form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-base transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={form.messagePlaceholder}
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {isSubmitted ? form.submitted : form.submit}
              </Button>
            </form>
          </Card>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
