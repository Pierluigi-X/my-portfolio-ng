import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneContattiComponent } from './sezione-contatti.component';

describe('SezioneContattiComponent', () => {
  let component: SezioneContattiComponent;
  let fixture: ComponentFixture<SezioneContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
