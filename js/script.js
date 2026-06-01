// 로그인 예제
function login() {
    const id = document.querySelector('input[type="text"]').value;
    const pw = document.querySelector('input[type="password"]').value;

    if(id === "" || pw === ""){
        alert("아이디와 비밀번호를 입력하세요.");
        return;
    }

    alert("로그인 성공!");
    location.href = "../index.html";
}

// 네비 하이라이트
const menuItems = document.querySelectorAll('.menu a');
const highlight = document.querySelector('.nav-highlight');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        highlight.style.opacity = '1';
        highlight.style.width = item.offsetWidth + 'px';
        highlight.style.left = item.offsetLeft + 'px';
    });
});

document.querySelector('.menu')
.addEventListener('mouseleave', () => {
    highlight.style.opacity = '0';
    highlight.style.width = '0';
});

// 모바일 메뉴
const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// 스크롤 애니메이션
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
