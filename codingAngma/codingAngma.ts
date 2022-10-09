// 함수

function add(num1:number, num2: number):void{
    console.log(num1+num2);
}

function hello(name?:string){
    return `Hello, ${name||"world"}`;
}
//  name?은 선택적 매개변수 있어도되고 없어도 되는거
const result = hello();
// 선택적 매개변수가 일반 매개변수 앞에 올 수 없다
// function hello(age?:number, name:string):string{} 이거 안됨
// function hello(age: number|undefined, name: string): string{} 
// 앞에 쓰고 싶으면 이렇게
// console.log(hello(undefined, "sam"));

function add(...nums:number[]){
    return nums.reduce((result, num)=>result+num, 0);
    // 전달받은 매개변수를 배열로 나타낼수 있게함
    // 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과 값을 반환
    // 0자리는 초기값
}
interface User{
    name: string;
}
const Sam: User = {name: 'Sam'}

// 매개 변수가 있으면 function showName(this:User, age:number, gender:'m'|'f')
// this만 있을때는 이렇게 적고 
function showName(this:User){
    console.log(this.name)
}
const a = showName.bind(Sam); // bind함수를 사용하면 this는 내가 정한 object로 고정된다.
a();
a(30,'m') // 이런식으로 쓰면됨 this가 있다고 세개의 매개변수가 아니라


interface User{
    name:string;
    age:number;
}
function join(name:string, age:string):string;
function join(name:string, age:number):User;
function join(name:string, age:number|string):User|string{
    if(typeof age === "number"){
        return{
            name,
            age,
        };
    }else{
        return "나이는 숫자로 입력해주세요.";
    }
}
const sam: User = join("Sam", 30);
const jane: String = join("Jane", "30");
// 동일한 함수지만 매개변수의 타입이나 갯수에 따라 다르게 동작한다면 위에 오버로드로 적어줘야함

// const는 변하지않는 값 let은 변하는 값을 저장

// Literal Types

const userName1 = "Bob";
let userName2 = "Tom";
// 여기서 userName1은 타입이 "Bob"으로 나오지만
// userName2는 string으로 나옴
// 그 이유는 userName2는 언제든 바뀔 수 있어서

// - userName2에서 숫자도 받을 수 있으려면
// - let userName2: string | number = “Tom”으로 작성해야한다.
// - userName1처럼 정해진 string값을 가진것을 문자열 리터럴 타입이라고 한다.


type Job = "police" | "developer" | "teacher";

interface User{
	name : stringg;
	job : Job;
}
