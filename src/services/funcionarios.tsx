import { Funcionario } from "src/types";

const url =
  process.env.NODE_ENV === "production"
    ? "http://52.200.16.124:3333"
    : "http://localhost:3333";

export async function fetchFuncionarios(idGestor: string) {
  const response = await fetch(`${url}/funcionarios/${idGestor}`);
  const data = await response.json();

  return data;
}

export async function fetchFuncionario(idFuncionario: string) {
  const response = await fetch(`${url}/funcionarios/f/${idFuncionario}`);
  const data = await response.json();

  return data;
}

export async function createFuncionario(funcionario: Funcionario) {
  await fetch(`${url}/funcionarios`, {
    body: JSON.stringify(funcionario),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
}
