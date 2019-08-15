import { Injectable } from '@angular/core';
import { JobClass }   from './job';
import { JOBCLASS }   from './job-stock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class JobService {

  constructor(private http : HttpClient) { }

  getJobs(value : string): Observable<JobClass[]> {                
    
    return this.http.get<JobClass[]>('http://localhost:8080/jobs/get?value='+value); //calling backend server
  }
  
}
