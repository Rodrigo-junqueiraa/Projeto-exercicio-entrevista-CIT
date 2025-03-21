import { Controller, Get } from '@nestjs/common';
import { PacienteService } from './paciente.service';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Get()
  getAllPacientes() {
    return this.pacienteService.getAllPacientes();
  }
}
