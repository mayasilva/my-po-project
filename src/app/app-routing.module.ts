import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasTableComponent } from './tarefas-table/tarefas-table.component';


const routes: Routes = [{path:'tarefas',
component: TarefasTableComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
