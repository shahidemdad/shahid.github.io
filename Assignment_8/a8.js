function winnerFunction(netsAvgScore, knicksAvgScore){
    if(netsAvgScore > knicksAvgScore && netsAvgScore >= 100)
      console.log(`The nets won with a score of ${netsAvgScore}`)
  
    else if(netsAvgScore < knicksAvgScore && knicksAvgScore >= 100)
      console.log(`The knicks won with a score of ${knicksAvgScore}`)
  
    else if(netsAvgScore = knicksAvgScore && knicksAvgScore >= 100 && netsAvgScore >= 100)
      console.log("There was a draw!")
    else
      console.log("no team wins, not enough points!")
}
  
function tipFunctions(billValue){
    switch (billValue) {
        case billValue >= 30 && billValue <= 300:
        console.log(`The bill was ${billValue}, the tip was ${billValue * .15}, and the total value ${billValue + (billValue * .15)}`)
        break;
        default:
            console.log(`The bill was ${billValue}, the tip was ${billValue * .2}, and the total value ${billValue + (billValue * .2)}`)
    }
}
  
function celsiusToFarenheit(temperatureC){
    console.log(`${temperatureC}°C is ${(temperatureC * 9) / 5 + 32}°F`)
}
function farenheitToCelsius(temperatureF) {
    console.log(`${temperatureF}°F is ${(temperatureF - 32) * 5 / 9}`)
}

//Part A
let netsAvgScore = (96 + 108 + 89)/3
let knicksAvgScore = (88 + 91 + 110)/3
winnerFunction(netsAvgScore, knicksAvgScore)

netsAvgScore = (97 + 112 + 101)/3
knicksAvgScore = (109 + 95 + 123)/3
winnerFunction(netsAvgScore, knicksAvgScore)

netsAvgScore = (97 + 112 + 101)/3
knicksAvgScore = (109 + 95 + 106)/3
winnerFunction(netsAvgScore, knicksAvgScore)

//Part B
let billValue = 275
tipFunctions(billValue)
billValue = 28
tipFunctions(billValue)
billValue = 430
tipFunctions(billValue)

//Part C
let temperatureC = 90
celsiusToFarenheit(temperatureC)
let temperatureF = 86
farenheitToCelsius(temperatureF)