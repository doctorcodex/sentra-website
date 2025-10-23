# sentra/ui — Design Spec (External)

Versi: 1.0 • Mode: **Compact/Dense** • Ikon: **Lucide (shadcn)**

## 1. Prinsip

- **Presisi, padat, modular.** Ruang secukupnya; layout rapat tapi tetap rapi.
- **Netral tenang, aksen tegas.** Netral biru-oxford; aksi merah; info biru cerah; peringatan kuning.
- **Adaptif gelap/terang.** Theme berbasis class: `.theme-dark`.

## 2. Palet & Peran

| Token            | Hex       | Peran                   |
| ---------------- | --------- | ----------------------- |
| `--brand-oxford` | `#002157` | Netral/teks utama       |
| `--brand-red`    | `#F71D25` | Aksi utama / error      |
| `--brand-yellow` | `#FEE505` | Peringatan              |
| `--brand-blue`   | `#0085FF` | Aksen alternatif / info |

Neutrals:

- `--bg` `#ffffff`, `--bg-alt` `#f7f8fb`, `--fg` `var(--brand-oxford)`, `--muted` `rgba(0,33,87,0.60)`, `--border` `rgba(0,33,87,0.12)`

## 3. Tipografi

- **Font:** Inter.
- **Scale (compact):**
  - H1: 36/42, semi-bold
  - H2: 20/28, semi-bold, **underline pendek 48px**
  - Body: 14/20
  - Meta: 12/18, uppercase, 0.02em tracking

## 4. Spacing (dense)

`--space-1:4` • `--space-2:6` • `--space-3:10` • `--space-4:14` • `--space-5:18` • `--space-6:24` • `--space-7:32` • `--space-8:40` (px)

## 5. Kontrol (tinggi & padding)

- Tinggi input default `--control-h-md: 32px`
- Padding horizontal kontrol `--control-pad-x: 8px`
- Button **compact/dense**: `padding: 3px var(--control-pad-x)`; radius 6px.

## 6. Komponen

### 6.1 Button

- Varian: `default`, `primary (accent)`, `link`, `outline`, `ghost`, `disabled`.
- Hover: elevasi ringan / `bg-alt`, transform `-1px`.
- Focus: outline 2px warna accent.
- **Jangan** beri padding berlebih; ikuti skala di atas.

### 6.2 Tag (status)

- Bentuk **blok kecil** (chip): radius 6px, padding `2px 6–8px`.
- Indikator titik kiri: merah/kuning/biru sesuai status.

### 6.3 Input & Select

- Tinggi 32px (compact), radius 6px, border 1px netral.
- Placeholder warna muted 70%.
- Select: caret custom, padding kanan 24px.

### 6.4 Switch

- Ukuran 22×40 (compact); latar netral.
- Aktif: latar bercampur `accent` 12% untuk ketenangan.

### 6.5 Layout

- **Topbar** 56px, **Sidebar** 200px (auto-collapse ≤960px).
- Tabel **sticky header**, padding sel 8×6 px.
- Cards grid 12 kolom, gap `--space-3` pada dense.

## 7. Aksesibilitas

- Kontras minimal 4.5:1 untuk teks isi.
- Focus-visible selalu terlihat (outline 2px accent).

## 8. Mode Gelap

- Aktifkan dengan `.theme-dark` pada `<body>`/`<html>`.
- Netral bergerak ke `#07090f` / `#0c1220`; teks ke `#e8eefc`.

## 9. Ikon

- Standar: **Lucide** (shadcn). Nama ikon direferensikan sebagai `lucide:<name>`.
- Ukuran default 16px; warna ikut teks saat ini.

## 10. Do / Don’t

**Do:** padat, grid rapi, aksen hemat. **Don’t:** padding besar, shadow berat, warna aksen berlebihan.

---

### Snippet CSS Variables (ringkas)

```css
:root {
  --brand-oxford: #002157;
  --brand-red: #f71d25;
  --brand-yellow: #fee505;
  --brand-blue: #0085ff;
  --bg: #fff;
  --bg-alt: #f7f8fb;
  --fg: var(--brand-oxford);
  --muted: rgba(0, 33, 87, 0.6);
  --border: rgba(0, 33, 87, 0.12);
  --radius-sm: 6px;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --fs-12: 12px;
  --lh-12: 18px;
  --fs-14: 14px;
  --lh-14: 20px;
  --fs-20: 20px;
  --lh-20: 28px;
  --fs-36: 36px;
  --lh-36: 42px;
  --space-2: 6px;
  --space-3: 10px;
  --space-4: 14px;
  --space-5: 18px;
  --control-h-md: 32px;
  --control-pad-x: 8px;
}
```
