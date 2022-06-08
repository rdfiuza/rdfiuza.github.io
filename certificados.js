function clicked(num){
    if(document.getElementById("elementoimagem")){
      let rem = document.getElementById("elementoimagem")
      rem.remove()
    }
    let main = document.getElementById("principal")
    main.style.visibility = "hidden"
    let body = document.body
    body.style.backgroundColor = "black"
  
    let imageCardElement = document.getElementById(num)
    let caminho = imageCardElement.getAttribute("src")
  const img = new Image(150, 150)
  img.src = caminho
  let frenteElement = document.getElementById("frente")
  
  let doc = document.body.appendChild(img)
  doc.setAttribute("id", "elementoimagem")
  frenteElement.style.visibility = "visible"
  frenteElement.appendChild(img)
  }