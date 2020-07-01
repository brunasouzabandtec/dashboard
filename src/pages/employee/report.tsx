import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Button, Container, Table } from "src/components";
import { generateReport } from "src/services/logs";

export default function Report() {
  const router = useRouter();
  const { startDate, endDate, idMaquina, nomeFuncionario } = router.query;

  const [logs, setLogs] = useState<any>([]);

  useEffect(() => {
    if (startDate && endDate && idMaquina) {
      const fetch = async () => {
        const logs = await generateReport(
          idMaquina + "",
          startDate + "",
          endDate + ""
        );
        setLogs(logs);
      };

      fetch();
    }
  }, [startDate, endDate, idMaquina]);

  return (
    <Container className="flex-grow w-full py-4 space-y-8 sm:py-8">
      <div className="flex justify-center my-5 text-centers">
        <Button className="">Acessar PowerBI</Button>
      </div>

      <h2 className="text-2xl font-bold leading-4 text-center text-gray-900">
        Relatório {nomeFuncionario ? `- ${nomeFuncionario}` : ""}
      </h2>

      <Table head={["ID", "CPU %", "RAM %", "HD %", "Horário"]} body={logs} />
    </Container>
  );
}
