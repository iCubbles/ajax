const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'Component for making a single ajax request. Uses axios lib under the hood.',
    slots: [
      {
        slotId: 'config',
        direction: [ 'input' ],
        type: 'object',
        description: 'this needs to be a valid axios config object, see https://github.com/mzabriskie/axios#request-config'
      },
      {
        slotId: 'status',
        direction: [ 'output' ],
        type: 'string',
        description: 'will be one of idle|busy|error'
      },
      {
        slotId: 'result',
        direction: [ 'output' ],
        type: 'object'
      }
    ],
    resources: [ 'element.html' ],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      }
    ],
    dependencies: [
      { webpackageId: 'cubx.core.rte@3.1.0-SNAPSHOT', artifactId: 'cubxcomponent' }
    ]
  };
};
