function wistTnow() {
    console.log(`${new Date().getHours}:${new Date().getMinutes}:${new Date().getSeconds}`);
};

function abcNow() {
    console.log("abcdefghijklmnopqrstuvwxyz");
};

function piE() {
    console.log(3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679)
};

function wistDnow() {
    console.log(`${new Date().getMonth}/${new Date().getDate}/${new Date().getFullYear}`);
};

class CarBrand {
    constructor(brand, year) {
        this.name = brand;
        this.year = year;
    };

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    };
};

let python = {
    print: (string) => console.log(string),
    input: (string) => prompt(string)   
};

class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    };
};

function hearAudio(audiolink){
    audiolink.play();
};

function stopAudio(audiolink){
    audiolink.pause();
};

function 

export { wistTnow, abcNow, piE, wistDnow, CarBrand, python, Person};