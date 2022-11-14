class Message {
    constructor(author, text) {
        this.author = author;
        this.text = text;
        this.sendDate = new Date();

    }

    toString() {
        return `${this.sendDate.getHours()}:${this.sendDate.getMinutes()} ${this.author}: ${this.text} `;
    }
}

class Messenger extends Message {
    constructor(author, text) {
        super(author, text)
        this.getValues = [];

    } send(author, text) {
        this.author = author;
        this.text = text;
        this.getValues.push(`${this.sendDate.getHours()}:${this.sendDate.getMinutes()} ${this.author}:${this.text} `)


    }

    show_history() {
        this.getValues.forEach(element => {
            console.log(element);
        })
    }
}

let messenger = new Messenger();
messenger.send('Mecid', 'Ders oxuyur?');
messenger.send('Vusal', 'Sabah bize gelirsen?')
messenger.show_history();
