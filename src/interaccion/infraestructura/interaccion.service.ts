// src/interaccion/infraestructura/interaccion.service.ts:
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInteraccionDto } from './create-interaccion.dto';
import { UpdateInteraccionDto } from './update-interaccion.dto';

@Injectable()
export class InteraccionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createInteraccionDto: CreateInteraccionDto) {
    if (
      createInteraccionDto.idUsuarioEmisor ===
      createInteraccionDto.idUsuarioReceptor
    ) {
      throw new BadRequestException(
        'Un usuario no puede interactuar consigo mismo',
      );
    }

    const usuarioEmisor = await this.prisma.usuario.findUnique({
      where: { idUsuario: createInteraccionDto.idUsuarioEmisor },
    });

    if (!usuarioEmisor) {
      throw new NotFoundException(
        `No existe un usuario emisor con id ${createInteraccionDto.idUsuarioEmisor}`,
      );
    }

    const usuarioReceptor = await this.prisma.usuario.findUnique({
      where: { idUsuario: createInteraccionDto.idUsuarioReceptor },
    });

    if (!usuarioReceptor) {
      throw new NotFoundException(
        `No existe un usuario receptor con id ${createInteraccionDto.idUsuarioReceptor}`,
      );
    }

    const interaccionExistente = await this.prisma.interaccion.findFirst({
      where: {
        idUsuarioEmisor: createInteraccionDto.idUsuarioEmisor,
        idUsuarioReceptor: createInteraccionDto.idUsuarioReceptor,
      },
    });

    if (interaccionExistente) {
      throw new BadRequestException(
        'Ya existe una interacción entre estos usuarios',
      );
    }

    return this.prisma.interaccion.create({
      data: {
        idUsuarioEmisor: createInteraccionDto.idUsuarioEmisor,
        idUsuarioReceptor: createInteraccionDto.idUsuarioReceptor,
        tipoInteraccion: createInteraccionDto.tipoInteraccion as any,
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async findAll() {
    return this.prisma.interaccion.findMany({
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
      orderBy: {
        idInteraccion: 'asc',
      },
    });
  }

  async findOne(idInteraccion: number) {
    const interaccion = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });

    if (!interaccion) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return interaccion;
  }

  async update(
    idInteraccion: number,
    updateInteraccionDto: UpdateInteraccionDto,
  ) {
    const interaccionExistente = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
    });

    if (!interaccionExistente) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return this.prisma.interaccion.update({
      where: { idInteraccion },
      data: {
        tipoInteraccion: updateInteraccionDto.tipoInteraccion as any,
      },
      include: {
        usuarioEmisor: true,
        usuarioReceptor: true,
      },
    });
  }

  async remove(idInteraccion: number) {
    const interaccionExistente = await this.prisma.interaccion.findUnique({
      where: { idInteraccion },
    });

    if (!interaccionExistente) {
      throw new NotFoundException(
        `No existe una interacción con id ${idInteraccion}`,
      );
    }

    return this.prisma.interaccion.delete({
      where: { idInteraccion },
    });
  }
}