document.addEventListener('DOMContentLoaded', function () {
    const mainScreen = document.getElementById('main-screen');
    const imageContainer = document.getElementById('image-container');
    const mainImage = document.getElementById('main-image');
    const questionBox = document.getElementById('question-box');
    const hintBox = document.getElementById('hint-box');
    const certificate = document.getElementById('certificate');
    const answerInput = document.getElementById('answer-input');
    const hintClose = document.getElementById('hint-close');
    const scoreDisplay = document.getElementById('score');

    let clickCount = 0;
    let maxClicks = 5;
    let currentQuestion = 0;
    let correctAnswers = 0;

    const questions = [
        { question: "Od kiedy bebostwo?", answer: "Tutaj każda odpowiedź będzie dobra", hint: "Jest to jesieni czas" },
        { question: "Ile już bebostwo?", answer: "6", hint: "Numer pogby" },
        { question: "Jest kochaś .... i ....?", answer: "Mały i duży", hint: "Tak różni a jednak razem" },
        { question: "Twój ulubiony kolor?", answer: "Żółty", hint: "Enguje cię tym" },
        { question: "Moje 3 ulubione to???", answer: "Beb ,Lazagn ,sernik", hint: "Jedno to wspaniała osoba reszta to jedzenie....." },
        { question: "Co duży by chciał?", answer: "Spokój", hint: "Bez chaosu, bez pośpiechu" },
        { question: "Najlepiej spędzamy czas?", answer: "Bebing, syrking i fylm", hint: "...ING, ....ING i .y.." },
        { question: "Dzinki dużego?", answer: "16.04.2005", hint: "Zapytaj beba" },
        { question: "Co najczęściej mówię?", answer: "Tu każda odpowiedź dobra", hint: "Ugryzienie od świni boli ale to rany po leszczynie goją się dłużej" },
        { question: "Jak sprawiam ci uśmiech?", answer: "Tutaj każda odpowiedź jest dobra", hint: "Dzięki za kissy" },
        { question: "Nasza przyszła baza?", answer: "Gniazdko", hint: "Jakbym wsadził tam siura to bym go stracił" },
        { question: "Pseudonimy taktyczno operacyjne?", answer: "Orzeł i orzełek", hint: "Mały i duży" }
    ];

    mainScreen.addEventListener('click', function () {
        clickCount++;
        if (clickCount <= maxClicks) {
            mainImage.style.transform = `scale(${1 + (clickCount * 0.2)})`;
        } else {
            mainScreen.classList.add('hidden');
            imageContainer.classList.remove('hidden');
            showParticles();
            setTimeout(() => {
                imageContainer.classList.add('hidden');
                showQuestion();
            }, 2000);
        }
    });

    function showParticles() {
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('Particles loaded!');
        });

        setTimeout(() => {
            document.getElementById('particles-js').style.display = 'none';
        }, 2000);
    }

    function showQuestion() {
        questionBox.classList.remove('hidden');
        questionBox.querySelector('.question-header p').textContent = questions[currentQuestion].question;
    }

    answerInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (answerInput.value.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
                correctAnswers++;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showCertificate();
            }
            answerInput.value = '';
        }
    });

    hintClose.addEventListener('click', function () {
        hintBox.classList.add('hidden');
    });

    function showCertificate() {
        questionBox.classList.add('hidden');
        certificate.classList.remove('hidden');
        scoreDisplay.textContent = Math.round((correctAnswers / questions.length) * 100);

        const images = document.querySelectorAll('.slide-in');
        images.forEach(image => {
            image.classList.add('slide-in');
        });
    }
});
