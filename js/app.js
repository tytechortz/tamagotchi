class Bison {
    constructor(hunger, sleepiness, boredom, age, name) {
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
        this.name = name;
    }
}

// instantiate class

const tatanka = new Bison( 0, 0, 0, 0, 'Tatanka');

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