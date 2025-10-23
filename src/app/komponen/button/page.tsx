// Developed by doctorcodex
// Button component documentation page with live examples

'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, Download, Heart, Loader2, Mail, Plus, Trash2, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        padding: '16px 24px',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg-alt)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Link
            href="/komponen"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--fg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Komponen
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section style={{ padding: '60px 24px 40px', backgroundColor: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px',
            backgroundColor: 'rgba(247, 29, 37, 0.1)',
            border: '1px solid rgba(247, 29, 37, 0.2)',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#F71D25',
            letterSpacing: '0.05em',
            marginBottom: '16px',
          }}>
            FORM & INPUT
          </div>

          <h1 style={{
            fontSize: '42px',
            lineHeight: '50px',
            fontWeight: 700,
            color: 'var(--fg)',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}>
            Button
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: '26px',
            color: 'var(--muted)',
            maxWidth: '680px',
          }}>
            Komponen tombol untuk memicu aksi dan event. Mendukung berbagai varian,
            ukuran, state loading, dan ikon. Dibangun dengan aksesibilitas penuh.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            
            {/* Preview Section */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Preview
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Contoh penggunaan button dalam berbagai konteks.
              </p>

              <div style={{
                padding: '48px 32px',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Button>Default Button</Button>
                <Button style={{ backgroundColor: '#F71D25', color: '#ffffff' }}>
                  Primary Button
                </Button>
                <Button style={{ 
                  backgroundColor: 'transparent', 
                  border: '1px solid var(--border)',
                  color: 'var(--fg)',
                }}>
                  Outline Button
                </Button>
                <Button style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--fg)',
                }}>
                  Ghost Button
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Variants Section */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Varian
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Button tersedia dalam berbagai varian untuk konteks yang berbeda.
              </p>

              <div style={{
                padding: '32px',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'grid',
                gap: '24px',
              }}>
                {/* Default */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                    Default
                  </div>
                  <Button>Click Me</Button>
                </div>

                {/* Primary */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                    Primary (Accent)
                  </div>
                  <Button style={{ backgroundColor: '#F71D25', color: '#ffffff' }}>
                    <Zap className="h-4 w-4" style={{ marginRight: '8px' }} />
                    Primary Action
                  </Button>
                </div>

                {/* Outline */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                    Outline
                  </div>
                  <Button style={{ 
                    backgroundColor: 'transparent', 
                    border: '1px solid var(--border)',
                    color: 'var(--fg)',
                  }}>
                    Outline Button
                  </Button>
                </div>

                {/* Ghost */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                    Ghost
                  </div>
                  <Button style={{ 
                    backgroundColor: 'transparent',
                    color: 'var(--fg)',
                  }}>
                    Ghost Button
                  </Button>
                </div>

                {/* Link */}
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', marginBottom: '12px' }}>
                    Link
                  </div>
                  <Button style={{ 
                    backgroundColor: 'transparent',
                    color: '#0085FF',
                    textDecoration: 'underline',
                    padding: '0',
                  }}>
                    Link Style Button
                  </Button>
                </div>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Dengan Ikon
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Menambahkan ikon untuk memperjelas aksi button.
              </p>

              <div style={{
                padding: '32px',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <Button style={{ backgroundColor: '#F71D25', color: '#ffffff' }}>
                  <Mail className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Email
                </Button>
                <Button style={{ backgroundColor: '#0085FF', color: '#ffffff' }}>
                  <Download className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Download
                </Button>
                <Button style={{ backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--fg)' }}>
                  <Plus className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Tambah
                </Button>
                <Button style={{ backgroundColor: 'transparent', border: '1px solid #F71D25', color: '#F71D25' }}>
                  <Trash2 className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Hapus
                </Button>
                <Button style={{ backgroundColor: '#FEE505', color: '#002157' }}>
                  <Heart className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Favorite
                </Button>
                <Button style={{ backgroundColor: 'transparent', color: 'var(--fg)' }}>
                  Lanjutkan
                  <ChevronRight className="h-4 w-4" style={{ marginLeft: '8px' }} />
                </Button>
              </div>
            </div>

            {/* Loading State */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Loading State
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Menampilkan loading indicator saat proses asinkron.
              </p>

              <div style={{
                padding: '32px',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <Button 
                  onClick={handleAsyncAction}
                  disabled={loading}
                  style={{ backgroundColor: '#F71D25', color: '#ffffff' }}
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" style={{ marginRight: '8px' }} />}
                  {loading ? 'Processing...' : 'Click to Load'}
                </Button>
                <Button disabled style={{ backgroundColor: 'var(--muted)', opacity: 0.5 }}>
                  <Loader2 className="h-4 w-4 animate-spin" style={{ marginRight: '8px' }} />
                  Loading...
                </Button>
              </div>
            </div>

            {/* Code Example */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Kode Contoh
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Cara menggunakan Button dalam aplikasi Anda.
              </p>

              <div style={{
                padding: '24px',
                backgroundColor: '#0a0e1a',
                border: '1px solid rgba(232,237,245,0.12)',
                borderRadius: '8px',
                overflow: 'auto',
              }}>
                <pre style={{
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: '#e8edf5',
                  margin: 0,
                  fontFamily: 'Monaco, Consolas, monospace',
                }}>
{`import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Example() {
  return (
    <div>
      {/* Default */}
      <Button>Default Button</Button>
      
      {/* Primary dengan ikon */}
      <Button style={{ 
        backgroundColor: '#F71D25', 
        color: '#ffffff' 
      }}>
        <Mail className="h-4 w-4" style={{ marginRight: '8px' }} />
        Send Email
      </Button>
      
      {/* Outline */}
      <Button style={{ 
        backgroundColor: 'transparent',
        border: '1px solid var(--border)',
        color: 'var(--fg)'
      }}>
        Cancel
      </Button>
      
      {/* Disabled */}
      <Button disabled>
        Disabled
      </Button>
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            {/* Props Table */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Props
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Properti yang tersedia untuk komponen Button.
              </p>

              <div style={{
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  backgroundColor: 'var(--bg-alt)',
                }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--fg)' }}>
                        Prop
                      </th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--fg)' }}>
                        Type
                      </th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--fg)' }}>
                        Default
                      </th>
                      <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: '13px', fontWeight: 600, color: 'var(--fg)' }}>
                        Deskripsi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--fg)', fontFamily: 'monospace' }}>
                        children
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        ReactNode
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        -
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        Konten dalam button
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--fg)', fontFamily: 'monospace' }}>
                        disabled
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        boolean
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        false
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        Menonaktifkan button
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--fg)', fontFamily: 'monospace' }}>
                        onClick
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        function
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        -
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        Handler saat button diklik
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--fg)', fontFamily: 'monospace' }}>
                        style
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        CSSProperties
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        -
                      </td>
                      <td style={{ padding: '12px 16px', fontSize: '13px', color: 'var(--muted)' }}>
                        Custom inline styles
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Best Practices
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Rekomendasi penggunaan button yang baik.
              </p>

              <div style={{
                padding: '24px',
                backgroundColor: 'var(--bg-alt)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}>
                  {[
                    'Gunakan label yang jelas dan deskriptif (contoh: "Simpan Perubahan" bukan "OK")',
                    'Batasi jumlah primary button per halaman (maksimal 1-2)',
                    'Gunakan ikon untuk memperjelas aksi, bukan hanya dekorasi',
                    'Tampilkan loading state untuk operasi yang membutuhkan waktu',
                    'Pastikan button memiliki area klik minimal 44×44px untuk mobile',
                    'Gunakan disabled state untuk aksi yang tidak valid saat ini',
                  ].map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '12px',
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: 'var(--muted)',
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#F71D25',
                        marginTop: '8px',
                        flexShrink: 0,
                      }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section style={{
        padding: '40px 24px',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-alt)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            <Link
              href="/komponen"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                color: 'var(--fg)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F71D25';
                e.currentTarget.style.backgroundColor = 'rgba(247, 29, 37, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              Semua Komponen
            </Link>

            <Link
              href="/komponen"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: '#F71D25',
                color: '#ffffff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
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
              Kembali ke Komponen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

