import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  
  firebase.initializeApp(config);
  
  const database = firebase.database();
  
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

  // database.ref('expenses').push({
  //   description: 'Skiing',
  //   note:'Monthly bill',
  //   amount: 45000,
  //   createAt:123232323
  // })

  // database.ref('expenses').push({
  //   description: 'Climbing Gym',
  //   note:'Monthly bill',
  //   amount: 4500
  // })

  // database.ref('expenses').push({
  //   description: 'Food',
  //   note:'Monthly bill',
  //   amount: 120000
  // })

  // const expenseRef = database.ref("expenses");
  // expenseRef.on("child_removed", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  
  // expenseRef.on("child_changed", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  
  // expenseRef.on("child_added", (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
  
  // expenseRef.on("value", (snapshot) => {
  //   const expenses = [];
  //   snapshot.forEach((data) => {
  //       expenses.push(
  //         {
  //           id: data.key,
  //           ...data.val()
  //         }
  //       )
  //     });
  // });

  // database.ref().on('value', (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  // })
 
  // setTimeout(()=>{
  //   database.ref('name').set('Mike');   
  // }, 5000)

  // database.ref().once('value').then((snapshot) => {
  //   console.log(snapshot.val());
  // })

  // database.ref().set({
  //   name:'Suh Kim',
  //   age:41,
  //   stressLevel: 6,
  //   job: {
  //     title:'Software developer',
  //     company:'Google'
  //   },
  //   location: {
  //     city:'issaquah',
  //     state:'washington' 
  //   }
  // }).then(() => {
  //   console.log("Data is saved");
  // }).catch((error) => {
  //   console.log(`Failed with ${error}`);
  // })

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // }).then(()=>{
  //   console.log('New date is updated');
  // }).catch((error) => {
  //   console.log(`Failed to update with ${error}`);
  // })

//  export const removeFB = () => {
//   database.ref('expenses/-LchzKLVucFrpIj9x9_Q')
//   .remove()
//   .then(()=>{
//     console.log('-LchzKLVucFrpIj9x9_Q is removed');
//   }).catch((error) => {
//     console.log('Fail to remove -LchzKLVucFrpIj9x9_Q ${error}');
//   })
//  }
// database.ref('isSingle')
//   .remove()
//   .then(()=>{
//     console.log('isSingle is removed');
//   }).catch((error) => {
//     console.log('Fail to remove with an error ${error}');
//   })
