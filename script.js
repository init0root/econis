
var current = 0;
var itens = document.querySelectorAll('.carrossel img');

function carrossel() {
    // Remove classe ativa de todos
    itens.forEach((img) => {
        img.setAttribute('class', 'img_carrosel');
    });

    // Garante que o índice tá dentro do limite
    if (current >= itens.length) {
        current = 0;
    }

    // Ativa a imagem atual
    itens[current].setAttribute('class', 'img_carrosel active');

    // Prepara para a próxima execução
    atualizarIndicador(current);
    current += 1;
    

}

const indicadores = document.querySelectorAll('.indicadores div');

function atualizarIndicador(index) {
  indicadores.forEach((el, i) => {
    if (i === index) {
      el.classList.add('at');
    } else {
      el.classList.remove('at');
    }
  });
}


const tabs = document.querySelectorAll(".tab_button");
const panels = document.querySelectorAll(".tab_panel");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active de todos
    tabs.forEach(b => b.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // Ativa os atuais
    btn.classList.add("active");
    const target = btn.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

setInterval(()=>{
    carrossel()
}, 3000)
