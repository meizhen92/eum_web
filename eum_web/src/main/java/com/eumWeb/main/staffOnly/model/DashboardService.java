package com.eumWeb.main.staffOnly.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eumWeb.main.staffOnly.mapper.DashboardMapper;

@Service
public class DashboardService {
	
	@Autowired
	DashboardMapper dashboardMapper;

	public void userBirthList(String month) {
		dashboardMapper.userBirthList(month);
	}
}
