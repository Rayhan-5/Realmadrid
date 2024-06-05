
nav = document.getElementById('bar');
menu = document.getElementById('menu');
nav.addEventListener('click',function(event){
       menu.classList.toggle('open');
      });
  
document.addEventListener('click', function(event) {
  if(menu.classList.contains('open') && !event.target.isEqualNode(nav) && !event.target.isEqualNode(menu) && !menu.contains(event.target)) {
      menu.classList.remove('open');
  }
});


function fun() {
  window.location='index2.html' ;
}
function html() {
  var elem = document.getElementById("html");   
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 87) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

  

function css() {
  var elem = document.getElementById("css");   
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 95) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function js() {
  var elem = document.getElementById("js");   
  var width = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (width >= 94) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function py() {
  var elem = document.getElementById("py");   
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 88) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }

}
function java() {
  var elem = document.getElementById("java");   
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 91) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }

}
html()
js()
css()
py()
java()
window.historyBack()