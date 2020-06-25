import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class IngresoInfo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  horaEntrada: string;

  @property({
    type: 'number',
    required: true,
  })
  nCuenta: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  cubrebocas: boolean;

  @property({
    type: 'string',
    default: 'estudiante',
  })
  tipoPersona?: string;
  
  @property({
    type:'string',
    required:true
  })
  linkImg:string;


  [prop: string]: any;

  constructor(data?: Partial<IngresoInfo>) {
    super(data);
  }
}

export interface IngresoInfoRelations {
  // describe navigational properties here
}

export type IngresoInfoWithRelations = IngresoInfo & IngresoInfoRelations;
