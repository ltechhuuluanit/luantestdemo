const byId = id => document.getElementById(id);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

const comparison = byId('comparison');
const compareButton = byId('compare-button');
const range = byId('range');
const showComparison = visible => {
  comparison.querySelector('.drawing').hidden = !visible;
  comparison.querySelector('.official-photo').hidden = !visible;
  comparison.querySelector('.compare-ui').hidden = !visible;
  compareButton.setAttribute('aria-pressed', String(visible));
  compareButton.textContent = visible ? 'Đóng phần so sánh' : 'Xem phác họa thuở đầu';
};
compareButton.addEventListener('click', () => showComparison(compareButton.getAttribute('aria-pressed') === 'false'));
range.addEventListener('input', () => comparison.style.setProperty('--split', range.value + '%'));

const carousel = byId('carousel');
let cards = [...carousel.querySelectorAll('.card')];
const prev = byId('prev');
const next = byId('next');
let index = 0;
let scheduled = false;
let movingTo = null;
const position = i => cards[i].offsetLeft - cards[0].offsetLeft;
let dots = [];
function rebuildDots() {
  byId('dots').replaceChildren();
  dots = cards.map((card, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Đến thẻ ' + card.querySelector('.year').textContent);
    dot.addEventListener('click', () => move(i));
    byId('dots').append(dot);
    return dot;
  });
}
rebuildDots();
function mark(i) {
  index = i;
  cards.forEach(card => {
    const label = card.querySelector('.year').textContent.trim();
    card.dataset.labelType = /^\d{4}$/.test(label) ? 'year' : (/^\d{4}/.test(label) ? 'range' : 'word');
  });
  cards.forEach((card, j) => card.classList.toggle('is-current', i === j));
  const detail = byId('milestone-detail');
  detail.innerHTML = cards[i].querySelector('.milestone-content').innerHTML;
  dots.forEach((dot, j) => dot.setAttribute('aria-current', String(i === j)));
  prev.disabled = i === 0;
  next.disabled = i === cards.length - 1;
  carousel.dispatchEvent(new CustomEvent('milestonechange', {detail:{index:i}}));
}
function move(i) {
  const target = Math.max(0, Math.min(cards.length - 1, i));
  movingTo = Math.abs(carousel.scrollLeft - position(target)) > 2 ? target : null;
  mark(target);
  carousel.scrollTo({left:position(target), behavior:reducedMotion.matches ? 'instant' : 'smooth'});
}
mark(0);
prev.addEventListener('click', () => move(index - 1));
next.addEventListener('click', () => move(index + 1));
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    move(index + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

let gesture;
let suppressClick = false;
const axisThreshold = 10;
carousel.addEventListener('wheel', () => { movingTo = null; }, {passive:true});
carousel.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0) return;
  suppressClick = false;
  gesture = {id:event.pointerId, x:event.clientX, y:event.clientY, start:index, axis:null, left:carousel.scrollLeft};
});
carousel.addEventListener('pointermove', event => {
  if (gesture?.id !== event.pointerId) return;
  const dx = event.clientX - gesture.x;
  const dy = event.clientY - gesture.y;
  if (!gesture.axis && Math.max(Math.abs(dx), Math.abs(dy)) > axisThreshold) {
    gesture.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    if (gesture.axis === 'x') {
      movingTo = null;
      carousel.setPointerCapture(event.pointerId);
      carousel.classList.add('dragging');
    }
  }
  if (gesture.axis === 'x') {
    const span = cards[0].offsetWidth;
    carousel.scrollLeft = gesture.left - Math.max(-span, Math.min(span, dx));
  }
});
function endGesture(event) {
  if (gesture?.id !== event.pointerId) return;
  const {x, start, axis} = gesture;
  gesture = null;
  if (axis !== 'x') return;
  const dx = event.clientX - x;
  suppressClick = true;
  carousel.classList.remove('dragging');
  move(start + (event.type === 'pointercancel' || Math.abs(dx) < 26 ? 0 : -Math.sign(dx)));
}
window.addEventListener('pointerup', endGesture);
carousel.addEventListener('pointercancel', endGesture);
carousel.addEventListener('dragstart', event => event.preventDefault());
carousel.addEventListener('click', event => {
  if (suppressClick) {
    event.preventDefault();
    suppressClick = false;
  }
}, true);
carousel.addEventListener('scroll', () => {
  if (gesture || scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (gesture || movingTo !== null) return;
    const nearest = cards.reduce((best, card, i) =>
      Math.abs(carousel.scrollLeft - position(i)) < Math.abs(carousel.scrollLeft - position(best)) ? i : best, 0);
    mark(nearest);
  });
}, {passive:true});
carousel.addEventListener('scrollend', () => {
  if (movingTo !== null && Math.abs(carousel.scrollLeft - position(movingTo)) < 3) movingTo = null;
});
window.addEventListener('resize', () => {
  movingTo = null;
  carousel.scrollTo({left:position(index), behavior:'instant'});
});

window.journeyCarousel = {
  getIndex: () => index,
  goTo: move,
  getAt: position,
  replace(markup) {
    movingTo = null;
    carousel.classList.remove('dragging');
    gesture = null;
    carousel.innerHTML = markup;
    cards = [...carousel.querySelectorAll('.card')];
    rebuildDots();
    carousel.scrollTo({left:0, behavior:'instant'});
    mark(0);
  }
};

const film = byId('film');
byId('film-button').addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.title = 'Bảo Tín Mạnh Hải · Hành trình 30 năm giữ trọn niềm tin vàng';
  iframe.src = 'https://www.youtube-nocookie.com/embed/_lY6JzfGCJk?autoplay=1&rel=0';
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.allowFullscreen = true;
  byId('player').replaceChildren(iframe);
  film.showModal();
});
byId('close-film').addEventListener('click', () => film.close());
film.addEventListener('click', event => { if (event.target === film) film.close(); });
film.addEventListener('close', () => byId('player').replaceChildren());

const opening = byId('opening');
const stage = byId('stage');
const hand = byId('hand');
const skip = byId('skip');
const sweep = byId('sweep');
const reveal = byId('reveal');
const oldScene = byId('old-scene');
const pencilArt = byId('pencil-art');
const pencilMask = byId('pencil-mask');
const svg = byId('lines');
const openingPhoto = document.querySelector('.photo');
const editablePage = [document.querySelector('.mast'), document.querySelector('main')];
let frame;
let replayed = false;
let openingGeneration = 0;
let animationReady;
let sign;
let revealStrokes = [];

function finishOpening(focusTarget = false) {
  if (opening.hidden) return;
  openingGeneration += 1;
  cancelAnimationFrame(frame);
  opening.hidden = true;
  document.body.style.overflow = '';
  editablePage.forEach(element => element.inert = false);
  if (replayed || focusTarget) byId('replay').focus({preventScroll:true});
}
skip.addEventListener('click', () => finishOpening(true));
opening.addEventListener('keydown', event => { if (event.key === 'Escape') finishOpening(true); });
reducedMotion.addEventListener('change', event => { if (event.matches) finishOpening(); });

async function loadScene() {
  const sketch = byId('scene-drawing').content;
  const strokes = [...sketch.querySelectorAll('g')].flatMap((group, side) =>
    [...group.querySelectorAll('path')].flatMap(path => path.getAttribute('d').match(/M[^M]+/g).map(stroke => ({stroke, side}))));
  const paths = strokes.map(({stroke, side}) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg','path');
    line.setAttribute('d', stroke.trim());
    line.classList.toggle('historic-stroke', side === 0);
    svg.append(line);
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    return {line, length, head:line.getPointAtLength(0), tail:line.getPointAtLength(length)};
  });
  sign = document.importNode(sketch.querySelector('text'), true);
  svg.append(sign);
  const maskGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  maskGroup.setAttribute('fill', 'none');
  maskGroup.setAttribute('stroke', 'white');
  maskGroup.setAttribute('stroke-linecap', 'round');
  pencilMask.append(maskGroup);
  revealStrokes = paths.map(({line,length}, i) => {
    const stroke = line.cloneNode();
    stroke.removeAttribute('class');
    stroke.setAttribute('stroke-width', i < 6 ? '72' : '105');
    stroke.setAttribute('filter', 'url(#pencil-soften)');
    stroke.style.strokeDasharray = length;
    stroke.style.strokeDashoffset = length;
    maskGroup.append(stroke);
    return {stroke,length};
  });
  await Promise.all([openingPhoto.decode(), oldScene.decode(), hand.decode()]);
  return paths;
}
async function playOpening(userInitiated = false) {
  if (reducedMotion.matches) {
    if (userInitiated) showComparison(true);
    return;
  }
  if (!opening.hidden) return;
  const generation = ++openingGeneration;
  replayed = userInitiated;
  if (userInitiated) {
    showComparison(false);
    window.scrollTo({top:0,behavior:'instant'});
  }
  opening.hidden = false;
  opening.style.setProperty('--curtain', '1');
  stage.style.transform = '';
  stage.style.opacity = 1;
  pencilArt.style.opacity = 0;
  skip.style.opacity = 1;
  reveal.style.removeProperty('--scene-radius');
  skip.hidden = true;
  reveal.style.opacity = 0;
  oldScene.style.opacity = 0;
  oldScene.style.clipPath = 'polygon(0 0,58% 0,42% 100%,0 100%)';
  sweep.style.opacity = 0;
  hand.style.opacity = 0;
  svg.style.opacity = 0;
  editablePage.forEach(element => element.inert = true);
  document.body.style.overflow = 'hidden';

  let paths;

  try {
    animationReady ??= loadScene();
    paths = await animationReady;
  } catch {
    finishOpening();
    return;
  }
  if (opening.hidden || generation !== openingGeneration) return;
  paths.forEach(({line, length}) => line.style.strokeDashoffset = length);
  revealStrokes.forEach(({stroke,length}) => stroke.style.strokeDashoffset = length);
  svg.style.opacity = 1;
  sign.style.opacity = 0;
  let total = 0;
  paths.forEach((path, i) => {
    const previous = paths[i - 1];
    path.travel = previous ? Math.hypot(path.head.x - previous.tail.x, path.head.y - previous.tail.y) * .33 : 0;
    path.start = total += path.travel;
    total += path.length;
  });
  const sceneRect = stage.getBoundingClientRect();
  const photoRect = openingPhoto.getBoundingClientRect();
  const compareRect = comparison.getBoundingClientRect();
  const photoRadius = parseFloat(getComputedStyle(comparison).borderTopLeftRadius);
  const start = performance.now();

  function placeHand(x, y, opacity) {
    hand.style.opacity = opacity;
    hand.style.transform = 'translate(' + (x / 1000 * stage.clientWidth - hand.offsetWidth * .007) +
      'px,' + (y / 625 * stage.clientHeight - hand.offsetHeight * .019) + 'px)';
  }
  const first = paths[0].line.getPointAtLength(0);
  const lastPath = paths.at(-1);
  const last = lastPath.line.getPointAtLength(lastPath.length);
  function draw(now) {
    const elapsed = now - start;
    if (elapsed >= 13200) return finishOpening();
    if (elapsed >= 500 && skip.hidden) skip.hidden = false;
    if (elapsed >= 500 && elapsed < 1250) {
      const progress = (elapsed - 500) / 750;
      placeHand(first.x + (1000 - first.x) * (1 - progress)**3, first.y + (680 - first.y) * (1 - progress)**3, Math.min(1, progress * 2));
    } else if (elapsed >= 1250 && elapsed < 8850) {
      const distance = total * (elapsed - 1250) / 7600;
      let tip;
      paths.forEach(({line,length,start,travel,head}, i) => {
        const drawn = Math.min(length, Math.max(0, distance - start));
        if (!tip && distance >= start - travel && distance <= start + length) {
          if (drawn === 0 && travel > 0) {
            const origin = paths[i - 1].tail;
            const blend = 1 + (distance - start) / travel;
            const arc = Math.sin(blend * Math.PI);
            tip = {x:origin.x + (head.x - origin.x) * blend, y:origin.y + (head.y - origin.y) * blend - arc * 13};
          } else {
            tip = line.getPointAtLength(drawn);
          }
        }
        line.style.strokeDashoffset = length - drawn;
        revealStrokes[i].stroke.style.strokeDashoffset = length - drawn;
        line.style.strokeWidth = String(1.05 + Math.sin(drawn * .025) * .15);
      });
      tip ??= last;
      placeHand(tip.x, tip.y, 1);
      sign.style.opacity = Math.max(0, (elapsed - 8410) / 440);
      pencilArt.style.opacity = Math.min(.92, (elapsed - 1250) / 900);
    } else if (elapsed >= 8850) {
      paths.forEach(({line}) => line.style.strokeDashoffset = 0);
      sign.style.opacity = 1;
      const exit = Math.min(1, (elapsed - 8850) / 650);
      placeHand(last.x + (1070 - last.x) * exit, last.y + (680 - last.y) * exit, 1 - exit);
      const appear = Math.max(0, Math.min(1, (elapsed - 9200) / 1000));
      const shift = Math.max(0, Math.min(1, (elapsed - 9800) / 900));
      const seam = 50 - 20 * (shift * shift * (3 - 2 * shift));
      reveal.style.opacity = appear;
      oldScene.style.opacity = appear * (1 - Math.max(0, (shift - .77) / .23));
      oldScene.style.clipPath = `polygon(0 0,${seam + 8}% 0,${seam - 8}% 100%,0 100%)`;
      sweep.style.left = seam + '%';
      sweep.style.opacity = Math.sin(shift * Math.PI) * .85 + Math.sin(appear * Math.PI) * .45;
      svg.style.opacity = (1 - appear) * .42;
      pencilArt.style.opacity = (1 - appear) * .92;
      const settle = Math.max(0, Math.min(1, (elapsed - 12300) / 900));
      if (settle > 0) {
        const blend = settle * settle * (3 - 2 * settle);
        const sx = 1 + (photoRect.width / sceneRect.width - 1) * blend;
        const sy = 1 + (photoRect.height / sceneRect.height - 1) * blend;
        const x = (photoRect.left - sceneRect.left) * blend;
        const y = (photoRect.top - sceneRect.top) * blend;
        stage.style.transform = `translate(${x}px,${y}px) scale(${sx},${sy})`;
        reveal.style.setProperty('--scene-radius', `${(4 + (photoRadius - 4) * blend) / sx}px`);
        opening.style.setProperty('--curtain', String(1 - blend));
        skip.style.opacity = 1 - blend;
        if (compareRect.top > innerHeight) stage.style.opacity = 1 - blend;
      }
    }
    frame = requestAnimationFrame(draw);
  }
  frame = requestAnimationFrame(draw);
}
byId('replay').addEventListener('click', () => playOpening(true));
if (!location.hash || location.hash === '#chuong-1') playOpening();
