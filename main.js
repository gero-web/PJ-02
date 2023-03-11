const gallery = document.getElementById('gallery')
const circle =  document.getElementsByClassName('circle');
const links =  document.getElementsByClassName('link');
const height = document.getElementsByClassName('gallery-cell')[0].offsetHeight;
const childItemsCount = gallery.childElementCount;

circle[0].style.backgroundColor = 'white';
let prevCircleWhite = circle[0];
let count = 0;

links[0].classList.add('link_active'); 
let prevLink = links[0];

function activeElem(element) {
    gallery.scrollTop = height * count;
    circle[count].style.backgroundColor = 'white';
    links[count].classList.add('link_active');
    prevLink.classList.remove('link_active');
    prevLink = links[count];
    prevCircleWhite.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    prevCircleWhite = circle[count];
}


for (let index = 0; index < circle.length; index++) {
    const element = circle[index];
    element.addEventListener('click', ()=>{
        count = index;
        activeElem();
    });
}

for (let index = 0; index < links.length; index++) {
    const element = links[index];
    element.addEventListener('click', ()=>{
        count = index;
        activeElem();
    });
}



function circleWhite(index, color='white'){
    circle[count].style.backgroundColor = 'white';
    prevCircleWhite.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    links[count].classList.add('link_active');
    prevLink.classList.remove('link_active');
    prevLink = links[count];
    prevCircleWhite = circle[count];
  
}

function left(){
    if(count > 0)
    {
        count--;
        circleWhite(count);
        gallery.scrollTop  -=  height;
    }
   
}


function right(){
   
    if(count < childItemsCount)
    {  
        count++;
        circleWhite(count);
        gallery.scrollTop  += height ;
       
    }
}