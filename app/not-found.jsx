<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>404 — Calyvent</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="404 — Page not found. Calyvent — Clarity. Advantage. Forever." />
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;1,400&family=Source+Serif+4:opsz,wght@12..72,400;12..72,500&display=swap" rel="stylesheet">
  <!-- favicon (your vertical logo file) -->
  <link rel="icon" href="/Calyvent Logo possiblly.jpg" />
  <style>
    :root{
      --matte-black:#0F0F0F;
      --off-black:#181818;
      --platinum:#E5E5E5;
      --platinum-hl:#F5F5F5;
      --emerald:#0A3D2A;
      --white:#FFFFFF;
      --max-width:1200px;
      --pad:28px;
      --logo-letter-spacing:0.15em;
      --heading-letter-spacing:0.06em;
      --line-height:1.72;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      background:var(--matte-black);
      color:var(--platinum);
      font-family:"Source Serif 4", Georgia, serif;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:var(--line-height);
      -webkit-font-feature-settings: "kern" 1; font-feature-settings: "kern" 1;
    }
    .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top,24px) + 36px) var(--pad);text-align:center}
    .card{max-width:var(--max-width);width:100%;padding:48px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0));border:1px solid rgba(229,229,229,0.04)}
    .brand{font-family:"Crimson Pro", serif;font-weight:600;letter-spacing:var(--logo-letter-spacing);color:var(--platinum);margin:0}
    .tag{font-family:"Playfair Display", serif;font-style:italic;color:var(--platinum);opacity:0.95;margin-top:6px}
    .logo-square{width:84px;height:84px;border-radius:8px;margin:18px auto 0;background-image:url('/Calyvent Logo possiblly.jpg');background-size:cover;background-position:center;border:1px solid rgba(229,229,229,0.04)}
    .code{
      font-family:"Crimson Pro", serif;
      font-size:clamp(96px, 16vw, 180px);
      line-height:0.9;
      letter-spacing:0.12em;
      color:var(--platinum);
      margin:18px 0 6px;
    }
    .headline{
      font-family:"Playfair Display", serif;
      font-style:italic;
      font-size:clamp(20px, 3.6vw, 34px);
      color:var(--platinum-hl);
      margin:6px 0 18px;
    }
    .desc{
      max-width:760px;margin:0 auto 26px;color:rgba(229,229,229,0.9);font-size:15px;
      font-family:"Source Serif 4", Georgia, serif;line-height:1.8;
    }
    .actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:18px}
    .btn{
      padding:12px 22px;border-radius:10px;border:1px solid rgba(229,229,229,0.08);
      background:transparent;color:var(--platinum);font-family:"Crimson Pro",serif;cursor:pointer;letter-spacing:0.06em;
      transition:transform 180ms ease;
    }
    .btn:hover{transform:scale(1.02)}
    .btn-primary{
      position:relative;overflow:hidden;
    }
    .btn-primary::before{content:"";position:absolute;left:0;top:0;height:100%;width:0;background:var(--emerald);z-index:0;transition:width 340ms ease}
    .btn-primary span{position:relative;z-index:2}
    .btn-primary:hover::before{width:100%}
    .links{margin-top:12px;color:rgba(229,229,229,0.7);font-size:13px}
    .links a{color:var(--platinum);text-decoration:underline;transition:color 160ms ease}
    .links a:hover{color:var(--emerald)}
    footer{margin-top:28px;color:rgba(229,229,229,0.66);font-size:13px}
    @media (max-width:640px){
      .card{padding:28px}
      .logo-square{width:72px;height:72px}
      .desc{padding:0 8px}
    }
  </style>
</head>
<body>
  <main class="wrap" role="main">
    <div class="card" role="article" aria-labelledby="title-404">
      <div class="logo-square" aria-hidden="true"></div>
      <h1 class="brand">Calyvent</h1>
      <div class="tag">Clarity. Advantage. Forever.</div>

      <div id="title-404" class="code" aria-hidden="false">404</div>
      <div class="headline">This page cannot be located.</div>

      <p class="desc">
        The address you requested doesn't appear to exist. If you followed a link, it may be out of date.
        Return to the site quietly — we'll be here when you arrive.
      </p>

      <div class="actions" role="navigation" aria-label="404 actions">
        <a class="btn btn-primary" href="/" title="Return to home"><span>Return Home</span></a>
        <a class="btn" href="/contact" title="Contact Calyvent">Contact</a>
      </div>

      <div class="links">
        <a href="/privacy">Privacy</a> — <a href="/terms">Terms</a>
      </div>

      <footer aria-hidden="false">© 2025 Calyvent™ All rights reserved.</footer>
    </div>
  </main>
</body>
</html>
