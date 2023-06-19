let h1 = 0
document.getElementById("home-el").textContent = h1.textContent

function homeplus1() {
    console.log("+1 clicked")
    h1 += 1
    document.getElementById("home-el").textContent = h1.textContent
}