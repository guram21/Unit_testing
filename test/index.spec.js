// const isFirstLetterUpperCase = str =>
//   typeof str !== 'string' ? false :
//     !isNaN(str) ? false :
//       typeof +str[0] === 'number' && !isNaN(Number(str[0])) ? false :
//         str[0] === str[0].toUpperCase();
//
// console.log(isFirstLetterUpperCase('Aa')); //true
// console.log(isFirstLetterUpperCase('aa')); // false
// console.log(isFirstLetterUpperCase(1)); // false
// console.log(isFirstLetterUpperCase(NaN)); // false
// console.log(isFirstLetterUpperCase()); // false
// console.log(isFirstLetterUpperCase('')); // false
// console.log(isFirstLetterUpperCase('1a')); // false
// console.log(isFirstLetterUpperCase(' ')); // false
// console.log(isFirstLetterUpperCase(undefined)); // false
// console.log(isFirstLetterUpperCase(null)); // false
// console.log(isFirstLetterUpperCase([])); // false
// console.log(isFirstLetterUpperCase({})); // false

// console.log('1a');
// console.log(!isNaN('1a')); //false
// console.log(isNaN('1a')); //true
// console.log(' ');
// console.log(!isNaN(' ')); //true
// console.log(isNaN(' ')); //false
// console.log('Aa');
// console.log(!isNaN('Аа')); //false
// console.log(isNaN('Аа')); //true
// console.log('aa');
// console.log(!isNaN('аа')); //false
// console.log(isNaN('аа')); //true
// console.log(1);
// console.log(!isNaN(1)); //true
// console.log(isNaN(1)); //false
// console.log('NaN');
// console.log(!isNaN(NaN)); //false
// console.log(isNaN(NaN)); //true
// console.log('');
// console.log(!isNaN('')); //true
// console.log(isNaN('')); //false
// console.log('empty');
// console.log(!isNaN()); //false
// console.log(isNaN()); //true
// console.log('undefined');
// console.log(!isNaN(undefined)); //false
// console.log(isNaN(undefined)); //true
// console.log('null');
// console.log(!isNaN(null)); //true
// console.log(isNaN(null)); //false
// console.log([]);
// console.log(!isNaN([])); //true
// console.log(isNaN([])); //false
// console.log({});
// console.log(!isNaN({})); //false
// console.log(isNaN({})); //true
