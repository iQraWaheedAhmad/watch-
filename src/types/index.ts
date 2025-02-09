// filepath: /my-express-app/my-express-app/src/types/index.ts

export interface Message {
    id: string;
    text: string;
    timestamp: string;
    createdAt: Date;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface ChatStats {
    totalMessages: number;
    activeUsers: number;
    messagesToday: number;
  }