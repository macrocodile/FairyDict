// Generated by CoffeeScript 1.10.0
define(["jquery", "utils"], function($, utils) {
  var setting;
  setting = {
    configCache: {
      windowWidth: 630,
      windowHeight: 700,
      enableMinidict: true,
      openSK1: 'Ctrl',
      openSK2: 'Shift',
      openKey: 'X',
      prevDictSK1: 'Ctrl',
      prevDictKey: 'ArrowLeft',
      nextDictSK1: 'Ctrl',
      nextDictKey: 'ArrowRight',
      prevHistorySK1: 'Alt',
      prevHistoryKey: 'ArrowLeft',
      nextHistorySK1: 'Alt',
      nextHistoryKey: 'ArrowRight',
      dictionary: ''
    },
    init: function() {
      var dfd;
      dfd = $.Deferred();
      chrome.storage.sync.get(this.configCache, (function(_this) {
        return function(obj) {
          _this.configCache = obj;
          chrome.storage.sync.set(obj);
          return dfd.resolve(obj);
        };
      })(this));
      return dfd;
    },
    setValue: function(key, value) {
      if (this.configCache[key] !== value) {
        this.configCache[key] = value;
        chrome.storage.sync.set(this.configCache);
      }
      return value;
    },
    getValue: function(key, defaultValue) {
      var v;
      v = this.configCache[key];
      if (v == null) {
        v = defaultValue;
      }
      return v;
    }
  };
  return setting;
});
