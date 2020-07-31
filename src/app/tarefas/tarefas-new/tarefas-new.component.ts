import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';

@Component({
  selector: 'app-tarefas-new',
  templateUrl: './tarefas-new.component.html',
  styleUrls: ['./tarefas-new.component.css']
})
export class TarefasNewComponent implements OnInit {

  fields: Array<PoDynamicFormField> = [
    {
      property: 'Descricao',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1
    },
    {
      property: 'data',
      label: 'Data',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      order: -1
    },
    {
      property: 'categoria',
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
  constructor() { }


  ngOnInit(): void {
  }

}
