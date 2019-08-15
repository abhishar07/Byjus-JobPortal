import { Injectable } from '@angular/core';
import { JobClass }   from './job';
import { JOBCLASS }   from './job-stock';
@Injectable()
export class JobService {
private jobData : JobClass[] = JOBCLASS;
private currentJob : JobClass[] = [];
private expiringJob : JobClass[] = [];
private totalJobs : any = Number;
  constructor() { }

  getJobs(value : string): void {                //showing jobs according to search
    
    for(var i = 0;i < this.jobData.length;i++)
    {
      if(this.jobData[i].experience == value)
      {
        this.currentJob.push(this.jobData[i]);
      }
      else if(this.jobData[i].location == value)
      {
        this.currentJob.push(this.jobData[i]);
      }
      else if(this.jobData[i].skill == value)
      {
        this.currentJob.push(this.jobData[i]);
      }
    }
  }
  getTotalJobs(): any{                 //showing total number of jobs
   return this.totalJobs = this.currentJob.length;
  }
  
  getExpJob() : JobClass[] {            //For showing expiring jobs. issue: showing repitative values.
    
    for(var j = 0; j < this.jobData.length;j++)
    {
      if(this.jobData[j].jd == '08/08/19')
      {
       this.expiringJob.push(this.jobData[j]);
      }
    }
       return this.expiringJob;     
  }
}
