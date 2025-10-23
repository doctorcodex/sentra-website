// Developed by doctorcodex
// Footer component - Shadcn UI Blocks Footer 04 design

'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type NavItem = { name: string; href: React.ComponentProps<typeof Link>['href'] };

type Navigation = {
  product: NavItem[];
  company: NavItem[];
  resources: NavItem[];
  legal: NavItem[];
};

export default function SentraFooter() {
  const navigation: Navigation = {
    product: [
      { name: 'Clinical Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
    ],
    company: [
      { name: 'About SENTRA', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Clinical FAQ', href: '#faq' },
      { name: 'Support', href: '#support' },
      { name: 'Status', href: '#status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'HIPAA Compliance', href: '#hipaa' },
      { name: 'Security', href: '#security' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@sentra-aadi.com' },
  ];

  return (
    <footer className="bg-[#002157] border-t border-[#002157]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-start gap-6">
              <Image
                src="/logo/logosentra-dark.png"
                alt="SENTRA Logo"
                width={120}
                height={40}
                className="h-auto w-auto flex-shrink-0"
                priority
              />
              <p className="text-sm leading-relaxed text-gray-300 italic">
                All content featured on this website, including but not limited to text, graphics,
                logos, images, audio clips, video clips, digital downloads, data compilations, and
                software, is the exclusive property of Sentra and its content suppliers, and is
                protected by international copyright and intellectual property laws.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white hover:text-[#002157] transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:text-right">
            <div className="flex flex-wrap gap-4 items-center lg:justify-end">
              <span className="text-[17px] leading-[1.8] font-medium text-white">Legal</span>
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[17px] leading-[1.8] font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-[17px] leading-[1.8] font-medium text-gray-300">
              <p>
                System Architecture & Build Engineering by{' '}
                <span className="font-semibold text-white">Doctorcodex</span>
              </p>
              <p className="mt-1 flex items-center justify-end gap-2">
                Dedicated for Delaiau with <span className="text-red-500">♥</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
