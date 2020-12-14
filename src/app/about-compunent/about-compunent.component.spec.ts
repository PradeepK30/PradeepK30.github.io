import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompunentComponent } from './about-compunent.component';

describe('AboutCompunentComponent', () => {
  let component: AboutCompunentComponent;
  let fixture: ComponentFixture<AboutCompunentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCompunentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCompunentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
