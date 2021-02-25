import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    name: string;

    @Column()
    type: string;


}