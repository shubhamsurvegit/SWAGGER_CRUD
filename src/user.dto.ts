import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{


    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type:String,
        description:"Name of the Student",
        default:'John Doe'
    })
    name:string;
    
    @IsNotEmpty()
    @IsInt()
    @ApiProperty({
        type:Number,
        description:"Age of the student",
        minimum:1,
    })
    age:number;
}