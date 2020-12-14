import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

export default function sockets(socket: Socket) {
  socket.on("joinUser", (cursor) => {
    socket.broadcast.emit("joinUser", cursor);
    socket.join(uuid() + uuid());
  });

  socket.on("move", (cursor) => {
    socket.broadcast.emit("mousemove", cursor);
  });

  // socket.on("disconnect", () => {
  // });
}
