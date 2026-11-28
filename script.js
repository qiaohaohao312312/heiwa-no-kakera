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
  ...[
    ["幸せな家ぞく", "11-28-51.0.jpg", "家族が食卓を囲み、幸せに暮らす世界。"],
    ["楽しい時間", "11-30-32.0.jpg", "戦争のない、楽しい時間を過ごせる世界。"],
    ["あるべき日常", "11-32-41.0.png", "子どもが好きな服を着て、安心して暮らせる日常。"],
    ["幸せな家ぞく", "11-35-12.0.jpg", "家族が一緒に暮らし、家で楽しく過ごせること。"],
    ["いつもの時間", "11-37-44.0.jpg", "公園で子どもが元気よく遊べる、いつもの時間。"],
    ["良い環境で学ぶ", "11-39-36.0.jpg", "子どもたちが安全な学校で学び、楽しく通えること。"],
    ["にじいろ学校", "11-42-40.0.jpg", "みんながつながり、あたたかい学校で学べること。"],
    ["カラフルな学校", "11-44-47.0.png", "一人ひとりが安心して学べる、カラフルな学校。"],
    ["赤ちゃん生まれた！", "14-33-30.0.png", "新しい命が生まれ、家族と暮らせるよろこび。"],
    ["GWに発見", "14-35-42.0.jpg", "家族と過ごし、笑顔で発見を分かち合う時間。"],
    ["みんなでお見舞い", "14-39-02.0.jpg", "病院にいる家族を、みんなでお見舞いに行けること。"],
    ["はたらきに行く大人", "14-40-55.0.jpg", "大人が安心して働き、家族を支えられる暮らし。"],
    ["すてきな学校にする", "14-43-10.0.jpg", "みんなで協力して、すてきな学校をつくること。"],
  ].map(([title, file, noteAlt]) => ({
    title,
    artwork: `assets/day2-art-v2/${file.replace(/\.(jpg|png)$/i, ".jpg")}?v=3`,
    artworkAlt: `${title}を描いた作品`,
    note: `assets/day2-notes-v2/${file.replace(/\.(jpg|png)$/i, ".png")}?v=4`,
    noteAlt,
  })),
  ...[
    ["りょこう", "pm-01", "家族で飛行機に乗ってりょこうする。"],
    ["楽しい日", "pm-03", "この家族が平和について、楽しいと思っている場面。"],
    ["明るい大きな学校", "pm-04", "木の学校をドーム形にして、子どもたちが楽しく学校に行っている様子。"],
    ["うさぎのひみつきち", "pm-05", "うさぎのひみつきちに子どもたちが向かっている様子。"],
    ["キャンプに行く子どもたち", "pm-06", "子どもたちが平和にキャンプに行っています。晴れていて、きれいなキャンプ場です。"],
    ["家", "pm-07", "平和な世界に住んでいる動物の家の中。"],
    ["しあわせな親子", "pm-09", "家で楽しくのんびりしている親子の様子。"],
    ["きれいな世界", "pm-10", "天気がとてもきれいで、子どもが遊んでいる世界。"],
  ].map(([title, stem, noteAlt]) => ({
    title,
    artwork: `assets/pm-art/${stem}.jpg?v=1`,
    artworkAlt: `${title}を描いた作品`,
    note: `assets/pm-notes/${stem}.png?v=${stem === "pm-04" ? 3 : 1}`,
    noteAlt,
  })),
  ...[
    ["人も動物も自由に", "animal-01", "忠犬ハチ公のような場面。飼い主と犬がじゃれあうような場面。"],
    ["赤い実", "animal-02", "さるも人もゆたかな森で同じ物を食べているところ。"],
    ["どうぶつえん", "animal-03", "ぞうの体をきれいにしたり、人間に世話をしてもらってよろこんでいる。"],
    ["あたらしいいのち", "animal-04", "人間のなかまたちへ、命の誕生。"],
  ].map(([title, stem, noteAlt]) => ({
    title,
    artwork: `assets/animal-art/${stem}.jpg?v=2`,
    artworkAlt: `${title}を描いた作品`,
    note: `assets/animal-notes/${stem}.png?v=2`,
    noteAlt,
  })),
];

const importedSpecs = [
  ["china-01", "家でテレビを見る"], ["china-02", "公園で遊ぶ"],
  ["china-03", "テレビでつながる"], ["china-04", "友だちと学校へ"],
  ["china-05", "家族と暮らす"], ["china-06", "学校で笑う"],
  ["china-07", "何気ない生活"], ["china-08", "家族と遊ぶ"],
  ["china-09", "家族と一緒に"], ["china-10", "公園で遊ぶ子ども"],
  ["china-11", "家に帰る子ども"], ["china-12", "みんなの笑顔"],
  ["china-13", "楽しく遊ぶ"], ["china-14", "ドラえもんのいる日常"],
  ["china-15", "安心してテレビを見る"],
  ["japan-01", "みんなで遊ぶ"], ["japan-02", "お花畑"],
  ["japan-03", "キャンプ"], ["japan-04", "友だちと食事"],
  ["japan-05", "公園で過ごす"], ["japan-06", "ネコカフェ"],
  ["japan-07", "木を見ながらお話"], ["japan-08", "家族で食事"],
  ["japan-09", "家族の家"], ["japan-10", "親子でキャンプ"],
  ["japan-11", "家族で食事"], ["japan-12", "友だちと遊ぶ"],
  ["japan-13", "学校で学ぶ"], ["japan-14", "小学校の子どもたち"],
  ["ukraine-01", "家族と木"], ["ukraine-02", "旅行へ"],
  ["ukraine-03", "笑顔で話す"], ["ukraine-04", "世界をめぐる"],
  ["ukraine-05", "家族の暮らし"], ["ukraine-06", "海辺の家族"],
  ["ukraine-07", "楽しい旅行"], ["ukraine-09", "日本へ旅行"],
  ["ukraine-10", "幸せを運ぶ"], ["ukraine-11", "家族の安心"],
  ["ukraine-14", "楽しい休日"],
];

works.push(...importedSpecs.map(([id, title]) => ({
  title,
  artwork: `assets/imported-batch-3/${id}/artwork.png?v=1`,
  artworkAlt: `${title}を描いた作品`,
  note: `assets/imported-batch-3/${id}/description.png?v=1`,
  noteAlt: `${title}についての手書きの説明`,
})));

const viewport = document.querySelector(".viewport");
const world = document.querySelector(".world");

importedSpecs.forEach(([id, title], offset) => {
  const button = document.createElement("button");
  button.className = "fragment fragment--imported";
  button.type = "button";
  button.dataset.index = String(34 + offset);
  button.setAttribute("aria-label", `${title}を開く`);

  const image = document.createElement("img");
  image.src = `assets/imported-batch-3/${id}/element.png?v=1`;
  image.alt = `${title}の切り抜き`;
  image.draggable = false;

  const prompt = document.createElement("span");
  prompt.className = "fragment__prompt";
  prompt.setAttribute("aria-hidden", "true");
  prompt.textContent = "平和とは？";

  button.append(image, prompt);
  world.append(button);
});

const fragments = [...document.querySelectorAll(".fragment")];
const detail = document.querySelector(".detail");
const detailAnswer = document.querySelector("#detail-answer");
const detailArt = document.querySelector("#detail-art");
const detailNote = document.querySelector("#detail-note");

const WORLD_WIDTH = 5750;
const WORLD_HEIGHT = 1280;
const INITIAL_VIEW_WIDTH = 1280;
const pointers = new Map();
let panX = 0;
let panY = 0;
let gesture;
let activeFragment;
let suppressNextClick = false;
let transitioning = false;

function shuffledIndexes(length) {
  const values = Array.from({ length }, (_, index) => index);
  let seed = 20261129;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }
  return values;
}

const visualOrder = shuffledIndexes(fragments.length);
const rowSizes = [19, 19, 18, 18];
const rowStarts = rowSizes.reduce((starts, size, index) => {
  starts.push((starts[index - 1] || 0) + (rowSizes[index - 1] || 0));
  return starts;
}, []);

visualOrder.forEach((fragmentIndex, visualIndex) => {
  const row = rowSizes.findIndex((size, index) => visualIndex < rowStarts[index] + size);
  const column = visualIndex - rowStarts[row];
  const fragment = fragments[fragmentIndex];
  const jitterX = ((fragmentIndex * 37) % 35) - 17;
  const jitterY = ((fragmentIndex * 53) % 25) - 12;
  fragment.style.left = `${145 + column * 292 + (row % 2) * 36 + jitterX}px`;
  fragment.style.top = `${55 + row * 315 + jitterY}px`;
});

function renderCanvas() {
  world.style.setProperty("--pan-x", `${panX}px`);
  world.style.setProperty("--pan-y", `${panY}px`);
}

function centerCanvas() {
  panX = (window.innerWidth - INITIAL_VIEW_WIDTH) / 2;
  panY = (window.innerHeight - 720) / 2;
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
  detailNote.closest('.detail__note-frame').hidden = !work.note;
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
