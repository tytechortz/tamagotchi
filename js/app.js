let time = 0;


class Bison {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
 
}

newBison = new Bison();  


$('#nameBison').on('click', (e) => {
        const $nameInput = $('input').val();
        newBison.name = $nameInput;
        $(e.currentTarget).parent().remove();
        $('body').append(`<div id="display"><h2>${newBison.name} the Bison </h2></div>`);
        $('.name').text(newBison.name)

        startGame();
    
    $("#nameBison").remove();

    });
const input = new Bison();



const $body = $('body');

//start game button
const startGame = () => {

   
$("#1").remove();


const countUp = () => {
    time++;
    if (time% 1 === 0) {
        newBison.hunger++;
         $(".hunger").html("");
         $(".hunger").append(newBison.hunger);
    }
    if (time% 1 === 0) {
        newBison.boredom++;
        $(".boredom").html("");
        $(".boredom").append(newBison.boredom);
    }
    if (time% 1 === 0) {
        newBison.sleepiness++;
        $(".sleepiness").html("");
        $(".sleepiness").append(newBison.sleepiness);
    }
    if (time%2 === 0) {
        newBison.age++;
        $(".age").html("");
        $(".age").append(newBison.age);
    }
    
}
setInterval(countUp, 2000);

       
const morph = () => {

    $(document).ready(function(e) {
        var width = $(document).width();
    
        function goRight() {
            $("#animate").animate({
            left: width
          }, 5000, function() {
             setTimeout(goLeft, 50);
          });
        }
        function goLeft() {
            $("#animate").animate({
            left: 0
          }, 5000, function() {
             setTimeout(goRight, 50);
          });
        }
    
        setTimeout(goRight, 50);
    });
    if(newBison.tiredness < 10 && newBison.hunger < 10 && newBison.boredom < 10) {
        $('#animate').attr('src', "running_bison.gif")
    }
    if(newBison.tiredness > 10 || newBison.hunger > 10 || newBison.boredom > 10)  {
        $('#animate').attr('src', "walking_bison.gif");
    }
    if(newBison.tiredness > 20 || newBison.hunger > 20 || newBison.boredom > 20)  {
        $('#run').append().attr('src', "idle_bison.gif");
        $('#animate').attr('src', "idle_bison.gif");
    } 
    if(newBison.tiredness > 30 || newBison.hunger > 30 || newBison.boredom > 30) {
        $('#animate').attr('src', "dead_bison.jpg");
       
    } 
}

setInterval(morph, 6000);
}

const death = () => {
        $('#animate').attr('src', "dead_bison.jpg");      
}
     
  
$(document).on('click', ".feed", function(){
    newBison.hunger-=5;   
})

$(document).on('click', ".rest", function(){
    newBison.sleepiness-=5;  
})

$(document).on('click', ".play", function(){
    newBison.boredom-=5;
})

$(() => {
    $('#1').on('click', startGame);
});




