// Developed by doctorcodex
// Layout with sidebar navigation for component documentation pages

'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  title: string;
  href: string;
  category?: string;
}

const navigation: NavItem[] = [
  // Form & Input
  { title: 'Button', href: '/komponen/button', category: 'Form & Input' },
  { title: 'Input', href: '/komponen/input', category: 'Form & Input' },
  { title: 'Checkbox', href: '/komponen/checkbox', category: 'Form & Input' },
  { title: 'Form', href: '/komponen/form', category: 'Form & Input' },
  { title: 'Settings', href: '/komponen/settings', category: 'Form & Input' },
  
  // Layout
  { title: 'Card', href: '/komponen/card', category: 'Layout' },
  { title: 'Grid', href: '/komponen/grid', category: 'Layout' },
  
  // Data Display
  { title: 'Avatar', href: '/komponen/avatar', category: 'Data Display' },
  { title: 'Table', href: '/komponen/table', category: 'Data Display' },
  { title: 'Badge', href: '/komponen/badge', category: 'Data Display' },
  
  // Navigation
  { title: 'Breadcrumb', href: '/komponen/breadcrumb', category: 'Navigation' },
  { title: 'Tabs', href: '/komponen/tabs', category: 'Navigation' },
  { title: 'Menu', href: '/komponen/menu', category: 'Navigation' },
  { title: 'Command', href: '/komponen/command', category: 'Navigation' },
  
  // Overlay
  { title: 'Dialog', href: '/komponen/dialog', category: 'Overlay' },
  
  // Other
  { title: 'Calendar', href: '/komponen/calendar', category: 'Form & Input' },
];

const categories = [
  'Form & Input',
  'Layout',
  'Data Display',
  'Navigation',
  'Overlay',
];

export default function KomponenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isIndexPage = pathname === '/komponen';

  // Don't show sidebar on index page
  if (isIndexPage) {
    return <>{children}</>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--bg-alt)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#F71D25';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        {sidebarOpen ? (
          <X className="h-5 w-5" style={{ color: 'var(--fg)' }} />
        ) : (
          <Menu className="h-5 w-5" style={{ color: 'var(--fg)' }} />
        )}
      </button>

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: sidebarOpen ? 0 : '-280px',
          width: '280px',
          height: '100vh',
          backgroundColor: 'var(--bg-alt)',
          borderRight: '1px solid var(--border)',
          overflowY: 'auto',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 40,
          padding: '80px 0 24px',
        }}
      >
        <div style={{ padding: '0 24px' }}>
          {/* Logo/Title */}
          <Link
            href="/komponen"
            style={{
              display: 'block',
              marginBottom: '24px',
              textDecoration: 'none',
            }}
          >
            <h2 style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--fg)',
              marginBottom: '4px',
            }}>
              sentra/ui
            </h2>
            <p style={{
              fontSize: '12px',
              color: 'var(--muted)',
            }}>
              Component Library
            </p>
          </Link>

          {/* Navigation by Category */}
          {categories.map((category) => {
            const items = navigation.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category} style={{ marginBottom: '24px' }}>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '8px',
                  padding: '0 12px',
                }}>
                  {category}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '6px',
                          fontSize: '14px',
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? '#F71D25' : 'var(--fg)',
                          backgroundColor: isActive ? 'rgba(247, 29, 37, 0.08)' : 'transparent',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          display: 'block',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'var(--bg)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Footer Links */}
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
          }}>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: '8px 12px',
                fontSize: '13px',
                color: 'var(--muted)',
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg)';
                e.currentTarget.style.color = 'var(--fg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              shadcn/ui →
            </a>
            <Link
              href="/"
              style={{
                display: 'block',
                padding: '8px 12px',
                fontSize: '13px',
                color: 'var(--muted)',
                textDecoration: 'none',
                borderRadius: '6px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg)';
                e.currentTarget.style.color = 'var(--fg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </aside>

      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 30,
          }}
        />
      )}

      {/* Main Content - shifted on desktop */}
      <main
        style={{
          flex: 1,
          marginLeft: '0',
          transition: 'margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </main>
    </div>
  );
}

