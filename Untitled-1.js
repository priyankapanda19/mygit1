// const fruit=["apple","banana","cucumber","tomato","onion"]
// const saladMaking=new Promise((resolve,reject)=>{
// if(fruit.includes('tomato') && fruit.includes('cucumber') &&  fruit.includes("onion")){
//     resolve('salad ready')
// }else{
//     reject('cant make salad')
// }

// })



// saladMaking.then((succes)=>{
//     console.log('ban gya',succes)},(error)=>{
//       console.log('error found',error);
    
    
// })


//const URL=''
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))