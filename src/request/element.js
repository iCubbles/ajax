import axios from 'axios';
import URLSearchParams from 'url-search-params';

(function () {
  'use strict';

  CubxComponent({
    is: '/* @echo elementName */',

    status : {
      pending: 'pending',
      idle: 'idle',
      error: 'error'
    },

    /**
     * Manipulate an element’s local DOM when the element is created. {{artifactId}}
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.setStatus(this.status.idle);
      this._axios = axios.create();
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    connected: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is dettached to the document.
     */
    disconnected: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
    },

    /**
     * called each time value of slot 'config' has changed
     */
    modelConfigChanged: function(config) {
      // convert plain data object to URLSearchParams instance if property 'useURLSearchParams' is set to true
      if (config.hasOwnProperty('useURLSearchParams')
        && config.useURLSearchParams
        && config.hasOwnProperty('data')
        && typeof config.data === 'object') {
          var data = new URLSearchParams();
          Object.keys(config.data).forEach(function (key) {
            data.set(key, config.data[key]);
          });
          config.data = data;
      }

      this._makeRequest(config);
    },

    /**
     *
     * @param {object} config The axios config object
     * @private
     */
    _makeRequest: function(config) {
      var self = this;
      this.setStatus(this.status.pending);
      this._axios.request(config).then(function(result){
        self.setStatus(self.status.idle);
        self.setResult(result.data);
      }, function(err) {
        self.setStatus(self.status.error);
        self.setResult(err);
      });
    }
  });
}());
