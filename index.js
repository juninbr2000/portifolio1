document.addEventListener("DOMContentLoaded", function() {
    const containerElement = document.querySelector(".container");
    const darkModeButton = document.querySelector("#mode")
    const inputvalue = document.querySelector('#email')
    const copyBtn = document.querySelector('.copy')

    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const updateThemeColor = () => {
        if (theme === true && containerElement) {
            // Adiciona a classe "dark" ao elemento .container se o tema for escuro
            containerElement.classList.add("dark");
            verifyIconDarkMode()
        }
    };

    const verifyIconDarkMode = () => {
        if(containerElement.classList.contains("dark")){
            darkModeButton.innerHTML = '<i class="fa-solid fa-moon"></i>'
        } else {
            darkModeButton.innerHTML = '<i class="fa-solid fa-sun"></i>'
        }
    }

    darkModeButton.addEventListener("click", () => {
        containerElement.classList.toggle("dark");
        verifyIconDarkMode()
    })

    copyBtn.addEventListener('click', () => {
        console.log('clicou')
        inputvalue.select()
        copyBtn.innerHTML = '<i class="fa-solid fa-paperclip"></i> Copiado!'
        document.execCommand('copy');

        setTimeout(()=>{
            copyBtn.innerHTML = '<i class="fa-solid fa-paperclip"></i> Copiar email'
            }, 3000) 
    })
    
    updateThemeColor();
});
