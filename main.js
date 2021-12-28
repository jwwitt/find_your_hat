const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this.field = field;
    }

    print(self) {
        let string_row = "";
        for (let row of this.field) {
            for (let item of row) {
                string_row += item;
            }
            console.log(string_row);
            string_row = '';
        }
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

myField.print();

