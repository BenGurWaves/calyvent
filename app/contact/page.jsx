'use client';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
      e.preventDefault();
      const name = this.querySelector('#full').value.trim();
      const email = this.querySelector('#mail').value.trim();
      const revenue = this.querySelector('#revenue2').value;
      const message = this.querySelector('#msg').value.trim();
      const btn = this.querySelector('#contact-submit');
      if (!name || !email || !revenue) return btn.textContent = 'Complete required fields', setTimeout(() => btn.textContent = 'Submit Private Inquiry', 1400);
      btn.disabled = true; btn.textContent = 'Sending...';
      try {
        await window.insertCalyventForm({name, email, message, revenue});
        btn.textContent = 'Submitted'; this.reset();
        setTimeout(() => { btn.disabled = false; btn.textContent = 'Submit Private Inquiry'; }, 1400);
      } catch { btn.textContent = 'Error'; btn.disabled = false; setTimeout(() => btn.textContent = 'Submit Private Inquiry', 1600); }
    });
  }, []);

  return (
    <main className="container" style={{paddingTop:'36px'}}>
      <section id="contact" className="page active">
        <h1 className="section-title">Contact — Private Inquiry</h1>
        <p style={{marginTop:'12px', maxWidth:'820px', color:'rgba(229,229,229,0.9)'}}>
          Use the form below for private inquiries. We respond selectively and directly.
        </p>
        <div className="contact-wrap" style={{marginTop:'18px'}}>
          <form id="contact-form" noValidate>
            <div className="field"><label htmlFor="full">Full name</label><input id="full" required /></div>
            <div className="field"><label htmlFor="mail">Email</label><input id="mail" type="email" required /></div>
            <div className="field">
              <label htmlFor="revenue2">Expected Annual Revenue</label>
              <select id="revenue2" required>
                <option value="">Select</option>
                <option value="0 but want (custom in text box)">0 but want (custom in text box)</option>
                <option value="10,000">10,000</option>
                <option value="50,000">50,000</option>
                <option value="100,000">100,000</option>
                <option value="custom (write in message box)">custom (write in message box)</option>
              </select>
            </div>
            <div className="field"><label htmlFor="msg">Message</label><textarea id="msg" placeholder="Brief description (no attachments)"></textarea></div>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
              <button type="submit" id="contact-submit" className="btn-submit">Submit Private Inquiry</button>
            </div>
          </form>
        </div>
        <div style={{marginTop:'28px', textAlign:'center'}}>
          <button className="cta" id="contact-return">Return</button>
        </div>
      </section>
    </main>
  );
}
