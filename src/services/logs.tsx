const url =
  process.env.NODE_ENV === "production"
    ? "https://api-home-up.herokuapp.com"
    : "http://localhost:3333";

export async function fetchLogs(idsMaquinas: string[]) {
  const response = await fetch(`${url}/logs/maquina/${idsMaquinas.join(";")}`);
  const data = await response.json();

  return data;
}

export async function fetchQtdLogs() {
  const response = await fetch(`${url}/logs`);
  const data = await response.json();

  return data.length;
}

export async function generateReport(
  idMaquina: string,
  startDate: string,
  endDate: string
) {
  const response = await fetch(
    `${url}/logs/report/${idMaquina}/${startDate}/${endDate}`
  );
  const data = await response.json();

  return data;
}
