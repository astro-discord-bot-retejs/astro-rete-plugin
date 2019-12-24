import {async, TestBed} from '@angular/core/testing';

import {NodeService} from './node.service';

describe('NodeService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [NodeService]
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: NodeService = TestBed.get(NodeService);
    expect(service).toBeTruthy();
  });
});
