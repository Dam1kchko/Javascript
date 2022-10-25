class Item {
    quantity;
    description;
    type;
    // Worlds 2022 Orb
    // 10 BE
    // KOFO KORVN ITKGIT Skin
    constructor ( item ){ // array
        // check for array lenght, (2) or more , if the latter check for quantity, otherwise equal it to 1
        if( typeof item[0] == "number"){
            this.quantity = item.shift();
            this.type = item.pop();
            this.description = item.join('');
        } else if( item.length == 2) {
            this.quantity = item.shift();
            this.type = item.pop();
        }
        else {
            this.quantity = 1;
            this.type = item.pop();
            this.description = item.join(' ');
        }
    }
}

module.exports = {
    Item
}