import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NodeComponent} from './node.component';
import {KebabPipe} from '../../pipes/kebab.pipe';
import {SocketDirective} from '../../directives/socket.directive';
import {SocketComponent} from '../socket/socket.component';
import {ControlDirective} from '../../directives/control.directive';
import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Node} from 'rete';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<TestNodeComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNodeComponentWrapper, NodeComponent, KebabPipe, SocketDirective, SocketComponent, ControlDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNodeComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: '<node-component [node]="node"></node-component>'
})
// tslint:disable-next-line:component-class-suffix
class TestNodeComponentWrapper {
  node = new Node('test');
}
