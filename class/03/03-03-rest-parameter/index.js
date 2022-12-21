const child = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
    money: 2000,
    hobby: {
        one: '수영',
        two: '프로그래밍',
    }
};

const {money, school, ...rest} = child

// rest parameter를 통해 생성되는 객체는 스프레드 연산자를 사용했을 때와 같이 얕은 복사로 생성되는 객체이다.

console.log(rest)

child.hobby.one = '배구'

console.log(rest)
