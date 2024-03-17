export interface Regiao {
  id: number;
  nome: string;
  status: boolean;
  cidades?: Regiao[];
}
