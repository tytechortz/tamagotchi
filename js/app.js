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
const $body = $('body');

const startGame = () => {
console.log('make start button');
//$body.append(<IMG SRC="idle_bison.gif"></IMG>);

const $body = $('body');
const $section = $('<section/>').prepend('<IMG SRC="idle_bison.gif"></IMG>');
$body.append($section);

console.log(tatanka);

for( var key in tatanka) {
    const $span = $("<span/>").attr('class', key).text(key + " = " + tatanka[key]);
    const $article = $("<article/>");
    $article.append($span);
    $body.append($article);
}
$("#1").remove();

};



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

