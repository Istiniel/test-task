// 1 task
function cities(args) {
  return args.join(', ').trim() + '.';
}
console.log(`Task 1: \n${cities(['Москва', 'Санкт-Петербург', 'Воронеж'])}\n`);

// 2 task
function toFive(number) {
  return Math.round(number / 5) * 5;
}
console.log(`Task 2: \n${toFive(27.1)}\n`);

// 3 task
function computers(number) {
  let result = {
    1: ' компьютер',
    2: ' компьютера',
    3: ' компьютера',
    4: ' компьютера',
    5: ' компьютеров',
    6: ' компьютеров',
    7: ' компьютеров',
    8: ' компьютеров',
    9: ' компьютеров',
    0: ' компьютеров',
  };
  let lastNumber = +String(number).split('').pop();
  return lastNumber + result[lastNumber];
}
console.log(`Task 4: \n${computers(1231235)}\n`);

// 4 task
function isPrimary(number) {
  if (number === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(`Task 4: \n${isPrimary(2)}\n`);

// 5 task
function twoMore(arr1, arr2) {
  let result = [];

  function getTwoMore(arr) {
    return arr.reduce((acc, e, ind, arr) => {
      if (arr.indexOf(e) !== ind && !acc.includes(e)) {
        acc.push(e);
      }
      return acc;
    }, []);
  }
  arr1 = getTwoMore(arr1);
  arr2 = getTwoMore(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(
  `Task 5: \n${twoMore(
    [7, 17, 1, 9, 1, 17, 56, 56, 23, 9],
    [56, 17, 17, 1, 23, 9, 34, 23, 1, 8, 1, 9, 9]
  )} \n`
);

// task 6
function multTable(n) {
  let result = '';
  let arr = [];
  let flag = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      arr.push(String(j * i).padStart(String(j * n).length, ' '));
    }
    arr.splice(0, 0, arr[0]);

    if (flag) {
      arr[0] = ' '.padStart(arr[0].length, ' ');
      result += arr.join(' ') + '\n';
      flag = false;
      arr[0] = '1'.padStart(arr[0].length, ' ');
    }

    result += arr.join(' ') + '\n';

    arr = [];
  }

  return result;
}
console.log(`Task 6: \n${multTable(15)}`);
