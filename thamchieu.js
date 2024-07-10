let arr = [1,2,4,8]
let brr = arr;
let crr = [...arr] // dấu 3 chấm có tác dụng coppy nhưng không bị tham chiếu
arr.push(10)
console.log(arr);
console.log(brr);
console.log(crr);


///// ví dụ với object

let o1 = {
    name: 'A',
    age : 20
}

let o2 = o1
let o3 = {...o2} // dấu 3 chấm có tác dụng coppy nhưng không bị tham chiếu
o2.age = 21
console.log(o1);
console.log(o2);
console.log(o3);
