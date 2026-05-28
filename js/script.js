function login() {
  const id = document.querySelector('input[type="text"]').value;
  const pw = document.querySelector('input[type="password"]').value;

  if (id === "" || pw === "") {
    alert("아이디와 비밀번호를 입력하세요");
    return;
  }

  // 임시 로그인 성공 처리
  alert("로그인 성공!");
  window.location.href = "index.html"; // 메인으로 이동
}