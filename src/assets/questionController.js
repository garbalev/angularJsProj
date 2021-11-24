myApp.controller('QuestionController', function($scope) {
     
    $scope.question={
        text: 'Какой js-фреймворк лучше?',
        answers: 
        [{
            text: 'Angular',
            author: 'User1',
            rate:2
        },{
            text: 'React',
            author: 'User2',
            rate:10
        },{
            text: 'Vue',
            author: 'User3',
            rate:5
        }]
    };
     
    $scope.voteUp = function (answer){
        answer.rate++;
        $scope.questColorClass = "questselectedcolor";
    };
    $scope.voteDown = function (answer){
        answer.rate--;
        $scope.questColorClass = "questcolor"
    };
    $scope.questColorClass= "questcolor";
});