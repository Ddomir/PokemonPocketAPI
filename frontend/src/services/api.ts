// frontend/src/api.js

const API_BASE_URL = "http://localhost:4000";

// Helper function for GET requests
async function fetchData(endpoint: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// ===================================
// Cards
// ===================================
export async function getCards() {
  return await fetchData("cards");
}

// ===================================
// Moves
// ===================================
export async function getMoves() {
  return await fetchData("moves");
}

// ===================================
// Roles
// ===================================
export async function getRoles() {
  return await fetchData("roles");
}

// ===================================
// Users
// ===================================
export async function getUsers() {
  return await fetchData("users");
}

// ===================================
// Statuses
// ===================================
export async function getStatuses() {
  return await fetchData("statuses");
}

// ===================================
// Types
// ===================================
export async function getTypes() {
  return await fetchData("types");
}
