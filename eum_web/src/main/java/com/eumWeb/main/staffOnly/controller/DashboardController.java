package com.eumWeb.main.staffOnly.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.eumWeb.main.staffOnly.model.DashboardService;

@Controller
public class DashboardController {
	
	@Autowired
	DashboardService dashboardService;
	
	@GetMapping("/dashboardHome")
	public String dashboardHome() {
		System.out.println("-------------------dashboardHome : start");
		return "staffOnly/dashboard";
	}
	
	/*
	 * params : month
	 * author : 김미진
	 * description : 이달의 생일자 리스트 불러오기
	 * */
	@PostMapping("/userBirthList")
	@ResponseBody
	public Map<String, Object> userBirthList(String month){
		System.out.println("-------------------userBirthList : start");
		System.out.println(month);
		
		
		
		Map<String, Object> result = new HashMap<>(); 
		return result;
	}
}
