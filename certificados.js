var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function clicked(num){
    if(document.getElementById("elementoimagem")){
      let rem = document.getElementById("elementoimagem")
      rem.remove()
    }
    let main = document.getElementById("principal")
    
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
  $(function(){
    $(main).detach();
  });
  }