// Developed by doctorcodex
// Compact footer for landing template using sentra/ui tokens

export default function SiteFooter() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="meta">© {new Date().getFullYear()} SENTRA • AADI</p>
        <nav aria-label="Legal">
          <a href="#" aria-label="Terms of Service">
            Terms
          </a>
          <a href="#" aria-label="Privacy Policy">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
