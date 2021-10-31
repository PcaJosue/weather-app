import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material.module';

import { HighlightComponent } from './highlight.component';

describe('HighlightComponent', () => {
  let component: HighlightComponent;
  let fixture: ComponentFixture<HighlightComponent>;
  let description: HTMLElement
  let value: HTMLElement
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightComponent);
    component = fixture.componentInstance;
    component.highlight = {
      description: 'Wind status',
      info: { value: 7, metric: 'mph' },
      graphic: {
        icon: 'arrow_drop_down',
        label: 'WSW',
        type: 'wind'
      }
    }

  });

  it('should display wind info', () => {

    description = fixture.nativeElement.querySelector('.highlight__description');
    fixture.detectChanges();
    expect(description.textContent).toContain(component.highlight.description)
  });



  it('it should display value', () => {
    value = fixture.nativeElement.querySelector('.highlight__info-value');
    fixture.detectChanges();
    expect(value.textContent).toContain(component.highlight.info.value)
  })

  it('it should display metric', () => {
    let metric = fixture.nativeElement.querySelector('.highlight__info-metric');
    fixture.detectChanges();
    expect(metric.textContent).toContain(component.highlight.info.metric)
  })

  it('it should have a icon', () => {

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.highlight__graphic - wind mat-icon')))
      .toBeTruthy();
  })
});
