import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { TarefasService } from '../tarefas/tarefas.service';

@Component({
  selector: 'app-tarefas-table',
  templateUrl: './tarefas-table.component.html',
  styleUrls: ['./tarefas-table.component.css']
})
export class TarefasTableComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;
  actions: Array<PoTableAction> = [{
    label:"Excluir", 
    action: ({id}) => this.tarefasService 
                          .deleteTarefa(id)
                          .subscribe(() => this.showTarefas())}];

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
