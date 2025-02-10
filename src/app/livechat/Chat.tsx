"use client";
import { useState, useEffect } from "react";
import { db } from '../../firebase/firebaseConfig' // Updated import path
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { Send, MessageSquare,  } from "lucide-react";


const ChatComponent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages in real-time
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as any)));
    });
    return () => unsubscribe();
  }, []);

  // Send message
  const sendMessage = async () => {
    try {
      if (!newMessage.trim()) return;

      const messageData = {
        text: newMessage,
        timestamp: new Date().toISOString(),
        createdAt: new Date()
      }

      console.log("New Message, ", messageData);

      await addDoc(collection(db, "messages"), messageData);
      setNewMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      if (error instanceof Error) {
        alert(`Failed to send message: ${error.message}`);
      }
    }
  };



  return (
    <>
{/* Floating Chat Button with Text on the Left Side */}
<div className="fixed bottom-6 right-6 flex items-center gap-2">
  <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md">Chat with us</span>
  <button
    onClick={() => setOpen(!open)}
    className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
  >
    <MessageSquare className="w-6 h-6" />
  </button>
</div>


      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-16 right-6 bg-white shadow-lg w-80 p-4 rounded-lg border">
          <div className="h-64 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="p-2 bg-yellow-100 my-2 rounded-lg">{msg.text}</div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border p-2 rounded-l-lg"
            />
            <button onClick={sendMessage} className="bg-yellow-500 text-white p-2 rounded-r-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatComponent;
