import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Details, Layout, Table } from "src/components";
import { fetchGestor } from "src/services/gestores";
import { Gestor, Funcionario } from "src/types";
import { fetchFuncionarios } from "src/services/funcionarios";
import { fetchQtdLogs } from "src/services/logs";
import { fetchQtdMaquinas } from "src/services/maquinas";

const ID_GESTOR = "1";

export default function Home() {
  const router = useRouter();
  const [gestor, setGestor] = useState<Gestor>();
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [qtdLogs, setQtdLogs] = useState(0);
  const [qtdMaquinas, setQtdMaquinas] = useState(0);

  useEffect(function () {
    async function fetch() {
      const funcionarios = await fetchFuncionarios(ID_GESTOR);
      setFuncionarios(funcionarios);

      const gestor = await fetchGestor(ID_GESTOR);
      setGestor(gestor);

      const qtdLogs = await fetchQtdLogs();
      setQtdLogs(qtdLogs);

      const { qtdMaquinas } = await fetchQtdMaquinas(ID_GESTOR);
      setQtdMaquinas(qtdMaquinas);
    }

    fetch();
  }, []);

  return (
    <Layout heading={`Olá, ${gestor?.nomeGestor || "..."}`}>
      <h2 className="text-2xl font-bold leading-4 text-gray-900">
        Dados gerais
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 content">
        <Details
          label="Total de funcionários"
          value={funcionarios.length + ""}
          icon="userGroup"
        />
        <Details
          label="Total de máquinas"
          value={qtdMaquinas + ""}
          icon="terminal"
        />
        <Details label="Total de logs" value={qtdLogs + ""} icon="terminal" />
      </div>

      <h2 className="text-2xl font-bold leading-4 text-gray-900">
        Funcionários
      </h2>

      <Table
        head={["ID", "Nome", "Cargo", "E-mail", "Carga horária (h)"]}
        body={funcionarios}
        onRowClick={({ idFuncionario }) =>
          router.push(`/employee/${idFuncionario}`)
        }
      />
    </Layout>
  );
}
