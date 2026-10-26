
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
    "tabiatni asrash har bir insonning vazifasidir daraxt ekish suvni tejash va atrofni toza saqlash orqali biz yashaydigan joyni yanada chiroyli qilishimiz mumkin",
    "kompyuterda kod yozish juda qiziqarli mashg'ulot hisoblanadi har kuni yangi buyruqlarni o'rganib kichik dasturlar tuzaman",
    "sayt yaratish uchun html va css tillarini bilish muhim ularni o'rganish boshida oson va tushunarli bo'ladi",
    "dasturlashda xatolar chiqishi tabiiy hol ularni topib to'g'rilash orqali tajriba orttiramiz va tezroq o'rganamiz",
    "telefon uchun ilovalar va qiziqarli o'yinlar yaratish ko'pchilikning orzusi hisoblanadi buning uchun sabr va kuchli xohish kerak",
    "har bir dasturchi o'z ishini yaxshi bajarishi uchun doimiy ravishda o'qib izlanishi va yangi texnologiyalarni sinab ko'rishi lozim",
    "klaviaturada tez va xatosiz yozish uchun har kuni maxsus matnlar bilan shug'ullanish juda katta yordam beradi",
    "dastur kodlarini yozish jarayonida mantiqiy fikrlash va har bir mayda detalga e'tibor qaratish talab etiladi",
    "internet tarmog'idan foydalanib dunyoning istalgan nuqtasidagi dasturchilar bilan tajriba almashish va birga ishlash mumkin",
    "shaxsiy kompyuter xotirasini tartibda saqlash va keraksiz fayllarni tozalab turish uning tez ishlashini ta'minlaydi",
    "har bir yangi yaratilgan veb-sahifa yoki kichik dastur bizga kelajakdagi katta loyihalar uchun poydevor bo'lib xizmat qiladi"
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
    "Yangi til o'rganishda har kuni mashq qilish, yangi so'zlarni takrorlash va ularni gaplarda ishlatish foydali. Xatolarni tahlil qilish esa bilimlarni mustahkamlaydi.",
    "Veb-ilovalar yaratishda frontend va backend qismlari birgalikda ishlaydi. Frontend foydalanuvchi ko'radigan interfeysni, backend esa server va ma'lumotlar bazasini boshqaradi.",
    "Ma'lumotlar bazasi bilan ishlashda SQL so'rovlaridan foydalaniladi. Jadvallar orasidagi bog'liqlikni to'g'ri tuzish dasturning xavfsiz va tez ishlashini ta'minlaydi.",
    "Git va GitHub yordamida dasturchilar o'z kodlarini xavfsiz saqlashadi va boshqa jamoa a'zolari bilan birgalikda yagona loyiha ustida ishlash imkoniyatiga ega bo'ladilar.",
    "Python tili sodda sintaksisi va keng imkoniyatlari tufayli boshlanuvchilar uchun eng qulay tillardan biri sanaladi. U sun'iy intellekt va avtomatlashtirishda ko'p ishlatiladi.",
    "O'yin yaratish jarayoni mantiqiy fikrlash, ob'ektlar harakati va foydalanuvchi interfeysini loyihalashni o'z ichiga oladi. Har bir qism o'ziga xos qiyinchilik va zavq beradi.",
    "Asinxron dasturlash vaqti-vaqti bilan javob kutish talab qilinadigan jarayonlarda serverning qotib qolmasdan boshqa vazifalarni bajarishiga imkon beradi.",
    "Foydalanuvchi interfeysi (UI) dizayni qanchalik tushunarli va qulay bo'lsa, ilovaning ommalashish ehtimoli shunchalik yuqori bo'ladi.",
    "API texnologiyasi turli xil dasturlar va ilovalar bir-biri bilan ma'lumot almashishi hamda o'zaro bog'lanib ishlashi uchun ko'prik vazifasini o'taydi.",
    "Dasturkodini optimallashtirish uning xotiradan kamroq joy egallashi va tezroq bajarilishini ta'minlash uchun amalga oshiriladigan muhim bosqichdir.",
    "Kiberxavfsizlik qoidalariga rioya qilish, ma'lumotlarni shifrlash va kuchli parollardan foydalanish har qanday loyiha uchun ustuvor vazifa hisoblanadi."
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
    '"TypeScript" - ma\'lumotlar turlarini belgilash imkonini beradigan va JavaScript asosida yaratilgan dasturlash tili.',
    '"Socket.io" - real vaqt rejimida server va mijoz o\'rtasida ikki tomonlama aloqa o\'rnatish uchun ishlatiladigan JavaScript kutubxonasi.',
    '"Express.js" - Node.js uchun mo\'ljallangan tezkor va qulay veb-ilovalar yaratish freymvorki.',
    '"PostgreSQL" - murakkab va katta hajmli ma\'lumotlar bilan ishlaydigan kuchli obyekt-releatsion ma\'lumotlar bazasi tizimi.',
    '"Tailwind CSS" - tayyor klasslar yordamida tezkor va zamonaviy dizayn yaratishga imkon beruvchi uslublar kutubxonasi.',
    '"Docker" - ilovalarni izolyatsiya qilingan muhitda ishga tushirish va ularni istalgan joyga oson ko\'chirish uchun konteynerlashtirish platformasi.',
    '"Redux" - React ilovalarida global holatni (state) boshqarish va tartibga solish uchun ishlatiladigan kutubxona.',
    '"Linux" - dasturlash, serverlarni boshqarish va xavfsizlikni ta\'minlash uchun eng ko\'p ishlatiladigan operatsion tizim yadro oilasi.',
    '"Algorithm" - berilgan muammoni qadam-baqadam hal qilish uchun tuzilgan aniq ko\'rsatmalar ketma-ketligi.',
    '"Asynchronous" - bir nechta jarayonlarni bir vaqtning o\'zida, bir-birini kutmagan holda bajarish imkonini beruvchi dasturlash yondashuvi.',
    '"Authentication" - foydalanuvchining shaxsini tasdiqlash va uning tizimga kirish huquqiga ega ekanligini tekshirish jarayoni.',
    '"WebSockets" - brauzer va server o\'rtasida doimiy ochiq bo\'ladigan va ma\'lumotlarni darhol uzatuvchi aloqa protokoli.',
    '"Component" - qayta foydalanish mumkin bo\'lgan, alohida vazifani bajaruvchi interfeys yoki kod bo\'lagi.',
    '"Repository" - dastur kodlari, fayllar va ularning o\'zgarish tarixi saqlanadigan markaziy ombor yoki loyiha papkasi.',
    '"Middleware" - so\'rov va javob jarayonlari orasida ishlaydigan, ma\'lumotlarni tekshiruvchi yoki o\'zgartiruvchi dasturiy qatlam.',
    '"Debugging" - dastur kodidagi xatolar, nosozliklar va kutilmagan to\'qnashuvlarni topib bartaraf etish jarayoni.'
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

const virtualKeyboard = document.getElementById("virtualKeyboard");

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

let pressedKeyTimeout = null;

/* Ekran klaviaturasining qatorlari */
const keyboardRows = [
  [
    { label: "`", key: "`", shift: "~" },
    { label: "1", key: "1", shift: "!" },
    { label: "2", key: "2", shift: "@" },
    { label: "3", key: "3", shift: "#" },
    { label: "4", key: "4", shift: "$" },
    { label: "5", key: "5", shift: "%" },
    { label: "6", key: "6", shift: "^" },
    { label: "7", key: "7", shift: "&" },
    { label: "8", key: "8", shift: "*" },
    { label: "9", key: "9", shift: "(" },
    { label: "0", key: "0", shift: ")" },
    { label: "-", key: "-", shift: "_" },
    { label: "=", key: "=", shift: "+" },
    { label: "⌫", key: "Backspace", wide: true }
  ],
  [
    { label: "Tab", key: "Tab", wide: true },
    ...[..."qwertyuiop"].map(key => ({
      label: key.toUpperCase(),
      key,
      shift: key.toUpperCase()
    })),
    { label: "{", key: "[", shift: "{" },
    { label: "}", key: "]", shift: "}" },
    { label: "|", key: "\\", shift: "|", wide: true }
  ],
  [
    { label: "Caps Lock", key: "CapsLock", wide: true },
    ...[..."asdfghjkl"].map(key => ({
      label: key.toUpperCase(),
      key,
      shift: key.toUpperCase()
    })),
    { label: ";", key: ";", shift: ":" },
    { label: "'", key: "'", shift: '"' },
    { label: "Enter", key: "Enter", wide: true }
  ],
  [
    { label: "Shift", key: "Shift", extraWide: true },
    ...[..."zxcvbnm"].map(key => ({
      label: key.toUpperCase(),
      key,
      shift: key.toUpperCase()
    })),
    { label: "<", key: ",", shift: "<" },
    { label: ">", key: ".", shift: ">" },
    { label: "?", key: "/", shift: "?" },
    { label: "Shift", key: "Shift", extraWide: true }
  ],
  [
    { label: "Ctrl", key: "Control", wide: true },
    { label: "Alt", key: "Alt", wide: true },
    { label: "SPACE", key: " ", space: true },
    { label: "Ctrl", key: "Control", wide: true },
    { label: "Alt", key: "Alt", wide: true }
  ]
];

function choosePassage() {
  const list = passages[difficultySelect.value];
  return list[Math.floor(Math.random() * list.length)];
}

/* Klaviaturani ekranga chiqarish */
function renderKeyboard() {
  virtualKeyboard.replaceChildren();

  keyboardRows.forEach(rowKeys => {
    const row = document.createElement("div");
    row.className = "keyboard-row";

    rowKeys.forEach(item => {
      const keyElement = document.createElement("div");

      keyElement.className = "key";
      keyElement.textContent = item.label;
      keyElement.dataset.key = item.key;

      if (item.shift) {
        keyElement.dataset.shift = item.shift;
      }

      if (item.wide) {
        keyElement.classList.add("wide");
      }

      if (item.extraWide) {
        keyElement.classList.add("extra-wide");
      }

      if (item.space) {
        keyElement.classList.add("space");
      }

      row.appendChild(keyElement);
    });

    virtualKeyboard.appendChild(row);
  });
}

/* Kerakli belgiga mos klavishni topish */
function findKeyboardKey(character) {
  const keys = [...virtualKeyboard.querySelectorAll(".key")];

  return keys.find(key => key.dataset.shift === character) ||
    keys.find(key => key.dataset.key === character.toLowerCase());
}

/* Shift kerakligini tekshirish */
function characterNeedsShift(character, keyElement) {
  if (!keyElement) return false;

  return (
    character !== character.toLowerCase() ||
    keyElement.dataset.shift === character
  );
}

/* Klaviatura ranglarini yangilash */

function updateKeyboard(pressedKey = null, isCorrect = null) {
  const keys = [...virtualKeyboard.querySelectorAll(".key")];

  keys.forEach(key => {
    key.classList.remove(
      "next-key",
      "shift-required",
      "pressed-correct",
      "pressed-wrong"
    );
  });

  // Keyingi yozilishi kerak bo'lgan belgi
  const nextCharacter = targetText[typedText.length];

  if (nextCharacter !== undefined) {
    const targetKey = findKeyboardKey(nextCharacter);

    if (targetKey) {
      targetKey.classList.add("next-key");

      // Katta harf yoki Shift bilan yoziladigan belgi
      const needsShift =
        nextCharacter !== nextCharacter.toLowerCase() ||
        targetKey.dataset.shift === nextCharacter;

      if (needsShift) {
        virtualKeyboard
          .querySelectorAll('[data-key="Shift"]')
          .forEach(shiftKey => {
            shiftKey.classList.add("shift-required");
          });
      }
    }
  }

  // Bosilgan tugmani qisqa muddat yoritish
  if (pressedKey !== null) {
    const pressedElement = keys.find(key => {
      if (pressedKey === " ") {
        return key.dataset.key === " ";
      }

      return key.dataset.key.toLowerCase() === pressedKey.toLowerCase();
    });

    if (pressedElement) {
      pressedElement.classList.add(
        isCorrect ? "pressed-correct" : "pressed-wrong"
      );
    }

    // Katta harf yozilganda Shift ham yoritiladi
    if (pressedKey !== pressedKey.toLowerCase()) {
      virtualKeyboard
        .querySelectorAll('[data-key="Shift"]')
        .forEach(shiftKey => {
          shiftKey.classList.add(
            isCorrect ? "pressed-correct" : "pressed-wrong"
          );
        });
    }
  }

  if (pressedKeyTimeout) {
    clearTimeout(pressedKeyTimeout);
  }

  if (pressedKey !== null) {
    pressedKeyTimeout = setTimeout(() => {
      updateKeyboard();
    }, 180);
  }
}


/* Matnni belgilar bo‘yicha chiqarish */
function renderText(animatedIndex = -1) {
  textDisplay.replaceChildren();

  for (let i = 0; i < targetText.length; i++) {
    const span = document.createElement("span");
    span.textContent = targetText[i];

    if (i < typedText.length) {
      const isCorrect = typedText[i] === targetText[i];

      span.classList.add(isCorrect ? "correct" : "incorrect");

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

/* Statistika hisoblash */
function calculateStats() {
  let correct = 0;
  let remainingErrors = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === targetText[i]) {
      correct++;
    } else {
      remainingErrors++;
      errorPositions.add(i);
    }
  }

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

/* Testni boshlash */
function startTest() {
  if (testStarted || testFinished) return;

  testStarted = true;
  startTime = Date.now();
  statusDisplay.textContent = "Test davom etmoqda";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    const elapsed = totalDuration - timeLeft;

    progressBar.style.width =
      `${(elapsed / totalDuration) * 100}%`;

    calculateStats();

    if (timeLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

/* Testni yakunlash */
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
  updateKeyboard();
}

/* Testni qayta boshlash */
function resetTest() {
  clearInterval(timerInterval);

  if (pressedKeyTimeout) {
    clearTimeout(pressedKeyTimeout);
    pressedKeyTimeout = null;
  }

  totalDuration = Number(durationSelect.value);
  timeLeft = totalDuration;
  targetText = choosePassage();
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
  errorsDisplay.textContent = "0 / 0 / 0";

  progressBar.style.width = "0%";
  statusDisplay.textContent = "Boshlash uchun yozing";

  textDisplay.setAttribute(
    "aria-label",
    "Matnni shu yerga yozing"
  );

  resultSection.classList.add("hidden");

  renderText();
  updateKeyboard();

  textDisplay.focus();
}

/* Klaviaturada yozish */
textDisplay.addEventListener("keydown", event => {
  if (testFinished) {
    event.preventDefault();
    return;
  }

  if (event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();

    if (typedText.length > 0) {
      typedText = typedText.slice(0, -1);

      renderText();
      calculateStats();
      updateKeyboard();
    }

    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    return;
  }

  if (event.key.length !== 1) {
    return;
  }

  event.preventDefault();

  if (typedText.length >= targetText.length) {
    return;
  }

  startTest();

  const expectedChar = targetText[typedText.length];
  const isCorrect = event.key === expectedChar;

  typedText += event.key;

  renderText(typedText.length - 1);
  calculateStats();
  updateKeyboard(event.key, isCorrect);

  if (typedText.length >= targetText.length) {
    finishTest();
  }
});

/* Matnni joylash orqali kiritishni o‘chirish */
textDisplay.addEventListener("paste", event => {
  event.preventDefault();
});

/* Matn ustiga bosilganda fokus berish */
textDisplay.addEventListener("click", () => {
  textDisplay.focus();
});

/* Tugmalar */
restartBtn.addEventListener("click", resetTest);
tryAgainBtn.addEventListener("click", resetTest);

durationSelect.addEventListener("change", resetTest);
difficultySelect.addEventListener("change", resetTest);

/* Dastlabki ishga tushirish */
renderKeyboard();
resetTest();
