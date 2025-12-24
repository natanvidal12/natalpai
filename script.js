        // Criar flocos de neve
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000);
        }

        // Iniciar neve
        setInterval(createSnowflake, 300);

        // Adicionar mais neve
        function addSnowflakes() {
            for (let i = 0; i < 10; i++) {
                setTimeout(createSnowflake, i * 100);
            }
        }

        // Mudar cor da árvore
        const colors = ['#2d5016', '#1a4d2e', '#4f7942', '#0f5132', '#2d6a4f'];
        let colorIndex = 0;

        function changeTreeColor() {
            const treeParts = document.querySelectorAll('.tree-part');
            colorIndex = (colorIndex + 1) % colors.length;
            treeParts.forEach(part => {
                part.style.borderBottomColor = colors[colorIndex];
            });
            addOrnaments();
        }

        // Adicionar enfeites
        function addOrnaments() {
            const tree = document.getElementById('tree');
            const ornamentColors = ['#ff0000', '#ffd700', '#0000ff', '#ff69b4', '#00ff00'];
            
            for (let i = 0; i < 10; i++) {
                const ornament = document.createElement('div');
                ornament.classList.add('ornament');
                ornament.style.backgroundColor = ornamentColors[Math.floor(Math.random() * ornamentColors.length)];
                ornament.style.left = Math.random() * 180 + 10 + 'px';
                ornament.style.top = Math.random() * 200 + 'px';
                tree.appendChild(ornament);

                setTimeout(() => ornament.remove(), 3000);
            }
        }

        // Som dos sinos
        function playSound() {
            const sounds = ['🔔', '🎵', '🎶', '⭐', '✨'];
            const sound = document.createElement('div');
            sound.style.position = 'fixed';
            sound.style.left = '50%';
            sound.style.top = '50%';
            sound.style.transform = 'translate(-50%, -50%)';
            sound.style.fontSize = '5em';
            sound.style.animation = 'glow 0.5s ease-in-out';
            sound.innerHTML = sounds[Math.floor(Math.random() * sounds.length)];
            document.body.appendChild(sound);

            setTimeout(() => sound.remove(), 500);
        }

        // Contagem regressiva
        function updateCountdown() {
            const christmas = new Date('December 25, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = christmas - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Sistema de desejos
        let wishes = [];

        function addWish() {
            const input = document.getElementById('wishInput');
            const wish = input.value.trim();
            
            if (wish) {
                wishes.push(wish);
                input.value = '';
                displayWishes();
            }
        }

        function displayWishes() {
            const display = document.getElementById('wishesDisplay');
            display.innerHTML = wishes.map(wish => 
                `<div class="wish-item">⭐ ${wish}</div>`
            ).reverse().join('');
        }

        // Player de música (simulado)
        let musicPlaying = false;
        function toggleMusic() {
            musicPlaying = !musicPlaying;
            const icon = document.querySelector('.music-icon');
            icon.textContent = musicPlaying ? '🎶' : '🎵';
        }

        // Adicionar enfeites iniciais
        setTimeout(addOrnaments, 1000);
        let cliquesArvore = 0;

function changeTreeColor() {
    const treeParts = document.querySelectorAll('.tree-part');
    colorIndex = (colorIndex + 1) % colors.length;

    treeParts.forEach(part => {
        part.style.borderBottomColor = colors[colorIndex];
    });

    addOrnaments();
    cliquesArvore++;

    if (cliquesArvore === 3) {
        abrirCarta();
    }
}

function abrirCarta() {
    document.getElementById('overlayCarta').style.display = 'flex';
}

function fecharCarta() {
    document.getElementById('overlayCarta').style.display = 'none';
}

