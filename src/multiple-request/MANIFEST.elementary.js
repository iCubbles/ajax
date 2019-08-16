const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.');
  return {
    description: 'Component for making a bunch of ajax request in parallel. Uses axios lib under the hood.',
    slots: [
      {
        slotId: 'requests',
        direction: [ 'input' ],
        type: 'object',
        description: 'Accepts an array of axios config objects each representing a request to be made. Each item needs to be a valid axios config object, see https://github.com/mzabriskie/axios#request-config'
      },
      {
        slotId: 'status',
        direction: [ 'output' ],
        type: 'string',
        description: 'Indicates the internal status of the component instance. One of [\'idle\',\'pending\',\'error\']'
      },
      {
        slotId: 'results',
        direction: [ 'output' ],
        description: 'Holds an array of response objects. The index of a response objects equals the index of the corresponding request in requests array.',
        type: 'object'
      }
    ],
    resources: [ 'element.html' ],
    runnables: [
      {
        name: 'SHOWROOM',
        path: '/SHOWROOM.html'
      },
      {
        name: 'Demo',
        path: '/demo/index.html'  
      }
    ],
    dependencies: [
      { webpackageId: 'cubx.core.rte@3.1.0-SNAPSHOT', artifactId: 'cubxcomponent' }
    ]
  };
};
