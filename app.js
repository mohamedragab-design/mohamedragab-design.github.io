(function () {
  'use strict';
  var T = {
    en: { view: 'See the work', hire: 'Hire me', work: 'Selected work', workSub: 'Twelve brands, each in its own colors.', open: 'Open on Behance',
      reel: 'Video samples', reelSub: 'Brand reveals and short films. Tap a clip to play it.', reelBtn: 'Open the full folder',
      reviews: 'What clients wrote', reviewsSub: 'Comments under my reviews post on Facebook.', reviewsBtn: 'Read them on Facebook',
      contactBtn: 'Message me on Behance', contact: 'Let us build yours.', contactText: 'Tell me about your brand. Logos, identity, social designs, ad films and edits.',
      stats: ['Projects on Behance', 'Years in marketing design', 'Video samples'], lang: 'عربي', menu: ['Work', 'ZAIN ARENA', 'Videos', 'Reviews', 'Contact'], by: 'Scroll', zainBtn: 'Follow on Instagram', close: 'Close' },
    ar: { view: 'شوف الشغل', hire: 'اطلبني', work: 'أعمال مختارة', workSub: 'اتناشر علامة، كل واحدة بألوانها.', open: 'افتح على بيهانس',
      reel: 'نماذج فيديو', reelSub: 'كشف علامات وأفلام قصيرة. اضغط على أي فيديو لتشغيله.', reelBtn: 'افتح الفولدر كامل',
      reviews: 'كلام العملاء', reviewsSub: 'تعليقات تحت بوست الريفيوهات على فيسبوك.', reviewsBtn: 'اقراها على فيسبوك',
      contactBtn: 'كلمني على بيهانس', contact: 'خلينا نبني شغلك.', contactText: 'احكيلي عن علامتك. شعارات، هوية، تصميمات سوشيال، إعلانات ومونتاج.',
      stats: ['مشروع على بيهانس', 'سنين في تصميم التسويق', 'نموذج فيديو'], lang: 'EN', menu: ['الشغل', 'ZAIN ARENA', 'الفيديو', 'الآراء', 'تواصل'], by: 'انزل', zainBtn: 'تابعنا على انستجرام', close: 'إغلاق' }
  };
  'use strict';
  var T = {
    en: { view: 'See the work', hire: 'Hire me', work: 'Selected work', workSub: 'Twelve brands, each in its own colors.', open: 'Open on Behance',
      reel: 'Video samples', reelSub: 'Brand reveals and short films. Tap a clip to play it.', reelBtn: 'Open the full folder',
      reviews: 'What clients wrote', reviewsSub: 'Comments under my reviews post on Facebook.', reviewsBtn: 'Read them on Facebook',
      contactBtn: 'Message me on Behance', contact: 'Let us build yours.', contactText: 'Tell me about your brand. Logos, identity, social designs, ad films and edits.',
      stats: ['Projects on Behance', 'Years in marketing design', 'Video samples'], lang: 'عربي', menu: ['Work', 'ZAIN ARENA', 'Videos', 'Reviews', 'Contact'], by: 'Scroll', zainBtn: 'Follow on Instagram', close: 'Close' },
    ar: { view: 'شوف الشغل', hire: 'اطلبني', work: 'أعمال مختارة', workSub: 'اتناشر علامة، كل واحدة بألوانها.', open: 'افتح على بيهانس',
      reel: 'نماذج فيديو', reelSub: 'كشف علامات وأفلام قصيرة. اضغط على أي فيديو لتشغيله.', reelBtn: 'افتح الفولدر كامل',
      reviews: 'كلام العملاء', reviewsSub: 'تعليقات تحت بوست الريفيوهات على فيسبوك.', reviewsBtn: 'اقراها على فيسبوك',
      contactBtn: 'كلمني على بيهانس', contact: 'خلينا نبني شغلك.', contactText: 'احكيلي عن علامتك. شعارات، هوية، تصميمات سوشيال، إعلانات ومونتاج.',
      stats: ['مشروع على بيهانس', 'سنين في تصميم التسويق', 'نموذج فيديو'], lang: 'EN', menu: ['الشغل', 'ZAIN ARENA', 'الفيديو', 'الآراء', 'تواصل'], by: 'انزل', zainBtn: 'تابعنا على انستجرام', close: 'إغلاق' }
  };
  var lang = (localStorage.getItem('mr-lang') || 'en');
  var data, root = document.getElementById('app');

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function safeUrl(u) { return /^(https?:\/\/|assets\/|\.\.\/assets\/|#)/.test(u || '') ? u : '#'; }
  function color(c, d) { return /^#[0-9a-fA-F]{3,8}$/.test(c || '') ? c : d; }
  function L(o) { return o && typeof o === 'object' ? (o[lang] || o.en || '') : (o || ''); }

  function logo() {
    return '<svg class="mr-logo" viewBox="0 0 64 64" aria-label="MR"><defs><linearGradient id="mrg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--ink)"/></linearGradient></defs>' +
      '<rect class="mr-logo-ring" x="3" y="3" width="58" height="58" rx="18" fill="none" stroke="url(#mrg)" stroke-width="2.5" pathLength="100"/>' +
      '<path class="mr-logo-m" d="M14 46V19l9 14 9-14v27" fill="none" stroke="url(#mrg)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/>' +
      '<path class="mr-logo-r" d="M38 46V19h8a7 7 0 0 1 0 14h-8m8 0 7 13" fill="none" stroke="url(#mrg)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" pathLength="100"/></svg>';
  }
  function letters(t) { return t.split('').map(function (c, i) { return '<span class="mr-ch" style="animation-delay:' + (0.2 + i * 0.045).toFixed(3) + 's">' + (c === ' ' ? '&nbsp;' : esc(c)) + '</span>'; }).join(''); }

  function chapter(p) {
    var t = T[lang];
    var imgs = (p.images || []).map(safeUrl);
    var strip = imgs.slice(1).map(function (s, i) { return '<button type="button" class="mr-thumb" style="animation-delay:' + (i * 0.4) + 's" data-lb="' + esc(s) + '"><img src="' + esc(s) + '" alt="' + esc(p.en) + ' ' + (i + 2) + '" loading="lazy"></button>'; }).join('');
    return '<section class="mr-chapter" id="' + esc(p.id) + '" data-accent="' + color(p.accent, '#d6b25e') + '" data-bg="' + color(p.bg, '#07080b') + '" data-ink="' + color(p.ink, '#f4efe6') + '" style="--c-accent:' + color(p.accent, '#d6b25e') + '">' +
      '<div class="mr-chapter-num" aria-hidden="true">' + esc(p.num) + '</div>' +
      '<div class="mr-chapter-head" data-rv><span class="mr-chip">' + esc((p.tags || []).join(' · ')) + '</span><h3>' + esc(p.en) + '</h3><p class="mr-ar" dir="rtl">' + esc(p.ar) + '</p><p class="mr-sector">' + esc(L(p.sector)) + '</p><p class="mr-desc">' + esc(L(p.desc)) + '</p>' +
      (p.behance ? '<a class="mr-link" href="' + esc(safeUrl(p.behance)) + '" target="_blank" rel="noopener">' + t.open + ' <span aria-hidden="true">&#8599;</span></a>' : '') + '</div>' +
      '<div class="mr-stage" data-rv><div class="mr-glow"></div>' + (imgs[0] ? '<button type="button" class="mr-hero-img" data-lb="' + esc(imgs[0]) + '" aria-label="' + esc(p.en) + '"><img src="' + esc(imgs[0]) + '" alt="' + esc(p.en) + ' logo" loading="lazy"></button>' : '') + '</div>' +
      (strip ? '<div class="mr-strip" data-rv>' + strip + '</div>' : '') + '</section>';
  }

  function render() {
    var t = T[lang], d = data, s = d.site, links = d.links;
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = lang;
    var names = d.projects.map(function (p) { return p.en; });
    var marquee = names.concat(names, names).map(function (n) { return '<span>' + esc(n) + '<i></i></span>'; }).join('');
    var floats = d.projects.filter(function (p) { return p.images && p.images[0]; }).slice(0, 5).map(function (p, i) { return '<img class="mr-fl mr-fl-' + i + '" src="' + esc(safeUrl(p.images[0])) + '" alt="">'; }).join('');
    var stats = [[d.projects.length, ''], [s.yearsClaim || 0, '+']].map(function (a, i) { return '<div><b data-count="' + a[0] + '" data-suffix="' + a[1] + '">0</b><span>' + t.stats[i] + '</span></div>'; }).join('');
    var vids = d.videos.filter(function (v) { return !v.hidden; }).map(function (v, i) {
      return '<button type="button" class="mr-vid" data-vid="' + esc(v.id) + '" style="animation-delay:' + ((i % 8) * 0.15) + 's">' + (v.thumb ? '<img src="' + esc(safeUrl(v.thumb)) + '" alt="' + esc(v.title) + '" loading="lazy">' : '<span class="mr-vid-blank"></span>') + '<span class="mr-play" aria-hidden="true"></span><em>' + esc(v.title) + '</em></button>';
    }).join('');
    var rv = d.reviews.concat(d.reviews).map(function (r) { return '<figure dir="rtl"><blockquote>' + esc(r.text) + '</blockquote><figcaption>' + esc(r.name) + '</figcaption></figure>'; }).join('');
    var shots = (d.zain.shots || []).map(function (h, i) { return '<button type="button" class="mr-shot" style="animation-delay:' + (i * 0.7) + 's" data-lb="' + esc(safeUrl(h.src)) + '"><img src="' + esc(safeUrl(h.src)) + '" alt="' + esc(L(h)) + '" loading="lazy"><em>' + esc(L(h)) + '</em></button>'; }).join('');
    var shotsHtml = shots ? '<div class="mr-shots" data-rv><div class="mr-shots-row">' + shots + '</div><p class="mr-shots-note">' + esc(L(d.zain.shotsNote || {})) + '</p></div>' : '';
    var zainImg = d.zain.image ? '<img class="mr-zain-shot" src="' + esc(safeUrl(d.zain.image)) + '" alt="ZAIN ARENA">' : '<div class="mr-deco" aria-hidden="true"><i></i><i></i><i></i><b></b></div>';
    root.innerHTML =
      '<div class="mr-spot" aria-hidden="true"></div>' +
      '<header class="mr-nav"><a href="#top" class="mr-brand">' + logo() + '<span>' + esc(s.name) + '</span></a><nav>' +
      ['#work', '#zain', '#reel', '#reviews', '#contact'].map(function (h, i) { return '<a href="' + h + '">' + t.menu[i] + '</a>'; }).join('') + '</nav><button type="button" class="mr-lang" id="mr-lang">' + t.lang + '</button></header>' +
      '<section class="mr-hero" id="top" data-accent="#d6b25e" data-bg="#07080b" data-ink="#f4efe6"><div class="mr-orb mr-orb-a"></div><div class="mr-orb mr-orb-b"></div>' +
      '<div class="mr-hero-copy"><p class="mr-kicker">' + esc(L(s.role)) + '</p><h1><span class="mr-line">' + letters('Mohamed') + '</span><span class="mr-line">' + letters('Ragab') + '</span></h1><p class="mr-ar-hero" dir="rtl">' + esc(s.nameAr) + '</p><p class="mr-hello">' + esc(L(s.tagline)) + '</p>' +
      '<div class="mr-cta"><a class="mr-btn" href="#work">' + t.view + '</a><a class="mr-btn mr-btn-ghost" href="https://wa.me/201154871814" target="_blank" rel="noopener">' + t.hire + '</a></div></div>' +
      '<div class="mr-float" aria-hidden="true">' + floats + '</div><div class="mr-scroll"><span></span>' + t.by + '</div></section>' +
      '<div class="mr-marquee" aria-hidden="true"><div>' + marquee + '</div></div>' +
      '<section class="mr-stats" data-rv>' + stats + '</section>' +
      '<section id="work" class="mr-work"><div class="mr-sec-head" data-rv><h2>' + t.work + '</h2><p>' + t.workSub + '</p></div>' + d.projects.map(chapter).join('') + '</section>' +
      '<section id="zain" class="mr-zain"><div class="mr-zain-bg"></div><div class="mr-zain-copy" data-rv><span class="mr-chip">' + esc(L(d.zain.tag)) + '</span><h2>' + esc(d.zain.title) + '</h2><p>' + esc(L(d.zain.text)) + '</p>' +
      '<a class="mr-btn" href="' + esc(safeUrl(links.instagram)) + '" target="_blank" rel="noopener">' + t.zainBtn + ' &#8599;</a></div><div class="mr-zain-art" data-rv>' + zainImg + '</div>' + shotsHtml + '</section>' +
      '<section id="reel" class="mr-reel"><div class="mr-sec-head" data-rv><h2>' + t.reel + '</h2><p>' + t.reelSub + '</p></div><div class="mr-vgrid" data-rv>' + vids + '</div><a class="mr-btn mr-btn-ghost" href="' + esc(safeUrl(links.drive)) + '" target="_blank" rel="noopener">' + t.reelBtn + ' &#8599;</a></section>' +
      '<section id="reviews" class="mr-reviews"><div class="mr-sec-head" data-rv><h2>' + t.reviews + '</h2><p>' + t.reviewsSub + '</p></div><div class="mr-rv-track"><div>' + rv + '</div></div><a class="mr-btn mr-btn-ghost" href="' + esc(safeUrl(links.reviews)) + '" target="_blank" rel="noopener">' + t.reviewsBtn + ' &#8599;</a></section>' +
      '<section id="contact" class="mr-contact" data-rv><h2>' + t.contact + '</h2><p>' + t.contactText + '</p><div class="mr-cta"><a class="mr-btn" href="' + esc(safeUrl(links.behance)) + '" target="_blank" rel="noopener">' + t.contactBtn + ' &#8599;</a><a class="mr-btn mr-btn-ghost" href="' + esc(safeUrl(links.reviews)) + '" target="_blank" rel="noopener">' + t.reviewsBtn + ' &#8599;</a><a class="mr-btn mr-btn-ghost" href="' + esc(safeUrl(links.instagram)) + '" target="_blank" rel="noopener">ZAIN ARENA &#8599;</a></div></section>' +
      '<footer class="mr-foot">&copy; ' + new Date().getFullYear() + ' ' + esc(s.name) + ' &middot; Graphic Design</footer>' +
      '<dialog class="mr-dlg" id="mr-dlg"><div id="mr-dlg-body"></div><button type="button" class="mr-x" aria-label="' + t.close + '">&times;</button></dialog>';
    bind();
  }

  function bind() {
    document.getElementById('mr-lang').onclick = function () { lang = lang === 'en' ? 'ar' : 'en'; localStorage.setItem('mr-lang', lang); render(); window.scrollTo(0, 0); };
    var dlg = document.getElementById('mr-dlg'), body = document.getElementById('mr-dlg-body');
    dlg.querySelector('.mr-x').onclick = function () { dlg.close(); };
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { body.innerHTML = ''; });
    root.querySelectorAll('[data-lb]').forEach(function (b) { b.onclick = function () { body.innerHTML = '<img src="' + esc(b.getAttribute('data-lb')) + '" alt="">'; dlg.showModal(); }; });
    root.querySelectorAll('[data-vid]').forEach(function (b) { b.onclick = function () { var id = b.getAttribute('data-vid'); if (!/^[\w-]+$/.test(id)) return; body.innerHTML = '<iframe class="mr-frame" src="https://drive.google.com/file/d/' + id + '/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>'; dlg.showModal(); }; });
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    root.querySelectorAll('[data-rv]').forEach(function (el) { io.observe(el); });
    var co = new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting) return; co.unobserve(e.target); var to = +e.target.getAttribute('data-count'), suf = e.target.getAttribute('data-suffix') || '', t0 = performance.now(); (function tick(now) { var p = Math.min(1, (now - t0) / 1400); e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); })(t0); }); }, { threshold: 0.4 });
    root.querySelectorAll('[data-count]').forEach(function (el) { co.observe(el); });
    var th = []; for (var i = 0; i <= 20; i++) th.push(i / 20);
    var sec = new IntersectionObserver(function (es) { es.forEach(function (e) { var el = e.target; el.style.setProperty('--p', e.intersectionRatio); if (e.intersectionRatio > 0.4) { root.style.setProperty('--accent', el.getAttribute('data-accent')); root.style.setProperty('--bg', el.getAttribute('data-bg')); root.style.setProperty('--ink', el.getAttribute('data-ink')); } }); }, { threshold: th });
    root.querySelectorAll('[data-accent]').forEach(function (el) { sec.observe(el); });
    root.querySelectorAll('.mr-stage').forEach(function (st) { var h = st.querySelector('.mr-hero-img'); if (!h) return;
      st.addEventListener('pointermove', function (e) { var r = st.getBoundingClientRect(); h.style.transform = 'perspective(900px) rotateY(' + (((e.clientX - r.left) / r.width - 0.5) * 14).toFixed(1) + 'deg) rotateX(' + (((e.clientY - r.top) / r.height - 0.5) * -14).toFixed(1) + 'deg)'; });
      st.addEventListener('pointerleave', function () { h.style.transform = ''; }); });
    root.onpointermove = function (e) { var b = root.getBoundingClientRect(); root.style.setProperty('--mx', (e.clientX - b.left) + 'px'); root.style.setProperty('--my', (e.clientY - b.top) + 'px'); };
  }

  function load() {
    var preview = /[?&]preview=1/.test(location.search), cached = null;
    if (preview) { try { cached = JSON.parse(localStorage.getItem('mr-preview-data')); } catch (e) {} }
    if (cached) { data = cached; render(); return; }
    fetch('data.json', { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) { data = j; render(); }).catch(function () { root.innerHTML = '<p style="padding:40px;color:#fff">Could not load data.json</p>'; });
  }
  load();
})();
