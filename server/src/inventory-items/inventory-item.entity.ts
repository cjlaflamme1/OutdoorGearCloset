import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class InventoryItem {

    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    category: string;


}