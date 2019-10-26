import { TestBed } from '@angular/core/testing';

import { ExportToDriveService } from './export-to-drive.service';

describe('ExportToDriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportToDriveService = TestBed.get(ExportToDriveService);
    expect(service).toBeTruthy();
  });
});
