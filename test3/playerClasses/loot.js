const { SkinCollection } = require("./skinCollection");

class Accessories {
    icons = [];
    emotes = [];
}

class Orb {
    'Eastern 2022' = 0;
    'Worlds 2022' = 0;
    'Winter 2022' = 0;
}

class Bags {
    'Eastern 2022' = 0;
    'Worlds 2022' = 0;
    'Winter 2022' = 0;
}
class Essence {
    BE = 0;
    OE= 0;
    ME = 0;
}

class Loot {
    orbs = new Orb;
    bags = new Bags;
    lootedSkins = new SkinCollection;
    accessories = new Accessories;
    essences = new Essence;
}

module.exports = {
    Loot
}
