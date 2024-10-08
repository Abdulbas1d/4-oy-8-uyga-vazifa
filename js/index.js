//////////----- For va ternary operatorga oid misollar -----//////////


// 1-Misol

// Masala: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 5 ga bo‘linadigan bo‘lsa, "5 ga bo‘linadi", 3 ga bo‘linadigan bo‘lsa, "3 ga bo‘linadi", ikkalasiga ham bo‘linadigan bo‘lsa, "5 va 3 ga bo‘linadi" deb ternary operator yordamida aniqlang va natijani chop eting.

// for (let i = 1; i <= 50; i++) {
//     i % 3 == 0 && i % 5 == 0 ? console.log("5 va 3 ga bo'linadi") : console.log("5 va 3 ga bo'linmaydi");
//     i % 5 == 0 ? console.log("5 ga bo'linadi") : console.log("5 ga bo'linmaydi");
//     i % 3 == 0 ? console.log("3 ga bo'linadi") : console.log("3 ga bo'linmaydi");
// }




// 2-Misol

// Masala: 1 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 30 va 70 orasidagi juft sonlarning yig‘indisini hisoblang. Har bir son uchun bu son juft yoki toq ekanligini ternary operator yordamida aniqlang.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (30 <= i && 70 >= i) {
//         i % 2 == 0 ? console.log("30 va 70 orasidagi juft sonlar: " + i) : console.log("Bu toq son");
//     }
// }




// 3-Misol

// Masala: -20 dan 20 gacha bo‘lgan sonlar orasidan faqat musbat va toq sonlarni aniqlang. Ternary operator yordamida son musbat va toq bo‘lsa, ularni sanang va nechta musbat va toq son borligini natijada chiqaring.

// let musbatNumber = 0;
// let toqNumber = 0;
// let start = -20;
// let end = 20;
// for (let i = start; i <= end; i++) {
//     if (i > 0) {
//         musbatNumber++
//         i % 2 == 1 ? toqNumber++ : toqNumber
//     }
// }

// console.log("Bu sonlar orasida " + musbatNumber + " ta musbat son bor");
// console.log("Bu sonlar orasida " + toqNumber + " ta toq son bor");




// 4-Misol

// Masala: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 2 yoki 7 ga bo‘linadigan bo‘lsa, bu son "maxsus son" deb belgilang. Har bir sonni ternary operator yordamida tekshirib, natijani chop eting.

// for (let i = 1; i <= 100; i++) {
//     i % 2 == 0 || i % 7 == 0 ? console.log("Bu son maxsus son") : console.log("Bu son maxsus son emas");
// }








//////////----- Break continue ga oid misollar -----//////////



// 1-Misol

// Masala: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 25 ga teng bo‘lsa, tsiklni `break` operatori yordamida to‘xtating. Bunga qadar bo‘lgan barcha sonlarni chop eting.

// for (let i = 1; i <= 100; i++) {
//     if (i == 25) {
//         break
//     }
//     console.log(i);
// }




// 2-Misol

// Masala: 1 dan 20 gacha bo‘lgan sonlarni tekshiring. Agar son juft bo‘lsa, `continue` operatori yordamida uni o‘tkazib yuboring va faqat toq sonlarni chop eting.

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         continue
//     } else {
//         console.log("1 dan 20 gacha sonlarni faqat toqlari: " + i);
//     }
// }




// 3-Misol

// Masala: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 30 dan katta bo‘lsa, tsiklni `break` operatori yordamida to‘xtating. Faqat 10 va 30 orasidagi sonlarni chop eting, qolganlarni `continue` bilan o‘tkazib yuboring.

// for (let i = 1; i <= 50; i++) {
//     if (i > 30) {
//         break
//     }

//     if (i >= 10 && i <= 30) {
//         console.log("10 va 30 sonlarini orasidagi sonlar: " + i);
//     } else {
//         continue
//     }
// }




// https://docs.google.com/document/d/1cvc8dgbqIAtOoNAxgYmAU6o6abbM1ea-fO2TXxsDIR0/edit