import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: false, type: 'varchar', length: 50})
    name: string;

    @Column({nullable: false, type: 'decimal', precision: 10, scale: 2})
    price: number;

    @Column({nullable: false, type: 'varchar', length: 255})
    description: string;

    @Column({nullable: false, type: 'timestamp with local time zone'})
    created_at: Date;

    @Column({nullable: false, type: 'timestamp with local time zone'})
    updated_at: Date;
}
