import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Button, Card, Input, Layout } from "src/components";
import { fetchGestor } from "src/services/gestores";
import { createFuncionario } from "src/services/funcionarios";
import { Gestor } from "src/types";

const ID_GESTOR = "1";

export default function Register() {
  const router = useRouter();
  const [gestor, setGestor] = useState<Gestor>();
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [cargo, setCargo] = useState("");
  const [cpfFuncionario, setCpfFuncionario] = useState("");
  const [salario, setSalario] = useState(1);
  const [expediente, setExpediente] = useState(8);
  const [emailFuncionario, setEmailFuncionario] = useState("");
  const [senhaFuncionario, setSenhaFuncionario] = useState("");

  useEffect(function () {
    async function fetch() {
      const gestor = await fetchGestor(ID_GESTOR);
      setGestor(gestor);
    }

    fetch();
  }, []);

  async function registerEmployee(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createFuncionario({
      nomeFuncionario,
      cargo,
      cpfFuncionario,
      salario,
      expediente,
      emailFuncionario,
      senhaFuncionario,
      fkGestor: Number(ID_GESTOR),
    });

    router.push("/");
  }

  return (
    <Layout heading={`Olá, ${gestor?.nomeGestor || "..."}`}>
      <h3 className="text-2xl font-bold leading-4 text-center">
        Registrar funcionário
      </h3>
      <Card className="max-w-xs p-4 mx-auto">
        <form
          className="flex flex-col items-center space-y-4"
          onSubmit={registerEmployee}
        >
          <Input
            label="Nome completo"
            value={nomeFuncionario}
            onChange={(e) => setNomeFuncionario(e.target.value)}
          />
          <Input
            label="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
          <Input
            label="CPF"
            value={cpfFuncionario}
            onChange={(e) => setCpfFuncionario(e.target.value)}
          />
          <Input
            label="Salário"
            min="1"
            type="number"
            value={salario}
            onChange={(e) => setSalario(Number(e.target.value))}
          />
          <Input
            label="Carga horária"
            min="1"
            type="number"
            value={expediente}
            onChange={(e) => setExpediente(Number(e.target.value))}
          />
          <Input
            label="E-mail"
            type="email"
            value={emailFuncionario}
            onChange={(e) => setEmailFuncionario(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={senhaFuncionario}
            onChange={(e) => setSenhaFuncionario(e.target.value)}
          />
          <Button expand>Registrar</Button>
        </form>
      </Card>
    </Layout>
  );
}
