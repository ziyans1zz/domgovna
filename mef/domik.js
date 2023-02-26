// parasha #1
// let hui = document.querySelector("#hui")
// let p = document.querySelector("p")
// hui.addEventListener("blur",hernya)
// function hernya(){
//     p.textContent = hui.value
// }


// parasha #2
// let hui1 = document.querySelector("#hui1")
// let hui2 = document.querySelector("#hui2")
// let hui3 = document.querySelector("#hui3")
// let p = document.querySelector("p")
// let button = document.querySelector("#button")
// button.addEventListener("click",pribavlenie)
// function pribavlenie(){
//     p.textContent = +hui1.value + +hui2.value + +hui3.value
// }


// parasha #3
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",pribavlenie)
// function pribavlenie(){
//     let a = 0
//     let b = hui.value;
//     let arr = [];
//     arr.push(b);
//     arr = b.split("");
//     for(let i = 0; i<arr.length; i++){
//      a += +arr[i]
// }
//     hui.value = a
// }


// parasha #4
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",delitel)
// function delitel(){
//     let a = 0
//     let b = hui.value;
//     let arr = [];
//     arr.push(b);
//     arr = b.split(",");
//     for(let i = 0; i<arr.length; i++){
//      a += +arr[i]
//      b = a / arr.length  
// }
// hui.value = b 
// }



// parasha #5
// let hui1 = document.querySelector("#hui1")
// let hui2 = document.querySelector("#hui2")
// let hui3 = document.querySelector("#hui3")
// let hui4 = document.querySelector("#hui4")
// hui1.addEventListener("blur",fio)
// function fio(){
//     let a = hui1.value;
//     let arr = [];
//     arr.push(a);
//     arr = a.split(" ");
//     hui2.value = arr[0]
//     hui3.value = arr[1]
//     hui4.value = arr[2]
// }



// parasha #6
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",kapsBlyat)
// function kapsBlyat(){
//     let a = hui.value
//     let arr = []
//     arr.push(a)
//     arr = a.split(" ")
//    for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
// }
//     hui.value = arr.join(" ")
// }




// parasha #7
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",zachemSchitatSlova)
// function zachemSchitatSlova(){
//    let a = 0
//    let b = hui.value
//    let arr = []
//    arr.push(b)
//    arr = b.split(" ")
//    for(let i = 0; i<arr.length; i++){
//     a++
//    }
//    hui.value = a

// }




//parasha #8
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",lol)
// function lol(){
//    var a = 0
//    let b = hui.value
//    let arr = []
//    arr.push(b)
//    arr = b.split(".")
//    hui.value = arr.reverse().join("-") + "."

// }




// parasha #9
// let hui = document.querySelector("#hui")
// let button = document.querySelector("#button")
// button.addEventListener("click",cheZaNah)
// function cheZaNah(){
//    let b = hui.value
//    let arr1 = []
//    arr1.push(b)
//    arr1 = b.split("")
//    let arr2 = []
//    arr2.push(b)
//    arr2 = b.split("")
//    arr2 = arr2.reverse()
//    if(arr1[0] == arr2[0]){
//       hui.value = 'yes'
//    }
//    else{
//       hui.value = 'no'
//    }
// console.log(arr1,arr2)
// }





// parasha #10
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur",goooooooooooooovnoooooooo)
// function goooooooooooooovnoooooooo(){
//    let b = hui.value
//    let arr = []
//    arr.push(b)
//    arr = b.split("")
//    for(let i = 0; i<arr.length;i++){
//    if(3 == arr[i]){
//       hui.value = 'yes'
//    }
//    else{
//       hui.value = 'no'
//    }
// }
// console.log(arr)
// }


// parash #11
// let p = document.querySelectorAll("p")
// let button = document.querySelector('#baton')
// button.addEventListener("click",blyaa)
// function blyaa(){
//    for(let i = 0; i<p.length;i++){
//     p[i].textContent= p[i].textContent + (i + 1)
// }
// }






// tupaya parasha zadanie №1 #12 
// let lol = document.querySelector("#lol")
// lol.addEventListener("mouseover", func)
//    function func(){
//       lol.textContent = lol.textContent + "("+lol.href+")"
// }





// parasha #13
// let lol = document.querySelectorAll("a")
// func()
//    function func(){
//       for (let i = 0; i < lol.length; i++)
//       if(lol[i].href.indexOf("http://") == 0){
//          lol[i].textContent = lol[i].textContent + '&rarr;' + lol[i].href
//       }
//       else{
//          lol[i].textContent = lol[i].textContent + lol[i].href
//       } 
// }






//parasha #14
// let hui = document.querySelector('#hui')
// let hui2 = document.querySelector('#hui2')
// hui.addEventListener('click',kvadrat1)
// hui2.addEventListener('click',kvadrat2)
// function kvadrat1(){
//     hui.textContent = hui.textContent ** 2;
  
// }
// function kvadrat2(){
//    hui2.textContent = hui2.textContent ** 2;
 
// }

   





//parasha #15
// let hui = document.querySelector("#hui")
// hui.addEventListener("blur", snovadata)
// function snovadata(){
//    let date = new Date(2016,12,31);
//    let day = date.getDay();
//    let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
//    hui.value = (days[day])

// }





//parasha #16
// let hui = document.querySelector("#hui")
// let plus = document.querySelector("#plus")
// let minus = document.querySelector("#minus")
// plus.addEventListener("click", pribavka)
// minus.addEventListener("click", otnimka)
// function pribavka(){
//    hui.value++
// }
// function otnimka(){
//    let a = hui.value
//    if(a > 0){
//       hui.value--
//    }
// }



// parasha #17
// let hui = document.querySelector("#hui")
// let p1 = document.querySelector("#p1")
// let p2 = document.querySelector("#p2")
// p1.addEventListener("click", firstsumma)
// p2.addEventListener("click", secondsumma)
// function firstsumma(){
//    hui.value = +hui.value + 1
// }
// function secondsumma(){
//     hui.value = +hui.value + 1
// }



// parasha #18

// HZ KAK DELAT' NE ROBIT







// PARASHA #19
// let hui = document.querySelector("input")
// hui.addEventListener("blur",chisla)
// function chisla(){
//   let a = +hui.value
//   if( a > 1  && a < 101){
//    hui.style.color = 'green'
//   }
//   else{
//    hui.style.color = 'red'
//   }
// }



//  PARASHA #20
// let hui = document.querySelector("#hui")
// let gey = document.querySelector("#gey")
// gey.addEventListener("click",wtf)
// function wtf(){
//   let a = ""
//   let b = "йцукенгшщзхъэждлорпавыфячсмитьбю1234567890-=ъqwertyuiop[];lkjhgfdsazxcvbnm"
//   for(let i = 0; i<8; i++){
//     a += b.charAt(Math.floor(Math.random() * b.length))
//   }
//   hui.value = a
// }



// PARASHA #21
// let hui = document.querySelector("#hui")
// let gey = document.querySelector("#gey")
// gey.addEventListener("click",random)
// function random(){
//   let a = ""
//   let b = hui.value
//   for(let i = 0; i<b.length; i++){
//     a += b.charAt(Math.floor(Math.random() * b.length))
//   }
//   hui.value = a
// }


// PARASHA #22
// let hui = document.querySelector("#hui")
// let hui2 = document.querySelector("#hui2")
// let gey = document.querySelector("#gey")
// gey.addEventListener("click",gradusi)
// function gradusi(){
//   hui2.textContent = 5/9 * (hui.value - 32)
// }



// PARASHA #23
// let hui = document.querySelector("#hui")
// let hui2 = document.querySelector("#hui2")
// let gey = document.querySelector("#gey")
// gey.addEventListener("click",hz)
// function hz() {
//     let a = hui.value
//     for (let i = a - 1; i >= 1; i--) {
//       a= a * i; 
//     }
//     hui2.textContent = a
//   }



// PARASHA #POSLEDNYAYA SLAVA BOGU
// let hui1 = document.querySelector("#hui1")
// let hui2 = document.querySelector("#hui2")
// let hui3 = document.querySelector("#hui3")
// let kek = document.querySelector("#kek")
// let gey = document.querySelector("#gey")
// gey.addEventListener("click",yra)
// function yra(){
//  kek.textContent = String(Math.sqrt(hui1.value)) +" "+ String(Math.sqrt(hui2.value))+" " + String(Math.sqrt(hui3.value))

// }