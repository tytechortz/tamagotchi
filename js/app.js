class Bison {
    constructor(hunger, sleepiness, boredom, age, name) {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
}

// instantiate class

const tatanka = new Bison( 0, 0, 0, 0);

//start game button
const startGame = () => {
console.log('make start button');



//$body.append(<IMG SRC="idle_bison.gif"></IMG>);

const $body = $('body');
const $div = $('<div id="stats">STATS');
const $section = $('<section/>').prepend('<IMG SRC="idle_bison.gif"></IMG>');
$body.append($section);

console.log(tatanka);

$body.append($div);

for( var key in tatanka) {
const $article = $("<div/>");
$div.append($article);
const $h3 = $("<h3/>").text(key + " = " + tatanka[key]);
$article.append($h3);
}




};




// const $body = $('body');
// const $section = $('<section id="stats">STATS');

// $body.append($section);
// console.log(tatanka);
// for( var key in tatanka) {
//     const $article = $("<article/>");
//     $section.append($article);
//     const $h3 = $("<h3/>").text(key + " = " + tatanka[key]);
//     $article.append($h3);
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

//  }
$(() => {
    $('#1').on('click', startGame);
});