export const getToday = () => {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = date.getMonth() + 1
    const dd = date.getDay()

    return `${yyyy}-${mm}-${dd}`
}