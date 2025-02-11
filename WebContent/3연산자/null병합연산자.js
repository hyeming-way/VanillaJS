

/*
	주제 : null병합연산자?
	값이 저장(확정)된 변수를 쉽게 찾아낼 수 있다.
	
	문법
	피연산자1 ?? 피연산자2
*/


let varA = 10; //varA변수메모리에는 10이 저장(확정)되어 있다.
let varB = 20; //varB변수메모리에는 10이 저장(확정)되어 있다.
let varC; //VarC변수만 선언하고 값이 저장(확정)되어있지 않다.

// console.log(varA ?? varB); //10출력
// 두 변수값이 둘다 저장(확정)되어있으므로
// 이 때 ?? 연산자는 연산자 기준 왼쪽 피연사자의 값을 연산결과로 반환


// console.log(varC ?? varB); //20출력
// varC는 값을 저장(확정)하지않아 undefined값을 갖습니다.
// 이 때 ?? null병합연산자는 값이 확정변수인 varB의 값을 반환함


/*
	주제2 : 실무에서 null병합연산자를 이용해서 사용하는 실습
	
	변수 user에 해당 사용자의 이름이 저장되어 있다면?
	이름을 저장하고, 없다면 닉네임을 저장하시오.
*/

let name;
let nickname = "winterlood"; //닉네임 저장되어 있음

//변수name과 nickname중 저장되어 있는 변수의 값을 user변수에 저장시키자
// let user= name ?? nickname;

console.log(user);









