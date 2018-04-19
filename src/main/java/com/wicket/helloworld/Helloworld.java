package com.wicket.helloworld;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;

public class Helloworld extends WebPage{

	public Helloworld() {
		super();
		// TODO Auto-generated constructor stub
		add(new Label("message","Hello World!"));
	}
	
}
