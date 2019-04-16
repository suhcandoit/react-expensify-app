const a = [1, 2, 3, 4]
const total = a.reduce((total, amount)=> {
    console.log("total: ", total)
    return total+amount
})

console.log(total);