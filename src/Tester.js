/**
 * Created by dmitri on 08/07/15.
 */
'use strict';

import React from 'react';
import ServiceLogin from './ServiceLogin';
import Cookie from './Cookie';

class Tester extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Cookie />
        </div>
    );
  }
}

module.exports = Tester;