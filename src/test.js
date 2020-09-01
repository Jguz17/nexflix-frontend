// ---- CALLBACKS ----

// ---- When a function simply accepts another function as an argument, 
// ---- this contained function is known as a callback function

// const list = ['man', 'woman', 'child']

// // create a new array
// // loop over the array and map the data to new content
// const newList = list.map((val) => {
//   return val + " kind";
// });
// console.log(newList)

// function greeting(name) {
//     console.log(`Hello ${name}, welcome to Scotch!`);
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;

//     callback(fullName);
// }
  
// introduction('Chris','Nwamba', greeting); // Hello Chris Nwamba, welcome to Scotch!

// ---- PROMISES ----

// const weather = true
// const date = new Promise(function(resolve, reject) {
//   if (weather) {
//     const dateDetails = {
//       name:     'Cubana Restaurant',
//       location: '55th Street',
//       table:    5
//     };
//     resolve(dateDetails)
//   } else {
//     reject(new Error('Bad weather, so no Date'))
//   }
// });

// const myDate = function() {
//     date
//         .then(function(done) {
//         console.log('We are going on a date!')
//         console.log(done)
//         })
//         .catch(function(error) {
//             console.log(error.message)
//         })
// }
  
// myDate();

// const orderUber = function(dateDetails) {
//     const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
//     return Promise.resolve(message)
// } 

// const myDate = function() {

//     date
//         .then(orderUber)
//         .then(function(done) {
//         console.log(done);
//         })
//         .catch(function(error) {
//         console.log(error.message)
//         })
// }
  
//   myDate();

// ---- ASYNC AND AWAIT ----

// async function myDate() {
//     try {
//         let dateDetails = await date;
//         let message = await orderUber(dateDetails);
//         console.log(message);

//     } catch(error) {
//         console.log(error.message);
//     }
// }

// (async () => { 
//     await myDate();
// })();