import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class ContactDto {
  @IsString()
  @Length(2, 80)
  name!: string;

  @IsEmail({}, { message: 'A valid email address is required' })
  email!: string;

  @IsString()
  @Length(10, 2000, { message: 'Message must be between 10 and 2000 characters' })
  message!: string;

  /** Honeypot. Real people leave this empty, most bots fill everything in. */
  @IsOptional()
  @IsString()
  company?: string;
}
