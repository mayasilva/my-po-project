import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefas-new',
  templateUrl: './tarefas-new.component.html',
  styleUrls: ['./tarefas-new.component.css']
})
export class TarefasNewComponent implements OnInit {

  tarefa = {concluido: false};

  
  fields: Array<PoDynamicFormField> = [
    {
      property: 'descricao',
      label: 'Descrição',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1
    },
    {
      property: 'data',
      required: true,
      label: 'Data',
      type: 'date',
      format: 'dd/mm/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      order: -1
    },
    {
      property: 'categoria_id',
      label: 'Categoria',
      required: true,
      gridColumns: 6,
      options: [
        { label: 'Casa', value: 1 },
        { label: 'Trabalho', value: 2 },
        { label: 'Estudos', value: 3 },
        { label: 'Estudos', value: 3 },
      ]
    },
    {
      property: 'concluido',
      label: 'Concluido',
      type: 'boolean',

    },]  

  constructor(
    private router: Router,
    private tarefaService: TarefasService
  ) { }
  

  ngOnInit(): void {
  }

  onClickCancel() {
    this.router.navigate(['/']);
  }

  onClickSave(){
    this.tarefaService
      .postTarefa(this.tarefa)
      .subscribe(()=>{
        alert("Salvou!");
        this.router.navigate(['/tarefas'])
      })

  }

}
