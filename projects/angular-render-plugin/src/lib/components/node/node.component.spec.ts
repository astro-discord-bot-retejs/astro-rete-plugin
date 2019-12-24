import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeComponent } from './node.component';
import {KebabPipe} from '../../pipes/kebab.pipe';
import {SocketDirective} from '../../directives/socket.directive';
import {SocketComponent} from '../socket/socket.component';
import {ControlDirective} from '../../directives/control.directive';
import {NodeService} from '../../services/node.service';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent, KebabPipe, SocketDirective, SocketComponent, ControlDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
