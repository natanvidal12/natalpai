const screens = [
`
<div class="line">REGISTRO #001</div>
<div class="line">STATUS: ATIVO</div>
`,
`
<div class="line">Durante anos,</div>
<div class="line">alguém manteve tudo funcionando.</div>
`,
`
<div class="line">Mesmo cansado.</div>
<div class="line">Mesmo sem reconhecimento.</div>
`,
`
<div class="line">Função exercida: Proteção.</div>
<div class="line">Função exercida: Responsabilidade.</div>
<div class="line">Função exercida: Presença.</div>
`,
`
<div class="line">Este registro existe</div>
<div class="line">porque eu percebi.</div>
<br>
<div class="line">— Seu filho</div>
`
];

let index = 0;
const content = document.getElementById("content");

function showScreen() {
    content.innerHTML = screens[index];
    const lines = document.querySelectorAll(".line");
    lines.forEach((line, i) => {
        setTimeout(() => {
            line.classList.add("active");
        }, i * 1300);
    });

    if (index < screens.length - 1) {
        setTimeout(() => {
            index++;
            showScreen();
        }, lines.length * 900 + 2500);
    }
}

showScreen();