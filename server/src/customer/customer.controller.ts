import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';


@Controller('api/customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post()
    create(@Body() createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        return this.customerService.create(createCustomerDTO);
    }

    @Get()
    findAll(): Promise<Customer[]> {
      return this.customerService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Customer> {
      return this.customerService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.customerService.remove(id);
    }

}
