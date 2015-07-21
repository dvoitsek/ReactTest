/**
 * Created by dmitri on 08/07/15.
 */

'use strict';
import React from 'react';
import url from 'urlparser';
import request from 'superagent';

class ServiceLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      user: null
    }
  }

  casRedirect() {
    var currentUrl = top.window.location.href;
    var parsedUrl = url.parse(currentUrl);
    var serviceUrl = parsedUrl.host.protocol + "://" + parsedUrl.host.hostname;
    if(parsedUrl.host.port) {
      serviceUrl = serviceUrl + ":" + parsedUrl.host.port;
    }
    top.window.location.replace('https://cas.recolnat.fr/login?service=' + serviceUrl);
  }

  componentWillMount() {
    var currentUrl = top.window.location.href;
    var parsedUrl = url.parse(currentUrl);
    console.log(JSON.stringify(parsedUrl));
    if(parsedUrl.query) {
      if(parsedUrl.query.params) {
        if (parsedUrl.query.params.ticket) {
          top.window.history.pushState("", "", "https://localhost:11000/");
          var serviceUrl = parsedUrl.host.protocol + "://" + parsedUrl.host.hostname;
          if(parsedUrl.host.port) {
            serviceUrl = serviceUrl + ":" + parsedUrl.host.port;
          }
          request.get("https://cas.recolnat.fr/serviceValidate")
            .query({ticket: parsedUrl.query.params.ticket})
            .query({service: serviceUrl})
            .query({pgtUrl: "http://163.173.199.65:10101/auth-test/post"})
            .end((err, res) => {
              if (err) {
                console.log(err);
              }
              else {
                console.log(JSON.stringify(res));
              }
            });
        }
      }
    }
  }

  render() {
    if(this.state.logged) {
      return (
        <span>Hello {this.state.user}</span>
      )
    }
    else {
      return (
        <button onClick={this.casRedirect.bind(this)}>Log In</button>
      );
    }
  }
}

module.exports = ServiceLogin;