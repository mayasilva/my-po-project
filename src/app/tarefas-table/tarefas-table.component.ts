import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { TarefasService } from '../tarefas/tarefas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-table',
  templateUrl: './tarefas-table.component.html',
  styleUrls: ['./tarefas-table.component.css']
})
export class TarefasTableComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;
  actions: Array<PoTableAction> = 
  [{
    label:"Excluir", 
    action: ({id}) => this.tarefasService 
                          .deleteTarefa(id)
                          .subscribe(() => this.showTarefas())
  },
  { 
    label:"Alterar",
    action: ({id}) => this.router.navigate([`/tarefas/${id}/update`])
  }];

  constructor(
    private tarefasService: TarefasService,
    private router: Router
  ) { 
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

  onClickIncluir(){
    this.router.navigate(['/tarefas/new']);   
  }

  ngOnInit(): void {
  }


}
