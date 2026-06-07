const tools = [
  {
    rank: 1,
    name: "ChatGPT",
    initials: "CG",
    category: "通用助手",
    bestFor: "头脑风暴、写作、问答、资料整理",
    summary: "适合把零散想法变成提纲、邮件、方案和学习笔记，是最通用的 AI 工作入口。",
    priceType: "free",
    price: "有免费层 / Plus / Team",
    chinese: "优秀",
    difficulty: 2,
    audience: "个人与团队",
    url: "https://chatgpt.com/",
    color: "#009b8b",
    tint: "#e8f7f4",
  },
  {
    rank: 2,
    name: "Claude",
    initials: "CL",
    category: "通用助手",
    bestFor: "长文阅读、严肃写作、方案推演",
    summary: "擅长处理长材料和结构化表达，适合报告、策略文档、合同草拟和深度分析。",
    priceType: "free",
    price: "有免费层 / Pro / Team",
    chinese: "良好",
    difficulty: 2,
    audience: "写作者与研究者",
    url: "https://claude.ai/",
    color: "#151515",
    tint: "#f1f3f3",
  },
  {
    rank: 3,
    name: "Perplexity",
    initials: "PX",
    category: "搜索研究",
    bestFor: "带来源的快速检索、资料核对",
    summary: "把搜索、摘要和来源链接放在一起，适合做选题调研、竞品扫描和事实查证。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "良好",
    difficulty: 1,
    audience: "研究与运营",
    url: "https://www.perplexity.ai/",
    color: "#00796d",
    tint: "#e8f7f4",
  },
  {
    rank: 4,
    name: "Kimi",
    initials: "KM",
    category: "搜索研究",
    bestFor: "中文长文档、网页阅读、资料归纳",
    summary: "中文材料处理体验友好，适合读论文、政策、行业报告和多文件问答。",
    priceType: "free",
    price: "有免费层 / 付费额度",
    chinese: "优秀",
    difficulty: 1,
    audience: "中文用户",
    url: "https://www.kimi.com/",
    color: "#f25d4a",
    tint: "#fff1ef",
  },
  {
    rank: 5,
    name: "Gemini",
    initials: "GM",
    category: "通用助手",
    bestFor: "Google 生态、图片理解、多模态问答",
    summary: "适合已经使用 Google Workspace 的用户，用于邮件、文档、表格和多模态任务。",
    priceType: "free",
    price: "有免费层 / Advanced",
    chinese: "良好",
    difficulty: 2,
    audience: "Google 用户",
    url: "https://gemini.google.com/",
    color: "#0f766e",
    tint: "#ecfdf5",
  },
  {
    rank: 6,
    name: "Notion AI",
    initials: "N",
    category: "写作翻译",
    bestFor: "知识库问答、会议纪要、文档改写",
    summary: "把 AI 嵌入笔记和项目文档，适合团队知识管理和个人工作台。",
    priceType: "paid",
    price: "Notion 附加功能",
    chinese: "良好",
    difficulty: 2,
    audience: "团队与个人",
    url: "https://www.notion.com/product/ai",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 7,
    name: "Grammarly",
    initials: "GR",
    category: "写作翻译",
    bestFor: "英文润色、语气调整、邮件优化",
    summary: "对英文写作非常实用，能处理拼写、语法、语气和商务表达。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "一般",
    difficulty: 1,
    audience: "英文写作者",
    url: "https://www.grammarly.com/",
    color: "#009b8b",
    tint: "#e8f7f4",
  },
  {
    rank: 8,
    name: "DeepL",
    initials: "DL",
    category: "写作翻译",
    bestFor: "高质量翻译、双语改写",
    summary: "适合邮件、合同、文章和资料翻译，比普通机器翻译更重视语气和自然度。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "优秀",
    difficulty: 1,
    audience: "跨语言工作者",
    url: "https://www.deepl.com/",
    color: "#0f5661",
    tint: "#e6f4f6",
  },
  {
    rank: 9,
    name: "Canva",
    initials: "CA",
    category: "设计图像",
    bestFor: "海报、PPT、社媒图、品牌素材",
    summary: "把模板、素材和 AI 生成能力放在同一个编辑器里，适合非设计师快速出图。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "良好",
    difficulty: 1,
    audience: "运营与创作者",
    url: "https://www.canva.com/ai/",
    color: "#009b8b",
    tint: "#e8f7f4",
  },
  {
    rank: 10,
    name: "Gamma",
    initials: "GA",
    category: "设计图像",
    bestFor: "快速生成演示文稿、网页提案",
    summary: "输入主题即可生成结构化页面和演示稿，适合做初稿、课程材料和提案框架。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "良好",
    difficulty: 1,
    audience: "演示与教学",
    url: "https://gamma.app/",
    color: "#f25d4a",
    tint: "#fff1ef",
  },
  {
    rank: 11,
    name: "Midjourney",
    initials: "MJ",
    category: "设计图像",
    bestFor: "概念图、视觉风格、创意素材",
    summary: "图像质感强，适合探索视觉方向、角色、场景、包装和广告画面。",
    priceType: "paid",
    price: "订阅制",
    chinese: "一般",
    difficulty: 3,
    audience: "设计师与创作者",
    url: "https://www.midjourney.com/",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 12,
    name: "Adobe Firefly",
    initials: "FF",
    category: "设计图像",
    bestFor: "商用图像生成、设计工作流",
    summary: "适合已经使用 Adobe 工具的人，用于生成、扩图、改图和创意素材探索。",
    priceType: "trial",
    price: "免费额度 / 付费计划",
    chinese: "良好",
    difficulty: 2,
    audience: "设计团队",
    url: "https://firefly.adobe.com/",
    color: "#f25d4a",
    tint: "#fff1ef",
  },
  {
    rank: 13,
    name: "Runway",
    initials: "RW",
    category: "视频音频",
    bestFor: "AI 视频生成、镜头延展、创意短片",
    summary: "面向视频创作者的生成与编辑工具，适合从图像或文本生成短视频片段。",
    priceType: "trial",
    price: "免费额度 / 付费计划",
    chinese: "一般",
    difficulty: 3,
    audience: "视频创作者",
    url: "https://runwayml.com/",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 14,
    name: "CapCut",
    initials: "CC",
    category: "视频音频",
    bestFor: "短视频剪辑、字幕、模板化内容",
    summary: "适合短视频和社媒内容生产，AI 字幕、模板和自动剪辑功能上手很快。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "优秀",
    difficulty: 1,
    audience: "短视频团队",
    url: "https://www.capcut.com/",
    color: "#009b8b",
    tint: "#e8f7f4",
  },
  {
    rank: 15,
    name: "ElevenLabs",
    initials: "EL",
    category: "视频音频",
    bestFor: "AI 配音、旁白、多语言声音",
    summary: "适合视频旁白、播客、课程和角色配音，声音自然度和多语言能力较强。",
    priceType: "free",
    price: "有免费层 / 付费额度",
    chinese: "良好",
    difficulty: 2,
    audience: "音频创作者",
    url: "https://elevenlabs.io/",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 16,
    name: "Descript",
    initials: "DS",
    category: "视频音频",
    bestFor: "像改文档一样剪音视频",
    summary: "把音视频转成文字后编辑，适合播客、访谈、课程和社媒剪辑。",
    priceType: "free",
    price: "有免费层 / Creator",
    chinese: "一般",
    difficulty: 2,
    audience: "播客与课程",
    url: "https://www.descript.com/",
    color: "#f3ad22",
    tint: "#fff6df",
  },
  {
    rank: 17,
    name: "Otter.ai",
    initials: "OT",
    category: "会议学习",
    bestFor: "英文会议转写、摘要和行动项",
    summary: "适合英语会议、课堂和访谈记录，能生成纪要、关键词和待办事项。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "一般",
    difficulty: 1,
    audience: "会议密集人群",
    url: "https://otter.ai/",
    color: "#0f766e",
    tint: "#ecfdf5",
  },
  {
    rank: 18,
    name: "Cursor",
    initials: "CU",
    category: "开发自动化",
    bestFor: "AI 结对编程、代码库问答、重构",
    summary: "把 AI 深度整合进编辑器，适合写代码、读项目、改 bug 和生成测试。",
    priceType: "free",
    price: "有免费层 / Pro",
    chinese: "良好",
    difficulty: 2,
    audience: "开发者",
    url: "https://www.cursor.com/",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 19,
    name: "GitHub Copilot",
    initials: "CP",
    category: "开发自动化",
    bestFor: "IDE 代码补全、解释、单测建议",
    summary: "适合日常开发提速，尤其是在熟悉的 IDE 和 GitHub 工作流里使用。",
    priceType: "free",
    price: "有免费层 / Pro / Business",
    chinese: "良好",
    difficulty: 2,
    audience: "开发者与团队",
    url: "https://github.com/features/copilot",
    color: "#151515",
    tint: "#f2f2f2",
  },
  {
    rank: 20,
    name: "Zapier AI",
    initials: "ZA",
    category: "开发自动化",
    bestFor: "无代码自动化、跨应用流程",
    summary: "适合把表单、邮件、表格、CRM 和消息工具串起来，让重复流程自动运行。",
    priceType: "free",
    price: "有免费层 / 付费计划",
    chinese: "一般",
    difficulty: 2,
    audience: "运营与小团队",
    url: "https://zapier.com/ai",
    color: "#f25d4a",
    tint: "#fff1ef",
  },
];

const categories = ["全部", ...new Set(tools.map((tool) => tool.category))];
const featuredNames = ["ChatGPT", "Perplexity", "Canva"];
let activeCategory = "全部";
let saved = new Set(JSON.parse(localStorage.getItem("aiToolSaved") || "[]"));

const elements = {
  categoryTabs: document.querySelector("#categoryTabs"),
  searchInput: document.querySelector("#searchInput"),
  priceFilter: document.querySelector("#priceFilter"),
  chineseToggle: document.querySelector("#chineseToggle"),
  sortSelect: document.querySelector("#sortSelect"),
  featuredGrid: document.querySelector("#featuredGrid"),
  toolGrid: document.querySelector("#toolGrid"),
  resultMeta: document.querySelector("#resultMeta"),
  emptyState: document.querySelector("#emptyState"),
  savedCount: document.querySelector("#savedCount"),
  savedButton: document.querySelector("#savedButton"),
  clearFilters: document.querySelector("#clearFilters"),
  clearSaved: document.querySelector("#clearSaved"),
  categoryGrid: document.querySelector("#categoryGrid"),
  compareBody: document.querySelector("#compareBody"),
  compareHint: document.querySelector("#compareHint"),
};

function iconStar() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.75 2.5 5.08 5.6.81-4.05 3.95.96 5.58L12 16.54l-5.01 2.63.96-5.58L3.9 9.64l5.6-.81L12 3.75Z"/></svg>';
}

function iconExternal() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7m-7 0h7v7"/></svg>';
}

function difficultyText(value) {
  return ["", "上手很快", "中等上手", "需要练习"][value] || "中等上手";
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });
}

function renderCategoryTabs() {
  elements.categoryTabs.innerHTML = categories
    .map((category) => {
      const count = category === "全部" ? tools.length : tools.filter((tool) => tool.category === category).length;
      return `<button class="segment" type="button" data-category="${escapeText(category)}" data-active="${category === activeCategory}">
        ${escapeText(category)}<small>${count}</small>
      </button>`;
    })
    .join("");
}

function renderCard(tool, featured = false) {
  const isSaved = saved.has(tool.name);
  return `
    <article class="tool-card${featured ? " featured" : ""}" style="--icon-bg:${tool.tint};--icon-fg:${tool.color}">
      <div class="card-top">
        <div class="tool-icon" aria-hidden="true">${escapeText(tool.initials)}</div>
        <div>
          <h3 class="tool-name">
            <span class="rank">${tool.rank}</span>
            <span>${escapeText(tool.name)}</span>
          </h3>
          <span class="category-label">${escapeText(tool.category)} · ${escapeText(tool.audience)}</span>
        </div>
        <button class="favorite" type="button" title="${isSaved ? "取消收藏" : "收藏"}" aria-label="${isSaved ? "取消收藏" : "收藏"} ${escapeText(tool.name)}" aria-pressed="${isSaved}" data-save="${escapeText(tool.name)}">
          ${iconStar()}
        </button>
      </div>
      <p class="best-for">${escapeText(tool.bestFor)}</p>
      <p class="summary">${escapeText(tool.summary)}</p>
      <div class="meta-row">
        <span class="meta-chip strong">${escapeText(tool.price)}</span>
        <span class="meta-chip">中文：${escapeText(tool.chinese)}</span>
        <span class="meta-chip">${difficultyText(tool.difficulty)}</span>
      </div>
      <div class="card-actions">
        <a class="external" href="${tool.url}" target="_blank" rel="noreferrer">
          打开官网 ${iconExternal()}
        </a>
        <span class="difficulty">#${tool.rank}</span>
      </div>
    </article>
  `;
}

function filteredTools() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const price = elements.priceFilter.value;
  const chineseOnly = elements.chineseToggle.checked;
  const sort = elements.sortSelect.value;

  const result = tools.filter((tool) => {
    const matchesCategory = activeCategory === "全部" || tool.category === activeCategory;
    const haystack = `${tool.name} ${tool.category} ${tool.bestFor} ${tool.summary} ${tool.audience}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesPrice = price === "all" || tool.priceType === price;
    const matchesChinese = !chineseOnly || ["优秀", "良好"].includes(tool.chinese);
    return matchesCategory && matchesQuery && matchesPrice && matchesChinese;
  });

  return result.sort((a, b) => {
    if (sort === "easy") return a.difficulty - b.difficulty || a.rank - b.rank;
    if (sort === "name") return a.name.localeCompare(b.name);
    return a.rank - b.rank;
  });
}

function renderTools() {
  const result = filteredTools();
  elements.toolGrid.innerHTML = result.map((tool) => renderCard(tool)).join("");
  elements.resultMeta.textContent = `显示 ${result.length} / ${tools.length} 个工具`;
  elements.emptyState.hidden = result.length > 0;
}

function renderFeatured() {
  const featuredTools = featuredNames.map((name) => tools.find((tool) => tool.name === name)).filter(Boolean);
  elements.featuredGrid.innerHTML = featuredTools.map((tool) => renderCard(tool, true)).join("");
}

function renderCategories() {
  const labels = {
    通用助手: "写、问、改、想，适合每天打开。",
    搜索研究: "查资料、找来源、读长文档。",
    写作翻译: "润色、翻译、知识库和文档。",
    设计图像: "PPT、海报、概念图和品牌素材。",
    视频音频: "剪辑、配音、短视频和播客。",
    会议学习: "转写、纪要、复盘和学习整理。",
    开发自动化: "写代码、补全、流程自动化。",
  };
  const symbols = ["Q", "R", "W", "D", "V", "M", "A"];
  elements.categoryGrid.innerHTML = categories
    .filter((category) => category !== "全部")
    .map((category, index) => {
      const count = tools.filter((tool) => tool.category === category).length;
      return `<button class="category-card" type="button" data-category-jump="${escapeText(category)}">
        <b>${symbols[index]}</b>
        <strong>${escapeText(category)}</strong>
        <span>${count} 个工具 · ${escapeText(labels[category])}</span>
      </button>`;
    })
    .join("");
}

function renderCompare() {
  const savedTools = tools.filter((tool) => saved.has(tool.name));
  const rows = savedTools.length
    ? savedTools.slice(0, 6)
    : tools.filter((tool) => featuredNames.includes(tool.name));
  elements.compareHint.textContent = savedTools.length
    ? `正在对比 ${rows.length} 个收藏工具。`
    : "默认展示精选工具；收藏后会优先对比你的收藏。";
  elements.compareBody.innerHTML = rows
    .map(
      (tool) => `<tr>
        <td><strong>${escapeText(tool.name)}</strong></td>
        <td>${escapeText(tool.category)}</td>
        <td>${escapeText(tool.bestFor)}</td>
        <td>${escapeText(tool.chinese)}</td>
        <td><span class="rating">${"★".repeat(4 - tool.difficulty)}</span>${"☆".repeat(tool.difficulty - 1)}</td>
        <td>${escapeText(tool.price)}</td>
      </tr>`,
    )
    .join("");
}

function updateSavedCount() {
  elements.savedCount.textContent = saved.size;
  localStorage.setItem("aiToolSaved", JSON.stringify([...saved]));
}

function rerender() {
  renderCategoryTabs();
  renderTools();
  renderFeatured();
  renderCompare();
  updateSavedCount();
}

document.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const name = saveButton.dataset.save;
    if (saved.has(name)) saved.delete(name);
    else saved.add(name);
    rerender();
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeCategory = categoryButton.dataset.category;
    rerender();
    return;
  }

  const categoryJump = event.target.closest("[data-category-jump]");
  if (categoryJump) {
    activeCategory = categoryJump.dataset.categoryJump;
    rerender();
    document.querySelector("#tools").scrollIntoView({ behavior: "smooth" });
  }
});

elements.searchInput.addEventListener("input", renderTools);
elements.priceFilter.addEventListener("change", renderTools);
elements.chineseToggle.addEventListener("change", renderTools);
elements.sortSelect.addEventListener("change", renderTools);

elements.clearFilters.addEventListener("click", () => {
  activeCategory = "全部";
  elements.searchInput.value = "";
  elements.priceFilter.value = "all";
  elements.chineseToggle.checked = false;
  elements.sortSelect.value = "rank";
  rerender();
});

elements.clearSaved.addEventListener("click", () => {
  saved.clear();
  rerender();
});

elements.savedButton.addEventListener("click", () => {
  document.querySelector("#compare").scrollIntoView({ behavior: "smooth" });
});

renderCategories();
rerender();
