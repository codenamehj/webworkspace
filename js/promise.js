console.log('promise');

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('비동기 작업 수행');
        //resolve('작업성공');
        reject('작업실패');
    }, 1000);
})

test
.then(data => console.log('then', data))
.catch(err => console.log(err))
.finally(() => console.log('작업 끝!'));
