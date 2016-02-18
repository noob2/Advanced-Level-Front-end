var score = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

function ScoreModificator(array){

    var array = array.filter(FilterValidScore);

    var downgradedScore = array;
    for(var i = 0; i<downgradedScore.length;i++){
        downgradedScore[i] -= parseFloat((20.0 / 100) * downgradedScore[i]);
    }

    downgradedScore.sort(function (a, b) {
        return a - b
    });

    console.log(downgradedScore);
}

function FilterValidScore(array) {
    return array > 0 && array <= 400;
}

ScoreModificator(score);

