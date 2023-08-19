/* Menu mobile */

function openNav(params) {
    document.getElementById("closed").style.width="100%"
}

function closeNav(params) {
    document.getElementById("closed").style.width="0%"
}

/* Troca de imagens*/

var number_img = 1;

function change_img_add(){
    var img = document.getElementById("img1")

    if(number_img < 3){
    number_img += 1;
    }else {
        number_img = 4
    }
    img.src= "./assets/img" + number_img +".jpeg"
}

function change_img_remove(){
    var img = document.getElementById("img1")

    if(number_img > 1){
    number_img -= 1;
    }else {
        number_img = 1
    }
    img.src= "./assets/img" + number_img +".jpeg"
}

