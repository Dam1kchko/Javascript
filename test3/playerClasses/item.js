class Item {
    quantity;
    description;
    type;
    // Worlds 2022 Orb
    // 10 BE
    // KOFO KORVN ITKGIT Skin
    constructor ( item ) {
        if( Number.isNaN(+item[0]) ){
            this.quantity = 1;
            this.type = item.pop();
            this.description = item.join(' ');
        }
        else if( typeof +(item[0]) == "number"){
            this.quantity = Number(item.shift());
            this.type = item.pop();
            this.description = item.join(' ');
        }else if( item.length == 2) {
            this.quantity = +item.shift();
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