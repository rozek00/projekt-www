const fs = require('fs');
const data = JSON.parse(fs.readFileSync('baza_postaci_klasyczny.json', 'utf8'));
class Characters 
{
    constructor(sprite, name, type, rarity, range, year_was_added) {
      this.sprite = sprite;
      this.name = name;
      this.type = type;
      this.rarity = rarity;
      this.range = range;
      this.year_was_added = year_was_added;
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const objects = {};
function Init()
{
    data.forEach((info, index) => {
        const character = new Characters(
            info.sprite, 
            info.name, 
            info.type, 
            info.rarity, 
            info.range, 
            info.year_was_added
        );
        objects[index] = character;
    });
    let chosen = getRandomInt(0,50);
    console.log(objects[chosen].name)
    console.log(objects[chosen].type)
    console.log(objects[chosen].rarity)
    console.log(objects[chosen].range)
    console.log(objects[chosen].year_was_added)
}