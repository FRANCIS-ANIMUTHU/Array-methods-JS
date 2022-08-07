// //.concat
// let a=['Sudhakar','Venkat','Gnanasekar'];
// let b=['Francis','Joseph','Arun']
// let c=a.concat(b);
// console.log('concat=',c);

// //.copywithin
// let a1=['a','b','c','d','e','f'];
// console.log('copywithin=',a1.copyWithin(4,2,));

// //.entries
// let a2=['a','b','c'];
// let b2=a2.entries();
// console.log('entries=',b2.next().value);
// console.log(b2.next().value);
// console.log(b2.next().value);
// //console.log(b2.next().value);

// //.every
// let b3=[12,24,3,4];
// function b1(element)
// {
//     return element <30;
// }
// b4=b3.every(b1);
// console.log('every=',b4);

// //.filter
// let a4=['Sudhakar','Francis','Besky','Arun','Venkat'];
// function names(element) {
//     return element.length >6;
// }
// a8=a4.filter(names);
// console.log('filter=',a8);


// //.find
// let a5=[13,45,23,100,67];
// function a6(elements) {
//     return elements >40;
// }
// let b5=a5.find(a6);
// console.log('find=',b5);

// //.push
// let num=[10,15,20,25,30];
// let n=num.push('45');
// console.log(n);
// console.log('push=',num);

// //.pop
// let frds=['Sudhakar','Arun','Venkat','Francis'];
// let rem=frds.pop();
// console.log(rem);
// console.log('pop=',frds);

// //.shift
// let flowers=['Rose','Sunflower','Lotus','Lilly'];
// let out=flowers.shift();
// console.log(out);
// console.log('shift=',flowers);

// //.unshift
// let animals=['Lion','Cat','Tiger','Dog'];
// let more1=animals.unshift('Pig','Cow');
// console.log(more1);
// console.log('unshift=',animals);

// //.slice
// let birds=['Parrot','Hen','Crow','Peacock','Owl'];
// let mention=birds.slice(1,4);
// console.log(birds);
// console.log('slice=',mention);

// //.sort         
// let numbers=[34,99,13,22,100];
// let sort=numbers.sort();
// console.log(numbers);
// console.log('sort=',sort);

// let months=['January','Febraury','March','April','May'];
// let sort1=months.sort();
// console.log(months);
// console.log('sort=',sort1);

// //.indexOf
// let tree=['Cocunut','Neem','Mango','Lemon tree'];
// let index=tree.indexOf('Lemon tree');
// console.log('indexof=',index);

// //.lastindexof
// let tree1=['Cocunut','Neem','Mango','Neem','Cocunut'];
//  let index1=tree1.lastIndexOf('Neem');
//  console.log('lastindexof=',index1);
// //console.log(tree1.lastIndexOf('Neem'));

// //.findindex
// let n3=[35,56,12,30,69];
// function findin(elements) {
//     return elements > 50;
// }
// x=n3.findIndex(findin);
// console.log('findindex=',x);

// //.tostring
// let value=[1,2,'a','1a'];
// let str=value.toString();
// console.log('tostring=',str);
    
// //.reverse
// let vegetables=['Pototo','Tomoto','Ladies finger','Drumstick'];
// let rev=vegetables.reverse();
// console.log('reverse=',rev);

//.reduce
var numbers=[23, 47, 48, 76, 88];
var result=numbers.reduce(function(previousVal,currentVal){
    console.log(previousVal,'previousVal');
    console.log(currentVal,'currentVal');
    return previousVal+currentVal;
})

//splice
var number=[12, 34, 56, 78, 90];
var spl=number.splice(2,5,45,59);
console.log(spl);
console.log(number);

//map
var char=['yuvi','vk','msd','hit'];
