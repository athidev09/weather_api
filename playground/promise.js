// var somePromise = new Promise((resolve, reject)=>{
// setTimeout(() => {
//     resolve('hey it worked')
//    // reject("unable to fullfil promise")
// },3000);

// });

// somePromise.then((message) => {
//     console.log('Sucess:', message);
// },(errorMessage) => {
//     console.log('Reject:',errorMessage);
// });
var asyncAdd = (a,b) => {
    return new Promise((resolve, reject)=> {
    setTimeout(()=> {
    if(typeof a==='number' && typeof b ==='number'){
    resolve(a+b)
    } else{
    reject('Arguments must be numbers');
    }
    }, 2000);
    });
    };
    asyncAdd().then((res)=> {
    console.log('Result: ', res);
    console.log('Enter a number');
    return asyncAdd(res, '33');
    }).then((res) => {
        console.log('Should be 45',res);
    }, (errorMessage) => {
        console.log(errorMessage);
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });