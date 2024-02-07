
// function calculateMoney(ticketSale) {
//     if (ticketSale >= 0) {
//         profit = (ticketSale*120)-(500+(8*50));
//         return profit;
//     }
//     else{
//         return(`The input ${ticketSale} is invalid number`)
//     }
// }


// function checkName(name) {

//     if (typeof name === "string") {
//         name = name.toLowerCase()
//         if (name.endsWith("a") || name.endsWith("y") || name.endsWith("i") || name.endsWith("e") || name.endsWith("o") || name.endsWith("u") || name.endsWith("w")) {
//             return ('good name');
//         }
//         else {
//             return ("bad name")
//         }
//     }
//     else {
//         return ('Invalid');
//     }
// }




// function deleteInvalids(array) {
//     let newArray = [];
//     if (Array.isArray(array)) {
//         for (const number of array) {
//             if (number /1 === number) {
//                 newArray.push(number);
//             }
//         }
//         return newArray;
//     }
//     else {
//         return ('Invaild Array')
//     }
// }



// function password(obj) {
//     birthYearInString = obj.birthYear.toString()
//     birthYearSize = birthYearInString.length
//     if (obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')&& birthYearSize>=4) {
//         let pass = `${obj.siteName.replace(obj.siteName[0], obj.siteName[0].toUpperCase())}#${obj.name}@${obj.birthYear}`;
//         return (pass)
//     }
//     else {
//         return ('invalid')
//     }
// }



