console.log("Start");

new Promise((resolve, reject) => {
  //console.log("Body promise");

  setTimeout(() => {
    //resolve("My friend did it");

    reject("My friend did not");
  }, 1000);
})
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage))
  .finally(() => console.log("Promise finished"));

console.log("Fin");
