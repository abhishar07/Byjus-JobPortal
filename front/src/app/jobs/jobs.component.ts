import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { JobClass } from '../job';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  private currentJob : JobClass[] = [];
  private totalJobs : any = Number;
  constructor(private jobservice : JobService) { }

  ngOnInit() {
  }
  getJobs(value : string): void {                                    ////showing jobs according to search
    
    this.jobservice.getJobs(value).subscribe((data:JobClass[])=>{    //subscribing to the values.
 
      this.currentJob = data;
    });
  }
  getTotalJobs(): any{                                               //showing total number of jobs
    return this.totalJobs = this.currentJob.length;
   }

}
