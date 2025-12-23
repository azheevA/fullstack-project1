export async function getUsers(page: number = 1, limit: number = 10) {
  const response = await fetch(`http://localhost:3000/data?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}