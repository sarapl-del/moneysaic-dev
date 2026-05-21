export default function Footer() {
  return (
    <footer className="border-t border-muted-border bg-subtle py-14 md:py-16">
      <div className="mx-auto max-w-[1440px] px-9">

        {/* Four columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8 mb-12">

          {/* Column 1 */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center">
              <span className="text-base font-semibold text-dark">moneysaic</span>
            </div>
            <p className="w-[280px] text-base leading-6 text-dark">
              The product layer for<br />regulated finance.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-base leading-6 font-semibold text-dark">moneysaic</span>
            <a href="#integration" className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors">
              Integration
            </a>
            <a href="#features" className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors">
              Features
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-base leading-6 font-semibold text-dark">Company</span>
            <a
              href="https://www.dlabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors"
            >
              About d.labs
            </a>
            <a
              href="https://www.linkedin.com/company/d.labs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base leading-6 font-normal text-dark hover:text-brand transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3">
            <span className="text-base leading-6 font-semibold text-dark">Contact</span>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: "#ECECEC" }} />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex gap-8">
            <a
              href="https://www.iubenda.com/privacy-policy/68152943"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark hover:text-brand transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/68152943"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark hover:text-brand transition-colors"
            >
              Cookie Policy
            </a>
          </nav>
          <a
            href="https://www.linkedin.com/company/d.labs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/images/icon-linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
