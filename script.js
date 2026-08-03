"use strict";

const TAROT_CARDS = [
  {
    name: "愚者", image: "mucha/fool.webp", keywords: "啟程・自由・信任",
    core: "愚者帶來一股剛要展開的生命力。你不需要掌握所有答案才有資格開始；保持好奇與真誠，未知也能成為道路的一部分。",
    reflection: "眼前的選擇更需要你辨認真正想體驗的方向，而不是只追求最安全的答案。你可能已經準備好，只是心裡仍在等待一個百分之百確定的訊號。",
    action: "先做一個可回頭、成本不高的小嘗試，讓真實經驗代替反覆猜測。為自己保留彈性，同時設定一條清楚的安全界線。",
    caution: "開放不等於毫無準備。出發前確認時間、資源與最重要的承諾，便能更自在地迎接新局。"
  },
  {
    name: "女祭司", image: "mucha/high-priestess.webp", keywords: "直覺・靜觀・深層理解",
    core: "女祭司邀請你暫時離開外界的喧嘩，回到尚未被語言說清楚的感受。真正重要的線索可能很安靜，卻會反覆出現在你的身體反應、夢境或第一直覺裡。",
    reflection: "這件事目前仍有資訊沒有浮上檯面。與其逼自己立刻表態，不如觀察哪些說法讓你放鬆、哪些細節讓你遲疑，那些反應正在透露答案。",
    action: "給自己一段不受打擾的時間，把已知事實與內在感受分開寫下。等兩者都清楚後，再決定下一步。",
    caution: "直覺不是恐懼的放大。若情緒很強烈，先安定身心，再聆聽那個平穩、簡潔而持續的聲音。"
  },
  {
    name: "力量", image: "mucha/strength.webp", keywords: "柔韌・勇氣・自我信任",
    core: "力量牌說的不是壓制，而是以溫柔、耐心與穩定承接內在的野性。你真正的優勢，是能在情緒起伏中仍然選擇不傷害自己與他人的回應方式。",
    reflection: "你面對的並不是能力不足，而是需要更相信自己的節奏。越急著證明，越容易耗損；願意穩住自己，反而能讓局面逐漸靠近你。",
    action: "把最困難的任務拆成一個今天能完成的步驟，完成後明確肯定自己。重要對話中，先說需求，再說界線。",
    caution: "不要把忍耐誤認為堅強。若一段關係或情境長期消耗你，溫柔也包含適時離開與尋求支持。"
  },
  {
    name: "吊人", image: "mucha/hanged-man.webp", keywords: "停頓・轉念・放下控制",
    core: "吊人讓時間暫時慢下來，使你有機會從完全不同的角度理解現況。表面上的停滯，可能正在交換一種更深、更自由的視野。",
    reflection: "如果原有做法不斷得到相同結果，問題或許不在努力不足，而在觀看方式需要改變。某個你一直想控制的部分，也許正需要被允許自然發展。",
    action: "暫停一個慣性反應二十四小時，改問：若不急著證明對錯，我還能怎麼理解這件事？把答案寫下，再選擇行動。",
    caution: "有意識的等待不同於無限拖延。替這段停頓設定期限，屆時依最新資訊做出一個明確決定。"
  },
  {
    name: "月亮", image: "mucha/moon.webp", keywords: "感受・未知・辨識投射",
    core: "月亮照亮的是模糊地帶：敏銳感受、未說出口的擔心，以及還沒有足夠證據的想像。此刻不需要否定情緒，但也不必讓情緒代替事實。",
    reflection: "你可能正在同時接收真實線索與過往經驗留下的投射。先分辨『我知道什麼』與『我害怕什麼』，答案會從混雜中慢慢清晰。",
    action: "列出目前已確認的三項事實，再列出仍需查證的三個問題。等待關鍵資訊補齊前，避免做不可逆的決定。",
    caution: "疲憊時容易放大不安。先恢復睡眠與日常節奏；若涉及安全或重大權益，請尋求可信任的專業意見。"
  },
  {
    name: "聖杯一", image: "mucha/ace-cups.webp", keywords: "情感開啟・接納・滋養",
    core: "聖杯一象徵情感重新流動，一份真誠的感受、關係或創作靈感正準備進入你的生命。關鍵不在追逐，而在你是否願意打開容器去承接。",
    reflection: "這個問題的核心可能與『我真正感受到什麼』有關。當你停止把感受分成應該或不應該，新的理解與連結便會有位置出現。",
    action: "用一種具體方式回應內心：說出感謝、接受善意、開始創作，或安排一段能真正恢復能量的時間。",
    caution: "新的情感需要界線才能長久。保持開放，也觀察對方是否以同樣的尊重與穩定回應你。"
  },
  {
    name: "聖杯三", image: "mucha/three-cups.webp", keywords: "支持・分享・共同喜悅",
    core: "聖杯三提醒你，答案不必只靠一個人完成。可信任的朋友、團隊與社群，能在交流中補足你看不到的角度，也讓成果值得被慶祝。",
    reflection: "你可能太習慣獨自消化壓力。這件事需要的不是更多孤軍奮戰，而是一個能讓你放心說真話、接住回饋的支持圈。",
    action: "主動聯絡一位值得信任的人，具體說明你需要傾聽、建議或實際協助。也記得分享近期一件值得肯定的小成果。",
    caution: "群體的熱鬧不等於真正理解。選擇尊重界線、能誠實互動的關係，不必為了融入而忽略自己的感受。"
  },
  {
    name: "錢幣九", image: "mucha/nine-pentacles.webp", keywords: "成果・獨立・穩定價值",
    core: "錢幣九代表長期投入開始形成可享受的成果。你正在建立一種不依賴外界認可的價值感，也有能力為自己創造更穩定、舒適的生活。",
    reflection: "目前最值得關注的不是還缺少多少，而是你已經累積了哪些能力、資源與選擇權。承認成果，會讓下一步更從容。",
    action: "盤點三項已擁有的資源，選一項做長期優化。為時間、金錢或工作品質設定更符合你價值的標準。",
    caution: "獨立不代表拒絕連結。享受自己建立的成果，同時保留與重要的人分享、合作與互相支持的空間。"
  },
  {
    name: "權杖八", image: "mucha/eight-wands.webp", keywords: "推進・訊息・快速變化",
    core: "權杖八帶來迅速移動的能量。等待已久的訊息、進展或連鎖反應可能同時發生，現在適合清楚回應並把握窗口。",
    reflection: "局面可能比你預期更快進入下一階段。你需要的不是重新分析所有可能，而是辨認最重要的方向，讓決策跟上變化。",
    action: "整理待回覆事項，先處理會影響後續流程的關鍵一項。溝通時使用短而明確的句子，確認時間與下一個負責人。",
    caution: "速度快時更要避免資訊落差。送出重要訊息或承諾前，再核對一次對象、內容與期限。"
  }
];

const POSITION_LABELS = ["此刻的能量", "需要看見", "前行指引"];
const question = document.getElementById("question");
const characterCount = document.getElementById("character-count");
const oneButton = document.getElementById("spread-one");
const threeButton = document.getElementById("spread-three");
const drawButton = document.getElementById("draw-button");
const resultArea = document.getElementById("result-area");
let spread = 1;
let drawing = false;
let hasCards = false;
let drawTimer = null;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" }[character];
  });
}

function randomIndex(max) {
  if (window.crypto && window.crypto.getRandomValues) {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return value[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function drawUniqueCards(count) {
  const deck = TAROT_CARDS.slice();
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = randomIndex(index + 1);
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  return deck.slice(0, count);
}

function emptyState() {
  resultArea.classList.remove("has-cards");
  resultArea.setAttribute("aria-busy", "false");
  resultArea.innerHTML = '<div class="empty-state"><div class="deck"><span>✦</span><i>☾</i></div><p>你的牌正在等待</p><small>選擇牌陣，讓直覺帶領你</small></div>';
  hasCards = false;
  drawButton.querySelector("span").textContent = "開始抽牌";
}

function chooseSpread(nextSpread) {
  if (drawTimer) window.clearTimeout(drawTimer);
  drawTimer = null;
  drawing = false;
  spread = nextSpread;
  oneButton.classList.toggle("active", spread === 1);
  threeButton.classList.toggle("active", spread === 3);
  oneButton.setAttribute("aria-pressed", String(spread === 1));
  threeButton.setAttribute("aria-pressed", String(spread === 3));
  drawButton.disabled = false;
  emptyState();
}

function loadingState() {
  resultArea.classList.remove("has-cards");
  resultArea.setAttribute("aria-busy", "true");
  resultArea.innerHTML = '<div class="reading-loader" role="status"><div class="loader-orbit"><span>✦</span><i></i><i></i><i></i></div><p>解牌中</p><small>正在整理牌面象徵、位置與你的提問</small><div class="loader-line"><b></b></div></div>';
  drawButton.disabled = true;
  drawButton.querySelector("span").textContent = "解牌中…";
}

function cardMarkup(card, index, count, askedQuestion) {
  const label = count === 1 ? "你的核心指引" : POSITION_LABELS[index];
  const questionBlock = askedQuestion ? `<blockquote>「${escapeHtml(askedQuestion)}」</blockquote>` : "";
  return `
    <article class="reading-card" style="animation-delay:${index * 130}ms">
      <p class="position-label">${label}</p>
      <div class="drawn-card mucha-drawn-card"><img src="${card.image}" alt="慕夏塔羅－${card.name}" width="700" height="1200" loading="lazy"></div>
      <div class="card-message">
        <div class="card-title-row"><h3>${card.name}</h3><span>正位</span></div>
        <p class="keywords">${card.keywords}</p>
        <section class="interpretation-block"><h4>牌面核心</h4><p>${card.core}</p></section>
        <section class="interpretation-block"><h4>${askedQuestion ? "回應你的提問" : "與此刻的連結"}</h4>${questionBlock}<p>${card.reflection}</p></section>
        <section class="interpretation-block action-block"><h4>可採取的行動</h4><p>${card.action}</p></section>
        <section class="interpretation-block caution-block"><h4>溫柔提醒</h4><p>${card.caution}</p></section>
      </div>
    </article>`;
}

function showCards(cards, askedQuestion) {
  let markup = cards.map((card, index) => cardMarkup(card, index, cards.length, askedQuestion)).join("");
  if (cards.length === 3) {
    markup += `
      <section class="synthesis">
        <p class="eyebrow"><span></span> OVERALL MESSAGE <span></span></p>
        <h3>三張牌的整體訊息</h3>
        <p>牌陣從「${cards[0].name}」呈現的${cards[0].keywords.replaceAll("・", "、")}出發，經過「${cards[1].name}」提醒你看見${cards[1].keywords.replaceAll("・", "、")}，最後由「${cards[2].name}」指向${cards[2].keywords.replaceAll("・", "、")}的行動方向。不必一次解決全部問題，先實踐最後一張牌給出的最小步驟，新的資訊便會隨行動出現。</p>
      </section>`;
  }
  resultArea.classList.add("has-cards");
  resultArea.setAttribute("aria-busy", "false");
  resultArea.innerHTML = `<div class="card-results results-${cards.length}">${markup}</div>`;
  drawing = false;
  hasCards = true;
  drawButton.disabled = false;
  drawButton.querySelector("span").textContent = "重新抽牌";
  drawButton.focus({ preventScroll: true });
}

question.addEventListener("input", function () {
  if (question.value.length > 120) question.value = question.value.slice(0, 120);
  characterCount.textContent = `${question.value.length} / 120`;
});

oneButton.addEventListener("click", function () { chooseSpread(1); });
threeButton.addEventListener("click", function () { chooseSpread(3); });

drawButton.addEventListener("click", function () {
  if (drawing) return;
  drawing = true;
  hasCards = false;
  const cards = drawUniqueCards(spread);
  const askedQuestion = question.value.trim();
  loadingState();
  drawTimer = window.setTimeout(function () {
    showCards(cards, askedQuestion);
    drawTimer = null;
  }, 1800);
});

window.addEventListener("pagehide", function () {
  if (drawTimer) window.clearTimeout(drawTimer);
});
