import { TestBed } from '@angular/core/testing';

import { GitHubDataService } from './gitHubData.service';

describe('GitHubDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubDataService = TestBed.get(GitHubDataService);
    expect(service).toBeTruthy();
  });
});
