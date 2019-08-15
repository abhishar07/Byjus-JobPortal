package com.faceprep.jfs.JopPortal;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class JobController {
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/jobs/get")
	public Object getStock(@RequestParam("value") String cname)
	{
		
		
		List<Object> JobList = jdbcTemplate.query("SELECT * FROM job_data WHERE experience = ? OR location = ? OR skill = ?", new Object[] {cname,cname,cname} ,
				(rs, rowNum) ->
                        new Jobs(rs.getString("name")
      	                 ,rs.getString("experience")
      	                 ,rs.getString("location")
      	                 ,rs.getString("skill")
      	                 ,rs.getString("jd"))
		      );      		  
		return (Object) JobList;
		
	}

}
