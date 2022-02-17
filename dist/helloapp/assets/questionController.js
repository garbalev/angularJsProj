myApp.controller('QuestionController', function($scope) {
     
    $scope.question={
        text: 'Какой js-фреймворк лучше?',
        answers: 
        [{
            text: 'Anuglar is the best',
            author: 'User1',
            rate:4
        },{
            text: 'React is much better than Anulgar',
            author: 'User2',
            rate:3
        },{
            text: 'Vue of course',
            author: 'User3',
            rate:8
        },{
            text: 'React and Angural',
            author: 'User4',
            rate:15
        }]
    };
    $scope.sortparam='-rate';
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

myApp.filter('formatAngular', function(){
    return function(text){
        if(/\b[angular]+\b/gi.test(text)){
            return text.replace(/\b[angular]+\b/gi, 'Angular');
        }
        else{
            return text;
        }
    }
})