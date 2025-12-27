'use server'
const API_URL = process.env.API_URL
  || 'http://localhost:3000';
export async function getUsers(page: number = 1, limit: number = 10) {
  try {
    const response = await fetch(`${API_URL}/data?page=${page}&limit=${limit}`, {
      next: { revalidate: 0 }, 
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Бэкенд ответил с ошибкой:", errorText);
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Критическая ошибка fetch:", error);
    throw error;
  }
}
export async function createRegistration(formData: any) {
  try {
    const response = await fetch(`${API_URL}/submit-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Бэкенд ответил с ошибкой:", errorText);
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Критическая ошибка fetch при регистрации:", error);
    throw error;
  }
}