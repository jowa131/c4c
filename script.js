const topicsData = {
    artemis: {
        title: "달나라 탐험대 출동 (Artemis II)",
        icon: "🚀",
        desc: "50년 만에 사람들이 달로 떠나는 위대한 모험",
        cards: [
            {
                image: 'assets/artemis_card_1.png',
                text: "우와! 우리 사람들이 정말 오랜만에 다시 달나라로 갈 준비를 한대요. 커다란 우주선이 '쓰리, 투, 원... 발사!'를 기다리고 있어요.",
                vocab: [
                    { word: "ROCKET", meaning: "로켓" },
                    { word: "MOON", meaning: "달" }
                ]
            },
            {
                image: 'assets/artemis_card_2.png',
                text: "우주에서는, 우리가 평소처럼 편하게 숨을 쉬기가 무척 힘들어요. 그래서 우주비행사들은 단단하고 동그란 헬멧을 꼭! 쓴답니다.",
                vocab: [
                    { word: "ASTRONAUT", meaning: "우주비행사" },
                    { word: "HELMET", meaning: "헬멧" }
                ]
            },
            {
                image: 'assets/artemis_card_3.png',
                text: "쾅! 엄청난 불꽃과 함께, 드디어 우주선이 하늘 높이 솟아올랐어요. 야호! 은하수를 향해, 모두 함께 힘차게 출발!",
                vocab: [
                    { word: "LAUNCH", meaning: "발사" },
                    { word: "FIRE", meaning: "불꽃" }
                ]
            },
            {
                image: 'assets/artemis_card_4.png',
                text: "깜깜한 우주로 아주 높이 올라가서, 아래를 한 번 내려다볼까요? 우와, 저 멀리서 우리가 살고 있는 둥글고 파란 지구가 반짝반짝 빛나고 있어요.",
                vocab: [
                    { word: "SPACE", meaning: "우주" },
                    { word: "EARTH", meaning: "지구" }
                ]
            },
            {
                image: 'assets/artemis_card_5.png',
                text: "이번 탐험을 통해, 영화 속 영웅 같은 우주비행사들이 넓고 넓은 우주의 더 큰 비밀들을 풀고 돌아올 거예요! 과연 어떤 그림이 숨어있을까요?",
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
                text: "친구들, 이곳은 '호르무즈 해협'이에요. 매일매일 전 세계의 아주 커다란 배들이 으쌰으쌰 돌아다니는, 아주 좁고도 소중한 바닷길이랍니다.",
                vocab: [
                    { word: "STRAIT OF HORMUZ", meaning: "호르무즈 해협" },
                    { word: "SO MUCH OIL TRAVELS HERE!", meaning: "정말 많은 석유가 지나가요!" }
                ]
            },
            {
                image: 'assets/card2.png',
                text: "만약에 이렇게 좁은 길이 꽉! 막혀버리면 어떻게 될까요? 배들이 꼼짝할 수 없어서, 우리가 좋아하는 물건들이 아주아주 비싸질 수도 있어요.",
                vocab: [
                    { word: "ROAD CLOSED?", meaning: "길이 막혔나요?" },
                    { word: "GOODS EXPENSIVE!", meaning: "물건들이 비싸져요!" }
                ]
            },
            {
                image: 'assets/card3.png',
                text: "특히, 자동차나 굴착기가 씽씽 달리려면 '기름'이 꼭 필요한데요. 기름을 잔뜩 실은 배가 제때 오지 못하면 큰일이 나겠죠?",
                vocab: [
                    { word: "IF THE ROAD IS CLOSED...", meaning: "만약 길이 막힌다면..." },
                    { word: "FUEL EMPTY", meaning: "연료 텅 빔" },
                    { word: "HIGH PRICES!", meaning: "매우 비싼 가격!" }
                ]
            },
            {
                image: 'assets/card4.png',
                text: "그래서 지구촌 곳곳에 사는 어른들은 이 바닷길을 늘 안전하게 지키기 위해서로 다정하게 이야기를 나누고 힘을 합치고 있어요.",
                vocab: [
                    { word: "WORKING FOR PEACE", meaning: "평화를 위한 노력" }
                ]
            },
            {
                image: 'assets/card5.png',
                text: "모두를 위해 찰랑찰랑 열려있는 다정한 바닷길! 이 길 덕분에, 전 세계 친구들이 필요한 에너지를 따뜻하게 나누어 쓴답니다.",
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
                text: "앗! 내가 매일매일 사 먹던 천 원짜리 아이스크림이, 어느 날 갑자기 이천 원이 되어버렸어요! 도대체 무슨 일일까요?",
                vocab: [
                    { word: "INFLATION", meaning: "인플레이션" }
                ]
            },
            {
                image: 'assets/inflation_2.png',
                text: "'인플레이션'이라고 부르는 이 나쁜 마법은요, 우리가 가진 동전과 지폐의 힘이 쏙 빠져서, 물건 가격이 자꾸자꾸 위로 올라가는 신기한 현상이에요.",
                vocab: [
                    { word: "MONEY VALUE DOWN", meaning: "돈의 가치가 떨어짐" }
                ]
            },
            {
                image: 'assets/inflation_3.png',
                text: "모든 장난감 가격이 다 너무너무 비싸지면 어떡하죠? 엄마 아빠 지갑이 가벼워져서 눈물이 찔끔 날 수 있어요.",
                vocab: [
                    { word: "EMPTY WALLET", meaning: "텅 빈 지갑" }
                ]
            },
            {
                image: 'assets/inflation_4.png',
                text: "그래서 다행히, '중앙은행'이라는 곳이나, 나라를 지키는 어른들은 동전 마법이 너무 커지지 않게 꼼꼼하게 조절해주고 있어요.",
                vocab: [
                    { word: "CENTRAL BANK", meaning: "중앙 은행" }
                ]
            },
            {
                image: 'assets/inflation_5.png',
                text: "은행의 마법이 성공해서 가격이 다시 얌전해지면 좋겠죠? 그러면 우리는 예전처럼 기분 좋게 콧노래를 부르며 맛있는 아이스크림을 듬뿍 사 먹을 수 있어요!",
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
                text: "이런! 둥근 지구 친구가 지금 땀을 뻘뻘 흘리면서, 앗 뜨거워! 하고 엄청난 열이 나고 있어요.",
                vocab: [
                    { word: "CLIMATE CHANGE", meaning: "기후 변화" }
                ]
            },
            {
                image: 'assets/climate_2.png',
                text: "우리가 매일 자동차를 너무 많이 타고 전기를 펑펑 써버리면, 못된 매연 가스가 뭉게뭉게 피어나와 지구를 이불처럼 확 덮어버린대요.",
                vocab: [
                    { word: "GREENHOUSE GAS", meaning: "온실 가스" }
                ]
            },
            {
                image: 'assets/climate_3.png',
                text: "지구가 한여름처럼 덥다 보면 어떻게 될까요? 귀여운 북극곰 친구가 사는 꽁꽁 얼음집이 통째로 사르르 녹고 날씨는 변덕쟁이가 된답니다.",
                vocab: [
                    { word: "MELTING ICE", meaning: "녹고 있는 얼음" }
                ]
            },
            {
                image: 'assets/climate_4.png',
                text: "우리 함께, 지구 친구의 열을 빨리 식혀주기 위해서 쓰레기는 조금만 줄이고요, 전기도 꼭 필요한 번만큼만 아껴 써요!",
                vocab: [
                    { word: "RECYCLE", meaning: "재활용" }
                ]
            },
            {
                image: 'assets/climate_5.png',
                text: "지구를 향한 꼬마 친구들의 착한 행동들이 차곡차곡 모이면, 열나던 지구는 금세 시원해지고 다시 건강하게 씩 웃을 수 있답니다.",
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
                text: "우와! 컴퓨터가 우리 사람의 말을 전부 찰떡같이 알아들어요! 내가 눈을 감고 상상한 멋진 그림도 뚝딱 가볍게 그려준답니다.",
                vocab: [
                    { word: "ARTIFICIAL INTELLIGENCE", meaning: "인공지능" }
                ]
            },
            {
                image: 'assets/ai_2.png',
                text: "'인공지능 로봇 친구'라고 부르는 AI는요, 마치 척척박사처럼 스스로 생각하고 모르는 것도 빠르게 배울 수 있는 똑똑한 기술이에요.",
                vocab: [
                    { word: "COMPUTER BRAIN", meaning: "컴퓨터 두뇌" }
                ]
            },
            {
                image: 'assets/ai_3.png',
                text: "이 똑똑한 친구는, 하얀 가운을 입은 의사 선생님을 도와서 병을 잽싸게 찾아주기도 하고요, 어려운 학교 숙제의 멋진 아이디어도 마구마구 알려줘요.",
                vocab: [
                    { word: "HELPING HUMAN", meaning: "인간을 돕는 일" }
                ]
            },
            {
                image: 'assets/ai_4.png',
                text: "그렇지만, 로봇이 모든 걸 다 잘하는 완벽한 마법사 친구는 절대 아니에요. 예쁜 말만 골라 쓰고 위험하지 않도록, 우리가 항상 올바르게 가르쳐주어야 한답니다.",
                vocab: [
                    { word: "TEAMWORK", meaning: "팀워크 (협동)" }
                ]
            },
            {
                image: 'assets/ai_5.png',
                text: "가까운 미래에는 우리와 똑같이 생각하는 착한 AI 로봇이, 나만의 최고 단짝 친구가 되어서 세상이 훨씬 더 신나게 변할 거예요!",
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
                text: "동그랗게 입이 큰 바다 청소선 통통이가 물 위를 둥둥 헤엄치다 소리쳐요! 와, 버려진 플라스틱 병이다! 나한테는 세상에서 제일 맛있는 간식이야!",
                vocab: [
                    { word: "OCEAN CLEANUP", meaning: "바다 청소" },
                    { word: "TRASH!", meaning: "찌꺼기!" }
                ]
            },
            {
                image: 'assets/ocean_card2.png',
                text: "통통이가 플라스틱 쓰레기를 쉴 새 없이 냠냠, 꿀꺽! 맛있게 먹어치울 때마다, 배는 빵빵해지고 우리 넓은 바다는 보석처럼 투명하고 맑아져요.",
                vocab: [
                    { word: "EAT PLASTIC", meaning: "플라스틱 먹기" },
                    { word: "YUMMY", meaning: "맛있다" }
                ]
            },
            {
                image: 'assets/ocean_card3.png',
                text: "어느새 쓰레기가 싹 사라진 반짝이는 바닷속으로, 엉금엉금 수영하던 아기 거북이들이 모여들어 통통이에게 밝게 웃으며 '정말 고마워!' 하고 인사해요.",
                vocab: [
                    { word: "THANK YOU", meaning: "고마워" },
                    { word: "CLEAN WATER", meaning: "깨끗한 물" }
                ]
            },
            {
                image: 'assets/ocean_card4.png',
                text: "배가 터지도록 다 먹어 치운 빵빵한 통통이는 신나게 재활용 공장으로 달려가요! 플라스틱 병이 과연 어떤 삐까뻔쩍한 새 장난감으로 변신할까요?",
                vocab: [
                    { word: "RECYCLING", meaning: "재활용" },
                    { word: "NEW TOY", meaning: "새 장난감" }
                ]
            },
            {
                image: 'assets/ocean_card5.png',
                text: "우리 친구들도 조그만 플라스틱 병을 분리수거 바구니에 착한 마음으로 쏙쏙 넣어주면요! 바다 대장 통통이를 돕는 멋진 지구 영웅이 될 수 있답니다.",
                vocab: [
                    { word: "SAVE EARTH", meaning: "지구 구하기" },
                    { word: "HERO", meaning: "영웅" }
                ]
            }
        ]
    },
    mars: {
        title: "화성에서 물 흔적 발견! 🪐",
        icon: "🪐",
        desc: "NASA 탐사 로봇이 화성에서 발견한 놀라운 비밀",
        cards: [
            {
                image: 'assets/mars_card_1.png',
                text: "저 멀리 빨간 별처럼 빛나는 화성! 우리 지구 바로 옆에 있는 이웃 행성이에요. 과학자들은 화성에 사람이 살 수 있을지 매일매일 열심히 연구하고 있답니다.",
                vocab: [
                    { word: "MARS", meaning: "화성" },
                    { word: "PLANET", meaning: "행성" }
                ]
            },
            {
                image: 'assets/mars_card_2.png',
                text: "NASA가 보낸 탐사 로봇 퍼서비어런스가 화성 바닥을 요리조리 신나게 돌아다니며 탐험 중이에요! 이 로봇은 우리 눈 대신 화성을 탐험하는 용감한 친구랍니다.",
                vocab: [
                    { word: "ROVER", meaning: "탐사 로봇" },
                    { word: "EXPLORE", meaning: "탐험" }
                ]
            },
            {
                image: 'assets/mars_card_3.png',
                text: "어, 저게 뭐지? 탐사 로봇이 화성 바위에서 물이 흘렀던 흔적을 발견했어요! 이 신기한 발견에 전 세계 과학자들이 모두 깜짝 놀랐답니다.",
                vocab: [
                    { word: "WATER", meaning: "물" },
                    { word: "DISCOVER", meaning: "발견" }
                ]
            },
            {
                image: 'assets/mars_card_4.png',
                text: "물이 있었다는 건, 어쩌면 아주아주 작은 생명체가 화성에도 살았을 수 있다는 뜻이에요! 과학자들은 오늘도 두근두근하는 마음으로 화성의 비밀을 풀고 있어요.",
                vocab: [
                    { word: "LIFE", meaning: "생명" },
                    { word: "SCIENCE", meaning: "과학" }
                ]
            },
            {
                image: 'assets/mars_card_5.png',
                text: "언젠가 우리도 우주선을 타고 화성에 직접 가볼 수 있을 거예요! 지금의 발견이 미래 우주 탐험가들의 꿈이 되고 있답니다. 여러분도 멋진 우주 탐험가가 되어볼까요?",
                vocab: [
                    { word: "SPACE", meaning: "우주" },
                    { word: "FUTURE", meaning: "미래" }
                ]
            }
        ]
    },
    who: {
        title: "세계 보건의 날과 WHO 🏥",
        icon: "🩺",
        desc: "전 세계 친구들의 건강을 지켜주는 고마운 의사 선생님들",
        cards: [
            {
                image: 'assets/who_card1.png',
                text: "친구들 안녕! 여러분은 아플 때 누구를 만나러 가나요? 맞아요, 친절한 의사 선생님이에요. 매년 4월에는 전 세계 모든 사람들의 건강을 응원하는 '세계 보건의 날'이 있답니다.",
                vocab: [
                    { word: "HEALTH", meaning: "건강" },
                    { word: "DOCTOR", meaning: "의사" }
                ]
            },
            {
                image: 'assets/who_card2.png',
                text: "그런데 우리 동네 병원처럼, 지구 전체를 돌보고 지켜주는 아주 커다란 병원 같은 곳이 있어요. 바로 '세계보건기구(WHO)'라는 곳이에요!",
                vocab: [
                    { word: "WORLD", meaning: "세계" },
                    { word: "ORGANIZATION", meaning: "기구" }
                ]
            },
            {
                image: 'assets/who_card3.png',
                text: "WHO에 모여 있는 똑똑한 어른들은 나쁜 병균이 퍼지지 않게 막아주고, 맛있는 음식과 깨끗한 물을 마실 수 있도록 전 세계 친구들을 든든하게 도와준대요.",
                vocab: [
                    { word: "SCIENTIST", meaning: "과학자" },
                    { word: "CLEAN WATER", meaning: "깨끗한 물" }
                ]
            },
            {
                image: 'assets/who_card4.png',
                text: "나쁜 감기 바이러스가 유행할 때, '친구들, 손을 뽀득뽀득 씻고 마스크를 꼭 써요!' 하고 가장 먼저 알려주는 분들도 바로 이 WHO의 멋진 선생님들이에요.",
                vocab: [
                    { word: "WASH HANDS", meaning: "손 씻기" },
                    { word: "WEAR MASK", meaning: "마스크 쓰기" }
                ]
            },
            {
                image: 'assets/who_card5.png',
                text: "건강하게 뛰어놀기 위해 우리도 매일매일 치카치카 양치질도 잘하고 밥도 골고루 먹기로 약속해요! 우리 모두가 함께 노력하면 지구가 엄청 튼튼해질 거예요.",
                vocab: [
                    { word: "BRUSH TEETH", meaning: "양치질하기" },
                    { word: "HEALTHY EARTH", meaning: "건강한 지구" }
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
let cardEnterTime = Date.now();

async function sendAnalytics(eventName, payload) {
    try {
        const data = { eventName, timestamp: new Date().toISOString(), ...payload };
        fetch('api/log', {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).catch(err => console.error("Log error:", err));
    } catch (e) { }
}

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
    cardEnterTime = Date.now();

    sendAnalytics('topic_start', { topic: topicId });

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
    sendAnalytics('topic_quit', { topic: activeTopicId, last_index: currentIndex });
    if (typeof currentAudio !== 'undefined' && currentAudio) currentAudio.pause();
    carouselView.style.display = 'none';
    homeBtn.style.display = 'none';
    homeMenu.style.display = 'grid';
});

// ==== iOS Audio Context Warm-up Trick ====
let ttsUnlocked = false;

function unlockTTS() {
    if (ttsUnlocked) return;
    let silentAudio = new Audio();
    silentAudio.src = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ==";
    silentAudio.play().catch(e => console.log(e));
    ttsUnlocked = true;
    document.removeEventListener('click', unlockTTS);
    document.removeEventListener('touchstart', unlockTTS);
}

// Bind unlock sequence to user's first interaction anywhere on the screen
document.addEventListener('click', unlockTTS, { once: true });
document.addEventListener('touchstart', unlockTTS, { once: true });


// ==== Backend API TTS Fetching ====
let currentAudio = null;

async function playSound(text, lang, btnElement) {
    sendAnalytics('tts_play_start', { text_type: lang === 'ko-KR' ? 'sentence' : 'word', lang: lang });
    if (currentAudio && !currentAudio.paused && currentPlayingBtn === btnElement && btnElement !== null) {
        currentAudio.pause();
        if (btnElement) btnElement.classList.remove('playing');
        currentPlayingBtn = null;
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    document.querySelectorAll('.sound-btn.playing').forEach(btn => btn.classList.remove('playing'));

    currentPlayingBtn = btnElement;
    if (btnElement) btnElement.classList.add('playing'); // 로딩 피드백

    try {
        const response = await fetch(`api/tts?text=${encodeURIComponent(text)}&lang=${lang}`);

        if (!response.ok) throw new Error('TTS 서버 에러');

        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);

        if (currentPlayingBtn !== btnElement) {
            URL.revokeObjectURL(audioUrl);
            return;
        }

        currentAudio = new Audio(audioUrl);
        currentAudio.onended = () => {
            if (btnElement) btnElement.classList.remove('playing');
            if (currentPlayingBtn === btnElement) currentPlayingBtn = null;
            URL.revokeObjectURL(audioUrl);
        };
        currentAudio.onerror = () => {
            if (btnElement) btnElement.classList.remove('playing');
            if (currentPlayingBtn === btnElement) currentPlayingBtn = null;
            alert("음성 처리에 오류가 발생했습니다.");
        };
        currentAudio.play();
    } catch (error) {
        console.error(error);
        alert("음성 서버에 연결할 수 없어요. 로컬 백엔드(Docker)가 켜져 있는지 확인해 주세요.");
        if (btnElement) btnElement.classList.remove('playing');
        if (currentPlayingBtn === btnElement) currentPlayingBtn = null;
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

        const vocabHtml = (data.vocab && data.vocab.length > 0)
            ? data.vocab.map(v => `
            <li class="vocab-item">
                <span class="vocab-word">🧩 ${v.word}</span>
                <button class="sound-btn" onclick="playSound('${v.word.replace(/'/g, "\\'")}', 'en-GB', this)" title="영어 듣기">
                    🔊
                </button>
                <span class="vocab-meaning">${v.meaning}</span>
            </li>
        `).join('')
            : '';

        const vocabSection = vocabHtml
            ? `<div class="vocab-section">
                    <div class="vocab-title">🔡 그림 속 영어 단어 읽어보기</div>
                    <ul class="vocab-list">${vocabHtml}</ul>
                </div>`
            : '';

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
                ${vocabSection}
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

    sendAnalytics('card_viewtime', {
        topic: activeTopicId,
        card_index: currentIndex,
        duration_ms: Date.now() - cardEnterTime
    });

    currentIndex = index;
    cardEnterTime = Date.now();
    updateCards();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) goToCard(currentIndex - 1);
});

function showCompletionModal() {
    sendAnalytics('topic_complete', { topic: activeTopicId });
    let toast = document.getElementById('completionToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'completionToast';
        document.body.appendChild(toast);
    }
    toast.innerText = "🎉 이야기 끝! 참 잘했어요! 🎉";
    toast.classList.add('show');

    // Play celebratory TTS
    if (ttsUnlocked) {
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

// --- Visitor Count & Feedback ---
document.addEventListener('DOMContentLoaded', () => {
    fetch('api/visitor_count')
        .then(res => res.json())
        .then(data => {
            if (data.count !== undefined) {
                document.getElementById('visitorCountVal').innerText = data.count;
            }
        })
        .catch(err => console.error("Visitor count fetch error:", err));
});

function submitFeedback(e) {
    e.preventDefault();
    let v = document.getElementById('feedback-content').value;
    if (!v.trim()) return;

    let formData = JSON.stringify({ content: v });

    fetch('api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: formData
    }).then(r => r.json()).then(data => {
        document.getElementById('feedback-status').innerText = "✅ 소중한 의견 감사합니다!";
        document.getElementById('feedback-status').style.color = "#27ae60";
        document.getElementById('feedback-content').value = "";
        setTimeout(() => { document.getElementById('feedback-status').innerText = ""; }, 4000);
    }).catch(err => {
        document.getElementById('feedback-status').innerText = "❌ 의견 전송에 실패했습니다.";
        document.getElementById('feedback-status').style.color = "#e74c3c";
    });
}

initHomeMenu();
