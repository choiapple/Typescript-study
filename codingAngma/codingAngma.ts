// 함수

// function add(num1:number, num2: number):void{
//     console.log(num1+num2);
// }

function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}
//  name?은 선택적 매개변수 있어도되고 없어도 되는거
const result = hello();
// 선택적 매개변수가 일반 매개변수 앞에 올 수 없다
// function hello(age?:number, name:string):string{} 이거 안됨
// function hello(age: number|undefined, name: string): string{}
// 앞에 쓰고 싶으면 이렇게
// console.log(hello(undefined, "sam"));

function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
  // 전달받은 매개변수를 배열로 나타낼수 있게함
  // 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과 값을 반환
  // 0자리는 초기값
}
// interface User{
//     name: string;
// }
// // const Sam: User = {name: 'Sam'}

// // 매개 변수가 있으면 function showName(this:User, age:number, gender:'m'|'f')
// // this만 있을때는 이렇게 적고
// function showName(this:User){
//     console.log(this.name)
// }
// const a = showName.bind(Sam); // bind함수를 사용하면 this는 내가 정한 object로 고정된다.
// a();
// a(30,'m') // 이런식으로 쓰면됨 this가 있다고 세개의 매개변수가 아니라

// interface User{
//     name:string;
//     age:number;
// }

// function join(name:string, age:string):string;
// function join(name:string, age:number):User;
// function join(name:string, age:number|string):User|string{
//     if(typeof age === "number"){
//         return{
//             name,
//             age,
//         };
//     }else{
//         return "나이는 숫자로 입력해주세요.";
//     }
// }
// const sam: User = join("Sam", 30);
// const jane: String = join("Jane", "30");
// 동일한 함수지만 매개변수의 타입이나 갯수에 따라 다르게 동작한다면 위에 오버로드로 적어줘야함

// 코딩앙마 #5
// const는 변하지않는 값 let은 변하는 값을 저장

// Literal Types

// const userName1 = "Bob";
// let userName2 = "Tom";
// 여기서 userName1은 타입이 "Bob"으로 나오지만
// userName2는 string으로 나옴
// 그 이유는 userName2는 언제든 바뀔 수 있어서

// - userName2에서 숫자도 받을 수 있으려면
// - let userName2: string | number = “Tom”으로 작성해야한다.
// - userName1처럼 정해진 string값을 가진것을 문자열 리터럴 타입이라고 한다.

// type Job = "police" | "developer" | "teacher";

// interface User{
// 	name : string;
// 	job : Job;
// }

// const user:User = {
//     name:"Bob",
//     job:"developer",
// }
// interface HighSchoolStudent {
//     name: string;
//     grade:1|2|3;
// }

// Union Types

// interface Car {
//   name: "car";
//   color: string;
//   start(): void;
// }

// interface Mobile {
//   name: "mobile";
//   color: string;
//   call(): void;
// }
// // 동일한 속성의 타입을 다르게해서 구분할 수 있는걸 식별가능한 유니온 타입
// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "car") {
//     gift.start;
//   } else {
//     gift.call();
//   }
// }

// Intersection Types 교차 타입
// 여러타입을 합쳐서 사용함 유니온은 or 이었다면 교차는 and를 의미함
// 여러개의 타입을 하나로 합쳐줌 필요한 모든기능을 가진 하나의 타입이 만들어짐
// interface Car {
//   name: string;
//   start(): void;
// }
// interface Toy {
//   name: string;
//   color: string;
//   price: number;
// }

// const toyCar: Toy & Car = {
//   name: "타요",
//   start() {},
//   color: "red",
//   price: 1000,
// };

// 코딩앙마 #6

/* class Car{
    // color:string;
    // 위에 적어줘도 되고 public을 밑에 적어줘도 되고 readonly를 적어 줘도됨
    constructor(public color:string){
        this.color = color;
    }
    start(){
        console.log("start");
    }
}

const bmw = new Car("red"); */

// 접근 제한자 (Acess modifier) - public, private, protected
// public은 자식 class나 class instance에서 접근 가능
// private는 그 클래스에서만 사용가능하다. #name으로 써도 private가 됨
// 쓸때도 #name으로 써야함
// protected는 자식클래스에서도 접근이 가능함
// public이랑 다른점은 클래스 인스턴스 접근 불가
/*
클래스를 만들어서 오브젝트에 쓰고 인스턴스로 사용한다.
public - 자식 클래스, 클래스 인스턴스 모두 접근 가능 (인스턴스 .으로 쓸수있는거)
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능 (#변수명) 으로 적을 수 있다
 */
/* readonly name을 하면 읽기 전용이라서 바꿀 수 없다. */
/* readeonly 모드에서는 constructor을 통해 바꿀 수 있다. */
/* 
static써주면 정적 멤버변수를 사용할 수 있다.
class . 으로 접근이 가능하다.
 */
// class Car{
//     readonly name: string = "car";
//     color:string;
//     static wheels = 4;
//     constructor(color:string, name){
//         this.color = color;
//         this.name = name;
//     }
//     start(){
//         console.log("start");
//         console.log(Car.wheels);
//     }
// }

// class Bmw extends Car{
//     constructor(color: string, name){
//         super(color, name);
//     }
//     showName(){
//         console.log(super.name);
//     }
// }
// const z4 = new Bmw("black", "hahaha");
// console.log(Car.wheels);

// 추상 class
/* 
추상 클래스는 클래스 명 앞에 abstract를 적어준다.
추상 클래스 내부 추상메소드는 상속받은 쪽에서 구체적인 구현을 해줘야함
 */
// abstract class Car{
//     color:string;
//     constructor(color:string){
//         this.color = color;
//     }
//     start(){
//         console.log("start");
//     }
//     abstract doSomthing():void; // 이름만 적어주고 상속받는 쪽에서 구현
// }
// // const car = new Car("red") 이렇게 사용 못함
// // 오직 상속을 통해서만 사용이 가능함
// class Bmw extends Car{
//     constructor(color:string){
//         super(color);
//     }
//     doSomthing(){
//         alert(3);
//     }
// }

// const z4 = new Bmw("black");

// 코딩 앙마 #7

// Generic
/* 
generic을 이용하면 class나 함수 인터페이스를 다양한 타입으로 재사용 할 수 있다.
선언할 때는 타입 파라미터를 적어주고
생성하는 시점에 사용하는 타입을 적어준다.
 */

// function getSize<T>(arr:T[]): number {
//   return arr.length;
// }
// const arr1 = [1, 2, 3];
// getSize<number>(arr1); // 3

// const arr2 = ["a","b","c"];
// getSize<string>(arr2);

// const arr3 = [false, true, true];
// getSize<boolean>(arr3);

// const arr4 = [{},{},{name:"Tim"}];
// getSize<object>(arr4); //..? 객체?

// interface Mobile<T>{
//   name:string;
//   price:number;
//   option:T;
// }
// // <object>대신 <{color:string; coupon:boolean}> 해도됨
// const m1:Mobile<object>={
//   name:"s21",
//   price:1000,
//   option:{
//     color:"red",
//     coupon:false,
//   },
// };

// const m2:Mobile<string> = {
//   name:"s20",
//   price:900,
//   option:"good",
// }

// interface User{
//   name:string;
//   age:number;
// }

// interface Car{
//   name:string;
//   color:string;
// }
// interface Book{
//   price:number;
// }
// const user:User={name:"a", age:10};
// const car:Car={name:"bmw", color:"red"};
// const book:Book={price:3000};

// function showName<T extends {name:string}>(data:T):string{
//   return data.name;
// }
// showName(user);
// showName(car);
// showName(book);

// 코딩앙마 #8

// keyof

// interface User{
//   id:number;
//   name:string;
//   age:number;
//   gender:"m"|"f";
// }
// type UserKey = keyof User; // 'id'|'name'|'age'|'gender' 이거랑 같음

// const uk:UserKey = "age";

// Partial<T> 필요한거만 쓰는거임

// interface User{
//   id:number;
//   name:string;
//   age:number;
//   gender:"m"|"f";
// }
// // interface User{
// //   id?:number;
// //   name?:string;
// //   age?:number;
// //   gender?:"m"|"f";
// // }
// // 이런 형태와 같아 지는거임
// let admin:Partial<User>={
//   id:1,
//   name:"Bob",
// }

// Required<T> 모든걸 필수적으로 적어줘야함
// interface User{
//   id:number;
//   name:string;
//   age?:number;
// }
// let admin:Required<User>={
//   id:1,
//   name:"Bob",
//   age:10,
// }

// Readonly<T> 읽기전용 모드 첨에 할당만 가능하고 수정은 불가능

// interface User{
//   id:number;
//   name:string;
//   age?:number;
// }

// let admin: Readonly<User>={
//   id:1,
//   name:"Bob",
// }

// Record<K,T> K는 키 T는 타입

// interface Score{
//   "1":"A"|"B"|"C"|"D";
//   "2":"A"|"B"|"C"|"D";
//   "3":"A"|"B"|"C"|"D";
//   "4":"A"|"B"|"C"|"D";
// }

// const score:Score ={
//   1:"A",
//   2:"C",
//   3:"B",
//   4:"D",
// }
// 위에거를 다시 이렇게 나타낼 수 있다.
// type Grade = "1"|"2"|"3"|"4"; // 키
// type Score = "A"|"B"|"C"|"D"; // 타입

// const score:Record<Grade, Score> ={
//   1:"A",
//   2:"C",
//   3:"B",
//   4:"D",
// }

// interface User{
//   id:number;
//   name:string;
//   age:number;
// }
// // 적절한 값이 들어갔는지 체크하는 함수 키값들을 받아와서 뒤에는 불린
// function isValid(user:User){
//   const result:Record<keyof User,boolean> = {
//     id: user.id>0,
//     name: user.name !== '',
//     age: user.age>0,
//   }
//   return result;
// }

// Pick<T, K> k만 골라서 쓰는거임

// interface User{
//   id:number;
//   name:string;
//   age:number;
//   gender:"M"|"W";
// }
// const admin:Pick<User,"id"|"name">={
//   id:0,
//   name:"Bob",
// }

// // Omit<T,K> 특정 프로퍼티만 생략하고 쓸수있다. K만 생략하고 쓴다.

// const adm:Omit<User,"age"|"gender">={
//   id:0,
//   name:"Bob",
// }
// // Exclude<T1,T2> T1에서 T2를 제외하고 사용하는거임
// // Omit은 프로퍼티를 제외하는거고 Exclude는 타입을 제거함

// type T1 = string|number|boolean;
// type T2 = Exclude<T1, number|string>; // boolean만 남게됨

// NonNullable<Type> null을 제외한 타입 undefined도 함께 제외시킴

type T1 = string|null|undefined|void;
type T2 = NonNullable<T1>; // string과 void만 남음