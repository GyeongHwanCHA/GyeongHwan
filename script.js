(() => {
const form = document.getElementById('contactForm');
const thanks = document.getElementById('thanks');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');


function showThanks() {
thanks.hidden = false;
// 스크린리더에게도 알림
thanks.textContent = '감사합니다';
// 3초 후 숨기기 (UX 용)
setTimeout(() => {
thanks.hidden = true;
thanks.textContent = '';
}, 3000);
}


function resetForm() {
form.reset();
// 포커스를 첫 입력으로 이동
nameInput.focus();
}


form.addEventListener('submit', (e) => {
e.preventDefault();


// 브라우저 기본 유효성(필수/이메일 패턴)을 먼저 확인
if (!form.checkValidity()) {
// 기본적으로 브라우저의 폼 유효성 메시지를 트리거
// 커스텀 메시지를 원하면 여기서 처리
form.reportValidity();
return;
}


// 여기서 실제 서버 전송 (fetch 등)을 할 수 있음.
// 이 예제는 제출 시 피드백만 보여주고 입력란 초기화


showThanks();
resetForm();
});
})();