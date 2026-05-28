function findPassword() {
  const id = document.getElementById('userId').value;
  const email = document.getElementById('userEmail').value;

  if (!id || !email) {
    alert("아이디와 이메일을 입력하세요");
    return;
  }

  // 현재는 임시 처리 (DB 없음)
  alert("입력하신 이메일로 비밀번호 재설정 링크가 전송되었습니다.");

  // 로그인 페이지로 이동
  window.location.href = "login.html";
}