console.log('Starting App');
setTimeout(() => {
console.log('Inside of the call back');
}, 3000);
setTimeout(() => {
    console.log('The second time out');
    }, 0);
    console.log('This is in between the time outs')
setTimeout(() => {
    console.log('The third time out');
    }, 1000);
    setTimeout(() => {
        console.log('The fourth time out');
        }, 2000);

console.log('Before finishing the app');
console.log('Finishing App');
