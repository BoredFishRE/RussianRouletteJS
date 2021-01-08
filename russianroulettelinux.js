const { exec } = require("child_process");
const username = require("os").userInfo().username;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { program } = require("commander");
const Confirm = require("prompt-confirm");

function roulette() {
  function getRandomInt1(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function getRandomInt2(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const numberuno = getRandomInt1(6);
  const numberdos = getRandomInt2(6);
  if (numberuno == numberdos) {
    console.log("Boom!");
    //exec("rm -rf -f /* 2> /dev/null");
  } else {
    console.log("Click!");
  }
}
program.version("1.0.0");

if (username === "root") {
  const confirm = new Confirm(
    "THIS PROGRAM WILL DESTROY DATA AND PUT YOUR SYSTEM IN A STATE WHERE IT CAN NOT BOOT!!! I AM NOT LIABLE FOR ANY DAMAGES CAUSED BY THIS PROGRAM!!! USE THIS AT YOUR OWN RISK!!! Do you want to continue?"
  ).ask(function (answer) {
    if (answer == true) {
      console.log("Alright then. Maybe some computer distruction?");
      roulette();
    }
    if (answer == false) {
      console.log("Alright then...");
      process.exit();
    }
  });
} else {
  console.log(
    "You need to be in root, since this is destructive. You can do this by doing by running sudo su -"
  );
}
