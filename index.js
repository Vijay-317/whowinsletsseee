var randomNumber1=Math.random();
randomNumber1=Math.floor(6*randomNumber1)+1;
var randomImagesource= "Dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

var randomNumber2=Math.random();
randomNumber2=Math.floor(6*randomNumber2)+1;
var randomImagesource2= "Dice"+randomNumber2+".png";

var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImagesource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Riya's Chomu wins!";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's Tie!!Refresh again";
}
else{
    document.querySelector("h1").innerHTML="Vijay's chomu wins!";
}