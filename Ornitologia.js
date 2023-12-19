
$(document).ready(function(){
    $('.slick-carrosel').slick({
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: true, 
        arrows: true 
    });
});

$(document).ready(function() {
    $('.menu-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.content').hide();
        $('#' + target).fadeIn(); 
    });
});

$(document).ready(function() {
   
    $('.content').hide();
    
   
    $('#home').fadeIn();

    u
    $('.menu-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $('.content').hide();
        $('#' + target).fadeIn(); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const passaros = document.querySelectorAll('.passaro');

    passaros.forEach(passaro => {
        const descricao = passaro.querySelector('.descricao');
        const imagem = passaro.querySelector('img');

        passaro.addEventListener('mouseover', function() {
            descricao.textContent = imagem.getAttribute('data-descricao');
        });

        passaro.addEventListener('mouseout', function() {
            descricao.textContent = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const telefoneInput = document.getElementById('telefone');
    const cpfInput = document.getElementById('cpf');
    const dataNascimentoInput = document.getElementById('data-nascimento');

    telefoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '$1 $2-$3');
    });

    cpfInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    });

    dataNascimentoInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioContato = document.getElementById('formulario-contato');

    formularioContato.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        this.reset();
    });
});

$(document).ready(function() {
    $('#modo-noturno').on('click', function() {
        $('body, .footer').toggleClass('modo-noturno'); 
        $(this).toggleClass('ativo'); 
        var modo = $(this).hasClass('ativo') ? 'Modo Diurno' : 'Modo Noturno';
        $(this).text(modo); 
    });
});

function ajustarFooter() {
    const sections = document.querySelectorAll('.content');
    let totalHeight = 0;

    sections.forEach(section => {
        totalHeight += section.offsetHeight;
    });

    const windowHeight = window.innerHeight;
    const footer = document.querySelector('.footer');

    if (totalHeight < windowHeight) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    ajustarFooter();

    window.addEventListener('resize', () => {
        ajustarFooter();
    });
});
window.addEventListener('DOMContentLoaded', () => {
    updateFooterPosition();

    window.addEventListener('resize', () => {
        updateFooterPosition();
    });
});

$(document).ready(function() {
    $('.passaro').on('click', function() {
        $(this).toggleClass('maximizado');
        $(this).find('.descricao').toggle();
    });

    $('.passaro').hover(
        function() {
            $(this).find('.descricao').fadeIn();
        },
        function() {
            $(this).find('.descricao').fadeOut();
        }
    );
});