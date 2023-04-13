document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]'); // adicionado o data-faq-questions em todas as questoes para que fiquem relacionadas, não precisa colocar atributo.
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY; // scrollY para o eixo vertical
        // verificação: quando o valor de window.scrollY for maior que const alturaHero pode exibir os demais elementos

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader(); // chamando a função abaixo de ocultar
        } else {
            exibeElementosDoHeader();
        }

    })

    // seção de atrações, programação das abas

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // seção FAQ accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta); /* chama uma função */
    }
})

function ocultaElementosDoHeader() { // oculta
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); // vai chamar a função pra ver a posição do scroll logo acima
}

function exibeElementosDoHeader() { //exibe
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden'); // vai chamar a função pra ver a posição do scroll logo acima
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'; //  se esta presente no elemento está aberto, caso contrario está fechado
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe); // elemento pai com uma class list com abrir e fechar chamando a const classe de aberto logo acima
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(elemento) {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}