/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
 и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
 Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час*/

/*let auto = {
    brand: "lada",
    model: 2109,
    year: 1985,
    speed: 80,
   
 }
 let info="";
 function watch_info (Object) {
    for (let key in Object) {
        console.log(key);
        console.log(Object[key]);
        info = info + key +": " + Object[key] + "; ";
    }
    
alert(info);
} 
 watch_info(auto);

 let S = prompt("задайте расстояние");
 let V = auto.speed;
 function time (S) {
t=S/V;
if (t>=4) {
    t=t+Math.floor(t/4);
}
alert(`вам понадобится ${t} часа(часов)`);
 }
 time(S);*/

/* 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби.*/

/* let fraction1 = {
  numerator1: parseInt(prompt("задайте числитель дроби")), // правильно ли так называть имена свойств?
  denominator1: parseInt(prompt("задайте знаменатель дроби"))
};
console.log(fraction1);

let fraction2 = {
  numerator2: parseInt(prompt("задайте числитель дроби")),
  denominator2: parseInt(prompt("задайте знаменатель дроби"))
};
console.log(fraction2);
function plus() {
  b = fraction1.denominator1 * fraction2.denominator2;//можно ли объявлять перем без let? Строгий режим предполагает обяз-но let
  a =
    fraction2.denominator2 * fraction1.numerator1 +
    fraction1.denominator1 * fraction2.numerator2;
  console.log(`${a}/${b}`); // как вывести, если надо сохранить значение в виде дроби, а не строки?
}
plus();

function minus() {
  b = fraction1.denominator1 * fraction2.denominator2; //можно ли использовать везде внутри ф-ций а,b, если их значения не надо использовать?
  a =fraction2.denominator2 * fraction1.numerator1 - fraction1.denominator1 * fraction2.numerator2;
  console.log(`${a}/${b}`);
}
minus();

function multiplication() {
  a = fraction1.numerator1 * fraction2.numerator2;
  b = fraction1.denominator1 * fraction2.denominator2;
  console.log(`${a}/${b}`);
}
multiplication();

function division() {
  a = fraction1.numerator1 * fraction2.denominator2;
  b = fraction1.denominator1 * fraction2.numerator2;
  console.log(`${a}/${b}`);
}
division(); 

function reduction() {
  if (fraction1.numerator1 >= fraction1.denominator1) {
    max = fraction1.numerator1;
    min = fraction1.denominator1;
  } 
  else {
    min = fraction1.numerator1;
    max = fraction1.denominator1;
  }
     
     let r=max%min;
     if (r==0) {
         max=min;// greatest common factor ==min
     }
     while (r!==0) {
         r=max%min;  
         max=min; 
         min=r; 
     }
     console.log(max); // greatest common factor
     a = fraction1.numerator1/max;
     b = fraction1.denominator1/max;
} 
reduction();
console.log( (`${a}/${b}`)); */

/*3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

Функция вывода времени на экран;

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
 Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75»*/

let time = {
  h: 11,
  m: 49,
  s: 59
};
function show_time() {
  console.log(`${time.h}:${time.m}:${time.s}`);
}
show_time();

/*function plus_s() {
  let plus_s = +prompt("на сколько секунд увеличить?");
  time.s += plus_s;
  while (time.s > 59) {
    time.s = time.s - 60;
    time.m = time.m + 1;
    
  }
if (time.s < 10) {
      time.s = (`0${time.s}`);
    }
  while (time.m > 59) {
    time.m = time.m - 60;
    time.h = time.h + 1;
    
  }
  if (time.m < 10) {
      time.m = (`0${time.m}`);
    }
  while (time.h > 23) {
    time.h = time.h - 24;
    
  }
  if (time.h < 10) {
      time.h = (`0${time.h}`);
    }

  console.log(`${time.h}:${time.m}:${time.s}`);
}
plus_s();

function plus_m() {
    let plus_m = +prompt("на сколько минут увеличить?");
    time.m += plus_m;
  
    while (time.m > 59) {
      time.m = time.m - 60;
      time.h = time.h + 1;
      
    }
    if (time.m < 10) {
        time.m = (`0${time.m}`);
      }
    while (time.h > 23) {
      time.h = time.h - 24;
      
    }
    if (time.h < 10) {
        time.h = (`0${time.h}`);
      }
  
    console.log(`${time.h}:${time.m}:${time.s}`);
  }
  plus_m ();*/
  
  function plus_h() {
    let plus_h = +prompt("на сколько часов увеличить?");
    time.h += plus_h;
  
    while (time.h > 23) {
      time.h = time.h - 24;
      
    }
    if (time.h < 10) {
        time.h = (`0${time.h}`);
      }
  
    console.log(`${time.h}:${time.m}:${time.s}`);
  }
  plus_h ();