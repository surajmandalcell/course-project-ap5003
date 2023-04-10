import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { chatRooms } from "../../data/chatRooms";
import { MessageInput } from "../MessageInput";
import { MessageList } from "../MessageList";

function ChatRoom() {
  const params = useParams();
  const [room, setRoom] = useState<any>(chatRooms[0]);

  useEffect(() => {
    const room = chatRooms.find((x) => x.id === params.id);
    if (room) {
      setRoom(room);
    }
  }, [params]);


  return (
    <div className="flex flex-row w-screen h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 text-white bg-gray-800">
        <h2 className="mb-4 text-lg font-bold">Chat Rooms</h2>
        <ul>
          {chatRooms.map((room) => (
            <li key={room.id}>
              <Link
                to={`/room/${room.id}`}
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                {room.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Room */}
      <div className="w-3/4 p-4 bg-gray-900">
        <h2 className="mb-4 text-lg font-bold">{room.title}</h2>
        <div className="messages-container">
          <MessageList roomId={room.id} />
          <MessageInput roomId={room.id} />
        </div>
      </div>
    </div>
  );
}

export { ChatRoom as Landing };
