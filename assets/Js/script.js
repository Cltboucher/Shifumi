var dragging = document.querySelectorAll('.dragging');
var dragID = 0;
var scorePlayer = 0;
var scoreComp = 0;
const modalWin = document.getElementById('modalWin');
const modalLose = document.getElementById('modalLose');
const reload = document.getElementById('replay');
const reload2 = document.getElementById('replay2');
const min = Math.ceil(1);
const max = Math.floor(3);

// function pour recupérer l'ID du button selectionné

dragging.forEach(function (dragged) {
    dragged.addEventListener('dragstart', function (ev) {
        dragID = this.id;
    })
})

// enlever le comportement natif du navigateur

gameTable.addEventListener('dragover', function (ev) {
    ev.preventDefault();
})


gameTable.addEventListener('drop', function (ev) {
    ev.preventDefault();
    game();

    // Random


})

dragging.forEach(function(clicked){
    clicked.addEventListener('click', function(){
        dragID = this.id;
        game();
    })
})

reload.addEventListener('click', function () {
    location.reload();
})

reload2.addEventListener('click', function () {
    location.reload();
})



function game() {
    ai = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(dragID, ai);
    if ((dragID == 'rock' && ai == 2) || (dragID == 'paper' && ai == 3) || (dragID == 'scisors' && ai == 1)) {
        returnID.innerHTML = 'PERDU!';
        scoreComp++;
        comp.innerHTML = scoreComp;
    }
    else if ((dragID == 'rock' && ai == 3) || (dragID == 'paper' && ai == 1) || (dragID == 'scisors' && ai == 2)) {
        returnID.innerHTML = 'GAGNE!';
        scorePlayer++;
        player.innerHTML = scorePlayer;
    }
    else {
        returnID.innerHTML = "EGALITE!";
    }

    if (scorePlayer == 0 && scoreComp == 0) {

    } else {
        ratio.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComp) * 100) + '%';
    }

    if (scorePlayer == 3) {
        modalWin.style.display = 'block';
    }

    if (scoreComp == 3) {
        modalLose.style.display = 'block';
    }
}



