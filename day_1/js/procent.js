var sum=0;
var currentProcent=0;
var maxLimit = 1000000000;

for (var j=0;j<=maxLimit;j++){
    sum+=j;

    var newProcent=Math.round((j/maxLimit)*100);
    if (newProcent > currentProcent) {
        postMessage('zadanie ukończono w '+newProcent+'%');
        currentProcent=newProcent;
    }
}
postMessage('suma wynosi '+sum);