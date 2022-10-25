const { Player } = require("./playerClasses/player.js");
const Goshko = new Player();

/* Shop Tests
        Goshko.buySomething('Worlds 2022','Antic Emperor Azir Skin');
        Goshko.buySomething('Worlds 2022','Grovel Lord Vi Skin');
        console.table(Goshko.skinCollection);
     - blueEss
        Goshko.buySomething('Worlds 2022','100 BE');
     - orangeEss
        Goshko.buySomething('Worlds 2022','750 OE');
     - mythicEss
        Goshko.buySomething('Worlds 2022','100 ME');
     - orbs
        Goshko.buySomething('Worlds 2022','Worlds 2022 Orb');
     - bags
        Goshko.buySomething('Worlds 2022','Worlds 2022 Bag');

     Tests
        console.table(Goshko.loot.essences);
        console.log(Goshko.loot.bags);
        console.log(Goshko.loot.orbs);

*/
/* Experience Tests

 Goshko.gainExperience(1000);
 console.log(Goshko.progress);

*/
/* Taking rewards

    Goshko.collectRewards();
    console.log(Goshko.currencies.tokens);
    Goshko.gainExperience(5000);
    Goshko.collectRewards();
    console.log(Goshko.currencies.tokens);
    console.log(Goshko.loot.essences.ME);
    console.log(Goshko.skinCollection);
*/
