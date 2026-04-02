const topicsData = {
    artemis: {
        title: "달나라 탐험대 출동 (Artemis II)",
        icon: "🚀",
        desc: "50년 만에 사람들이 달로 떠나는 위대한 모험",
        cards: [
            {
                image: 'assets/artemis_card_1.png',
                text: "50년 만에 사람들이 달로 떠날 준비를 해요! 커다란 우주선이 카운트다운을 시작합니다.",
                vocab: [
                    { word: "ROCKET", meaning: "로켓" },
                    { word: "MOON", meaning: "달" }
                ]
            },
            {
                image: 'assets/artemis_card_2.png',
                text: "우주비행사들은 우주에서 숨을 쉴 수 있도록 단단하고 동그란 헬멧을 써요.",
                vocab: [
                    { word: "ASTRONAUT", meaning: "우주비행사" },
                    { word: "HELMET", meaning: "헬멧" }
                ]
            },
            {
                image: 'assets/artemis_card_3.png',
                text: "쾅! 엄청난 불꽃과 함께 우주선이 하늘 높이 발사되었어요. 야호, 출발!",
                vocab: [
                    { word: "LAUNCH", meaning: "발사" },
                    { word: "FIRE", meaning: "불꽃" }
                ]
            },
            {
                image: 'assets/artemis_card_4.png',
                text: "까만 우주로 올라가니, 멀리 우리가 살고 있는 파란 지구가 아름답게 빛나요.",
                vocab: [
                    { word: "SPACE", meaning: "우주" },
                    { word: "EARTH", meaning: "지구" }
                ]
            },
            {
                image: 'assets/artemis_card_5.png',
                text: "이번 탐험은 넓은 우주의 비밀을 알아내는 위대한 영웅들의 첫걸음이 될 거예요!",
                vocab: [
                    { word: "EXPLORE", meaning: "탐험" },
                    { word: "HERO", meaning: "영웅" }
                ]
            }
        ]
    },
    hormuz: {
        title: "호르무즈 해협",
        icon: "🚢",
        desc: "세계의 중요한 물길을 막으면 어떻게 될까?",
        cards: [
            {
                image: 'assets/card1.png',
                text: "이곳은 호르무즈 해협이에요. 세계의 아주 많은 배들이 지나다니는 좁고 중요한 바닷길이랍니다.",
                vocab: [
                    { word: "STRAIT OF HORMUZ", meaning: "호르무즈 해협" },
                    { word: "SO MUCH OIL TRAVELS HERE!", meaning: "정말 많은 석유가 지나가요!" }
                ]
            },
            {
                image: 'assets/card2.png',
                text: "만약 이 길이 막히면 어떻게 될까요? 배들이 지나가지 못해서 우리가 쓰는 물건들이 아주 비싸질 수 있어요.",
                vocab: [
                    { word: "ROAD CLOSED?", meaning: "길이 막혔나요?" },
                    { word: "GOODS EXPENSIVE!", meaning: "물건들이 비싸져요!" }
                ]
            },
            {
                image: 'assets/card3.png',
                text: "석유가 오지 못하면 자동차나 배가 움직일 수 있는 연료가 부족해져요. 그래서 큰 문제가 생길 수 있답니다.",
                vocab: [
                    { word: "IF THE ROAD IS CLOSED...", meaning: "만약 길이 막힌다면..." },
                    { word: "FUEL EMPTY", meaning: "연료 텅 빔" },
                    { word: "HIGH PRICES!", meaning: "매우 비싼 가격!" }
                ]
            },
            {
                image: 'assets/card4.png',
                text: "그래서 여러 나라 사람들이 모여서 이 중요한 바닷길을 안전하게 지키기 위해 대화하고 노력하고 있어요.",
                vocab: [
                    { word: "WORKING FOR PEACE", meaning: "평화를 위한 노력" }
                ]
            },
            {
                image: 'assets/card5.png',
                text: "모두를 위한 소중한 바닷길! 이 길 덕분에 전 세계 사람들이 에너지를 나누어 쓸 수 있답니다.",
                vocab: [
                    { word: "OUR PRECIOUS PATHWAY", meaning: "우리의 소중한 길" },
                    { word: "OPEN & SAFE ROUTE", meaning: "열려있고 안전한 길" },
                    { word: "OUR ENERGY", meaning: "우리의 에너지" }
                ]
            }
        ]
    },
    inflation: {
        title: "인플레이션",
        icon: "🍦",
        desc: "앗! 내가 좋아하는 아이스크림 값이 올랐어",
        cards: [
            {
                image: 'assets/card6.png',
                text: "앗! 내가 매일 사먹던 1,000원짜리 아이스크림이 갑자기 2,000원이 되었어요!",
                vocab: [
                    { word: "INFLATION", meaning: "인플레이션" }
                ]
            },
            {
                image: 'assets/inflation_2.png',
                text: "인플레이션이라고 부르는 이 마법은, 돈의 가치가 떨어져서 물건 가격이 자꾸자꾸 올라가는 현상이에요.",
                vocab: [
                    { word: "MONEY VALUE DOWN", meaning: "돈의 가치가 떨어짐" }
                ]
            },
            {
                image: 'assets/inflation_3.png',
                text: "가격이 너무 비싸지면 아빠 엄마가 장난감을 사주기 힘들어져서 우리는 슬퍼요.",
                vocab: [
                    { word: "EMPTY WALLET", meaning: "텅 빈 지갑" }
                ]
            },
            {
                image: 'assets/inflation_4.png',
                text: "그래서 은행이나 나라에서는 돈이 너무 많아지지 않게 조절하려고 노력한답니다.",
                vocab: [
                    { word: "CENTRAL BANK", meaning: "중앙 은행" }
                ]
            },
            {
                image: 'assets/inflation_5.png',
                text: "물가가 원래대로 돌아오면, 다시 기분 좋게 아이스크림을 사 먹을 수 있을 거예요!",
                vocab: [
                    { word: "HAPPY ECONOMY", meaning: "행복한 경제" }
                ]
            }
        ]
    },
    climate: {
        title: "기후 변화",
        icon: "🌡️",
        desc: "지구가 땀을 뻘뻘 흘리며 열이 나고 있어요",
        cards: [
            {
                image: 'assets/card7.png',
                text: "지구가 땀을 뻘뻘 흘리며 열이 나고 있어요. 너무 달궈졌거든요!",
                vocab: [
                    { word: "CLIMATE CHANGE", meaning: "기후 변화" }
                ]
            },
            {
                image: 'assets/climate_2.png',
                text: "우리가 자동차를 너무 많이 타고 전기를 펑펑 쓰면 나쁜 연기(온실가스)가 나와서 지구를 덮어버려요.",
                vocab: [
                    { word: "GREENHOUSE GAS", meaning: "온실 가스" }
                ]
            },
            {
                image: 'assets/climate_3.png',
                text: "지구가 더워지면 북극곰 친구의 집인 얼음이 녹아버리고 이상한 날씨가 변덕을 부려요.",
                vocab: [
                    { word: "MELTING ICE", meaning: "녹고 있는 얼음" }
                ]
            },
            {
                image: 'assets/climate_4.png',
                text: "지구의 열을 식히기 위해 쓰레기를 줄이고, 에너지를 아껴 쓰는 습관이 필요해요!",
                vocab: [
                    { word: "RECYCLE", meaning: "재활용" }
                ]
            },
            {
                image: 'assets/climate_5.png',
                text: "우리가 조금씩만 노력하면 지구는 다시 시원하고 건강해질 수 있답니다!",
                vocab: [
                    { word: "COOL PLANET", meaning: "시원한 행성" }
                ]
            }
        ]
    },
    ai: {
        title: "인공지능 (AI)",
        icon: "🤖",
        desc: "우리 일상을 도와주는 똑똑한 컴퓨터 친구",
        cards: [
            {
                image: 'assets/card8.png',
                text: "우와! 컴퓨터가 사람 말을 이해하고 그림도 뚝딱 그려주네요?",
                vocab: [
                    { word: "ARTIFICIAL INTELLIGENCE", meaning: "인공지능" }
                ]
            },
            {
                image: 'assets/ai_2.png',
                text: "인공지능, 즉 AI는 사람의 뇌처럼 생각하고 배울 수 있는 아주 똑똑한 기술을 말해요.",
                vocab: [
                    { word: "COMPUTER BRAIN", meaning: "컴퓨터 두뇌" }
                ]
            },
            {
                image: 'assets/ai_3.png',
                text: "AI는 의사 선생님을 도와 병을 찾기도 하고, 어려운 숙제 방향을 알려주기도 해요.",
                vocab: [
                    { word: "HELPING HUMAN", meaning: "인간을 돕는 일" }
                ]
            },
            {
                image: 'assets/ai_4.png',
                text: "하지만 로봇이 모든 걸 다 잘하는 건 아니에요. 나쁜 곳에 쓰이지 않게 사람이 잘 가르쳐야 해요.",
                vocab: [
                    { word: "TEAMWORK", meaning: "팀워크 (협동)" }
                ]
            },
            {
                image: 'assets/ai_5.png',
                text: "미래에는 AI가 우리들의 아주 멋지고 착한 로봇 친구가 되어 세상이 더 편리해질 거예요!",
                vocab: [
                    { word: "BEST FRIENDS", meaning: "가장 친한 친구들" }
                ]
            }
        ]
    },
    ocean: {
        title: "바다의 먹보 통통이",
        icon: "♻️",
        desc: "바다 동물 구조대 쓰레기 청소 대작전",
        cards: [
            {
                image: 'assets/ocean_card1.png',
                text: "팩맨처럼 입이 큰 청소선 '통통이'가 바다 위를 둥둥 떠다니는 플라스틱 병을 발견해요! 야호, 맛있는 간식이다!",
                vocab: [
                    { word: "OCEAN CLEANUP", meaning: "바다 청소" },
                    { word: "TRASH!", meaning: "찌꺼기!" }
                ]
            },
            {
                image: 'assets/ocean_card2.png',
                text: "플라스틱 병을 냠냠! 쓰레기를 먹을 때마다 배가 부르고 바다가 깨끗해져요.",
                vocab: [
                    { word: "EAT PLASTIC", meaning: "플라스틱 먹기" },
                    { word: "YUMMY", meaning: "맛있다" }
                ]
            },
            {
                image: 'assets/ocean_card3.png',
                text: "쓰레기가 사라진 깨끗한 물 속에서 거북이 친구들이 통통이에게 고맙다고 인사해요!",
                vocab: [
                    { word: "THANK YOU", meaning: "고마워" },
                    { word: "CLEAN WATER", meaning: "깨끗한 물" }
                ]
            },
            {
                image: 'assets/ocean_card4.png',
                text: "쓰레기를 가득 모은 통통이가 재활용 공장으로 돌아가요. 쓰레기들이 멋진 장난감으로 변신한대요!",
                vocab: [
                    { word: "RECYCLING", meaning: "재활용" },
                    { word: "NEW TOY", meaning: "새 장난감" }
                ]
            },
            {
                image: 'assets/ocean_card5.png',
                text: "우리도 집에서 쓰레기를 잘 분리해서 버리면 바다 청소선 통통이를 도울 수 있어요!",
                vocab: [
                    { word: "SAVE EARTH", meaning: "지구 구하기" },
                    { word: "HERO", meaning: "영웅" }
                ]
            }
        ]
    }
};

let activeTopicId = null;
let currentDeck = [];
let currentIndex = 0;
let autoPlayedCards = new Set();
let currentPlayingBtn = null;

const homeMenu = document.getElementById('homeMenu');
const carouselView = document.getElementById('carouselView');
const homeBtn = document.getElementById('homeBtn');
const cardsWrapper = document.getElementById('cardsWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressIndicator = document.getElementById('progressIndicator');

// Initialize Home Menu
function initHomeMenu() {
    homeMenu.innerHTML = '';
    for (const [key, data] of Object.entries(topicsData)) {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-icon">${data.icon}</div>
            <div class="menu-title">${data.title}</div>
            <div class="menu-desc">${data.desc}</div>
        `;
        card.addEventListener('click', () => loadTopic(key));
        homeMenu.appendChild(card);
    }
}

function loadTopic(topicId) {
    activeTopicId = topicId;
    currentDeck = topicsData[topicId].cards;
    currentIndex = 0;

    // Switch View - FIX ALIGNMENT SKEW BUG BY AVOIDING 'flex' ON THE CAROUSEL WRAPPER OR FORCING COLUMN
    homeMenu.style.display = 'none';
    carouselView.style.display = 'flex';
    carouselView.style.flexDirection = 'column';
    carouselView.style.alignItems = 'center';
    carouselView.style.justifyContent = 'center';

    homeBtn.style.display = 'block';

    // Render Deck
    renderCards();

    // Trigger auto-play logic for the first card
    setTimeout(() => updateCards(), 100);
}

homeBtn.addEventListener('click', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    carouselView.style.display = 'none';
    homeBtn.style.display = 'none';
    homeMenu.style.display = 'grid';
});

// ==== iOS TTS / AudioContext Warm-up Trick ====
let ttsUnlocked = false;

function unlockTTS() {
    if (ttsUnlocked) return;
    if ('speechSynthesis' in window) {
        let msg = new SpeechSynthesisUtterance('');
        msg.volume = 0; // completely silent
        msg.rate = 1;
        window.speechSynthesis.speak(msg);
        ttsUnlocked = true;
    }
    document.removeEventListener('click', unlockTTS);
    document.removeEventListener('touchstart', unlockTTS);
}

// Bind unlock sequence to user's first interaction anywhere on the screen
document.addEventListener('click', unlockTTS, { once: true });
document.addEventListener('touchstart', unlockTTS, { once: true });


// ==== Advanced Deep TTS Voice Selector (Async Safe) ====
let availableVoices = [];

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}

if ('speechSynthesis' in window) {
    loadVoices();
    // Watch for dynamic voice loading
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.addEventListener('voiceschanged', loadVoices);
    }
}

function playSound(text, lang, btnElement) {
    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.speaking && currentPlayingBtn === btnElement && btnElement !== null) {
            window.speechSynthesis.cancel();
            if (btnElement) btnElement.classList.remove('playing');
            currentPlayingBtn = null;
            return;
        }

        window.speechSynthesis.cancel();
        document.querySelectorAll('.sound-btn.playing').forEach(btn => btn.classList.remove('playing'));
        currentPlayingBtn = btnElement;

        // 영문의 경우 대문자로만 구성되어 있으면 알파벳을 한 글자씩 끊어 읽는 문제를 방지하기 위해 강제로 소문자 변환
        const speakText = (lang !== 'ko-KR') ? text.toLowerCase() : text;
        const utterance = new SpeechSynthesisUtterance(speakText);
        utterance.lang = lang;
        utterance.rate = (lang === 'ko-KR') ? 0.85 : 0.9;
        utterance.pitch = (lang === 'ko-KR') ? 1.2 : 1.1;

        if (availableVoices.length > 0) {
            // 로컬 OS 및 브라우저에서 '가장 사람에 가까운' 고품질/온라인/신경망 음성을 우선 탐색
            let voiceLangPool = availableVoices.filter(v => v.lang.startsWith(lang.substring(0, 2)));
            let exactLocaleVoices = voiceLangPool.filter(v => v.lang.replace('_', '-').toLowerCase() === lang.toLowerCase());

            const qualityKeywords = ['natural', 'online', 'premium', 'neural', 'google', 'siri'];

            // 1. 해당 지역(ko-KR, en-GB 등)에서 고품질 음성 탐색
            let selectedVoice = exactLocaleVoices.find(v => qualityKeywords.some(k => v.name.toLowerCase().includes(k)));

            // 2. 없다면, 해당 언어(en-US 등) 기반 플랫폼 고품질 음성 탐색 (기계음 방지용 대체)
            if (!selectedVoice) {
                selectedVoice = voiceLangPool.find(v => qualityKeywords.some(k => v.name.toLowerCase().includes(k)));
            }

            // 3. 완전 실패 시 기본 제공 음성
            if (!selectedVoice) {
                selectedVoice = exactLocaleVoices[0] || voiceLangPool[0];
            }

            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
        }

        if (btnElement) {
            utterance.onstart = () => btnElement.classList.add('playing');
            utterance.onend = () => {
                btnElement.classList.remove('playing');
                if (currentPlayingBtn === btnElement) currentPlayingBtn = null;
            };
            utterance.onerror = () => {
                btnElement.classList.remove('playing');
                if (currentPlayingBtn === btnElement) currentPlayingBtn = null;
            };
        }

        window.speechSynthesis.speak(utterance);
    } else {
        alert("이 브라우저에서는 소리 재생을 지원하지 않아요.");
    }
}

window.playSound = playSound;

// ==== Carousel Render Logic ====
function renderCards() {
    cardsWrapper.innerHTML = '';
    progressIndicator.innerHTML = '';

    currentDeck.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = `card ${index === 0 ? 'active' : ''} ${index < currentIndex ? 'prev' : ''}`;
        card.dataset.index = index;

        const vocabHtml = data.vocab.map(v => `
            <li class="vocab-item">
                <div class="vocab-header">
                    <span class="vocab-word">🧩 ${v.word}</span>
                    <button class="sound-btn" onclick="playSound('${v.word.replace(/'/g, "\\'")}', 'en-GB', this)" title="영어 듣기">
                        🔊
                    </button>
                </div>
                <span class="vocab-meaning">${v.meaning || v.단어}</span>
            </li>
        `).join('');

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${data.image}" alt="Slide image" class="card-image">
            </div>
            <div class="card-content">
                <div class="text-wrapper">
                    <div class="main-text">${data.text}</div>
                    <button class="sound-btn" onclick="playSound('${data.text.replace(/'/g, "\\'")}', 'ko-KR', this)" title="한국어 설명 듣기" style="flex-shrink:0;">
                        🔊
                    </button>
                </div>
                <div class="vocab-section">
                    <div class="vocab-title">🔡 그림 속 영어 단어 읽어보기</div>
                    <ul class="vocab-list">
                        ${vocabHtml}
                    </ul>
                </div>
            </div>
        `;

        cardsWrapper.appendChild(card);

        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToCard(index));
        progressIndicator.appendChild(dot);
    });

    updateButtons();
}

function updateCards() {
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        if (currentPlayingBtn) currentPlayingBtn.classList.remove('playing');
        currentPlayingBtn = null;
    }

    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev');
        if (index === currentIndex) {
            card.classList.add('active');

            // Auto-play on card reveal (every time navigating)
            if (ttsUnlocked) {
                const text = currentDeck[index].text;
                // Find matching button to animate
                const btnArgs = card.querySelectorAll('.sound-btn');
                let koBtn = null;
                if (btnArgs.length > 0) koBtn = btnArgs[0]; // first sound btn is the text explanation
                setTimeout(() => playSound(text, 'ko-KR', koBtn), 400); // slight delay for smooth visual transition
            }
        }
        else if (index < currentIndex) card.classList.add('prev');
    });

    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    updateButtons();
}

function updateButtons() {
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    nextBtn.style.opacity = currentIndex === currentDeck.length - 1 ? '0.5' : '1';
    nextBtn.style.cursor = currentIndex === currentDeck.length - 1 ? 'not-allowed' : 'pointer';
}

function goToCard(index) {
    if (index < 0 || index >= currentDeck.length) return;
    currentIndex = index;
    updateCards();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) goToCard(currentIndex - 1);
});

function showCompletionModal() {
    let toast = document.getElementById('completionToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'completionToast';
        document.body.appendChild(toast);
    }
    toast.innerText = "🎉 이야기 끝! 참 잘했어요! 🎉";
    toast.classList.add('show');

    // Play celebratory TTS
    if ('speechSynthesis' in window && ttsUnlocked) {
        playSound("이야기 끝! 참 잘했어요!", 'ko-KR', null);
    }

    setTimeout(() => toast.classList.remove('show'), 3000);
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < currentDeck.length - 1) goToCard(currentIndex + 1);
    else showCompletionModal();
});

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

cardsWrapper.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

cardsWrapper.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -swipeThreshold) {
            if (currentIndex < currentDeck.length - 1) goToCard(currentIndex + 1);
            else showCompletionModal();
        }
        else if (diffX > swipeThreshold) {
            if (currentIndex > 0) goToCard(currentIndex - 1);
        }
    }
}

document.addEventListener('keydown', e => {
    if (carouselView.style.display !== 'none') {
        if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) goToCard(currentIndex - 1);
        }
        if (e.key === 'ArrowRight') {
            if (currentIndex < currentDeck.length - 1) goToCard(currentIndex + 1);
            else showCompletionModal();
        }
    }
});

initHomeMenu();
