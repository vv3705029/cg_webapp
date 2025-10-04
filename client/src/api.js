import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`, // Backend base URL
  withCredentials: true, // Needed to send/receive cookies
});

// --- AUTHENTICATION ENDPOINTS ---
export const saveQuizResult = (data) => API.post("/quiz", data);
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (credentials) => API.post("/users/login", credentials);

// --- OTHER ENDPOINTS (Optional) ---
export const getMembers = () => API.get("/members");
export const getStories = () => API.get("/stories");
export const getGallery = () => API.get("/gallery");
export const getEvents = () => API.get("/events");

export default API;
