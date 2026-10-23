function multiplication(){
    let x = document.getElementById("num").value;
    for(let i = 1; i <= 10; i++){
        let tag = document.createElement("p")
        tag.innerHTML = `${x} * ${i} = ${x*i}`
        document.getElementById("div").appendChild(tag)
    }
}


var startColors = [];

function makeButtons(){
    for(var i = 0; i < 10; i++){
        var r = Math.floor (Math.random() * 256);
        var g = Math.floor (Math.random() * 256);
        var b = Math.floor (Math.random() * 256);
        var color = "rgb(" + r + "," + g + "," + b + ")"

        var btn = document.createElement("button");
        btn.innerHTML = "button" + (i + 1);
        btn.style.color = color;
        btn.className = "colorBtn";
        document.getElementById("buttons").appendChild(btn);

        startColors.push(color);
    }
}
makeButtons();

function changeColor(){
    var choice = document.getElementById("colors").value;
    var buttons = document.getElementsByClassName("colorBtn");

    for(var i = 0; i < buttons.length; i++){
        if(choice == "red"){
            buttons[i].style.color = "red"
        }
        else if(choice == "green"){
            buttons[i].style.color = "green"
        }
        else if(choice == "blue"){
            buttons[i].style.color = "blue"
        }
        else if(choice == "random"){
            var r = Math.floor (Math.random() * 256);
            var g = Math.floor (Math.random() * 256);
            var b = Math.floor (Math.random() * 256);
            var color = "rgb(" + r + "," + g + "," + b + ")"
            buttons[i].style.color = color
        }
        else if(choice == "reset"){
           buttons[i].style.color = startColors[i];
        }
    }
}