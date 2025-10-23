// Developed by doctorcodex
// Advanced Card component documentation with healthcare dashboard examples

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, ArrowLeft, ArrowUpRight, Calendar, ChevronRight, Heart, Pill, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function CardPage() {
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
            backgroundColor: 'rgba(0, 133, 255, 0.1)',
            border: '1px solid rgba(0, 133, 255, 0.2)',
            borderRadius: '4px',
            fontSize: '11px',
            fontWeight: 700,
            color: '#0085FF',
            letterSpacing: '0.05em',
            marginBottom: '16px',
          }}>
            LAYOUT
          </div>

          <h1 style={{
            fontSize: '42px',
            lineHeight: '50px',
            fontWeight: 700,
            color: 'var(--fg)',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}>
            Card
          </h1>

          <p style={{
            fontSize: '16px',
            lineHeight: '26px',
            color: 'var(--muted)',
            maxWidth: '680px',
          }}>
            Kontainer fleksibel untuk menampilkan konten terkait dengan header, body, dan footer opsional.
            Ideal untuk dashboard, grid layout, dan content cards dengan interaksi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            
            {/* Basic Card */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Card Dasar
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Card sederhana dengan header dan content.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Judul Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '22px' }}>
                    Ini adalah konten card. Anda bisa menempatkan berbagai jenis konten di sini,
                    seperti teks, gambar, tombol, atau komponen lainnya.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Stats Cards */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Stat Cards - Healthcare Dashboard
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Cards dengan statistik dan indikator performa untuk dashboard medis.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
              }}>
                {/* Patient Count Card */}
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Accent Line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #F71D25, #FF4D54)',
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>
                        Total Pasien
                      </p>
                      <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1 }}>
                        2,847
                      </h3>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(247, 29, 37, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Users className="h-5 w-5" style={{ color: '#F71D25' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      borderRadius: '4px',
                    }}>
                      <TrendingUp className="h-3 w-3" style={{ color: '#10b981' }} />
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#10b981' }}>
                        +12.5%
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      dari bulan lalu
                    </span>
                  </div>
                </div>

                {/* Active Treatments Card */}
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #0085FF, #00A3FF)',
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>
                        Perawatan Aktif
                      </p>
                      <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1 }}>
                        1,245
                      </h3>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(0, 133, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Activity className="h-5 w-5" style={{ color: '#0085FF' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      borderRadius: '4px',
                    }}>
                      <TrendingUp className="h-3 w-3" style={{ color: '#10b981' }} />
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#10b981' }}>
                        +8.2%
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      dari minggu lalu
                    </span>
                  </div>
                </div>

                {/* Appointments Card */}
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #FEE505, #FFD700)',
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>
                        Janji Hari Ini
                      </p>
                      <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1 }}>
                        42
                      </h3>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(254, 229, 5, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Calendar className="h-5 w-5" style={{ color: '#002157' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      padding: '4px 8px',
                      backgroundColor: 'var(--bg)',
                      borderRadius: '4px',
                      border: '1px solid var(--border)',
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg)' }}>
                        18 tersisa
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      dari total jadwal
                    </span>
                  </div>
                </div>

                {/* Critical Alerts Card */}
                <div
                  style={{
                    padding: '20px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #10b981, #059669)',
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px', fontWeight: 500 }}>
                        Resep Aktif
                      </p>
                      <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg)', lineHeight: 1 }}>
                        573
                      </h3>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Pill className="h-5 w-5" style={{ color: '#10b981' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      padding: '4px 8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      borderRadius: '4px',
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#ef4444' }}>
                        12 kadaluarsa
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      perlu perpanjangan
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Cards */}
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--fg)',
                marginBottom: '8px',
              }}>
                Interactive Cards
              </h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--muted)',
                marginBottom: '24px',
              }}>
                Cards dengan aksi dan navigasi.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '16px',
              }}>
                {/* Action Card */}
                <div
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '2px solid var(--border)',
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(247, 29, 37, 0.15)';
                    e.currentTarget.style.borderColor = '#F71D25';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(247, 29, 37, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <Heart className="h-6 w-6" style={{ color: '#F71D25' }} />
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    marginBottom: '8px',
                  }}>
                    Monitoring Pasien
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: 'var(--muted)',
                    marginBottom: '20px',
                  }}>
                    Pantau kondisi vital pasien secara real-time dengan dashboard interaktif dan alert otomatis.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#F71D25',
                  }}>
                    Lihat Detail
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Feature Card */}
                <div
                  style={{
                    padding: '24px',
                    backgroundColor: 'var(--bg-alt)',
                    border: '2px solid var(--border)',
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 133, 255, 0.15)';
                    e.currentTarget.style.borderColor = '#0085FF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0, 133, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    <Activity className="h-6 w-6" style={{ color: '#0085FF' }} />
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--fg)',
                    marginBottom: '8px',
                  }}>
                    Analisis Lab
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    lineHeight: '22px',
                    color: 'var(--muted)',
                    marginBottom: '20px',
                  }}>
                    Hasil laboratorium terintegrasi dengan AI untuk deteksi anomali dan rekomendasi diagnosis.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0085FF',
                  }}>
                    Lihat Detail
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
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
                Cara membuat stat card untuk dashboard.
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
{`<div style={{
  padding: '20px',
  backgroundColor: 'var(--bg-alt)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  position: 'relative',
}}>
  {/* Accent Line */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '3px',
    background: 'linear-gradient(90deg, #F71D25, #FF4D54)',
  }} />

  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between',
    marginBottom: '16px' 
  }}>
    <div>
      <p style={{ 
        fontSize: '13px', 
        color: 'var(--muted)' 
      }}>
        Total Pasien
      </p>
      <h3 style={{ 
        fontSize: '28px', 
        fontWeight: 700,
        color: 'var(--fg)' 
      }}>
        2,847
      </h3>
    </div>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      backgroundColor: 'rgba(247, 29, 37, 0.1)',
    }}>
      <Users className="h-5 w-5" style={{ color: '#F71D25' }} />
    </div>
  </div>

  <div style={{ display: 'flex', gap: '8px' }}>
    <span style={{ 
      padding: '4px 8px',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fontSize: '12px',
      fontWeight: 600,
      color: '#10b981' 
    }}>
      +12.5%
    </span>
    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
      dari bulan lalu
    </span>
  </div>
</div>`}
                </pre>
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
              href="/komponen/button"
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
                e.currentTarget.style.borderColor = '#0085FF';
                e.currentTarget.style.backgroundColor = 'rgba(0, 133, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              Sebelumnya: Button
            </Link>

            <Link
              href="/komponen"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                backgroundColor: '#0085FF',
                color: '#ffffff',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 133, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Semua Komponen
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

