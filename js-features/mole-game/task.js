const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

for(i = 1; i < 10; i++){
    const hole = document.getElementById(`hole${i}`)     
    hole.onclick = function(){
        if(hole.className.includes( 'hole_has-mole' )){
            dead.textContent++;
        } else {
            lost.textContent++;
        }


        if(lost.textContent == 5){
            alert("Ты проиграл")
            dead.textContent = 0
            lost.textContent = 0
        } else if(dead.textContent == 10) {
            alert("Ты выиграл")
            dead.textContent = 0
            lost.textContent = 0
        }
    }     
}