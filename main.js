let turn = false;
const ws = new WebSocket('ws://localhost:3000');

const clicked = () => {
  if (turn) {
    ws.send('Hot Potato!');
    turn = false;
    document.querySelector('button').innerHTML = "Waiting for other player...";
    document.querySelector('button').style.backgroundColor = "grey";
  }
}

ws.addEventListener('message', event => {
  turn = true;
  document.querySelector('button').innerHTML = "Click Hot Potato!";
  document.querySelector('button').style.backgroundColor = "red";
});
