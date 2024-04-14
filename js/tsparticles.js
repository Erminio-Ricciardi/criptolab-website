/*! tsParticles v1.41.5 by Matteo Bruni */
!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var i = e();
    for (var o in i) ("object" == typeof exports ? exports : t)[o] = i[o];
  }
})(window, function () {
  return (function () {
    "use strict";
    var t,
      e,
      i,
      o,
      s,
      n = {},
      a = {};
    function r(t) {
      var e = a[t];
      if (void 0 !== e) return e.exports;
      var i = (a[t] = { exports: {} });
      return n[t](i, i.exports, r), i.exports;
    }
    (r.m = n),
      (t = []),
      (r.O = function (e, i, o, s) {
        if (!i) {
          var n = 1 / 0;
          for (d = 0; d < t.length; d++) {
            (i = t[d][0]), (o = t[d][1]), (s = t[d][2]);
            for (var a = !0, l = 0; l < i.length; l++)
              (!1 & s || n >= s) &&
              Object.keys(r.O).every(function (t) {
                return r.O[t](i[l]);
              })
                ? i.splice(l--, 1)
                : ((a = !1), s < n && (n = s));
            if (a) {
              t.splice(d--, 1);
              var c = o();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        s = s || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > s; d--) t[d] = t[d - 1];
        t[d] = [i, o, s];
      }),
      (r.F = {}),
      (r.E = function (t) {
        Object.keys(r.F).map(function (e) {
          r.F[e](t);
        });
      }),
      (i = Object.getPrototypeOf
        ? function (t) {
            return Object.getPrototypeOf(t);
          }
        : function (t) {
            return t.__proto__;
          }),
      (r.t = function (t, o) {
        if ((1 & o && (t = this(t)), 8 & o)) return t;
        if ("object" == typeof t && t) {
          if (4 & o && t.__esModule) return t;
          if (16 & o && "function" == typeof t.then) return t;
        }
        var s = Object.create(null);
        r.r(s);
        var n = {};
        e = e || [null, i({}), i([]), i(i)];
        for (
          var a = 2 & o && t;
          "object" == typeof a && !~e.indexOf(a);
          a = i(a)
        )
          Object.getOwnPropertyNames(a).forEach(function (e) {
            n[e] = function () {
              return t[e];
            };
          });
        return (
          (n.default = function () {
            return t;
          }),
          r.d(s, n),
          s
        );
      }),
      (r.d = function (t, e) {
        for (var i in e)
          r.o(e, i) &&
            !r.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
      }),
      (r.f = {}),
      (r.e = function (t) {
        return Promise.all(
          Object.keys(r.f).reduce(function (e, i) {
            return r.f[i](t, e), e;
          }, [])
        );
      }),
      (r.u = function (t) {
        return "tsparticles.pathseg.min.js";
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o = {}),
      (s = "tsparticles:"),
      (r.l = function (t, e, i, n) {
        if (o[t]) o[t].push(e);
        else {
          var a, l;
          if (void 0 !== i)
            for (
              var c = document.getElementsByTagName("script"), d = 0;
              d < c.length;
              d++
            ) {
              var h = c[d];
              if (
                h.getAttribute("src") == t ||
                h.getAttribute("data-webpack") == s + i
              ) {
                a = h;
                break;
              }
            }
          a ||
            ((l = !0),
            ((a = document.createElement("script")).charset = "utf-8"),
            (a.timeout = 120),
            r.nc && a.setAttribute("nonce", r.nc),
            a.setAttribute("data-webpack", s + i),
            (a.src = t)),
            (o[t] = [e]);
          var u = function (e, i) {
              (a.onerror = a.onload = null), clearTimeout(p);
              var s = o[t];
              if (
                (delete o[t],
                a.parentNode && a.parentNode.removeChild(a),
                s &&
                  s.forEach(function (t) {
                    return t(i);
                  }),
                e)
              )
                return e(i);
            },
            p = setTimeout(
              u.bind(null, void 0, { type: "timeout", target: a }),
              12e4
            );
          (a.onerror = u.bind(null, a.onerror)),
            (a.onload = u.bind(null, a.onload)),
            l && document.head.appendChild(a);
        }
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (function () {
        var t;
        r.g.importScripts && (t = r.g.location + "");
        var e = r.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
          var i = e.getElementsByTagName("script");
          i.length && (t = i[i.length - 1].src);
        }
        if (!t)
          throw new Error(
            "Automatic publicPath is not supported in this browser"
          );
        (t = t
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (r.p = t);
      })(),
      (function () {
        var t = { 155: 0, 649: 0 };
        (r.f.j = function (e, i) {
          var o = r.o(t, e) ? t[e] : void 0;
          if (0 !== o)
            if (o) i.push(o[2]);
            else {
              var s = new Promise(function (i, s) {
                o = t[e] = [i, s];
              });
              i.push((o[2] = s));
              var n = r.p + r.u(e),
                a = new Error();
              r.l(
                n,
                function (i) {
                  if (r.o(t, e) && (0 !== (o = t[e]) && (t[e] = void 0), o)) {
                    var s = i && ("load" === i.type ? "missing" : i.type),
                      n = i && i.target && i.target.src;
                    (a.message =
                      "Loading chunk " +
                      e +
                      " failed.\n(" +
                      s +
                      ": " +
                      n +
                      ")"),
                      (a.name = "ChunkLoadError"),
                      (a.type = s),
                      (a.request = n),
                      o[1](a);
                  }
                },
                "chunk-" + e,
                e
              );
            }
        }),
          (r.F.j = function (e) {
            if (!r.o(t, e) || void 0 === t[e]) {
              t[e] = null;
              var i = document.createElement("link");
              r.nc && i.setAttribute("nonce", r.nc),
                (i.rel = "prefetch"),
                (i.as = "script"),
                (i.href = r.p + r.u(e)),
                document.head.appendChild(i);
            }
          }),
          (r.O.j = function (e) {
            return 0 === t[e];
          });
        var e = function (e, i) {
            var o,
              s,
              n = i[0],
              a = i[1],
              l = i[2],
              c = 0;
            if (
              n.some(function (e) {
                return 0 !== t[e];
              })
            ) {
              for (o in a) r.o(a, o) && (r.m[o] = a[o]);
              if (l) var d = l(r);
            }
            for (e && e(i); c < n.length; c++)
              (s = n[c]), r.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
            return r.O(d);
          },
          i = (window.webpackChunktsparticles =
            window.webpackChunktsparticles || []);
        i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
      })(),
      r.O(
        0,
        [155],
        function () {
          r.E(404);
        },
        5
      );
    var l = {};
    function c(t, e, i) {
      return Math.min(Math.max(t, e), i);
    }
    function d(t, e, i, o) {
      return Math.floor((t * i + e * o) / (i + o));
    }
    function h(t) {
      const e = v(t);
      let i = p(t);
      return e === i && (i = 0), Math.random() * (e - i) + i;
    }
    function u(t) {
      return "number" == typeof t ? t : h(t);
    }
    function p(t) {
      return "number" == typeof t ? t : t.min;
    }
    function v(t) {
      return "number" == typeof t ? t : t.max;
    }
    function f(t, e) {
      if (t === e || (void 0 === e && "number" == typeof t)) return t;
      const i = p(t),
        o = v(t);
      return void 0 !== e
        ? { min: Math.min(i, e), max: Math.max(o, e) }
        : f(i, o);
    }
    function y(t) {
      const e = t.random,
        { enable: i, minimumValue: o } =
          "boolean" == typeof e ? { enable: e, minimumValue: 0 } : e;
      return u(i ? f(t.value, o) : t.value);
    }
    function m(t, e) {
      const i = t.x - e.x,
        o = t.y - e.y;
      return { dx: i, dy: o, distance: Math.sqrt(i * i + o * o) };
    }
    function b(t, e) {
      return m(t, e).distance;
    }
    function g(t) {
      if ("number" == typeof t) return (t * Math.PI) / 180;
      switch (t) {
        case "top":
          return -Math.PI / 2;
        case "top-right":
          return -Math.PI / 4;
        case "right":
          return 0;
        case "bottom-right":
          return Math.PI / 4;
        case "bottom":
          return Math.PI / 2;
        case "bottom-left":
          return (3 * Math.PI) / 4;
        case "left":
          return Math.PI;
        case "top-left":
          return (-3 * Math.PI) / 4;
        case "none":
        default:
          return Math.random() * Math.PI * 2;
      }
    }
    function w(t) {
      const e = Qt.origin;
      return (e.length = 1), (e.angle = t), e;
    }
    function x(t, e, i, o) {
      return Qt.create(
        (t.x * (i - o)) / (i + o) + (2 * e.x * o) / (i + o),
        t.y
      );
    }
    function k(t, e) {
      switch (e) {
        case "ease-out-quad":
          return 1 - (1 - t) ** 2;
        case "ease-out-cubic":
          return 1 - (1 - t) ** 3;
        case "ease-out-quart":
          return 1 - (1 - t) ** 4;
        case "ease-out-quint":
          return 1 - (1 - t) ** 5;
        case "ease-out-expo":
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        case "ease-out-sine":
          return Math.sin((t * Math.PI) / 2);
        case "ease-out-back": {
          const e = 1.70158;
          return 1 + (e + 1) * Math.pow(t - 1, 3) + e * Math.pow(t - 1, 2);
        }
        case "ease-out-circ":
          return Math.sqrt(1 - Math.pow(t - 1, 2));
        default:
          return t;
      }
    }
    function P(t, e, i, o, s, n) {
      const a = { bounced: !1 };
      return (
        e.min >= o.min &&
          e.min <= o.max &&
          e.max >= o.min &&
          e.max <= o.max &&
          ((t.max >= i.min && t.max <= (i.max + i.min) / 2 && s > 0) ||
            (t.min <= i.max && t.min > (i.max + i.min) / 2 && s < 0)) &&
          ((a.velocity = s * -n), (a.bounced = !0)),
        a
      );
    }
    function M(t, e) {
      if (e instanceof Array) {
        for (const i of e) if (t.matches(i)) return !0;
        return !1;
      }
      return t.matches(e);
    }
    function z() {
      return (
        "undefined" == typeof window ||
        !window ||
        void 0 === window.document ||
        !window.document
      );
    }
    function C() {
      return z()
        ? (t) => setTimeout(t)
        : (t) =>
            (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              window.setTimeout
            )(t);
    }
    function T() {
      return z()
        ? (t) => clearTimeout(t)
        : (t) =>
            (
              window.cancelAnimationFrame ||
              window.webkitCancelRequestAnimationFrame ||
              window.mozCancelRequestAnimationFrame ||
              window.oCancelRequestAnimationFrame ||
              window.msCancelRequestAnimationFrame ||
              window.clearTimeout
            )(t);
    }
    function E(t, e) {
      return t === e || (e instanceof Array && e.indexOf(t) > -1);
    }
    async function S(t) {
      var e, i;
      try {
        await document.fonts.load(
          `${null !== (e = t.weight) && void 0 !== e ? e : "400"} 36px '${
            null !== (i = t.font) && void 0 !== i ? i : "Verdana"
          }'`
        );
      } catch (t) {}
    }
    function O(t) {
      return Math.floor(Math.random() * t.length);
    }
    function R(t, e, i = !0) {
      return t[void 0 !== e && i ? e % t.length : O(t)];
    }
    function A(t, e, i, o) {
      return I(D(t, null != i ? i : 0), e, o);
    }
    function I(t, e, i) {
      let o = !0;
      return (
        (i && "bottom" !== i) || (o = t.top < e.height),
        !o || (i && "left" !== i) || (o = t.right > 0),
        !o || (i && "right" !== i) || (o = t.left < e.width),
        !o || (i && "top" !== i) || (o = t.bottom > 0),
        o
      );
    }
    function D(t, e) {
      return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
    }
    function L(t, ...e) {
      for (const i of e) {
        if (null == i) continue;
        if ("object" != typeof i) {
          t = i;
          continue;
        }
        const e = Array.isArray(i);
        !e || ("object" == typeof t && t && Array.isArray(t))
          ? e || ("object" == typeof t && t && !Array.isArray(t)) || (t = {})
          : (t = []);
        for (const e in i) {
          if ("__proto__" === e) continue;
          const o = i[e],
            s = "object" == typeof o,
            n = t;
          n[e] = s && Array.isArray(o) ? o.map((t) => L(n[e], t)) : L(n[e], o);
        }
      }
      return t;
    }
    function H(t, e) {
      return e instanceof Array
        ? !!e.find((e) => e.enable && E(t, e.mode))
        : E(t, e.mode);
    }
    function q(t, e, i) {
      if (e instanceof Array)
        for (const o of e) {
          const e = o.mode;
          o.enable && E(t, e) && _(o, i);
        }
      else {
        const o = e.mode;
        e.enable && E(t, o) && _(e, i);
      }
    }
    function _(t, e) {
      const i = t.selectors;
      if (i instanceof Array) for (const o of i) e(o, t);
      else e(i, t);
    }
    function F(t, e) {
      if (e && t)
        return t instanceof Array
          ? t.find((t) => M(e, t.selectors))
          : M(e, t.selectors)
          ? t
          : void 0;
    }
    function V(t) {
      return {
        position: t.getPosition(),
        radius: t.getRadius(),
        mass: t.getMass(),
        velocity: t.velocity,
        factor: Qt.create(
          y(t.options.bounce.horizontal),
          y(t.options.bounce.vertical)
        ),
      };
    }
    function B(t, e) {
      const { x: i, y: o } = t.velocity.sub(e.velocity),
        [s, n] = [t.position, e.position],
        { dx: a, dy: r } = m(n, s);
      if (i * a + o * r >= 0) {
        const i = -Math.atan2(r, a),
          o = t.mass,
          s = e.mass,
          n = t.velocity.rotate(i),
          l = e.velocity.rotate(i),
          c = x(n, l, o, s),
          d = x(l, n, o, s),
          h = c.rotate(-i),
          u = d.rotate(-i);
        (t.velocity.x = h.x * t.factor.x),
          (t.velocity.y = h.y * t.factor.y),
          (e.velocity.x = u.x * e.factor.x),
          (e.velocity.y = u.y * e.factor.y);
      }
    }
    function W(t, e) {
      const i = D(t.getPosition(), t.getRadius()),
        o = P(
          { min: i.left, max: i.right },
          { min: i.top, max: i.bottom },
          { min: e.left, max: e.right },
          { min: e.top, max: e.bottom },
          t.velocity.x,
          y(t.options.bounce.horizontal)
        );
      o.bounced &&
        (void 0 !== o.velocity && (t.velocity.x = o.velocity),
        void 0 !== o.position && (t.position.x = o.position));
      const s = P(
        { min: i.top, max: i.bottom },
        { min: i.left, max: i.right },
        { min: e.top, max: e.bottom },
        { min: e.left, max: e.right },
        t.velocity.y,
        y(t.options.bounce.vertical)
      );
      s.bounced &&
        (void 0 !== s.velocity && (t.velocity.y = s.velocity),
        void 0 !== s.position && (t.position.y = s.position));
    }
    function j(t, e, i) {
      let o = i;
      return (
        o < 0 && (o += 1),
        o > 1 && (o -= 1),
        o < 1 / 6
          ? t + 6 * (e - t) * o
          : o < 0.5
          ? e
          : o < 2 / 3
          ? t + (e - t) * (2 / 3 - o) * 6
          : t
      );
    }
    function G(t) {
      if (t.startsWith("rgb")) {
        const e =
          /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(
            t
          );
        return e
          ? {
              a: e.length > 4 ? parseFloat(e[5]) : 1,
              b: parseInt(e[3], 10),
              g: parseInt(e[2], 10),
              r: parseInt(e[1], 10),
            }
          : void 0;
      }
      if (t.startsWith("hsl")) {
        const e =
          /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
            t
          );
        return e
          ? Q({
              a: e.length > 4 ? parseFloat(e[5]) : 1,
              h: parseInt(e[1], 10),
              l: parseInt(e[3], 10),
              s: parseInt(e[2], 10),
            })
          : void 0;
      }
      if (t.startsWith("hsv")) {
        const e =
          /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(
            t
          );
        return e
          ? ot({
              a: e.length > 4 ? parseFloat(e[5]) : 1,
              h: parseInt(e[1], 10),
              s: parseInt(e[2], 10),
              v: parseInt(e[3], 10),
            })
          : void 0;
      }
      {
        const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
          i = t.replace(
            e,
            (t, e, i, o, s) =>
              e + e + i + i + o + o + (void 0 !== s ? s + s : "")
          ),
          o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
        return o
          ? {
              a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
              b: parseInt(o[3], 16),
              g: parseInt(o[2], 16),
              r: parseInt(o[1], 16),
            }
          : void 0;
      }
    }
    function U(t, e, i = !0) {
      var o, s, n;
      if (void 0 === t) return;
      const a = "string" == typeof t ? { value: t } : t;
      let r;
      if ("string" == typeof a.value)
        r = a.value === Lt.randomColorValue ? at() : X(a.value);
      else if (a.value instanceof Array) {
        r = U({ value: R(a.value, e, i) });
      } else {
        const t = a.value,
          e = null !== (o = t.rgb) && void 0 !== o ? o : a.value;
        if (void 0 !== e.r) r = e;
        else {
          const e = null !== (s = t.hsl) && void 0 !== s ? s : a.value;
          if (void 0 !== e.h && void 0 !== e.l) r = Y(e);
          else {
            const e = null !== (n = t.hsv) && void 0 !== n ? n : a.value;
            void 0 !== e.h && void 0 !== e.v && (r = it(e));
          }
        }
      }
      return r;
    }
    function $(t, e, i = !0) {
      const o = U(t, e, i);
      return void 0 !== o ? N(o) : void 0;
    }
    function N(t) {
      const e = t.r / 255,
        i = t.g / 255,
        o = t.b / 255,
        s = Math.max(e, i, o),
        n = Math.min(e, i, o),
        a = { h: 0, l: (s + n) / 2, s: 0 };
      return (
        s != n &&
          ((a.s = a.l < 0.5 ? (s - n) / (s + n) : (s - n) / (2 - s - n)),
          (a.h =
            e === s
              ? (i - o) / (s - n)
              : (a.h =
                  i === s ? 2 + (o - e) / (s - n) : 4 + (e - i) / (s - n)))),
        (a.l *= 100),
        (a.s *= 100),
        (a.h *= 60),
        a.h < 0 && (a.h += 360),
        a
      );
    }
    function J(t) {
      var e;
      return null === (e = G(t)) || void 0 === e ? void 0 : e.a;
    }
    function X(t) {
      return G(t);
    }
    function Y(t) {
      const e = { b: 0, g: 0, r: 0 },
        i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
      if (0 === i.s) (e.b = i.l), (e.g = i.l), (e.r = i.l);
      else {
        const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
          o = 2 * i.l - t;
        (e.r = j(o, t, i.h + 1 / 3)),
          (e.g = j(o, t, i.h)),
          (e.b = j(o, t, i.h - 1 / 3));
      }
      return (
        (e.r = Math.floor(255 * e.r)),
        (e.g = Math.floor(255 * e.g)),
        (e.b = Math.floor(255 * e.b)),
        e
      );
    }
    function Q(t) {
      const e = Y(t);
      return { a: t.a, b: e.b, g: e.g, r: e.r };
    }
    function Z(t) {
      const e = t.l / 100,
        i = e + (t.s / 100) * Math.min(e, 1 - e),
        o = i ? 2 * (1 - e / i) : 0;
      return { h: t.h, s: 100 * o, v: 100 * i };
    }
    function K(t) {
      const e = Z(t);
      return { a: t.a, h: e.h, s: e.s, v: e.v };
    }
    function tt(t) {
      const e = t.v / 100,
        i = e * (1 - t.s / 100 / 2),
        o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i);
      return { h: t.h, l: 100 * i, s: 100 * o };
    }
    function et(t) {
      const e = tt(t);
      return { a: t.a, h: e.h, l: e.l, s: e.s };
    }
    function it(t) {
      const e = { b: 0, g: 0, r: 0 },
        i = t.h / 60,
        o = t.s / 100,
        s = t.v / 100,
        n = s * o,
        a = n * (1 - Math.abs((i % 2) - 1));
      let r;
      if (
        (i >= 0 && i <= 1
          ? (r = { r: n, g: a, b: 0 })
          : i > 1 && i <= 2
          ? (r = { r: a, g: n, b: 0 })
          : i > 2 && i <= 3
          ? (r = { r: 0, g: n, b: a })
          : i > 3 && i <= 4
          ? (r = { r: 0, g: a, b: n })
          : i > 4 && i <= 5
          ? (r = { r: a, g: 0, b: n })
          : i > 5 && i <= 6 && (r = { r: n, g: 0, b: a }),
        r)
      ) {
        const t = s - n;
        (e.r = Math.floor(255 * (r.r + t))),
          (e.g = Math.floor(255 * (r.g + t))),
          (e.b = Math.floor(255 * (r.b + t)));
      }
      return e;
    }
    function ot(t) {
      const e = it(t);
      return { a: t.a, b: e.b, g: e.g, r: e.r };
    }
    function st(t) {
      const e = { r: t.r / 255, g: t.g / 255, b: t.b / 255 },
        i = Math.max(e.r, e.g, e.b),
        o = i - Math.min(e.r, e.g, e.b);
      let s = 0;
      i === e.r
        ? (s = ((e.g - e.b) / o) * 60)
        : i === e.g
        ? (s = 60 * (2 + (e.b - e.r) / o))
        : i === e.b && (s = 60 * (4 + (e.r - e.g) / o));
      return { h: s, s: 100 * (i ? o / i : 0), v: 100 * i };
    }
    function nt(t) {
      const e = st(t);
      return { a: t.a, h: e.h, s: e.s, v: e.v };
    }
    function at(t) {
      const e = null != t ? t : 0;
      return {
        b: Math.floor(h(f(e, 256))),
        g: Math.floor(h(f(e, 256))),
        r: Math.floor(h(f(e, 256))),
      };
    }
    function rt(t, e) {
      return `rgba(${t.r}, ${t.g}, ${t.b}, ${null != e ? e : 1})`;
    }
    function lt(t, e) {
      return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null != e ? e : 1})`;
    }
    function ct(t, e) {
      return lt(tt(t), e);
    }
    function dt(t, e, i, o) {
      let s = t,
        n = e;
      return (
        void 0 === s.r && (s = Y(t)),
        void 0 === n.r && (n = Y(e)),
        { b: d(s.b, n.b, i, o), g: d(s.g, n.g, i, o), r: d(s.r, n.r, i, o) }
      );
    }
    function ht(t, e, i) {
      var o, s;
      if (i === Lt.randomColorValue) return at();
      if ("mid" !== i) return i;
      {
        const i =
            null !== (o = t.getFillColor()) && void 0 !== o
              ? o
              : t.getStrokeColor(),
          n =
            null !== (s = null == e ? void 0 : e.getFillColor()) && void 0 !== s
              ? s
              : null == e
              ? void 0
              : e.getStrokeColor();
        if (i && n && e) return dt(i, n, t.getRadius(), e.getRadius());
        {
          const t = null != i ? i : n;
          if (t) return Y(t);
        }
      }
    }
    function ut(t, e, i) {
      const o = "string" == typeof t ? t : t.value;
      return o === Lt.randomColorValue
        ? i
          ? U({ value: o })
          : e
          ? Lt.randomColorValue
          : Lt.midColorValue
        : U({ value: o });
    }
    function pt(t) {
      return void 0 !== t
        ? { h: t.h.value, s: t.s.value, l: t.l.value }
        : void 0;
    }
    function vt(t, e, i) {
      const o = {
        h: { enable: !1, value: t.h },
        s: { enable: !1, value: t.s },
        l: { enable: !1, value: t.l },
      };
      return e && (ft(o.h, e.h, i), ft(o.s, e.s, i), ft(o.l, e.l, i)), o;
    }
    function ft(t, e, i) {
      if (((t.enable = e.enable), t.enable)) {
        if (((t.velocity = (e.speed / 100) * i), e.sync)) return;
        (t.status = 0),
          (t.velocity *= Math.random()),
          t.value && (t.value *= Math.random());
      } else t.velocity = 0;
    }
    function yt(t, e, i) {
      t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
    }
    function mt(t, e, i) {
      t.save(),
        (t.fillStyle = null != i ? i : "rgba(0,0,0,0)"),
        t.fillRect(0, 0, e.width, e.height),
        t.restore();
    }
    function bt(t, e) {
      t.clearRect(0, 0, e.width, e.height);
    }
    function gt(t, e, i, o, s, n, a, r, l, c, d, h) {
      let u = !1;
      if (b(i, o) <= s) yt(t, i, o), (u = !0);
      else if (a) {
        let e, a;
        const r = m(i, { x: o.x - n.width, y: o.y });
        if (r.distance <= s) {
          const t = i.y - (r.dy / r.dx) * i.x;
          (e = { x: 0, y: t }), (a = { x: n.width, y: t });
        } else {
          const t = m(i, { x: o.x, y: o.y - n.height });
          if (t.distance <= s) {
            const o = -(i.y - (t.dy / t.dx) * i.x) / (t.dy / t.dx);
            (e = { x: o, y: 0 }), (a = { x: o, y: n.height });
          } else {
            const t = m(i, { x: o.x - n.width, y: o.y - n.height });
            if (t.distance <= s) {
              const o = i.y - (t.dy / t.dx) * i.x;
              (e = { x: -o / (t.dy / t.dx), y: o }),
                (a = { x: e.x + n.width, y: e.y + n.height });
            }
          }
        }
        e && a && (yt(t, i, e), yt(t, o, a), (u = !0));
      }
      if (u) {
        if (
          ((t.lineWidth = e),
          r && (t.globalCompositeOperation = l),
          (t.strokeStyle = rt(c, d)),
          h.enable)
        ) {
          const e = U(h.color);
          e && ((t.shadowBlur = h.blur), (t.shadowColor = rt(e)));
        }
        t.stroke();
      }
    }
    function wt(t, e, i, o, s, n, a, r) {
      !(function (t, e, i, o) {
        t.beginPath(),
          t.moveTo(e.x, e.y),
          t.lineTo(i.x, i.y),
          t.lineTo(o.x, o.y),
          t.closePath();
      })(t, e, i, o),
        s && (t.globalCompositeOperation = n),
        (t.fillStyle = rt(a, r)),
        t.fill();
    }
    function xt(t, e, i, o, s) {
      t.save(),
        yt(t, o, s),
        (t.lineWidth = e),
        (t.strokeStyle = i),
        t.stroke(),
        t.restore();
    }
    function kt(t, e, i, o) {
      const s = Math.floor(i.getRadius() / e.getRadius()),
        n = e.getFillColor(),
        a = i.getFillColor();
      if (!n || !a) return;
      const r = e.getPosition(),
        l = i.getPosition(),
        c = dt(n, a, e.getRadius(), i.getRadius()),
        d = t.createLinearGradient(r.x, r.y, l.x, l.y);
      return (
        d.addColorStop(0, lt(n, o)),
        d.addColorStop(s > 1 ? 1 : s, rt(c, o)),
        d.addColorStop(1, lt(a, o)),
        d
      );
    }
    function Pt(t, e, i, o, s, n) {
      t.save(),
        yt(t, i, o),
        (t.strokeStyle = rt(s, n)),
        (t.lineWidth = e),
        t.stroke(),
        t.restore();
    }
    function Mt(t, e, i, o, s, n, a, r, l, c, d, h) {
      var u, p, v, f, y, m;
      const b = i.getPosition(),
        g = i.options.tilt,
        w = i.options.roll;
      if ((e.save(), g.enable || w.enable)) {
        const t = w.enable && i.roll,
          o = g.enable && i.tilt,
          s = t && ("horizontal" === w.mode || "both" === w.mode),
          n = t && ("vertical" === w.mode || "both" === w.mode);
        e.setTransform(
          s ? Math.cos(i.roll.angle) : 1,
          o ? Math.cos(i.tilt.value) * i.tilt.cosDirection : 0,
          o ? Math.sin(i.tilt.value) * i.tilt.sinDirection : 0,
          n ? Math.sin(i.roll.angle) : 1,
          b.x,
          b.y
        );
      } else e.translate(b.x, b.y);
      e.beginPath();
      const x =
        (null !==
          (p = null === (u = i.rotate) || void 0 === u ? void 0 : u.value) &&
        void 0 !== p
          ? p
          : 0) + (i.options.rotate.path ? i.velocity.angle : 0);
      0 !== x && e.rotate(x), a && (e.globalCompositeOperation = r);
      const k = i.shadowColor;
      if (
        (d.enable &&
          k &&
          ((e.shadowBlur = d.blur),
          (e.shadowColor = rt(k)),
          (e.shadowOffsetX = d.offset.x),
          (e.shadowOffsetY = d.offset.y)),
        h)
      ) {
        const t = h.angle.value,
          i =
            "radial" === h.type
              ? e.createRadialGradient(0, 0, 0, 0, 0, l)
              : e.createLinearGradient(
                  Math.cos(t) * -l,
                  Math.sin(t) * -l,
                  Math.cos(t) * l,
                  Math.sin(t) * l
                );
        for (const t of h.colors)
          i.addColorStop(
            t.stop,
            lt(
              { h: t.value.h.value, s: t.value.s.value, l: t.value.l.value },
              null !==
                (f =
                  null === (v = t.opacity) || void 0 === v
                    ? void 0
                    : v.value) && void 0 !== f
                ? f
                : c
            )
          );
        e.fillStyle = i;
      } else s && (e.fillStyle = s);
      const P = i.stroke;
      (e.lineWidth = null !== (y = i.strokeWidth) && void 0 !== y ? y : 0),
        n && (e.strokeStyle = n),
        zt(t, e, i, l, c, o),
        (null !== (m = null == P ? void 0 : P.width) && void 0 !== m ? m : 0) >
          0 && e.stroke(),
        i.close && e.closePath(),
        i.fill && e.fill(),
        e.restore(),
        e.save(),
        g.enable && i.tilt
          ? e.setTransform(
              1,
              Math.cos(i.tilt.value) * i.tilt.cosDirection,
              Math.sin(i.tilt.value) * i.tilt.sinDirection,
              1,
              b.x,
              b.y
            )
          : e.translate(b.x, b.y),
        0 !== x && e.rotate(x),
        a && (e.globalCompositeOperation = r),
        Ct(t, e, i, l, c, o),
        e.restore();
    }
    function zt(t, e, i, o, s, n) {
      if (!i.shape) return;
      const a = t.drawers.get(i.shape);
      a && a.draw(e, i, o, s, n, t.retina.pixelRatio);
    }
    function Ct(t, e, i, o, s, n) {
      if (!i.shape) return;
      const a = t.drawers.get(i.shape);
      (null == a ? void 0 : a.afterEffect) &&
        a.afterEffect(e, i, o, s, n, t.retina.pixelRatio);
    }
    function Tt(t, e, i) {
      e.draw && (t.save(), e.draw(t, i), t.restore());
    }
    function Et(t, e, i, o) {
      void 0 !== e.drawParticle &&
        (t.save(), e.drawParticle(t, i, o), t.restore());
    }
    function St(t, e, i, o, s, n, a, r, l) {
      const c = e.getPosition();
      if ((i && (t.strokeStyle = lt(i, s)), 0 === n)) return;
      t.lineWidth = n;
      const d = (a * Math.PI) / 180;
      t.beginPath(), t.ellipse(c.x, c.y, o / 2, 2 * o, d, r, l), t.stroke();
    }
    function Ot(t, e, i) {
      return { h: t.h, s: t.s, l: t.l + ("darken" === e ? -1 : 1) * i };
    }
    r.r(l),
      r.d(l, {
        Canvas: function () {
          return Kt;
        },
        Circle: function () {
          return At;
        },
        CircleWarp: function () {
          return Dt;
        },
        Constants: function () {
          return Lt;
        },
        Container: function () {
          return ro;
        },
        Engine: function () {
          return mo;
        },
        EventListeners: function () {
          return qt;
        },
        ExternalInteractorBase: function () {
          return _t;
        },
        FrameManager: function () {
          return Ft;
        },
        InteractionManager: function () {
          return jt;
        },
        Loader: function () {
          return uo;
        },
        Main: function () {
          return mo;
        },
        Particle: function () {
          return Zi;
        },
        Particles: function () {
          return io;
        },
        ParticlesInteractorBase: function () {
          return Gt;
        },
        ParticlesMover: function () {
          return Ut;
        },
        Plugins: function () {
          return Jt;
        },
        Point: function () {
          return Xt;
        },
        QuadTree: function () {
          return Yt;
        },
        Range: function () {
          return Rt;
        },
        Rectangle: function () {
          return It;
        },
        Retina: function () {
          return oo;
        },
        Vector: function () {
          return Qt;
        },
        Vector3d: function () {
          return Zt;
        },
        alterHsl: function () {
          return Ot;
        },
        animate: function () {
          return C;
        },
        areBoundsInside: function () {
          return I;
        },
        arrayRandomIndex: function () {
          return O;
        },
        calcEasing: function () {
          return k;
        },
        calculateBounds: function () {
          return D;
        },
        cancelAnimation: function () {
          return T;
        },
        circleBounce: function () {
          return B;
        },
        circleBounceDataFromParticle: function () {
          return V;
        },
        clamp: function () {
          return c;
        },
        clear: function () {
          return bt;
        },
        collisionVelocity: function () {
          return x;
        },
        colorMix: function () {
          return dt;
        },
        colorToHsl: function () {
          return $;
        },
        colorToRgb: function () {
          return U;
        },
        deepExtend: function () {
          return L;
        },
        divMode: function () {
          return F;
        },
        divModeExecute: function () {
          return q;
        },
        drawConnectLine: function () {
          return xt;
        },
        drawEllipse: function () {
          return St;
        },
        drawGrabLine: function () {
          return Pt;
        },
        drawLinkLine: function () {
          return gt;
        },
        drawLinkTriangle: function () {
          return wt;
        },
        drawParticle: function () {
          return Mt;
        },
        drawParticlePlugin: function () {
          return Et;
        },
        drawPlugin: function () {
          return Tt;
        },
        drawShape: function () {
          return zt;
        },
        drawShapeAfterEffect: function () {
          return Ct;
        },
        getDistance: function () {
          return b;
        },
        getDistances: function () {
          return m;
        },
        getHslAnimationFromHsl: function () {
          return vt;
        },
        getHslFromAnimation: function () {
          return pt;
        },
        getLinkColor: function () {
          return ht;
        },
        getLinkRandomColor: function () {
          return ut;
        },
        getParticleBaseVelocity: function () {
          return w;
        },
        getParticleDirectionAngle: function () {
          return g;
        },
        getRandomRgbColor: function () {
          return at;
        },
        getRangeMax: function () {
          return v;
        },
        getRangeMin: function () {
          return p;
        },
        getRangeValue: function () {
          return u;
        },
        getStyleFromHsl: function () {
          return lt;
        },
        getStyleFromHsv: function () {
          return ct;
        },
        getStyleFromRgb: function () {
          return rt;
        },
        getValue: function () {
          return y;
        },
        gradient: function () {
          return kt;
        },
        hslToHsv: function () {
          return Z;
        },
        hslToRgb: function () {
          return Y;
        },
        hslaToHsva: function () {
          return K;
        },
        hslaToRgba: function () {
          return Q;
        },
        hsvToHsl: function () {
          return tt;
        },
        hsvToRgb: function () {
          return it;
        },
        hsvaToHsla: function () {
          return et;
        },
        hsvaToRgba: function () {
          return ot;
        },
        isDivModeEnabled: function () {
          return H;
        },
        isInArray: function () {
          return E;
        },
        isPointInside: function () {
          return A;
        },
        isSsr: function () {
          return z;
        },
        itemFromArray: function () {
          return R;
        },
        loadFont: function () {
          return S;
        },
        mix: function () {
          return d;
        },
        pJSDom: function () {
          return sn;
        },
        paintBase: function () {
          return mt;
        },
        particlesJS: function () {
          return on;
        },
        randomInRange: function () {
          return h;
        },
        rectBounce: function () {
          return W;
        },
        rgbToHsl: function () {
          return N;
        },
        rgbToHsv: function () {
          return st;
        },
        rgbaToHsva: function () {
          return nt;
        },
        setRangeValue: function () {
          return f;
        },
        singleDivModeExecute: function () {
          return _;
        },
        stringToAlpha: function () {
          return J;
        },
        stringToRgb: function () {
          return X;
        },
        tsParticles: function () {
          return en;
        },
      });
    class Rt {
      constructor(t, e) {
        this.position = { x: t, y: e };
      }
    }
    class At extends Rt {
      constructor(t, e, i) {
        super(t, e), (this.radius = i);
      }
      contains(t) {
        return b(t, this.position) <= this.radius;
      }
      intersects(t) {
        const e = t,
          i = t,
          o = this.position,
          s = t.position,
          n = Math.abs(s.x - o.x),
          a = Math.abs(s.y - o.y),
          r = this.radius;
        if (void 0 !== i.radius) {
          return r + i.radius > Math.sqrt(n * n + a + a);
        }
        if (void 0 !== e.size) {
          const t = e.size.width,
            i = e.size.height,
            o = Math.pow(n - t, 2) + Math.pow(a - i, 2);
          return !(n > r + t || a > r + i) && (n <= t || a <= i || o <= r * r);
        }
        return !1;
      }
    }
    class It extends Rt {
      constructor(t, e, i, o) {
        super(t, e), (this.size = { height: o, width: i });
      }
      contains(t) {
        const e = this.size.width,
          i = this.size.height,
          o = this.position;
        return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i;
      }
      intersects(t) {
        const e = t,
          i = t,
          o = this.size.width,
          s = this.size.height,
          n = this.position,
          a = t.position;
        if (void 0 !== i.radius) return i.intersects(this);
        if (void 0 !== e.size) {
          const t = e.size,
            i = t.width,
            r = t.height;
          return (
            a.x < n.x + o && a.x + i > n.x && a.y < n.y + s && a.y + r > n.y
          );
        }
        return !1;
      }
    }
    class Dt extends At {
      constructor(t, e, i, o) {
        super(t, e, i),
          (this.canvasSize = o),
          (this.canvasSize = { height: o.height, width: o.width });
      }
      contains(t) {
        if (super.contains(t)) return !0;
        const e = { x: t.x - this.canvasSize.width, y: t.y };
        if (super.contains(e)) return !0;
        const i = {
          x: t.x - this.canvasSize.width,
          y: t.y - this.canvasSize.height,
        };
        if (super.contains(i)) return !0;
        const o = { x: t.x, y: t.y - this.canvasSize.height };
        return super.contains(o);
      }
      intersects(t) {
        if (super.intersects(t)) return !0;
        const e = t,
          i = t,
          o = {
            x: t.position.x - this.canvasSize.width,
            y: t.position.y - this.canvasSize.height,
          };
        if (void 0 !== i.radius) {
          const t = new At(o.x, o.y, 2 * i.radius);
          return super.intersects(t);
        }
        if (void 0 !== e.size) {
          const t = new It(o.x, o.y, 2 * e.size.width, 2 * e.size.height);
          return super.intersects(t);
        }
        return !1;
      }
    }
    class Lt {}
    function Ht(t, e, i, o, s) {
      if (o) {
        let o = { passive: !0 };
        "boolean" == typeof s ? (o.capture = s) : void 0 !== s && (o = s),
          t.addEventListener(e, i, o);
      } else {
        const o = s;
        t.removeEventListener(e, i, o);
      }
    }
    (Lt.generatedAttribute = "generated"),
      (Lt.randomColorValue = "random"),
      (Lt.midColorValue = "mid"),
      (Lt.touchEndEvent = "touchend"),
      (Lt.mouseDownEvent = "mousedown"),
      (Lt.mouseUpEvent = "mouseup"),
      (Lt.mouseMoveEvent = "mousemove"),
      (Lt.touchStartEvent = "touchstart"),
      (Lt.touchMoveEvent = "touchmove"),
      (Lt.mouseLeaveEvent = "mouseleave"),
      (Lt.mouseOutEvent = "mouseout"),
      (Lt.touchCancelEvent = "touchcancel"),
      (Lt.resizeEvent = "resize"),
      (Lt.visibilityChangeEvent = "visibilitychange"),
      (Lt.noPolygonDataLoaded = "No polygon data loaded."),
      (Lt.noPolygonFound =
        "No polygon found, you need to specify SVG url in config.");
    class qt {
      constructor(t) {
        (this.container = t),
          (this.canPush = !0),
          (this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
          (this.touchStartHandler = (t) => this.mouseTouchMove(t)),
          (this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
          (this.touchEndHandler = () => this.mouseTouchFinish()),
          (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
          (this.touchCancelHandler = () => this.mouseTouchFinish()),
          (this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
          (this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
          (this.mouseDownHandler = () => this.mouseDown()),
          (this.visibilityChangeHandler = () => this.handleVisibilityChange()),
          (this.themeChangeHandler = (t) => this.handleThemeChange(t)),
          (this.oldThemeChangeHandler = (t) => this.handleThemeChange(t)),
          (this.resizeHandler = () => this.handleWindowResize());
      }
      addListeners() {
        this.manageListeners(!0);
      }
      removeListeners() {
        this.manageListeners(!1);
      }
      manageListeners(t) {
        var e;
        const i = this.container,
          o = i.actualOptions,
          s = o.interactivity.detectsOn;
        let n = Lt.mouseLeaveEvent;
        if ("window" === s)
          (i.interactivity.element = window), (n = Lt.mouseOutEvent);
        else if ("parent" === s && i.canvas.element) {
          const t = i.canvas.element;
          i.interactivity.element =
            null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode;
        } else i.interactivity.element = i.canvas.element;
        const a =
          !z() &&
          "undefined" != typeof matchMedia &&
          matchMedia("(prefers-color-scheme: dark)");
        a &&
          (void 0 !== a.addEventListener
            ? Ht(a, "change", this.themeChangeHandler, t)
            : void 0 !== a.addListener &&
              (t
                ? a.addListener(this.oldThemeChangeHandler)
                : a.removeListener(this.oldThemeChangeHandler)));
        const r = i.interactivity.element;
        if (!r) return;
        const l = r;
        (o.interactivity.events.onHover.enable ||
          o.interactivity.events.onClick.enable) &&
          (Ht(r, Lt.mouseMoveEvent, this.mouseMoveHandler, t),
          Ht(r, Lt.touchStartEvent, this.touchStartHandler, t),
          Ht(r, Lt.touchMoveEvent, this.touchMoveHandler, t),
          o.interactivity.events.onClick.enable
            ? (Ht(r, Lt.touchEndEvent, this.touchEndClickHandler, t),
              Ht(r, Lt.mouseUpEvent, this.mouseUpHandler, t),
              Ht(r, Lt.mouseDownEvent, this.mouseDownHandler, t))
            : Ht(r, Lt.touchEndEvent, this.touchEndHandler, t),
          Ht(r, n, this.mouseLeaveHandler, t),
          Ht(r, Lt.touchCancelEvent, this.touchCancelHandler, t)),
          i.canvas.element &&
            (i.canvas.element.style.pointerEvents =
              l === i.canvas.element ? "initial" : "none"),
          o.interactivity.events.resize &&
            ("undefined" != typeof ResizeObserver
              ? this.resizeObserver && !t
                ? (i.canvas.element &&
                    this.resizeObserver.unobserve(i.canvas.element),
                  this.resizeObserver.disconnect(),
                  delete this.resizeObserver)
                : !this.resizeObserver &&
                  t &&
                  i.canvas.element &&
                  ((this.resizeObserver = new ResizeObserver((t) => {
                    t.find((t) => t.target === i.canvas.element) &&
                      this.handleWindowResize();
                  })),
                  this.resizeObserver.observe(i.canvas.element))
              : Ht(window, Lt.resizeEvent, this.resizeHandler, t)),
          document &&
            Ht(
              document,
              Lt.visibilityChangeEvent,
              this.visibilityChangeHandler,
              t,
              !1
            );
      }
      handleWindowResize() {
        this.resizeTimeout &&
          (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
          (this.resizeTimeout = setTimeout(async () => {
            var t;
            return await (null === (t = this.container.canvas) || void 0 === t
              ? void 0
              : t.windowResize());
          }, 500));
      }
      handleVisibilityChange() {
        const t = this.container,
          e = t.actualOptions;
        this.mouseTouchFinish(),
          e.pauseOnBlur &&
            ((
              null === document || void 0 === document
                ? void 0
                : document.hidden
            )
              ? ((t.pageHidden = !0), t.pause())
              : ((t.pageHidden = !1),
                t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
      }
      mouseDown() {
        const t = this.container.interactivity;
        if (t) {
          const e = t.mouse;
          (e.clicking = !0), (e.downPosition = e.position);
        }
      }
      mouseTouchMove(t) {
        var e, i, o, s, n, a, r;
        const l = this.container,
          c = l.actualOptions;
        if (
          void 0 ===
          (null === (e = l.interactivity) || void 0 === e ? void 0 : e.element)
        )
          return;
        let d;
        l.interactivity.mouse.inside = !0;
        const h = l.canvas.element;
        if (t.type.startsWith("mouse")) {
          this.canPush = !0;
          const e = t;
          if (l.interactivity.element === window) {
            if (h) {
              const t = h.getBoundingClientRect();
              d = { x: e.clientX - t.left, y: e.clientY - t.top };
            }
          } else if ("parent" === c.interactivity.detectsOn) {
            const t = e.target,
              s = e.currentTarget,
              n = l.canvas.element;
            if (t && s && n) {
              const i = t.getBoundingClientRect(),
                o = s.getBoundingClientRect(),
                a = n.getBoundingClientRect();
              d = {
                x: e.offsetX + 2 * i.left - (o.left + a.left),
                y: e.offsetY + 2 * i.top - (o.top + a.top),
              };
            } else
              d = {
                x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX,
                y: null !== (o = e.offsetY) && void 0 !== o ? o : e.clientY,
              };
          } else
            e.target === l.canvas.element &&
              (d = {
                x: null !== (s = e.offsetX) && void 0 !== s ? s : e.clientX,
                y: null !== (n = e.offsetY) && void 0 !== n ? n : e.clientY,
              });
        } else {
          this.canPush = "touchmove" !== t.type;
          const e = t,
            i = e.touches[e.touches.length - 1],
            o = null == h ? void 0 : h.getBoundingClientRect();
          d = {
            x:
              i.clientX -
              (null !== (a = null == o ? void 0 : o.left) && void 0 !== a
                ? a
                : 0),
            y:
              i.clientY -
              (null !== (r = null == o ? void 0 : o.top) && void 0 !== r
                ? r
                : 0),
          };
        }
        const u = l.retina.pixelRatio;
        d && ((d.x *= u), (d.y *= u)),
          (l.interactivity.mouse.position = d),
          (l.interactivity.status = Lt.mouseMoveEvent);
      }
      mouseTouchFinish() {
        const t = this.container.interactivity;
        if (void 0 === t) return;
        const e = t.mouse;
        delete e.position,
          delete e.clickPosition,
          delete e.downPosition,
          (t.status = Lt.mouseLeaveEvent),
          (e.inside = !1),
          (e.clicking = !1);
      }
      mouseTouchClick(t) {
        const e = this.container,
          i = e.actualOptions,
          o = e.interactivity.mouse;
        o.inside = !0;
        let s = !1;
        const n = o.position;
        if (void 0 !== n && i.interactivity.events.onClick.enable) {
          for (const [, t] of e.plugins)
            if (
              void 0 !== t.clickPositionValid &&
              ((s = t.clickPositionValid(n)), s)
            )
              break;
          s || this.doMouseTouchClick(t), (o.clicking = !1);
        }
      }
      doMouseTouchClick(t) {
        const e = this.container,
          i = e.actualOptions;
        if (this.canPush) {
          const t = e.interactivity.mouse.position;
          if (!t) return;
          (e.interactivity.mouse.clickPosition = { x: t.x, y: t.y }),
            (e.interactivity.mouse.clickTime = new Date().getTime());
          const o = i.interactivity.events.onClick;
          if (o.mode instanceof Array)
            for (const t of o.mode) this.handleClickMode(t);
          else this.handleClickMode(o.mode);
        }
        "touchend" === t.type && setTimeout(() => this.mouseTouchFinish(), 500);
      }
      handleThemeChange(t) {
        const e = t.matches
            ? this.container.options.defaultDarkTheme
            : this.container.options.defaultLightTheme,
          i = this.container.options.themes.find((t) => t.name === e);
        i && i.default.auto && this.container.loadTheme(e);
      }
      handleClickMode(t) {
        const e = this.container,
          i = e.actualOptions,
          o = i.interactivity.modes.push.quantity,
          s = i.interactivity.modes.remove.quantity;
        switch (t) {
          case "push":
            if (o > 0) {
              const t = R([void 0, ...i.interactivity.modes.push.groups]),
                s = void 0 !== t ? e.actualOptions.particles.groups[t] : void 0;
              e.particles.push(o, e.interactivity.mouse, s, t);
            }
            break;
          case "remove":
            e.particles.removeQuantity(s);
            break;
          case "bubble":
            e.bubble.clicking = !0;
            break;
          case "repulse":
            (e.repulse.clicking = !0), (e.repulse.count = 0);
            for (const t of e.repulse.particles)
              t.velocity.setTo(t.initialVelocity);
            (e.repulse.particles = []),
              (e.repulse.finish = !1),
              setTimeout(() => {
                e.destroyed || (e.repulse.clicking = !1);
              }, 1e3 * i.interactivity.modes.repulse.duration);
            break;
          case "attract":
            (e.attract.clicking = !0), (e.attract.count = 0);
            for (const t of e.attract.particles)
              t.velocity.setTo(t.initialVelocity);
            (e.attract.particles = []),
              (e.attract.finish = !1),
              setTimeout(() => {
                e.destroyed || (e.attract.clicking = !1);
              }, 1e3 * i.interactivity.modes.attract.duration);
            break;
          case "pause":
            e.getAnimationStatus() ? e.pause() : e.play();
        }
        for (const [, i] of e.plugins)
          i.handleClickMode && i.handleClickMode(t);
      }
    }
    class _t {
      constructor(t) {
        (this.container = t), (this.type = 0);
      }
    }
    class Ft {
      constructor(t) {
        this.container = t;
      }
      async nextFrame(t) {
        var e;
        try {
          const i = this.container;
          if (
            void 0 !== i.lastFrameTime &&
            t < i.lastFrameTime + 1e3 / i.fpsLimit
          )
            return void i.draw(!1);
          (null !== (e = i.lastFrameTime) && void 0 !== e) ||
            (i.lastFrameTime = t);
          const o = t - i.lastFrameTime,
            s = { value: o, factor: (60 * o) / 1e3 };
          if (((i.lifeTime += s.value), (i.lastFrameTime = t), o > 1e3))
            return void i.draw(!1);
          if (
            (await i.particles.draw(s),
            i.duration > 0 && i.lifeTime > i.duration)
          )
            return void i.destroy();
          i.getAnimationStatus() && i.draw(!1);
        } catch (t) {
          console.error("tsParticles error in animation loop", t);
        }
      }
    }
    var Vt,
      Bt = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      Wt = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class jt {
      constructor(t, e) {
        (this.container = e),
          Vt.set(this, void 0),
          Bt(this, Vt, t, "f"),
          (this.externalInteractors = []),
          (this.particleInteractors = []),
          this.init();
      }
      init() {
        const t = Wt(this, Vt, "f").plugins.getInteractors(this.container, !0);
        (this.externalInteractors = []), (this.particleInteractors = []);
        for (const e of t)
          switch (e.type) {
            case 0:
              this.externalInteractors.push(e);
              break;
            case 1:
              this.particleInteractors.push(e);
          }
      }
      async externalInteract(t) {
        for (const e of this.externalInteractors)
          e.isEnabled() && (await e.interact(t));
      }
      async particlesInteract(t, e) {
        for (const e of this.externalInteractors) e.reset(t);
        for (const i of this.particleInteractors)
          i.isEnabled(t) && (await i.interact(t, e));
      }
    }
    Vt = new WeakMap();
    class Gt {
      constructor(t) {
        (this.container = t), (this.type = 1);
      }
    }
    class Ut {
      constructor(t) {
        this.container = t;
      }
      move(t, e) {
        t.destroyed || (this.moveParticle(t, e), this.moveParallax(t));
      }
      moveParticle(t, e) {
        var i, o, s, n, a;
        const r = t.options,
          l = r.move;
        if (!l.enable) return;
        const c = this.container,
          d = this.getProximitySpeedFactor(t),
          h =
            (null !== (i = (n = t.retina).moveSpeed) && void 0 !== i
              ? i
              : (n.moveSpeed = u(l.speed) * c.retina.pixelRatio)) *
            c.retina.reduceFactor,
          p =
            null !== (o = (a = t.retina).moveDrift) && void 0 !== o
              ? o
              : (a.moveDrift = u(t.options.move.drift) * c.retina.pixelRatio),
          f = v(r.size.value) * c.retina.pixelRatio,
          y =
            h * (((l.size ? t.getRadius() / f : 1) * d * (e.factor || 1)) / 2);
        this.applyPath(t, e);
        const b = l.gravity,
          g = b.enable && b.inverse ? -1 : 1;
        b.enable &&
          y &&
          (t.velocity.y += (g * (b.acceleration * e.factor)) / (60 * y)),
          p && y && (t.velocity.x += (p * e.factor) / (60 * y));
        const w = t.moveDecay;
        1 != w && t.velocity.multTo(w);
        const x = t.velocity.mult(y),
          k =
            null !== (s = t.retina.maxSpeed) && void 0 !== s
              ? s
              : c.retina.maxSpeed;
        b.enable &&
          b.maxSpeed > 0 &&
          ((!b.inverse && x.y >= 0 && x.y >= k) ||
            (b.inverse && x.y <= 0 && x.y <= -k)) &&
          ((x.y = g * k), y && (t.velocity.y = x.y / y));
        const P = t.options.zIndex,
          M = (1 - t.zIndexFactor) ** P.velocityRate;
        l.spin.enable
          ? this.spin(t, y)
          : (1 != M && x.multTo(M),
            t.position.addTo(x),
            l.vibrate &&
              ((t.position.x += Math.sin(
                t.position.x * Math.cos(t.position.y)
              )),
              (t.position.y += Math.cos(
                t.position.y * Math.sin(t.position.x)
              )))),
          (function (t) {
            const e = t.initialPosition,
              { dx: i, dy: o } = m(e, t.position),
              s = Math.abs(i),
              n = Math.abs(o),
              a = t.retina.maxDistance.horizontal,
              r = t.retina.maxDistance.vertical;
            if (a || r)
              if (((a && s >= a) || (r && n >= r)) && !t.misplaced)
                (t.misplaced = (!!a && s > a) || (!!r && n > r)),
                  a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                  r && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
              else if ((!a || s < a) && (!r || n < r) && t.misplaced)
                t.misplaced = !1;
              else if (t.misplaced) {
                const i = t.position,
                  o = t.velocity;
                a &&
                  ((i.x < e.x && o.x < 0) || (i.x > e.x && o.x > 0)) &&
                  (o.x *= -Math.random()),
                  r &&
                    ((i.y < e.y && o.y < 0) || (i.y > e.y && o.y > 0)) &&
                    (o.y *= -Math.random());
              }
          })(t);
      }
      spin(t, e) {
        const i = this.container;
        if (!t.spin) return;
        const o = {
          x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
          y: "clockwise" === t.spin.direction ? Math.sin : Math.cos,
        };
        (t.position.x = t.spin.center.x + t.spin.radius * o.x(t.spin.angle)),
          (t.position.y = t.spin.center.y + t.spin.radius * o.y(t.spin.angle)),
          (t.spin.radius += t.spin.acceleration);
        const s = Math.max(i.canvas.size.width, i.canvas.size.height);
        t.spin.radius > s / 2
          ? ((t.spin.radius = s / 2), (t.spin.acceleration *= -1))
          : t.spin.radius < 0 &&
            ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
          (t.spin.angle += (e / 100) * (1 - t.spin.radius / s));
      }
      applyPath(t, e) {
        const i = t.options.move.path;
        if (!i.enable) return;
        const o = this.container;
        if (t.lastPathTime <= t.pathDelay)
          return void (t.lastPathTime += e.value);
        const s = o.pathGenerator.generate(t);
        t.velocity.addTo(s),
          i.clamp &&
            ((t.velocity.x = c(t.velocity.x, -1, 1)),
            (t.velocity.y = c(t.velocity.y, -1, 1))),
          (t.lastPathTime -= t.pathDelay);
      }
      moveParallax(t) {
        const e = this.container,
          i = e.actualOptions;
        if (z() || !i.interactivity.events.onHover.parallax.enable) return;
        const o = i.interactivity.events.onHover.parallax.force,
          s = e.interactivity.mouse.position;
        if (!s) return;
        const n = e.canvas.size.width / 2,
          a = e.canvas.size.height / 2,
          r = i.interactivity.events.onHover.parallax.smooth,
          l = t.getRadius() / o,
          c = (s.x - n) * l,
          d = (s.y - a) * l;
        (t.offset.x += (c - t.offset.x) / r),
          (t.offset.y += (d - t.offset.y) / r);
      }
      getProximitySpeedFactor(t) {
        const e = this.container,
          i = e.actualOptions;
        if (!E("slow", i.interactivity.events.onHover.mode)) return 1;
        const o = this.container.interactivity.mouse.position;
        if (!o) return 1;
        const s = b(o, t.getPosition()),
          n = e.retina.slowModeRadius;
        if (s > n) return 1;
        return (s / n || 0) / i.interactivity.modes.slow.factor;
      }
    }
    var $t,
      Nt = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      };
    class Jt {
      constructor(t) {
        $t.set(this, void 0),
          Nt(this, $t, t, "f"),
          (this.plugins = []),
          (this.interactorsInitializers = new Map()),
          (this.updatersInitializers = new Map()),
          (this.interactors = new Map()),
          (this.updaters = new Map()),
          (this.presets = new Map()),
          (this.drawers = new Map()),
          (this.pathGenerators = new Map());
      }
      getPlugin(t) {
        return this.plugins.find((e) => e.id === t);
      }
      addPlugin(t) {
        this.getPlugin(t.id) || this.plugins.push(t);
      }
      getAvailablePlugins(t) {
        const e = new Map();
        for (const i of this.plugins)
          i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
        return e;
      }
      loadOptions(t, e) {
        for (const i of this.plugins) i.loadOptions(t, e);
      }
      getPreset(t) {
        return this.presets.get(t);
      }
      addPreset(t, e, i = !1) {
        (!i && this.getPreset(t)) || this.presets.set(t, e);
      }
      addShapeDrawer(t, e) {
        this.getShapeDrawer(t) || this.drawers.set(t, e);
      }
      getShapeDrawer(t) {
        return this.drawers.get(t);
      }
      getSupportedShapes() {
        return this.drawers.keys();
      }
      getPathGenerator(t) {
        return this.pathGenerators.get(t);
      }
      addPathGenerator(t, e) {
        this.getPathGenerator(t) || this.pathGenerators.set(t, e);
      }
      getInteractors(t, e = !1) {
        let i = this.interactors.get(t);
        return (
          (i && !e) ||
            ((i = [...this.interactorsInitializers.values()].map((e) => e(t))),
            this.interactors.set(t, i)),
          i
        );
      }
      addInteractor(t, e) {
        this.interactorsInitializers.set(t, e);
      }
      getUpdaters(t, e = !1) {
        let i = this.updaters.get(t);
        return (
          (i && !e) ||
            ((i = [...this.updatersInitializers.values()].map((e) => e(t))),
            this.updaters.set(t, i)),
          i
        );
      }
      addParticleUpdater(t, e) {
        this.updatersInitializers.set(t, e);
      }
    }
    $t = new WeakMap();
    class Xt {
      constructor(t, e) {
        (this.position = t), (this.particle = e);
      }
    }
    class Yt {
      constructor(t, e) {
        (this.rectangle = t),
          (this.capacity = e),
          (this.points = []),
          (this.divided = !1);
      }
      subdivide() {
        const t = this.rectangle.position.x,
          e = this.rectangle.position.y,
          i = this.rectangle.size.width,
          o = this.rectangle.size.height,
          s = this.capacity;
        (this.northEast = new Yt(new It(t, e, i / 2, o / 2), s)),
          (this.northWest = new Yt(new It(t + i / 2, e, i / 2, o / 2), s)),
          (this.southEast = new Yt(new It(t, e + o / 2, i / 2, o / 2), s)),
          (this.southWest = new Yt(
            new It(t + i / 2, e + o / 2, i / 2, o / 2),
            s
          )),
          (this.divided = !0);
      }
      insert(t) {
        var e, i, o, s, n;
        return (
          !!this.rectangle.contains(t.position) &&
          (this.points.length < this.capacity
            ? (this.points.push(t), !0)
            : (this.divided || this.subdivide(),
              null !==
                (n =
                  (null === (e = this.northEast) || void 0 === e
                    ? void 0
                    : e.insert(t)) ||
                  (null === (i = this.northWest) || void 0 === i
                    ? void 0
                    : i.insert(t)) ||
                  (null === (o = this.southEast) || void 0 === o
                    ? void 0
                    : o.insert(t)) ||
                  (null === (s = this.southWest) || void 0 === s
                    ? void 0
                    : s.insert(t))) &&
                void 0 !== n &&
                n))
        );
      }
      queryCircle(t, e) {
        return this.query(new At(t.x, t.y, e));
      }
      queryCircleWarp(t, e, i) {
        const o = i,
          s = i;
        return this.query(
          new Dt(t.x, t.y, e, void 0 !== o.canvas ? o.canvas.size : s)
        );
      }
      queryRectangle(t, e) {
        return this.query(new It(t.x, t.y, e.width, e.height));
      }
      query(t, e) {
        var i, o, s, n;
        const a = null != e ? e : [];
        if (!t.intersects(this.rectangle)) return [];
        for (const e of this.points)
          (!t.contains(e.position) &&
            b(t.position, e.position) > e.particle.getRadius()) ||
            a.push(e.particle);
        return (
          this.divided &&
            (null === (i = this.northEast) || void 0 === i || i.query(t, a),
            null === (o = this.northWest) || void 0 === o || o.query(t, a),
            null === (s = this.southEast) || void 0 === s || s.query(t, a),
            null === (n = this.southWest) || void 0 === n || n.query(t, a)),
          a
        );
      }
    }
    class Qt {
      constructor(t, e) {
        let i, o;
        if (void 0 === e) {
          if ("number" == typeof t)
            throw new Error("tsParticles - Vector not initialized correctly");
          const e = t;
          [i, o] = [e.x, e.y];
        } else [i, o] = [t, e];
        (this.x = i), (this.y = o);
      }
      static clone(t) {
        return Qt.create(t.x, t.y);
      }
      static create(t, e) {
        return new Qt(t, e);
      }
      static get origin() {
        return Qt.create(0, 0);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(t) {
        this.updateFromAngle(t, this.length);
      }
      get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
      }
      set length(t) {
        this.updateFromAngle(this.angle, t);
      }
      add(t) {
        return Qt.create(this.x + t.x, this.y + t.y);
      }
      addTo(t) {
        (this.x += t.x), (this.y += t.y);
      }
      sub(t) {
        return Qt.create(this.x - t.x, this.y - t.y);
      }
      subFrom(t) {
        (this.x -= t.x), (this.y -= t.y);
      }
      mult(t) {
        return Qt.create(this.x * t, this.y * t);
      }
      multTo(t) {
        (this.x *= t), (this.y *= t);
      }
      div(t) {
        return Qt.create(this.x / t, this.y / t);
      }
      divTo(t) {
        (this.x /= t), (this.y /= t);
      }
      distanceTo(t) {
        return this.sub(t).length;
      }
      getLengthSq() {
        return this.x ** 2 + this.y ** 2;
      }
      distanceToSq(t) {
        return this.sub(t).getLengthSq();
      }
      manhattanDistanceTo(t) {
        return Math.abs(t.x - this.x) + Math.abs(t.y - this.y);
      }
      copy() {
        return Qt.clone(this);
      }
      setTo(t) {
        (this.x = t.x), (this.y = t.y);
      }
      rotate(t) {
        return Qt.create(
          this.x * Math.cos(t) - this.y * Math.sin(t),
          this.x * Math.sin(t) + this.y * Math.cos(t)
        );
      }
      updateFromAngle(t, e) {
        (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
      }
    }
    class Zt extends Qt {
      constructor(t, e, i) {
        super(t, e), (this.z = void 0 === i ? t.z : i);
      }
      static clone(t) {
        return Zt.create(t.x, t.y, t.z);
      }
      static create(t, e, i) {
        return new Zt(t, e, i);
      }
      add(t) {
        return t instanceof Zt
          ? Zt.create(this.x + t.x, this.y + t.y, this.z + t.z)
          : super.add(t);
      }
      addTo(t) {
        super.addTo(t), t instanceof Zt && (this.z += t.z);
      }
      sub(t) {
        return t instanceof Zt
          ? Zt.create(this.x - t.x, this.y - t.y, this.z - t.z)
          : super.sub(t);
      }
      subFrom(t) {
        super.subFrom(t), t instanceof Zt && (this.z -= t.z);
      }
      mult(t) {
        return Zt.create(this.x * t, this.y * t, this.z * t);
      }
      multTo(t) {
        super.multTo(t), (this.z *= t);
      }
      div(t) {
        return Zt.create(this.x / t, this.y / t, this.z / t);
      }
      divTo(t) {
        super.divTo(t), (this.z /= t);
      }
      copy() {
        return Zt.clone(this);
      }
      setTo(t) {
        super.setTo(t), t instanceof Zt && (this.z = t.z);
      }
    }
    class Kt {
      constructor(t) {
        (this.container = t),
          (this.size = { height: 0, width: 0 }),
          (this.context = null),
          (this.generatedCanvas = !1);
      }
      init() {
        this.resize(),
          this.initStyle(),
          this.initCover(),
          this.initTrail(),
          this.initBackground(),
          this.paint();
      }
      loadCanvas(t) {
        var e;
        this.generatedCanvas &&
          (null === (e = this.element) || void 0 === e || e.remove()),
          (this.generatedCanvas =
            t.dataset && Lt.generatedAttribute in t.dataset
              ? "true" === t.dataset[Lt.generatedAttribute]
              : this.generatedCanvas),
          (this.element = t),
          (this.originalStyle = L({}, this.element.style)),
          (this.size.height = t.offsetHeight),
          (this.size.width = t.offsetWidth),
          (this.context = this.element.getContext("2d")),
          this.container.retina.init(),
          this.initBackground();
      }
      destroy() {
        var t;
        this.generatedCanvas &&
          (null === (t = this.element) || void 0 === t || t.remove()),
          this.draw((t) => {
            bt(t, this.size);
          });
      }
      paint() {
        const t = this.container.actualOptions;
        this.draw((e) => {
          t.backgroundMask.enable && t.backgroundMask.cover && this.coverColor
            ? (bt(e, this.size),
              this.paintBase(rt(this.coverColor, this.coverColor.a)))
            : this.paintBase();
        });
      }
      clear() {
        const t = this.container.actualOptions,
          e = t.particles.move.trail;
        t.backgroundMask.enable
          ? this.paint()
          : e.enable && e.length > 0 && this.trailFillColor
          ? this.paintBase(rt(this.trailFillColor, 1 / e.length))
          : this.draw((t) => {
              bt(t, this.size);
            });
      }
      async windowResize() {
        if (!this.element) return;
        const t = this.container;
        this.resize();
        const e = t.updateActualOptions();
        t.particles.setDensity();
        for (const [, e] of t.plugins) void 0 !== e.resize && e.resize();
        e && (await t.refresh());
      }
      resize() {
        if (!this.element) return;
        const t = this.container,
          e = t.retina.pixelRatio,
          i = t.canvas.size,
          o = i.width,
          s = i.height;
        (i.width = this.element.offsetWidth * e),
          (i.height = this.element.offsetHeight * e),
          (this.element.width = i.width),
          (this.element.height = i.height),
          this.container.started &&
            (this.resizeFactor = { width: i.width / o, height: i.height / s });
      }
      drawConnectLine(t, e) {
        this.draw((i) => {
          var o;
          const s = this.lineStyle(t, e);
          if (!s) return;
          const n = t.getPosition(),
            a = e.getPosition();
          xt(
            i,
            null !== (o = t.retina.linksWidth) && void 0 !== o
              ? o
              : this.container.retina.linksWidth,
            s,
            n,
            a
          );
        });
      }
      drawGrabLine(t, e, i, o) {
        const s = this.container;
        this.draw((n) => {
          var a;
          const r = t.getPosition();
          Pt(
            n,
            null !== (a = t.retina.linksWidth) && void 0 !== a
              ? a
              : s.retina.linksWidth,
            r,
            o,
            e,
            i
          );
        });
      }
      drawParticle(t, e) {
        var i, o, s, n, a, r;
        if (t.spawning || t.destroyed) return;
        const l = t.getFillColor(),
          c = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : l;
        if (!l && !c) return;
        let [d, h] = this.getPluginParticleColors(t);
        const u = t.options.twinkle.particles,
          p = u.enable && Math.random() < u.frequency;
        if (!d || !h) {
          const t = $(u.color);
          d || (d = p && void 0 !== t ? t : l || void 0),
            h || (h = p && void 0 !== t ? t : c || void 0);
        }
        const v = this.container.actualOptions,
          f = t.options.zIndex,
          y = (1 - t.zIndexFactor) ** f.opacityRate,
          m = t.getRadius(),
          b = p
            ? u.opacity
            : null !==
                (n =
                  null !== (o = t.bubble.opacity) && void 0 !== o
                    ? o
                    : null === (s = t.opacity) || void 0 === s
                    ? void 0
                    : s.value) && void 0 !== n
            ? n
            : 1,
          g =
            null !==
              (r =
                null === (a = t.stroke) || void 0 === a ? void 0 : a.opacity) &&
            void 0 !== r
              ? r
              : b,
          w = b * y,
          x = d ? lt(d, w) : void 0;
        (x || h) &&
          this.draw((i) => {
            const o = (1 - t.zIndexFactor) ** f.sizeRate,
              s = h ? lt(h, g * y) : x;
            if (m <= 0) return;
            const n = this.container;
            for (const e of n.particles.updaters)
              e.beforeDraw && e.beforeDraw(t);
            Mt(
              this.container,
              i,
              t,
              e,
              x,
              s,
              v.backgroundMask.enable,
              v.backgroundMask.composite,
              m * o,
              w,
              t.options.shadow,
              t.gradient
            );
            for (const e of n.particles.updaters) e.afterDraw && e.afterDraw(t);
          });
      }
      drawPlugin(t, e) {
        this.draw((i) => {
          Tt(i, t, e);
        });
      }
      drawParticlePlugin(t, e, i) {
        this.draw((o) => {
          Et(o, t, e, i);
        });
      }
      initBackground() {
        const t = this.container.actualOptions.background,
          e = this.element,
          i = null == e ? void 0 : e.style;
        if (i) {
          if (t.color) {
            const e = U(t.color);
            i.backgroundColor = e ? rt(e, t.opacity) : "";
          } else i.backgroundColor = "";
          (i.backgroundImage = t.image || ""),
            (i.backgroundPosition = t.position || ""),
            (i.backgroundRepeat = t.repeat || ""),
            (i.backgroundSize = t.size || "");
        }
      }
      draw(t) {
        if (this.context) return t(this.context);
      }
      initCover() {
        const t = this.container.actualOptions.backgroundMask.cover,
          e = U(t.color);
        e && (this.coverColor = { r: e.r, g: e.g, b: e.b, a: t.opacity });
      }
      initTrail() {
        const t = this.container.actualOptions,
          e = U(t.particles.move.trail.fillColor);
        if (e) {
          const i = t.particles.move.trail;
          this.trailFillColor = { r: e.r, g: e.g, b: e.b, a: 1 / i.length };
        }
      }
      getPluginParticleColors(t) {
        let e, i;
        for (const [, o] of this.container.plugins)
          if (
            (!e && o.particleFillColor && (e = $(o.particleFillColor(t))),
            !i && o.particleStrokeColor && (i = $(o.particleStrokeColor(t))),
            e && i)
          )
            break;
        return [e, i];
      }
      initStyle() {
        const t = this.element,
          e = this.container.actualOptions;
        if (!t) return;
        const i = this.originalStyle;
        e.fullScreen.enable
          ? ((this.originalStyle = L({}, t.style)),
            t.style.setProperty("position", "fixed"),
            t.style.setProperty(
              "z-index",
              e.fullScreen.zIndex.toString(10),
              "important"
            ),
            t.style.setProperty("top", "0"),
            t.style.setProperty("left", "0"),
            t.style.setProperty("width", "100%"),
            t.style.setProperty("height", "100%"))
          : i &&
            ((t.style.position = i.position),
            (t.style.zIndex = i.zIndex),
            (t.style.top = i.top),
            (t.style.left = i.left),
            (t.style.width = i.width),
            (t.style.height = i.height));
        for (const i in e.style) {
          if (!i || !e.style) continue;
          const o = e.style[i];
          o && t.style.setProperty(i, o, "important");
        }
      }
      paintBase(t) {
        this.draw((e) => {
          mt(e, this.size, t);
        });
      }
      lineStyle(t, e) {
        return this.draw((i) => {
          const o = this.container.actualOptions.interactivity.modes.connect;
          return kt(i, t, e, o.links.opacity);
        });
      }
    }
    class te {
      constructor() {
        this.value = "#fff";
      }
      static create(t, e) {
        const i = new te();
        return (
          i.load(t),
          void 0 !== e &&
            ("string" == typeof e || e instanceof Array
              ? i.load({ value: e })
              : i.load(e)),
          i
        );
      }
      load(t) {
        void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
      }
    }
    class ee {
      constructor() {
        (this.color = new te()),
          (this.color.value = ""),
          (this.image = ""),
          (this.position = ""),
          (this.repeat = ""),
          (this.size = ""),
          (this.opacity = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image),
          void 0 !== t.position && (this.position = t.position),
          void 0 !== t.repeat && (this.repeat = t.repeat),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class ie {
      constructor() {
        (this.color = new te()), (this.opacity = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class oe {
      constructor() {
        (this.composite = "destination-out"),
          (this.cover = new ie()),
          (this.enable = !1);
      }
      load(t) {
        if (void 0 !== t) {
          if (
            (void 0 !== t.composite && (this.composite = t.composite),
            void 0 !== t.cover)
          ) {
            const e = t.cover,
              i = "string" == typeof t.cover ? { color: t.cover } : t.cover;
            this.cover.load(void 0 !== e.color ? e : { color: i });
          }
          void 0 !== t.enable && (this.enable = t.enable);
        }
      }
    }
    class se {
      constructor() {
        (this.enable = !0), (this.zIndex = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex));
      }
    }
    class ne {
      constructor() {
        (this.enable = !1), (this.mode = []);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode));
      }
    }
    class ae {
      constructor() {
        (this.selectors = []),
          (this.enable = !1),
          (this.mode = []),
          (this.type = "circle");
      }
      get elementId() {
        return this.ids;
      }
      set elementId(t) {
        this.ids = t;
      }
      get el() {
        return this.elementId;
      }
      set el(t) {
        this.elementId = t;
      }
      get ids() {
        return this.selectors instanceof Array
          ? this.selectors.map((t) => t.replace("#", ""))
          : this.selectors.replace("#", "");
      }
      set ids(t) {
        this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`;
      }
      load(t) {
        var e, i;
        if (void 0 === t) return;
        const o =
          null !==
            (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) &&
          void 0 !== i
            ? i
            : t.el;
        void 0 !== o && (this.ids = o),
          void 0 !== t.selectors && (this.selectors = t.selectors),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class re {
      constructor() {
        (this.enable = !1), (this.force = 2), (this.smooth = 10);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.force && (this.force = t.force),
          void 0 !== t.smooth && (this.smooth = t.smooth));
      }
    }
    class le {
      constructor() {
        (this.enable = !1), (this.mode = []), (this.parallax = new re());
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.parallax.load(t.parallax));
      }
    }
    class ce {
      constructor() {
        (this.onClick = new ne()),
          (this.onDiv = new ae()),
          (this.onHover = new le()),
          (this.resize = !0);
      }
      get onclick() {
        return this.onClick;
      }
      set onclick(t) {
        this.onClick = t;
      }
      get ondiv() {
        return this.onDiv;
      }
      set ondiv(t) {
        this.onDiv = t;
      }
      get onhover() {
        return this.onHover;
      }
      set onhover(t) {
        this.onHover = t;
      }
      load(t) {
        var e, i, o;
        if (void 0 === t) return;
        this.onClick.load(
          null !== (e = t.onClick) && void 0 !== e ? e : t.onclick
        );
        const s = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
        void 0 !== s &&
          (s instanceof Array
            ? (this.onDiv = s.map((t) => {
                const e = new ae();
                return e.load(t), e;
              }))
            : ((this.onDiv = new ae()), this.onDiv.load(s))),
          this.onHover.load(
            null !== (o = t.onHover) && void 0 !== o ? o : t.onhover
          ),
          void 0 !== t.resize && (this.resize = t.resize);
      }
    }
    class de {
      constructor() {
        (this.distance = 200),
          (this.duration = 0.4),
          (this.easing = "ease-out-quad"),
          (this.factor = 1),
          (this.maxSpeed = 50),
          (this.speed = 1);
      }
      load(t) {
        t &&
          (void 0 !== t.distance && (this.distance = t.distance),
          void 0 !== t.duration && (this.duration = t.duration),
          void 0 !== t.easing && (this.easing = t.easing),
          void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
          void 0 !== t.speed && (this.speed = t.speed));
      }
    }
    class he {
      constructor() {
        this.distance = 200;
      }
      load(t) {
        t && void 0 !== t.distance && (this.distance = t.distance);
      }
    }
    class ue {
      constructor() {
        (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.distance && (this.distance = t.distance),
          void 0 !== t.duration && (this.duration = t.duration),
          void 0 !== t.mix && (this.mix = t.mix),
          void 0 !== t.opacity && (this.opacity = t.opacity),
          void 0 !== t.color &&
            (t.color instanceof Array
              ? (this.color = t.color.map((t) => te.create(void 0, t)))
              : (this.color instanceof Array && (this.color = new te()),
                (this.color = te.create(this.color, t.color)))),
          void 0 !== t.size && (this.size = t.size));
      }
    }
    class pe extends ue {
      constructor() {
        super(), (this.selectors = []);
      }
      get ids() {
        return this.selectors instanceof Array
          ? this.selectors.map((t) => t.replace("#", ""))
          : this.selectors.replace("#", "");
      }
      set ids(t) {
        this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`;
      }
      load(t) {
        super.load(t),
          void 0 !== t &&
            (void 0 !== t.ids && (this.ids = t.ids),
            void 0 !== t.selectors && (this.selectors = t.selectors));
      }
    }
    class ve extends ue {
      load(t) {
        super.load(t),
          void 0 !== t &&
            void 0 !== t.divs &&
            (t.divs instanceof Array
              ? (this.divs = t.divs.map((t) => {
                  const e = new pe();
                  return e.load(t), e;
                }))
              : ((this.divs instanceof Array || !this.divs) &&
                  (this.divs = new pe()),
                this.divs.load(t.divs)));
      }
    }
    class fe {
      constructor() {
        this.opacity = 0.5;
      }
      load(t) {
        void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity);
      }
    }
    class ye {
      constructor() {
        (this.distance = 80), (this.links = new fe()), (this.radius = 60);
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(t) {
        this.links = t;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(t) {
        this.links = t;
      }
      load(t) {
        var e, i;
        void 0 !== t &&
          (void 0 !== t.distance && (this.distance = t.distance),
          this.links.load(
            null !==
              (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
              void 0 !== i
              ? i
              : t.line_linked
          ),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class me {
      constructor() {
        (this.blink = !1), (this.consent = !1), (this.opacity = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.blink && (this.blink = t.blink),
          void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.consent && (this.consent = t.consent),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class be {
      constructor() {
        (this.distance = 100), (this.links = new me());
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(t) {
        this.links = t;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(t) {
        this.links = t;
      }
      load(t) {
        var e, i;
        void 0 !== t &&
          (void 0 !== t.distance && (this.distance = t.distance),
          this.links.load(
            null !==
              (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
              void 0 !== i
              ? i
              : t.line_linked
          ));
      }
    }
    class ge {
      constructor() {
        (this.start = new te()),
          (this.stop = new te()),
          (this.start.value = "#ffffff"),
          (this.stop.value = "#000000");
      }
      load(t) {
        void 0 !== t &&
          ((this.start = te.create(this.start, t.start)),
          (this.stop = te.create(this.stop, t.stop)));
      }
    }
    class we {
      constructor() {
        (this.gradient = new ge()), (this.radius = 1e3);
      }
      load(t) {
        void 0 !== t &&
          (this.gradient.load(t.gradient),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class xe {
      constructor() {
        (this.color = new te()),
          (this.color.value = "#000000"),
          (this.length = 2e3);
      }
      load(t) {
        void 0 !== t &&
          ((this.color = te.create(this.color, t.color)),
          void 0 !== t.length && (this.length = t.length));
      }
    }
    class ke {
      constructor() {
        (this.area = new we()), (this.shadow = new xe());
      }
      load(t) {
        void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow));
      }
    }
    class Pe {
      constructor() {
        (this.default = !0), (this.groups = []), (this.quantity = 4);
      }
      get particles_nb() {
        return this.quantity;
      }
      set particles_nb(t) {
        this.quantity = t;
      }
      load(t) {
        var e;
        if (void 0 === t) return;
        void 0 !== t.default && (this.default = t.default),
          void 0 !== t.groups && (this.groups = t.groups.map((t) => t)),
          this.groups.length || (this.default = !0);
        const i =
          null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
        void 0 !== i && (this.quantity = i);
      }
    }
    class Me {
      constructor() {
        this.quantity = 2;
      }
      get particles_nb() {
        return this.quantity;
      }
      set particles_nb(t) {
        this.quantity = t;
      }
      load(t) {
        var e;
        if (void 0 === t) return;
        const i =
          null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
        void 0 !== i && (this.quantity = i);
      }
    }
    class ze {
      constructor() {
        (this.distance = 200),
          (this.duration = 0.4),
          (this.factor = 100),
          (this.speed = 1),
          (this.maxSpeed = 50),
          (this.easing = "ease-out-quad");
      }
      load(t) {
        t &&
          (void 0 !== t.distance && (this.distance = t.distance),
          void 0 !== t.duration && (this.duration = t.duration),
          void 0 !== t.easing && (this.easing = t.easing),
          void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
      }
    }
    class Ce extends ze {
      constructor() {
        super(), (this.selectors = []);
      }
      get ids() {
        return this.selectors instanceof Array
          ? this.selectors.map((t) => t.replace("#", ""))
          : this.selectors.replace("#", "");
      }
      set ids(t) {
        this.selectors = t instanceof Array ? t.map(() => `#${t}`) : `#${t}`;
      }
      load(t) {
        super.load(t),
          void 0 !== t &&
            (void 0 !== t.ids && (this.ids = t.ids),
            void 0 !== t.selectors && (this.selectors = t.selectors));
      }
    }
    class Te extends ze {
      load(t) {
        super.load(t),
          void 0 !== (null == t ? void 0 : t.divs) &&
            (t.divs instanceof Array
              ? (this.divs = t.divs.map((t) => {
                  const e = new Ce();
                  return e.load(t), e;
                }))
              : ((this.divs instanceof Array || !this.divs) &&
                  (this.divs = new Ce()),
                this.divs.load(t.divs)));
      }
    }
    class Ee {
      constructor() {
        (this.factor = 3), (this.radius = 200);
      }
      get active() {
        return !1;
      }
      set active(t) {}
      load(t) {
        void 0 !== t &&
          (void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class Se {
      constructor() {
        (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.quantity && (this.quantity = t.quantity),
          void 0 !== t.particles && (this.particles = L({}, t.particles)),
          void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop));
      }
    }
    class Oe {
      constructor() {
        (this.attract = new de()),
          (this.bounce = new he()),
          (this.bubble = new ve()),
          (this.connect = new ye()),
          (this.grab = new be()),
          (this.light = new ke()),
          (this.push = new Pe()),
          (this.remove = new Me()),
          (this.repulse = new Te()),
          (this.slow = new Ee()),
          (this.trail = new Se());
      }
      load(t) {
        void 0 !== t &&
          (this.attract.load(t.attract),
          this.bubble.load(t.bubble),
          this.connect.load(t.connect),
          this.grab.load(t.grab),
          this.light.load(t.light),
          this.push.load(t.push),
          this.remove.load(t.remove),
          this.repulse.load(t.repulse),
          this.slow.load(t.slow),
          this.trail.load(t.trail));
      }
    }
    class Re {
      constructor() {
        (this.detectsOn = "window"),
          (this.events = new ce()),
          (this.modes = new Oe());
      }
      get detect_on() {
        return this.detectsOn;
      }
      set detect_on(t) {
        this.detectsOn = t;
      }
      load(t) {
        var e, i, o;
        if (void 0 === t) return;
        const s = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
        void 0 !== s && (this.detectsOn = s),
          this.events.load(t.events),
          this.modes.load(t.modes),
          !0 ===
            (null ===
              (o = null === (i = t.modes) || void 0 === i ? void 0 : i.slow) ||
            void 0 === o
              ? void 0
              : o.active) &&
            (this.events.onHover.mode instanceof Array
              ? this.events.onHover.mode.indexOf("slow") < 0 &&
                this.events.onHover.mode.push("slow")
              : "slow" !== this.events.onHover.mode &&
                (this.events.onHover.mode = [
                  this.events.onHover.mode,
                  "slow",
                ]));
      }
    }
    class Ae {
      load(t) {
        var e, i;
        t &&
          (void 0 !== t.position &&
            (this.position = {
              x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
              y: null !== (i = t.position.y) && void 0 !== i ? i : 50,
            }),
          void 0 !== t.options && (this.options = L({}, t.options)));
      }
    }
    class Ie {
      constructor() {
        (this.factor = 4), (this.value = !0);
      }
      load(t) {
        t &&
          (void 0 !== t.factor && (this.factor = t.factor),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class De {
      constructor() {
        (this.disable = !1), (this.reduce = new Ie());
      }
      load(t) {
        t &&
          (void 0 !== t.disable && (this.disable = t.disable),
          this.reduce.load(t.reduce));
      }
    }
    class Le {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.offset = 0),
          (this.speed = 1),
          (this.sync = !0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset && (this.offset = f(t.offset)),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class He {
      constructor() {
        (this.h = new Le()), (this.s = new Le()), (this.l = new Le());
      }
      load(t) {
        t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
      }
    }
    class qe extends te {
      constructor() {
        super(), (this.animation = new He());
      }
      static create(t, e) {
        const i = new qe();
        return (
          i.load(t),
          void 0 !== e &&
            ("string" == typeof e || e instanceof Array
              ? i.load({ value: e })
              : i.load(e)),
          i
        );
      }
      load(t) {
        if ((super.load(t), !t)) return;
        const e = t.animation;
        void 0 !== e &&
          (void 0 !== e.enable
            ? this.animation.h.load(e)
            : this.animation.load(t.animation));
      }
    }
    class _e {
      constructor() {
        (this.angle = new Fe()), (this.colors = []), (this.type = "random");
      }
      load(t) {
        t &&
          (this.angle.load(t.angle),
          void 0 !== t.colors &&
            (this.colors = t.colors.map((t) => {
              const e = new Be();
              return e.load(t), e;
            })),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class Fe {
      constructor() {
        (this.value = 0),
          (this.animation = new We()),
          (this.direction = "clockwise");
      }
      load(t) {
        t &&
          (this.animation.load(t.animation),
          void 0 !== t.value && (this.value = t.value),
          void 0 !== t.direction && (this.direction = t.direction));
      }
    }
    class Ve {
      constructor() {
        (this.value = 0), (this.animation = new je());
      }
      load(t) {
        t &&
          (this.animation.load(t.animation),
          void 0 !== t.value && (this.value = f(t.value)));
      }
    }
    class Be {
      constructor() {
        (this.stop = 0), (this.value = new qe());
      }
      load(t) {
        t &&
          (void 0 !== t.stop && (this.stop = t.stop),
          (this.value = qe.create(this.value, t.value)),
          void 0 !== t.opacity &&
            ((this.opacity = new Ve()),
            "number" == typeof t.opacity
              ? (this.opacity.value = t.opacity)
              : this.opacity.load(t.opacity)));
      }
    }
    class We {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 0),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class je {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 0),
          (this.sync = !1),
          (this.startValue = "random");
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync),
          void 0 !== t.startValue && (this.startValue = t.startValue));
      }
    }
    class Ge {
      constructor() {
        (this.enable = !1), (this.minimumValue = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
      }
    }
    class Ue {
      constructor() {
        (this.random = new Ge()), (this.value = 0);
      }
      load(t) {
        t &&
          ("boolean" == typeof t.random
            ? (this.random.enable = t.random)
            : this.random.load(t.random),
          void 0 !== t.value &&
            (this.value = f(
              t.value,
              this.random.enable ? this.random.minimumValue : void 0
            )));
      }
    }
    class $e extends Ue {
      constructor() {
        super(), (this.random.minimumValue = 0.1), (this.value = 1);
      }
    }
    class Ne {
      constructor() {
        (this.horizontal = new $e()), (this.vertical = new $e());
      }
      load(t) {
        t &&
          (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
      }
    }
    class Je {
      constructor() {
        (this.enable = !0), (this.retries = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.retries && (this.retries = t.retries));
      }
    }
    class Xe {
      constructor() {
        (this.bounce = new Ne()),
          (this.enable = !1),
          (this.mode = "bounce"),
          (this.overlap = new Je());
      }
      load(t) {
        void 0 !== t &&
          (this.bounce.load(t.bounce),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.overlap.load(t.overlap));
      }
    }
    class Ye extends Ue {
      constructor() {
        super(), (this.value = 3);
      }
    }
    class Qe extends Ue {
      constructor() {
        super(), (this.value = { min: 4, max: 9 });
      }
    }
    class Ze {
      constructor() {
        (this.count = 1),
          (this.factor = new Ye()),
          (this.rate = new Qe()),
          (this.sizeOffset = !0);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          this.factor.load(t.factor),
          this.rate.load(t.rate),
          void 0 !== t.particles && (this.particles = L({}, t.particles)),
          void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset));
      }
    }
    class Ke {
      constructor() {
        (this.mode = "none"), (this.split = new Ze());
      }
      load(t) {
        t &&
          (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split));
      }
    }
    class ti extends Ue {
      constructor() {
        super(), (this.sync = !1);
      }
      load(t) {
        t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class ei extends Ue {
      constructor() {
        super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
      }
      load(t) {
        void 0 !== t &&
          (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class ii {
      constructor() {
        (this.count = 0), (this.delay = new ti()), (this.duration = new ei());
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.count && (this.count = t.count),
          this.delay.load(t.delay),
          this.duration.load(t.duration));
      }
    }
    class oi {
      constructor() {
        (this.blur = 5),
          (this.color = new te()),
          (this.enable = !1),
          (this.color.value = "#00ff00");
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.blur && (this.blur = t.blur),
          (this.color = te.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class si {
      constructor() {
        (this.enable = !1), (this.frequency = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.frequency && (this.frequency = t.frequency),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class ni {
      constructor() {
        (this.blink = !1),
          (this.color = new te()),
          (this.consent = !1),
          (this.distance = 100),
          (this.enable = !1),
          (this.frequency = 1),
          (this.opacity = 1),
          (this.shadow = new oi()),
          (this.triangles = new si()),
          (this.width = 1),
          (this.warp = !1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.id && (this.id = t.id),
          void 0 !== t.blink && (this.blink = t.blink),
          (this.color = te.create(this.color, t.color)),
          void 0 !== t.consent && (this.consent = t.consent),
          void 0 !== t.distance && (this.distance = t.distance),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.frequency && (this.frequency = t.frequency),
          void 0 !== t.opacity && (this.opacity = t.opacity),
          this.shadow.load(t.shadow),
          this.triangles.load(t.triangles),
          void 0 !== t.width && (this.width = t.width),
          void 0 !== t.warp && (this.warp = t.warp));
      }
    }
    class ai {
      constructor() {
        (this.distance = 200),
          (this.enable = !1),
          (this.rotate = { x: 3e3, y: 3e3 });
      }
      get rotateX() {
        return this.rotate.x;
      }
      set rotateX(t) {
        this.rotate.x = t;
      }
      get rotateY() {
        return this.rotate.y;
      }
      set rotateY(t) {
        this.rotate.y = t;
      }
      load(t) {
        var e, i, o, s;
        if (!t) return;
        void 0 !== t.distance && (this.distance = t.distance),
          void 0 !== t.enable && (this.enable = t.enable);
        const n =
          null !==
            (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) &&
          void 0 !== i
            ? i
            : t.rotateX;
        void 0 !== n && (this.rotate.x = n);
        const a =
          null !==
            (s = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) &&
          void 0 !== s
            ? s
            : t.rotateY;
        void 0 !== a && (this.rotate.y = a);
      }
    }
    class ri {
      constructor() {
        (this.offset = 0), (this.value = 90);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.offset && (this.offset = t.offset),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class li {
      constructor() {
        (this.acceleration = 9.81),
          (this.enable = !1),
          (this.inverse = !1),
          (this.maxSpeed = 50);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = t.acceleration),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.inverse && (this.inverse = t.inverse),
          void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
      }
    }
    class ci {
      constructor() {
        this.default = "out";
      }
      load(t) {
        var e, i, o, s;
        t &&
          (void 0 !== t.default && (this.default = t.default),
          (this.bottom =
            null !== (e = t.bottom) && void 0 !== e ? e : t.default),
          (this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
          (this.right = null !== (o = t.right) && void 0 !== o ? o : t.default),
          (this.top = null !== (s = t.top) && void 0 !== s ? s : t.default));
      }
    }
    class di extends Ue {
      constructor() {
        super();
      }
    }
    class hi {
      constructor() {
        (this.clamp = !0),
          (this.delay = new di()),
          (this.enable = !1),
          (this.options = {});
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.clamp && (this.clamp = t.clamp),
          this.delay.load(t.delay),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.generator = t.generator),
          t.options && (this.options = L(this.options, t.options)));
      }
    }
    class ui {
      constructor() {
        (this.acceleration = 0), (this.enable = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = f(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.position = t.position ? L({}, t.position) : void 0));
      }
    }
    class pi {
      constructor() {
        (this.enable = !1),
          (this.length = 10),
          (this.fillColor = new te()),
          (this.fillColor.value = "#000000");
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          (this.fillColor = te.create(this.fillColor, t.fillColor)),
          void 0 !== t.length && (this.length = t.length));
      }
    }
    class vi {
      constructor() {
        (this.angle = new ri()),
          (this.attract = new ai()),
          (this.decay = 0),
          (this.distance = {}),
          (this.direction = "none"),
          (this.drift = 0),
          (this.enable = !1),
          (this.gravity = new li()),
          (this.path = new hi()),
          (this.outModes = new ci()),
          (this.random = !1),
          (this.size = !1),
          (this.speed = 2),
          (this.spin = new ui()),
          (this.straight = !1),
          (this.trail = new pi()),
          (this.vibrate = !1),
          (this.warp = !1);
      }
      get collisions() {
        return !1;
      }
      set collisions(t) {}
      get bounce() {
        return this.collisions;
      }
      set bounce(t) {
        this.collisions = t;
      }
      get out_mode() {
        return this.outMode;
      }
      set out_mode(t) {
        this.outMode = t;
      }
      get outMode() {
        return this.outModes.default;
      }
      set outMode(t) {
        this.outModes.default = t;
      }
      get noise() {
        return this.path;
      }
      set noise(t) {
        this.path = t;
      }
      load(t) {
        var e, i, o;
        if (void 0 === t) return;
        void 0 !== t.angle &&
          ("number" == typeof t.angle
            ? (this.angle.value = t.angle)
            : this.angle.load(t.angle)),
          this.attract.load(t.attract),
          void 0 !== t.decay && (this.decay = t.decay),
          void 0 !== t.direction && (this.direction = t.direction),
          void 0 !== t.distance &&
            (this.distance =
              "number" == typeof t.distance
                ? { horizontal: t.distance, vertical: t.distance }
                : L({}, t.distance)),
          void 0 !== t.drift && (this.drift = f(t.drift)),
          void 0 !== t.enable && (this.enable = t.enable),
          this.gravity.load(t.gravity);
        const s = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
        (void 0 === t.outModes && void 0 === s) ||
          ("string" == typeof t.outModes ||
          (void 0 === t.outModes && void 0 !== s)
            ? this.outModes.load({
                default: null !== (i = t.outModes) && void 0 !== i ? i : s,
              })
            : this.outModes.load(t.outModes)),
          this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise),
          void 0 !== t.random && (this.random = t.random),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.speed && (this.speed = f(t.speed)),
          this.spin.load(t.spin),
          void 0 !== t.straight && (this.straight = t.straight),
          this.trail.load(t.trail),
          void 0 !== t.vibrate && (this.vibrate = t.vibrate),
          void 0 !== t.warp && (this.warp = t.warp);
      }
    }
    class fi {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 1),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class yi extends fi {
      constructor() {
        super(),
          (this.destroy = "none"),
          (this.enable = !1),
          (this.speed = 2),
          (this.startValue = "random"),
          (this.sync = !1);
      }
      get opacity_min() {
        return this.minimumValue;
      }
      set opacity_min(t) {
        this.minimumValue = t;
      }
      load(t) {
        var e;
        void 0 !== t &&
          (super.load(t),
          void 0 !== t.destroy && (this.destroy = t.destroy),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.minimumValue =
            null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.startValue && (this.startValue = t.startValue),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class mi extends Ue {
      constructor() {
        super(),
          (this.animation = new yi()),
          (this.random.minimumValue = 0.1),
          (this.value = 1);
      }
      get anim() {
        return this.animation;
      }
      set anim(t) {
        this.animation = t;
      }
      load(t) {
        var e;
        if (!t) return;
        super.load(t);
        const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
        void 0 !== i &&
          (this.animation.load(i),
          (this.value = f(
            this.value,
            this.animation.enable ? this.animation.minimumValue : void 0
          )));
      }
    }
    class bi extends Ue {
      constructor() {
        super(),
          (this.value = 45),
          (this.random.enable = !1),
          (this.random.minimumValue = 0);
      }
      load(t) {
        void 0 !== t && super.load(t);
      }
    }
    class gi {
      constructor() {
        (this.animation = new fi()),
          (this.enable = !1),
          (this.opacity = 1),
          (this.rotation = new bi()),
          (this.width = 1);
      }
      load(t) {
        void 0 !== t &&
          (this.animation.load(t.animation),
          this.rotation.load(t.rotation),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.opacity && (this.opacity = t.opacity),
          void 0 !== t.width && (this.width = t.width),
          void 0 !== t.radius && (this.radius = t.radius),
          void 0 !== t.color && (this.color = te.create(this.color, t.color)));
      }
    }
    class wi {
      constructor() {
        (this.enable = !1), (this.area = 800), (this.factor = 1e3);
      }
      get value_area() {
        return this.area;
      }
      set value_area(t) {
        this.area = t;
      }
      load(t) {
        var e;
        if (void 0 === t) return;
        void 0 !== t.enable && (this.enable = t.enable);
        const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
        void 0 !== i && (this.area = i),
          void 0 !== t.factor && (this.factor = t.factor);
      }
    }
    class xi {
      constructor() {
        (this.density = new wi()), (this.limit = 0), (this.value = 100);
      }
      get max() {
        return this.limit;
      }
      set max(t) {
        this.limit = t;
      }
      load(t) {
        var e;
        if (void 0 === t) return;
        this.density.load(t.density);
        const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
        void 0 !== i && (this.limit = i),
          void 0 !== t.value && (this.value = t.value);
      }
    }
    class ki extends Ue {
      constructor() {
        super(),
          (this.enabled = !1),
          (this.distance = 1),
          (this.duration = 1),
          (this.factor = 1),
          (this.speed = 1);
      }
      load(t) {
        super.load(t),
          t &&
            (void 0 !== t.enabled && (this.enabled = t.enabled),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.speed && (this.speed = t.speed));
      }
    }
    class Pi {
      constructor() {
        (this.enable = !1), (this.value = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Mi {
      constructor() {
        (this.darken = new Pi()),
          (this.enable = !1),
          (this.enlighten = new Pi()),
          (this.mode = "vertical"),
          (this.speed = 25);
      }
      load(t) {
        t &&
          (void 0 !== t.backColor &&
            (this.backColor = te.create(this.backColor, t.backColor)),
          this.darken.load(t.darken),
          void 0 !== t.enable && (this.enable = t.enable),
          this.enlighten.load(t.enlighten),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.speed && (this.speed = f(t.speed)));
      }
    }
    class zi {
      constructor() {
        (this.enable = !1), (this.speed = 0), (this.sync = !1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Ci extends Ue {
      constructor() {
        super(),
          (this.animation = new zi()),
          (this.direction = "clockwise"),
          (this.path = !1),
          (this.value = 0);
      }
      load(t) {
        t &&
          (super.load(t),
          void 0 !== t.direction && (this.direction = t.direction),
          this.animation.load(t.animation),
          void 0 !== t.path && (this.path = t.path));
      }
    }
    class Ti {
      constructor() {
        (this.blur = 0),
          (this.color = new te()),
          (this.enable = !1),
          (this.offset = { x: 0, y: 0 }),
          (this.color.value = "#000000");
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.blur && (this.blur = t.blur),
          (this.color = te.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset &&
            (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
            void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
      }
    }
    class Ei {
      constructor() {
        (this.options = {}), (this.type = "circle");
      }
      get image() {
        var t;
        return null !== (t = this.options.image) && void 0 !== t
          ? t
          : this.options.images;
      }
      set image(t) {
        (this.options.image = t), (this.options.images = t);
      }
      get custom() {
        return this.options;
      }
      set custom(t) {
        this.options = t;
      }
      get images() {
        return this.image;
      }
      set images(t) {
        this.image = t;
      }
      get stroke() {
        return [];
      }
      set stroke(t) {}
      get character() {
        var t;
        return null !== (t = this.options.character) && void 0 !== t
          ? t
          : this.options.char;
      }
      set character(t) {
        (this.options.character = t), (this.options.char = t);
      }
      get polygon() {
        var t;
        return null !== (t = this.options.polygon) && void 0 !== t
          ? t
          : this.options.star;
      }
      set polygon(t) {
        (this.options.polygon = t), (this.options.star = t);
      }
      load(t) {
        var e, i, o;
        if (void 0 === t) return;
        const s = null !== (e = t.options) && void 0 !== e ? e : t.custom;
        if (void 0 !== s)
          for (const t in s) {
            const e = s[t];
            void 0 !== e &&
              (this.options[t] = L(
                null !== (i = this.options[t]) && void 0 !== i ? i : {},
                e
              ));
          }
        this.loadShape(t.character, "character", "char", !0),
          this.loadShape(t.polygon, "polygon", "star", !1),
          this.loadShape(
            null !== (o = t.image) && void 0 !== o ? o : t.images,
            "image",
            "images",
            !0
          ),
          void 0 !== t.type && (this.type = t.type);
      }
      loadShape(t, e, i, o) {
        var s, n, a, r;
        void 0 !== t &&
          (t instanceof Array
            ? (this.options[e] instanceof Array ||
                ((this.options[e] = []),
                (this.options[i] && !o) || (this.options[i] = [])),
              (this.options[e] = L(
                null !== (s = this.options[e]) && void 0 !== s ? s : [],
                t
              )),
              (this.options[i] && !o) ||
                (this.options[i] = L(
                  null !== (n = this.options[i]) && void 0 !== n ? n : [],
                  t
                )))
            : (this.options[e] instanceof Array &&
                ((this.options[e] = {}),
                (this.options[i] && !o) || (this.options[i] = {})),
              (this.options[e] = L(
                null !== (a = this.options[e]) && void 0 !== a ? a : {},
                t
              )),
              (this.options[i] && !o) ||
                (this.options[i] = L(
                  null !== (r = this.options[i]) && void 0 !== r ? r : {},
                  t
                ))));
      }
    }
    class Si extends fi {
      constructor() {
        super(),
          (this.destroy = "none"),
          (this.enable = !1),
          (this.speed = 5),
          (this.startValue = "random"),
          (this.sync = !1);
      }
      get size_min() {
        return this.minimumValue;
      }
      set size_min(t) {
        this.minimumValue = t;
      }
      load(t) {
        var e;
        void 0 !== t &&
          (super.load(t),
          void 0 !== t.destroy && (this.destroy = t.destroy),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.minimumValue =
            null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.startValue && (this.startValue = t.startValue),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Oi extends Ue {
      constructor() {
        super(),
          (this.animation = new Si()),
          (this.random.minimumValue = 1),
          (this.value = 3);
      }
      get anim() {
        return this.animation;
      }
      set anim(t) {
        this.animation = t;
      }
      load(t) {
        var e;
        if (!t) return;
        super.load(t);
        const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
        void 0 !== i &&
          (this.animation.load(i),
          (this.value = f(
            this.value,
            this.animation.enable ? this.animation.minimumValue : void 0
          )));
      }
    }
    class Ri {
      constructor() {
        this.width = 0;
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = qe.create(this.color, t.color)),
          void 0 !== t.width && (this.width = t.width),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class Ai {
      constructor() {
        (this.enable = !1), (this.speed = 0), (this.sync = !1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Ii extends Ue {
      constructor() {
        super(),
          (this.animation = new Ai()),
          (this.direction = "clockwise"),
          (this.enable = !1),
          (this.value = 0);
      }
      load(t) {
        t &&
          (super.load(t),
          this.animation.load(t.animation),
          void 0 !== t.direction && (this.direction = t.direction),
          void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class Di {
      constructor() {
        (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.frequency && (this.frequency = t.frequency),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class Li {
      constructor() {
        (this.lines = new Di()), (this.particles = new Di());
      }
      load(t) {
        void 0 !== t &&
          (this.lines.load(t.lines), this.particles.load(t.particles));
      }
    }
    class Hi {
      constructor() {
        (this.distance = 5), (this.enable = !1), (this.speed = 50);
      }
      load(t) {
        t &&
          (void 0 !== t.distance && (this.distance = f(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = f(t.speed)));
      }
    }
    class qi extends Ue {
      constructor() {
        super(),
          (this.opacityRate = 1),
          (this.sizeRate = 1),
          (this.velocityRate = 1);
      }
      load(t) {
        super.load(t),
          t &&
            (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
            void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
            void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
      }
    }
    class _i {
      constructor() {
        (this.bounce = new Ne()),
          (this.collisions = new Xe()),
          (this.color = new qe()),
          (this.destroy = new Ke()),
          (this.gradient = []),
          (this.groups = {}),
          (this.life = new ii()),
          (this.links = new ni()),
          (this.move = new vi()),
          (this.number = new xi()),
          (this.opacity = new mi()),
          (this.orbit = new gi()),
          (this.reduceDuplicates = !1),
          (this.repulse = new ki()),
          (this.roll = new Mi()),
          (this.rotate = new Ci()),
          (this.shadow = new Ti()),
          (this.shape = new Ei()),
          (this.size = new Oi()),
          (this.stroke = new Ri()),
          (this.tilt = new Ii()),
          (this.twinkle = new Li()),
          (this.wobble = new Hi()),
          (this.zIndex = new qi());
      }
      get line_linked() {
        return this.links;
      }
      set line_linked(t) {
        this.links = t;
      }
      get lineLinked() {
        return this.links;
      }
      set lineLinked(t) {
        this.links = t;
      }
      load(t) {
        var e, i, o, s, n, a, r, l;
        if (void 0 === t) return;
        this.bounce.load(t.bounce),
          this.color.load(qe.create(this.color, t.color)),
          this.destroy.load(t.destroy),
          this.life.load(t.life);
        const c =
          null !==
            (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) &&
          void 0 !== i
            ? i
            : t.line_linked;
        if ((void 0 !== c && this.links.load(c), void 0 !== t.groups))
          for (const e in t.groups) {
            const i = t.groups[e];
            void 0 !== i &&
              (this.groups[e] = L(
                null !== (o = this.groups[e]) && void 0 !== o ? o : {},
                i
              ));
          }
        this.move.load(t.move),
          this.number.load(t.number),
          this.opacity.load(t.opacity),
          this.orbit.load(t.orbit),
          void 0 !== t.reduceDuplicates &&
            (this.reduceDuplicates = t.reduceDuplicates),
          this.repulse.load(t.repulse),
          this.roll.load(t.roll),
          this.rotate.load(t.rotate),
          this.shape.load(t.shape),
          this.size.load(t.size),
          this.shadow.load(t.shadow),
          this.tilt.load(t.tilt),
          this.twinkle.load(t.twinkle),
          this.wobble.load(t.wobble),
          this.zIndex.load(t.zIndex);
        const d =
          null !==
            (n =
              null === (s = t.move) || void 0 === s ? void 0 : s.collisions) &&
          void 0 !== n
            ? n
            : null === (a = t.move) || void 0 === a
            ? void 0
            : a.bounce;
        void 0 !== d && (this.collisions.enable = d),
          this.collisions.load(t.collisions);
        const h =
          null !== (r = t.stroke) && void 0 !== r
            ? r
            : null === (l = t.shape) || void 0 === l
            ? void 0
            : l.stroke;
        h &&
          (h instanceof Array
            ? (this.stroke = h.map((t) => {
                const e = new Ri();
                return e.load(t), e;
              }))
            : (this.stroke instanceof Array && (this.stroke = new Ri()),
              this.stroke.load(h)));
        const u = t.gradient;
        u &&
          (u instanceof Array
            ? (this.gradient = u.map((t) => {
                const e = new _e();
                return e.load(t), e;
              }))
            : (this.gradient instanceof Array && (this.gradient = new _e()),
              this.gradient.load(u)));
      }
    }
    class Fi {
      constructor() {
        (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
      }
      load(t) {
        t &&
          (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
          void 0 !== t.mode &&
            ("screen" === t.mode
              ? (this.mode = "screen")
              : (this.mode = "canvas")),
          void 0 !== t.options && (this.options = L({}, t.options)));
      }
    }
    class Vi {
      constructor() {
        (this.auto = !1), (this.mode = "any"), (this.value = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.auto && (this.auto = t.auto),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class Bi {
      constructor() {
        (this.name = ""), (this.default = new Vi());
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.name && (this.name = t.name),
          this.default.load(t.default),
          void 0 !== t.options && (this.options = L({}, t.options)));
      }
    }
    var Wi,
      ji,
      Gi,
      Ui = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      $i = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class Ni {
      constructor(t) {
        Wi.add(this),
          ji.set(this, void 0),
          Ui(this, ji, t, "f"),
          (this.autoPlay = !0),
          (this.background = new ee()),
          (this.backgroundMask = new oe()),
          (this.fullScreen = new se()),
          (this.detectRetina = !0),
          (this.duration = 0),
          (this.fpsLimit = 120),
          (this.interactivity = new Re()),
          (this.manualParticles = []),
          (this.motion = new De()),
          (this.particles = new _i()),
          (this.pauseOnBlur = !0),
          (this.pauseOnOutsideViewport = !0),
          (this.responsive = []),
          (this.style = {}),
          (this.themes = []),
          (this.zLayers = 100);
      }
      get fps_limit() {
        return this.fpsLimit;
      }
      set fps_limit(t) {
        this.fpsLimit = t;
      }
      get retina_detect() {
        return this.detectRetina;
      }
      set retina_detect(t) {
        this.detectRetina = t;
      }
      get backgroundMode() {
        return this.fullScreen;
      }
      set backgroundMode(t) {
        this.fullScreen.load(t);
      }
      load(t) {
        var e, i, o, s, n;
        if (void 0 === t) return;
        if (void 0 !== t.preset)
          if (t.preset instanceof Array)
            for (const e of t.preset) this.importPreset(e);
          else this.importPreset(t.preset);
        void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
        const a =
          null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
        void 0 !== a && (this.detectRetina = a),
          void 0 !== t.duration && (this.duration = t.duration);
        const r = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
        void 0 !== r && (this.fpsLimit = r),
          void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
          void 0 !== t.pauseOnOutsideViewport &&
            (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
          void 0 !== t.zLayers && (this.zLayers = t.zLayers),
          this.background.load(t.background);
        const l =
          null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode;
        if (
          ("boolean" == typeof l
            ? (this.fullScreen.enable = l)
            : this.fullScreen.load(l),
          this.backgroundMask.load(t.backgroundMask),
          this.interactivity.load(t.interactivity),
          void 0 !== t.manualParticles &&
            (this.manualParticles = t.manualParticles.map((t) => {
              const e = new Ae();
              return e.load(t), e;
            })),
          this.motion.load(t.motion),
          this.particles.load(t.particles),
          (this.style = L(this.style, t.style)),
          $i(this, ji, "f").plugins.loadOptions(this, t),
          void 0 !== t.responsive)
        )
          for (const e of t.responsive) {
            const t = new Fi();
            t.load(e), this.responsive.push(t);
          }
        if (
          (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
          void 0 !== t.themes)
        )
          for (const e of t.themes) {
            const t = new Bi();
            t.load(e), this.themes.push(t);
          }
        (this.defaultDarkTheme =
          null === (s = $i(this, Wi, "m", Gi).call(this, "dark")) ||
          void 0 === s
            ? void 0
            : s.name),
          (this.defaultLightTheme =
            null === (n = $i(this, Wi, "m", Gi).call(this, "light")) ||
            void 0 === n
              ? void 0
              : n.name);
      }
      setTheme(t) {
        if (t) {
          const e = this.themes.find((e) => e.name === t);
          e && this.load(e.options);
        } else {
          const t =
              "undefined" != typeof matchMedia &&
              matchMedia("(prefers-color-scheme: dark)"),
            e = t && t.matches,
            i = $i(this, Wi, "m", Gi).call(this, e ? "dark" : "light");
          i && this.load(i.options);
        }
      }
      setResponsive(t, e, i) {
        this.load(i);
        const o = this.responsive.find((i) =>
          "screen" === i.mode && screen
            ? i.maxWidth * e > screen.availWidth
            : i.maxWidth * e > t
        );
        return (
          this.load(null == o ? void 0 : o.options),
          null == o ? void 0 : o.maxWidth
        );
      }
      importPreset(t) {
        this.load($i(this, ji, "f").plugins.getPreset(t));
      }
    }
    (ji = new WeakMap()),
      (Wi = new WeakSet()),
      (Gi = function (t) {
        var e;
        return null !==
          (e = this.themes.find(
            (e) => e.default.value && e.default.mode === t
          )) && void 0 !== e
          ? e
          : this.themes.find(
              (t) => t.default.value && "any" === t.default.mode
            );
      });
    var Ji,
      Xi = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      Yi = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    const Qi = (t) => {
      (E(t.outMode, t.checkModes) || E(t.outMode, t.checkModes)) &&
        (t.coord > t.maxCoord - 2 * t.radius
          ? t.setCb(-t.radius)
          : t.coord < 2 * t.radius && t.setCb(t.radius));
    };
    class Zi {
      constructor(t, e, i, o, s, n) {
        var a, r, l, d, f, m, w, x, k;
        (this.id = e),
          (this.container = i),
          (this.group = n),
          Ji.set(this, void 0),
          Xi(this, Ji, t, "f"),
          (this.fill = !0),
          (this.close = !0),
          (this.lastPathTime = 0),
          (this.destroyed = !1),
          (this.unbreakable = !1),
          (this.splitCount = 0),
          (this.misplaced = !1),
          (this.retina = { maxDistance: {} });
        const P = i.retina.pixelRatio,
          M = i.actualOptions,
          z = new _i();
        z.load(M.particles);
        const C = z.shape.type,
          T = z.reduceDuplicates;
        if (
          ((this.shape = C instanceof Array ? R(C, this.id, T) : C),
          null == s ? void 0 : s.shape)
        ) {
          if (s.shape.type) {
            const t = s.shape.type;
            this.shape = t instanceof Array ? R(t, this.id, T) : t;
          }
          const t = new Ei();
          t.load(s.shape),
            this.shape && (this.shapeData = this.loadShapeData(t, T));
        } else this.shapeData = this.loadShapeData(z.shape, T);
        void 0 !== s && z.load(s),
          void 0 !==
            (null === (a = this.shapeData) || void 0 === a
              ? void 0
              : a.particles) &&
            z.load(
              null === (r = this.shapeData) || void 0 === r
                ? void 0
                : r.particles
            ),
          (this.fill =
            null !==
              (d =
                null === (l = this.shapeData) || void 0 === l
                  ? void 0
                  : l.fill) && void 0 !== d
              ? d
              : this.fill),
          (this.close =
            null !==
              (m =
                null === (f = this.shapeData) || void 0 === f
                  ? void 0
                  : f.close) && void 0 !== m
              ? m
              : this.close),
          (this.options = z),
          (this.pathDelay = 1e3 * y(this.options.move.path.delay));
        const E = u(this.options.zIndex.value);
        i.retina.initParticle(this);
        const S = this.options.size,
          O = S.value;
        this.size = {
          enable: S.animation.enable,
          value: y(S) * i.retina.pixelRatio,
          max: v(O) * P,
          min: p(O) * P,
          loops: 0,
          maxLoops: S.animation.count,
        };
        const A = S.animation;
        if (A.enable) {
          switch (((this.size.status = 0), A.startValue)) {
            case "min":
              (this.size.value = this.size.min), (this.size.status = 0);
              break;
            case "random":
              (this.size.value = h(this.size) * P),
                (this.size.status = Math.random() >= 0.5 ? 0 : 1);
              break;
            case "max":
            default:
              (this.size.value = this.size.max), (this.size.status = 1);
          }
          (this.size.velocity =
            ((null !== (w = this.retina.sizeAnimationSpeed) && void 0 !== w
              ? w
              : i.retina.sizeAnimationSpeed) /
              100) *
            i.retina.reduceFactor),
            A.sync || (this.size.velocity *= Math.random());
        }
        (this.direction = g(this.options.move.direction)),
          (this.bubble = { inRange: !1 }),
          (this.initialVelocity = this.calculateVelocity()),
          (this.velocity = this.initialVelocity.copy()),
          (this.moveDecay = 1 - u(this.options.move.decay)),
          (this.position = this.calcPosition(i, o, c(E, 0, i.zLayers))),
          (this.initialPosition = this.position.copy()),
          (this.offset = Qt.origin);
        const I = i.particles;
        (I.needsSort = I.needsSort || I.lastZIndex < this.position.z),
          (I.lastZIndex = this.position.z),
          (this.zIndexFactor = this.position.z / i.zLayers),
          (this.sides = 24);
        let D = i.drawers.get(this.shape);
        D ||
          ((D = Yi(this, Ji, "f").plugins.getShapeDrawer(this.shape)),
          D && i.drawers.set(this.shape, D)),
          (null == D ? void 0 : D.loadShape) &&
            (null == D || D.loadShape(this));
        const L = null == D ? void 0 : D.getSidesCount;
        if (
          (L && (this.sides = L(this)),
          (this.life = this.loadLife()),
          (this.spawning = this.life.delay > 0),
          this.options.move.spin.enable)
        ) {
          const t =
              null !== (x = this.options.move.spin.position) && void 0 !== x
                ? x
                : { x: 50, y: 50 },
            e = {
              x: (t.x / 100) * i.canvas.size.width,
              y: (t.y / 100) * i.canvas.size.height,
            },
            o = b(this.getPosition(), e);
          this.spin = {
            center: e,
            direction: this.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
            angle: this.velocity.angle,
            radius: o,
            acceleration:
              null !== (k = this.retina.spinAcceleration) && void 0 !== k
                ? k
                : u(this.options.move.spin.acceleration),
          };
        }
        this.shadowColor = U(this.options.shadow.color);
        for (const t of i.particles.updaters) t.init && t.init(this);
        D && D.particleInit && D.particleInit(i, this);
        for (const [, t] of i.plugins)
          t.particleCreated && t.particleCreated(this);
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      isInsideCanvas() {
        const t = this.getRadius(),
          e = this.container.canvas.size;
        return (
          this.position.x >= -t &&
          this.position.y >= -t &&
          this.position.y <= e.height + t &&
          this.position.x <= e.width + t
        );
      }
      draw(t) {
        const e = this.container;
        for (const [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
        e.canvas.drawParticle(this, t);
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z,
        };
      }
      getRadius() {
        var t;
        return null !== (t = this.bubble.radius) && void 0 !== t
          ? t
          : this.size.value;
      }
      getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
      }
      getFillColor() {
        var t, e;
        const i =
          null !== (t = this.bubble.color) && void 0 !== t ? t : pt(this.color);
        if (i && this.roll && (this.backColor || this.roll.alter)) {
          const t = "both" === this.options.roll.mode ? 2 : 1,
            o = "horizontal" === this.options.roll.mode ? Math.PI / 2 : 0;
          if (
            Math.floor(
              ((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + o) /
                (Math.PI / t)
            ) % 2
          ) {
            if (this.backColor) return this.backColor;
            if (this.roll.alter)
              return Ot(i, this.roll.alter.type, this.roll.alter.value);
          }
        }
        return i;
      }
      getStrokeColor() {
        var t, e;
        return null !==
          (e =
            null !== (t = this.bubble.color) && void 0 !== t
              ? t
              : pt(this.strokeColor)) && void 0 !== e
          ? e
          : this.getFillColor();
      }
      destroy(t) {
        if (
          ((this.destroyed = !0), (this.bubble.inRange = !1), this.unbreakable)
        )
          return;
        (this.destroyed = !0), (this.bubble.inRange = !1);
        for (const [, e] of this.container.plugins)
          e.particleDestroyed && e.particleDestroyed(this, t);
        if (t) return;
        "split" === this.options.destroy.mode && this.split();
      }
      reset() {
        this.opacity && (this.opacity.loops = 0), (this.size.loops = 0);
      }
      split() {
        const t = this.options.destroy.split;
        if (t.count >= 0 && this.splitCount++ > t.count) return;
        const e = u(t.rate.value);
        for (let t = 0; t < e; t++)
          this.container.particles.addSplitParticle(this);
      }
      calcPosition(t, e, i, o = 0) {
        var s, n, a, r, l, c;
        for (const [, o] of t.plugins) {
          const t =
            void 0 !== o.particlePosition
              ? o.particlePosition(e, this)
              : void 0;
          if (void 0 !== t) return Zt.create(t.x, t.y, i);
        }
        const d = t.canvas.size,
          h = Zt.create(
            null !== (s = null == e ? void 0 : e.x) && void 0 !== s
              ? s
              : Math.random() * d.width,
            null !== (n = null == e ? void 0 : e.y) && void 0 !== n
              ? n
              : Math.random() * d.height,
            i
          ),
          u = this.getRadius(),
          p = this.options.move.outModes,
          v = (e) => {
            Qi({
              outMode: e,
              checkModes: ["bounce", "bounce-horizontal"],
              coord: h.x,
              maxCoord: t.canvas.size.width,
              setCb: (t) => (h.x += t),
              radius: u,
            });
          },
          f = (e) => {
            Qi({
              outMode: e,
              checkModes: ["bounce", "bounce-vertical"],
              coord: h.y,
              maxCoord: t.canvas.size.height,
              setCb: (t) => (h.y += t),
              radius: u,
            });
          };
        return (
          v(null !== (a = p.left) && void 0 !== a ? a : p.default),
          v(null !== (r = p.right) && void 0 !== r ? r : p.default),
          f(null !== (l = p.top) && void 0 !== l ? l : p.default),
          f(null !== (c = p.bottom) && void 0 !== c ? c : p.default),
          this.checkOverlap(h, o) ? this.calcPosition(t, void 0, i, o + 1) : h
        );
      }
      checkOverlap(t, e = 0) {
        const i = this.options.collisions,
          o = this.getRadius();
        if (!i.enable) return !1;
        const s = i.overlap;
        if (s.enable) return !1;
        const n = s.retries;
        if (n >= 0 && e > n)
          throw new Error("Particle is overlapping and can't be placed");
        let a = !1;
        for (const e of this.container.particles.array)
          if (b(t, e.position) < o + e.getRadius()) {
            a = !0;
            break;
          }
        return a;
      }
      calculateVelocity() {
        const t = w(this.direction).copy(),
          e = this.options.move,
          i = (Math.PI / 180) * e.angle.value,
          o = (Math.PI / 180) * e.angle.offset,
          s = { left: o - i / 2, right: o + i / 2 };
        return (
          e.straight || (t.angle += h(f(s.left, s.right))),
          e.random && "number" == typeof e.speed && (t.length *= Math.random()),
          t
        );
      }
      loadShapeData(t, e) {
        const i = t.options[this.shape];
        if (i) return L({}, i instanceof Array ? R(i, this.id, e) : i);
      }
      loadLife() {
        const t = this.container,
          e = this.options,
          i = e.life,
          o = {
            delay: t.retina.reduceFactor
              ? ((u(i.delay.value) * (i.delay.sync ? 1 : Math.random())) /
                  t.retina.reduceFactor) *
                1e3
              : 0,
            delayTime: 0,
            duration: t.retina.reduceFactor
              ? ((u(i.duration.value) * (i.duration.sync ? 1 : Math.random())) /
                  t.retina.reduceFactor) *
                1e3
              : 0,
            time: 0,
            count: e.life.count,
          };
        return (
          o.duration <= 0 && (o.duration = -1),
          o.count <= 0 && (o.count = -1),
          o
        );
      }
    }
    Ji = new WeakMap();
    var Ki,
      to = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      eo = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class io {
      constructor(t, e) {
        (this.container = e),
          Ki.set(this, void 0),
          to(this, Ki, t, "f"),
          (this.nextId = 0),
          (this.array = []),
          (this.zArray = []),
          (this.mover = new Ut(e)),
          (this.limit = 0),
          (this.needsSort = !1),
          (this.lastZIndex = 0),
          (this.freqs = { links: new Map(), triangles: new Map() }),
          (this.interactionManager = new jt(eo(this, Ki, "f"), e));
        const i = this.container.canvas.size;
        (this.linksColors = new Map()),
          (this.quadTree = new Yt(
            new It(
              -i.width / 4,
              -i.height / 4,
              (3 * i.width) / 2,
              (3 * i.height) / 2
            ),
            4
          )),
          (this.updaters = eo(this, Ki, "f").plugins.getUpdaters(e, !0));
      }
      get count() {
        return this.array.length;
      }
      init() {
        var t;
        const e = this.container,
          i = e.actualOptions;
        (this.lastZIndex = 0),
          (this.needsSort = !1),
          (this.freqs.links = new Map()),
          (this.freqs.triangles = new Map());
        let o = !1;
        (this.updaters = eo(this, Ki, "f").plugins.getUpdaters(e, !0)),
          this.interactionManager.init();
        for (const [, t] of e.plugins)
          if (
            (void 0 !== t.particlesInitialization &&
              (o = t.particlesInitialization()),
            o)
          )
            break;
        if ((this.addManualParticles(), !o)) {
          for (const e in i.particles.groups) {
            const o = i.particles.groups[e];
            for (
              let s = this.count, n = 0;
              n <
                (null === (t = o.number) || void 0 === t ? void 0 : t.value) &&
              s < i.particles.number.value;
              s++, n++
            )
              this.addParticle(void 0, o, e);
          }
          for (let t = this.count; t < i.particles.number.value; t++)
            this.addParticle();
        }
        e.pathGenerator.init(e);
      }
      async redraw() {
        this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
      }
      removeAt(t, e = 1, i, o) {
        if (!(t >= 0 && t <= this.count)) return;
        let s = 0;
        for (let n = t; s < e && n < this.count; n++) {
          const t = this.array[n];
          if (!t || t.group !== i) continue;
          t.destroy(o), this.array.splice(n--, 1);
          const e = this.zArray.indexOf(t);
          this.zArray.splice(e, 1), s++;
        }
      }
      remove(t, e, i) {
        this.removeAt(this.array.indexOf(t), void 0, e, i);
      }
      async update(t) {
        const e = this.container,
          i = [];
        e.pathGenerator.update();
        for (const [, i] of e.plugins) void 0 !== i.update && i.update(t);
        for (const o of this.array) {
          const s = e.canvas.resizeFactor;
          s && ((o.position.x *= s.width), (o.position.y *= s.height)),
            (o.bubble.inRange = !1);
          for (const [, e] of this.container.plugins) {
            if (o.destroyed) break;
            e.particleUpdate && e.particleUpdate(o, t);
          }
          this.mover.move(o, t),
            o.destroyed
              ? i.push(o)
              : this.quadTree.insert(new Xt(o.getPosition(), o));
        }
        for (const t of i) this.remove(t);
        await this.interactionManager.externalInteract(t);
        for (const i of e.particles.array) {
          for (const e of this.updaters) e.update(i, t);
          i.destroyed ||
            i.spawning ||
            (await this.interactionManager.particlesInteract(i, t));
        }
        delete e.canvas.resizeFactor;
      }
      async draw(t) {
        const e = this.container;
        e.canvas.clear();
        const i = this.container.canvas.size;
        (this.quadTree = new Yt(
          new It(
            -i.width / 4,
            -i.height / 4,
            (3 * i.width) / 2,
            (3 * i.height) / 2
          ),
          4
        )),
          await this.update(t),
          this.needsSort &&
            (this.zArray.sort(
              (t, e) => e.position.z - t.position.z || t.id - e.id
            ),
            (this.lastZIndex = this.zArray[this.zArray.length - 1].position.z),
            (this.needsSort = !1));
        for (const [, i] of e.plugins) e.canvas.drawPlugin(i, t);
        for (const e of this.zArray) e.draw(t);
      }
      clear() {
        (this.array = []), (this.zArray = []);
      }
      push(t, e, i, o) {
        this.pushing = !0;
        for (let s = 0; s < t; s++)
          this.addParticle(null == e ? void 0 : e.position, i, o);
        this.pushing = !1;
      }
      addParticle(t, e, i) {
        const o = this.container,
          s = o.actualOptions.particles.number.limit * o.density;
        if (s > 0) {
          const t = this.count + 1 - s;
          t > 0 && this.removeQuantity(t);
        }
        return this.pushParticle(t, e, i);
      }
      addSplitParticle(t) {
        const e = t.options.destroy.split,
          i = new _i();
        i.load(t.options);
        const o = u(e.factor.value);
        i.color.load({ value: { hsl: t.getFillColor() } }),
          "number" == typeof i.size.value
            ? (i.size.value /= o)
            : ((i.size.value.min /= o), (i.size.value.max /= o)),
          i.load(e.particles);
        const s = e.sizeOffset ? f(-t.size.value, t.size.value) : 0,
          n = { x: t.position.x + h(s), y: t.position.y + h(s) };
        return this.pushParticle(
          n,
          i,
          t.group,
          (e) =>
            !(e.size.value < 0.5) &&
            ((e.velocity.length = h(f(t.velocity.length, e.velocity.length))),
            (e.splitCount = t.splitCount + 1),
            (e.unbreakable = !0),
            setTimeout(() => {
              e.unbreakable = !1;
            }, 500),
            !0)
        );
      }
      removeQuantity(t, e) {
        this.removeAt(0, t, e);
      }
      getLinkFrequency(t, e) {
        const i = f(t.id, e.id),
          o = `${p(i)}_${v(i)}`;
        let s = this.freqs.links.get(o);
        return (
          void 0 === s && ((s = Math.random()), this.freqs.links.set(o, s)), s
        );
      }
      getTriangleFrequency(t, e, i) {
        let [o, s, n] = [t.id, e.id, i.id];
        o > s && ([s, o] = [o, s]),
          s > n && ([n, s] = [s, n]),
          o > n && ([n, o] = [o, n]);
        const a = `${o}_${s}_${n}`;
        let r = this.freqs.triangles.get(a);
        return (
          void 0 === r && ((r = Math.random()), this.freqs.triangles.set(a, r)),
          r
        );
      }
      addManualParticles() {
        const t = this.container,
          e = t.actualOptions;
        for (const i of e.manualParticles) {
          const e = i.position
            ? {
                x: (i.position.x * t.canvas.size.width) / 100,
                y: (i.position.y * t.canvas.size.height) / 100,
              }
            : void 0;
          this.addParticle(e, i.options);
        }
      }
      setDensity() {
        const t = this.container.actualOptions;
        for (const e in t.particles.groups)
          this.applyDensity(t.particles.groups[e], 0, e);
        this.applyDensity(t.particles, t.manualParticles.length);
      }
      applyDensity(t, e, i) {
        var o;
        if (
          !(null === (o = t.number.density) || void 0 === o ? void 0 : o.enable)
        )
          return;
        const s = t.number,
          n = this.initDensityFactor(s.density),
          a = s.value,
          r = s.limit > 0 ? s.limit : a,
          l = Math.min(a, r) * n + e,
          c = Math.min(
            this.count,
            this.array.filter((t) => t.group === i).length
          );
        (this.limit = s.limit * n),
          c < l
            ? this.push(Math.abs(l - c), void 0, t, i)
            : c > l && this.removeQuantity(c - l, i);
      }
      initDensityFactor(t) {
        const e = this.container;
        if (!e.canvas.element || !t.enable) return 1;
        const i = e.canvas.element,
          o = e.retina.pixelRatio;
        return (i.width * i.height) / (t.factor * o ** 2 * t.area);
      }
      pushParticle(t, e, i, o) {
        try {
          const s = new Zi(
            eo(this, Ki, "f"),
            this.nextId,
            this.container,
            t,
            e,
            i
          );
          let n = !0;
          if ((o && (n = o(s)), !n)) return;
          return this.array.push(s), this.zArray.push(s), this.nextId++, s;
        } catch (t) {
          return void console.warn(`error adding particle: ${t}`);
        }
      }
    }
    Ki = new WeakMap();
    class oo {
      constructor(t) {
        this.container = t;
      }
      init() {
        const t = this.container,
          e = t.actualOptions;
        this.pixelRatio = !e.detectRetina || z() ? 1 : window.devicePixelRatio;
        const i = this.container.actualOptions.motion;
        if (i && (i.disable || i.reduce.value))
          if (z() || "undefined" == typeof matchMedia || !matchMedia)
            this.reduceFactor = 1;
          else {
            const e = matchMedia("(prefers-reduced-motion: reduce)");
            if (e) {
              this.handleMotionChange(e);
              const i = () => {
                this.handleMotionChange(e), t.refresh().catch(() => {});
              };
              void 0 !== e.addEventListener
                ? e.addEventListener("change", i)
                : void 0 !== e.addListener && e.addListener(i);
            }
          }
        else this.reduceFactor = 1;
        const o = this.pixelRatio;
        if (t.canvas.element) {
          const e = t.canvas.element;
          (t.canvas.size.width = e.offsetWidth * o),
            (t.canvas.size.height = e.offsetHeight * o);
        }
        const s = e.particles;
        (this.attractDistance = s.move.attract.distance * o),
          (this.linksDistance = s.links.distance * o),
          (this.linksWidth = s.links.width * o),
          (this.sizeAnimationSpeed = s.size.animation.speed * o),
          (this.maxSpeed = s.move.gravity.maxSpeed * o),
          void 0 !== s.orbit.radius &&
            (this.orbitRadius =
              s.orbit.radius * this.container.retina.pixelRatio);
        const n = e.interactivity.modes;
        (this.connectModeDistance = n.connect.distance * o),
          (this.connectModeRadius = n.connect.radius * o),
          (this.grabModeDistance = n.grab.distance * o),
          (this.repulseModeDistance = n.repulse.distance * o),
          (this.bounceModeDistance = n.bounce.distance * o),
          (this.attractModeDistance = n.attract.distance * o),
          (this.slowModeRadius = n.slow.radius * o),
          (this.bubbleModeDistance = n.bubble.distance * o),
          n.bubble.size && (this.bubbleModeSize = n.bubble.size * o);
      }
      initParticle(t) {
        const e = t.options,
          i = this.pixelRatio,
          o = e.move.distance,
          s = t.retina;
        (s.attractDistance = e.move.attract.distance * i),
          (s.linksDistance = e.links.distance * i),
          (s.linksWidth = e.links.width * i),
          (s.moveDrift = u(e.move.drift) * i),
          (s.moveSpeed = u(e.move.speed) * i),
          (s.sizeAnimationSpeed = e.size.animation.speed * i),
          t.spin && (s.spinAcceleration = u(e.move.spin.acceleration) * i);
        const n = s.maxDistance;
        (n.horizontal = void 0 !== o.horizontal ? o.horizontal * i : void 0),
          (n.vertical = void 0 !== o.vertical ? o.vertical * i : void 0),
          (s.maxSpeed = e.move.gravity.maxSpeed * i);
      }
      handleMotionChange(t) {
        const e = this.container.actualOptions;
        if (t.matches) {
          const t = e.motion;
          this.reduceFactor = t.disable
            ? 0
            : t.reduce.value
            ? 1 / t.reduce.factor
            : 1;
        } else this.reduceFactor = 1;
      }
    }
    var so,
      no = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      ao = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class ro {
      constructor(t, e, i, ...o) {
        (this.id = e),
          so.set(this, void 0),
          no(this, so, t, "f"),
          (this.fpsLimit = 120),
          (this.duration = 0),
          (this.lifeTime = 0),
          (this.firstStart = !0),
          (this.started = !1),
          (this.destroyed = !1),
          (this.paused = !0),
          (this.lastFrameTime = 0),
          (this.zLayers = 100),
          (this.pageHidden = !1),
          (this._sourceOptions = i),
          (this._initialSourceOptions = i),
          (this.retina = new oo(this)),
          (this.canvas = new Kt(this)),
          (this.particles = new io(ao(this, so, "f"), this)),
          (this.drawer = new Ft(this)),
          (this.presets = o),
          (this.pathGenerator = {
            generate: () => {
              const t = Qt.create(0, 0);
              return (
                (t.length = Math.random()),
                (t.angle = Math.random() * Math.PI * 2),
                t
              );
            },
            init: () => {},
            update: () => {},
          }),
          (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
          (this.bubble = {}),
          (this.repulse = { particles: [] }),
          (this.attract = { particles: [] }),
          (this.plugins = new Map()),
          (this.drawers = new Map()),
          (this.density = 1),
          (this._options = new Ni(ao(this, so, "f"))),
          (this.actualOptions = new Ni(ao(this, so, "f"))),
          (this.eventListeners = new qt(this)),
          "undefined" != typeof IntersectionObserver &&
            IntersectionObserver &&
            (this.intersectionObserver = new IntersectionObserver((t) =>
              this.intersectionManager(t)
            ));
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      play(t) {
        const e = this.paused || t;
        if (!this.firstStart || this.actualOptions.autoPlay) {
          if ((this.paused && (this.paused = !1), e))
            for (const [, t] of this.plugins) t.play && t.play();
          this.draw(e || !1);
        } else this.firstStart = !1;
      }
      pause() {
        if (
          (void 0 !== this.drawAnimationFrame &&
            (T()(this.drawAnimationFrame), delete this.drawAnimationFrame),
          !this.paused)
        ) {
          for (const [, t] of this.plugins) t.pause && t.pause();
          this.pageHidden || (this.paused = !0);
        }
      }
      draw(t) {
        let e = t;
        this.drawAnimationFrame = C()(async (t) => {
          e && ((this.lastFrameTime = void 0), (e = !1)),
            await this.drawer.nextFrame(t);
        });
      }
      getAnimationStatus() {
        return !this.paused && !this.pageHidden;
      }
      setNoise(t, e, i) {
        this.setPath(t, e, i);
      }
      setPath(t, e, i) {
        var o, s, n;
        if (t)
          if ("function" == typeof t)
            (this.pathGenerator.generate = t),
              e && (this.pathGenerator.init = e),
              i && (this.pathGenerator.update = i);
          else {
            const e = this.pathGenerator;
            (this.pathGenerator = t),
              (o = this.pathGenerator).generate || (o.generate = e.generate),
              (s = this.pathGenerator).init || (s.init = e.init),
              (n = this.pathGenerator).update || (n.update = e.update);
          }
      }
      destroy() {
        this.stop(), this.canvas.destroy();
        for (const [, t] of this.drawers) t.destroy && t.destroy(this);
        for (const t of this.drawers.keys()) this.drawers.delete(t);
        this.destroyed = !0;
      }
      exportImg(t) {
        this.exportImage(t);
      }
      exportImage(t, e, i) {
        var o;
        return null === (o = this.canvas.element) || void 0 === o
          ? void 0
          : o.toBlob(t, null != e ? e : "image/png", i);
      }
      exportConfiguration() {
        return JSON.stringify(this.actualOptions, void 0, 2);
      }
      refresh() {
        return this.stop(), this.start();
      }
      reset() {
        return (this._options = new Ni(ao(this, so, "f"))), this.refresh();
      }
      stop() {
        if (this.started) {
          (this.firstStart = !0),
            (this.started = !1),
            this.eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.clear(),
            this.interactivity.element instanceof HTMLElement &&
              this.intersectionObserver &&
              this.intersectionObserver.unobserve(this.interactivity.element);
          for (const [, t] of this.plugins) t.stop && t.stop();
          for (const t of this.plugins.keys()) this.plugins.delete(t);
          (this.particles.linksColors = new Map()),
            delete this.particles.grabLineColor,
            delete this.particles.linksColor,
            (this._sourceOptions = this._options);
        }
      }
      async loadTheme(t) {
        (this.currentTheme = t), await this.refresh();
      }
      async start() {
        if (!this.started) {
          await this.init(),
            (this.started = !0),
            this.eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this.intersectionObserver &&
              this.intersectionObserver.observe(this.interactivity.element);
          for (const [, t] of this.plugins)
            void 0 !== t.startAsync
              ? await t.startAsync()
              : void 0 !== t.start && t.start();
          this.play();
        }
      }
      addClickHandler(t) {
        const e = this.interactivity.element;
        if (!e) return;
        const i = (e, i, o) => {
          if (this.destroyed) return;
          const s = this.retina.pixelRatio,
            n = { x: i.x * s, y: i.y * s },
            a = this.particles.quadTree.queryCircle(n, o * s);
          t(e, a);
        };
        let o = !1,
          s = !1;
        e.addEventListener("click", (t) => {
          if (this.destroyed) return;
          const e = t,
            o = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
          i(t, o, 1);
        }),
          e.addEventListener("touchstart", () => {
            this.destroyed || ((o = !0), (s = !1));
          }),
          e.addEventListener("touchmove", () => {
            this.destroyed || (s = !0);
          }),
          e.addEventListener("touchend", (t) => {
            var e, n, a;
            if (!this.destroyed) {
              if (o && !s) {
                const o = t;
                let s = o.touches[o.touches.length - 1];
                if (
                  !s &&
                  ((s = o.changedTouches[o.changedTouches.length - 1]), !s)
                )
                  return;
                const r =
                    null === (e = this.canvas.element) || void 0 === e
                      ? void 0
                      : e.getBoundingClientRect(),
                  l = {
                    x:
                      s.clientX -
                      (null !== (n = null == r ? void 0 : r.left) &&
                      void 0 !== n
                        ? n
                        : 0),
                    y:
                      s.clientY -
                      (null !== (a = null == r ? void 0 : r.top) && void 0 !== a
                        ? a
                        : 0),
                  };
                i(t, l, Math.max(s.radiusX, s.radiusY));
              }
              (o = !1), (s = !1);
            }
          }),
          e.addEventListener("touchcancel", () => {
            this.destroyed || ((o = !1), (s = !1));
          });
      }
      updateActualOptions() {
        this.actualOptions.responsive = [];
        const t = this.actualOptions.setResponsive(
          this.canvas.size.width,
          this.retina.pixelRatio,
          this._options
        );
        return (
          this.actualOptions.setTheme(this.currentTheme),
          this.responsiveMaxWidth != t && ((this.responsiveMaxWidth = t), !0)
        );
      }
      async init() {
        this._options = new Ni(ao(this, so, "f"));
        for (const t of this.presets)
          this._options.load(ao(this, so, "f").plugins.getPreset(t));
        const t = ao(this, so, "f").plugins.getSupportedShapes();
        for (const e of t) {
          const t = ao(this, so, "f").plugins.getShapeDrawer(e);
          t && this.drawers.set(e, t);
        }
        this._options.load(this._initialSourceOptions),
          this._options.load(this._sourceOptions),
          (this.actualOptions = new Ni(ao(this, so, "f"))),
          this.actualOptions.load(this._options),
          this.retina.init(),
          this.canvas.init(),
          this.updateActualOptions(),
          this.canvas.initBackground(),
          this.canvas.resize(),
          (this.zLayers = this.actualOptions.zLayers),
          (this.duration = u(this.actualOptions.duration)),
          (this.lifeTime = 0),
          (this.fpsLimit =
            this.actualOptions.fpsLimit > 0
              ? this.actualOptions.fpsLimit
              : 120);
        const e = ao(this, so, "f").plugins.getAvailablePlugins(this);
        for (const [t, i] of e) this.plugins.set(t, i);
        for (const [, t] of this.drawers) t.init && (await t.init(this));
        for (const [, t] of this.plugins)
          t.init
            ? t.init(this.actualOptions)
            : void 0 !== t.initAsync && (await t.initAsync(this.actualOptions));
        const i = this.actualOptions.particles.move.path;
        i.generator &&
          this.setPath(ao(this, so, "f").plugins.getPathGenerator(i.generator)),
          this.particles.init(),
          this.particles.setDensity();
        for (const [, t] of this.plugins)
          void 0 !== t.particlesSetup && t.particlesSetup();
      }
      intersectionManager(t) {
        if (this.actualOptions.pauseOnOutsideViewport)
          for (const e of t)
            e.target === this.interactivity.element &&
              (e.isIntersecting ? this.play() : this.pause());
      }
    }
    so = new WeakMap();
    var lo,
      co = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      ho = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class uo {
      constructor(t) {
        lo.set(this, void 0), co(this, lo, t, "f");
      }
      dom() {
        return ho(this, lo, "f").domArray;
      }
      domItem(t) {
        const e = this.dom(),
          i = e[t];
        if (i && !i.destroyed) return i;
        e.splice(t, 1);
      }
      async loadOptions(t) {
        var e, i, o;
        const s =
            null !== (e = t.tagId) && void 0 !== e
              ? e
              : `tsparticles${Math.floor(1e4 * Math.random())}`,
          { options: n, index: a } = t;
        let r =
          null !== (i = t.element) && void 0 !== i
            ? i
            : document.getElementById(s);
        r ||
          ((r = document.createElement("div")),
          (r.id = s),
          null === (o = document.querySelector("body")) ||
            void 0 === o ||
            o.append(r));
        const l = n instanceof Array ? R(n, a) : n,
          c = this.dom(),
          d = c.findIndex((t) => t.id === s);
        if (d >= 0) {
          const t = this.domItem(d);
          t && !t.destroyed && (t.destroy(), c.splice(d, 1));
        }
        let h;
        if ("canvas" === r.tagName.toLowerCase())
          (h = r), (h.dataset[Lt.generatedAttribute] = "false");
        else {
          const t = r.getElementsByTagName("canvas");
          t.length
            ? ((h = t[0]), (h.dataset[Lt.generatedAttribute] = "false"))
            : ((h = document.createElement("canvas")),
              (h.dataset[Lt.generatedAttribute] = "true"),
              (h.style.width = "100%"),
              (h.style.height = "100%"),
              r.appendChild(h));
        }
        const u = new ro(ho(this, lo, "f"), s, l);
        return (
          d >= 0 ? c.splice(d, 0, u) : c.push(u),
          u.canvas.loadCanvas(h),
          await u.start(),
          u
        );
      }
      async loadRemoteOptions(t) {
        const { url: e, index: i } = t,
          o = e instanceof Array ? R(e, i) : e;
        if (!o) return;
        const s = await fetch(o);
        if (!s.ok)
          return (
            (n = s.status),
            console.error(`Error tsParticles - fetch status: ${n}`),
            void console.error("Error tsParticles - File config not found")
          );
        var n;
        const a = await s.json();
        return this.loadOptions({
          tagId: t.tagId,
          element: t.element,
          index: i,
          options: a,
        });
      }
      load(t, e, i) {
        const o = { index: i };
        return (
          "string" == typeof t ? (o.tagId = t) : (o.options = t),
          "number" == typeof e
            ? (o.index = null != e ? e : o.index)
            : (o.options = null != e ? e : o.options),
          this.loadOptions(o)
        );
      }
      async set(t, e, i, o) {
        const s = { index: o };
        return (
          "string" == typeof t ? (s.tagId = t) : (s.element = t),
          e instanceof HTMLElement ? (s.element = e) : (s.options = e),
          "number" == typeof i
            ? (s.index = i)
            : (s.options = null != i ? i : s.options),
          this.loadOptions(s)
        );
      }
      async loadJSON(t, e, i) {
        let o, s;
        return (
          "number" == typeof e || void 0 === e ? (o = t) : ((s = t), (o = e)),
          this.loadRemoteOptions({ tagId: s, url: o, index: i })
        );
      }
      async setJSON(t, e, i, o) {
        let s, n, a, r;
        return (
          t instanceof HTMLElement
            ? ((r = t), (s = e), (a = i))
            : ((n = t), (r = e), (s = i), (a = o)),
          this.loadRemoteOptions({ tagId: n, url: s, index: a, element: r })
        );
      }
      setOnClickHandler(t) {
        const e = this.dom();
        if (0 === e.length)
          throw new Error(
            "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
          );
        for (const i of e) i.addClickHandler(t);
      }
    }
    lo = new WeakMap();
    var po,
      vo,
      fo = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      yo = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class mo {
      constructor() {
        po.set(this, void 0),
          vo.set(this, void 0),
          fo(this, po, !1, "f"),
          (this.domArray = []),
          fo(this, vo, new uo(this), "f"),
          (this.plugins = new Jt(this));
      }
      init() {
        yo(this, po, "f") || fo(this, po, !0, "f");
      }
      async loadFromArray(t, e, i) {
        return yo(this, vo, "f").load(t, e, i);
      }
      async load(t, e) {
        return yo(this, vo, "f").load(t, e);
      }
      async set(t, e, i) {
        return yo(this, vo, "f").set(t, e, i);
      }
      async loadJSON(t, e, i) {
        return yo(this, vo, "f").loadJSON(t, e, i);
      }
      async setJSON(t, e, i, o) {
        return yo(this, vo, "f").setJSON(t, e, i, o);
      }
      setOnClickHandler(t) {
        yo(this, vo, "f").setOnClickHandler(t);
      }
      dom() {
        return yo(this, vo, "f").dom();
      }
      domItem(t) {
        return yo(this, vo, "f").domItem(t);
      }
      async refresh() {
        for (const t of this.dom()) await t.refresh();
      }
      async addShape(t, e, i, o, s) {
        let n;
        (n =
          "function" == typeof e
            ? { afterEffect: o, destroy: s, draw: e, init: i }
            : e),
          this.plugins.addShapeDrawer(t, n),
          await this.refresh();
      }
      async addPreset(t, e, i = !1) {
        this.plugins.addPreset(t, e, i), await this.refresh();
      }
      async addPlugin(t) {
        this.plugins.addPlugin(t), await this.refresh();
      }
      async addPathGenerator(t, e) {
        this.plugins.addPathGenerator(t, e), await this.refresh();
      }
      async addInteractor(t, e) {
        this.plugins.addInteractor(t, e), await this.refresh();
      }
      async addParticleUpdater(t, e) {
        this.plugins.addParticleUpdater(t, e), await this.refresh();
      }
    }
    (po = new WeakMap()), (vo = new WeakMap());
    class bo {
      constructor() {
        (this.radius = 0), (this.mass = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.mass && (this.mass = t.mass),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class go extends Ue {
      constructor() {
        super(),
          (this.density = 5),
          (this.random.minimumValue = 1),
          (this.value = 50),
          (this.limit = new bo());
      }
      load(t) {
        t &&
          (super.load(t),
          void 0 !== t.density && (this.density = t.density),
          "number" == typeof t.limit
            ? (this.limit.radius = t.limit)
            : this.limit.load(t.limit));
      }
    }
    class wo {
      constructor() {
        (this.color = new te()),
          (this.color.value = "#000000"),
          (this.draggable = !1),
          (this.opacity = 1),
          (this.destroy = !0),
          (this.orbits = !1),
          (this.size = new go());
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.color && (this.color = te.create(this.color, t.color)),
          void 0 !== t.draggable && (this.draggable = t.draggable),
          (this.name = t.name),
          void 0 !== t.opacity && (this.opacity = t.opacity),
          void 0 !== t.position &&
            (this.position = { x: t.position.x, y: t.position.y }),
          void 0 !== t.size && this.size.load(t.size),
          void 0 !== t.destroy && (this.destroy = t.destroy),
          void 0 !== t.orbits && (this.orbits = t.orbits));
      }
    }
    class xo {
      constructor(t, e, i, o) {
        var s, n, a;
        (this.absorbers = t),
          (this.container = e),
          (this.initialPosition = o ? Qt.create(o.x, o.y) : void 0),
          i instanceof wo
            ? (this.options = i)
            : ((this.options = new wo()), this.options.load(i)),
          (this.dragging = !1),
          (this.name = this.options.name),
          (this.opacity = this.options.opacity),
          (this.size = u(this.options.size.value) * e.retina.pixelRatio),
          (this.mass =
            this.size * this.options.size.density * e.retina.reduceFactor);
        const r = this.options.size.limit;
        (this.limit = {
          radius: r.radius * e.retina.pixelRatio * e.retina.reduceFactor,
          mass: r.mass,
        }),
          (this.color =
            null !== (s = U(this.options.color)) && void 0 !== s
              ? s
              : { b: 0, g: 0, r: 0 }),
          (this.position =
            null !==
              (a =
                null === (n = this.initialPosition) || void 0 === n
                  ? void 0
                  : n.copy()) && void 0 !== a
              ? a
              : this.calcPosition());
      }
      attract(t) {
        const e = this.container,
          i = this.options;
        if (i.draggable) {
          const t = e.interactivity.mouse;
          if (t.clicking && t.downPosition) {
            b(this.position, t.downPosition) <= this.size &&
              (this.dragging = !0);
          } else this.dragging = !1;
          this.dragging &&
            t.position &&
            ((this.position.x = t.position.x),
            (this.position.y = t.position.y));
        }
        const o = t.getPosition(),
          { dx: s, dy: n, distance: a } = m(this.position, o),
          r = Qt.create(s, n);
        if (
          ((r.length = (this.mass / Math.pow(a, 2)) * e.retina.reduceFactor),
          a < this.size + t.getRadius())
        ) {
          const o = 0.033 * t.getRadius() * e.retina.pixelRatio;
          (this.size > t.getRadius() && a < this.size - t.getRadius()) ||
          (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
            ? i.destroy
              ? t.destroy()
              : ((t.needsNewPosition = !0), this.updateParticlePosition(t, r))
            : (i.destroy && (t.size.value -= o),
              this.updateParticlePosition(t, r)),
            (this.limit.radius <= 0 || this.size < this.limit.radius) &&
              (this.size += o),
            (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
              (this.mass +=
                o * this.options.size.density * e.retina.reduceFactor);
        } else this.updateParticlePosition(t, r);
      }
      resize() {
        const t = this.initialPosition;
        this.position =
          t && A(t, this.container.canvas.size) ? t : this.calcPosition();
      }
      draw(t) {
        t.translate(this.position.x, this.position.y),
          t.beginPath(),
          t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
          t.closePath(),
          (t.fillStyle = rt(this.color, this.opacity)),
          t.fill();
      }
      calcPosition() {
        var t, e;
        const i = this.container,
          o = this.options.position;
        return Qt.create(
          ((null !== (t = null == o ? void 0 : o.x) && void 0 !== t
            ? t
            : 100 * Math.random()) /
            100) *
            i.canvas.size.width,
          ((null !== (e = null == o ? void 0 : o.y) && void 0 !== e
            ? e
            : 100 * Math.random()) /
            100) *
            i.canvas.size.height
        );
      }
      updateParticlePosition(t, e) {
        var i;
        if (t.destroyed) return;
        const o = this.container,
          s = o.canvas.size;
        if (
          (t.needsNewPosition &&
            ((t.position.x = Math.floor(Math.random() * s.width)),
            (t.position.y = Math.floor(Math.random() * s.height)),
            t.velocity.setTo(t.initialVelocity),
            (t.absorberOrbit = void 0),
            (t.needsNewPosition = !1)),
          this.options.orbits)
        ) {
          if (
            (void 0 === t.absorberOrbit &&
              ((t.absorberOrbit = Qt.create(0, 0)),
              (t.absorberOrbit.length = b(t.getPosition(), this.position)),
              (t.absorberOrbit.angle = Math.random() * Math.PI * 2)),
            t.absorberOrbit.length <= this.size && !this.options.destroy)
          ) {
            const e = Math.min(s.width, s.height);
            t.absorberOrbit.length = e * (0.2 * Math.random() - 0.1 + 1);
          }
          void 0 === t.absorberOrbitDirection &&
            (t.absorberOrbitDirection =
              t.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
          const n = t.absorberOrbit.length,
            a = t.absorberOrbit.angle,
            r = t.absorberOrbitDirection;
          (t.velocity.x = 0), (t.velocity.y = 0);
          const l = {
            x: "clockwise" === r ? Math.cos : Math.sin,
            y: "clockwise" === r ? Math.sin : Math.cos,
          };
          (t.position.x = this.position.x + n * l.x(a)),
            (t.position.y = this.position.y + n * l.y(a)),
            (t.absorberOrbit.length -= e.length),
            (t.absorberOrbit.angle +=
              (((null !== (i = t.retina.moveSpeed) && void 0 !== i ? i : 0) *
                o.retina.pixelRatio) /
                100) *
              o.retina.reduceFactor);
        } else {
          const i = Qt.origin;
          (i.length = e.length), (i.angle = e.angle), t.velocity.addTo(i);
        }
      }
    }
    class ko {
      constructor(t) {
        (this.container = t),
          (this.array = []),
          (this.absorbers = []),
          (this.interactivityAbsorbers = []);
        const e = t;
        (e.getAbsorber = (t) =>
          void 0 === t || "number" == typeof t
            ? this.array[t || 0]
            : this.array.find((e) => e.name === t)),
          (e.addAbsorber = (t, e) => this.addAbsorber(t, e));
      }
      init(t) {
        var e, i;
        if (!t) return;
        t.absorbers &&
          (t.absorbers instanceof Array
            ? (this.absorbers = t.absorbers.map((t) => {
                const e = new wo();
                return e.load(t), e;
              }))
            : (this.absorbers instanceof Array && (this.absorbers = new wo()),
              this.absorbers.load(t.absorbers)));
        const o =
          null ===
            (i =
              null === (e = t.interactivity) || void 0 === e
                ? void 0
                : e.modes) || void 0 === i
            ? void 0
            : i.absorbers;
        if (
          (o &&
            (o instanceof Array
              ? (this.interactivityAbsorbers = o.map((t) => {
                  const e = new wo();
                  return e.load(t), e;
                }))
              : (this.interactivityAbsorbers instanceof Array &&
                  (this.interactivityAbsorbers = new wo()),
                this.interactivityAbsorbers.load(o))),
          this.absorbers instanceof Array)
        )
          for (const t of this.absorbers) this.addAbsorber(t);
        else this.addAbsorber(this.absorbers);
      }
      particleUpdate(t) {
        for (const e of this.array) if ((e.attract(t), t.destroyed)) break;
      }
      draw(t) {
        for (const e of this.array) t.save(), e.draw(t), t.restore();
      }
      stop() {
        this.array = [];
      }
      resize() {
        for (const t of this.array) t.resize();
      }
      handleClickMode(t) {
        const e = this.container,
          i = this.absorbers,
          o = this.interactivityAbsorbers;
        if ("absorber" === t) {
          let t;
          o instanceof Array ? o.length > 0 && (t = R(o)) : (t = o);
          const s = null != t ? t : i instanceof Array ? R(i) : i,
            n = e.interactivity.mouse.clickPosition;
          this.addAbsorber(s, n);
        }
      }
      addAbsorber(t, e) {
        const i = new xo(this, this.container, t, e);
        return this.array.push(i), i;
      }
      removeAbsorber(t) {
        const e = this.array.indexOf(t);
        e >= 0 && this.array.splice(e, 1);
      }
    }
    class Po {
      constructor() {
        this.id = "absorbers";
      }
      getPlugin(t) {
        return new ko(t);
      }
      needsPlugin(t) {
        var e, i, o;
        if (void 0 === t) return !1;
        const s = t.absorbers;
        let n = !1;
        return (
          s instanceof Array
            ? s.length && (n = !0)
            : (void 0 !== s ||
                ((null ===
                  (o =
                    null ===
                      (i =
                        null === (e = t.interactivity) || void 0 === e
                          ? void 0
                          : e.events) || void 0 === i
                      ? void 0
                      : i.onClick) || void 0 === o
                  ? void 0
                  : o.mode) &&
                  E("absorber", t.interactivity.events.onClick.mode))) &&
              (n = !0),
          n
        );
      }
      loadOptions(t, e) {
        var i, o;
        if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
        const s = t;
        if (null == e ? void 0 : e.absorbers)
          if ((null == e ? void 0 : e.absorbers) instanceof Array)
            s.absorbers =
              null == e
                ? void 0
                : e.absorbers.map((t) => {
                    const e = new wo();
                    return e.load(t), e;
                  });
          else {
            let t = s.absorbers;
            void 0 === (null == t ? void 0 : t.load) &&
              (s.absorbers = t = new wo()),
              t.load(null == e ? void 0 : e.absorbers);
          }
        const n =
          null ===
            (o =
              null === (i = null == e ? void 0 : e.interactivity) ||
              void 0 === i
                ? void 0
                : i.modes) || void 0 === o
            ? void 0
            : o.absorbers;
        if (n)
          if (n instanceof Array)
            s.interactivity.modes.absorbers = n.map((t) => {
              const e = new wo();
              return e.load(t), e;
            });
          else {
            let t = s.interactivity.modes.absorbers;
            void 0 === (null == t ? void 0 : t.load) &&
              (s.interactivity.modes.absorbers = t = new wo()),
              t.load(n);
          }
      }
    }
    class Mo {
      randomPosition(t, e, i) {
        const [o, s] = [e.width / 2, e.height / 2],
          n = ((t, e) => {
            const i = Math.random() / 4,
              o = Math.atan((e / t) * Math.tan(2 * Math.PI * i)),
              s = Math.random();
            return s < 0.25
              ? o
              : s < 0.5
              ? Math.PI - o
              : s < 0.75
              ? Math.PI + o
              : -o;
          })(o, s),
          a =
            ((d = n),
            ((l = o) * (c = s)) /
              Math.sqrt((c * Math.cos(d)) ** 2 + (l * Math.sin(d)) ** 2)),
          r = i ? a * Math.sqrt(Math.random()) : a;
        var l, c, d;
        return { x: t.x + r * Math.cos(n), y: t.y + r * Math.sin(n) };
      }
    }
    class zo {
      constructor() {
        this.wait = !1;
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.duration && (this.duration = t.duration),
          void 0 !== t.wait && (this.wait = t.wait));
      }
    }
    class Co {
      constructor() {
        (this.quantity = 1), (this.delay = 0.1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.quantity && (this.quantity = f(t.quantity)),
          void 0 !== t.delay && (this.delay = f(t.delay)));
      }
    }
    class To {
      constructor() {
        (this.mode = "percent"), (this.height = 0), (this.width = 0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Eo {
      constructor() {
        (this.autoPlay = !0),
          (this.fill = !0),
          (this.life = new zo()),
          (this.rate = new Co()),
          (this.shape = "square"),
          (this.startCount = 0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.size &&
            (void 0 === this.size && (this.size = new To()),
            this.size.load(t.size)),
          void 0 !== t.direction && (this.direction = t.direction),
          (this.domId = t.domId),
          void 0 !== t.fill && (this.fill = t.fill),
          this.life.load(t.life),
          (this.name = t.name),
          void 0 !== t.particles && (this.particles = L({}, t.particles)),
          this.rate.load(t.rate),
          void 0 !== t.shape && (this.shape = t.shape),
          void 0 !== t.position &&
            (this.position = { x: t.position.x, y: t.position.y }),
          void 0 !== t.spawnColor &&
            (void 0 === this.spawnColor && (this.spawnColor = new qe()),
            this.spawnColor.load(t.spawnColor)),
          void 0 !== t.startCount && (this.startCount = t.startCount));
      }
    }
    var So,
      Oo,
      Ro,
      Ao = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      Io = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class Do {
      constructor(t, e, i, o, s) {
        var n, a, r, l, c, d, h, u;
        (this.emitters = e),
          (this.container = i),
          So.set(this, void 0),
          Oo.set(this, void 0),
          Ro.set(this, void 0),
          Ao(this, Ro, t, "f"),
          (this.currentDuration = 0),
          (this.currentEmitDelay = 0),
          (this.currentSpawnDelay = 0),
          (this.initialPosition = s),
          o instanceof Eo
            ? (this.options = o)
            : ((this.options = new Eo()), this.options.load(o)),
          (this.spawnDelay =
            (1e3 *
              (null !== (n = this.options.life.delay) && void 0 !== n
                ? n
                : 0)) /
            this.container.retina.reduceFactor),
          (this.position =
            null !== (a = this.initialPosition) && void 0 !== a
              ? a
              : this.calcPosition()),
          (this.name = this.options.name),
          (this.shape =
            null === (r = Io(this, Ro, "f").emitterShapeManager) || void 0 === r
              ? void 0
              : r.getShape(this.options.shape)),
          (this.fill = this.options.fill),
          Ao(this, So, !this.options.life.wait, "f"),
          Ao(this, Oo, !1, "f");
        let p = L({}, this.options.particles);
        null != p || (p = {}),
          (null !== (l = p.move) && void 0 !== l) || (p.move = {}),
          (null !== (c = (u = p.move).direction) && void 0 !== c) ||
            (u.direction = this.options.direction),
          this.options.spawnColor &&
            (this.spawnColor = $(this.options.spawnColor)),
          (this.paused = !this.options.autoPlay),
          (this.particlesOptions = p),
          (this.size =
            null !== (d = this.options.size) && void 0 !== d
              ? d
              : (() => {
                  const t = new To();
                  return t.load({ height: 0, mode: "percent", width: 0 }), t;
                })()),
          (this.lifeCount =
            null !== (h = this.options.life.count) && void 0 !== h ? h : -1),
          (this.immortal = this.lifeCount <= 0),
          this.play();
      }
      externalPlay() {
        (this.paused = !1), this.play();
      }
      externalPause() {
        (this.paused = !0), this.pause();
      }
      play() {
        var t;
        if (
          !this.paused &&
          this.container.retina.reduceFactor &&
          (this.lifeCount > 0 || this.immortal || !this.options.life.count) &&
          (Io(this, So, "f") ||
            this.currentSpawnDelay >=
              (null !== (t = this.spawnDelay) && void 0 !== t ? t : 0))
        ) {
          if (void 0 === this.emitDelay) {
            const t = u(this.options.rate.delay);
            this.emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
          }
          (this.lifeCount > 0 || this.immortal) && this.prepareToDie();
        }
      }
      pause() {
        this.paused || delete this.emitDelay;
      }
      resize() {
        const t = this.initialPosition;
        this.position =
          t && A(t, this.container.canvas.size) ? t : this.calcPosition();
      }
      update(t) {
        var e, i, o;
        this.paused ||
          (Io(this, So, "f") &&
            (Ao(this, So, !1, "f"),
            (this.currentSpawnDelay =
              null !== (e = this.spawnDelay) && void 0 !== e ? e : 0),
            (this.currentEmitDelay =
              null !== (i = this.emitDelay) && void 0 !== i ? i : 0)),
          Io(this, Oo, "f") ||
            (Ao(this, Oo, !0, "f"),
            this.emitParticles(this.options.startCount)),
          void 0 !== this.duration &&
            ((this.currentDuration += t.value),
            this.currentDuration >= this.duration &&
              (this.pause(),
              void 0 !== this.spawnDelay && delete this.spawnDelay,
              this.immortal || this.lifeCount--,
              this.lifeCount > 0 || this.immortal
                ? ((this.position = this.calcPosition()),
                  (this.spawnDelay =
                    (1e3 *
                      (null !== (o = this.options.life.delay) && void 0 !== o
                        ? o
                        : 0)) /
                    this.container.retina.reduceFactor))
                : this.destroy(),
              (this.currentDuration -= this.duration),
              delete this.duration)),
          void 0 !== this.spawnDelay &&
            ((this.currentSpawnDelay += t.value),
            this.currentSpawnDelay >= this.spawnDelay &&
              (this.play(),
              (this.currentSpawnDelay -= this.currentSpawnDelay),
              delete this.spawnDelay)),
          void 0 !== this.emitDelay &&
            ((this.currentEmitDelay += t.value),
            this.currentEmitDelay >= this.emitDelay &&
              (this.emit(), (this.currentEmitDelay -= this.emitDelay))));
      }
      getPosition() {
        if (this.options.domId) {
          const t = this.container,
            e = document.getElementById(this.options.domId);
          if (e) {
            const i = e.getBoundingClientRect();
            return {
              x: (i.x + i.width / 2) * t.retina.pixelRatio,
              y: (i.y + i.height / 2) * t.retina.pixelRatio,
            };
          }
        }
        return this.position;
      }
      getSize() {
        const t = this.container;
        if (this.options.domId) {
          const e = document.getElementById(this.options.domId);
          if (e) {
            const i = e.getBoundingClientRect();
            return {
              width: i.width * t.retina.pixelRatio,
              height: i.height * t.retina.pixelRatio,
            };
          }
        }
        return {
          width:
            "percent" === this.size.mode
              ? (t.canvas.size.width * this.size.width) / 100
              : this.size.width,
          height:
            "percent" === this.size.mode
              ? (t.canvas.size.height * this.size.height) / 100
              : this.size.height,
        };
      }
      prepareToDie() {
        var t;
        if (this.paused) return;
        const e =
          null === (t = this.options.life) || void 0 === t
            ? void 0
            : t.duration;
        this.container.retina.reduceFactor &&
          (this.lifeCount > 0 || this.immortal) &&
          void 0 !== e &&
          e > 0 &&
          (this.duration = 1e3 * e);
      }
      destroy() {
        this.emitters.removeEmitter(this);
      }
      calcPosition() {
        var t, e;
        const i = this.container,
          o = this.options.position;
        return {
          x:
            ((null !== (t = null == o ? void 0 : o.x) && void 0 !== t
              ? t
              : 100 * Math.random()) /
              100) *
            i.canvas.size.width,
          y:
            ((null !== (e = null == o ? void 0 : o.y) && void 0 !== e
              ? e
              : 100 * Math.random()) /
              100) *
            i.canvas.size.height,
        };
      }
      emit() {
        if (this.paused) return;
        const t = u(this.options.rate.quantity);
        this.emitParticles(t);
      }
      emitParticles(t) {
        var e, i, o;
        const s = this.container,
          n = this.getPosition(),
          a = this.getSize();
        for (let r = 0; r < t; r++) {
          const t = L({}, this.particlesOptions);
          if (this.spawnColor) {
            const i =
              null === (e = this.options.spawnColor) || void 0 === e
                ? void 0
                : e.animation;
            i &&
              ((this.spawnColor.h = this.setColorAnimation(
                i.h,
                this.spawnColor.h,
                360
              )),
              (this.spawnColor.s = this.setColorAnimation(
                i.s,
                this.spawnColor.s,
                100
              )),
              (this.spawnColor.l = this.setColorAnimation(
                i.l,
                this.spawnColor.l,
                100
              ))),
              t.color
                ? (t.color.value = this.spawnColor)
                : (t.color = { value: this.spawnColor });
          }
          if (!n) return;
          const r =
            null !==
              (o =
                null === (i = this.shape) || void 0 === i
                  ? void 0
                  : i.randomPosition(n, a, this.fill)) && void 0 !== o
              ? o
              : n;
          s.particles.addParticle(r, t);
        }
      }
      setColorAnimation(t, e, i) {
        var o;
        const s = this.container;
        if (!t.enable) return e;
        const n = h(t.offset),
          a = (1e3 * u(this.options.rate.delay)) / s.retina.reduceFactor;
        return (
          (e +
            ((null !== (o = t.speed) && void 0 !== o ? o : 0) * s.fpsLimit) /
              a +
            3.6 * n) %
          i
        );
      }
    }
    (So = new WeakMap()), (Oo = new WeakMap()), (Ro = new WeakMap());
    var Lo,
      Ho = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      qo = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class _o {
      constructor(t, e) {
        (this.container = e),
          Lo.set(this, void 0),
          Ho(this, Lo, t, "f"),
          (this.array = []),
          (this.emitters = []),
          (this.interactivityEmitters = []);
        const i = e;
        (i.getEmitter = (t) =>
          void 0 === t || "number" == typeof t
            ? this.array[t || 0]
            : this.array.find((e) => e.name === t)),
          (i.addEmitter = (t, e) => this.addEmitter(t, e)),
          (i.removeEmitter = (t) => {
            const e = i.getEmitter(t);
            e && this.removeEmitter(e);
          }),
          (i.playEmitter = (t) => {
            const e = i.getEmitter(t);
            e && e.externalPlay();
          }),
          (i.pauseEmitter = (t) => {
            const e = i.getEmitter(t);
            e && e.externalPause();
          });
      }
      init(t) {
        var e, i;
        if (!t) return;
        t.emitters &&
          (t.emitters instanceof Array
            ? (this.emitters = t.emitters.map((t) => {
                const e = new Eo();
                return e.load(t), e;
              }))
            : (this.emitters instanceof Array && (this.emitters = new Eo()),
              this.emitters.load(t.emitters)));
        const o =
          null ===
            (i =
              null === (e = t.interactivity) || void 0 === e
                ? void 0
                : e.modes) || void 0 === i
            ? void 0
            : i.emitters;
        if (
          (o &&
            (o instanceof Array
              ? (this.interactivityEmitters = o.map((t) => {
                  const e = new Eo();
                  return e.load(t), e;
                }))
              : (this.interactivityEmitters instanceof Array &&
                  (this.interactivityEmitters = new Eo()),
                this.interactivityEmitters.load(o))),
          this.emitters instanceof Array)
        )
          for (const t of this.emitters) this.addEmitter(t);
        else this.addEmitter(this.emitters);
      }
      play() {
        for (const t of this.array) t.play();
      }
      pause() {
        for (const t of this.array) t.pause();
      }
      stop() {
        this.array = [];
      }
      update(t) {
        for (const e of this.array) e.update(t);
      }
      handleClickMode(t) {
        const e = this.container,
          i = this.emitters,
          o = this.interactivityEmitters;
        if ("emitter" === t) {
          let t;
          o instanceof Array ? o.length > 0 && (t = R(o)) : (t = o);
          const s = null != t ? t : i instanceof Array ? R(i) : i,
            n = e.interactivity.mouse.clickPosition;
          this.addEmitter(L({}, s), n);
        }
      }
      resize() {
        for (const t of this.array) t.resize();
      }
      addEmitter(t, e) {
        const i = new Eo();
        i.load(t);
        const o = new Do(qo(this, Lo, "f"), this, this.container, i, e);
        return this.array.push(o), o;
      }
      removeEmitter(t) {
        const e = this.array.indexOf(t);
        e >= 0 && this.array.splice(e, 1);
      }
    }
    Lo = new WeakMap();
    var Fo,
      Vo = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      };
    const Bo = new Map();
    class Wo {
      constructor(t) {
        Fo.set(this, void 0), Vo(this, Fo, t, "f");
      }
      addShape(t, e) {
        this.getShape(t) || Bo.set(t, e);
      }
      getShape(t) {
        return Bo.get(t);
      }
      getSupportedShapes() {
        return Bo.keys();
      }
    }
    function jo(t, e) {
      return t + e * (Math.random() - 0.5);
    }
    Fo = new WeakMap();
    class Go {
      randomPosition(t, e, i) {
        if (i) return { x: jo(t.x, e.width), y: jo(t.y, e.height) };
        {
          const i = e.width / 2,
            o = e.height / 2,
            s = Math.floor(4 * Math.random()),
            n = 2 * (Math.random() - 0.5);
          switch (s) {
            case 0:
              return { x: t.x + n * i, y: t.y - o };
            case 1:
              return { x: t.x - i, y: t.y + n * o };
            case 2:
              return { x: t.x + n * i, y: t.y + o };
            case 3:
            default:
              return { x: t.x + i, y: t.y + n * o };
          }
        }
      }
    }
    var Uo,
      $o = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      No = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class Jo {
      constructor(t) {
        Uo.set(this, void 0), $o(this, Uo, t, "f"), (this.id = "emitters");
      }
      getPlugin(t) {
        return new _o(No(this, Uo, "f"), t);
      }
      needsPlugin(t) {
        var e, i, o;
        if (void 0 === t) return !1;
        const s = t.emitters;
        return (
          (s instanceof Array && !!s.length) ||
          void 0 !== s ||
          (!!(null ===
            (o =
              null ===
                (i =
                  null === (e = t.interactivity) || void 0 === e
                    ? void 0
                    : e.events) || void 0 === i
                ? void 0
                : i.onClick) || void 0 === o
            ? void 0
            : o.mode) &&
            E("emitter", t.interactivity.events.onClick.mode))
        );
      }
      loadOptions(t, e) {
        var i, o;
        if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
        const s = t;
        if (null == e ? void 0 : e.emitters)
          if ((null == e ? void 0 : e.emitters) instanceof Array)
            s.emitters =
              null == e
                ? void 0
                : e.emitters.map((t) => {
                    const e = new Eo();
                    return e.load(t), e;
                  });
          else {
            let t = s.emitters;
            void 0 === (null == t ? void 0 : t.load) &&
              (s.emitters = t = new Eo()),
              t.load(null == e ? void 0 : e.emitters);
          }
        const n =
          null ===
            (o =
              null === (i = null == e ? void 0 : e.interactivity) ||
              void 0 === i
                ? void 0
                : i.modes) || void 0 === o
            ? void 0
            : o.emitters;
        if (n)
          if (n instanceof Array)
            s.interactivity.modes.emitters = n.map((t) => {
              const e = new Eo();
              return e.load(t), e;
            });
          else {
            let t = s.interactivity.modes.emitters;
            void 0 === (null == t ? void 0 : t.load) &&
              (s.interactivity.modes.emitters = t = new Eo()),
              t.load(n);
          }
      }
    }
    Uo = new WeakMap();
    class Xo extends _t {
      constructor(t) {
        super(t), (this.delay = 0);
      }
      async interact(t) {
        var e, i, o, s;
        if (!this.container.retina.reduceFactor) return;
        const n = this.container,
          a = n.actualOptions.interactivity.modes.trail,
          r = (1e3 * a.delay) / this.container.retina.reduceFactor;
        if ((this.delay < r && (this.delay += t.value), this.delay < r)) return;
        let l = !0;
        a.pauseOnStop &&
          (n.interactivity.mouse.position === this.lastPosition ||
            ((null === (e = n.interactivity.mouse.position) || void 0 === e
              ? void 0
              : e.x) ===
              (null === (i = this.lastPosition) || void 0 === i
                ? void 0
                : i.x) &&
              (null === (o = n.interactivity.mouse.position) || void 0 === o
                ? void 0
                : o.y) ===
                (null === (s = this.lastPosition) || void 0 === s
                  ? void 0
                  : s.y))) &&
          (l = !1),
          n.interactivity.mouse.position
            ? (this.lastPosition = {
                x: n.interactivity.mouse.position.x,
                y: n.interactivity.mouse.position.y,
              })
            : delete this.lastPosition,
          l && n.particles.push(a.quantity, n.interactivity.mouse, a.particles),
          (this.delay -= r);
      }
      isEnabled() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.mouse,
          o = e.interactivity.events;
        return (
          (i.clicking &&
            i.inside &&
            !!i.position &&
            E("trail", o.onClick.mode)) ||
          (i.inside && !!i.position && E("trail", o.onHover.mode))
        );
      }
      reset() {}
    }
    class Yo {
      constructor() {
        (this.color = new te()), (this.width = 0.5), (this.opacity = 1);
      }
      load(t) {
        var e;
        t &&
          ((this.color = te.create(this.color, t.color)),
          "string" == typeof this.color.value &&
            (this.opacity =
              null !== (e = J(this.color.value)) && void 0 !== e
                ? e
                : this.opacity),
          void 0 !== t.opacity && (this.opacity = t.opacity),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Qo {
      constructor() {
        (this.enable = !1), (this.stroke = new Yo());
      }
      get lineWidth() {
        return this.stroke.width;
      }
      set lineWidth(t) {
        this.stroke.width = t;
      }
      get lineColor() {
        return this.stroke.color;
      }
      set lineColor(t) {
        this.stroke.color = te.create(this.stroke.color, t);
      }
      load(t) {
        var e;
        if (!t) return;
        void 0 !== t.enable && (this.enable = t.enable);
        const i =
          null !== (e = t.stroke) && void 0 !== e
            ? e
            : { color: t.lineColor, width: t.lineWidth };
        this.stroke.load(i);
      }
    }
    class Zo {
      constructor() {
        this.arrangement = "one-per-point";
      }
      load(t) {
        t && void 0 !== t.arrangement && (this.arrangement = t.arrangement);
      }
    }
    class Ko {
      constructor() {
        (this.path = []), (this.size = { height: 0, width: 0 });
      }
      load(t) {
        t &&
          (void 0 !== t.path && (this.path = t.path),
          void 0 !== t.size &&
            (void 0 !== t.size.width && (this.size.width = t.size.width),
            void 0 !== t.size.height && (this.size.height = t.size.height)));
      }
    }
    class ts {
      constructor() {
        (this.radius = 10), (this.type = "path");
      }
      load(t) {
        t &&
          (void 0 !== t.radius && (this.radius = t.radius),
          void 0 !== t.type && (this.type = t.type));
      }
    }
    class es {
      constructor() {
        (this.draw = new Qo()),
          (this.enable = !1),
          (this.inline = new Zo()),
          (this.move = new ts()),
          (this.scale = 1),
          (this.type = "none");
      }
      get inlineArrangement() {
        return this.inline.arrangement;
      }
      set inlineArrangement(t) {
        this.inline.arrangement = t;
      }
      load(t) {
        var e;
        if (!t) return;
        this.draw.load(t.draw);
        const i =
          null !== (e = t.inline) && void 0 !== e
            ? e
            : { arrangement: t.inlineArrangement };
        void 0 !== i && this.inline.load(i),
          this.move.load(t.move),
          void 0 !== t.scale && (this.scale = t.scale),
          void 0 !== t.type && (this.type = t.type),
          void 0 !== t.enable
            ? (this.enable = t.enable)
            : (this.enable = "none" !== this.type),
          void 0 !== t.url && (this.url = t.url),
          void 0 !== t.data &&
            ("string" == typeof t.data
              ? (this.data = t.data)
              : ((this.data = new Ko()), this.data.load(t.data))),
          void 0 !== t.position && (this.position = L({}, t.position));
      }
    }
    function is(t, e, i) {
      const o = U(i.color);
      if (o) {
        t.beginPath(), t.moveTo(e[0].x, e[0].y);
        for (const i of e) t.lineTo(i.x, i.y);
        t.closePath(),
          (t.strokeStyle = rt(o)),
          (t.lineWidth = i.width),
          t.stroke();
      }
    }
    function os(t, e, i, o) {
      t.translate(o.x, o.y);
      const s = U(i.color);
      s &&
        ((t.strokeStyle = rt(s, i.opacity)),
        (t.lineWidth = i.width),
        t.stroke(e));
    }
    function ss(t, e, i) {
      const { dx: o, dy: s } = m(i, t),
        { dx: n, dy: a } = m(e, t),
        r = (o * n + s * a) / (n ** 2 + a ** 2),
        l = { x: t.x + n * r, y: t.x + a * r, isOnSegment: r >= 0 && r <= 1 };
      return (
        r < 0
          ? ((l.x = t.x), (l.y = t.y))
          : r > 1 && ((l.x = e.x), (l.y = e.y)),
        l
      );
    }
    function ns(t, e, i) {
      const { dx: o, dy: s } = m(t, e),
        n = Math.atan2(s, o),
        a = Qt.create(Math.sin(n), -Math.cos(n)),
        r = 2 * (i.x * a.x + i.y * a.y);
      a.multTo(r), i.subFrom(a);
    }
    class as {
      constructor(t) {
        (this.container = t),
          (this.dimension = { height: 0, width: 0 }),
          (this.path2DSupported = !!window.Path2D),
          (this.options = new es()),
          (this.polygonMaskMoveRadius =
            this.options.move.radius * t.retina.pixelRatio);
      }
      async initAsync(t) {
        this.options.load(null == t ? void 0 : t.polygon);
        const e = this.options;
        (this.polygonMaskMoveRadius =
          e.move.radius * this.container.retina.pixelRatio),
          e.enable && (await this.initRawData());
      }
      resize() {
        const t = this.container,
          e = this.options;
        e.enable &&
          "none" !== e.type &&
          (this.redrawTimeout && clearTimeout(this.redrawTimeout),
          (this.redrawTimeout = window.setTimeout(async () => {
            await this.initRawData(!0), await t.particles.redraw();
          }, 250)));
      }
      stop() {
        delete this.raw, delete this.paths;
      }
      particlesInitialization() {
        const t = this.options;
        return (
          !(
            !t.enable ||
            "inline" !== t.type ||
            ("one-per-point" !== t.inline.arrangement &&
              "per-point" !== t.inline.arrangement)
          ) && (this.drawPoints(), !0)
        );
      }
      particlePosition(t) {
        var e, i;
        if (
          this.options.enable &&
          (null !==
            (i = null === (e = this.raw) || void 0 === e ? void 0 : e.length) &&
          void 0 !== i
            ? i
            : 0) > 0
        )
          return L({}, t || this.randomPoint());
      }
      particleBounce(t, e, i) {
        return this.polygonBounce(t, e, i);
      }
      clickPositionValid(t) {
        const e = this.options;
        return (
          e.enable &&
          "none" !== e.type &&
          "inline" !== e.type &&
          this.checkInsidePolygon(t)
        );
      }
      draw(t) {
        var e;
        if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length))
          return;
        const i = this.options,
          o = i.draw;
        if (!i.enable || !o.enable) return;
        const s = this.raw;
        for (const e of this.paths) {
          const i = e.path2d,
            n = this.path2DSupported;
          t &&
            (n && i && this.offset
              ? os(t, i, o.stroke, this.offset)
              : s && is(t, s, o.stroke));
        }
      }
      polygonBounce(t, e, i) {
        const o = this.options;
        if (!this.raw || !o.enable || "top" !== i) return !1;
        if ("inside" === o.type || "outside" === o.type) {
          let e, i, o;
          const s = t.getPosition(),
            n = t.getRadius();
          for (
            let a = 0, r = this.raw.length - 1;
            a < this.raw.length;
            r = a++
          ) {
            const l = this.raw[a],
              c = this.raw[r];
            e = ss(l, c, s);
            const d = m(s, e);
            if ((([i, o] = [d.dx, d.dy]), d.distance < n))
              return ns(l, c, t.velocity), !0;
          }
          if (
            e &&
            void 0 !== i &&
            void 0 !== o &&
            !this.checkInsidePolygon(s)
          ) {
            const i = { x: 1, y: 1 };
            return (
              t.position.x >= e.x && (i.x = -1),
              t.position.y >= e.y && (i.y = -1),
              (t.position.x = e.x + 2 * n * i.x),
              (t.position.y = e.y + 2 * n * i.y),
              t.velocity.mult(-1),
              !0
            );
          }
        } else if ("inline" === o.type && t.initialPosition) {
          if (
            b(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius
          )
            return (
              (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
              (t.velocity.y = t.velocity.x / 2 - t.velocity.y),
              !0
            );
        }
        return !1;
      }
      checkInsidePolygon(t) {
        var e, i;
        const o = this.container,
          s = this.options;
        if (!s.enable || "none" === s.type || "inline" === s.type) return !0;
        if (!this.raw) throw new Error(Lt.noPolygonFound);
        const n = o.canvas.size,
          a =
            null !== (e = null == t ? void 0 : t.x) && void 0 !== e
              ? e
              : Math.random() * n.width,
          r =
            null !== (i = null == t ? void 0 : t.y) && void 0 !== i
              ? i
              : Math.random() * n.height;
        let l = !1;
        for (let t = 0, e = this.raw.length - 1; t < this.raw.length; e = t++) {
          const i = this.raw[t],
            o = this.raw[e];
          i.y > r != o.y > r &&
            a < ((o.x - i.x) * (r - i.y)) / (o.y - i.y) + i.x &&
            (l = !l);
        }
        return "inside" === s.type ? l : "outside" === s.type && !l;
      }
      parseSvgPath(t, e) {
        var i, o, s;
        const n = null != e && e;
        if (void 0 !== this.paths && !n) return this.raw;
        const a = this.container,
          r = this.options,
          l = new DOMParser().parseFromString(t, "image/svg+xml"),
          c = l.getElementsByTagName("svg")[0];
        let d = c.getElementsByTagName("path");
        d.length || (d = l.getElementsByTagName("path")), (this.paths = []);
        for (let t = 0; t < d.length; t++) {
          const e = d.item(t);
          e && this.paths.push({ element: e, length: e.getTotalLength() });
        }
        const h = a.retina.pixelRatio,
          u = r.scale / h;
        (this.dimension.width =
          parseFloat(
            null !== (i = c.getAttribute("width")) && void 0 !== i ? i : "0"
          ) * u),
          (this.dimension.height =
            parseFloat(
              null !== (o = c.getAttribute("height")) && void 0 !== o ? o : "0"
            ) * u);
        const p =
          null !== (s = r.position) && void 0 !== s ? s : { x: 50, y: 50 };
        return (
          (this.offset = {
            x:
              (a.canvas.size.width * p.x) / (100 * h) -
              this.dimension.width / 2,
            y:
              (a.canvas.size.height * p.y) / (100 * h) -
              this.dimension.height / 2,
          }),
          (function (t, e, i) {
            var o;
            const s = [];
            for (const n of t) {
              const t = n.element.pathSegList,
                a =
                  null !== (o = null == t ? void 0 : t.numberOfItems) &&
                  void 0 !== o
                    ? o
                    : 0,
                r = { x: 0, y: 0 };
              for (let o = 0; o < a; o++) {
                const n = null == t ? void 0 : t.getItem(o),
                  a = window.SVGPathSeg;
                switch (null == n ? void 0 : n.pathSegType) {
                  case a.PATHSEG_MOVETO_ABS:
                  case a.PATHSEG_LINETO_ABS:
                  case a.PATHSEG_CURVETO_CUBIC_ABS:
                  case a.PATHSEG_CURVETO_QUADRATIC_ABS:
                  case a.PATHSEG_ARC_ABS:
                  case a.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                  case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                    const t = n;
                    (r.x = t.x), (r.y = t.y);
                    break;
                  }
                  case a.PATHSEG_LINETO_HORIZONTAL_ABS:
                    r.x = n.x;
                    break;
                  case a.PATHSEG_LINETO_VERTICAL_ABS:
                    r.y = n.y;
                    break;
                  case a.PATHSEG_LINETO_REL:
                  case a.PATHSEG_MOVETO_REL:
                  case a.PATHSEG_CURVETO_CUBIC_REL:
                  case a.PATHSEG_CURVETO_QUADRATIC_REL:
                  case a.PATHSEG_ARC_REL:
                  case a.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                  case a.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                    const t = n;
                    (r.x += t.x), (r.y += t.y);
                    break;
                  }
                  case a.PATHSEG_LINETO_HORIZONTAL_REL:
                    r.x += n.x;
                    break;
                  case a.PATHSEG_LINETO_VERTICAL_REL:
                    r.y += n.y;
                    break;
                  case a.PATHSEG_UNKNOWN:
                  case a.PATHSEG_CLOSEPATH:
                    continue;
                }
                s.push({ x: r.x * e + i.x, y: r.y * e + i.y });
              }
            }
            return s;
          })(this.paths, u, this.offset)
        );
      }
      async downloadSvgPath(t, e) {
        const i = this.options,
          o = t || i.url,
          s = null != e && e;
        if (!o || (void 0 !== this.paths && !s)) return this.raw;
        const n = await fetch(o);
        if (!n.ok)
          throw new Error(
            "tsParticles Error - Error occurred during polygon mask download"
          );
        return this.parseSvgPath(await n.text(), e);
      }
      drawPoints() {
        if (this.raw)
          for (const t of this.raw)
            this.container.particles.addParticle({ x: t.x, y: t.y });
      }
      randomPoint() {
        const t = this.container,
          e = this.options;
        let i;
        if ("inline" === e.type)
          switch (e.inline.arrangement) {
            case "random-point":
              i = this.getRandomPoint();
              break;
            case "random-length":
              i = this.getRandomPointByLength();
              break;
            case "equidistant":
              i = this.getEquidistantPointByIndex(t.particles.count);
              break;
            case "one-per-point":
            case "per-point":
            default:
              i = this.getPointByIndex(t.particles.count);
          }
        else
          i = {
            x: Math.random() * t.canvas.size.width,
            y: Math.random() * t.canvas.size.height,
          };
        return this.checkInsidePolygon(i) ? i : this.randomPoint();
      }
      getRandomPoint() {
        if (!this.raw || !this.raw.length)
          throw new Error(Lt.noPolygonDataLoaded);
        const t = R(this.raw);
        return { x: t.x, y: t.y };
      }
      getRandomPointByLength() {
        var t, e, i;
        const o = this.options;
        if (
          !this.raw ||
          !this.raw.length ||
          !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
        )
          throw new Error(Lt.noPolygonDataLoaded);
        const s = R(this.paths),
          n = Math.floor(Math.random() * s.length) + 1,
          a = s.element.getPointAtLength(n);
        return {
          x:
            a.x * o.scale +
            ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) || 0),
          y:
            a.y * o.scale +
            ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) || 0),
        };
      }
      getEquidistantPointByIndex(t) {
        var e, i, o, s, n, a, r;
        const l = this.container.actualOptions,
          c = this.options;
        if (
          !this.raw ||
          !this.raw.length ||
          !(null === (e = this.paths) || void 0 === e ? void 0 : e.length)
        )
          throw new Error(Lt.noPolygonDataLoaded);
        let d,
          h = 0;
        const u =
          this.paths.reduce((t, e) => t + e.length, 0) /
          l.particles.number.value;
        for (const e of this.paths) {
          const i = u * t - h;
          if (i <= e.length) {
            d = e.element.getPointAtLength(i);
            break;
          }
          h += e.length;
        }
        return {
          x:
            (null !== (i = null == d ? void 0 : d.x) && void 0 !== i ? i : 0) *
              c.scale +
            (null !==
              (s = null === (o = this.offset) || void 0 === o ? void 0 : o.x) &&
            void 0 !== s
              ? s
              : 0),
          y:
            (null !== (n = null == d ? void 0 : d.y) && void 0 !== n ? n : 0) *
              c.scale +
            (null !==
              (r = null === (a = this.offset) || void 0 === a ? void 0 : a.y) &&
            void 0 !== r
              ? r
              : 0),
        };
      }
      getPointByIndex(t) {
        if (!this.raw || !this.raw.length)
          throw new Error(Lt.noPolygonDataLoaded);
        const e = this.raw[t % this.raw.length];
        return { x: e.x, y: e.y };
      }
      createPath2D() {
        var t, e;
        const i = this.options;
        if (
          this.path2DSupported &&
          (null === (t = this.paths) || void 0 === t ? void 0 : t.length)
        )
          for (const t of this.paths) {
            const o =
              null === (e = t.element) || void 0 === e
                ? void 0
                : e.getAttribute("d");
            if (o) {
              const e = new Path2D(o),
                s = document
                  .createElementNS("http://www.w3.org/2000/svg", "svg")
                  .createSVGMatrix(),
                n = new Path2D(),
                a = s.scale(i.scale);
              n.addPath ? (n.addPath(e, a), (t.path2d = n)) : delete t.path2d;
            } else delete t.path2d;
            !t.path2d &&
              this.raw &&
              ((t.path2d = new Path2D()),
              t.path2d.moveTo(this.raw[0].x, this.raw[0].y),
              this.raw.forEach((e, i) => {
                var o;
                i > 0 &&
                  (null === (o = t.path2d) ||
                    void 0 === o ||
                    o.lineTo(e.x, e.y));
              }),
              t.path2d.closePath());
          }
      }
      async initRawData(t) {
        const e = this.options;
        if (e.url) this.raw = await this.downloadSvgPath(e.url, t);
        else if (e.data) {
          const i = e.data;
          let o;
          if ("string" != typeof i) {
            const t =
              i.path instanceof Array
                ? i.path.map((t) => `<path d="${t}" />`).join("")
                : `<path d="${i.path}" />`;
            o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${
              i.size.width
            }" height="${i.size.height}">${t}</svg>`;
          } else o = i;
          this.raw = this.parseSvgPath(o, t);
        }
        this.createPath2D();
      }
    }
    class rs {
      constructor() {
        this.id = "polygonMask";
      }
      getPlugin(t) {
        return new as(t);
      }
      needsPlugin(t) {
        var e, i, o;
        return null !==
          (i =
            null === (e = null == t ? void 0 : t.polygon) || void 0 === e
              ? void 0
              : e.enable) && void 0 !== i
          ? i
          : void 0 !==
              (null === (o = null == t ? void 0 : t.polygon) || void 0 === o
                ? void 0
                : o.type) && "none" !== t.polygon.type;
      }
      loadOptions(t, e) {
        if (!this.needsPlugin(e)) return;
        const i = t;
        let o = i.polygon;
        void 0 === (null == o ? void 0 : o.load) && (i.polygon = o = new es()),
          o.load(null == e ? void 0 : e.polygon);
      }
    }
    class ls {
      init(t) {
        const e = t.options.roll;
        if (e.enable)
          if (
            ((t.roll = {
              angle: Math.random() * Math.PI * 2,
              speed: u(e.speed) / 360,
            }),
            e.backColor)
          )
            t.backColor = $(e.backColor);
          else if (e.darken.enable && e.enlighten.enable) {
            const i = Math.random() >= 0.5 ? "darken" : "enlighten";
            t.roll.alter = {
              type: i,
              value: "darken" === i ? e.darken.value : e.enlighten.value,
            };
          } else
            e.darken.enable
              ? (t.roll.alter = { type: "darken", value: e.darken.value })
              : e.enlighten.enable &&
                (t.roll.alter = {
                  type: "enlighten",
                  value: e.enlighten.value,
                });
        else t.roll = { angle: 0, speed: 0 };
      }
      isEnabled(t) {
        const e = t.options.roll;
        return !t.destroyed && !t.spawning && e.enable;
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            const i = t.options.roll;
            if (!t.roll || !i.enable) return;
            const o = t.roll.speed * e.factor,
              s = 2 * Math.PI;
            (t.roll.angle += o), t.roll.angle > s && (t.roll.angle -= s);
          })(t, e);
      }
    }
    class cs {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.rotate;
        t.rotate = {
          enable: e.animation.enable,
          value: (u(e.value) * Math.PI) / 180,
        };
        let i = e.direction;
        if ("random" === i) {
          i =
            Math.floor(2 * Math.random()) > 0
              ? "counter-clockwise"
              : "clockwise";
        }
        switch (i) {
          case "counter-clockwise":
          case "counterClockwise":
            t.rotate.status = 1;
            break;
          case "clockwise":
            t.rotate.status = 0;
        }
        const o = t.options.rotate.animation;
        o.enable &&
          ((t.rotate.velocity =
            (o.speed / 360) * this.container.retina.reduceFactor),
          o.sync || (t.rotate.velocity *= Math.random()));
      }
      isEnabled(t) {
        const e = t.options.rotate,
          i = e.animation;
        return !t.destroyed && !t.spawning && !e.path && i.enable;
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i;
            const o = t.rotate;
            if (!o) return;
            const s = t.options.rotate.animation,
              n =
                (null !== (i = o.velocity) && void 0 !== i ? i : 0) * e.factor,
              a = 2 * Math.PI;
            if (s.enable)
              switch (o.status) {
                case 0:
                  (o.value += n), o.value > a && (o.value -= a);
                  break;
                case 1:
                default:
                  (o.value -= n), o.value < 0 && (o.value += a);
              }
          })(t, e);
      }
    }
    class ds {
      getSidesCount() {
        return 12;
      }
      draw(t, e, i) {
        t.arc(0, 0, i, 0, 2 * Math.PI, !1);
      }
    }
    function hs(t, e, i, o, s) {
      var n;
      const a = e;
      if (!a || !i.enable) return;
      const r = h(i.offset),
        l =
          (null !== (n = e.velocity) && void 0 !== n ? n : 0) * t.factor +
          3.6 * r;
      s && 0 !== a.status
        ? ((a.value -= l),
          a.value < 0 && ((a.status = 0), (a.value += a.value)))
        : ((a.value += l),
          s && a.value > o && ((a.status = 1), (a.value -= a.value % o))),
        a.value > o && (a.value %= o);
    }
    class us {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = $(t.options.color, t.id, t.options.reduceDuplicates);
        e &&
          (t.color = vt(
            e,
            t.options.color.animation,
            this.container.retina.reduceFactor
          ));
      }
      isEnabled(t) {
        var e, i, o;
        const s = t.options.color.animation;
        return (
          !t.destroyed &&
          !t.spawning &&
          ((void 0 !==
            (null === (e = t.color) || void 0 === e ? void 0 : e.h.value) &&
            s.h.enable) ||
            (void 0 !==
              (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) &&
              s.s.enable) ||
            (void 0 !==
              (null === (o = t.color) || void 0 === o ? void 0 : o.l.value) &&
              s.l.enable))
        );
      }
      update(t, e) {
        !(function (t, e) {
          var i, o, s;
          const n = t.options.color.animation;
          void 0 !== (null === (i = t.color) || void 0 === i ? void 0 : i.h) &&
            hs(e, t.color.h, n.h, 360, !1),
            void 0 !==
              (null === (o = t.color) || void 0 === o ? void 0 : o.s) &&
              hs(e, t.color.s, n.s, 100, !0),
            void 0 !==
              (null === (s = t.color) || void 0 === s ? void 0 : s.l) &&
              hs(e, t.color.l, n.l, 100, !0);
        })(t, e);
      }
    }
    class ps extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.mouse,
          o = e.interactivity.events;
        if (
          !(
            (i.position && o.onHover.enable) ||
            (i.clickPosition && o.onClick.enable)
          )
        )
          return !1;
        const s = o.onHover.mode,
          n = o.onClick.mode;
        return E("attract", s) || E("attract", n);
      }
      reset() {}
      async interact() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.status === Lt.mouseMoveEvent,
          o = e.interactivity.events,
          s = o.onHover.enable,
          n = o.onHover.mode,
          a = o.onClick.enable,
          r = o.onClick.mode;
        i && s && E("attract", n)
          ? this.hoverAttract()
          : a && E("attract", r) && this.clickAttract();
      }
      hoverAttract() {
        const t = this.container,
          e = t.interactivity.mouse.position;
        if (!e) return;
        const i = t.retina.attractModeDistance;
        this.processAttract(e, i, new At(e.x, e.y, i));
      }
      processAttract(t, e, i) {
        const o = this.container,
          s = o.actualOptions.interactivity.modes.attract,
          n = o.particles.quadTree.query(i);
        for (const i of n) {
          const { dx: o, dy: n, distance: a } = m(i.position, t),
            r = s.speed * s.factor,
            l = c(k(1 - a / e, s.easing) * r, 0, s.maxSpeed),
            d = Qt.create(0 === a ? r : (o / a) * l, 0 === a ? r : (n / a) * l);
          i.position.subFrom(d);
        }
      }
      clickAttract() {
        const t = this.container;
        if (
          (t.attract.finish ||
            (t.attract.count || (t.attract.count = 0),
            t.attract.count++,
            t.attract.count === t.particles.count && (t.attract.finish = !0)),
          t.attract.clicking)
        ) {
          const e = t.interactivity.mouse.clickPosition;
          if (!e) return;
          const i = t.retina.attractModeDistance;
          this.processAttract(e, i, new At(e.x, e.y, i));
        } else !1 === t.attract.clicking && (t.attract.particles = []);
      }
    }
    class vs extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.mouse,
          o = e.interactivity.events,
          s = o.onDiv;
        return (
          (i.position && o.onHover.enable && E("bounce", o.onHover.mode)) ||
          H("bounce", s)
        );
      }
      async interact() {
        const t = this.container,
          e = t.actualOptions.interactivity.events,
          i = t.interactivity.status === Lt.mouseMoveEvent,
          o = e.onHover.enable,
          s = e.onHover.mode,
          n = e.onDiv;
        i && o && E("bounce", s)
          ? this.processMouseBounce()
          : q("bounce", n, (t, e) => this.singleSelectorBounce(t, e));
      }
      reset() {}
      processMouseBounce() {
        const t = this.container,
          e = 10 * t.retina.pixelRatio,
          i = t.interactivity.mouse.position,
          o = t.retina.bounceModeDistance;
        i && this.processBounce(i, o, new At(i.x, i.y, o + e));
      }
      singleSelectorBounce(t, e) {
        const i = this.container,
          o = document.querySelectorAll(t);
        o.length &&
          o.forEach((t) => {
            const o = t,
              s = i.retina.pixelRatio,
              n = {
                x: (o.offsetLeft + o.offsetWidth / 2) * s,
                y: (o.offsetTop + o.offsetHeight / 2) * s,
              },
              a = (o.offsetWidth / 2) * s,
              r = 10 * s,
              l =
                "circle" === e.type
                  ? new At(n.x, n.y, a + r)
                  : new It(
                      o.offsetLeft * s - r,
                      o.offsetTop * s - r,
                      o.offsetWidth * s + 2 * r,
                      o.offsetHeight * s + 2 * r
                    );
            this.processBounce(n, a, l);
          });
      }
      processBounce(t, e, i) {
        const o = this.container.particles.quadTree.query(i);
        for (const s of o)
          i instanceof At
            ? B(V(s), {
                position: t,
                radius: e,
                mass: (e ** 2 * Math.PI) / 2,
                velocity: Qt.origin,
                factor: Qt.origin,
              })
            : i instanceof It && W(s, D(t, e));
      }
    }
    function fs(t, e, i, o) {
      if (e >= i) {
        return c(t + (e - i) * o, t, e);
      }
      if (e < i) {
        return c(t - (i - e) * o, e, t);
      }
    }
    class ys extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.mouse,
          o = e.interactivity.events,
          s = H("bubble", o.onDiv);
        if (
          !(
            s ||
            (o.onHover.enable && i.position) ||
            (o.onClick.enable && i.clickPosition)
          )
        )
          return !1;
        const n = o.onHover.mode,
          a = o.onClick.mode;
        return E("bubble", n) || E("bubble", a) || s;
      }
      reset(t, e) {
        (t.bubble.inRange && !e) ||
          (delete t.bubble.div,
          delete t.bubble.opacity,
          delete t.bubble.radius,
          delete t.bubble.color);
      }
      async interact() {
        const t = this.container.actualOptions.interactivity.events,
          e = t.onHover,
          i = t.onClick,
          o = e.enable,
          s = e.mode,
          n = i.enable,
          a = i.mode,
          r = t.onDiv;
        o && E("bubble", s)
          ? this.hoverBubble()
          : n && E("bubble", a)
          ? this.clickBubble()
          : q("bubble", r, (t, e) => this.singleSelectorHover(t, e));
      }
      singleSelectorHover(t, e) {
        const i = this.container,
          o = document.querySelectorAll(t);
        o.length &&
          o.forEach((t) => {
            const o = t,
              s = i.retina.pixelRatio,
              n = {
                x: (o.offsetLeft + o.offsetWidth / 2) * s,
                y: (o.offsetTop + o.offsetHeight / 2) * s,
              },
              a = (o.offsetWidth / 2) * s,
              r =
                "circle" === e.type
                  ? new At(n.x, n.y, a)
                  : new It(
                      o.offsetLeft * s,
                      o.offsetTop * s,
                      o.offsetWidth * s,
                      o.offsetHeight * s
                    ),
              l = i.particles.quadTree.query(r);
            for (const t of l) {
              if (!r.contains(t.getPosition())) continue;
              t.bubble.inRange = !0;
              const e = F(i.actualOptions.interactivity.modes.bubble.divs, o);
              (t.bubble.div && t.bubble.div === o) ||
                (this.reset(t, !0), (t.bubble.div = o)),
                this.hoverBubbleSize(t, 1, e),
                this.hoverBubbleOpacity(t, 1, e),
                this.hoverBubbleColor(t, 1, e);
            }
          });
      }
      process(t, e, i, o) {
        const s = this.container,
          n = o.bubbleObj.optValue;
        if (void 0 === n) return;
        const a = s.actualOptions.interactivity.modes.bubble.duration,
          r = s.retina.bubbleModeDistance,
          l = o.particlesObj.optValue,
          c = o.bubbleObj.value,
          d = o.particlesObj.value || 0,
          h = o.type;
        if (n !== l)
          if (s.bubble.durationEnd)
            c &&
              ("size" === h && delete t.bubble.radius,
              "opacity" === h && delete t.bubble.opacity);
          else if (e <= r) {
            if ((null != c ? c : d) !== n) {
              const e = d - (i * (d - n)) / a;
              "size" === h && (t.bubble.radius = e),
                "opacity" === h && (t.bubble.opacity = e);
            }
          } else
            "size" === h && delete t.bubble.radius,
              "opacity" === h && delete t.bubble.opacity;
      }
      clickBubble() {
        var t, e;
        const i = this.container,
          o = i.actualOptions,
          s = i.interactivity.mouse.clickPosition;
        if (!s) return;
        const n = i.retina.bubbleModeDistance,
          a = i.particles.quadTree.queryCircle(s, n);
        for (const n of a) {
          if (!i.bubble.clicking) continue;
          n.bubble.inRange = !i.bubble.durationEnd;
          const a = b(n.getPosition(), s),
            r =
              (new Date().getTime() - (i.interactivity.mouse.clickTime || 0)) /
              1e3;
          r > o.interactivity.modes.bubble.duration &&
            (i.bubble.durationEnd = !0),
            r > 2 * o.interactivity.modes.bubble.duration &&
              ((i.bubble.clicking = !1), (i.bubble.durationEnd = !1));
          const l = {
            bubbleObj: {
              optValue: i.retina.bubbleModeSize,
              value: n.bubble.radius,
            },
            particlesObj: {
              optValue: v(n.options.size.value) * i.retina.pixelRatio,
              value: n.size.value,
            },
            type: "size",
          };
          this.process(n, a, r, l);
          const c = {
            bubbleObj: {
              optValue: o.interactivity.modes.bubble.opacity,
              value: n.bubble.opacity,
            },
            particlesObj: {
              optValue: v(n.options.opacity.value),
              value:
                null !==
                  (e =
                    null === (t = n.opacity) || void 0 === t
                      ? void 0
                      : t.value) && void 0 !== e
                  ? e
                  : 1,
            },
            type: "opacity",
          };
          this.process(n, a, r, c),
            i.bubble.durationEnd
              ? delete n.bubble.color
              : a <= i.retina.bubbleModeDistance
              ? this.hoverBubbleColor(n, a)
              : delete n.bubble.color;
        }
      }
      hoverBubble() {
        const t = this.container,
          e = t.interactivity.mouse.position;
        if (void 0 === e) return;
        const i = t.retina.bubbleModeDistance,
          o = t.particles.quadTree.queryCircle(e, i);
        for (const s of o) {
          s.bubble.inRange = !0;
          const o = b(s.getPosition(), e),
            n = 1 - o / i;
          o <= i
            ? n >= 0 &&
              t.interactivity.status === Lt.mouseMoveEvent &&
              (this.hoverBubbleSize(s, n),
              this.hoverBubbleOpacity(s, n),
              this.hoverBubbleColor(s, n))
            : this.reset(s),
            t.interactivity.status === Lt.mouseLeaveEvent && this.reset(s);
        }
      }
      hoverBubbleSize(t, e, i) {
        const o = this.container,
          s = (null == i ? void 0 : i.size)
            ? i.size * o.retina.pixelRatio
            : o.retina.bubbleModeSize;
        if (void 0 === s) return;
        const n = v(t.options.size.value) * o.retina.pixelRatio,
          a = fs(t.size.value, s, n, e);
        void 0 !== a && (t.bubble.radius = a);
      }
      hoverBubbleOpacity(t, e, i) {
        var o, s, n;
        const a = this.container.actualOptions,
          r =
            null !== (o = null == i ? void 0 : i.opacity) && void 0 !== o
              ? o
              : a.interactivity.modes.bubble.opacity;
        if (!r) return;
        const l = t.options.opacity.value,
          c = fs(
            null !==
              (n =
                null === (s = t.opacity) || void 0 === s ? void 0 : s.value) &&
              void 0 !== n
              ? n
              : 1,
            r,
            v(l),
            e
          );
        void 0 !== c && (t.bubble.opacity = c);
      }
      hoverBubbleColor(t, e, i) {
        const o = this.container.actualOptions,
          s = null != i ? i : o.interactivity.modes.bubble;
        if (!t.bubble.finalColor) {
          const e = s.color;
          if (!e) return;
          const i = e instanceof Array ? R(e) : e;
          t.bubble.finalColor = $(i);
        }
        if (t.bubble.finalColor)
          if (s.mix) {
            t.bubble.color = void 0;
            const i = t.getFillColor();
            t.bubble.color = i
              ? N(dt(i, t.bubble.finalColor, 1 - e, e))
              : t.bubble.finalColor;
          } else t.bubble.color = t.bubble.finalColor;
      }
    }
    class ms extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.interactivity.mouse,
          i = t.actualOptions.interactivity.events;
        return (
          !(!i.onHover.enable || !e.position) && E("connect", i.onHover.mode)
        );
      }
      reset() {}
      async interact() {
        const t = this.container;
        if (
          t.actualOptions.interactivity.events.onHover.enable &&
          "mousemove" === t.interactivity.status
        ) {
          const e = t.interactivity.mouse.position;
          if (!e) return;
          const i = Math.abs(t.retina.connectModeRadius),
            o = t.particles.quadTree.queryCircle(e, i);
          let s = 0;
          for (const e of o) {
            const i = e.getPosition();
            for (const n of o.slice(s + 1)) {
              const o = n.getPosition(),
                s = Math.abs(t.retina.connectModeDistance),
                a = Math.abs(i.x - o.x),
                r = Math.abs(i.y - o.y);
              a < s && r < s && t.canvas.drawConnectLine(e, n);
            }
            ++s;
          }
        }
      }
    }
    class bs extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.interactivity.mouse,
          i = t.actualOptions.interactivity.events;
        return i.onHover.enable && !!e.position && E("grab", i.onHover.mode);
      }
      reset() {}
      async interact() {
        var t;
        const e = this.container,
          i = e.actualOptions,
          o = i.interactivity;
        if (
          o.events.onHover.enable &&
          e.interactivity.status === Lt.mouseMoveEvent
        ) {
          const s = e.interactivity.mouse.position;
          if (!s) return;
          const n = e.retina.grabModeDistance,
            a = e.particles.quadTree.queryCircle(s, n);
          for (const r of a) {
            const a = b(r.getPosition(), s);
            if (a <= n) {
              const l = o.modes.grab.links,
                c = l.opacity,
                d = c - (a * c) / n;
              if (d <= 0) continue;
              const h =
                null !== (t = l.color) && void 0 !== t
                  ? t
                  : r.options.links.color;
              if (!e.particles.grabLineColor) {
                const t = i.interactivity.modes.grab.links;
                e.particles.grabLineColor = ut(h, t.blink, t.consent);
              }
              const u = ht(r, void 0, e.particles.grabLineColor);
              if (!u) return;
              e.canvas.drawGrabLine(r, u, d, s);
            }
          }
        }
      }
    }
    class gs extends _t {
      constructor(t) {
        super(t);
      }
      isEnabled() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.mouse,
          o = e.interactivity.events,
          s = H("repulse", o.onDiv);
        if (
          !(
            s ||
            (o.onHover.enable && i.position) ||
            (o.onClick.enable && i.clickPosition)
          )
        )
          return !1;
        const n = o.onHover.mode,
          a = o.onClick.mode;
        return E("repulse", n) || E("repulse", a) || s;
      }
      reset() {}
      async interact() {
        const t = this.container,
          e = t.actualOptions,
          i = t.interactivity.status === Lt.mouseMoveEvent,
          o = e.interactivity.events,
          s = o.onHover.enable,
          n = o.onHover.mode,
          a = o.onClick.enable,
          r = o.onClick.mode,
          l = o.onDiv;
        i && s && E("repulse", n)
          ? this.hoverRepulse()
          : a && E("repulse", r)
          ? this.clickRepulse()
          : q("repulse", l, (t, e) => this.singleSelectorRepulse(t, e));
      }
      singleSelectorRepulse(t, e) {
        const i = this.container,
          o = document.querySelectorAll(t);
        o.length &&
          o.forEach((t) => {
            const o = t,
              s = i.retina.pixelRatio,
              n = {
                x: (o.offsetLeft + o.offsetWidth / 2) * s,
                y: (o.offsetTop + o.offsetHeight / 2) * s,
              },
              a = (o.offsetWidth / 2) * s,
              r =
                "circle" === e.type
                  ? new At(n.x, n.y, a)
                  : new It(
                      o.offsetLeft * s,
                      o.offsetTop * s,
                      o.offsetWidth * s,
                      o.offsetHeight * s
                    ),
              l = F(i.actualOptions.interactivity.modes.repulse.divs, o);
            this.processRepulse(n, a, r, l);
          });
      }
      hoverRepulse() {
        const t = this.container,
          e = t.interactivity.mouse.position;
        if (!e) return;
        const i = t.retina.repulseModeDistance;
        this.processRepulse(e, i, new At(e.x, e.y, i));
      }
      processRepulse(t, e, i, o) {
        var s;
        const n = this.container,
          a = n.particles.quadTree.query(i),
          r = n.actualOptions.interactivity.modes.repulse;
        for (const i of a) {
          const { dx: n, dy: a, distance: l } = m(i.position, t),
            d =
              (null !== (s = null == o ? void 0 : o.speed) && void 0 !== s
                ? s
                : r.speed) * r.factor,
            h = c(k(1 - l / e, r.easing) * d, 0, r.maxSpeed),
            u = Qt.create(0 === l ? d : (n / l) * h, 0 === l ? d : (a / l) * h);
          i.position.addTo(u);
        }
      }
      clickRepulse() {
        const t = this.container;
        if (
          (t.repulse.finish ||
            (t.repulse.count || (t.repulse.count = 0),
            t.repulse.count++,
            t.repulse.count === t.particles.count && (t.repulse.finish = !0)),
          t.repulse.clicking)
        ) {
          const e = t.retina.repulseModeDistance,
            i = Math.pow(e / 6, 3),
            o = t.interactivity.mouse.clickPosition;
          if (void 0 === o) return;
          const s = new At(o.x, o.y, i),
            n = t.particles.quadTree.query(s);
          for (const e of n) {
            const { dx: s, dy: n, distance: a } = m(o, e.position),
              r = a ** 2,
              l = t.actualOptions.interactivity.modes.repulse.speed,
              c = (-i * l) / r;
            if (r <= i) {
              t.repulse.particles.push(e);
              const i = Qt.create(s, n);
              (i.length = c), e.velocity.setTo(i);
            }
          }
        } else if (!1 === t.repulse.clicking) {
          for (const e of t.repulse.particles)
            e.velocity.setTo(e.initialVelocity);
          t.repulse.particles = [];
        }
      }
    }
    const ws =
      /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
    async function xs(t) {
      return new Promise((e) => {
        t.loading = !0;
        const i = new Image();
        i.addEventListener("load", () => {
          (t.element = i), (t.loading = !1), e();
        }),
          i.addEventListener("error", () => {
            (t.error = !0),
              (t.loading = !1),
              console.error(`Error tsParticles - loading image: ${t.source}`),
              e();
          }),
          (i.src = t.source);
      });
    }
    async function ks(t) {
      if ("svg" !== t.type) return void (await xs(t));
      t.loading = !0;
      const e = await fetch(t.source);
      (t.loading = !1),
        e.ok ||
          (console.error("Error tsParticles - Image not found"),
          (t.error = !0)),
        t.error || (t.svgData = await e.text());
    }
    function Ps(t, e, i, o) {
      var s, n, a;
      const r = (function (t, e, i) {
          const { svgData: o } = t;
          if (!o) return "";
          const s = lt(e, i);
          if (o.includes("fill")) return o.replace(ws, () => s);
          const n = o.indexOf(">");
          return `${o.substring(0, n)} fill="${s}"${o.substring(n)}`;
        })(
          t,
          i,
          null !==
            (n = null === (s = o.opacity) || void 0 === s ? void 0 : s.value) &&
            void 0 !== n
            ? n
            : 1
        ),
        l = new Blob([r], { type: "image/svg+xml" }),
        c = URL || window.URL || window.webkitURL || window,
        d = c.createObjectURL(l),
        h = new Image(),
        u = {
          data: Object.assign(Object.assign({}, t), { svgData: r }),
          ratio: e.width / e.height,
          replaceColor:
            null !== (a = e.replaceColor) && void 0 !== a ? a : e.replace_color,
          source: e.src,
        };
      return (
        h.addEventListener("load", () => {
          const e = o.image;
          e && ((e.loaded = !0), (t.element = h)), c.revokeObjectURL(d);
        }),
        h.addEventListener("error", () => {
          c.revokeObjectURL(d);
          const e = Object.assign(Object.assign({}, t), {
            error: !1,
            loading: !0,
          });
          xs(e).then(() => {
            const i = o.image;
            i && ((t.element = e.element), (i.loaded = !0));
          });
        }),
        (h.src = d),
        u
      );
    }
    var Ms,
      zs = function (t, e, i, o, s) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !s)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof e ? t !== e || !s : !e.has(t))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === o ? s.call(t, i) : s ? (s.value = i) : e.set(t, i), i;
      },
      Cs = function (t, e, i, o) {
        if ("a" === i && !o)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof e ? t !== e || !o : !e.has(t))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === i ? o : "a" === i ? o.call(t) : o ? o.value : e.get(t);
      };
    class Ts {
      constructor() {
        Ms.set(this, void 0), zs(this, Ms, [], "f");
      }
      getSidesCount() {
        return 12;
      }
      getImages(t) {
        const e = Cs(this, Ms, "f").find((e) => e.id === t.id);
        return (
          e ||
          (Cs(this, Ms, "f").push({ id: t.id, images: [] }), this.getImages(t))
        );
      }
      addImage(t, e) {
        const i = this.getImages(t);
        null == i || i.images.push(e);
      }
      destroy() {
        zs(this, Ms, [], "f");
      }
      async loadImageShape(t, e) {
        const i = e.src;
        if (!i) throw new Error("Error tsParticles - No image.src");
        try {
          const o = {
            source: i,
            type: i.substr(i.length - 3),
            error: !1,
            loading: !0,
          };
          this.addImage(t, o);
          const s = e.replaceColor ? ks : xs;
          await s(o);
        } catch (t) {
          throw new Error(`tsParticles error - ${e.src} not found`);
        }
      }
      draw(t, e, i, o) {
        var s, n;
        const a = e.image,
          r =
            null === (s = null == a ? void 0 : a.data) || void 0 === s
              ? void 0
              : s.element;
        if (!r) return;
        const l =
            null !== (n = null == a ? void 0 : a.ratio) && void 0 !== n ? n : 1,
          c = { x: -i, y: -i };
        ((null == a ? void 0 : a.data.svgData) &&
          (null == a ? void 0 : a.replaceColor)) ||
          (t.globalAlpha = o),
          t.drawImage(r, c.x, c.y, 2 * i, (2 * i) / l),
          ((null == a ? void 0 : a.data.svgData) &&
            (null == a ? void 0 : a.replaceColor)) ||
            (t.globalAlpha = 1);
      }
      loadShape(t) {
        var e, i, o;
        if ("image" !== t.shape && "images" !== t.shape) return;
        const s = this.getImages(t.container).images,
          n = t.shapeData,
          a = s.find((t) => t.source === n.src);
        let r;
        if (!a)
          return void this.loadImageShape(t.container, n).then(() => {
            this.loadShape(t);
          });
        if (a.error) return;
        const l = t.getFillColor();
        (r =
          a.svgData && n.replaceColor && l
            ? Ps(a, n, l, t)
            : {
                data: a,
                loaded: !0,
                ratio: n.width / n.height,
                replaceColor:
                  null !== (e = n.replaceColor) && void 0 !== e
                    ? e
                    : n.replace_color,
                source: n.src,
              }),
          r.ratio || (r.ratio = 1);
        const c = {
          image: r,
          fill: null !== (i = n.fill) && void 0 !== i ? i : t.fill,
          close: null !== (o = n.close) && void 0 !== o ? o : t.close,
        };
        (t.image = c.image), (t.fill = c.fill), (t.close = c.close);
      }
    }
    Ms = new WeakMap();
    class Es {
      constructor(t) {
        this.container = t;
      }
      init() {}
      isEnabled(t) {
        return !t.destroyed;
      }
      update(t, e) {
        if (!this.isEnabled(t)) return;
        const i = t.life;
        let o = !1;
        if (t.spawning) {
          if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay)))
            return;
          (o = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0);
        }
        if (-1 === i.duration) return;
        if (t.spawning) return;
        if ((o ? (i.time = 0) : (i.time += e.value), i.time < i.duration))
          return;
        if (
          ((i.time = 0), t.life.count > 0 && t.life.count--, 0 === t.life.count)
        )
          return void t.destroy();
        const s = this.container.canvas.size,
          n = f(0, s.width),
          a = f(0, s.width);
        (t.position.x = h(n)),
          (t.position.y = h(a)),
          (t.spawning = !0),
          (i.delayTime = 0),
          (i.time = 0),
          t.reset();
        const r = t.options.life;
        (i.delay = 1e3 * u(r.delay.value)),
          (i.duration = 1e3 * u(r.duration.value));
      }
    }
    class Ss {
      getSidesCount() {
        return 1;
      }
      draw(t, e, i) {
        t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0);
      }
    }
    class Os {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.opacity;
        t.opacity = {
          enable: e.animation.enable,
          max: v(e.value),
          min: p(e.value),
          value: u(e.value),
          loops: 0,
          maxLoops: e.animation.count,
        };
        const i = e.animation;
        if (i.enable) {
          t.opacity.status = 0;
          const o = e.value;
          switch (
            ((t.opacity.min = p(o)), (t.opacity.max = v(o)), i.startValue)
          ) {
            case "min":
              (t.opacity.value = t.opacity.min), (t.opacity.status = 0);
              break;
            case "random":
              (t.opacity.value = h(t.opacity)),
                (t.opacity.status = Math.random() >= 0.5 ? 0 : 1);
              break;
            case "max":
            default:
              (t.opacity.value = t.opacity.max), (t.opacity.status = 1);
          }
          (t.opacity.velocity =
            (i.speed / 100) * this.container.retina.reduceFactor),
            i.sync || (t.opacity.velocity *= Math.random());
        }
      }
      isEnabled(t) {
        var e, i, o, s;
        return (
          !t.destroyed &&
          !t.spawning &&
          !!t.opacity &&
          t.opacity.enable &&
          ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
            ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) > 0 &&
              (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) <
                (null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0)))
        );
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i, o, s, n, a;
            if (!t.opacity) return;
            const r = t.opacity.min,
              l = t.opacity.max;
            if (
              !(
                t.destroyed ||
                !t.opacity.enable ||
                ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) >
                  0 &&
                  (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) >
                    (null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0))
              )
            ) {
              switch (t.opacity.status) {
                case 0:
                  t.opacity.value >= l
                    ? ((t.opacity.status = 1),
                      t.opacity.loops || (t.opacity.loops = 0),
                      t.opacity.loops++)
                    : (t.opacity.value +=
                        (null !== (n = t.opacity.velocity) && void 0 !== n
                          ? n
                          : 0) * e.factor);
                  break;
                case 1:
                  t.opacity.value <= r
                    ? ((t.opacity.status = 0),
                      t.opacity.loops || (t.opacity.loops = 0),
                      t.opacity.loops++)
                    : (t.opacity.value -=
                        (null !== (a = t.opacity.velocity) && void 0 !== a
                          ? a
                          : 0) * e.factor);
              }
              !(function (t, e, i, o) {
                switch (t.options.opacity.animation.destroy) {
                  case "max":
                    e >= o && t.destroy();
                    break;
                  case "min":
                    e <= i && t.destroy();
                }
              })(t, t.opacity.value, r, l),
                t.destroyed || (t.opacity.value = c(t.opacity.value, r, l));
            }
          })(t, e);
      }
    }
    class Rs {
      constructor(t) {
        this.container = t;
      }
      init() {}
      isEnabled(t) {
        return !t.destroyed && !t.spawning;
      }
      update(t, e) {
        var i, o, s, n;
        const a = t.options.move.outModes;
        this.updateOutMode(
          t,
          e,
          null !== (i = a.bottom) && void 0 !== i ? i : a.default,
          "bottom"
        ),
          this.updateOutMode(
            t,
            e,
            null !== (o = a.left) && void 0 !== o ? o : a.default,
            "left"
          ),
          this.updateOutMode(
            t,
            e,
            null !== (s = a.right) && void 0 !== s ? s : a.default,
            "right"
          ),
          this.updateOutMode(
            t,
            e,
            null !== (n = a.top) && void 0 !== n ? n : a.default,
            "top"
          );
      }
      updateOutMode(t, e, i, o) {
        switch (i) {
          case "bounce":
          case "bounce-vertical":
          case "bounce-horizontal":
          case "bounceVertical":
          case "bounceHorizontal":
          case "split":
            this.bounce(t, e, o, i);
            break;
          case "destroy":
            this.destroy(t, o);
            break;
          case "out":
            this.out(t, o);
            break;
          case "none":
          default:
            this.none(t, o);
        }
      }
      destroy(t, e) {
        const i = this.container;
        A(t.position, i.canvas.size, t.getRadius(), e) ||
          i.particles.remove(t, void 0, !0);
      }
      out(t, e) {
        const i = this.container;
        if (A(t.position, i.canvas.size, t.getRadius(), e)) return;
        const o = t.options.move.warp,
          s = i.canvas.size,
          n = {
            bottom: s.height + t.getRadius() + t.offset.y,
            left: -t.getRadius() - t.offset.x,
            right: s.width + t.getRadius() + t.offset.x,
            top: -t.getRadius() - t.offset.y,
          },
          a = t.getRadius(),
          r = D(t.position, a);
        "right" === e && r.left > s.width + t.offset.x
          ? ((t.position.x = n.left),
            (t.initialPosition.x = t.position.x),
            o ||
              ((t.position.y = Math.random() * s.height),
              (t.initialPosition.y = t.position.y)))
          : "left" === e &&
            r.right < -t.offset.x &&
            ((t.position.x = n.right),
            (t.initialPosition.x = t.position.x),
            o ||
              ((t.position.y = Math.random() * s.height),
              (t.initialPosition.y = t.position.y))),
          "bottom" === e && r.top > s.height + t.offset.y
            ? (o ||
                ((t.position.x = Math.random() * s.width),
                (t.initialPosition.x = t.position.x)),
              (t.position.y = n.top),
              (t.initialPosition.y = t.position.y))
            : "top" === e &&
              r.bottom < -t.offset.y &&
              (o ||
                ((t.position.x = Math.random() * s.width),
                (t.initialPosition.x = t.position.x)),
              (t.position.y = n.bottom),
              (t.initialPosition.y = t.position.y));
      }
      bounce(t, e, i, o) {
        const s = this.container;
        let n = !1;
        for (const [, o] of s.plugins)
          if (
            (void 0 !== o.particleBounce && (n = o.particleBounce(t, e, i)), n)
          )
            break;
        if (n) return;
        const a = t.getPosition(),
          r = t.offset,
          l = t.getRadius(),
          c = D(a, l),
          d = s.canvas.size;
        !(function (t) {
          if (
            "bounce" !== t.outMode &&
            "bounce-horizontal" !== t.outMode &&
            "bounceHorizontal" !== t.outMode &&
            "split" !== t.outMode
          )
            return;
          const e = t.particle.velocity.x;
          let i = !1;
          if (
            ("right" === t.direction &&
              t.bounds.right >= t.canvasSize.width &&
              e > 0) ||
            ("left" === t.direction && t.bounds.left <= 0 && e < 0)
          ) {
            const e = u(t.particle.options.bounce.horizontal.value);
            (t.particle.velocity.x *= -e), (i = !0);
          }
          if (!i) return;
          const o = t.offset.x + t.size;
          t.bounds.right >= t.canvasSize.width
            ? (t.particle.position.x = t.canvasSize.width - o)
            : t.bounds.left <= 0 && (t.particle.position.x = o),
            "split" === t.outMode && t.particle.destroy();
        })({
          particle: t,
          outMode: o,
          direction: i,
          bounds: c,
          canvasSize: d,
          offset: r,
          size: l,
        }),
          (function (t) {
            if (
              "bounce" === t.outMode ||
              "bounce-vertical" === t.outMode ||
              "bounceVertical" === t.outMode ||
              "split" === t.outMode
            ) {
              const e = t.particle.velocity.y;
              let i = !1;
              if (
                ("bottom" === t.direction &&
                  t.bounds.bottom >= t.canvasSize.height &&
                  e > 0) ||
                ("top" === t.direction && t.bounds.top <= 0 && e < 0)
              ) {
                const e = u(t.particle.options.bounce.vertical.value);
                (t.particle.velocity.y *= -e), (i = !0);
              }
              if (!i) return;
              const o = t.offset.y + t.size;
              t.bounds.bottom >= t.canvasSize.height
                ? (t.particle.position.y = t.canvasSize.height - o)
                : t.bounds.top <= 0 && (t.particle.position.y = o),
                "split" === t.outMode && t.particle.destroy();
            }
          })({
            particle: t,
            outMode: o,
            direction: i,
            bounds: c,
            canvasSize: d,
            offset: r,
            size: l,
          });
      }
      none(t, e) {
        if (
          (t.options.move.distance.horizontal &&
            ("left" === e || "right" === e)) ||
          (t.options.move.distance.vertical && ("top" === e || "bottom" === e))
        )
          return;
        const i = t.options.move.gravity,
          o = this.container,
          s = o.canvas.size,
          n = t.getRadius();
        if (i.enable) {
          const a = t.position;
          ((!i.inverse && a.y > s.height + n && "bottom" === e) ||
            (i.inverse && a.y < -n && "top" === e)) &&
            o.particles.remove(t);
        } else {
          if (
            (t.velocity.y > 0 && t.position.y <= s.height + n) ||
            (t.velocity.y < 0 && t.position.y >= -n) ||
            (t.velocity.x > 0 && t.position.x <= s.width + n) ||
            (t.velocity.x < 0 && t.position.x >= -n)
          )
            return;
          A(t.position, o.canvas.size, n, e) || o.particles.remove(t);
        }
      }
    }
    class As extends Gt {
      constructor(t) {
        super(t);
      }
      async interact(t) {
        var e;
        const i = this.container,
          o =
            null !== (e = t.retina.attractDistance) && void 0 !== e
              ? e
              : i.retina.attractDistance,
          s = t.getPosition(),
          n = i.particles.quadTree.queryCircle(s, o);
        for (const e of n) {
          if (
            t === e ||
            !e.options.move.attract.enable ||
            e.destroyed ||
            e.spawning
          )
            continue;
          const i = e.getPosition(),
            { dx: o, dy: n } = m(s, i),
            a = t.options.move.attract.rotate,
            r = o / (1e3 * a.x),
            l = n / (1e3 * a.y),
            c = e.size.value / t.size.value,
            d = 1 / c;
          (t.velocity.x -= r * c),
            (t.velocity.y -= l * c),
            (e.velocity.x += r * d),
            (e.velocity.y += l * d);
        }
      }
      isEnabled(t) {
        return t.options.move.attract.enable;
      }
      reset() {}
    }
    function Is(t, e) {
      B(V(t), V(e));
    }
    class Ds extends Gt {
      constructor(t) {
        super(t);
      }
      isEnabled(t) {
        return t.options.collisions.enable;
      }
      reset() {}
      async interact(t) {
        const e = this.container,
          i = t.getPosition(),
          o = t.getRadius(),
          s = e.particles.quadTree.queryCircle(i, 2 * o);
        for (const e of s) {
          if (
            t === e ||
            !e.options.collisions.enable ||
            t.options.collisions.mode !== e.options.collisions.mode ||
            e.destroyed ||
            e.spawning
          )
            continue;
          const s = e.getPosition();
          if (Math.round(i.z) !== Math.round(s.z)) continue;
          b(i, s) <= o + e.getRadius() && this.resolveCollision(t, e);
        }
      }
      resolveCollision(t, e) {
        switch (t.options.collisions.mode) {
          case "absorb":
            this.absorb(t, e);
            break;
          case "bounce":
            Is(t, e);
            break;
          case "destroy":
            !(function (t, e) {
              t.unbreakable || e.unbreakable || Is(t, e),
                void 0 === t.getRadius() && void 0 !== e.getRadius()
                  ? t.destroy()
                  : void 0 !== t.getRadius() && void 0 === e.getRadius()
                  ? e.destroy()
                  : void 0 !== t.getRadius() &&
                    void 0 !== e.getRadius() &&
                    (t.getRadius() >= e.getRadius()
                      ? e.destroy()
                      : t.destroy());
            })(t, e);
        }
      }
      absorb(t, e) {
        const i = this.container,
          o = i.fpsLimit / 1e3;
        if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
        else if (void 0 !== t.getRadius() && void 0 === e.getRadius())
          e.destroy();
        else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
          if (t.getRadius() >= e.getRadius()) {
            const s = c(t.getRadius() / e.getRadius(), 0, e.getRadius()) * o;
            (t.size.value += s),
              (e.size.value -= s),
              e.getRadius() <= i.retina.pixelRatio &&
                ((e.size.value = 0), e.destroy());
          } else {
            const s = c(e.getRadius() / t.getRadius(), 0, t.getRadius()) * o;
            (t.size.value -= s),
              (e.size.value += s),
              t.getRadius() <= i.retina.pixelRatio &&
                ((t.size.value = 0), t.destroy());
          }
      }
    }
    function Ls(t, e, i, o, s) {
      let n = b(t, e);
      if (!s || n <= i) return n;
      if (((n = b(t, { x: e.x - o.width, y: e.y })), n <= i)) return n;
      if (((n = b(t, { x: e.x - o.width, y: e.y - o.height })), n <= i))
        return n;
      return (n = b(t, { x: e.x, y: e.y - o.height })), n;
    }
    class Hs extends Gt {
      constructor(t) {
        super(t);
      }
      isEnabled(t) {
        return t.options.links.enable;
      }
      reset() {}
      async interact(t) {
        var e;
        t.links = [];
        const i = t.getPosition(),
          o = this.container,
          s = o.canvas.size;
        if (i.x < 0 || i.y < 0 || i.x > s.width || i.y > s.height) return;
        const n = t.options.links,
          a = n.opacity,
          r =
            null !== (e = t.retina.linksDistance) && void 0 !== e
              ? e
              : o.retina.linksDistance,
          l = n.warp,
          c = l ? new Dt(i.x, i.y, r, s) : new At(i.x, i.y, r),
          d = o.particles.quadTree.query(c);
        for (const e of d) {
          const o = e.options.links;
          if (
            t === e ||
            !o.enable ||
            n.id !== o.id ||
            e.spawning ||
            e.destroyed ||
            -1 !== t.links.map((t) => t.destination).indexOf(e) ||
            -1 !== e.links.map((t) => t.destination).indexOf(t)
          )
            continue;
          const c = e.getPosition();
          if (c.x < 0 || c.y < 0 || c.x > s.width || c.y > s.height) continue;
          const d = Ls(i, c, r, s, l && o.warp);
          if (d > r) return;
          const h = (1 - d / r) * a;
          this.setColor(t), t.links.push({ destination: e, opacity: h });
        }
      }
      setColor(t) {
        const e = this.container,
          i = t.options.links;
        let o =
          void 0 === i.id
            ? e.particles.linksColor
            : e.particles.linksColors.get(i.id);
        if (!o) {
          (o = ut(i.color, i.blink, i.consent)),
            void 0 === i.id
              ? (e.particles.linksColor = o)
              : e.particles.linksColors.set(i.id, o);
        }
      }
    }
    class qs {
      constructor(t) {
        this.container = t;
      }
      particleCreated(t) {
        t.links = [];
      }
      particleDestroyed(t) {
        t.links = [];
      }
      drawParticle(t, e) {
        const i = e,
          o = this.container,
          s = o.particles,
          n = e.options;
        if (i.links.length > 0) {
          t.save();
          const e = i.links.filter(
            (t) =>
              o.particles.getLinkFrequency(i, t.destination) <=
              n.links.frequency
          );
          for (const t of e) {
            const a = t.destination;
            if (n.links.triangles.enable) {
              const r = e.map((t) => t.destination),
                l = a.links.filter(
                  (t) =>
                    o.particles.getLinkFrequency(a, t.destination) <=
                      a.options.links.frequency && r.indexOf(t.destination) >= 0
                );
              if (l.length)
                for (const e of l) {
                  const o = e.destination;
                  s.getTriangleFrequency(i, a, o) >
                    n.links.triangles.frequency ||
                    this.drawLinkTriangle(i, t, e);
                }
            }
            t.opacity > 0 && o.retina.linksWidth > 0 && this.drawLinkLine(i, t);
          }
          t.restore();
        }
      }
      drawLinkTriangle(t, e, i) {
        var o;
        const s = this.container,
          n = s.actualOptions,
          a = e.destination,
          r = i.destination,
          l = t.options.links.triangles,
          c =
            null !== (o = l.opacity) && void 0 !== o
              ? o
              : (e.opacity + i.opacity) / 2;
        if (c <= 0) return;
        const d = t.getPosition(),
          h = a.getPosition(),
          u = r.getPosition();
        s.canvas.draw((e) => {
          if (
            b(d, h) > s.retina.linksDistance ||
            b(u, h) > s.retina.linksDistance ||
            b(u, d) > s.retina.linksDistance
          )
            return;
          let i = U(l.color);
          if (!i) {
            const e = t.options.links,
              o =
                void 0 !== e.id
                  ? s.particles.linksColors.get(e.id)
                  : s.particles.linksColor;
            i = ht(t, a, o);
          }
          i &&
            wt(
              e,
              d,
              h,
              u,
              n.backgroundMask.enable,
              n.backgroundMask.composite,
              i,
              c
            );
        });
      }
      drawLinkLine(t, e) {
        const i = this.container,
          o = i.actualOptions,
          s = e.destination;
        let n = e.opacity;
        const a = t.getPosition(),
          r = s.getPosition();
        i.canvas.draw((e) => {
          var l, c;
          let d;
          const h = t.options.twinkle.lines;
          if (h.enable) {
            const t = h.frequency,
              e = U(h.color);
            Math.random() < t && void 0 !== e && ((d = e), (n = h.opacity));
          }
          if (!d) {
            const e = t.options.links,
              o =
                void 0 !== e.id
                  ? i.particles.linksColors.get(e.id)
                  : i.particles.linksColor;
            d = ht(t, s, o);
          }
          if (!d) return;
          const u =
              null !== (l = t.retina.linksWidth) && void 0 !== l
                ? l
                : i.retina.linksWidth,
            p =
              null !== (c = t.retina.linksDistance) && void 0 !== c
                ? c
                : i.retina.linksDistance;
          gt(
            e,
            u,
            a,
            r,
            p,
            i.canvas.size,
            t.options.links.warp,
            o.backgroundMask.enable,
            o.backgroundMask.composite,
            d,
            n,
            t.options.links.shadow
          );
        });
      }
    }
    class _s {
      constructor() {
        this.id = "links";
      }
      getPlugin(t) {
        return new qs(t);
      }
      needsPlugin() {
        return !0;
      }
      loadOptions() {}
    }
    async function Fs(t) {
      await (async function (t) {
        await t.addInteractor("particlesLinks", (t) => new Hs(t));
      })(t),
        await (async function (t) {
          const e = new _s();
          await t.addPlugin(e);
        })(t);
    }
    class Vs {
      getSidesCount(t) {
        var e, i;
        const o = t.shapeData;
        return null !==
          (i =
            null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
              ? e
              : null == o
              ? void 0
              : o.nb_sides) && void 0 !== i
          ? i
          : 5;
      }
      draw(t, e, i) {
        const o = this.getCenter(e, i),
          s = this.getSidesData(e, i),
          n = s.count.numerator * s.count.denominator,
          a = s.count.numerator / s.count.denominator,
          r = (180 * (a - 2)) / a,
          l = Math.PI - (Math.PI * r) / 180;
        if (t) {
          t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
          for (let e = 0; e < n; e++)
            t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(l);
        }
      }
    }
    class Bs extends Vs {
      getSidesData(t, e) {
        var i, o;
        const s = t.shapeData,
          n =
            null !==
              (o =
                null !== (i = null == s ? void 0 : s.sides) && void 0 !== i
                  ? i
                  : null == s
                  ? void 0
                  : s.nb_sides) && void 0 !== o
              ? o
              : 5;
        return {
          count: { denominator: 1, numerator: n },
          length: (2.66 * e) / (n / 3),
        };
      }
      getCenter(t, e) {
        return { x: -e / (this.getSidesCount(t) / 3.5), y: -e / 0.76 };
      }
    }
    class Ws extends Vs {
      getSidesCount() {
        return 3;
      }
      getSidesData(t, e) {
        return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
      }
      getCenter(t, e) {
        return { x: -e, y: e / 1.66 };
      }
    }
    async function js(t) {
      await (async function (t) {
        await t.addShape("polygon", new Bs());
      })(t),
        await (async function (t) {
          await t.addShape("triangle", new Ws());
        })(t);
    }
    class Gs {
      init() {}
      isEnabled(t) {
        var e, i, o, s;
        return (
          !t.destroyed &&
          !t.spawning &&
          t.size.enable &&
          ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 ||
            ((null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) > 0 &&
              (null !== (o = t.size.loops) && void 0 !== o ? o : 0) <
                (null !== (s = t.size.maxLoops) && void 0 !== s ? s : 0)))
        );
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i, o, s, n;
            const a =
                (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) *
                e.factor,
              r = t.size.min,
              l = t.size.max;
            if (
              !(
                t.destroyed ||
                !t.size.enable ||
                ((null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0) > 0 &&
                  (null !== (s = t.size.loops) && void 0 !== s ? s : 0) >
                    (null !== (n = t.size.maxLoops) && void 0 !== n ? n : 0))
              )
            ) {
              switch (t.size.status) {
                case 0:
                  t.size.value >= l
                    ? ((t.size.status = 1),
                      t.size.loops || (t.size.loops = 0),
                      t.size.loops++)
                    : (t.size.value += a);
                  break;
                case 1:
                  t.size.value <= r
                    ? ((t.size.status = 0),
                      t.size.loops || (t.size.loops = 0),
                      t.size.loops++)
                    : (t.size.value -= a);
              }
              !(function (t, e, i, o) {
                switch (t.options.size.animation.destroy) {
                  case "max":
                    e >= o && t.destroy();
                    break;
                  case "min":
                    e <= i && t.destroy();
                }
              })(t, t.size.value, r, l),
                t.destroyed || (t.size.value = c(t.size.value, r, l));
            }
          })(t, e);
      }
    }
    const Us = Math.sqrt(2);
    class $s {
      getSidesCount() {
        return 4;
      }
      draw(t, e, i) {
        t.rect(-i / Us, -i / Us, (2 * i) / Us, (2 * i) / Us);
      }
    }
    class Ns {
      getSidesCount(t) {
        var e, i;
        const o = t.shapeData;
        return null !==
          (i =
            null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
              ? e
              : null == o
              ? void 0
              : o.nb_sides) && void 0 !== i
          ? i
          : 5;
      }
      draw(t, e, i) {
        var o;
        const s = e.shapeData,
          n = this.getSidesCount(e),
          a =
            null !== (o = null == s ? void 0 : s.inset) && void 0 !== o ? o : 2;
        t.moveTo(0, 0 - i);
        for (let e = 0; e < n; e++)
          t.rotate(Math.PI / n),
            t.lineTo(0, 0 - i * a),
            t.rotate(Math.PI / n),
            t.lineTo(0, 0 - i);
      }
    }
    function Js(t, e, i, o, s) {
      var n;
      const a = e;
      if (!a || !a.enable) return;
      const r = h(i.offset),
        l =
          (null !== (n = e.velocity) && void 0 !== n ? n : 0) * t.factor +
          3.6 * r;
      s && 0 !== a.status
        ? ((a.value -= l),
          a.value < 0 && ((a.status = 0), (a.value += a.value)))
        : ((a.value += l),
          s && a.value > o && ((a.status = 1), (a.value -= a.value % o))),
        a.value > o && (a.value %= o);
    }
    class Xs {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        var e, i;
        const o = this.container;
        (t.stroke =
          t.options.stroke instanceof Array
            ? R(t.options.stroke, t.id, t.options.reduceDuplicates)
            : t.options.stroke),
          (t.strokeWidth = t.stroke.width * o.retina.pixelRatio);
        const s =
          null !== (e = $(t.stroke.color)) && void 0 !== e
            ? e
            : t.getFillColor();
        s &&
          (t.strokeColor = vt(
            s,
            null === (i = t.stroke.color) || void 0 === i
              ? void 0
              : i.animation,
            o.retina.reduceFactor
          ));
      }
      isEnabled(t) {
        var e, i, o, s;
        const n = null === (e = t.stroke) || void 0 === e ? void 0 : e.color;
        return (
          !t.destroyed &&
          !t.spawning &&
          !!n &&
          ((void 0 !==
            (null === (i = t.strokeColor) || void 0 === i
              ? void 0
              : i.h.value) &&
            n.animation.h.enable) ||
            (void 0 !==
              (null === (o = t.strokeColor) || void 0 === o
                ? void 0
                : o.s.value) &&
              n.animation.s.enable) ||
            (void 0 !==
              (null === (s = t.strokeColor) || void 0 === s
                ? void 0
                : s.l.value) &&
              n.animation.l.enable))
        );
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i, o, s, n, a, r, l, c, d, h;
            if (!(null === (i = t.stroke) || void 0 === i ? void 0 : i.color))
              return;
            const u = t.stroke.color.animation,
              p =
                null !==
                  (s =
                    null === (o = t.strokeColor) || void 0 === o
                      ? void 0
                      : o.h) && void 0 !== s
                  ? s
                  : null === (n = t.color) || void 0 === n
                  ? void 0
                  : n.h;
            p && Js(e, p, u.h, 360, !1);
            const v =
              null !==
                (r =
                  null === (a = t.strokeColor) || void 0 === a
                    ? void 0
                    : a.s) && void 0 !== r
                ? r
                : null === (l = t.color) || void 0 === l
                ? void 0
                : l.s;
            v && Js(e, v, u.s, 100, !0);
            const f =
              null !==
                (d =
                  null === (c = t.strokeColor) || void 0 === c
                    ? void 0
                    : c.l) && void 0 !== d
                ? d
                : null === (h = t.color) || void 0 === h
                ? void 0
                : h.l;
            f && Js(e, f, u.l, 100, !0);
          })(t, e);
      }
    }
    const Ys = ["text", "character", "char"];
    class Qs {
      getSidesCount() {
        return 12;
      }
      async init(t) {
        const e = t.actualOptions;
        if (Ys.find((t) => E(t, e.particles.shape.type))) {
          const t = Ys.map((t) => e.particles.shape.options[t]).find(
            (t) => !!t
          );
          if (t instanceof Array) {
            const e = [];
            for (const i of t) e.push(S(i));
            await Promise.allSettled(e);
          } else void 0 !== t && (await S(t));
        }
      }
      draw(t, e, i, o) {
        var s, n, a;
        const r = e.shapeData;
        if (void 0 === r) return;
        const l = r.value;
        if (void 0 === l) return;
        const c = e;
        void 0 === c.text &&
          (c.text = l instanceof Array ? R(l, e.randomIndexData) : l);
        const d = c.text,
          h = null !== (s = r.style) && void 0 !== s ? s : "",
          u = null !== (n = r.weight) && void 0 !== n ? n : "400",
          p = 2 * Math.round(i),
          v = null !== (a = r.font) && void 0 !== a ? a : "Verdana",
          f = e.fill,
          y = (d.length * i) / 2;
        t.font = `${h} ${u} ${p}px "${v}"`;
        const m = { x: -y, y: i / 2 };
        (t.globalAlpha = o),
          f ? t.fillText(d, m.x, m.y) : t.strokeText(d, m.x, m.y),
          (t.globalAlpha = 1);
      }
    }
    async function Zs(t) {
      await (async function (t) {
        await t.addInteractor("externalAttract", (t) => new ps(t));
      })(t),
        await (async function (t) {
          await t.addInteractor("externalBounce", (t) => new vs(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("externalBubble", (t) => new ys(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("externalConnect", (t) => new ms(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("externalGrab", (t) => new bs(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("externalRepulse", (t) => new gs(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("particlesAttract", (t) => new As(t));
        })(t),
        await (async function (t) {
          await t.addInteractor("particlesCollisions", (t) => new Ds(t));
        })(t),
        await Fs(t),
        await (async function (t) {
          await t.addShape("circle", new ds());
        })(t),
        await (async function (t) {
          const e = new Ts();
          await t.addShape("image", e), await t.addShape("images", e);
        })(t),
        await (async function (t) {
          await t.addShape("line", new Ss());
        })(t),
        await js(t),
        await (async function (t) {
          const e = new $s();
          await t.addShape("edge", e), await t.addShape("square", e);
        })(t),
        await (async function (t) {
          await t.addShape("star", new Ns());
        })(t),
        await (async function (t) {
          const e = new Qs();
          for (const i of Ys) await t.addShape(i, e);
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("life", (t) => new Es(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("opacity", (t) => new Os(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("size", () => new Gs());
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("angle", (t) => new cs(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("color", (t) => new us(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("strokeColor", (t) => new Xs(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("outModes", (t) => new Rs(t));
        })(t);
    }
    class Ks {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.tilt;
        t.tilt = {
          enable: e.enable,
          value: (u(e.value) * Math.PI) / 180,
          sinDirection: Math.random() >= 0.5 ? 1 : -1,
          cosDirection: Math.random() >= 0.5 ? 1 : -1,
        };
        let i = e.direction;
        if ("random" === i) {
          i =
            Math.floor(2 * Math.random()) > 0
              ? "counter-clockwise"
              : "clockwise";
        }
        switch (i) {
          case "counter-clockwise":
          case "counterClockwise":
            t.tilt.status = 1;
            break;
          case "clockwise":
            t.tilt.status = 0;
        }
        const o = t.options.tilt.animation;
        o.enable &&
          ((t.tilt.velocity =
            (o.speed / 360) * this.container.retina.reduceFactor),
          o.sync || (t.tilt.velocity *= Math.random()));
      }
      isEnabled(t) {
        const e = t.options.tilt.animation;
        return !t.destroyed && !t.spawning && e.enable;
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i;
            if (!t.tilt) return;
            const o = t.options.tilt.animation,
              s =
                (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) *
                e.factor,
              n = 2 * Math.PI;
            if (o.enable)
              switch (t.tilt.status) {
                case 0:
                  (t.tilt.value += s), t.tilt.value > n && (t.tilt.value -= n);
                  break;
                case 1:
                default:
                  (t.tilt.value -= s), t.tilt.value < 0 && (t.tilt.value += n);
              }
          })(t, e);
      }
    }
    class tn {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const e = t.options.wobble;
        e.enable
          ? (t.wobble = {
              angle: Math.random() * Math.PI * 2,
              speed: u(e.speed) / 360,
            })
          : (t.wobble = { angle: 0, speed: 0 }),
          (t.retina.wobbleDistance =
            u(e.distance) * this.container.retina.pixelRatio);
      }
      isEnabled(t) {
        return !t.destroyed && !t.spawning && t.options.wobble.enable;
      }
      update(t, e) {
        this.isEnabled(t) &&
          (function (t, e) {
            var i;
            if (!t.options.wobble.enable || !t.wobble) return;
            const o = t.wobble.speed * e.factor,
              s =
                ((null !== (i = t.retina.wobbleDistance) && void 0 !== i
                  ? i
                  : 0) *
                  e.factor) /
                (1e3 / 60),
              n = 2 * Math.PI;
            (t.wobble.angle += o),
              t.wobble.angle > n && (t.wobble.angle -= n),
              (t.position.x += s * Math.cos(t.wobble.angle)),
              (t.position.y += s * Math.abs(Math.sin(t.wobble.angle)));
          })(t, e);
      }
    }
    const en = new mo();
    en.init();
    const { particlesJS: on, pJSDom: sn } = ((t) => {
      const e = (e, i) => t.load(e, i);
      (e.load = (e, i, o) => {
        t.loadJSON(e, i)
          .then((t) => {
            t && o(t);
          })
          .catch(() => {
            o(void 0);
          });
      }),
        (e.setOnClickHandler = (e) => {
          t.setOnClickHandler(e);
        });
      return { particlesJS: e, pJSDom: t.dom() };
    })(en);
    return (
      (async function (t) {
        await Zs(t),
          await (async function (t) {
            await t.addInteractor("externalTrail", (t) => new Xo(t));
          })(t),
          await (async function (t) {
            await t.addParticleUpdater("roll", () => new ls());
          })(t),
          await (async function (t) {
            await t.addParticleUpdater("tilt", (t) => new Ks(t));
          })(t),
          await (async function (t) {
            await t.addParticleUpdater("wobble", (t) => new tn(t));
          })(t),
          await (async function (t) {
            const e = new Po();
            await t.addPlugin(e);
          })(t),
          await (async function (t) {
            t.emitterShapeManager || (t.emitterShapeManager = new Wo(t)),
              t.addEmitterShape ||
                (t.addEmitterShape = (e, i) => {
                  var o;
                  null === (o = t.emitterShapeManager) ||
                    void 0 === o ||
                    o.addShape(e, i);
                });
            const e = new Jo(t);
            await t.addPlugin(e),
              t.addEmitterShape("circle", new Mo()),
              t.addEmitterShape("square", new Go());
          })(t),
          await (async function (t) {
            z() ||
              "SVGPathSeg" in window ||
              (await r.e(404).then(r.t.bind(r, 167, 23)));
            const e = new rs();
            await t.addPlugin(e);
          })(t);
      })(en),
      (l = r.O(l))
    );
  })();
});
