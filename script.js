
const divcontainer = document.getElementById("divcontainer");
console.log(divcontainer)
// const themeIcon = document.getElementById("themeicon")


//gjør h1 elementet til tittel på siden
//sjekker om vi er på riktig side
document.addEventListener("DOMContentLoaded", function(){
const homePage = document.querySelector(".home");
if (homePage) {
    const h1Element = document.querySelector("h1");
    if (h1Element) {
        const h1Text = h1Element.textContent;
        document.title = h1Text;
        }
    }
})
//======================================================================//
//cardlogic
function createCard(Title, id){
    let open = false;

function toggle() {
    return open ? false: true;
}
function render(title) {
    const container = document.getElementById(id);

container.innerHTML = `<div class="card">
<h2>${title}</h2>
<p class="content" style="display: ${open ? 'block' : 'none'}">
  
</p>
<button>${open ? 'Close' : 'Open'}</button>
</div>`

container.querySelector("button").addEventListener("click"())
render()
}

function renderAllCards() {
    return(
divcontainer.append(
    render("Kontaktinformasjon"),
    createCard("Jobberfaring", "unik id"),
    createCard("Jobberfaring", "unik id2"),
    createCard("Jobberfaring", "unik id3"),
    createCard("Jobberfaring", "unik id4"))
)}
createCard("My Card Title", "cardContainer");
renderAllCards()
};

//===============================================================================================//
//Choose the dark or lightpath

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon_light = document.getElementById('themeicon_light');
    const themeIcon_dark = document.getElementById('themeicon_dark');

    function themeSwitcher() {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
  
        if (document.body.classList.contains("light")) {
            themeIcon_light.style.display = "inline";
            themeIcon_dark.style.display = "none";
        } else {
            themeIcon_light.style.display = "none";
            themeIcon_dark.style.display = "inline";
        }
  
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            themeSwitcher();
            console.log("Theme switched");
        });
    } else {
        console.error("Theme toggle button not found");
    }

    // Sett initial tilstand basert på brukerens preferanse
    if (window.matchMedia || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
        themeIcon_light.style.display = "none";
        themeIcon_dark.style.display = "inline";
    } else {
        document.body.classList.add("light");
        themeIcon_light.style.display = "inline";
        themeIcon_dark.style.display = "none";
    }
});

// =================================================================