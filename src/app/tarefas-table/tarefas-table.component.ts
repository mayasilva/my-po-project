import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-tarefas-table',
  templateUrl: './tarefas-table.component.html',
  styleUrls: ['./tarefas-table.component.css']
})
export class TarefasTableComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;
  
  constructor() { 
    this.columns=[ { "property": "id" },
    { "property": "descricao" },
    { "property": "data" ,type: "date" },
    { "property": "categoria_id" },
    { "property": "concluido", type: "boolean"  }]

    this.items=[{
      "id": 1,
      "descricao": "Tirar o lixo",
      "data": "2020/07/28",
      "categoria_id": 1,
      "concluido": false
    },
    {
      "id": 2,
      "descricao": "beber agua",
      "data": "2020/07/28",
      "categoria_id": 1,
      "concluido": false
    },
  ]
  }

  ngOnInit(): void {
  }

}
