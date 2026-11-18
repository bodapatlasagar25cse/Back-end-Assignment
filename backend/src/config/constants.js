import dns from "node:dns";
import dotenv from "dotenv";

// DNS fix for Windows + Node 24 to avoid ECONNREFUSED with MongoDB Atlas
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 8000;
