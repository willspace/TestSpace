/**
 * Regular Component 基类，用于启动整页component
 * @author cheng-lin(cheng-lin@corp.netease.com)
 * pro/page/components/regular/BaseComponent
 */
NEJ.define([
  'pro/lib/regularjs/dist/regular',
  'base/element',
  './directive/index.js',
  './filter/index.js'
], function(x, e, directive, filters) {

  // BaseComponent与Hub没有任何关系， 它是整个工程的基础Regular组件(基类)，
  // 主要是作为容器使用, 你可以通过扩展BaseComponent来达到工程范围内的组件能力
  // 具体: http://regularjs.github.io/guide/zh/core/use.html
  //
  var BaseComponent = Regular.extend({
      // TODO
      config: function(data) {
        if (data.css) {
          data.css = e._$pushCSSText(data.css)
        }
      }
    })
    .directive(directive.directives)
    .event(directive.events)
    .filter(filters)

  return BaseComponent;
})