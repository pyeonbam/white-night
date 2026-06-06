let code = "";
let isEmailVerified = false;

// 이메일 인증번호 발송
function sendCode() {

    isEmailVerified = false;


    const email =
        document.getElementById("email").value;

    const emailMessage =
        document.getElementById("email-message");

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailMessage.innerText =
            "올바른 이메일 형식을 입력해주세요.";
        emailMessage.style.color = "tomato";
        return;
    }

    code = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    alert("임시 인증번호 : " + code);

    emailMessage.innerText =
        "인증번호가 발송되었습니다.";
    emailMessage.style.color = "#4CAF50";
}

// 인증번호 확인
function verifyCode() {

    const inputCode =
        document.getElementById("authCode").value;

    const emailMessage =
        document.getElementById("email-message");

    if (code === "") {

        emailMessage.innerText =
            "먼저 인증번호를 발송해주세요.";

        emailMessage.style.color = "tomato";
        return;
    }

    if (inputCode === code) {

        isEmailVerified = true;

        emailMessage.innerText =
            "이메일 인증이 완료되었습니다.";

        emailMessage.style.color = "#4CAF50";

    } else {

        isEmailVerified = false;

        emailMessage.innerText =
            "인증번호가 일치하지 않습니다.";

        emailMessage.style.color = "tomato";
    }
}



// 비밀번호 유효성 검사
const passwordInput =
    document.getElementById("password");

passwordInput.addEventListener("input", () => {

    const pw = passwordInput.value;

    const regex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,20}$/;

    const message =
        document.getElementById("pw-message");

    if (regex.test(pw)) {

        message.innerText =
            "사용 가능한 비밀번호입니다.";

        message.style.color = "#4CAF50";

    } else {

        message.innerText =
            "영문 + 숫자 포함 8~20자";

        message.style.color = "tomato";
    }
});

// 비밀번호 확인
const pw =
    document.getElementById("password");

const pwCheck =
    document.getElementById("password-check");

pwCheck.addEventListener("input", () => {

    const msg =
        document.getElementById("pw-check-message");

    if (pw.value === pwCheck.value) {

        msg.innerText =
            "비밀번호가 일치합니다.";

        msg.style.color = "#4CAF50";

    } else {

        msg.innerText =
            "비밀번호가 일치하지 않습니다.";

        msg.style.color = "tomato";
    }

});

// 회원가입 제출
document.getElementById("signupForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const agreeTerms =
            document.getElementById("agreeTerms").checked;

        const agreeAge =
            document.getElementById("agreeAge").checked;

        if (!isEmailVerified) {

            alert("이메일 인증을 완료해주세요.");
            return;
        }

        if (pw.value !== pwCheck.value) {

            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!agreeTerms || !agreeAge) {

            alert("약관에 동의해주세요.");
            return;
        }

        alert("회원가입이 완료되었습니다.");

        location.href = "login.html";
    });