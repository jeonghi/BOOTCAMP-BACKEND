import {makeTemplate} from "./template.js";

const name = "철수"
const email = "jj@ncaa.com"
const registrationNumber = "999999-1111111"
const phoneNumber = "000-0000-0000"
const favoriteSite = "fasfa.co.kr"

const profile = {
    name,
    email,
    registrationNumber,
    phoneNumber,
    favoriteSite
}

const profile2 = JSON.parse(JSON.stringify(profile))

profile2.name = "영희"


console.log(makeTemplate(profile2))
console.log(makeTemplate(profile))
