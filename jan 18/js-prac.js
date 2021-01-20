// Class activity1
// Declare variables called 'city' 'borough'  'area' and 'population', assign their values according to their own borough.
// log their values to the console



// const city = "New York City"
// var borough = "Queens"
// let area = "New York"
// let population = Number(150000)

// console.log("City: ", city)
// console.log("borough: ", borough)
// console.log("Area: ", area)
// console.log("Population: ", population)


// let plate = pizza
// console.log(plate)

// firstname = "shahid"
// console.log(firstname)



// 1. Store Lucas's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula(you can even implement both
// versions)
// 3. Create a Boolean variable 'lucasHigherBMI' containing information about
// whether Lucas has a higher BMI than John.

// Test data:
// § Data 1: Lucas weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
// m tall.
// § Data 2: Lucas weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
// m tall.

let lucus_height, lucus_weight, lucas_BMI, John_height, John_weight, John_BMI

console.log("Data 1:")
console.log("Data 1: Lucas weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.")

lucus_weight = Number(78)
lucus_height = Number(1.69)
lucas_BMI = lucus_weight / lucus_height ** 2
console.log("lucas BMI:", lucas_BMI)

John_weight = Number(92)
John_height = Number(1.95)
John_BMI = John_weight / John_height ** 2
console.log("John BMI:", John_BMI)

console.log("Lucas has a higher BMI than John.", lucas_BMI > John_BMI,"!")

console.log("Data 2:")
console.log("Lucas weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.")

lucus_weight = Number(95)
lucus_height = Number(1.88)
lucas_BMI = lucus_weight / lucus_height ** 2
console.log("lucas BMI:", lucas_BMI)

John_weight = Number(85)
John_height = Number(1.76)
John_BMI = John_weight / John_height ** 2
console.log("John BMI:", John_BMI)

console.log("Lucas has a higher BMI than John.", lucas_BMI > John_BMI,"!")