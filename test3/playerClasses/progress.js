
class Progress {
    currentLevel = 0;
    currLvlExp = 0;
    levelUpRequirement = this.calculateRequirement();
    takenRewardsLevel = 0;

    calculateRequirement(level){
        if( level >= 0 && level < 10 ){
            return 300;
        } else if( level >= 10 && level < 20){
            return 400; 
        } else if( level >= 20 && level < 30) {
            return 500; 
        } else if( level >= 30 && level < 50){
            return 800; 
        } else if (level >= 50) {
            return 450;
        }
        return 300;
    }
}

module.exports = {
    Progress
}


// Create a class, containing player's level, level requirement and last level reward was taken
//  --- create a method for defining the level requirement, based on the player's current level