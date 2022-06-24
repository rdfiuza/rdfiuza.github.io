var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
let main = document.getElementById("principal")
let body = document.body

function clicked(num){
    if(document.getElementById("elementoimagem")){
      let rem = document.getElementById("elementoimagem")
      rem.remove()
    }

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
    frenteElement.style.position = "absolute";
    frenteElement.style.margin = "15% 15%"
    frenteElement.style.top = "-100px"
    frenteElement.style.marginTop = "150px"
    $(function(){
      $(main).detach();
    });
  
}
function btnClose(){
  if(document.getElementById("elementoimagem")){
    let rem = document.getElementById("elementoimagem")
    rem.remove()
    $(function(){
      $(main).appendTo("body");
    });
  }
  let frenteElement = document.getElementById("frente")
  frenteElement.style.visibility = "hidden"
  
    body.style.backgroundColor = "rgb(243, 243, 243)"
}