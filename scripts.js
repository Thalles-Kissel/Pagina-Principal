function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


function alternarModo()
{
    document.body.classList.toggle('dark-mode');
    
}
// Tirando Animação da responsividade
// cont de todos elementos
const elems = document.querySelectorAll("*");


//detetcta o tamnho da tela que está sendo utilizada se for largura 768 executa a função mobilemode
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width < 768) {
        mobileMode();
    }
});

//funcao para remover todos atributos data-aos
function mobileMode() {
    elems.forEach((elem) => {
        elem.removeAttribute("data-aos");
    })
}