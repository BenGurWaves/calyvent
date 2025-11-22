'use client';

export default function About() {
  return (
    <main className="container" style={{paddingTop:'60px'}}>
      <section id="about" className="page active">
        <h1 style={{fontSize:'64px', letterSpacing:'0.04em', textAlign:'center'}}>About</h1>

        <div style={{maxWidth:'860px', margin:'48px auto 0', fontSize:'20px', lineHeight:'1.78', color:'#E5E5E5'}}>
          <p>Calyvent exists for a simple reason: most creators spend their lives building something beautiful things for the world, only to discover—too late—that the world rarely returns the favor in equal measure.</p>
          <p style={{marginTop:'32px'}}>We change that.</p>
          <p style={{marginTop:'32px'}}>For years we have quietly sat on the other side of the table—across from labels, publishers, platforms, and funds—watching the same patterns repeat. We grew tired of watching extraordinary artists leave extraordinary value behind simply because no one was willing to speak plainly, move decisively, and protect what was rightfully theirs.</p>
          <p style={{marginTop:'32px'}}>So we built a different kind of table.</p>
          <p style={{marginTop:'32px'}}>One where clarity is non-negotiable, where every percentage point is fought for, where contracts read like they were written by someone who actually intends to honor them. We take nothing upfront. We succeed only when you do—and then only modestly. The rest stays where it belongs: with the person who created it.</p>
          <p style={{marginTop:'42px', fontStyle:'italic', color:'#C8C8C8', letterSpacing:'0.02em'}}>
            Restraint over noise.<br/>
            Precision over promises.<br/>
            Legacy over everything else.
          </p>
          <p style={{marginTop:'48px'}}>If you have reached the stage where your work is no longer just art but also your livelihood, and you are ready for it to be treated that way—then we should probably speak.</p>
          <p style={{marginTop:'52px', fontSize:'18px', color:'#AAAAAA'}}>
            We don’t chase trends.<br/>
            We don’t need to be seen.<br/>
            We simply make certain that you are.
          </p>
        </div>

        <div style={{marginTop:'80px', textAlign:'center'}}>
          <button className="cta" id="about-back" style={{minWidth:'240px', padding:'16px 40px', fontSize:'18px'}}>Return</button>
        </div>
        <div style={{paddingBottom:'100px'}}></div>
      </section>
    </main>
  );
}
