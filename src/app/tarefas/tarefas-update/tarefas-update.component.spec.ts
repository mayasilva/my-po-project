import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasUpdateComponent } from './tarefas-update.component';

describe('TarefasUpdateComponent', () => {
  let component: TarefasUpdateComponent;
  let fixture: ComponentFixture<TarefasUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
