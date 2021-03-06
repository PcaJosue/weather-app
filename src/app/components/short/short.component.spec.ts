import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { WeatherState } from '../state/state';

import { ShortComponent } from './short.component';

describe('ShortComponent', () => {
  let component: ShortComponent;
  let fixture: ComponentFixture<ShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortComponent],
      imports: [NgxsModule.forRoot([WeatherState])]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortComponent);
    component = fixture.componentInstance;
    component.short = {
      date: 'Tomorrow',
      img: 'Snow',
      range: {
        min: 11,
        max: 18
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display tomorrow', () => {

    let date = fixture.nativeElement.querySelector('.short__date');
    fixture.detectChanges();
    expect(date.textContent).toContain(component.short.date)
  });

  it('should display Sun, 31 Oct', () => {
    component.short.date = '2021-10-31'
    let date = fixture.nativeElement.querySelector('.short__date');
    fixture.detectChanges();
    expect(date.textContent).toEqual('Sun, 31 Oct')
  });




});
