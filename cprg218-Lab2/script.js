let bear = document.getElementById("bear");
let elk = document.getElementById("elk");
let sheep = document.getElementById("sheep");
let moose = document.getElementById("moose")
let wolf = document.getElementById("wolf");

let image = document.getElementById("image");
let words = document.getElementById("descritption");

sheep.addEventListener("click", function()
{
    image.src = "Images/sheep.webp";
    image.alt = "Sheep";
   
    sheep.style.backgroundColor = "#97bf04"
    wolf.style.backgroundColor = "#d9043d";
    bear.style.backgroundColor = "#d9043d";
    moose.style.backgroundColor = "#d9043d";
    elk.style.backgroundColor = "#d9043d";
})

wolf.addEventListener("click", function()
{
    image.src = "Images/wolf.webp";
    image.alt = "Wolf";
   
    wolf.style.backgroundColor = "#97bf04";
    sheep.style.backgroundColor = "#d9043d";
    bear.style.backgroundColor = "#d9043d";
    moose.style.backgroundColor = "#d9043d";
    elk.style.backgroundColor = "#d9043d";
})
bear.addEventListener("click", function()
{
    image.src = "Images/bear.webp";
    image.alt = "bear";
    
    bear.style.backgroundColor = "#97bf04";
    sheep.style.backgroundColor = "#d9043d";
    wolf.style.backgroundColor = "#d9043d";
    moose.style.backgroundColor = "#d9043d";
    elk.style.backgroundColor = "#d9043d";
})
elk.addEventListener("click", function()
{
    image.src = "Images/elk.webp";
    image.alt = "Elk";
    
    elk.style.backgroundColor = "#97bf04";
    sheep.style.backgroundColor = "#d9043d";
    bear.style.backgroundColor = "#d9043d";
    moose.style.backgroundColor = "#d9043d";
    wolf.style.backgroundColor = "#d9043d";
})
moose.addEventListener("click", function()
{
    image.src = "Images/moose.webp";
    image.alt = "Moose";
    
    moose.style.backgroundColor = "#97bf04";
    sheep.style.backgroundColor = "#d9043d";
    bear.style.backgroundColor = "#d9043d";
    elk.style.backgroundColor = "#d9043d";
    wolf.style.backgroundColor = "#d9043d";
})