const randomColor = () => {
  let color = ``;

  for (let i = 0; i < 6; i++) {
    color += `${Math.floor(Math.random() * 16).toString(16)}`;
  }

  return `#${color}`;
};

const createCursor = (color) => {
  const cursor = document.createElement("div");
  cursor.setAttribute("class", "cursor");
  app.append(cursor);

  cursor.style.background = color || randomColor();

  return cursor;
};

let otherCursor;
window.addEventListener("DOMContentLoaded", () => {
  socket.emit("joinUser", otherCursor);
  otherCursor = createCursor();

  otherCursor.style.opacity = 0.5;
});

const socket = io();
const app = document.querySelector("#app");

const myCursor = createCursor();

app.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  myCursor.style.left = `${x}px`;
  myCursor.style.top = `${y}px`;

  const cursor = { bgColor: myCursor.style.background, x, y };
  socket.emit("move", cursor);
});

socket.on("mousemove", (cursor) => {
  otherCursor.style.top = `${cursor.y}px`;
  otherCursor.style.left = `${cursor.x}px`;
});
