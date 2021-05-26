# 이영찬 201740130
## React TodoList (2021)

## 05월 26일
>1. onChange를 통해 변경된 날짜, 시간, 입력값 받아오기
```javascript
...
onChange={(value)=>{
    return this.setState({props : value})
    }
}
...
```
>2. todoList 배열에 입력값과 날짜, 시간 저장하기
>3. ListItem을 통해 listarea에 입력값 나타내기
>4. validate로 예외처리 하기 (날짜 비교, 같은 날의 시간 비교 등)


## 05월 12일
>1. TodoList 영역 디자인
>2. material ui import
>3. datetime picker import