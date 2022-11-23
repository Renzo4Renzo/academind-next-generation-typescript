const sum = (a: number, b: number) => a + b;

// const sum = (a: number, b: number) => {
//   return a + b;
// };
console.log(sum(2, 9));

const printOutput: (output: string | number) => void = (output) => console.log(output);

printOutput(sum(5, 4));

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
