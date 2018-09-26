
const $body = $('body');
//start game button
const startGame = () => {

//adds starting bison picture
const $body = $('body');
const $section = $('<section/>').prepend('<IMG SRC="idle_bison.gif"></IMG>');
$body.append($section);

//loops through object and makes a span with class for each vital stat element
for( var key in tatanka) {
    const $span = $("<span/>").attr('class', key).text(key + " = " + tatanka[key]);
    const $article = $("<article/>");
    $article.append($span);
    $body.append($article);
}
//removes start button
$("#1").remove();

//create div for buttons
const $div = $('<div/>');
$body.append($div);

//create buttons

const $feedButton = $('<button>/').text('Feed the Bison').on('click', tatanka.feedBison());
$div.append($feedButton); 

const $sleepButton = $('<button>/').text('Let the Bison Chill');
$div.append($sleepButton);

const $playButton = $('<button>/').text('Let the Bison Play');
$div.append($playButton);

};


class Bison {
    constructor() {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
    feedBison(){
        this.hunger++;
    }
}

// instantiate class

const tatanka = new Bison();



// $(() => {
//     $('#feed').on('click', feedBison);
//     $('#sleep').on('click', sleepBison);
//     $('play').on('click', playBison);
// });



// const feedBison = () => {
//     $('#hunger'++);
// }
// $('button').on('click', () => {
//     const $input = $('input').val();
//     console.log($input);
//     createName($input);

// });

// const createName = (inputVal) => {
//     const $div = $('<div/>').addClass('name');
//     const $h1 = $('<h1/>').text(inputVal + " The Bison");
//     $section.append($h1);

 
$(() => {
    $('#1').on('click', startGame);
});


