
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light1.png")
    img.setAttribute('alt',"Foto de um homem com boné solucionando um problema.")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute(
      "alt",
      "um homem de bone"
    )
  }
}