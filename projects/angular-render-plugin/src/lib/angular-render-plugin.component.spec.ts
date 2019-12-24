import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRenderPluginComponent } from './angular-render-plugin.component';

describe('AngularRenderPluginComponent', () => {
  let component: AngularRenderPluginComponent;
  let fixture: ComponentFixture<AngularRenderPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRenderPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRenderPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
