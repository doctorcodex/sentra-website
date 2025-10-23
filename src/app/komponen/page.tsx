// Developed by doctorcodex
// Components showcase page - Appreciation to shadcn/ui community with sentra/ui branding

'use client';

import Link from 'next/link';
import { 
  Box, 
  Calendar, 
  CheckSquare, 
  ChevronRight, 
  Circle, 
  Command, 
  FileText, 
  Grid3x3, 
  Heart, 
  Layout, 
  Menu, 
  MessageSquare, 
  Package, 
  Settings, 
  Sparkles, 
  Star, 
  Table, 
  Type, 
  Zap 
} from 'lucide-react';

interface ComponentCard {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  category: 'form' | 'layout' | 'data' | 'feedback' | 'navigation' | 'overlay';
}

const components: ComponentCard[] = [
  {
    name: 'Button',
    description: 'Tombol aksi dengan berbagai varian dan ukuran.',
    icon: <Zap className="h-5 w-5" />,
    href: '/komponen/button',
    category: 'form',
  },
  {
    name: 'Input',
    description: 'Kolom input teks dengan validasi dan state.',
    icon: <Type className="h-5 w-5" />,
    href: '/komponen/input',
    category: 'form',
  },
  {
    name: 'Card',
    description: 'Kontainer konten dengan header dan footer.',
    icon: <Box className="h-5 w-5" />,
    href: '/komponen/card',
    category: 'layout',
  },
  {
    name: 'Badge',
    description: 'Label status dan tag informatif.',
    icon: <Circle className="h-5 w-5" />,
    href: '/komponen/badge',
    category: 'feedback',
  },
  {
    name: 'Avatar',
    description: 'Gambar profil dengan fallback dan indikator.',
    icon: <Star className="h-5 w-5" />,
    href: '/komponen/avatar',
    category: 'data',
  },
  {
    name: 'Table',
    description: 'Tabel data dengan sorting dan pagination.',
    icon: <Table className="h-5 w-5" />,
    href: '/komponen/table',
    category: 'data',
  },
  {
    name: 'Dialog',
    description: 'Modal dialog untuk konfirmasi dan form.',
    icon: <MessageSquare className="h-5 w-5" />,
    href: '/komponen/dialog',
    category: 'overlay',
  },
  {
    name: 'Tabs',
    description: 'Navigasi tab untuk konten tersegmentasi.',
    icon: <Layout className="h-5 w-5" />,
    href: '/komponen/tabs',
    category: 'navigation',
  },
  {
    name: 'Breadcrumb',
    description: 'Navigasi hierarki halaman.',
    icon: <ChevronRight className="h-5 w-5" />,
    href: '/komponen/breadcrumb',
    category: 'navigation',
  },
  {
    name: 'Checkbox',
    description: 'Kotak centang untuk seleksi multiple.',
    icon: <CheckSquare className="h-5 w-5" />,
    href: '/komponen/checkbox',
    category: 'form',
  },
  {
    name: 'Calendar',
    description: 'Pemilih tanggal dan date range.',
    icon: <Calendar className="h-5 w-5" />,
    href: '/komponen/calendar',
    category: 'form',
  },
  {
    name: 'Command',
    description: 'Command palette untuk navigasi cepat.',
    icon: <Command className="h-5 w-5" />,
    href: '/komponen/command',
    category: 'navigation',
  },
  {
    name: 'Form',
    description: 'Komponen form dengan validasi lengkap.',
    icon: <FileText className="h-5 w-5" />,
    href: '/komponen/form',
    category: 'form',
  },
  {
    name: 'Grid',
    description: 'Sistem grid responsif untuk layout.',
    icon: <Grid3x3 className="h-5 w-5" />,
    href: '/komponen/grid',
    category: 'layout',
  },
  {
    name: 'Menu',
    description: 'Menu dropdown dan context menu.',
    icon: <Menu className="h-5 w-5" />,
    href: '/komponen/menu',
    category: 'navigation',
  },
  {
    name: 'Settings',
    description: 'Panel pengaturan dengan switch dan toggle.',
    icon: <Settings className="h-5 w-5" />,
    href: '/komponen/settings',
    category: 'form',
  },
];

const categories = [
  { id: 'form', label: 'Form & Input', color: '#F71D25' },
  { id: 'layout', label: 'Layout', color: '#0085FF' },
  { id: 'data', label: 'Data Display', color: '#FEE505' },
  { id: 'feedback', label: 'Feedback', color: '#002157' },
  { id: 'navigation', label: 'Navigation', color: '#F71D25' },
  { id: 'overlay', label: 'Overlay', color: '#0085FF' },
];

export default function KomponenPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 24px 60px',
        backgroundColor: 'var(--bg-alt)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Appreciation Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '6px 12px',
            backgroundColor: 'rgba(247, 29, 37, 0.08)',
            border: '1px solid rgba(247, 29, 37, 0.2)',
            borderRadius: '6px',
            marginBottom: '24px',
          }}>
            <Heart className="h-4 w-4" style={{ color: '#F71D25' }} />
            <span style={{ 
              fontSize: '12px', 
              fontWeight: 600,
              color: 'var(--fg)',
              letterSpacing: '0.02em',
            }}>
              TERINSPIRASI DARI SHADCN/UI
            </span>
          </div>

          <h1 style={{ 
            fontSize: '48px', 
            lineHeight: '56px',
            fontWeight: 700,
            color: 'var(--fg)',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            Komponen UI sentra/ui
          </h1>
          
          <p style={{ 
            fontSize: '18px', 
            lineHeight: '28px',
            color: 'var(--muted)',
            maxWidth: '720px',
            marginBottom: '32px',
          }}>
            Koleksi komponen yang dibangun dengan{' '}
            <strong style={{ color: 'var(--fg)' }}>sentra/ui design system</strong> —
            padat, presisi, dan modular. Semua komponen mendukung dark mode secara native.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="#komponen"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#F71D25',
                color: '#ffffff',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(247, 29, 37, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Lihat Komponen
              <ChevronRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: 'var(--fg)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--fg)';
                e.currentTarget.style.backgroundColor = 'var(--bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Sparkles className="h-4 w-4" />
              Kunjungi shadcn/ui
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ 
        padding: '32px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--bg-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--fg)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.color;
                  e.currentTarget.style.backgroundColor = `${cat.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-alt)';
                }}
              >
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%',
                  backgroundColor: cat.color,
                }} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section id="komponen" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '32px', 
            lineHeight: '40px',
            fontWeight: 700,
            color: 'var(--fg)',
            marginBottom: '40px',
            textAlign: 'center',
          }}>
            Semua Komponen
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}>
            {components.map((comp) => {
              const category = categories.find((c) => c.id === comp.category);
              return (
                <a
                  key={comp.name}
                  href={comp.href}
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = category?.color || 'var(--border)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {/* Category Indicator */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, transparent 50%, ${category?.color}15 50%)`,
                  }} />

                  {/* Icon */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${category?.color}15`,
                    borderRadius: '6px',
                    color: category?.color,
                  }}>
                    {comp.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--fg)',
                      marginBottom: '4px',
                    }}>
                      {comp.name}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      lineHeight: '20px',
                      color: 'var(--muted)',
                    }}>
                      {comp.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{ 
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: category?.color,
                  }}>
                    Lihat Detail
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appreciation Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: 'var(--bg-alt)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(247, 29, 37, 0.1)',
            borderRadius: '50%',
            marginBottom: '24px',
          }}>
            <Heart className="h-8 w-8" style={{ color: '#F71D25' }} />
          </div>

          <h2 style={{
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: 700,
            color: 'var(--fg)',
            marginBottom: '16px',
          }}>
            Terima Kasih kepada shadcn/ui
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '26px',
            color: 'var(--muted)',
            marginBottom: '32px',
          }}>
            sentra/ui terinspirasi dari filosofi desain{' '}
            <a 
              href="https://ui.shadcn.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--fg)', 
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              shadcn/ui
            </a>
            {' '}— sistem komponen yang bersih, modular, dan copy-paste friendly. 
            Kami sangat menghargai kontribusi{' '}
            <a 
              href="https://twitter.com/shadcn" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--fg)', 
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              @shadcn
            </a>
            {' '}dan komunitas open-source yang telah membangun ekosistem luar biasa ini.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#000000',
                color: '#ffffff',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Package className="h-4 w-4" />
              Kunjungi shadcn/ui
            </Link>

            <Link
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'var(--fg)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--fg)';
                e.currentTarget.style.backgroundColor = 'var(--bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Star className="h-4 w-4" />
              Star di GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section style={{
        padding: '40px 24px',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontSize: '13px',
            color: 'var(--muted)',
          }}>
            Dibangun dengan{' '}
            <span style={{ color: '#F71D25' }}>♥</span>
            {' '}oleh{' '}
            <strong style={{ color: 'var(--fg)' }}>doctorcodex</strong>
            {' '}menggunakan Next.js 15, React 19, TypeScript, dan Tailwind CSS
          </p>
        </div>
      </section>
    </div>
  );
}

