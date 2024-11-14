const themeIcon = document.getElementById("themeicon")


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
function render() {
    const container = document.getElementById(id);

container.innerHTML = <div class="card">
<h2>${title}</h2>
<p class="content" style="display: ${open ? 'block' : 'none'}">
  
</p>
<button>${open ? 'Close' : 'Open'}</button>
</div>
container.querySelector("button").addEventListener("click"())
}
render()
}

function renderAllCards() {
    return
divcontainer.append(
    createCard("Jobberfaring", "unik id"),
    createCard("Jobberfaring", "unik id2"),
    createCard("Jobberfaring", "unik id3"),
    createCard("Jobberfaring", "unik id4"))
}
createCard("My Card Title", "cardContainer");
renderAllCards()

//===============================================================================================//
//Choose the dark or lightpath

function themeSwitcher() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("light")) {
        themeIcon.src = "icon/mode-light.svg"

    } else {
        themeIcon.src = "icon/mode-dark.svg"
    }
}

