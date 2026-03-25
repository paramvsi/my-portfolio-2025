import Link from "next/link";

const socialLinks = [
  { name: "Github", href: "https://github.com/paramvsi" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/paramveer-singh-3623a9183/" },
  { name: "Email", href: "mailto:paramsinghkhattra@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full gap-6 max-w-7xl mx-auto">
        <div className="font-body text-xs text-on-surface-variant/50 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Paramveer Singh. Built with intent.
        </div>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-on-surface-variant/40 hover:text-primary transition-all font-medium tracking-wide hover:-translate-y-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
