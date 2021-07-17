{
  //問題⓵
const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter((x, i, self) => {
        return self.indexOf(x) === i;
    });

console.log(result)
}

{
  // 問題⓶
  function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }

  let Year = 2020;
  // 　　　　　　　↑ここに2020 or 2021 を入れる
  if (leapYear(Year)) {
    console.log(Year + '年はうるう年です');
  } else {
    console.log(Year + '年はうるう年ではありません');
  }
}
// {
//   const leapYear = [2020, 2021];

//   leapYear.forEach((year) => {
//     if (year % 4 === 0 && year % 100 !== 0) {
//       if (year % 400) {
//         console.log(`${year}はうるう年です`);
//       }
//       else {
//         console.log(`${year}はうるう年ではありません`)
//       }
//     } else {
//       console.log(`${year}はうるう年ではありません`)}
// });
// }