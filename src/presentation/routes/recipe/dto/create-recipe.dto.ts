import { IsNotEmpty, IsString, MaxLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({
    example: 'Bolo de Chocolate',
    description: 'Título da receita',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    example: 'Delicioso bolo com cobertura de chocolate',
    description: 'Descrição da receita',
    maxLength: 500,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @ApiProperty({
    example: ['2 ovos', '1 xícara de açúcar', '2 colheres de chocolate em pó'],
    description: 'Lista de ingredientes',
    type: [String],
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @MaxLength(100, { each: true })
  ingredients: string[];
}