import axios from "axios";

// Create an Axios instance
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});
// --- AUTHENTICATION ENDPOINTS ---
export const saveQuizResult = (data) => API.post("/quiz", data);
export const registerUser = (data) => API.post("/users/register", data);
export const loginUser = (credentials) => API.post("/users/login", credentials);

// --- OTHER ENDPOINTS ---
export const getMembers = () => API.get("/members");
export const getStories = () => API.get("/stories");
export const getGallery = () => API.get("/gallery");
export const getEvents = () => API.get("/events");

export default API;
