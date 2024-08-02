import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhuratComponent } from './muhurat.component';

describe('MuhuratComponent', () => {
  let component: MuhuratComponent;
  let fixture: ComponentFixture<MuhuratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuhuratComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuhuratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
