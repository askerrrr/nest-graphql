import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from '../database/database.module';
import { OrderService } from './order.service';
import { OrderResolver } from './resolvers/order.resolvers';

@Module({
  exports: [OrderService, OrderResolver],
  providers: [OrderService, OrderResolver],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/order/models/schema.qql',
    }),
    MongooseModule.forRoot('mongodb://localhost/database-test', {
      connectionName: 'main',
    }),
    DatabaseModule,
  ],
})
export class OrderModule {}
