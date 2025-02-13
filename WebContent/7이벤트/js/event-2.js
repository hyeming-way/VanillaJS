

//<button>Click</button> 요소를 선택해서
//button 상수에 저장

const button = document.querySelector("button");

//선택한 요소에 특정 이벤트 등록 후 처리 문법
//		선택한 요소.on등록할 이벤트 종류명 = 이벤트 핸들러 함수 작성;

//선택해온 <button>요소에 Click 이벤트 등록
//그리고 click이벤트가 발생하면 자동으로 호출될 콜백(이벤트 핸들러, 이벤트처리)함수 연결
button.onclick = function(){
	
	//click이벤트 처리할 코드 작성할 영역
	
	//body요소를 선택해서 가져와 배경색을 그린색으로 설정
	document.body.style.backgroundColor = "green";
	
}
