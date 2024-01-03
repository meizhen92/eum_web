package com.eumWeb.main.staffOnly.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DashboardMapper {

	public void userBirthList(String month);
}
