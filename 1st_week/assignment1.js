/*
let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
	let fruit = fruit_list[i];
	if (fruit == '딸기') {
		count += 1;
	}
}
console.log(count);
*/
// map 구현.
/*
let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']
let count = 0

fruit_list.map((value) => {
    if (value == '딸기')
        count += 1
})
console.log(count)
*/
// filter 구현.
let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']
let strawberry = fruit_list.filter((value)=> value == '딸기')
console.log(strawberry.length)
