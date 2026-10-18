// Copyright (c) 2026 doInit Tools. All rights reserved. See LICENSE.txt.
'use strict';

// Help page: the contents follow your scroll, and the search box shows only the sections that match.
(() => {
  const sections = [...document.querySelectorAll('.hMain section')];
  const links = new Map([...document.querySelectorAll('.hToc a')].map((a) => [a.getAttribute('href').slice(1), a]));
  const search = document.getElementById('hSearch');
  const noMatch = document.getElementById('hNoMatch');

  // Highlight the section on screen in the contents
  const mark = (id) => links.forEach((a, k) => a.classList.toggle('on', k === id));
  const spy = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length) mark(visible[0].target.id);
  }, { rootMargin: '-80px 0px -60% 0px' });
  sections.forEach((s) => spy.observe(s));
  // Opened for a tool (help.html#record): go straight to its section
  const start = location.hash && document.getElementById(location.hash.slice(1));
  if (start) {
    mark(start.id);
    start.scrollIntoView({ behavior: 'instant', block: 'start' }); // the script runs after the page content
  }

  // Search: every word must appear in a section; matches are highlighted
  const clearMarks = (s) => {
    s.querySelectorAll('mark').forEach((m) => m.replaceWith(document.createTextNode(m.textContent)));
    s.normalize();
  };
  const highlight = (node, words) => {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    texts.forEach((t) => {
      if (!re.test(t.nodeValue)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      t.nodeValue.split(re).forEach((part, i) => {
        if (i % 2) { const m = document.createElement('mark'); m.textContent = part; frag.appendChild(m); } else if (part) frag.appendChild(document.createTextNode(part));
      });
      t.replaceWith(frag);
    });
  };
  search.addEventListener('input', () => {
    const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    sections.forEach((s) => {
      clearMarks(s);
      const hit = !words.length || words.every((w) => s.textContent.toLowerCase().includes(w));
      s.hidden = !hit;
      const a = links.get(s.id);
      if (a) a.hidden = !hit;
      if (hit) { shown++; if (words.length) highlight(s, words); }
    });
    document.querySelectorAll('.hTocGroup').forEach((g) => { g.hidden = !!words.length; });
    noMatch.hidden = shown > 0;
  });
  // "/" jumps to the search, like most help sites
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== search) { e.preventDefault(); search.focus(); }
  });
})();
