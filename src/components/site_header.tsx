// Developed by doctorcodex
// Modern navbar with mobile menu and responsive design using sentra/ui brand tokens

import SentraNavbar from '@/components/ui/sentra-navbar';

export default function SiteHeader() {
  return (
    <SentraNavbar
      logoHref="/"
      navigationLinks={[
        { href: '#features', label: 'sentra one' },
        { href: '#pricing', label: 'our trilogy of trust' },
        { href: '#contact', label: 'sentra/ ui' },
      ]}
      signInText="Sign In"
      ctaText="Get Started"
    />
  );
}
