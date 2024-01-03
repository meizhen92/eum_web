<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>[Staff Only] Dash Page</title>
<!-- link(stylesheet.css) -->
<link rel="stylesheet" href="${path}/resources/css/DIY.css" type="text/css">
<!-- script(js) -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js">
	/*fullCalendar*/
</script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js'>
	/*fullCalendar*/
</script>
<script src="https://unpkg.com/popper.js/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tooltip.js/dist/umd/tooltip.min.js"></script>
<script type="text/javascript" src="${path}/resources/js/staffOnly/dashboard.js"></script>
</head>
<body>
	<main id="dashMain">
		<div id="dashDiv1">
			<!-- #div1 _ 메뉴가 있는 left 사이드 바 -->
			<h1>메뉴사이드바</h1>
		</div>
		<div id="dashDiv2">
			<div id="dashDiv2_top">
				<!-- #div2 _ staffOnly페이지 첫 화면 대쉬보드 내용 구성 -->
				<div id="dashDiv2_title">
					<h1>직원마당♬</h1>
				</div>
				<div id="dashDiv2_content">
					<div class="dashDiv2_content_class" id="dashDiv2_point">
						<!-- 포인트 랭킹 -->
						<h3>포인트 랭킹</h3>
					</div>
					<div class="dashDiv2_content_class">
						<!-- 이달의 생일 -->
						<h3>이달의 생일자</h3>
						<div id="dashDiv2_birth"></div>
					</div>
					<div class="dashDiv2_content_class">
						<!-- 달력(연차 및 사내 기념일 표시) -->
						<h3>연차 / 출장</h3>
						<div id="dashDiv2_calendar"></div>
					</div>
				</div>
			</div>
			<div id="dashDiv2_bottom">공지사항 연동하기</div>
		</div>
		<div id="dashDiv3">
			<!-- #div3 _ sild floating bar 위치 -->
		</div>
	</main>
</body>
</html>