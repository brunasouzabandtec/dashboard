const url =
  process.env.NODE_ENV === "production"
    ? "http://54.165.54.111:3333"
    : "http://localhost:3333";

export async function fetchLogs(idsMaquinas: string[]) {
  const response = await fetch(`${url}/logs/maquina/${idsMaquinas.join(";")}`);
  const data = await response.json();

  return data;
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
