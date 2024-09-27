import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorPartnerComponent } from './sponsor-partner.component';

describe('SponsorPartnerComponent', () => {
  let component: SponsorPartnerComponent;
  let fixture: ComponentFixture<SponsorPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
