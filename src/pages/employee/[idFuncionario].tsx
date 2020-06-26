import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  Button,
  Card,
  Details,
  DescriptionHeader,
  DescriptionRow,
  Input,
  Layout,
  Table,
  Tabs,
} from "src/components";

import { Funcionario, Gestor, Maquina } from "src/types";
import { fetchGestor } from "src/services/gestores";
import { fetchMaquinasFuncionario, fetchMaquinas } from "src/services/maquinas";
import { fetchLogs } from "src/services/logs";
import { fetchFuncionario } from "src/services/funcionarios";

const ID_GESTOR = "1";

export default function Employee() {
  const router = useRouter();
  const [gestor, setGestor] = useState<Gestor>();
  const [logs, setLogs] = useState<any>([]);
  const [maquinas, setMaquinas] = useState<Maquina[]>([]);
  const [maquinaSelecionada, setMaquinaSelecionada] = useState<Maquina>();
  const [funcionario, setFuncionario] = useState<Funcionario>();
  const [hasMaquinas, setHasMaquinas] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { idFuncionario } = router.query;

  useEffect(function () {
    async function fetch() {
      const gestor = await fetchGestor(ID_GESTOR);
      setGestor(gestor);
    }

    fetch();
  }, []);

  useEffect(() => {
    if (idFuncionario) {
      const fetch = async () => {
        const idsMaquinas = await fetchMaquinasFuncionario(idFuncionario + "");

        const funcionario = await fetchFuncionario(idFuncionario + "");
        setFuncionario(funcionario);

        if (idsMaquinas.length) {
          const maquinas = await fetchMaquinas(idsMaquinas);
          setMaquinas(maquinas);
          setMaquinaSelecionada(maquinas[0]);

          const logs = await fetchLogs(idsMaquinas);
          setLogs(logs);

          setHasMaquinas(true);
        }
      };

      fetch();
    }
  }, [idFuncionario]);

  return (
    <Layout heading={`Olá, ${gestor?.nomeGestor || "..."}`}>
      <Card className="max-w-2xl mx-auto divide-y divide-gray-200">
        <DescriptionHeader
          title="Dados pessoais"
          subtitle="Informações detalhadas sobre o funcionário"
        />
        <DescriptionRow
          label="ID"
          value={"#" + (funcionario?.idFuncionario || "???")}
        />
        <DescriptionRow
          label="Nome completo"
          value={funcionario?.nomeFuncionario || "???"}
        />
        <DescriptionRow label="Cargo" value={funcionario?.cargo || "???"} />
        <DescriptionRow
          label="Salário"
          value={"R$" + (funcionario?.salario || "???")}
        />
        <DescriptionRow
          label="E-mail"
          value={funcionario?.emailFuncionario || "???"}
        />
      </Card>

      <hr />

      <h2 className="text-2xl font-bold leading-4 text-gray-900">
        Informações sobre máquina #{maquinaSelecionada?.idMaquina}
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Details
          label="CPU"
          value={(maquinaSelecionada?.totalCpu || "???") + ".0Ghz"}
          icon="annotation"
        />
        <Details
          label="HD"
          value={(maquinaSelecionada?.totalHd || "???") + "MB"}
          icon="annotation"
        />
        <Details
          label="RAM"
          value={(maquinaSelecionada?.totalRam || "???") + "GB"}
          icon="annotation"
        />
      </div>

      {hasMaquinas ? (
        <>
          <h2 className="text-2xl font-bold leading-4">Logs recentes</h2>

          <Tabs>
            {Object.keys(logs).map(function (idMaquina) {
              return (
                <div
                  key={idMaquina}
                  onClick={() =>
                    setMaquinaSelecionada(
                      maquinas.find((m) => idMaquina === m.idMaquina + "")
                    )
                  }
                >
                  Máquina #{idMaquina}
                </div>
              );
            })}

            {Object.keys(logs).map(function (idMaquina) {
              return (
                <Table
                  key={idMaquina}
                  head={["ID", "CPU %", "RAM %", "HD %", "Horário"]}
                  body={logs[idMaquina]}
                  footer={
                    <div className="flex flex-wrap items-end justify-between w-full px-6 py-3 space-y-4 border-t border-gray-200 bg-gray-50 sm:space-y-0 md:space-y-4 lg:space-y-0">
                      <Input
                        label="Data de início"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                      <Input
                        label="Data fim"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                      <Button
                        onClick={() =>
                          router.push({
                            pathname: "/employee/report",
                            query: {
                              endDate,
                              startDate,
                              idMaquina: maquinaSelecionada.idMaquina,
                              nomeFuncionario: funcionario.nomeFuncionario,
                            },
                          })
                        }
                      >
                        Gerar relatório
                      </Button>
                    </div>
                  }
                />
              );
            })}
          </Tabs>
        </>
      ) : (
        <h2 className="text-2xl font-bold leading-4 text-center text-gray-900">
          Não há máquinas.
        </h2>
      )}
    </Layout>
  );
}
