let arr = [];

function promppt() {
  for (let i = 0; i < Infinity; i++) {
    let str = prompt("Komanda kiriting (add, del yoki stop)");

    if (str == "stop") {
      break;
    }

    let str2 = str.split(' ');
    if (str2[0] === 'add') {
      arr.push(str2[1]);
    }else if (str2[0] === 'del' && arr.includes(str2[1])) {
        let index = arr.indexOf(str2[1]);
        arr.splice(index, 1);
      }
  }
}

promppt();
console.log(arr);