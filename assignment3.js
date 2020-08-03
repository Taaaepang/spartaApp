
// 정규표현식.
function checkEmail(email){
    let check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    if (check.test(email))
        console.log("good")
    else
        console.log("bad")
}
/*
split으로 찾기.
function checkEmail(email){
    let check = email.split('@')
    if (check == email){
        console.log("bad")
        return -1
    }
    check2 = check[1].split('.')
    if (check2 == check[1]){
        console.log("bad")
        return -1
    }
    console.log("good")
}
*/

/*
indexOf로 찾기.
function checkEmail(email){
    if(email.indexOf('@') !== -1 && email.indexOf('.') !== -1)
        console.log("good")
    else
        console.log("bad")
}
*/
checkEmail('ggp02261@gmail.com')