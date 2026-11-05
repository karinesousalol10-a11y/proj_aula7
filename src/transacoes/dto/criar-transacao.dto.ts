import { IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';
import { TipoTransacao } from '../schemas/transacao.schema';
export class CriarTransacaoDto {
  @IsString() @MinLength(1) descricao: string;
  @Type(() => Number) @IsNumber() @IsPositive() valor: number;
  @IsEnum(TipoTransacao) tipo: TipoTransacao;
  @IsString() @MinLength(1) categoria: string;
  @IsOptional() @IsBoolean() consumoConsciente?: boolean;
}
