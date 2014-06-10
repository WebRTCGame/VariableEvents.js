window.VariableEvents = function(a, c, d, e, g, h, k) {
  var b = "_" + c.toString();
  a[b] = {a:d, b:e, e:g, c:h, d:k};
  Object.defineProperty(a, c, {get:function() {
    "function" === typeof a[b].b && a[b].b(a[b].a);
    return "function" === typeof a[b].c ? a[b].c(a[b].a) : a[b].a;
  }, set:function(c) {
    a[b].a = "function" === typeof a[b].d ? a[b].d(c) : c;
    "function" === typeof a[b].e && a[b].e(a[b].a);
  }, enumerable:!0, configurable:!0});
};
