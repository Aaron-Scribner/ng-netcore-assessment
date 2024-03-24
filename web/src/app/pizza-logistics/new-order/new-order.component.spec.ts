import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NewOrderComponent } from './new-order.component';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;

  const component = createComponentFa(NewOrderComponent);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderComponent ]
    })
    .compileComponents();
  }));

  describe('Angular Lifecycles', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should release subscriptions', () => {
      // Arrange

      // Act

      // Assert
    });
  })

  describe('When placing an order', () => {
    it('call the service with the entered form data', () => {
      // Arrange\
      // You will want to use spectator to input data into the form, then click the button. Do a spyOn the service and use toHaveBeenCalledWith
      // Act

      // Assert
    });
  })
});
