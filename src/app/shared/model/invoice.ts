import { LineCommand } from './line-command';
import { Product } from './product';



export interface invoice {

  ID: number;
  name: String;
  command: LineCommand[];
}

