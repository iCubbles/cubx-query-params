/* global history*/
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
    is: 'cubx-query-params',

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
      var parameters = this._getParameter();
      if (parameters) {
        this.setAllSearchParams(parameters);
      } else {
        this.setAllSearchParams({});
      }
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'newSearchParams' has changed ...
     */
    modelNewSearchParamsChanged: function (searchParams) {
      if (this.getClearWhenChange()) {
        this.setAllSearchParams({});
      }
      Object.keys(searchParams).forEach(function (param) {
        this.getAllSearchParams()[param] = searchParams[param];
        this._updateLocationSearch();
      }.bind(this));
    },

    /**
     * Update location search properties according to 'allSearchParams' slot value
     * @private
     */
    _updateLocationSearch: function () {
      var searchString = '';
      Object.keys(this.getAllSearchParams()).forEach(function (param, i) {
        // searchString += (i > 0 ? '&' : '') + encodeURIComponent(param) + '=' + encodeURIComponent(this.getAllSearchParams()[param]);
        searchString += (i > 0 ? '&' : '') + encodeURIComponent(param) + '=' +
          encodeURIComponent(JSON.stringify(this.getAllSearchParams()[param]));
      }.bind(this));
      if (searchString) {
        history.pushState(null, '', '?' + searchString);
        // document.location.search = '?' + searchString;
      }
    },

    /**
     * Read url search parameters
     * @param {string} [param] - name of the parameter to read
     * @returns {*} the value of the parameter or null if the parameter was not in the url, or all
     * parameters if the no 'param' is provided
     */
    _getParameter: function (param) {
      var vars = {};
      window.location.search.replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
          vars[decodeURIComponent(key)] = value !== undefined
            ? JSON.parse(decodeURIComponent(value)) : '';
        }
      );
      if (param) {
        return vars[param] ? vars[param] : null;
      }
      return vars;
    }
  });
}());
