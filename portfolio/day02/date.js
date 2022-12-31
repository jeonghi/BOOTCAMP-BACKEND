let printCurrTimeInfomation = () => {

    const date = new Date()

    const YYYY = date.getFullYear()
    const MM = date.getMonth()
    const DD = date.getDay()
    const hh = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()

    console.log(`오늘은 ${YYYY}년 ${MM}월 ${DD}일 ${hh}:${mm}:${ss}입니다`)
}

printCurrTimeInfomation()