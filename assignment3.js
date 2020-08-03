
// 정규표현식.
function checkEmail(email){
    let check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (check.test(email))
        console.log("이메일이 맞습니다.")
    else
        console.log("이메일이 아닙니다.")
}
/*
split으로 찾기.
function checkEmail(email){
    let check = email.split('@')
    if (check == email){
        console.log("이메일이 아닙니다.")
        return -1
    }
    check2 = check[1].split('.')
    if (check2 == check[1]){
        console.log("이메일이 아닙니다.")
        return -1
    }
    console.log("이메일이 맞습니다.")
}
*/

/*
indexOf로 찾기.
function checkEmail(email){
    if(email.indexOf('@') !== -1 && email.indexOf('.') !== -1)
        console.log("이메일이 맞습니다.")
    else
        console.log("아메일이 아닙니다.")
}
*/
checkEmail('ggp02261@gmail.com')