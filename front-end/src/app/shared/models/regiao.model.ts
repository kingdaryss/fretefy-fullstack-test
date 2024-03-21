import { Entity } from "./entity.model";

export interface Regiao extends Entity {
  name: string;
  status?: boolean;
  citys?: Regiao[];
}
