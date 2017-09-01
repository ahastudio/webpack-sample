export default class App {
  constructor() {
    console.log('-'.repeat(80));
  }

  run() {
    document.getElementById('app').innerHTML = 'Hello, world!';
  }
}
