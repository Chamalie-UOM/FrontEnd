import { TestBed } from '@angular/core/testing';

import { TreeGenerationService } from './tree-generation.service';

describe('TreeGenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeGenerationService = TestBed.get(TreeGenerationService);
    expect(service).toBeTruthy();
  });
});
