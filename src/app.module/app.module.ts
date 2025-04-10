import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserModule } from 'src/user/user.module';
import { OrderModule } from 'src/order/order.module';
import { DatabaseModule } from 'src/database/database.module';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [
    UserModule,
    OrderModule,
    ItemsModule,
    DatabaseModule,
    MongooseModule.forRoot('mongodb://localhost/database-test', {
      connectionName: 'main',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.qql',
    }),
  ],
})
export class AppModule {}
