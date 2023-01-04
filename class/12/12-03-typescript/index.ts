function sumJs(a, b) {
    return a + b;
}

function sumTs(a: number, b: number): number{
    return a + b;
}

interface IProfile {
    name: String,
    age: number
}

var total = sumTs(10, 20).toLocaleString();