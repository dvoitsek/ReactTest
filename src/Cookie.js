/**
 * Created by dmitri on 20/07/15.
 */

'use strict';
import React from 'react';

class Cookie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.cookie = "session=toto,path=/;domain=localhost";
  }

  render() {
    return <div />
  }
}

module.exports = Cookie;