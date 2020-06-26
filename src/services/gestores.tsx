const url =
  process.env.NODE_ENV === "production"
    ? "http://52.200.16.124:3333"
    : "http://localhost:3333";

export async function fetchGestor(idGestor: string) {
  const response = await fetch(`${url}/gestores/${idGestor}`);
  const data = await response.json();

  return data;
}
