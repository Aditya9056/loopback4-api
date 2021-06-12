import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoDB_Atlas',
  connector: 'mongodb',
  url: 'mongodb+srv://hotel-api-test:thisisasometh@cluster0.bxnhg.mongodb.net/hotel-test-api?retryWrites=true&w=majority',
  port: 27017,
  database: 'hotel-test-api',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbAtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MongoDB_Atlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoDB_Atlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
