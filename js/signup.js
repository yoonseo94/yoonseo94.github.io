const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");
      btnSignUp = document.getElementById('singup');


    //   비밀번호 숨기기
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // 로그인 & 회원가입 
    signUp.addEventListener("click", ()=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ()=>{
        container.classList.remove("active");
    });


    function signupCheck() {
        btnSignUp.addEventListener('click', (e) => {
            const members = JSON.parse(localStorage.getItem('members'));
            const email = document.querySelector('#email').value;
    
            members.forEach((member) => {
                if(emailVal == member.email){
                    alert('이미 존재하는 아이디입니다.');
                    email.select();
                    e.preventDefault();
                    return;
                } 
            });
    
            // 이름
            if(!/^[가-힣]{2,8}$/.test(userName.value)){
                alert('이름 조건에 유효하지 않습니다.');
                userName.select();
                e.preventDefault();
                return;
            }
            // 이메일 아이디
            if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email.value)){
                printFailedMsg("email", "올바른 형식의 이메일이 아닙니다.");
                signupFrm.email.value = "";
                signupFrm.email.focus();
                return;
                
            }
    
            // 비밀번호
            if(!/^(?=.*[a-z0-9])(?=.*[a-z!@#$%^&*])(?=.*[0-9!@#$%^&*]).{8,16}$/i.test(memberPwd.value)){
                alert('비밀번호 조건에 유효하지 않습니다.');
                signupFrm.pwd.value = "";
                signupFrm.pwd.focus();
                return;
            }
            // 비밀번호 확인
            if(pwd.value !== pwdCheck.value){
                alert('비밀번호 확인이 일치하지 않습니다.');
                signupFrm.pwd.value = "";
                signupFrm.pwdCheck.value = "";
                signupFrm.pwd.focus();
                return;
            }
            
        });
        
        localStorage.setItem(userName.value, email.value, pwd.value);
        
    }


// 회원가입 제출
    const member = () => {

        const usernameVal = document.querySelector('#userName').value;
        const emailVal = document.querySelector('#email').value;
        const pwdVal = document.querySelector('#pwd').value;

        const member = new Member(usernameVal, emailVal, pwdVal);

        const members = JSON.parse(localStorage.getItem('members')) || [];
        members.push(member);

        localStorage.setItem('members', JSON.stringify(members));

        document.signupFrm.reset();

        return members;
    }

    class Member {
        constructor(userName, email, pwd, datetime = Date.now()){
            this.userName = userName;
            this.email = email;
            this.pwd = pwd;
            this.datetime = datetime;
        }
    }

    // function memberList() {
    //     members = JSON.parse(localStorage.getItem('members'))
    //         members.forEach((member, index) => {
    //             const {userName, email, pwd, datetime} = member;
    //             const lender = `${index + 1},${userName}, ${email}, ${pwd}, ${formatDatetime(datetime)}`;
    //     alert(lender);
    //     })
    // }




