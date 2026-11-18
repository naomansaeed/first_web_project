const nums = [1, 2, 3];
const copy = nums;
copy.push(4);
console.log(nums.length); // predicted output: 3
/* upon testing I was wrong. I thought the contents of the nums 
array will be copied to a new array. But instead I think the memory 
reference of the same array is being stored in both variables.
the output is 4.
*/

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D'); // predicted output: A B D C
// actual output: A D C B
/* my explanation: A & D are striaght forward with no lag. they go one after the other. 
then promise for C got resolved. even with 0 timeout value, B took the longest.
*/

const cart = ['board'];
const same = cart;
same.push('wax');
//cart = ['leash'];
same.push('leash');   // a
same[0] = 'leash';    // b
//same = ['leash'];     // c
console.log(cart.length);

const cart2 = ['board'];
const alias = cart2;
const copy2 = [...cart2];
copy2.push('wax');
console.log(cart2);   // ['board']
console.log(alias);  // ['board']
console.log(copy2);   // ['board', 'wax']

{
  const cart = ['board'];
  const next = addItem(cart, 'wax');
  console.log(cart); // must print ['board']
  console.log(next); // must print ['board', 'wax']
}