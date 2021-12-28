const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.start = {
            x: 0,
            y: 0
        };
        this.hat_position = {
            x: 0,
            y: 0
        };
        this.x_location = 0;
        this.y_location = 0;
    }

    // Print the field to the console
    print() {
        console.log('--------------------------------------------');
        let string_row = "";
        for (let row of this.field) {
            for (let item of row) {
                string_row += item;
            }
            console.log(string_row);
            string_row = '';
        }
    }

    // Get input from the user
    getInput() {
        const input = prompt('Which way would you like to go? ').toUpperCase();
        switch (input) {
            case 'U':
                this.y_location -= 1;
                break;
            case 'D':
                this.y_location += 1;
                break;
            case 'L':
                this.x_location -= 1;
                break;
            case 'R':
                this.x_location += 1;
            default:
                console.log('Must enter U, D, L, or R...');
                this.getInput();
                break;

        }
    }

    // Generate the field given the current game state
    static generateField(length, width, holes_percentage) {
        const newField = Array(length);
        for (let i = 0; i < length; i++) {
            newField[i] = Array(width).fill(fieldCharacter);
        }
        return newField;
    }
}

const myField = new Field(Field.generateField(10, 5, 0.2), true);
console.log(myField.field);
myField.getInput();
myField.print();



