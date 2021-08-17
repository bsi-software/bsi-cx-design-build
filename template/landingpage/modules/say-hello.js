export default function sayHello(message) {
  return new Promise(resolve => setTimeout(resolve, 5000)).then(() => alert(message));
};
