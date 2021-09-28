let users = [
  { username: "SonicDaHedgehog", password: "chilidog" },
  { username: "MilesTailsPrower", password: "iluvtech" },
  { username: "KnucklesDaEchidna", password: "mad4life" },
  { username: "BlazeIsOnFire", password: "palindrome" },
];

let args = process.argv;
let username = args[2];
let password = args[3];


  try {
    let checkUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!checkUser) {
      throw new Error("Username or Password is incorrect");
    }

    console.log("Welcome, youve got mail!");
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  } finally {
    console.log("finally, we got rid of AOL");
  }
  console.log("Thanks for trying!");
