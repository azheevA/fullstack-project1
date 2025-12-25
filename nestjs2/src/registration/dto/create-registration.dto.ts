import { IsBoolean, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateRegistrationDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    contacts: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('RU')
    phone: string;

    @IsString()
    @IsOptional()
    telegram: string;

    @IsBoolean()
    consent: boolean;
}
