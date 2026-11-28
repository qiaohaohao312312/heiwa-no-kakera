const works = [
  {
    title: "幸せな家族",
    artwork: "assets/shiawase-na-kazoku.jpg",
    artworkAlt: "家や木々の間に家族が描かれた作品",
    note: "assets/note-shiawase-na-kazoku.png",
    noteAlt: "戦争が終わって、家をすぐに直して住めるようになった。",
  },
  {
    title: "青空",
    artwork: "assets/heiwa-na-aozora.jpg",
    artworkAlt: "青空の下に人、木、荷物が描かれた作品",
    note: "assets/note-aozora.png",
    noteAlt: "松葉杖をほうきに変えて青空を描いた。青空を描けば平和そうに見えるから。",
  },
  {
    title: "明るい日常",
    artwork: "assets/akarui-hibi.jpg",
    artworkAlt: "明るい部屋で人々が過ごす様子を描いた作品",
    note: "assets/note-akarui-nichijo.png",
    noteAlt: "いらない服を送る。いろいろなものを分け合う。",
  },
  {
    title: "大空をとぶ",
    artwork: "assets/ozora-no-tenshi.jpg",
    artworkAlt: "大空を飛ぶ天使が描かれた作品",
    note: "assets/note-ozora-no-tenshi.png",
    noteAlt: "天使が大空を飛んでいる。",
  },
  {
    title: "なにげない日常",
    artwork: "assets/nanigenai-nichijo.jpg",
    artworkAlt: "テントへ向かう子どもたちを描いた作品",
    note: "assets/note-nanigenai-nichijo.png",
    noteAlt: "戦争中には行けない学校へ、日常の中で行く。",
  },
  {
    title: "日常、公園",
    artwork: "assets/heiwa-na-nichijo-koen.jpg",
    artworkAlt: "公園のぶらんこと休む人々が描かれた作品",
    note: "assets/note-heiwa-na-nichijo-koen.png",
    noteAlt: "平和な公園で子どもがぶらんこをして、お母さんがハンモックで休んでいる。",
  },
  {
    title: "家で過ごす",
    artwork: "assets/heiwa-na-ie.jpg",
    artworkAlt: "家で親子が穏やかに過ごす様子を描いた作品",
    note: "assets/note-heiwa-na-ie.png",
    noteAlt: "みんなが健康に過ごしていて、戦争とは関係のない暮らしを送れることが平和につながると思いました。",
  },
  {
    title: "楽しい世界へ",
    artwork: "assets/ensoku-ni-iko.jpg",
    artworkAlt: "青空と木のそばで子どもが楽しむ様子を描いた作品",
    note: "assets/note-tanoshii-sekai.png",
    noteAlt: "残酷な世界から楽しい世界になった。",
  },
  {
    title: "新しい家",
    artwork: "assets/atarashii-ie.jpg",
    artworkAlt: "新しい家と扉、木が描かれた作品",
    note: "assets/note-atarashii-ie.png",
    noteAlt: "うれしいことも、かなしいこともない。",
  },
];

const viewport = document.querySelector(".viewport");
const world = document.querySelector(".world");
const fragments = [...document.querySelectorAll(".fragment")];
const detail = document.querySelector(".detail");
const detailAnswer = document.querySelector("#detail-answer");
const detailArt = document.querySelector("#detail-art");
const detailNote = document.querySelector("#detail-note");

const WORLD_WIDTH = 1280;
const WORLD_HEIGHT = 720;
const pointers = new Map();
let panX = 0;
let panY = 0;
let gesture;
let activeFragment;
let suppressNextClick = false;
let transitioning = false;

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

async function animateSharedFallback(source, target, update) {
  const sourceRect = source.getBoundingClientRect();
  const clone = source.cloneNode(true);
  clone.className = "shared-transition-clone";
  Object.assign(clone.style, {
    left: `${sourceRect.left}px`,
    top: `${sourceRect.top}px`,
    width: `${sourceRect.width}px`,
    height: `${sourceRect.height}px`,
  });
  document.body.append(clone);
  update();
  target.style.opacity = "0";
  const targetRect = target.getBoundingClientRect();
  const animation = clone.animate([
    {
      left: `${sourceRect.left}px`,
      top: `${sourceRect.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
    },
    {
      left: `${targetRect.left}px`,
      top: `${targetRect.top}px`,
      width: `${targetRect.width}px`,
      height: `${targetRect.height}px`,
    },
  ], {
    duration: 720,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards",
  });
  try {
    await animation.finished;
  } finally {
    target.style.opacity = "";
    clone.remove();
  }
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
  suppressNextClick = Boolean(gesture?.moved);
  pointers.delete(event.pointerId);
  viewport.classList.remove("is-dragging");
  if (pointers.size) beginGesture();
  else gesture = undefined;
}

viewport.addEventListener("pointerup", endPointer);
viewport.addEventListener("pointercancel", endPointer);

viewport.addEventListener("wheel", (event) => {
  if (detail.classList.contains("is-visible")) return;
  event.preventDefault();
  panX -= event.deltaX || event.deltaY * 0.35;
  panY -= event.deltaY;
  setInteracted();
  renderCanvas();
}, { passive: false });

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

async function openWork(index, fragment) {
  if (suppressNextClick) {
    suppressNextClick = false;
    return;
  }
  if (transitioning) return;
  transitioning = true;
  activeFragment = fragment;
  activeFragment.classList.add("is-selected");
  const work = works[index];

  detailAnswer.textContent = work.title;
  detailArt.src = work.artwork;
  detailArt.alt = work.artworkAlt;
  detailNote.src = work.note;
  detailNote.alt = work.noteAlt;
  try {
    await detailArt.decode();
  } catch {}

  const sourceImage = fragment.querySelector("img");
  const reveal = () => {
    sourceImage.style.viewTransitionName = "";
    detailArt.style.viewTransitionName = "selected-work";
    detail.classList.add("is-visible", "is-open");
    detail.setAttribute("aria-hidden", "false");
    document.body.classList.add("detail-open");
  };

  if (document.startViewTransition) {
    sourceImage.style.viewTransitionName = "selected-work";
    const transition = document.startViewTransition(reveal);
    try {
      await transition.finished;
    } finally {
      detailArt.style.viewTransitionName = "";
    }
  } else {
    await animateSharedFallback(sourceImage, detailArt, reveal);
  }

  detail.focus({ preventScroll: true });
  transitioning = false;
}

async function closeWork() {
  if (!detail.classList.contains("is-visible") || transitioning) return;
  transitioning = true;
  const targetImage = activeFragment?.querySelector("img");
  const conceal = () => {
    detailArt.style.viewTransitionName = "";
    if (targetImage) targetImage.style.viewTransitionName = "selected-work";
    detail.classList.remove("is-open", "is-visible");
    detail.setAttribute("aria-hidden", "true");
    document.body.classList.remove("detail-open");
  };

  if (document.startViewTransition && targetImage) {
    detailArt.style.viewTransitionName = "selected-work";
    const transition = document.startViewTransition(conceal);
    try {
      await transition.finished;
    } finally {
      targetImage.style.viewTransitionName = "";
    }
  } else {
    await animateSharedFallback(detailArt, targetImage, conceal);
  }

  activeFragment?.classList.remove("is-selected");
  activeFragment?.focus({ preventScroll: true });
  transitioning = false;
}

fragments.forEach((fragment, index) => {
  fragment.addEventListener("click", () => openWork(index, fragment));
});
detail.addEventListener("click", closeWork);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWork();
});
window.addEventListener("resize", () => {
  if (!viewport.classList.contains("has-interacted")) centerCanvas();
});

centerCanvas();
