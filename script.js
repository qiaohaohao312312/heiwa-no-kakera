const works = [
  {
    title: "幸せな家族",
    artwork: "assets/shiawase-na-kazoku.jpg",
    artworkAlt: "家や木々の間に家族が描かれた作品",
    note: "assets/caption-shiawase-na-kazoku.jpg",
    noteAlt: "戦争が終わって、家をすぐに直して住めるようになった。",
  },
  {
    title: "平和な青空",
    artwork: "assets/heiwa-na-aozora.jpg",
    artworkAlt: "青空の下に人、木、荷物が描かれた作品",
    note: "assets/caption-aozora.jpg",
    noteAlt: "松葉杖をほうきに変えて青空を描いた。青空を描けば平和そうに見えるから。",
  },
  {
    title: "明るい日常",
    artwork: "assets/akarui-hibi.jpg",
    artworkAlt: "明るい部屋で人々が過ごす様子を描いた作品",
    note: "assets/caption-akarui-nichijo.jpg",
    noteAlt: "いらない服を送る。いろいろなものを分け合う。",
  },
  {
    title: "大空を飛ぶ天使",
    artwork: "assets/ozora-no-tenshi.jpg",
    artworkAlt: "大空を飛ぶ天使が描かれた作品",
    note: "assets/caption-ozora-no-tenshi.jpg",
    noteAlt: "天使が大空を飛んでいる。",
  },
  {
    title: "なにげない日常",
    artwork: "assets/nanigenai-nichijo.jpg",
    artworkAlt: "テントへ向かう子どもたちを描いた作品",
    note: "assets/caption-nanigenai-nichijo.jpg",
    noteAlt: "戦争中には行けない学校へ、日常の中で行く。",
  },
  {
    title: "平和な日常、公園",
    artwork: "assets/heiwa-na-nichijo-koen.jpg",
    artworkAlt: "公園のぶらんこと休む人々が描かれた作品",
    note: "assets/caption-heiwa-na-nichijo-koen.jpg",
    noteAlt: "平和な公園で子どもがぶらんこをして、お母さんがハンモックで休んでいる。",
  },
  {
    title: "平和な家",
    artwork: "assets/heiwa-na-ie.jpg",
    artworkAlt: "家で親子が穏やかに過ごす様子を描いた作品",
    note: "assets/caption-heiwa-na-ie.jpg",
    noteAlt: "みんなが健康に過ごしていて、戦争とは関係のない暮らしを送れることが平和につながると思いました。",
  },
  {
    title: "楽しい世界へ",
    artwork: "assets/ensoku-ni-iko.jpg",
    artworkAlt: "青空と木のそばで子どもが楽しむ様子を描いた作品",
    note: "assets/caption-tanoshii-sekai.jpg",
    noteAlt: "残酷な世界から楽しい世界になった。",
  },
  {
    title: "新しい家",
    artwork: "assets/atarashii-ie.jpg",
    artworkAlt: "新しい家と扉、木が描かれた作品",
    note: "assets/caption-atarashii-ie.jpg",
    noteAlt: "うれしいことも、かなしいこともない。",
  },
];

const viewport = document.querySelector(".viewport");
const world = document.querySelector(".world");
const fragments = [...document.querySelectorAll(".fragment")];
const detail = document.querySelector(".detail");
const detailAnswer = document.querySelector("#detail-answer");
const detailArtFrame = document.querySelector(".detail__art-frame");
const detailArt = document.querySelector("#detail-art");
const detailNote = document.querySelector("#detail-note");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WORLD_WIDTH = 1280;
const WORLD_HEIGHT = 720;
const pointers = new Map();
let panX = 0;
let panY = 0;
let gesture;
let activeFragment;
let closeTimer;
let blockedFragment;

function renderCanvas() {
  world.style.setProperty("--pan-x", `${panX}px`);
  world.style.setProperty("--pan-y", `${panY}px`);
}

function centerCanvas() {
  panX = (window.innerWidth - WORLD_WIDTH) / 2;
  panY = (window.innerHeight - WORLD_HEIGHT) / 2;
  renderCanvas();
}

function setInteracted() {
  viewport.classList.add("has-interacted");
}

function beginGesture() {
  const active = [...pointers.values()];
  if (active.length === 1) {
    gesture = {
      kind: "pan",
      startX: active[0].x,
      startY: active[0].y,
      panX,
      panY,
      moved: false,
      origin: active[0].target,
    };
  }
}

viewport.addEventListener("pointerdown", (event) => {
  if (detail.classList.contains("is-visible")) return;
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY, target: event.target });
  beginGesture();
});

viewport.addEventListener("pointermove", (event) => {
  if (!pointers.has(event.pointerId)) return;
  const previous = pointers.get(event.pointerId);
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY, target: previous.target });
  const active = [...pointers.values()];

  if (active.length !== 1) return;

  if (gesture?.kind !== "pan") beginGesture();
  const dx = event.clientX - gesture.startX;
  const dy = event.clientY - gesture.startY;
  if (Math.hypot(dx, dy) > 5) {
    gesture.moved = true;
    viewport.classList.add("is-dragging");
    setInteracted();
  }
  panX = gesture.panX + dx;
  panY = gesture.panY + dy;
  renderCanvas();
});

function endPointer(event) {
  if (!pointers.has(event.pointerId)) return;
  if (gesture?.moved && gesture.origin instanceof Element) {
    blockedFragment = gesture.origin.closest(".fragment");
  }
  pointers.delete(event.pointerId);
  viewport.classList.remove("is-dragging");
  if (pointers.size) beginGesture();
  else gesture = undefined;
}

viewport.addEventListener("pointerup", endPointer);
viewport.addEventListener("pointercancel", endPointer);

viewport.addEventListener("keydown", (event) => {
  if (detail.classList.contains("is-visible")) return;
  const step = event.shiftKey ? 180 : 72;
  let handled = true;
  if (event.key === "ArrowLeft") panX += step;
  else if (event.key === "ArrowRight") panX -= step;
  else if (event.key === "ArrowUp") panY += step;
  else if (event.key === "ArrowDown") panY -= step;
  else if (event.key === "0") centerCanvas();
  else handled = false;
  if (handled) {
    event.preventDefault();
    setInteracted();
    renderCanvas();
  }
});

function openWork(fragment) {
  if (blockedFragment === fragment) {
    blockedFragment = undefined;
    return;
  }
  blockedFragment = undefined;
  window.clearTimeout(closeTimer);
  activeFragment = fragment;
  const work = works[Number(fragment.dataset.index)];
  const sourceRect = fragment.getBoundingClientRect();
  const targetRect = detailArtFrame.getBoundingClientRect();
  const sourceX = sourceRect.left + sourceRect.width / 2;
  const sourceY = sourceRect.top + sourceRect.height / 2;
  const targetX = targetRect.left + targetRect.width / 2;
  const targetY = targetRect.top + targetRect.height / 2;

  detailAnswer.textContent = work.title;
  detailArt.src = work.artwork;
  detailArt.alt = work.artworkAlt;
  detailNote.src = work.note;
  detailNote.alt = work.noteAlt;
  detailArtFrame.style.setProperty("--from-x", `${sourceX - targetX}px`);
  detailArtFrame.style.setProperty("--from-y", `${sourceY - targetY}px`);
  detailArtFrame.style.setProperty("--from-scale", String(Math.max(0.12, sourceRect.width / Math.max(targetRect.width, 1))));

  detail.classList.add("is-visible");
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      detail.classList.add("is-open");
      detail.focus({ preventScroll: true });
    });
  });
}

function closeWork() {
  if (!detail.classList.contains("is-visible")) return;
  detail.classList.remove("is-open");
  document.body.classList.remove("detail-open");

  const finish = () => {
    detail.classList.remove("is-visible");
    detail.setAttribute("aria-hidden", "true");
    activeFragment?.focus({ preventScroll: true });
  };

  if (reducedMotion) finish();
  else closeTimer = window.setTimeout(finish, 760);
}

fragments.forEach((fragment) => fragment.addEventListener("click", () => openWork(fragment)));
detail.addEventListener("click", closeWork);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWork();
});
window.addEventListener("resize", () => {
  if (!viewport.classList.contains("has-interacted")) centerCanvas();
});

centerCanvas();
