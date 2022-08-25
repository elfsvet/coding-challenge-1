// calculate body mass index.
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markHigherBMI, markBMI, johnBMI;

markBMI = markMass / markHeight ** 2
johnBMI = johnMass / johnHeight ** 2

markHigherBMI = markBMI > johnBMI

console.log(`Mark's weight is ${markMass} kg and height is ${markHeight} meters. Mark's BMI is ${markBMI}.`)
console.log(`John's weight is ${johnMass} kg and height is ${johnHeight} meters. John's BMI is ${johnBMI}.`)
console.log(`Mark is bigger than John : ${markHigherBMI}`)

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2
johnBMI = johnMass / johnHeight ** 2

markHigherBMI = markBMI > johnBMI

console.log(`Mark's weight is ${markMass} kg and height is ${markHeight} meters. Mark's BMI is ${markBMI}.`)
console.log(`John's weight is ${johnMass} kg and height is ${johnHeight} meters. John's BMI is ${johnBMI}.`)
console.log(`Mark is bigger than John : ${markHigherBMI}`)