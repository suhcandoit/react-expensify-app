const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //resolve('Resolved is called with data');
        //reject('Promise is failed');
        resolve({
            name:'suh',
            age: 31
        })
    }, 5000)
})

console.log('Before');
promise.then((data) => {
    console.log("1", data)
}).catch((error)=>{
    console.log(`Error occurs ${error}`)
})
console.log('After');