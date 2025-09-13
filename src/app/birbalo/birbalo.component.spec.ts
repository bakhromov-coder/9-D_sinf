import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirbaloComponent } from './birbalo.component';

describe('BirbaloComponent', () => {
  let component: BirbaloComponent;
  let fixture: ComponentFixture<BirbaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirbaloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirbaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
