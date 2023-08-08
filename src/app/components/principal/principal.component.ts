import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/service/reserva.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  reserva = {} as Reserva;

  list: Reserva[] = [];

  btns: boolean = true;
  selecionar: boolean = true;
  tabela: boolean = true;

  constructor(private service: ReservaService) { }

  ngOnInit() {
    this.exibirReservas();
  }

  exibirReservas(): void {
    this.service.getReservas()
      .subscribe(retorno => this.list = retorno);
  }

  cadastrar(): void {
    this.service.postReservas(this.reserva)
      .subscribe(retorno => {
        this.list.push(retorno);

        this.reserva = {} as Reserva;

        alert('Reserva Feita!')
      });
  }

  selecionarReserva(posicao: number): void {
    this.reserva = this.list[posicao];

    this.btns = false;
    this.tabela = false;
    this.selecionar = false;
  }

  editar(): void {
    this.service.putReservas(this.reserva)
      .subscribe(retorno => {
        // Obter a posição do vetor onde está a Reserva
        let posicao = this.list.findIndex(obj => {
          return obj.id == retorno.id;
        });

        // Alterar os dados da Reserva no vetor
        this.list[posicao] = retorno;

        // Limpa o formulario
        this.reserva = {} as Reserva;

        // Exibição dos botões, tabela e selecão
        this.btns = true;
        this.tabela = true;
        this.selecionar = true;

        alert('Reserva alterada!')
      })
  }

  cancelarReserva(reserva: Reserva): void {
    if(confirm('Tem certeza que deseja cancelar esta reserva?')){
      this.service.putCancelarReservas(reserva).subscribe(()=>{
        this.exibirReservas();

        this.reserva = {} as Reserva;

        this.btns = true;
        this.tabela = true;
        this.selecionar = true;

        alert('Reserva cancelada!')
      });
    }
  }

  btnCancelar():void{
    this.reserva = {} as Reserva;
    this.btns = true;
    this.tabela = true;
    this.selecionar = true;
  }


}
