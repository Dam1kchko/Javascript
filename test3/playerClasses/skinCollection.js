
class Skin {
    name;
    orangeEssPrice;
    disenchantPrice;

    constructor (name,essPrice) {
        this.name = name;
        this.orangeEssPrice = essPrice;
        this.disenchantPrice = (1/5)*essPrice;
    }
}

class SkinCollection{
    skins = [];
}

module.exports = {
    SkinCollection,
    Skin,
}