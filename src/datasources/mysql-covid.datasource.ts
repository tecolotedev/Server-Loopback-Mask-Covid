import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysqlCovid',
  connector: 'mysql',
  //url: '',
  host: 'localhost',
  port: '',
  user: 'Manuel',
  password: 'Spartan11713',
  database: 'covid'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlCovidDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysqlCovid';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysqlCovid', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
