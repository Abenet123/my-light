const button = document.getElementById('btn');
const cover = document.getElementById('shadow');
button.addEventListener('click', function(){
    cover.classList.toggle('open-It');
    if(cover.classList.contains('open-It')){
        button.src = 'img/close.png';
    } else{
        button.src = 'img/menu.png';
    }
    
});
const pizza = document.getElementById('row2');
function fun1(){
    cover.classList.remove('open-It');
    button.src = 'img/menu.png';
}