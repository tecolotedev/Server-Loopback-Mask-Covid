import {DefaultCrudRepository} from '@loopback/repository';
import {IngresoInfo, IngresoInfoRelations} from '../models';
import {MysqlCovidDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IngresoInfoRepository extends DefaultCrudRepository<
  IngresoInfo,
  typeof IngresoInfo.prototype.id,
  IngresoInfoRelations
> {
  constructor(
    @inject('datasources.mysqlCovid') dataSource: MysqlCovidDataSource,
  ) {
    super(IngresoInfo, dataSource);
  }
}
