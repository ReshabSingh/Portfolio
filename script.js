let html = document.getElementsByName('html')[0];
const res = document.getElementById("mg");

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector("#dmode");

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

// Code for contact me section

const scriptURL = 'https://script.google.com/macros/s/AKfycbz3W5iMk5nwk__HjRh4MYk5OCvRohuNAZEpn0r-WArpRveRue193RovjOO4FtygoimYBw/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        res.innerHTML = "Message sent successfully"
        setTimeout(()=>{
            res.innerHTML = "";
        },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


// My code for Dark Mode
// let html = document.querySelector("#html-tag")
// const button = document.querySelector("#dmode")
// 



// button.addEventListener("click", function clicker(){
//     const currentTheme = document.documentElement.getAttribute('data-bs-theme'); 
//     if (currentTheme === 'dark') { 
//         document.documentElement.setAttribute('data-bs-theme', 'light'); 
//         res.style.color = "black";
//         localStorage.setItem("data-bs-theme" , "light");
//     } 
//     else { 
//         document.documentElement.setAttribute('data-bs-theme', 'dark'); 
//         res.style.color = "white";
//         localStorage.setItem("data-bs-theme", "dark")
//     }

//     const savedTheme = localStorage.getItem("data-bs-theme"); 
//     if (savedTheme) {
//         document.documentElement.setAttribute('data-bs-theme', savedTheme); 
//         res.style.color = savedTheme === 'dark' ? 'white' : 'black'; 
//     } 

// })
