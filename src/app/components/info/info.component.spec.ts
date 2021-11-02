import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from 'src/app/material.module';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherState } from '../state/state';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoComponent],
      imports: [MaterialModule, NgxsModule.forRoot([WeatherState]), HttpClientModule],
      providers: [WeatherService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    component.info = {
      date: '2021-11-1',
      img: 'Snow',
      temperature: 15,
      ubication: 'Helsinki',
      weather: 'Shower'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display centigrades', () => {

    let temperature = fixture.nativeElement.querySelector('.info__temperature-value');
    fixture.detectChanges();
    expect(temperature.textContent).toContain(15)
  });



  it('should be Shower img', () => {

    let img = fixture.debugElement.nativeElement.querySelectorAll('img');
    fixture.detectChanges();
    expect(img[0]['src']).toContain('Snow.png')
  });


});
