import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Details, Layout, Table } from "src/components";
import { fetchGestor } from "src/services/gestores";
import { Gestor, Funcionario } from "src/types";
import { fetchFuncionarios } from "src/services/funcionarios";

const ID_GESTOR = "1";

export default function Home() {
  const router = useRouter();
  const [gestor, setGestor] = useState<Gestor>();
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(function () {
    async function fetch() {
      const gestor = await fetchGestor(ID_GESTOR);
      setGestor(gestor);
    }

    fetch();
  }, []);

  useEffect(function () {
    async function fetch() {
      const funcionarios = await fetchFuncionarios(ID_GESTOR);
      setFuncionarios(funcionarios);
    }

    fetch();
  }, []);

  return (
    <Layout heading={`Olá, ${gestor?.nomeGestor || "..."}`}>
      <h2 className="text-2xl font-bold leading-4 text-gray-900">
        Estatísticas gerais
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Details label="Memória RAM" value="16GB" icon="annotation" />
        <Details label="CPU" value="2.5Ghz" icon="annotation" />
        <Details label="HD" value="1TB" icon="annotation" />
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
