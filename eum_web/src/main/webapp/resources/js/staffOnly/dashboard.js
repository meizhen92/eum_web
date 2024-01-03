/*
 * js : -
 * author : 김미진
 * description : dashboard.jsp 
 * */

$(document).ready(function() {
	
	/* #dashDiv2_point */
	
	/* #dashDiv2_birth */
	let today = new Date();
	let month = today.getMonth();
	console.log("month  :"+month);
	$.ajax({
		url: "/userBirthList",
		type: "POST",
		data: {
			month: month
		},
		success: function(res){
			console.log(res);
		},
	})
	
	var birth = [['rla','19921001'],['lee','19850302'],['park','20210312']];
	fn_birtList(birth);
	
	/* #dashDiv2_calendar _ fullcalendar 적용 */
	fn_fullCalendar();
	
});


function fn_birtList(Arr) {
	// 이름과 생년월일 동시출력, 및 생년월일로 sort
	var point = document.getElementById("dashDiv2_birth");
	var printArray = [];
	for (var i=0; i<Arr.length; i++){
		printArray.push(Arr[i]+"추카추카추카");
		console.log(Arr[i]);
	}
	point.innerHTML = printArray.join("<br/>");
	/*var nameAndbirth = {
		name: name,
		birth: birth
	};
	nameAndbirthArray.push(nameAndbirth);
	nameAndbirthArray.sort(fn_birthCompare);
	var point = document.getElementById("dashDiv2_point");
	var printArray = [];
	for (var i=0; i<nameAndbirthArray.length; i++){
		if (i >= 5) {
			break;
		}
		printArray.push(nameAndbirthArray[i].birth + ' 생일자: '+nameAndbirthArray[i].name + "!" )
	}
	point.innerHTML = printArray.join("<br/>");*/
}

function fn_birthCompare(a,b) {
	var numA = Integer.parseInt(a);
	var numB = Integer.parseInt(b);
	return numA - numB;
}


function fn_fullCalendar() {
	var calendarEl = document.getElementById('dashDiv2_calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		timeZone: 'Asia/Seoul',
		initialView: 'dayGridMonth',
		//themeSystem: 'bootstrap5',  // : 달력 테마
		/*		initialView: 'dayGridFourWeek',
				views: {
					dayGridFourWeek: {
						type: 'dayGrid',
						duration: { weeks: 4 }
					}
				},*/
		//initialDate: '2023-11-07',  // : 처음 표시 날 지정
		locale: 'ko',  // : 달력 언어
		height: 300,  // : 달력 전체 높이
		//contentHeight: 300, // : 달력 내용 높이 
		// aspectRatio: 3, // : 종횡비
		headerToolbar: {
			//left: 'prev,next today',
			//center: 'title',
			//right: 'dayGridMonth,timeGridWeek,timeGridDay' // : 월,주,일 토글버튼
			center: 'addEventButton',
		},
		customButtons: {
			addEventButton: {
				text: '+',
				click: function() {
					var dateStr = prompt('YYYY-MM-DD 형식으로 날짜를 입력해주세요');
					var date = new Date(dateStr + 'T00:00:00.000Z'); // 로컬타임변환(time zone offset):Fri Dec 22 2023 09:00:00 GMT+0900 (한국 표준시)
					var inputStrTitle = prompt('성명(XXX)를 작성해주세요!');
					var inputStrDesc = prompt('"XXX 연차"를 작성해주세요!');
					// Invalid Date: new Date 파싱 에러
					if (date != "Invalid Date" && inputStrTitle != "" && inputStrDesc !="") {
						calendar.addEvent({
							title: inputStrTitle,
							description: inputStrDesc,
							start: date,
							allDay: true
						});
						alert('저장');
						console.log(dateStr);
						console.log(date);
						console.log(inputStrTitle);
					} else {
						alert('입력한 내용이 올바르지 않습니다. 확인 후 다시 내용을 입력해주세요')
					}
				}
			}
		},
		dayMaxEvents: true,  // : +more 로 팝업 버튼 표시
		// script popper&tootip min.js 필수
		eventDidMount: function(info){
			var tooltip = new Tooltip(info.el, {
				title: info.event.extendedProps.description, // or  title: info.event.title
				placement: 'top',
				trigger: 'hover',
				//container: 'body',
			});
		},
		events: [
			{
				title: '김순호',
				description: '김순호 연차',
				start: '2023-12-11',
			},
			{
				title: '오승종',
				description: '오승종 연차',
				start:'2023-12-11',
			},
			{
				title: '유세종',
				description: '유세종 연차',
				start: '2023-12-11',
			},
			{
				title: '김도현',
				description: '김도현 연차',
				start: '2023-12-11',
			},
						{
				title: '김미진',
				description: '김미진 연차',
				start: '2023-12-19',
			},
		]
	});
	calendar.render();
}