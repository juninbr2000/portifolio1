// Espera o documento HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento com a classe .container
    const containerElement = document.querySelector(".container");
    const darkModeButton = document.querySelector("#mode")
    
    // Verifica o tema do computador
    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    

    const updateThemeColor = () => {
        if (theme === true && containerElement) {
            // Adiciona a classe "dark" ao elemento .container se o tema for escuro
            containerElement.classList.add("dark");
            verifyIconDarkMode()
        }
    };

    //função para verificar o icone do botão de dark mode
    const verifyIconDarkMode = () => {
        if(containerElement.classList.contains("dark")){
            darkModeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
        } else {
            darkModeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
        }
    }

    //adiciona o evento do botão de modo escuro
    darkModeButton.addEventListener("click", () => {
        containerElement.classList.toggle("dark");
        verifyIconDarkMode()
    })

    
    
    updateThemeColor(); // Chama a função para aplicar o tema inicialmente
});
