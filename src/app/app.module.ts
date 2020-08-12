import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { TarefasTableComponent } from './tarefas-table/tarefas-table.component';
import { HttpClientModule } from '@angular/common/http';
import { TarefasNewComponent } from './tarefas/tarefas-new/tarefas-new.component';
import { TarefasUpdateComponent } from './tarefas/tarefas-update/tarefas-update.component';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    AppComponent,
    TarefasTableComponent,
    TarefasNewComponent,
    TarefasUpdateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoPageDynamicSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
