import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { OrderModule } from 'src/order/order.module';

@Module({ imports: [UserModule, OrderModule] })
export class AppModule {}
