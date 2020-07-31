import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasNewComponent } from './tarefas-new.component';

describe('TarefasNewComponent', () => {
  let component: TarefasNewComponent;
  let fixture: ComponentFixture<TarefasNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
