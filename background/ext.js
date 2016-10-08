// Generated by CoffeeScript 1.10.0
define(["jquery", "utils", "background/setting"], function($, utils, setting) {
  console.log("[ext] init");
  return {
    setBrowserIcon: function(enable) {
      var imgPath, title;
      title = '已打开鼠标取词功能';
      imgPath = 'images/dict-on24.png';
      if (!enable) {
        title = '已关闭鼠标取词功能';
        imgPath = 'images/dict-off24.png';
      }
      chrome.browserAction.setTitle({
        title: title
      });
      return chrome.browserAction.setIcon({
        path: imgPath
      });
    }
  };
});
