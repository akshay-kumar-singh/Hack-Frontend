import { API_BASE_URL } from "../baseUrl/baseurl";

export const registerUser = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      return data;
    } catch (error) {
      throw error;
    }
  };

  export const loginUser = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
  
      return data;
    } catch (error) {
      throw error;
    }
  };