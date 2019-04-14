const el = document.getElementsByTagName('div');

for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("click", show)
}

function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  }

function show(e){
 if(!event.target.classList.contains('box')) return;
    const box = e.target;
    const idNum = parseInt(box.id.split('-')[1]);
    const nextBox = document.getElementById(`page-${idNum + 1}`);
    scrollIt(nextBox);
}