const API_BASE_URL = "https://sturdy-sniffle-wwpp96xp95cg76r-5000.app.github.dev";

export async function apiRequest(endpoint, method = 'GET', body = null, token = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Erro na requisição');
  return data;
}