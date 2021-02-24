var age=17;
var name="duaa";
var favcolor="green";

var ageuserinput=prompt("try to guess the age ");
var nameuserinput=prompt("try to guess the name");
var favcoloruserinput=prompt("what do you think is my fav color?");
var x =prompt("what is your name");

if (ageuserinput >18){
    alert("welcome to you " + x);
}else{
    alert("hello " + x)
}
var marckwelbergMadeFacebook=prompt("try to guess who invent facebook? ")
while (marckwelbergMadeFacebook != "mark"){
    alert('wrong!!')
    marckwelbergMadeFacebook=prompt("try to guess who invent facebook? ")
   
} 
var userinp = prompt('how many birds you want?')
function newimg(){
    for(var i =0; i<userinp; i++){
        document.write("<img src='https://media.gettyimages.com/photos/social-media-icons-internet-app-application-picture-id1136415038?s=2048x2048'   />");
    }
}
newimg()

// function  avgCalculator(firstGrade,secondgradfe,thirdgrade){
//     var sum=firstGrade+secondgrade+thirdGrade;
//     var avg= sum/3;
//     alert("your avarage is "+avg);
//     var counter=0;
//     var firstGrade=0;
//     var secondgrade=0;
//     var thirdGrade=0;
//     while(counter<3){
//         if (counter==0){
//             firstGrade =prompt("please enter the first grade :");

//         }else if (counter==1){
//             secondgrade=prompt("please enter the second grade :");
//         }else {
//             thirdgrade=prompt("please enter the third grade: ");
//         }
//     }
// }avgCalculator(firstgrade,secondgrade,thirdGrade);
