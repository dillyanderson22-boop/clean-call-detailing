import { ImageResponse } from 'next/og'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Clean Call Car Detailing — Mobile Detailing in Chandler, AZ'
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg,#0A0C10 0%,#10141A 60%,#161C24 100%)', color: '#EAEEF3', padding: 72, fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: '#34B7F1', color: '#0A0C10', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, fontWeight: 700 }}>C</div>
          <div style={{ fontSize: 30, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Clean Call Car Detailing</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.03, letterSpacing: -1 }}>We bring the detail shop</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.03, letterSpacing: -1, color: '#34B7F1' }}>to your driveway.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#8C98A6' }}>
          <span>Chandler & the East Valley</span>
          <span style={{ color: '#34B7F1' }}>(602) 641-9134</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
