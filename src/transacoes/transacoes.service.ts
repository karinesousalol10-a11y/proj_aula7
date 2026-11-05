import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CriarTransacaoDto } from './dto/criar-transacao.dto';
import { Transacao, TransacaoDocument, TipoTransacao } from './schemas/transacao.schema';
@Injectable()
export class TransacoesService {
  constructor(@InjectModel(Transacao.name) private readonly transacaoModel: Model<TransacaoDocument>) {}
  async criar(dados: CriarTransacaoDto): Promise<Transacao> {
    return new this.transacaoModel({ ...dados, consumoConsciente: dados.consumoConsciente ?? true }).save();
  }
  async listarComMetricas() {
    const historico = await this.transacaoModel.find().sort({ createdAt: -1 }).exec();
    let saldoTotal = 0, totalDespesas = 0, totalGastoImpulso = 0;
    for (const t of historico) {
      if (t.tipo === TipoTransacao.RECEITA) saldoTotal += t.valor;
      if (t.tipo === TipoTransacao.DESPESA) {
        saldoTotal -= t.valor; totalDespesas += t.valor;
        if (t.consumoConsciente === false) totalGastoImpulso += t.valor;
      }
    }
    return { historico, metricas: { saldoTotal: Number(saldoTotal.toFixed(2)), totalDespesas: Number(totalDespesas.toFixed(2)), totalGastoImpulso: Number(totalGastoImpulso.toFixed(2)) } };
  }
}
