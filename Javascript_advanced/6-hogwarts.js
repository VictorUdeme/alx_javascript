let studentHogwarts = (function () {
    // The Private Vars
    let privateScore = 0;
    let name = null;

    // The private method
    function changeScoreBy(points) {
        privateScore +=points;
    }

    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },

        penalizeStudent: function () {
            changeScoreBy(-1);
        },

        getScore: function () {
            return `${name}: ${privateScore}`;
        },
    };
}) ();

// An instance for Harry

let harry = Object.create(studentHogwarts);
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// An instance for Draco

let draco = Object.create(studentHogwarts);
harry.setName('Draco');
harry.rewardStudent();
harry.penalizeStudent();
harry.penalizeStudent();
harry.penalizeStudent();
console.log(draco.getScore());