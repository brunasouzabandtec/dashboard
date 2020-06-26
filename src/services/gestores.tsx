const url =
  process.env.NODE_ENV === "production"
    ? "https://api-home-up.herokuapp.com"
    : "http://localhost:3333";

export async function fetchGestor(idGestor: string) {
  const response = await fetch(`${url}/gestores/${idGestor}`);
  const data = await response.json();

  return data;
}
