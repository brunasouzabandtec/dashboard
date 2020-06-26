export type Gestor = {
  idGestor: number;
  nomeGestor: string;
  cpfGestor: string;
  fkEmpresa: number;
  emailGestor: string;
  senhaGestor: string;
};

export type Maquina = {
  idMaquina: number;
  totalCpu: number;
  totalHd: number;
  totalRam: number;
  fkFuncionario: number;
};

export type Funcionario = {
  idFuncionario?: number;
  nomeFuncionario: string;
  cpfFuncionario: string;
  cargo: string;
  salario: number;
  expediente: number;
  emailFuncionario: string;
  senhaFuncionario: string;
  fkGestor: number;
};

export type Log = {
  idLog: number;
  porcentsUsoCpu: number;
  porcentUsoRam: number;
  porcentUsoHd: number;
  dataHora: number;
};
