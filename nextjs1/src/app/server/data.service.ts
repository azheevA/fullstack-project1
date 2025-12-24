export async function getUsers(page: number = 1, limit: number = 10) {
  try {
    const response = await fetch(`http://localhost:3000/data?page=${page}&limit=${limit}`, {
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