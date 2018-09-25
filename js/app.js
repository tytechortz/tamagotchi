class Bison {
    constructor(hunger, sleepiness, boredom, age, name) {
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
}

// instantiate class

const tatanka = new Bison( 0, 0, 0, 0);

const $body = $('body');
const $section = $('<section id="stats">STATS');

$body.append($section);
console.log(tatanka);
for( var key in tatanka) {
    const $article = $("<article/>");
    $section.append($article);
    const $h3 = $("<h3/>").text(key + " = " + tatanka[key]);
    $article.append($h3);
}

$('button').on('click', () => {
    const $input = $('input').val();
    console.log($input);
    createName($input);
});

const createName = (inputVal) => {
    const $div = $('<div/>').addClass('name');
    const $h1 = $('<h1/>').text(inputVal + " The Bison");
    $section.append($h1);


    
}
