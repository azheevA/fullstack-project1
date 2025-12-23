import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDatumDto {

    @ApiProperty({example: 'Name'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: 'Profession' })
    @IsString()
    @IsNotEmpty()
    profession: string

    @ApiProperty({example: 'Description' })
    @IsString()
    @IsNotEmpty()
    description: string
}
