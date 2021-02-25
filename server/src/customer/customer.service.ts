import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDTO } from './dto/create-customer.dto';


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>
    ) {}

    create(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const customer = new Customer();
        customer._id = createCustomerDTO._id;
        customer.name = createCustomerDTO.name;
        customer.type = createCustomerDTO.type;

        return this.customerRepository.save(customer);
    }

    findAll(): Promise<Customer[]> {
        return this.customerRepository.find();
      }
    
      findOne(id: string): Promise<Customer> {
        return this.customerRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.customerRepository.delete(id);
      }
}
