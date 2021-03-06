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
      this.axios = axios.create();
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
     *  Observe the Cubbles-Component-Model: If value for slot 'requests' has changed ...
     */
    modelRequestsChanged: function (requests) {
      this._makeRequests(requests);
    },

    /**
     * Make a bunch of ajax requests in parallel
     * @param {object} configs
     * @private
     */
    _makeRequests: function(configs) {
      if (configs == null || configs.length === 0) { return;}
      this.setStatus(this.status.pending);
      var promises = [];
      // for every config make a request and add returned promise to promises array
      for (var i = 0; i < configs.length; i++) {
        // add index to config object under property _idx. This is needed to find out which request caused the abortion
        // if there is an error making the ajax requests
        configs[i]._idx = i;
        promises[i] = this.axios.request(configs[i]);
      }
      var self = this;
      Promise.all(promises).then(function(results){
        self._handleResults(results);
        self.setStatus(self.status.idle);
      }, function(error){
        self._handleError(error);
        self.setStatus(self.status.error);
      });
    },

    /**
     * Helper Method to set results array to output slot 'results'
     * @param {object} results
     * @private
     */
    _handleResults: function(results) {
      var transformedResults = [];
      for(var i = 0; i < results.length; i++) {
        transformedResults[i] = results[i].data;
      }
      this.setResults(transformedResults);
    },

    /**
     * Helper to set error response to output slot 'results'
     * @param {error} error
     * @private
     */
    _handleError: function(error) {
      var self = this;
      if (error instanceof Error) {
        this.setResults({
          status: self.status.error,
          msg: error.toString(),
        });
      } else {
        var config = this.getRequests()[error.config._idx];
        config._idx = error.config._idx;
        this.setResults({
          status: self.status.error,
          responseStatus: error.status,
          responseStatusText: error.statusText,
          config: config
        });
      }
    }
  });
}());
