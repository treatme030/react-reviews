## 📰 react-review
1. 배열의 인덱스가 처음과 끝일 경우, 다음 인덱스 연결하기
```javascript
// 인덱스 체크
const checkNumber = (number) => {
    if(number > people.length - 1){
        return 0
    }
    if(number < 0){
        return people.length - 1
    }
    return number
}
// 이전 페이지로 이동
const nextPerson = () => {
    setIndex((index) => {
        let newIndex = index + 1
        return checkNumber(newIndex)
    })
}
// 다음 페이지로 이동
const prevPerson = () => {
    setIndex((index) => {
        let newIndex = index - 1
        return checkNumber(newIndex)
    })
}
```
2. 랜덤으로 리뷰 보기
```javascript
const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length) // 배열 길이 안에서만 랜덤으로 숫자 나오도록 
    if(randomNumber === index){ // 계속 다른 인덱스가 나올 수 있도록
        randomNumber++;
    }
    setIndex(checkNumber(randomNumber))
}
```
![preview](https://user-images.githubusercontent.com/74355328/147526106-0008fd19-90a6-459c-8ede-72fdbf057688.gif)

<참고> Coding Addict
