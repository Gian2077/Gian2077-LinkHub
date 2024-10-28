// Cria uma constante com os valores da raiz do HTML
const rootHTML = document.documentElement;
// Cria uma constante com os valores do botão tema
const btnTheme = document.getElementById('btn__theme');
// Adiciona uma escuta de eventos no botão tema e executa a Função changeTheme ao clicar nele
btnTheme.addEventListener("click", changeTheme);
// Função que alterna o tema da pagina entre light e dark ao clicar no botão tema
function changeTheme()
{
    // Cria uma constante com o valor do atributo data-theme
    const currentTheme = rootHTML.getAttribute("data-theme")
    // Estrutura condicional que verifica se o tema atual é light ou dark
    if (currentTheme === "dark")
    {
        // Caso o tema atual seja dark, ele muda o valor do atributo data-theme para light
        rootHTML.setAttribute("data-theme", "light");
    }
    else if (currentTheme === "light")
    {
        // Caso o tema atual seja light, ele muda o valor do atributo data-theme para dark
        rootHTML.setAttribute("data-theme", "dark");
    }
    // Alterna entre as classes bi-moon-stars e bi-sun, alterando o icone exibido no botão tema
    btnTheme.classList.toggle("bi-moon-stars");
    btnTheme.classList.toggle("bi-sun");
}
