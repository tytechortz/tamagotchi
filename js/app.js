class Bison {
    constructor() {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
    
    }

// instantiate class

let tatanka = new Bison();

//start game button
const startGame = () => {
const $body = $('body');
const $section = $('<section/>').prepend('<IMG SRC="idle_bison.gif"></IMG>');
$body.append($section);



$("#1").remove();

};
let time = 0;

function countUp() {
    console.log(time++);
}
setInterval(countUp, 1000);

$(document).on('click', ".feed", function(){
    tatanka.hunger++;
    console.log(`click worked ${tatanka.hunger}`);
    $('.hunger').append(tatanka.hunger);
})

$(document).on('click', ".rest", function(){
    tatanka.sleepiness++;
    console.log(`click worked ${tatanka.sleepiness}`);
    $('.sleepiness').append(tatanka.sleepiness);
})

$(document).on('click', ".play", function(){
    tatanka.boredom++;
    console.log(`click worked ${tatanka.boredom}`);
    $('.boredom').append(tatanka.boredom);
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

// //create buttons
// const $feedButton = $('<button>/').text('Feed the Bison').on('click', () => {
//     console.log('click works');
//     tatanka.hunger++;
//     console.log(tatanka.hunger);
// });
// $div.append($feedButton); 

// const $sleepButton = $('<button>/').text('Let the Bison Chill');
// $div.append($sleepButton);

// const $playButton = $('<button>/').text('Let the Bison Play');
// $div.append($playButton);

// };

// $(() => {
//     $('#1').on('click', startGame);
// });


