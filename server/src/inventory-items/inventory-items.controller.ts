import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemDTO } from './dto/create-inventory-item.dto';
import { InventoryItem } from './inventory-item.entity';
import { InventoryItemsService } from './inventory-items.service';

@Controller('api/inventoryitems')
export class InventoryItemsController {
    constructor(private readonly inventoryItemsService: InventoryItemsService) {}

    @Post()
    create(@Body() createItemDTO: CreateItemDTO): Promise<InventoryItem> {
      return this.inventoryItemsService.create(createItemDTO);
    }
  
    @Get()
    findAll(): Promise<InventoryItem[]> {
      return this.inventoryItemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<InventoryItem> {
      return this.inventoryItemsService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.inventoryItemsService.remove(id);
    }
}
