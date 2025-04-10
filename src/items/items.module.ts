import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './resolvers/items.resolvers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ItemsService, ItemsResolver],
  exports: [ItemsService, ItemsResolver],
  imports: [DatabaseModule],
})
export class ItemsModule {}
