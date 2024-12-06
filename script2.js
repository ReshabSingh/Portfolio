let html = document.getElementsByName('html')[0];
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector("#dmode");
    const res = document.getElementById("mg");

    button.addEventListener("click", function clicker() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme'); 
        if (currentTheme === 'dark') { 
            document.documentElement.setAttribute('data-bs-theme', 'light'); 
            res.style.color = "black";
            localStorage.setItem("data-bs-theme", "light");  
        } else { 
            document.documentElement.setAttribute('data-bs-theme', 'dark'); 
            res.style.color = "white";
            localStorage.setItem("data-bs-theme", "dark");  
        }
    });

    const savedTheme = localStorage.getItem("data-bs-theme");
    if (savedTheme) {
        document.documentElement.setAttribute('data-bs-theme', savedTheme);
        res.style.color = savedTheme === 'dark' ? 'white' : 'black';
    }
});