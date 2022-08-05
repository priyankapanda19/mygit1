
const today = new Date();
const date = today. getFullYear()+'-'+(today. getMonth()+1)+'-'+today. getDate();
const nameOfMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );
  console.log(nameOfMonth);
console.log(date);

const name="Plutonium"
const week="W3"
const Day="D5"
function myInfo(){

    console.log("My Batch name is "+name+"today week is "+week+ " and today is "+Day+" the topic for today is Nodejs");
}
myInfo(name,week,Day)

module.exports.call3 = nameOfMonth
module.exports.call4 = date
module.exports.call5 = myInfo



// printDate() : prints the current date
// 	- printMonth() : prints the current month
// 	- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
