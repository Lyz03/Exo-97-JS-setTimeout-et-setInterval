// part 1
document.getElementById('timeout').addEventListener("click", function () {
    setTimeout(function () {
        let newDiv = document.createElement('div');
        let div = document.getElementById('timeout-div')
        newDiv.style.height = '30px';
        newDiv.style.width = '30px';
        newDiv.style.border = '1px solid black';
        div.innerHTML += "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        div.appendChild(newDiv);
    }, 2000);
})

// part 2
let a = 0;

document.getElementById('interval-start').addEventListener("click", function () {
    let interval = setInterval( () => {
        a +=60
        let div = document.getElementById('interval-div');
        div.innerText += a.toString() + ', ';
    }, 60000);

    document.getElementById('interval-stop').addEventListener("click", function () {
        clearInterval(interval)
    });
});


