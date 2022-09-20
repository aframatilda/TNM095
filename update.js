
let fishes = [];
function setup() {
    
    for(let i = 0; i < 2; ++i)
    fishes.push(new Fish(new Position(300 + 100*i, 300), 20 + Math.random() * 10, 1));
}

function update() {

    for(let i = 0; i < fishes.length - 1; ++i) {
        for(let q = i + 1; q < fishes.length; ++q) {
            fishes[i].collision(fishes[q])
        }
    }
    fishes.forEach(fish => fish.tick());
    fishes.forEach(fish => fish.draw());

    if(key.d == "keydown")
        fishes[0].angle += .1;
    if(key.a == "keydown")
        fishes[0].angle -= .1;
    if(key.w == "keydown")
        fishes[0].swim(.05);
}