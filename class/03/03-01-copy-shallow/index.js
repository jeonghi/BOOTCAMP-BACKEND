const profile = {
    name: '철수',
    age: 8,
    school: '다람쥐초등학교',
};
const profile2 = profile; // 얕은 복사

profile2; // { name: '철수', age: 8, school: '다람쥐초등학교' };
profile.name = "영희"

console.log(profile2)


const profile3 = {
    name: profile.name,
    age: profile.age,
    school: profile.school
}

profile.name = '훈이'
console.log(profile3.name)

const profile4 = {...profile};
// spread 연산자?

profile.name = '지수'
profile4.name; // 훈이

const result = []
const arr = [1,2,3]
const arr2 = [4,5,6]

result.push(...arr, ...arr2)