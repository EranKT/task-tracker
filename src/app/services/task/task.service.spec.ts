import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(TaskService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a url', () => {
    expect(service.getTasks()).toBeTruthy();
  });
});
