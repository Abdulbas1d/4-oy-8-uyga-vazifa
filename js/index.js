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








//////////----- Switch case ga oid misollar -----//////////






// 1-Misol

// Masala: 1 dan 7 gacha bo‘lgan raqamlarni kiritganingizda, mos ravishda haftaning kunini (`1 - Dushanba`, `2 - Seshanba` va hokazo) switch...case orqali aniqlang va chop eting.

// let num = +prompt("Hafta kunlarni birini kiriting!");
// switch (num) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("Bunday hafta kuni yo'q!");
//         break;
// }




// 2-Misol

// Masala: 1 dan 12 gacha bo‘lgan raqamlarni kiritganingizda, bu raqam qaysi oyga mos kelishini aniqlang va bu oy qaysi faslga tegishli ekanligini switch...case orqali chop eting (`1 - Qish`, `5 - Bahor` va hokazo).

// let num = +prompt("Fasl oylaridan birini kiriting!");
// switch (num) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//         console.log("Bunday oy mavjud emas");
//         break;
// }




// 3-Misol

// Masala: 1 dan 5 gacha bo‘lgan raqamlarni kiriting. Ushbu raqamga mos ravishda bahoni (`1 - Juda yomon`, `2 - Yomon`, `3 - Qoniqarli`, `4 - Yaxshi`, `5 - A'lo`) switch...case orqali aniqlang va chop eting.

// let num = +prompt("Bahoni kiriting!");
// switch (num) {
//     case 1:
//         console.log("Juda yomon");
//         break;

//     case 2:
//         console.log("Yomon");
//         break;

//     case 3:
//         console.log("Qoniqarli");
//         break;

//     case 4:
//         console.log("Yaxshi");
//         break;

//     case 5:
//         console.log("A'lo");
//         break;

//     default:
//         console.log("Bunday baholash tizimi mavjud emas");
//         break;
// }




// 4-Misol

// Masala: Tariflar rejasiga ko‘ra, foydalanuvchi 1 dan 3 gacha raqam kiritsin. `1 - Ekonom`, `2 - Standart`, `3 - Premium` tariflaridan birini tanlaganini switch...case orqali aniqlang va tarif nomini chop eting.

// let num = +prompt("Ta'rif raqamini kiriting!");
// switch (num) {
//     case 1:
//         console.log("Ekonom");
//         break;

//     case 2:
//         console.log("Standart");
//         break;

//     case 3:
//         console.log("Premium");
//         break;

//     default:
//         console.log("Bunday ta'rif hozircha mavjud emas");
//         break;
// }




// 5-Misol

// Masala: Foydalanuvchi 1 dan 4 gacha bo‘lgan raqamlarni kiritsin. Har bir raqamga mos ravishda bir meva tanlang (`1 - Olma`, `2 - Apelsin`, `3 - Banan`, `4 - Uva`) va ularning narxini switch...case orqali chop eting.

// let fruits = +prompt("Mevalarga oid raqamni kiriting!");
// switch (fruits) {
//     case 1:
//         console.log("Olma (Olmaning narxi: 20000so'm)");
//         break;

//     case 2:
//         console.log("Apelsin (Apelsinning narxi: 25000so'm)");
//         break;

//     case 3:
//         console.log("Banan (Bananning narxi: 25000so'm)");
//         break;

//     case 4:
//         console.log("Uva (Uvaning narxi: 40000so'm)");
//         break;

//     default:
//         console.log("Hozircha bu raqamda mevalar mavjud emas lekin tez orada kelishi mumkin");
//         break;
// }




// 6-Misol

// Masala: Foydalanuvchi 1 dan 3 gacha bo‘lgan variantlardan birini kiritsin. `1 - Parolni tiklash`, `2 - Parolni o'zgartirish`, `3 - Chiqish` variantlarini switch...case orqali aniqlang va tegishli xabarni chop eting.

// let num = +prompt("Foydalanuvchi parolini oid raqamini kiriting");
// switch (num) {
//     case 1:
//         console.log("Parolni tiklash");
//         break;

//     case 2:
//         console.log("Parolni o'zgartirish");
//         break;

//     case 3:
//         console.log("Chiqish");
//         break;

//     default:
//         console.log("Bunday raqam mavjud emas");
//         break;
// }








//////////----- While, do…while ga oid misollar -----//////////





// 1-Misol    // Ikki xil yo'l bilan

// Masala: 1 dan 10 gacha bo‘lgan sonlarni `while` sikli yordamida chiqarib bering.

// (while)

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// (do...while)

// let i = 1;
// do {
//     console.log(i);
//     i++
// } while (i <= 10);





// 2-Misol    // Ikki xil yo'l bilan

// Masala: 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda `while` sikli yordamida chop eting.

// (While)

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--
// }

// (do...while)

// let i = 10;
// do {
//     console.log(i);
//     i--
// } while (i >= 1);





// 3-Misol    // Ikki xil yo'l bilan

// Masala: Foydalanuvchi musbat son kiritmaguncha, undan son kiritishni talab qiladigan `while` sikli tuzing.

// (While)

// let num = -1;
// while (num <= 0) {
    // num = +prompt("Musbat son kiriting:");
    // if (isNaN(num)) {
    //     console.log("Bu son emas! Musbat son kiriting.");
    //     num = -1;
    // } else if (num <= 0) {
    //     console.log("Musbat son kiritishingiz kerak.");
    // }
// }
// console.log("Siz musbat son kiritingiz: " + num);

// (do...while)

// let num = -1;
// do {
//     num = +prompt("Musbat son kiriting:");
//     if (isNaN(num)) {
//         console.log("Bu son emas! Musbat son kiriting.");
//         num = -1;
//     } else if (num <= 0) {
//         console.log("Musbat son kiritishingiz kerak.");
//     }
// } while (num <= 0);

// console.log("Siz musbat son kiritingiz: " + num);





// 4-Misol    // Ikki xil yo'l bilan

// Masala: 1 dan 20 gacha bo‘lgan juft sonlarni `while` sikli yordamida chiqarib bering.

// (While)

// let i = 2;
// while (i <= 20) {
//     console.log(i);
//     i+=2
// }

// (do...while)

// let i = 2;
// do {
//     console.log(i);
//     i+=2;
// } while (i <= 20);





// 5-Misol    // Ikki xil yo'l bilan

// Masala: Berilgan sonning barcha raqamlarini ajratib, ularning yig‘indisini `while` sikli yordamida toping. Masalan, 123 soni uchun yig‘indi 1 + 2 + 3 bo‘lsin.

// (While)

// let num = +prompt("Sonni kiriting");
// let i = 0;
// while (num > 0) {
//     let number = num % 10;
//     i += number;
//     num = Math.floor(num / 10);
// }
// console.log("Bu sonlar yig'indisi: " + i);

// (do...while)

// let num = +prompt("Sonni kiriting");
// let i = 0;
// do {
//     let number = num % 10;
//     i += number;
//     num = Math.floor(num / 10)
// } while (num > 0);
// console.log("Bu sonlar yig'indisi: " + i);





// 6-Misol    // Ikki xil yo'l bilan

// Masala: Foydalanuvchi son kiritsin. `while` sikli yordamida ushbu sonni 2 ga bo‘lib boring va natijani chop eting. Sikl son 1 dan kichik bo‘lgunga qadar davom etsin.

// (While)

// let num = +prompt("Sonni kiriting"); 
// while (num >= 1) {
//     console.log(num);
//     num = num / 2;
// }

// (do...while)

// let num = +prompt("Sonni kiriting"); 
// do {
//     console.log(num);
//     num = num / 2;
// } while (num >= 1);





// 7-Misol    // Ikki xil yo'l bilan

// Masala: Berilgan sonning barcha raqamlarini tekshirib, faqat toq raqamlarini `while` sikli yordamida chop eting.

// (While)

// let num = +prompt("Sonni kiriting");
// let i = 0;
// while (i <= num) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
//     i++
// }

// (do...while)

// let num = +prompt("Sonni kiriting");
// let i = 0;
// do {
//     if (i % 2 == 1) {
//     console.log(i);
// }

// i++
// } while (i <= num);





// 8-Misol    // Ikki xil yo'l bilan

// Masala: Foydalanuvchi boshlang'ich son va yakuniy son kiritadi. `while` sikli yordamida ushbu sonlar orasidagi faqat 3 ga bo‘linadigan sonlarni chop eting. Barcha boshqa sonlarni o‘tkazib yuboring.

// (While)

// let start = +prompt("1-sonni kiriting");
// let end = +prompt("2-sonni kiriting");
// if (end > start) {
//     let i = start;
//     while (i <= end) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//         i++
//     }
// } else {
//     console.log("Birinchi raqam ikkinchisidan kichik b'lishi shart!");
// }

// (do...while)

// let start = +prompt("1-sonni kiriting");
// let end = +prompt("2-sonni kiriting");
// let i = start;
// if (end > start) {
//     do {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//         i++
//     } while (i <= end);
// }





// 9-Misol    // Ikki xil yo'l bilan

// Masala: Foydalanuvchi biror son kiritsin. Ushbu sonning raqamlarini teskari tartibda (`1234` ni `4321` ko‘rinishida) `while` sikli yordamida chop eting.

// (While)

// let num = +prompt("Sonni kiriting");
// let sum = 0;
// while (num > 0) {
//     sum = (sum * 10) + (num % 10);
//     num = Math.floor(num / 10)
// }
// console.log(sum);

// (do...while)

// let num = +prompt("Sonni kiriting");
// let sum = 0;
// do {
//     sum = (sum * 10) + (num % 10);
//     num = Math.floor(num / 10)
// } while (num > 0);
// console.log(sum);