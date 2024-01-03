package com.eumWeb.main.board.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.eumWeb.main.board.model.BoardService;

@Mapper
public interface BoardMapper {
	
	/*
	 * param : -
	 * author : 김미진
	 * description : 모든 게시글 불러오기
	 * */
	public String boardList();
}
