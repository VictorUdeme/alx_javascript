function StudentHogwarts() {
    
    // The provate vars
    let privateScore = 0;
    let name = null;

    // The private methods
    function changeScoreBy(points) {
        privateScore += points;
    }

    this.setName = function (newName) {
        name = newName;
    };

    this.rewardStudent = function () {
        changeScoreBy(1);
    };

    this.penalizeStudent = function () {
        changeScoreBy(-1);
    };

    this.getScore = function () {
        return `${name}: ${privateScore}`;
    };
}

// An instance for Harry
let harry = new StudentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// An instance for Draco
let draco = new StudentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());