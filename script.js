const passages = {
  easy: [
    "bugun men yangi sayt yaratishni o'rganyapman bu ish menga juda yoqadi har kuni ozgina mashq qilsam tezroq yozishni o'rganaman kompyuterda ishlash va yangi narsalarni sinab ko'rish juda qiziq",
    "men ertalab turib yuzimni yuvaman keyin nonushta qilaman va darslarimga tayyorlanaman bo'sh vaqtimda kompyuterda ishlayman yangi o'yinlar o'ynayman va do'stlarim bilan suhbatlashaman",
    "internet orqali ko'p foydali ma'lumotlarni topish mumkin men yangi bilimlarni o'rganishni yaxshi ko'raman har kuni yangi so'zlarni bilib olaman va ularni amalda ishlatishga harakat qilaman",
    "dasturlashni o'rganish boshida qiyin tuyulishi mumkin lekin muntazam mashq qilish orqali ko'p narsani tushunib olish mumkin kichik loyihalar yaratish tajriba orttirishga yordam beradi",
    "mening sevimli mashg'ulotlarim kompyuterda ishlash musiqa tinglash va yangi g'oyalar o'ylab topish har bir yangi loyiha menga boshqa narsalarni o'rganish imkonini beradi",
    "har kuni ozgina kitob o'qish foydali odat hisoblanadi kitoblar yangi fikrlar beradi so'z boyligini oshiradi va turli mavzularni yaxshiroq tushunishga yordam beradi",
    "do'stlar bilan birgalikda ishlash juda maroqli har kim o'z fikrini aytadi va boshqalarning fikrini tinglaydi shunday qilib yangi g'oyalar topish va muammolarni hal qilish mumkin",
    "yangi bilimlarni o'rganish uchun ko'p vaqt kerak bo'lishi shart emas har kuni ozgina harakat qilish va o'rgangan narsalarni takrorlash yaxshi natija beradi",
    "men kelajakda foydali dasturlar yaratishni xohlayman odamlar foydalanadigan saytlar va ilovalar yaratish uchun dasturlashni o'rganaman va ko'proq amaliyot qilaman",
    "tabiatni asrash har bir insonning vazifasidir daraxt ekish suvni tejash va atrofni toza saqlash orqali biz yashaydigan joyni yanada chiroyli qilishimiz mumkin"
  ],

  medium: [
    "Dasturlashni o'rganish uchun sabr, mantiqiy fikrlash va muntazam amaliyot kerak. Har bir kichik loyiha yangi tajriba beradi va murakkab muammolarni tushunishga yordam beradi.",
    "Zamonaviy texnologiyalar kundalik hayotimizning muhim qismiga aylandi. Internet orqali bilim olish, masofadan ishlash va turli xizmatlardan foydalanish ancha osonlashdi.",
    "Yangi veb-sayt yaratishda avval uning maqsadini aniqlash kerak. Keyin sahifa tuzilishi, dizayn, foydalanuvchi imkoniyatlari va dastur qanday ishlashi rejalashtiriladi.",
    "Muvaffaqiyatga erishish uchun aniq maqsad qo'yish, vaqtni to'g'ri taqsimlash va boshlangan ishni oxirigacha yetkazish muhim. Har bir kichik qadam katta natijaga olib kelishi mumkin.",
    "Internet xavfsizligiga e'tibor berish zarur. Kuchli parol ishlatish, shubhali havolalarni ochmaslik va shaxsiy ma'lumotlarni begonalarga bermaslik hisoblarni himoya qilishga yordam beradi.",
    "Jamoa bilan ishlash fikr almashish, muammolarni tezroq hal qilish va yaxshiroq natijalarga erishishga yordam beradi. Har bir ishtirokchining tajribasi loyiha rivojiga hissa qo'shadi.",
    "Veb-dasturlashda HTML sahifa tuzilishini yaratadi, CSS uning ko'rinishini belgilaydi, JavaScript esa foydalanuvchi harakatlariga javob beradigan imkoniyatlarni qo'shadi.",
    "Yaxshi dastur foydalanuvchiga tushunarli, tezkor va qulay bo'lishi kerak. Interfeysni sinab ko'rish va foydalanuvchilarning fikrlarini tinglash sifatni yaxshilaydi.",
    "Ma'lumotlarni tartibli saqlash va kerakli paytda tez topish ko'plab dasturlar uchun muhimdir. To'g'ri rejalashtirilgan ma'lumotlar bazasi tizimning ishonchli ishlashiga yordam beradi.",
    "Yangi til o'rganishda har kuni mashq qilish, yangi so'zlarni takrorlash va ularni gaplarda ishlatish foydali. Xatolarni tahlil qilish esa bilimlarni mustahkamlaydi."
  ],

  hard: [
    '"GitHub" - dasturchilar kodlarini saqlash, loyihalarni boshqarish va jamoa bilan hamkorlik qilish uchun foydalanadigan platforma.',

    '"JavaScript" - veb-sahifalarga interaktiv imkoniyatlar qo\'shadigan dasturlash tili.',

    '"Python" - veb-dasturlash, ma\'lumotlarni tahlil qilish va sun\'iy intellekt loyihalarida ishlatiladigan dasturlash tili.',

    '"HTML" - veb-sahifaning asosiy tuzilishini belgilaydigan belgilash tili.',

    '"CSS" - veb-sahifaning ranglari, o\'lchamlari va joylashuvini boshqaradigan uslublar tili.',

    '"Git" - fayllardagi o\'zgarishlarni kuzatish va loyihaning oldingi holatlarini saqlash imkonini beradigan versiyalarni boshqarish tizimi.',

    '"API" - dasturlar o\'rtasida ma\'lumot almashish imkonini beradigan interfeys.',

    '"PostgreSQL" - ma\'lumotlarni jadvallarda saqlash va boshqarish uchun ishlatiladigan ma\'lumotlar bazasi tizimi.',

    '"Frontend" - foydalanuvchi bevosita ko\'radigan va ishlatadigan dasturiy qism.',

    '"Backend" - serverdagi mantiq, ma\'lumotlarni qayta ishlash va ma\'lumotlar bazasi bilan aloqani boshqaradigan dasturiy qism.',

    '"Firebase" - foydalanuvchilarni ro\'yxatdan o\'tkazish va ma\'lumotlarni saqlash kabi xizmatlarni taqdim etadigan bulutli platforma.',

    '"React" - foydalanuvchi interfeyslarini yaratish uchun ishlatiladigan JavaScript kutubxonasi.',

    '"Node.js" - JavaScript kodini brauzerdan tashqarida, jumladan serverda bajarish imkonini beradigan muhit.',

    '"SQL" - relyatsion ma\'lumotlar bazalaridagi ma\'lumotlar bilan ishlash uchun ishlatiladigan so\'rovlar tili.',

    '"JSON" - ma\'lumotlarni kalit va qiymat ko\'rinishida ifodalash uchun ishlatiladigan matn formati.',

    '"TypeScript" - ma\'lumotlar turlarini belgilash imkonini beradigan va JavaScript asosida yaratilgan dasturlash tili.'
  ]
};

const difficultySelect = document.getElementById("difficulty");

const durationSelect = document.getElementById("duration");
const restartBtn = document.getElementById("restartBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const textDisplay = document.getElementById("textDisplay");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const errorsDisplay = document.getElementById("errors");
const progressBar = document.getElementById("progressBar");
const statusDisplay = document.getElementById("status");
const resultSection = document.getElementById("result");

const finalWpm = document.getElementById("finalWpm");
const finalAccuracy = document.getElementById("finalAccuracy");
const finalErrors = document.getElementById("finalErrors");

let targetText = "";
let typedText = "";
let timeLeft = 30;
let totalDuration = 30;
let startTime = null;
let timerInterval = null;
let testStarted = false;
let testFinished = false;
let correctedErrors = 0;
let errorPositions = new Set();
let correctedPositions = new Set();

function choosePassage() {
  const difficulty = difficultySelect.value;
  const list = passages[difficulty];

  return list[Math.floor(Math.random() * list.length)];
}


function renderText(animatedIndex = -1) {
  textDisplay.replaceChildren();

  for (let i = 0; i < targetText.length; i++) {
    const span = document.createElement("span");
    span.textContent = targetText[i];

    if (i < typedText.length) {
      const isCorrect = typedText[i] === targetText[i];

      span.classList.add(isCorrect ? "correct" : "incorrect");

      // Faqat hozir yozilgan harfni animatsiya qilamiz
      if (i === animatedIndex) {
        span.classList.add(isCorrect ? "pop" : "shake");
      }
    } else if (i === typedText.length) {
      span.classList.add("current");
    }

    textDisplay.appendChild(span);
  }

  const current = textDisplay.querySelector(".current");

  if (current) {
    current.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }
}


function calculateStats() {
  let correct = 0;
  let remainingErrors = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === targetText[i]) {
      correct++;
    } else {
      remainingErrors++;

      // Har bir xato belgining pozitsiyasini eslab qolamiz
      errorPositions.add(i);
    }
  }

  // Oldin xato yozilgan belgi endi to‘g‘ri yozilgan bo‘lsa,
  // uni faqat bir marta tuzatilgan xato sifatida hisoblaymiz.
  for (const position of errorPositions) {
    if (
      position < typedText.length &&
      typedText[position] === targetText[position] &&
      !correctedPositions.has(position)
    ) {
      correctedErrors++;
      correctedPositions.add(position);
    }
  }

  const elapsedSeconds = startTime
    ? Math.max(1, (Date.now() - startTime) / 1000)
    : 0;

  const wpm = elapsedSeconds > 0
    ? Math.round((correct / 5) / (elapsedSeconds / 60))
    : 0;

  const accuracy = typedText.length > 0
    ? Math.round((correct / typedText.length) * 100)
    : 100;

  wpmDisplay.textContent = wpm;
  accuracyDisplay.textContent = `${accuracy}%`;

  errorsDisplay.textContent =
    `${correct} / ${correctedErrors} / ${remainingErrors}`;

  return {
    wpm,
    accuracy,
    errors: remainingErrors,
    correct,
    correctedErrors
  };
}

function startTest() {
  if (testStarted || testFinished) return;

  testStarted = true;
  startTime = Date.now();
  statusDisplay.textContent = "Test davom etmoqda";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    const elapsed = totalDuration - timeLeft;
    progressBar.style.width = `${(elapsed / totalDuration) * 100}%`;

    calculateStats();

    if (timeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

function finishTest() {
  if (testFinished) return;

  testFinished = true;
  clearInterval(timerInterval);

  statusDisplay.textContent = "Test yakunlandi";
  textDisplay.setAttribute("aria-label", "Test yakunlandi");

  const stats = calculateStats();

  finalWpm.textContent = stats.wpm;
  finalAccuracy.textContent = `${stats.accuracy}%`;
  finalErrors.textContent =
  `${stats.correct} / ${stats.correctedErrors} / ${stats.errors}`;
  

  resultSection.classList.remove("hidden");
}

function resetTest() {
  clearInterval(timerInterval);

  totalDuration = Number(durationSelect.value);
  timeLeft = totalDuration;
  targetText = choosePassage();
  typedText = "";
  typedText = "";
  correctedErrors = 0;
  errorPositions = new Set();
  correctedPositions = new Set();
  startTime = null;
  testStarted = false;
  testFinished = false;

  timerDisplay.textContent = timeLeft;
  wpmDisplay.textContent = "0";
  accuracyDisplay.textContent = "100%";
  errorsDisplay.textContent = "0";
  progressBar.style.width = "0%";
  statusDisplay.textContent = "Boshlash uchun yozing";

  resultSection.classList.add("hidden");

  renderText();
  textDisplay.focus();
}

textDisplay.addEventListener("keydown", (event) => {
  if (testFinished) {
    event.preventDefault();
    return;
  }

  if (
    event.ctrlKey ||
    event.metaKey ||
    event.altKey ||
    event.key === "Tab"
  ) {
    if (event.key === "Tab") event.preventDefault();
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    if (typedText.length > 0) {
      typedText = typedText.slice(0, -1);
      renderText();
      calculateStats();
    }
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    return;
  }

  if (event.key.length !== 1) return;

  event.preventDefault();

  if (typedText.length >= targetText.length) return;

  startTest();

  typedText += event.key;

  renderText(typedText.length - 1);
  calculateStats();

  if (typedText.length >= targetText.length) {
    finishTest();
  }
});

textDisplay.addEventListener("paste", (event) => {
  event.preventDefault();
});

textDisplay.addEventListener("click", () => {
  textDisplay.focus();
});

restartBtn.addEventListener("click", resetTest);
tryAgainBtn.addEventListener("click", resetTest);

durationSelect.addEventListener("change", resetTest);
difficultySelect.addEventListener("change", resetTest);

resetTest();
