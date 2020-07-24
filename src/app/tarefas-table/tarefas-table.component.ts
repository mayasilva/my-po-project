import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { TarefasService } from '../tarefas/tarefas.service';

@Component({
  selector: 'app-tarefas-table',
  templateUrl: './tarefas-table.component.html',
  styleUrls: ['./tarefas-table.component.css']
})
export class TarefasTableComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;
  
  constructor(private tarefasService: TarefasService) { 
    this.columns=[ { "property": "id" },
    { "property": "descricao" },
    { "property": "data" ,type: "date" },
    { "property": "categoria_id" },
    { "property": "concluido", type: "boolean"  }]

    this.showTarefas()
  }

  showTarefas() {
    this.tarefasService.getTarefas()
      .subscribe((data: Array<any>) => this.items = data );
  }

  ngOnInit(): void {
  }

}
