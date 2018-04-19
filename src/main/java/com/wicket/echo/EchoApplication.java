package com.wicket.echo;

import org.apache.wicket.Page;
import org.apache.wicket.protocol.http.WebApplication;

/**
 * Application class for the Echo example.
 * 
 * @author Eelco Hillenius
 */
public class EchoApplication extends WebApplication
{
    /**
     * Constructor.
     */
    public EchoApplication()
    {

    }

    /**
     * @see org.apache.wicket.Application#getHomePage()
     */
    @Override
    public Class< ? extends Page> getHomePage()
    {
        return Echo.class;
    }
}