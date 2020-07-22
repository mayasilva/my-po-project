import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasTableComponent } from './tarefas-table.component';

describe('TarefasTableComponent', () => {
  let component: TarefasTableComponent;
  let fixture: ComponentFixture<TarefasTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
