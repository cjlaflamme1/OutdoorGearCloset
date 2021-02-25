import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    exports: [TypeOrmModule],
    providers: [CustomerService],
    controllers: [CustomerController]
})
export class CustomerModule { }
