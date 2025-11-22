'use client';

export default function Legal() {
  return (
    <main className="container" style={{padding:'100px 20px'}}>
      <section id="legal" className="page active">
        <div style={{maxWidth:'900px', margin:'0 auto', color:'#E5E5E5', background:'#0F0F0F', fontFamily:'Source Serif Pro, Georgia, serif', lineHeight:'1.8'}}>
          <h1 style={{fontFamily:'Crimson Pro, serif', fontSize:'48px', letterSpacing:'0.05em', textAlign:'center', marginBottom:'80px'}}>Legal</h1>
          {/* Your full Terms + Privacy text from the original file – paste exactly here */}
          <h2 style={{fontFamily:'Playfair Display, serif', fontStyle:'italic', fontSize:'28px', margin:'80px 0 40px'}}>Terms of Service</h2>
          <p><strong>Last updated: November 20, 2025</strong></p>
          {/* ... rest of your exact legal text ... */}
          <hr style={{border:'0', borderTop:'1px solid #0A3D2A', margin:'100px 0'}} />
          <h2 style={{fontFamily:'Playfair Display, serif', fontStyle:'italic', fontSize:'28px', margin:'80px 0 40px'}}>Privacy Policy</h2>
          {/* ... your privacy text ... */}
        </div>
        <div style={{marginTop:'36px', textAlign:'center'}}>
          <button className="cta" id="legal-return">Return</button>
        </div>
      </section>
    </main>
  );
}
