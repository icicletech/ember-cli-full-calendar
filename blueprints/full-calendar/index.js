module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var _this = this;
    return this.addBowerPackageToProject('fullcalendar').then(function() {
      return _this.addBowerPackageToProject('momentjs');
    });
  }
};
