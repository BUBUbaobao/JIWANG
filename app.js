/* 纯前端刷题逻辑：不依赖后端 */
(function () {
  const $ = (sel) => document.querySelector(sel);

  const pillTotal = $("#pillTotal");
  const pillMode = $("#pillMode");
  const view = $("#view");
  const bar = $("#bar");
  const progressText = $("#progressText");
  const timerText = $("#timerText");

  const ALL = (window.QUESTIONS || []).map(q => ({...q}));
  pillTotal.textContent = `题库：${ALL.length}题`;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function msToTime(ms){
    const s = Math.max(0, Math.floor(ms/1000));
    const m = Math.floor(s/60);
    const r = s%60;
    return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
  }

  let state = null;

  function startQuiz({ count, randomOrder }) {
    const base = randomOrder ? shuffle(ALL) : ALL.slice();
    const picked = base.slice(0, Math.min(count, base.length));
    state = {
      mode: "练习",
      questions: picked,
      idx: 0,
      answers: Array(picked.length).fill(null),
      startedAt: Date.now(),
      timerId: null,
      revealAfterAnswer: true
    };
    pillMode.textContent = `模式：${state.mode}`;
    tickTimer();
    if (state.timerId) clearInterval(state.timerId);
    state.timerId = setInterval(tickTimer, 300);
    renderQuestion();
  }

  function tickTimer(){
    if (!state) { timerText.textContent=""; return; }
    const elapsed = Date.now() - state.startedAt;
    timerText.textContent = `用时：${msToTime(elapsed)}`;
  }

  function renderStart() {
    view.innerHTML = `
      <div class="q">选择题模式（自动从文档知识点生成）</div>
      <div class="opts">
        <button class="btn primary" id="btnAll">开始：全部题目（${ALL.length}题）</button>
        <button class="btn secondary" id="btn20">开始：随机 20 题</button>
        <button class="btn secondary" id="btn40">开始：随机 40 题</button>
      </div>
      <div class="hr"></div>
      <div class="row">
        <label class="small"><input type="checkbox" id="ckRandom" checked /> 题目顺序随机</label>
      </div>
      <div class="small" style="margin-top:10px;">
        说明：每题 4 个选项；提交后会标注对错；最后提供错题回顾（含原句）。
      </div>
    `;
    bar.style.width = "0%";
    progressText.textContent = "准备开始";
    timerText.textContent = "";

    $("#btnAll").onclick = () => startQuiz({ count: ALL.length, randomOrder: $("#ckRandom").checked });
    $("#btn20").onclick = () => startQuiz({ count: 20, randomOrder: true });
    $("#btn40").onclick = () => startQuiz({ count: 40, randomOrder: true });
  }

  function renderQuestion() {
    const q = state.questions[state.idx];
    const answered = state.answers[state.idx] !== null;
    const chosen = state.answers[state.idx];

    const total = state.questions.length;
    const cur = state.idx + 1;
    progressText.textContent = `进度：第 ${cur} / ${total} 题`;
    bar.style.width = `${Math.round((state.idx / total) * 100)}%`;

    const optsHtml = q.options.map((opt, i) => {
      let cls = "btn";
      if (chosen === i) cls += " selected";
      if (answered) {
        if (i === q.answerIndex) cls += " correct";
        if (chosen === i && chosen !== q.answerIndex) cls += " wrong";
      }
      const letter = ["A","B","C","D"][i] || "";
      return `<button class="${cls}" data-i="${i}"><b>${letter}.</b> ${opt}</button>`;
    }).join("");

    const explainHtml = answered ? `
      <div class="hr"></div>
      <div class="small"><b>原句：</b>${escapeHtml(q.explain)}</div>
    ` : "";

    view.innerHTML = `
      <div class="q">${escapeHtml(q.q)}</div>
      <div class="opts" id="opts">${optsHtml}</div>
      ${explainHtml}
      <div class="actions">
        <button class="btn secondary" id="btnPrev" ${state.idx === 0 ? "disabled" : ""}>上一题</button>
        <button class="btn primary" id="btnNext">${state.idx === total - 1 ? "交卷" : "下一题"}</button>
      </div>
      <div class="small" style="margin-top:10px;">
        当前选择：${chosen === null ? "（未选择）" : (["A","B","C","D"][chosen] + "（" + escapeHtml(q.options[chosen]) + "）")}
      </div>
    `;

    $("#opts").querySelectorAll("button").forEach(btn => {
      btn.onclick = () => {
        const i = Number(btn.dataset.i);
        if (Number.isNaN(i)) return;
        state.answers[state.idx] = i;
        renderQuestion();
      };
    });

    $("#btnPrev").onclick = () => {
      if (state.idx > 0) { state.idx -= 1; renderQuestion(); }
    };
    $("#btnNext").onclick = () => {
      if (state.idx === total - 1) return renderResult();
      state.idx += 1;
      renderQuestion();
    };
  }

  function renderResult() {
    const total = state.questions.length;
    let correct = 0;
    const wrong = [];

    state.questions.forEach((q, i) => {
      const a = state.answers[i];
      const ok = (a === q.answerIndex);
      if (ok) correct++;
      else wrong.push({ q, user: a });
    });

    bar.style.width = "100%";
    progressText.textContent = `完成：${correct} / ${total} 正确`;
    pillMode.textContent = "模式：成绩";

    const wrongHtml = wrong.length === 0 ? `
      <div class="item">
        <h3>🎉 全对！</h3>
        <div class="meta">太强了。可以换随机 40 题再刷一遍巩固。</div>
      </div>
    ` : wrong.map((w, idx) => {
      const userText = (w.user === null) ? "未作答" : `${["A","B","C","D"][w.user]}（${escapeHtml(w.q.options[w.user])}）`;
      const correctText = `${["A","B","C","D"][w.q.answerIndex]}（${escapeHtml(w.q.options[w.q.answerIndex])}）`;
      return `
        <div class="item">
          <h3>错题 ${idx + 1}</h3>
          <div class="small"><b>题目：</b>${escapeHtml(w.q.q)}</div>
          <div class="small"><b>你的答案：</b>${userText}</div>
          <div class="small"><b>正确答案：</b>${correctText}</div>
          <div class="meta"><b>原句：</b>${escapeHtml(w.q.explain)}</div>
        </div>
      `;
    }).join("");

    view.innerHTML = `
      <div class="q">你的得分：<b>${correct}</b> / ${total}</div>
      <div class="small">用时：${msToTime(Date.now() - state.startedAt)}</div>
      <div class="hr"></div>
      <div class="list">${wrongHtml}</div>
      <div class="actions" style="margin-top:14px;">
        <button class="btn secondary" id="btnHome">返回首页</button>
        <button class="btn primary" id="btnRetry">再来一遍（随机）</button>
      </div>
    `;

    $("#btnHome").onclick = () => {
      if (state.timerId) clearInterval(state.timerId);
      state = null;
      renderStart();
    };
    $("#btnRetry").onclick = () => startQuiz({ count: total, randomOrder: true });
  }

  function escapeHtml(str){
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // PWA: register service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
    });
  }

  // bootstrap
  renderStart();
})();
