

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got click");
// }


var numberOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfButton; i++) 
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
      //event that trigger our click
      var buttonInnerHtml = this.innerHTML;
     
      MakeSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml);


    //     switch(buttonInnerHtml){
    //      case 'w' :
    //          var tom1 = new Audio('sounds/tom-1.mp3');
    //          tom1.play();  
    //         break;
    //         case 'a':
    //         var tom2 = new Audio('sounds/tom-2.mp3');
    //          tom2.play();
    //          break; 
    //          case 's':
    //         var tom3 = new Audio('sounds/tom-3.mp3');
    //          tom3.play();
    //          break; 
    //          case 'd':
    //         var tom4 = new Audio('sounds/tom-4.mp3');
    //          tom4.play();
    //          break; 
    //          case 'j':
    //          var snare = new Audio('sounds/snare.mp3');
    //          snare.play();
    //          break; 
    //          case 'k':
    //          var crash = new Audio('sounds/crash.mp3');
    //          crash.play();
    //          break; 
    //          case 'l':
    //          var kickBass = new Audio('sounds/kick-bass.mp3');
    //          kickBass.play();
    //          break; 
    //      default: console.log(buttonInnerHtml);
    //   }
     
    });
      
}


document.addEventListener("keydown", function(event){
    MakeSound(event.key);
    buttonAnimation(event.key);
})


// for(var i = 0; i < numberOfButton; i++) 
// {
//     document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event)
// {

   

//         var audio;
//         if (event.key === 'w' || event.key === 'W') {
//             audio = new Audio('sounds/tom-1.mp3');
//             audio.play();  
//         }
//         if (event.key === 'a' || event.key === 'A') {
//             audio = new Audio('sounds/tom-1.mp3');
//              audio.play();  
//         }
//         if (event.key === 's' || event.key === 'S') {
//             audio = new Audio('sounds/tom-1.mp3');
//              audio.play();  
//         }
//         if (event.key === 'd'|| event.key === 'D') {
//             audio = new Audio('sounds/tom-4.mp3');
//              audio.play(); 
//         }
//         if (event.key === 'j'|| event.key === 'J') {
//            audio = new Audio('sounds/snare.mp3');
//             audio.play();
//         }
//         if (event.key === 'k'|| event.key === 'K') {
//             audio= new Audio('sounds/crash.mp3');
//              audio.play();  
//         }
//         if (event.key === 'l' || event.key === 'L') {
//             audio= new Audio('sounds/kick-bass.mp3');
//             audio.play();
//         }
        
// });

// }


//another method 
function MakeSound(key){
    
        switch(key){
         case 'w' :
             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();  
            break;
            case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
             break; 
             case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break; 
             case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
             break; 
             case 'j':
             var snare = new Audio('sounds/snare.mp3');
             snare.play();
             break; 
             case 'k':
             var crash = new Audio('sounds/crash.mp3');
             crash.play();
             break; 
             case 'l':
             var kickBass = new Audio('sounds/kick-bass.mp3');
             kickBass.play();
             break; 
         default: console.log(buttonInnerHtml);
      }     
}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
 

}