import * as Colyseus from "colyseus.js";

/*================================================
| Array with current online players
*/
let onlinePlayers = [];

/*================================================
| Colyseus connection with server
*/

//var client = new Colyseus.Client(
//"ws://ec2-52-23-201-132.compute-1.amazonaws.com:3000"
//  "ws://localhost:3000"
//);
var client = new Colyseus.Client("ws://localhost:3000");

let room;

if (window.location.pathname.split("/")[2] == "createRoom") {
  room = client
    .create("custom", { charname: window.location.pathname.split("/")[4] })
    .then((room) => {
      console.log(room.id);
      //socket.emit("enter_room", window.location.pathname.split("/")[6], showRoom);
      //socket.emit("nickname", window.location.pathname.split("/")[5]);
      var formdata = new FormData();
      formdata.append("room_enter_id", room.id);

      var requestOptions = {
        method: "PATCH",
        redirect: "follow",
        body: formdata,
      };

      //localhost:5000/api/v1/rooms/createRoom/:mapid/:charname/:nickname/:roomid
      console.log(window.location.pathname.split("/")[6]);
      fetch(
        `http://localhost:5001/api/v1/rooms/enter/${
          window.location.pathname.split("/")[6]
        }}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      console.log(room.charname);
      console.log("create room success");
      return room;
    });
} else {
  room = client
    .joinById(window.location.pathname.split("/")[5], {
      charname: window.location.pathname.split("/")[4],
    })
    .then((room) => {
      console.log(room.id);
      //socket.emit("enter_room", window.location.pathname.split("/")[7] ,showRoom);
      //socket.emit("nickname", window.location.pathname.split("/")[6]);

      console.log("room created !!!!!");
      return room;
      /*
    console.log("front 1")
    console.log(room)
    console.log("front 2")
    console.log(room.na me);
    console.log("front 3")
    console.log((room.onMessage((data)=>console.log(data))))
    console.log("front 4")
    console.log(room.sessionId, "joined", room.name);
*/
    })
    .catch((e) => {
      console.log("JOIN ERROR", e);
      console.log("error created");
    });
}

export { onlinePlayers, room };
