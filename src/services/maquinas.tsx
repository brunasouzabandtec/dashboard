const url =
  process.env.NODE_ENV === "production"
    ? "http://52.200.16.124:3333"
    : "http://localhost:3333";

export async function fetchMaquinas(idsMaquinas: string[]) {
  const response = await fetch(`${url}/maquinas/${idsMaquinas.join(";")}`);
  const data = await response.json();

  return data;
}

export async function fetchMaquinasFuncionario(idFuncionario: string) {
  const response = await fetch(`${url}/maquinas/funcionario/${idFuncionario}`);
  const data = await response.json();

  return data;
}
