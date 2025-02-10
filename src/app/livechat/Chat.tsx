 
 
 

"use client";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { MessageSquare } from "lucide-react";

const ChatComponent = () => {
  const [open, setOpen] = useState(false);
  const [, setMessages] = useState<{ id: string; text: string }[]>([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, text: (doc.data() as { text: string }).text }))
      );
    });
    return () => unsubscribe();
  }, []);

  
  return (
    <>
      <div className="fixed bottom-6 right-6 flex items-center gap-2">
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
    </>
  );
};

export default ChatComponent;
