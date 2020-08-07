import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasTableComponent } from './tarefas-table/tarefas-table.component';
import { TarefasNewComponent } from './tarefas/tarefas-new/tarefas-new.component';
import { TarefasUpdateComponent } from './tarefas/tarefas-update/tarefas-update.component';


const routes: Routes = [{
  path:'tarefas',
  component: TarefasTableComponent,
},
{
  path:'tarefas/new',
  component: TarefasNewComponent,
},
{
  path:'tarefas/:id/update',
  component: TarefasUpdateComponent,
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
