import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDTO } from './dto/create-inventory-item.dto';
import { InventoryItem } from './inventory-item.entity';



@Injectable()
export class InventoryItemsService {
    constructor(
        @InjectRepository(InventoryItem)
        private readonly inventoryItemRepository: Repository<InventoryItem>,
    ) {}

    create(createItemDTO: CreateItemDTO): Promise<InventoryItem> {
        const item = new InventoryItem();
        item._id = createItemDTO._id;
        item.name = createItemDTO.name;
        item.quantity = createItemDTO.quantity;
        item.category = createItemDTO.category;

        return this.inventoryItemRepository.save(item);
    }

    findAll(): Promise<InventoryItem[]> {
        return this.inventoryItemRepository.find();
    }

    findOne(id: string): Promise<InventoryItem> {
        return this.inventoryItemRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.inventoryItemRepository.delete(id);
    }
}
