import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioneIntroComponent } from './sezione-intro.component';

describe('SezioneIntroComponent', () => {
  let component: SezioneIntroComponent;
  let fixture: ComponentFixture<SezioneIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SezioneIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SezioneIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
