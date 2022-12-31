import axios from 'axios'


const url = "http://koreanjson.com/posts/1"
// nodejs 는 기본적으로 비동기임
const fetchPost = () => {
    const result = axios.get(url) // 노드 js는 기본적으로 논블록킹 - 비동기적이다
    console.log(result)
}

// async 구문을 이용하면 비동기 함수를 내부적으로 동기적 방식으로 이용할 수 있음.
const fetchPost2 = async () => {
    const result = await axios.get(url)
    console.log(result.data)
}


fetchPost()
fetchPost2()
