import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-tarefas-update',
  templateUrl: './tarefas-update.component.html',
  styleUrls: ['./tarefas-update.component.css']
})
export class TarefasUpdateComponent implements OnInit {
  tarefa; 

  fields: Array<PoDynamicFormField> = [
    {
      property: 'id',
      label: 'Id',
      required: true,
      gridColumns: 3,
      gridSmColumns: 6,
      order: 1,
      disabled: true
    },
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
    }]

  constructor(private route: ActivatedRoute,
    private tarefaService: TarefasService
    ) { }

  ngOnInit(): void {
    const tarefaId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tarefaService.getTarefa(tarefaId)
    .subscribe( tarefa => this.tarefa = tarefa);
    
  }

}
