let cards = [];
let activeCard = null;
let activeSections = {};
let brandManifests = [];
let projectProfiles = new Map();

const sectionDefinitions = [
  ["summary", "Shrnutí", ["Shrnutí"]],
  ["importance", "Proč je to důležité", ["Proč je to důležité"]],
  ["recommendation", "Doporučení", ["Doporučení", "Doporučený model skóre"]],
  ["blogTitle", "Blogový titulek", ["Blogový titulek"]],
  ["seoTitle", "SEO titulek", ["SEO titulek"]],
  ["h1", "H1", ["H1"]],
  ["perex", "Perex", ["Perex"]],
  ["blogOutline", "Osnova blogu", ["Osnova blogu"]],
  ["blogDraft", "Blogový draft", ["Blogový draft", "Blogový text", "Článek"]],
  ["blogEnfold", "Blog pro Enfold", ["Blog pro Enfold"]],
  ["conclusion", "Závěr", ["Závěr"]],
  ["metaTitle", "Meta title", ["Meta title"]],
  ["metaDescription", "Meta popis pro Yoast SEO", ["Meta popis", "Meta description", "Meta popis pro Yoast SEO"]],
  ["focusKeyphrase", "Hlavní klíčová fráze pro Yoast SEO", ["Hlavní klíčová fráze", "Focus keyphrase", "Klíčová fráze"]],
  ["seoKeywords", "Související klíčová slova", ["Související klíčová slova", "SEO klíčová slova", "Klíčová slova"]],
  ["urlSlug", "URL slug", ["URL slug", "Slug"]],
  ["facebook", "Facebook text", ["Facebook text"]],
  ["linkedin", "LinkedIn text", ["LinkedIn text"]],
  ["instagram", "Instagram caption", ["Instagram caption", "Instagram text"]],
  ["facebookPublish", "Facebook pro publikaci", ["Facebook pro publikaci"]],
  ["linkedinPublish", "LinkedIn pro publikaci", ["LinkedIn pro publikaci"]],
  ["instagramPublish", "Instagram pro publikaci", ["Instagram pro publikaci"]],
  ["tiktokPublish", "TikTok popisek pro publikaci", ["TikTok popisek pro publikaci", "TikTok / Shorts popisek"]],
  ["youtubePublish", "YouTube Shorts popisek", ["YouTube Shorts popisek"]],
  ["tiktokFormat", "TikTok formát", ["TikTok formát"]],
  ["tiktokHook", "TikTok hook", ["TikTok hook"]],
  ["tiktokScript", "TikTok scénář po sekundách", ["TikTok scénář po sekundách", "TikTok scénář"]],
  ["tiktokSpoken", "TikTok mluvený text", ["TikTok mluvený text"]],
  ["tiktokOnscreen", "TikTok text na obrazovku", ["TikTok text na obrazovku"]],
  ["tiktokStoryboard", "TikTok storyboard / záběry", ["TikTok storyboard / záběry"]],
  ["tiktokCta", "TikTok CTA", ["TikTok CTA"]],
  ["tiktokHashtags", "TikTok hashtagy", ["TikTok hashtagy"]],
  ["tiktokVideoPrompt", "TikTok prompt na video", ["TikTok prompt na video"]],
  ["tiktokCoverPrompt", "TikTok prompt na cover / thumbnail", ["TikTok prompt na cover / thumbnail"]],
  ["tiktokGoal", "TikTok cíl", ["TikTok cíl"]],
  ["tiktokStrategy", "TikTok strategie", ["TikTok strategie"]],
  ["graphicText", "Text do grafiky", ["Text do grafiky"]],
  ["cta", "CTA", ["CTA"]],
  ["newsletter", "Newsletter", ["Newsletter", "Newsletterový text"]],
  ["alt", "Alt text", ["Alt text"]],
  ["imageReferences", "Reference k obrázku", ["Reference k obrázku"]],
  ["videoReferences", "Reference k videu", ["Reference k videu"]],
  ["imagePrompt", "Prompt na obrázek", ["Prompt na obrázek"]],
  ["videoPrompt", "Prompt na video", ["Prompt na video", "Scénář 10 s videa", "Mluvený text pro video"]],
  ["flowShort", "Gemini Flow / Omni – marketingový short (10 s)", ["Gemini Flow / Omni – marketingový short (10 s)"]],
  ["flowSeries", "Gemini Flow / Omni – rozvinutý scénář (volitelně)", ["Gemini Flow / Omni – rozvinutý scénář (volitelně)"]]
];

const featureDefinitions = [
  ["featureType", "Typ", "value_feature_type"],
  ["featureName", "Název", "value_feature_name"],
  ["featureSummary", "Co to dělá", "value_feature_summary"],
  ["featureBenefit", "Přínos pro web/projekt", "value_feature_benefit"],
  ["featureMvp", "MVP verze", "value_feature_mvp"],
  ["featureCodexPrompt", "Prompt pro Codex", "value_feature_codex_prompt"]
];

const detailGroups = [
  ["Interní a pracovní obsah", ["summary", "importance", "recommendation", "blogTitle", "seoTitle", "h1", "perex", "blogOutline", "blogDraft", "conclusion", "metaTitle", "metaDescription", "focusKeyphrase", "seoKeywords", "urlSlug", "cta", "newsletter"]],
  ["Finální blog pro WordPress / Enfold", ["blogEnfold"]],
  ["Pracovní návrhy pro sociální sítě", ["facebook", "linkedin", "instagram"]],
  ["Finální texty pro publikaci", ["facebookPublish", "linkedinPublish", "instagramPublish", "youtubePublish", "graphicText"]],
  ["TikTok balíček", ["tiktokFormat", "tiktokHook", "tiktokScript", "tiktokSpoken", "tiktokOnscreen", "tiktokStoryboard", "tiktokPublish", "tiktokCta", "tiktokHashtags", "tiktokVideoPrompt", "tiktokCoverPrompt", "tiktokGoal", "tiktokStrategy"]],
  ["Grafika a video", ["alt", "imageReferences", "videoReferences", "imagePrompt", "videoPrompt"]],
  ["Videa pro Gemini Flow / Omni", ["flowShort", "flowSeries"]]
];

const stepLabels = {
  text: "Text hotov",
  blog: "Blog hotov",
  graphic: "Grafika hotová",
  facebook: "Facebook publikováno",
  linkedin: "LinkedIn publikováno",
  instagram: "Instagram publikováno"
};

const projectFilter = document.querySelector("#projectFilter");
const statusFilter = document.querySelector("#statusFilter");
const dateFilter = document.querySelector("#dateFilter");
const searchInput = document.querySelector("#searchInput");
const cardGrid = document.querySelector("#cardGrid");
const emptyState = document.querySelector("#emptyState");
const detailPanel = document.querySelector("#detailPanel");
const detailOverlay = document.querySelector("#detailOverlay");
const quickFilters = [...document.querySelectorAll("[data-quick-filter]")];
const allowedProjects = ["Agenda24", "Pupeto", "Spolek AI", "Firemní lektor"];

const mediaDefinitions = [
  ["blog", "Blog", 1600, 900],
  ["facebook", "Facebook", 1200, 630],
  ["instagram", "Instagram", 1080, 1350],
  ["linkedin", "LinkedIn Agenda24", 1200, 627]
];

function mediaFolder(card) {
  return `../media/${card.brand || "agenda24"}/${card.date}/`;
}

function mediaSequence(card) {
  const sameBrandAndDate = cards.filter(item =>
    (item.brand || "agenda24") === (card.brand || "agenda24") && item.date === card.date
  );
  const position = sameBrandAndDate.findIndex(item => item.id === card.id);
  return position >= 0 ? position + 1 : 1;
}

function mediaLabel(card) {
  return `${card.project} ${mediaSequence(card)}`;
}

function imageExists(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = `${url}?v=${Date.now()}`;
  });
}

function mediaStorageKey(card, channel) {
  return `${card.id}::${channel}`;
}

function openMediaDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("a24-dashboard-media", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("images")) request.result.createObjectStore("images");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storedMedia(card, channel) {
  const db = await openMediaDatabase();
  return new Promise((resolve, reject) => {
    const request = db.transaction("images", "readonly").objectStore("images").get(mediaStorageKey(card, channel));
    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error);
  });
}

async function saveStoredMedia(card, channel, record) {
  const db = await openMediaDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("images", "readwrite");
    transaction.objectStore("images").put(record, mediaStorageKey(card, channel));
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
}

async function directoryImageFiles(directory, path = "") {
  const files = [];
  for await (const entry of directory.values()) {
    if (entry.kind === "directory") {
      files.push(...await directoryImageFiles(entry, `${path}${entry.name}/`));
      continue;
    }
    if (!entry.name.match(/\.(png|jpe?g|webp|gif)$/i)) continue;
    const file = await entry.getFile();
    Object.defineProperty(file, "a24Path", {value: `${path}${entry.name}`});
    files.push(file);
  }
  return files;
}

async function chooseMediaFolder() {
  if (window.showDirectoryPicker) {
    const directory = await window.showDirectoryPicker({mode: "read"});
    return directoryImageFiles(directory);
  }
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp,image/gif";
    input.multiple = true;
    input.setAttribute("webkitdirectory", "");
    input.onchange = () => resolve([...input.files]);
    input.click();
  });
}

async function imageMeasurements(file) {
  const bitmap = await createImageBitmap(file);
  const result = {file, width: bitmap.width, height: bitmap.height};
  bitmap.close();
  return result;
}

function dimensionScore(image, targetWidth, targetHeight) {
  const ratioPenalty = Math.abs(Math.log((image.width / image.height) / (targetWidth / targetHeight)));
  const sizePenalty = Math.abs(Math.log(image.width / targetWidth)) + Math.abs(Math.log(image.height / targetHeight));
  const undersizedPenalty = image.width < targetWidth || image.height < targetHeight ? 1.5 : 0;
  return ratioPenalty * 10 + sizePenalty + undersizedPenalty;
}

async function selectBestMedia(files, targetWidth, targetHeight) {
  const measured = [];
  const targetRatio = targetWidth / targetHeight;
  for (const file of files) {
    try {
      const image = await imageMeasurements(file);
      image.ratioDifference = Math.abs((image.width / image.height) / targetRatio - 1);
      measured.push(image);
    } catch {}
  }
  const compatible = measured.filter(image => image.ratioDifference <= 0.015);
  compatible.sort((a, b) => {
    const exactA = a.width === targetWidth && a.height === targetHeight ? -1000 : 0;
    const exactB = b.width === targetWidth && b.height === targetHeight ? -1000 : 0;
    return (exactA + dimensionScore(a, targetWidth, targetHeight)) - (exactB + dimensionScore(b, targetWidth, targetHeight));
  });
  return compatible[0] || null;
}

async function chooseMediaForChannel(card, channel, label, targetWidth, targetHeight, item) {
  item.classList.add("selecting");
  item.querySelector(".media-state").textContent = "Vybírám…";
  try {
    const files = await chooseMediaFolder();
    if (!files.length) throw new Error("Ve vybrané složce nejsou podporované obrázky.");
    const best = await selectBestMedia(files, targetWidth, targetHeight);
    if (!best) throw new Error(`Ve složce není obrázek se správným poměrem stran pro ${targetWidth} × ${targetHeight}. Vygenerujte nebo vyberte správný formát.`);
    await saveStoredMedia(card, channel, {
      blob: best.file,
      name: best.file.name,
      path: best.file.a24Path || best.file.webkitRelativePath || best.file.name,
      width: best.width,
      height: best.height,
      selectedAt: new Date().toISOString()
    });
    await renderMediaBundle(card);
  } catch (error) {
    if (error?.name !== "AbortError") alert(`${label}: ${error.message || "Obrázek se nepodařilo vybrat."}`);
    await renderMediaBundle(card);
  }
}

async function renderMediaBundle(card) {
  const folder = mediaFolder(card);
  const grid = document.querySelector("#mediaBundleGrid");
  const count = document.querySelector("#mediaBundleCount");
  document.querySelector("#mediaBundlePath").textContent = `${mediaLabel(card)} · klikněte na kanál a vyberte složku s hotovými obrázky`;
  grid.innerHTML = mediaDefinitions.map(([key, label, width, height]) => `
    <button type="button" class="media-item loading" data-media-key="${key}" title="Vybrat složku a automaticky najít nejlepší obrázek pro ${label}">
      <div class="media-preview"><span>Kontroluji…</span></div>
      <div><strong>${label}</strong><small>${width} × ${height} · kliknutím vybrat složku</small></div>
      <span class="media-state">Kontrola</span>
    </button>`).join("");

  let ready = 0;
  for (const [key, label, width, height] of mediaDefinitions) {
    const item = grid.querySelector(`[data-media-key="${key}"]`);
    item.addEventListener("click", () => chooseMediaForChannel(card, key, label, width, height, item));
    const local = await storedMedia(card, key).catch(() => null);
    const repositoryUrl = `${folder}${key}/${mediaSequence(card)}.png`;
    const repositoryExists = local ? false : await imageExists(repositoryUrl);
    const exists = Boolean(local || repositoryExists);
    item.classList.remove("loading");
    item.classList.toggle("ready", exists);
    item.classList.toggle("missing", !exists);
    item.querySelector(".media-state").textContent = local ? "Vybráno" : repositoryExists ? "Připraveno" : "Klikněte";
    if (local) {
      const objectUrl = URL.createObjectURL(local.blob);
      item.querySelector(".media-preview").innerHTML = `<img src="${objectUrl}" alt="${escapeHtml(label)}" loading="lazy">`;
      item.querySelector("small").textContent = `${local.name} · ${local.width} × ${local.height}`;
      item.title = `Vybráno: ${local.path}. Kliknutím můžete obrázek změnit.`;
    } else {
      item.querySelector(".media-preview").innerHTML = repositoryExists
        ? `<img src="${repositoryUrl}" alt="${escapeHtml(label)}" loading="lazy">`
        : "<span>Klikněte a vyberte složku</span>";
    }
    if (exists) ready += 1;
  }
  count.textContent = `${ready}/${mediaDefinitions.length}`;
  count.classList.toggle("complete", ready === mediaDefinitions.length);
}
function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;"
  })[character]);
}

function unique(field) {
  return [...new Set(cards.map(card => card[field]))].sort((a, b) => a.localeCompare(b, "cs"));
}

function fillSelect(select, values) {
  while (select.options.length > 1) select.remove(1);
  values.forEach(value => select.add(new Option(value, value)));
}

function fillDateFilter() {
  while (dateFilter.options.length > 1) dateFilter.remove(1);
  const today = new Date().toISOString().slice(0, 10);
  const dates = [...new Set(cards.map(card => card.date))].sort().reverse();
  dates.forEach(date => {
    const parsed = new Date(`${date}T12:00:00`);
    const label = parsed.toLocaleDateString("cs-CZ", {day: "numeric", month: "long", year: "numeric"});
    dateFilter.add(new Option(date === today ? `Dnes – ${label}` : label, date));
  });
  dateFilter.value = dates.includes(today) ? today : "all";
}

function savedSteps(card) {
  try {
    return { ...card.steps, ...JSON.parse(localStorage.getItem(`radar-${card.id}`) || "{}") };
  } catch {
    return { ...card.steps };
  }
}

function saveStep(card, key, checked) {
  const steps = savedSteps(card);
  steps[key] = checked;
  localStorage.setItem(`radar-${card.id}`, JSON.stringify(steps));
}

function typesLower(card) {
  return card.types.map(type => type.toLocaleLowerCase("cs"));
}

function isBlog(card) {
  return typesLower(card).some(type => type === "blog");
}

function isSocial(card) {
  return typesLower(card).some(type => ["facebook", "linkedin", "instagram", "reels", "sociální sítě"].includes(type));
}

function hasFeature(card) {
  return featureDefinitions.some(([, , field]) => String(card[field] || "").trim());
}

function outputKinds(card) {
  const kinds = [];
  if (isBlog(card) || typesLower(card).some(type => ["newsletter", "landing page", "interní nápad"].includes(type))) kinds.push("Obsah");
  if (isSocial(card) || typesLower(card).some(type => ["obchodní nabídka", "lead"].includes(type))) kinds.push("Marketing");
  if (hasFeature(card)) kinds.push("Nástroj / funkce");
  return kinds.length ? kinds : ["Obsah"];
}

function waitsForPublication(card) {
  const steps = savedSteps(card);
  const relevant = [];
  if (isBlog(card)) relevant.push("blog");
  if (typesLower(card).includes("facebook")) relevant.push("facebook");
  if (typesLower(card).includes("linkedin")) relevant.push("linkedin");
  if (typesLower(card).includes("instagram")) relevant.push("instagram");
  return relevant.length > 0 && relevant.some(step => !steps[step]);
}

function renderSteps(card, context) {
  const steps = savedSteps(card);
  return Object.entries(stepLabels).map(([key, label]) => `
    <label class="step">
      <input type="checkbox" data-card="${escapeHtml(card.id)}" data-step="${key}" data-context="${context}" ${steps[key] ? "checked" : ""}>
      <span>${label}</span>
    </label>`).join("");
}

function renderCard(card) {
  const article = document.createElement("article");
  article.className = "content-card";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `Otevřít detail: ${card.title}`);
  article.dataset.openCard = card.id;
  article.style.setProperty("--accent", card.accent);
  article.innerHTML = `
    <div class="card-top">
      <span class="project-chip">${escapeHtml(card.project)}</span>
      <span class="media-order-chip">${escapeHtml(mediaLabel(card))}</span>
      <span class="status-chip">${escapeHtml(card.status)}</span>
    </div>
    <h3>${escapeHtml(card.title)}</h3>
    <p class="summary">${escapeHtml(card.summary)}</p>
    <div class="types output-kinds">${outputKinds(card).map(type => `<span class="type-chip">${escapeHtml(type)}</span>`).join("")}</div>
    <div class="types">${card.types.map(type => `<span class="type-chip">${escapeHtml(type)}</span>`).join("")}</div>
    <div class="publish">
      <div class="publish-title">Stav zpracování a publikace</div>
      <div class="steps">${renderSteps(card, "card")}</div>
    </div>
    <div class="card-foot">
      <span>${escapeHtml(card.date)}</span>
      <span class="priority ${card.priority === "vysoká" ? "high" : ""}">${escapeHtml(card.priority)} priorita</span>
    </div>
    <span class="open-hint">Otevřít detail →</span>`;
  return article;
}

function activeQuickFilters() {
  return Object.fromEntries(quickFilters.map(input => [input.dataset.quickFilter, input.checked]));
}

function render() {
  const project = projectFilter.value;
  const status = statusFilter.value;
  const selectedDate = dateFilter.value;
  const query = searchInput.value.trim().toLocaleLowerCase("cs");
  const quick = activeQuickFilters();
  const filtered = cards.filter(card => {
    const haystack = [card.title, card.summary, card.project, card.status, ...(card.types || []), ...(card.tags || [])].join(" ").toLocaleLowerCase("cs");
    return (project === "all" || card.project === project)
      && (status === "all" || card.status === status)
      && (selectedDate === "all" || card.date === selectedDate)
      && (!query || haystack.includes(query))
      && (!quick.publication || waitsForPublication(card))
      && (!quick.graphic || !savedSteps(card).graphic)
      && (!quick.blog || isBlog(card))
      && (!quick.social || isSocial(card));
  });
  cardGrid.replaceChildren(...filtered.map(renderCard));
  emptyState.hidden = filtered.length > 0;
  document.querySelector("#resultCount").textContent = `(${filtered.length})`;
  updateStats(filtered);
}

function updateStats(sourceCards = cards) {
  const complete = sourceCards.filter(card => {
    const steps = savedSteps(card);
    return steps.text && (!isBlog(card) || steps.blog) && (!isSocial(card) || !waitsForPublication(card));
  }).length;
  const ready = sourceCards.filter(card => savedSteps(card).text && !waitsForPublication(card)).length;
  document.querySelector("#statAll").textContent = sourceCards.length;
  document.querySelector("#statOpen").textContent = sourceCards.length - complete;
  document.querySelector("#statReady").textContent = ready;
  document.querySelector("#statPublished").textContent = complete;
}

function parseSections(markdown) {
  const withoutYaml = markdown.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
  const headings = [...withoutYaml.matchAll(/^##\s+(.+)$/gm)];
  const found = {};
  headings.forEach((match, index) => {
    const heading = match[1].trim();
    const start = match.index + match[0].length;
    const end = headings[index + 1]?.index ?? withoutYaml.length;
    found[heading] = withoutYaml.slice(start, end).trim();
  });
  const sections = Object.fromEntries(sectionDefinitions.map(([key, , aliases]) => {
    const value = aliases.map(alias => found[alias]).filter(Boolean).join("\n\n");
    return [key, value];
  }));
  sections.featureName ||= found["Návrh funkce / aplikace / pluginu"] || "";
  sections.featureMvp ||= found["MVP verze"] || "";
  sections.featureCodexPrompt ||= found["Prompt pro Codex k funkci"] || "";
  return sections;
}

function markdownToHtml(markdown) {
  if (!markdown) return '<p class="not-ready">Obsah lze vytvořit příslušným výrobním tlačítkem.</p>';
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let listOpen = false;
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith("- ")) {
      if (!listOpen) { html += "<ul>"; listOpen = true; }
      html += `<li>${inlineMarkdown(line.slice(2))}</li>`;
    } else {
      if (listOpen) { html += "</ul>"; listOpen = false; }
      if (line) html += `<p>${inlineMarkdown(line)}</p>`;
    }
  }
  if (listOpen) html += "</ul>";
  return html;
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

function showCopyPreview(value, title) {
  document.querySelector("#copyPreview")?.remove();
  const dialog = document.createElement("section");
  dialog.id = "copyPreview";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", title);
  dialog.style.cssText = "position:fixed;z-index:10000;inset:5vh 5vw;background:#101426;color:#fff;border:1px solid #e43a73;border-radius:16px;padding:20px;box-shadow:0 24px 80px rgba(0,0,0,.6);display:flex;flex-direction:column;gap:12px;";
  dialog.innerHTML = `<div style="display:flex;justify-content:space-between;gap:16px;align-items:center"><strong>${escapeHtml(title)}</strong><button type="button" data-close-copy-preview style="padding:8px 12px">Zavřít</button></div><p style="margin:0;color:#cbd5e1">Text je zkopírovaný. Tady ho zároveň vidíte celý — vložte ho do Gemini Flow přes Ctrl+V.</p><textarea readonly style="width:100%;min-height:55vh;resize:vertical;box-sizing:border-box;padding:12px;font:13px/1.45 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(value)}</textarea>`;
  document.body.appendChild(dialog);
  const area = dialog.querySelector("textarea");
  area.focus();
  area.select();
  dialog.querySelector("[data-close-copy-preview]").addEventListener("click", () => dialog.remove());
}

async function copyText(text, button) {
  const value = String(text || "").trim();
  const original = button.textContent;
  if (!value) {
    button.textContent = "Text není připravený";
    button.classList.add("copy-failed");
    window.setTimeout(() => { button.textContent = original; button.classList.remove("copy-failed"); }, 2200);
    return;
  }
  try {
    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(value),
          new Promise((_, reject) => window.setTimeout(() => reject(new Error("Schránka neodpověděla.")), 500))
        ]);
        copied = true;
      } catch {
        copied = false;
      }
    }
    if (!copied) {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      if (!document.execCommand("copy")) throw new Error("Prohlížeč kopírování odmítl.");
      field.remove();
      copied = true;
    }
    button.textContent = "Zkopírováno – vložte Ctrl+V";
    button.classList.add("copied");
    if (["flowShort", "flowSeries"].includes(button.dataset.publishCopy)) {
      showCopyPreview(value, button.dataset.publishCopy === "flowShort" ? "Gemini Flow / Omni – video 10 s" : "Gemini Flow / Omni – navazující scénář (3 × 10 s)");
    }
    window.setTimeout(() => { button.textContent = original; button.classList.remove("copied"); }, 2400);
  } catch (error) {
    button.textContent = "Kopírování selhalo";
    button.classList.add("copy-failed");
    window.setTimeout(() => { button.textContent = original; button.classList.remove("copy-failed"); }, 2600);
  }
}

function blogBundle() {
  return [activeSections.seoTitle, activeSections.h1, activeSections.perex, activeSections.blogOutline, activeSections.blogDraft, activeSections.conclusion, activeSections.cta, activeSections.metaTitle, activeSections.metaDescription, activeSections.urlSlug].filter(Boolean).join("\n\n");
}

function brandFor(card) {
  const direct = brandManifests.find(brand => brand.projects.includes(card.project));
  if (direct) return direct;
  if (card.project === "firemnilektor.cz") {
    const context = [card.title, card.summary, ...(card.tags || [])].join(" ").toLocaleLowerCase("cs");
    if (context.includes("martin") || context.includes("agenda24")) return brandManifests.find(brand => brand.id === "agenda24");
  }
  return {
    id: "neutral", name: card.project, projects: [], colors: {background:["#F4F6F8", "#FFFFFF"], primary:"#3F6475", text:"#17222B"},
    style:"Neutrální moderní B2B styl bez převzatého loga nebo osobních fotografií.", promptRules:["Nepoužívat zdroje jiné značky ani falešné logo."],
    logoReferences:[], martinReferences:[], designReferences:[], consistency:"Čistá neutrální kompozice bez cizích brandových prvků."
  };
}

function hasType(card, ...wanted) {
  const values = card.types.map(type => type.toLocaleLowerCase("cs"));
  return wanted.some(type => values.includes(type.toLocaleLowerCase("cs")));
}

function storedGenerated(card) {
  try { return JSON.parse(localStorage.getItem(`radar-content-${card.id}`) || "{}"); }
  catch { return {}; }
}

function persistGenerated() {
  if (activeCard) localStorage.setItem(`radar-content-${activeCard.id}`, JSON.stringify(activeSections));
}

function baseRecommendation() {
  return activeSections.recommendation || `Převést téma „${activeCard.title}“ do konkrétního praktického postupu, který čtenáři pomůže udělat další krok.`;
}

function normalizedCharacterCount(value = "") {
  // NFC zajistí, že české písmeno s diakritikou počítáme jako jeden skutečný znak.
  return Array.from(String(value).normalize("NFC")).length;
}

function fitMetaDescription(value, min = 140, max = 155) {
  let text = String(value || "").normalize("NFC").replace(/\s+/g, " ").trim();
  if (normalizedCharacterCount(text) > max) {
    const characters = Array.from(text);
    text = characters.slice(0, max + 1).join("");
    const lastSpace = text.lastIndexOf(" ");
    if (lastSpace >= min) text = text.slice(0, lastSpace);
    else text = characters.slice(0, max).join("");
    text = text.replace(/[,:;\-–—\s]+$/u, "").trim();
    if (!/[.!?]$/u.test(text) && normalizedCharacterCount(text) < max) text += ".";
  }
  return text;
}

function generateBlog(force = false) {
  if (!isBlog(activeCard) && !force) return;
  const subject = activeCard.title;
  const slug = subject.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  activeSections.blogTitle ||= subject;
  activeSections.seoTitle ||= `${subject}: praktický postup pro firmy | Agenda24`;
  activeSections.h1 ||= subject;
  activeSections.perex ||= `${activeCard.summary} Pro vedení malé nebo střední firmy je podstatné vědět, co přesně zkontrolovat, komu přidělit odpovědnost a jak poznat, že přijaté opatření skutečně funguje. Tento článek převádí téma do konkrétního firemního postupu.`;
  activeSections.blogOutline ||= `- Proč se téma „${subject}“ dostává na stůl vedení firmy\n- Co je potřeba konkrétně zjistit a zdokumentovat\n- Kde vznikají provozní, bezpečnostní a obchodní rizika\n- Praktický příklad z malé nebo střední firmy\n- Doporučený postup krok za krokem\n- Odpovědnosti, výstupy a měřitelné ukazatele\n- Jak udržet řešení funkční i po prvním zavedení`;
  const fullArticle = `## Proč se téma dostává na stůl vedení firmy\n\n${activeCard.summary} Problém obvykle nevzniká jedním velkým rozhodnutím, ale součtem drobných kroků v různých odděleních. Obchod si pořídí vlastní nástroj, marketing začne používat jinou službu, vedení experimentuje s automatizací a zaměstnanci hledají rychlejší cestu k rutinním úkolům. Pokud firma nemá společný přehled, nedokáže spolehlivě určit náklady, odpovědnost, datová rizika ani skutečný přínos.\n\nVedení proto potřebuje rozhodovací podklad, nikoli obecné doporučení. U každého používaného řešení má být zřejmé, kdo jej vlastní, kdo k němu má přístup, jaký proces podporuje, jaká data zpracovává, kolik stojí a co se stane při chybě nebo výpadku. Bez těchto informací nelze odpovědně rozhodnout, co zachovat, co upravit a co zastavit.\n\n## Co má firma konkrétně zmapovat\n\nPraktická inventura začíná seznamem nástrojů a skutečných způsobů použití. Nestačí opsat faktury z účetnictví, protože část služeb může běžet na bezplatných účtech nebo soukromých registracích zaměstnanců. Vedoucí jednotlivých oddělení proto shromáždí název služby, vlastníka účtu, počet uživatelů, účel, typ vstupních dat, napojené systémy, oprávnění a způsob kontroly výstupu. Výsledkem je jedna tabulka, kterou schválí odpovědný člen vedení.\n\nDruhým výstupem je jednoduchá mapa datového toku. Ta ukazuje, odkud informace přicházejí, kdo je do nástroje vkládá, kde se ukládají a kam pokračuje výstup. Typickým problémem je kopírování nabídek, smluv, osobních údajů zákazníků nebo interních reportů do služby, u níž nikdo neověřil podmínky, místo zpracování ani dobu uchování. Mapa musí takové místo označit konkrétním nástrojem a konkrétním typem dat.\n\n## Kde typicky vzniká chyba\n\nPrvní častou chybou je nejasný vlastník. Nástroj používá celé oddělení, ale nikdo neodpovídá za nastavení, přístupy, náklady a pravidelnou kontrolu. Druhou chybou jsou nadměrná oprávnění: integrace získá přístup k celé schránce, disku nebo databázi, přestože pro daný úkol potřebuje pouze omezený rozsah. Třetím rizikem je nekontrolovaný výstup, který zaměstnanec bez ověření odešle zákazníkovi nebo použije při obchodním rozhodnutí.\n\nDopad nemusí být pouze bezpečnostní. Chybný údaj v nabídce může snížit marži, nepřesná odpověď zákazníkovi poškodit důvěru a automatizace bez záznamu zkomplikovat reklamaci. Firma proto u každého kritického použití stanoví, kdo výstup kontroluje, podle jakého seznamu a kde zůstane dohledatelný záznam. U nízkorizikových úloh může stačit namátková kontrola; u cen, smluv, osobních údajů nebo veřejných tvrzení má být schválení povinné.\n\n## Praktický příklad z firemního prostředí\n\nPředstavme si firmu s třiceti zaměstnanci. Marketing používá nástroj pro návrhy textů, obchod nahrává podklady zákazníků do asistenta a administrativa automaticky zpracovává zápisy z porad. Audit odhalí sedm různých účtů, dvě nevyužívaná předplatná, sdílené přihlašovací údaje a jeden nástroj s přístupem k celému cloudovému disku. Nejde o důvod všechny služby zakázat. Firma zruší duplicity, převede účty pod firemní správu, omezí oprávnění a stanoví, které dokumenty se nesmí vkládat bez anonymizace.\n\nMěřitelným výsledkem není počet napsaných směrnic. Výsledkem je úplný seznam nástrojů, přidělený vlastník u každé položky, odstraněné sdílené účty, omezená oprávnění a prokazatelná kontrola citlivých výstupů. Vedení může současně porovnat měsíční náklady a zrušit služby, které nepřinášejí využití. Audit tak vedle snížení rizika často přinese i přímou úsporu.\n\n## Doporučený postup krok za krokem\n\n1. Vedení určí garanta, který má pravomoc získat informace od všech oddělení a předložit závěry. Nemusí jít o právníka; důležitá je znalost procesů a přístup k rozhodovatelům.\n2. Vedoucí týmů během jednoho týdne vyplní společný seznam používaných nástrojů, účtů, dat, integrací a odpovědností.\n3. Garant označí případy s osobními údaji, firemním know-how, automatickým odesíláním nebo širokými oprávněními jako prioritní.\n4. U prioritních případů firma ověří smluvní nastavení, přístupy, uchování dat a kontrolu výstupů.\n5. Vedení schválí krátká pravidla: povolené nástroje, zakázaná data, povinné schválení a postup při incidentu.\n6. Po třiceti dnech proběhne kontrola, zda byly účty převedeny, oprávnění omezená a zaměstnanci pravidla skutečně používají.\n\n## Kdo odpovídá a jaký má být výstup\n\nGarant auditu koordinuje sběr dat a udržuje centrální evidenci. Vedoucí oddělení odpovídají za úplnost informací ze svého týmu. Správce IT ověřuje účty, integrace a technická oprávnění. Vedení rozhoduje o přijatelném riziku a schvaluje výjimky. Pokud firma využívá externí dodavatele, jejich přístupy a nástroje patří do stejné evidence; smlouva sama o sobě nenahrazuje provozní kontrolu.\n\nMinimálním výstupem je registr nástrojů, mapa citlivých dat, seznam rizik s prioritou, vlastník nápravného opatření a termín. Každé opatření má mít ověřitelnou podmínku dokončení. Místo vágního „zvýšit bezpečnost“ se zapíše například „do 15. srpna odebrat přístup integrace k celé schránce a ponechat pouze složku objednávek; odpovídá správce IT; ověření snímkem nastavení a testem“.\n\n## Jak poznat, že řešení funguje\n\nPo měsíci musí firma umět odpovědět na pět otázek: Známe všechny používané nástroje? Má každý účet vlastníka? Víme, jaká data do něj vstupují? Jsou oprávnění omezená na nezbytné minimum? Kontroluje člověk výstupy s obchodním, právním nebo reputačním dopadem? Pokud některá odpověď zůstává neurčitá, audit ještě není uzavřen.\n\nDlouhodobě se sleduje počet neschválených nástrojů, sdílených účtů, nadměrných oprávnění, incidentů a nevyužívaných licencí. Kontrola se opakuje při nástupu nového nástroje, změně integrace nebo alespoň jednou za půl roku. Tím se z jednorázového dokumentu stane jednoduchý řídicí proces, který drží krok s reálnou prací firmy.`;
  const enrichedArticle = `${fullArticle}\n\n## Jak nastavit průběžnou kontrolu\n\nSoučástí pravidel má být jednoduchý způsob hlášení nového použití. Zaměstnanec vyplní účel, typ dat, požadovaná oprávnění a očekávaný přínos. Odpovědná osoba rychle rozhodne, zda je použití běžné, vyžaduje omezení, nebo musí projít podrobnější kontrolou. Firma tím nesnižuje iniciativu lidí, ale zabraňuje tomu, aby se užitečný experiment proměnil v nekontrolovaný trvalý proces.\n\nDobře nastavená evidence pomáhá také při nástupu a odchodu zaměstnanců. Přístupy lze předat nebo odebrat podle seznamu, firemní historie nezůstává na soukromém účtu a vedení vidí, zda služba stále odpovídá původnímu účelu. To je konkrétní provozní přínos, který lze ověřit při každé personální změně.\n\nJednou za čtvrtletí má garant předložit vedení krátký přehled změn: nové nástroje, uzavřená opatření, otevřená rizika, incidenty a nevyužívané licence. Kontrola tak nezatěžuje každodenní provoz, ale současně brání tomu, aby se evidence po prvním auditu přestala používat.`;
  const publishableArticle = `${enrichedArticle}\n\n## Co má vedení dostat na jednu stránku\n\nZávěrečný manažerský přehled nemá kopírovat celý pracovní registr. Na jedné stránce shrne počet evidovaných řešení, nejzávažnější otevřená rizika, opatření po termínu, náklady na nevyužívané služby a rozhodnutí, která vedení musí přijmout. Každá položka obsahuje vlastníka a datum další kontroly. Díky tomu se diskuse neztratí v technických detailech a vedení může určit prioritu podle dopadu na zákazníky, provoz, finance a pověst firmy.\n\nUžitečné je také oddělit okamžité opravy od dlouhodobých změn. Sdílené heslo nebo zbytečné oprávnění lze odstranit ihned. Změna procesu schvalování, školení týmu nebo náhrada nevhodného nástroje potřebuje plán, rozpočet a termín. Toto rozdělení brání tomu, aby jednoduchá rizika čekala na velký projekt a aby složitá opatření zůstala bez odpovědného rozhodnutí.`;
  if (force || !activeSections.blogDraft) activeSections.blogDraft = publishableArticle;
  activeSections.conclusion ||= `Praktický přístup k tématu „${subject}“ nezačíná zákazem ani nákupem dalšího nástroje. Začíná úplnou evidencí, konkrétní odpovědností a ověřitelnými opatřeními. Vedení pak rozhoduje podle skutečných dat a firma může využívat nové možnosti bez zbytečných provozních, bezpečnostních a reputačních rizik.`;
  activeSections.cta ||= `Chcete téma „${subject}“ převést do praktického řešení? Ozvěte se a projdeme vhodný první krok.`;
  activeSections.metaTitle ||= `${subject} – praktický návod | Agenda24`;
  const metaCandidate = `${activeCard.summary} Získejte praktický postup, konkrétní kroky a doporučení, která lze využít ve firmě.`;
  activeSections.metaDescription ||= fitMetaDescription(metaCandidate);
  activeSections.focusKeyphrase ||= subject;
  activeSections.seoKeywords ||= [subject, `${subject} pro firmy`, "praktický postup", "firemní procesy", "automatizace", "Agenda24"].join(", ");
  activeSections.urlSlug ||= slug;
}

function generateSocial(force = false) {
  if (!isSocial(activeCard) && !force) return;
  const title = activeCard.title;
  const facebook = `${title}\n\n${activeCard.summary}\n\nVe firmě se podobná situace často projeví nenápadně: různé týmy používají vlastní nástroje, účty nebo postupy, ale vedení nemá společný přehled o odpovědnosti, datech a nákladech. Chyba se ukáže až ve chvíli, kdy odejde zaměstnanec, selže integrace nebo se nesprávný výstup dostane k zákazníkovi.\n\nPraktická rada: sepište používaná řešení do jedné evidence. U každého uveďte vlastníka, účel, vstupní data, oprávnění a způsob kontroly. Pak vyberte tři nejrizikovější případy a určete konkrétní opatření, odpovědnou osobu a termín.\n\n${activeSections.cta || `Chcete připravit praktický postup pro téma „${title}“? Ozvěte se Agenda24.`}`;
  const linkedin = `${title} není okrajové technické téma. Je to otázka řízení firmy.\n\n${activeCard.summary}\n\nTypický příklad: obchod používá jednu službu, marketing druhou a administrativa třetí. Každý nástroj samostatně vypadá neškodně. Dohromady ale vznikají nejasné účty, rozdílná pravidla, sdílené přístupy a data uložená mimo kontrolu firmy. Vedení přitom nedokáže říct, kdo odpovídá za výstup nebo co se stane při chybě.\n\nRizikem není jen únik dat. Chybný údaj může skončit v nabídce, automatická odpověď u zákazníka nebo nepřesné doporučení v rozhodovacím podkladu. Důsledek je provozní, obchodní i reputační.\n\nDoporučený postup má být konkrétní: vytvořit jednotnou evidenci, přidělit vlastníka, popsat vstupní data a oprávnění, určit povinnou lidskou kontrolu a stanovit termín nápravy. Výstupem není dlouhá směrnice, ale rozhodovací přehled pro vedení.\n\nMůj názor: firma nemusí nové nástroje plošně zakazovat. Musí ale vědět, kde je používá, proč je používá a kdo nese odpovědnost.\n\nMáte ve firmě jeden společný přehled, nebo zatím každý tým řeší tuto oblast sám?`;
  const instagram = `${title}: přehled je důležitější než další nový nástroj.\n\n${activeCard.summary}\n\nZačněte prakticky:\n• sepište používaná řešení,\n• určete vlastníka každého účtu,\n• zkontrolujte vkládaná data,\n• omezte zbytečná oprávnění,\n• nastavte lidskou kontrolu důležitých výstupů.\n\nCílem není všechno zakázat. Cílem je vědět, kde vzniká riziko a kdo má udělat konkrétní nápravu.\n\n${activeSections.cta || "Uložte si postup a projděte ho s vedením firmy."}\n\n#${activeCard.project.replace(/[^\p{L}\p{N}]/gu, "")} #${(activeCard.tags || []).slice(0, 3).map(tag => tag.replace(/[^\p{L}\p{N}]/gu, "")).join(" #")}`;
  const fullFacebook = `${facebook}\n\nVýstup má být dost konkrétní, aby vedení mohlo bez dalšího vysvětlování ověřit, co se změnilo a zda bylo opatření dokončeno.`;
  const fullLinkedin = `${linkedin}\n\nPravidla přitom nemají zastavit rozumné experimenty. Mají vytvořit rychlou cestu, jak nový způsob použití popsat, posoudit a bezpečně převést do běžného provozu. Právě v tom je rozdíl mezi zákazem a skutečným řízením.`;
  if (force || !activeSections.facebook || activeSections.facebook.length < 700) activeSections.facebook = fullFacebook;
  if (force || !activeSections.linkedin || activeSections.linkedin.length < 1200) activeSections.linkedin = fullLinkedin;
  if (force || !activeSections.instagram || activeSections.instagram.length < 500) activeSections.instagram = instagram;
  activeSections.graphicText ||= `${title}\n${activeSections.summary ? "Praktický přehled. Jasná rizika. Konkrétní doporučení." : "Konkrétní problém. Praktický postup. Měřitelný výsledek."}`;
  activeSections.newsletter ||= `${title}\n\n${activeCard.summary} V novém článku ukazujeme konkrétní rizika, odpovědnosti a postup, který může vedení malé nebo střední firmy použít jako praktický kontrolní seznam. Přečtěte si celý návod a zjistěte, jak převést téma do ověřitelných kroků.`;
}

function formatRecommendation() {
  const types = activeCard.types.map(type => type.toLocaleLowerCase("cs"));
  const formats = [];
  if (types.includes("instagram") || types.includes("reels") || types.includes("sociální sítě")) formats.push("Instagram 1080 × 1350 px");
  if (types.includes("facebook") || types.includes("sociální sítě")) formats.push("Facebook 1200 × 1200 px nebo 1200 × 628 px");
  if (types.includes("linkedin") || types.includes("sociální sítě")) formats.push("LinkedIn 1200 × 627 px");
  if (types.includes("blog")) formats.push("blog hero 1600 × 900 px");
  return formats.join(", ") || "blog hero 1600 × 900 px";
}

function agendaCampaignPrompt(brand) {
  const cardNumber = Number((activeCard.id.match(/(\d+)$/) || [0, 0])[1]);
  const poses = brand.poseRotation.poses;
  const campaignPose = activeCard.title === "Audit používání AI ve firmě" ? "stojí vpravo nebo mírně vpravo od středu a jednou otevřenou dlaní ukazuje na auditní diagram; druhá ruka je přirozeně spuštěná nebo lehce ohnutá před tělem; nemá založené ruce; dívá se do kamery nebo směrem k diagramu; výraz je profesionální, klidný a analytický" : null;
  const mainPose = campaignPose || poses[cardNumber % poses.length];
  const alternativePose = poses[(cardNumber + 7) % poses.length];
  const formats = Object.values(brand.formats);
  const headline = activeSections.graphicText || activeCard.title;
  const subtitle = activeCard.summary;
  const recommendation = baseRecommendation();
  const concept = `Hlavní myšlenka: ${activeCard.summary} Vizuální metafora: tematický firemní proces, srovnání nebo datový tok, který jasně ukazuje problém a cestu k řešení. Atmosféra: ${brand.style} Martinova hlavní póza: ${mainPose}. Alternativní póza: ${alternativePose}. V každé další generované sérii změň postoj, gesto rukou, natočení těla a umístění Martina; neopakuj pózu z přiložených hotových ukázek a nestřídej pouze výraz obličeje. Pózy mezi formáty jedné série také přirozeně obměňuj.`;
  const hierarchy = `POVINNÝ ČESKÝ OBSAH PŘÍMO V HOTOVÉM OBRAZU: výrazný hlavní nadpis „${headline}“ (nejvýše 6–10 slov), jedno klíčové slovo zvýrazněné barvou #EC0044; krátký a čitelný podnadpis vycházející ze sdělení „${subtitle}“; 3–5 krátkých, věcných bodů odvozených pouze z tématu a doporučení „${recommendation}“; u každého bodu jednoduchá bílá ikona v magentovém kruhu; tematická infografika nebo diagram s krátkými českými popisky; dole výrazný závěrečný box s praktickou pointou nebo CTA. Veškerý text musí být česky, s přesnou diakritikou, bez nesmyslných znaků, bez angličtiny a dostatečně velký pro čtení na daném formátu. Nepoužívat dlouhé odstavce.`;
  const formatPrompts = formats.map((format, index) => {
    const pose = index % 2 === 0 ? mainPose : alternativePose;
    const orientation = format.size === "1080x1920" || format.size === "1080x1350" ? "vertikální" : "široká";
    return `### ${format.name} – ${format.size}\nVytvoř KOMPLETNÍ PUBLIKOVATELNOU ČESKOU INFOGRAFIKU, nikoli prázdný podklad a nikoli pouze portrét. POVINNÝ VÝSTUPNÍ ROZMĚR JE PŘESNĚ ${format.size} PIXELŮ; nenahrazuj jej jiným rozměrem ani jiným poměrem stran. ${orientation} samostatná kompozice pro ${format.size}; nejde o ořez jiného formátu. Tmavý základ ${brand.colors.background.join(" / ")}, jemná technologická struktura a nový tematický motiv související s tématem „${activeCard.title}“. Povinně vlož přímo do obrazu: hlavní nadpis „${headline}“, krátký podnadpis, 3–5 stručných bodů s bílými ikonami v magentových kruzích, tematickou infografiku/diagram s českými popisky a spodní box s pointou nebo CTA. Zachovej jasnou typografickou hierarchii, velký kontrast a bezpečné okraje. Martin je volitelný podpůrný prvek; pokud je použit, musí realisticky zachovat identitu podle referenčních fotografií, póza: ${pose}, a nesmí zabrat prostor určený pro informace. Použij dodané originální logo 24 přesně podle reference, bez překreslení a deformace; pokud jej model neumí zachovat přesně, ponech pro něj čistou pozici vlevo nahoře. Výsledek nesmí být jen dekorativní sci-fi scéna, portrét nebo prázdné panely.`;
  }).join("\n\n");
  const layout = `PŘESNÝ LAYOUT: logo vlevo nahoře; hlavní nadpis v horní třetině; pod ním krátký podnadpis; 3–5 bodů s ikonami a tematická infografika tvoří hlavní informační plochu; dole kontrastní závěrečný box. Martin může být vpravo, pouze pokud zůstane dostatek místa pro čitelný obsah. Každý formát musí být znovu vysázen pro své přesné rozměry, nikoli pouze oříznut. Před odevzdáním ověř přesný počet pixelů a poměr stran každého souboru. Povinně zkontroluj českou diakritiku a čitelnost všech textů.`;
  const negative = `${brand.negativePrompt} Navíc zakázáno: obraz bez nadpisu, obraz bez informačních bodů, samotný portrét, prázdné dekorativní obrazovky, obecná sci-fi výplň bez významu, anglický text, pseudo-text, zkomolená čeština, chybějící diakritika, příliš drobné písmo, dlouhé odstavce, nečitelný diagram.`;
  return `# Výrobní sada hotových infografik Agenda24\n\n## Koncept kampaně\n${concept}\n\n## Povinný obsah v obrazu\n${hierarchy}\n\n## Samostatné prompty pro formáty\n${formatPrompts}\n\n## Společný negativní prompt\n${negative}\n\n## Layout\n${layout}\n\n## Kontrolní seznam před odevzdáním\n- Je přímo v obrazu výrazný český nadpis?\n- Je v obrazu krátký podnadpis?\n- Obsahuje obraz 3–5 konkrétních bodů s ikonami v magentových kruzích?\n- Obsahuje tematickou infografiku nebo diagram s českými popisky?\n- Je dole praktická pointa nebo CTA?\n- Jsou všechny texty čitelné, česky a se správnou diakritikou?\n- Není výsledkem jen portrét nebo dekorativní pozadí?\n- Odpovídá každý výstup přesně předepsanému počtu pixelů a poměru stran?\n- Je originální logo použito přesně, nebo je pro něj ponecháno čisté místo?\n\n## Povinné reference\nLogo: ${brand.logoPolicy.onlyAllowedFile}. Fotografie Martina: ${brand.martinIdentity.references.join(", ")}. Vizuální systém, ikony, sazbu a typ infografiky čerpej z přiložených souborů označených BACKGROUND, EXAMPLE, LOGO a MARTIN.`;
}
function pupetoCampaignPrompt(brand) {
  const formats = Object.values(brand.formats).filter(format => !format.condition || hasType(activeCard, "LinkedIn"));
  const reference = brand.characters["Jeepers Jack"].references[0];
  const concept = `Téma: ${activeCard.title}. Účel: prakticky a přátelsky vysvětlit téma majitelům mazlíčků nebo poskytovatelům služeb. Hlavní sdělení: ${activeCard.summary} Použít skutečnou identitu Jeepers Jacka a Mjolka/Mnouka pouze podle reference ${reference}; označení druhé postavy je ve zdrojích názvově nejednotné a nesmí se domýšlet.`;
  const prompts = formats.map(format => `### ${format.name} – ${format.size}\nVytvoř bezeztextový vizuální podklad pro Pupeto.eu ve formátu ${format.size}. Účel: ${activeCard.title}. ${brand.style} Použij ověřenou paletu: tyrkysová ${brand.colors.primary}, růžová ${brand.colors.pink}, tmavý textový kontrast ${brand.colors.ink}, světlé pozadí ${brand.colors.background.join(", ")}. Postava nebo postavy musí přesně vycházet z originální reference ${reference}; zachovat druh zvířete, kresbu srsti, proporce, anatomii a charakteristické rysy. Přirozený přátelský výraz, realistická fyzika a tematicky správné prostředí související s tématem. Vytvoř vlastní kompozici pro tento formát, nejde o ořez jiné varianty. Ponech čistou bezpečnou zónu pro následnou českou sazbu a samostatnou zónu pro vložení originálního loga. Obrazový model nesmí generovat logo, wordmark ani finální text. Použité zdroje: ${reference}; logo až následně z ${brand.logoPolicy.official[0]}; fonty pro postprodukci ${brand.fonts.heading.name} a ${brand.fonts.body.name}.`).join("\n\n");
  return `# Výrobní sada Pupeto.eu\n\n## Téma, účel a cílová skupina\n${concept}\n\n## Formátové obrazové prompty\n${prompts}\n\n## Společný negativní prompt\n${brand.negativePrompt}\n\n## Povinné zdrojové soubory\n${[...brand.logoReferences, ...brand.designReferences].join("\n")}\n\n## Kontrola\n- pouze zdroje Pupeto\n- bez loga 24, Martina a stylu Agenda24\n- originální logo vložit až v postprodukci\n- postavy nenahrazovat generickými zvířaty\n- každý formát má vlastní kompozici`;
}

function generateImage(force = false) {
  if (!(isBlog(activeCard) || isSocial(activeCard) || hasType(activeCard, "grafika")) && !force) return;
  const brand = brandFor(activeCard);
  activeSections.alt ||= `Vizuál značky ${brand.name} k tématu „${activeCard.title}“, který znázorňuje ${activeCard.summary.toLocaleLowerCase("cs")}`;
  activeSections.graphicText ||= activeCard.title;
  activeSections.imagePrompt = brand.id === "agenda24" ? agendaCampaignPrompt(brand) : brand.id === "pupeto" ? pupetoCampaignPrompt(brand) : `Vytvoř vizuál značky ${brand.name} k tématu „${activeCard.title}“. ${brand.style} Barevnost: pozadí ${brand.colors.background.join(" nebo ")}, hlavní barva ${brand.colors.primary}, text ${brand.colors.text}. Hlavní motiv vychází ze sdělení: ${activeCard.summary} Text v grafice: „${activeSections.graphicText}“. Doporučený formát: ${formatRecommendation()}. Jednotný vzhled: ${brand.consistency} Pravidla: ${brand.promptRules.join(" ")} Logo reference: ${brand.logoReferences.join(", ") || "zatím není přiložena"}.`;
}

function generateFeature(force = false) {
  const context = [activeCard.title, activeCard.summary, ...(activeCard.types || []), ...(activeCard.tags || [])].join(" ").toLocaleLowerCase("cs");
  const isPlugin = /(plugin|wordpress|woocommerce|gutenberg)/.test(context);
  const isAutomation = /(automat|workflow|radar|integrac|import|export)/.test(context);
  const type = isPlugin ? "WordPress / WooCommerce plugin" : isAutomation ? "Webová aplikace / automatizace" : "Praktická funkce pro web nebo interní nástroj";
  const name = isPlugin
    ? `${activeCard.title}: praktický plugin`
    : isAutomation
      ? `${activeCard.title}: pracovní automatizace`
      : `${activeCard.title}: praktická funkce`;
  const benefit = `Převede téma „${activeCard.title}“ z obecného doporučení do konkrétního opakovatelného postupu pro ${activeCard.project}. Uživatel získá jasný výstup, méně ruční práce a lepší kontrolu nad dalším krokem.`;
  const mvp = [
    "Jedna hlavní obrazovka s jasně popsaným účelem a vstupy.",
    "Vytvoření konkrétního výstupu podle zadaného tématu a dostupných dat.",
    "Možnost zkontrolovat, zkopírovat nebo stáhnout výsledek.",
    "Uložení pracovního stavu v prohlížeči; bez zbytečného účtu a bez placené externí integrace v první verzi."
  ].join("\n");
  const prompt = `# Zadání pro Codex – ${name}

Vytvoř funkční MVP typu: **${type}** pro projekt **${activeCard.project}**.

## Výchozí problém
${activeCard.summary}

## Cíl
Navrhni a implementuj jednoduchý, srozumitelný a responzivní nástroj, který převede tento problém na konkrétní pracovní výstup. Nezůstávej u makety ani obecného popisu.

## Povinné funkce MVP
- hlavní pracovní obrazovka s jasným titulkem a krátkou nápovědou;
- vstupy odpovídající tématu: název, popis, volby nebo data, která jsou pro výsledek nutná;
- primární tlačítko pro vytvoření výsledku;
- přehledný výstup, který lze zkopírovat nebo stáhnout;
- validace prázdných vstupů a srozumitelné chybové stavy;
- plná použitelnost na mobilu i desktopu;
- žádná falešná AI integrace: pokud není API dodané, vytvoř realistickou lokální logiku a zřetelně ji popiš.

## Doporučená MVP verze
${mvp}

## Technické požadavky
- zachovej existující technologii repozitáře a nevyměňuj ji bez důvodu;
- nepoškoď současné funkce;
- přidej čisté, přístupné HTML, CSS a JavaScript;
- doplň stručný návod k použití a ověř základní průchod uživatele.

Nejdřív stručně popiš navržené soubory a datový tok, potom změnu implementuj a ověř ji.`;

  if (force || !activeSections.featureType) activeSections.featureType = type;
  if (force || !activeSections.featureName) activeSections.featureName = name;
  if (force || !activeSections.featureSummary) activeSections.featureSummary = `Praktický nástroj vycházející z tématu: ${activeCard.summary}`;
  if (force || !activeSections.featureBenefit) activeSections.featureBenefit = benefit;
  if (force || !activeSections.featureMvp) activeSections.featureMvp = mvp;
  if (force || !activeSections.featureCodexPrompt) activeSections.featureCodexPrompt = prompt;
}

function geminiFlowRules() {
  return `Cílový model: Gemini Flow / Omni. Vertikální video 9:16, délka přesně 10 sekund. Český dialog musí skončit nejpozději v 7. sekundě; poslední 3 sekundy jsou pro reakci a čistý obraz. Žádné titulky, grafické overlaye, falešná loga ani nedokončené věty.`;
}

function geminiPrompt({brand, theme, visual, dialogue, action, ending}) {
  return `# Gemini Flow / Omni – hotový prompt (10 s)

${geminiFlowRules()}

Značka: ${brand.name}
Téma: „${theme}“
Vizuální situace: ${visual}
Postavy a prostředí: ${action}

ČASOVÝ SCÉNÁŘ:
- 0–3 s: ${dialogue[0]}
- 3–7 s: ${dialogue[1]}
- 7–10 s: ${ending}

Zvuk: pouze přirozený český dialog a jemný ruch prostředí. Pohyb rtů musí přesně odpovídat české řeči. Konec musí být beze slov, aby se při publikaci mohl přidat odkaz mimo video.`;
}

function generateFlowVideos() {
  const brand = brandFor(activeCard);
  const theme = activeCard.title;
  const visual = activeCard.summary || "Jedna jasně čitelná situace související s tématem.";

  if (brand.id === "pupeto") {
    const characters = "Skutečně roztomilý pes Jeepers Jack a kočka Mňouk podle referencí Pupeto; oba mluví česky, s přesnou synchronizací tlamy.";
    activeSections.flowShort = geminiPrompt({
      brand, theme, visual,
      dialogue: [
        "Jack se podívá do kamery: „Víte co? Tohle se týká i nás.“",
        "Mňouk odpoví: „Tak to radši vyřešme včas.“"
      ],
      action: `${characters} Vizuálně ukaž: ${visual}`,
      ending: "Oba si vymění pobavený pohled; Jack přikývne. Čistý obraz bez textu."
    });

    activeSections.flowSeries = `# Gemini Flow / Omni – rozvinutý scénář (3 × 10 s)

Níže jsou tři hotové samostatné prompty. Každý vlož do Gemini Flow / Omni zvlášť. Nejde o instrukci k vytvoření scénáře; toto je přímo scénář a prompty k videím.

## ČÁST 1 – hook
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Jack do kamery: „Víte co? Tohle se týká i nás.“",
    "Mňouk: „A stojí za to to nepodcenit.“"
  ],
  action: `${characters} Vizuálně ukaž první náznak tématu: ${visual}`,
  ending: "Mňouk zvedne obočí, Jack se nakloní blíž ke kameře. Bez textu."
})}

## ČÁST 2 – jednoduchý krok
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Jack ukáže na jednoduchý praktický krok: „Začněme jednou maličkostí.“",
    "Mňouk souhlasí: „Ta často udělá nejvíc.“"
  ],
  action: `${characters} Stejné prostředí a vzhled postav. Ukaž jeden srozumitelný krok k tématu.`,
  ending: "Oba spokojeně přikývnou. Bez textu."
})}

## ČÁST 3 – pointa
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Mňouk do kamery: „Dobrá rada šetří starosti.“",
    "Jack krátce dodá: „A najdete ji na Pupeto.eu.“"
  ],
  action: `${characters} Stejné prostředí, přátelská komediální nálada.`,
  ending: "Jack a Mňouk se podívají do kamery; vpravo zůstane čisté místo pro odkaz při publikaci."
})}`;
    return;
  }

  const person = "Jedna přirozeně působící česká osoba v prostředí odpovídajícím tématu.";
  activeSections.flowShort = geminiPrompt({
    brand, theme, visual,
    dialogue: [
      "Osoba do kamery: „Víte, kde vzniká zbytečná práce?“",
      "Ukáže na problém: „Tady. Zjednodušte jeden krok.“"
    ],
    action: `${person} Styl značky: ${brand.style} Vizuálně ukaž: ${visual}`,
    ending: "Osoba přikývne; čistý závěr s volným místem pro odkaz při publikaci."
  });

  activeSections.flowSeries = `# Gemini Flow / Omni – rozvinutý scénář (3 × 10 s)

Níže jsou tři hotové samostatné prompty pro Gemini Flow / Omni.

## ČÁST 1 – problém
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Český hlas: „Víte, kde vzniká zbytečná práce?“",
    "Český hlas: „Často v jednom malém kroku.“"
  ],
  action: `${person} Značka: ${brand.name}. Ukaž: ${visual}`,
  ending: "Krátká reakce osoby, čistý obraz bez textu."
})}

## ČÁST 2 – řešení
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Český hlas: „Vyberte jeden krok.“",
    "Český hlas: „A udělejte ho jednodušší.“"
  ],
  action: `${person} Stejný vizuální svět. Ukaž jeden konkrétní praktický krok k tématu.`,
  ending: "Osoba dokončí jednoduchý úkon a přikývne."
})}

## ČÁST 3 – výsledek
${geminiPrompt({
  brand, theme, visual,
  dialogue: [
    "Český hlas: „Méně šumu.“",
    "Český hlas: „Více výsledků.“"
  ],
  action: `${person} Stejný vizuální svět a styl značky.`,
  ending: "Čistý závěr s volným místem pro odkaz při publikaci."
})}`;
}

function generateVideo(force = false) {
  generateFlowVideos();
  if (!(hasType(activeCard, "video", "Reels")) && !force) return;
  const brand = brandFor(activeCard);
  activeSections.videoPrompt = activeSections.flowShort;
}

function ensureProductionContent() {
  activeSections = { ...activeSections, ...storedGenerated(activeCard) };
  featureDefinitions.forEach(([key, , field]) => { activeSections[key] = activeCard[field] || activeSections[key] || ""; });
  generateBlog(); generateSocial(); generateImage(); generateVideo(); ensureAssetReferences(); generatePublishingOutputs(); generateTikTokPackage();
  persistGenerated();
}

function assetPrefix(card) {
  return {"Agenda24":"agenda24", "Firemní lektor":"firemni_lektor", "Pupeto":"pupeto", "Spolek AI":"spolek_ai"}[card.project];
}

function assetReferenceData(card) {
  const prefix = assetPrefix(card);
  const get = suffix => card[`${prefix}_${suffix}`] || "";
  return {
    folder: get("graphics_folder"), logo: get("logo_primary"), symbol: get("logo_symbol"),
    person1: get("person_reference_1"), person2: get("person_reference_2"),
    design1: get("design_reference_1"), design2: get("design_reference_2"), manifest: get("brand_manifest_file")
  };
}

const agenda24BrandFolders = [
  "brand/agenda24/backgrounds/",
  "brand/agenda24/examples/",
  "brand/agenda24/logos/",
  "brand/agenda24/martin/"
];

function agenda24ReferenceBlock() {
  return `POVINNÉ BRANDOVÉ PODKLADY AGENDA24:
Před přípravou fronty a generováním obrázku načti skutečné soubory z těchto složek:
- ${agenda24BrandFolders[0]} – schválená pozadí a vizuální struktury
- ${agenda24BrandFolders[1]} – schválené výsledné grafiky a kompozice
- ${agenda24BrandFolders[2]} – originální loga Agenda24
- ${agenda24BrandFolders[3]} – referenční fotografie Martina Řezníčka

Tyto cesty nejsou pouze textová inspirace. Automatizace musí dostupné soubory ze složek skutečně načíst a předat obrazovému modelu jako reference. Zachovej společný charakter značky, ale nevytvářej stále stejné pozadí ani nekopíruj jednu ukázku. Nevymýšlej další brandové složky.`;
}

function referenceBlock(card) {
  if (card.project === "Agenda24") return agenda24ReferenceBlock();
  const refs = assetReferenceData(card);
  const first = (...values) => values.find(Boolean) || "neuvedeno – asset nebyl nalezen";
  return `REFERENCE:\nReference A = ${first(refs.logo, refs.symbol)}\nReference B = ${first(refs.person1, refs.design1)}\nReference C = ${first(refs.person2, refs.design2)}\nReference D = ${first(refs.design1, refs.design2)}\nReference E = ${first(refs.manifest)}`;
}

function referenceSummary(card) {
  if (card.project === "Agenda24") {
    return `Povinné zdroje Agenda24:\n${agenda24BrandFolders.join("\n")}\n\nPři vytvoření fronty musí být skutečné soubory z těchto složek načteny jako obrazové reference.`;
  }
  const refs = assetReferenceData(card);
  return `Graphics folder: ${refs.folder || "chybí"}\nLogo: ${refs.logo || "chybí"}\nSymbol: ${refs.symbol || "chybí"}\nPerson reference 1: ${refs.person1 || "chybí"}\nPerson reference 2: ${refs.person2 || "chybí"}\nDesign reference 1: ${refs.design1 || "chybí"}\nDesign reference 2: ${refs.design2 || "chybí"}\nBrand manifest: ${refs.manifest || "chybí"}`;
}

function ensureAssetReferences() {
  const summary = referenceSummary(activeCard);
  const block = referenceBlock(activeCard);
  activeSections.imageReferences = summary;
  activeSections.videoReferences = summary;
  if (activeSections.imagePrompt && !activeSections.imagePrompt.startsWith("REFERENCE:")) activeSections.imagePrompt = `${block}\n\n${activeSections.imagePrompt}`;
  if (activeSections.videoPrompt && !activeSections.videoPrompt.startsWith("REFERENCE:")) activeSections.videoPrompt = `${block}\n\n${activeSections.videoPrompt}`;
}

const agenda24ImageExtensions = new Set(["png", "jpg", "jpeg", "webp", "gif", "svg"]);

async function resolveAgenda24Directory(selected) {
  if (selected.name.toLocaleLowerCase("cs") === "agenda24") return selected;
  if (selected.name.toLocaleLowerCase("cs") === "brand") return selected.getDirectoryHandle("agenda24");
  const brand = await selected.getDirectoryHandle("brand");
  return brand.getDirectoryHandle("agenda24");
}

async function addDirectoryImagesToZip(directory, zipFolder, path = "") {
  let count = 0;
  for await (const entry of directory.values()) {
    if (entry.kind === "directory") {
      count += await addDirectoryImagesToZip(entry, zipFolder.folder(entry.name), `${path}${entry.name}/`);
      continue;
    }
    const extension = entry.name.split(".").pop().toLocaleLowerCase("cs");
    if (!agenda24ImageExtensions.has(extension)) continue;
    const file = await entry.getFile();
    zipFolder.file(entry.name, await file.arrayBuffer());
    count += 1;
  }
  return count;
}

async function addDirectoryImagesFlat(directory, zipFolder, prefix, state = {count: 0}) {
  let added = 0;
  for await (const entry of directory.values()) {
    if (entry.kind === "directory") {
      added += await addDirectoryImagesFlat(entry, zipFolder, prefix, state);
      continue;
    }
    const extension = entry.name.split(".").pop().toLocaleLowerCase("cs");
    if (!agenda24ImageExtensions.has(extension)) continue;
    const file = await entry.getFile();
    state.count += 1;
    zipFolder.file(`${prefix}-${String(state.count).padStart(2, "0")}.${extension}`, await file.arrayBuffer());
    added += 1;
  }
  return added;
}

async function addHttpDirectoryImagesFlat(directoryUrl, zipFolder, prefix, state = {count: 0}) {
  const response = await fetch(directoryUrl, {cache: "no-store"});
  if (!response.ok) throw new Error(`Složku ${directoryUrl} nelze načíst (${response.status}).`);
  const html = await response.text();
  const documentListing = new DOMParser().parseFromString(html, "text/html");
  const links = [...documentListing.querySelectorAll("a[href]")];
  let added = 0;

  for (const link of links) {
    const href = link.getAttribute("href");
    if (!href || href === "../" || href.startsWith("?") || href.startsWith("#")) continue;
    const url = new URL(href, response.url);
    if (url.origin !== location.origin || !url.pathname.startsWith(new URL(directoryUrl, location.href).pathname)) continue;
    if (url.pathname.endsWith("/")) {
      added += await addHttpDirectoryImagesFlat(url.href, zipFolder, prefix, state);
      continue;
    }
    const extension = url.pathname.split(".").pop().toLocaleLowerCase("cs");
    if (!agenda24ImageExtensions.has(extension)) continue;
    const fileResponse = await fetch(url.href, {cache: "no-store"});
    if (!fileResponse.ok) continue;
    state.count += 1;
    zipFolder.file(`${prefix}-${String(state.count).padStart(2, "0")}.${extension}`, await fileResponse.arrayBuffer());
    added += 1;
  }
  return added;
}

function safePackageName(value) {
  return String(value || "agenda24").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-|-$/g, "").toLocaleLowerCase("cs");
}

async function downloadAgenda24ReferencePackage(button) {
  if (!activeCard || activeCard.project !== "Agenda24") return;
  if (typeof JSZip === "undefined") throw new Error("Modul pro vytvoření ZIPu se nenačetl.");

  generateImage(true);
  ensureAssetReferences();
  persistGenerated();
  renderDetailSections();

  const zip = new JSZip();
  const uploadFolder = zip.folder("NAHRAT-DO-CHATGPT");
  let assets = [];
  try {
    const assetResponse = await fetch(`brand-assets.json?v=${Date.now()}`, {cache: "no-store"});
    if (assetResponse.ok) assets = await assetResponse.json();
    if (!Array.isArray(assets)) assets = [assets].filter(Boolean);
  } catch (error) {
    assets = [];
  }

  const counters = {BACKGROUND: 0, EXAMPLE: 0, LOGO: 0, MARTIN: 0};
  for (const asset of assets) {
    if (!asset?.url || !counters.hasOwnProperty(asset.prefix)) continue;
    try {
      const response = await fetch(asset.url, {cache: "no-store"});
      if (!response.ok) continue;
      counters[asset.prefix] += 1;
      const safeOriginalName = String(asset.name || "reference").replace(/[^a-zA-Z0-9._-]+/g, "-");
      uploadFolder.file(`${asset.prefix}-${String(counters[asset.prefix]).padStart(2, "0")}-${safeOriginalName}`, await response.arrayBuffer());
    } catch (error) {
      // Jednotlivý nedostupný soubor neblokuje ostatní reference.
    }
  }

  const results = [
    ["backgrounds", counters.BACKGROUND],
    ["examples", counters.EXAMPLE],
    ["logos", counters.LOGO],
    ["martin", counters.MARTIN]
  ];
  const total = results.reduce((sum, [, count]) => sum + count, 0);
  if (!total) {
    throw new Error("Seznam obrazových podkladů je prázdný. Zavřete dashboard a spusťte jej znovu ikonou A24 Obsahový radar; spouštěcí skript při startu vytvoří aktuální seznam souborů.");
  }

  const missing = results.filter(([, count]) => count === 0).map(([name]) => name);
  const roleInstructions = [
    "ROZLIŠENÍ PŘILOŽENÝCH REFERENCÍ PODLE NÁZVU:",
    "- BACKGROUND-xx = inspirace pro pozadí, textury a technologické prostředí; nekopírovat stále stejnou scénu.",
    "- EXAMPLE-xx = vzor kompozice, typografie, ikon, rámečků a celkového vizuálního systému.",
    "- LOGO-xx = originální logo Agenda24; zachovat jeho podobu a nedeformovat.",
    "- MARTIN-xx = referenční fotografie Martina Řezníčka; zachovat identitu a podobu osoby.",
    "Názvy souborů jsou závazné informace o jejich roli."
  ].join("\n");
  const basePrompt = activeSections.imagePrompt || agendaCampaignPrompt(brandFor(activeCard));
  const prompt = `${roleInstructions}\n\n${basePrompt}`;

  uploadFolder.file("PROMPT.txt", prompt);
  uploadFolder.file("NAVOD.txt", [
    "A24 – podklady pro ChatGPT Image",
    "",
    "1. Otevřete složku NAHRAT-DO-CHATGPT.",
    "2. Označte všechny soubory v této složce.",
    "3. Přetáhněte je společně do jedné zprávy v ChatGPT Image.",
    "4. Text je také uložen v PROMPT.txt.",
    "",
    "Význam názvů: BACKGROUND = pozadí, EXAMPLE = vzor grafiky, LOGO = logo, MARTIN = fotografie Martina.",
    `Karta: ${activeCard.title}`,
    `Nalezené reference: ${results.map(([name, count]) => `${name}: ${count}`).join(", ")}`,
    missing.length ? `Prázdné nebo chybějící složky: ${missing.join(", ")}` : "Všechny čtyři skupiny obsahují obrázky."
  ].join("\n"));

  const blob = await zip.generateAsync({type: "blob", compression: "DEFLATE", compressionOptions: {level: 6}});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `agenda24-image-${activeCard.date}-${safePackageName(activeCard.title)}.zip`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 3000);
  await navigator.clipboard.writeText(prompt).catch(() => {});
  button.textContent = `Staženo: ${total} referencí`;
  window.setTimeout(() => { button.textContent = "Připravit obrázek pro ChatGPT"; }, 2500);
}

function draftToEnfold() {
  const title = activeSections.h1 || activeSections.blogTitle || activeCard.title;
  const perex = activeSections.perex || activeCard.summary;
  const source = activeSections.blogDraft || activeCard.summary;
  const blocks = source.split(/\n{2,}/).map(block => block.trim()).filter(Boolean).map(block => {
    if (/^#{2,3}\s+/.test(block)) return `<h2>${escapeHtml(block.replace(/^#{2,3}\s+/, ""))}</h2>`;
    if (/^(?:- .+(?:\n|$))+/.test(block)) return `<ul>${block.split(/\n/).map(line => `<li>${escapeHtml(line.replace(/^-\s+/, ""))}</li>`).join("")}</ul>`;
    return `<p>${escapeHtml(block.replace(/^#+\s+/, ""))}</p>`;
  }).join("\n\n");
  return `<h1>${escapeHtml(title)}</h1>\n\n<p class="perex">${escapeHtml(perex)}</p>\n\n${blocks}\n\n<p><strong>CTA:</strong> ${escapeHtml(activeSections.cta || "Zjistěte, jak lze téma prakticky využít ve vašem projektu.")}</p>`;
}

function generatePublishingOutputs() {
  activeSections.blogEnfold ||= draftToEnfold();
  activeSections.facebookPublish ||= activeSections.facebook || `${activeCard.title}\n\n${activeCard.summary}\n\n${activeSections.cta || "Zjistěte více na webu projektu."}`;
  activeSections.linkedinPublish ||= activeSections.linkedin || `${activeCard.title}\n\n${activeCard.summary}\n\n${activeSections.recommendation || "Převeďte téma do konkrétního a měřitelného postupu."}\n\n${activeSections.cta || "Jak toto téma řešíte vy?"}`;
  activeSections.instagramPublish ||= activeSections.instagram || `${activeCard.title}\n\n${activeCard.summary}\n\n${activeSections.cta || "Více informací najdete na webu projektu."}`;
  activeSections.youtubePublish ||= `${activeCard.title}. ${activeCard.summary} ${activeSections.cta || "Více informací najdete na webu projektu."}`;
}

function generateTikTokPackage() {
  const projectRules = {
    "Agenda24": {
      format: "Talking head + komentovaná grafika a textové overlaye",
      hook: `Jestli řešíte ${activeCard.title.toLocaleLowerCase("cs")}, tohle byste neměli přehlédnout.`,
      cta: "Napište „AUDIT“ do zprávy nebo se ozvěte přes Agenda24.cz.",
      goal: "Lead generation, poptávka a návštěva webu",
      hashtags: "#Agenda24 #AI #OnlineMarketing #Web #Automatizace",
      visual: "moderní B2B, tmavé navy až černé pozadí, magentový akcent #EC0044, Martin jako realistický talking head, čisté grafické overlaye; bez žluté, zlaté, oranžové, robotů a levného cyberpunku"
    },
    "Firemní lektor": {
      format: "Talking head / mini lekce s ukázkou na obrazovce",
      hook: "Tuhle chybu dělá při práci s AI většina firemních týmů.",
      cta: "Napište mi a připravíme školení podle vašeho týmu.",
      goal: "Důvěra, edukace a zájem o firemní školení",
      hashtags: "#FiremniLektor #Skoleni #AIvPraxi #Vzdelavani #Firmy",
      visual: "profesionální vzdělávací a firemní styl, lektor, tým, workshop, čitelná ukázka; bez Pupeto a Agenda24 prvků"
    },
    "Pupeto": {
      format: "Reakční / poradenský formát nebo komentovaná grafika",
      hook: activeCard.title.toLocaleLowerCase("cs").includes("pojiště") ? "Veterina vás může stát víc, než čekáte." : "Tohle by měl vědět každý majitel psa nebo kočky.",
      cta: "Sledujte Pupeto a podívejte se na další praktické rady na Pupeto.eu.",
      goal: "Důvěra, edukace, interakce a návštěva webu",
      hashtags: "#Pupeto #Pes #Kocka #Mazlicci #PeceOMazlicky",
      visual: "přátelský praktický pet styl, psi nebo kočky podle tématu, přirozené prostředí a ověřené Pupeto reference; bez Martina, loga 24 a Agenda24 stylu"
    },
    "Spolek AI": {
      format: "Komentovaná grafika + B2B talking head",
      hook: "AI službu nestačí najít. Musíte vědět, komu můžete věřit.",
      cta: "Podívejte se na Spolek.ai nebo si napište o ověřeného poskytovatele.",
      goal: "Vysvětlení hodnoty marketplace, důvěra a lead generation",
      hashtags: "#SpolekAI #AI #Marketplace #B2B #DigitalniEvropa",
      visual: "evropský B2B marketplace, moderní technologická modrá nebo oranžovo-červená podle vlastních referencí Spolek AI; bez loga Agenda24 a Martinovy fotografie"
    }
  };
  const rule = projectRules[activeCard.project] || projectRules["Agenda24"];
  const point = activeSections.recommendation || activeCard.summary;
  activeSections.tiktokFormat ||= rule.format;
  activeSections.tiktokHook ||= rule.hook;
  activeSections.tiktokCta ||= rule.cta;
  activeSections.tiktokGoal ||= rule.goal;
  activeSections.tiktokHashtags ||= rule.hashtags;
  activeSections.tiktokScript ||= `0–2 s: Hook – „${activeSections.tiktokHook}“\n2–8 s: Stručně ukaž problém – ${activeCard.summary}\n8–15 s: Vysvětli řešení nebo pointu – ${point}\n15–20 s: CTA – ${activeSections.tiktokCta}`;
  activeSections.tiktokSpoken ||= `${activeSections.tiktokHook} ${activeCard.summary} ${point} ${activeSections.tiktokCta}`;
  activeSections.tiktokOnscreen ||= `${activeSections.tiktokHook}\nPROBLÉM\n${activeCard.title}\nŘEŠENÍ\n${activeSections.tiktokCta}`;
  activeSections.tiktokStoryboard ||= `Záběr 1 (0–2 s): výrazný hook do kamery nebo hlavní vizuál.\nZáběr 2 (2–8 s): detail problému, obrazovky, služby nebo situace.\nZáběr 3 (8–15 s): tři stručné body řešení s čitelným overlayem.\nZáběr 4 (15–20 s): závěrečný CTA frame v brandu projektu ${activeCard.project}.`;
  activeSections.tiktokPublish ||= `${activeSections.tiktokHook}\n\n${point}\n\n${activeSections.tiktokCta}\n\n${activeSections.tiktokHashtags}`;
  activeSections.tiktokVideoPrompt ||= `Vytvoř vertikální TikTok video 9:16 v délce 15–20 sekund pro projekt ${activeCard.project}. Styl: ${rule.visual}. Formát: ${activeSections.tiktokFormat}. Téma: ${activeCard.title}. Mluvený text: „${activeSections.tiktokSpoken}“ Text na obrazovku po krátkých řádcích: ${activeSections.tiktokOnscreen}. Storyboard: ${activeSections.tiktokStoryboard}. CTA: ${activeSections.tiktokCta}. Tón je přímý, důvěryhodný, svižný a bez zbytečné omáčky. Nepoužívej vizuální zdroje jiné značky.`;
  activeSections.tiktokCoverPrompt ||= `Vytvoř výrazný vertikální cover 1080 × 1920 px pro TikTok projektu ${activeCard.project}. ${rule.visual}. Krátký hlavní text: „${activeSections.tiktokHook}“ Maximálně 6–8 slov na coveru, vysoká čitelnost na mobilu, silný kontrast, bezpečné okraje, žádné falešné logo ani prvky jiné značky.`;
  const refs = referenceBlock(activeCard);
  if (!activeSections.tiktokVideoPrompt.startsWith("REFERENCE:")) activeSections.tiktokVideoPrompt = `${refs}\n\n${activeSections.tiktokVideoPrompt}`;
  if (!activeSections.tiktokCoverPrompt.startsWith("REFERENCE:")) activeSections.tiktokCoverPrompt = `${refs}\n\n${activeSections.tiktokCoverPrompt}`;
  activeSections.tiktokStrategy ||= `Video otevírá konkrétní problém silným hookem a během několika sekund ukáže praktickou pointu. Formát odpovídá značce ${activeCard.project} a tématu „${activeCard.title}“. Krátké titulky udrží pozornost i bez zvuku. CTA přímo navazuje na obchodní cíl: ${activeSections.tiktokGoal.toLocaleLowerCase("cs")}.`;
}

function renderDetailSections() {
  const labels = Object.fromEntries(sectionDefinitions.map(([key, label]) => [key, label]));
  const renderRows = keys => keys.map(key => `<div class="feature-row" id="section-${key}"><div class="detail-section-head"><h4>${labels[key] || featureDefinitions.find(([featureKey]) => featureKey === key)?.[1] || key}</h4></div><div class="markdown-content">${markdownToHtml(activeSections[key])}</div></div>`).join("");
  const standardGroups = detailGroups.map(([title, keys]) => `<section class="detail-section"><div class="detail-section-head"><h3>${title}</h3></div>${renderRows(keys)}</section>`).join("");
  const featureMain = `<section class="detail-section feature-section"><div class="detail-section-head"><h3>Návrh funkce / aplikace / pluginu</h3></div>${renderRows(["featureType", "featureName", "featureSummary", "featureBenefit"])}</section>`;
  const featureMvp = `<section class="detail-section feature-section"><div class="detail-section-head"><h3>MVP verze</h3></div><div class="markdown-content">${markdownToHtml(activeSections.featureMvp)}</div></section>`;
  const featurePrompt = `<section class="detail-section feature-section"><div class="detail-section-head"><h3>Prompt pro Codex k funkci</h3></div><div class="markdown-content">${markdownToHtml(activeSections.featureCodexPrompt)}</div></section>`;
  document.querySelector("#detailSections").innerHTML = standardGroups + featureMain + featureMvp + featurePrompt;
}

function projectProfileLinks(card) {
  const profile = projectProfiles.get(card.project);
  if (card.project === "Agenda24") {
    const cardLinks = [["Web", card.project_url], ["Instagram", card.agenda24_instagram], ["Facebook", card.agenda24_facebook], ["LinkedIn", card.agenda24_linkedin], ["YouTube", card.agenda24_youtube], ["TikTok", card.agenda24_tiktok]].filter(([, url]) => url);
    if (cardLinks.length > 1) return cardLinks.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`).join(`<span aria-hidden="true">·</span>`);
  }
  if (!profile || profile.project !== card.project) return `<a href="${escapeHtml(card.project_url)}" target="_blank" rel="noopener noreferrer">Web</a>`;
  const links = [
    ["Web", profile.project_url],
    ["Instagram", profile.social_profiles?.instagram],
    ["Facebook", profile.social_profiles?.facebook],
    ["LinkedIn", profile.social_profiles?.linkedin],
    ["YouTube", profile.social_profiles?.youtube],
    ["TikTok", profile.social_profiles?.tiktok]
  ].filter(([, url]) => url);
  return links.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`).join(`<span aria-hidden="true">·</span>`);
}

function downloadMarkdown(filename, content) {
  const blob = new Blob([content], {type: "text/markdown;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url);
}

function exportContent(kind) {
  const header = `---\ntitle: "${activeCard.title.replace(/"/g, '\\"')}"\nproject: "${activeCard.project}"\nproject_url: "${activeCard.project_url}"\ndate: ${activeCard.date}\n---\n\n`;
  const bodies = {
    blog: `# ${activeSections.h1 || activeSections.blogTitle}\n\n## SEO titulek\n${activeSections.seoTitle}\n\n## Perex\n${activeSections.perex}\n\n## Osnova\n${activeSections.blogOutline}\n\n## Blogový draft\n${activeSections.blogDraft}\n\n## Závěr\n${activeSections.conclusion}\n\n## CTA\n${activeSections.cta}\n\n## Meta title\n${activeSections.metaTitle}\n\n## Meta description pro Yoast SEO (140–155 znaků včetně mezer)\n${activeSections.metaDescription}\n\n## Hlavní klíčová fráze pro Yoast SEO\n${activeSections.focusKeyphrase || ""}\n\n## Související klíčová slova\n${activeSections.seoKeywords || ""}\n\n## URL slug\n${activeSections.urlSlug}`,
    social: `# Sociální texty – ${activeCard.title}\n\n## Facebook\n${activeSections.facebook || ""}\n\n## LinkedIn\n${activeSections.linkedin || ""}\n\n## Instagram caption\n${activeSections.instagram || ""}\n\n## Text do grafiky\n${activeSections.graphicText || ""}\n\n## Newsletter\n${activeSections.newsletter || ""}\n\n## CTA\n${activeSections.cta || ""}`,
    image: `# Prompt na obrázek\n\n## Alt text\n${activeSections.alt || ""}\n\n## Prompt\n${activeSections.imagePrompt || ""}`,
    video: `# Gemini Flow / Omni – marketingový short (10 s)\n\n${activeSections.flowShort || activeSections.videoPrompt || ""}\n\n# Gemini Flow / Omni – rozvinutý scénář (volitelně)\n\n${activeSections.flowSeries || ""}`
  };
  const names = {blog:"blog.md", social:"social.md", image:"image-prompt.md", video:"video-prompt.md"};
  downloadMarkdown(names[kind], header + bodies[kind]);
}

function markdownHeader() {
  return `---
title: "${activeCard.title.replace(/"/g, '\\"')}"
project: "${activeCard.project}"
project_url: "${activeCard.project_url}"
date: ${activeCard.date}
---

`;
}

function channelText(channel) {
  const values = {
    blog: `# ${activeSections.h1 || activeSections.blogTitle || activeCard.title}

## SEO titulek
${activeSections.seoTitle || ""}

## Perex
${activeSections.perex || ""}

## Článek
${activeSections.blogEnfold || activeSections.blogDraft || ""}

## Závěr
${activeSections.conclusion || ""}

## CTA
${activeSections.cta || ""}

## Meta title
${activeSections.metaTitle || ""}

## Meta description pro Yoast SEO (140–155 znaků včetně mezer)
${activeSections.metaDescription || ""}

## Hlavní klíčová fráze pro Yoast SEO
${activeSections.focusKeyphrase || ""}

## Související klíčová slova
${activeSections.seoKeywords || ""}

## URL slug
${activeSections.urlSlug || ""}

## Alt text obrázku
${activeSections.alt || ""}`,
    facebook: `# Facebook – ${activeCard.title}

${activeSections.facebookPublish || activeSections.facebook || ""}

## Text v grafice
${activeSections.graphicText || ""}

## Alt text obrázku
${activeSections.alt || ""}`,
    instagram: `# Instagram – ${activeCard.title}

${activeSections.instagramPublish || activeSections.instagram || ""}

## Text v grafice
${activeSections.graphicText || ""}

## Alt text obrázku
${activeSections.alt || ""}`,
    linkedin: `# LinkedIn Agenda24 – ${activeCard.title}

${activeSections.linkedinPublish || activeSections.linkedin || ""}

## Text v grafice
${activeSections.graphicText || ""}

## Alt text obrázku
${activeSections.alt || ""}`
  };
  return markdownHeader() + values[channel];
}

function imageExtension(record) {
  const fromName = String(record?.name || "").match(/\.([a-zA-Z0-9]+)$/)?.[1]?.toLocaleLowerCase("cs");
  if (fromName && ["png","jpg","jpeg","webp","gif"].includes(fromName)) return fromName;
  return {"image/png":"png","image/jpeg":"jpg","image/webp":"webp","image/gif":"gif"}[record?.blob?.type] || "png";
}

async function blogImageAsWebP(blob, quality = 0.82) {
  const bitmap = await createImageBitmap(blob);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const context = canvas.getContext("2d", {alpha: false});
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(bitmap, 0, 0);
  bitmap.close();
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      result => result ? resolve(result) : reject(new Error("Blogový obrázek se nepodařilo převést do WebP.")),
      "image/webp",
      quality
    );
  });
}

async function mediaForExport(card, channel) {
  const local = await storedMedia(card, channel).catch(() => null);
  if (local?.blob) return local;
  const url = `${mediaFolder(card)}${channel}/${mediaSequence(card)}.png`;
  try {
    const response = await fetch(url, {cache:"no-store"});
    if (!response.ok) return null;
    return {blob: await response.blob(), name: `${mediaSequence(card)}.png`, path:url};
  } catch {
    return null;
  }
}

async function downloadPublicationPackage(button) {
  if (!activeCard) return;
  if (typeof JSZip === "undefined") throw new Error("Modul ZIP se nenačetl.");
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Připravuji ZIP…";
  try {
    const zip = new JSZip();
    const channels = [
      ["blog", "Blog"],
      ["facebook", "Facebook"],
      ["instagram", "Instagram"],
      ["linkedin", "LinkedIn"]
    ];
    const missing = [];
    for (const [channel, label] of channels) {
      const folder = zip.folder(channel);
      folder.file(`${channel}.md`, channelText(channel));
      const media = await mediaForExport(activeCard, channel);
      if (media?.blob) {
        if (channel === "blog") {
          const webp = await blogImageAsWebP(media.blob);
          folder.file("obrazek.webp", webp);
        } else {
          folder.file(`obrazek.${imageExtension(media)}`, media.blob);
        }
      } else {
        missing.push(label);
        folder.file("OBRAZEK-CHYBI.txt", `Pro kanál ${label} zatím nebyl vybrán obrázek.`);
      }
    }
    zip.file("README.txt", `Publikační balíček Agenda24
Karta: ${activeCard.title}
Projekt: ${activeCard.project}
Datum: ${activeCard.date}

Každá složka obsahuje hotový text a přiřazený obrázek pro daný kanál.
${missing.length ? `Chybějící obrázky: ${missing.join(", ")}` : "Všechny čtyři obrázky jsou přiložené."}
`);
    const blob = await zip.generateAsync({type:"blob", compression:"DEFLATE", compressionOptions:{level:6}});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${safePackageName(activeCard.project)}-${activeCard.date}-${safePackageName(activeCard.title)}-publikacni-balicek.zip`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (missing.length) alert(`ZIP byl vytvořen, ale chybí obrázek pro: ${missing.join(", ")}.`);
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

async function openDetail(card) {
  activeCard = card;
  detailPanel.classList.add("open");
  detailOverlay.hidden = false;
  document.body.classList.add("detail-open");
  document.querySelector("#detailTitle").textContent = card.title;
  document.querySelector("#detailMeta").innerHTML = `${escapeHtml(card.project)} · ${escapeHtml(card.status)} · ${escapeHtml(card.date)}<nav class="header-profile-links" aria-label="Profily projektu">${projectProfileLinks(card)}</nav>`;
  document.querySelector("#detailSections").innerHTML = '<div class="detail-loading">Načítám obsah karty…</div>';
  document.querySelector("#detailSteps").innerHTML = renderSteps(card, "detail");
  const brandPackageButton = document.querySelector("[data-brand-package]");
  brandPackageButton.hidden = card.project !== "Agenda24";
  renderMediaBundle(card);
  try {
    const response = await fetch(card.file, { cache: "no-store" });
    if (!response.ok) throw new Error("Soubor karty se nepodařilo načíst.");
    activeSections = parseSections(await response.text());
    ensureProductionContent();
    renderDetailSections();
  } catch (error) {
    activeSections = {};
    document.querySelector("#detailSections").innerHTML = `<p class="detail-error">${escapeHtml(error.message)}</p>`;
  }
}

function closeDetail() {
  detailPanel.classList.remove("open");
  detailOverlay.hidden = true;
  document.body.classList.remove("detail-open");
  activeCard = null;
}

cardGrid.addEventListener("click", event => {
  if (event.target.closest("input, label.step")) return;
  const cardElement = event.target.closest("[data-open-card]");
  if (cardElement) openDetail(cards.find(card => card.id === cardElement.dataset.openCard));
});

cardGrid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-card]")) {
    event.preventDefault();
    openDetail(cards.find(card => card.id === event.target.dataset.openCard));
  }
});

document.addEventListener("change", event => {
  const checkbox = event.target.closest("input[data-card][data-step]");
  if (!checkbox) return;
  const card = cards.find(item => item.id === checkbox.dataset.card);
  saveStep(card, checkbox.dataset.step, checkbox.checked);
  document.querySelectorAll(`input[data-card="${checkbox.dataset.card}"][data-step="${checkbox.dataset.step}"]`).forEach(input => { input.checked = checkbox.checked; });
  render();
});

document.querySelector("#publishActions").addEventListener("click", event => {
  const button = event.target.closest("[data-publish-copy]");
  if (!button) return;
  const values = {
    blogEnfold: activeSections.blogEnfold,
    facebookPublish: activeSections.facebookPublish,
    linkedinPublish: activeSections.linkedinPublish,
    instagramPublish: activeSections.instagramPublish,
    tiktokPublish: activeSections.tiktokPublish,
    tiktokHook: activeSections.tiktokHook,
    tiktokScript: activeSections.tiktokScript,
    tiktokSpoken: activeSections.tiktokSpoken,
    tiktokOnscreen: activeSections.tiktokOnscreen,
    tiktokHashtags: activeSections.tiktokHashtags,
    tiktokVideoPrompt: activeSections.tiktokVideoPrompt,
    tiktokCoverPrompt: activeSections.tiktokCoverPrompt,
    youtubePublish: activeSections.youtubePublish,
    graphicText: activeSections.graphicText,
    imagePrompt: activeSections.imagePrompt,
    videoPrompt: activeSections.videoPrompt,
    flowShort: activeSections.flowShort,
    flowSeries: activeSections.flowSeries,
    featureCodexPrompt: activeSections.featureCodexPrompt
  };
  copyText(values[button.dataset.publishCopy], button);
});

document.querySelector("#generateActions").addEventListener("click", event => {
  const button = event.target.closest("[data-generate]"); if (!button) return;
  const actions = {blog: () => generateBlog(true), social: () => generateSocial(true), image: () => generateImage(true), video: () => generateVideo(true), feature: () => generateFeature(true)};
  actions[button.dataset.generate](); persistGenerated(); renderDetailSections();
  if (button.dataset.generate === "video") {
    document.querySelector("#section-flowShort")?.scrollIntoView({behavior:"smooth", block:"start"});
  }
  button.textContent = "Vygenerováno"; window.setTimeout(() => button.textContent = {blog:"Vygenerovat blog",social:"Vygenerovat sociální texty",image:"Vygenerovat prompt obrázku",video:"Vygenerovat videa Gemini Flow / Omni",feature:"Vygenerovat návrh funkce / pluginu"}[button.dataset.generate], 1300);
});

document.querySelector("[data-brand-package]").addEventListener("click", async event => {
  const button = event.currentTarget;
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "Připravuji balíček…";
  try {
    await downloadAgenda24ReferencePackage(button);
  } catch (error) {
    if (error.name !== "AbortError") window.alert(error.message);
    button.textContent = original;
  } finally {
    button.disabled = false;
  }
});

document.querySelector("#exportActions").addEventListener("click", async event => {
  const packageButton = event.target.closest("[data-package-export]");
  if (packageButton) {
    try { await downloadPublicationPackage(packageButton); }
    catch (error) { window.alert(error.message || "Publikační balíček se nepodařilo vytvořit."); }
    return;
  }
  const button = event.target.closest("[data-export]");
  if (button) exportContent(button.dataset.export);
});

document.querySelector("#closeDetail").addEventListener("click", closeDetail);
detailOverlay.addEventListener("click", closeDetail);
document.addEventListener("keydown", event => { if (event.key === "Escape" && activeCard) closeDetail(); });

[projectFilter, statusFilter, dateFilter].forEach(element => element.addEventListener("change", render));
quickFilters.forEach(element => element.addEventListener("change", render));
searchInput.addEventListener("input", render);
document.querySelector("#resetFilters").addEventListener("click", () => {
  projectFilter.value = "all";
  statusFilter.value = "all";
  const today = new Date().toISOString().slice(0, 10);
  dateFilter.value = [...dateFilter.options].some(option => option.value === today) ? today : "all";
  searchInput.value = "";
  quickFilters.forEach(filter => { filter.checked = false; });
  render();
});

const now = new Date();
document.querySelector("#currentDate").innerHTML = `${now.toLocaleDateString("cs-CZ", { weekday: "long" })}<strong>${now.toLocaleDateString("cs-CZ", { day: "numeric", month: "long" })}</strong>${now.getFullYear()}`;

async function startDashboard() {
  try {
    const [response, projectResponse, agenda, pupeto, spolek, firemniLektor] = await Promise.all([
      fetch("../data/content-index.json", {cache:"no-store"}), fetch("../data/projects.json", {cache:"no-store"}), fetch("../brand/agenda24/manifest.json"), fetch("../brand/pupeto/manifest.json"), fetch("../brand/spolek-ai/manifest.json"), fetch("../brand/firemni-lektor/manifest.json")
    ]);
    if (!response.ok) throw new Error(`Index se nepodařilo načíst (${response.status}).`);
    cards = await response.json();
    const projectConfig = await projectResponse.json();
    const projectByName = Object.fromEntries(projectConfig.map(project => [project.name, project]));
    cards = cards.map(card => ({...card, project_url: card.project_url || projectByName[card.project]?.url, brand: card.brand || projectByName[card.project]?.brand}));
    const profileEntries = await Promise.all(projectConfig.filter(project => project.profile).map(async project => {
      const profileResponse = await fetch(project.profile, {cache:"no-store"});
      if (!profileResponse.ok) throw new Error(`Profil projektu ${project.name} se nepodařilo načíst.`);
      return [project.name, await profileResponse.json()];
    }));
    projectProfiles = new Map(profileEntries);
    brandManifests = await Promise.all([agenda.json(), pupeto.json(), spolek.json(), firemniLektor.json()]);
    fillSelect(projectFilter, allowedProjects);
    fillSelect(statusFilter, unique("status"));
    fillDateFilter();
    render();
  } catch (error) {
    cardGrid.innerHTML = `<p class="detail-error">${escapeHtml(error.message)}</p>`;
  }
}

startDashboard();
