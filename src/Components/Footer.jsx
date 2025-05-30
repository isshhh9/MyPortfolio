import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex items-center justify-between">
      <p className="w-full text-center">
        &copy; {new Date().getFullYear()} Coded under the stars ✨ by Ishani Nirala
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors ml-auto"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
