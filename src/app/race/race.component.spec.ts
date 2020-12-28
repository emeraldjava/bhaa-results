import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceComponent } from './race.component';

// Links for testing components.
// https://stackoverflow.com/questions/17370427/loading-a-mock-json-file-within-karmaangularjs-test
// https://kaustubhtalathi.medium.com/mock-data-for-angular-5-applications-with-json-server-part-2-final-427bd68005bb
// https://github.com/webslingur/angular-mock-data-part2
// https://stackoverflow.com/questions/42129039/how-to-load-mock-data-from-json-file-in-angular-2-karma-jasmine-test?rq=1
describe('RaceComponent', () => {
  let component: RaceComponent;
  let fixture: ComponentFixture<RaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
