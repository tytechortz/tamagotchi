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
        $('.name').text(newBison.name)

        startGame();
    
    $("#nameBison").remove();

    });
    
    // const createName = (inputVal) => {
    //     $inputVal.append(createName);

    //     const $div = $('<div/>').addClass('name');
    //     const $h3 = $('<h3/>').text(inputVal + " The Bison");
    //     $div.append($h3);
    //     $body.append($div);
    // }
// instantiate class

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
    if(newBison.tiredness > 30 || newBison.hunger > 30 || newBison.boredom > 30) {
        death();    
        } else {
            console.log("STILL ALIVE")
        }
}
setInterval(countUp, 3000);

       
const morph = () => {
    if(newBison.tiredness <= 10 && newBison.hunger <= 10 && newBison.boredom <= 10) {
        $('#idle').attr('src', "running_bison.gif")
    }
    if(newBison.tiredness > 10 || newBison.hunger > 10 || newBison.boredom > 10)  {
        $('#idle').attr('src', "walking_bison.gif");
    }
    if(newBison.tiredness > 20 || newBison.hunger > 20 || newBison.boredom > 20)  {
        $('#idle').attr('src', "idle_bison.gif");
    }
    
    
}
setInterval(morph, 6000);
}

const death = () => {
        $('#idle').attr('src', "dying_bison.gif");
        setTimeout(() => {
        $('#idle').attr('src', "dead_bison.jpg");
    }, 7000)
}
        

    
    
$(document).on('click', ".feed", function(){
    newBison.hunger-=5;
    //console.log(`click worked ${tatanka.hunger}`);
    
})

$(document).on('click', ".rest", function(){
    newBison.sleepiness--;
    //console.log(`click worked ${tatanka.sleepiness}`);
    //$('.sleepiness').append(tatanka.sleepiness);
    
})

$(document).on('click', ".play", function(){
    newBison.boredom--;
    //console.log(`click worked ${tatanka.boredom}`);
    //$('.boredom').append(tatanka.boredom);
    
})



$(() => {
    $('#1').on('click', startGame);
});




//loops through object and makes a span with class for each vital stat element
// for( var key in tatanka) {
//     const $span = $("<span/>").attr('class', key).text(key + " = " + tatanka[key]);
//     const $div = $("<div/>").attr("class", "stats");
//     $div.append($span);
//     $body.append($div);
//}
//removes start button

// // instantiate classx

// let tatanka = new Bison();
// //const $body = $('body');
// //start game button
// const startGame = () => {

// //adds starting bison picture
// const $body = $('body');
// const $section = $('<section/>').prepend('<IMG SRC="idle_bison.gif"></IMG>');
// $body.append($section);

// //loops through object and makes a span with class for each vital stat element
// for( var key in tatanka) {
//     const $span = $("<span/>").attr('class', key).text(key + " = " + tatanka[key]);
//     const $div = $("<div/>").attr('class');
//     $article.append($span);
//     $body.append($article);
// }
// //removes start button
// $("#1").remove();

// //create div for buttons
// const $div = $('<div/>');
// $body.append($div);



// const $sleepButton = $('<button>/').text('Let the Bison Chill');
// $div.append($sleepButton);

// const $playButton = $('<button>/').text('Let the Bison Play');
// $div.append($playButton);

// };

// $(() => {
//     $('#1').on('click', startGame);
// });

//  $('button').on('click', () => {
//         const $input = $('input').val();
//         console.log($input);
//         createName($input);
    
//     $("#nameBison").remove();
//     });
    
    // const createName = (inputVal) => {
    //     .Bison.name.append(createName);

    //     // const $div = $('<div/>').addClass('name');
    //     // const $h3 = $('<h3/>').text(inputVal + " The Bison");
    //     // $div.append($h3);
    //     // $body.append($div);
    // }
