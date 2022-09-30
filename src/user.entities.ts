import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{


    @ApiProperty({
        type:Number,
        description:"Id of the Student",
        default:1
    })
    @PrimaryGeneratedColumn()
    id:number;


    @ApiProperty({
        type:String,
        description:"Name of the Student",
        default:'John Doe'
    })
    @Column()
    name:string


    @ApiProperty({
        type:Number,
        description:"Name of the Student",
        minimum:1
    })
    @Column()
    age:number


}