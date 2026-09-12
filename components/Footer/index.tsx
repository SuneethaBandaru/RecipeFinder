import Link from "next/link";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/profile", label: "Profile" },
];

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="w-4 h-4 shrink-0 text-mustard">{children}</span>
);

const MailIcon = () => (
  <IconWrapper>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-full h-full"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  </IconWrapper>
);

const PinIcon = () => (
  <IconWrapper>
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="w-full h-full"
    >
      <path d="M12 22s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  </IconWrapper>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.94c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9v2.82c0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-herb text-paper mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16">
        <div className="min-w-0">
          <p className="font-medium text-mustard text-xl leading-tight">
            Suneetha&apos;s Kitchen
          </p>
          <p className="text-sm text-paper/80 mt-3 max-w-xs leading-relaxed">
            Explore global flavors and bring them to your kitchen 🌍
          </p>
        </div>

        <div>
          <p className="text-mustard font-medium mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block hover:text-mustard hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-mustard font-medium mb-4">Contact Us</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5 min-w-0">
              <MailIcon />
              <a
                href="mailto:hello@suneethaskitchen.com"
                className="min-w-0 break-all hover:text-mustard hover:underline transition-colors"
              >
                hello@suneethaskitchen.com
              </a>
            </li>

            <li className="flex items-center gap-2.5">
              <PinIcon />
              <span>Stockholm, Sweden</span>
            </li>
          </ul>

          <div className="flex items-center gap-5 mt-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-mustard transition-colors"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-mustard transition-colors"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-mustard transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/20 px-5 sm:px-8 py-4 text-center text-xs sm:text-sm text-paper/80">
        <p className="whitespace-nowrap">
          &copy; {new Date().getFullYear()} Suneetha&apos;s Kitchen. Powered by{" "}
          <a
            href="https://www.themealdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-mustard "
          >
            TheMealDB
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
