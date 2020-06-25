import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {IngresoInfo} from '../models';
import {IngresoInfoRepository} from '../repositories';



export class IngresoController {
  constructor(
    @repository(IngresoInfoRepository)
    public ingresoInfoRepository : IngresoInfoRepository,
  ) {}

  @post('/ingreso-infos', {
    responses: {
      '200': {
        description: 'IngresoInfo model instance',
        content: {'application/json': {schema: getModelSchemaRef(IngresoInfo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoInfo, {
            title: 'NewIngresoInfo',
            exclude: ['id'],
          }),
        },
      },
    })
    ingresoInfo: Omit<IngresoInfo, 'id'>,
  ): Promise<IngresoInfo> {
    console.log(ingresoInfo)
    return this.ingresoInfoRepository.create(ingresoInfo);
  }

  @get('/ingreso-infos/count', {
    responses: {
      '200': {
        description: 'IngresoInfo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(IngresoInfo) where?: Where<IngresoInfo>,
  ): Promise<Count> {
    return this.ingresoInfoRepository.count(where);
  }

  @get('/ingreso-infos', {
    responses: {
      '200': {
        description: 'Array of IngresoInfo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(IngresoInfo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(IngresoInfo) filter?: Filter<IngresoInfo>,
  ): Promise<IngresoInfo[]> {
    return this.ingresoInfoRepository.find(filter);
  }

  @patch('/ingreso-infos', {
    responses: {
      '200': {
        description: 'IngresoInfo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoInfo, {partial: true}),
        },
      },
    })
    ingresoInfo: IngresoInfo,
    @param.where(IngresoInfo) where?: Where<IngresoInfo>,
  ): Promise<Count> {
    return this.ingresoInfoRepository.updateAll(ingresoInfo, where);
  }

  @get('/ingreso-infos/{id}', {
    responses: {
      '200': {
        description: 'IngresoInfo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(IngresoInfo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(IngresoInfo, {exclude: 'where'}) filter?: FilterExcludingWhere<IngresoInfo>
  ): Promise<IngresoInfo> {
    return this.ingresoInfoRepository.findById(id, filter);
  }

  @patch('/ingreso-infos/{id}', {
    responses: {
      '204': {
        description: 'IngresoInfo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(IngresoInfo, {partial: true}),
        },
      },
    })
    ingresoInfo: IngresoInfo,
  ): Promise<void> {
    await this.ingresoInfoRepository.updateById(id, ingresoInfo);
  }

  @put('/ingreso-infos/{id}', {
    responses: {
      '204': {
        description: 'IngresoInfo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ingresoInfo: IngresoInfo,
  ): Promise<void> {
    await this.ingresoInfoRepository.replaceById(id, ingresoInfo);
  }

  @del('/ingreso-infos/{id}', {
    responses: {
      '204': {
        description: 'IngresoInfo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ingresoInfoRepository.deleteById(id);
  }
}
