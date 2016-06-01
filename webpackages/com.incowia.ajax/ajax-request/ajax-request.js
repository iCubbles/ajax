(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'ajax-request',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
    },

    /**
     * called each time value of slot 'url' has changed
     */
    modelUrlChanged: function() {

    },

    /**
     * called each time value of slot 'method' has changed
     */
    modelMethodChanged: function() {

    },

    /**
     * called each time value of slot 'data' has changed
     */
    modelDataChanged: function() {

    },

    /**
     * called each time value of slot 'configs' has changed
     */
    modelConfigChanged: function() {

    }


  });
}());
