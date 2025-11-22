'use client';

export default function Services() {
  return (
    <main className="container" style={{paddingTop:'80px'}}>
      <section id="services" className="page active">
        <h1 style={{fontSize:'64px', letterSpacing:'0.04em', textAlign:'center'}}>Services</h1>

        <div style={{maxWidth:'860px', margin:'48px auto 0', fontSize:'20px', lineHeight:'1.78', color:'#E5E5E5'}}>
          <p>We do only a handful of things — but we do them better than anyone else.</p>
          <p style={{marginTop:'32px', color:'#C8C8C8'}}>Everything below is built on the same principle: your work should keep working for you long after the rest of the industry has moved on to the next shiny thing.</p>
        </div>

        <div className="accordion" id="services-accordion" style={{maxWidth:'900px', margin:'80px auto 0'}}>
          <div className="acc-item">
            <button className="acc-trigger" data-target="acc-1" aria-expanded="false">
              <h4>Master & Publishing Administration</h4><span aria-hidden="true">+</span>
            </button>
            <div className="acc-panel" id="acc-1">
              <p>We take over the part most people hate: collecting every dollar you’re owed, everywhere in the world, forever. No black-box sub-publishing deals, no “trust us” accounting. You get a clean, live ledger you can actually understand, updated quarterly — or more often if you like.</p>
            </div>
          </div>
          <div className="acc-item">
            <button className="acc-trigger" data-target="acc-2" aria-expanded="false">
              <h4>Royalty Recovery & Audit</h4><span aria-hidden="true">+</span>
            </button>
            <div className="acc-panel" id="acc-2">
              <p>Most artists are owed money they will never see — until someone goes looking. We go looking. Deep, forensic audits of every DSP, publisher, label, and sync license you’ve ever touched. We find it, we recover it, and we make sure it never goes missing again.</p>
            </div>
          </div>
          <div className="acc-item">
            <button className="acc-trigger" data-target="acc-3" aria-expanded="false">
              <h4>Label Services & Distribution Partnerships</h4><span aria-hidden="true">+</span>
            </button>
            <div className="acc-panel" id="acc-3">
              <p>We negotiate and structure the deals the major labels wish they could still offer: real marketing muscle, global reach, and you keep your masters. No funny sunset clauses, no hidden recoupable “marketing funds.” Just honest, aligned partnerships that last.</p>
            </div>
          </div>
          <div className="acc-item">
            <button className="acc-trigger" data-target="acc-4" aria-expanded="false">
              <h4>Contract Negotiation & Counsel</h4><span aria-hidden="true">+</span>
            </button>
            <div className="acc-panel" id="acc-4">
              <p>We sit on your side of the table and write contracts the way they should have been written the first time: short, clear, and brutally fair. Every ambiguous paragraph gets removed, every unfavorable clause gets rewritten, every future fight gets prevented before the ink dries.</p>
            </div>
          </div>
          <div className="acc-item">
            <button className="acc-trigger" data-target="acc-5" aria-expanded="false">
              <h4>360 & Multi-Rights Structures</h4><span aria-hidden="true">+</span>
            </button>
            <div className="acc-panel" id="acc-5">
              <p>Sometimes sharing rights makes sense — when the upside is real and the terms are sane. We build 360 deals that don’t feel like selling your soul: generous advances, clear recoupment, hard caps on participation, and iron-clad exit ramps. You stay in control.</p>
            </div>
          </div>
        </div>

        <div style={{marginTop:'100px', textAlign:'center'}}>
          <button className="cta" id="back-home" style={{minWidth:'260px', padding:'18px 48px', fontSize:'18px'}}>Return</button>
        </div>
        <div style={{paddingBottom:'120px'}}></div>
      </section>
    </main>
  );
}
