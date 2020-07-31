import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasTableComponent } from './tarefas-table/tarefas-table.component';
import { TarefasNewComponent } from './tarefas/tarefas-new/tarefas-new.component';


const routes: Routes = [{
  path:'tarefas',
  component: TarefasTableComponent,
},
{
  path:'tarefas/new',
  component: TarefasNewComponent,
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
