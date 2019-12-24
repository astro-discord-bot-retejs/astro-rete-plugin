import { TestBed } from '@angular/core/testing';

import { AngularRenderPluginService } from './angular-render-plugin.service';

describe('AngularRenderPluginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularRenderPluginService = TestBed.get(AngularRenderPluginService);
    expect(service).toBeTruthy();
  });
});
