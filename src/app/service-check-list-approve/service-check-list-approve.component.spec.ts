import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCheckListApproveComponent } from './service-check-list-approve.component';

describe('ServiceCheckListApproveComponent', () => {
  let component: ServiceCheckListApproveComponent;
  let fixture: ComponentFixture<ServiceCheckListApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCheckListApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCheckListApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
