"use client";

import { useState, useEffect, FormEvent } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { MessageSquare, Send } from "lucide-react";

const ChatComponent = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ id: string; text: string; timestamp: Date }[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timestamp?.toDate(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4">
        {open && (
          <div className="w-96 h-[400px] bg-white rounded-lg shadow-xl flex flex-col">
            <div className="p-4 bg-yellow-500 text-white rounded-t-lg">
              <h3 className="font-semibold">Live Chat</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div key={message.id} className="mb-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-gray-800">{message.text}</p>
                    <span className="text-xs text-gray-500">
                      {message.timestamp?.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md">
            Chat with us
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;