const cardsData = [
    {
        image: 'assets/card1.png',
        text: "이곳은 호르무즈 해협이에요. 세계의 아주 많은 배들이 지나다니는 좁고 중요한 바닷길이랍니다.",
        vocab: [
            { word: "STRAIT OF HORMUZ", meaning: "호르무즈 해협 (지도 표시)" },
            { word: "SO MUCH OIL TRAVELS HERE!", meaning: "정말 많은 석유가 이곳을 지나가요!" }
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
];

let currentIndex = 0;

const cardsWrapper = document.getElementById('cardsWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressIndicator = document.getElementById('progressIndicator');

// TTS Function Play
function playSound(text, lang) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("이 브라우저에서는 소리 재생을 지원하지 않아요.");
    }
}

// Make playSound accessible globally since we use inline onclick
window.playSound = playSound;

// Initialize cards
function initCards() {
    cardsData.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = `card ${index === 0 ? 'active' : ''} ${index < currentIndex ? 'prev' : ''}`;
        card.dataset.index = index;

        const vocabHtml = data.vocab.map(v => `
            <li class="vocab-item">
                <div class="vocab-header">
                    <span class="vocab-word">🧩 ${v.word}</span>
                    <button class="sound-btn" onclick="playSound('${v.word.replace(/'/g, "\\'")}', 'en-US')" title="영어 듣기">
                        🔊
                    </button>
                </div>
                <span class="vocab-meaning">${v.meaning}</span>
            </li>
        `).join('');

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${data.image}" alt="Slide image" class="card-image">
            </div>
            <div class="card-content">
                <div class="text-wrapper">
                    <div class="main-text">${data.text}</div>
                    <button class="sound-btn" onclick="playSound('${data.text.replace(/'/g, "\\'")}', 'ko-KR')" title="한국어 설명 듣기" style="flex-shrink:0;">
                        🔊
                    </button>
                </div>
                <div class="vocab-section">
                    <div class="vocab-title">🔡 그림 속 영어 뜻 알아보기</div>
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
    
    // Stop speaking when turning page
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
    }
    
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index < currentIndex) {
            card.classList.add('prev');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    updateButtons();
}

function updateButtons() {
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    
    nextBtn.style.opacity = currentIndex === cardsData.length - 1 ? '0.5' : '1';
    nextBtn.style.cursor = currentIndex === cardsData.length - 1 ? 'not-allowed' : 'pointer';
}

function goToCard(index) {
    if (index < 0 || index >= cardsData.length) return;
    currentIndex = index;
    updateCards();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) goToCard(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cardsData.length - 1) goToCard(currentIndex + 1);
});

// Advanced Touch/Swipe Support
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

cardsWrapper.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, {passive: true});

cardsWrapper.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const swipeThreshold = 50; 
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    
    // Check if the gesture is more horizontal than vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < -swipeThreshold) {
            goToCard(currentIndex + 1); // Swipe left
        } else if (diffX > swipeThreshold) {
            goToCard(currentIndex - 1); // Swipe right
        }
    }
}

// Keydown Support
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goToCard(currentIndex - 1);
    if (e.key === 'ArrowRight') goToCard(currentIndex + 1);
});

initCards();
