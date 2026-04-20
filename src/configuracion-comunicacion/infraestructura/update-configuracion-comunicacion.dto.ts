// src/configuracion-comunicacion/infraestructura/update-configuracion-comunicacion.dto.ts:
import { PartialType } from '@nestjs/mapped-types';
import { CreateConfiguracionComunicacionDto } from './create-configuracion-comunicacion.dto';

export class UpdateConfiguracionComunicacionDto extends PartialType(CreateConfiguracionComunicacionDto) { }
