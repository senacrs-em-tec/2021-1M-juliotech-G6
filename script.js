const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function participantes(){
  var pontos=document.getElementById("pontos")
  var maistexto=document.getElementById("mais")
  var btnparticipantes=document.getElementById("btnparticpantes")

if(pontos.style.display === "none"){
  pontos.style.display= "inline";
  maistexto.style.display="none";
  btnparticipantes.innerHTML="mostrar participantes";
}else{
  pontos.style.display="none";
  maistexto.style.display="inline";
  btnparticipantes.innerHTML="ocultar participantes"
}



}