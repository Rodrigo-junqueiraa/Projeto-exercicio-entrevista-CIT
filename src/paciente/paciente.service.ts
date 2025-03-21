import { Injectable } from '@nestjs/common';

@Injectable()
export class PacienteService {
  getAllPacientes() {
    return [{ id: 1, nome: 'João Silva' }, { id: 2, nome: 'Maria Souza' }];
  }
}
