
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MtEditor = factory());
}(this, (function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "*{-webkit-tap-highlight-color:transparent}.mq-editable-field{border:none!important}.mq-editable-field.mq-focused{-webkit-box-shadow:none;box-shadow:none}.mq-editable-field .mq-root-block.mq-empty:empty:before{content:\"\";font-weight:400;font-family:PingFangSC-Regular,PingFang SC;color:#b5c5d5;padding-left:0;font-size:16px}.mq-editable-field .mq-root-block.mq-empty:focus:before{content:none!important}.editor-placeholder{width:100%;height:33.0078vw}.editor-placeholder.hide{display:none}.editor-outter-container ol,.editor-outter-container ol li{list-style-type:decimal}.editor-outter-container div.mt-editor-keyboard{width:38.287vw;height:21.1567vw;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;opacity:1;z-index:99999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:distribute;align-content:space-around;border-radius:1.0981vw;background:#fff}.editor-outter-container div.mt-editor-keyboard.y-editor-simple .simple-input-method .page-up-down{color:rgba(0,137,255,.8)}.editor-outter-container div.mt-editor-keyboard.y-editor-simple .simple-input-method .page-up-down:hover{color:#0089ff}.editor-outter-container div.mt-editor-keyboard.hide{display:none}.editor-outter-container div.mt-editor-keyboard .editor-simple-bg{border-radius:8px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.14);box-shadow:0 6px 18px 0 rgba(0,0,0,.14)}.editor-outter-container div.mt-editor-keyboard .editor-simple-bg,.editor-outter-container div.mt-editor-keyboard>svg{width:100%;height:100%;position:absolute;z-index:-1}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs]{-ms-flex-preferred-size:3.6603vw;flex-basis:3.6603vw;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0;list-style:none;width:37.3353vw;height:3.6603vw;background:#f7fcff;-webkit-box-shadow:0 .1464vw .2928vw 0 #defaff;box-shadow:0 .1464vw .2928vw 0 #defaff;border-radius:.6589vw .6589vw 0 0;margin:.466vw;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs].tabs-simple{width:100%;margin:0;-webkit-box-shadow:0 .1464vw .2928vw 0 #f3f3f3;box-shadow:0 .1464vw .2928vw 0 #f3f3f3;background:#fff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li{width:4.6852vw;height:2.3426vw;border-radius:.2928vw;cursor:pointer;font-size:1.1713vw;font-weight:400;color:#84bfe9;line-height:1.6105vw;text-align:center;line-height:2.3426vw;margin-right:.7321vw}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li:first-child{margin-left:1.5373vw}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple{color:#999;border-radius:2.3426vw}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple:hover{background:#0089ff;border-radius:2.3426vw;-webkit-box-shadow:none;box-shadow:none}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple.current{background:rgba(0,137,255,.8)}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li:hover{font-weight:400;color:#fff;line-height:2.3426vw;background:-webkit-gradient(linear,left top,left bottom,from(#dcfffc),color-stop(5%,#89e0ff),color-stop(50%,#31b3ff),color-stop(95%,#89e0ff));background:linear-gradient(#dcfffc,#89e0ff 5%,#31b3ff 50%,#89e0ff 95% #dcfffc 100%);-webkit-box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;border-radius:.366vw}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] li.current{color:#fff;font-weight:500;background:-webkit-gradient(linear,left top,left bottom,from(#aafff8),color-stop(5%,#67d8ff),color-stop(50%,#31b3ff),color-stop(95%,#67d8ff),to(#aafff8));background:linear-gradient(#aafff8,#67d8ff 5%,#31b3ff 50%,#67d8ff 95%,#aafff8)}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete{width:4.3924vw;height:2.3426vw;background:-webkit-gradient(linear,left bottom,left top,from(#eef9ff),to(#fff));background:linear-gradient(1turn,#eef9ff,#fff);border-radius:.366vw;position:absolute;font-size:1.1713vw;line-height:2.3426vw;font-weight:400;color:#283a5a;cursor:pointer;text-align:center;right:3.6603vw;border:.0732vw solid #d5e3f0}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple{background:#fff;border:.0732vw solid #dadada}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple:hover{background:#0089ff;-webkit-box-shadow:none;box-shadow:none;border:0;color:#fff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple:active{background:rgba(0,137,255,.8);-webkit-box-shadow:none;box-shadow:none;border:0;color:#fff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete:hover{background:radial-gradient(#aafff8,#89e0ff);-webkit-box-shadow:0 .0732vw .0732vw 0 #73d4f7;box-shadow:0 .0732vw .0732vw 0 #73d4f7;border:.0732vw solid #89e0ff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-delete:active{background:radial-gradient(#aafff8,#67d8ff);-webkit-box-shadow:0 .0732vw .0732vw 0 #66c6e9;box-shadow:0 .0732vw .0732vw 0 #66c6e9;border:.0732vw solid #89e0ff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close{position:absolute;cursor:pointer;width:4.0264vw;height:2.0498vw;right:-.2481vw;top:-.496vw;text-align:right}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close:hover svg g path{fill:#5cf3ff;stroke:#6ad2ff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close:active svg g path{fill:#05d8f4;stroke:#21bafd}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:hover svg g circle{fill:#0089ff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:hover svg g path{fill:#fff}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:active svg g circle{fill:rgba(0,137,255,.8)}.editor-outter-container div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:active svg g path{fill:#fff}.editor-outter-container div.mt-editor-keyboard .tab-content-editor{display:none;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:13.6896vw;padding:.1464vw 1.3909vw;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;overflow-y:scroll}.editor-outter-container div.mt-editor-keyboard .tab-content-editor::-webkit-scrollbar{width:0;height:0}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current{display:block}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me{min-height:110%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me:first-child{border:none}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:2.6354vw;height:2.6354vw;line-height:2.6354vw;background:-webkit-gradient(linear,left bottom,left top,from(#eef9ff),to(#fff));background:linear-gradient(1turn,#eef9ff,#fff);border-radius:.366vw;border:.0732vw solid #d5e3f0;text-align:center;cursor:pointer;font-size:1.4641vw;font-weight:400;color:#283a5a;margin:.8785vw .4392vw 0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span svg{max-width:100%;height:100%}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span{background:#fff;border:.0732vw solid #dadada}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span:hover{background:#0089ff;-webkit-box-shadow:none;box-shadow:none}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span:active{background:rgba(0,137,255,.8);-webkit-box-shadow:none;box-shadow:none}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.current{color:#fff;font-weight:500;border:1px solid #dcfffc;background:-webkit-gradient(linear,left top,left bottom,from(#aafff8),color-stop(5%,#67d8ff),color-stop(50%,#31b3ff),color-stop(95%,#67d8ff),to(#aafff8));background:linear-gradient(#aafff8,#67d8ff 5%,#31b3ff 50%,#67d8ff 95%,#aafff8)}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:hover{color:#fff;background:-webkit-gradient(linear,left top,left bottom,from(#dcfffc),color-stop(5%,#89e0ff),color-stop(50%,#31b3ff),color-stop(95%,#89e0ff));background:linear-gradient(#dcfffc,#89e0ff 5%,#31b3ff 50%,#89e0ff 95% #dcfffc 100%);-webkit-box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;border:1px solid #dcfffc}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:hover svg g{fill:#fff}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:active{color:#fff;border:1px solid #dcfffc;background:-webkit-gradient(linear,left top,left bottom,from(#aafff8),color-stop(5%,#67d8ff),color-stop(50%,#31b3ff),color-stop(95%,#67d8ff),to(#aafff8));background:linear-gradient(#aafff8,#67d8ff 5%,#31b3ff 50%,#67d8ff 95%,#aafff8);-webkit-box-shadow:0 .0732vw .0732vw 0 #66c6e9;box-shadow:0 .0732vw .0732vw 0 #66c6e9}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:active svg g{fill:#fff}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span{display:inline-block;width:2.6354vw;height:2.6354vw;line-height:2.6354vw;background:-webkit-gradient(linear,left bottom,left top,from(#eef9ff),to(#fff));background:linear-gradient(1turn,#eef9ff,#fff);border-radius:.366vw;border:.0732vw solid #d5e3f0;text-align:center;cursor:pointer;font-size:1.4641vw;font-weight:400;color:#283a5a;margin:.8785vw .4392vw 0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;position:relative}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span svg{width:100%;height:100%}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span.simple-btn-span{background:#fff;border:.0732vw solid #dadada}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span.simple-btn-span:hover{background:#0089ff;-webkit-box-shadow:none;box-shadow:none}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span.simple-btn-span:active{background:rgba(0,137,255,.8);-webkit-box-shadow:none;box-shadow:none}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span.current{color:#fff;font-weight:500;border:1px solid #dcfffc;background:-webkit-gradient(linear,left top,left bottom,from(#aafff8),color-stop(5%,#67d8ff),color-stop(50%,#31b3ff),color-stop(95%,#67d8ff),to(#aafff8));background:linear-gradient(#aafff8,#67d8ff 5%,#31b3ff 50%,#67d8ff 95%,#aafff8)}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span:hover{border:1px solid #dcfffc;color:#fff;background:-webkit-gradient(linear,left top,left bottom,from(#dcfffc),color-stop(5%,#89e0ff),color-stop(50%,#31b3ff),color-stop(95%,#89e0ff));background:linear-gradient(#dcfffc,#89e0ff 5%,#31b3ff 50%,#89e0ff 95% #dcfffc 100%);-webkit-box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;box-shadow:0 .0732vw .0732vw 0vwx #73d4f7}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span:hover svg g{fill:#fff!important}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span:active{border:1px solid #dcfffc;background:-webkit-gradient(linear,left top,left bottom,from(#aafff8),color-stop(5%,#67d8ff),color-stop(50%,#31b3ff),color-stop(95%,#67d8ff),to(#aafff8));background:linear-gradient(#aafff8,#67d8ff 5%,#31b3ff 50%,#67d8ff 95%,#aafff8);-webkit-box-shadow:0 .0732vw .0732vw 0 #66c6e9;box-shadow:0 .0732vw .0732vw 0 #66c6e9}.editor-outter-container div.mt-editor-keyboard .tab-content-editor.current>span.matheditor-btn-span:active svg g{fill:#fff!important}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer]{-ms-flex-preferred-size:3.0747vw;flex-basis:3.0747vw;-ms-flex-negative:0;flex-shrink:0;height:3.0747vw;width:37.4353vw;margin:0 .366vw 0 .396vw;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:.0732vw solid #c0eeff;padding:0 3.0747vw;position:relative}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer].tab-footer-simple{border-top:.0732vw dashed #e0e0e0}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer].tab-footer-simple .sub-scroll:hover.sub-scroll-left svg path,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer].tab-footer-simple .sub-scroll:hover.sub-scroll-right svg path{fill:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer].tab-footer-simple .sub-scroll:active.sub-scroll-left svg path,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer].tab-footer-simple .sub-scroll:active.sub-scroll-right svg path{fill:rgba(0,137,255,.8)}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll{position:absolute;height:2.7818vw;width:3vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll.sub-scroll-left{left:0;top:0}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll.sub-scroll-left>svg{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll.sub-scroll-right{right:0;top:0}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:hover.sub-scroll-left svg path,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:hover.sub-scroll-right svg path{fill:#99d1f9}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:active.sub-scroll-left svg path,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:active.sub-scroll-right svg path{fill:#67afe2}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab{height:2.7818vw;display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow-x:auto}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab.current{display:-webkit-box;display:-ms-flexbox;display:flex}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab::-webkit-scrollbar{width:0;height:0}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link{font-size:1.0249vw;color:#84bfe9;line-height:1.4641vw;word-break:keep-all;margin-right:1.4641vw;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple{color:#999}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple:hover{color:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple:hover>svg g path{fill:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple:hover>svg g circle{stroke:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple.current{color:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple.current>svg g path{fill:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple.current>svg g circle{stroke:#0089ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link>svg{margin-right:.1464vw}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current{color:#00b2ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current>svg g,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current>svg path{fill:#00b2ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link:hover{color:#00b2ff}.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link:hover>svg g,.editor-outter-container div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link:hover>svg path{fill:#00b2ff}.editor-outter-container div.mt-editor-keyboard .simple-input-method{position:absolute;width:19.0337vw;height:5.4173vw;display:none;background:#fbfdff;-webkit-box-shadow:0 .0732vw .5857vw 0 rgba(122,237,252,.67);box-shadow:0 .0732vw .5857vw 0 rgba(122,237,252,.67);border:.0732vw solid;border-radius:.2928vw;-o-border-image:linear-gradient(180deg,#3bc4ff,#35b0f5) 1 1;border-image:-webkit-gradient(linear,left top,left bottom,from(#3bc4ff),to(#35b0f5)) 1 1;border-image:linear-gradient(180deg,#3bc4ff,#35b0f5) 1 1}.editor-outter-container div.mt-editor-keyboard .simple-input-method .pinyin,.editor-outter-container div.mt-editor-keyboard .simple-input-method .result{background-color:#fff}.editor-outter-container div.mt-editor-keyboard .simple-input-method .pinyin{border-bottom:.0732vw solid #c0eeff;margin:0 .7321vw;font-size:1.0249vw;font-weight:400;height:2.6354vw;line-height:2.6354vw;color:#596a88}.editor-outter-container div.mt-editor-keyboard .simple-input-method .result{font-size:1.0249vw;height:2.6354vw;font-weight:400;color:#496a8b;letter-spacing:.0732vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.editor-outter-container div.mt-editor-keyboard .simple-input-method .result ol{margin:0;padding:0;display:inline-block;vertical-align:middle}.editor-outter-container div.mt-editor-keyboard .simple-input-method .result ol:after{content:\"\";display:block;clear:left}.editor-outter-container div.mt-editor-keyboard .simple-input-method .result ol li{float:left;margin-left:5.1962vw;cursor:pointer}.editor-outter-container div.mt-editor-keyboard .simple-input-method .result ol li:first-child{color:#7bd2ff}.editor-outter-container div.mt-editor-keyboard .simple-input-method .page-up-down{display:inline-block;color:#c0eeff;border-radius:.0732vw;margin-left:.7321vw}.editor-outter-container div.mt-editor-keyboard .simple-input-method .page-up-down:hover{color:#67afe2}.editor-outter-container div.mt-editor-keyboard .simple-input-method .page-up-down span{display:inline-block;cursor:pointer;margin-right:.7321vw;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3)}.editor-outter-container div.mt-editor-keyboard .simple-input-method .page-up-down span.disabled{opacity:.3;color:#8a8c8b}.editor-outter-container.mobile div.mt-editor-keyboard{width:100%;height:70.0078vw;position:fixed;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;opacity:1;z-index:99999;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:distribute;align-content:space-around;border-radius:0;padding:0;background:#f2f4f5}.editor-outter-container.mobile div.mt-editor-keyboard.y-editor-simple .simple-input-method .page-up-down{color:rgba(0,137,255,.8)}.editor-outter-container.mobile div.mt-editor-keyboard.y-editor-simple .simple-input-method .page-up-down:hover{color:#0089ff}.editor-outter-container.mobile div.mt-editor-keyboard.hide{display:none}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs]{-ms-flex-preferred-size:10.2734vw;flex-basis:10.2734vw;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none;width:150vw;height:10.2734vw;background:#fff;border-radius:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-top:.4977vw solid #e9f1f4;-webkit-box-shadow:0 1.1464vw 1vw 0 hsla(0,0%,100%,.1);box-shadow:0 1.1464vw 1vw 0 hsla(0,0%,100%,.1)}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li{width:10.8594vw;height:10.2734vw;border-radius:0;cursor:pointer;font-size:4.1484vw;font-weight:400;color:#84bfe9;line-height:10.2734vw;text-align:center;margin-left:5.8594vw}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li:first-child{margin-left:5.8594vw}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple{color:#999;border-radius:0}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple.current,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li.tab-link-simple:hover{border-bottom:.6953vw solid #0089ff;color:#111f2c;line-height:10.7vw}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li.current,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] li:hover{background:transparent;border-bottom:.1953vw solid #00b2ff;font-size:4.1484vw;color:#00b2ff}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete{width:9.082vw;height:8.6875vw;background:#fff;border-radius:0;position:absolute;font-size:1.1713vw;line-height:4.6875vw;font-weight:400;color:#283a5a;cursor:pointer;text-align:center;-webkit-box-shadow:none;box-shadow:none;right:0;bottom:0;border:0;-webkit-box-shadow:-1px 0 2px 0 #d5e3f0;box-shadow:-1px 0 2px 0 #d5e3f0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:9999}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete>svg{width:60%;height:60%}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple{border:0}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple:active,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete.tab-delete-simple:hover,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete:active,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete:hover{background:#fff}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-delete.hide{display:none}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close{position:absolute;right:2.6603vw;top:2.2vw;cursor:pointer;width:7.3203vw;height:6.5391vw;line-height:6.5391vw;border-radius:.7906vw;border:none}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close>svg{width:80%;height:auto;vertical-align:middle}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close:hover svg g path,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close:hover svg g rect{fill:#5cf3ff;stroke:#6ad2ff}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close:active svg g path,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close:active svg g rect{fill:#05d8f4;stroke:#21bafd}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:hover svg g path,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:hover svg g rect{fill:#0089ff;stroke:#0089ff}.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:active svg g path,.editor-outter-container.mobile div.mt-editor-keyboard ul[class|=tabs] .tab-close.tab-close-simple:active svg g rect{fill:rgba(0,137,255,.8);stroke:rgba(0,137,255,.8)}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor{display:none;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0;height:23.0469vw;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;overflow-y:scroll}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor::-webkit-scrollbar{width:0;height:0}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current{display:block}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me{min-height:110%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me:first-child{border:none}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:12.2031vw;height:10.2734vw;line-height:10.2734vw;background:#fff;-webkit-box-shadow:0 .3vw 0 0 #a9b8c0;box-shadow:0 .3vw 0 0 #a9b8c0;border-radius:.8906vw;text-align:center;cursor:pointer;font-size:4.3438vw;font-weight:400;color:#283a5a;margin:2.2vw 2.2vw 0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span svg{max-width:100%;height:100%}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span{background:#fff;border:0}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span:hover{background:#0089ff;-webkit-box-shadow:none;box-shadow:none}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.simple-btn-span:active{background:rgba(0,137,255,.8);-webkit-box-shadow:none;box-shadow:none}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span.current{color:#fff;font-weight:500;background:-webkit-gradient(linear,left top,left bottom,from(#acfff8),to(#0fbdff));background:linear-gradient(180deg,#acfff8,#0fbdff)}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:hover{color:#fff;background:radial-gradient(#dcfffc 0,#89e0ff 100%);-webkit-box-shadow:0 .0732vw .0732vw 0vwx #73d4f7;box-shadow:0 .0732vw .0732vw 0vwx #73d4f7}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .sub-tab-content-me>span.matheditor-btn-span:active{background:radial-gradient(#aafff8,#67d8ff);-webkit-box-shadow:0 .0732vw .0732vw 0 #66c6e9;box-shadow:0 .0732vw .0732vw 0 #66c6e9}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line{width:98.0469vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.9766vw auto auto}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span{display:inline-block;width:8.2031vw;height:10.2734vw;line-height:10.2734vw;background:#fff;-webkit-box-shadow:0 .3vw 0 0 #a9b8c0;box-shadow:0 .3vw 0 0 #a9b8c0;border-radius:.8906vw;border:.0732vw solid #d5e3f0;text-align:center;cursor:pointer;font-size:5.3438vw;font-weight:400;color:#283a5a;margin:2.2vw 1.2vw 0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span svg{width:100%;height:100%}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.btn-CapsLock{position:absolute;left:.9766vw;-webkit-box-shadow:0 .3vw 0 0 #a9b8c0;box-shadow:0 .3vw 0 0 #a9b8c0;border-radius:.8906vw;width:10vw}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.btn-CapsLock>svg{width:60%;height:auto;vertical-align:middle}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.btn-Backspace{position:absolute;right:.9766vw;-webkit-box-shadow:0 .3vw 0 0 #a9b8c0;box-shadow:0 .3vw 0 0 #a9b8c0;border-radius:.8906vw;width:10vw}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.btn-Backspace>svg{width:60%;height:auto;vertical-align:middle}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.simple-btn-span{border:0}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.simple-btn-span.current,.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.simple-btn-span:hover{background:#0089ff}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.simple-btn-span:active{background:rgba(0,137,255,.8);color:#fff}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span.current{color:#fff;font-weight:500;background:-webkit-gradient(linear,left top,left bottom,from(#acfff8),to(#0fbdff));background:linear-gradient(180deg,#acfff8,#0fbdff)}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span:hover{color:#fff;background:radial-gradient(#dcfffc 0,#89e0ff 100%);border:none}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span:hover svg g,.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span:hover svg path{fill:#fff}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span:active{background:radial-gradient(#aafff8,#67d8ff);border:none}.editor-outter-container.mobile div.mt-editor-keyboard .tab-content-editor.current .matheditor-btn-line>span.matheditor-btn-span:active svg g{fill:#fff}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-preferred-size:2.9283vw;flex-basis:2.9283vw;-ms-flex-negative:0;flex-shrink:0;height:8.6875vw;background:transparent;border:none;padding:0 9.082vw 0 0}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll{position:absolute;height:2.9283vw;width:3vw;display:none}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll.sub-scroll-left{left:0;top:0}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll.sub-scroll-right{right:0;top:0}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:hover.sub-scroll-left svg path,.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:hover.sub-scroll-right svg path{fill:#99d1f9}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:active.sub-scroll-left svg path,.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-scroll:active.sub-scroll-right svg path{fill:#67afe2}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab{height:100%;display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow-x:auto;background:#fff}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab.current{display:-webkit-box;display:-ms-flexbox;display:flex}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab.current.sub-tab-en,.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab.current.sub-tab-zh{display:none}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab::-webkit-scrollbar{width:0;height:0}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link{font-size:3.6vw;min-width:18vw;height:8.6875vw;color:#84bfe9;line-height:8.6875vw;word-break:keep-all;margin-right:0;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;background:transparent}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple{color:#999}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple.current,.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.tab-link-simple:hover{color:#000}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link>svg{margin-right:.1464vw;z-index:8}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current{color:#00b2ff;background:#ededed}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current>svg g,.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link.current>svg path{fill:#00b2ff}.editor-outter-container.mobile div.mt-editor-keyboard div[class|=tab-footer] .sub-tab .sub-tab-link:hover{color:#00b2ff}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method{position:absolute;width:100vw;height:15.8359vw;opacity:1;z-index:99;display:none;background:#fbfdff;-webkit-box-shadow:none;box-shadow:none;border-radius:none;border:.3vw solid #e9f1f4;-o-border-image:none;border-image:none}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .pinyin,.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result{background-color:#fff}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .pinyin{border-bottom:.3vw solid #b5c5d2;padding:2.2928vw 2.7321vw;font-size:4.9578vw;font-weight:400;color:#111f2c}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result{font-size:4.1484vw;font-weight:400;color:#999;letter-spacing:.0732vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:3vw 0}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result ol{margin:0;padding:0;display:inline-block;vertical-align:middle}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result ol:after{content:\"\";display:block;clear:left}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result ol li{float:left;margin-left:6.3063vw;cursor:pointer}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .result ol li:first-child{color:#111f2c;font-weight:700}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .page-up-down{display:inline-block;color:#7bd2ff;border-radius:.0732vw;margin-left:.7321vw;width:9.9609vw;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .page-up-down span{display:inline-block;cursor:pointer;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3)}.editor-outter-container.mobile div.mt-editor-keyboard .simple-input-method .page-up-down span.disabled{opacity:.3;color:#8a8c8b}";
  styleInject(css);

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


  _export(_export.S, 'Array', { isArray: _isArray });

  var isArray = _core.Array.isArray;

  var isArray$1 = isArray;

  var isMobile = /android|ipad|iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase());
  var utils = {
    isMobile: isMobile,
    nameMap: {
      dragStart: isMobile ? 'touchstart' : 'mousedown',
      dragMove: isMobile ? 'touchmove' : 'mousemove',
      dragEnd: isMobile ? 'touchend' : 'mouseup'
    },
    unique: function unique(arr) {
      if (!isArray$1(arr)) {
        console.log('type error!');
        return;
      }

      var array = [];

      for (var i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
          //includes 检测数组是否有某个值
          array.push(arr[i]);
        }
      }

      return array;
    },
    isViewVisible: function isViewVisible(el, parentEl) {
      //获取元素是否在可视区域
      var rect = el.getBoundingClientRect();
      var parentElRect = parentEl.getBoundingClientRect();
      var isVisible = rect.top >= 0 && rect.top <= parentElRect.top + parentElRect.height;
      return isVisible;
    },
    debounce: function debounce(fn, wait) {
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var timer,
          startTimeStamp = 0;
      var context, args;

      var run = function run(timerInterval) {
        timer = setTimeout(function () {
          var now = new Date().getTime();
          var interval = now - startTimeStamp;

          if (interval < timerInterval) {
            // console.log('debounce reset',timerInterval-interval);
            startTimeStamp = now;
            run(timerInterval - interval);
          } else {
            if (!immediate) {
              fn.apply(context, args);
            }

            clearTimeout(timer);
            timer = null;
          }
        }, timerInterval);
      };

      return function () {
        context = this;
        args = arguments;
        var now = new Date().getTime();
        startTimeStamp = now;

        if (!timer) {
          // console.log('debounce set',wait);
          if (immediate) {
            fn.apply(context, args);
          }

          run(wait);
        }
      };
    },
    throttling: function throttling(fn, wait, immediate) {
      var timer;
      var context, args;

      var run = function run() {
        timer = setTimeout(function () {
          if (!immediate) {
            fn.apply(context, args);
          }

          clearTimeout(timer);
          timer = null;
        }, wait);
      };

      return function () {
        context = this;
        args = arguments;

        if (!timer) {
          console.log("throttle, set");

          if (immediate) {
            fn.apply(context, args);
          }

          run();
        } else {
          console.log("throttle, ignore");
        }
      };
    },
    GetPosition: function GetPosition(obj) {
      var position = {};
      position.x = window.$(obj).offset().top;
      position.y = window.$(obj).offset().left;
      return position;
    },
    exDom: ['matheditor-btn-span', 'tab-delete', 'tab-link', 'sub-tab-link']
  };

  var Drag =
  /*#__PURE__*/
  function () {
    function Drag(editor) {
      _classCallCheck(this, Drag);

      this.editor = editor;
      this.init();
    }

    _createClass(Drag, [{
      key: "init",
      value: function init() {
        var _this = this;

        //获取元素
        this.container = this.editor.template.container;
        this.xAxis = 0;
        this.yAxis = 0;
        this._left = 0;
        this._top = 0;
        this.isDown = false;

        this.dragStart = function (e) {
          var domStatus = utils.exDom.some(function (item) {
            return e.target.classList.contains(item);
          });
          if (domStatus) return; //获取x坐标和y坐标

          _this.xAxis = e.clientX;
          _this.yAxis = e.clientY; //获取左部和顶部的偏移量

          _this._left = _this.container.offsetLeft;
          _this._top = _this.container.offsetTop;
          _this.x = _this.xAxis - _this._left;
          _this.y = _this.yAxis - _this._top; //开关打开

          _this.isDown = true; //设置样式

          _this.container.style.cursor = 'move';
        };

        this.dragMove = function (e) {
          var domStatus = utils.exDom.some(function (item) {
            return e.target.classList.contains(item);
          });
          if (domStatus) return;

          if (_this.isDown == false) {
            return;
          } else {
            // 获取拖拽元素的位置
            var left = e.clientX - _this.x;
            var top = e.clientY - _this.y;
            _this.positionX = left;
            _this.positionY = top; // 把拖拽元素 放到 当前的位置

            if (left <= 0) {
              left = 0;
            } else if (left >= document.documentElement.clientWidth - _this.container.offsetWidth) {
              //document.documentElement.clientWidth 屏幕的可视宽度
              left = document.documentElement.clientWidth - _this.container.offsetWidth;
            }

            if (top <= 0) {
              top = 0;
            } else if (top >= document.documentElement.clientHeight - _this.container.offsetHeight) {
              // document.documentElement.clientHeight 屏幕的可视高度
              top = document.documentElement.clientHeight - _this.container.offsetHeight;
            }

            _this.container.style.left = left + "px";
            _this.container.style.top = top + "px";
          }
        };

        this.dragEnd = function (e) {
          var domStatus = utils.exDom.some(function (item) {
            return e.target.classList.contains(item);
          });
          if (domStatus) return; //开关关闭

          _this.isDown = false;
          _this.container.style.cursor = 'default';
        }; //鼠标按下事件


        this.container.addEventListener(utils.nameMap.dragStart, this.dragStart, false); //鼠标移动

        window.addEventListener(utils.nameMap.dragMove, this.dragMove, false); //鼠标抬起事件

        this.container.addEventListener(utils.nameMap.dragEnd, this.dragEnd, false);
      }
    }]);

    return Drag;
  }();

  /**
   * @description 公式所有符号
   */
  var DefaultLaTexButton = {
    'zero': {
      latex: '0',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '0',
      name: '0',
      title: '0'
    },
    'one': {
      latex: '1',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '1',
      name: '1',
      title: '1'
    },
    'two': {
      latex: '2',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '2',
      name: '2',
      title: '2'
    },
    'three': {
      latex: '3',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '3',
      name: '3',
      title: '3'
    },
    'four': {
      latex: '4',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '4',
      name: '4',
      title: '4'
    },
    'five': {
      latex: '5',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '5',
      name: '5',
      title: '5'
    },
    'six': {
      latex: '6',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '6',
      name: '6',
      title: '6'
    },
    'seven': {
      latex: '7',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '7',
      name: '7',
      title: '7'
    },
    'eight': {
      latex: '8',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '8',
      name: '8',
      title: '8'
    },
    'nine': {
      latex: '9',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: '9',
      name: '9',
      title: '9'
    },
    'alpha': {
      latex: '\\alpha',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'alpha',
      name: 'α',
      title: 'α'
    },
    'beta': {
      latex: '\\beta',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'beta',
      name: 'β',
      title: 'β'
    },
    'gamma': {
      latex: '\\gamma',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'gamma',
      name: 'γ',
      title: 'γ'
    },
    'theta': {
      latex: '\\theta',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'theta',
      name: 'θ',
      title: 'θ'
    },
    'pi': {
      latex: '\\pi',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'pi',
      name: 'π',
      title: 'π'
    },
    'delta': {
      latex: '\\delta',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'delta',
      name: 'δ',
      title: 'δ'
    },
    'phi': {
      latex: '\\varphi',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'phi',
      name: 'φ',
      title: 'φ'
    },
    'epsilon': {
      latex: '\\epsilon',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'epsilon',
      name: 'ε',
      title: 'ε'
    },
    'rho': {
      latex: '\\rho',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'rho',
      name: 'ρ',
      title: 'ρ'
    },
    'omega': {
      latex: '\\omega',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'omega',
      name: 'ω',
      title: 'ω'
    },
    'Delta': {
      latex: '\\Delta',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'Delta',
      name: 'Δ',
      title: 'Δ'
    },
    'Omega': {
      latex: '\\Omega',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'Omega',
      name: 'Ω',
      title: 'Ω'
    },
    'Phi': {
      latex: '\\Phi',
      moveto: 'Right',
      movefor: 1,
      tab: 'alphabet',
      icon: 'Phi',
      name: 'Φ',
      title: 'Φ'
    },
    'equal': {
      latex: '=',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'equal',
      name: '等于',
      title: '='
    },
    'ne': {
      latex: '\\ne',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'ne',
      name: '不等于',
      title: '&ne;'
    },
    'less_than': {
      latex: '\\lt',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'lessthan',
      name: '小于',
      title: '&lt;'
    },
    'greater_than': {
      latex: '\\gt',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'greaterthan',
      name: '大于',
      title: '&gt;'
    },
    'greater_equal': {
      latex: '\\geq',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'greater_equal',
      name: '大于等于',
      title: '&geq;'
    },
    'less_equal': {
      latex: '\\leq',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'less_equal',
      name: '小于等于',
      title: '&leq;'
    },
    'approx': {
      latex: '\\approx',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'approx',
      name: '约等于',
      title: '&asymp;'
    },
    'cong': {
      latex: '\\cong',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'cong',
      name: '全等'
    },
    'sim': {
      latex: '\\sim',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'sim',
      name: '相似'
    },
    'simeq': {
      latex: '\\simeq',
      moveto: 'Right',
      movefor: 1,
      tab: 'relation',
      icon: 'simeq',
      name: '相似'
    },
    'degree': {
      latex: '\\^{\\circ}',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'degree',
      name: '度',
      title: '&deg;'
    },
    'angle': {
      latex: '\\angle',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'angle',
      name: '角',
      title: '&ang;'
    },
    'perpendicular': {
      latex: '\\perp',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'perpendicular',
      name: '垂直',
      title: '&perp;'
    },
    'parallel_to': {
      latex: '\\parallel',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'parallel',
      name: '平行',
      title: '&#8741;'
    },
    'triangle': {
      latex: '\\triangle',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'triangle',
      name: '三角',
      title: '&#9651;'
    },
    'parallelogram': {
      latex: '\\parallelogram',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'parallelogram',
      name: '平行四边形',
      title: '&#9649;'
    },
    'bigcirc': {
      latex: '\\bigcirc',
      moveto: 'Right',
      movefor: 1,
      tab: 'geometric',
      icon: 'bigcirc',
      name: '圆',
      title: '&#9711;'
    },
    'wideparen': {
      latex: '\\oversetfrown{}',
      moveto: 'Left',
      movefor: 1,
      tab: 'geometric',
      icon: 'oversetfrown',
      name: '弧'
    },
    'round_brackets': {
      latex: '\\left({}\\right)',
      moveto: 'Left',
      movefor: 1,
      tab: 'brackets',
      icon: 'round_brackets',
      name: '小括号'
    },
    'bracket': {
      latex: '\\left[{}\\right]',
      moveto: 'Left',
      movefor: 1,
      tab: 'brackets',
      icon: 'bracket',
      name: '中括号'
    },
    'braces': {
      latex: '\\left\\{ {}\\right\\}',
      moveto: 'Left',
      movefor: 1,
      tab: 'brackets',
      icon: 'braces',
      name: '大括号'
    },
    'modulus': {
      latex: '\\left| {}\\right|',
      moveto: 'Left',
      movefor: 1,
      tab: 'brackets',
      icon: 'modulus',
      name: '绝对值'
    },
    'lefttsrightm': {
      latex: '\\left({},{}\\right]',
      moveto: 'Left',
      movefor: 2,
      tab: 'interval',
      icon: 'lefttsrightm',
      name: '左开右闭'
    },
    'lefttmrights': {
      latex: '\\left[{},{}\\right)',
      moveto: 'Left',
      movefor: 2,
      tab: 'interval',
      icon: 'lefttmrights',
      name: '左闭右开'
    },
    'leftrightm': {
      latex: '\\left[{},{}\\right]',
      moveto: 'Left',
      movefor: 2,
      tab: 'interval',
      icon: 'leftrightm',
      name: '闭区间'
    },
    'leftrights': {
      latex: '\\left({},{}\\right)',
      moveto: 'Left',
      movefor: 2,
      tab: 'interval',
      icon: 'leftrights',
      name: '开区间'
    },
    'in': {
      latex: '\\in',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'in',
      name: '属于',
      title: '&isin;'
    },
    'notin': {
      latex: '\\notin',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'notin',
      name: '不属于',
      title: '&notin;'
    },
    'supseteq': {
      latex: '\\supseteq',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'supseteq',
      name: '包含',
      title: '&supe;'
    },
    'subseteq': {
      latex: '\\subseteq',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'subseteq',
      name: '包含于',
      title: '&sube;'
    },
    'supset': {
      latex: '\\supset',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'supset',
      name: '真包含',
      title: '&sup;'
    },
    'subset': {
      latex: '\\subset',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'subset',
      name: '真包含于',
      title: '&sub;'
    },
    'cap': {
      latex: '\\cap',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'cap',
      name: '交集',
      title: '&cap;'
    },
    'cup': {
      latex: '\\cup',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'cup',
      name: '并集',
      title: '&cup;'
    },

    /*--补集符号需要补充  start--*/
    "complement": {
      latex: '\\complement',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'complement',
      name: '补集'
    },
    "complementu": {
      latex: '\\complement_{U}',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'complementu',
      name: '补集'
    },
    // "complement": { latex: 'C_U', moveto: 'Right', movefor: 1, tab: 'set', icon: 'complement', name: '补集' },
    // "complementu": { latex: 'C_{}', moveto: 'Right', movefor: 1, tab: 'set', icon: 'complementu', name: '补集' },

    /*--补集符号需要补充  end--*/
    "emptyset": {
      latex: '\\emptyset',
      moveto: 'Right',
      movefor: 1,
      tab: 'set',
      icon: 'emptyset',
      name: '空集',
      title: '&empty;'
    },
    'square': {
      latex: '{}\\^{2}',
      moveto: 'Left',
      movefor: 3,
      tab: 'exponent',
      icon: 'square',
      name: '平方'
    },
    'cube': {
      latex: '{}\\^{3}',
      moveto: 'Left',
      movefor: 3,
      tab: 'exponent',
      icon: 'cube',
      name: '立方'
    },
    'sup': {
      latex: '{}\\^{}',
      moveto: 'Left',
      movefor: 3,
      tab: 'exponent',
      icon: 'exponentn',
      name: 'n次方'
    },
    'lg': {
      latex: '\\lg{}',
      moveto: 'Right',
      movefor: 1,
      tab: 'logarithm',
      icon: 'lg',
      name: 'lg',
      title: 'lg'
    },
    'ln': {
      latex: '\\ln{}',
      moveto: 'Right',
      movefor: 1,
      tab: 'logarithm',
      icon: 'ln',
      name: 'ln',
      title: 'ln'
    },
    'log': {
      latex: '\\log_{a}b',
      moveto: 'Left',
      movefor: 3,
      tab: 'logarithm',
      icon: 'log',
      name: 'log',
      title: 'log'
    },
    'square_root': {
      latex: '\\sqrt{}',
      moveto: 'Left',
      movefor: 1,
      tab: 'radical',
      icon: 'sqrt',
      name: '平方根'
    },
    'cube_root': {
      latex: '\\sqrt[3]{}',
      moveto: 'Left',
      movefor: 1,
      tab: 'radical',
      icon: 'cube_root',
      name: '立方根'
    },
    'root': {
      latex: '\\sqrt[{}]{}',
      moveto: 'Left',
      movefor: 2,
      tab: 'radical',
      icon: 'root',
      name: '根号'
    },
    "equation": {
      latex: '\\begin{cases}\\end{cases}',
      moveto: 'Left',
      movefor: 2,
      tab: 'equation',
      icon: 'equation',
      name: '方程组'
    },
    "binary_equations": {
      latex: '\\begin{cases}\\\\\\end{cases}',
      moveto: 'Left',
      movefor: 2,
      tab: 'equation',
      icon: 'binary_equations',
      name: '方程组',
      style: {
        root: {
          'font-size': '15%'
        }
      }
    },
    "ternary_equations": {
      latex: '\\begin{cases}\\\\\\\\\\end{cases}',
      moveto: 'Left',
      movefor: 2,
      tab: 'equation',
      icon: 'ternary_equations',
      name: '方程组',
      style: {
        root: {
          'font-size': '5%'
        },
        matrix: {
          'margin-top': '-5px'
        }
      }
    },
    "quaternion_equations": {
      latex: '\\begin{cases}\\\\\\\\\\\\\\end{cases}',
      moveto: 'Left',
      movefor: 2,
      tab: 'equation',
      icon: 'quaternion_equations',
      name: '方程组',
      style: {
        root: {
          'font-size': '5%'
        },
        matrix: {
          'margin-top': '-12px'
        }
      }
    },
    "serial_one": {
      latex: '①',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '①',
      name: '序号',
      title: '①'
    },
    "serial_two": {
      latex: '②',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '②',
      name: '序号',
      title: '②'
    },
    "serial_three": {
      latex: '③',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '③',
      name: '序号',
      title: '③'
    },
    "serial_four": {
      latex: '④',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '④',
      name: '序号',
      title: '④'
    },
    "serial_five": {
      latex: '⑤',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '⑤',
      name: '序号',
      title: '⑤'
    },
    "serial_six": {
      latex: '⑥',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '⑥',
      name: '序号',
      title: '⑥'
    },
    "serial_seven": {
      latex: '⑦',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '⑦',
      name: '序号',
      title: '⑦'
    },
    "serial_eight": {
      latex: '⑧',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '⑧',
      name: '序号',
      title: '⑧'
    },
    "serial_nine": {
      latex: '⑨',
      moveto: 'Right',
      movefor: 1,
      tab: 'serial',
      icon: '⑨',
      name: '序号',
      title: '⑨'
    },
    "centigrade": {
      latex: '\\^{\\circ}C',
      moveto: 'Right',
      movefor: 1,
      tab: 'unit',
      icon: 'centigrade',
      name: '摄氏度'
    },
    "fahrenheit": {
      latex: '\\^{\\circ}F',
      moveto: 'Right',
      movefor: 1,
      tab: 'unit',
      icon: 'fahrenheit',
      name: '华氏度'
    },
    "toarrow": {
      latex: "\\to",
      moveto: 'Right',
      movefor: 1,
      tab: 'chemical',
      icon: 'to',
      name: '右箭头',
      title: '&rarr;'
    },
    "leftarrow": {
      latex: "\\leftarrow",
      moveto: 'Right',
      movefor: 1,
      tab: 'chemical',
      icon: 'leftarrow',
      name: '左箭头',
      title: '&larr;'
    },
    "uparrow": {
      latex: "\\uparrow",
      moveto: 'Right',
      movefor: 1,
      tab: 'chemical',
      icon: 'uparrow',
      name: '上箭头',
      title: '&uarr;'
    },
    "downarrow": {
      latex: "\\downarrow",
      moveto: 'Right',
      movefor: 1,
      tab: 'chemical',
      icon: 'downarrow',
      name: '下箭头',
      title: '&darr;'
    },
    "xrightarrow_chemical": {
      latex: "\\xrightarrow{}{}",
      moveto: "Left",
      movefor: 1,
      tab: 'chemical',
      icon: 'xrightarrow_chemical',
      name: ''
    },
    "xlongequal_chemical": {
      latex: "\\xlongequal{}{}",
      moveto: "Left",
      movefor: 1,
      tab: 'chemical',
      icon: 'xlongequal_chemical',
      name: '',
      style: {
        matrix: {
          'transform': 'scale(.9,.9)' // 'margin-top': '-12px'

        }
      }
    },
    "xrightleftharpoons_chemical": {
      latex: "\\xrightleftharpoons{}{}",
      moveto: "Left",
      movefor: 1,
      tab: 'chemical',
      icon: 'xrightleftharpoons_chemical',
      name: ''
    },
    "r_superscript": {
      latex: "{}^{}",
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'sup',
      name: '右上标'
    },
    "r_subscript": {
      latex: "{}_{}",
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'r_subscript',
      name: '右下标'
    },
    "r_sub_sup": {
      latex: '{}_{}^{}',
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'r_subsupscript',
      name: '右上下角标'
    },
    "l_superscript": {
      latex: "^{}{}",
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'l_sup',
      name: '左上标'
    },
    "l_subscript": {
      latex: "_{}{}",
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'l_subscript',
      name: '左下标'
    },
    "l_sub_sup": {
      latex: '_{}^{}{}',
      moveto: "Left",
      movefor: 1,
      tab: 'script',
      icon: 'l_subsupscript',
      name: '左上下角标'
    },
    "plus": {
      latex: "+",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'plus',
      name: '加',
      title: '+'
    },
    "reduce": {
      latex: "-",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'reduce',
      name: '减',
      title: '-'
    },
    "multiplication": {
      latex: "\\times",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'multiplication',
      name: '乘',
      title: '&times;'
    },
    "division": {
      latex: "\\div",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'division',
      name: '除',
      title: '&divide;'
    },
    "cdot": {
      latex: "\\cdot",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'cdot',
      name: '点乘'
    },
    "xie": {
      latex: "/",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'xie',
      name: '斜线',
      latexicon: '/'
    },
    "plus_minus": {
      latex: "\\pm",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'plus_minus',
      name: '正负'
    },
    "fraction": {
      latex: "\\frac{}{}",
      moveto: "Up",
      movefor: 1,
      tab: 'common',
      icon: 'frac',
      name: '分式'
    },
    'square_common': {
      latex: '{}\\^{2}',
      moveto: 'Left',
      movefor: 3,
      tab: 'common',
      icon: 'square',
      name: '平方'
    },
    'square_root_common': {
      latex: '\\sqrt{}',
      moveto: 'Left',
      movefor: 1,
      tab: 'common',
      icon: 'sqrt',
      name: '平方根'
    },
    "r_superscript_common": {
      latex: "{}\\^{}",
      moveto: "Left",
      movefor: 1,
      tab: 'common',
      icon: 'sup',
      name: '上标'
    },
    "r_subscript_common": {
      latex: "{}\\_{}",
      moveto: "Left",
      movefor: 1,
      tab: 'common',
      icon: 'r_subscript',
      name: '下标'
    },
    "r_sub_supscript_common": {
      latex: "{}\\^{}_{}",
      moveto: "Left",
      movefor: 1,
      tab: 'common',
      icon: 'sub_sup',
      name: '上下标'
    },
    "percent": {
      latex: "%",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'percent',
      name: '百分号',
      title: '%'
    },
    "dotx": {
      latex: "\\dot{}",
      moveto: "Left",
      movefor: 1,
      tab: 'common',
      icon: 'dotx',
      name: '循环小数'
    },
    "infty": {
      latex: "\\infty",
      moveto: "Left",
      movefor: 1,
      tab: 'common',
      icon: 'infty',
      name: '无穷',
      title: '&infin;'
    },
    "dot": {
      latex: ".",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'dot',
      name: '小数点',
      title: '.'
    },
    "comma": {
      latex: ",",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'comma',
      name: '逗号',
      title: ','
    },
    "compare": {
      latex: ":",
      moveto: "Right",
      movefor: 1,
      tab: 'common',
      icon: 'compare',
      name: '比',
      title: ':'
    },
    'pi_common': {
      latex: '\\pi',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: 'pi',
      name: 'π',
      title: 'π'
    },
    'modulus_common': {
      latex: '\\left| {}\\right|',
      moveto: 'Left',
      movefor: 1,
      tab: 'common',
      icon: 'modulus',
      name: '绝对值'
    },
    "direc_num": {
      latex: "\\prime",
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: 'direc_num',
      name: '分',
      title: '&prime;'
    },
    "direc_duble_num": {
      latex: "\\dprime",
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: 'direc_duble_num',
      name: '秒',
      title: '&Prime;'
    },
    "factorial": {
      latex: '!',
      moveto: 'Right',
      movefor: 1,
      tab: 'common',
      icon: 'factorial',
      name: '阶乘',
      title: '!'
    },
    "overrightarrow": {
      latex: "\\vec{}",
      moveto: 'Left',
      movefor: 1,
      tab: 'common',
      icon: 'overrightarrow',
      name: '向量'
    },
    "sum_": {
      latex: "\\sum^{}_{}",
      moveto: "Up",
      movefor: 1,
      tab: 'common',
      icon: 'sum',
      name: '求和'
    },
    "rome_one": {
      latex: 'Ⅰ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅰ',
      name: '罗马数字',
      title: 'Ⅰ'
    },
    "rome_two": {
      latex: 'Ⅱ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅱ',
      name: '罗马数字',
      title: 'Ⅱ'
    },
    "rome_three": {
      latex: 'Ⅲ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅲ',
      name: '罗马数字',
      title: 'Ⅲ'
    },
    "rome_four": {
      latex: 'Ⅳ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅳ',
      name: '罗马数字',
      title: 'Ⅳ'
    },
    "rome_five": {
      latex: 'Ⅴ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅴ',
      name: '罗马数字',
      title: 'Ⅴ'
    },
    "rome_six": {
      latex: 'Ⅵ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅵ',
      name: '罗马数字',
      title: 'Ⅵ'
    },
    "rome_seven": {
      latex: 'Ⅶ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅶ',
      name: '罗马数字',
      title: 'Ⅶ'
    },
    "rome_eight": {
      latex: 'Ⅷ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅷ',
      name: '罗马数字',
      title: 'Ⅷ'
    },
    "rome_nine": {
      latex: 'Ⅸ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅸ',
      name: '罗马数字',
      title: 'Ⅸ'
    },
    "rome_teen": {
      latex: 'Ⅹ',
      moveto: 'Right',
      movefor: 1,
      tab: 'numerals',
      icon: 'Ⅹ',
      name: '罗马数字',
      title: 'Ⅹ'
    },
    "chinese_or": {
      latex: '或',
      moveto: 'Right',
      movefor: 1,
      tab: 'chinese',
      icon: '或',
      name: '常用中文',
      title: '或'
    },
    "chinese_and": {
      latex: '和',
      moveto: 'Right',
      movefor: 1,
      tab: 'chinese',
      icon: '和',
      name: '常用中文',
      title: '和'
    },
    "chinese_both": {
      latex: '且',
      moveto: 'Right',
      movefor: 1,
      tab: 'chinese',
      icon: '且',
      name: '常用中文',
      title: '且'
    }
  };
  var KayBoardValue = {
    'letters': [{
      'value': 'q',
      'type': 'write',
      'class': 'ks',
      'display': 'q',
      'new_line': false
    }, {
      'value': 'w',
      'type': 'write',
      'class': 'ks',
      'display': 'w',
      'new_line': false
    }, {
      'value': 'e',
      'type': 'write',
      'class': 'ks',
      'display': 'e',
      'new_line': false
    }, {
      'value': 'r',
      'type': 'write',
      'class': 'ks',
      'display': 'r',
      'new_line': false
    }, {
      'value': 't',
      'type': 'write',
      'class': 'ks',
      'display': 't',
      'new_line': false
    }, {
      'value': 'y',
      'type': 'write',
      'class': 'ks',
      'display': 'y',
      'new_line': false
    }, {
      'value': 'u',
      'type': 'write',
      'class': 'ks',
      'display': 'u',
      'new_line': false
    }, {
      'value': 'i',
      'type': 'write',
      'class': 'ks',
      'display': 'i',
      'new_line': false
    }, {
      'value': 'o',
      'type': 'write',
      'class': 'ks',
      'display': 'o',
      'new_line': false
    }, {
      'value': 'p',
      'type': 'write',
      'class': 'ks',
      'display': 'p',
      'new_line': true
    }, {
      'value': 'a',
      'type': 'write',
      'class': 'ks',
      'display': 'a',
      'new_line': false
    }, {
      'value': 's',
      'type': 'write',
      'class': 'ks',
      'display': 's',
      'new_line': false
    }, {
      'value': 'd',
      'type': 'write',
      'class': 'ks',
      'display': 'd',
      'new_line': false
    }, {
      'value': 'f',
      'type': 'write',
      'class': 'ks',
      'display': 'f',
      'new_line': false
    }, {
      'value': 'g',
      'type': 'write',
      'class': 'ks',
      'display': 'g',
      'new_line': false
    }, {
      'value': 'h',
      'type': 'write',
      'class': 'ks',
      'display': 'h',
      'new_line': false
    }, {
      'value': 'j',
      'type': 'write',
      'class': 'ks',
      'display': 'j',
      'new_line': false
    }, {
      'value': 'k',
      'type': 'write',
      'class': 'ks',
      'display': 'k',
      'new_line': false
    }, {
      'value': 'l',
      'type': 'write',
      'class': 'ks',
      'display': 'l',
      'new_line': true
    }, {
      'value': 'CapsLock',
      'type': 'custom',
      'class': 'ks long icon',
      'display': '&#8673;',
      'new_line': false
    }, {
      'value': 'z',
      'type': 'write',
      'class': 'ks',
      'display': 'z',
      'new_line': false
    }, {
      'value': 'x',
      'type': 'write',
      'class': 'ks',
      'display': 'x',
      'new_line': false
    }, {
      'value': 'c',
      'type': 'write',
      'class': 'ks',
      'display': 'c',
      'new_line': false
    }, {
      'value': 'v',
      'type': 'write',
      'class': 'ks',
      'display': 'v',
      'new_line': false
    }, {
      'value': 'b',
      'type': 'write',
      'class': 'ks',
      'display': 'b',
      'new_line': false
    }, {
      'value': 'n',
      'type': 'write',
      'class': 'ks',
      'display': 'n',
      'new_line': false
    }, {
      'value': 'm',
      'type': 'write',
      'class': 'ks',
      'display': 'm',
      'new_line': false
    }, {
      'value': 'Backspace',
      'type': 'keystroke',
      'class': 'ks long icon',
      'display': '&#8678;',
      'new_line': true
    }],
    'letters_pc': [{
      'value': 'a',
      'type': 'write',
      'class': 'ks',
      'display': 'a',
      'new_line': false
    }, {
      'value': 'b',
      'type': 'write',
      'class': 'ks',
      'display': 'b',
      'new_line': false
    }, {
      'value': 'c',
      'type': 'write',
      'class': 'ks',
      'display': 'c',
      'new_line': false
    }, {
      'value': 'd',
      'type': 'write',
      'class': 'ks',
      'display': 'd',
      'new_line': false
    }, {
      'value': 'e',
      'type': 'write',
      'class': 'ks',
      'display': 'e',
      'new_line': false
    }, {
      'value': 'f',
      'type': 'write',
      'class': 'ks',
      'display': 'f',
      'new_line': false
    }, {
      'value': 'g',
      'type': 'write',
      'class': 'ks',
      'display': 'g',
      'new_line': false
    }, {
      'value': 'h',
      'type': 'write',
      'class': 'ks',
      'display': 'h',
      'new_line': false
    }, {
      'value': 'i',
      'type': 'write',
      'class': 'ks',
      'display': 'i',
      'new_line': false
    }, {
      'value': 'j',
      'type': 'write',
      'class': 'ks',
      'display': 'j',
      'new_line': true
    }, {
      'value': 'k',
      'type': 'write',
      'class': 'ks',
      'display': 'k',
      'new_line': false
    }, {
      'value': 'l',
      'type': 'write',
      'class': 'ks',
      'display': 'l',
      'new_line': false
    }, {
      'value': 'm',
      'type': 'write',
      'class': 'ks',
      'display': 'm',
      'new_line': false
    }, {
      'value': 'n',
      'type': 'write',
      'class': 'ks',
      'display': 'n',
      'new_line': false
    }, {
      'value': 'o',
      'type': 'write',
      'class': 'ks',
      'display': 'o',
      'new_line': false
    }, {
      'value': 'p',
      'type': 'write',
      'class': 'ks',
      'display': 'p',
      'new_line': false
    }, {
      'value': 'q',
      'type': 'write',
      'class': 'ks',
      'display': 'q',
      'new_line': false
    }, {
      'value': 'r',
      'type': 'write',
      'class': 'ks',
      'display': 'r',
      'new_line': false
    }, {
      'value': 's',
      'type': 'write',
      'class': 'ks',
      'display': 's',
      'new_line': true
    }, {
      'value': 'CapsLock',
      'type': 'custom',
      'class': 'ks long icon',
      'display': '&#8673;',
      'new_line': false
    }, {
      'value': 't',
      'type': 'write',
      'class': 'ks',
      'display': 't',
      'new_line': false
    }, {
      'value': 'u',
      'type': 'write',
      'class': 'ks',
      'display': 'u',
      'new_line': false
    }, {
      'value': 'v',
      'type': 'write',
      'class': 'ks',
      'display': 'v',
      'new_line': false
    }, {
      'value': 'w',
      'type': 'write',
      'class': 'ks',
      'display': 'w',
      'new_line': false
    }, {
      'value': 'x',
      'type': 'write',
      'class': 'ks',
      'display': 'x',
      'new_line': false
    }, {
      'value': 'y',
      'type': 'write',
      'class': 'ks',
      'display': 'y',
      'new_line': false
    }, {
      'value': 'z',
      'type': 'write',
      'class': 'ks',
      'display': 'z',
      'new_line': false
    }, {
      'value': 'Backspace',
      'type': 'keystroke',
      'class': 'ks long icon',
      'display': '&#8678;',
      'new_line': true
    }]
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode:  'pure' ,
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var keys$1 = keys;

  var blue_keyboardbg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"523px\" height=\"290px\" viewBox=\"0 0 523 290\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->\n    <title>公式编辑器-键盘框</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <linearGradient x1=\"50%\" y1=\"4.20881503%\" x2=\"50%\" y2=\"96.6492052%\" id=\"linearGradient-1\">\n            <stop stop-color=\"#3BC4FF\" offset=\"0%\"></stop>\n            <stop stop-color=\"#35B0F5\" offset=\"100%\"></stop>\n        </linearGradient>\n        <path d=\"M194.01107,3.98892989 L277.01355,3.98892989 C277.019663,3.98892989 277.02462,3.99388595 277.02462,3.99999956 L462.001541,3.99999956 L507,3.99999956 C513.627417,3.99999956 519,9.37258256 519,15.9999996 L519,30.9085334 L519,113.038008 L515,117.031265 L515,199.072127 L519,203.061166 L519,222.372231 L519,227.531294 L519,274.98893 C519,280.511777 514.522847,284.98893 509,284.98893 L14,284.98893 C8.4771525,284.98893 4,280.511777 4,274.98893 L4,227.964358 L8,223.964518 L8,174.390048 L4,170.390208 L4,13.9999996 C4,8.47715206 8.4771525,3.99999956 14,3.99999956 L194,3.99999956 L194,3.99999956 C194,3.99388595 194.004956,3.98892989 194.01107,3.98892989 Z\" id=\"path-2\"></path>\n        <filter x=\"-2.6%\" y=\"-4.7%\" width=\"105.1%\" height=\"109.4%\" filterUnits=\"objectBoundingBox\" id=\"filter-3\">\n            <feGaussianBlur stdDeviation=\"12.5\" in=\"SourceAlpha\" result=\"shadowBlurInner1\"></feGaussianBlur>\n            <feOffset dx=\"0\" dy=\"0\" in=\"shadowBlurInner1\" result=\"shadowOffsetInner1\"></feOffset>\n            <feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"></feComposite>\n            <feColorMatrix values=\"0 0 0 0 0.478860401   0 0 0 0 0.929456354   0 0 0 0 0.989663053  0 0 0 0.553979846 0\" type=\"matrix\" in=\"shadowInnerInner1\"></feColorMatrix>\n        </filter>\n        <linearGradient x1=\"0%\" y1=\"-3.64242405%\" x2=\"15.7886213%\" y2=\"103.536038%\" id=\"linearGradient-4\">\n            <stop stop-color=\"#37B9F9\" offset=\"0%\"></stop>\n            <stop stop-color=\"#44F2F9\" offset=\"49.2955429%\"></stop>\n            <stop stop-color=\"#35B0F4\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"50%\" y1=\"12.9641403%\" x2=\"219.104181%\" y2=\"89.6505229%\" id=\"linearGradient-5\">\n            <stop stop-color=\"#CEFFF7\" offset=\"0%\"></stop>\n            <stop stop-color=\"#A5FFFF\" offset=\"100%\"></stop>\n        </linearGradient>\n        <linearGradient x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" id=\"linearGradient-6\">\n            <stop stop-color=\"#92F0FF\" offset=\"0%\"></stop>\n            <stop stop-color=\"#00DBFD\" offset=\"100%\"></stop>\n        </linearGradient>\n    </defs>\n    <g id=\"页面-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"公式编辑器-键盘框\" transform=\"translate(0.000000, 0.500000)\">\n            <g>\n                <path d=\"M12,0.5 C5.64872538,0.5 0.5,5.64872538 0.5,12 L0.5,277 C0.5,283.351275 5.64872538,288.5 12,288.5 L461.004174,288.5 L511,288.5 C517.351275,288.5 522.5,283.351275 522.5,277 L522.5,12 C522.5,5.64872538 517.351275,0.5 511,0.5 L12,0.5 Z\" id=\"矩形\" stroke=\"#82EEFF\"></path>\n                <g id=\"矩形\">\n                    <use fill=\"#F7FCFF\" fill-rule=\"evenodd\" xlink:href=\"#path-2\"></use>\n                    <use fill=\"\" fill-opacity=\"1\" filter=\"url(#filter-3)\" xlink:href=\"#path-2\"></use>\n                    <use stroke=\"#3BC4FF\" stroke-width=\"1.5\" xlink:href=\"#path-2\"></use>\n                </g>\n                <polyline id=\"路径-10\" stroke=\"#37B9F9\" stroke-width=\"1.5\" points=\"4.00319942 271 4.00319942 227.958614 8 223.979935 8 174.396213 4.00319942 170.396213 4.00319942 143.813875\"></polyline>\n                <polyline id=\"路径-11\" stroke=\"#37B9F9\" stroke-width=\"1.5\" points=\"519.001531 57 519.001531 113.046047 515.01 117.032006 515.01 199.079727 519.001531 203.071533 519.001531 266\"></polyline>\n                <polygon id=\"矩形\" stroke=\"#92F0FF\" fill=\"#CEFFF7\" points=\"0.523100201 172 4.5231002 176 4.5231002 222 0.523100201 226\"></polygon>\n                <polygon id=\"矩形\" stroke=\"#92F0FF\" fill=\"#CEFFF7\" transform=\"translate(520.497291, 142.500000) scale(-1, 1) translate(-520.497291, -142.500000) \" points=\"518.497291 115 522.497291 119 522.497291 166 518.497291 170\"></polygon>\n                <polygon id=\"矩形-copy-8\" stroke=\"#92F0FF\" fill=\"#CEFFF7\" points=\"518.497291 171 522.497291 175 522.497291 181 518.497291 177\"></polygon>\n                <polygon id=\"矩形-copy-9\" stroke=\"#92F0FF\" fill=\"#CEFFF7\" points=\"518.497291 181 522.497291 185 522.497291 191 518.497291 187\"></polygon>\n                <polygon id=\"矩形-copy-11\" stroke=\"#92F0FF\" fill=\"#CEFFF7\" points=\"518.497291 191 522.497291 195 522.497291 201 518.497291 197\"></polygon>\n            </g>\n        </g>\n    </g>\n</svg>";

  var blue_close = "<svg width=\"55\" height=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"136.589%\" gradientTransform=\"scale(.52753 1) rotate(25.39 .11 .244)\" id=\"a\"><stop stop-color=\"#B3FFFE\" offset=\"0%\"/><stop stop-color=\"#95F7FF\" offset=\"100%\"/></radialGradient><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"104.199%\" gradientTransform=\"scale(.75532 1) rotate(34.198 .088 .134)\" id=\"b\"><stop stop-color=\"#B3F5FF\" offset=\"0%\"/><stop stop-color=\"#95F7FF\" offset=\"100%\"/></radialGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M3.96 8.938h8.628c.81 0 1.577.356 2.1.974l14.66 17.338H50A3.25 3.25 0 0053.25 24V10.31l-8.609-8.608A3.25 3.25 0 0042.343.75H8.475a3.25 3.25 0 00-2.11.778L2.111 5.161a1.25 1.25 0 00-.077 1.83L3.96 8.937z\" stroke=\"#01DEFB\" stroke-width=\"1.5\" fill=\"#B3FFFE\"/><path d=\"M35 16.302l-2.972 2.971a1.625 1.625 0 01-2.301 0 1.628 1.628 0 010-2.301L32.697 14l-2.972-2.972a1.627 1.627 0 012.302-2.301L35 11.698l2.972-2.971a1.627 1.627 0 112.302 2.301L37.302 14l2.972 2.972h0a1.627 1.627 0 01-2.302 2.301L35 16.302z\" stroke=\"#3CC4FF\" stroke-width=\"1.5\" fill=\"#B3FFFE\" fill-rule=\"nonzero\"/><path d=\"M5.607 12.75l11.852 14.425h6.058L11.665 12.75H5.607z\" stroke=\"#01DEFB\" stroke-width=\"1.5\" fill=\"#B3FFFE\"/><path fill=\"#01DEFB\" d=\"M45.997.007h2.916L54.003 5v3.11z\"/></g></svg>";

  var blue_ipadClose = "<svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#111F2C\" fill-rule=\"evenodd\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\" fill-rule=\"nonzero\"/><rect x=\"4\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><rect x=\"8.5\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><rect x=\"13\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><path d=\"M5.954 9.5L10 12.527 14.046 9.5H5.954zm-1.503-1h11.098a.5.5 0 0 1 .3.9l-5.25 3.928a1 1 0 0 1-1.198 0L4.151 9.4a.5.5 0 0 1 .3-.9z\" fill-rule=\"nonzero\"/></g></svg>";

  var blue_ipadDelete = "<svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(.229)\" fill=\"#111F2C\" fill-rule=\"evenodd\"><path d=\"M5.8 1a1 1 0 0 0-.813.419L1 6.999l3.987 5.582A1 1 0 0 0 5.8 13h9.971a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-9.97zm0-1h9.971a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.97a2 2 0 0 1-1.628-.838L.186 7.582a1 1 0 0 1 0-1.163L4.173.838A2 2 0 0 1 5.8 0z\" fill-rule=\"nonzero\"/><rect transform=\"rotate(45 10.378 7.107)\" x=\"5.378\" y=\"6.607\" width=\"10\" height=\"1\" rx=\".5\"/><rect transform=\"scale(-1 1) rotate(45 0 -17.947)\" x=\"5.378\" y=\"6.607\" width=\"10\" height=\"1\" rx=\".5\"/></g></svg>";

  var blue_ipadCapsLock = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.349 1.762a.5.5 0 0 0-.707.01l-7.53 7.737h4.525v.5l.002 4.99a1.5 1.5 0 0 0 1.5 1.5l4.18.001a1.5 1.5 0 0 0 1.5-1.5V9.509h4.07l-7.53-7.737-.01-.01zM1.112 10.51A1 1 0 0 1 .395 8.81l7.53-7.736a1.5 1.5 0 0 1 2.121-.03l.029.03 7.53 7.736a1 1 0 0 1-.717 1.698h-3.07l.001 4.49a2.5 2.5 0 0 1-2.5 2.501H7.14a2.5 2.5 0 0 1-2.5-2.5l-.001-4.491H1.112z\" fill=\"#111F2C\" fill-rule=\"nonzero\"/></svg>";

  var blue_closeHover = "<svg width=\"55\" height=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"136.589%\" gradientTransform=\"scale(.52753 1) rotate(25.39 .11 .244)\" id=\"a\"><stop stop-color=\"#CBFFFF\" offset=\"0%\"/><stop stop-color=\"#AFF8FE\" offset=\"100%\"/></radialGradient><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"104.199%\" gradientTransform=\"scale(.75532 1) rotate(34.198 .088 .134)\" id=\"b\"><stop stop-color=\"#C8FFFF\" offset=\"0%\"/><stop stop-color=\"#AFF8FE\" offset=\"100%\"/></radialGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M3.96 8.938h8.628c.81 0 1.577.356 2.1.974l14.66 17.338H50A3.25 3.25 0 0053.25 24V10.31l-8.609-8.608A3.25 3.25 0 0042.343.75H8.475a3.25 3.25 0 00-2.11.778L2.111 5.161a1.25 1.25 0 00-.077 1.83L3.96 8.937z\" stroke=\"#74EFFF\" stroke-width=\"1.5\" fill=\"url(#a)\"/><path d=\"M35 16.302l-2.972 2.971a1.625 1.625 0 01-2.301 0 1.628 1.628 0 010-2.301L32.697 14l-2.972-2.972a1.627 1.627 0 012.302-2.301L35 11.698l2.972-2.971a1.627 1.627 0 112.302 2.301L37.302 14l2.972 2.972h0a1.627 1.627 0 01-2.302 2.301L35 16.302z\" stroke=\"#6AD2FF\" stroke-width=\"1.5\" fill=\"#5CF3FF\" fill-rule=\"nonzero\"/><path d=\"M5.607 12.75l11.852 14.425h6.058L11.665 12.75H5.607z\" stroke=\"#74EFFF\" stroke-width=\"1.5\" fill=\"url(#b)\"/><path fill=\"#74EFFF\" d=\"M45.997.007h2.916L54.003 5v3.11z\"/></g></svg>";

  var blue_closeClick = "<svg width=\"55\" height=\"28\" xmlns=\"http://www.w3.org/2000/svg\"><defs><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"136.589%\" gradientTransform=\"scale(.52753 1) rotate(25.39 .11 .244)\" id=\"a\"><stop stop-color=\"#98FAF9\" offset=\"0%\"/><stop stop-color=\"#4FF2FF\" offset=\"100%\"/></radialGradient><radialGradient cx=\"7.535%\" cy=\"9.417%\" fx=\"7.535%\" fy=\"9.417%\" r=\"104.199%\" gradientTransform=\"scale(.75532 1) rotate(34.198 .088 .134)\" id=\"b\"><stop stop-color=\"#98FAF9\" offset=\"0%\"/><stop stop-color=\"#4FF2FF\" offset=\"100%\"/></radialGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M3.96 8.938h8.628c.81 0 1.577.356 2.1.974l14.66 17.338H50A3.25 3.25 0 0053.25 24V10.31l-8.609-8.608A3.25 3.25 0 0042.343.75H8.475a3.25 3.25 0 00-2.11.778L2.111 5.161a1.25 1.25 0 00-.077 1.83L3.96 8.937z\" stroke=\"#05D8F4\" stroke-width=\"1.5\" fill=\"url(#a)\"/><path d=\"M35 16.302l-2.972 2.971a1.625 1.625 0 01-2.301 0 1.628 1.628 0 010-2.301L32.697 14l-2.972-2.972a1.627 1.627 0 012.302-2.301L35 11.698l2.972-2.971a1.627 1.627 0 112.302 2.301L37.302 14l2.972 2.972h0a1.627 1.627 0 01-2.302 2.301L35 16.302z\" stroke=\"#21BAFD\" stroke-width=\"1.5\" fill=\"#12DFF0\" fill-rule=\"nonzero\"/><path d=\"M5.607 12.75l11.852 14.425h6.058L11.665 12.75H5.607z\" stroke=\"#05D8F4\" stroke-width=\"1.5\" fill=\"url(#b)\"/><path fill=\"#05D8F4\" d=\"M45.997.007h2.916L54.003 5v3.11z\"/></g></svg>";

  var blue_number = "<svg width=\"16\" height=\"17\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M2.32 5.06h.82v7.14H2.05V6.37c-.43.41-.98.71-1.64.9V6.19c.32-.08.65-.22 1.01-.42.36-.22.66-.45.9-.71zM7.11 4.9c.68 0 1.25.19 1.69.59.43.4.65.91.65 1.54 0 .62-.24 1.18-.7 1.69-.28.29-.77.67-1.48 1.15-.77.51-1.23.96-1.38 1.35h3.57v.96H4.54c0-.71.23-1.33.71-1.87.26-.31.8-.74 1.61-1.3.48-.34.82-.61 1.02-.82.32-.36.49-.75.49-1.17 0-.4-.11-.7-.33-.9-.22-.2-.55-.3-.97-.3-.45 0-.79.15-1.02.46-.24.3-.36.73-.38 1.31H4.58c.01-.8.24-1.44.69-1.92.46-.52 1.08-.77 1.84-.77zM13.07 4.9c.72 0 1.29.17 1.73.52.42.35.64.83.64 1.44 0 .78-.4 1.31-1.18 1.57.42.13.74.33.96.59.24.27.36.62.36 1.04 0 .66-.23 1.2-.68 1.62-.48.42-1.11.64-1.87.64-.73 0-1.32-.19-1.76-.56-.5-.42-.78-1.03-.84-1.83h1.1c.02.48.17.85.47 1.11.26.24.6.36 1.02.36.46 0 .83-.14 1.11-.4.24-.24.37-.53.37-.89 0-.42-.13-.73-.39-.93-.24-.2-.6-.3-1.07-.3h-.52v-.82h.51c.44 0 .77-.1.99-.29.22-.19.34-.47.34-.83s-.11-.63-.31-.82c-.22-.2-.55-.29-.97-.29-.43 0-.77.11-1.01.33-.24.22-.39.55-.43.99h-1.07c.06-.71.32-1.26.79-1.66.44-.4 1.01-.59 1.71-.59z\"/><path d=\"M.145 14.352a.5.5 0 01.71-.704l1.686 1.704a.5.5 0 00.355.148h10.175a.5.5 0 00.35-.143l1.73-1.692a.5.5 0 11.699.715l-1.73 1.692a1.5 1.5 0 01-1.049.428H2.896a1.5 1.5 0 01-1.066-.445L.145 14.352zM.145 2.648a.5.5 0 10.71.704l1.686-1.704a.5.5 0 01.355-.148h10.175a.5.5 0 01.35.143l1.73 1.692a.5.5 0 10.699-.715L14.12.928A1.5 1.5 0 0013.071.5H2.896c-.4 0-.784.16-1.066.445L.145 2.648z\" fill-rule=\"nonzero\"/></g></svg>";

  var blue_alphabet = "<svg width=\"16\" height=\"17\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M8 1.5a7 7 0 100 14 7 7 0 000-14zm0-1a8 8 0 110 16 8 8 0 010-16z\" fill-rule=\"nonzero\"/><path d=\"M8.201 3.492c.704 0 1.276.176 1.694.528.418.352.638.792.638 1.32 0 .792-.363 1.32-1.078 1.584v.022c.517.121.913.374 1.199.759.275.374.418.836.418 1.375 0 .792-.22 1.43-.66 1.892-.44.451-1.012.682-1.694.682-.385 0-.726-.077-1.023-.22a2.173 2.173 0 01-.836-.748h-.033v2.992H5.66V6.363c0-.88.198-1.562.616-2.057.44-.55 1.078-.814 1.925-.814zm-.099.968c-.418 0-.737.154-.946.473-.22.308-.33.77-.33 1.408v2.398c0 .605.132 1.089.407 1.452.264.352.616.528 1.078.528.528 0 .924-.143 1.188-.429.242-.275.363-.66.363-1.166 0-.517-.11-.902-.319-1.144-.253-.286-.671-.429-1.265-.429h-.396v-.825h.396c.363 0 .638-.099.814-.297.154-.198.231-.462.231-.792 0-.374-.099-.649-.275-.847-.209-.22-.528-.33-.946-.33z\"/></g></svg>";

  var blue_common = "<svg width=\"14\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M2 1.5a1 1 0 00-1 1v11.826l4.701-4.028a2 2 0 012.604 0L13 14.326V2.5a1 1 0 00-1-1H2zm0-1h10a2 2 0 012 2v11.825a1 1 0 01-1.651.76l-4.695-4.027a1 1 0 00-1.302 0l-4.701 4.028A1 1 0 010 14.326V2.5a2 2 0 012-2z\" fill-rule=\"nonzero\"/><path d=\"M4 4.5h6v1H4z\"/></g></svg>";

  var blue_relation = "<svg width=\"16\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M2 1.5a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-10a1 1 0 00-1-1H2zm0-1h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2v-10a2 2 0 012-2z\" fill-rule=\"nonzero\"/><path d=\"M11 10.5H5a.5.5 0 100 1h6a.5.5 0 100-1z\"/><path d=\"M10.044 6.431L4.787 3.952a.5.5 0 11.426-.904l5.853 2.76a.7.7 0 01-.016 1.273L5.202 9.658a.5.5 0 01-.404-.916l5.246-2.31z\" fill-rule=\"nonzero\"/></g></svg>";

  var blue_geometric = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"nonzero\" fill=\"#84BFE9\"><path d=\"M10.377 5.592l-.552-.965A5.455 5.455 0 115.582 12.5h1.155a4.455 4.455 0 103.64-6.908z\"/><path d=\"M1.737 10.75h9.526L6.5 2.5l-4.763 8.25zM6.5.5l6.495 11.25H.005L6.5.5z\"/></g></svg>";

  var blue_brackets = "<svg width=\"14\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M2.22.5h1.057a14.596 14.596 0 00-1.434 3.126 12.048 12.048 0 00-.665 3.927c0 1.284.211 2.597.665 3.927.347 1.072.83 2.114 1.434 3.126H2.22a13.325 13.325 0 01-1.555-3.111A11.85 11.85 0 010 7.568C0 6.224.211 4.91.665 3.611A12.764 12.764 0 012.22.5zM10.723.5h1.057a13.94 13.94 0 011.555 3.111C13.773 4.91 14 6.224 14 7.568c0 1.314-.227 2.628-.665 3.927a14.615 14.615 0 01-1.555 3.11h-1.057a16.154 16.154 0 001.434-3.125c.438-1.33.665-2.643.665-3.927 0-1.299-.227-2.598-.665-3.927A15.37 15.37 0 0010.723.5z\"/></g></svg>";

  var blue_interval = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"17px\" height=\"16px\" viewBox=\"0 0 17 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->\n    <title>符号-区间icon-未选中</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"页面-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"符号下所有\" transform=\"translate(-251.000000, -2846.000000)\" fill=\"#84BFE9\">\n            <g id=\"符号-数字-copy-5\" transform=\"translate(75.000000, 2635.000000)\">\n                <g id=\"底部\" transform=\"translate(4.000000, 211.000000)\">\n                    <g id=\"数字-选中\" transform=\"translate(172.000000, 0.000000)\">\n                        <g id=\"符号-区间icon-未选中\" transform=\"translate(9.000000, 8.000000) rotate(90.000000) translate(-9.000000, -8.000000) translate(1.500000, -0.500000)\">\n                            <rect id=\"矩形\" x=\"7\" y=\"5.49999996\" width=\"1\" height=\"7\"></rect>\n                            <polygon id=\"矩形\" points=\"7.46037196 3.5 9 5.49999996 6 5.49999996\"></polygon>\n                            <polygon id=\"矩形-copy-5\" transform=\"translate(7.500000, 13.500000) scale(1, -1) translate(-7.500000, -13.500000) \" points=\"7.46037196 12.5 9 14.5 6 14.5\"></polygon>\n                            <path d=\"M14,16 L14,13.6879822 C14,13.4118398 14.2238576,13.1879822 14.5,13.1879822 C14.7761424,13.1879822 15,13.4118398 15,13.6879822 L15,17 L-3.18323146e-12,17 L-3.18323146e-12,13.6879822 C-3.18323146e-12,13.4118398 0.223857625,13.1879822 0.5,13.1879822 C0.776142375,13.1879822 1,13.4118398 1,13.6879822 L1,16 L14,16 Z\" id=\"路径-6\" fill-rule=\"nonzero\"></path>\n                            <path d=\"M14,3.5 L14,1.18798216 C14,0.911839781 14.2238576,0.687982156 14.5,0.687982156 C14.7761424,0.687982156 15,0.911839781 15,1.18798216 L15,4.5 L-3.18323146e-12,4.5 L-3.18323146e-12,1.18798216 C-3.18323146e-12,0.911839781 0.223857625,0.687982156 0.5,0.687982156 C0.776142375,0.687982156 1,0.911839781 1,1.18798216 L1,3.5 L14,3.5 Z\" id=\"路径-6-copy\" fill-rule=\"nonzero\" transform=\"translate(7.500000, 2.593991) scale(1, -1) translate(-7.500000, -2.593991) \"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

  var blue_set = "<svg width=\"14\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M14 10.5v1H5.5a5.5 5.5 0 010-11H14v1H5.5a4.5 4.5 0 000 9H14z\" fill-rule=\"nonzero\"/><path d=\"M0 13h14v1H0z\"/></g></svg>";

  var blue_exponent = "<svg width=\"15\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M0 4h1.354l8.141 11H8.141z\"/><path d=\"M9.495 4H8.141L0 15h1.354zM13.303 0C14.43 0 15 .615 15 1.864v2.804h-.932V1.943c0-.774-.36-1.16-1.064-1.16a.949.949 0 00-.694.28c-.211.212-.343.502-.378.871v2.734H11V.123h.932v.563c.176-.229.378-.396.606-.51.229-.123.484-.176.765-.176z\"/></g></svg>";

  var blue_logarithm = "<svg width=\"16\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h1.149v11H0V0zm5.852 3.893c.959 0 1.733.345 2.311 1.036.566.677.86 1.54.86 2.59 0 1.036-.282 1.9-.848 2.563-.59.691-1.364 1.05-2.323 1.05-.959 0-1.734-.359-2.324-1.05-.565-.664-.848-1.527-.848-2.563 0-1.05.283-1.913.86-2.59.578-.69 1.353-1.036 2.312-1.036zm-.004.94c-.635 0-1.127.265-1.477.811-.311.462-.454.942-.454 1.792 0 .85.143 1.316.454 1.778.35.532.842.812 1.477.812.635 0 1.127-.28 1.49-.812.311-.476.466-.899.466-1.778s-.155-1.33-.466-1.792c-.363-.546-.855-.812-1.49-.812zm7.06-.563c.837 0 1.476.353 1.943 1.086v-.903H16v6.32c0 2.146-.842 3.219-2.809 3.219-.885 0-1.561-.184-2.028-.537-.467-.366-.75-.916-.873-1.662h1.303c.074.393.221.68.467.85.234.158.615.25 1.131.25 1.107 0 1.66-.642 1.66-1.91V9.934c-.467.746-1.106 1.126-1.942 1.126-.861 0-1.562-.314-2.09-.93-.541-.614-.8-1.425-.8-2.446 0-1.02.259-1.832.8-2.46.528-.641 1.229-.955 2.09-.955zm.197 1.13c-.553 0-.983.196-1.278.615-.32.392-.467.955-.467 1.675 0 .654.122 1.177.368 1.557.283.445.738.68 1.377.68.554 0 .984-.196 1.303-.589.295-.405.455-.955.455-1.648 0-.707-.16-1.27-.455-1.675-.32-.419-.75-.615-1.303-.615z\" fill=\"#84BFE9\" fill-rule=\"evenodd\"/></svg>";

  var blue_radical = "<svg width=\"17\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M4.33 12.726l1.772-11.4a.5.5 0 01.495-.43h9.643v1H7.03l-2.009 13.07c-.075.523-.803.589-.97.088L1.465 8.276H.24v-1h1.585a.5.5 0 01.474.342l2.032 5.108z\" fill-rule=\"nonzero\"/><path d=\"M7.813 6H9l6 9h-1.187z\"/><path d=\"M15 6h-1.187l-6 9H9z\"/></g></svg>";

  var blue_equation = "<svg width=\"14\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M3.402.422h.966v.825h-.784c-.616 0-.967.393-.967 1.093v3.912c0 .84-.349 1.414-1.105 1.708.756.308 1.105.882 1.105 1.708v3.926c0 .672.351 1.064.967 1.064h.784v.84h-.966c-.574 0-1.022-.182-1.33-.546-.308-.336-.448-.798-.448-1.386V9.71c0-.42-.098-.772-.266-.968-.196-.224-.56-.35-1.064-.364v-.85c.504-.028.868-.14 1.064-.364.168-.196.266-.534.266-.954V2.368c0-.588.14-1.064.448-1.4.308-.364.756-.546 1.33-.546zM7.105 0h1.282L14 6h-1.282z\"/><path d=\"M14 0h-1.282L7.105 6h1.282zM13.941 7H12.8L8 16h1.141z\"/><path d=\"M10.15 12.906L7 7h1.141l2.787 5.224\"/></g></svg>";

  var blue_calculus = "<svg width=\"15\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M4.497 1.718h2.287v.897H4.627c-.286 0-.507.065-.637.221-.13.143-.195.377-.195.702v2.741h2.898v.871H3.795V15h-1.04V7.15H.065v-.871h2.69V3.512c0-.572.143-1.001.429-1.313.299-.325.741-.481 1.313-.481zM8.773.145a.85.85 0 01.702.351c.169.234.26.533.26.923 0 .572-.169 1.079-.507 1.508-.338.416-.793.702-1.339.858v-.65a1.71 1.71 0 00.806-.559c.208-.273.299-.559.299-.871a.744.744 0 01-.286.039.708.708 0 01-.546-.234.756.756 0 01-.234-.559c0-.247.065-.442.221-.585.156-.156.364-.221.624-.221zM15 6h-1.14L8 15h1.14z\"/><path d=\"M8 6h1.14L15 15h-1.14z\"/></g></svg>";

  var blue_matrix = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M15 1h-1.999V0H16v16h-3v-1h2V1zm0 14V1h-1.999V0H16v16h-3v-1h2zM1 1h1.999V0H0v16h3v-1H1V1zm0 14V1h1.999V0H0v16h3v-1H1z\" fill-rule=\"nonzero\"/><path d=\"M5.004 1.7h.646v5.623h-.858V2.732c-.34.323-.772.559-1.292.708v-.85c.252-.063.512-.173.795-.33.284-.174.52-.355.71-.56zM10.904 9h.646v5.623h-.858v-4.591c-.34.323-.772.559-1.292.708v-.85c.252-.063.512-.173.795-.33.284-.174.52-.355.71-.56zM11 1.7c.651 0 1.155.271 1.512.822.325.511.488 1.194.488 2.054 0 .853-.163 1.543-.488 2.054-.357.543-.86.822-1.512.822-.651 0-1.155-.28-1.512-.822C9.163 6.12 9 5.436 9 4.576c0-.868.163-1.55.488-2.054.357-.55.86-.822 1.512-.822zm0 .713c-.457 0-.775.248-.961.752-.14.341-.202.814-.202 1.411 0 .59.062 1.062.202 1.41.186.497.504.753.961.753.45 0 .775-.256.961-.752.132-.349.202-.822.202-1.411 0-.597-.07-1.07-.202-1.41-.186-.505-.511-.753-.961-.753zM5 9c.651 0 1.155.271 1.512.822.325.511.488 1.194.488 2.054 0 .853-.163 1.543-.488 2.054-.357.543-.86.822-1.512.822-.651 0-1.155-.28-1.512-.822C3.163 13.42 3 12.736 3 11.876c0-.868.163-1.55.488-2.054C3.845 9.272 4.348 9 5 9zm0 .713c-.457 0-.775.248-.961.752-.14.341-.202.814-.202 1.411 0 .59.062 1.062.202 1.41.186.497.504.753.961.753.45 0 .775-.256.961-.752.132-.349.202-.822.202-1.411 0-.597-.07-1.07-.202-1.41-.186-.505-.511-.753-.961-.753z\"/></g></svg>";

  var blue_serial = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M8 1a7 7 0 100 14A7 7 0 008 1zm0-1a8 8 0 110 16A8 8 0 018 0z\" fill-rule=\"nonzero\"/><path d=\"M7.92 4.86h.82V12H7.65V6.17c-.43.41-.98.71-1.64.9V5.99c.32-.08.65-.22 1.01-.42.36-.22.66-.45.9-.71z\"/></g></svg>";

  var blue_unit = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16z\" fill-rule=\"nonzero\"/><path d=\"M1.767 11.425l-.82-.573 4.8-6.854a1 1 0 011.392-.245l4.915 3.441a1 1 0 01.246 1.393l-4.947 7.064-.819-.573 4.947-7.065-4.915-3.441-4.8 6.853z\" fill-rule=\"nonzero\"/><path d=\"M4.6 6.914l3.523 2.467-.574.819-3.522-2.467zM2.573 9l3.277 2.294-.574.82L2 9.819z\"/></g></svg>";

  var blue_chemical = "<svg width=\"14\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M5 1v3.005a1 1 0 01-.09.414l-3.714 8.167A1 1 0 002.106 14h9.788a1 1 0 00.91-1.414L9.09 4.413A1 1 0 019 3.999V1H5zM4 0h6v3.999l3.715 8.173A2 2 0 0111.895 15H2.106a2 2 0 01-1.821-2.828L4 4.005V0z\" fill-rule=\"nonzero\"/><rect x=\"3\" width=\"8\" height=\"1\" rx=\".5\"/><rect x=\"3\" y=\"6\" width=\"8\" height=\"1\" rx=\".5\"/><path d=\"M9.5 12a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 110-3 1.5 1.5 0 010 3z\" fill-rule=\"nonzero\"/><circle cx=\"6\" cy=\"9\" r=\"1\"/></g></svg>";

  var blue_script = "<svg width=\"16\" height=\"13\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M4.747 5.002L8.141 0h1.354l-4.07 6 4.07 6H8.141L4.747 6.998 1.354 12H0l4.07-6L0 0h1.354l3.393 5.002zM13.432 4.4C15.135 4.4 16 5.345 16 7.234v4.768h-1.064V7.313c0-1.343-.612-2.008-1.81-2.008-.478 0-1.104.173-1.45.518-.372.373-.572.865-.612 1.49v4.69H10V4.585h1.064v1.011c.24-.386.546-.678.918-.878.373-.213.998-.319 1.45-.319z\"/></g></svg>";

  var blue_numerals = "<svg width=\"15\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.014 1.718h1.053v11H1.014v-11zm-1-1h3v1h-3v-1zm4 0h3v1h-3v-1zm7 0h3v1h-3v-1zm-11 12h3v1h-3v-1zm5-11h1.17l2.899 10.868h.039l2.899-10.868h1.17l-3.432 12H8.446l-3.432-12z\" fill=\"#84BFE9\" fill-rule=\"evenodd\"/></svg>";

  var blue_chinese = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#00B2FF\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16z\" fill-rule=\"nonzero\"/><path d=\"M4 5h8v1H4z\"/><circle cx=\"5\" cy=\"8\" r=\"1\"/><circle cx=\"8\" cy=\"8\" r=\"1\"/><circle cx=\"11\" cy=\"8\" r=\"1\"/><circle cx=\"5\" cy=\"11\" r=\"1\"/><circle cx=\"8\" cy=\"11\" r=\"1\"/><circle cx=\"11\" cy=\"11\" r=\"1\"/></g></svg>";

  var blue_uppercase = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16z\" fill-rule=\"nonzero\"/><path d=\"M7.372 3.432h1.14L11.884 12h-1.068l-.912-2.4H5.968L5.056 12H4l3.372-8.568zM6.28 8.772h3.312l-1.62-4.284h-.048L6.28 8.772z\"/></g></svg>";

  var blue_lowercase = "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#84BFE9\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16z\" fill-rule=\"nonzero\"/><path d=\"M8.105 4.566c1.036 0 1.792.266 2.296.812.42.476.644 1.134.644 1.974V12h-1.05v-1.218c-.28.392-.658.714-1.106.966a3.675 3.675 0 01-1.806.448c-.728 0-1.302-.182-1.736-.546a1.825 1.825 0 01-.672-1.456c0-.826.322-1.442.994-1.862.588-.392 1.428-.602 2.52-.616l1.736-.028V7.31c0-1.218-.63-1.82-1.89-1.82-.532 0-.966.098-1.302.322-.378.224-.616.574-.728 1.036l-1.106-.084c.154-.756.532-1.33 1.12-1.694.532-.336 1.218-.504 2.086-.504zm1.82 3.962l-1.666.028c-1.624.028-2.436.56-2.436 1.61 0 .336.126.602.406.826.28.21.644.322 1.092.322.686 0 1.288-.224 1.82-.672.518-.434.784-.938.784-1.498v-.616z\"/></g></svg>";

  var blue_scrollarray = "<svg width=\"8\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.639 1.647l5.434 4.512a1 1 0 010 1.539L1.64 12.21A1 1 0 010 11.44V2.416a1 1 0 011.639-.77z\" fill=\"#84BFE9\" fill-rule=\"evenodd\"/></svg>";

  var simple_keyboardbg = "<svg width=\"523\" height=\"290\" viewBox=\"0 0 523 290\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><path d=\"M194.011 3.989h83.003c.006 0 .01.005.01.011H507c6.627 0 12 5.373 12 12V113.038l-4 3.993v82.041l4 3.99V274.988c0 5.523-4.477 10-10 10H14c-5.523 0-10-4.477-10-10v-47.025l4-4V174.39l-4-4V14C4 8.477 8.477 4 14 4h180c0-.006.005-.011.011-.011z\" id=\"a\"/><filter x=\"-2.6%\" y=\"-4.7%\" width=\"105.1%\" height=\"109.4%\" filterUnits=\"objectBoundingBox\" id=\"b\"><feGaussianBlur stdDeviation=\"12.5\" in=\"SourceAlpha\" result=\"shadowBlurInner1\"/><feOffset in=\"shadowBlurInner1\" result=\"shadowOffsetInner1\"/><feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"/><feColorMatrix values=\"0 0 0 0 0.478860401 0 0 0 0 0.929456354 0 0 0 0 0.989663053 0 0 0 0.553979846 0\" in=\"shadowInnerInner1\"/></filter></defs><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M12 1C5.649 1 .5 6.149.5 12.5v265C.5 283.851 5.649 289 12 289h499c6.351 0 11.5-5.149 11.5-11.5v-265C522.5 6.149 517.351 1 511 1H12z\" stroke=\"#82EEFF\"/><g transform=\"translate(0 .5)\"><use fill=\"#F7FCFF\" xlink:href=\"#a\"/><use filter=\"url(#b)\" xlink:href=\"#a\"/><use stroke=\"#3BC4FF\" stroke-width=\"1.5\" xlink:href=\"#a\"/></g><path stroke=\"#37B9F9\" stroke-width=\"1.5\" d=\"M4.003 271.5v-43.041L8 224.479v-49.583l-3.997-4v-26.582M519.002 57.5v56.046l-3.992 3.986v82.048l3.992 3.992V266.5\"/><path stroke=\"#92F0FF\" fill=\"#CEFFF7\" d=\"M.523 172.5l4 4v46l-4 4zM522.497 115.5l-4 4v47l4 4zM518.497 171.5l4 4v6l-4-4zM518.497 181.5l4 4v6l-4-4zM518.497 191.5l4 4v6l-4-4z\"/></g></svg>";

  var simple_close = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#DADADA\" fill-rule=\"nonzero\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M13.069 12l5.343-5.414c.356-.36.356-.812 0-1.172-.356-.361-.802-.361-1.158 0l-5.343 5.413-5.343-5.413c-.356-.361-.802-.361-1.158 0-.267.36-.267.902 0 1.172L10.753 12 5.41 17.414c-.356.36-.356.812 0 1.172.178.18.356.271.623.271.179 0 .446-.09.624-.27L12 13.172l5.343 5.413c.178.18.356.271.624.271.178 0 .445-.09.623-.27.356-.361.356-.813 0-1.173L13.069 12z\" fill=\"#FFF\"/></g></svg>";

  var simple_ipadClose = "<svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#111F2C\" fill-rule=\"evenodd\"><path d=\"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\" fill-rule=\"nonzero\"/><rect x=\"4\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><rect x=\"8.5\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><rect x=\"13\" y=\"3.5\" width=\"3\" height=\"3\" rx=\"1\"/><path d=\"M5.954 9.5L10 12.527 14.046 9.5H5.954zm-1.503-1h11.098a.5.5 0 0 1 .3.9l-5.25 3.928a1 1 0 0 1-1.198 0L4.151 9.4a.5.5 0 0 1 .3-.9z\" fill-rule=\"nonzero\"/></g></svg>";

  var simple_ipadDelete = "<svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(.229)\" fill=\"#111F2C\" fill-rule=\"evenodd\"><path d=\"M5.8 1a1 1 0 0 0-.813.419L1 6.999l3.987 5.582A1 1 0 0 0 5.8 13h9.971a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-9.97zm0-1h9.971a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.97a2 2 0 0 1-1.628-.838L.186 7.582a1 1 0 0 1 0-1.163L4.173.838A2 2 0 0 1 5.8 0z\" fill-rule=\"nonzero\"/><rect transform=\"rotate(45 10.378 7.107)\" x=\"5.378\" y=\"6.607\" width=\"10\" height=\"1\" rx=\".5\"/><rect transform=\"scale(-1 1) rotate(45 0 -17.947)\" x=\"5.378\" y=\"6.607\" width=\"10\" height=\"1\" rx=\".5\"/></g></svg>";

  var simple_ipadCapsLock = "<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.349 1.762a.5.5 0 0 0-.707.01l-7.53 7.737h4.525v.5l.002 4.99a1.5 1.5 0 0 0 1.5 1.5l4.18.001a1.5 1.5 0 0 0 1.5-1.5V9.509h4.07l-7.53-7.737-.01-.01zM1.112 10.51A1 1 0 0 1 .395 8.81l7.53-7.736a1.5 1.5 0 0 1 2.121-.03l.029.03 7.53 7.736a1 1 0 0 1-.717 1.698h-3.07l.001 4.49a2.5 2.5 0 0 1-2.5 2.501H7.14a2.5 2.5 0 0 1-2.5-2.5l-.001-4.491H1.112z\" fill=\"#111F2C\" fill-rule=\"nonzero\"/></svg>";

  var simple_closeHover = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#0089ff\" fill-rule=\"nonzero\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M13.069 12l5.343-5.414c.356-.36.356-.812 0-1.172-.356-.361-.802-.361-1.158 0l-5.343 5.413-5.343-5.413c-.356-.361-.802-.361-1.158 0-.267.36-.267.902 0 1.172L10.753 12 5.41 17.414c-.356.36-.356.812 0 1.172.178.18.356.271.623.271.179 0 .446-.09.624-.27L12 13.172l5.343 5.413c.178.18.356.271.624.271.178 0 .445-.09.623-.27.356-.361.356-.813 0-1.173L13.069 12z\" fill=\"#FFF\"/></g></svg>";

  var simple_closeClick = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#0089ff\" opacity=\".8\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M13.069 12l5.343-5.414c.356-.36.356-.812 0-1.172-.356-.361-.802-.361-1.158 0l-5.343 5.413-5.343-5.413c-.356-.361-.802-.361-1.158 0-.267.36-.267.902 0 1.172L10.753 12 5.41 17.414c-.356.36-.356.812 0 1.172.178.18.356.271.623.271.179 0 .446-.09.624-.27L12 13.172l5.343 5.413c.178.18.356.271.624.271.178 0 .445-.09.623-.27.356-.361.356-.813 0-1.173L13.069 12z\" fill=\"#FFF\"/></g></svg>";

  var simple_number = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M2.32 4.56h.82v7.14H2.05V5.87c-.43.41-.98.71-1.64.9V5.69c.32-.08.65-.22 1.01-.42.36-.22.66-.45.9-.71zM7.11 4.4c.68 0 1.25.19 1.69.59.43.4.65.91.65 1.54 0 .62-.24 1.18-.7 1.69-.28.29-.77.67-1.48 1.15-.77.51-1.23.96-1.38 1.35h3.57v.96H4.54c0-.71.23-1.33.71-1.87.26-.31.8-.74 1.61-1.3.48-.34.82-.61 1.02-.82.32-.36.49-.75.49-1.17 0-.4-.11-.7-.33-.9-.22-.2-.55-.3-.97-.3-.45 0-.79.15-1.02.46-.24.3-.36.73-.38 1.31H4.58c.01-.8.24-1.44.69-1.92.46-.52 1.08-.77 1.84-.77zM13.07 4.4c.72 0 1.29.17 1.73.52.42.35.64.83.64 1.44 0 .78-.4 1.31-1.18 1.57.42.13.74.33.96.59.24.27.36.62.36 1.04 0 .66-.23 1.2-.68 1.62-.48.42-1.11.64-1.87.64-.73 0-1.32-.19-1.76-.56-.5-.42-.78-1.03-.84-1.83h1.1c.02.48.17.85.47 1.11.26.24.6.36 1.02.36.46 0 .83-.14 1.11-.4.24-.24.37-.53.37-.89 0-.42-.13-.73-.39-.93-.24-.2-.6-.3-1.07-.3h-.52v-.82h.51c.44 0 .77-.1.99-.29.22-.19.34-.47.34-.83s-.11-.63-.31-.82c-.22-.2-.55-.29-.97-.29-.43 0-.77.11-1.01.33-.24.22-.39.55-.43.99h-1.07c.06-.71.32-1.26.79-1.66.44-.4 1.01-.59 1.71-.59z\"/><path d=\"M.145 13.852a.5.5 0 0 1 .71-.704l1.686 1.704a.5.5 0 0 0 .355.148h10.175a.5.5 0 0 0 .35-.143l1.73-1.692a.5.5 0 1 1 .699.715l-1.73 1.692a1.5 1.5 0 0 1-1.049.428H2.896a1.5 1.5 0 0 1-1.066-.445L.145 13.852zM.145 2.148a.5.5 0 1 0 .71.704l1.686-1.704A.5.5 0 0 1 2.896 1h10.175a.5.5 0 0 1 .35.143l1.73 1.692a.5.5 0 1 0 .699-.715L14.12.428A1.5 1.5 0 0 0 13.071 0H2.896c-.4 0-.784.16-1.066.445L.145 2.148z\" fill-rule=\"nonzero\"/></g></svg>";

  var simple_alphabet = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z\" fill-rule=\"nonzero\"/><path d=\"M8.201 2.992c.704 0 1.276.176 1.694.528.418.352.638.792.638 1.32 0 .792-.363 1.32-1.078 1.584v.022c.517.121.913.374 1.199.759.275.374.418.836.418 1.375 0 .792-.22 1.43-.66 1.892-.44.451-1.012.682-1.694.682-.385 0-.726-.077-1.023-.22a2.173 2.173 0 0 1-.836-.748h-.033v2.992H5.66V5.863c0-.88.198-1.562.616-2.057.44-.55 1.078-.814 1.925-.814zm-.099.968c-.418 0-.737.154-.946.473-.22.308-.33.77-.33 1.408v2.398c0 .605.132 1.089.407 1.452.264.352.616.528 1.078.528.528 0 .924-.143 1.188-.429.242-.275.363-.66.363-1.166 0-.517-.11-.902-.319-1.144-.253-.286-.671-.429-1.265-.429h-.396v-.825h.396c.363 0 .638-.099.814-.297.154-.198.231-.462.231-.792 0-.374-.099-.649-.275-.847-.209-.22-.528-.33-.946-.33z\"/></g></svg>";

  var simple_common = "<svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M2 1a1 1 0 0 0-1 1v11.826l4.701-4.028a2 2 0 0 1 2.604 0L13 13.826V2a1 1 0 0 0-1-1H2zm0-1h10a2 2 0 0 1 2 2v11.825a1 1 0 0 1-1.651.76l-4.695-4.027a1 1 0 0 0-1.302 0l-4.701 4.028A1 1 0 0 1 0 13.826V2a2 2 0 0 1 2-2z\" fill-rule=\"nonzero\"/><path d=\"M4 4h6v1H4z\"/></g></svg>";

  var simple_relation = "<svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z\" fill-rule=\"nonzero\"/><path d=\"M11 10H5a.5.5 0 1 0 0 1h6a.5.5 0 1 0 0-1z\"/><path d=\"M10.044 5.931L4.787 3.452a.5.5 0 1 1 .426-.904l5.853 2.76a.7.7 0 0 1-.016 1.273L5.202 9.158a.5.5 0 0 1-.404-.916l5.246-2.31z\" fill-rule=\"nonzero\"/></g></svg>";

  var simple_geometric = "<svg width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"nonzero\"><path d=\"M10.377 5.092l-.552-.965A5.455 5.455 0 1 1 5.582 12h1.155a4.455 4.455 0 1 0 3.64-6.908z\"/><path d=\"M1.737 10.25h9.526L6.5 2l-4.763 8.25zM6.5 0l6.495 11.25H.005L6.5 0z\"/></g></svg>";

  var simple_brackets = "<svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M2.22 0h1.057a14.596 14.596 0 0 0-1.434 3.126 12.048 12.048 0 0 0-.665 3.927c0 1.284.211 2.597.665 3.927.347 1.072.83 2.114 1.434 3.126H2.22a13.325 13.325 0 0 1-1.555-3.111A11.85 11.85 0 0 1 0 7.068C0 5.724.211 4.41.665 3.111A12.764 12.764 0 0 1 2.22 0zM10.723 0h1.057a13.94 13.94 0 0 1 1.555 3.111C13.773 4.41 14 5.724 14 7.068c0 1.314-.227 2.628-.665 3.927a14.615 14.615 0 0 1-1.555 3.11h-1.057a16.154 16.154 0 0 0 1.434-3.125c.438-1.33.665-2.643.665-3.927 0-1.299-.227-2.598-.665-3.927A15.37 15.37 0 0 0 10.723 0z\"/></g></svg>";

  var simple_interval = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M11.5 7.5v1h-7v-1zM13.5 7.96l-2 1.54v-3zM2.5 7.96l2 1.54v-3z\"/><path d=\"M1 14.5h2.312a.5.5 0 1 1 0 1H0V.5h3.312a.5.5 0 1 1 0 1H1v13zM15.312 14.5H13a.5.5 0 1 0 0 1h3.312V.5H13a.5.5 0 1 0 0 1h2.312v13z\" fill-rule=\"nonzero\"/></g></svg>";

  var simple_set = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M14 10.5v1H5.5a5.5 5.5 0 0 1 0-11H14v1H5.5a4.5 4.5 0 0 0 0 9H14z\" fill-rule=\"nonzero\"/><path d=\"M0 13h14v1H0z\"/></g></svg>";

  var simple_exponent = "<svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M0 4h1.354l8.141 11H8.141z\"/><path d=\"M9.495 4H8.141L0 15h1.354zM13.303 0C14.43 0 15 .615 15 1.864v2.804h-.932V1.943c0-.774-.36-1.16-1.064-1.16a.949.949 0 0 0-.694.28c-.211.212-.343.502-.378.871v2.734H11V.123h.932v.563c.176-.229.378-.396.606-.51.229-.123.484-.176.765-.176z\"/></g></svg>";

  var simple_logarithm = "<svg width=\"16\" height=\"14\" viewBox=\"0 0 16 14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h1.149v11H0V0zm5.852 3.893c.959 0 1.733.345 2.311 1.036.566.677.86 1.54.86 2.59 0 1.036-.282 1.9-.848 2.563-.59.691-1.364 1.05-2.323 1.05-.959 0-1.734-.359-2.324-1.05-.565-.664-.848-1.527-.848-2.563 0-1.05.283-1.913.86-2.59.578-.69 1.353-1.036 2.312-1.036zm-.004.94c-.635 0-1.127.265-1.477.811-.311.462-.454.942-.454 1.792 0 .85.143 1.316.454 1.778.35.532.842.812 1.477.812.635 0 1.127-.28 1.49-.812.311-.476.466-.899.466-1.778s-.155-1.33-.466-1.792c-.363-.546-.855-.812-1.49-.812zm7.06-.563c.837 0 1.476.353 1.943 1.086v-.903H16v6.32c0 2.146-.842 3.219-2.809 3.219-.885 0-1.561-.184-2.028-.537-.467-.366-.75-.916-.873-1.662h1.303c.074.393.221.68.467.85.234.158.615.25 1.131.25 1.107 0 1.66-.642 1.66-1.91V9.934c-.467.746-1.106 1.126-1.942 1.126-.861 0-1.562-.314-2.09-.93-.541-.614-.8-1.425-.8-2.446 0-1.02.259-1.832.8-2.46.528-.641 1.229-.955 2.09-.955zm.197 1.13c-.553 0-.983.196-1.278.615-.32.392-.467.955-.467 1.675 0 .654.122 1.177.368 1.557.283.445.738.68 1.377.68.554 0 .984-.196 1.303-.589.295-.405.455-.955.455-1.648 0-.707-.16-1.27-.455-1.675-.32-.419-.75-.615-1.303-.615z\" fill=\"#999\" fill-rule=\"evenodd\"/></svg>";

  var simple_radical = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M4.33 12.726l1.772-11.4a.5.5 0 0 1 .495-.43h9.643v1H7.03l-2.009 13.07c-.075.523-.803.589-.97.088L1.465 8.276H.24v-1h1.585a.5.5 0 0 1 .474.342l2.032 5.108z\" fill-rule=\"nonzero\"/><path d=\"M7.813 6H9l6 9h-1.187z\"/><path d=\"M15 6h-1.187l-6 9H9z\"/></g></svg>";

  var simple_equation = "<svg width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M3.402.422h.966v.825h-.784c-.616 0-.967.393-.967 1.093v3.912c0 .84-.349 1.414-1.105 1.708.756.308 1.105.882 1.105 1.708v3.926c0 .672.351 1.064.967 1.064h.784v.84h-.966c-.574 0-1.022-.182-1.33-.546-.308-.336-.448-.798-.448-1.386V9.71c0-.42-.098-.772-.266-.968-.196-.224-.56-.35-1.064-.364v-.85c.504-.028.868-.14 1.064-.364.168-.196.266-.534.266-.954V2.368c0-.588.14-1.064.448-1.4.308-.364.756-.546 1.33-.546zM7.105 0h1.282L14 6h-1.282z\"/><path d=\"M14 0h-1.282L7.105 6h1.282zM13.941 7H12.8L8 16h1.141z\"/><path d=\"M10.15 12.906L7 7h1.141l2.787 5.224\"/></g></svg>";

  var simple_calculus = "<svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M4.497 1.718h2.287v.897H4.627c-.286 0-.507.065-.637.221-.13.143-.195.377-.195.702v2.741h2.898v.871H3.795V15h-1.04V7.15H.065v-.871h2.69V3.512c0-.572.143-1.001.429-1.313.299-.325.741-.481 1.313-.481zM8.773.145a.85.85 0 0 1 .702.351c.169.234.26.533.26.923 0 .572-.169 1.079-.507 1.508-.338.416-.793.702-1.339.858v-.65a1.71 1.71 0 0 0 .806-.559c.208-.273.299-.559.299-.871a.744.744 0 0 1-.286.039.708.708 0 0 1-.546-.234.756.756 0 0 1-.234-.559c0-.247.065-.442.221-.585.156-.156.364-.221.624-.221zM15 6h-1.14L8 15h1.14z\"/><path d=\"M8 6h1.14L15 15h-1.14z\"/></g></svg>";

  var simple_matrix = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M15 1h-1.999V0H16v16h-3v-1h2V1zm0 14V1h-1.999V0H16v16h-3v-1h2zM1 1h1.999V0H0v16h3v-1H1V1zm0 14V1h1.999V0H0v16h3v-1H1z\" fill-rule=\"nonzero\"/><path d=\"M5.004 1.7h.646v5.623h-.858V2.732c-.34.323-.772.559-1.292.708v-.85c.252-.063.512-.173.795-.33.284-.174.52-.355.71-.56zM10.904 9h.646v5.623h-.858v-4.591c-.34.323-.772.559-1.292.708v-.85c.252-.063.512-.173.795-.33.284-.174.52-.355.71-.56zM11 1.7c.651 0 1.155.271 1.512.822.325.511.488 1.194.488 2.054 0 .853-.163 1.543-.488 2.054-.357.543-.86.822-1.512.822-.651 0-1.155-.28-1.512-.822C9.163 6.12 9 5.436 9 4.576c0-.868.163-1.55.488-2.054.357-.55.86-.822 1.512-.822zm0 .713c-.457 0-.775.248-.961.752-.14.341-.202.814-.202 1.411 0 .59.062 1.062.202 1.41.186.497.504.753.961.753.45 0 .775-.256.961-.752.132-.349.202-.822.202-1.411 0-.597-.07-1.07-.202-1.41-.186-.505-.511-.753-.961-.753zM5 9c.651 0 1.155.271 1.512.822.325.511.488 1.194.488 2.054 0 .853-.163 1.543-.488 2.054-.357.543-.86.822-1.512.822-.651 0-1.155-.28-1.512-.822C3.163 13.42 3 12.736 3 11.876c0-.868.163-1.55.488-2.054C3.845 9.272 4.348 9 5 9zm0 .713c-.457 0-.775.248-.961.752-.14.341-.202.814-.202 1.411 0 .59.062 1.062.202 1.41.186.497.504.753.961.753.45 0 .775-.256.961-.752.132-.349.202-.822.202-1.411 0-.597-.07-1.07-.202-1.41-.186-.505-.511-.753-.961-.753z\"/></g></svg>";

  var simple_serial = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z\" fill-rule=\"nonzero\"/><path d=\"M7.92 4.86h.82V12H7.65V6.17c-.43.41-.98.71-1.64.9V5.99c.32-.08.65-.22 1.01-.42.36-.22.66-.45.9-.71z\"/></g></svg>";

  var simple_unit = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" fill-rule=\"nonzero\"/><path d=\"M1.767 11.425l-.82-.573 4.8-6.854a1 1 0 0 1 1.392-.245l4.915 3.441a1 1 0 0 1 .246 1.393l-4.947 7.064-.819-.573 4.947-7.065-4.915-3.441-4.8 6.853z\" fill-rule=\"nonzero\"/><path d=\"M4.6 6.914l3.523 2.467-.574.819-3.522-2.467zM2.573 9l3.277 2.294-.574.82L2 9.819z\"/></g></svg>";

  var simple_chemical = "<svg width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M5 1v3.005a1 1 0 0 1-.09.414l-3.714 8.167A1 1 0 0 0 2.106 14h9.788a1 1 0 0 0 .91-1.414L9.09 4.413A1 1 0 0 1 9 3.999V1H5zM4 0h6v3.999l3.715 8.173A2 2 0 0 1 11.895 15H2.106a2 2 0 0 1-1.821-2.828L4 4.005V0z\" fill-rule=\"nonzero\"/><rect x=\"3\" width=\"8\" height=\"1\" rx=\".5\"/><rect x=\"3\" y=\"6\" width=\"8\" height=\"1\" rx=\".5\"/><path d=\"M9.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\" fill-rule=\"nonzero\"/><circle cx=\"6\" cy=\"9\" r=\"1\"/></g></svg>";

  var simple_script = "<svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M4.747 5.002L8.141 0h1.354l-4.07 6 4.07 6H8.141L4.747 6.998 1.354 12H0l4.07-6L0 0h1.354l3.393 5.002zM13.432 4.4C15.135 4.4 16 5.345 16 7.234v4.768h-1.064V7.313c0-1.343-.612-2.008-1.81-2.008-.478 0-1.104.173-1.45.518-.372.373-.572.865-.612 1.49v4.69H10V4.585h1.064v1.011c.24-.386.546-.678.918-.878.373-.213.998-.319 1.45-.319z\"/></g></svg>";

  var simple_numerals = "<svg width=\"15\" height=\"14\" viewBox=\"0 0 15 14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.014 1.718h1.053v11H1.014v-11zm-1-1h3v1h-3v-1zm4 0h3v1h-3v-1zm7 0h3v1h-3v-1zm-11 12h3v1h-3v-1zm5-11h1.17l2.899 10.868h.039l2.899-10.868h1.17l-3.432 12H8.446l-3.432-12z\" fill=\"#999\" fill-rule=\"evenodd\"/></svg>";

  var simple_chinese = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" fill-rule=\"nonzero\"/><path d=\"M4 5h8v1H4z\"/><circle cx=\"5\" cy=\"8\" r=\"1\"/><circle cx=\"8\" cy=\"8\" r=\"1\"/><circle cx=\"11\" cy=\"8\" r=\"1\"/><circle cx=\"5\" cy=\"11\" r=\"1\"/><circle cx=\"8\" cy=\"11\" r=\"1\"/><circle cx=\"11\" cy=\"11\" r=\"1\"/></g></svg>";

  var simple_uppercase = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" fill-rule=\"nonzero\"/><path d=\"M7.372 3.432h1.14L11.884 12h-1.068l-.912-2.4H5.968L5.056 12H4l3.372-8.568zM6.28 8.772h3.312l-1.62-4.284h-.048L6.28 8.772z\"/></g></svg>";

  var simple_lowercase = "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z\" fill-rule=\"nonzero\"/><path d=\"M8.105 4.566c1.036 0 1.792.266 2.296.812.42.476.644 1.134.644 1.974V12h-1.05v-1.218c-.28.392-.658.714-1.106.966a3.675 3.675 0 0 1-1.806.448c-.728 0-1.302-.182-1.736-.546a1.825 1.825 0 0 1-.672-1.456c0-.826.322-1.442.994-1.862.588-.392 1.428-.602 2.52-.616l1.736-.028V7.31c0-1.218-.63-1.82-1.89-1.82-.532 0-.966.098-1.302.322-.378.224-.616.574-.728 1.036l-1.106-.084c.154-.756.532-1.33 1.12-1.694.532-.336 1.218-.504 2.086-.504zm1.82 3.962l-1.666.028c-1.624.028-2.436.56-2.436 1.61 0 .336.126.602.406.826.28.21.644.322 1.092.322.686 0 1.288-.224 1.82-.672.518-.434.784-.938.784-1.498v-.616z\"/></g></svg>";

  var simple_scrollarray = "<svg width=\"8\" height=\"14\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.639 1.647l5.434 4.512a1 1 0 010 1.539L1.64 12.21A1 1 0 010 11.44V2.416a1 1 0 011.639-.77z\" fill=\"#999999\" fill-rule=\"evenodd\"/></svg>";

  // blue主题：用于归一化、试听课
  var Theme = {
    simple: {
      keyboard: simple_keyboardbg,
      close: simple_close,
      closeClick: simple_closeClick,
      closeHover: simple_closeHover,
      number: simple_number,
      alphabet: simple_alphabet,
      common: simple_common,
      relation: simple_relation,
      geometric: simple_geometric,
      brackets: simple_brackets,
      interval: simple_interval,
      set: simple_set,
      exponent: simple_exponent,
      logarithm: simple_logarithm,
      radical: simple_radical,
      equation: simple_equation,

      /*-----待增加--start----*/
      calculus: simple_calculus,
      matrix: simple_matrix,

      /*-----待增加--end----*/
      serial: simple_serial,
      unit: simple_unit,
      chemical: simple_chemical,
      script: simple_script,
      numerals: simple_numerals,
      chinese: simple_chinese,
      lowercase: simple_lowercase,
      uppercase: simple_uppercase,
      ipadDelete: simple_ipadDelete,
      ipadClose: simple_ipadClose,
      ipadBackspace: simple_ipadDelete,
      ipadCapsLock: simple_ipadCapsLock,
      scrollarray: simple_scrollarray
    },
    blue: {
      keyboard: blue_keyboardbg,
      close: blue_close,
      closeClick: blue_closeClick,
      closeHover: blue_closeHover,
      number: blue_number,
      alphabet: blue_alphabet,
      common: blue_common,
      relation: blue_relation,
      geometric: blue_geometric,
      brackets: blue_brackets,
      interval: blue_interval,
      set: blue_set,
      exponent: blue_exponent,
      logarithm: blue_logarithm,
      radical: blue_radical,
      equation: blue_equation,

      /*-----待增加--start----*/
      calculus: blue_calculus,
      matrix: blue_matrix,

      /*-----待增加--end----*/
      serial: blue_serial,
      unit: blue_unit,
      chemical: blue_chemical,
      script: blue_script,
      numerals: blue_numerals,
      chinese: blue_chinese,
      lowercase: blue_lowercase,
      uppercase: blue_uppercase,
      ipadDelete: blue_ipadDelete,
      ipadClose: blue_ipadClose,
      ipadBackspace: blue_ipadDelete,
      ipadCapsLock: blue_ipadCapsLock,
      scrollarray: blue_scrollarray
    }
  };

  var frac = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='21.2842pt' version='1.1' viewBox='230.026 82.0876 6.199 14.1895' width='9.2985pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.74645 -5.19651C5.74645 -5.44359 5.72254 -5.47547 5.4675 -5.47547H0.72528C0.478207 -5.47547 0.446326 -5.45156 0.446326 -5.19651V-0.286924C0.446326 -0.0318804 0.470237 0 0.73325 0H5.45953C5.72254 0 5.74645 -0.0239103 5.74645 -0.278954V-5.19651ZM0.765131 -5.15666H5.42765V-0.318804H0.765131V-5.15666Z' id='g0-3'/>\n</defs>\n<g id='page1'>\n<use x='230.026' xlink:href='#g0-3' y='87.4473'/>\n<rect height='0.478187' width='6.199' x='230.026' y='88.9265'/>\n<use x='230.026' xlink:href='#g0-3' y='96.2771'/>\n</g>\n</svg>";

  var sqrt = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='16.3049pt' version='1.1' viewBox='224.338 80.1017 17.5758 10.87' width='26.3637pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.86545 -7.11273C7.86545 -7.45091 7.83273 -7.49454 7.48363 -7.49454H0.992727C0.654545 -7.49454 0.610909 -7.46182 0.610909 -7.11273V-0.392727C0.610909 -0.0436364 0.643636 0 1.00364 0H7.47273C7.83273 0 7.86545 -0.0327273 7.86545 -0.381818V-7.11273ZM1.04727 -7.05818H7.42909V-0.436364H1.04727V-7.05818Z' id='g0-3'/>\n<path d='M4.24364 9.32727L2.32364 5.08363C2.24727 4.90909 2.19273 4.90909 2.16 4.90909C2.14909 4.90909 2.09454 4.90909 1.97454 4.99636L0.938182 5.78182C0.796363 5.89091 0.796363 5.92363 0.796363 5.95636C0.796363 6.01091 0.829091 6.07636 0.905454 6.07636C0.970909 6.07636 1.15636 5.92363 1.27636 5.83636C1.34182 5.78182 1.50545 5.66182 1.62545 5.57454L3.77454 10.2982C3.85091 10.4727 3.90545 10.4727 4.00364 10.4727C4.16727 10.4727 4.2 10.4073 4.27636 10.2545L9.22909 0C9.30545 -0.152727 9.30545 -0.196364 9.30545 -0.218182C9.30545 -0.327273 9.21818 -0.436364 9.08727 -0.436364C9 -0.436364 8.92363 -0.381818 8.83636 -0.207273L4.24364 9.32727Z' id='g1-112'/>\n</defs>\n<g id='page1'>\n<use x='224.338' xlink:href='#g1-112' y='80.5381'/>\n<rect height='0.436352' width='8.48487' x='233.429' y='80.1017'/>\n<use x='233.429' xlink:href='#g0-3' y='90.2615'/>\n</g>\n</svg>";

  var root = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='17.8684pt' version='1.1' viewBox='224.503 81.0204 19.2612 11.9123' width='28.8917pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.86575 -4.28593C4.86575 -4.47721 4.84184 -4.51905 4.63263 -4.51905H0.699377C0.496139 -4.51905 0.466252 -4.48319 0.466252 -4.28593V-0.233126C0.466252 -0.0298879 0.502117 0 0.705355 0H4.62665C4.84184 0 4.86575 -0.0358655 4.86575 -0.239103V-4.28593ZM0.759153 -4.22615H4.57285V-0.292902H0.759153V-4.22615Z' id='g0-3'/>\n<path d='M4.65056 10.2217L2.54645 5.57111C2.46276 5.37983 2.40299 5.37983 2.36712 5.37983C2.35517 5.37983 2.29539 5.37983 2.16389 5.47547L1.02814 6.33624C0.872727 6.45579 0.872727 6.49166 0.872727 6.52752C0.872727 6.5873 0.908593 6.65903 0.992279 6.65903C1.06401 6.65903 1.26725 6.49166 1.39875 6.39601C1.47049 6.33624 1.64981 6.20473 1.78132 6.10909L4.13649 11.2857C4.22017 11.477 4.27995 11.477 4.38755 11.477C4.56687 11.477 4.60274 11.4052 4.68643 11.2379L10.1141 0C10.1978 -0.167372 10.1978 -0.215193 10.1978 -0.239103C10.1978 -0.358655 10.1021 -0.478207 9.95866 -0.478207C9.86301 -0.478207 9.77933 -0.418431 9.68369 -0.227148L4.65056 10.2217Z' id='g2-112'/>\n<path d='M8.61968 -7.79477C8.61968 -8.16538 8.58381 -8.2132 8.20125 -8.2132H1.08792C0.71731 -8.2132 0.669489 -8.17733 0.669489 -7.79477V-0.430386C0.669489 -0.0478207 0.705355 0 1.09988 0H8.18929C8.58381 0 8.61968 -0.0358655 8.61968 -0.418431V-7.79477ZM1.1477 -7.73499H8.14147V-0.478207H1.1477V-7.73499Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.808' xlink:href='#g0-3' y='85.6797'/>\n<use x='224.503' xlink:href='#g2-112' y='81.4986'/>\n<rect height='0.478187' width='9.29849' x='234.466' y='81.0204'/>\n<use x='234.466' xlink:href='#g1-3' y='92.1544'/>\n</g>\n</svg>";

  var sum = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='51.3773pt' version='1.1' viewBox='224.491 79.9205 17.2041 34.2515' width='25.8062pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.74645 -5.19651C5.74645 -5.44359 5.72254 -5.47547 5.4675 -5.47547H0.72528C0.478207 -5.47547 0.446326 -5.45156 0.446326 -5.19651V-0.286924C0.446326 -0.0318804 0.470237 0 0.73325 0H5.45953C5.72254 0 5.74645 -0.0239103 5.74645 -0.278954V-5.19651ZM0.765131 -5.15666H5.42765V-0.318804H0.765131V-5.15666Z' id='g0-3'/>\n<path d='M15.1352 16.7372L16.5818 12.9116H16.2829C15.8167 14.1549 14.5494 14.9679 13.1746 15.3265C12.9235 15.3863 11.7519 15.6971 9.45654 15.6971H2.24757L8.33275 8.5599C8.41644 8.46426 8.44035 8.42839 8.44035 8.36862C8.44035 8.34471 8.44035 8.30884 8.35666 8.18929L2.78555 0.573848H9.33699C10.939 0.573848 12.0269 0.74122 12.1345 0.765131C12.7801 0.860772 13.8202 1.06401 14.7646 1.66177C15.0635 1.85305 15.8765 2.39103 16.2829 3.3594H16.5818L15.1352 0H1.00423C0.729265 0 0.71731 0.0119552 0.681445 0.0836862C0.669489 0.119552 0.669489 0.3467 0.669489 0.478207L6.99377 9.13375L0.800996 16.3905C0.681445 16.534 0.681445 16.5938 0.681445 16.6057C0.681445 16.7372 0.789041 16.7372 1.00423 16.7372H15.1352Z' id='g1-88'/>\n</defs>\n<g id='page1'>\n<use x='230.026' xlink:href='#g0-3' y='85.2802'/>\n<use x='224.491' xlink:href='#g1-88' y='88.8667'/>\n<use x='230.026' xlink:href='#g0-3' y='114.172'/>\n</g>\n</svg>";

  var bracket = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.8881pt' version='1.1' viewBox='224.547 80.2272 17.1475 9.92542' width='25.7213pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M1.91283 -2.49066C1.91283 -2.77958 1.67372 -3.01868 1.38481 -3.01868S0.856787 -2.77958 0.856787 -2.49066S1.09589 -1.96264 1.38481 -1.96264S1.91283 -2.20174 1.91283 -2.49066Z' id='g0-1'/>\n<path d='M2.54047 2.49066V2.09215H1.5741V-7.07347H2.54047V-7.47198H1.17559V2.49066H2.54047Z' id='g1-91'/>\n<path d='M1.58406 -7.47198H0.219178V-7.07347H1.18555V2.09215H0.219178V2.49066H1.58406V-7.47198Z' id='g1-93'/>\n</defs>\n<g id='page1'>\n<use x='224.547' xlink:href='#g1-91' y='87.6712'/>\n<use x='227.314' xlink:href='#g0-1' y='87.6712'/>\n<use x='231.732' xlink:href='#g0-1' y='87.6712'/>\n<use x='236.149' xlink:href='#g0-1' y='87.6712'/>\n<use x='238.937' xlink:href='#g1-93' y='87.6712'/>\n</g>\n</svg>";

  var braces = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='16.3025pt' version='1.1' viewBox='221.308 82.1103 23.616 10.8683' width='35.4239pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g0-1'/>\n<path d='M3.08727 -6.73091C3.08727 -7.16727 3.37091 -7.86545 4.56 -7.94182C4.61454 -7.95273 4.65818 -7.99636 4.65818 -8.06182C4.65818 -8.18182 4.57091 -8.18182 4.45091 -8.18182C3.36 -8.18182 2.36727 -7.62545 2.35636 -6.81818V-4.33091C2.35636 -3.90545 2.35636 -3.55636 1.92 -3.19636C1.53818 -2.88 1.12364 -2.85818 0.883636 -2.84727C0.829091 -2.83636 0.785454 -2.79273 0.785454 -2.72727C0.785454 -2.61818 0.850909 -2.61818 0.96 -2.60727C1.68 -2.56364 2.20364 -2.17091 2.32364 -1.63636C2.35636 -1.51636 2.35636 -1.49455 2.35636 -1.10182V1.05818C2.35636 1.51636 2.35636 1.86545 2.88 2.28C3.30545 2.60727 4.02545 2.72727 4.45091 2.72727C4.57091 2.72727 4.65818 2.72727 4.65818 2.60727C4.65818 2.49818 4.59273 2.49818 4.48364 2.48727C3.79636 2.44364 3.26182 2.09454 3.12 1.53818C3.08727 1.44 3.08727 1.41818 3.08727 1.02545V-1.26545C3.08727 -1.76727 3 -1.95273 2.65091 -2.30182C2.42182 -2.53091 2.10545 -2.64 1.8 -2.72727C2.69454 -2.97818 3.08727 -3.48 3.08727 -4.11273V-6.73091Z' id='g0-102'/>\n<path d='M2.35636 1.27636C2.35636 1.71273 2.07273 2.41091 0.883636 2.48727C0.829091 2.49818 0.785454 2.54182 0.785454 2.60727C0.785454 2.72727 0.905454 2.72727 1.00364 2.72727C2.06182 2.72727 3.07636 2.19273 3.08727 1.36364V-1.12364C3.08727 -1.54909 3.08727 -1.89818 3.52364 -2.25818C3.90545 -2.57454 4.32 -2.59636 4.56 -2.60727C4.61454 -2.61818 4.65818 -2.66182 4.65818 -2.72727C4.65818 -2.83636 4.59273 -2.83636 4.48364 -2.84727C3.76364 -2.89091 3.24 -3.28364 3.12 -3.81818C3.08727 -3.93818 3.08727 -3.96 3.08727 -4.35273V-6.51273C3.08727 -6.97091 3.08727 -7.32 2.56364 -7.73454C2.12727 -8.07273 1.37455 -8.18182 1.00364 -8.18182C0.905454 -8.18182 0.785454 -8.18182 0.785454 -8.06182C0.785454 -7.95273 0.850909 -7.95273 0.96 -7.94182C1.64727 -7.89818 2.18182 -7.54909 2.32364 -6.99273C2.35636 -6.89454 2.35636 -6.87273 2.35636 -6.48V-4.18909C2.35636 -3.68727 2.44364 -3.50182 2.79273 -3.15273C3.02182 -2.92364 3.33818 -2.81454 3.64364 -2.72727C2.74909 -2.47636 2.35636 -1.97454 2.35636 -1.34182V1.27636Z' id='g0-103'/>\n</defs>\n<g id='page1'>\n<use x='221.308' xlink:href='#g0-102' y='90.2615'/>\n<use x='226.762' xlink:href='#g0-1' y='90.2615'/>\n<use x='231.599' xlink:href='#g0-1' y='90.2615'/>\n<use x='236.436' xlink:href='#g0-1' y='90.2615'/>\n<use x='239.489' xlink:href='#g0-103' y='90.2615'/>\n</g>\n</svg>";

  var round_brackets = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.8881pt' version='1.1' viewBox='223.44 80.2272 19.3573 9.92542' width='29.0359pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M1.91283 -2.49066C1.91283 -2.77958 1.67372 -3.01868 1.38481 -3.01868S0.856787 -2.77958 0.856787 -2.49066S1.09589 -1.96264 1.38481 -1.96264S1.91283 -2.20174 1.91283 -2.49066Z' id='g0-1'/>\n<path d='M3.29763 2.39103C3.29763 2.36115 3.29763 2.34122 3.12827 2.17186C1.88294 0.916563 1.56413 -0.966376 1.56413 -2.49066C1.56413 -4.22416 1.94271 -5.95766 3.16812 -7.20299C3.29763 -7.32254 3.29763 -7.34247 3.29763 -7.37235C3.29763 -7.44209 3.25778 -7.47198 3.19801 -7.47198C3.09838 -7.47198 2.20174 -6.79452 1.61395 -5.52927C1.10585 -4.43337 0.986301 -3.32752 0.986301 -2.49066C0.986301 -1.71357 1.09589 -0.508095 1.64384 0.617684C2.24159 1.84309 3.09838 2.49066 3.19801 2.49066C3.25778 2.49066 3.29763 2.46077 3.29763 2.39103Z' id='g1-40'/>\n<path d='M2.8792 -2.49066C2.8792 -3.26775 2.76961 -4.47323 2.22167 -5.599C1.62391 -6.82441 0.767123 -7.47198 0.667497 -7.47198C0.607721 -7.47198 0.56787 -7.43213 0.56787 -7.37235C0.56787 -7.34247 0.56787 -7.32254 0.757161 -7.14321C1.7335 -6.15691 2.30137 -4.57285 2.30137 -2.49066C2.30137 -0.787049 1.93275 0.966376 0.697385 2.22167C0.56787 2.34122 0.56787 2.36115 0.56787 2.39103C0.56787 2.45081 0.607721 2.49066 0.667497 2.49066C0.767123 2.49066 1.66376 1.8132 2.25156 0.547945C2.75965 -0.547945 2.8792 -1.6538 2.8792 -2.49066Z' id='g1-41'/>\n</defs>\n<g id='page1'>\n<use x='223.44' xlink:href='#g1-40' y='87.6712'/>\n<use x='227.314' xlink:href='#g0-1' y='87.6712'/>\n<use x='231.732' xlink:href='#g0-1' y='87.6712'/>\n<use x='236.149' xlink:href='#g0-1' y='87.6712'/>\n<use x='238.937' xlink:href='#g1-41' y='87.6712'/>\n</g>\n</svg>";

  var complement = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='13.4496pt' version='1.1' viewBox='230.399 81.2951 5.43419 8.96642' width='8.15128pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.84364 -2.37818C4.84364 -2.52 4.84364 -2.93454 4.40727 -2.93454S3.97091 -2.48727 3.97091 -2.32364V-1.40727C3.97091 -1.16727 3.97091 -0.992727 3.61091 -0.807273C3.31636 -0.665454 2.97818 -0.632727 2.72727 -0.632727C2.49818 -0.632727 2.19273 -0.665454 1.89818 -0.785454C1.48364 -0.970909 1.48364 -1.16727 1.48364 -1.40727V-7.59273C1.48364 -7.83273 1.48364 -8.00727 1.84364 -8.19272C2.13818 -8.33454 2.47636 -8.36727 2.72727 -8.36727C2.95636 -8.36727 3.26182 -8.33454 3.55636 -8.21454C3.97091 -8.02909 3.97091 -7.83273 3.97091 -7.59273V-6.67636C3.97091 -6.51273 3.97091 -6.06545 4.40727 -6.06545S4.84364 -6.48 4.84364 -6.62182V-7.66909C4.84364 -8.92363 3.53454 -9.24 2.72727 -9.24C1.90909 -9.24 0.610909 -8.91272 0.610909 -7.66909V-1.33091C0.610909 -0.0763636 1.92 0.24 2.72727 0.24C3.54545 0.24 4.84364 -0.0872727 4.84364 -1.33091V-2.37818Z' id='g0-123'/>\n</defs>\n<g id='page1'>\n<use x='230.399' xlink:href='#g0-123' y='90.2615'/>\n</g>\n</svg>";

  var complementu = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='15.9826pt' version='1.1' viewBox='226.86 81.2951 11.9875 10.6551' width='17.9813pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.84364 -2.37818C4.84364 -2.52 4.84364 -2.93454 4.40727 -2.93454S3.97091 -2.48727 3.97091 -2.32364V-1.40727C3.97091 -1.16727 3.97091 -0.992727 3.61091 -0.807273C3.31636 -0.665454 2.97818 -0.632727 2.72727 -0.632727C2.49818 -0.632727 2.19273 -0.665454 1.89818 -0.785454C1.48364 -0.970909 1.48364 -1.16727 1.48364 -1.40727V-7.59273C1.48364 -7.83273 1.48364 -8.00727 1.84364 -8.19272C2.13818 -8.33454 2.47636 -8.36727 2.72727 -8.36727C2.95636 -8.36727 3.26182 -8.33454 3.55636 -8.21454C3.97091 -8.02909 3.97091 -7.83273 3.97091 -7.59273V-6.67636C3.97091 -6.51273 3.97091 -6.06545 4.40727 -6.06545S4.84364 -6.48 4.84364 -6.62182V-7.66909C4.84364 -8.92363 3.53454 -9.24 2.72727 -9.24C1.90909 -9.24 0.610909 -8.91272 0.610909 -7.66909V-1.33091C0.610909 -0.0763636 1.92 0.24 2.72727 0.24C3.54545 0.24 4.84364 -0.0872727 4.84364 -1.33091V-2.37818Z' id='g0-123'/>\n<path d='M5.31606 -4.57484C5.41171 -4.96538 5.59502 -5.15666 6.1609 -5.18057C6.2406 -5.18057 6.30436 -5.22839 6.30436 -5.332C6.30436 -5.37983 6.26451 -5.44359 6.18481 -5.44359C6.14496 -5.44359 5.96961 -5.41968 5.39577 -5.41968C4.75816 -5.41968 4.65455 -5.44359 4.58281 -5.44359C4.45529 -5.44359 4.43138 -5.35592 4.43138 -5.29215C4.43138 -5.18854 4.53499 -5.18057 4.60672 -5.18057C5.0929 -5.16463 5.0929 -4.94944 5.0929 -4.83786C5.0929 -4.79004 5.08493 -4.75019 5.07696 -4.70237C5.06102 -4.64658 4.3995 -1.97659 4.36762 -1.87298C4.0807 -0.72528 3.07646 -0.0956413 2.28742 -0.0956413C1.73748 -0.0956413 1.24334 -0.422416 1.24334 -1.15567C1.24334 -1.29116 1.26725 -1.50635 1.29913 -1.63387L2.09614 -4.82192C2.16787 -5.10884 2.18381 -5.18057 2.76563 -5.18057C2.92503 -5.18057 3.02067 -5.18057 3.02067 -5.332C3.02067 -5.33998 3.0127 -5.44359 2.88518 -5.44359C2.73375 -5.44359 2.54247 -5.42765 2.39103 -5.41968H1.88892C1.12379 -5.41968 0.916563 -5.44359 0.860772 -5.44359C0.828892 -5.44359 0.70137 -5.44359 0.70137 -5.29215C0.70137 -5.18057 0.804981 -5.18057 0.932503 -5.18057C1.19552 -5.18057 1.42665 -5.18057 1.42665 -5.05305C1.42665 -5.00523 1.35492 -4.71831 1.3071 -4.5589L1.13176 -3.85753L0.71731 -2.16787C0.605729 -1.72951 0.573848 -1.60996 0.573848 -1.39477C0.573848 -0.462267 1.3071 0.167372 2.25554 0.167372C3.33948 0.167372 4.35965 -0.749191 4.61469 -1.77733L5.31606 -4.57484Z' id='g1-85'/>\n</defs>\n<g id='page1'>\n<use x='226.86' xlink:href='#g0-123' y='90.2615'/>\n<use x='232.295' xlink:href='#g1-85' y='91.9502'/>\n</g>\n</svg>";

  var square = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.4321pt' version='1.1' viewBox='226.517 80.6401 12.6715 9.62139' width='19.0073pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.86545 -7.11273C7.86545 -7.45091 7.83273 -7.49454 7.48363 -7.49454H0.992727C0.654545 -7.49454 0.610909 -7.46182 0.610909 -7.11273V-0.392727C0.610909 -0.0436364 0.643636 0 1.00364 0H7.47273C7.83273 0 7.86545 -0.0327273 7.86545 -0.381818V-7.11273ZM1.04727 -7.05818H7.42909V-0.436364H1.04727V-7.05818Z' id='g0-3'/>\n<path d='M2.24757 -1.6259C2.37509 -1.74545 2.70984 -2.00847 2.83736 -2.12005C3.33151 -2.57435 3.80174 -3.0127 3.80174 -3.73798C3.80174 -4.68643 3.00473 -5.30012 2.00847 -5.30012C1.05205 -5.30012 0.422416 -4.57484 0.422416 -3.8655C0.422416 -3.47497 0.73325 -3.41918 0.844832 -3.41918C1.0122 -3.41918 1.25928 -3.53873 1.25928 -3.84159C1.25928 -4.25604 0.860772 -4.25604 0.765131 -4.25604C0.996264 -4.83786 1.53026 -5.03711 1.9208 -5.03711C2.66202 -5.03711 3.04458 -4.40747 3.04458 -3.73798C3.04458 -2.90909 2.46276 -2.30336 1.52229 -1.33898L0.518057 -0.302864C0.422416 -0.215193 0.422416 -0.199253 0.422416 0H3.57061L3.80174 -1.42665H3.55467C3.53076 -1.26725 3.467 -0.868742 3.37136 -0.71731C3.32354 -0.653549 2.71781 -0.653549 2.59029 -0.653549H1.17161L2.24757 -1.6259Z' id='g1-50'/>\n</defs>\n<g id='page1'>\n<use x='226.517' xlink:href='#g0-3' y='90.2615'/>\n<use x='234.97' xlink:href='#g1-50' y='85.7573'/>\n</g>\n</svg>";

  var modulus = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='16.3025pt' version='1.1' viewBox='223.732 82.1103 18.7765 10.8683' width='28.1648pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g0-1'/>\n<path d='M1.73454 -7.78909C1.73454 -7.98545 1.73454 -8.18182 1.51636 -8.18182S1.29818 -7.98545 1.29818 -7.78909V2.33454C1.29818 2.53091 1.29818 2.72727 1.51636 2.72727S1.73454 2.53091 1.73454 2.33454V-7.78909Z' id='g0-106'/>\n</defs>\n<g id='page1'>\n<use x='223.732' xlink:href='#g0-106' y='90.2615'/>\n<use x='226.762' xlink:href='#g0-1' y='90.2615'/>\n<use x='231.599' xlink:href='#g0-1' y='90.2615'/>\n<use x='236.436' xlink:href='#g0-1' y='90.2615'/>\n<use x='239.489' xlink:href='#g0-106' y='90.2615'/>\n</g>\n</svg>";

  var lefttsrightm = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"23px\" height=\"21px\" viewBox=\"0 0 23 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->\n    <title>左开右闭 copy</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"符号下所有\" transform=\"translate(-109.000000, -2135.000000)\" fill=\"#283A5A\">\n            <g id=\"符号-常用-copy-6\" transform=\"translate(75.000000, 1991.000000)\">\n                <g id=\"分组\" transform=\"translate(28.000000, 76.000000)\">\n                    <g id=\"键盘-格子-copy-55\" transform=\"translate(0.000000, 60.000000)\">\n                        <g id=\"左开右闭-copy\" transform=\"translate(6.000000, 8.000000)\">\n                            <path d=\"M3.15482882,1.98063788e-13 L4.65712826,1.98063788e-13 C3.79867144,1.41645376 3.11190598,2.89729177 2.61829331,4.44251405 C1.97445069,6.33111906 1.6739908,8.17680123 1.6739908,10.0224834 C1.6739908,11.8467041 1.97445069,13.7138477 2.61829331,15.6024527 C3.11190598,17.1262136 3.79867144,18.6070516 4.65712826,20.0449668 L3.15482882,20.0449668 C2.21052632,18.6499745 1.48083802,17.1691364 0.944302504,15.6239142 C0.300459888,13.778232 2.15161222e-13,11.9110884 2.15161222e-13,10.0439448 C2.15161222e-13,8.13387839 0.300459888,6.2667348 0.944302504,4.42105263 C1.48083802,2.85436893 2.21052632,1.37353091 3.15482882,1.98063788e-13 Z\" id=\"路径\"></path>\n                            <path d=\"M12.8075144,16.8874897 L11.5640933,18.8206209 L11.1075247,19.5394737 C11.0039057,19.6819497 10.9310498,19.7904242 10.8889546,19.8649003 C10.8468594,19.9393764 10.8080029,19.984709 10.7723838,20.0008995 C10.7367648,20.0170899 10.6671469,20.025185 10.563528,20.025185 L10.2041016,20.025185 C10.1069588,20.025185 10.0551501,19.9895666 10.0486739,19.9183285 C10.0421977,19.8470905 10.0551499,19.7629014 10.0875308,19.6657586 L10.2041016,19.1411904 L10.7869552,16.683491 C10.8387647,16.4503483 10.8776212,16.2981603 10.9035259,16.2269223 C10.9294306,16.1556843 10.9682872,16.1006375 11.0200966,16.0617804 L11.593236,16.0714947 L12.4092311,16.0326377 C12.5322786,16.0326377 12.6666574,16.0342568 12.8123715,16.0374949 C12.9580856,16.040733 13.0552269,16.0666373 13.1037983,16.1152087 C13.1523697,16.1637801 13.173417,16.236636 13.1669408,16.3337788 L12.8075144,16.8874897 Z\" id=\"，\" fill-rule=\"nonzero\"></path>\n                            <path d=\"M28.2874864,11.2348548 L28.2874864,7.94935574 C28.2874864,7.55694289 28.6055998,7.23882943 28.9980127,7.23882943 C29.3904255,7.23882943 29.708539,7.55694289 29.708539,7.94935574 L29.708539,12.6559074 L9.81380215,12.6559074 L9.81380215,7.94935574 C9.81380215,7.55694289 10.1319156,7.23882943 10.5243285,7.23882943 C10.9167413,7.23882943 11.2348548,7.55694289 11.2348548,7.94935574 L11.2348548,11.2348548 L28.2874864,11.2348548 Z\" id=\"路径-6\" fill-rule=\"nonzero\" transform=\"translate(19.761171, 9.947368) scale(-1, 1) rotate(90.000000) translate(-19.761171, -9.947368) \"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

  var lefttmrights = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"24px\" height=\"20px\" viewBox=\"0 0 24 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->\n    <title>左闭右开 copy</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"符号下所有\" transform=\"translate(-158.000000, -2136.000000)\" fill=\"#283A5A\">\n            <g id=\"符号-常用-copy-6\" transform=\"translate(75.000000, 1991.000000)\">\n                <g id=\"分组\" transform=\"translate(28.000000, 76.000000)\">\n                    <g id=\"键盘-格子-copy-54\" transform=\"translate(48.000000, 60.000000)\">\n                        <g id=\"左闭右开-copy\" transform=\"translate(7.000000, 9.000000)\">\n                            <path d=\"M22.3257258,0 L23.8182063,0 C22.9653603,1.40719589 22.2830835,2.87835523 21.7926971,4.41347801 C21.1530626,6.2897392 20.8545665,8.12335808 20.8545665,9.95697697 C20.8545665,11.7692747 21.1530626,13.6242147 21.7926971,15.5004759 C22.2830835,17.0142776 22.9653603,18.4854369 23.8182063,19.9139539 L22.3257258,19.9139539 C21.3875952,18.5280792 20.6626762,17.0569199 20.1296474,15.5217971 C19.4900129,13.6881782 19.1915168,11.8332381 19.1915168,9.97829812 C19.1915168,8.08071578 19.4900129,6.22577575 20.1296474,4.39215686 C20.6626762,2.83571293 21.3875952,1.36455359 22.3257258,0 Z\" id=\"路径\" transform=\"translate(21.504862, 9.956977) scale(-1, 1) translate(-21.504862, -9.956977) \"></path>\n                            <path d=\"M13.5623808,16.777114 L12.3270867,18.6976103 L11.8735021,19.4117647 C11.7705604,19.5533095 11.6981806,19.661075 11.6563606,19.7350643 C11.6145405,19.8090537 11.5759379,19.85409 11.5405517,19.8701746 C11.5051655,19.8862593 11.4360026,19.8943015 11.3330609,19.8943015 L10.9759837,19.8943015 C10.8794759,19.8943015 10.8280058,19.8589158 10.821572,19.7881434 C10.8151381,19.717371 10.8280056,19.6337321 10.8601749,19.5372243 L10.9759837,19.0160846 L11.5550278,16.5744485 C11.6064987,16.3428297 11.6451012,16.1916364 11.6708367,16.120864 C11.6965721,16.0500916 11.7351746,15.9954046 11.7866455,15.9568015 L12.3560389,15.9664522 L13.1667006,15.9278493 C13.2889439,15.9278493 13.4224444,15.9294577 13.5672062,15.9326746 C13.7119679,15.9358916 13.8084743,15.9616266 13.8567282,16.0098805 C13.9049821,16.0581344 13.9258918,16.1305142 13.919458,16.2270221 L13.5623808,16.777114 Z\" id=\"，\" fill-rule=\"nonzero\"></path>\n                            <path d=\"M12,11.1614244 L12,7.89739917 C12,7.50755111 12.3160343,7.19151682 12.7058824,7.19151682 C13.0957304,7.19151682 13.4117647,7.50755111 13.4117647,7.89739917 L13.4117647,12.5731891 L-6.35294118,12.5731891 L-6.35294118,7.89739917 C-6.35294118,7.50755111 -6.03690688,7.19151682 -5.64705882,7.19151682 C-5.25721076,7.19151682 -4.94117647,7.50755111 -4.94117647,7.89739917 L-4.94117647,11.1614244 L12,11.1614244 Z\" id=\"路径-6\" fill-rule=\"nonzero\" transform=\"translate(3.529412, 9.882353) rotate(90.000000) translate(-3.529412, -9.882353) \"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

  var leftrightm = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"24px\" height=\"20px\" viewBox=\"0 0 24 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->\n    <title>闭区间 copy</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"符号下所有\" transform=\"translate(-205.000000, -2136.000000)\" fill=\"#283A5A\" fill-rule=\"nonzero\">\n            <g id=\"符号-常用-copy-6\" transform=\"translate(75.000000, 1991.000000)\">\n                <g id=\"分组\" transform=\"translate(28.000000, 76.000000)\">\n                    <g id=\"键盘-格子-copy-53\" transform=\"translate(96.000000, 60.000000)\">\n                        <g id=\"闭区间-copy\" transform=\"translate(6.000000, 9.000000)\">\n                            <path d=\"M13.5094027,16.7115784 L12.278934,18.6245728 L11.8271212,19.3359375 C11.7245817,19.4769294 11.6524846,19.5842739 11.6108279,19.6579742 C11.5691712,19.7316746 11.5307194,19.776535 11.4954715,19.7925568 C11.4602235,19.8085786 11.3913307,19.8165894 11.2887912,19.8165894 L10.9331088,19.8165894 C10.8369779,19.8165894 10.7857089,19.7813419 10.7793002,19.7108459 C10.7728915,19.64035 10.7857087,19.5570378 10.8177523,19.460907 L10.9331088,18.941803 L11.509891,16.5097046 C11.5611608,16.2789905 11.5996126,16.1283878 11.6252475,16.0578918 C11.6508824,15.9873959 11.6893341,15.9329226 11.7406039,15.8944702 L12.3077731,15.9040833 L13.1152682,15.8656311 C13.237034,15.8656311 13.370013,15.8672333 13.5142093,15.8704376 C13.6584055,15.873642 13.7545349,15.8992765 13.8026004,15.9473419 C13.8506658,15.9954073 13.8714938,16.0675044 13.8650851,16.1636353 L13.5094027,16.7115784 Z\" id=\"，\"></path>\n                            <path d=\"M11.953125,11.117825 L11.953125,7.86654995 C11.953125,7.47822474 12.2679248,7.16342495 12.65625,7.16342495 C13.0445752,7.16342495 13.359375,7.47822474 13.359375,7.86654995 L13.359375,12.524075 L-6.328125,12.524075 L-6.328125,7.86654995 C-6.328125,7.47822474 -6.01332521,7.16342495 -5.625,7.16342495 C-5.23667479,7.16342495 -4.921875,7.47822474 -4.921875,7.86654995 L-4.921875,11.117825 L11.953125,11.117825 Z\" id=\"路径-6\" transform=\"translate(3.515625, 9.843750) rotate(90.000000) translate(-3.515625, -9.843750) \"></path>\n                            <path d=\"M28.828125,11.117825 L28.828125,7.86654995 C28.828125,7.47822474 29.1429248,7.16342495 29.53125,7.16342495 C29.9195752,7.16342495 30.234375,7.47822474 30.234375,7.86654995 L30.234375,12.524075 L10.546875,12.524075 L10.546875,7.86654995 C10.546875,7.47822474 10.8616748,7.16342495 11.25,7.16342495 C11.6383252,7.16342495 11.953125,7.47822474 11.953125,7.86654995 L11.953125,11.117825 L28.828125,11.117825 Z\" id=\"路径-6-copy-2\" transform=\"translate(20.390625, 9.843750) scale(-1, 1) rotate(90.000000) translate(-20.390625, -9.843750) \"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

  var leftrights = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"23px\" height=\"20px\" viewBox=\"0 0 23 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->\n    <title>开区间 copy</title>\n    <desc>Created with Sketch.</desc>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"符号下所有\" transform=\"translate(-253.000000, -2136.000000)\" fill=\"#283A5A\">\n            <g id=\"符号-常用-copy-6\" transform=\"translate(75.000000, 1991.000000)\">\n                <g id=\"分组\" transform=\"translate(28.000000, 76.000000)\">\n                    <g id=\"键盘-格子-copy-42\" transform=\"translate(144.000000, 60.000000)\">\n                        <g id=\"开区间-copy\" transform=\"translate(6.000000, 9.000000)\">\n                            <path d=\"M21.3881962,1.98063788e-13 L22.8738034,1.98063788e-13 C22.024885,1.40071538 21.3457503,2.86509964 20.8576222,4.39315278 C20.2209334,6.26077329 19.923812,8.08594788 19.923812,9.91112247 C19.923812,11.7150741 20.2209334,13.5614716 20.8576222,15.4290921 C21.3457503,16.9359223 22.024885,18.4003066 22.8738034,19.8222449 L21.3881962,19.8222449 C20.454386,18.4427525 19.7328053,16.9783683 19.2022313,15.4503151 C18.5655425,13.6251405 18.2684211,11.778743 18.2684211,9.93234543 C18.2684211,8.04350196 18.5655425,6.19710441 19.2022313,4.37192982 C19.7328053,2.82265372 20.454386,1.35826946 21.3881962,1.98063788e-13 Z\" id=\"路径\" transform=\"translate(20.571112, 9.911122) scale(-1, 1) translate(-20.571112, -9.911122) \"></path>\n                            <path d=\"M3.11977517,1.98063788e-13 L4.60538239,1.98063788e-13 C3.75646398,1.40071538 3.07732925,2.86509964 2.58920116,4.39315278 C1.95251235,6.26077329 1.6553909,8.08594788 1.6553909,9.91112247 C1.6553909,11.7150741 1.95251235,13.5614716 2.58920116,15.4290921 C3.07732925,16.9359223 3.75646398,18.4003066 4.60538239,19.8222449 L3.11977517,19.8222449 C2.18596491,18.4427525 1.46438426,16.9783683 0.933810254,15.4503151 C0.297121444,13.6251405 2.15161222e-13,11.778743 2.15161222e-13,9.93234543 C2.15161222e-13,8.04350196 0.297121444,6.19710441 0.933810254,4.37192982 C1.46438426,2.82265372 2.18596491,1.35826946 3.11977517,1.98063788e-13 Z\" id=\"路径-copy-7\"></path>\n                            <path d=\"M12.6652087,16.6998509 L11.4356034,18.6115029 L10.9841077,19.3223684 C10.8816401,19.4632614 10.8095936,19.5705306 10.7679662,19.6441792 C10.7263387,19.7178278 10.6879139,19.7626567 10.6526907,19.7786672 C10.6174674,19.7946778 10.548623,19.802683 10.4461554,19.802683 L10.0907227,19.802683 C9.99465926,19.802683 9.94342622,19.7674603 9.937022,19.6970138 C9.93061777,19.6265673 9.94342603,19.5433136 9.97544716,19.4472502 L10.0907227,18.9285105 L10.6671001,16.4981188 C10.7183339,16.2675667 10.7567587,16.1170696 10.7823756,16.0466231 C10.8079925,15.9761767 10.8464173,15.9217416 10.8976511,15.8833162 L11.4644223,15.8929225 L12.2713507,15.8544973 C12.393031,15.8544973 12.5259167,15.8560984 12.6700118,15.8593005 C12.8141069,15.8625026 12.9101689,15.8881191 12.9582006,15.9361508 C13.0062323,15.9841825 13.0270457,16.056229 13.0206414,16.1522924 L12.6652087,16.6998509 Z\" id=\"，\" fill-rule=\"nonzero\"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";

  var exponentn = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.796pt' version='1.1' viewBox='225.535 80.3975 14.629 9.864' width='21.9435pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.74645 -5.19651C5.74645 -5.44359 5.72254 -5.47547 5.4675 -5.47547H0.72528C0.478207 -5.47547 0.446326 -5.45156 0.446326 -5.19651V-0.286924C0.446326 -0.0318804 0.470237 0 0.73325 0H5.45953C5.72254 0 5.74645 -0.0239103 5.74645 -0.278954V-5.19651ZM0.765131 -5.15666H5.42765V-0.318804H0.765131V-5.15666Z' id='g0-3'/>\n<use id='g1-3' transform='scale(1.36875)' xlink:href='#g0-3'/>\n</defs>\n<g id='page1'>\n<use x='225.535' xlink:href='#g1-3' y='90.2615'/>\n<use x='233.988' xlink:href='#g0-3' y='85.7573'/>\n</g>\n</svg>";

  var cube = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.4321pt' version='1.1' viewBox='226.517 80.6401 12.6715 9.62139' width='19.0073pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.86545 -7.11273C7.86545 -7.45091 7.83273 -7.49454 7.48363 -7.49454H0.992727C0.654545 -7.49454 0.610909 -7.46182 0.610909 -7.11273V-0.392727C0.610909 -0.0436364 0.643636 0 1.00364 0H7.47273C7.83273 0 7.86545 -0.0327273 7.86545 -0.381818V-7.11273ZM1.04727 -7.05818H7.42909V-0.436364H1.04727V-7.05818Z' id='g0-3'/>\n<path d='M2.01644 -2.66202C2.64608 -2.66202 3.04458 -2.19975 3.04458 -1.36289C3.04458 -0.366625 2.4787 -0.071731 2.05629 -0.071731C1.61793 -0.071731 1.02017 -0.231133 0.74122 -0.653549C1.02814 -0.653549 1.2274 -0.836862 1.2274 -1.09988C1.2274 -1.35492 1.04408 -1.53823 0.789041 -1.53823C0.573848 -1.53823 0.350685 -1.40274 0.350685 -1.08394C0.350685 -0.326775 1.16364 0.167372 2.07223 0.167372C3.13225 0.167372 3.87347 -0.565878 3.87347 -1.36289C3.87347 -2.02441 3.34745 -2.63014 2.5345 -2.80548C3.16413 -3.02864 3.63437 -3.57061 3.63437 -4.20822S2.91706 -5.30012 2.08817 -5.30012C1.23537 -5.30012 0.589788 -4.83786 0.589788 -4.23213C0.589788 -3.93724 0.789041 -3.80971 0.996264 -3.80971C1.24334 -3.80971 1.40274 -3.98506 1.40274 -4.21619C1.40274 -4.51108 1.1477 -4.62267 0.972354 -4.63064C1.3071 -5.06899 1.9208 -5.0929 2.06426 -5.0929C2.27148 -5.0929 2.87721 -5.02914 2.87721 -4.20822C2.87721 -3.65031 2.64608 -3.31557 2.5345 -3.18804C2.29539 -2.94097 2.11208 -2.92503 1.6259 -2.89315C1.47447 -2.88518 1.41071 -2.87721 1.41071 -2.7736C1.41071 -2.66202 1.48244 -2.66202 1.61793 -2.66202H2.01644Z' id='g1-51'/>\n</defs>\n<g id='page1'>\n<use x='226.517' xlink:href='#g0-3' y='90.2615'/>\n<use x='234.97' xlink:href='#g1-51' y='85.7573'/>\n</g>\n</svg>";

  var cube_root = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='16.3049pt' version='1.1' viewBox='224.649 80.1017 17.5758 10.87' width='26.3637pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.86545 -7.11273C7.86545 -7.45091 7.83273 -7.49454 7.48363 -7.49454H0.992727C0.654545 -7.49454 0.610909 -7.46182 0.610909 -7.11273V-0.392727C0.610909 -0.0436364 0.643636 0 1.00364 0H7.47273C7.83273 0 7.86545 -0.0327273 7.86545 -0.381818V-7.11273ZM1.04727 -7.05818H7.42909V-0.436364H1.04727V-7.05818Z' id='g0-3'/>\n<path d='M1.75741 -1.98456C2.2655 -1.98456 2.60623 -1.64384 2.60623 -1.03412C2.60623 -0.376588 2.21171 -0.0896638 1.77534 -0.0896638C1.61395 -0.0896638 0.998257 -0.125529 0.729265 -0.472229C0.962391 -0.496139 1.05803 -0.651557 1.05803 -0.812951C1.05803 -1.01619 0.91457 -1.15367 0.71731 -1.15367C0.555915 -1.15367 0.376588 -1.05205 0.376588 -0.800996C0.376588 -0.209215 1.03412 0.125529 1.79328 0.125529C2.67796 0.125529 3.26974 -0.442341 3.26974 -1.03412C3.26974 -1.47049 2.93499 -1.93076 2.22366 -2.11009C2.69589 -2.2655 3.07846 -2.64807 3.07846 -3.13823C3.07846 -3.61644 2.51656 -3.97509 1.79925 -3.97509C1.09988 -3.97509 0.56787 -3.6523 0.56787 -3.16214C0.56787 -2.90511 0.765131 -2.83337 0.884682 -2.83337C1.0401 -2.83337 1.20149 -2.94097 1.20149 -3.15019C1.20149 -3.33549 1.06999 -3.44309 0.908593 -3.467C1.18954 -3.77783 1.7335 -3.77783 1.7873 -3.77783C2.09215 -3.77783 2.47472 -3.63437 2.47472 -3.13823C2.47472 -2.80946 2.28941 -2.23562 1.69166 -2.19975C1.58406 -2.19377 1.42267 -2.18182 1.36887 -2.18182C1.30909 -2.17584 1.24334 -2.16986 1.24334 -2.0802C1.24334 -1.98456 1.30909 -1.98456 1.41071 -1.98456H1.75741Z' id='g2-51'/>\n<path d='M4.24364 9.32727L2.32364 5.08363C2.24727 4.90909 2.19273 4.90909 2.16 4.90909C2.14909 4.90909 2.09454 4.90909 1.97454 4.99636L0.938182 5.78182C0.796363 5.89091 0.796363 5.92363 0.796363 5.95636C0.796363 6.01091 0.829091 6.07636 0.905454 6.07636C0.970909 6.07636 1.15636 5.92363 1.27636 5.83636C1.34182 5.78182 1.50545 5.66182 1.62545 5.57454L3.77454 10.2982C3.85091 10.4727 3.90545 10.4727 4.00364 10.4727C4.16727 10.4727 4.2 10.4073 4.27636 10.2545L9.22909 0C9.30545 -0.152727 9.30545 -0.196364 9.30545 -0.218182C9.30545 -0.327273 9.21818 -0.436364 9.08727 -0.436364C9 -0.436364 8.92363 -0.381818 8.83636 -0.207273L4.24364 9.32727Z' id='g1-112'/>\n</defs>\n<g id='page1'>\n<use x='227.057' xlink:href='#g2-51' y='84.3533'/>\n<use x='224.649' xlink:href='#g1-112' y='80.5381'/>\n<rect height='0.436352' width='8.48487' x='233.74' y='80.1017'/>\n<use x='233.74' xlink:href='#g0-3' y='90.2615'/>\n</g>\n</svg>";

  var centigrade = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='12.1947pt' version='1.1' viewBox='226.471 82.1317 13.2775 8.12983' width='19.9163pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M3.75392 -1.99253C3.75392 -2.90909 3.02067 -3.64234 2.11208 -3.64234S0.470237 -2.90909 0.470237 -1.99253S1.20349 -0.342715 2.11208 -0.342715S3.75392 -1.07597 3.75392 -1.99253ZM2.11208 -0.70934C1.40274 -0.70934 0.836862 -1.27522 0.836862 -1.99253S1.40274 -3.27572 2.11208 -3.27572S3.3873 -2.70984 3.3873 -1.99253S2.82142 -0.70934 2.11208 -0.70934Z' id='g0-14'/>\n<path d='M8.29091 -7.58182C8.29091 -7.61454 8.26909 -7.69091 8.17091 -7.69091C8.13818 -7.69091 8.12727 -7.68 8.00727 -7.56L7.24363 -6.72C7.14545 -6.87273 6.64363 -7.69091 5.43273 -7.69091C3 -7.69091 0.545454 -5.28 0.545454 -2.74909C0.545454 -0.949091 1.83273 0.24 3.50182 0.24C4.45091 0.24 5.28 -0.196364 5.85818 -0.698182C6.87273 -1.59273 7.05818 -2.58545 7.05818 -2.61818C7.05818 -2.72727 6.94909 -2.72727 6.92727 -2.72727C6.86182 -2.72727 6.80727 -2.70545 6.78545 -2.61818C6.68727 -2.30182 6.43636 -1.52727 5.68363 -0.894545C4.93091 -0.283636 4.24364 -0.0981818 3.67636 -0.0981818C2.69454 -0.0981818 1.53818 -0.665454 1.53818 -2.36727C1.53818 -2.98909 1.76727 -4.75636 2.85818 -6.03273C3.52364 -6.80727 4.54909 -7.35273 5.52 -7.35273C6.63273 -7.35273 7.27636 -6.51273 7.27636 -5.24727C7.27636 -4.81091 7.24363 -4.8 7.24363 -4.69091S7.36363 -4.58182 7.40727 -4.58182C7.54909 -4.58182 7.54909 -4.60364 7.60363 -4.8L8.29091 -7.58182Z' id='g1-67'/>\n</defs>\n<g id='page1'>\n<use x='226.471' xlink:href='#g0-14' y='85.7573'/>\n<use x='231.203' xlink:href='#g1-67' y='90.2615'/>\n</g>\n</svg>";

  var fahrenheit = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='11.0192pt' version='1.1' viewBox='226.941 80.3251 12.3412 7.34616' width='18.5118pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M3.53574 -1.74346C3.53574 -2.5873 2.85928 -3.24284 2.03636 -3.24284C1.1995 -3.24284 0.536986 -2.56638 0.536986 -1.75044C0.536986 -0.9066 1.21345 -0.251059 2.03636 -0.251059C2.87323 -0.251059 3.53574 -0.927522 3.53574 -1.74346ZM2.03636 -0.592777C1.38082 -0.592777 0.878705 -1.12279 0.878705 -1.74346C0.878705 -2.39203 1.39477 -2.90112 2.03636 -2.90112C2.69191 -2.90112 3.19402 -2.37111 3.19402 -1.75044C3.19402 -1.10187 2.67796 -0.592777 2.03636 -0.592777Z' id='g0-14'/>\n<path d='M3.01868 -3.23786H3.98506C4.73225 -3.23786 4.81196 -3.07846 4.81196 -2.78954C4.81196 -2.7198 4.81196 -2.60025 4.74222 -2.30137C4.72229 -2.25156 4.71233 -2.21171 4.71233 -2.19178C4.71233 -2.11208 4.7721 -2.07223 4.83188 -2.07223C4.93151 -2.07223 4.93151 -2.10212 4.98132 -2.28144L5.52927 -4.44334C5.55915 -4.55293 5.55915 -4.57285 5.55915 -4.60274C5.55915 -4.62267 5.53923 -4.71233 5.4396 -4.71233S5.33001 -4.66252 5.29016 -4.50311C5.08095 -3.72603 4.85181 -3.5467 4.00498 -3.5467H3.09838L3.73599 -6.07721C3.82565 -6.4259 3.83562 -6.46575 4.27397 -6.46575H5.58904C6.81445 -6.46575 7.04359 -6.13699 7.04359 -5.36986C7.04359 -5.14072 7.04359 -5.10087 7.0137 -4.83188C6.99377 -4.70237 6.99377 -4.68244 6.99377 -4.65255C6.99377 -4.60274 7.02366 -4.533 7.11333 -4.533C7.22291 -4.533 7.23288 -4.59278 7.2528 -4.78207L7.45205 -6.5056C7.48194 -6.7746 7.43213 -6.7746 7.18306 -6.7746H2.30137C2.10212 -6.7746 2.00249 -6.7746 2.00249 -6.57534C2.00249 -6.46575 2.09215 -6.46575 2.28144 -6.46575C2.65006 -6.46575 2.92902 -6.46575 2.92902 -6.28643C2.92902 -6.24658 2.92902 -6.22665 2.8792 -6.04732L1.56413 -0.777086C1.46451 -0.388543 1.44458 -0.308842 0.657534 -0.308842C0.488169 -0.308842 0.37858 -0.308842 0.37858 -0.119552C0.37858 0 0.498132 0 0.52802 0C0.816936 0 1.55417 -0.0298879 1.84309 -0.0298879C2.17186 -0.0298879 2.99875 0 3.32752 0C3.41719 0 3.53674 0 3.53674 -0.18929C3.53674 -0.268991 3.47696 -0.288917 3.47696 -0.298879C3.44707 -0.308842 3.42715 -0.308842 3.19801 -0.308842C2.97883 -0.308842 2.92902 -0.308842 2.67995 -0.328767C2.39103 -0.358655 2.36115 -0.398506 2.36115 -0.52802C2.36115 -0.547945 2.36115 -0.607721 2.401 -0.757161L3.01868 -3.23786Z' id='g1-70'/>\n</defs>\n<g id='page1'>\n<use x='226.941' xlink:href='#g0-14' y='83.5577'/>\n<use x='231.521' xlink:href='#g1-70' y='87.6712'/>\n</g>\n</svg>";

  var r_subscript = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='12.6855pt' version='1.1' viewBox='225.889 80.9716 13.9232 8.45699' width='20.8848pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.889' xlink:href='#g1-3' y='87.6712'/>\n<use x='233.609' xlink:href='#g0-3' y='89.4286'/>\n</g>\n</svg>";

  var xrightarrow_chemical = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='26.4996pt' version='1.1' viewBox='226.838 76.8542 12.5391 17.6664' width='18.8086pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M6.56538 -2.29141C6.73474 -2.29141 6.91407 -2.29141 6.91407 -2.49066S6.73474 -2.68991 6.56538 -2.68991H1.17559C1.00623 -2.68991 0.826899 -2.68991 0.826899 -2.49066S1.00623 -2.29141 1.17559 -2.29141H6.56538Z' id='g1-0'/>\n<path d='M8.30884 -2.29141C7.7609 -1.87298 7.49191 -1.46451 7.4122 -1.33499C6.96389 -0.647572 6.88418 -0.0199253 6.88418 -0.00996264C6.88418 0.109589 7.00374 0.109589 7.08344 0.109589C7.2528 0.109589 7.26276 0.0896638 7.30262 -0.0896638C7.53176 -1.066 8.11955 -1.90286 9.24533 -2.36115C9.36488 -2.401 9.39477 -2.42092 9.39477 -2.49066S9.33499 -2.59029 9.31507 -2.60025C8.87671 -2.76961 7.67123 -3.26775 7.29265 -4.94147C7.26276 -5.06102 7.2528 -5.09091 7.08344 -5.09091C7.00374 -5.09091 6.88418 -5.09091 6.88418 -4.97136C6.88418 -4.95143 6.97385 -4.32379 7.39228 -3.65629C7.59153 -3.35741 7.88045 -3.00872 8.30884 -2.68991H0.9066C0.727273 -2.68991 0.547945 -2.68991 0.547945 -2.49066S0.727273 -2.29141 0.9066 -2.29141H8.30884Z' id='g1-33'/>\n</defs>\n<g id='page1'>\n<use x='229.332' xlink:href='#g0-3' y='82.0237'/>\n<use x='226.838' xlink:href='#g1-0' y='87.6712'/>\n<use x='229.451' xlink:href='#g1-33' y='87.6712'/>\n<use x='229.332' xlink:href='#g0-3' y='94.5205'/>\n</g>\n</svg>";

  var xrightleftharpoons_chemical = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='29.026pt' version='1.1' viewBox='228.144 77.728 9.92545 19.3506' width='14.8882pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M9.39477 -3.25778V-3.45704C8.83686 -3.72603 8.20922 -4.27397 7.89041 -5.1208H7.58157C7.66127 -4.87173 7.85056 -4.26401 8.53798 -3.65629H0.9066C0.727273 -3.65629 0.557908 -3.65629 0.557908 -3.45704S0.737235 -3.25778 0.9066 -3.25778H9.39477ZM9.04608 -1.32503C9.2254 -1.32503 9.39477 -1.32503 9.39477 -1.52428S9.21544 -1.72354 9.04608 -1.72354H0.557908V-1.52428C1.11582 -1.25529 1.74346 -0.707347 2.06227 0.139477H2.37111C2.29141 -0.109589 2.10212 -0.71731 1.41469 -1.32503H9.04608Z' id='g1-10'/>\n</defs>\n<g id='page1'>\n<use x='230.012' xlink:href='#g0-3' y='82.8975'/>\n<use x='228.144' xlink:href='#g1-10' y='90.0944'/>\n<use x='230.012' xlink:href='#g0-3' y='97.0786'/>\n</g>\n</svg>";

  var xlongequal_chemical = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='26.4996pt' version='1.1' viewBox='229.251 76.8542 7.7198 17.6664' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M6.84433 -3.25778C6.99377 -3.25778 7.18306 -3.25778 7.18306 -3.45704S6.99377 -3.65629 6.8543 -3.65629H0.886675C0.747198 -3.65629 0.557908 -3.65629 0.557908 -3.45704S0.747198 -3.25778 0.896638 -3.25778H6.84433ZM6.8543 -1.32503C6.99377 -1.32503 7.18306 -1.32503 7.18306 -1.52428S6.99377 -1.72354 6.84433 -1.72354H0.896638C0.747198 -1.72354 0.557908 -1.72354 0.557908 -1.52428S0.747198 -1.32503 0.886675 -1.32503H6.8543Z' id='g1-61'/>\n</defs>\n<g id='page1'>\n<use x='230.012' xlink:href='#g0-3' y='82.0237'/>\n<use x='229.251' xlink:href='#g1-61' y='87.6712'/>\n<use x='230.012' xlink:href='#g0-3' y='94.5205'/>\n</g>\n</svg>";

  var equation = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='29.3448pt' version='1.1' viewBox='217.073 77.7176 19.966 19.5632' width='29.949pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.04727 12.3927C4.04727 11.6945 4.04727 11.5418 3.93818 11.2364C3.6 10.2436 2.64 9.66545 1.92 9.38182C3.17454 8.84727 3.79636 8.11636 3.99273 7.35273C4.02545 7.22182 4.04727 7.02545 4.04727 6.97091V2.06182C4.04727 1.15636 4.76727 0.469091 5.79273 0.0327273C5.95636 -0.0436364 5.96727 -0.0545454 5.96727 -0.218182C5.96727 -0.425454 5.95636 -0.436364 5.74909 -0.436364C5.43273 -0.436364 4.61454 -0.0327273 4.17818 0.305454C3.80727 0.6 3.22909 1.21091 3.21818 1.95273C3.20727 2.82545 3.21818 3.70909 3.21818 4.58182V6.28363C3.21818 7.24363 3.21818 7.60363 2.65091 8.28C2.52 8.43272 2.20364 8.77091 1.45091 9.13091C1.30909 9.19636 1.29818 9.20727 1.29818 9.37091C1.29818 9.54545 1.30909 9.55636 1.52727 9.65454C2.68364 10.1891 3.21818 11.1164 3.21818 11.8036V16.3418C3.21818 16.8545 3.21818 17.5091 3.77454 18.0764C4.01454 18.3164 4.24364 18.5454 4.76727 18.8182C4.89818 18.8945 5.45454 19.1891 5.74909 19.1891C5.95636 19.1891 5.96727 19.1782 5.96727 18.9709C5.96727 18.8182 5.96727 18.7854 5.86909 18.7527C5.22545 18.48 4.25454 17.9673 4.06909 16.9527C4.04727 16.8327 4.04727 16.4618 4.04727 16.2109V12.3927Z' id='g0-110'/>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g1-1'/>\n</defs>\n<g id='page1'>\n<use x='217.073' xlink:href='#g0-110' y='78.1523'/>\n<use x='224.346' xlink:href='#g1-1' y='90.786'/>\n<use x='229.183' xlink:href='#g1-1' y='90.786'/>\n<use x='234.02' xlink:href='#g1-1' y='90.786'/>\n</g>\n</svg>";

  var ternary_equations = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='68.6729pt' version='1.1' viewBox='215.861 79.1878 22.3903 45.7819' width='33.5854pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.49818 4.94182C5.49818 4.04727 5.73818 1.96364 7.68 0.589091C7.82182 0.48 7.83273 0.469091 7.83273 0.272727C7.83273 0.0218182 7.82182 0.0109091 7.54909 0.0109091H7.37454C5.02909 1.27636 4.18909 3.33818 4.18909 4.94182V9.63272C4.18909 9.91636 4.2 9.92727 4.49454 9.92727H5.19273C5.48727 9.92727 5.49818 9.91636 5.49818 9.63272V4.94182Z' id='g0-56'/>\n<path d='M7.54909 9.80727C7.82182 9.80727 7.83273 9.79636 7.83273 9.54545C7.83273 9.34909 7.82182 9.33818 7.77818 9.30545C7.44 9.05454 6.65454 8.49818 6.14182 7.49454C5.71636 6.66545 5.49818 5.82545 5.49818 4.87636V0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V4.87636C4.18909 6.49091 5.02909 8.55272 7.37454 9.80727H7.54909Z' id='g0-58'/>\n<path d='M4.18909 19.4509C4.18909 19.7345 4.2 19.7454 4.49454 19.7454H5.19273C5.48727 19.7454 5.49818 19.7345 5.49818 19.4509V14.8473C5.49818 13.5273 4.94182 11.3018 2.49818 9.81818C4.96363 8.32363 5.49818 6.07636 5.49818 4.78909V0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V4.8C4.18909 5.71636 3.99273 7.98545 1.98545 9.51272C1.86545 9.61091 1.85454 9.62182 1.85454 9.81818S1.86545 10.0255 1.98545 10.1236C2.26909 10.3418 3.02182 10.92 3.54545 12.0218C3.97091 12.8945 4.18909 13.8655 4.18909 14.8364V19.4509Z' id='g0-60'/>\n<path d='M5.49818 0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V3.08727C4.18909 3.37091 4.2 3.38182 4.49454 3.38182H5.19273C5.48727 3.38182 5.49818 3.37091 5.49818 3.08727V0.185454Z' id='g0-62'/>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g1-1'/>\n</defs>\n<g id='page1'>\n<use x='215.861' xlink:href='#g0-56' y='79.1878'/>\n<use x='215.861' xlink:href='#g0-62' y='89.006'/>\n<use x='215.861' xlink:href='#g0-60' y='92.2788'/>\n<use x='215.861' xlink:href='#g0-62' y='111.915'/>\n<use x='215.861' xlink:href='#g0-58' y='115.188'/>\n<use x='225.558' xlink:href='#g1-1' y='89.0898'/>\n<use x='230.395' xlink:href='#g1-1' y='89.0898'/>\n<use x='235.233' xlink:href='#g1-1' y='89.0898'/>\n<use x='225.558' xlink:href='#g1-1' y='105.349'/>\n<use x='230.395' xlink:href='#g1-1' y='105.349'/>\n<use x='235.233' xlink:href='#g1-1' y='105.349'/>\n<use x='225.558' xlink:href='#g1-1' y='121.608'/>\n<use x='230.395' xlink:href='#g1-1' y='121.608'/>\n<use x='235.233' xlink:href='#g1-1' y='121.608'/>\n</g>\n</svg>";

  var binary_equations = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='48.908pt' version='1.1' viewBox='216.316 77.7102 21.4812 32.6053' width='32.2218pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.92 19.9309C4.92 18.7309 4.09091 16.8873 2.19273 15.9273C3.37091 15.2945 4.77818 14.0182 4.90909 11.9782L4.92 11.9127V4.35273C4.92 3.45818 4.92 3.26182 5.00727 2.84727C5.20363 1.97454 5.72727 0.894545 7.11273 0.0763636C7.2 0.0218182 7.21091 0.0109091 7.21091 -0.185454C7.21091 -0.425454 7.2 -0.436364 6.96 -0.436364C6.76363 -0.436364 6.74182 -0.436364 6.44727 -0.261818C4.00364 1.12364 3.86182 3.15273 3.86182 3.53454V11.2909C3.86182 12.0764 3.86182 12.96 3.29454 13.9636C2.79273 14.8582 2.20364 15.3055 1.73454 15.6218C1.58182 15.72 1.57091 15.7309 1.57091 15.9164C1.57091 16.1127 1.58182 16.1236 1.66909 16.1782C2.59636 16.7891 3.58909 17.76 3.82909 19.5382C3.86182 19.7782 3.86182 19.8 3.86182 19.9309V28.3091C3.86182 29.1927 4.40727 31.0254 6.51273 32.1382C6.76363 32.28 6.78545 32.28 6.96 32.28C7.2 32.28 7.21091 32.2691 7.21091 32.0291C7.21091 31.8327 7.2 31.8218 7.15636 31.8C6.68727 31.5054 5.25818 30.6436 4.96363 28.7454C4.92 28.4618 4.92 28.44 4.92 28.2982V19.9309Z' id='g0-40'/>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g1-1'/>\n</defs>\n<g id='page1'>\n<use x='216.316' xlink:href='#g0-40' y='78.1449'/>\n<use x='225.104' xlink:href='#g1-1' y='89.1947'/>\n<use x='229.941' xlink:href='#g1-1' y='89.1947'/>\n<use x='234.778' xlink:href='#g1-1' y='89.1947'/>\n<use x='225.104' xlink:href='#g1-1' y='105.454'/>\n<use x='229.941' xlink:href='#g1-1' y='105.454'/>\n<use x='234.778' xlink:href='#g1-1' y='105.454'/>\n</g>\n</svg>";

  var quaternion_equations = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='98.1276pt' version='1.1' viewBox='215.861 77.7086 22.3903 65.4184' width='33.5854pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.49818 4.94182C5.49818 4.04727 5.73818 1.96364 7.68 0.589091C7.82182 0.48 7.83273 0.469091 7.83273 0.272727C7.83273 0.0218182 7.82182 0.0109091 7.54909 0.0109091H7.37454C5.02909 1.27636 4.18909 3.33818 4.18909 4.94182V9.63272C4.18909 9.91636 4.2 9.92727 4.49454 9.92727H5.19273C5.48727 9.92727 5.49818 9.91636 5.49818 9.63272V4.94182Z' id='g0-56'/>\n<path d='M7.54909 9.80727C7.82182 9.80727 7.83273 9.79636 7.83273 9.54545C7.83273 9.34909 7.82182 9.33818 7.77818 9.30545C7.44 9.05454 6.65454 8.49818 6.14182 7.49454C5.71636 6.66545 5.49818 5.82545 5.49818 4.87636V0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V4.87636C4.18909 6.49091 5.02909 8.55272 7.37454 9.80727H7.54909Z' id='g0-58'/>\n<path d='M4.18909 19.4509C4.18909 19.7345 4.2 19.7454 4.49454 19.7454H5.19273C5.48727 19.7454 5.49818 19.7345 5.49818 19.4509V14.8473C5.49818 13.5273 4.94182 11.3018 2.49818 9.81818C4.96363 8.32363 5.49818 6.07636 5.49818 4.78909V0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V4.8C4.18909 5.71636 3.99273 7.98545 1.98545 9.51272C1.86545 9.61091 1.85454 9.62182 1.85454 9.81818S1.86545 10.0255 1.98545 10.1236C2.26909 10.3418 3.02182 10.92 3.54545 12.0218C3.97091 12.8945 4.18909 13.8655 4.18909 14.8364V19.4509Z' id='g0-60'/>\n<path d='M5.49818 0.185454C5.49818 -0.0981818 5.48727 -0.109091 5.19273 -0.109091H4.49454C4.2 -0.109091 4.18909 -0.0981818 4.18909 0.185454V3.08727C4.18909 3.37091 4.2 3.38182 4.49454 3.38182H5.19273C5.48727 3.38182 5.49818 3.37091 5.49818 3.08727V0.185454Z' id='g0-62'/>\n<path d='M2.09454 -2.72727C2.09454 -3.04364 1.83273 -3.30545 1.51636 -3.30545S0.938182 -3.04364 0.938182 -2.72727S1.2 -2.14909 1.51636 -2.14909S2.09454 -2.41091 2.09454 -2.72727Z' id='g1-1'/>\n</defs>\n<g id='page1'>\n<use x='215.861' xlink:href='#g0-56' y='77.7086'/>\n<use x='215.861' xlink:href='#g0-62' y='87.5269'/>\n<use x='215.861' xlink:href='#g0-62' y='90.7996'/>\n<use x='215.861' xlink:href='#g0-62' y='94.0724'/>\n<use x='215.861' xlink:href='#g0-62' y='97.3451'/>\n<use x='215.861' xlink:href='#g0-60' y='100.618'/>\n<use x='215.861' xlink:href='#g0-62' y='120.254'/>\n<use x='215.861' xlink:href='#g0-62' y='123.527'/>\n<use x='215.861' xlink:href='#g0-62' y='126.8'/>\n<use x='215.861' xlink:href='#g0-62' y='130.073'/>\n<use x='215.861' xlink:href='#g0-58' y='133.345'/>\n<use x='225.558' xlink:href='#g1-1' y='89.2994'/>\n<use x='230.395' xlink:href='#g1-1' y='89.2994'/>\n<use x='235.233' xlink:href='#g1-1' y='89.2994'/>\n<use x='225.558' xlink:href='#g1-1' y='105.558'/>\n<use x='230.395' xlink:href='#g1-1' y='105.558'/>\n<use x='235.233' xlink:href='#g1-1' y='105.558'/>\n<use x='225.558' xlink:href='#g1-1' y='121.817'/>\n<use x='230.395' xlink:href='#g1-1' y='121.817'/>\n<use x='235.233' xlink:href='#g1-1' y='121.817'/>\n<use x='225.558' xlink:href='#g1-1' y='138.076'/>\n<use x='230.395' xlink:href='#g1-1' y='138.076'/>\n<use x='235.233' xlink:href='#g1-1' y='138.076'/>\n</g>\n</svg>";

  var oversetfrown = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='14.9634pt' version='1.1' viewBox='226.95 84.1215 12.3045 9.97563' width='18.4567pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M9.40473 -1.42466C9.40473 -1.53425 7.95019 -3.79577 4.98132 -3.79577C1.99253 -3.79577 0.547945 -1.53425 0.547945 -1.42466C0.547945 -1.35492 0.607721 -1.29514 0.67746 -1.29514C0.697385 -1.29514 0.71731 -1.30511 0.737235 -1.32503C0.747198 -1.33499 0.757161 -1.34496 0.876712 -1.4944C1.80324 -2.76961 3.40722 -3.34745 4.97136 -3.34745C5.69863 -3.34745 6.60523 -3.2279 7.50187 -2.7995C8.48817 -2.3213 8.94645 -1.67372 9.15567 -1.37484C9.18555 -1.34496 9.21544 -1.29514 9.27522 -1.29514C9.34496 -1.29514 9.40473 -1.35492 9.40473 -1.42466Z' id='g0-95'/>\n<path d='M1.43661 -0.836862C1.19253 -0.460274 0.969365 -0.278954 0.557908 -0.251059C0.488169 -0.244085 0.397509 -0.244085 0.397509 -0.104608C0.397509 -0.0278954 0.460274 0 0.495143 0C0.676463 0 0.9066 -0.0278954 1.09489 -0.0278954C1.31806 -0.0278954 1.60399 0 1.8132 0C1.84807 0 1.95268 0 1.95268 -0.153425C1.95268 -0.244085 1.86202 -0.251059 1.83412 -0.251059C1.77833 -0.258032 1.52727 -0.27198 1.52727 -0.460274C1.52727 -0.54396 1.59701 -0.662516 1.63188 -0.72528L2.18979 -1.59004H4.18431L4.35168 -0.432379C4.32379 -0.36264 4.28194 -0.251059 3.87049 -0.251059C3.7868 -0.251059 3.68917 -0.251059 3.68917 -0.0976339C3.68917 -0.0697385 3.71009 0 3.80075 0C4.00299 0 4.49813 -0.0278954 4.70037 -0.0278954C4.8259 -0.0278954 4.9863 -0.0209215 5.11183 -0.0209215C5.23736 -0.0139477 5.38381 0 5.50934 0C5.6 0 5.64882 -0.0557908 5.64882 -0.146451C5.64882 -0.251059 5.56513 -0.251059 5.45355 -0.251059C5.04907 -0.251059 5.03512 -0.306849 5.0142 -0.474222L4.4005 -4.77709C4.37958 -4.92354 4.36563 -4.97235 4.23313 -4.97235S4.05878 -4.90959 3.99601 -4.81196L1.43661 -0.836862ZM2.35716 -1.8411L3.82167 -4.12154L4.14944 -1.8411H2.35716Z' id='g1-65'/>\n<path d='M1.32503 -0.54396C1.26227 -0.306849 1.24832 -0.251059 0.711333 -0.251059C0.592777 -0.251059 0.502117 -0.251059 0.502117 -0.104608C0.502117 0 0.585803 0 0.711333 0H3.41021C4.58182 0 5.48144 -0.801993 5.48144 -1.4924C5.48144 -1.98755 5.02814 -2.41295 4.28892 -2.48966C5.13275 -2.64309 5.83711 -3.1731 5.83711 -3.77285C5.83711 -4.30286 5.30012 -4.76314 4.39352 -4.76314H1.85504C1.72254 -4.76314 1.63188 -4.76314 1.63188 -4.60971C1.63188 -4.51208 1.71557 -4.51208 1.85504 -4.51208C1.86202 -4.51208 1.99452 -4.51208 2.12005 -4.49813C2.2665 -4.48418 2.28045 -4.47024 2.28045 -4.4005C2.28045 -4.38655 2.28045 -4.35168 2.25255 -4.24707L1.32503 -0.54396ZM2.44085 -2.57335L2.86625 -4.27497C2.92204 -4.49116 2.92902 -4.51208 3.22192 -4.51208H4.28194C4.99328 -4.51208 5.15367 -4.04483 5.15367 -3.77983C5.15367 -3.21494 4.51905 -2.57335 3.58456 -2.57335H2.44085ZM2.1061 -0.251059C1.88991 -0.251059 1.88294 -0.258032 1.88294 -0.320797C1.88294 -0.327771 1.88294 -0.36264 1.91083 -0.467248L2.39203 -2.37808H3.87049C4.52603 -2.37808 4.77709 -1.9457 4.77709 -1.54122C4.77709 -0.850809 4.07273 -0.251059 3.22889 -0.251059H2.1061Z' id='g1-66'/>\n</defs>\n<g id='page1'>\n<use x='228.144' xlink:href='#g0-95' y='87.6712'/>\n<use x='226.95' xlink:href='#g1-65' y='94.0971'/>\n<use x='232.92' xlink:href='#g1-66' y='94.0971'/>\n</g>\n</svg>";

  var cong = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='8.21545pt' version='1.1' viewBox='229.251 81.3711 7.7198 5.47697' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.19303 -3.32752C7.19303 -3.5467 7.13325 -3.64633 7.05355 -3.64633C7.00374 -3.64633 6.92403 -3.57659 6.91407 -3.3873C6.87422 -2.43088 6.21669 -1.88294 5.5193 -1.88294C4.89166 -1.88294 4.41345 -2.31133 3.92528 -2.73973C3.41719 -3.19801 2.89913 -3.65629 2.22167 -3.65629C1.13574 -3.65629 0.547945 -2.5604 0.547945 -1.6538C0.547945 -1.33499 0.67746 -1.33499 0.687422 -1.33499C0.797011 -1.33499 0.826899 -1.53425 0.826899 -1.56413C0.86675 -2.66002 1.61395 -3.09838 2.22167 -3.09838C2.84932 -3.09838 3.32752 -2.66999 3.81569 -2.24159C4.32379 -1.78331 4.84184 -1.32503 5.5193 -1.32503C6.60523 -1.32503 7.19303 -2.42092 7.19303 -3.32752Z' id='g0-24'/>\n<path d='M6.84433 -3.25778C6.99377 -3.25778 7.18306 -3.25778 7.18306 -3.45704S6.99377 -3.65629 6.8543 -3.65629H0.886675C0.747198 -3.65629 0.557908 -3.65629 0.557908 -3.45704S0.747198 -3.25778 0.896638 -3.25778H6.84433ZM6.8543 -1.32503C6.99377 -1.32503 7.18306 -1.32503 7.18306 -1.52428S6.99377 -1.72354 6.84433 -1.72354H0.896638C0.747198 -1.72354 0.557908 -1.72354 0.557908 -1.52428S0.747198 -1.32503 0.886675 -1.32503H6.8543Z' id='g1-61'/>\n</defs>\n<g id='page1'>\n<use x='229.251' xlink:href='#g0-24' y='85.0125'/>\n<use x='229.251' xlink:href='#g1-61' y='88.1694'/>\n</g>\n</svg>";

  var sim = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='3.48009pt' version='1.1' viewBox='229.251 84.0298 7.7198 2.32006' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.19303 -3.32752C7.19303 -3.5467 7.13325 -3.64633 7.05355 -3.64633C7.00374 -3.64633 6.92403 -3.57659 6.91407 -3.3873C6.87422 -2.43088 6.21669 -1.88294 5.5193 -1.88294C4.89166 -1.88294 4.41345 -2.31133 3.92528 -2.73973C3.41719 -3.19801 2.89913 -3.65629 2.22167 -3.65629C1.13574 -3.65629 0.547945 -2.5604 0.547945 -1.6538C0.547945 -1.33499 0.67746 -1.33499 0.687422 -1.33499C0.797011 -1.33499 0.826899 -1.53425 0.826899 -1.56413C0.86675 -2.66002 1.61395 -3.09838 2.22167 -3.09838C2.84932 -3.09838 3.32752 -2.66999 3.81569 -2.24159C4.32379 -1.78331 4.84184 -1.32503 5.5193 -1.32503C6.60523 -1.32503 7.19303 -2.42092 7.19303 -3.32752Z' id='g0-24'/>\n</defs>\n<g id='page1'>\n<use x='229.251' xlink:href='#g0-24' y='87.6712'/>\n</g>\n</svg>";

  var simeq = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='6.36462pt' version='1.1' viewBox='229.251 83.0683 7.7198 4.24308' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.19303 -4.30386C7.19303 -4.52304 7.12329 -4.6127 7.05355 -4.6127C7.0137 -4.6127 6.92403 -4.57285 6.91407 -4.34371C6.87422 -3.51681 6.17684 -3.04857 5.52927 -3.04857C4.93151 -3.04857 4.4533 -3.39726 3.93524 -3.79577C3.40722 -4.2142 2.8792 -4.62267 2.21171 -4.62267C1.23537 -4.62267 0.547945 -3.74595 0.547945 -2.80946C0.547945 -2.51059 0.67746 -2.50062 0.687422 -2.50062C0.797011 -2.50062 0.826899 -2.69988 0.826899 -2.72976C0.876712 -3.7061 1.67372 -4.06476 2.21171 -4.06476C2.80946 -4.06476 3.28767 -3.71606 3.80573 -3.31756C4.33375 -2.89913 4.86177 -2.49066 5.52927 -2.49066C6.5056 -2.49066 7.19303 -3.36737 7.19303 -4.30386ZM0.9066 -0.757161C0.747198 -0.757161 0.547945 -0.757161 0.547945 -0.557908S0.727273 -0.358655 0.896638 -0.358655H6.84433C7.0137 -0.358655 7.19303 -0.358655 7.19303 -0.557908S7.00374 -0.757161 6.83437 -0.757161H0.9066Z' id='g0-39'/>\n</defs>\n<g id='page1'>\n<use x='229.251' xlink:href='#g0-39' y='87.6712'/>\n</g>\n</svg>";

  var sub_sup = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='19.8771pt' version='1.1' viewBox='225.128 81.8585 15.4396 13.2514' width='23.1594pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.74645 -5.19651C5.74645 -5.44359 5.72254 -5.47547 5.4675 -5.47547H0.72528C0.478207 -5.47547 0.446326 -5.45156 0.446326 -5.19651V-0.286924C0.446326 -0.0318804 0.470237 0 0.73325 0H5.45953C5.72254 0 5.74645 -0.0239103 5.74645 -0.278954V-5.19651ZM0.765131 -5.15666H5.42765V-0.318804H0.765131V-5.15666Z' id='g0-3'/>\n<use id='g1-3' transform='scale(1.5)' xlink:href='#g0-3'/>\n</defs>\n<g id='page1'>\n<use x='225.128' xlink:href='#g1-3' y='92.1544'/>\n<use x='234.392' xlink:href='#g0-3' y='87.2182'/>\n<use x='234.392' xlink:href='#g0-3' y='95.1099'/>\n</g>\n</svg>";

  var dotx = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='13.5962pt' version='1.1' viewBox='229.251 78.6071 7.7198 9.06411' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g0-3'/>\n<path d='M1.91283 -6.13699C1.91283 -6.40598 1.68369 -6.66501 1.38481 -6.66501C1.04608 -6.66501 0.846824 -6.38605 0.846824 -6.13699C0.846824 -5.868 1.07597 -5.60897 1.37484 -5.60897C1.71357 -5.60897 1.91283 -5.88792 1.91283 -6.13699Z' id='g1-95'/>\n</defs>\n<g id='page1'>\n<use x='231.742' xlink:href='#g1-95' y='85.2359'/>\n<use x='229.251' xlink:href='#g0-3' y='87.6712'/>\n</g>\n</svg>";

  var overrightarrow = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='18.7719pt' version='1.1' viewBox='228.144 75.1566 9.92566 12.5146' width='14.8885pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g0-3'/>\n<path d='M6.56538 -2.29141C6.73474 -2.29141 6.91407 -2.29141 6.91407 -2.49066S6.73474 -2.68991 6.56538 -2.68991H1.17559C1.00623 -2.68991 0.826899 -2.68991 0.826899 -2.49066S1.00623 -2.29141 1.17559 -2.29141H6.56538Z' id='g1-0'/>\n<path d='M8.30884 -2.29141C7.7609 -1.87298 7.49191 -1.46451 7.4122 -1.33499C6.96389 -0.647572 6.88418 -0.0199253 6.88418 -0.00996264C6.88418 0.109589 7.00374 0.109589 7.08344 0.109589C7.2528 0.109589 7.26276 0.0896638 7.30262 -0.0896638C7.53176 -1.066 8.11955 -1.90286 9.24533 -2.36115C9.36488 -2.401 9.39477 -2.42092 9.39477 -2.49066S9.33499 -2.59029 9.31507 -2.60025C8.87671 -2.76961 7.67123 -3.26775 7.29265 -4.94147C7.26276 -5.06102 7.2528 -5.09091 7.08344 -5.09091C7.00374 -5.09091 6.88418 -5.09091 6.88418 -4.97136C6.88418 -4.95143 6.97385 -4.32379 7.39228 -3.65629C7.59153 -3.35741 7.88045 -3.00872 8.30884 -2.68991H0.9066C0.727273 -2.68991 0.547945 -2.68991 0.547945 -2.49066S0.727273 -2.29141 0.9066 -2.29141H8.30884Z' id='g1-33'/>\n</defs>\n<g id='page1'>\n<use x='228.144' xlink:href='#g1-0' y='80.9465'/>\n<use x='228.145' xlink:href='#g1-33' y='80.9465'/>\n<use x='229.251' xlink:href='#g0-3' y='87.6712'/>\n</g>\n</svg>";

  var pm = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='9.92544pt' version='1.1' viewBox='229.251 81.8814 7.7198 6.61696' width='11.5797pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M4.07472 -3.11831H6.84433C7.0137 -3.11831 7.19303 -3.11831 7.19303 -3.31756S7.0137 -3.51681 6.84433 -3.51681H4.07472V-6.2665C4.07472 -6.4259 4.07472 -6.63512 3.87547 -6.63512S3.67621 -6.45579 3.67621 -6.29639V-3.51681H0.896638C0.727273 -3.51681 0.547945 -3.51681 0.547945 -3.31756S0.727273 -3.11831 0.896638 -3.11831H3.67621V-0.398506H0.896638C0.727273 -0.398506 0.547945 -0.398506 0.547945 -0.199253S0.727273 0 0.896638 0H6.84433C7.0137 0 7.19303 0 7.19303 -0.199253S7.0137 -0.398506 6.84433 -0.398506H4.07472V-3.11831Z' id='g0-6'/>\n</defs>\n<g id='page1'>\n<use x='229.251' xlink:href='#g0-6' y='87.6712'/>\n</g>\n</svg>";

  var cdot = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='5.78986pt' version='1.1' viewBox='231.742 83.2599 2.75707 3.85991' width='4.1356pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M1.91283 -2.49066C1.91283 -2.77958 1.67372 -3.01868 1.38481 -3.01868S0.856787 -2.77958 0.856787 -2.49066S1.09589 -1.96264 1.38481 -1.96264S1.91283 -2.20174 1.91283 -2.49066Z' id='g0-1'/>\n</defs>\n<g id='page1'>\n<use x='231.742' xlink:href='#g0-1' y='87.6712'/>\n</g>\n</svg>";

  var l_subsupscript = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='17.9285pt' version='1.1' viewBox='225.889 78.3882 14.4446 11.9523' width='21.6669pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.889' xlink:href='#g0-3' y='83.5577'/>\n<use x='225.889' xlink:href='#g0-3' y='90.3406'/>\n<use x='232.614' xlink:href='#g1-3' y='87.6712'/>\n</g>\n</svg>";

  var l_sup = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='13.9245pt' version='1.1' viewBox='225.889 78.3882 14.4446 9.283' width='21.6669pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.889' xlink:href='#g0-3' y='83.5577'/>\n<use x='232.614' xlink:href='#g1-3' y='87.6712'/>\n</g>\n</svg>";

  var l_subscript = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='12.6855pt' version='1.1' viewBox='225.889 80.9716 14.4446 8.45699' width='21.6669pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.889' xlink:href='#g0-3' y='89.4286'/>\n<use x='232.614' xlink:href='#g1-3' y='87.6712'/>\n</g>\n</svg>";

  var r_subsupscript = "<?xml version='1.0'?>\n<!-- This file was generated by dvisvgm 1.14.1 -->\n<svg height='17.9285pt' version='1.1' viewBox='225.889 78.3882 13.9232 11.9523' width='20.8848pt' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n<defs>\n<path d='M5.67671 -5.00025C5.67671 -5.22341 5.64882 -5.27223 5.40473 -5.27223H0.81594C0.578829 -5.27223 0.54396 -5.23039 0.54396 -5.00025V-0.27198C0.54396 -0.0348692 0.585803 0 0.822914 0H5.39776C5.64882 0 5.67671 -0.0418431 5.67671 -0.278954V-5.00025ZM0.885679 -4.93051H5.33499V-0.341719H0.885679V-4.93051Z' id='g0-3'/>\n<path d='M7.18306 -6.49564C7.18306 -6.80448 7.15318 -6.84433 6.83437 -6.84433H0.9066C0.597758 -6.84433 0.557908 -6.81445 0.557908 -6.49564V-0.358655C0.557908 -0.0398506 0.587796 0 0.916563 0H6.82441C7.15318 0 7.18306 -0.0298879 7.18306 -0.348692V-6.49564ZM0.956413 -6.44583H6.78456V-0.398506H0.956413V-6.44583Z' id='g1-3'/>\n</defs>\n<g id='page1'>\n<use x='225.889' xlink:href='#g1-3' y='87.6712'/>\n<use x='233.609' xlink:href='#g0-3' y='83.5577'/>\n<use x='233.609' xlink:href='#g0-3' y='90.3406'/>\n</g>\n</svg>";

  var LatexIcons = {
    frac: frac,
    sqrt: sqrt,
    sum: sum,
    bracket: bracket,
    braces: braces,
    round_brackets: round_brackets,
    complement: complement,
    complementu: complementu,
    square: square,
    modulus: modulus,
    lefttsrightm: lefttsrightm,
    lefttmrights: lefttmrights,
    leftrightm: leftrightm,
    leftrights: leftrights,
    exponentn: exponentn,
    sup: exponentn,
    cube: cube,
    root: root,
    cube_root: cube_root,
    centigrade: centigrade,
    fahrenheit: fahrenheit,
    r_subscript: r_subscript,
    xrightarrow_chemical: xrightarrow_chemical,
    xrightleftharpoons_chemical: xrightleftharpoons_chemical,
    xlongequal_chemical: xlongequal_chemical,
    ternary_equations: ternary_equations,
    binary_equations: binary_equations,
    quaternion_equations: quaternion_equations,
    equation: equation,
    oversetfrown: oversetfrown,
    cong: cong,
    sim: sim,
    simeq: simeq,
    sub_sup: sub_sup,
    dotx: dotx,
    overrightarrow: overrightarrow,
    plus_minus: pm,
    cdot: cdot,
    l_subsupscript: l_subsupscript,
    l_sup: l_sup,
    l_subscript: l_subscript,
    r_subsupscript: r_subsupscript
  };

  /**
   * 编辑器主题模版类
   * @description 
   */

  var Template =
  /*#__PURE__*/
  function () {
    function Template(editor) {
      _classCallCheck(this, Template);

      this.editor = editor;
      this.theme = this.editor.options.theme || 'simple';
      this.outterContainer = null;
      this.IconsTheme = Theme[this.theme];
      this.initOutterContainer();
      this.initTemplate();
    }
    /**
     * 初始化外层载体
     * @description 
     */


    _createClass(Template, [{
      key: "initOutterContainer",
      value: function initOutterContainer() {
        var outterContainer = document.querySelector('.editor-outter-container');

        if (!outterContainer) {
          var containner = document.createElement('div');
          containner.classList.add('editor-outter-container');
          document.body.append(containner);
        }

        this.outterContainer = document.querySelector('.editor-outter-container');

        if (utils.isMobile) {
          this.outterContainer.classList.add('mobile');
          var placeholderContainer = document.querySelector('.editor-placeholder');

          if (!placeholderContainer) {
            var placeholder = document.createElement('div');
            placeholder.classList.add('editor-placeholder');
            placeholder.classList.add('hide');
            document.body.append(placeholder);
          }
        }

        var viewport = document.createElement("meta");
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;');
        document.head.prepend(viewport);
      }
      /**
       * 初始化模版
       * @description 
       */

    }, {
      key: "initTemplate",
      value: function initTemplate() {
        var _this = this;

        // if (!this.editor.isMobile) {
        var footerEl = document.createElement('div');
        footerEl.classList.add('mt-editor-keyboard');
        footerEl.classList.add("y-editor-".concat(this.editor.options.id));
        footerEl.classList.add("y-editor-".concat(this.theme));
        footerEl.classList.add('hide');
        this.container = footerEl;
        this.outterContainer.append(this.container);
        var editor_id = this.editor.options.id;
        var templateHtml = "<ul class='tabs-" + editor_id + " tabs-" + this.theme + "'>";
        this.editor.default_toolbar_tabs.forEach(function (o, idx) {
          if (idx == 0) {
            templateHtml += "<li class='tab-link tab-link-" + _this.theme + " current' data-wrapperid='" + editor_id + "' data-tab='tab-" + o.toString() + "-" + editor_id + "'>" + _this.editor.defaultOptionsParams[o] + "</li>";
          } else {
            templateHtml += "<li class='tab-link tab-link-" + _this.theme + "' data-wrapperid='" + editor_id + "' data-tab='tab-" + o.toString() + "-" + editor_id + "'>" + _this.editor.defaultOptionsParams[o] + "</li>";
          }
        });

        if (utils.isMobile) {
          templateHtml += "<div class=\"tab-delete tab-delete-".concat(this.theme, "\">").concat(this.IconsTheme.ipadDelete, "</div><div class=\"tab-close tab-close-").concat(this.theme, "\">").concat(this.IconsTheme.ipadClose, "</div></ul>");
        } else {
          templateHtml += "<div class=\"tab-delete tab-delete-".concat(this.theme, "\">\u5220\u9664</div><div class=\"tab-close tab-close-").concat(this.theme, "\">").concat(this.IconsTheme.close, "</div></ul>");
        }

        this.editor.default_toolbar_tabs.forEach(function (o, idx) {
          if (idx == 0) {
            templateHtml += "<div id='tab-" + o.toString() + "-" + editor_id + "' class='tab-content-editor current'>";
          } else {
            templateHtml += "<div id='tab-" + o.toString() + "-" + editor_id + "' class='tab-content-editor'>";
          }

          templateHtml += "</div>";
        });
        templateHtml += "<div class=\"tab-footer-".concat(editor_id, " tab-footer-").concat(this.theme, "\"></div>");

        if (!utils.isMobile) {
          this.container.innerHTML = "".concat(templateHtml).concat(this.theme !== 'simple' ? this.IconsTheme.keyboard : '<i class="editor-simple-bg"></i>');
          var containerPos = utils.GetPosition("#".concat(this.editor.editorId));
          var rect = document.querySelector("#".concat(this.editor.editorId)).getClientRects();
          console.log({
            containerPos: containerPos,
            rect: rect
          }, document.documentElement.clientHeight, rect[0].bottom);

          if (document.documentElement.clientHeight - rect[0].bottom < 290) {
            this.container.style.top = rect[0].top - 290 + 'px';
            this.container.style.left = containerPos.y - 60 + 'px';
          } else {
            this.container.style.top = containerPos.x + 104 + 'px';
            this.container.style.left = containerPos.y - 60 + 'px';
          }
        } else {
          this.container.innerHTML = templateHtml;
        }

        this.closeTab = document.querySelector(".y-editor-".concat(editor_id, " .tab-close"));
        this.editorTab = document.querySelector(".tabs-".concat(editor_id));
        this.editorSubTab = document.querySelector(".tab-footer-".concat(editor_id));
        this.editorLatexContentEl = document.querySelector("#tab-general-".concat(editor_id));
        this.editorDelete = document.querySelector(".tabs-".concat(editor_id, " .tab-delete"));
        this.initEnContent();
        this.initLatexContent();
        this.initZhContent(); // }
      }
      /**
       * 初始化符号模版
       * @description 
       */

    }, {
      key: "initLatexContent",
      value: function initLatexContent() {
        var _this2 = this;

        var subToolbarTabs = this.editor.default_sub_toolbar_tabs;
        var defaultLatexButton = this.editor.default_toolbar_buttons;
        var editor_id = this.editor.options.id;
        var subTabTemplateHtml = '',
            subTabsHtml = '<div class="sub-scroll sub-scroll-left">' + this.IconsTheme.scrollarray + '</div><div class="sub-tab sub-tab-latex current">';

        keys$1(subToolbarTabs).forEach(function (tab, index) {
          if (index == 0) {
            subTabsHtml += "<div class='sub-tab-link tab-link-" + _this2.theme + " current' data-wrapperid='" + editor_id + "' data-tab='sub-tab-" + tab.toString() + "-" + editor_id + "'>" + subToolbarTabs[tab] + "</div>";
          } else {
            subTabsHtml += "<div class='sub-tab-link tab-link-" + _this2.theme + "' data-wrapperid='" + editor_id + "' data-tab='sub-tab-" + tab.toString() + "-" + editor_id + "'>" + subToolbarTabs[tab] + "</div>";
          }
        });

        subTabsHtml += '</div>';
        subTabsHtml += '<div class="sub-tab sub-tab-en">' + "<div class='sub-tab-link tab-link-" + this.theme + " current' data-tab='sub-tab-lowercase'>" + this.IconsTheme.lowercase + "小写</div>" + "<div class='sub-tab-link tab-link-" + this.theme + "' data-tab='sub-tab-uppercase'>" + this.IconsTheme.uppercase + "大写</div>" + '</div>' + '<div class="sub-tab sub-tab-zh">' + "<div class='sub-tab-link tab-link-" + this.theme + " current' data-tab='sub-tab'>" + this.IconsTheme.chinese + "键盘</div>" + '</div><div class="sub-scroll sub-scroll-right">' + this.IconsTheme.scrollarray + '</div>';
        this.editorSubTab.innerHTML = subTabsHtml;
        var sysBtns = defaultLatexButton.filter(function (btns) {});

        keys$1(subToolbarTabs).forEach(function (tab, index) {
          subTabTemplateHtml += "<div id='sub-tab-" + tab + "-" + editor_id + "' class='sub-tab-content-me'>";
          defaultLatexButton.forEach(function (btn, btnIndex) {
            if (_this2.editor.buttonMeta[btn].tab == tab) {
              if (_this2.editor.buttonMeta[btn]) {
                var icon = _this2.editor.buttonMeta[btn].title || LatexIcons[_this2.editor.buttonMeta[btn].icon] || _this2.editor.buttonMeta[btn].latexicon;
                subTabTemplateHtml += "<span class='matheditor-btn-span " + _this2.theme + "-btn-span' title='" + _this2.editor.buttonMeta[btn].name + "' data-latex='" + _this2.editor.buttonMeta[btn].latex + "' data-moveto='" + _this2.editor.buttonMeta[btn].moveto + "' data-movefor='" + _this2.editor.buttonMeta[btn].movefor + "' id='matheditor-btn-" + btn + // "' class='op-btn'>"+ (this.editor.buttonMeta[btn].tab) == 'number' ? this.editor.buttonMeta[btn].name : icon + 
                "' class='op-btn'>" + icon + "</span>";
              } else {
                console.warn("MathEditor: '" + btn + "' is an invalid button");
              }
            }
          });
          subTabTemplateHtml += '</div>';
        });

        this.editorLatexContentEl.innerHTML = subTabTemplateHtml;
        var MQN = window.MathQuill.getInterface(2);
        var buttonMqInstances = {};
        defaultLatexButton.forEach(function (btn, idx) {
          if (_this2.editor.buttonMeta[btn].latexicon) {
            var problemSpan = document.getElementById('matheditor-btn-' + btn);
            buttonMqInstances[btn] = MQN.StaticMath(problemSpan);

            if (Object.prototype.toString.call(_this2.editor.buttonMeta[btn].style).toLowerCase() === '[object object]') {
              _this2.styleCb.call(_this2.editor.buttonMeta[btn], buttonMqInstances[btn].el());
            }
          }
        });
        var subTabContent = document.querySelectorAll('.sub-tab-content-me');
        var subTabLinks = document.querySelectorAll('.sub-tab-link');
        Array.prototype.slice.call(subTabContent).forEach(function (subItem, index) {
          var subItemChildLength = subItem.childNodes.length;

          if (!subItemChildLength) {
            subItem.remove();
            Array.prototype.slice.call(subTabLinks).forEach(function (subLinkItem, i) {
              if (subLinkItem.dataset.tab == subItem.id) {
                subLinkItem.remove();
              }
            });
          }
        });
      }
      /**
       * 初始化英文模版
       * @description 
       */

    }, {
      key: "initEnContent",
      value: function initEnContent() {
        var _this3 = this;

        var defaultBtns = this.editor.default_toolbar_tabs;
        var editor_id = this.editor.options.id;
        var templateHtml = "";

        if (defaultBtns.includes('en')) {
          if (utils.isMobile) {
            templateHtml += "<div class='matheditor-btn-line'>";
            this.editor.keyboardKeys.letters.forEach(function (item, index) {
              if (item.value.toLowerCase() == 'capslock' || item.value.toLowerCase() == 'backspace') {
                templateHtml += "<span class='matheditor-btn-span " + _this3.theme + "-btn-span btn-" + item.value + "' title='" + item.name + "' data-latex='" + item.value + "' data-moveto='Right' data-movefor='1' id='matheditor-btn-" + index + "' class='op-btn'>" + _this3.IconsTheme['ipad' + item.value] + "</span>";
              } else {
                templateHtml += "<span class='matheditor-btn-span " + _this3.theme + "-btn-span' title='" + item.value + "' data-latex='" + item.value + "' data-moveto='Right' data-movefor='1' id='matheditor-btn-" + index + "' class='op-btn'>" + item.display + "</span>" + (item.new_line ? "</div><div class='matheditor-btn-line'>" : "");
              }
            });
            templateHtml += "</div>";
          } else {
            this.editor.keyboardKeys.letters_pc.forEach(function (item, index) {
              if (item.value.toLowerCase() !== 'capslock' && item.value.toLowerCase() !== 'backspace') {
                templateHtml += "<span class='matheditor-btn-span " + _this3.theme + "-btn-span' title='" + item.value + "' data-latex='" + item.value + "' data-moveto='Right' data-movefor='1' id='matheditor-btn-" + index + "' class='op-btn'>" + item.display + "</span>";
              }
            });
          }

          document.querySelector("#tab-en-".concat(editor_id)).innerHTML = templateHtml;
        }
      }
      /**
       * 初始化中文模版
       * @description 
       */

    }, {
      key: "initZhContent",
      value: function initZhContent() {
        var _this4 = this;

        var defaultBtns = this.editor.default_toolbar_tabs;
        var editor_id = this.editor.options.id;
        var templateHtml = "";

        if (defaultBtns.includes('zh')) {
          if (utils.isMobile) {
            templateHtml += "<div class='matheditor-btn-line'>";
            this.editor.keyboardKeys.letters.forEach(function (item, index) {
              if (item.value.toLowerCase() !== 'capslock') {
                templateHtml += "<span class='matheditor-btn-span " + _this4.theme + "-btn-span btn-" + item.value + "' title='" + item.value + "' data-latex='" + item.value + "' data-moveto='Right' data-movefor='1' id='matheditor-btn-" + index + "' class='op-btn'>" + (item.value === 'Backspace' ? _this4.IconsTheme['ipad' + item.value] : item.display) + "</span>" + (item.new_line ? "</div><div class='matheditor-btn-line'>" : "");
              }
            });
            templateHtml += "</div>";
          } else {
            this.editor.keyboardKeys.letters_pc.forEach(function (item, index) {
              if (item.value.toLowerCase() !== 'capslock' && item.value.toLowerCase() !== 'backspace') {
                templateHtml += "<span class='matheditor-btn-span " + _this4.theme + "-btn-span' title='" + item.name + "' data-latex='" + item.value + "' data-moveto='Right' data-movefor='1' id='matheditor-btn-" + index + "' class='op-btn'>" + item.display + "</span>";
              }
            });
          }

          document.querySelector("#tab-zh-".concat(editor_id)).innerHTML = templateHtml;
        }
      }
    }, {
      key: "styleCb",
      value: function styleCb(el) {
        var jqEl = window.$(el);
        var innderChild = jqEl.children();
        var innderEl = innderChild[innderChild.length - 1];

        if (Object.prototype.toString.call(this.style.root).toLowerCase() === '[object object]') {
          jqEl.css(this.style.root);
        }

        if (Object.prototype.toString.call(this.style.inner).toLowerCase() === '[object object]') {
          window.$(innderEl).css(this.style.inner);
        }

        if (Object.prototype.toString.call(this.style.matrix).toLowerCase() === '[object object]') {
          var matrixEl = window.$(innderEl).children('.mq-matrix');
          window.$(matrixEl).css(this.style.matrix);
        }
      }
    }]);

    return Template;
  }();

  var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var space = '[' + _stringWs + ']';
  var non = '\u200b\u0085';
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;

  var $parseInt = _global.parseInt;
  var $trim = _stringTrim.trim;

  var hex = /^[-+]?0[xX]/;

  var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
  } : $parseInt;

  // 18.2.5 parseInt(string, radix)
  _export(_export.G + _export.F * (parseInt != _parseInt), { parseInt: _parseInt });

  var _parseInt$1 = _core.parseInt;

  var _parseInt$2 = _parseInt$1;

  /**
  * 收录常用汉字6763个，不支持声调，支持多音字，并按照汉字使用频率由低到高排序
  */
  var pinyin_dict_notone = {
    "a": "阿啊呵腌嗄吖锕",
    "e": "额阿俄恶鹅遏鄂厄饿峨扼娥鳄哦蛾噩愕讹锷垩婀鹗萼谔莪腭锇颚呃阏屙苊轭",
    "ai": "爱埃艾碍癌哀挨矮隘蔼唉皑哎霭捱暧嫒嗳瑷嗌锿砹",
    "ei": "诶",
    "xi": "系西席息希习吸喜细析戏洗悉锡溪惜稀袭夕洒晰昔牺腊烯熙媳栖膝隙犀蹊硒兮熄曦禧嬉玺奚汐徙羲铣淅嘻歙熹矽蟋郗唏皙隰樨浠忾蜥檄郄翕阋鳃舾屣葸螅咭粞觋欷僖醯鼷裼穸饩舄禊诶菥蓰",
    "yi": "一以已意议义益亿易医艺食依移衣异伊仪宜射遗疑毅谊亦疫役忆抑尾乙译翼蛇溢椅沂泄逸蚁夷邑怡绎彝裔姨熠贻矣屹颐倚诣胰奕翌疙弈轶蛾驿壹猗臆弋铱旖漪迤佚翊诒怿痍懿饴峄揖眙镒仡黟肄咿翳挹缢呓刈咦嶷羿钇殪荑薏蜴镱噫癔苡悒嗌瘗衤佾埸圯舣酏劓",
    "an": "安案按岸暗鞍氨俺胺铵谙庵黯鹌桉埯犴揞厂广",
    "han": "厂汉韩含旱寒汗涵函喊憾罕焊翰邯撼瀚憨捍酣悍鼾邗颔蚶晗菡旰顸犴焓撖",
    "ang": "昂仰盎肮",
    "ao": "奥澳傲熬凹鳌敖遨鏖袄坳翱嗷拗懊岙螯骜獒鏊艹媪廒聱",
    "wa": "瓦挖娃洼袜蛙凹哇佤娲呙腽",
    "yu": "于与育余预域予遇奥语誉玉鱼雨渔裕愈娱欲吁舆宇羽逾豫郁寓吾狱喻御浴愉禹俞邪榆愚渝尉淤虞屿峪粥驭瑜禺毓钰隅芋熨瘀迂煜昱汩於臾盂聿竽萸妪腴圄谕觎揄龉谀俣馀庾妤瘐鬻欤鹬阈嵛雩鹆圉蜮伛纡窬窳饫蓣狳肀舁蝓燠",
    "niu": "牛纽扭钮拗妞忸狃",
    "o": "哦噢喔",
    "ba": "把八巴拔伯吧坝爸霸罢芭跋扒叭靶疤笆耙鲅粑岜灞钯捌菝魃茇",
    "pa": "怕帕爬扒趴琶啪葩耙杷钯筢",
    "pi": "被批副否皮坏辟啤匹披疲罢僻毗坯脾譬劈媲屁琵邳裨痞癖陂丕枇噼霹吡纰砒铍淠郫埤濞睥芘蚍圮鼙罴蜱疋貔仳庀擗甓陴",
    "bi": "比必币笔毕秘避闭佛辟壁弊彼逼碧鼻臂蔽拂泌璧庇痹毙弼匕鄙陛裨贲敝蓖吡篦纰俾铋毖筚荸薜婢哔跸濞秕荜愎睥妣芘箅髀畀滗狴萆嬖襞舭",
    "bai": "百白败摆伯拜柏佰掰呗擘捭稗",
    "bo": "波博播勃拨薄佛伯玻搏柏泊舶剥渤卜驳簿脖膊簸菠礴箔铂亳钵帛擘饽跛钹趵檗啵鹁擗踣",
    "bei": "北被备倍背杯勃贝辈悲碑臂卑悖惫蓓陂钡狈呗焙碚褙庳鞴孛鹎邶鐾",
    "ban": "办版半班般板颁伴搬斑扮拌扳瓣坂阪绊钣瘢舨癍",
    "pan": "判盘番潘攀盼拚畔胖叛拌蹒磐爿蟠泮袢襻丬",
    "bin": "份宾频滨斌彬濒殡缤鬓槟摈膑玢镔豳髌傧",
    "bang": "帮邦彭旁榜棒膀镑绑傍磅蚌谤梆浜蒡",
    "pang": "旁庞乓磅螃彷滂逄耪",
    "beng": "泵崩蚌蹦迸绷甭嘣甏堋",
    "bao": "报保包宝暴胞薄爆炮饱抱堡剥鲍曝葆瀑豹刨褒雹孢苞煲褓趵鸨龅勹",
    "bu": "不部步布补捕堡埔卜埠簿哺怖钚卟瓿逋晡醭钸",
    "pu": "普暴铺浦朴堡葡谱埔扑仆蒲曝瀑溥莆圃璞濮菩蹼匍噗氆攵镨攴镤",
    "mian": "面棉免绵缅勉眠冕娩腼渑湎沔黾宀眄",
    "po": "破繁坡迫颇朴泊婆泼魄粕鄱珀陂叵笸泺皤钋钷",
    "fan": "反范犯繁饭泛翻凡返番贩烦拚帆樊藩矾梵蕃钒幡畈蘩蹯燔",
    "fu": "府服副负富复福夫妇幅付扶父符附腐赴佛浮覆辅傅伏抚赋辐腹弗肤阜袱缚甫氟斧孚敷俯拂俘咐腑孵芙涪釜脯茯馥宓绂讣呋罘麸蝠匐芾蜉跗凫滏蝮驸绋蚨砩桴赙菔呒趺苻拊阝鲋怫稃郛莩幞祓艴黻黼鳆",
    "ben": "本体奔苯笨夯贲锛畚坌",
    "feng": "风丰封峰奉凤锋冯逢缝蜂枫疯讽烽俸沣酆砜葑唪",
    "bian": "变便边编遍辩鞭辨贬匾扁卞汴辫砭苄蝙鳊弁窆笾煸褊碥忭缏",
    "pian": "便片篇偏骗翩扁骈胼蹁谝犏缏",
    "zhen": "镇真针圳振震珍阵诊填侦臻贞枕桢赈祯帧甄斟缜箴疹砧榛鸩轸稹溱蓁胗椹朕畛浈",
    "biao": "表标彪镖裱飚膘飙镳婊骠飑杓髟鳔灬瘭",
    "piao": "票朴漂飘嫖瓢剽缥殍瞟骠嘌莩螵",
    "huo": "和活或货获火伙惑霍祸豁嚯藿锪蠖钬耠镬夥灬劐攉",
    "bie": "别鳖憋瘪蹩",
    "min": "民敏闽闵皿泯岷悯珉抿黾缗玟愍苠鳘",
    "fen": "分份纷奋粉氛芬愤粪坟汾焚酚吩忿棼玢鼢瀵偾鲼",
    "bing": "并病兵冰屏饼炳秉丙摒柄槟禀枋邴冫",
    "geng": "更耕颈庚耿梗埂羹哽赓绠鲠",
    "fang": "方放房防访纺芳仿坊妨肪邡舫彷枋鲂匚钫",
    "xian": "现先县见线限显险献鲜洗宪纤陷闲贤仙衔掀咸嫌掺羡弦腺痫娴舷馅酰铣冼涎暹籼锨苋蚬跹岘藓燹鹇氙莶霰跣猃彡祆筅",
    "fou": "不否缶",
    "ca": "拆擦嚓礤",
    "cha": "查察差茶插叉刹茬楂岔诧碴嚓喳姹杈汊衩搽槎镲苴檫馇锸猹",
    "cai": "才采财材菜彩裁蔡猜踩睬",
    "can": "参残餐灿惨蚕掺璨惭粲孱骖黪",
    "shen": "信深参身神什审申甚沈伸慎渗肾绅莘呻婶娠砷蜃哂椹葚吲糁渖诜谂矧胂",
    "cen": "参岑涔",
    "san": "三参散伞叁糁馓毵",
    "cang": "藏仓苍沧舱臧伧",
    "zang": "藏脏葬赃臧奘驵",
    "chen": "称陈沈沉晨琛臣尘辰衬趁忱郴宸谌碜嗔抻榇伧谶龀肜",
    "cao": "草操曹槽糙嘈漕螬艚屮",
    "ce": "策测册侧厕栅恻",
    "ze": "责则泽择侧咋啧仄箦赜笮舴昃迮帻",
    "zhai": "债择齐宅寨侧摘窄斋祭翟砦瘵哜",
    "dao": "到道导岛倒刀盗稻蹈悼捣叨祷焘氘纛刂帱忉",
    "ceng": "层曾蹭噌",
    "zha": "查扎炸诈闸渣咋乍榨楂札栅眨咤柞喳喋铡蚱吒怍砟揸痄哳齄",
    "chai": "差拆柴钗豺侪虿瘥",
    "ci": "次此差词辞刺瓷磁兹慈茨赐祠伺雌疵鹚糍呲粢",
    "zi": "资自子字齐咨滋仔姿紫兹孜淄籽梓鲻渍姊吱秭恣甾孳訾滓锱辎趑龇赀眦缁呲笫谘嵫髭茈粢觜耔",
    "cuo": "措错磋挫搓撮蹉锉厝嵯痤矬瘥脞鹾",
    "chan": "产单阐崭缠掺禅颤铲蝉搀潺蟾馋忏婵孱觇廛谄谗澶骣羼躔蒇冁",
    "shan": "山单善陕闪衫擅汕扇掺珊禅删膳缮赡鄯栅煽姗跚鳝嬗潸讪舢苫疝掸膻钐剡蟮芟埏彡骟",
    "zhan": "展战占站崭粘湛沾瞻颤詹斩盏辗绽毡栈蘸旃谵搌",
    "xin": "新心信辛欣薪馨鑫芯锌忻莘昕衅歆囟忄镡",
    "lian": "联连练廉炼脸莲恋链帘怜涟敛琏镰濂楝鲢殓潋裢裣臁奁莶蠊蔹",
    "chang": "场长厂常偿昌唱畅倡尝肠敞倘猖娼淌裳徜昶怅嫦菖鲳阊伥苌氅惝鬯",
    "zhang": "长张章障涨掌帐胀彰丈仗漳樟账杖璋嶂仉瘴蟑獐幛鄣嫜",
    "chao": "超朝潮炒钞抄巢吵剿绰嘲晁焯耖怊",
    "zhao": "着照招找召朝赵兆昭肇罩钊沼嘲爪诏濯啁棹笊",
    "zhou": "调州周洲舟骤轴昼宙粥皱肘咒帚胄绉纣妯啁诌繇碡籀酎荮",
    "che": "车彻撤尺扯澈掣坼砗屮",
    "ju": "车局据具举且居剧巨聚渠距句拒俱柜菊拘炬桔惧矩鞠驹锯踞咀瞿枸掬沮莒橘飓疽钜趄踽遽琚龃椐苣裾榘狙倨榉苴讵雎锔窭鞫犋屦醵",
    "cheng": "成程城承称盛抢乘诚呈净惩撑澄秤橙骋逞瞠丞晟铛埕塍蛏柽铖酲裎枨",
    "rong": "容荣融绒溶蓉熔戎榕茸冗嵘肜狨蝾",
    "sheng": "生声升胜盛乘圣剩牲甸省绳笙甥嵊晟渑眚",
    "deng": "等登邓灯澄凳瞪蹬噔磴嶝镫簦戥",
    "zhi": "制之治质职只志至指织支值知识直致执置止植纸拓智殖秩旨址滞氏枝芝脂帜汁肢挚稚酯掷峙炙栉侄芷窒咫吱趾痔蜘郅桎雉祉郦陟痣蛭帙枳踯徵胝栀贽祗豸鸷摭轵卮轾彘觯絷跖埴夂黹忮骘膣踬",
    "zheng": "政正证争整征郑丁症挣蒸睁铮筝拯峥怔诤狰徵钲",
    "tang": "堂唐糖汤塘躺趟倘棠烫淌膛搪镗傥螳溏帑羰樘醣螗耥铴瑭",
    "chi": "持吃池迟赤驰尺斥齿翅匙痴耻炽侈弛叱啻坻眙嗤墀哧茌豉敕笞饬踟蚩柢媸魑篪褫彳鸱螭瘛眵傺",
    "shi": "是时实事市十使世施式势视识师史示石食始士失适试什泽室似诗饰殖释驶氏硕逝湿蚀狮誓拾尸匙仕柿矢峙侍噬嗜栅拭嘘屎恃轼虱耆舐莳铈谥炻豕鲥饣螫酾筮埘弑礻蓍鲺贳",
    "qi": "企其起期气七器汽奇齐启旗棋妻弃揭枝歧欺骑契迄亟漆戚岂稽岐琦栖缉琪泣乞砌祁崎绮祺祈凄淇杞脐麒圻憩芪伎俟畦耆葺沏萋骐鳍綦讫蕲屺颀亓碛柒啐汔綮萁嘁蛴槭欹芑桤丌蜞",
    "chuai": "揣踹啜搋膪",
    "tuo": "托脱拓拖妥驼陀沱鸵驮唾椭坨佗砣跎庹柁橐乇铊沲酡鼍箨柝",
    "duo": "多度夺朵躲铎隋咄堕舵垛惰哆踱跺掇剁柁缍沲裰哚隳",
    "xue": "学血雪削薛穴靴谑噱鳕踅泶彐",
    "chong": "重种充冲涌崇虫宠忡憧舂茺铳艟",
    "chou": "筹抽绸酬愁丑臭仇畴稠瞅踌惆俦瘳雠帱",
    "qiu": "求球秋丘邱仇酋裘龟囚遒鳅虬蚯泅楸湫犰逑巯艽俅蝤赇鼽糗",
    "xiu": "修秀休宿袖绣臭朽锈羞嗅岫溴庥馐咻髹鸺貅",
    "chu": "出处础初助除储畜触楚厨雏矗橱锄滁躇怵绌搐刍蜍黜杵蹰亍樗憷楮",
    "tuan": "团揣湍疃抟彖",
    "zhui": "追坠缀揣椎锥赘惴隹骓缒",
    "chuan": "传川船穿串喘椽舛钏遄氚巛舡",
    "zhuan": "专转传赚砖撰篆馔啭颛",
    "yuan": "元员院原源远愿园援圆缘袁怨渊苑宛冤媛猿垣沅塬垸鸳辕鸢瑗圜爰芫鼋橼螈眢箢掾",
    "cuan": "窜攒篡蹿撺爨汆镩",
    "chuang": "创床窗闯幢疮怆",
    "zhuang": "装状庄壮撞妆幢桩奘僮戆",
    "chui": "吹垂锤炊椎陲槌捶棰",
    "chun": "春纯醇淳唇椿蠢鹑朐莼肫蝽",
    "zhun": "准屯淳谆肫窀",
    "cu": "促趋趣粗簇醋卒蹴猝蹙蔟殂徂",
    "dun": "吨顿盾敦蹲墩囤沌钝炖盹遁趸砘礅",
    "qu": "区去取曲趋渠趣驱屈躯衢娶祛瞿岖龋觑朐蛐癯蛆苣阒诎劬蕖蘧氍黢蠼璩麴鸲磲",
    "xu": "需许续须序徐休蓄畜虚吁绪叙旭邪恤墟栩絮圩婿戌胥嘘浒煦酗诩朐盱蓿溆洫顼勖糈砉醑",
    "chuo": "辍绰戳淖啜龊踔辶",
    "zu": "组族足祖租阻卒俎诅镞菹",
    "ji": "济机其技基记计系期际及集级几给积极己纪即继击既激绩急奇吉季齐疾迹鸡剂辑籍寄挤圾冀亟寂暨脊跻肌稽忌饥祭缉棘矶汲畸姬藉瘠骥羁妓讥稷蓟悸嫉岌叽伎鲫诘楫荠戟箕霁嵇觊麂畿玑笈犄芨唧屐髻戢佶偈笄跽蒺乩咭赍嵴虮掎齑殛鲚剞洎丌墼蕺彐芰哜",
    "cong": "从丛匆聪葱囱琮淙枞骢苁璁",
    "zong": "总从综宗纵踪棕粽鬃偬枞腙",
    "cou": "凑辏腠楱",
    "cui": "衰催崔脆翠萃粹摧璀瘁悴淬啐隹毳榱",
    "wei": "为位委未维卫围违威伟危味微唯谓伪慰尾魏韦胃畏帷喂巍萎蔚纬潍尉渭惟薇苇炜圩娓诿玮崴桅偎逶倭猥囗葳隗痿猬涠嵬韪煨艉隹帏闱洧沩隈鲔軎",
    "cun": "村存寸忖皴",
    "zuo": "作做座左坐昨佐琢撮祚柞唑嘬酢怍笮阼胙",
    "zuan": "钻纂攥缵躜",
    "da": "大达打答搭沓瘩惮嗒哒耷鞑靼褡笪怛妲",
    "dai": "大代带待贷毒戴袋歹呆隶逮岱傣棣怠殆黛甙埭诒绐玳呔迨",
    "tai": "大台太态泰抬胎汰钛苔薹肽跆邰鲐酞骀炱",
    "ta": "他它她拓塔踏塌榻沓漯獭嗒挞蹋趿遢铊鳎溻闼",
    "dan": "但单石担丹胆旦弹蛋淡诞氮郸耽殚惮儋眈疸澹掸膻啖箪聃萏瘅赕",
    "lu": "路六陆录绿露鲁卢炉鹿禄赂芦庐碌麓颅泸卤潞鹭辘虏璐漉噜戮鲈掳橹轳逯渌蓼撸鸬栌氇胪镥簏舻辂垆",
    "tan": "谈探坦摊弹炭坛滩贪叹谭潭碳毯瘫檀痰袒坍覃忐昙郯澹钽锬",
    "ren": "人任认仁忍韧刃纫饪妊荏稔壬仞轫亻衽",
    "jie": "家结解价界接节她届介阶街借杰洁截姐揭捷劫戒皆竭桔诫楷秸睫藉拮芥诘碣嗟颉蚧孑婕疖桀讦疥偈羯袷哜喈卩鲒骱",
    "yan": "研严验演言眼烟沿延盐炎燕岩宴艳颜殷彦掩淹阎衍铅雁咽厌焰堰砚唁焉晏檐蜒奄俨腌妍谚兖筵焱偃闫嫣鄢湮赝胭琰滟阉魇酽郾恹崦芫剡鼹菸餍埏谳讠厣罨",
    "dang": "当党档荡挡宕砀铛裆凼菪谠",
    "tao": "套讨跳陶涛逃桃萄淘掏滔韬叨洮啕绦饕鼗",
    "tiao": "条调挑跳迢眺苕窕笤佻啁粜髫铫祧龆蜩鲦",
    "te": "特忑忒铽慝",
    "de": "的地得德底锝",
    "dei": "得",
    "di": "的地第提低底抵弟迪递帝敌堤蒂缔滴涤翟娣笛棣荻谛狄邸嘀砥坻诋嫡镝碲骶氐柢籴羝睇觌",
    "ti": "体提题弟替梯踢惕剔蹄棣啼屉剃涕锑倜悌逖嚏荑醍绨鹈缇裼",
    "tui": "推退弟腿褪颓蜕忒煺",
    "you": "有由又优游油友右邮尤忧幼犹诱悠幽佑釉柚铀鱿囿酉攸黝莠猷蝣疣呦蚴莸莜铕宥繇卣牖鼬尢蚰侑",
    "dian": "电点店典奠甸碘淀殿垫颠滇癫巅惦掂癜玷佃踮靛钿簟坫阽",
    "tian": "天田添填甜甸恬腆佃舔钿阗忝殄畋栝掭",
    "zhu": "主术住注助属逐宁著筑驻朱珠祝猪诸柱竹铸株瞩嘱贮煮烛苎褚蛛拄铢洙竺蛀渚伫杼侏澍诛茱箸炷躅翥潴邾槠舳橥丶瘃麈疰",
    "nian": "年念酿辗碾廿捻撵拈蔫鲶埝鲇辇黏",
    "diao": "调掉雕吊钓刁貂凋碉鲷叼铫铞",
    "yao": "要么约药邀摇耀腰遥姚窑瑶咬尧钥谣肴夭侥吆疟妖幺杳舀窕窈曜鹞爻繇徭轺铫鳐崾珧",
    "die": "跌叠蝶迭碟爹谍牒耋佚喋堞瓞鲽垤揲蹀",
    "she": "设社摄涉射折舍蛇拾舌奢慑赦赊佘麝歙畲厍猞揲滠",
    "ye": "业也夜叶射野液冶喝页爷耶邪咽椰烨掖拽曳晔谒腋噎揶靥邺铘揲",
    "xie": "些解协写血叶谢械鞋胁斜携懈契卸谐泄蟹邪歇泻屑挟燮榭蝎撷偕亵楔颉缬邂鲑瀣勰榍薤绁渫廨獬躞",
    "zhe": "这者着著浙折哲蔗遮辙辄柘锗褶蜇蛰鹧谪赭摺乇磔螫",
    "ding": "定订顶丁鼎盯钉锭叮仃铤町酊啶碇腚疔玎耵",
    "diu": "丢铥",
    "ting": "听庭停厅廷挺亭艇婷汀铤烃霆町蜓葶梃莛",
    "dong": "动东董冬洞懂冻栋侗咚峒氡恫胴硐垌鸫岽胨",
    "tong": "同通统童痛铜桶桐筒彤侗佟潼捅酮砼瞳恸峒仝嗵僮垌茼",
    "zhong": "中重种众终钟忠仲衷肿踵冢盅蚣忪锺舯螽夂",
    "dou": "都斗读豆抖兜陡逗窦渎蚪痘蔸钭篼",
    "du": "度都独督读毒渡杜堵赌睹肚镀渎笃竺嘟犊妒牍蠹椟黩芏髑",
    "duan": "断段短端锻缎煅椴簖",
    "dui": "对队追敦兑堆碓镦怼憝",
    "rui": "瑞兑锐睿芮蕊蕤蚋枘",
    "yue": "月说约越乐跃兑阅岳粤悦曰钥栎钺樾瀹龠哕刖",
    "tun": "吞屯囤褪豚臀饨暾氽",
    "hui": "会回挥汇惠辉恢徽绘毁慧灰贿卉悔秽溃荟晖彗讳诲珲堕诙蕙晦睢麾烩茴喙桧蛔洄浍虺恚蟪咴隳缋哕",
    "wu": "务物无五武午吴舞伍污乌误亡恶屋晤悟吾雾芜梧勿巫侮坞毋诬呜钨邬捂鹜兀婺妩於戊鹉浯蜈唔骛仵焐芴鋈庑鼯牾怃圬忤痦迕杌寤阢",
    "ya": "亚压雅牙押鸭呀轧涯崖邪芽哑讶鸦娅衙丫蚜碣垭伢氩桠琊揠吖睚痖疋迓岈砑",
    "he": "和合河何核盖贺喝赫荷盒鹤吓呵苛禾菏壑褐涸阂阖劾诃颌嗬貉曷翮纥盍",
    "wo": "我握窝沃卧挝涡斡渥幄蜗喔倭莴龌肟硪",
    "en": "恩摁蒽",
    "n": "嗯唔",
    "er": "而二尔儿耳迩饵洱贰铒珥佴鸸鲕",
    "fa": "发法罚乏伐阀筏砝垡珐",
    "quan": "全权券泉圈拳劝犬铨痊诠荃醛蜷颧绻犭筌鬈悛辁畎",
    "fei": "费非飞肥废菲肺啡沸匪斐蜚妃诽扉翡霏吠绯腓痱芾淝悱狒榧砩鲱篚镄",
    "pei": "配培坏赔佩陪沛裴胚妃霈淠旆帔呸醅辔锫",
    "ping": "平评凭瓶冯屏萍苹乒坪枰娉俜鲆",
    "fo": "佛",
    "hu": "和护许户核湖互乎呼胡戏忽虎沪糊壶葫狐蝴弧瑚浒鹄琥扈唬滹惚祜囫斛笏芴醐猢怙唿戽槲觳煳鹕冱瓠虍岵鹱烀轷",
    "ga": "夹咖嘎尬噶旮伽尕钆尜",
    "ge": "个合各革格歌哥盖隔割阁戈葛鸽搁胳舸疙铬骼蛤咯圪镉颌仡硌嗝鬲膈纥袼搿塥哿虼",
    "ha": "哈蛤铪",
    "xia": "下夏峡厦辖霞夹虾狭吓侠暇遐瞎匣瑕唬呷黠硖罅狎瘕柙",
    "gai": "改该盖概溉钙丐芥赅垓陔戤",
    "hai": "海还害孩亥咳骸骇氦嗨胲醢",
    "gan": "干感赶敢甘肝杆赣乾柑尴竿秆橄矸淦苷擀酐绀泔坩旰疳澉",
    "gang": "港钢刚岗纲冈杠缸扛肛罡戆筻",
    "jiang": "将强江港奖讲降疆蒋姜浆匠酱僵桨绛缰犟豇礓洚茳糨耩",
    "hang": "行航杭巷夯吭桁沆绗颃",
    "gong": "工公共供功红贡攻宫巩龚恭拱躬弓汞蚣珙觥肱廾",
    "hong": "红宏洪轰虹鸿弘哄烘泓訇蕻闳讧荭黉薨",
    "guang": "广光逛潢犷胱咣桄",
    "qiong": "穷琼穹邛茕筇跫蛩銎",
    "gao": "高告搞稿膏糕镐皋羔锆杲郜睾诰藁篙缟槁槔",
    "hao": "好号毫豪耗浩郝皓昊皋蒿壕灏嚎濠蚝貉颢嗥薅嚆",
    "li": "理力利立里李历例离励礼丽黎璃厉厘粒莉梨隶栗荔沥犁漓哩狸藜罹篱鲤砺吏澧俐骊溧砾莅锂笠蠡蛎痢雳俪傈醴栎郦俚枥喱逦娌鹂戾砬唳坜疠蜊黧猁鬲粝蓠呖跞疬缡鲡鳢嫠詈悝苈篥轹",
    "jia": "家加价假佳架甲嘉贾驾嫁夹稼钾挟拮迦伽颊浃枷戛荚痂颉镓笳珈岬胛袈郏葭袷瘕铗跏蛱恝哿",
    "luo": "落罗络洛逻螺锣骆萝裸漯烙摞骡咯箩珞捋荦硌雒椤镙跞瘰泺脶猡倮蠃",
    "ke": "可科克客刻课颗渴壳柯棵呵坷恪苛咳磕珂稞瞌溘轲窠嗑疴蝌岢铪颏髁蚵缂氪骒钶锞",
    "qia": "卡恰洽掐髂袷咭葜",
    "gei": "给",
    "gen": "根跟亘艮哏茛",
    "hen": "很狠恨痕哏",
    "gou": "构购够句沟狗钩拘勾苟垢枸篝佝媾诟岣彀缑笱鞲觏遘",
    "kou": "口扣寇叩抠佝蔻芤眍筘",
    "gu": "股古顾故固鼓骨估谷贾姑孤雇辜菇沽咕呱锢钴箍汩梏痼崮轱鸪牯蛊诂毂鹘菰罟嘏臌觚瞽蛄酤牿鲴",
    "pai": "牌排派拍迫徘湃俳哌蒎",
    "gua": "括挂瓜刮寡卦呱褂剐胍诖鸹栝呙",
    "tou": "投头透偷愉骰亠",
    "guai": "怪拐乖",
    "kuai": "会快块筷脍蒯侩浍郐蒉狯哙",
    "guan": "关管观馆官贯冠惯灌罐莞纶棺斡矜倌鹳鳏盥掼涫",
    "wan": "万完晚湾玩碗顽挽弯蔓丸莞皖宛婉腕蜿惋烷琬畹豌剜纨绾脘菀芄箢",
    "ne": "呢哪呐讷疒",
    "gui": "规贵归轨桂柜圭鬼硅瑰跪龟匮闺诡癸鳜桧皈鲑刽晷傀眭妫炅庋簋刿宄匦",
    "jun": "军均俊君峻菌竣钧骏龟浚隽郡筠皲麇捃",
    "jiong": "窘炯迥炅冂扃",
    "jue": "决绝角觉掘崛诀獗抉爵嚼倔厥蕨攫珏矍蹶谲镢鳜噱桷噘撅橛孓觖劂爝",
    "gun": "滚棍辊衮磙鲧绲丨",
    "hun": "婚混魂浑昏棍珲荤馄诨溷阍",
    "guo": "国过果郭锅裹帼涡椁囗蝈虢聒埚掴猓崞蜾呙馘",
    "hei": "黑嘿嗨",
    "kan": "看刊勘堪坎砍侃嵌槛瞰阚龛戡凵莰",
    "heng": "衡横恒亨哼珩桁蘅",
    "mo": "万没么模末冒莫摩墨默磨摸漠脉膜魔沫陌抹寞蘑摹蓦馍茉嘿谟秣蟆貉嫫镆殁耱嬷麽瘼貊貘",
    "peng": "鹏朋彭膨蓬碰苹棚捧亨烹篷澎抨硼怦砰嘭蟛堋",
    "hou": "后候厚侯猴喉吼逅篌糇骺後鲎瘊堠",
    "hua": "化华划话花画滑哗豁骅桦猾铧砉",
    "huai": "怀坏淮徊槐踝",
    "huan": "还环换欢患缓唤焕幻痪桓寰涣宦垸洹浣豢奂郇圜獾鲩鬟萑逭漶锾缳擐",
    "xun": "讯训迅孙寻询循旬巡汛勋逊熏徇浚殉驯鲟薰荀浔洵峋埙巽郇醺恂荨窨蕈曛獯",
    "huang": "黄荒煌皇凰慌晃潢谎惶簧璜恍幌湟蝗磺隍徨遑肓篁鳇蟥癀",
    "nai": "能乃奶耐奈鼐萘氖柰佴艿",
    "luan": "乱卵滦峦鸾栾銮挛孪脔娈",
    "qie": "切且契窃茄砌锲怯伽惬妾趄挈郄箧慊",
    "jian": "建间件见坚检健监减简艰践兼鉴键渐柬剑尖肩舰荐箭浅剪俭碱茧奸歼拣捡煎贱溅槛涧堑笺谏饯锏缄睑謇蹇腱菅翦戬毽笕犍硷鞯牮枧湔鲣囝裥踺搛缣鹣蒹谫僭戋趼楗",
    "nan": "南难男楠喃囡赧腩囝蝻",
    "qian": "前千钱签潜迁欠纤牵浅遣谦乾铅歉黔谴嵌倩钳茜虔堑钎骞阡掮钤扦芊犍荨仟芡悭缱佥愆褰凵肷岍搴箝慊椠",
    "qiang": "强抢疆墙枪腔锵呛羌蔷襁羟跄樯戕嫱戗炝镪锖蜣",
    "xiang": "向项相想乡象响香降像享箱羊祥湘详橡巷翔襄厢镶飨饷缃骧芗庠鲞葙蟓",
    "jiao": "教交较校角觉叫脚缴胶轿郊焦骄浇椒礁佼蕉娇矫搅绞酵剿嚼饺窖跤蛟侥狡姣皎茭峤铰醮鲛湫徼鹪僬噍艽挢敫",
    "zhuo": "着著缴桌卓捉琢灼浊酌拙茁涿镯淖啄濯焯倬擢斫棹诼浞禚",
    "qiao": "桥乔侨巧悄敲俏壳雀瞧翘窍峭锹撬荞跷樵憔鞘橇峤诮谯愀鞒硗劁缲",
    "xiao": "小效销消校晓笑肖削孝萧俏潇硝宵啸嚣霄淆哮筱逍姣箫骁枭哓绡蛸崤枵魈",
    "si": "司四思斯食私死似丝饲寺肆撕泗伺嗣祀厮驷嘶锶俟巳蛳咝耜笥纟糸鸶缌澌姒汜厶兕",
    "kai": "开凯慨岂楷恺揩锴铠忾垲剀锎蒈",
    "jin": "进金今近仅紧尽津斤禁锦劲晋谨筋巾浸襟靳瑾烬缙钅矜觐堇馑荩噤廑妗槿赆衿卺",
    "qin": "亲勤侵秦钦琴禽芹沁寝擒覃噙矜嗪揿溱芩衾廑锓吣檎螓",
    "jing": "经京精境竞景警竟井惊径静劲敬净镜睛晶颈荆兢靖泾憬鲸茎腈菁胫阱旌粳靓痉箐儆迳婧肼刭弪獍",
    "ying": "应营影英景迎映硬盈赢颖婴鹰荧莹樱瑛蝇萦莺颍膺缨瀛楹罂荥萤鹦滢蓥郢茔嘤璎嬴瘿媵撄潆",
    "jiu": "就究九酒久救旧纠舅灸疚揪咎韭玖臼柩赳鸠鹫厩啾阄桕僦鬏",
    "zui": "最罪嘴醉咀蕞觜",
    "juan": "卷捐圈眷娟倦绢隽镌涓鹃鄄蠲狷锩桊",
    "suan": "算酸蒜狻",
    "yun": "员运云允孕蕴韵酝耘晕匀芸陨纭郧筠恽韫郓氲殒愠昀菀狁",
    "qun": "群裙逡麇",
    "ka": "卡喀咖咔咯佧胩",
    "kang": "康抗扛慷炕亢糠伉钪闶",
    "keng": "坑铿吭",
    "kao": "考靠烤拷铐栲尻犒",
    "ken": "肯垦恳啃龈裉",
    "yin": "因引银印音饮阴隐姻殷淫尹荫吟瘾寅茵圻垠鄞湮蚓氤胤龈窨喑铟洇狺夤廴吲霪茚堙",
    "kong": "空控孔恐倥崆箜",
    "ku": "苦库哭酷裤枯窟挎骷堀绔刳喾",
    "kua": "跨夸垮挎胯侉",
    "kui": "亏奎愧魁馈溃匮葵窥盔逵睽馗聩喟夔篑岿喹揆隗傀暌跬蒉愦悝蝰",
    "kuan": "款宽髋",
    "kuang": "况矿框狂旷眶匡筐邝圹哐贶夼诳诓纩",
    "que": "确却缺雀鹊阙瘸榷炔阕悫",
    "kun": "困昆坤捆琨锟鲲醌髡悃阃",
    "kuo": "扩括阔廓蛞",
    "la": "拉落垃腊啦辣蜡喇剌旯砬邋瘌",
    "lai": "来莱赖睐徕籁涞赉濑癞崃疠铼",
    "lan": "兰览蓝篮栏岚烂滥缆揽澜拦懒榄斓婪阑褴罱啉谰镧漤",
    "lin": "林临邻赁琳磷淋麟霖鳞凛拎遴蔺吝粼嶙躏廪檩啉辚膦瞵懔",
    "lang": "浪朗郎廊狼琅榔螂阆锒莨啷蒗稂",
    "liang": "量两粮良辆亮梁凉谅粱晾靓踉莨椋魉墚",
    "lao": "老劳落络牢捞涝烙姥佬崂唠酪潦痨醪铑铹栳耢",
    "mu": "目模木亩幕母牧莫穆姆墓慕牟牡募睦缪沐暮拇姥钼苜仫毪坶",
    "le": "了乐勒肋叻鳓嘞仂泐",
    "lei": "类累雷勒泪蕾垒磊擂镭肋羸耒儡嫘缧酹嘞诔檑",
    "sui": "随岁虽碎尿隧遂髓穗绥隋邃睢祟濉燧谇眭荽",
    "lie": "列烈劣裂猎冽咧趔洌鬣埒捩躐",
    "leng": "冷愣棱楞塄",
    "ling": "领令另零灵龄陵岭凌玲铃菱棱伶羚苓聆翎泠瓴囹绫呤棂蛉酃鲮柃",
    "lia": "俩",
    "liao": "了料疗辽廖聊寥缪僚燎缭撂撩嘹潦镣寮蓼獠钌尥鹩",
    "liu": "流刘六留柳瘤硫溜碌浏榴琉馏遛鎏骝绺镏旒熘鹨锍",
    "lun": "论轮伦仑纶沦抡囵",
    "lv": "率律旅绿虑履吕铝屡氯缕滤侣驴榈闾偻褛捋膂稆",
    "lou": "楼露漏陋娄搂篓喽镂偻瘘髅耧蝼嵝蒌",
    "mao": "贸毛矛冒貌茂茅帽猫髦锚懋袤牦卯铆耄峁瑁蟊茆蝥旄泖昴瞀",
    "long": "龙隆弄垄笼拢聋陇胧珑窿茏咙砻垅泷栊癃",
    "nong": "农浓弄脓侬哝",
    "shuang": "双爽霜孀泷",
    "shu": "术书数属树输束述署朱熟殊蔬舒疏鼠淑叔暑枢墅俞曙抒竖蜀薯梳戍恕孰沭赎庶漱塾倏澍纾姝菽黍腧秫毹殳疋摅",
    "shuai": "率衰帅摔甩蟀",
    "lve": "略掠锊",
    "ma": "么马吗摩麻码妈玛嘛骂抹蚂唛蟆犸杩",
    "me": "么麽",
    "mai": "买卖麦迈脉埋霾荬劢",
    "man": "满慢曼漫埋蔓瞒蛮鳗馒幔谩螨熳缦镘颟墁鞔",
    "mi": "米密秘迷弥蜜谜觅靡泌眯麋猕谧咪糜宓汨醚嘧弭脒冖幂祢縻蘼芈糸敉",
    "men": "们门闷瞒汶扪焖懑鞔钔",
    "mang": "忙盲茫芒氓莽蟒邙硭漭",
    "meng": "蒙盟梦猛孟萌氓朦锰檬勐懵蟒蜢虻黾蠓艨甍艋瞢礞",
    "miao": "苗秒妙描庙瞄缪渺淼藐缈邈鹋杪眇喵",
    "mou": "某谋牟缪眸哞鍪蛑侔厶",
    "miu": "缪谬",
    "mei": "美没每煤梅媒枚妹眉魅霉昧媚玫酶镁湄寐莓袂楣糜嵋镅浼猸鹛",
    "wen": "文问闻稳温纹吻蚊雯紊瘟汶韫刎璺玟阌",
    "mie": "灭蔑篾乜咩蠛",
    "ming": "明名命鸣铭冥茗溟酩瞑螟暝",
    "na": "内南那纳拿哪娜钠呐捺衲镎肭",
    "nei": "内那哪馁",
    "nuo": "难诺挪娜糯懦傩喏搦锘",
    "ruo": "若弱偌箬",
    "nang": "囊馕囔曩攮",
    "nao": "脑闹恼挠瑙淖孬垴铙桡呶硇猱蛲",
    "ni": "你尼呢泥疑拟逆倪妮腻匿霓溺旎昵坭铌鲵伲怩睨猊",
    "nen": "嫩恁",
    "neng": "能",
    "nin": "您恁",
    "niao": "鸟尿溺袅脲茑嬲",
    "nie": "摄聂捏涅镍孽捻蘖啮蹑嗫臬镊颞乜陧",
    "niang": "娘酿",
    "ning": "宁凝拧泞柠咛狞佞聍甯",
    "nu": "努怒奴弩驽帑孥胬",
    "nv": "女钕衄恧",
    "ru": "入如女乳儒辱汝茹褥孺濡蠕嚅缛溽铷洳薷襦颥蓐",
    "nuan": "暖",
    "nve": "虐疟",
    "re": "热若惹喏",
    "ou": "区欧偶殴呕禺藕讴鸥瓯沤耦怄",
    "pao": "跑炮泡抛刨袍咆疱庖狍匏脬",
    "pou": "剖掊裒",
    "pen": "喷盆湓",
    "pie": "瞥撇苤氕丿",
    "pin": "品贫聘频拼拚颦姘嫔榀牝",
    "se": "色塞瑟涩啬穑铯槭",
    "qing": "情青清请亲轻庆倾顷卿晴氢擎氰罄磬蜻箐鲭綮苘黥圊檠謦",
    "zan": "赞暂攒堑昝簪糌瓒錾趱拶",
    "shao": "少绍召烧稍邵哨韶捎勺梢鞘芍苕劭艄筲杓潲",
    "sao": "扫骚嫂梢缫搔瘙臊埽缲鳋",
    "sha": "沙厦杀纱砂啥莎刹杉傻煞鲨霎嗄痧裟挲铩唼歃",
    "xuan": "县选宣券旋悬轩喧玄绚渲璇炫萱癣漩眩暄煊铉楦泫谖痃碹揎镟儇",
    "ran": "然染燃冉苒髯蚺",
    "rang": "让壤攘嚷瓤穰禳",
    "rao": "绕扰饶娆桡荛",
    "reng": "仍扔",
    "ri": "日",
    "rou": "肉柔揉糅鞣蹂",
    "ruan": "软阮朊",
    "run": "润闰",
    "sa": "萨洒撒飒卅仨脎",
    "suo": "所些索缩锁莎梭琐嗦唆唢娑蓑羧挲桫嗍睃",
    "sai": "思赛塞腮噻鳃",
    "shui": "说水税谁睡氵",
    "sang": "桑丧嗓搡颡磉",
    "sen": "森",
    "seng": "僧",
    "shai": "筛晒",
    "shang": "上商尚伤赏汤裳墒晌垧觞殇熵绱",
    "xing": "行省星腥猩惺兴刑型形邢饧醒幸杏性姓陉荇荥擤悻硎",
    "shou": "收手受首售授守寿瘦兽狩绶艏扌",
    "shuo": "说数硕烁朔铄妁槊蒴搠",
    "su": "速素苏诉缩塑肃俗宿粟溯酥夙愫簌稣僳谡涑蔌嗉觫",
    "shua": "刷耍唰",
    "shuan": "栓拴涮闩",
    "shun": "顺瞬舜吮",
    "song": "送松宋讼颂耸诵嵩淞怂悚崧凇忪竦菘",
    "sou": "艘搜擞嗽嗖叟馊薮飕嗾溲锼螋瞍",
    "sun": "损孙笋荪榫隼狲飧",
    "teng": "腾疼藤滕誊",
    "tie": "铁贴帖餮萜",
    "tu": "土突图途徒涂吐屠兔秃凸荼钍菟堍酴",
    "wai": "外歪崴",
    "wang": "王望往网忘亡旺汪枉妄惘罔辋魍",
    "weng": "翁嗡瓮蓊蕹",
    "zhua": "抓挝爪",
    "yang": "样养央阳洋扬杨羊详氧仰秧痒漾疡泱殃恙鸯徉佯怏炀烊鞅蛘",
    "xiong": "雄兄熊胸凶匈汹芎",
    "yo": "哟唷",
    "yong": "用永拥勇涌泳庸俑踊佣咏雍甬镛臃邕蛹恿慵壅痈鳙墉饔喁",
    "za": "杂扎咱砸咋匝咂拶",
    "zai": "在再灾载栽仔宰哉崽甾",
    "zao": "造早遭枣噪灶燥糟凿躁藻皂澡蚤唣",
    "zei": "贼",
    "zen": "怎谮",
    "zeng": "增曾综赠憎锃甑罾缯",
    "zhei": "这",
    "zou": "走邹奏揍诹驺陬楱鄹鲰",
    "zhuai": "转拽",
    "zun": "尊遵鳟樽撙",
    "dia": "嗲",
    "nou": "耨"
  };

  var dict = {}; // 存储所有字典数据
  var pinyinUtil = {
    /**
     * 解析各种字典文件，所需的字典文件必须在本JS之前导入
    */
    parseDict: function parseDict() {


      if (pinyin_dict_notone) {
        dict.notone = {};
        dict.py2hz = pinyin_dict_notone; // 拼音转汉字

        for (var i in pinyin_dict_notone) {
          var _temp = pinyin_dict_notone[i];

          for (var j = 0, len = _temp.length; j < len; j++) {
            dict.notone[_temp[j]] = i; // 不考虑多音字
          }
        }
      } // 如果导入了 pinyin_dict_withtone.js
    },

    /**
     * 根据汉字获取拼音，如果不是汉字直接返回原字符
     * @param chinese 要转换的汉字
     * @param splitter 分隔字符，默认用空格分隔
     * @param withtone 返回结果是否包含声调，默认是
     * @param polyphone 是否支持多音字，默认否
     */
    getPinyin: function getPinyin(chinese, splitter, withtone, polyphone) {
      if (!chinese || /^ +$/g.test(chinese)) return '';
      splitter = splitter == undefined ? ' ' : splitter;
      withtone = withtone == undefined ? true : withtone;
      polyphone = polyphone == undefined ? false : polyphone;
      var result = [];

      if (dict.withtone) // 优先使用带声调的字典文件
        {
          for (var i = 0, len = chinese.length; i < len; i++) {
            var pinyin = dict.withtone[chinese[i]];

            if (pinyin) {
              if (!polyphone) pinyin = pinyin.replace(/ .*$/g, ''); // 如果不需要多音字

              if (!withtone) pinyin = this.removeTone(pinyin); // 如果不需要声调
            }

            result.push(pinyin || chinese[i]);
          }
        } else if (dict.notone) // 使用没有声调的字典文件
        {
          if (withtone) console.warn('pinyin_dict_notone 字典文件不支持声调！');
          if (polyphone) console.warn('pinyin_dict_notone 字典文件不支持多音字！');

          for (var _i3 = 0, _len3 = chinese.length; _i3 < _len3; _i3++) {
            var temp = chinese.charAt(_i3);
            result.push(dict.notone[temp] || temp);
          }
        } else {
        throw '抱歉，未找到合适的拼音字典文件！';
      }

      if (!polyphone) return result.join(splitter);else {
        return handlePolyphone(result, ' ', splitter);
      }
    },

    /**
     * 获取汉字的拼音首字母
     * @param str 汉字字符串，如果遇到非汉字则原样返回
     * @param polyphone 是否支持多音字，默认false，如果为true，会返回所有可能的组合数组
     */
    getFirstLetter: function getFirstLetter(str, polyphone) {
      polyphone = polyphone == undefined ? false : polyphone;
      if (!str || /^ +$/g.test(str)) return '';

      if (dict.firstletter) // 使用首字母字典文件
        {
          var result = [];

          for (var i = 0; i < str.length; i++) {
            var unicode = str.charCodeAt(i);
            var ch = str.charAt(i);

            if (unicode >= 19968 && unicode <= 40869) {
              ch = dict.firstletter.all.charAt(unicode - 19968);
              if (polyphone) ch = dict.firstletter.polyphone[unicode] || ch;
            }

            result.push(ch);
          }

          if (!polyphone) return result.join(''); // 如果不用管多音字，直接将数组拼接成字符串
          else return handlePolyphone(result, '', ''); // 处理多音字，此时的result类似于：['D', 'ZC', 'F']
        } else {
        var py = this.getPinyin(str, ' ', false, polyphone);
        py = py instanceof Array ? py : [py];
        var _result = [];

        for (var _i4 = 0; _i4 < py.length; _i4++) {
          _result.push(py[_i4].replace(/(^| )(\w)\w*/g, function (m, $1, $2) {
            return $2.toUpperCase();
          }));
        }

        if (!polyphone) return _result[0];else return simpleUnique(_result);
      }
    },

    /**
    * 拼音转汉字，只支持单个汉字，返回所有匹配的汉字组合
    * @param pinyin 单个汉字的拼音，不能包含声调
    */
    getHanzi: function getHanzi(pinyin) {
      if (!dict.py2hz) {
        throw '抱歉，未找到合适的拼音字典文件！';
      }

      return dict.py2hz[pinyin] || '';
    },

    /**
    * 去除拼音中的声调，比如将 xiǎo míng tóng xué 转换成 xiao ming tong xue
    * @param pinyin 需要转换的拼音
    */
    removeTone: function removeTone(pinyin) {
      var toneMap = {
        "ā": "a1",
        "á": "a2",
        "ǎ": "a3",
        "à": "a4",
        "ō": "o1",
        "ó": "o2",
        "ǒ": "o3",
        "ò": "o4",
        "ē": "e1",
        "é": "e2",
        "ě": "e3",
        "è": "e4",
        "ī": "i1",
        "í": "i2",
        "ǐ": "i3",
        "ì": "i4",
        "ū": "u1",
        "ú": "u2",
        "ǔ": "u3",
        "ù": "u4",
        "ü": "v0",
        "ǖ": "v1",
        "ǘ": "v2",
        "ǚ": "v3",
        "ǜ": "v4",
        "ń": "n2",
        "ň": "n3",
        "": "m2"
      };
      return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function (m) {
        return toneMap[m][0];
      });
    }
  };
  /**
   * 处理多音字，将类似['D', 'ZC', 'F']转换成['DZF', 'DCF']
   * 或者将 ['chang zhang', 'cheng'] 转换成 ['chang cheng', 'zhang cheng']
   */

  function handlePolyphone(array, splitter, joinChar) {
    splitter = splitter || '';
    var result = [''],
        temp = [];

    for (var i = 0; i < array.length; i++) {
      temp = [];
      var t = array[i].split(splitter);

      for (var j = 0; j < t.length; j++) {
        for (var k = 0; k < result.length; k++) {
          temp.push(result[k] + (result[k] ? joinChar : '') + t[j]);
        }
      }

      result = temp;
    }

    return simpleUnique(result);
  }


  function simpleUnique(array) {
    var result = [];
    var hash = {};

    for (var i = 0; i < array.length; i++) {
      var key = _typeof(array[i]) + array[i];

      if (!hash[key]) {
        result.push(array[i]);
        hash[key] = true;
      }
    }

    return result;
  }

  pinyinUtil.parseDict();
  pinyinUtil.dict = dict; // window.pinyinUtil = pinyinUtil;

  var SimpleInputMethod =
  /*#__PURE__*/
  function () {
    function SimpleInputMethod(editor) {
      _classCallCheck(this, SimpleInputMethod);

      this.hanzi = ''; // 候选汉字

      this.pinyin = ''; // 候选拼音

      this.result = []; // 当前匹配到的汉字集合

      this.pageCurrent = 1; // 当前页

      this.pageSize = 4; // 每页大小

      this.pageCount = 0; // 总页数

      this.editor = editor;

      if (utils.isMobile) {
        this.pageSize = 8;
      }
    }
    /**
    * 初始化字典配置
    */


    _createClass(SimpleInputMethod, [{
      key: "initDict",
      value: function initDict() {
        var dict = pinyinUtil.dict;
        console.log({
          pinyinUtil: pinyinUtil
        });
        if (!dict.py2hz) throw '未找到合适的字典文件！'; // 这一步仅仅是给字母a-z扩充，例如根据b找不到相关汉字，就把bi的结果赋值给b
        // 当然这种方式只是很简单的实现，真正的拼音输入法肯定不能这么简单处理

        dict.py2hz2 = {};
        dict.py2hz2['i'] = 'i'; // i比较特殊，没有符合的汉字，所以特殊处理

        for (var i = 97; i <= 123; i++) {
          var ch = String.fromCharCode(i);

          if (!dict.py2hz[ch]) {
            for (var j in dict.py2hz) {
              if (j.indexOf(ch) == 0) {
                dict.py2hz2[ch] = dict.py2hz[j];
                break;
              }
            }
          }
        }
      }
      /**
      * 初始化DOM结构
      */

    }, {
      key: "initDom",
      value: function initDom(inputObj) {
        var parentdiv = window.$('<div></div>'); //创建一个父div

        parentdiv.attr('id', "simle_input_method_".concat(inputObj)); //给父div设置id

        parentdiv.attr('class', 'simple-input-method'); //添加css样式

        var childdiv = window.$('<div class = "pinyin"></div><div class="result"><ol></ol> <div class = "page-up-down"> <span class = "page-up disabled"> ▲ </span><span class="page-down disabled">▼</span> </div></div> '); //创建一个子div

        parentdiv.html(childdiv);
        var that = this; // 初始化汉字选择和翻页键的点击事件

        parentdiv.click(function (e) {
          var target = e.target;
          if (target.nodeName == 'LI') that.selectHanzi(_parseInt$2(target.dataset.idx));else if (target.nodeName == 'SPAN') {
            if (target.className.indexOf('page-up') > -1 && that.pageCurrent > 1) {
              that.pageCurrent--;
              that.refreshPage();
            } else if (target.className.indexOf('page-down') > -1 && that.pageCurrent < that.pageCount) {
              that.pageCurrent++;
              that.refreshPage();
            }
          }
        });
        var simpleInputMethodEditor = document.querySelector(".y-editor-".concat(inputObj, " #simle_input_method_").concat(inputObj));
        this.simpleInputMethodEditor = simpleInputMethodEditor;

        if (!simpleInputMethodEditor) {
          window.$(".y-editor-".concat(inputObj)).prepend(parentdiv);
        }
      }
    }, {
      key: "translateWord",
      value: function translateWord() {}
      /**
      * 初始化
      */

    }, {
      key: "init",
      value: function init(inputObj, data) {
        console.log({
          inputObj: inputObj,
          data: data
        });
        this.initDict();
        this.initDom(inputObj);
        this._target = window.$("#simle_input_method_".concat(inputObj));
        this._pinyinTarget = window.$("#simle_input_method_".concat(inputObj, " .pinyin"));
        this._resultTarget = window.$("#simle_input_method_".concat(inputObj, " .result ol"));
        var that = this;
        var obj = window.$(".y-editor-".concat(inputObj));
        this.obj = obj;

        for (var i = 1; i <= obj.length; i++) {
          var keyCode = data.charCodeAt();
          console.log({
            keyCode: keyCode
          });

          if (keyCode >= 97 && keyCode <= 122) // a-z
            {
              that.addChar(String.fromCharCode(keyCode), obj);
            } else if (keyCode == 21024 && that.pinyin && window.$("#simle_input_method_".concat(inputObj)).css("display") == "block") // 删除键
            {
              that.delChar();
            } else if (keyCode >= 48 && keyCode <= 53 && that.pinyin) // 1-9
            {
              that.selectHanzi(keyCode - 48);
            } else if (keyCode == 32 && that.pinyin) // 空格
            {
              that.selectHanzi(1);
            } else if (keyCode == 33 && that.pageCount > 0 && that.pageCurrent > 1) // 上翻页
            {
              that.pageCurrent--;
              that.refreshPage();
            } else if (keyCode == 20013) // 切换输入法
            {
              that.hide();
            } else if (keyCode == 34 && that.pageCount > 0 && that.pageCurrent < that.pageCount) // 下翻页
            {
              that.pageCurrent++;
              that.refreshPage();
            }
          /*if (preventDefault){
          that.preventDefault();
          }*/
          //});


          obj.focus(function (event) {
            // 如果选中的不是当前文本框，隐藏输入法
            if (that._input !== this) {
              that.hide();
            }
          });
          /*obj[i].addEventListener('focus', function() {
           // 如果选中的不是当前文本框，隐藏输入法
          if (that._input !== this){
          that.hide();
          }
          });*/
        }
      }
      /**
      * 单个拼音转单个汉字，例如输入 "a" 返回 "阿啊呵腌嗄吖锕"
      */

    }, {
      key: "getSingleHanzi",
      value: function getSingleHanzi(pinyin) {
        return pinyinUtil.dict.py2hz2[pinyin] || pinyinUtil.dict.py2hz[pinyin] || '';
      }
      /**
      * 拼音转汉字
      * @param pinyin 需要转换的拼音，如 zhongguo
      * @return 返回一个数组，格式类似：[["中","重","种","众","终","钟","忠"], "zhong'guo"]
      */

    }, {
      key: "getHanzi",
      value: function getHanzi(pinyin) {
        var result = this.getSingleHanzi(pinyin);
        if (result) return [result.split(''), pinyin];
        var temp = '';

        for (var i = 0, len = pinyin.length; i < len; i++) {
          temp += pinyin[i];
          result = this.getSingleHanzi(temp);
          if (!result) continue; // flag表示如果当前能匹配到结果、并且往后5个字母不能匹配结果，因为最长可能是5个字母，如 zhuang

          var flag = false;

          if (i + 1 < pinyin.length) {
            for (var j = 1, len2 = pinyin.length; j <= 5 && i + j < len2; j++) {
              if (this.getSingleHanzi(pinyin.substr(0, i + j + 1))) {
                flag = true;
                break;
              }
            }
          }

          if (!flag) return [result.split(''), pinyin.substr(0, i + 1) + "'" + pinyin.substr(i + 1)];
        }

        return [[], '']; // 理论上一般不会出现这种情况
      }
      /**
      * 选择某个汉字，i有效值为1-5
      */

    }, {
      key: "selectHanzi",
      value: function selectHanzi(i) {
        var hz = this.result[(this.pageCurrent - 1) * this.pageSize + i - 1];
        if (!hz) return;
        this.hanzi += hz;
        var idx = this.pinyin.indexOf("'");

        if (idx > 0) {
          this.pinyin = this.pinyin.substr(idx + 1);
          this.refresh();
        } else // 如果没有单引号，表示已经没有候选词了
          {
            //this._input.value += this.hanzi;
            var oldInput = this._input.val() == undefined ? "" : this._input.val();

            this._input.val(oldInput + this.hanzi);

            this.editor.answerMathField.write(this.hanzi);

            if (!utils.isMobile) {
              this.editor.answerMathField.focus();
            } //console.log("input id=" + this._input.attr("id") + "; old=" + oldInput + "  value=" + this._input.value);


            this.hide();
          }
      }
      /**
      * 将拼音转换成汉字候选词，并显示在界面上
      */

    }, {
      key: "refresh",
      value: function refresh() {
        var temp = this.getHanzi(this.pinyin.replace(/'/g, ''));
        this.result = temp[0];
        this.pinyin = temp[1];
        var count = this.result.length;
        this.pageCurrent = 1;
        this.pageCount = Math.ceil(count / this.pageSize);

        this._pinyinTarget.html(this.hanzi + this.pinyin);

        this.refreshPage();
      }
    }, {
      key: "refreshPage",
      value: function refreshPage() {
        var temp = this.result.slice((this.pageCurrent - 1) * this.pageSize, this.pageCurrent * this.pageSize);
        var html = '';
        var i = 0;
        temp.forEach(function (val) {
          html += '<li data-idx="' + ++i + '">' + val + '</li>';
        });

        var isDisUp = this._target.find(".page-up").hasClass("disabled");

        var isDisDown = this._target.find(".page-down").hasClass("disabled"); // console.log(this.pageCurrent);
        // console.log(this.pageCount);
        // console.log(isDisUp);
        // console.log(isDisDown);       


        if (this.pageCurrent == 1) {
          if (isDisDown) {
            this._target.find(".page-down").removeClass("disabled");
          }

          if (!isDisUp) {
            this._target.find(".page-up").addClass("disabled");
          }
        } else if (this.pageCurrent > 1) {
          if (isDisUp) {
            this._target.find(".page-up").removeClass("disabled");
          }
        }

        if (this.pageCurrent >= this.pageCount) {
          if (!isDisDown) {
            this._target.find(".page-down").addClass("disabled");
          }
        } // this._target.children(".page-up").css({ "opacity": this.pageCurrent > 1 ? '1' : '0' });
        // this._target.children(".page-down").css({ "opacity": this.pageCurrent < this.pageCount ? '1' : '0' });


        this._resultTarget.html(html);
      }
    }, {
      key: "addChar",
      value: function addChar(ch, obj) {
        console.log(this.pinyin, this.result);

        if (this.pinyin.length == 0 && this._target.css("display") == 'none') // 长度为1，显示输入法
          {
            this.show(obj);
          }

        this.pinyin += ch;
        this.refresh();
      }
    }, {
      key: "delChar",
      value: function delChar() {
        if (this.pinyin.length <= 1) {
          this.hide();
          return;
        }

        this.pinyin = this.pinyin.substr(0, this.pinyin.length - 1);
        this.refresh();
      }
    }, {
      key: "show",
      value: function show(obj) {
        var pos = GetPosition(obj);
        console.log({
          pos: pos
        });

        if (!utils.isMobile) {
          this._target.css({
            "top": '-100px'
          });

          this._target.css({
            "left": '0px'
          });

          obj.css({
            "top": pos.x + 100 + 'px',
            "left": pos.y + 'px'
          });
        } else {
          this._target.css({
            "top": -(pos.x / 1366 + 15.8359) + 'vw'
          });

          this._target.css({
            "left": pos.y / 1366 + 'vw'
          });
        } //console.info(pos.x + "," + pos.y + "click");


        this._input = obj;

        this._target.css({
          "display": "block"
        });

        console.log(this.result);
      }
    }, {
      key: "hide",
      value: function hide(change) {
        this.reset();

        this._target.css({
          "display": "none"
        });

        if (!utils.isMobile) {
          var pos = GetPosition(this.obj);
          this.obj.css({
            "top": pos.x - 100 + 'px',
            "left": pos.y + 'px'
          });
        }
      }
    }, {
      key: "reset",
      value: function reset() {
        this.hanzi = '';
        this.pinyin = '';
        this.result = [];
        this.pageCurrent = 1;
        this.pageCount = 0;

        this._pinyinTarget.html('');
      }
    }]);

    return SimpleInputMethod;
  }();

  function GetPosition(obj) {
    var position = {};
    position.x = window.$(obj).offset().top;
    position.y = window.$(obj).offset().left;
    return position;
  }

  var MathEditor =
  /*#__PURE__*/
  function () {
    function MathEditor(options, fn) {
      var _this = this;

      _classCallCheck(this, MathEditor);

      this.options = options;
      this.editorId = this.options.id;
      this.isMobile = false; //initiate as false
      // device detection

      if (utils.isMobile) {
        this.isMobile = true;
      }

      this.MQ = null;
      this.tabEnabled = false;
      this.answerMathField = typeof this.answerMathField != 'undefined' ? this.answerMathField : {};
      this.answerSpan = typeof this.answerSpan != 'undefined' ? this.answerSpan : {};
      this.topElements = {
        wrapper: null,
        toolbar: null,
        buttons: null
      };
      this.defaultOptionsParams = {
        general: '符号',
        en: '字母',
        zh: '中文'
      };
      this.default_toolbar_tabs = options.tabs && options.tabs.length > 0 ? options.tabs : ['general', 'en', 'zh'];
      this.default_sub_toolbar_tabs = {
        common: '常用',
        script: '角标',
        relation: '关系',
        brackets: '括号',
        chemical: '化学反应',
        exponent: '指数',
        geometric: '几何',
        interval: '区间',
        set: '集合',
        logarithm: '对数',
        radical: '根式',

        /*-----待增加--start----*/
        calculus: '微积分',
        matrix: '矩阵',

        /*-----待增加--end----*/
        serial: '序号',
        unit: '单位符号',
        numerals: '罗马数字',
        chinese: '常用汉字',
        alphabet: '希腊字母',
        equation: '方程'
      };
      this.buttonMeta = DefaultLaTexButton;
      this.keyboardKeys = KayBoardValue;
      this.default_toolbar_buttons = options.btns ? options.btns : ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'alpha', 'beta', 'gamma', 'theta', 'pi', 'delta', 'phi', 'epsilon', 'rho', 'omega', 'Delta', 'Omega', 'Phi', 'equal', 'ne', 'less_than', 'greater_than', 'greater_equal', 'less_equal', 'approx', 'cong', 'sim', 'simeq', 'degree', 'angle', 'perpendicular', 'parallel_to', 'triangle', 'parallelogram', 'bigcirc', 'wideparen', 'round_brackets', 'bracket', 'braces', 'modulus', 'lefttsrightm', 'lefttmrights', 'leftrightm', 'leftrights', 'in', 'notin', 'supseteq', 'subseteq', 'supset', 'subset', 'cap', 'cup', "complement", "complementu", "emptyset", 'square', 'cube', 'sup', 'lg', 'ln', 'log', 'square_root', 'cube_root', 'root', "equation", "binary_equations", "ternary_equations", "quaternion_equations", "serial_one", "serial_two", "serial_three", "serial_four", "serial_five", "serial_six", "serial_seven", "serial_eight", "serial_nine", "centigrade", "fahrenheit", "toarrow", "leftarrow", "uparrow", "downarrow", "xrightarrow_chemical", "xlongequal_chemical", "xrightleftharpoons_chemical", "r_superscript", "r_subscript", "sum_", "plus", "reduce", "multiplication", "division", "cdot", "xie", "plus_minus", "fraction", 'square_common', 'square_root_common', "r_superscript_common", "r_subscript_common", "r_sub_supscript_common", "percent", "dotx", "dot", "comma", "compare", "pi_common", 'modulus_common', "direc_duble_num", "direc_num", "factorial", "overrightarrow"]; // 移动
      // this.default_toolbar_buttons.forEach((btn) => {
      //   if (this.buttonMeta[btn]) {
      //     let obj = {
      //       'value': btn,
      //       'new_line': false,
      //       'type': 'write', 'class': 'ks', 'display': '1'
      //     }
      //     this.keyboardKeys['formula'].push(obj);
      //   }
      // })

      if (window.MathQuill) {
        this.MQ = window.MathQuill.getInterface(2);
        this.answerSpan = document.querySelector("#".concat(this.options.id));
        var config = {
          handlers: {
            edit: fn,
            enter: function enter() {
              console.log('enter');
            }
          }
        };
        this.answerMathField = this.MQ.MathField(this.answerSpan, config);
        this.template = new Template(this);
        this.simpleInputMethod = new SimpleInputMethod(this);

        if (!utils.isMobile) {
          this.drag = new Drag(this);
        } else {
          window.$("#".concat(this.options.id)).find('textarea').attr('readonly', 'readonly');
        }

        this.answerMathField.__controller.textarea.focus(function () {
          var keyBoard = document.querySelectorAll('.mt-editor-keyboard');
          [].slice.call(keyBoard).forEach(function (item, index) {
            if (!item.classList.contains(".y-editor-".concat(_this.editorId))) {
              item.classList.add('hide');
            }
          });

          var showStatus = _this.showStatus();

          if (showStatus) {
            _this.toggle();
          }
        });

        this.tabChange();
        this.buttonTask();
        this.zhButtonTask();
        this.anchorEditor();
        this.closeEditor();
        this.upercaseAndLowercase();
        this.initDelete();
      } else {
        console.error("Error: Can't find MathQuill.");
      }
    }
    /**
     * 获取当前输入框中的LaTeX值
     * @description 常用于实例之后获取输入框内文本
     */


    _createClass(MathEditor, [{
      key: "getValue",
      value: function getValue() {
        return this.answerMathField.latex();
      }
      /**
       * 初始化删除按钮
       * @description 键盘上删除文本框内容（含中文输入框）
       */

    }, {
      key: "initDelete",
      value: function initDelete() {
        var _this2 = this;

        this.deleteBtns = this.template.editorDelete;
        this.deleteBtns.addEventListener('click', function (e) {
          var simpleInputMethod = _this2.simpleInputMethod.simpleInputMethodEditor;

          if (simpleInputMethod && simpleInputMethod.style.display !== "none") {
            _this2.simpleInputMethod.delChar();
          } else {
            console.log({
              simpleInputMethod: simpleInputMethod
            });

            _this2.answerMathField.keystroke('Backspace');
          }
        });
      }
      /**
       * 初始化顶层tab切换功能
       * @description 
       */

    }, {
      key: "tabChange",
      value: function tabChange() {
        var _this3 = this;

        var tabLink = document.querySelectorAll(".y-editor-".concat(this.editorId, " .tab-link"));
        var tabContent = document.querySelectorAll(".y-editor-".concat(this.editorId, " .tab-content-editor"));
        var subTabContent = document.querySelectorAll(".y-editor-".concat(this.editorId, " .sub-tab"));
        document.querySelector(".tabs-".concat(this.editorId)).addEventListener('click', function (e) {
          if (e.target.classList.contains('tab-link')) {
            [].slice.call(tabLink).forEach(function (item, index) {
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });
            e.target.classList.add('current');
            var tabId = e.target.dataset.tab;
            [].slice.call(tabContent).forEach(function (item, index) {
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });
            document.querySelector("#".concat(tabId)).classList.add('current');
            [].slice.call(subTabContent).forEach(function (item, index) {
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });

            if (tabId == "tab-en-".concat(_this3.editorId)) {
              if (utils.isMobile) {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .tab-delete")).style.display = 'none';
              } else {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-right")).style.display = 'none';
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-left")).style.display = 'none';

                if (_this3.simpleInputMethod._pinyinTarget && document.querySelector("#simle_input_method_".concat(_this3.editorId)).style.display == 'block') {
                  _this3.simpleInputMethod.hide();
                }
              }

              document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-tab-en")).classList.add('current');
            } else if (tabId == "tab-general-".concat(_this3.editorId)) {
              if (utils.isMobile) {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .tab-delete")).style.display = 'flex';
              } else {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-right")).style.display = 'flex';
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-left")).style.display = 'flex';

                if (_this3.simpleInputMethod._pinyinTarget && document.querySelector("#simle_input_method_".concat(_this3.editorId)).style.display == 'block') {
                  _this3.simpleInputMethod.hide();
                }
              }

              document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-tab-latex")).classList.add('current');
            } else if (tabId == "tab-zh-".concat(_this3.editorId)) {
              if (utils.isMobile) {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .tab-delete")).style.display = 'none';
              } else {
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-right")).style.display = 'none';
                document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-scroll-left")).style.display = 'none';
              }

              document.querySelector(".y-editor-".concat(_this3.editorId, " .sub-tab-zh")).classList.add('current');
            }
          }
        });
      }
      /**
       * 初始化字母键盘的英文字母大写小写切换
       * @description 
       */

    }, {
      key: "upercaseAndLowercase",
      value: function upercaseAndLowercase() {
        var tabEn = document.querySelector(".y-editor-".concat(this.editorId, " .sub-tab-en"));
        var subTabLinkEn = document.querySelectorAll(".y-editor-".concat(this.editorId, " .sub-tab-en .sub-tab-link"));
        var tabContentEnSpan = document.querySelectorAll("#tab-en-".concat(this.editorId, " .matheditor-btn-span")); // console.log({tabEn, subTabLinkEn});

        tabEn.addEventListener('click', function (e) {
          if (e.target.classList.contains('sub-tab-link')) {
            [].slice.call(subTabLinkEn).forEach(function (item, index) {
              // console.log({item})
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });
            e.target.classList.add('current');
            var subTabDataset = e.target.dataset.tab; // console.log({subTabDataset});
            // [].slice.call(tabContentEnSpan).forEach((spanItem, spanIndex) => {
            //   console.log({subTabDataset, spanItem})
            //   if (subTabDataset == 'sub-tab-lowercase') {
            //     spanItem.dataset.latex = spanItem.dataset.latex.toLowerCase();
            //     spanItem.innerText =  spanItem.innerText.toLowerCase();
            //   } else {
            //     spanItem.dataset.latex = spanItem.dataset.latex.toUpperCase();
            //     spanItem.innerText =  spanItem.innerText.toUpperCase();
            //   }
            // })

            if (subTabDataset == 'sub-tab-lowercase') {
              [].slice.call(tabContentEnSpan).forEach(function (spanItem, spanIndex) {
                spanItem.dataset.latex = spanItem.dataset.latex.toLowerCase();
                spanItem.innerText = spanItem.innerText.toLowerCase();
              });
            } else {
              [].slice.call(tabContentEnSpan).forEach(function (spanItem, spanIndex) {
                spanItem.dataset.latex = spanItem.dataset.latex.toUpperCase();
                spanItem.innerText = spanItem.innerText.toUpperCase();
              });
            }
          }
        });
      }
      /**
       * 键盘按键功能
       * @description 公式符号区域
       */

    }, {
      key: "buttonTask",
      value: function buttonTask() {
        var _this4 = this;

        var matheditorBtns = document.querySelectorAll("#tab-general-".concat(this.editorId, " .matheditor-btn-span,#tab-en-").concat(this.editorId, " .matheditor-btn-span")); // console.log(this.answerMathField);

        [].slice.call(matheditorBtns).forEach(function (item, index) {
          item.addEventListener('click', function (e) {
            var latex = item.dataset.latex;

            if (latex.toLowerCase() !== 'capslock' && latex.toLowerCase() !== 'backspace') {
              _this4.answerMathField.write(latex);

              if (!utils.isMobile) {
                _this4.answerMathField.focus();
              }

              for (var i = 1; i <= item.dataset.movefor; i++) {
                if (!utils.isMobile && item.dataset.moveto != 'Right') {
                  _this4.answerMathField.keystroke(item.dataset.moveto);
                }
              }
            } else if (latex.toLowerCase() === 'capslock') {
              item.style.textTransform = 'uppercase';
              var tabContentEnSpan = document.querySelectorAll("#tab-en-".concat(_this4.editorId, " .matheditor-btn-span"));

              _this4.toggleCase(item);

              var caseStatus = _this4.caseStatus(item);

              if (caseStatus) {
                [].slice.call(tabContentEnSpan).forEach(function (spanItem, spanIndex) {
                  spanItem.dataset.latex = spanItem.dataset.latex.toLowerCase();

                  if (spanItem.innerText) {
                    spanItem.innerText = spanItem.innerText.toLowerCase();
                  }
                });
              } else {
                [].slice.call(tabContentEnSpan).forEach(function (spanItem, spanIndex) {
                  spanItem.dataset.latex = spanItem.dataset.latex.toUpperCase();

                  if (spanItem.innerText) {
                    spanItem.innerText = spanItem.innerText.toUpperCase();
                  }
                });
              }
            } else if (latex.toLowerCase() === 'backspace') {
              var simpleInputMethod = _this4.simpleInputMethod.simpleInputMethodEditor;

              if (simpleInputMethod && simpleInputMethod.style.display !== "none") {
                _this4.simpleInputMethod.delChar();
              } else {
                console.log({
                  simpleInputMethod: simpleInputMethod
                });

                _this4.answerMathField.keystroke('Backspace');
              }
            }
          }); // item.onmousedown =  (e) => {
          //   console.log({e})
          //   item.style.background = 'linear-gradient(rgba(170,255,248,1) 0%,rgba(103,216,255,1) 5%,rgba(49,179,255,1) 50%, rgba(103,216,255,1) 95%, rgba(170,255,248,1) 100%)';
          // }
          // item.onmouseover = (e) => {
          //   item.style.border = '0.0732vw solid rgba(213,227,240,1)'
          //   item.style.background = 'linear-gradient(360deg,rgba(238,249,255,1) 0%,rgba(255,255,255,1) 100%)';
          // }
        });
      }
      /**
       * 键盘按键功能
       * @description 中文区域
       */

    }, {
      key: "zhButtonTask",
      value: function zhButtonTask() {
        var _this5 = this;

        // console.log('zhButtonTask')
        var matheditorBtns = document.querySelectorAll("#tab-zh-".concat(this.editorId, " .matheditor-btn-span")); // console.log({matheditorBtns});

        [].slice.call(matheditorBtns).forEach(function (item, index) {
          item.addEventListener('click', function (e) {
            var latex = item.dataset.latex; // this.answerMathField.write(latex);
            // this.answerMathField.focus();
            // for (let i = 1; i <= item.dataset.movefor; i++) {
            //   this.answerMathField.keystroke(item.dataset.moveto);
            // }

            _this5.simpleInputMethod.init("".concat(_this5.editorId), latex);

            if (latex.toLowerCase() === 'backspace') {
              var simpleInputMethod = _this5.simpleInputMethod.simpleInputMethodEditor;

              if (simpleInputMethod && simpleInputMethod.style.display !== "none") {
                _this5.simpleInputMethod.delChar();
              } else {
                console.log({
                  simpleInputMethod: simpleInputMethod
                });

                _this5.answerMathField.keystroke('Backspace');
              }
            }
          });
        });
      }
      /**
       * 滚动锚点
       * @description 按键区域滚动锚点子tab栏切换，以及子tab切换按键区域滚动
       */

    }, {
      key: "anchorEditor",
      value: function anchorEditor() {
        var editorSubTab = document.querySelector(".tab-footer-".concat(this.editorId, " .sub-tab-latex"));
        var subTabLinks = document.querySelectorAll(".y-editor-".concat(this.editorId, " .sub-tab-latex .sub-tab-link"));
        var tabGeneralEditor = document.querySelector("#tab-general-".concat(this.editorId));
        var subTabContentMe = document.querySelectorAll(".y-editor-".concat(this.editorId, " .sub-tab-content-me"));
        var subTabLeft = document.querySelector(".y-editor-".concat(this.editorId, " .sub-scroll-left"));
        var subTabRight = document.querySelector(".y-editor-".concat(this.editorId, " .sub-scroll-right")); // console.log(`#tab-general-${this.editorId}`)

        editorSubTab.addEventListener('click', function (e) {
          console.log({
            e: e
          });

          if (e.target.classList.contains('sub-tab-link')) {
            var clickTab = e.target.dataset.tab;
            Array.prototype.slice.call(subTabLinks).forEach(function (item, i) {
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });
            document.querySelector("#".concat(clickTab)).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            });
            e.target.classList.add('current');
          } else if (e.target.parentNode.classList.contains('sub-tab-link')) {
            var _clickTab = e.target.parentNode.dataset.tab;
            Array.prototype.slice.call(subTabLinks).forEach(function (item, i) {
              if (item.classList.contains('current')) {
                item.classList.remove('current');
              }
            });
            document.querySelector("#".concat(_clickTab)).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest"
            });
            e.target.classList.add('current');
          }
        });
        tabGeneralEditor.addEventListener('scroll', utils.debounce(function () {
          Array.prototype.slice.call(subTabContentMe).forEach(function (item, i) {
            var itemIsVisible = utils.isViewVisible(item, tabGeneralEditor); // console.log({itemIsVisible})

            if (itemIsVisible) {
              Array.prototype.slice.call(subTabLinks).forEach(function (subItem, i) {
                if (subItem.classList.contains('current')) {
                  subItem.classList.remove('current');
                }

                if (subItem.dataset.tab == item.id) {
                  // console.log({subItem})
                  subItem.classList.add('current');
                  subItem.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "nearest"
                  });
                }
              });
            }
          });
        }, 200, false));
        subTabLeft.addEventListener('click', function (e) {
          editorSubTab.scrollBy({
            left: -200,
            behavior: 'smooth'
          });
        });
        subTabRight.addEventListener('click', function (e) {
          editorSubTab.scrollBy({
            left: 200,
            behavior: 'smooth'
          });
        });
      }
      /**
       * 关闭按钮
       * @description 关闭按钮
       */

    }, {
      key: "closeEditor",
      value: function closeEditor() {
        var _this6 = this;

        this.template.closeTab.addEventListener('click', function () {
          _this6.toggle();
        });
      }
      /**
       * 隐藏
       * @description 点击关闭按钮后隐藏
       */

    }, {
      key: "hide",
      value: function hide() {
        this.template.container.classList.add('hide');

        if (utils.isMobile) {
          var placeholderContainer = document.querySelector('.editor-placeholder');

          if (placeholderContainer) {
            placeholderContainer.classList.add('hide');
          }

          window.scrollBy({
            top: -280,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
      /**
       * 打开
       * @description 打开编辑器看板
       */

    }, {
      key: "show",
      value: function show() {
        this.template.container.classList.remove('hide');

        if (utils.isMobile) {
          var placeholderContainer = document.querySelector('.editor-placeholder');

          if (placeholderContainer) {
            placeholderContainer.classList.remove('hide');
          }

          var rect = document.querySelector("#".concat(this.editorId)).getBoundingClientRect();
          console.log({
            rect: rect
          }); // document.body.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

          if (document.documentElement.clientHeight - (rect.top + rect.height + 100) < 289) {
            window.scrollBy({
              top: 280,
              left: 0,
              behavior: 'smooth'
            });
          }
        } // else {
        // let containerPos = utils.GetPosition(`#${this.editorId}`);
        // let rect = document.querySelector(`#${this.editorId}`).getClientRects();
        // let rectEditor = document.querySelector(`.y-editor-${this.editorId}`).getClientRects();
        // console.log({containerPos, rect, rectEditor}, document.documentElement.clientHeight, rect[0].bottom)
        // if ((document.documentElement.clientHeight - rect[0].bottom) < rectEditor[0].height) {
        //   this.template.container.style.top = (rect[0].top - rectEditor[0].height) + 'px';
        //   this.template.container.style.left = (containerPos.y - 60) + 'px' ;
        // } else {
        //   this.template.container.style.top = (containerPos.x ) + 54 + 'px';
        //   this.template.container.style.left = (containerPos.y - 60) + 'px' ;
        // }
        // }

      }
    }, {
      key: "uppercase",
      value: function uppercase(item) {
        item.classList.add('uppercase');
      }
    }, {
      key: "lowercase",
      value: function lowercase(item) {
        item.classList.remove('uppercase');
      }
    }, {
      key: "toggleCase",
      value: function toggleCase(item) {
        var caseStatus = this.caseStatus(item);
        console.log({
          item: item,
          caseStatus: caseStatus
        });

        if (caseStatus) {
          this.lowercase(item);
        } else {
          this.uppercase(item);
        }
      }
    }, {
      key: "caseStatus",
      value: function caseStatus(item) {
        return item.classList.contains('uppercase');
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var showStatus = this.showStatus();

        if (showStatus) {
          this.show();
        } else {
          this.hide();
        }
      }
    }, {
      key: "showStatus",
      value: function showStatus() {
        return this.template.container.classList.contains('hide');
      }
      /**
       * 销毁
       * @description 销毁编辑器看板
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var outterContainer = document.querySelector('.editor-outter-container');

        if (outterContainer) {
          outterContainer.remove();
        }
      }
    }]);

    return MathEditor;
  }();

  return MathEditor;

})));