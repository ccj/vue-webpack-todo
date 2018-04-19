package com.wicket.helloworld;

import org.apache.wicket.Page;
import org.apache.wicket.protocol.http.WebApplication;

public class HelloworldApplication extends WebApplication{

	public HelloworldApplication() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public Class<? extends Page> getHomePage() {
		// TODO Auto-generated method stub
		return Helloworld.class;
	}
	
}
