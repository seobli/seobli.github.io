/**
 * 
 * 
 * 
███████ ███████  ██████  ██████  ██      ██ 
██      ██      ██    ██ ██   ██ ██      ██ 
███████ █████   ██    ██ ██████  ██      ██ 
     ██ ██      ██    ██ ██   ██ ██      ██ 
███████ ███████  ██████  ██████  ███████ ██
        ©2024 | All rights reserved
 * 
 * 
 * 
 **/
'use strict';
(function(c) {
    function F(c, b) {
        function a() {
            this.constructor = c
        }
        Ba(c, b);
        c.prototype = null === b ? Object.create(b) : (a.prototype = b.prototype,
        new a)
    }
    function Ua(c, b) {
        function a(a) {
            return function(b) {
                return e([a, b])
            }
        }
        function e(a) {
            if (f)
                throw new TypeError("Generator is already executing.");
            for (; h; )
                try {
                    if (f = 1,
                    d && (g = a[0] & 2 ? d["return"] : a[0] ? d["throw"] || ((g = d["return"]) && g.call(d),
                    0) : d.next) && !(g = g.call(d, a[1])).done)
                        return g;
                    if (d = 0,
                    g)
                        a = [a[0] & 2, g.value];
                    switch (a[0]) {
                    case 0:
                    case 1:
                        g = a;
                        break;
                    case 4:
                        return h.label++,
                        {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        h.label++;
                        d = a[1];
                        a = [0];
                        continue;
                    case 7:
                        a = h.ops.pop();
                        h.trys.pop();
                        continue;
                    default:
                        if (!(g = h.trys,
                        g = 0 < g.length && g[g.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === a[0] && (!g || a[1] > g[0] && a[1] < g[3]))
                            h.label = a[1];
                        else if (6 === a[0] && h.label < g[1])
                            h.label = g[1],
                            g = a;
                        else if (g && h.label < g[2])
                            h.label = g[2],
                            h.ops.push(a);
                        else {
                            g[2] && h.ops.pop();
                            h.trys.pop();
                            continue
                        }
                    }
                    a = b.call(c, h)
                } catch (n) {
                    a = [6, n],
                    d = 0
                } finally {
                    f = g = 0
                }
            if (a[0] & 5)
                throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var h = {
            label: 0,
            sent: function() {
                if (g[0] & 1)
                    throw g[1];
                return g[1]
            },
            trys: [],
            ops: []
        }, f, d, g, k;
        return k = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        },
        "function" === typeof Symbol && (k[Symbol.iterator] = function() {
            return this
        }
        ),
        k
    }
    function A(c) {
        var b = "function" === typeof Symbol && c[Symbol.iterator]
          , a = 0;
        return b ? b.call(c) : {
            next: function() {
                c && a >= c.length && (c = void 0);
                return {
                    value: c && c[a++],
                    done: !c
                }
            }
        }
    }
    function P(c, b) {
        var a = "function" === typeof Symbol && c[Symbol.iterator];
        if (!a)
            return c;
        c = a.call(c);
        var e, h = [];
        try {
            for (; (void 0 === b || 0 < b--) && !(e = c.next()).done; )
                h.push(e.value)
        } catch (m) {
            var f = {
                error: m
            }
        } finally {
            try {
                e && !e.done && (a = c["return"]) && a.call(c)
            } finally {
                if (f)
                    throw f.error;
            }
        }
        return h
    }
    function H() {
        for (var c = [], b = 0; b < arguments.length; b++)
            c = c.concat(P(arguments[b]));
        return c
    }
    function ia(c, b) {
        for (; 0 > c; )
            c += 360;
        for (; b < c; )
            b += 360;
        return b - c
    }
    function Hb(d, b) {
        var a = c.bboxLib.bestLayout(d, {
            width: b.width,
            height: b.height
        })
          , e = a.rows;
        a = a.cols;
        var h = b.height / e;
        b = b.width / a;
        for (var f = [], m = 0, g = 0; m < e && g < d; m++)
            for (var k = 0; k < a && g < d; k++)
                f.push([k * b, m * h, b, h]),
                g++;
        return {
            boxes: f,
            cols: a,
            rows: e
        }
    }
    function Ib(d, b, a) {
        function e(e) {
            for (var b = e.rows, l = b || e, k = [], n = [], p = 0, q = 0, t = a.height / l, G = l === d.length, C = 0, J = []; 0 < l; ) {
                for (var D = 0, B = [], K = 0; q < d.length; ) {
                    var L = d[q]
                      , A = L.limits || [0, 0]
                      , N = A[0];
                    A = A[1];
                    var I = 1 === e ? a.width / d.length : 0;
                    L = b ? L : g(L, h(t, I), G ? a.width : c.undefVal);
                    I = L.outerBox;
                    if (!b && (I[2] < N || I[3] < A))
                        return null;
                    I[0] = D;
                    I[1] = p;
                    L.row = C;
                    L.column = K;
                    if (.001 < D + I[2] - a.width || b && K === e.cols)
                        break;
                    q++;
                    K++;
                    D += I[2];
                    B.push(L)
                }
                J.push((a.width - D) / (2 * (B.length + 1)));
                B.length && n.push(B.length);
                k = k.concat(B);
                l--;
                C++;
                p += t
            }
            e = f(n);
            e = m(k) / (1 + e);
            return {
                currentBoxes: k,
                usedSpace: e,
                emptyUnitWidths: J,
                rowHeight: t,
                currentColumns: n
            }
        }
        function h(a, e) {
            var b = 0;
            c.jsLib.each(d, function(h) {
                h = g(h, a, e).outerBox[3];
                if (!b || b > h)
                    b = h
            });
            return b
        }
        function f(a) {
            var e = 0
              , b = 0
              , h = 0;
            c.jsLib.map(a, function(a, c) {
                0 < a && (h++,
                e += a,
                b = b > a ? b : a)
            });
            var f = e / h;
            return c.jsLib.sum(c.jsLib.map(a, function(a) {
                return 0 < a ? Math.abs(a - f) : 0
            })) / (h * b)
        }
        function m(a) {
            var e = c.jsLib.map(a, function(a) {
                return a.outerBox[2] * a.outerBox[3]
            })
              , b = c.jsLib.sum(e)
              , h = b / a.length;
            a = c.jsLib.sum(c.jsLib.map(e, function(a) {
                return Math.abs(a - h)
            }));
            return (b - a) / k
        }
        function g(a, e, b) {
            var h = a.outerBox.slice(0);
            a = a.innerSize.slice(0);
            var c = h[2] - a[0]
              , f = h[3] - a[1]
              , d = a[0] / a[1]
              , m = !!b;
            if (m) {
                var g = a[2] ? h[2] : b;
                var l = a[3] ? h[3] : (b - c) / d + f;
                l > e && (m = !1)
            }
            m || (l = a[3] ? h[3] : e,
            g = a[2] ? h[2] : (e - f) * d + c);
            h[2] = g;
            h[3] = l;
            a[0] = g - c;
            a[1] = l - f;
            return {
                outerBox: h,
                innerSize: a
            }
        }
        for (var k = a.width * a.height, l, n = d.length, p, q = 0; q <= n; q++)
            (l = e(q || b)) && l.currentBoxes.length === d.length && (!p || l.usedSpace > p.usedSpace) && (p = l);
        p = p || l;
        return Jb(c.jsLib.map(p.currentBoxes, function(a) {
            return a.outerBox
        }), {
            columnsPerRow: p.currentColumns,
            unitWidths: p.emptyUnitWidths,
            rowHeight: p.rowHeight,
            height: a.height
        })
    }
    function Jb(c, b) {
        var a = []
          , e = b.columnsPerRow
          , h = e.length
          , f = Math.ceil(c.length / h)
          , d = b.unitWidths
          , g = b.rowHeight;
        b = (b.height - g * h) / (2 * (h + 1));
        for (var k = 0, l = 0; l < h; l++)
            for (var n = 0, p = e[l]; n < p; n++) {
                var q = c[k++]
                  , t = P(q, 4)
                  , r = t[0]
                  , v = t[1]
                  , u = t[3];
                a.push([r + (2 * n + (0 == n ? 0 : 1)) * d[l], v + (2 * l + (0 == l ? 0 : 1)) * b, t[2] + (2 + (0 == n ? 1 : 0) + (n == p - 1 ? 1 : 0)) * d[l], g + (2 + (0 == l ? 1 : 0) + (l == h - 1 ? 1 : 0)) * b]);
                q[0] = r + 2 * (n + 1) * d[l];
                q[1] = v + (g - u) / 2 + 2 * (l + 1) * b
            }
        return {
            boxes: c,
            rows: h,
            cols: f,
            spaces: a
        }
    }
    function Ca(d, b, a) {
        d = c.bboxLib.ltrbMargins(d, b, a);
        return [d[1], d[2], d[3], d[0]]
    }
    function Va(c, b) {
        c = c[1] + c[3] - b[1];
        return 0 < c ? {
            cy: b[1] + c / 2,
            overlap: c
        } : {
            cy: 0,
            overlap: 0
        }
    }
    function Kb(d, b) {
        var a = c.bboxLib.bestLayout(d, b, !0), e = a.rows, h = a.cols, f = b.equal, m = b.padding, g = a.maxSize, k = g * m, l, n = [], p = b.width - (f ? k * (h + 1) : 0);
        b = (b.height - (f ? k * (e + 1) : 0)) / e;
        g = Math.min(p / h, b);
        !f && m && (g = 1 >= m ? g - g * m : g - m);
        for (m = 0; m < e; m++) {
            var q = Math.min(d - m * h, h);
            var t = p / q;
            for (l = 0; l < q; l++)
                n.push({
                    cx: (l + 1) * t - t / 2 + (f ? k * (l + 1) : 0),
                    cy: (m + 1) * b - b / 2 + (f ? k * (m + 1) : 0),
                    size: g,
                    maxWidth: t,
                    maxHeight: g,
                    innerSize: g / 3 + "%"
                })
        }
        return {
            layout: a,
            boxes: n
        }
    }
    function Lb(d, b) {
        var a = new c.pathLib.Path({
            hasLines: d.hasLines,
            hasCurves: d.hasCurves,
            isClosed: d.isClosed,
            hasErrors: d.hasErrors
        })
          , e = []
          , h = 0;
        for (d = d.shapes; h < d.length; h++) {
            for (var f = [], m = {
                items: f
            }, g = 0, k = d[h].items; g < k.length; g++) {
                for (var l = k[g], n = [l[0]], p = 1; p < l.length; p++)
                    n.push(b(l[p]));
                f.push(n)
            }
            e.push(m)
        }
        a.shapes = e;
        return a
    }
    function Wa(d, b, a) {
        var e = d.length()
          , h = 1 / e;
        b = c.jsLib.def(b) ? b * h : 0;
        a = c.jsLib.def(a) ? (e - a) * h : 0;
        return c.pathLib.subPath(d, b, a)
    }
    function sa(d, b) {
        void 0 === b && (b = {});
        var a = d.currentOptions, e, h = c.jsLib.getValType(a.angle), f = function(a) {
            var b;
            "string" === c.jsLib.getValType(b = e[a]) && -1 < b.indexOf("%") && (e[a] = d.replaceTokens(e[a]))
        };
        "object" === h && (e = c.jsLib.merge({}, a.angle)) ? (c.jsLib.defaults(e, b),
        c.jsLib.each(["start", "end", "orientation", "sweep"], f),
        e = Da(e)) : e = "undefined" !== h ? Da(a.angle) : Da(b);
        return e
    }
    function Da(d, b) {
        var a;
        if (!b)
            return Xa(d);
        (a = b ? c.jsLib.evalPath(d, b) : d) && c.jsLib.setPathVal(d, b, Xa(a))
    }
    function Xa(d) {
        var b, a;
        switch (c.jsLib.getValType(d)) {
        case "number":
            var e = !0;
            var h = d;
            break;
        case "array":
            if (2 <= d.length) {
                var f = e = !0;
                h = d[0];
                var m = d[1]
            } else
                1 === d.length && (h = d[0],
                e = !0);
            break;
        case "object":
            if (d) {
                e = typeof (h = d.start) !== c.undef;
                f = typeof (m = d.end) !== c.undef;
                var g = typeof (b = d.orientation) !== c.undef;
                var k = typeof (a = c.normalizationUtils.percOrNum(d.sweep, 360)) !== c.undef
            }
        }
        d = h;
        if (e && f) {
            var l = d;
            var n = m
        } else
            e && k ? (l = d,
            n = d + a) : g && k ? (l = b - a / 2,
            n = l + a) : g && e ? (l = d,
            n = 2 * (b - d) + d) : g && f ? (n = m,
            l = m - 2 * (m - b)) : k ? (l = -(a / 2),
            n = a / 2) : g ? (l = b - 180,
            n = l + 360) : e ? (l = d,
            n = l + 360) : f && (n = m,
            l = n - 360);
        return {
            start: l,
            end: n
        }
    }
    function Ea(c) {
        if (!c.keys) {
            var b = [];
            c.forEach(function(a, e) {
                b.push(e)
            });
            return b
        }
        return Array.from(c.keys())
    }
    function Mb(c) {
        if (!c.values) {
            var b = [];
            c.forEach(function(a) {
                b.push(a)
            });
            return b
        }
        return Array.from(c.values())
    }
    function Nb(d) {
        var b = []
          , a = {}
          , e = {};
        d.points().each(function(h) {
            var f = h.currentOptions.id
              , d = h.currentOptions.parent;
            d = c.jsLib.isString(d) ? d.split(",") : [d];
            var g = !c.jsLib.isUndefined(d[0]) && "" !== d[0]
              , k = !c.jsLib.find(d, function(a) {
                return !e[a]
            });
            !g || k ? (e[f] = !0,
            b.push(h),
            (f = a[f]) && Array.prototype.push.apply(b, f)) : c.jsLib.each(d, function(e) {
                a[e] = a[e] || [];
                a[e].push(h)
            })
        });
        return b
    }
    function Ya(d, b, a, e) {
        b = a.rectPos;
        var h = d.series;
        e = h.ctManager;
        e.isType("gauge", h);
        e = "roundcaps" === e.settingVal("columnType", h);
        var f = d.getShapeOptions(h.renderRect);
        d = h.pane;
        var m = c.bboxLib.fromRect(h.renderRect)
          , g = d.angleArc();
        h = c.bboxLib.center(m);
        var k = m[3] / 2
          , l = d.getRadarType()
          , n = "caPaneRadar" === d.kind;
        e = n || !e ? {} : {
            caps: {
                end: "round",
                start: "round"
            }
        };
        f = a.pathOptions = c.jsLib.merge(Za(g, b, m, f, e.caps), {
            rectPos: b,
            arcCfg: g
        });
        if ("spider" === l)
            a = $a(d, b);
        else if (n)
            a = c.shapeLib.arc(h[0], h[1], k, k, a.pathOptions = c.jsLib.merge(f, e));
        else
            return {
                arcShape: a.pathOptions
            };
        return c.shapeLib.flattenD(a)
    }
    function $a(d, b) {
        b = c.bboxLib.boxPoints(c.bboxLib.fromRect(b), "tl,tm,tr,br,bm,bl");
        b = c.jsLib.map(b, function(a) {
            return d.projection.webVal2linxy(a[0], a[1])
        });
        b = c.shapeLib.pointsToPath(b);
        return c.shapeLib.flattenD(b) + "Z"
    }
    function Za(d, b, a, e, h) {
        void 0 === h && (h = {});
        a || (a = b.targetBox);
        var f = c.bboxLib.center(a)
          , m = a[3] / 2;
        a = a[3] / 2;
        e = c.jsLib.pick(c.jsLib.evalPath(e, "innerSize"), 0) * m;
        m = function(a) {
            return c.trigLib.toRadians(c.mathLib.mapValue(d.start, d.end, 0, 1, a))
        }
        ;
        m = [m(b.x), m(b.x + b.width)];
        b.ccw && m.reverse();
        var g = c.mathLib.mapValue(e, a, 1, 0, b.y);
        b = c.mathLib.mapValue(e, a, 1, 0, b.y + b.height);
        g === b && (g += .001);
        return {
            start: m[0],
            end: m[1],
            open: !1,
            r: g,
            innerR: b,
            cxy: f,
            caps: h
        }
    }
    function Ob(d, b, a, e, h, f, m) {
        var g = d.series;
        a = g.info.type.roundCaps;
        d = c.jsLib.clone(b.pathOptions);
        a && (a = c.trigLib.arcCapDegOffset(d.r, d.innerR),
        d.start -= a,
        d.end += a);
        f = Pb(f, d, h, m);
        var k = e[2] / 2;
        f = c.jsLib.filter(f, function(a) {
            a = c.trigLib.pointDistance(b.pathOptions.cxy, a.cxy) + h[1] / 2;
            return !g.isVisible || a <= k
        });
        return c.jsLib.map(f, function(a) {
            var e = c.bboxLib.fromCenter(a.cxy, a.size);
            e.rotate = a.angle;
            e.isInside = c.isAlignInside(a.alignment);
            return e
        })
    }
    function ta(d, b, a) {
        var e = b.metrics()
          , h = e.textSize
          , f = e.tickLength
          , m = d.chartArea
          , g = d.sideIndex()
          , k = 0 === g || 1 === g
          , l = m.angleArc()
          , n = l.end - l.start
          , p = "caPaneRadar" === m.kind && "spider" === m.getRadarType()
          , q = "outside" === c.jsLib.pick(b.options("placement"), "outside")
          , t = b.options("padding")
          , r = q ? Qb : Rb;
        g = c.bboxLib.fromRect(d.viewState.caRect);
        var v = c.bboxLib.center(g);
        g = g[2] / 2;
        var u = e.angle
          , w = function(a, e) {
            return c.trigLib.gpdp(v, a, e)
        }
          , x = w(e.angle, g)
          , y = function() {
            var a = c.trigLib.gpdp_text(x, G + 90, t, f, c.jsLib.map(h, function(a) {
                return a + t
            }), r);
            C = [a[0], a[1], h[0], h[1]]
        }
          , z = function(a) {
            a %= 180;
            -90 > a ? a += 180 : 90 < a && (a -= 180);
            return a
        };
        if (d.isHoriz) {
            d = [x, w(e.angle, g + (q ? f : -f))];
            x = d[1];
            var G = q ? u : u + 180;
            y()
        } else if (u = void 0,
        y = d.getValToLin()(b.value()),
        360 > n) {
            m = k ? l.end : l.start;
            u = m - (k ? -90 : 90);
            G = q ? u : u + 180;
            x = w(m, d.getCaLen(b.value()));
            d = [x, c.trigLib.gpdp(x, G, f)];
            x = d[1];
            b._cxyRotate = z(u);
            var C = c.bboxLib.fromCenter(c.trigLib.gpdp(x, G, h[0] / 2 + t), h)
        } else
            k = d.interpolationAxis,
            u = void 0,
            u = k.tickPositions ? c.mathLib.avg(Sb(k.tickPositions.all).slice(0, 2)) : k.min,
            q = k.getValToLin()(u),
            u = k.valToAngle(u),
            b._cxyRotate = z(u + 90),
            p ? (w = m.projection.webVal2linxy(q, y),
            d = [],
            C = c.bboxLib.fromCenter(w, h)) : (m = d.getCaLen(b.value()),
            d = [],
            C = c.bboxLib.fromCenter(w(u, m), h));
        m = d.slice(0);
        w = C.slice(0);
        m.push.apply(m, H(c.bboxLib.boxPoints(w, "tl,tr,br,bl")));
        w = b._bbox = c.bboxLib.bboxFromPoints(m);
        m = c.jsLib.map(m, function(a) {
            return c.trigLib.pDist(v, a)
        });
        g = Math.max.apply(Math, H(m)) - g;
        if (a)
            return b._positionData.tickPoints = d,
            b._positionData;
        a = b._bboxClipped = C.slice(0);
        a[2] = e.textSize[0];
        a[3] = e.textSize[1];
        return b._positionData = {
            tickPoints: d,
            textBBox: C,
            rLength: g,
            bbox: w
        }
    }
    function Sb(c) {
        var b, a = [];
        try {
            for (var e = A(c), h = e.next(); !h.done; h = e.next()) {
                var f = h.value;
                !f.pop && a.push(f)
            }
        } catch (g) {
            var d = {
                error: g
            }
        } finally {
            try {
                h && !h.done && (b = e.return) && b.call(e)
            } finally {
                if (d)
                    throw d.error;
            }
        }
        return a
    }
    function ab(d, b) {
        if ("needle" === d) {
            var a = b.arc;
            d = a.cxy;
            a = a.angle;
            var e = b.xyz[2]
              , h = b.xyzs[2];
            b = a - 90;
            var f = a + 90
              , m = 9
              , g = c.trigLib.gpdp(d, a, e);
            0 !== h && (d = c.trigLib.gpdp(d, a, h),
            m = c.mathLib.mapValue(m, 3, 0, e, h));
            d = [c.trigLib.gpdp(d, b, m / 2), c.trigLib.gpdp(g, b, 1.5), c.trigLib.gpdp(g, f, 1.5), c.trigLib.gpdp(d, f, m / 2)];
            d = c.shapeLib.flattenD(["M", d[0], "L", d[1], c.shapeLib.arcSegment(g[0], g[1], 1.5, c.trigLib.toRadians(b), c.trigLib.toRadians(f)), "L", d[3]]) + "Z"
        } else
            d = null;
        return d
    }
    function bb(d, b) {
        d = c.jsLib.cloneDeep(d);
        c.jsLib.merge(b.defaultMinorTick, d.defaultTick);
        c.jsLib.evalPath(d, "defaultTick.label") && c.jsLib.def(c.jsLib.evalPath(b, "defaultTick.label.visible")) && delete b.defaultTick.label.visible;
        c.jsLib.evalPath(d, "defaultMinorTick.label") && c.jsLib.def(c.jsLib.evalPath(b, "defaultMinorTick.label.visible")) && delete b.defaultMinorTick.label.visible;
        c.jsLib.defaultsDeep(d, b);
        return d
    }
    function Fa(d, b, a) {
        void 0 === a && (a = {});
        var e = c.trigLib.getPolarPoint
          , h = c.trigLib.toRadians
          , f = c.trigLib.toDegrees
          , m = c.trigLib.lineDistance
          , g = c.trigLib.pointDistance
          , k = c.trigLib.angleOfPoints
          , l = c.jsLib.pick(a.widthFactor, 1)
          , n = {
            x: 0,
            y: 0
        }
          , p = d.r
          , q = d.innerR
          , t = p - q
          , r = f(d.start)
          , v = f(d.end - d.start);
        r = (r + 360) % 360;
        f = r + v / 2;
        a.gradientStopAnchor && (b = r + v * a.gradientStopAnchor - f);
        v = c.jsLib.def(a.pathObj);
        a = (v ? a.pathObj : c.pathLib.fromString(c.shapeLib.arc(0, 0, 2 * p, 2 * p, c.jsLib.defaults({
            cxy: [0, 0]
        }, d)))).bbox();
        v && (a = c.bboxLib.translate(a, [-d.cxy[0], -d.cxy[1]]));
        q = e(0, 0, h(f), q + t / 2);
        p = e(0, 0, h(r), p);
        r = a[2];
        t = a[3];
        b = f + 90 + (b || 0);
        var u = c.trigLib.getPolarPoint;
        f = c.trigLib.lineIntersect;
        var w = c.trigLib.toRadians, x;
        v = [0, 0, r, t];
        var y = c.bboxLib.center(v)
          , z = v[0] + v[2]
          , G = v[1] + v[3];
        b = (b + 360) % 360;
        (x = {
            0: [0, 0, 1, 0],
            90: [0, 0, 0, 1],
            180: [1, 0, 0, 0],
            270: [0, 1, 0, 0],
            360: [0, 0, 1, 0]
        }[b]) || (x = {
            x: y[0],
            y: y[1]
        },
        u = u(y[0], y[1], w(b - 90), 10),
        t >= r ? (w = {
            x: z,
            y: v[1]
        },
        y = {
            x: z,
            y: G
        },
        w = f(x, u, w, y),
        w.y < v[1] || w.y > G ? (w = {
            x: v[0],
            y: v[1]
        },
        y = {
            x: z,
            y: v[1]
        },
        w = f(x, u, w, y),
        r = w.x / z,
        x = 90 > b || 270 < b ? [0, 1 - r, 1, r, 0] : [1, r, 0, 1 - r]) : (r = w.y / t,
        x = 180 < b ? [1 - r, 1, r, 0] : [r, 0, 1 - r, 1])) : (w = {
            x: v[0],
            y: v[1]
        },
        y = {
            x: z,
            y: v[1]
        },
        w = f(x, u, w, y),
        w.x < v[0] || w.x > z ? (w = {
            x: z,
            y: v[1]
        },
        y = {
            x: z,
            y: G
        },
        w = f(x, u, w, y),
        r = w.y / v[3],
        x = 180 < b && 315 > b ? [1 - r, 1, r, 0] : [r, 0, 1 - r, 1]) : (r = w.x / r,
        x = [0, 1 - r, 1, r],
        90 < b && (x = [1, r, 0, 1 - r]),
        270 < b && (x = [0, 1 - r, 1, r]))));
        r = x;
        t = {
            x: c.mathLib.mapValue(0, 1, a[0], a[0] + a[2], q.x),
            y: c.mathLib.mapValue(0, 1, a[1], a[1] + a[3], q.y)
        };
        t.x -= .5;
        t.y -= .5;
        r[0] += t.x;
        r[2] += t.x;
        r[1] += t.y;
        r[3] += t.y;
        a = m(n, q, {
            x: a[0] + r[0] * a[2],
            y: a[1] + r[1] * a[3]
        });
        m = m(n, q, p) * l / a;
        d.gradientDistance = 2 * a;
        d = k({
            x: r[0],
            y: r[1]
        }, {
            x: r[2],
            y: r[3]
        });
        k = g({
            x: r[0],
            y: r[1]
        }, {
            x: r[2],
            y: r[3]
        });
        g = e(r[0], r[1], h(d), k / 2);
        m *= k / 2;
        k = e(g.x, g.y, h(d - 180), m);
        e = e(g.x, g.y, h(d), m);
        return r = [k.x, k.y, e.x, e.y]
    }
    function Tb(c, b) {
        c.series.info.type.isRadarColumn && (b.pathObj = Ya(c, null, b))
    }
    function Ub(d, b, a) {
        a = c.jsLib.evalPath(a, "outline.width") || 1;
        var e = c.jsLib.map(b, function(a) {
            return {
                id: a.id,
                percent: a.tokenValue("%percentOfTotal")
            }
        });
        d = c.bboxLib.fromRect(d);
        for (var h = Ga(e, d, function(a) {
            return a.percent
        }, function(a) {
            return a
        }, function(a) {
            return a.id
        }), f = 0; f < b.length; f++) {
            var m = b[f]
              , g = m.currentOptions;
            g = c.jsLib.evalPath(g, "shape.outline") || g.line || {};
            g = c.jsLib.def(g.width) ? g.width / 2 : 1;
            var k = h[e[f].id];
            .001 > Math.abs(k[0] - d[0]) && (k[0] += g);
            .001 > Math.abs(k[1] - d[1]) && (k[1] += g);
            .001 > Math.abs(k[2] - (d[0] + d[2])) && (k[2] -= g + a);
            .001 > Math.abs(k[3] - (d[1] + d[3])) && (k[3] -= g + a);
            k = c.bboxLib.fromLTRB(k);
            m.renderRect = {
                x: k[0],
                y: k[1],
                width: k[2],
                height: k[3]
            }
        }
    }
    function Vb(d, b) {
        var a = d.series
          , e = a.rootVisuals
          , h = a.info.style
          , f = {};
        if (d.coordinates.line) {
            var m = d.paths.lines ? d.paths.lines.join(" ").replace(/,/g, " ") : c.shapeLib.multiLineToPath(d.coordinates.line).join(" ");
            f.pathAnimation = {
                type: "line",
                shift: c.jsLib.evalPath(b, "shift")
            };
            var g = c.jsLib.copy(h.attr.line);
            (d = a.options("shape.outline")) && c.jsLib.extend(g, c.stylingLib.lineToAttr(d))
        }
        return {
            d: m,
            state: g,
            shapeName: "line",
            target: e.line,
            zIndex: a.zIndex + c.consts.zIndexReference.series + 5,
            visGetter: function() {
                return a.visuals.line
            },
            visSetter: function(e) {
                return a.visuals.line = e
            },
            animation: f,
            events: {}
        }
    }
    function Ga(d, b, a, e, h, f) {
        d = c.jsLib.map(d, function(b) {
            return [b, a(b, e)]
        });
        d = c.jsLib.sortBy(d, function(a) {
            return a[1]
        }).reverse();
        b = P(b, 4);
        var m = b[0]
          , g = b[1]
          , k = b[2]
          , l = b[3];
        b = [];
        var n = c.jsLib.extendCopy(ua.squarified, f);
        m = Ha(Wb(c.jsLib.map(d, function(a) {
            return a[1]
        }), k * l), [], new Xb(m,g,k,l), [], n);
        cb(m, b);
        m = {};
        for (g = 0; g < d.length; g++)
            k = e(d[g][0]),
            k.length ? c.jsLib.extend(m, Ga(k, c.bboxLib.fromLTRB(b[g]), a, e, h, f)) : m[h(d[g][0])] = b[g];
        return m
    }
    function Yb(d, b, a, e) {
        var h = b.size
          , f = b.neck
          , m = b.inverted
          , g = c.bboxLib.fromCenter(b.cxy, [.9 * h[1], h[1]]);
        h = c.jsLib.pick(b.innerPadding, 4) / 2;
        var k = g[1]
          , l = g[1] + g[3];
        b = l - g[3] * f;
        var n = g[0]
          , p = g[0] + g[2]
          , q = (n + p) / 2
          , t = f ? g[2] * (1 - Zb) : 0;
        m && (k = l,
        l = g[1],
        b = l + g[3] * f);
        var r = [n, k]
          , v = [p, k]
          , u = [q - t / 2, b]
          , w = [q + t / 2, b]
          , x = [u[0], l]
          , y = [w[0], l]
          , z = function(a, e) {
            var b = [[r[0], e], [v[0], e]];
            b = c.trigLib.lineIntersect(a[0], a[1], b[0], b[1]);
            if (b.onLine1)
                return [b.x, b.y];
            if (.001 > Math.abs(a[0][1] - e))
                return a[0];
            if (.001 > Math.abs(a[1][1] - e))
                return a[1]
        };
        f = function(a, e) {
            e = "left" === e ? [[r, u], [u, x]] : [[v, w], [w, y]];
            return z(e[0], a) || z(e[1], a)
        }
        ;
        m = g[1] + d[0] * g[3];
        d = g[1] + d[1] * g[3];
        g = (m + d) / 2;
        c.mathLib.diff(m, d) < 2 * h && (h = c.mathLib.diff(m, d) / 3);
        h = m > d ? -h : h;
        a || (m += h);
        e || (d -= h);
        a = Math.max(m, d);
        a = Math.min(m, d) < b && a > b;
        e = [];
        e.push(f(m, "left"), f(m, "right"), f(d, "right"), f(d, "left"));
        b = {
            left: f(g, "left"),
            right: f(g, "right")
        };
        a && (e.splice(2, 0, w),
        e.push(u));
        return {
            points: e,
            path: c.shapeLib.flattenD(c.shapeLib.pointsToPath(e)) + "Z",
            bounds: c.bboxLib.bboxFromPoints(e),
            labelAnchors: b
        }
    }
    function $b(d, b, a, e) {
        if (e.navigator && e.navigator.enabled && e.chartArea) {
            var h = b.currentOptions;
            d = h.chartArea;
            a = c.jsLib.isArray(d);
            var f = e.navigator
              , m = a ? d.length - 1 : 0;
            if (!(0 > m)) {
                h.toolbar.items["export"].visible = !1;
                h.toolbar.items.resetZoom.exclude = !0;
                h.animation = {
                    duration: 0
                };
                h.events = h.events || [];
                h.events.load = function() {
                    b.navigator = b.navigator || new ac(b,f);
                    var a = b.chartAreas(-1).axes(0);
                    b.navigator.setRange({
                        min: a.range.min,
                        max: a.range.max
                    })
                }
                ;
                e = !1 !== c.jsLib.evalPath(f, "previewArea.visible");
                var g = !1 !== c.jsLib.evalPath(f, "toolbar.visible");
                e && (h.extraOverflows = [0, 10, 0, 10]);
                var k = c.jsLib.copy(a ? d[0].series[0] : h.series[0]);
                k.type = c.jsLib.evalPath(f, "scrollbarSeries.type") || "area";
                k.color = "#a0a0a0";
                k.line = {
                    width: 1
                };
                k.states = {
                    hover: {
                        line: {
                            width: 1
                        }
                    }
                };
                k.isPreview = !0;
                k.defaultPoint = {
                    marker_type: "none",
                    focusGlow_width: 0
                };
                var l = k.points[0];
                c.jsLib.isUndefined(l.y) && c.jsLib.def(l.close) && c.jsLib.each(k.points, function(a) {
                    return a.y = a.close
                });
                a ? c.jsLib.each(d, function(a) {
                    a.xAxis = c.jsLib.merge(c.jsLib.copy(h.xAxis), a.xAxis);
                    var e = h.yAxis || {}
                      , b = a.yAxis || {};
                    e = c.jsLib.isArray(e) ? e : [e];
                    b = c.jsLib.isArray(b) ? b : [b];
                    for (var f = [], d = b.length, m = 0, g = Math.max(e.length, b.length); m < g; m++) {
                        var k = e[m] || {};
                        d && delete k.id;
                        f.push(c.jsLib.merge(c.jsLib.cloneDeep(k), b[m] || b[0]))
                    }
                    a.yAxis = f
                }) : (d = h.chartArea = [{
                    series: h.series.splice(0),
                    yAxis: h.yAxis,
                    xAxis: h.xAxis
                }],
                h.series = []);
                c.jsLib.omit(h, "xAxis", "yAxis");
                g && (d[0].extraOverflows = [36, 0, 0, 0]);
                e && (a = {
                    height: (c.jsLib.evalPath(f, "previewArea.height") || 55) + 16,
                    legend: {
                        visible: !1
                    },
                    series: [k],
                    defaultTooltip: {
                        enabled: !1
                    },
                    yAxis: {
                        visible: !1
                    },
                    xAxis: {
                        defaultTick: {
                            label_color: "#fff",
                            line_color: "#fff"
                        },
                        defaultMinorTick: {
                            label_color: "#fff",
                            line_color: "#fff"
                        },
                        events: {
                            setRange: function(a, e) {
                                (e = b.navigator) && e.setRange(a)
                            }
                        }
                    }
                },
                c.jsLib.extendScoped(a.xAxis, h.xAxis, {
                    scale: !0,
                    formatString: !0,
                    cultureName: !0
                }),
                !1 !== f.xScrollbarEnabled && (a.extraOverflows = [0, 0, 16, 0]),
                d.push(a));
                c.jsLib.each(d, function(a, e) {
                    a.xAxis = c.jsLib.merge(a.xAxis || {}, {
                        defaultTick: {
                            enabled: e >= m,
                            placement: e > m ? "inside" : "outside"
                        },
                        overflow: "hidden",
                        scale: {
                            zoomLimit: 0
                        }
                    });
                    a.yAxis ? (a = c.jsLib.isArray(a.yAxis) ? a.yAxis : [a.yAxis],
                    c.jsLib.each(a, function(a) {
                        a.defaultTick = c.jsLib.merge(a.defaultTick || {}, {
                            placement: "inside"
                        })
                    })) : a.yAxis = {
                        defaultTick: {
                            placement: "inside"
                        }
                    };
                    return !0
                })
            }
        }
    }
    function Z(d, b, a) {
        void 0 === b && (b = "sum");
        if ((!d || !d.length) && c.jsLib.def(a))
            return a;
        switch (b) {
        case "sum":
            return c.mathLib.arraySum(d);
        case "average":
            return b = c.mathLib.arraySum(d),
            c.jsLib.isNull(b) ? NaN : b / d.length;
        case "min":
            return Math.min.apply(Math, H(d));
        case "max":
            return Math.max.apply(Math, H(d))
        }
    }
    function bc(d, b) {
        d.highlights = function(a, e, b) {
            e.isRendered && e.calIndexer && da(e, !1)
        }
        ;
        d.data = function(a, e, b) {
            e.isRendered && e.calIndexer && (e.data = c.undefVal,
            e.userOptions.data = a,
            b.updateCalendar = !0,
            b.needRedraw = !0)
        }
        ;
        d.defaultCultureName = function(a, e, b) {
            if (e.isRendered) {
                e.axes().each(function(a) {
                    return a.invalidate().options({}, !1)
                });
                e.chartAreaSet.invalidate();
                if (e = e.calIndexer)
                    b.updateCalendar = !0,
                    e && e.setOptions(a);
                b.needRedraw = !0
            }
        }
        ;
        d.calendar = function(a, e, b) {
            e.isRendered && (e = e.calIndexer) && (b.updateCalendar = !0,
            e.options(a),
            b.needRedraw = !0)
        }
        ;
        b.calendar = function(a, e, b) {
            a.ctManager.isType("calendar") && !a.isRendered && (cc(a, c.jsLib.expandOptionsProperties(a.currentOptions, "template,data,series,palette,targetElement")),
            e = c.jsLib.cloneDeep(e),
            e.series = a.currentOptions.series,
            e.palette = a.currentOptions.palette,
            delete a.currentOptions.series);
            return e
        }
    }
    function cc(d, b) {
        var a = d.calIndexer = new dc(d,b)
          , e = function(a, e) {
            var b = function(a, e) {
                var b = a.legendEntry;
                a = b && b.trackerElement;
                b && a && (b = b.options("cursor") || e,
                a.attr({
                    cursor: b,
                    visibility: "default" === e ? "hidden" : "visible"
                }))
            };
            a.chart.series().each(function(a) {
                a.options({
                    visible: !1
                }, !1);
                b(a, "pointer")
            });
            a.options({
                visible: !0
            }, e);
            b(a, "default");
            return !1
        };
        (function(a) {
            a.highlights = c.collectionPropFactory(c.UpdatablesCollection, function() {
                return a._highlights
            }, function(e) {
                c.jsLib.each(e, c.normalizationUtils.idFyObj);
                c.jsLib.setPathVal(a.userOptions, "highlights", e);
                da(a)
            }, {
                push: function(e, b) {
                    c.normalizationUtils.idFyObj(e);
                    var h = a.userOptions
                      , f = c.jsLib.evalPath(h, "highlights");
                    c.jsLib.setPathVal(h, "highlights", f || []);
                    h.highlights.push(e);
                    da(a, b)
                },
                splice: function(e, b, h, d) {
                    var f;
                    c.jsLib.each(h, c.normalizationUtils.idFyObj);
                    var m = a.userOptions
                      , g = c.jsLib.evalPath(m, "highlights");
                    c.jsLib.setPathVal(m, "highlights", g || []);
                    (f = m.highlights).splice.apply(f, H([e, b], h));
                    da(a, d)
                }
            })
        }
        )(d);
        d.zoom = function(a, b) {
            var h;
            a && "initial" !== a || (a = d.calIndexer.options("initial"));
            (h = (a = a ? T(a) : c.undefVal) ? d.series().find(function(e) {
                return e.currentOptions.attributes.date <= a && e.currentOptions.attributes.endDate >= a
            }) : d.series(0)) && e(h, b)
        }
        ;
        a.updateChart(b)
    }
    function ec(c) {
        return function(b) {
            var a = ['<b>%name</b> <span style="align:right; verticalAlign:top;">%zValue</span>'];
            b = 1 < b.userOptions.attributes.groupCount ? '<chart type=sparkline style="align:center;" width=120 height=40 data=%subvalueList>' : void 0;
            b && a.push(b);
            return a.join("<br/><hr>")
        }
    }
    function fc(c) {
        c = c.view;
        var b = "";
        "year" !== c && ("month" === c ? b = "%name" : "dayhours" === c && (b = "%name"));
        if (b)
            return '<span style="align:right; verticalAlign:top">' + b + "</span>"
    }
    function gc(d) {
        var b, a, e;
        d = d.series;
        var h = []
          , f = function(a) {
            var e = c.jsLib.getValType(a);
            "array" === e ? c.jsLib.each(a, f) : "object" === e ? a.date && (a.date.range ? f(a.date.range) : f(a.date)) : h.push(O(a))
        };
        try {
            for (var m = A(d), g = m.next(); !g.done; g = m.next()) {
                var k = g.value;
                try {
                    for (var l = (a = void 0,
                    A(k.points)), n = l.next(); !n.done; n = l.next()) {
                        var p = n.value;
                        p.date && f(p.date)
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (e = l.return) && e.call(l)
                    } finally {
                        if (a)
                            throw a.error;
                    }
                }
            }
        } catch (t) {
            var q = {
                error: t
            }
        } finally {
            try {
                g && !g.done && (b = m.return) && b.call(m)
            } finally {
                if (q)
                    throw q.error;
            }
        }
        if (h)
            return [Math.min.apply(Math, H(h)), Math.max.apply(Math, H(h))]
    }
    function da(d, b) {
        c.jsLib.mergeCollections(d.userOptions.highlights || {}, d._highlights, function(a) {
            return new hc(d,a)
        }, function(a, e) {
            return e.options(a, b)
        });
        !1 !== b && d.series().each(function(a) {
            return a.isVisible && a.visualizer.renderPatternHighlights && a.visualizer.renderPatternHighlights()
        })
    }
    function Ia(d) {
        return c.jsLib.isArray(d) ? c.jsLib.join(d, " ") : d
    }
    function ic(d, b, a) {
        void 0 === b && (b = ba);
        void 0 === a && (a = .4);
        var e = d.end - d.start
          , h = 0 > e
          , f = h ? -1 : 1
          , m = f * b
          , g = h ? Math.max : Math.min
          , k = c.jsLib.def(d.pos) ? d.pos : [0, 1]
          , l = d.start
          , n = d.end
          , p = d.r
          , q = d.innerR
          , t = d.cxy
          , r = d.caps
          , v = [];
        a = f * a / Math.max(d.innerR, 1);
        var u = function(a) {
            return c.mathLib.mapValue(k[0], k[1], l, n, a)
        }
          , w = function(a) {
            if (h) {
                var e = a.start;
                a.start = a.end;
                a.end = e;
                e = a.caps.start;
                a.caps.start = a.caps.end;
                a.caps.end = e;
                a.inverted = !0
            }
            v.push(a)
        };
        if (f * e > b) {
            var x = l;
            for (d = l + m; 0 >= f * (d - n); ) {
                b = x === l;
                e = d === n;
                x = b ? x : x - a;
                var y = e ? d : d + a;
                w({
                    start: x,
                    end: y,
                    r: p,
                    innerR: q,
                    cxy: t,
                    pos: [u(x), u(y)],
                    skipEndFix: !0,
                    caps: {
                        start: b ? r.start : "gap",
                        end: e ? r.end : "gap"
                    }
                });
                x = d;
                d = g(x + m, n);
                .2 > c.mathLib.diff(d, n) && (d = n);
                if (e)
                    break
            }
        } else
            d.pos = [u(l), u(n)],
            d.skipEndFix = !0,
            w(d);
        return v
    }
    function db(d) {
        var b = d.caps
          , a = 0;
        d = 2 * c.trigLib.arcCapDegOffset(d.r, d.innerR);
        "round" === b.start && a++;
        "round" === b.end && a++;
        1 === a && (d /= 2);
        0 === a && (d = 0);
        return d
    }
    function jc(d) {
        var b = function(a) {
            var e = !1;
            kc(a, function(a) {
                if (a[1] < a[0])
                    return e = !0,
                    !1
            });
            return e
        };
        return !(b(d) || b(c.rangeLib.invert(d, [0, 1])))
    }
    function kc(c, b) {
        for (var a = 0, e = c.length; a < e && !1 !== b(c[a], a, a === c.length - 1, a ? c[a - 1] : void 0); a++)
            ;
    }
    function lc() {
        c.shapes.gaugeOutline = function(d, b, a, e, h) {
            var f = h.start;
            e = h.r || a || e;
            a = .2 * e;
            var m = h.end - .001
              , g = c.mathLib.math.cos(f)
              , k = c.mathLib.math.sin(f)
              , l = c.mathLib.math.cos(m)
              , n = c.mathLib.math.sin(m)
              , p = h.end - f < c.mathLib.math.PI ? 0 : 1
              , q = c.trigLib.toDegrees(f)
              , t = c.trigLib.toDegrees(m)
              , r = ia(q, t)
              , v = 180 < r ? ia(t, q + r / 2 + 180) : 90;
            h = [d + e * g, b + e * k];
            var u = [d + e * l, b + e * n];
            u = c.trigLib.getPolarPoint(u[0], u[1], c.trigLib.toRadians(c.trigLib.toDegrees(m) + 180), a);
            var w = c.trigLib.getPolarPoint(h[0], h[1], c.trigLib.toRadians(c.trigLib.toDegrees(f) + 180), a);
            f = c.trigLib.getPolarPoint(u.x, u.y, c.trigLib.toRadians(c.trigLib.toDegrees(m) + v), a);
            m = c.trigLib.getPolarPoint(w.x, w.y, c.trigLib.toRadians(q - v), a);
            v = [];
            200 > r && (r = t + 40,
            v = q - 40,
            q = ia(r, v),
            t = .3 * e,
            r = c.trigLib.getPolarPoint(d, b, c.trigLib.toRadians(r), t),
            v = c.trigLib.getPolarPoint(d, b, c.trigLib.toRadians(v), t),
            v = ["L", r.x, r.y, "A", t, t, 0, 180 > q ? 0 : 1, 1, v.x, v.y]);
            d = ["M", d + e * g, b + e * k, "A", e, e, 0, p, 1, d + e * l, b + e * n];
            b = ["L", m.x, m.y];
            h = ["A", a, a, 0, 0, 1, h[0], h[1]];
            d.push.apply(d, H(["A", a, a, 0, 0, 1, f.x, f.y]));
            d.push.apply(d, H(v));
            d.push.apply(d, H(b));
            d.push.apply(d, H(h));
            return d
        }
    }
    function X(d) {
        return c.jsLib.isNumber(d) && !c.jsLib.isNaN(d)
    }
    function Ja(d) {
        return c.jsLib.reduce(c.jsLib.isString(d) ? d.trim().split(Ka.dataDelimiter) : d, function(b, a) {
            c.jsLib.isString(a) ? a.length && "NaN" !== a && "null" !== a ? (a = parseFloat(a),
            !c.jsLib.isNaN(a) && b.push(a)) : b.push(null) : b.push(a);
            return b
        }, [])
    }
    function mc() {
        c.jsLib.each(nc, function(d) {
            return c.registerVisual(d, oc)
        })
    }
    function pc(c) {
        c.flowEvents.beforeRenderSeries.on(qc);
        c.flowEvents.nextRenderSeries.on(rc)
    }
    function qc(d) {
        var b = P(d, 6)
          , a = b[0]
          , e = b[1];
        d = b[2];
        var h = b[3]
          , f = b[4];
        b = b[5];
        a.ctManager.isType("treemap") && (Ub(e, a.series().items, a.currentOptions),
        e = a.series(function(e) {
            return e.chartArea.id === a.id && !1 === e.info.type.isShape && e.pane === c.undefVal
        }).sortBy("zIndex"),
        e.each(function(a) {
            return f.push(function() {
                return a.render(a.renderRect, h)
            })
        }),
        e.each(function(a) {
            return f.push(function() {
                return a.renderLabels(a.renderRect, h)
            })
        }),
        b());
        a.panes && a.panes.count && a.panes.renderData(d, h)
    }
    function rc(d) {
        var b = P(d, 4)
          , a = b[1];
        d = b[2];
        var e = b[3];
        b = b[0].series(function(a) {
            return a.info.type.isShape && !a.pane
        }).items;
        if (b.length) {
            a = Kb(b.length, {
                width: a.width,
                height: a.height,
                padding: 0,
                equal: !0
            }).boxes;
            for (var h = 0, f = b.length; h < f; h++) {
                var m = a[h]
                  , g = b[h];
                m = c.rectLib.centerRect(m.cx, m.cy, m.maxWidth, m.size);
                g.render(d, c.jsLib.merge({
                    rect: m
                }, e))
            }
        }
    }
    var Ba = function(c, b) {
        Ba = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(a, e) {
            a.__proto__ = e
        }
        || function(a, e) {
            for (var b in e)
                e.hasOwnProperty(b) && (a[b] = e[b])
        }
        ;
        return Ba(c, b)
    }
      , ha = function(d, b) {
        var a = c.bboxLib.center(d)
          , e = c.bboxLib.center(b);
        b = Math.min(d[2] / b[2], d[3] / b[3]);
        var h = b * d[2];
        return {
            x: a[0] - (e[0] - a[0]) * b - h / 2,
            y: a[1] - (e[1] - a[1]) * b - h / 2,
            width: h,
            height: h,
            resize: {
                ratio: b,
                offsetX: -((e[0] - a[0]) * b),
                offsetY: -((e[1] - a[1]) * b),
                cxOrg: d[0] + d[2] / 2,
                cyOrg: d[1] + d[3] / 2,
                wOrg: d[2]
            }
        }
    }
      , ca = function(c) {
        for (var b = [0, 0]; c; )
            b[0] += c.x.px + c.offsetX,
            b[1] += c.y.px + c.offsetY,
            c = c.parent;
        return b
    }
      , ea = function(d, b, a) {
        return c.bboxLib.translate(d, c.bboxLib.offsetBetween(ca(b), ca(a)))
    }
      , sc = function() {
        function c() {}
        c.prototype.edges = function() {
            var b, a, e, h = [];
            try {
                for (var c = A(this.vertices()), d = c.next(); !d.done; d = c.next()) {
                    var g = d.value;
                    try {
                        for (var k = (a = void 0,
                        A(this.outVertices(g))), l = k.next(); !l.done; l = k.next())
                            h.push([g, l.value])
                    } catch (p) {
                        a = {
                            error: p
                        }
                    } finally {
                        try {
                            l && !l.done && (e = k.return) && e.call(k)
                        } finally {
                            if (a)
                                throw a.error;
                        }
                    }
                }
            } catch (p) {
                var n = {
                    error: p
                }
            } finally {
                try {
                    d && !d.done && (b = c.return) && b.call(c)
                } finally {
                    if (n)
                        throw n.error;
                }
            }
            return h
        }
        ;
        c.prototype.outEdges = function(b) {
            var a, e, h, c, d, g;
            return Ua(this, function(f) {
                switch (f.label) {
                case 0:
                    f.trys.push([0, 5, 6, 7]),
                    a = A(this.outVertices(b)),
                    e = a.next(),
                    f.label = 1;
                case 1:
                    if (e.done)
                        return [3, 4];
                    h = e.value;
                    return [4, [b, h]];
                case 2:
                    f.sent(),
                    f.label = 3;
                case 3:
                    return e = a.next(),
                    [3, 1];
                case 4:
                    return [3, 7];
                case 5:
                    return c = f.sent(),
                    d = {
                        error: c
                    },
                    [3, 7];
                case 6:
                    try {
                        e && !e.done && (g = a.return) && g.call(a)
                    } finally {
                        if (d)
                            throw d.error;
                    }
                    return [7];
                case 7:
                    return [2]
                }
            })
        }
        ;
        c.prototype.inEdges = function(b) {
            var a, e, h, c, d, g;
            return Ua(this, function(f) {
                switch (f.label) {
                case 0:
                    f.trys.push([0, 5, 6, 7]),
                    a = A(this.inVertices(b)),
                    e = a.next(),
                    f.label = 1;
                case 1:
                    if (e.done)
                        return [3, 4];
                    h = e.value;
                    return [4, [h, b]];
                case 2:
                    f.sent(),
                    f.label = 3;
                case 3:
                    return e = a.next(),
                    [3, 1];
                case 4:
                    return [3, 7];
                case 5:
                    return c = f.sent(),
                    d = {
                        error: c
                    },
                    [3, 7];
                case 6:
                    try {
                        e && !e.done && (g = a.return) && g.call(a)
                    } finally {
                        if (d)
                            throw d.error;
                    }
                    return [7];
                case 7:
                    return [2]
                }
            })
        }
        ;
        c.prototype.toJSON = function() {
            var b = this;
            return {
                vertices: this.vertices().map(function(a) {
                    return {
                        u: a,
                        d: b.vertex(a)
                    }
                }),
                edges: this.edges().map(function(a) {
                    var e = P(a, 2);
                    a = e[0];
                    e = e[1];
                    return {
                        u: a,
                        v: e,
                        d: b.edge(a, e)
                    }
                })
            }
        }
        ;
        c.prototype.toString = function() {
            return JSON.stringify(this.toJSON())
        }
        ;
        return c
    }()
      , eb = new WeakMap
      , M = function(c) {
        return eb.get(c)
    }
      , V = function(c, b) {
        if (null === c.vertex(b))
            throw Error("Invalid vertex: " + b);
    }
      , La = function(c) {
        function b() {
            var a = c.call(this) || this;
            eb.set(a, {
                vertices: new Map,
                numVertices: 0,
                numEdges: 0
            });
            return a
        }
        F(b, c);
        b.prototype.vertex = function(a) {
            var e = M(this).vertices;
            return e.get(a) ? e.get(a).data : null
        }
        ;
        b.prototype.edge = function(a, e) {
            var b = M(this).vertices;
            return b.get(a) && b.get(a).outVertices.get(e) ? b.get(a).outVertices.get(e) : null
        }
        ;
        b.prototype.vertices = function() {
            return Ea(M(this).vertices)
        }
        ;
        b.prototype.outVertices = function(a) {
            V(this, a);
            return Ea(M(this).vertices.get(a).outVertices)
        }
        ;
        b.prototype.inVertices = function(a) {
            V(this, a);
            return Ea(M(this).vertices.get(a).inVertices)
        }
        ;
        b.prototype.parent = function(a) {
            V(this, a);
            return M(this).vertices.get(a).parent
        }
        ;
        b.prototype.children = function(a) {
            V(this, a);
            return Array.from(M(this).vertices.get(a).children)
        }
        ;
        b.prototype.numVertices = function() {
            return M(this).numVertices
        }
        ;
        b.prototype.numEdges = function() {
            return M(this).numEdges
        }
        ;
        b.prototype.outDegree = function(a) {
            V(this, a);
            return M(this).vertices.get(a).outVertices.size
        }
        ;
        b.prototype.inDegree = function(a) {
            V(this, a);
            return M(this).vertices.get(a).inVertices.size
        }
        ;
        b.prototype.addVertex = function(a, e) {
            void 0 === e && (e = {});
            if (this.vertex(a))
                throw Error("Duplicated vertex: " + a);
            M(this).vertices.set(a, {
                outVertices: new Map,
                inVertices: new Map,
                children: new Set,
                parent: null,
                data: e
            });
            M(this).numVertices++;
            return this
        }
        ;
        b.prototype.addEdge = function(a, e, b) {
            void 0 === b && (b = {});
            V(this, a);
            V(this, e);
            if (this.edge(a, e))
                throw Error("Duplicated edge: (" + a + ", " + e + ")");
            M(this).numEdges++;
            M(this).vertices.get(a).outVertices.set(e, b);
            M(this).vertices.get(e).inVertices.set(a, b);
            return this
        }
        ;
        b.prototype.setChild = function(a, e) {
            V(this, a);
            V(this, e);
            M(this).vertices.get(a).children.add(e);
            M(this).vertices.get(e).parent = a;
            return this
        }
        ;
        b.prototype.removeVertex = function(a) {
            var e, b;
            try {
                for (var c = A(this.outVertices(a)), d = c.next(); !d.done; d = c.next()) {
                    var g = d.value;
                    this.removeEdge(a, g)
                }
            } catch (q) {
                var k = {
                    error: q
                }
            } finally {
                try {
                    d && !d.done && (e = c.return) && e.call(c)
                } finally {
                    if (k)
                        throw k.error;
                }
            }
            try {
                for (var l = A(this.inVertices(a)), n = l.next(); !n.done; n = l.next())
                    g = n.value,
                    this.removeEdge(g, a)
            } catch (q) {
                var p = {
                    error: q
                }
            } finally {
                try {
                    n && !n.done && (b = l.return) && b.call(l)
                } finally {
                    if (p)
                        throw p.error;
                }
            }
            (k = this.parent(a)) && this.unsetChild(k, a);
            M(this).vertices.delete(a);
            M(this).numVertices--;
            return this
        }
        ;
        b.prototype.removeEdge = function(a, e) {
            if (null === this.edge(a, e))
                throw Error("Invalid edge: (" + a + ", " + e + ")");
            M(this).vertices.get(a).outVertices.delete(e);
            M(this).vertices.get(e).inVertices.delete(a);
            M(this).numEdges--;
            return this
        }
        ;
        b.prototype.unsetChild = function(a, e) {
            V(this, a);
            V(this, e);
            M(this).vertices.get(a).children.delete(e);
            M(this).vertices.get(e).parent = null;
            return this
        }
        ;
        return b
    }(sc)
      , Q = function(c, b, a, e) {
        if (0 === e.length)
            return b.get(c)[a];
        b.get(c)[a] = e[0];
        return c
    }
      , tc = function(c, b) {
        return function(a, e) {
            return c({
                u: a,
                v: e,
                ud: b.vertex(a),
                vd: b.vertex(e),
                d: b.edge(a, e)
            })
        }
    }
      , fb = function(c, b, a, e) {
        var h, f;
        if (e.has(b)) {
            if (b = e.get(b),
            b !== a)
                try {
                    for (var d = A(c.vertices()), g = d.next(); !g.done; g = d.next()) {
                        var k = g.value;
                        e.get(k) === b && e.set(k, a)
                    }
                } catch (t) {
                    var l = {
                        error: t
                    }
                } finally {
                    try {
                        g && !g.done && (h = d.return) && h.call(d)
                    } finally {
                        if (l)
                            throw l.error;
                    }
                }
        } else {
            e.set(b, a);
            try {
                for (var n = A(c.outVertices(b)), p = n.next(); !p.done; p = n.next())
                    k = p.value,
                    fb(c, k, a, e)
            } catch (t) {
                var q = {
                    error: t
                }
            } finally {
                try {
                    p && !p.done && (f = n.return) && f.call(n)
                } finally {
                    if (q)
                        throw q.error;
                }
            }
        }
    }
      , uc = function(c) {
        var b, a = new Map;
        try {
            for (var e = A(c.vertices()), h = e.next(); !h.done; h = e.next()) {
                var f = h.value;
                0 === c.inDegree(f) && fb(c, f, f, a)
            }
        } catch (k) {
            var d = {
                error: k
            }
        } finally {
            try {
                h && !h.done && (b = e.return) && b.call(e)
            } finally {
                if (d)
                    throw d.error;
            }
        }
        var g = Mb(a);
        return g.filter(function(a, e) {
            return g.indexOf(a) === e
        }).map(function(e) {
            return c.vertices().filter(function(b) {
                return a.get(b) === e
            })
        })
    }
      , vc = function(c, b, a) {
        var e, h = [];
        try {
            for (var f = A(c.vertices()), d = f.next(); !d.done; d = f.next()) {
                var g = d.value
                  , k = b[g];
                void 0 === h[k] && (h[k] = []);
                h[k].push(g)
            }
        } catch (n) {
            var l = {
                error: n
            }
        } finally {
            try {
                d && !d.done && (e = f.return) && e.call(f)
            } finally {
                if (l)
                    throw l.error;
            }
        }
        if (a) {
            for (c = 0; c < h.length; ++c)
                void 0 === h[c] && (h[c] = []);
            return h
        }
        return h.filter(function(a) {
            return void 0 !== a
        })
    }
      , wc = 0
      , xc = function(c, b, a, e, h) {
        var f, d;
        try {
            for (var g = A(c.edges()), k = g.next(); !k.done; k = g.next()) {
                var l = P(k.value, 2)
                  , n = l[0]
                  , p = l[1]
                  , q = c.edge(n, p);
                if (1 < a[p] - a[n]) {
                    var t = n;
                    for (d = a[n] + 1; d < a[p]; ++d) {
                        var r = "__symbol__" + ++wc;
                        c.addVertex(r, {
                            u: n,
                            v: p,
                            dummy: !0,
                            width: q.width + e,
                            origWidth: q.width,
                            height: h,
                            origHeight: 0,
                            layer: d
                        });
                        c.addEdge(t, r, {
                            u: n,
                            v: p,
                            dummy: !0,
                            reversed: c.edge(n, p).reversed,
                            width: q.width
                        });
                        b[d].push(r);
                        t = r
                    }
                    c.addEdge(t, p, {
                        u: n,
                        v: p,
                        dummy: !0,
                        reversed: c.edge(n, p).reversed,
                        width: q.width
                    });
                    c.removeEdge(n, p)
                }
            }
        } catch (u) {
            var v = {
                error: u
            }
        } finally {
            try {
                k && !k.done && (f = g.return) && f.call(g)
            } finally {
                if (v)
                    throw v.error;
            }
        }
    }
      , yc = function(c, b, a) {
        for (var e, h, f = b.length, d = a.length, g = {}, k = new Int8Array(f * d), l = 0; l < d; ++l)
            g[a[l]] = l;
        for (l = 0; l < f; ++l) {
            a = b[l];
            try {
                for (var n = (e = void 0,
                A(c.outVertices(a))), p = n.next(); !p.done; p = n.next())
                    k[l * d + g[p.value]] = 1
            } catch (q) {
                e = {
                    error: q
                }
            } finally {
                try {
                    p && !p.done && (h = n.return) && h.call(n)
                } finally {
                    if (e)
                        throw e.error;
                }
            }
        }
        return k
    }
      , zc = function(c, b, a, e) {
        void 0 === e && (e = !1);
        var h = {}
          , f = b.length
          , d = a.length;
        c = yc(c, b, a);
        var g = function(a, e) {
            return h[a] - h[e]
        };
        if (e) {
            for (e = 0; e < f; ++e) {
                for (var k = 0, l = 0, n = 0; n < d; ++n) {
                    var p = c[e * d + n];
                    l += p;
                    k += n * p
                }
                h[b[e]] = k / l
            }
            b.sort(g)
        } else {
            for (n = 0; n < d; ++n) {
                for (e = l = k = 0; e < f; ++e)
                    p = c[e * d + n],
                    l += p,
                    k += e * p;
                h[a[n]] = k / l
            }
            a.sort(g)
        }
    }
      , Ma = new WeakMap
      , Ac = function() {
        function c() {
            Ma.set(this, {
                repeat: 8,
                method: zc
            })
        }
        c.prototype.call = function(b, a) {
            for (var e = a.length, c = this.repeat(), f = this.method(), d = 0; d < c; ++d) {
                for (var g = 1; g < e; ++g)
                    f(b, a[g - 1], a[g]);
                for (g = e - 1; 0 < g; --g)
                    f(b, a[g - 1], a[g], !0)
            }
        }
        ;
        c.prototype.repeat = function() {
            return Q(this, Ma, "repeat", arguments)
        }
        ;
        c.prototype.method = function() {
            return Q(this, Ma, "method", arguments)
        }
        ;
        return c
    }()
      , Bc = function(c, b, a) {
        var e, h, f;
        b = [];
        try {
            for (var d = A(a), g = d.next(); !g.done; g = d.next()) {
                var k = g.value;
                try {
                    for (var l = (h = void 0,
                    A(c.inVertices(k))), n = l.next(); !n.done; n = l.next())
                        b.push([n.value, k])
                } catch (q) {
                    h = {
                        error: q
                    }
                } finally {
                    try {
                        n && !n.done && (f = l.return) && f.call(l)
                    } finally {
                        if (h)
                            throw h.error;
                    }
                }
            }
        } catch (q) {
            var p = {
                error: q
            }
        } finally {
            try {
                g && !g.done && (e = d.return) && e.call(d)
            } finally {
                if (p)
                    throw p.error;
            }
        }
        return b
    }
      , Cc = function(c, b) {
        var a, e = [], h = [];
        try {
            for (var f = A(c), d = f.next(); !d.done; d = f.next()) {
                var g = d.value;
                b(g) ? e.push(g) : h.push(g)
            }
        } catch (l) {
            var k = {
                error: l
            }
        } finally {
            try {
                d && !d.done && (a = f.return) && a.call(f)
            } finally {
                if (k)
                    throw k.error;
            }
        }
        return [e, h]
    }
      , Dc = function(c, b) {
        var a, e, h, f, d, g = b.length - 2, k = {}, l = {}, n = function(a) {
            a = P(a, 2);
            var e = a[1];
            return k[a[0]] && k[e]
        };
        try {
            for (var p = A(c.vertices()), q = p.next(); !q.done; q = p.next()) {
                var t = q.value
                  , r = c.vertex(t);
                k[t] = !!r.dummy;
                l[t] = r.order
            }
        } catch (K) {
            var v = {
                error: K
            }
        } finally {
            try {
                q && !q.done && (a = p.return) && a.call(p)
            } finally {
                if (v)
                    throw v.error;
            }
        }
        for (v = 1; v < g; ++v) {
            a = Bc(c, b[v], b[v + 1]);
            p = P(Cc(a, n), 2);
            a = p[0];
            p = p[1];
            try {
                for (var u = (e = void 0,
                A(a)), w = u.next(); !w.done; w = u.next()) {
                    var x = P(w.value, 2)
                      , y = x[0]
                      , z = x[1];
                    try {
                        for (var G = (f = void 0,
                        A(p)), C = G.next(); !C.done; C = G.next()) {
                            var J = P(C.value, 2)
                              , D = J[0]
                              , B = J[1];
                            if (l[y] < l[D] && l[z] > l[B] || l[y] > l[D] && l[z] < l[B])
                                c.edge(D, B).type1Conflict = !0
                        }
                    } catch (K) {
                        f = {
                            error: K
                        }
                    } finally {
                        try {
                            C && !C.done && (d = G.return) && d.call(G)
                        } finally {
                            if (f)
                                throw f.error;
                        }
                    }
                }
            } catch (K) {
                e = {
                    error: K
                }
            } finally {
                try {
                    w && !w.done && (h = u.return) && h.call(u)
                } finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    }
      , gb = function(c, b, a) {
        void 0 === a && (a = !1);
        b = a ? c.outVertices(b) : c.inVertices(b);
        b.sort(function(a, b) {
            return c.vertex(a).order - c.vertex(b).order
        });
        a = (b.length - 1) / 2;
        return {
            left: b[Math.floor(a)],
            right: b[Math.ceil(a)]
        }
    }
      , Ec = function(c, b, a) {
        var e, h, f, d, g, k, l = a.rtol, n = void 0 === l ? !1 : l;
        a = a.btot;
        var p = void 0 === a ? !1 : a
          , q = function() {
            var a = [];
            if (p)
                for (var e = b.length - 2; 0 <= e; --e)
                    a.push(b[e]);
            else
                for (e = 1; e < b.length; ++e)
                    a.push(b[e]);
            return a
        };
        a = function(a) {
            var e = [];
            if (n)
                for (var b = a.length - 1; 0 <= b; --b)
                    e.push(a[b]);
            else
                for (b = 0; b < a.length; ++b)
                    e.push(a[b]);
            return e
        }
        ;
        l = p ? function(a, e) {
            return c.edge(e, a)
        }
        : function(a, e) {
            return c.edge(a, e)
        }
        ;
        var t = p ? function(a) {
            return c.outDegree(a)
        }
        : function(a) {
            return c.inDegree(a)
        }
          , r = p ? function(a, e) {
            return gb(a, e, !0)
        }
        : function(a, e) {
            return gb(a, e)
        }
        ;
        try {
            for (var v = A(c.vertices()), u = v.next(); !u.done; u = v.next()) {
                var w = u.value;
                c.vertex(w).root = w;
                c.vertex(w).align = w
            }
        } catch (ja) {
            var x = {
                error: ja
            }
        } finally {
            try {
                u && !u.done && (e = v.return) && e.call(v)
            } finally {
                if (x)
                    throw x.error;
            }
        }
        try {
            for (var y = A(q()), z = y.next(); !z.done; z = y.next()) {
                var G = z.value;
                x = n ? Infinity : -Infinity;
                try {
                    for (var C = (f = void 0,
                    A(a(G))), J = C.next(); !J.done; J = C.next()) {
                        var D = J.value;
                        if (0 < t(D)) {
                            var B = r(c, D)
                              , K = B.left
                              , L = B.right;
                            e = K === L ? [K] : n ? [L, K] : [K, L];
                            try {
                                for (var U = (g = void 0,
                                A(e)), N = U.next(); !N.done; N = U.next())
                                    if (w = N.value,
                                    !l(w, D).type1Conflict && !l(w, D).type2Conflict && (n ? x > c.vertex(w).order : x < c.vertex(w).order)) {
                                        c.vertex(D).align = c.vertex(D).root = c.vertex(w).root;
                                        c.vertex(w).align = D;
                                        x = c.vertex(w).order;
                                        break
                                    }
                            } catch (ja) {
                                g = {
                                    error: ja
                                }
                            } finally {
                                try {
                                    N && !N.done && (k = U.return) && k.call(U)
                                } finally {
                                    if (g)
                                        throw g.error;
                                }
                            }
                        }
                    }
                } catch (ja) {
                    f = {
                        error: ja
                    }
                } finally {
                    try {
                        J && !J.done && (d = C.return) && d.call(C)
                    } finally {
                        if (f)
                            throw f.error;
                    }
                }
            }
        } catch (ja) {
            var I = {
                error: ja
            }
        } finally {
            try {
                z && !z.done && (h = y.return) && h.call(y)
            } finally {
                if (I)
                    throw I.error;
            }
        }
    }
      , Fc = function(c, b, a) {
        var e, h, f, d;
        a = a.rtol;
        var g = void 0 === a ? !1 : a
          , k = g ? function(a) {
            return b[a.layer][a.order + 1]
        }
        : function(a) {
            return b[a.layer][a.order - 1]
        }
          , l = function(a) {
            var e = c.vertex(a);
            if (null === e.x) {
                e.x = 0;
                var h = a;
                do {
                    h = c.vertex(h);
                    if (g ? h.order < b[h.layer].length - 1 : 0 < h.order) {
                        var f = k(h);
                        f = c.vertex(f);
                        var d = f.root
                          , m = c.vertex(d);
                        l(d);
                        e.sink === a && (e.sink = m.sink);
                        e.sink === m.sink ? e.x = Math.max(e.x, m.x + (f.width + h.width) / 2) : (d = c.vertex(m.sink),
                        d.shift = Math.min(d.shift, e.x - m.x - (f.width + h.width) / 2))
                    }
                    h = h.align
                } while (h !== a)
            }
        };
        try {
            for (var n = A(c.vertices()), p = n.next(); !p.done; p = n.next()) {
                var q = p.value
                  , t = c.vertex(q);
                t.sink = q;
                t.shift = Infinity;
                t.x = null
            }
        } catch (B) {
            var r = {
                error: B
            }
        } finally {
            try {
                p && !p.done && (e = n.return) && e.call(n)
            } finally {
                if (r)
                    throw r.error;
            }
        }
        try {
            for (var v = A(c.vertices()), u = v.next(); !u.done; u = v.next())
                q = u.value,
                c.vertex(q).root === q && l(q)
        } catch (B) {
            var w = {
                error: B
            }
        } finally {
            try {
                u && !u.done && (h = v.return) && h.call(v)
            } finally {
                if (w)
                    throw w.error;
            }
        }
        try {
            for (var x = A(c.vertices()), y = x.next(); !y.done; y = x.next())
                q = y.value,
                t = c.vertex(q),
                t.x = c.vertex(t.root).x
        } catch (B) {
            var z = {
                error: B
            }
        } finally {
            try {
                y && !y.done && (f = x.return) && f.call(x)
            } finally {
                if (z)
                    throw z.error;
            }
        }
        try {
            for (var G = A(c.vertices()), C = G.next(); !C.done; C = G.next()) {
                q = C.value;
                t = c.vertex(q);
                var J = c.vertex(c.vertex(t.root).sink).shift;
                Infinity > J && (t.x += J)
            }
        } catch (B) {
            var D = {
                error: B
            }
        } finally {
            try {
                C && !C.done && (d = G.return) && d.call(G)
            } finally {
                if (D)
                    throw D.error;
            }
        }
    }
      , Gc = function(c) {
        c.sort(function(b, a) {
            return b - a
        })
    }
      , Ic = function() {
        function c() {}
        c.prototype.call = function(b, a) {
            var e, c, f, d, g, k, l, n, p, q, t, r, v, u, w, x, y, z, G;
            Dc(b, a);
            var C = {};
            try {
                for (var J = A(b.vertices()), D = J.next(); !D.done; D = J.next()) {
                    var B = D.value;
                    C[B] = []
                }
            } catch (R) {
                var K = {
                    error: R
                }
            } finally {
                try {
                    D && !D.done && (k = J.return) && k.call(J)
                } finally {
                    if (K)
                        throw K.error;
                }
            }
            K = [{
                rtol: !1,
                btot: !1
            }, {
                rtol: !0,
                btot: !1
            }, {
                rtol: !1,
                btot: !0
            }, {
                rtol: !0,
                btot: !0
            }];
            k = -Infinity;
            J = Infinity;
            for (D = 0; D < K.length; ++D) {
                var L = K[D];
                Ec(b, a, L);
                Fc(b, a, L);
                var U = Infinity
                  , N = -Infinity;
                try {
                    for (var I = (l = void 0,
                    A(b.vertices())), H = I.next(); !H.done; H = I.next())
                        B = H.value,
                        L.rtol && (b.vertex(B).x = -b.vertex(B).x),
                        U = Math.min(U, b.vertex(B).x),
                        N = Math.max(N, b.vertex(B).x)
                } catch (R) {
                    l = {
                        error: R
                    }
                } finally {
                    try {
                        H && !H.done && (n = I.return) && n.call(I)
                    } finally {
                        if (l)
                            throw l.error;
                    }
                }
                N - U < J - k && (k = U,
                J = N);
                try {
                    for (var E = (p = void 0,
                    A(b.vertices())), F = E.next(); !F.done; F = E.next())
                        B = F.value,
                        C[B].push(b.vertex(B).x)
                } catch (R) {
                    p = {
                        error: R
                    }
                } finally {
                    try {
                        F && !F.done && (q = E.return) && q.call(E)
                    } finally {
                        if (p)
                            throw p.error;
                    }
                }
            }
            for (D = 0; D < K.length; ++D)
                if (L = K[D],
                L.rtol) {
                    N = -Infinity;
                    try {
                        for (var W = (t = void 0,
                        A(b.vertices())), ma = W.next(); !ma.done; ma = W.next())
                            B = ma.value,
                            N = Math.max(N, C[B][D])
                    } catch (R) {
                        t = {
                            error: R
                        }
                    } finally {
                        try {
                            ma && !ma.done && (r = W.return) && r.call(W)
                        } finally {
                            if (t)
                                throw t.error;
                        }
                    }
                    try {
                        for (var M = (v = void 0,
                        A(b.vertices())), na = M.next(); !na.done; na = M.next())
                            B = na.value,
                            C[B][D] += J - N
                    } catch (R) {
                        v = {
                            error: R
                        }
                    } finally {
                        try {
                            na && !na.done && (u = M.return) && u.call(M)
                        } finally {
                            if (v)
                                throw v.error;
                        }
                    }
                } else {
                    U = Infinity;
                    try {
                        for (var va = (w = void 0,
                        A(b.vertices())), oa = va.next(); !oa.done; oa = va.next())
                            B = oa.value,
                            U = Math.min(U, C[B][D])
                    } catch (R) {
                        w = {
                            error: R
                        }
                    } finally {
                        try {
                            oa && !oa.done && (x = va.return) && x.call(va)
                        } finally {
                            if (w)
                                throw w.error;
                        }
                    }
                    try {
                        for (var wa = (y = void 0,
                        A(b.vertices())), ka = wa.next(); !ka.done; ka = wa.next())
                            B = ka.value,
                            C[B][D] += k - U
                    } catch (R) {
                        y = {
                            error: R
                        }
                    } finally {
                        try {
                            ka && !ka.done && (z = wa.return) && z.call(wa)
                        } finally {
                            if (y)
                                throw y.error;
                        }
                    }
                }
            try {
                for (var xa = A(b.vertices()), pa = xa.next(); !pa.done; pa = xa.next())
                    B = pa.value,
                    Gc(C[B]),
                    b.vertex(B).x = (C[B][1] + C[B][2]) / 2
            } catch (R) {
                var P = {
                    error: R
                }
            } finally {
                try {
                    pa && !pa.done && (G = xa.return) && G.call(xa)
                } finally {
                    if (P)
                        throw P.error;
                }
            }
            l = 0;
            try {
                for (var la = A(a), qa = la.next(); !qa.done; qa = la.next()) {
                    var T = qa.value;
                    a = 0;
                    try {
                        for (var Q = (c = void 0,
                        A(T)), O = Q.next(); !O.done; O = Q.next()) {
                            var S = O.value;
                            a = Math.max(a, b.vertex(S).height)
                        }
                    } catch (R) {
                        c = {
                            error: R
                        }
                    } finally {
                        try {
                            O && !O.done && (f = Q.return) && f.call(Q)
                        } finally {
                            if (c)
                                throw c.error;
                        }
                    }
                    l += a / 2;
                    try {
                        for (var V = (d = void 0,
                        A(T)), X = V.next(); !X.done; X = V.next())
                            S = X.value,
                            b.vertex(S).y = l
                    } catch (R) {
                        d = {
                            error: R
                        }
                    } finally {
                        try {
                            X && !X.done && (g = V.return) && g.call(V)
                        } finally {
                            if (d)
                                throw d.error;
                        }
                    }
                    l += a / 2
                }
            } catch (R) {
                var Y = {
                    error: R
                }
            } finally {
                try {
                    qa && !qa.done && (e = la.return) && e.call(la)
                } finally {
                    if (Y)
                        throw Y.error;
                }
            }
            var ba, ea;
            e = Y = Infinity;
            try {
                for (var aa = A(b.vertices()), Z = aa.next(); !Z.done; Z = aa.next()) {
                    var da = Z.value
                      , fa = b.vertex(da);
                    Y = Math.min(Y, fa.x - fa.origWidth / 2);
                    e = Math.min(e, fa.y - fa.origHeight / 2)
                }
            } catch (R) {
                var ha = {
                    error: R
                }
            } finally {
                try {
                    Z && !Z.done && (ba = aa.return) && ba.call(aa)
                } finally {
                    if (ha)
                        throw ha.error;
                }
            }
            try {
                for (var ca = A(b.vertices()), ra = ca.next(); !ra.done; ra = ca.next())
                    da = ra.value,
                    fa = b.vertex(da),
                    fa.x -= Y,
                    fa.y -= e
            } catch (R) {
                var ia = {
                    error: R
                }
            } finally {
                try {
                    ra && !ra.done && (ea = ca.return) && ea.call(ca)
                } finally {
                    if (ia)
                        throw ia.error;
                }
            }
        }
        ;
        return c
    }()
      , hb = function(c, b, a) {
        var e;
        if (0 === b.length)
            return [];
        var h = []
          , f = []
          , d = c.vertex(b[0])[a ? "v" : "u"];
        try {
            for (var g = A(b), k = g.next(); !k.done; k = g.next()) {
                var l = k.value
                  , n = c.vertex(l);
                (!n.dummy || n[a ? "v" : "u"] !== d) && 0 < f.length && (h = h.concat(f),
                f = []);
                n.dummy && (f.push(l),
                d = n[a ? "v" : "u"])
            }
        } catch (q) {
            var p = {
                error: q
            }
        } finally {
            try {
                k && !k.done && (e = g.return) && e.call(g)
            } finally {
                if (p)
                    throw p.error;
            }
        }
        0 < f.length && (h = h.concat(f));
        return h
    }
      , ib = function(c, b, a) {
        var e, h, f = 0, d = 0;
        try {
            for (var g = A(b), k = g.next(); !k.done; k = g.next()) {
                var l = k.value;
                f += c.vertex(l)[a ? "x" : "y"];
                d += c.vertex(l).origWidth || 0
            }
        } catch (r) {
            var n = {
                error: r
            }
        } finally {
            try {
                k && !k.done && (e = g.return) && e.call(g)
            } finally {
                if (n)
                    throw n.error;
            }
        }
        n = f / b.length - (d - 1) / 2;
        try {
            for (var p = A(b), q = p.next(); !q.done; q = p.next())
                l = q.value,
                c.vertex(l)[a ? "x" : "y"] = n,
                n += c.vertex(l).origWidth || 0
        } catch (r) {
            var t = {
                error: r
            }
        } finally {
            try {
                q && !q.done && (h = p.return) && h.call(p)
            } finally {
                if (t)
                    throw t.error;
            }
        }
    }
      , Jc = function(c, b, a) {
        for (var e, h, f, d, g = 0; g < b.length - 1; ++g)
            try {
                for (var k = (e = void 0,
                A(hb(c, b[g], !1))), l = k.next(); !l.done; l = k.next()) {
                    var n = l.value;
                    ib(c, n, a)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (h = k.return) && h.call(k)
                } finally {
                    if (e)
                        throw e.error;
                }
            }
        for (g = b.length - 1; 0 < g; --g)
            try {
                for (var p = (f = void 0,
                A(hb(c, b[g], !0))), q = p.next(); !q.done; q = p.next())
                    n = q.value,
                    ib(c, n, a)
            } catch (t) {
                f = {
                    error: t
                }
            } finally {
                try {
                    q && !q.done && (d = p.return) && d.call(p)
                } finally {
                    if (f)
                        throw f.error;
                }
            }
    }
      , Na = new WeakMap
      , Kc = function() {
        function c() {
            Na.set(this, {
                f: function() {
                    return 0
                }
            })
        }
        c.prototype.call = function(b) {
            var a, e = Na.get(this).f, c = {};
            try {
                for (var f = A(b.vertices()), d = f.next(); !d.done; d = f.next()) {
                    var g = d.value;
                    c[g] = e(g)
                }
            } catch (l) {
                var k = {
                    error: l
                }
            } finally {
                try {
                    d && !d.done && (a = f.return) && a.call(f)
                } finally {
                    if (k)
                        throw k.error;
                }
            }
            return c
        }
        ;
        c.prototype.f = function() {
            return Q(this, Na, "f", arguments)
        }
        ;
        return c
    }()
      , Lc = function(c, b) {
        var a, e, h = b.ltor, f = b.vertexWidth, d = b.vertexHeight, g = b.edgeWidth, k = b.layerMargin, l = b.vertexMargin, n = b.vertexLeftMargin, p = b.vertexRightMargin, q = b.vertexTopMargin;
        b = b.vertexBottomMargin;
        var t = new La;
        try {
            for (var r = A(c.vertices()), v = r.next(); !v.done; v = r.next()) {
                var u = v.value
                  , w = c.vertex(u)
                  , x = f({
                    u: u,
                    d: w
                })
                  , y = d({
                    u: u,
                    d: w
                })
                  , z = n({
                    u: u,
                    d: w
                }) + p({
                    u: u,
                    d: w
                })
                  , G = q({
                    u: u,
                    d: w
                }) + b({
                    u: u,
                    d: w
                });
                t.addVertex(u, {
                    width: h ? y + l + G : x + k + z,
                    height: h ? x + k + z : y + l + G,
                    origWidth: h ? y : x,
                    origHeight: h ? x : y
                })
            }
        } catch (U) {
            var C = {
                error: U
            }
        } finally {
            try {
                v && !v.done && (a = r.return) && a.call(r)
            } finally {
                if (C)
                    throw C.error;
            }
        }
        try {
            for (var J = A(c.edges()), D = J.next(); !D.done; D = J.next()) {
                var B = P(D.value, 2);
                u = B[0];
                var K = B[1];
                t.addEdge(u, K, {
                    width: g(u, K)
                })
            }
        } catch (U) {
            var L = {
                error: U
            }
        } finally {
            try {
                D && !D.done && (e = J.return) && e.call(J)
            } finally {
                if (L)
                    throw L.error;
            }
        }
        return t
    }
      , Mc = function(c, b, a) {
        var e, h, f, d, g, k, l, n, p = {
            vertices: {},
            edges: {}
        }, q = [];
        try {
            for (var t = A(c.vertices()), r = t.next(); !r.done; r = t.next()) {
                var v = r.value;
                p.edges[v] = {}
            }
        } catch (W) {
            var u = {
                error: W
            }
        } finally {
            try {
                r && !r.done && (e = t.return) && e.call(t)
            } finally {
                if (u)
                    throw u.error;
            }
        }
        try {
            for (var w = A(b), x = w.next(); !x.done; x = w.next()) {
                var y = x.value;
                u = -Infinity;
                try {
                    for (var z = (f = void 0,
                    A(y)), G = z.next(); !G.done; G = z.next())
                        v = G.value,
                        u = Math.max(u, c.vertex(v).origHeight || 0)
                } catch (W) {
                    f = {
                        error: W
                    }
                } finally {
                    try {
                        G && !G.done && (d = z.return) && d.call(z)
                    } finally {
                        if (f)
                            throw f.error;
                    }
                }
                q.push(u)
            }
        } catch (W) {
            var C = {
                error: W
            }
        } finally {
            try {
                x && !x.done && (h = w.return) && h.call(w)
            } finally {
                if (C)
                    throw C.error;
            }
        }
        for (C = 0; C < b.length; ++C) {
            y = b[C];
            h = q[C];
            try {
                for (var J = (g = void 0,
                A(y)), D = J.next(); !D.done; D = J.next()) {
                    v = D.value;
                    var B = c.vertex(v);
                    if (!B.dummy) {
                        p.vertices[v] = {
                            x: a ? B.y : B.x,
                            y: a ? B.x : B.y,
                            width: a ? B.origHeight : B.origWidth,
                            height: a ? B.origWidth : B.origHeight,
                            layer: B.layer,
                            order: B.order
                        };
                        try {
                            for (var K = (l = void 0,
                            A(c.outVertices(v))), L = K.next(); !L.done; L = K.next()) {
                                var U = L.value
                                  , N = a ? [[B.y + (B.origHeight || 0) / 2, B.x], [B.y + h / 2, B.x]] : [[B.x, B.y + (B.origHeight || 0) / 2], [B.x, B.y + h / 2]];
                                y = U;
                                var I = c.vertex(y);
                                for (f = C + 1; I.dummy; )
                                    a ? (N.push([I.y - q[f] / 2, I.x]),
                                    N.push([I.y + q[f] / 2, I.x])) : (N.push([I.x, I.y - q[f] / 2]),
                                    N.push([I.x, I.y + q[f] / 2])),
                                    y = c.outVertices(y)[0],
                                    I = c.vertex(y),
                                    f += 1;
                                a ? (N.push([I.y - q[f] / 2, I.x]),
                                N.push([I.y - (I.origHeight || 0) / 2, I.x])) : (N.push([I.x, I.y - q[f] / 2]),
                                N.push([I.x, I.y - (I.origHeight || 0) / 2]));
                                f = N;
                                d = a;
                                for (w = 1; w < f.length - 1; )
                                    (d ? f[w][1] : f[w][0]) === (d ? f[w + 1][1] : f[w + 1][0]) ? f.splice(w, 2) : w += 2;
                                if (c.edge(v, U).reversed) {
                                    var H = p.edges[y];
                                    y = v;
                                    d = f = void 0;
                                    w = [];
                                    try {
                                        for (var E = A(N), F = E.next(); !F.done; F = E.next())
                                            w.unshift(F.value)
                                    } catch (W) {
                                        d = {
                                            error: W
                                        }
                                    } finally {
                                        try {
                                            F && !F.done && (f = E.return) && f.call(E)
                                        } finally {
                                            if (d)
                                                throw d.error;
                                        }
                                    }
                                    H[y] = {
                                        points: w,
                                        reversed: !0,
                                        width: c.edge(v, U).width
                                    }
                                } else
                                    p.edges[v][y] = {
                                        points: N,
                                        reversed: !1,
                                        width: c.edge(v, U).width
                                    }
                            }
                        } catch (W) {
                            l = {
                                error: W
                            }
                        } finally {
                            try {
                                L && !L.done && (n = K.return) && n.call(K)
                            } finally {
                                if (l)
                                    throw l.error;
                            }
                        }
                    }
                }
            } catch (W) {
                g = {
                    error: W
                }
            } finally {
                try {
                    D && !D.done && (k = J.return) && k.call(J)
                } finally {
                    if (g)
                        throw g.error;
                }
            }
        }
        return p
    }
      , S = new WeakMap
      , jb = function() {
        function c() {
            S.set(this, {
                vertexWidth: function(b) {
                    return b.d.width
                },
                vertexHeight: function(b) {
                    return b.d.height
                },
                edgeWidth: function() {
                    return 1
                },
                layerMargin: 10,
                vertexMargin: 10,
                vertexLeftMargin: function() {
                    return 0
                },
                vertexRightMargin: function() {
                    return 0
                },
                vertexTopMargin: function() {
                    return 0
                },
                vertexBottomMargin: function() {
                    return 0
                },
                edgeMargin: 10,
                ltor: !0,
                edgeBundling: !1,
                layerAssignment: new Kc,
                crossingReduction: new Ac,
                positionAssignment: new Ic
            })
        }
        c.prototype.layout = function(b) {
            var a, e = Lc(b, {
                vertexWidth: this.vertexWidth(),
                vertexHeight: this.vertexHeight(),
                edgeWidth: tc(this.edgeWidth(), b),
                layerMargin: this.layerMargin(),
                vertexMargin: this.vertexMargin(),
                vertexLeftMargin: this.vertexLeftMargin(),
                vertexRightMargin: this.vertexRightMargin(),
                vertexTopMargin: this.vertexTopMargin(),
                vertexBottomMargin: this.vertexBottomMargin(),
                ltor: this.ltor()
            });
            b = this.layerAssignment().call(e);
            var c = vc(e, b, !0);
            xc(e, c, b, this.edgeMargin(), this.layerMargin());
            var f = c.map(function() {
                return []
            });
            b = function(a) {
                var b, h, g = c.map(function(e) {
                    return e.filter(function(e) {
                        return -1 < a.indexOf(e)
                    })
                });
                d.crossingReduction().call(e, g);
                for (var m = 0; m < c.length; ++m)
                    try {
                        for (var l = (b = void 0,
                        A(g[m])), k = l.next(); !k.done; k = l.next())
                            f[m].push(k.value)
                    } catch (w) {
                        b = {
                            error: w
                        }
                    } finally {
                        try {
                            k && !k.done && (h = l.return) && h.call(l)
                        } finally {
                            if (b)
                                throw b.error;
                        }
                    }
            }
            ;
            var d = this;
            try {
                for (var g = A(uc(e)), k = g.next(); !k.done; k = g.next())
                    b(k.value)
            } catch (n) {
                var l = {
                    error: n
                }
            } finally {
                try {
                    k && !k.done && (a = g.return) && a.call(g)
                } finally {
                    if (l)
                        throw l.error;
                }
            }
            for (l = 0; l < f.length; ++l)
                for (a = f[l],
                g = 0; g < a.length; ++g)
                    k = a[g],
                    e.vertex(k).layer = l,
                    e.vertex(k).order = g;
            this.positionAssignment().call(e, f);
            this.edgeBundling() && Jc(e, f, this.ltor());
            return Mc(e, f, this.ltor())
        }
        ;
        c.prototype.vertexWidth = function(b) {
            return Q(this, S, "vertexWidth", arguments)
        }
        ;
        c.prototype.vertexHeight = function(b) {
            return Q(this, S, "vertexHeight", arguments)
        }
        ;
        c.prototype.edgeWidth = function(b) {
            return Q(this, S, "edgeWidth", arguments)
        }
        ;
        c.prototype.layerMargin = function(b) {
            return Q(this, S, "layerMargin", arguments)
        }
        ;
        c.prototype.vertexMargin = function(b) {
            return Q(this, S, "vertexMargin", arguments)
        }
        ;
        c.prototype.edgeMargin = function(b) {
            return Q(this, S, "edgeMargin", arguments)
        }
        ;
        c.prototype.vertexLeftMargin = function(b) {
            return Q(this, S, "vertexLeftMargin", arguments)
        }
        ;
        c.prototype.vertexRightMargin = function(b) {
            return Q(this, S, "vertexRightMargin", arguments)
        }
        ;
        c.prototype.vertexTopMargin = function(b) {
            return Q(this, S, "vertexTopMargin", arguments)
        }
        ;
        c.prototype.vertexBottomMargin = function(b) {
            return Q(this, S, "vertexBottomMargin", arguments)
        }
        ;
        c.prototype.ltor = function(b) {
            return Q(this, S, "ltor", arguments)
        }
        ;
        c.prototype.edgeBundling = function(b) {
            return Q(this, S, "edgeBundling", arguments)
        }
        ;
        c.prototype.layerAssignment = function(b) {
            return Q(this, S, "layerAssignment", arguments)
        }
        ;
        c.prototype.crossingReduction = function(b) {
            return Q(this, S, "crossingReduction", arguments)
        }
        ;
        c.prototype.positionAssignment = function(b) {
            return Q(this, S, "positionAssignment", arguments)
        }
        ;
        return c
    }()
      , kb = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.buildChildLookup = function() {
            if (!this.childLookup) {
                var a = this.childLookup = {};
                this.eachPoint(function(e) {
                    var b;
                    if (b = e.currentOptions.parent)
                        b = b.split(","),
                        c.jsLib.each(b, function(b) {
                            a[b] = a[b] || [];
                            a[b].push(e)
                        })
                })
            }
        }
        ;
        b.prototype.setCoordinates = function(a, e) {
            this.childLookup = c.undefVal;
            return this
        }
        ;
        b.prototype.getParents = function(a) {
            var e = this, b = [], f, d = [];
            if (a) {
                if (f = a.options("parent"))
                    d = f.split(",");
                return c.jsLib.map(d, function(a) {
                    return e.series.ciManager.exists(a)
                })
            }
            this.eachPoint(function(a) {
                (f = a.options("parent")) ? (d = f.split(","),
                !e.series.ciManager.exists(d[0]) && b.push(a)) : b.push(a)
            });
            return c.jsLib.uniq(b)
        }
        ;
        b.prototype.getChildren = function(a) {
            this.buildChildLookup();
            return this.childLookup[a.currentOptions.id] || []
        }
        ;
        b.prototype.walkUpTree = function(a, e, b) {
            var h = this;
            a = this.getParents(a);
            var d;
            e && (d = e(a, b));
            c.jsLib.each(a, function(a) {
                h.walkUpTree(a, e, d)
            })
        }
        ;
        return b
    }(c.SeriesBaseType)
      , lb = function() {
        return {
            axes: "x,y",
            values: "",
            requiredData: "",
            customAxisOptions: {
                z: {
                    visible: !1
                },
                x: {
                    visible: !1,
                    staticDraggable: !0
                },
                y: {
                    visible: !1,
                    staticDraggable: !0
                }
            }
        }
    }
      , Nc = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "annotation";
            a.typeConfig = lb();
            a._dragOffset = [0, 0];
            return a
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return lb()
        }
        ;
        b.prototype.assignLayers = function(a, e) {
            var b = this;
            c.jsLib.each(a, function(a) {
                var h = c.jsLib.pick(a.options("y"), e);
                a.orgLayer = h;
                b._maxLayer = Math.max(h, b._maxLayer);
                b.assignLayers(b.getChildren(a), h + 1)
            })
        }
        ;
        b.prototype.correctLayers = function() {
            var a = this
              , e = this.series;
            this.eachPoint(function(b) {
                var h = a.getParents(b);
                1 < h.length && (h = c.jsLib.map(h, function(a) {
                    return a.orgLayer
                }),
                c.jsLib.find(h, function(a) {
                    return a >= b.orgLayer
                }) && (c.jsLib.def(b.options("y")) && c.emitter.emit("warning", e.id, "orgChildLevel", {
                    data: [b.options("id")],
                    container: e.chart.getWrapper()
                }),
                b.orgLayer = Math.max.apply(Math, H(h)) + 1,
                a.walkUpTree(b, function(a, e) {
                    var b = e;
                    c.jsLib.each(a, function(a) {
                        b = c.jsLib.def(a.options("y")) ? a.options("y") : b;
                        c.jsLib.def(a.options("y")) || (a.orgLayer = b)
                    });
                    return b - 1
                }, b.orgLayer - 1)))
            })
        }
        ;
        b.prototype.reverseLayers = function() {
            var a = this._maxLayer;
            this.eachPoint(function(e) {
                e.orgLayer = a - e.orgLayer
            })
        }
        ;
        b.prototype.applyBoundsToAxes = function(a, e) {
            var b = this.series
              , c = b.chartArea
              , d = b.xAxis;
            b = b.yAxis;
            c.isZoomed = c.isZoomedDragArea = a[2] > e[2] || a[3] > e[3];
            a[2] < e[2] && (a[0] = e[0],
            a[2] = e[2]);
            a[3] < e[3] && (a[1] = e[1],
            a[3] = e[3]);
            d.setStaticRange([a[0], a[0] + a[2]], [e[0], e[0] + e[2]]);
            b.setStaticRange([a[1], a[1] + a[3]], [e[1], e[1] + e[3]])
        }
        ;
        b.prototype.applyDragOffset = function() {
            var a = this.series;
            this._dragOffset = [-a.xAxis.zoomRange[0], -a.yAxis.zoomRange[0]]
        }
        ;
        b.prototype.setCoordinates = function(a, e) {
            var b = this;
            d.prototype.setCoordinates.call(this, a, e);
            var f = this, m = this.series, g, k = m.indexer, l = e && e.forceCoordinates;
            if (m.chartArea.isDragging)
                f.applyDragOffset();
            else if (La && jb) {
                var n = function(a) {
                    a.points ? w.push(a.points) : c.jsLib.each(a, n)
                };
                e = m.options("shape.padding");
                var p = c.jsLib.def(e) ? 1 <= e ? e : e * Math.min(a.width, a.height) : 10;
                e = m.chart.options("defaultAnnotation");
                var q = c.jsLib.parseMargin(e.margin) || [0, 0, 0, 0];
                f._dragOffset = [0, 0];
                var t = m.userPoints;
                e = m.ctManager.settingVal("organizationType", m.currentOptions);
                var r = "left" == e || "up" == e
                  , v = new La
                  , u = f.getParents();
                f._maxLayer = 0;
                f.assignLayers(u, 0);
                f.correctLayers();
                r && f.reverseLayers();
                m.indexer.indexKeys(["coordinates", "bbox"], {}, 0);
                var w = []
                  , x = {}
                  , y = {};
                Nb(m).forEach(function(a) {
                    var e = a._i
                      , h = q;
                    x = {};
                    l ? g = m.indexer.getValue("coordinates", e) : (g = {
                        meta: x
                    },
                    b.initPointLabel(a, g, m.getPointAttr(t[e])));
                    var d = a.options("annotation");
                    d && d.margin && (h = c.jsLib.parseMargin(d.margin));
                    d = g.meta.labelSize;
                    v.addVertex(a._i, {
                        width: d[0],
                        height: d[1],
                        margin: h,
                        _i: e
                    });
                    y[a._i] = a.orgLayer;
                    a = f.getParents(a);
                    c.jsLib.each(a, function(a) {
                        a = a._i;
                        var b = e;
                        r && (b = P([b, a], 2),
                        a = b[0],
                        b = b[1]);
                        v.addEdge(a, b)
                    });
                    !l && f.clearPrevCoord(k.getValue("coordinates", e));
                    m.indexer.setValue("coordinates", e, g)
                });
                u = new jb;
                u.vertexWidth(function(a) {
                    return a.d.width
                }).vertexHeight(function(a) {
                    return a.d.height
                }).vertexTopMargin(function(a) {
                    return a.d.margin[0]
                }).vertexRightMargin(function(a) {
                    return a.d.margin[1]
                }).vertexBottomMargin(function(a) {
                    return a.d.margin[2]
                }).vertexLeftMargin(function(a) {
                    return a.d.margin[3]
                }).layerMargin(5).layerMargin(5).layerAssignment(function(a) {
                    return y
                }).ltor("right" == e || "left" == e);
                var z = u.layout(v);
                n(z.edges);
                this.coordinates = {
                    line: w
                };
                var G = [];
                m.points().each(function(a) {
                    var e = a._i;
                    a = z.vertices[a._i];
                    m.getPointAttr(t[e]);
                    g = m.indexer.getValue("coordinates", e);
                    e = g.meta.labelSize;
                    e = [a.x - e[0] / 2, a.y - e[1] / 2, e[0], e[1]];
                    G.push(e);
                    g.xyz = e
                });
                p = c.bboxLib.pad(c.bboxLib.bboxUnion(G), -p);
                u = c.bboxLib.center(p);
                a = c.bboxLib.fromRect(a);
                var C = c.bboxLib.center(a);
                u = f._coordOffset = [C[0] - u[0], C[1] - u[1]];
                p = c.bboxLib.translate(p, u);
                C = void 0;
                "down" == e ? 0 > p[1] && (u[1] -= p[1],
                p = c.bboxLib.translate(p, [0, -p[1]])) : "right" === e ? 0 > p[0] && (u[0] -= p[0],
                p = c.bboxLib.translate(p, [-p[0], -p[1]])) : "left" === e ? 0 > (C = c.bboxLib.rightX(a) - c.bboxLib.rightX(p)) && (u[0] += C,
                p = c.bboxLib.translate(p, [C, 0])) : "up" === e && 0 > (C = c.bboxLib.bottomY(a) - c.bboxLib.bottomY(p)) && (u[1] += C,
                p = c.bboxLib.translate(p, [0, C]));
                f.applyBoundsToAxes(p, a);
                f.renderOrder = k.sortByNone();
                f.renderOrderRev = f.renderOrder.slice(0);
                f.renderOrderRev.reverse()
            }
            return this
        }
        ;
        b.prototype.haloPath = function(a, e) {
            var b = this.series, f, m = a.visuals.body;
            if ((m = m && m.rootPanel) && (f = c.jsLib.evalPath(m, "rect.d"))) {
                a = b.chartArea.rootVisuals.dataContent;
                var g = m.globalX - a.globalX
                  , k = m.globalY - a.globalY;
                return Lb(c.pathLib.fromString(f), function(a) {
                    return [a[0] + g, a[1] + k]
                }).toString()
            }
            return d.prototype.haloPath.call(this, a, e)
        }
        ;
        b.prototype.render = function(a) {
            var e = this.series
              , b = this
              , f = e.rootVisuals
              , d = e.renderer
              , g = e.visuals;
            e.preRender(a);
            var k = e.info.style;
            var l = b._dragOffset
              , n = b._coordOffset.slice(0);
            n = c.bboxLib.translate(n, l);
            d = d.renderer;
            if (b.paths.lines || b.coordinates) {
                f = f.line;
                l = void 0;
                l = b.paths.lines ? b.paths.lines.join(" ").replace(/,/g, " ") : c.shapeLib.multiLineToPath(b.coordinates.line).join(" ");
                l = c.pathLib.fromString(l).translate(function(a) {
                    return c.bboxLib.translate(a, n)
                });
                var p = {
                    d: l,
                    zIndex: e.zIndex + c.consts.zIndexReference.series
                };
                p = b.render_applyDynamicAttrVals([p, k.attr.line], a, k.attr.line);
                (k = g.line) ? k.attr(p) : (g.line = k = d.path(p),
                k.add(f))
            }
            var q = e.points().items, t;
            d = function(h, f) {
                t = q[b.renderOrder[h]];
                var d = t.currentOptions;
                h = (h = d.annotation) && h.asHTML;
                var g = e.indexer.getValue("coordinates", t._i) || {
                    meta: {}
                }
                  , m = e.getPointAttr(d);
                f = t.visuals;
                d = m.pointAttr[d.selected ? c.consts.SELECT_STATE : t._state || c.consts.NORMAL_STATE];
                var k = c.bboxLib.translate(g.xyz, n);
                g.hitTest = function(a, e) {
                    return c.bboxLib.pointInside(k, [a, e])
                }
                ;
                g.pathD = c.bboxLib.toPath(k);
                g.shapeBounds = k.slice(0);
                g = {};
                g[h ? "left" : "offsetX"] = h ? k[0] + "px" : k[0];
                g[h ? "top" : "offsetY"] = h ? k[1] + "px" : k[1];
                p = b.render_applyDynamicAttrVals([p, d, g], b._initialPosSet ? a : !1, d);
                f.body.rootPanel.attr(p);
                b.hideUnusedPointVisuals(t)
            }
            ;
            g = 0;
            for (k = q.length; g < k; g++)
                d(g, k);
            b._initialPosSet = !0;
            b.hideUnused();
            return b
        }
        ;
        b.prototype.initPointLabel = function(a, e, b) {
            var h = this.series;
            e = e.meta;
            var d = a.visuals
              , g = h.rootVisuals.points
              , k = h.chart.options("defaultAnnotation");
            k = c.jsLib.merge({}, k);
            var l = a.options("annotation");
            l && c.jsLib.merge(k, l);
            e.labelSize || (g.attr({
                autoWrap: "none"
            }),
            l = c.jsLib.evalPath(a.currentOptions, "annotation.label.text") || c.jsLib.evalPath(a.currentOptions, "label.text") || h.info.labelTextInfo.label,
            "function" === c.jsLib.getValType(l) && (l = l(a)),
            l = a.replaceTokens(l),
            e.labelText = l,
            k = c.jsLib.merge({}, k, {
                label: b.label
            }, {
                label: {
                    text: l
                }
            }, {
                animation: {
                    duration: 0
                }
            }),
            b = k.asHTML,
            k.margin = 0,
            (a = d.body) ? a.options(k) : (a = d.body = (new c.Annotation(h.chart,k,g)).add(g),
            b ? a.rootPanel.attr({
                pointerEvents: "none"
            }) : !1 === c.jsLib.evalPath(k, "label.autoWrap") ? a.rootVisuals.content.attr({
                autoWrap: "none"
            }) : a.rootVisuals.content.attr({
                autoWrap: "golden"
            })),
            h = a.rootPanel,
            h.attr({
                autoWrap: "none",
                width: c.undefVal,
                height: c.undefVal
            }),
            d = (b ? h : h.setPreliminarySize(!0)).getBbox(),
            d = [d.width, d.height],
            h.attr({
                autoWrap: "none",
                width: d[0],
                height: d[1]
            }),
            e.labelSize = d,
            (b ? a.target : h).refresh());
            return this
        }
        ;
        b.prototype.hideUnusedPointVisuals = function(a) {
            var e = a.visuals;
            c.hideVisual(e.rect);
            !a.series.options("forceMarker") && c.hideVisual(e.marker);
            c.hideVisual(e.marker);
            c.hideVisual(e.labelConnector)
        }
        ;
        b.prototype.hideUnused = function() {
            var a = this.series
              , e = a.visuals;
            !a.info.type.drawArea && e.area && this.hideVisual(e.area);
            return this
        }
        ;
        return b
    }(kb)
      , Pb = function(d, b, a, e, h) {
        void 0 === h && (h = 5);
        var f = Math.PI / 2
          , m = a[1] / 2 + h
          , g = a[0] / 2 + h
          , k = b.cxy;
        h = b.start;
        var l = b.end
          , n = b.innerR
          , p = b.r
          , q = c.trigLib.toDegrees((h + l) / 2)
          , t = c.trigLib.toRadians(q)
          , r = {
            outleft: {
                aA: h,
                aCxyA: h - f
            },
            inleft: {
                aA: h,
                aCxyA: h + f
            },
            inright: {
                aA: l,
                aCxyA: l - f
            },
            outright: {
                aA: l,
                aCxyA: l + f
            }
        }
          , v = {
            outtop: function() {
                return p + m
            },
            outbottom: function() {
                return n - m
            },
            intop: function() {
                return p - m
            },
            inbottom: function() {
                return n + m
            },
            inmiddle: function() {
                return (n + p) / 2
            }
        };
        return c.jsLib.map(d, function(b) {
            var h = b.align;
            var f = v[b.vAlign]();
            if ("incenter" === h)
                f = {
                    cxy: c.trigLib.gpp(k, t, f),
                    angle: q,
                    size: a
                };
            else {
                h = r[h];
                var d = c.trigLib.gpp(k, h.aA, f);
                h = c.trigLib.gpp(d, h.aCxyA, g);
                d = c.trigLib.angleOfPoints(k, h);
                h = c.trigLib.gpdp(k, d, f);
                f = {
                    cxy: h,
                    angle: d,
                    size: a
                }
            }
            f.angle = c.trigLib.ensureUprightText(f.angle - (e ? 0 : 90));
            f.alignment = b;
            return f
        })
    }
      , Qb = [.9, 0]
      , Rb = [0, 0]
      , Oc = function(d) {
        function b(a, e, b) {
            return d.call(this, a, e, b) || this
        }
        F(b, d);
        b.prototype.measure = function(a) {
            var e = this.rootVisuals;
            if (this.viewState && !1 !== this.isVisible) {
                if (e.label.rootPanel.calculateMargin(),
                a && (a.pop && (a = this.viewState.caRect = {
                    x: 0,
                    y: 0,
                    width: a[0],
                    height: a[1]
                }),
                a)) {
                    this.viewState.caRect = a;
                    e = c.bboxLib.fromRect(a);
                    a = this.measure_ticks(a);
                    this.tickBounds = a.slice(0);
                    var b = "caPaneRadar" === this.chartArea.kind;
                    return this.isHoriz || b ? (e = Ca(e, a, !0),
                    this.overflowSize = {
                        tL: [e[0], e[3]],
                        bR: [e[2], e[1]],
                        margins: e
                    },
                    a ? a : void 0) : [0, 0, 0, 0]
                }
            } else if (!1 === this.isVisible)
                return this._sizeMetrics.length = this.isHoriz ? a[0] : a[1],
                [0, 0, 0, 0]
        }
        ;
        b.prototype.init = function() {
            for (var a = [], e = 0; e < arguments.length; e++)
                a[e] = arguments[e];
            d.prototype.init.apply(this, H(a));
            P(a, 3);
            this.defaultContextOptions = {};
            this.isRadial = !0
        }
        ;
        b.prototype.measure_ticks = function(a) {
            var e = this
              , b = this.viewState
              , f = []
              , d = []
              , g = []
              , k = []
              , l = [];
            a = a || b.caRect;
            this.chartArea.angleArc();
            var n = this.isHoriz ? function(a, e) {
                return (e && a.rotated ? a.rotated[3] : a.textSize[1]) + a.tickLength + a.tickPadding || 0
            }
            : function(a, e) {
                return (e && a.rotated ? a.rotated[2] : a.textSize[0]) + a.tickLength + a.tickPadding || 0
            }
            ;
            c.jsLib.evalPath(this.currentOptions, "defaultTick.label.rotate");
            var p = [];
            if (b && !1 !== this.isVisible)
                return this.setTicks(b).setAttribs(),
                b = this._ticks,
                b.length && (c.jsLib.each(b, function(a) {
                    a.invalid ? ta(e, a) : (a = a.metrics(),
                    d.push(a.textSize[0]),
                    g.push(a.textSize[1]),
                    k.push(n(a)))
                }),
                p = d.length ? [Math.max.apply(Math, H(d)), Math.max.apply(Math, H(g))] : [0, 0],
                c.jsLib.each(b, function(a, b) {
                    a.invalid || (ta(e, a),
                    f.push(a._bbox),
                    l.push(a._positionData.rLength))
                }),
                b = Math.max.apply(Math, H(k)),
                this.tickMetricsData = {
                    maxTextSize: p,
                    maxLength: b,
                    maxRadiusLen: Math.max.apply(Math, H(l)),
                    maxLengthAll: b
                },
                a = (a.width - a.height) / 2,
                p = c.bboxLib.bboxUnion(f) || [0, 0, 0, 0],
                p[0] -= 0 > a ? a : 0,
                p[1] += 0 < a ? a : 0),
                p
        }
        ;
        b.prototype.setTicks = function(a) {
            d.prototype.setTicks.call(this, a);
            var e = this.chartArea.angleArc();
            a = this._ticks;
            if (360 === Math.abs(e.end - e.start) && this.isHoriz && a.length) {
                e = a[0];
                var b = a[a.length - 1];
                ta(this, e);
                ta(this, b);
                c.trigLib.normalizeAngle(e._metrics.angle) === c.trigLib.normalizeAngle(b._metrics.angle) && a.shift()
            }
            return this
        }
        ;
        b.prototype.valToAngle = function(a, e) {
            void 0 === e && (e = this.viewState);
            var b = this.chartArea;
            if (this.isRadial && this.isHoriz) {
                var f = b.angleArc();
                return c.jsLib.mapDeep(a, function(a) {
                    a = e.valToLin(a);
                    return c.mathLib.mapValue(f.start, f.end, 0, 1, a)
                })
            }
        }
        ;
        b.prototype.adjustRange = function() {
            var a = this;
            if (!a.syncAxis && !a.isZoomed) {
                var e = function(e) {
                    return c.jsLib.evalPath(a.userOptions, "scale.range." + e)
                }
                  , b = e("min")
                  , f = e("max");
                e = e("padding");
                if (!c.jsLib.def(e) && a.isRadial && a.isHoriz && "x" === a.prefix) {
                    e = a.range;
                    var m = 0;
                    "category" === a.type && (m = a.shortestValDistance / 2);
                    e.min = c.jsLib.def(b) ? b : a.min - m;
                    e.max = c.jsLib.def(f) ? f : a.max + m;
                    a.unZoomedRange = {
                        min: e.min,
                        max: e.max
                    }
                } else
                    d.prototype.adjustRange.call(this)
            }
            return this
        }
        ;
        b.prototype.getLinePath = function(a) {
            var e = this.chartArea;
            a = this.sideIndex();
            a = 0 === a || 1 === a;
            e = e.angleArc();
            var b = this.interpolationAxis;
            return this.isHoriz || 360 > e.end - e.start ? b.getCaPath(b.posToVal(a ? 1 : 0)) : "M0 0"
        }
        ;
        b.prototype.getCaPath = function(a, e, b, f) {
            void 0 === b && (b = this.viewState);
            void 0 === f && (f = 1);
            var h = this
              , d = b.chartArea
              , k = c.jsLib.def(a.pop);
            if ("object" === typeof f) {
                var l = f;
                f = c.jsLib.pick(l.lineWidth, 1);
                var n = l.forMarker
            }
            l = function(a, e, b, h, f, d, g) {
                void 0 === g && (g = !0);
                return c.shapeLib.flattenD(c.shapeLib.arc(a, e, 2 * b, 2 * b, {
                    start: c.trigLib.toRadians(f),
                    end: c.trigLib.toRadians(d),
                    open: g,
                    r: b,
                    innerR: h
                }))
            }
            ;
            var p = d.getShapeOptions()
              , q = c.bboxLib.fromRect(b.caRect || b.chartArea.contentRect || b.chartArea.innerRect)
              , t = c.bboxLib.center(q)
              , r = q[2] / 2
              , v = p.innerSize ? p.innerSize * r : 0;
            p = d.angleArc();
            var u = b.valToLin;
            n && h.isHoriz && "caPaneGauge" === d.kind && d.hasNeedles && (v = r - (h.options("defaultTick.line.length") || 10));
            n = function(a, e, b) {
                void 0 === b && (b = !1);
                if (b)
                    return c.shapeLib.flattenD(c.shapeLib.pointsToPath(a)) + "Z" + c.shapeLib.flattenD(c.shapeLib.pointsToPath(e)) + "Z";
                e.reverse();
                a.push.apply(a, H(e));
                return c.shapeLib.flattenD(c.shapeLib.pointsToPath(a)) + "Z"
            }
            ;
            q = d.getRadarType();
            if (!h.isHoriz) {
                if ("polar" === q) {
                    f = function(a) {
                        return c.mathLib.mapValue(v, r, 1, 0, u(a))
                    }
                    ;
                    if (a.pop) {
                        b = f(a[0]);
                        var w = f(a[1]);
                        w > b && (f = P([w, b], 2),
                        b = f[0],
                        w = f[1])
                    } else
                        b = f(a);
                    return l(t[0], t[1], b, w, p.start, p.end, !a.pop)
                }
                if (k)
                    return l = this.getCaPoints(a[0], c.undefVal, b, f),
                    a = this.getCaPoints(a[1], c.undefVal, b, f),
                    n(l, a, !0)
            } else if (h.isHoriz) {
                w = function(a) {
                    a = h.valToAngle(a);
                    return [c.trigLib.gpdp(t, a, v), c.trigLib.gpdp(t, a, r)]
                }
                ;
                e = h.getTicksPos();
                if (k) {
                    if ("polar" === q)
                        return b = c.jsLib.sortBy([h.valToAngle(a[0]), h.valToAngle(a[1])]),
                        l(t[0], t[1], r, v, b[0], b[1], !a.pop);
                    l = h.getTicksPos();
                    var x = [u(a[0]), u(a[1])]
                      , y = d.projection.webVal2linxy;
                    l = c.jsLib.filter(l, function(a) {
                        return a > x[0] && a < x[1]
                    });
                    l.push.apply(l, H(x));
                    l = c.jsLib.sortedUniq(c.jsLib.sortBy(l));
                    var z = [];
                    c.jsLib.each(l, function(a) {
                        z.push(y(a, 0))
                    });
                    l.reverse();
                    c.jsLib.each(l, function(a) {
                        z.push(y(a, 1))
                    });
                    return c.shapeLib.pointsToPath(z).join(" ") + "Z"
                }
                l = u(a);
                if (-1 < e.indexOf(l))
                    return c.shapeLib.pointsToPath(w(a)).join(" ");
                a = this.getCaPoints(a, c.undefVal, b, f);
                return c.shapeLib.pointsToPath(a).join(" ")
            }
            a = this.getCaPoints(a, e, b, f);
            return c.shapeLib.pointsToPath(a).join(" ") + (k || this.isRadial ? "Z" : "")
        }
        ;
        b.prototype.getCaLen = function(a, e) {
            void 0 === e && (e = this.viewState);
            var b = e.caRect || e.chartArea.contentRect
              , f = e.valToLin;
            f = f(a);
            return this.isRadial && !this.isHoriz ? (a = b.width / 2,
            e = this.chartArea.getShapeOptions(),
            e = c.jsLib.pick(c.jsLib.evalPath(e, "innerSize"), 0) * a,
            c.mathLib.mapValue(e, a, 1, 0, f)) : d.prototype.getCaLen.call(this, a, e)
        }
        ;
        b.prototype.clusterWidth = function() {
            var a = this.chartArea
              , e = this.viewState;
            if (!this.isHoriz)
                return e = e.caRect || e.chartArea.contentRect || e.chartArea.innerRect,
                a = a.getShapeOptions(),
                e = c.bboxLib.fromRect(e)[2] / 2,
                a = e - (a.innerSize ? a.innerSize * e : 0),
                c.jsLib.pick(this.options("staticColumnWidth"), this.getShortestDistPerc() * a * (1 - this.options("spacingPercentage")))
        }
        ;
        b.prototype.render_line = function(a, e) {
            void 0 === e && (e = {});
            var b = this.rootVisuals.line
              , f = this.currentOptions.line
              , m = this.chartArea
              , g = c.bboxLib.fromRect(a)
              , k = c.bboxLib.center(g);
            if (this.isHoriz) {
                e = c.stylingLib.lineToAttr(f);
                var l = f.breaks
                  , n = "caPaneRadar" === m.kind && "spider" === m.getRadarType();
                !l && n ? (b = this.renderer,
                this.rootVisuals.line.destroy(),
                b = this.rootVisuals.line = b.renderer.element("path").add(this.rootVisuals.main),
                e.d = this.getLinePath(a)) : (a = k[0] - g[0],
                g = e["stroke-width"],
                l && (e.breaks = c.jsLib.merge(c.jsLib.copy(l), {
                    intervals: c.jsLib.sortBy(this.getTicksPos())
                })),
                m = m.angleArc(),
                e.start = c.trigLib.toRadians(m.start),
                e.end = c.trigLib.toRadians(m.end),
                e.r = a + g / 2,
                e.cxy = k,
                e.innerR = a - g / 2,
                e.caps = {
                    start: "round",
                    end: "round"
                },
                e.fill = e.stroke,
                e.shading = "solid",
                f = f.color,
                -1 < f.toLowerCase().indexOf("smartpalette") && (f = f.split(/:/gi),
                f = this.chart.getSmartPalette(1 < f.length ? f[1] : this.chart.palette)) && (f = f.getTraditionalStops(),
                this.isInverted() || (f = c.jsLib.map(f, function(a) {
                    return [1 - a[0], a[1], a[2]]
                }),
                f = c.jsLib.sortBy(f, function(a) {
                    return a[0]
                })),
                e.fill = {
                    stops: f
                }),
                e.stroke = c.undefVal,
                e["stroke-width"] = c.undefVal);
                b.attr(e)
            } else
                d.prototype.render_line.call(this, a, e)
        }
        ;
        b.prototype.setRootVisuals = function() {
            if (!this.rootVisuals && !1 !== this.options("visible")) {
                var a = this.renderer;
                d.prototype.setRootVisuals.call(this);
                this.isHoriz && (this.rootVisuals.line.destroy(),
                this.rootVisuals.line = a.renderer.element("arcShape").add(this.rootVisuals.main))
            }
            return this
        }
        ;
        return b
    }(c.Axis)
      , mb = c.jsLib.plainArray(["padding", "margin"])
      , Oa = function() {
        return {
            spacingPercentage: .1,
            visible: !0,
            line: {
                width: 0
            },
            defaultTick: {
                label: {
                    visible: !1
                },
                gridLine: {
                    color: "#d9d9d9",
                    width: "column",
                    visible: !0
                },
                line: {
                    length: 0
                }
            },
            alternateGridFill: "none"
        }
    }
      , nb = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "caPaneAx";
            return a
        }
        F(b, d);
        b.prototype.eachAxis = function(a) {
            this.xAxis && a(this.xAxis);
            this.yAxis && a(this.yAxis);
            return this
        }
        ;
        b.prototype.xAxisDefaults = function(a) {
            var e = Oa();
            "category" !== a.type && c.jsLib.setPathVal(e, "defaultTick.gridLine.width", 0);
            return e
        }
        ;
        b.prototype.yAxisDefaults = function() {
            return Oa()
        }
        ;
        b.prototype.populateAxisPanels = function(a) {}
        ;
        b.prototype.setAxes = function() {
            var a = this._series[0].xAxis
              , e = this._series[0].yAxis
              , b = !!this.xAxis
              , f = !!this.yAxis
              , d = bb(a.userOptions, this.xAxisDefaults(a));
            var g = "caPaneRadar" === this.kind || "caPaneGauge" === this.kind || "caPaneRadial" === this.kind ? Oc : c.Axis;
            var k = this.xAxis = this.xAxis || new g(this,c.jsLib.omit(d, "id"),"x");
            k.parentAxis = a;
            b ? k.options(d, !1) : a.childAxes.push(k);
            k.chartArea = this;
            b = bb(e.userOptions, this.yAxisDefaults());
            g = this.yAxis = this.yAxis || new g(this,c.jsLib.omit(b, "id"),"y");
            g.parentAxis = e;
            f ? g.options(b, !1) : e.childAxes.push(g);
            !f && e.childAxes.push(g);
            g.chartArea = this;
            g.setRootVisuals();
            f = function(a, e, b) {
                b = b.split(",");
                c.jsLib.each(b, function(b) {
                    a[b] = e[b]
                })
            }
            ;
            f(k, a, "clusterCounts,type,dataType,dataPositions,range,min,max,shortestValDistance,shortestPercDistance");
            (function(a, e, b) {
                b = b.split(",");
                c.jsLib.each(b, function(b) {
                    a[b] = e[b] ? e[b].slice(0) : []
                })
            }
            )(k, a, "catList,data");
            k.range || c.jsLib.merge(k, {
                range: {
                    min: -.012,
                    max: .012,
                    range: .4
                },
                min: 0,
                max: 0,
                data: [0],
                shortestPercDistance: 1.66,
                shortestValDistance: 1,
                dataType: "number"
            });
            k.adjustRange();
            k.setViewState(!0);
            f(g, e, "noData,dataSortedUniq,type,dataType,dataPositions,range,min,max");
            g.setRange();
            g.setViewState(!0);
            this._axes = [k, g];
            return this
        }
        ;
        b.prototype.renderAxes = function(a, e) {
            this.eachAxis(function(b) {
                b.interpolationAxis && b.interpolationAxis.measure(a);
                b.render(a).renderOnCa(a, e)
            });
            return this
        }
        ;
        return b
    }(function(d) {
        function b(a, e) {
            var b = d.call(this, a.chartArea.chart, {}) || this;
            b.caPanes = a;
            b.kind = "caPane";
            b.labelBoxes = {
                inside: [],
                outside: []
            };
            b._axes = [];
            b.renderRect = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                borderWidth: 0
            };
            b.shapeSize = {};
            b._metrics = {
                renderBox: [0, 0, 0, 0],
                tickBounds: [0, 0, 0, 0],
                clipBounds: [0, 0, 0, 0],
                shapeBounds: [0, 0, 0, 0],
                availableBounds: c.undefVal,
                labelBoxes: {}
            };
            b._series = e;
            b.hash = e.hash;
            b.chartArea = a.chartArea;
            b.ctm = b.chartArea.ctManager;
            b.collisionManager = new c.CollisionManager(b);
            c.jsLib.each(b._series, function(a) {
                a.setPane(b)
            });
            b.initFP();
            return b
        }
        F(b, d);
        b.prototype.getAxisMarkerVisualTargets = function() {
            var a = this.rootVisuals;
            return {
                behind: a.axisMarkersBehind,
                front: a.axisMarkersFront
            }
        }
        ;
        b.prototype.setProjection = function(a) {}
        ;
        b.prototype.getShapeOptions = function(a) {
            return c.getShapeOptions(this._currentOptions.ca, a || this.chartArea.renderRect)
        }
        ;
        b.prototype.update = function(a) {
            var e = this;
            e._series = a;
            e.hash = a.hash;
            c.jsLib.each(e._series, function(a) {
                a.setPane(e)
            });
            e.initShapeItems();
            return e
        }
        ;
        b.prototype.initFP = function() {
            var a = this;
            this.axes = c.collectionPropFactory(c.AxisCollectionWrapper, function() {
                return a._axes
            }, function(a) {})
        }
        ;
        b.prototype.xAxisDefaults = function(a) {
            return {}
        }
        ;
        b.prototype.getGlobalOffsets = function() {
            if (!this.globalOffsets) {
                var a = this.rootVisuals.content.getGlobalBbox()
                  , e = this.caPanes.rootPanel.parent.getGlobalBbox();
                this.globalOffsets = {
                    x: a.x - e.x,
                    y: a.y - e.y
                }
            }
            return this.globalOffsets
        }
        ;
        b.prototype.measure = function(a) {
            this.setRect(a);
            var e = this.rootVisuals.rootStack.getBboxArray();
            e[0] = a.x + e[0];
            e[1] = a.y + e[1];
            return {
                limits: this.getShapeOptions().size,
                outerBox: e,
                innerSize: this.insideInnerRootSize
            }
        }
        ;
        b.prototype.setRect = function(a) {
            this.rect = c.jsLib.copy(a);
            this.box = c.bboxLib.fromRect(a);
            this.measureWrapper()
        }
        ;
        b.prototype.adjustByShapeOptions = function(a) {
            var e = this.getShapeOptions();
            a = a.slice(0);
            var b = e.size;
            b && (c.jsLib.def(b[0]) && c.jsLib.def(b[1]) ? a = c.bboxLib.setSize(a, b) : c.jsLib.def(b[0]) && (b = Math.max(a[2], a[3]) / b[0],
            a = c.bboxLib.setSize(a, [a[2] / b, a[3] / b])));
            if (b = e.cxy)
                a = c.bboxLib.fromCenter(b, a.slice(2)),
                this.hasUserLayout = !0;
            return a
        }
        ;
        b.prototype.renderData = function(a, e) {
            var b = this
              , f = {
                x: 0,
                y: 0
            };
            c.jsLib.extend(f, {
                width: a[0],
                height: a[1]
            });
            var d = c.stylingLib.boxToAttr(b._currentOptions.ca);
            d = d.stroke && c.jsLib.has(d.stroke, "stroke-width") ? d.stroke["stroke-width"] : 1;
            f = b.measureRenderRect(c.rectLib.padBox(f, d / 2));
            var g = b.renderRect = f.renderRect;
            f = f.clipPath;
            b.contentRect = g;
            b.insideInnerRootSize = a;
            b.setProjection();
            b.renderAxes(g, e);
            f && b.renderCaClip(f);
            b.collisionManager.reset();
            b.eachSeries(function(a) {
                return b.renderSerie(a, g, e)
            });
            b.eachSeries(function(a) {
                return b.renderSerieLabels(a, g, e)
            });
            b.renderExtras();
            return b
        }
        ;
        b.prototype.renderSerie = function(a, b, h) {
            a.renderRect = b;
            a.pointBodyDGenerator = ab;
            b = c.jsLib.merge({
                rect: a.axisRect
            }, h);
            a.userPoints.length && a.visualizer.render(b)
        }
        ;
        b.prototype.renderSerieLabels = function(a, b, h) {
            a.renderRect = b;
            a.pointBodyDGenerator = ab;
            b = c.jsLib.merge({
                rect: a.axisRect
            }, h);
            a.userPoints.length && a.visualizer.renderLabels(b)
        }
        ;
        b.prototype.postArrange = function() {
            var a = this._metrics;
            this.alignLabels();
            if (!this.hasUserLayout && "caPaneLinear" !== this.kind) {
                var b = (a.labelBoxes.all || []).slice(0);
                b.push.apply(b, H([a.shapeBounds]));
                b = c.bboxLib.bboxUnion(b);
                b = c.bboxLib.offsetBetween(c.bboxLib.center(a.availableBounds), c.bboxLib.center(b));
                a = this.rootPanel;
                b = {
                    offsetX: a.attr("offsetX") + b[0],
                    offsetY: a.attr("offsetY") + b[1]
                };
                var h = this._currentOptions.ca.offset;
                if (h) {
                    h = P(h.split(","), 2);
                    var f = h[1];
                    b.offsetX += parseInt(h[0]) || 0;
                    b.offsetY += parseInt(f) || 0
                }
                a.attr(b)
            }
            return this
        }
        ;
        b.prototype.measureRenderRect = function(a) {
            return {
                renderRect: a,
                clipPath: this.clipPath(a)
            }
        }
        ;
        b.prototype.renderCaClip = function(a) {
            var b = this.rootVisuals
              , h = this.rootVisuals.content
              , f = this._currentOptions.ca
              , d = c.stylingLib.boxToAttr(f);
            !1 !== f.clip && h.attr({
                clipPath: a,
                shadow: f.shadow
            });
            b.contentStroke && b.contentStroke.attr(c.jsLib.merge({
                d: a,
                fill: c.jsLib.evalPath(d, "fill.fill") || "none"
            }, c.jsLib.omit(d.stroke, "fill")));
            return this
        }
        ;
        b.prototype.clipPath = function(a) {
            return null
        }
        ;
        b.prototype.toGaugeSize = function(a) {
            a = Math.min(a[0], a[1]);
            return [a, a]
        }
        ;
        b.prototype.getSize = function(a) {
            return [this.box[2], this.box[3]]
        }
        ;
        b.prototype.defaultShapeOptions = function() {
            return {
                fill: "none",
                outline: {
                    color: "none"
                },
                ca: {
                    clip: !1,
                    outline: {
                        color: "#A0A0A0",
                        width: 0
                    }
                },
                padding: .1,
                margin: 5
            }
        }
        ;
        b.prototype.normalizeShapeOptions = function(a) {
            return {
                padding: a.padding,
                label: a.label,
                outline: a.outline,
                ca: a,
                fill: "none"
            }
        }
        ;
        b.prototype.initShapeItems = function() {
            var a = this
              , b = 1 === a._series.length ? a._series[0] : c.undefVal
              , h = a.rootVisuals;
            var f = c.jsLib.copy(a.chart.options("defaultSeries.shape") || {});
            b && c.jsLib.merge(f, b.options("shape"));
            a._currentOptions = c.jsLib.merge(a._currentOptions || a.defaultShapeOptions(), a.normalizeShapeOptions(f));
            if (f = a._currentOptions.label)
                0 < f.length ? (a.destroyShapeLabels(),
                c.jsLib.each(f, function(e) {
                    return a.setShapeLabel(e, b)
                })) : f.text && (h = h.label.childElements,
                1 !== h.length || h[0].textAttr !== f.text) && (a.destroyShapeLabels(),
                a.setShapeLabel(f, b));
            a.setAxes();
            return this
        }
        ;
        b.prototype.destroyShapeLabels = function() {
            for (var a = this.rootVisuals.label.childElements; a.length; )
                a[0].destroy()
        }
        ;
        b.prototype.alignLabels = function() {
            var a = this
              , b = a.rootVisuals.label.childElements;
            if (b.length) {
                var h = a._currentOptions.label
                  , f = a._metrics
                  , d = 0 < h.length ? h : [h];
                h = a.getShapeOptions();
                var g = {
                    top: "bottom",
                    bottom: "top"
                }
                  , k = c.bboxLib.fromRect(a.chartArea.renderRect);
                var l = ca(a.caPanes.rootPanel);
                var n = ca(a.rootVisuals.label)
                  , p = ca(a.chartArea.rootVisuals.content)
                  , q = c.bboxLib.offsetBetween(l, n);
                l = c.bboxLib.offsetBetween(p, l);
                n = 0;
                if (a.isRadial) {
                    var t = a.angleArc();
                    n = t.end - t.start
                }
                k = c.bboxLib.pad(c.bboxLib.translate(k, l), -2);
                if (f.clipBounds[3]) {
                    l = f.clipBounds;
                    l = c.bboxLib.toLTRB(f.clipBounds);
                    var r = f.renderBox.slice(0);
                    var v = c.bboxLib.toLTRB(f.shapeBounds);
                    l = [l[0], v[1], l[2], v[3]];
                    l = c.bboxLib.fromLTRB(l);
                    a.isRadial && (a.hasNeedles ? (f = c.trigLib.gpdp(c.bboxLib.center(r), t.start + n / 2, r[2] / 4),
                    r = c.bboxLib.fromCenter(f, [r[2] / 3, r[2] / 3])) : (r = c.bboxLib.pad(r, (1 - h.innerSize) * l[2] / 2),
                    200 < n && (r = c.bboxLib.fromCenter(c.bboxLib.center(f.clipBounds), r.slice(2))),
                    r = c.bboxLib.clip(r, f.shapeBounds)))
                } else
                    l = a.rootVisuals.innerBox.getBboxArray();
                var u;
                f = function(e, h) {
                    var f = {
                        all: [],
                        top: [],
                        middle: [],
                        bottom: [],
                        userOffsets: []
                    };
                    u = !1;
                    c.jsLib.each(d, function(d, m) {
                        m = b[m];
                        var k = d.align || "center"
                          , l = (d.verticalAlign || "top").toLowerCase()
                          , n = (g[l] || l).toLowerCase()
                          , p = "middle" === l
                          , q = p ? h : e;
                        if (d.text.match(/<br\/?>/gi))
                            p = m.setPreliminarySize(!0).getBboxArray();
                        else {
                            m.attr({
                                maxWidth: c.undefVal
                            });
                            var r = m.setPreliminarySize(!0).getBboxArray();
                            m.attr({
                                maxWidth: p ? q[2] : a.chartArea.renderRect.width
                            });
                            p = m.setPreliminarySize(!0).getBboxArray();
                            p[2] < r[2] && (u = !0)
                        }
                        q = c.bboxLib.alignTo(p, q, k, k, n, l);
                        d = d.offset && c.stylingLib.offsetToAttr(d.offset) || [0, 0];
                        q = c.bboxLib.translate(q, d);
                        f.all.push(q);
                        f.userOffsets.push(d);
                        f[l].push(q);
                        m.attr({
                            offsetX: q[0] + d[0],
                            offsetY: q[1] + d[1],
                            yContentAlignment: n,
                            xContentAlignment: k
                        })
                    });
                    return f
                }
                ;
                t = f(l, r);
                if (c.bboxLib.collideAny(t.all) || u) {
                    if (u && !w) {
                        l = c.bboxLib.fromLTRB(v);
                        var w = !0;
                        t = f(l, r)
                    }
                    h = c.bboxLib.collideAny(t.top);
                    n = c.bboxLib.collideAny(t.bottom);
                    if (h || n)
                        w || (l = c.bboxLib.fromLTRB(v),
                        w = !0,
                        t = f(l, r),
                        h = c.bboxLib.collideAny(t.top),
                        n = c.bboxLib.collideAny(t.bottom)),
                        h && c.bboxLib.unsquishSnapTo(t.top, l, "r"),
                        n && c.bboxLib.unsquishSnapTo(t.bottom, l, "r");
                    c.bboxLib.collideAny(t.middle) && c.bboxLib.unsquishSnapTo(t.middle, r, "d")
                }
                (function(a) {
                    var b = function(a) {
                        var b;
                        if (a.length) {
                            var e = c.bboxLib.bboxUnion(a)
                              , h = c.bboxLib.snapInside(e, k);
                            e = c.bboxLib.offsetBetween(h, e);
                            try {
                                for (var f = A(a), d = f.next(); !d.done; d = f.next())
                                    c.bboxLib.translateRef(d.value, e)
                            } catch (L) {
                                var g = {
                                    error: L
                                }
                            } finally {
                                try {
                                    d && !d.done && (b = f.return) && b.call(f)
                                } finally {
                                    if (g)
                                        throw g.error;
                                }
                            }
                        }
                    };
                    b(a.top);
                    b(a.bottom);
                    b(a.middle)
                }
                )(t);
                (function(a) {
                    c.jsLib.each(d, function(e, c) {
                        e = a[c];
                        b[c].attr({
                            offsetX: e[0] + q[0],
                            offsetY: e[1] + q[1]
                        })
                    })
                }
                )(t.all);
                a._metrics.labelBoxes = t
            }
        }
        ;
        b.prototype.setShapeLabel = function(a, b) {
            var e = this, f = e.rootVisuals, d, g = e.renderer;
            if (d = c.jsLib.evalPath(a, "text")) {
                "function" === c.jsLib.getValType(d) && (d = d(this._series));
                b && (d = b.replaceTokens(d));
                b = c.stylingLib.labelToAttr(c.jsLib.extend({}, a));
                b.autoWrap = "none";
                b.val = d;
                c.jsLib.defaults(b, {
                    xAlignment: "center",
                    padding: 3
                });
                d = c.jsLib.evalPath(a, "align") || "center";
                var k = c.jsLib.evalPath(a, "verticalAlign") || "top";
                a = "middle" === k;
                f = g.textStack().add(f.label);
                b.xAlignment = c.undefVal;
                b.yAlignment = c.undefVal;
                b.maxWidth = e.chartArea.rootRect.width;
                f.attr(b);
                f = f.composeCombinations()[0].minSize;
                f = [f.width.px, f.height.px];
                g = [d, k];
                f = ["top" === g[1] ? f[1] : 0, a ? "right" === g[0] ? f[0] : 0 : 0, "bottom" === g[1] ? f[1] : 0, a ? "left" === g[0] ? f[0] : 0 : 0];
                e.shapeSize.labelMargin ? c.jsLib.each(f, function(a, b) {
                    e.shapeSize.labelMargin[b] = Math.max(e.shapeSize.labelMargin[b], a)
                }) : e.shapeSize.labelMargin = f
            }
            return this
        }
        ;
        b.prototype.applyShapeAttrs = function() {
            var a = c.jsLib.extendScoped(c.stylingLib.shapeToAttr(this._currentOptions), this._currentOptions, mb)
              , b = this.shapeSize.innerMargin || [0, 0, 0, 0]
              , h = this.parseMarginPadding(a.padding)
              , f = this.shapeSize.labelMargin || [0, 0, 0, 0];
            b && (a.padding = c.jsLib.arraySum(b, h));
            a.margin = c.jsLib.arraySum(c.jsLib.parseMargin(a.margin), f);
            this.rootVisuals.innerBox.attr(a)
        }
        ;
        b.prototype.calculateShapeSize = function() {
            var a = c.jsLib.extendScoped(c.stylingLib.shapeToAttr(this._currentOptions), this._currentOptions, mb);
            return {
                margin: this.parseMarginPadding(a.margin),
                padding: this.parseMarginPadding(a.padding),
                outlineWidth: a["stroke-width"]
            }
        }
        ;
        b.prototype.parseMarginPadding = function(a) {
            if (a && c.jsLib.isNumber(a) && 1 > Math.abs(a)) {
                var b = this._metrics.availableBounds || this.box;
                a = a * Math.min(b[2], b[3]) / 2
            }
            return c.jsLib.parseMargin(a)
        }
        ;
        b.prototype.measureInner = function(a) {}
        ;
        b.prototype.measureWrapper = function() {
            var a = this.rootPanel
              , b = this.rootVisuals.contentHolder
              , h = this.box
              , f = this.shapeSize
              , d = f.labelMargin || [0, 0, 0, 0]
              , g = this.calculateShapeSize()
              , k = 2 * (g.outlineWidth || 0);
            d = this.insideInnerRootSize = [h[2] - g.margin[0] - g.margin[2] - g.padding[0] - g.padding[2] - k - d[1] - d[3], h[3] - g.margin[1] - g.margin[3] - g.padding[1] - g.padding[3] - k - d[0] - d[2]];
            this.measureInner(d);
            h = f.axisSizeOffset || [0, 0];
            f = c.jsLib.arraySum(f.axesOverflows || [0, 0, 0, 0], f.innerMargin || [0, 0, 0, 0]);
            f = [d[0] - f[1] - f[3] - h[1], d[1] - f[0] - f[2] - h[0]];
            f = this.insideInnerRootSize = this.toGaugeSize(f);
            b.attr({
                width: f[0],
                height: f[1]
            });
            this.applyShapeAttrs();
            a.update();
            this.measureInner([f[0] + h[1], f[1] + h[0]]);
            return this
        }
        ;
        b.prototype.setShapeSize = function(a, b) {
            var e = this._metrics;
            e.shapeBounds = a.slice(0);
            e.availableBounds = b
        }
        ;
        b.prototype.setAvSpace = function(a) {
            this._metrics.availableBounds = a
        }
        ;
        b.prototype.eachSeries = function(a) {
            c.jsLib.each(this._series, a);
            return this
        }
        ;
        b.prototype.eachAxis = function(a) {}
        ;
        b.prototype.setAxes = function() {}
        ;
        b.prototype.renderAxes = function(a, b) {}
        ;
        b.prototype.renderExtras = function() {
            return this
        }
        ;
        b.prototype.setRootVisuals = function() {
            return this
        }
        ;
        b.prototype.wrap = function(a) {
            var b = this.renderer;
            a.root = b.panel({
                xContentAlignment: "center",
                yContentAlignment: "middle"
            });
            a.innerRoot = b.panel({
                width: "*",
                height: "*"
            });
            a.label = b.panel({
                width: "*",
                height: "*"
            });
            a.innerBox = b.box().add(a.innerRoot);
            a.rootStack = b.panel({
                xContentAlignment: "center",
                yContentAlignment: "middle",
                val: [a.innerRoot, a.label]
            });
            a.rootStack.add(a.root);
            a.mainStacks.add(a.innerBox);
            this.rootPanel = a.root;
            return a
        }
        ;
        b.prototype.add = function(a) {
            this.rootPanel.add(a);
            return this
        }
        ;
        return b
    }(c.BaseChartItem))
      , ob = function(d) {
        function b(a, b) {
            b = d.call(this, a, b) || this;
            b.caPanes = a;
            b.kind = "caPaneRadial";
            b.projection = {
                lin2valxy: function(a, b, e) {
                    return [a, b]
                },
                val2linxy: function(a, b, e) {
                    return [a, b]
                },
                webVal2linxy: function(a, b, e) {
                    return [a, b]
                }
            };
            b.isRadial = !0;
            b.staticBodyDGetter = Ya;
            b.staticPositionsFromAligments = Ob;
            b.isHoriz = !1;
            return b
        }
        F(b, d);
        b.prototype.toGaugeSize = function(a) {
            a = Math.min(a[0], a[1]);
            return [a, a]
        }
        ;
        b.prototype.xAxisDefaults = function(a) {
            return {
                isRadial: !0
            }
        }
        ;
        b.prototype.yAxisDefaults = function() {
            return {
                isRadial: !0
            }
        }
        ;
        b.prototype.normalizeShapeOptions = function(a) {
            var b = d.prototype.normalizeShapeOptions.call(this, a);
            b.outline = "none";
            b.label = a.label;
            b.ca.fill = c.jsLib.pick(a.innerFill, b.ca.fill);
            c.jsLib.has(a, "padding") && (b.padding = a.padding);
            return b
        }
        ;
        b.prototype.angleArc = function() {
            return sa(this._series[0], {
                start: -90,
                sweep: 360
            })
        }
        ;
        b.prototype.clipPath = function(a) {
            return (a = this.axes({
                isHoriz: !0
            })[0]) ? a = a.getLinePath() : null
        }
        ;
        b.prototype.measureInner = function(a) {
            this.populateAxisPanels(a)
        }
        ;
        b.prototype.getRadarType = function() {
            return "polar"
        }
        ;
        b.prototype.getCompleteVisInfo = function(a) {
            a = a.rectCompletePos;
            if ("spider" === this.getRadarType())
                return $a(this, a);
            a = Za(this.angleArc(), a);
            return a.pop ? c.jsLib.map(a, function(a) {
                return c.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a)
            }) : c.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a)
        }
        ;
        b.prototype.populateAxisPanels = function(a) {
            function b(a) {
                return !1 === a ? f.rootVisuals.axisBehindAll : void 0 === a ? f.rootVisuals.axisBehind : f.rootVisuals.axisFront
            }
            function c(a) {
                return function(b) {
                    b.isVisible && b.rootPanel && !b.isAdded && b.add(a)
                }
            }
            var f = this
              , d = f.insideInnerRootSize.slice(0);
            d = [Math.max(d[0], d[1]), Math.max(d[0], d[1])];
            a.width && (d = a);
            a = function(a) {
                return !a.isHoriz
            }
            ;
            var g = function(a) {
                return a.isHoriz
            }
              , k = c(b(f.xAxis.options("line.onTop")))
              , l = c(b(f.yAxis.options("line.onTop")));
            k(f.xAxis);
            l(f.yAxis);
            var n = [0, 0, 0, 0];
            f.axes(g).each(function(a) {
                a.measure(d) && (n = a.overflowSize.margins)
            });
            f.axes(a).each(function(a) {
                a.measure(d)
            });
            k = function(a) {
                return a.measure(d)
            }
            ;
            f.axes(a).each(k);
            f.axes(g).each(k);
            f.shapeSize.innerMargin = n;
            return f
        }
        ;
        b.prototype.setRootVisuals = function() {
            var a = this.renderer;
            if (!this.rootVisuals) {
                var b = this.chart.boxDefaults().outline.width;
                b = this.rootVisuals = c.panels(a).build({
                    axisMarkers: !0,
                    background: !0,
                    gridLines: !0,
                    content: {
                        stroke: {
                            width: 1,
                            onFront: !0
                        }
                    },
                    outline: {
                        width: b
                    },
                    contentHolderFront: !0
                });
                b.axisBehindAll = a.panel({
                    zIndex: c.zIndexReference.axis
                }).add(b.contentHolderBehind);
                b.axisBehind = a.panel({
                    zIndex: c.zIndexReference.axis
                }).add(b.axisContentBehind);
                b.axisFront = a.panel({
                    zIndex: c.zIndexReference.axis
                }).add(b.axisContentFront);
                this.wrap(b)
            }
            return this
        }
        ;
        b.prototype.renderExtras = function() {
            return this
        }
        ;
        b.prototype.setRenderRect = function(a) {
            var b = this._metrics
              , h = c.bboxLib.fromRect(a)
              , f = this.clipPath(a);
            f = c.pathLib.bbox(f);
            this.renderRect = a;
            this.insideInnerRootSize = h.slice(2);
            this.populateAxisPanels(this.renderRect);
            a = c.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds]);
            var d = c.bboxLib.bboxUnion([a, f]);
            b.renderBox = h;
            b.clipBounds = f;
            b.tickBounds = a;
            b.shapeBounds = d;
            return this
        }
        ;
        b.prototype.setShapeSize = function(a, b) {
            var e = a.slice(2)
              , f = a.slice(0);
            this.setAvSpace(b);
            b = e[0];
            b = c.bboxLib.fromCenter(c.bboxLib.center(a), [b, b]);
            this.setRenderRect(c.rectLib.fromBBox(b));
            a = this._metrics;
            b = Ca(a.clipBounds, a.tickBounds, !0);
            f = c.stylingLib.padMargin(f, b);
            b = Math.max.apply(Math, H(f.slice(2)));
            b = c.bboxLib.fromCenter(c.bboxLib.center(f), [b, b]);
            this.setRenderRect(c.rectLib.fromBBox(b));
            f = ha(f, a.clipBounds);
            f = c.bboxLib.fromRect(f);
            b = Math.max.apply(Math, H(f.slice(2)));
            b = c.bboxLib.fromCenter(c.bboxLib.center(f), [b, b]);
            this.setRenderRect(c.rectLib.fromBBox(b))
        }
        ;
        b.prototype.renderData = function(a, b) {
            d.prototype.renderData.call(this, a, b);
            a = this._metrics;
            b = this.clipPath(this.renderRect);
            b = c.pathLib.bbox(b);
            var e = c.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds, b]);
            a.clipBounds = ea(b, this.rootVisuals.content, this.caPanes.rootPanel);
            a.shapeBounds = ea(e, this.rootVisuals.content, this.caPanes.rootPanel);
            return this
        }
        ;
        return b
    }(nb)
      , Pc = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "caPaneRadar";
            return a
        }
        F(b, d);
        b.prototype.defaultShapeOptions = function() {
            return {
                ca: {
                    clip: !1
                },
                padding: .05,
                margin: 5,
                fill: "none",
                outline: {
                    width: 0
                }
            }
        }
        ;
        b.prototype.xAxisDefaults = function(a) {
            a = d.prototype.xAxisDefaults.call(this, a);
            return c.jsLib.merge(a, {
                line_visible: !0,
                defaultTick: {
                    gridLine: {
                        color: "#d9d9d9"
                    }
                },
                isRadial: !0
            })
        }
        ;
        b.prototype.setAxes = function() {
            d.prototype.setAxes.call(this);
            this.xAxis.interpolationAxis = this.yAxis;
            this.yAxis.interpolationAxis = this.xAxis;
            this.yAxis.isRadial = this.xAxis.isRadial = !0;
            this.yAxis.isHoriz = !1;
            this.xAxis.isHoriz = !0;
            return this
        }
        ;
        b.prototype.angleArc = function() {
            var a = this.xAxis
              , b = this._series[0]
              , h = {
                start: -90,
                sweep: 360
            };
            h = sa(this._series[0], h);
            var f = h.end - h.start;
            c.jsLib.def(c.jsLib.evalPath(b, "currentOptions.angle.start")) && 360 !== f || (a = "category" === a.type ? -(a.getShortestDistPerc() / 2 * 360) : 0,
            h.start += a,
            h.end += a);
            return h
        }
        ;
        b.prototype.setProjection = function(a) {
            var b = c.bboxLib.fromRect(a || this.renderRect)
              , h = c.bboxLib.center(b)
              , f = b[2] / 2
              , d = this.xAxis.getTicksPos()
              , g = this.angleArc()
              , k = this.yAxis;
            this.projection.val2linxy = function(a, b, e) {
                a = c.mathLib.mapValue(g.start, g.end, 0, 1, a);
                return c.trigLib.gpdp([.5, .5], a, .5 - .5 * b)
            }
            ;
            this.projection.webVal2linxy = function(a, e, m) {
                m = c.mathLib.mapValue(g.start, g.end, 0, 1, a);
                if (-1 < d.indexOf(a))
                    return a = c.trigLib.gpdp([.5, .5], m, .5 - .5 * e),
                    [a[0] * b[2], a[1] * b[3]];
                a = k.getCaPath(k.posToVal(e), c.undefVal, c.undefVal, {
                    posOnly: !0
                });
                a = c.pathLib.pathIntersects(c.pathLib.fromString(a), c.trigLib.gpdp(h, m, 0), c.trigLib.gpdp(h, m, f));
                return !a.length || (a = a[0].intersect,
                a = [a.x, a.y],
                c.jsLib.isNull(a[0]) || c.jsLib.isNull(a[1])) ? h.slice(0) : a
            }
        }
        ;
        b.prototype.populateAxisPanels = function(a) {
            function b(a) {
                return !1 === a ? f.rootVisuals.axisBehindAll : void 0 === a ? f.rootVisuals.axisBehind : f.rootVisuals.axisFront
            }
            function c(a) {
                return function(b) {
                    b.isVisible && b.rootPanel && !b.isAdded && b.add(a)
                }
            }
            var f = this
              , d = c(b(f.xAxis.options("line.onTop")))
              , g = c(b(f.yAxis.options("line.onTop")));
            d(f.xAxis);
            g(f.yAxis);
            d = function(b) {
                return b.measure(a)
            }
            ;
            f.axes(function(a) {
                return !a.isHoriz
            }).each(d);
            f.axes(function(a) {
                return a.isHoriz
            }).each(d);
            f.shapeSize.innerMargin = Ca(f._metrics.clipBounds, f._metrics.tickBounds);
            return f
        }
        ;
        b.prototype.toGaugeSize = function(a) {
            a = this.measureRenderRect(c.rectLib.fromBBox(c.bboxLib.fromCenter([0, 0], a)));
            a = c.jsLib.join(a.clipPath, " ");
            return c.pathLib.bbox(a).slice(2)
        }
        ;
        b.prototype.measureInner = function(a) {
            d.prototype.measureInner.call(this, a)
        }
        ;
        b.prototype.measureRenderRect = function(a) {
            var b = this.clipPath(a);
            a = c.bboxLib.fromRect(a);
            b = c.pathLib.bbox(b);
            a = ha(a, b);
            b = this.clipPath(a);
            return {
                renderRect: a,
                clipPath: b
            }
        }
        ;
        b.prototype.renderData = function(a, b) {
            d.prototype.renderData.call(this, a, b);
            a = this._metrics;
            b = this.clipPath(this.renderRect);
            b = c.pathLib.bbox(b);
            var e = c.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds, b]);
            a.clipBounds = ea(b, this.rootVisuals.content, this.caPanes.rootPanel);
            a.shapeBounds = ea(e, this.rootVisuals.content, this.caPanes.rootPanel);
            return this
        }
        ;
        b.prototype.clipPath = function(a) {
            var b = c.bboxLib.fromRect(a)
              , h = this.angleArc();
            h = {
                start: c.trigLib.toRadians(h.start),
                end: c.trigLib.toRadians(h.end),
                r: b[2] / 2,
                innerR: 0
            };
            a = c.bboxLib.center(c.bboxLib.fromRect(a));
            return c.shapeLib.arc(a[0], a[1], b[2], b[3], h)
        }
        ;
        b.prototype.getRadarType = function() {
            var a = this._series[0]
              , b = this.xAxis;
            a = a.ctManager.settingVal("radarType", a);
            "auto" === a && (a = "category" === b.type ? "spider" : "polar");
            return a
        }
        ;
        b.prototype.renderSerie = function(a, b, c) {
            a.coordinatesModifier = Tb;
            d.prototype.renderSerie.call(this, a, b, c)
        }
        ;
        b.prototype.getShaderOptions = function(a) {
            return Fa(a, 0)
        }
        ;
        return b
    }(ob)
      , pb = function() {
        return c.jsLib.merge(Oa(), {
            line: {
                color: "none"
            },
            isRadial: !0,
            defaultTick: {
                gridLine: {
                    color: "none"
                },
                label: {
                    visible: !1
                }
            }
        })
    }
      , qb = function() {
        return {
            isRadial: !0,
            alternateGridFill: "none",
            scale: {
                minorInterval: "auto"
            },
            defaultTick: {
                placement: "inside",
                line: {
                    color: "#c3c3c3",
                    width: 2,
                    length: 10
                },
                gridLine: {
                    width: 0
                }
            },
            defaultMinorTick: {
                label: {
                    visible: !1
                },
                placement: "inside",
                line: {
                    color: "#c3c3c3",
                    length: 5
                },
                gridLine: {
                    width: 0
                }
            }
        }
    }
      , Qc = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "caPaneGauge";
            a.isHoriz = !0;
            return a
        }
        F(b, d);
        b.prototype.setAxes = function() {
            d.prototype.setAxes.call(this);
            this.xAxis.interpolationAxis = this.yAxis;
            this.yAxis.interpolationAxis = this.xAxis;
            this.yAxis.isRadial = this.xAxis.isRadial = !0;
            this.yAxis.isHoriz = !0;
            this.xAxis.isHoriz = !1;
            return this
        }
        ;
        b.prototype.angleArc = function() {
            var a = {
                orientation: -90,
                sweep: 270
            };
            return a = sa(this._series[0], a)
        }
        ;
        b.prototype.xAxisDefaults = function(a) {
            var b = this.hasNeedles ? pb() : c.jsLib.merge(pb(), {
                spacingPercentage: 1 < c.jsLib.evalPath(this, "_series.0.userPoints.length") ? .2 : 0,
                defaultTick: {
                    gridLine: {
                        color: "#d9d9d9",
                        width: "column"
                    },
                    label: {
                        visible: !1
                    }
                }
            });
            "category" !== a.type && c.jsLib.setPathVal(b, "defaultTick.gridLine.width", 0);
            return b
        }
        ;
        b.prototype.yAxisDefaults = function() {
            return this.hasNeedles ? qb() : c.jsLib.merge(qb(), {
                scale: {
                    minorInterval: "none"
                },
                line: {
                    visible: !0
                },
                defaultTick: {
                    placement: "outside",
                    line: {
                        length: 0
                    }
                },
                defaultMinorTick: {
                    label: {
                        visible: !1
                    },
                    placement: "outside",
                    line: {
                        length: 0
                    },
                    gridLine: {
                        width: 0
                    }
                }
            })
        }
        ;
        b.prototype.toGaugeSize = function(a) {
            a = this.measureRenderRect(c.rectLib.fromBBox(c.bboxLib.fromCenter([0, 0], a)));
            a = c.jsLib.join(a.clipPath, " ");
            return c.pathLib.bbox(a).slice(2)
        }
        ;
        b.prototype.defaultShapeOptions = function() {
            var a = this.hasNeedles;
            var b = {
                ca: {
                    fill: this.chart.boxDefaults().boxVisible ? "#ffffff" : "#fcfcfc",
                    outline: {
                        color: "#c3c3c3",
                        width: 1
                    },
                    clip: !1
                },
                padding: .1,
                margin: 0,
                fill: "none",
                outline: {
                    width: 0
                }
            };
            return a ? b : c.jsLib.defaultsDeep({
                fill: "none",
                outline: {
                    color: "none"
                },
                ca: {
                    fill: "none",
                    outline: {
                        color: "none"
                    },
                    innerSize: "50%"
                }
            }, b)
        }
        ;
        b.prototype.normalizeShapeOptions = function(a) {
            var b = d.prototype.normalizeShapeOptions.call(this, a);
            this.hasNeedles && (b.ca.fill = a.fill);
            return b
        }
        ;
        b.prototype.measureRenderRect = function(a) {
            var b = a
              , h = this.clipPath(a);
            "clip" === this.chart.ctManager.settingVal("circularGaugeType", this._series[0]) && (a = c.bboxLib.fromRect(a),
            h = c.pathLib.bbox(h),
            b = ha(a, h),
            h = this.clipPath(b));
            return {
                renderRect: b,
                clipPath: h
            }
        }
        ;
        b.prototype.clipPath = function(a) {
            var b = c.bboxLib.fromRect(a)
              , h = this.angleArc();
            h = {
                start: c.trigLib.toRadians(h.start),
                end: c.trigLib.toRadians(h.end),
                r: b[2] / 2,
                innerR: 0
            };
            a = c.bboxLib.center(c.bboxLib.fromRect(a));
            if (this.hasNeedles) {
                var f = this.chart.ctManager.settingVal("circularGaugeType", this._series[0])
                  , d = {
                    clip: "gaugeOutline",
                    circle: "circle",
                    arc: "clip"
                }[f];
                "circle" === f && (a = b);
                return c.shapes[d](a[0], a[1], b[2], b[3], h)
            }
            f = this.getShapeOptions(b);
            h.innerR = b[2] / 2 * f.innerSize;
            return c.shapeLib.arc(a[0], a[1], b[2], b[2], h)
        }
        ;
        b.prototype.setProjection = function() {
            var a = c.bboxLib.fromRect(this.renderRect)
              , b = this.getShapeOptions();
            c.bboxLib.center(a);
            var h = this.angleArc();
            this.projection.val2linxy = function(a, e, d) {
                e = c.mathLib.mapValue(h.start, h.end, 0, 1, e);
                a = c.mathLib.mapValue(.5, b.innerSize ? .5 * b.innerSize : 0, 0, 1, a);
                return c.trigLib.gpdp([.5, .5], e, a)
            }
        }
        ;
        b.prototype.renderExtras = function() {
            if (this.hasNeedles) {
                var a = this.rootVisuals.axisMarkersFront
                  , b = c.bboxLib.fromRect(this.renderRect)
                  , h = this.getShapeOptions().innerPadding
                  , f = b[2] / 2;
                h = c.jsLib.def(h) ? c.mathLib.mapValue(.86 * f, f, 0, 1, h) : .86 * f;
                h = c.bboxLib.pad(b, h);
                b = 0 < h[2];
                f = {
                    zIndex: 0,
                    d: b ? c.shapes.circle(h[0], h[1], h[2], h[2]) : "M0 0",
                    fill: {
                        linearGradient: [0, 1, 0, 0],
                        stops: [[0, "#777"], [1, "#111"]]
                    },
                    stroke: {
                        linearGradient: [0, 0, 0, 1],
                        stops: [[0, "#666"], [1, "#555"]]
                    },
                    "stroke-width": 2
                };
                (h = this.rootVisuals.needleBase) ? h.attr(f) : b && (this.rootVisuals.needleBase = this.renderer.renderer.path().attr(f).add(a))
            }
            return this
        }
        ;
        return b
    }(ob)
      , Rc = function(d) {
        function b(a, b) {
            var e = d.call(this, a, b) || this;
            e.caPanes = a;
            e.kind = "caPaneLinear";
            e.widthHeightRatio = 5;
            a = e.ctm.settingVal("linearGaugeType", b[0]);
            e.isHoriz = "vertical" !== a;
            return e
        }
        F(b, d);
        b.prototype.yAxisDefaults = function() {
            return {
                line: {
                    visible: !0
                },
                alternateGridFill: "none",
                defaultTick: {
                    gridLine: {
                        width: 0
                    }
                }
            }
        }
        ;
        b.prototype.toGaugeSize = function(a) {
            var b = this.xAxis
              , h = this.isHoriz ? [0, 1] : [1, 0]
              , f = a[h[0]]
              , d = a[h[1]];
            a = a.slice(0);
            var g = "category" === this.xAxis.type ? this.xAxis.dataPositions.items.length : this._series[0].userPoints.length
              , k = b.options("staticColumnWidth");
            b = 1 + b.options("spacingPercentage") || 0;
            this.widthPerPoint = k ? k * b : c.mathLib.math.min(d / g, f / this.widthHeightRatio);
            a[h[1]] = this.widthPerPoint * g;
            a.push(!this.isHoriz && k);
            a.push(this.isHoriz && k);
            return a
        }
        ;
        b.prototype.getSize = function(a) {
            a = Math.max(this.box[2], this.box[3]);
            return this.isHoriz ? [a, a / this.widthHeightRatio] : [a / this.widthHeightRatio, a]
        }
        ;
        b.prototype.setAxes = function() {
            d.prototype.setAxes.call(this);
            this.widthPerPoint && !c.jsLib.evalPath(this.xAxis, "userOptions.defaultTick.gridLine.width") && c.jsLib.setPathVal(this.xAxis, "currentOptions.defaultTick.gridLine.width", this.widthPerPoint);
            return this
        }
        ;
        b.prototype.populateAxisPanels = function(a) {
            function b(a) {
                return function(b) {
                    b.isVisible && b.rootPanel && !b.isAdded && b.add(a)
                }
            }
            var h = this.rootVisuals, f = c.axisUtils.axesBySideIndex(this.axes()), d = 0, g = 0, k = a.slice(0), l, n = [h.topAxes, h.rightAxes, h.bottomAxes, h.leftAxes];
            a = function(a) {
                return !a.isHoriz
            }
            ;
            h = function(a) {
                return a.isHoriz
            }
            ;
            c.jsLib.times(4, function(a) {
                c.jsLib.each(f[a], b(n[a]))
            });
            this.axes(a).each(function(a) {
                if (l = a.measure(k))
                    g += l[2],
                    k[0] -= l[2]
            });
            this.axes(h).each(function(a) {
                if (l = a.measure(k))
                    d += l[3],
                    k[1] -= l[3]
            });
            var p = function(a) {
                return a.measure(k)
            };
            this.axes(a).each(p);
            this.axes(h).each(p);
            a = c.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds]);
            a[2] > k[2] && (g = a[2] - k[2]);
            a[3] > k[3] && (d = a[3] - k[3]);
            this.shapeSize.axisSizeOffset = [d, g];
            return this
        }
        ;
        b.prototype.measureInner = function(a) {
            this.populateAxisPanels(a);
            this.shapeSize.axesOverflows = c.updateOverflows(this)
        }
        ;
        b.prototype.clipPath = function(a) {
            var b = this.rootVisuals.content
              , h = a.borderWidth;
            return (c.getBreaksPath(b, this.axes(), h) || c.bboxLib.toPath(c.bboxLib.fromRect(c.dmUtils.snapToPanel(b, a, h)))).clipPath
        }
        ;
        b.prototype.setRootVisuals = function() {
            if (!this.rootVisuals) {
                var a = this.chart.boxDefaults().outline.width;
                a = this.rootVisuals = c.panels(this.renderer).build({
                    axis: {},
                    axisMarkers: !0,
                    background: !0,
                    gridLines: !0,
                    overflow: !0,
                    outline: {
                        width: a
                    },
                    content: {
                        stroke: {
                            width: 0
                        },
                        holder: {
                            stretch: !1
                        }
                    }
                });
                this.wrap(a)
            }
            return this
        }
        ;
        b.prototype.renderData = function(a, b) {
            d.prototype.renderData.call(this, a, b);
            a = this._metrics;
            b = [this.yAxis.tickBounds, this.xAxis.tickBounds, c.bboxLib.fromRect(this.contentRect)];
            a.clipBounds = ea(c.bboxLib.fromRect(this.contentRect), this.rootVisuals.content, this.caPanes.rootPanel);
            a.shapeBounds = ea(c.bboxLib.bboxUnion(b), this.rootVisuals.content, this.caPanes.rootPanel);
            return this
        }
        ;
        return b
    }(nb)
      , Sc = function() {
        function d(b) {
            this.chartArea = b;
            this._panes = [];
            this.count = 0
        }
        d.prototype.setPanes = function() {
            var b = this
              , a = b.chartArea;
            b.chart = a.chart;
            var e = a.ctManager.getPaneGroups(a._series);
            c.jsLib.mergeCollections(e, b._panes, function(a) {
                a: {
                    var e = b.chartArea.ctManager;
                    if (e.isType("radar"))
                        a = new Pc(b,a);
                    else {
                        if (e.isType("gauge"))
                            if (e = e.settingVal("gaugeType", a[0]),
                            "circular" === e) {
                                a = new Qc(b,a);
                                break a
                            } else if ("linear" === e) {
                                a = new Rc(b,a);
                                break a
                            }
                        a = void 0
                    }
                }
                return a.initShapeItems()
            }, function(a, b) {
                return b.update(a)
            }, function(a) {
                return a.destroy()
            }, function(a) {
                return a.hash
            }, function(a) {
                return a.hash
            });
            b.count = b._panes.length;
            b.add(a);
            return b
        }
        ;
        d.prototype.eachPane = function(b) {
            c.jsLib.each(this._panes, b);
            return this
        }
        ;
        d.prototype.renderAxes = function() {
            return this
        }
        ;
        d.prototype.renderData = function(b, a) {
            var e = b.borderWidth / 2
              , h = this._panes.length;
            this.caBox = c.bboxLib.fromRect(b);
            this.caRect = b;
            this.rootPanel.attr({
                offsetX: e + b.x,
                offsetY: e + b.y
            });
            e = Hb(h, {
                width: b.width,
                height: b.height
            });
            var d = e.boxes
              , m = [];
            this.eachPane(function(a, b) {
                b = c.rectLib.fromBBox(d[b]);
                a.setProjection(b);
                a = a.measure(b);
                m.push(a)
            });
            b = Ib(m, {
                cols: e.cols,
                rows: e.rows
            }, b);
            var g = b.boxes
              , k = b.spaces;
            this.eachPane(function(b, e) {
                var h = g[e];
                e = k[e];
                if (h) {
                    b.setAvSpace(e);
                    h = b.adjustByShapeOptions(h);
                    b.setShapeSize(h, e);
                    var d = b.measure(c.rectLib.fromBBox(h))
                      , f = d.innerSize;
                    d = d.outerBox;
                    var m = [e[2] - d[2], e[3] - d[3]];
                    h = [d[2] - h[2], d[3] - h[3]];
                    0 < m[0] && 0 < h[0] && (d[0] -= h[0] / 2);
                    0 < m[1] && 0 < h[1] && (d[1] -= h[1] / 2);
                    b.rootPanel.attr({
                        offsetX: d[0],
                        offsetY: d[1],
                        width: d[2],
                        height: d[3]
                    });
                    b.rootVisuals.contentHolder.attr({
                        width: f[0],
                        height: f[1]
                    });
                    b.setShapeSize(d, e);
                    b.renderData([f[0], f[1]], a)
                }
            });
            this.rootPanel.update();
            this.eachPane(function(a, b) {
                a.postArrange()
            });
            return this
        }
        ;
        d.prototype.add = function(b) {
            if (!this.rootPanel) {
                var a = this.rootPanel = this.rootPanel || this.chart.renderer.panel();
                this.eachPane(function(b) {
                    return b.add(a)
                })
            }
            this.rootPanel.add(b.rootVisuals.dataContent)
        }
        ;
        return d
    }()
      , ua = {
        squarified: {
            changeDirection: !0,
            direction: 0,
            lowRatio: !0
        },
        sliceanddice: {
            changeDirection: !0,
            direction: 0,
            lowRatio: !1
        },
        stripes: {
            changeDirection: !1,
            direction: 0,
            lowRatio: !1
        }
    }
      , rb = function() {
        return {
            axes: "y",
            values: "y",
            privateAxes: "y",
            requiredData: "y",
            supportedData: "y",
            customAxisOptions: {
                y: {
                    visible: !1
                }
            }
        }
    }
      , Tc = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "treemap";
            a.staticSeriesBodyInfo = [Vb];
            a.collidePointBoxes = !1;
            a.typeConfig = rb();
            a.hcLabelsOnly = !0;
            return a
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return rb()
        }
        ;
        b.prototype.hideUnusedPointVisuals = function(a) {
            c.hideVisual(a.visuals.marker)
        }
        ;
        b.prototype.setCoordinates = function(a, b) {
            d.prototype.setCoordinates.call(this, a, b);
            var e = this;
            b = e.series;
            var f = b.ctManager, m = ua.squarified, g = [], k = b.indexer, l = c.bboxLib.fromRect(b.renderRect), n;
            var p = f.settingVal("treemapMode", b);
            f = f.settingVal("treemapDirection", b);
            p && (c.jsLib.isString(p) ? (m = ua[p] || m,
            f && (m.direction = "horizontal" === f ? 0 : 1)) : (m = p.type && ua[p.type] || m,
            p.direction && (m.direction = "horizontal" === p.direction ? 0 : 1)));
            (p = b.indexer.data.coordinates || b.prevCoords) && (p = p.slice(0));
            k.indexKeys(["coordinates"], {}, 0);
            var q = b.points().items
              , t = function(a) {
                return e.getChildren(a)
            }
              , r = Ga(q.filter(function(a) {
                return !e.getParents(a).length
            }), l, function(a) {
                return e.valueGetter(a, t)
            }, t, function(a) {
                return e.idGetter(a)
            }, m);
            m = function(a, b) {
                b = r[v.idGetter(q[a])];
                if (!b)
                    return "continue";
                b = c.bboxLib.fromLTRB(b);
                var h = c.bboxLib.toPath(b)
                  , d = c.bboxLib.center(b)
                  , f = c.pathLib.fromString(h);
                g.push(b);
                n = {
                    path: h,
                    xyz: d.slice(0),
                    xyzs: d.slice(0),
                    cxy: d.slice(0),
                    meta: {
                        label: {
                            bounds: b.slice(0)
                        }
                    },
                    bbox: b.slice(0),
                    hitTest: function(a, b) {
                        return f.hitTest(a, b)
                    }
                };
                e.clearPrevCoord(k.getValue("coordinates", a));
                k.setValue("coordinates", a, n)
            }
            ;
            var v = this;
            p = 0;
            for (f = q.length; p < f; p++)
                m(p, f);
            e.coordinates.line = [c.bboxLib.toPoints(l, 5)];
            m = (m = c.jsLib.evalPath(e.shapeLabelMeta, "label.bounds")) && (m[0] !== l[0] || m[1] !== l[1]);
            e.shapeLabelMeta.label = {
                bounds: l
            };
            e.initShapeLabel(m);
            g.length && (e.coordShapeBbox = a,
            e.coordRectAll = a,
            e.coordRect = a);
            e.coordDirty = !1;
            e.renderOrder = b.indexer.sortByNone();
            e.renderOrderRev = e.renderOrder.slice(0);
            e.renderOrderRev.reverse();
            return this
        }
        ;
        b.prototype.getIconPaths = function(a, b) {
            return c.getColumnIconPathsStatic(this, a, b)
        }
        ;
        b.prototype.possibleLabelPositions = function(a, b, c, d, m) {
            return [d.bbox]
        }
        ;
        b.prototype.valueGetter = function(a, b) {
            var e = c.jsLib.isArray(a) ? a : b(a);
            if (e.length) {
                for (var d = a = 0; d < e.length; d++)
                    a += this.valueGetter.call(this, e[d], b);
                return a
            }
            return this.series.indexer.getValue("y", a._i)
        }
        ;
        b.prototype.idGetter = function(a) {
            return c.jsLib.isNumber(a) ? a : a.id || JSON.stringify(a)
        }
        ;
        return b
    }(kb)
      , Xb = function() {
        function d(b, a, e, c) {
            this.x = b;
            this.y = a;
            this.height = c;
            this.width = e
        }
        d.prototype.shortestEdge = function() {
            return Math.min(this.height, this.width)
        }
        ;
        d.prototype.getCoordinates = function(b, a, e) {
            var h = this.x
              , d = this.y
              , m = []
              , g = this.height ? c.jsLib.sum(b) / this.height : 0
              , k = this.width ? c.jsLib.sum(b) / this.width : 0;
            if ((e = !e) && a || !e && this.width >= this.height)
                for (a = 0; a < b.length; a++)
                    e = g ? b[a] / g : 0,
                    m.push([h, d, h + g, d + e]),
                    d += e;
            else
                for (a = 0; a < b.length; a++)
                    e = k ? b[a] / k : 0,
                    m.push([h, d, h + e, d + k]),
                    h += e;
            return m
        }
        ;
        d.prototype.cutArea = function(b, a, e) {
            (e = !e) && a || !e && this.width >= this.height ? (b = this.height ? b / this.height : 0,
            b = new d(this.x + b,this.y,this.width - b,this.height)) : (b = this.width ? b / this.width : 0,
            b = new d(this.x,this.y + b,this.width,this.height - b));
            return b
        }
        ;
        return d
    }()
      , Wb = function(d, b) {
        var a = []
          , e = c.jsLib.sum(d);
        b = e ? b / e : 0;
        for (e = 0; e < d.length; e++)
            a[e] = d[e] * b;
        return a
    }
      , cb = function(c, b) {
        if (c[0].length)
            for (var a = 0; a < c.length; a++)
                cb(c[a], b);
        else
            b.push(c)
    }
      , Ha = function(d, b, a, e, h) {
        var f = h.changeDirection
          , m = h.lowRatio
          , g = h.direction;
        if (0 === d.length)
            e.push(a.getCoordinates(b, g, m));
        else {
            var k = a.shortestEdge(), l = d[0], n;
            !(n = 0 === b.length) && (n = m) && (n = b.slice(),
            n.push(l),
            n = sb(b, k) >= sb(n, k));
            n ? (b.push(l),
            Ha(d.slice(1), b, a, e, h)) : (f && (h.direction = 1 - g),
            f = a.cutArea(c.jsLib.sum(b), g, m),
            e.push(a.getCoordinates(b, g, m)),
            Ha(d, [], f, e, h));
            return e
        }
    }
      , sb = function(d, b) {
        var a = Math.min.apply(Math, d)
          , e = Math.max.apply(Math, d);
        d = c.jsLib.sum(d);
        return Math.max(Math.pow(b, 2) * e / Math.pow(d, 2), Math.pow(d, 2) / (a * Math.pow(b, 2)))
    }
      , tb = function() {
        return {
            axes: "y",
            values: "y",
            privateAxes: "y",
            requiredData: "y",
            supportedData: "y",
            customAxisOptions: {
                y: {
                    visible: !1
                }
            }
        }
    }
      , ub = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.labelBoxes = {
                inside: [],
                outside: []
            };
            a.outsideLabelMargin = 10;
            a.typeConfig = tb();
            return a
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return tb()
        }
        ;
        b.prototype.setCoordinates = function(a, b) {
            var e = this.series
              , d = c.bboxLib.fromRect(a)
              , m = c.bboxLib.center(d)
              , g = a
              , k = function(a) {
                c.jsLib.def(a.x) && (a = c.bboxLib.fromRect(a));
                var b = Math.min(a[2], a[3]);
                return c.bboxLib.fromCenter(c.bboxLib.center(a), [b, b])
            }(a)
              , l = e.indexer.data.coordinates || e.prevCoords;
            l && (l = l.slice(0));
            b = c.jsLib.merge({
                phase: "outsideLabels"
            }, b);
            this.setCoordinatesWith(c.rectLib.fromBBox(k), b);
            b.phase = "";
            var n = c.bboxLib.fromRect(this.coordRectAll)
              , p = c.bboxLib.fromRect(this.coordRect)
              , q = c.bboxLib.center(n);
            if (c.bboxLib.bInsideA(d, n))
                d = g = ha(p, this.coordShapeBbox),
                this.setCoordinatesWith(a, b, d);
            else if (!(n[2] <= d[2] && n[3] <= d[3])) {
                q = function() {
                    var a = Math.min(k[2] + t, k[2] + r);
                    k = c.bboxLib.fromCenter(m, [a, a]);
                    g = c.rectLib.fromBBox(k)
                }
                ;
                var t = Math.min(d[2] - n[2], 0)
                  , r = Math.min(d[3] - n[3], 0);
                q();
                10 < g.width && this.setCoordinatesWith(a, b, g);
                n = c.bboxLib.fromRect(this.coordRectAll);
                t = Math.max(d[2] - n[2], 0);
                r = Math.max(d[3] - n[3], 0);
                q();
                this.setCoordinatesWith(a, b, g)
            }
            n = c.bboxLib.fromRect(this.coordRectAll);
            q = c.bboxLib.center(n);
            a = m[0] - q[0];
            d = m[1] - q[1];
            (a || d) && this.setCoordinatesWith(c.rectLib.translate(g, a, d), b);
            if (l)
                for (b = 0,
                a = e.points().items.length; b < a; b++)
                    if (d = e.indexer.getValue("coordinates", b))
                        d.coordPrev = this.clearPrevCoord(l[b]);
            this.renderOrder = e.indexer.sortByNone();
            this.renderOrderRev = this.renderOrder.slice(0);
            this.renderOrderRev.reverse();
            return this
        }
        ;
        b.prototype.setCoordinatesWith = function(a, b, c) {
            return this
        }
        ;
        b.prototype.unsquishLabels = function(a) {
            var b = this.series.indexer
              , d = function(a) {
                return b.getValue("coordinates", a).meta.label
            }
              , f = function(a, b) {
                a = d(a)[1];
                b = d(b)[1];
                return a < b ? -1 : a > b ? 1 : 0
            };
            c.jsLib.each(a, function(a) {
                return a.sort(f)
            });
            a[0].reverse();
            a[1].reverse();
            var m, g, k = function() {
                g[1] + g[3] > m[1] && (g[1] = m[1] - g[3] - 1)
            }, l = function() {
                g[1] < m[1] + m[3] && (g[1] = m[1] + m[3] + 1)
            }, n = function(a, b) {
                return function(e, c) {
                    g = d(e);
                    !c && b && (m = b,
                    a());
                    c && a();
                    m = g
                }
            };
            c.jsLib.each(a[0], n(k));
            c.jsLib.each(a[1], n(k));
            c.jsLib.each(a[2], n(l));
            c.jsLib.each(a[3], n(l));
            var p = c.jsLib.map(a, function(a) {
                return c.bboxLib.bboxUnion(c.jsLib.map(a, d)) || []
            }), q;
            (q = Va(p[0], p[3])).overlap && (c.jsLib.each(a[0], n(k, c.bboxLib.translate(p[3], [0, q.overlap / 2]))),
            c.jsLib.each(a[3], n(l, p[0])));
            (q = Va(p[1], p[2])).overlap && (c.jsLib.each(a[1], n(k, c.bboxLib.translate(p[2], [0, q.overlap / 2]))),
            c.jsLib.each(a[2], n(l, p[1])))
        }
        ;
        return b
    }(c.SeriesBaseType)
      , Zb = 1 / 1.618
      , Uc = function(c) {
        var b = function(a, b) {
            a = a.y;
            b = b.y;
            return a < b ? -1 : a > b ? 1 : 0
        }
          , a = function(a, c) {
            return b(c, a)
        };
        return c ? a : b
    }
      , vb = function() {
        return {
            axes: "y",
            values: "x,y",
            privateAxes: "x,y",
            requiredData: "y",
            supportedData: "x,y",
            customAxisOptions: {
                z: {
                    visible: !1,
                    scale: {
                        includeOrigin: !0
                    }
                },
                y: {
                    visible: !1
                }
            }
        }
    }
      , Pa = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "funnel";
            a.typeConfig = vb();
            return a
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return vb()
        }
        ;
        b.prototype.setCoordinatesWith = function(a, b, d) {
            var e = this
              , h = e.series
              , g = h.currentOptions
              , k = e.getShapeOptions(h.contentRect(), a);
            a = c.bboxLib.fromRect(d || a);
            var l = [], n = [], p = [], q = [], t = h.indexer, r, v, u = h.points().items.slice(0), w, x, y, z = 0;
            c.jsLib.evalPath(g, "emptyPointMode");
            var G = [[], [], [], []];
            t.indexKeys(["coordinates"], {}, 0);
            d = c.jsLib.pick(k.cxy, c.bboxLib.center(a));
            var C = d[0]
              , J = d[1];
            if (g = k.offset)
                C += g[0],
                J += g[1];
            k.cxy = d;
            g = c.bboxLib.fromCenter([C, J], [a[2], a[3]]);
            e.coordRect = c.rectLib.fromBBox(g);
            k.size = k.size.length ? k.size : [a[2], a[3]];
            u.sort(Uc(!k.inverted));
            a = function(a, d) {
                w = u[a];
                v = w._i;
                y = w.currentOptions;
                x = h.getPointAttr(y);
                t.getValue("pos", v);
                var f = w.replaceTokens({
                    token: "%percentOfSeries"
                }) / 100
                  , g = [C, J];
                a = Yb([z, z + f], k, !a, a === d - 1);
                d = a.path;
                var m = c.bboxLib.center(a.bounds)
                  , B = c.pathLib.fromString(d);
                q.push(a.bounds);
                r = {
                    path: d,
                    xyz: m.slice(0),
                    xyzs: m.slice(0),
                    cxy: g.slice(0),
                    meta: {
                        label: c.undefVal
                    },
                    bbox: a.bounds.slice(0),
                    pathOptions: a
                };
                x.labelVisible && (g = e.positionLabel(w, B, x, r, b.phase),
                r.meta.labelOutside || "outsideLabels" === b.phase ? (G["right" === ("left" === x.label.align ? "left" : "right") ? k.inverted ? 0 : 3 : k.inverted ? 1 : 2].push(v),
                p.push(g)) : n.push(g),
                l.push(r.meta.label = g));
                var D = e.getLabelHitTest();
                r.hitTest = function(a, b) {
                    return B.hitTest(a, b) || D(this, a, b)
                }
                ;
                t.setValue("coordinates", v, r);
                z += f
            }
            ;
            g = 0;
            for (d = u.length; g < d; g++)
                a(g, d);
            c.bboxLib.collideAny(p) && e.unsquishLabels(G);
            q.length && (e.coordShapeBbox = c.bboxLib.bboxUnion(q),
            a = [c.bboxLib.bboxUnion(l)],
            e.coordShapeBbox && a.push(e.coordShapeBbox),
            a = c.bboxLib.bboxUnion(a),
            e.coordRectAll = c.rectLib.fromBBox(a));
            e.labelBoxes = {
                inside: n,
                outside: p
            };
            e.coordDirty = !1;
            return this
        }
        ;
        b.prototype.positionLabel = function(a, b, d, f, m) {
            var e = d.label.placement
              , h = "outsideLabels" === m ? "outside" : e || "auto"
              , l = d.label.autoHide;
            e = f.xyz;
            if (m = f.meta)
                m.labelFits = !0;
            this.initPointLabel(a, f, d);
            var n = m.labelSize;
            if (b = "outside" !== h ? c.polyFitLib.fitBoxInPath(b, n, e) : c.undefVal)
                return b = c.bboxLib.fromCenter(c.bboxLib.center(b), n),
                m.labelOutside = !1,
                b;
            if ("inside" === h)
                return m.labelFits = !l,
                m.labelOutside = !1,
                c.bboxLib.fromCenter(e, n);
            a = this.outsideLabelMargin + c.jsLib.pick(a.options("label.margin"), 5);
            b = f.pathOptions.labelAnchors.right;
            "right" === ("left" === d.label.align ? "left" : "right") ? b = [b[0] + a, e[1] - n[1] / 2] : (b = f.pathOptions.labelAnchors.left,
            b = [b[0] - a - n[0], e[1] - n[1] / 2]);
            b.push.apply(b, H(n));
            this.hasOutsideLabels = m.labelOutside = !0;
            return b
        }
        ;
        b.prototype.renderLabel = function(a, b, d, f, m) {
            f = this.series;
            var e = a.visuals
              , h = f.renderer
              , l = f.rootVisuals
              , n = d.meta;
            var p = b.label.autoHide;
            var q;
            !1 === d.meta.labelFits && p && (q = !0);
            var t = n && n.labelText ? n.labelText : a.replaceTokens(f.info.labelTextInfo.label)
              , r = n && n.labelAttr ? n.labelAttr : c.stylingLib.labelToAttr(b.label);
            !d.meta.labelOutside && b.label.hcColor && (r.fill = b.label.hcColor);
            (p = e.label) ? r.val = t : p = e.label = h.textStack(t);
            p.composeCombinations();
            if (n) {
                if (n = n.label.slice(0))
                    r = this.render_applyDynamicAttrVals([r, {
                        x: n[0],
                        y: n[1],
                        zIndex: f.zIndex + c.consts.zIndexReference.label
                    }], m),
                    p.attr(r);
                n = c.bboxLib.pad(n, -c.jsLib.pick(a.options("label.margin"), 5));
                a = c.bboxLib.center(n);
                d.meta.labelOutside && b.labelConnector ? (r = "left" === b.label.align ? "left" : "right",
                d = [d.pathOptions.labelAnchors[r], ["left" === r ? n[0] + n[2] : n[0], a[1]]],
                d = c.dmUtils.snapPointsToPanel(l.points, d, 1),
                d = c.shapeLib.pointsToPath(d),
                d = Wa(c.pathLib.fromString(d), 3, 0),
                r = this.render_applyDynamicAttrVals([{
                    opacity: 1,
                    d: d,
                    zIndex: f.zIndex + c.consts.zIndexReference.labelConnector
                }, b.labelConnectorAttr], m),
                (p = e.labelConnector) ? p.attr(r) : e.labelConnector = h.renderer.path().attr(r).add(l.points)) : c.hideVisual(e.labelConnector);
                q && c.hideVisual(e.label)
            }
        }
        ;
        b.prototype.getShapeOptions = function(a, b) {
            a = d.prototype.getShapeOptions.call(this, a, b);
            var e = this.series.ctManager;
            b = e.settingVal("funnelOrientationType");
            var f = e.isType("pyramid");
            e = e.isType("cone");
            var m = f || e;
            "inverted" === b && (m = !m);
            c.jsLib.merge(a, {
                inverted: m,
                neck: e || f ? 0 : .2
            });
            return a
        }
        ;
        b.prototype.getIconPaths = function(a, b) {
            return c.getColumnIconPathsStatic(this, a, b)
        }
        ;
        return b
    }(ub)
      , wb = function() {
        return {
            axes: "x,y,z",
            values: "x,y,z",
            requiredData: "x,y,z",
            supportedData: "x,y,z",
            privateAxes: "",
            customAxisOptions: {
                z: {
                    visible: !1
                }
            }
        }
    }
      , xb = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "heatmap";
            a.hcLabelsOnly = !0;
            a.typeConfig = wb();
            a.skipSubvalues = !0;
            return a
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return wb()
        }
        ;
        b.prototype.setCoordinates = function(a, b) {
            var e = this;
            b = e.series;
            var d = b.indexer, m = e.getShapeOptions(a).innerPadding, g = e.isHoriz(), k, l, n = b.xAxis, p = b.yAxis, q = a.x, t = a.y, r = a.width, v = a.height, u = function(a) {
                return (a.unZoomedRange.max - a.unZoomedRange.min) / (a.range.max - a.range.min)
            }, w = [g ? v : r, g ? r : v], x = [n.dataSortedUniq.length, p.dataSortedUniq.length], y = [w[0] / x[0] * u(n), w[1] / x[1] * u(p)];
            g && y.reverse();
            m && (g = Math.min.apply(Math, H(y)),
            n = y.slice(0),
            n.unshift(0, 0),
            y = c.bboxLib.pad(n, 1 <= m ? m : g * m).slice(2));
            d.indexKeys(["coordinates"], {}, 0);
            var z = b.points().items;
            m = function(a, b) {
                k = d.getValue("pos", a);
                b = [q + k.xyz[0] * r, t + k.xyz[1] * v];
                var h = c.bboxLib.fromCenter(b, y);
                l = {
                    path: e.toPointPath(z[a], h),
                    xyz: b,
                    xyzs: b,
                    cxy: b,
                    meta: {
                        label: {
                            bounds: h.slice(0)
                        }
                    },
                    bbox: h.slice(0)
                };
                !1 !== z[a].currentOptions.mouseTracking && (l.hitTest = function(a, b) {
                    return c.bboxLib.pointInside(h, [a, b])
                }
                );
                e.clearPrevCoord(d.getValue("coordinates", a));
                d.setValue("coordinates", a, l)
            }
            ;
            g = 0;
            for (n = z.length; g < n; g++)
                m(g, n);
            e.coordRect = a;
            e.coordDirty = !1;
            e.renderOrder = b.indexer.sortByNone();
            e.renderOrderRev = e.renderOrder.slice(0);
            e.renderOrderRev.reverse();
            return this
        }
        ;
        b.prototype.toPointPath = function(a, b) {
            return c.bboxLib.toPath(b)
        }
        ;
        b.prototype.getIconPaths = function(a, b) {
            return c.getColumnIconPathsStatic(this, a, b)
        }
        ;
        return b
    }(function(c) {
        function b() {
            var a = null !== c && c.apply(this, arguments) || this;
            a.collidePointBoxes = !1;
            return a
        }
        F(b, c);
        b.prototype.possibleLabelPositions = function(a, b, c, d, m) {
            return [d.bbox]
        }
        ;
        return b
    }(c.SeriesBaseType))
      , Vc = "stroke stroke-opacity stroke-width stroke-dasharray stroke-linejoin stroke-linecap".split(" ")
      , Wc = ["opacity", "fill", "hatchPattern", "hatch"]
      , Xc = c.timeLib.CalendarPattern
      , yb = function() {
        return {
            axes: "x,y,z",
            values: "x,y,z",
            requiredData: "x,y,z",
            supportedData: "x,y,z",
            privateAxes: "",
            customAxisOptions: {
                z: {
                    visible: !1
                }
            }
        }
    }
      , Yc = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a.kind = "calendar";
            a.hcLabelsOnly = !0;
            a.typeConfig = yb();
            a.pointDataKeys = "x y z complete completeX complete.y complete.x name".split(" ");
            a.skipSubvalues = !0;
            a.highlightVisuals = [];
            a.highlightAttrs = [];
            return a
        }
        F(b, d);
        b.prototype.render = function(a, b) {
            if (!(this.series.chart.isRendered && this.isRendered || this.series.isVisible))
                return this;
            d.prototype.render.call(this, a, b);
            return this.renderPatternHighlights(a)
        }
        ;
        b.prototype.wrapLabel = function(a, b, c) {
            if (32 > Math.min(b.maxWidth, b.maxHeight))
                return d.prototype.wrapLabel.call(this, a, b, c);
            var e = this.series.chartArea.renderer.panel({
                type: "scroll"
            }).attr(b);
            a.attr({
                maxWidth: b.maxWidth,
                maxHeight: b.maxHeight
            }).add(e);
            (c.label = c.label || {}).wrapped = !0;
            return e
        }
        ;
        b.prototype.toPointPath = function(a, b) {
            return c.bboxLib.toPath(b)
        }
        ;
        b.prototype.renderPatternHighlights = function(a) {
            var b, d, f, m = this, g = m.series, k = c.bboxLib.toLTRB(c.bboxLib.fromRect(g.contentRect())), l = g.indexer, n = m.isHoriz(), p = g.currentOptions.attributes, q = m.series.chart._highlights, t = function(a) {
                return c.jsLib.filter(g._points, function(b) {
                    return a.isInside(b.currentOptions.attributes.date)
                })
            }, r = function(a) {
                var b, e = [];
                try {
                    for (var c = A(a), d = c.next(); !d.done; d = c.next()) {
                        var h = d.value;
                        e[h.x + "," + h.y] = h
                    }
                } catch (ka) {
                    var f = {
                        error: ka
                    }
                } finally {
                    try {
                        d && !d.done && (b = c.return) && b.call(c)
                    } finally {
                        if (f)
                            throw f.error;
                    }
                }
                return e
            }, v = function(a) {
                var b = a.slice(0);
                a = [];
                var e, d, h = function() {
                    d = [];
                    l = b.pop();
                    e = l[1];
                    d = [l[0], l[1]]
                }, f = function(a) {
                    e = a[1];
                    d.push(e);
                    c.jsLib.removeArrItem(b, a)
                }, g = function(a) {
                    var e = a[0] + "," + a[1];
                    return c.jsLib.filter(b, function(a) {
                        a = a[0];
                        return a[0] + "," + a[1] === e
                    })
                }, k = function(a, b) {
                    b = c.trigLib.angleOfPoints(b[0], b[1]);
                    return ia(a, b)
                };
                for (h(); ; ) {
                    var m = g(e);
                    if (1 === m.length) {
                        var l = m[0];
                        f(l)
                    } else if (2 === m.length) {
                        var n = c.trigLib.angleOfPoints(l[1], l[0]);
                        l = k(n, m[0]) < k(n, m[1]) ? m[0] : m[1];
                        f(l)
                    } else if (!m.length && b.length)
                        d.length && a.push(d),
                        h();
                    else {
                        d.length && a.push(d);
                        break
                    }
                }
                return a
            }, u = g.xAxis.getRange(), w = g.yAxis.getRange(), x = [l.min("x"), l.max("x")], y = [l.min("y"), l.max("y")], z = [u.min + .5, u.max + .5], G = [w.min + .5, w.max + .5];
            !g.xAxis.isInverted() && z.reverse();
            !g.yAxis.isInverted() && G.reverse();
            n && (b = [G, z],
            d = P(b, 2),
            z = d[0],
            G = d[1],
            b);
            var C = n ? function(a) {
                return [c.mathLib.mapValue(k[0], k[2], z[0], z[1], a[1]), c.mathLib.mapValue(k[1], k[3], G[0], G[1], a[0])]
            }
            : function(a) {
                return [c.mathLib.mapValue(k[0], k[2], z[0], z[1], a[0]), c.mathLib.mapValue(k[1], k[3], G[0], G[1], a[1])]
            }
              , J = []
              , D = []
              , B = function(a) {
                var b = a.split(",");
                a = parseInt(b[0]);
                b = parseInt(b[1]);
                a !== x[0] && D[a - 1 + "," + b] || J.push([[a, b + 1], [a, b]]);
                b !== y[0] && D[a + "," + (b - 1)] || J.push([[a, b], [a + 1, b]]);
                a !== x[1] && D[a + 1 + "," + b] || J.push([[a + 1, b], [a + 1, b + 1]]);
                b !== y[1] && D[a + "," + (b + 1)] || J.push([[a + 1, b + 1], [a, b + 1]])
            }
              , K = function(a, b, e) {
                var d;
                if (b.length) {
                    var h = !1;
                    D = r(b);
                    J = [];
                    try {
                        for (var f = A(b), g = f.next(); !g.done; g = f.next()) {
                            var m = g.value
                              , k = m.userOptions.z;
                            !c.jsLib.isNull(k) && c.jsLib.def(k) && (h = !0);
                            B(m.x + "," + m.y)
                        }
                    } catch (Hc) {
                        var l = {
                            error: Hc
                        }
                    } finally {
                        try {
                            g && !g.done && (d = f.return) && d.call(f)
                        } finally {
                            if (l)
                                throw l.error;
                        }
                    }
                    b = v(J);
                    b = c.jsLib.map(b, function(a) {
                        a = c.jsLib.map(a, C);
                        return c.shapeLib.flattenD(c.shapeLib.pointsToPath(a)) + " Z "
                    }).join(" ");
                    l = c.jsLib.merge({}, a.currentOptions);
                    !h && a.asEmpty(l);
                    return c.jsLib.merge(c.stylingLib.shapeToAttr(l), {
                        d: b,
                        key: a.id + e
                    })
                }
                return []
            };
            if (q) {
                var L = []
                  , H = g.id
                  , E = [];
                b = function(a) {
                    var b, e, c = [], d = new Xc(a.currentOptions.pattern);
                    if (d.isInterval) {
                        d.setRange(p.date, p.endDate);
                        var h = [];
                        m.eachPoint(function(a) {
                            var b = d.isInside(a.currentOptions.attributes.date);
                            -1 < b && (c.push(a),
                            h[b] ? h[b].push(a) : h[b] = [a])
                        });
                        var f = 0
                          , g = c.length;
                        try {
                            for (var k = (b = void 0,
                            A(h)), l = k.next(); !l.done; l = k.next()) {
                                var n = l.value;
                                n && (L.push([g, K(a, n, f++)]),
                                E.push(g))
                            }
                        } catch (la) {
                            b = {
                                error: la
                            }
                        } finally {
                            try {
                                l && !l.done && (e = k.return) && e.call(k)
                            } finally {
                                if (b)
                                    throw b.error;
                            }
                        }
                    } else
                        c = t(d),
                        g = c.length,
                        L.push([g, K(a, c, 0)]),
                        E.push(g);
                    a.updateItemSet(H, c)
                }
                ;
                try {
                    for (var I = A(q), F = I.next(); !F.done; F = I.next())
                        b(F.value)
                } catch (W) {
                    var M = {
                        error: W
                    }
                } finally {
                    try {
                        F && !F.done && (f = I.return) && f.call(I)
                    } finally {
                        if (M)
                            throw M.error;
                    }
                }
                E = c.jsLib.sortedUniq(c.jsLib.sortBy(E, function(a) {
                    return a
                }));
                var O = g.zIndex;
                L = c.jsLib.map(L, function(a) {
                    a[1].zIndex = O + E.indexOf(a[0]) - 1;
                    return a[1]
                });
                m.updateHighlights(L, a)
            }
            return m
        }
        ;
        b.prototype.updateHighlights = function(a, b) {
            var e = this
              , d = e.series.renderer.renderer
              , m = e.series.rootVisuals.area;
            e.highlightAttrs = c.jsLib.map(a, function(a) {
                return e.render_applyDynamicAttrVals(a, b)
            });
            var g = [];
            c.jsLib.each(e.highlightAttrs, function(b) {
                g.push(c.jsLib.omit(b, Vc));
                var e = b.zIndex + 2 * a.length
                  , d = b.key + "OL";
                g.push(c.jsLib.merge(c.jsLib.omit(b, Wc), {
                    key: d,
                    zIndex: e
                }))
            });
            (a = e.highlightAttrs = g) && c.jsLib.mergeCollections(a, e.highlightVisuals, function(a) {
                var b = d.path(a).add(m);
                b.data.key = a.key;
                e.highlightVisuals.push(b)
            }, function(a, b) {
                return b.attr(a)
            }, function(a) {
                m.removeChild(a.el);
                c.jsLib.removeArrItem(e.highlightVisuals, a)
            }, function(a) {
                return a.key
            }, function(a) {
                return a.data.key
            });
            return e
        }
        ;
        b.prototype.clearHighlightVisuals = function() {
            var a = this.series, b;
            if ((b = this.highlightVisuals) && a.rootVisuals) {
                var d = a.rootVisuals.area;
                c.jsLib.each(b, function(a) {
                    d.removeChild(a.el);
                    a.destroy()
                })
            }
        }
        ;
        b.prototype.getTypeConfigDefault = function() {
            return yb()
        }
        ;
        b.prototype.styleIconVisual = function(a, b) {}
        ;
        b.prototype.getIconVisual = function(a, b, d) {
            var e = this.series
              , h = e.chart;
            b = e.renderer;
            var g = {
                z: {
                    fStr: "d4"
                }
            }
              , k = parseFloat(e.replaceTokens("{%zMaxSum}", g))
              , l = parseFloat(e.replaceTokens("{%zMinSum}", g));
            d = d.iconVisual || {};
            var n = d.root = d.root || b.panel({
                yAlignment: "center"
            })
              , p = [0 > l ? l : 0, 0 < k ? k : 0];
            g = parseFloat(e.replaceTokens("{%zSum}", g));
            e = e.options("palette") || h.palette;
            "object" === c.jsLib.getValType(e) ? (h = h.getSmartPalette(e),
            h = h.getValueColor(c.mathLib.mapValue(h.axisRange[0], h.axisRange[1], p[0], p[1], g))) : h = e[0];
            p = c.jsLib.evalPath(this, "series.legend.currentOptions");
            p = c.colorLib.modifyColor(p.boxVisible ? "lightenmore" : "darkenmore", p.fill || "#f0f0f0");
            d.base = d.base || b.createVisual({
                type: "bar",
                max: 0 < k ? k : 0,
                min: 0 > l ? l : 0,
                width: a[0],
                height: a[1],
                colors: [h, h, p],
                data: [g]
            }).add(n);
            return d
        }
        ;
        b.prototype.setIconVisualAttr = function(a, b) {
            b.isStyled = !0
        }
        ;
        b.prototype.getIconPaths = function(a) {}
        ;
        return b
    }(xb)
      , zb = function() {
        return {
            axes: "y,z",
            values: "x,y,z",
            privateAxes: "x,y,z",
            requiredData: "y",
            supportedData: "x,y,z",
            customAxisOptions: {
                z: {
                    visible: !1,
                    scale: {
                        includeOrigin: !0
                    }
                },
                y: {
                    visible: !1
                }
            }
        }
    }
      , Zc = function(d) {
        function b(a) {
            var b = d.call(this, a) || this;
            b.series = a;
            b.kind = "pie";
            b.typeConfig = zb();
            return b
        }
        F(b, d);
        b.prototype.getTypeConfigDefault = function() {
            return zb()
        }
        ;
        b.prototype.pointArrayExpander = function(a) {
            return {
                x: a[0],
                y: a[1],
                z: a[2]
            }
        }
        ;
        b.prototype.render = function(a) {
            var b = this.series.rootVisuals.points;
            a = a || {};
            a.coordinatesCorrection = function(a) {
                return c.dmUtils.snapPointToPanel(b, a, 1)
            }
            ;
            d.prototype.render.call(this, a);
            a.coordinatesCorrection = null;
            return this
        }
        ;
        b.prototype.setCoordinates = function(a, b) {
            var e = this.series
              , d = c.bboxLib.fromRect(a)
              , m = c.bboxLib.center(d)
              , g = a
              , k = function(a) {
                c.jsLib.def(a.x) && (a = c.bboxLib.fromRect(a));
                var b = Math.min(a[2], a[3]);
                return c.bboxLib.fromCenter(c.bboxLib.center(a), [b, b])
            }(a)
              , l = e.indexer.data.coordinates || e.prevCoords;
            l && (l = l.slice(0));
            b = c.jsLib.merge({
                phase: "outsideLabels"
            }, b);
            this.setCoordinatesWith(c.rectLib.fromBBox(k), b);
            b.phase = "";
            var n = c.bboxLib.fromRect(this.coordRectAll)
              , p = c.bboxLib.fromRect(this.coordRect)
              , q = c.bboxLib.center(n);
            if (c.bboxLib.bInsideA(d, n))
                d = g = ha(p, this.coordShapeBbox),
                this.setCoordinatesWith(a, b, d);
            else if (!(n[2] <= d[2] && n[3] <= d[3])) {
                q = function() {
                    var a = Math.min(k[2] + t, k[2] + r);
                    k = c.bboxLib.fromCenter(m, [a, a]);
                    g = c.rectLib.fromBBox(k)
                }
                ;
                var t = Math.min(d[2] - n[2], 0)
                  , r = Math.min(d[3] - n[3], 0);
                q();
                10 < g.width && this.setCoordinatesWith(a, b, g);
                n = c.bboxLib.fromRect(this.coordRectAll);
                t = Math.max(d[2] - n[2], 0);
                r = Math.max(d[3] - n[3], 0);
                q();
                this.setCoordinatesWith(a, b, g)
            }
            n = c.bboxLib.fromRect(this.coordRectAll);
            q = c.bboxLib.center(n);
            a = m[0] - q[0];
            d = m[1] - q[1];
            (a || d) && this.setCoordinatesWith(c.rectLib.translate(g, a, d), b);
            if (l)
                for (b = 0,
                a = e.points().items.length; b < a; b++)
                    e.indexer.getValue("coordinates", b).coordPrev = this.clearPrevCoord(l[b]);
            this.renderOrder = e.indexer.sortByNone();
            this.renderOrderRev = this.renderOrder.slice(0);
            this.renderOrderRev.reverse();
            return this
        }
        ;
        b.prototype.setCoordinatesWith = function(a, b, d) {
            var e = b ? b.coordinatesCorrection : null
              , h = this
              , g = h.series
              , k = g.currentOptions;
            var l = h.getShapeOptions(g.contentRect(), a);
            var n = sa(g);
            a = d || a;
            var p = [], q = [], t = [], r = [], v = g.indexer, u, w = g.points().items, x, y, z, G, C = 0, J = c.jsLib.pick(k.explodeOffset, 15);
            c.jsLib.evalPath(k, "emptyPointMode");
            var D, B, A = [[], [], [], []], E = function(a) {
                return c.jsLib.def(a) ? c.mathLib.mapValue(M || 0, I, 0, 1, a) : a
            };
            h.hasOutsideLabels = !1;
            var F = c.jsLib.evalPath(n, "start") || 0
              , H = 2 * Math.PI;
            if (k = c.jsLib.evalPath(n, "end"))
                H = c.trigLib.toRadians(k - F);
            F -= 90;
            v.hasAllKeys("zs,ze");
            v.indexKeys(["coordinates"], {}, 0);
            k = "donut" === g.ctManager.settingVal("pieType", g);
            var I = c.jsLib.pick(l.size[0], Math.max(10, Math.min(a.height, a.width))) / 2;
            var M = c.jsLib.def(l.innerSize) ? 1 < l.innerSize ? l.innerSize / 2 : E(l.innerSize) : E(k ? .33 : 0);
            var P = E(.66);
            k = c.jsLib.pick(l.cxy, c.bboxLib.center(c.bboxLib.fromRect(a)));
            var O = k[0]
              , Q = k[1];
            if (l = l.offset)
                O += l[0],
                Q += l[1];
            l = c.bboxLib.fromCenter([O, Q], [2 * I, 2 * I]);
            h.coordRect = c.rectLib.fromBBox(l);
            var T = g.zAxis.range && 0 > g.zAxis.range.min;
            l = v.getValue("pos", 0).xyzOrigins;
            var S = T ? l[2] : c.undefVal
              , V = 0 < S && 1 > S ? E(S) : I;
            l = function(a, d) {
                x = w[a];
                G = x.currentOptions;
                y = g.getPointAttr(G);
                z = v.getValue("pos", a).xyz;
                B = c.jsLib.def(z[2]) && !c.jsLib.isNaN(z[2]) ? E(z[2]) : I;
                D = M;
                var f = void 0;
                T && (z[2] < S ? (D = E(z[2]),
                B = V) : (D = V,
                B = E(z[2])));
                f = B;
                var k = c.jsLib.def(z[2]) ? c.jsLib.def(.66) ? c.mathLib.mapValue(D, B, 0, 1, .66) : .66 : P;
                if (v.getValue("isEmpty", a))
                    return "continue";
                d = x.replaceTokens({
                    token: "%percentOfSeries"
                });
                var m = [O, Q]
                  , l = c.mathLib.mapValue(0, H, 0, 100, d)
                  , n = c.mathLib.mapValue(0, H, 0, 100, C)
                  , K = c.trigLib.toDegrees(n);
                F && (K += F,
                n = c.trigLib.toRadians(K));
                K = n + l / 2;
                G.exploded && (m = c.bboxLib.fromRect(c.trigLib.getPolarPoint(m[0], m[1], K, J)).slice(0, 2));
                u = {
                    sweep: l,
                    angle: n,
                    path: c.undefVal,
                    xyz: c.undefVal,
                    xyzs: c.undefVal,
                    cxy: m.slice(0),
                    outerR: f,
                    innerR: M,
                    meta: {
                        label: c.undefVal
                    }
                };
                f = [m[0], m[1]];
                f = e ? e(f) : f;
                k = c.trigLib.getPolarPoint(f[0], f[1], K, k);
                u.xyzs = u.xyz = [k.x, k.y];
                k = u.pathOptions = {
                    start: u.angle,
                    end: u.angle + u.sweep,
                    open: !1,
                    r: B,
                    innerR: D,
                    cxy: f
                };
                k = u.path = c.shapeLib.arc(f[0], f[1], B, B, k);
                var L = c.pathLib.fromString(k);
                r.push(L.bbox());
                y.labelVisible && (k = h.positionLabel(x, L, y, u, b.phase),
                u.meta.labelOutside || "outsideLabels" === b.phase ? (A[c.trigLib.quadrant(u.angle + u.sweep / 2)].push(a),
                t.push(k)) : q.push(k),
                p.push(u.meta.label = k));
                var N = h.getLabelHitTest();
                u.hitTest = function(a, b) {
                    return L.hitTest(a, b) || N(this, a, b)
                }
                ;
                h.clearPrevCoord(v.getValue("coordinates", a));
                v.setValue("coordinates", a, u);
                C += d
            }
            ;
            k = 0;
            for (n = w.length; k < n; k++)
                l(k, n);
            c.bboxLib.collideAny(t) && h.unsquishLabels(A);
            r.length && (h.coordShapeBbox = c.bboxLib.bboxUnion(r),
            l = [c.bboxLib.bboxUnion(p)],
            h.coordShapeBbox && l.push(h.coordShapeBbox),
            l = c.bboxLib.bboxUnion(l),
            h.coordRectAll = c.rectLib.fromBBox(l));
            h.labelBoxes = {
                inside: q,
                outside: t
            };
            h.coordDirty = !1;
            return this
        }
        ;
        b.prototype.positionLabel = function(a, b, d, f, m) {
            var e = d.label.placement;
            e = "outsideLabels" === m ? "outside" : e || "auto";
            var h = d.label.autoHide
              , l = f.xyz;
            if (m = f.meta)
                m.labelFits = !0;
            this.initPointLabel(a, f, d);
            d = m.labelSize;
            if (b = "outside" !== e ? c.polyFitLib.fitBoxInPath(b, d, l) : c.undefVal)
                return a = c.bboxLib.center(b),
                b = c.bboxLib.fromCenter(a, d),
                m.labelOutside = !1,
                b;
            if ("inside" === e)
                return m.labelFits = !h,
                m.labelOutside = !1,
                c.bboxLib.fromCenter(l, d);
            b = c.bboxLib.fromRect(this.coordRect);
            e = c.bboxLib.center(b);
            h = b[2] / 2;
            l = c.trigLib.normalizeAngle(c.trigLib.toDegrees(f.angle));
            f = c.trigLib.toDegrees(f.sweep);
            f = (l + f / 2 + 90) % 360;
            e = c.trigLib.getPolarDegPoint(e[0], e[1], c.trigLib.normalizeAngle(f - 90), h);
            a = this.outsideLabelMargin + c.jsLib.pick(a.options("label.margin"), 5);
            b = 180 > f ? [b[0] + b[2] + a, e.y - d[1] / 2] : [b[0] - d[0] - a, e.y - d[1] / 2];
            b.push.apply(b, H(d));
            this.hasOutsideLabels = m.labelOutside = !0;
            return b
        }
        ;
        b.prototype.renderLabel = function(a, b, d, f, m) {
            f = this.series;
            var e = a.visuals
              , h = f.renderer
              , l = f.rootVisuals
              , n = d.meta;
            var p = b.label.autoHide;
            var q;
            !1 === d.meta.labelFits && p && (q = !0);
            var t = n && n.labelText ? n.labelText : a.replaceTokens(f.info.labelTextInfo.label)
              , r = n && n.labelAttr ? n.labelAttr : c.jsLib.omit(c.stylingLib.labelToAttr(b.label, ["offset"]), ["offsetX", "offsetY"]);
            !d.meta.labelOutside && b.label.hcColor && (r.fill = b.label.hcColor);
            (p = e.label) ? r.val = t : p = e.label = h.textStack(t);
            p.composeCombinations();
            if (n) {
                if (n = n.label.slice(0))
                    r = this.render_applyDynamicAttrVals([r, {
                        x: n[0],
                        y: n[1],
                        zIndex: f.zIndex + c.consts.zIndexReference.label
                    }], m),
                    p.attr(r);
                n = c.bboxLib.pad(n, -c.jsLib.pick(a.options("label.margin"), 5));
                if ((a = b.label.line) && !1 === a.visible || !d.meta.labelOutside || !b.labelConnector)
                    c.hideVisual(e.labelConnector);
                else {
                    a = d.angle + d.sweep / 2;
                    r = Math.min(this.coordRect.width / 2, d.outerR);
                    d = c.trigLib.quadrant(a);
                    d = 1 === d || 2 === d ? "left" : "right";
                    var v = [[n[0], n[1] + n[3] / 2], [n[0] + n[2], n[1] + n[3] / 2]];
                    t = c.bboxLib.center(c.bboxLib.fromRect(this.coordRect));
                    var u = c.trigLib.getPolarPoint(t[0], t[1], a, this.coordRect.width / 2);
                    u = [t, [u.x, u.y]];
                    u = c.trigLib.lineIntersect(v[0], v[1], u[0], u[1]);
                    null === u.x && (v = v["right" === d ? 0 : 1],
                    u.x = v[0],
                    u.y = v[1]);
                    a = c.bboxLib.fromRect(c.trigLib.getPolarPoint(t[0], t[1], a, r)).slice(0, 2);
                    r = c.bboxLib.center(n);
                    r[0] = "left" === d ? n[0] + n[2] + 3 : n[0] - 3;
                    n = [u.x, u.y];
                    "left" === d ? (n[0] < r[0] && (n = r),
                    a[0] < n[0] && (a = n),
                    p.attr({
                        xAlignment: "right"
                    })) : (n[0] > r[0] && (n = r),
                    a[0] > n[0] && (a = n),
                    p.attr({
                        xAlignment: "left"
                    }));
                    n = [r, n, a];
                    n = c.dmUtils.snapPointsToPanel(l.points, n, 1);
                    n = c.shapeLib.pointsToPath(n);
                    n = Wa(c.pathLib.fromString(n), 0, 0);
                    r = this.render_applyDynamicAttrVals([{
                        opacity: 1,
                        d: n,
                        zIndex: f.zIndex + c.consts.zIndexReference.labelConnector,
                        caps: {
                            size: 7,
                            overflow: !1,
                            type: "none",
                            fill: b.baseColor,
                            start: {
                                type: "circle"
                            }
                        }
                    }, b.labelConnectorAttr], m);
                    (p = e.labelConnector) ? p.attr(r) : e.labelConnector = h.renderer.path().attr(r).add(l.points)
                }
                q && c.hideVisual(e.label)
            }
        }
        ;
        b.prototype.hideUnusedPointVisuals = function(a) {
            var b = a.visuals;
            c.hideVisual(b.rect);
            this.series.options("forceMarker") || a.options("marker.visible") || c.hideVisual(b.marker);
            c.hideVisual(b.rectComplete);
            c.hideVisual(b.rect);
            c.hideVisual(b.errorX);
            c.hideVisual(b.errorY);
            c.hideVisual(b.errorXV);
            c.hideVisual(b.errorYV)
        }
        ;
        b.prototype.render_applyDynamicAttrVals = function(a, b, c) {
            return a = d.prototype.render_applyDynamicAttrVals.call(this, a, b, c)
        }
        ;
        b.prototype.getIconPaths = function(a, b) {
            return c.getColumnIconPathsStatic(this, a, b)
        }
        ;
        b.prototype.getPointAnimatorOptions = function(a, b) {
            return a.coordPrev ? {
                slice: {
                    to: a.pathOptions,
                    from: a.coordPrev.pathOptions
                }
            } : {}
        }
        ;
        return b
    }(ub)
      , E = {
        scrollbarHeight: 16,
        handleControlSize: 19,
        scrollbarControlSize: 8,
        toolbarHeight: 36,
        toolbarItemsHeight: 24,
        toolbarButtonsNumber: 3,
        iconStrokeWidth: 1,
        itemMargin: 6,
        rangeFormat: "MM/dd/yyyy"
    }
      , Ab = function(c) {
        return {
            type: "button",
            style: "cursor:ew-resize;",
            position: "inside " + c,
            boxVisible: !1,
            margin: 0,
            icon: {
                d: "M 0 0 H 10 V 20 H 0 V 0 M 4 5 V 15 M 6 5 V 15",
                size: E.handleControlSize,
                fill: "#f2f2f2",
                stroke: "#999999",
                strokeWidth: E.iconStrokeWidth
            }
        }
    }
      , Bb = function(c, b) {
        return {
            type: "input",
            position: "tltl",
            value: c,
            width: 90,
            "text-align": "center",
            "background-color": "white",
            border: "1px solid #bdbdbd",
            margin: [-E.toolbarHeight + E.itemMargin, 0, 0, E.itemMargin],
            height: E.toolbarItemsHeight,
            events_focusout: b
        }
    }
      , ac = function() {
        function d(b, a) {
            this.chart = b;
            this.chartAxesX = [];
            this.chartAxesY = [];
            this.rendered = !1;
            this.rangeBarItems = [];
            this.scrollBarItems = [];
            this.clientXOffset = 0;
            this.state = {};
            this.defaults = E;
            this.docVUp = this.docMM = c.undefVal;
            this.actionIdleDefer = new c.idleDefer;
            var e = b.boxDefaults(1);
            this.options = c.jsLib.merge({
                fill: e.fill,
                toolbar: {
                    fill: e.fill,
                    outline: e.outline.color
                },
                previewArea: {}
            }, a);
            this.init(b.chartAreaSet.items)
        }
        d.prototype.init = function(b) {
            this.state.scrollbar = !1 !== this.options.xScrollbarEnabled;
            this.state.toolbar = !1 !== this.options.toolbar.visible;
            this.state.previewArea = !1 !== this.options.previewArea.visible;
            for (var a = 0, c = b.length; a < c; a++) {
                var d = b[a];
                a === c - 1 && this.state.previewArea ? this.refAxis = d.axes(0) : (this.chartAxesX.push(d.axes(0)),
                this.chartAxesY.push([d.axes(1), d.axes(2)]));
                d.rootPanel.attr({
                    offsetY: -a
                })
            }
            this.refAxis = this.refAxis || this.chartAxesX[0];
            this.refRange = this.refAxis.range;
            this._docElement || (this._docElement = this.chart.renderer.renderer.documentElement)
        }
        ;
        d.prototype.setRange = function(b) {
            var a = this;
            a.chart.chartAreaSet.each(function(b) {
                b.readyDefer.release(b.navHold);
                a.rendered && (b.navHold = b.readyDefer.hold("navZoom"))
            });
            a.currentRange = {
                min: b.min,
                max: b.max
            };
            c.jsLib.each(a.chartAxesX, function(a) {
                return a.zoom(b.min, b.max)
            });
            c.jsLib.each(a.chartAxesY, function(a) {
                return c.jsLib.each(a, function(a) {
                    return a && a.zoom()
                })
            });
            a.rendered ? (a.state.toolbar && a.updateToolbarItems(),
            a.state.previewArea && a.updateScrollBarItems()) : (a.state.toolbar && a.addToolbarItems(),
            a.state.previewArea && a.addScrollBarItems(),
            a.refAxis.chart.redraw());
            a.chart.chartAreaSet.each(function(a) {
                a.readyDefer.release(a.navHold)
            });
            a.rendered = !0
        }
        ;
        d.prototype.updateToolbarItems = function() {
            var b = this.rangeBarItems
              , a = b[0];
            b = b[2];
            var e = this.getFormattedRange(this.currentRange);
            a.options({
                value: e.min
            });
            b.options({
                value: e.max
            });
            b = this.chartAxesX[0].chartArea;
            a = b.rootVisuals.contentStroke.getBbox();
            b = c.dmUtils.snapPointToPanel(b.rootVisuals.contentOverlay, [a.x, a.y], 1);
            this.toolbarBackground.attr({
                width: a.width,
                offsetX: b[0],
                offsetY: b[1]
            })
        }
        ;
        d.prototype.updateScrollBarItems = function() {
            var b = this.refAxis
              , a = this.currentRange
              , c = this.valToPx(b, a.min);
            b = this.valToPx(b, a.max);
            1 < Math.abs(this.leftX - c) && (this.leftX = c);
            1 < Math.abs(this.rightX - b) && (this.rightX = b);
            this.updateLeftCurtain();
            this.updateRightCurtain();
            this.updateScrollbarIcon()
        }
        ;
        d.prototype.scrollBarVisibility = function() {
            return Math.abs(this.rightX - this.leftX) > 2 * E.scrollbarControlSize ? "visible" : "hidden"
        }
        ;
        d.prototype.getLeftCurtainIconPosition = function() {
            return c.dmUtils.snapPointToPanel(this.refAxis.chart.rootVisuals.uiItemsFront, [this.leftX - E.handleControlSize / 2, this.handleTopOffset], 1)
        }
        ;
        d.prototype.getRightCurtainIconPosition = function() {
            return c.dmUtils.snapPointToPanel(this.refAxis.chartArea.rootVisuals.contentOverlay, [this.rightX - 2 - E.handleControlSize / 2, this.handleTopOffset], 1)
        }
        ;
        d.prototype.getScrollbarIconPosition = function() {
            return c.dmUtils.snapPointToPanel(this.refAxis.chartArea.rootVisuals.contentOverlay, [(this.leftX + this.rightX) / 2 - E.scrollbarControlSize / 2, this.scrollBarTopOffset + (E.scrollbarHeight - E.scrollbarControlSize) / 2], 1)
        }
        ;
        d.prototype.valToPx = function(b, a) {
            return b._sizeMetrics.length * b.viewState.valToLin(a)
        }
        ;
        d.prototype.attachDoc = function() {
            var b = this
              , a = b.refAxis.chartArea
              , c = this._docElement;
            b.docMM && b.docVUp || (a = a.rootVisuals.content,
            this.docMM = a.externalOn(c, "vmove", function(a) {
                return b.docVMoveHandler(a)
            }),
            this.docVUp = a.externalOn(c, "vup", function(a) {
                return b.vupHandler()
            }))
        }
        ;
        d.prototype.detachDoc = function() {
            this.docMM && this.docMM.un();
            this.docVUp && this.docVUp.un();
            this.docMM = this.docVUp = null
        }
        ;
        d.prototype.addScrollBarItems = function() {
            var b = this
              , a = this
              , e = a.refAxis
              , d = a.currentRange
              , f = a.state.scrollbar
              , m = a.state.toolbar
              , g = e.chartArea
              , k = g.rootVisuals.contentStroke.getBbox()
              , l = a.options.toolbar
              , n = g.rootVisuals.contentOverlay;
            a.actionIdleDefer = a.actionIdleDefer || new c.idleDefer;
            a.leftX = a.valToPx(e, d.min) - 1;
            a.rightX = a.valToPx(e, d.max) + 1;
            if (f) {
                var p = c.dmUtils.snapPointToPanel(n, [0, k.y + k.height], 1);
                a.scrollBar = g.renderer.shape("rectangle", {
                    width: k.width,
                    offsetX: p[0],
                    offsetY: p[1],
                    height: E.scrollbarHeight,
                    fill: a.options.fill,
                    stroke: l.outline
                }).add(n)
            }
            l = c.dmUtils.snapPointToPanel(n, [0, k.y], 0);
            a.leftCurtain = g.renderer.shape("rectangle", {
                width: a.leftX,
                offsetX: l[0],
                offsetY: l[1],
                height: k.height + (f ? E.scrollbarHeight : 0),
                fill: "lightgray",
                opacity: .7
            }).add(n);
            l = c.dmUtils.snapPointToPanel(n, [a.rightX, k.y], 0);
            a.rightCurtain = g.renderer.shape("rectangle", {
                width: k.width - a.rightX,
                offsetX: l[0],
                offsetY: l[1],
                height: k.height + (f ? E.scrollbarHeight : 0),
                fill: "lightgray",
                opacity: .7
            }).add(n);
            g = e.chartArea.rootPanel.getBbox();
            n = a.chartAxesX.length;
            l = 2 * E.iconStrokeWidth;
            a.markerHeight = k.height;
            a.handleTopOffset = g.y - n - (m ? E.toolbarHeight : 0) + (k.height - E.handleControlSize) / 2 - l;
            a.scrollBarTopOffset = g.y - n - (m ? E.toolbarHeight : 0) + k.height - l;
            e.chart.uiItems.add(Ab(a.getLeftCurtainIconPosition()));
            e.chart.uiItems.add(Ab(a.getRightCurtainIconPosition()));
            a.scrollBarItems = e.chart.uiItems().items.splice(-2);
            m = function(b) {
                return function() {
                    a.currentItemId = b;
                    a.attachDoc()
                }
            }
            ;
            a.scrollBarItems[0].rootPanel.el.on("vdown", m(0));
            a.scrollBarItems[1].rootPanel.el.on("vdown", m(1));
            a.scrollBarItems[0].rootPanel.el.on("vup", function() {
                return a.vupHandler()
            });
            a.scrollBarItems[1].rootPanel.el.on("vup", function() {
                return a.vupHandler()
            });
            e.chartArea.rootPanel.el.on("vup", function() {
                return a.vupHandler()
            });
            e.chartArea.rootPanel.el.on("vdown", function(a) {
                var c = b.getNavigatorAreaBbox();
                a.clientX - c.left < b.leftX || a.clientX - c.left > b.rightX ? (b.currentItemId = 2,
                b.updateNavigatorFast(a, d)) : (b.currentItemId = 3,
                b.clientXOffset = a.clientX - (b.rightX + b.leftX) / 2);
                b.attachDoc()
            });
            e.chartArea.rootPanel.el.on("vmove", function(b) {
                return a.vMoveHandler(b)
            });
            f && (e.chart.uiItems.add({
                type: "button",
                style: "cursor:ew-resize;",
                position: "inside " + a.getScrollbarIconPosition(),
                boxVisible: !1,
                margin: 0,
                icon: {
                    d: "M 0 0 V 8 M 4 0 V 8 M 8 0 V 8",
                    size: E.scrollbarControlSize,
                    fill: "#f2f2f2",
                    stroke: "#999999",
                    strokeWidth: E.iconStrokeWidth
                }
            }),
            a.scrollbarControlIcon = a.refAxis.chart.uiItems(-1),
            a.scrollbarControlIcon.rootPanel.el.on("vdown", m(2)),
            a.scrollbarControlIcon.rootPanel.el.on("vup", function() {
                return a.vupHandler()
            }))
        }
        ;
        d.prototype.vMoveHandler = function(b) {
            void 0 !== this.currentItemId && this.updateNavigatorFast(b, this.currentRange)
        }
        ;
        d.prototype.vupHandler = function() {
            this.actionCaUpdate();
            this.actionIdleDefer.clearAll();
            this.currentItemId = void 0;
            this.detachDoc()
        }
        ;
        d.prototype.actionCaUpdate = function() {
            var b = c.jsLib.isUndefined(this.currentItemId)
              , a = this.currentRange.min
              , e = this.currentRange.max
              , d = a > e;
            this.clientXOffset = 0;
            !b && this.setRange({
                min: d ? e : a,
                max: d ? a : e
            })
        }
        ;
        d.prototype.docVMoveHandler = function(b) {
            this.vMoveHandler(b.eventArgs) && b.eventArgs.preventDefault()
        }
        ;
        d.prototype.addToolbarItems = function() {
            var b = this
              , a = b.refRange
              , e = []
              , d = b.getFormattedRange(b.currentRange);
            e.push(Bb(d.min, function(e) {
                e = b.getRangeFromString(e);
                !c.jsLib.isNaN(e) && e < b.currentRange.max && b.setRange({
                    min: Math.max(e, a.min),
                    max: b.currentRange.max
                })
            }));
            e.push({
                position: "tltl",
                label: "-",
                height: E.toolbarItemsHeight,
                boxVisible: !1,
                margin: [-E.toolbarHeight + E.itemMargin, 0, 0, E.itemMargin]
            });
            e.push(Bb(d.max, function(e) {
                e = b.getRangeFromString(e);
                !c.jsLib.isNaN(e) && e > b.currentRange.min && b.setRange({
                    min: b.currentRange.min,
                    max: Math.min(e, a.max)
                })
            }));
            d = c.jsLib.evalPath(b.options, "toolbar.quickZoomIntervals");
            d = b.getToolbarButtonHandlers(d);
            c.jsLib.each(d, function(c) {
                e.push({
                    position: "trtr",
                    label: {
                        text: c.name,
                        autoWrap: "none"
                    },
                    height: E.toolbarItemsHeight,
                    margin: [-E.toolbarHeight + E.itemMargin, E.itemMargin, 0, 0],
                    events_click: function() {
                        if (c.range) {
                            var e = b.currentRange;
                            b.setRange({
                                min: Math.max(e.max - c.range, a.min),
                                max: e.max
                            })
                        } else
                            b.setRange({
                                min: a.min,
                                max: a.max
                            })
                    }
                })
            });
            b.chart.uiItems.add(e);
            d = b.chartAxesX[0].chartArea;
            var f = d.rootVisuals.contentStroke.getBbox()
              , m = b.options.toolbar
              , g = d.rootVisuals.contentOverlay
              , k = c.dmUtils.snapPointToPanel(g, [f.x, f.y], 1);
            b.toolbarBackground = d.renderer.shape("rectangle", {
                width: f.width,
                offsetX: k[0],
                offsetY: k[1],
                height: E.toolbarHeight,
                margin: [-E.toolbarHeight, 0, 0],
                fill: m.fill,
                stroke: m.outline
            }).add(g);
            b.rangeBarItems = b.chart.uiItems().items.splice(-(E.toolbarButtonsNumber + 4))
        }
        ;
        d.prototype.getFormattedRange = function(b) {
            var a = this.refAxis
              , c = a.formatter()
              , d = "time" === a.type
              , f = function(b) {
                return d ? c.formatDate(new Date(b), E.rangeFormat) : a.format(b)
            };
            return {
                min: f(b.min),
                max: f(b.max)
            }
        }
        ;
        d.prototype.getRangeFromString = function(b) {
            return "time" === this.refAxis.type ? (new Date(b)).getTime() : parseFloat(b)
        }
        ;
        d.prototype.getToolbarButtonHandlers = function(b) {
            var a = this
              , e = a.refRange.range
              , d = [];
            if (b)
                b = b.split(","),
                c.jsLib.each(b, function(b) {
                    b = b.split("=");
                    var c = a.parseInterval(b[0], e);
                    c && (b[1] && (c.name = b[1]),
                    d.push(c))
                });
            else {
                b = a.chartAxesX[0].unZoomedRange;
                b = (new Date(b.max - b.min)).getTime();
                var f = [];
                for (d.push({
                    name: "Max"
                }); f.length < E.toolbarButtonsNumber; ) {
                    var m = a.parseInterval(b /= 1.5, e)
                      , g = m.name;
                    -1 < f.indexOf(g) || (d.unshift(m),
                    f.push(g))
                }
            }
            return d
        }
        ;
        d.prototype.parseInterval = function(b, a) {
            var e = "ms s m h d m y".split(" ")
              , d = [1E3, 60, 60, 24, 30, 12];
            if (c.jsLib.isString(b)) {
                b = b.trim();
                if ("Max" === b)
                    return {
                        name: b
                    };
                var f = b.match("[0-9]+")
                  , m = b.match("[a-zA-Z]+");
                if (f && m) {
                    var g = parseInt(f[0]) || 1;
                    m = m[0];
                    f = 0;
                    for (var k = d.length; f < k; f++) {
                        if (e[f] === m && 100 > a / g)
                            return {
                                name: b,
                                range: g
                            };
                        g *= d[f]
                    }
                    return
                }
            } else
                g = b;
            m = g;
            b = -1;
            g = 0;
            for (f = a = 1; 1 < m; )
                a *= f,
                f = d.shift(),
                b++,
                g = m,
                m /= f;
            a: {
                d = [[1, 10, 100], [1, 30], [1, 5, 30], [1, 12], [1, 7], [1, 3, 6], [1, 2, 5, 50]][b];
                m = d[0];
                f = Math.abs(g - m);
                k = 1;
                for (var l = d.length; k < l; k++) {
                    m = d[k];
                    var n = Math.abs(g - m);
                    if (n > f) {
                        d = d[k - 1];
                        break a
                    } else
                        f = n
                }
                d = m
            }
            return {
                name: "" + d + e[b],
                range: a * d
            }
        }
        ;
        d.prototype.getNavigatorAreaBbox = function() {
            return this.refAxis.chartArea.rootPanel.el.el.getBoundingClientRect()
        }
        ;
        d.prototype.updateNavigatorFast = function(b, a) {
            a = this.getNavigatorAreaBbox();
            var e = this.currentItemId
              , d = b.clientX
              , f = a.width - 0;
            if (0 === e)
                this.leftX = c.jsLib.clamp(d - a.left, 0, this.rightX);
            else if (1 === e)
                this.rightX = c.jsLib.clamp(d - a.left, this.leftX, f);
            else if (e || !b)
                b = 2 === e ? a.left : this.clientXOffset,
                a = this.rightX - this.leftX,
                this.leftX = d = c.jsLib.clamp(d - b - a / 2, 0, f - a),
                this.rightX = d + a;
            1 !== e && this.updateLeftCurtain();
            0 !== e && this.updateRightCurtain();
            this.state.scrollbar && this.updateScrollbarIcon()
        }
        ;
        d.prototype.updateLeftCurtain = function() {
            var b = this.refAxis
              , a = b.linToVal(this.leftX);
            this.leftCurtain.attr({
                width: Math.ceil(this.leftX + 1)
            });
            this.scrollBarItems[0].options({
                position: "inside " + this.getLeftCurtainIconPosition()
            });
            this.currentRange.min = Math.max(b.range.min, a)
        }
        ;
        d.prototype.updateRightCurtain = function() {
            var b = this.refAxis
              , a = b.linToVal(this.rightX)
              , e = b.chartArea.rootVisuals.contentOverlay
              , d = Math.ceil(this.rightX)
              , f = c.dmUtils.snapPointToPanel(b.chartArea.rootVisuals.contentOverlay, [this.rightX, 0], 0);
            this.rightCurtain.attr({
                width: Math.ceil(e.getBbox().width - d + 1),
                offsetX: f[0]
            });
            this.scrollBarItems[1].options({
                position: "inside " + this.getRightCurtainIconPosition()
            });
            this.currentRange.max = Math.min(b.range.max, a)
        }
        ;
        d.prototype.updateScrollbarIcon = function() {
            this.state.scrollbar && this.scrollbarControlIcon.options({
                position: "inside " + this.getScrollbarIconPosition(),
                visibility: this.scrollBarVisibility()
            })
        }
        ;
        return d
    }()
      , $c = c.timeLib.GroupingFunctions
      , Qa = c.timeLib.CalendarPattern
      , aa = {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5,
        decade: 314496E6
    }
      , Ra = aa.day
      , Cb = aa.hour
      , ad = aa.minute
      , Sa = function(c) {
        return c
    }
      , T = function(c) {
        return c.getMonth ? c : new Date(c)
    }
      , O = function(c) {
        return T(c).getTime()
    }
      , Ta = {
        years: 12,
        decade: 11,
        year: 10,
        quarter: 9,
        month: 8,
        week: 7,
        dayofyear: 6.2,
        day: 6.1,
        weekday: 6,
        hour: 3,
        minuteofday: 2.1,
        minute: 2,
        secondofhour: 1.1,
        second: 1
    }
      , Db = function(c) {
        return c.unit ? c.mod ? 0 : Ta[c.unit] * (c.mul ? c.mul : 1) / (c.mod ? c.mod : 1) : Ta[c]
    }
      , ya = function(c) {
        return bd[Math.floor(Ta[c.unit || c])]
    }
      , bd = [, "second", "minute", "hour", , , "day", "week", "month", "quarter", "year", "decade", "years"]
      , Eb = function(d) {
        return c.jsLib.isString(d) ? c.timeLib.intervalToSpan({
            unit: ya(d)
        }) : c.timeLib.intervalToSpan({
            unit: ya(d.unit),
            multiplier: d.mul || 1
        })
    }
      , za = {
        decade: {
            x: "month",
            y: "year",
            z: "month",
            v: "day",
            interval: "decade",
            format: {
                series: "year",
                point: "year,month",
                x: {
                    unit: "month",
                    toDate: function(c) {
                        return new Date(2020,c - 1,1)
                    }
                },
                y: {
                    unit: "year",
                    toDate: function(c) {
                        return new Date(c,0,1)
                    }
                }
            },
            spans: {
                interval: 11 * aa.year
            }
        },
        years: {
            x: "month",
            y: "year",
            z: "month",
            v: "day",
            interval: "none",
            format: {
                series: "year",
                point: "year,month",
                x: {
                    unit: "month",
                    toDate: function(c) {
                        return new Date(2020,c - 1,1)
                    }
                },
                y: {
                    unit: "year",
                    toDate: function(c) {
                        return new Date(c,0,1)
                    }
                }
            }
        },
        year: {
            x: "week",
            y: "weekday",
            z: "day",
            v: "hour",
            interval: "year",
            format: {
                point: "day,month,year"
            },
            defPattern: {
                month: "*"
            }
        },
        quarter: {
            x: "week",
            y: "weekday",
            z: "day",
            v: "hour",
            interval: "quarter",
            defPattern: {
                month: "*"
            }
        },
        month: {
            x: "weekday",
            y: "week",
            z: "day",
            v: "hour",
            interval: "month"
        },
        week: {
            x: "hour",
            y: "weekday",
            z: "hour",
            v: "minute",
            interval: "week",
            format: {
                point: "weekday,hour"
            }
        },
        week30min: {
            x: {
                unit: "minuteofday",
                mul: 30,
                mod: 48
            },
            y: "weekday",
            z: "hour",
            v: "minute",
            interval: "week",
            format: {
                point: "weekday,hour,minute",
                x: {
                    interval: 6,
                    unit: "hour",
                    toDate: function(c) {
                        return (new Date(2020,0,1)).setMinutes(30 * c)
                    }
                }
            }
        },
        day: {
            x: "hour",
            y: "minute",
            z: "minute",
            v: "second",
            interval: "day"
        },
        dayminutes: {
            x: "hour",
            y: "minute",
            z: "minute",
            v: "second",
            interval: "day",
            format: {
                series: "day,month,year",
                point: "hour,minute"
            }
        },
        dayhours: {
            x: {
                unit: "hour",
                mul: 1,
                mod: 6
            },
            y: {
                unit: "hour",
                mul: 6
            },
            z: "hour",
            v: "minute",
            interval: "day",
            format: {
                x: "hidden",
                y: {
                    interval: 1,
                    unit: {
                        hour: "numeric",
                        minute: "2-digit"
                    },
                    toDate: function(c) {
                        return (new Date(2020,0,1)).setHours(6 * c)
                    }
                },
                series: "day,month",
                point: "hour,minute"
            }
        },
        day30min: {
            x: {
                unit: "minuteofday",
                mul: 30,
                mod: 6
            },
            y: {
                unit: "hour",
                mul: 3
            },
            z: {
                unit: "minuteofday",
                mul: 30,
                mod: 6
            },
            v: "minute",
            interval: "day",
            format: {
                y: {
                    interval: 1
                },
                series: "day,month",
                point: "hour,minute"
            }
        },
        day15min: {
            x: {
                unit: "minuteofday",
                mul: 15,
                mod: 12
            },
            y: {
                unit: "hour",
                mul: 3
            },
            z: "minute",
            v: "second",
            interval: "day",
            format: {
                y: {
                    interval: 1
                },
                series: "day,month,year",
                point: "hour,minute"
            }
        },
        day5min: {
            x: {
                unit: "minuteofday",
                mul: 5,
                mod: 12
            },
            y: {
                unit: "hour",
                mul: 1
            },
            z: {
                unit: "minuteofday",
                mul: 5,
                mod: 12
            },
            v: "minute",
            interval: "day",
            format: {
                y: {
                    interval: 3
                },
                x: {
                    unit: {
                        minute: "2-digit"
                    },
                    toDate: function(c) {
                        return (new Date(2020,0,1)).setMinutes(5 * c)
                    }
                },
                series: "day,month",
                point: "hour,minute"
            }
        },
        hour: {
            x: "hour",
            y: "second",
            z: "second",
            v: "millisecond",
            interval: "hour"
        },
        hourseconds: {
            x: "hour",
            y: "second",
            z: "second",
            v: "millisecond",
            interval: "hour"
        },
        hour30sec: {
            x: {
                unit: "secondofhour",
                mul: 30,
                mod: 10
            },
            y: {
                unit: "minuteofday",
                mul: 5
            },
            z: "second",
            v: {
                unit: "millisecond",
                mul: 50
            },
            interval: "hour",
            format: {
                x: "hidden"
            }
        },
        hour10sec: {
            x: {
                unit: "secondofhour",
                mul: 10,
                mod: 30
            },
            y: {
                unit: "minuteofday",
                mul: 5
            },
            z: "second",
            v: {
                unit: "millisecond",
                mul: 50
            },
            interval: "hour",
            format: {
                x: "hidden"
            }
        },
        hourminutes: {
            x: {
                unit: "minute",
                mul: 1,
                mod: 10
            },
            y: {
                unit: "minuteofday",
                mul: 10
            },
            z: "minute",
            v: {
                unit: "second",
                mul: 10
            },
            interval: "hour",
            format: {
                x: "hidden"
            }
        },
        minute: {
            x: "second",
            y: "millisecond",
            z: "millisecond",
            v: "millisecond",
            interval: "hour"
        }
    }
      , cd = ["day", "hour"]
      , ed = function(d, b, a, e) {
        var h = O(b) - O(d);
        d = function(a) {
            return {
                hour: "hourMinutes",
                day: "dayHours"
            }[a] || a
        }
        ;
        b = "";
        for (var f in aa)
            1.3 * h >= aa[f] && (b = f);
        return a && (f = c.jsLib.filter(dd, function(b) {
            return b.cell >= a && b.interval >= h
        }),
        f.length) ? (f = c.jsLib.sortBy(f, function(a) {
            return a.interval
        })[0],
        f.interval > 5 * h ? d(b) : d(f.name)) : d(b)
    }
      , dd = function() {
        var d = [], b = function(a) {
            return Eb(c.jsLib.sortBy([a.x, a.y], function(a) {
                return Db(a)
            })[0])
        }, a;
        for (a in za) {
            var e = za[a];
            d.push({
                cell: c.jsLib.evalPath(e, "spans.cell") || b(e),
                interval: c.jsLib.evalPath(e, "spans.interval") || Eb(e.interval),
                name: a
            })
        }
        return c.jsLib.sortBy(d, function(a) {
            return a.cell
        })
    }()
      , fd = function(d) {
        var b = []
          , a = {}
          , e = c.jsLib.evalPath;
        d = c.jsLib.map(d, function(a) {
            b.push(a.attributes);
            return c.jsLib.omit(a, ["attributes"])
        });
        d = c.jsLib.merge.apply(c.jsLib, H([{}], d));
        c.jsLib.each(b, function(b) {
            var c, d;
            for (d in b)
                e(a, d + ".pop") && b[d].pop ? (c = a[d]).push.apply(c, H(b[d])) : a[d] = b[d].pop ? b[d].slice(0) : b[d]
        });
        for (var h in a)
            a[h].pop && (a[h] = a[h].join(""));
        d.attributes = a;
        return d
    }
      , gd = function(d, b) {
        for (var a = d.length, e, h, f, m = function(a) {
            return c.jsLib.def(a) && !c.jsLib.isNaN(a)
        }, g = function(b) {
            for (; b < a; b++)
                if (m(d[b]))
                    return b;
            return -1
        }, k = 0; k < a; k++)
            f = d[k],
            m(f) ? (e = f,
            h = k) : (f = g(k),
            c.jsLib.def(h) && -1 < f ? d[k] = c.mathLib.mapValue(e, d[f], h, f, k) : b && (d[k] = 0));
        return d
    }
      , dc = function() {
        function d(b, a) {
            this.chart = b;
            this.chartOptions = a;
            this.userOptions = {};
            this.currentOptions = {};
            this.legendEntries = [];
            this.resetData().options(a.calendar || {})
        }
        d.prototype.resetData = function() {
            this.data = [];
            this.dateRange = [];
            this.dataInfo = {
                subValsMin: Number.MAX_VALUE,
                subValsMax: Number.MIN_VALUE
            };
            return this
        }
        ;
        d.prototype.hasData = function() {
            return this.data && this.data.length
        }
        ;
        d.prototype.options = function(b, a) {
            a = this.optionsGetter(b);
            if ("NotGetter" !== a)
                return a;
            c.jsLib.merge(this.userOptions, b);
            this.setOptions();
            return this
        }
        ;
        d.prototype.optionsGetter = function(b) {
            var a = c.jsLib.getValType(b)
              , e = this.currentOptions;
            return "undefined" === a ? e : "string" === a ? c.jsLib.evalPath(e, b.replace(/_/g, ".")) : "NotGetter"
        }
        ;
        d.prototype.setOptions = function() {
            var b = this.chart.ctManager
              , a = this.currentOptions = c.jsLib.merge(this.defaultOptions(), this.userOptions)
              , e = -1 < b.curCtDst().ct.explicit.indexOf("calendarType");
            a.view = e ? b.settingVal("calendarType") : a.view || "auto";
            this.fnSet = new $c(a.weekStart);
            a.view && this.setView(a.view);
            a.culture = this.chart.currentOptions.defaultCultureName || a.culture;
            this.isHoriz = this.chart.ctManager.isHoriz();
            return this
        }
        ;
        d.prototype.defaultOptions = function() {
            return {
                view: "auto",
                calculation: "sum",
                culture: "us-en",
                weekStart: 0,
                defaultEmptyPoint: {
                    mouseTracking: !1,
                    color: "#fff",
                    outline: {
                        color: "#c9c9c9"
                    },
                    hatch: {
                        style: "dark-upward-diagonal",
                        color: "#f0f0f0"
                    },
                    legendEntry: {
                        name: "No Data",
                        value: " ",
                        sortOrder: 1E3,
                        cursor: "default"
                    }
                },
                defaultEdgePoint: {
                    color: "#fdfdfd",
                    label: {
                        color: "#dfdfdf"
                    }
                }
            }
        }
        ;
        d.prototype.setRange = function(b, a) {
            this.range = [O(b), O(a)]
        }
        ;
        d.prototype.setView = function(b) {
            var a = b.toLowerCase()
              , e = za[a];
            -1 < cd.indexOf(b) || ("auto" === b ? this.groupingFns = this.groupings = this.view = c.undefVal : (this.view = a,
            this.setGroupings(e)))
        }
        ;
        d.prototype.setAutoView = function(b) {
            b = ed(b[0], b[1], this.dataInfo.minInterval, this.currentOptions.view);
            this.setView(b)
        }
        ;
        d.prototype.setGroupings = function(b) {
            var a = this.fnSet
              , e = b.x
              , d = b.y
              , f = b.z
              , m = b.v
              , g = b.interval;
            this.groupings = b;
            this.sortedGroupingNames = c.jsLib.sortBy([e, d], function(a) {
                return Db(a)
            });
            var k = {};
            k[b.interval] = "*";
            this.calPatInterval = new Qa(k);
            this.groupingFns = {
                x: a.fn(e),
                y: a.fn(d),
                z: a.fn(f),
                v: a.fn(m),
                interval: a.fn(g)
            };
            this.formatters = {
                x: Sa,
                y: Sa,
                z: Sa
            };
            return this
        }
        ;
        d.prototype.indexRawDataItem = function(b, a) {
            b = O(b);
            var c = this.calPatInterval.isInside(b)
              , d = [this.groupingFns.x(b), this.groupingFns.y(b), b];
            this.addDataAt(c, d[0], d[1], {
                x: b,
                y: a
            });
            return d
        }
        ;
        d.prototype.setData = function(b) {
            var a, e, d = this.currentOptions;
            this.rawData = b;
            this.resetData();
            if (b) {
                var f = function(a) {
                    return !0
                };
                if (d.range) {
                    var m = c.jsLib.map(d.range, O);
                    f = function(a) {
                        return c.rangeLib.isValInsideInc(m, a)
                    }
                }
                d = [];
                var g = Number.MAX_VALUE
                  , k = void 0
                  , l = void 0
                  , n = [];
                try {
                    for (var p = A(b), q = p.next(); !q.done; q = p.next()) {
                        var t = q.value
                          , r = O(t[0]);
                        !c.jsLib.isNaN(r) && f(r) && (d.push(r),
                        c.jsLib.def(k) && (l = r - k,
                        g = l < g ? l : g),
                        k = r,
                        n.push(t))
                    }
                } catch (y) {
                    var v = {
                        error: y
                    }
                } finally {
                    try {
                        q && !q.done && (a = p.return) && a.call(p)
                    } finally {
                        if (v)
                            throw v.error;
                    }
                }
                this.dateRange = [T(Z(d, "min")), T(Z(d, "max"))];
                this.dataInfo.minInterval = g;
                !this.view && this.setAutoView(this.dateRange);
                this.setViewRange(this.dateRange);
                try {
                    for (var u = A(n), w = u.next(); !w.done; w = u.next())
                        t = w.value,
                        this.indexRawDataItem(t[0], t[1])
                } catch (y) {
                    var x = {
                        error: y
                    }
                } finally {
                    try {
                        w && !w.done && (e = u.return) && e.call(u)
                    } finally {
                        if (x)
                            throw x.error;
                    }
                }
            } else
                d.range && this.setViewRange(d.range);
            return this
        }
        ;
        d.prototype.setViewRange = function(b) {
            var a = this.fnSet
              , c = a.fn(this.groupings.interval)(b[0]);
            c = a.reverseFn(this.groupings.interval)(b[0], c);
            var d = a.fn(this.groupings.interval)(b[1]);
            b = a.reverseFn(this.groupings.interval)(b[1], d + 1);
            b = T(O(b) - 1);
            this.viewRange = [c, b];
            this.calPatInterval.setRange(c, b);
            return this
        }
        ;
        d.prototype.addDataAt = function(b, a, e, d) {
            var f = this.data;
            c.jsLib.def(f[b]) || (f[b] = []);
            f = f[b];
            c.jsLib.def(f[a]) ? c.jsLib.def(f[a][e]) || (f[a][e] = []) : (f[a] = [],
            f[a][e] = []);
            f[a][e].push(d)
        }
        ;
        d.prototype.getDataAt = function(b, a, e, d) {
            var f = this.currentOptions
              , h = f.calculation
              , g = f.interpolateSubvalues;
            if (b = this.data[b]) {
                a = b[a] ? b[a][e] : void 0;
                if (c.jsLib.def(a) && !a.grouped) {
                    var k = this.groupingFns.v
                      , l = 0
                      , n = []
                      , p = [];
                    d = [k(d[0]), k(d[1])];
                    for (e = d[0]; e < d[1] + 1; e++)
                        n[e] = [];
                    c.jsLib.each(a, function(a) {
                        var b = k(a.x);
                        c.jsLib.def(p[b]) ? p[b].push(a.y) : (p[b] = [a.y],
                        l++);
                        n[b].push(a.y)
                    });
                    var q = [];
                    c.jsLib.each(p, function(a, b) {
                        c.jsLib.def(a) && (a = Z(a, h),
                        !c.jsLib.isNaN(a) && q.push(a))
                    });
                    a.grouped = c.jsLib.map(n, function(a) {
                        return Z(a, h, g || "sum" !== h ? NaN : 0)
                    });
                    a.groupCount = l;
                    g && (a.grouped = gd(a.grouped, "sum" === h));
                    a.calc = Z(q, h)
                }
                return a
            }
        }
        ;
        d.prototype.preGetPoints = function() {
            var b = this
              , a = []
              , e = [];
            c.jsLib.each(b.chart.userOptions.series, function(b) {
                return a.push.apply(a, H(c.jsLib.map(b.points, function(a) {
                    return b.defaultPoint ? c.jsLib.merge({}, a, b.defaultPoint || {}) : a
                })))
            });
            c.jsLib.each(a, function(a) {
                var d = a.date
                  , h = c.jsLib.getValType(d);
                "object" !== h ? e.push([d.pop ? c.jsLib.map(d, T) : T(d), a]) : e.push([new Qa("object" === h ? c.jsLib.expandOptionsProperties(d) : {
                    date: d
                },b), a])
            });
            return e
        }
        ;
        d.prototype.getPoints = function(b, a) {
            var e = this
              , d = b || e.range
              , f = e.formatters;
            b = e.calPatInterval.isInside(d[0]);
            var m = []
              , g = e.hasData()
              , k = function(a, b, d, h, k, l, n) {
                var p = e.dataInfo
                  , r = p.pointSubValsMax
                  , q = p.subValsMin
                  , t = p.subValsMax
                  , u = Math.min.apply(Math, H(h))
                  , v = Math.max.apply(Math, H(h));
                a = {
                    name: f.pointName(l[0]),
                    x: a,
                    y: b,
                    z: d,
                    subvalue: {
                        values: [h]
                    },
                    attributes: {
                        date: O(l[0]),
                        endDate: O(l[1]),
                        groupCount: k
                    }
                };
                c.jsLib.isNull(d) && !n && g && (c.jsLib.merge(a, e.currentOptions.defaultEmptyPoint),
                (a.tooltip || a.events) && delete a.mouseTracking);
                n && c.jsLib.merge(a, c.jsLib.omit(n, ["x", "y"]));
                n && !c.jsLib.def(n.z) && !c.jsLib.def(n.color) && c.jsLib.isNull(d) ? a.color = "#ffffff" : n || g || (a.color = "#ffffff");
                m.push(a);
                p.pointSubValsMax = h.length > r ? h.length : r;
                p.subValsMin = u < q ? u : q;
                p.subValsMax = v > t ? v : t
            }
              , l = function(b) {
                var e = new Qa({
                    date: {
                        range: b
                    }
                })
                  , d = c.jsLib.filter(a, function(a) {
                    return a[0].pop ? c.rangeLib.intersect(b, a[0]) : a[0].isInside ? a[0].isInside(b[0]) : e.isInside(a[0])
                });
                return 1 < d.length ? (d = c.jsLib.map(d, function(a) {
                    return c.jsLib.omit(a[1], ["date"])
                }),
                fd(d)) : d[0] && c.jsLib.omit(d[0][1], ["date"])
            };
            if (d) {
                var n = function(a, b) {
                    return function(c) {
                        return d[1] - d[0] >= a ? [0, b] : c
                    }
                };
                var p = {
                    weekday: function(a) {
                        return 7 > Math.ceil((d[1] - d[0]) / Ra) && a[0] < a[1] ? a : [0, 6]
                    },
                    hour: n(24 * Cb, 23),
                    minute: n(Cb, 59),
                    second: n(ad, 59)
                };
                n = !1;
                var q = [e.groupingFns.x(d[0]), e.groupingFns.x(d[1])]
                  , t = [e.groupingFns.y(d[0]), e.groupingFns.y(d[1])];
                p[e.groupings.x] && (q = p[e.groupings.x](q));
                p[e.groupings.y] && (t = p[e.groupings.y](t));
                for (var r = function(a) {
                    a = T(this.options("attributes.date"));
                    c.rangeLib.isValInsideInc(e.dateRange, a) && this.chart.zoom(a)
                }, v = q[0]; v <= q[1]; v++)
                    for (var u = t[0]; u <= t[1]; u++) {
                        var w = e.xyToDate(v, u, d[0]);
                        if (c.rangeLib.isValInsideInc(d, w[0]))
                            if (p = e.getDataAt(b, v, u, w)) {
                                var x = p.calc;
                                k(v, u, p.calc, p.grouped, p.groupCount, w, l(w));
                                !c.jsLib.isNaN(x) && e.zVals.push(x)
                            } else
                                k(v, u, null, [], 0, w, l(w)),
                                n = !0;
                        else
                            k(v, u, null, [], 0, w, c.jsLib.merge({
                                nativeClick: r
                            }, e.currentOptions.defaultEdgePoint))
                    }
                e.hasEmptyPoints = n
            }
            return m
        }
        ;
        d.prototype.getSeries = function() {
            var b, a = this.currentOptions, e = this.preGetPoints();
            this.zVals = [];
            this.dataInfo.pointSubValsMax = 0;
            this.setFormatting();
            var d = this.formatters
              , f = this.calPatInterval.intervalRanges
              , m = [];
            a = a.initial ? T(a.initial) : c.undefVal;
            try {
                for (var g = A(f), k = g.next(); !k.done; k = g.next()) {
                    var l = k.value;
                    m.push({
                        name: d.seriesName(T(l[0])),
                        visible: !1,
                        attributes: {
                            date: l[0],
                            endDate: l[1],
                            maxSubVals: this.dataInfo.pointSubValsMax
                        },
                        points: this.getPoints(l, e)
                    });
                    if (a && c.rangeLib.isValInsideInc(l, a))
                        var n = m[m.length - 1].visible = !0
                }
            } catch (q) {
                var p = {
                    error: q
                }
            } finally {
                try {
                    k && !k.done && (b = g.return) && b.call(g)
                } finally {
                    if (p)
                        throw p.error;
                }
            }
            a && n || (m[0].visible = !0,
            m[0].legendEntry = {
                initialCursor: "default"
            });
            this.dataInfo.zValRange = [Math.min.apply(Math, H(this.zVals)), Math.max.apply(Math, H(this.zVals))];
            return m
        }
        ;
        d.prototype.xyToDate = function(b, a, e) {
            var d = this.sortedGroupingNames[1]
              , f = this.sortedGroupingNames[0]
              , m = this.groupings.x === d
              , g = m ? b : a;
            b = m ? a : b;
            d = this.fnSet.reverseFn(d);
            f = this.fnSet.reverseFn(f);
            e = O(c.jsLib.pick(e, this.range ? this.range[0] : this.dateRange[0]));
            e = d(e, g);
            return [f(e, b), T(O(f(e, b + 1)) - 1)]
        }
        ;
        d.prototype.setFormatting = function() {
            var b = this
              , a = b.currentOptions
              , e = b.groupings
              , d = c.jsLib.evalPath(e, "format.series")
              , f = c.jsLib.evalPath(e, "format.point")
              , m = b.options("seriesFormat")
              , g = b.options("pointFormat")
              , k = function(b) {
                var e = new c.formatting.Formatter(a.culture || "en-US",b);
                return function(a) {
                    return e.formatDate(T(a), {})
                }
            }
              , l = function(b) {
                var e = new c.formatting.Formatter(a.culture || "en-US",b);
                return function(a) {
                    return e.formatDate(T(a), b)
                }
            }
              , n = function(a) {
                return "week" === a ? function(c) {
                    return "Week " + b.fnSet.fn(a)(c)
                }
                : k(c.timeLib.unitToFormatOptions(a))
            }
              , p = function(a) {
                return c.jsLib.merge.apply(c.jsLib, H(c.timeLib.unitListToFormatOptions(a.split(","))))
            };
            d = m ? l(m) : d ? k(p(d)) : n(e.interval);
            e = g ? l(g) : f ? k(p(f)) : n(e.z);
            b.formatters = {
                seriesName: d,
                pointName: e
            }
        }
        ;
        d.prototype.getAxisOptions = function() {
            var b = this
              , a = b.currentOptions
              , e = b.groupings
              , d = a.weekStart
              , f = {
                x: ya(e.x),
                y: ya(e.y)
            }
              , m = function(b, e) {
                var d = !c.jsLib.isString(b);
                return new c.formatting.Formatter(a.culture || "en-US",d ? b : c.timeLib.unitToFormatOptions(b, e))
            }
              , g = m("hour")
              , k = m("minute", !0)
              , l = function(a, c, e) {
                var d = m(c);
                return function(f) {
                    return d.formatDate(e ? e(f) : b.fnSet.reverseFn(c)(a, f), {})
                }
            }
              , n = {
                year: {},
                month: {},
                week: function() {
                    for (var a = m("month"), e = b.fnSet.fn("week"), d = O(b.viewRange[0]), f = [], h = 0; 12 > h; h++) {
                        var g = c.timeLib.addTimeInterval(d, c.jsLib.def(void 0) ? {
                            unit: "month",
                            multiplier: void 0
                        } : {
                            unit: "month"
                        });
                        g = O(g);
                        var k = [e(T(d)), e(T(O(g) - 1))];
                        f.push({
                            value: Math.floor((k[0] + k[1]) / 2),
                            label: {
                                text: a.formatDate(T(d), {})
                            }
                        });
                        d = g
                    }
                    return {
                        defaultTick: {
                            enabled: !1,
                            line: {
                                length: 0
                            },
                            gridLine: {
                                width: 0
                            }
                        },
                        customTicks: f
                    }
                }(),
                weekday: function() {
                    var a = m("weekday")
                      , b = []
                      , e = O("4/1/2018");
                    e += d * Ra;
                    for (var f = 0; 7 > f; f++)
                        b.push(a.formatDate(T(e), {})),
                        e += Ra;
                    return {
                        defaultTick: {
                            line: {
                                length: 0
                            },
                            gridLine: {
                                width: 0
                            }
                        },
                        customTicks: c.jsLib.map(b, function(a, b) {
                            return {
                                value: b,
                                label: {
                                    text: a
                                }
                            }
                        })
                    }
                }(),
                hour: {
                    scale: {
                        interval: 3
                    },
                    defaultTick: {
                        label: {
                            text: function(a) {
                                return g.formatDate(new Date(2020,0,1,a), {})
                            }
                        }
                    }
                },
                minute: {
                    scale: {
                        interval: 10
                    },
                    defaultTick: {
                        label: {
                            text: function(a) {
                                return k.formatDate(new Date(2020,0,1,0,a), {})
                            }
                        }
                    }
                },
                hidden: {
                    defaultTick: {
                        enabled: !1
                    }
                }
            }
              , p = function(a) {
                var b = e[a]
                  , d = c.jsLib.evalPath(e, "format." + a)
                  , h = d || {}
                  , g = c.jsLib.isString(h);
                if (d || !c.jsLib.isString(b) && !g) {
                    var k = function(a) {
                        return a
                    };
                    if ("hidden" === h || b.mul && b.mod && !h.toDate)
                        return n.hidden;
                    !b.mul || b.mod || h.toDate || (k = function(a) {
                        return a * b.mul
                    }
                    );
                    var m = l(T("1/1/2020"), h.unit || f[a], h.toDate);
                    a = {
                        defaultTick: {
                            label: {
                                text: function(a) {
                                    return m(k(a))
                                }
                            }
                        }
                    };
                    h.interval && c.jsLib.setPathVal(a, "scale.interval", h.interval);
                    return a
                }
                return n[g ? h : b]
            };
            return {
                x: p("x"),
                y: p("y")
            }
        }
        ;
        d.prototype.updateChart = function(b) {
            var a = this
              , e = this.chart
              , d = this.currentOptions
              , f = this.isHoriz
              , m = !!b.data
              , g = !!d.range
              , k = !!e.userOptions.series
              , l = this.dataInfo;
            b = b || e.currentOptions;
            e.dirty = !0;
            if (m || g || k) {
                l = void 0;
                e.isRendered && (l = (l = e.series().find(function(a) {
                    return a.isVisible
                })) && c.jsLib.evalPath(l.currentOptions, "attributes.date"),
                this.currentOptions.initial = l);
                var n = c.jsLib.evalPath(e, "data.val");
                this.setData(n || b.data);
                l = this.dataInfo;
                g || m || !k || (g = gc(b)) && this.setViewRange(g);
                k = this.getSeries();
                g = this.getAxisOptions();
                b.series = k;
                n || b.data && b.data.length ? (l = l.zValRange,
                n = Math.abs,
                n = Math.max(n(l[0]), n(l[1])),
                l = Math.min.apply(Math, H(l)),
                b.palette = c.palettes.getPaletteConfig(b.palette, [l, n])) : b.palette || (b.palette = ["#ffffff"]);
                c.jsLib.merge(b, g);
                l = function() {
                    return {
                        alternateGridFill: "none",
                        originTick: {
                            enabled: !1
                        },
                        defaultTick: {
                            gridLine: {
                                width: 0
                            }
                        },
                        line: {
                            width: 0
                        }
                    }
                }
                ;
                n = {
                    orientation: "top"
                };
                k = {
                    scale: {
                        invert: !0
                    }
                };
                e.typeContextOptions = {
                    axes: c.jsLib.merge(g, {
                        x: c.jsLib.merge(f ? k : n, l()),
                        y: c.jsLib.merge(f ? n : k, l())
                    }),
                    legend: {
                        defaultEntry: {
                            value: d.calculation ? "%" + d.calculation : c.undefVal,
                            style: {
                                fontWeight: "bold"
                            },
                            states: {
                                hidden: {
                                    style: {
                                        fontWeight: "normal"
                                    }
                                },
                                hover: {
                                    style: {
                                        fontWeight: "normal"
                                    }
                                }
                            },
                            events: {
                                mouseOver: function(a) {
                                    return !1
                                }
                            }
                        }
                    },
                    chartArea: {
                        clipContent: !1
                    },
                    chart: {
                        palette: b.palette,
                        defaultSeries: {
                            shape: {
                                innerPadding: "1px"
                            },
                            legendEntry: {
                                visible: !0,
                                value: m ? "%z" + this.currentOptions.calculation : " "
                            },
                            defaultPoint: {
                                legendEntry: {
                                    visible: !1
                                },
                                tooltip: ec(this),
                                label: {
                                    text: fc(this),
                                    autoHide: !0,
                                    padding: 5
                                }
                            }
                        }
                    }
                };
                e.isRendered && e.axes().each(function(b) {
                    b.defaultContextOptions = c.jsLib.evalPath(a.chart, "typeContextOptions.axes." + b.prefix) || {};
                    b.ticks().remove(!1)
                });
                d = void 0;
                b = e.userOptions.highlights = e.userOptions.highlights || [];
                b.length && (d = c.jsLib.find(b, function(a) {
                    return a.isDefault
                })) && c.jsLib.removeArrItem(b, d);
                (d = za[this.view].defPattern) && b.unshift({
                    isDefault: !0,
                    pattern: d,
                    outline: {}
                });
                da(e, !1)
            } else
                c.emitter.emit("error", "initCal", "calNoData", {
                    container: e.getWrapper()
                })
        }
        ;
        d.prototype.syncLegendEntries = function(b) {
            var a, e = (a = this.legendEntries).length;
            if (this.hasEmptyPoints && this.hasData())
                return e ? c.jsLib.each(a, function(a) {
                    return a.setColumns()
                }) : (a.push(b = b.addEntry(new c.EntryWrapper(b.chart,this.currentOptions.defaultEmptyPoint))),
                b.setColumns(),
                this.legendEntries = a),
                a;
            e && a.shift().destroy()
        }
        ;
        return d
    }()
      , hc = function(d) {
        function b(a, b, c) {
            void 0 === c && (c = []);
            b = d.call(this, a, b, c) || this;
            b.chart = a;
            return b
        }
        F(b, d);
        b.prototype.defaultOptions = function() {
            return c.jsLib.merge({
                outline: {
                    width: 1,
                    color: "#353535"
                },
                empty: {
                    opacity: .3
                }
            }, this.chart.userOptions.defaultHighlight)
        }
        ;
        b.prototype.render = function(a, b) {
            this.chart.series().each(function(a) {
                a.isVisible && a.visualizer.renderPatternHighlights && a.visualizer.renderPatternHighlights(b)
            });
            return this
        }
        ;
        b.prototype.items = function() {
            var a = [];
            c.jsLib.each(this.itemSets, function(b) {
                return a.push.apply(a, H(b))
            });
            return new c.UpdatablesCollection(a)
        }
        ;
        b.prototype.updateItemSet = function(a, b) {
            this.itemSets = this.itemSets || {};
            this.itemSets[a] = b
        }
        ;
        b.prototype.asEmpty = function(a) {
            return c.jsLib.merge(a, this.currentOptions.empty)
        }
        ;
        b.prototype.remove = function(a) {
            var b = this;
            a = this.chart;
            var d = a.userOptions
              , f = a.currentOptions
              , m = a._highlights.indexOf(this)
              , g = function(a) {
                c.jsLib.remove(a.highlights, function(a) {
                    return a.id === b.id
                })
            };
            g(d);
            g(f);
            a._highlights.splice(m, 1);
            this.render()
        }
        ;
        b.prototype.setRootVisuals = function() {
            return this
        }
        ;
        return b
    }(c.BaseChartItem)
      , ba = Math.PI
      , hd = {
        radialGradient: {},
        stops: [[0, "black", .4], [.1, "black", .4], [1, "black", 0]]
    }
      , id = c.jsLib.plainArray("start end transform animation fill stroke".split(" "))
      , kd = function(c) {
        function b() {
            return null !== c && c.apply(this, arguments) || this
        }
        F(b, c);
        b.prototype.applierType = function() {
            return jd
        }
        ;
        b.prototype.bbox = function() {
            return this.attrApplier.bbox()
        }
        ;
        b.prototype.hitTest = function(a, b) {
            return this.attrApplier.hitTest(a, b)
        }
        ;
        return b
    }(c.CompositeElement)
      , jd = function(d) {
        function b() {
            var a = null !== d && d.apply(this, arguments) || this;
            a._pathObjects = [];
            return a
        }
        F(b, d);
        b.prototype.animAttrs = function() {
            return id
        }
        ;
        b.prototype.registerPathObj = function(a, b) {
            a = c.pathLib.fromString(a);
            return this._pathObjects[b] = a
        }
        ;
        b.prototype.getPathObj = function(a) {
            return this._pathObjects[a]
        }
        ;
        b.prototype.clearPathObjList = function() {
            this._pathObjects = []
        }
        ;
        b.prototype.constructChildren = function(a) {
            var b = this
              , d = c.jsLib.pick(a["stroke-width"], 1);
            b._cornerR = void 0;
            var f = [];
            b.clearPathObjList();
            var m = c.colorLib.toHexOpacity(c.colorLib.simplify(a.fill))
              , g = function(a) {
                a = c.jsLib.merge({}, a);
                "gap" === a.caps.start && (a.caps.start = "flat");
                "gap" === a.caps.end && (a.caps.end = "flat");
                return a
            }
              , k = function(a) {
                a.omit = ["key"];
                f.push(a)
            };
            if (a.r - a.innerR && "none" !== a.fill && 0 !== m.opacity) {
                m = void 0;
                a.breaks && (m = b.applyBreaks(a));
                var l = b.splitArcs(m || [a], ba / 4)
                  , n = c.jsLib.map(l, function(a) {
                    return Ia(c.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a))
                })
                  , p = "solid" !== a.shading || a.fill.stops ? b.arcsToGradients(l, a) : [];
                m = l[0];
                var q = c.jsLib.last(l);
                m = m.inverted ? m.end : m.start;
                var t = q.inverted ? q.start : q.end;
                q = t - m;
                var r = 0 > q;
                q = Math.abs(q) > 2 * ba - .8 * db(a);
                var v = b.shadowClip(a, {
                    start: m,
                    end: t,
                    autoShadow: q,
                    inverted: r
                });
                c.jsLib.each(n, function(e, f) {
                    if ((f === n.length - 1 || 1 === n.length) && v)
                        if ("round" !== c.jsLib.evalPath(a, "caps.end")) {
                            var h = Fa({
                                start: t,
                                end: t + .08,
                                r: a.r,
                                innerR: a.innerR
                            }, 0);
                            k({
                                key: "sh" + f,
                                fill: {
                                    linearGradient: r ? [h[2], h[3], h[0], h[1]] : h,
                                    stops: [[0, "black", .2], [.1, "black", .2], [1, "black", 0]]
                                },
                                d: v
                            })
                        } else
                            h = P(c.trigLib.gpp(a.cxy, t, (a.r + a.innerR) / 2), 2),
                            k({
                                key: "shadow" + f,
                                elType: "circle",
                                cx: h[0],
                                cy: h[1],
                                r: (a.r - a.innerR) / 2 * 1.5,
                                fill: hd,
                                clipPath: v
                            });
                    h = "f" + f;
                    var m = p[f] ? b.arcPathToGradient(l[f], e, p[f], h) : a.fill;
                    var q = l[f];
                    q = Ia(c.shapeLib.arc(q.cxy[0], q.cxy[1], q.r, q.r, g(q)));
                    k({
                        key: h,
                        d: q,
                        fill: m,
                        stroke: "none"
                    });
                    a.stroke && k({
                        key: "s" + f,
                        d: e,
                        fill: "none",
                        "stroke-width": d,
                        stroke: a.stroke
                    })
                });
                m = 1 === l.length ? !1 : r;
                b._outlinePath = Ia(c.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, q ? {
                    innerR: a.innerR,
                    start: 0,
                    end: 2 * ba
                } : {
                    r: a.r,
                    innerR: a.innerR,
                    cxy: a.cxy,
                    start: m ? a.end : a.start,
                    end: m ? a.start : a.end,
                    caps: a.caps
                }))
            }
            b.bindConfig(f)
        }
        ;
        b.prototype.hitTest = function(a, b) {
            for (var c in this._pathObjects)
                if (this._pathObjects[c].hitTest(a, b))
                    return !0
        }
        ;
        b.prototype.outlinePath = function() {
            return this._outlinePath
        }
        ;
        b.prototype.bbox = function() {
            var a, b = [];
            for (a in this._pathObjects)
                b.push(this._pathObjects[a].bbox());
            return c.bboxLib.bboxUnion(b)
        }
        ;
        b.prototype.applyBreaks = function(a) {
            var b = a.breaks
              , d = a.start
              , f = a.end
              , m = a.caps
              , g = a.r
              , k = a.innerR
              , l = a.cxy
              , n = Math.abs(f - d) / (2 * ba);
            a = db(a) / (2 * ba) + .01;
            a = c.jsLib.pick(b.gap, a / n);
            var p = [];
            a = c.rangeLib.positionsToPadRanges(b.intervals, [0, 1], a);
            jc(a) || (a = c.rangeLib.positionsToPadRanges(b.intervals, [0, 1], .01 / n),
            this._cornerR = g - k);
            b.invert || (a = c.rangeLib.invert(a, [0, 1]));
            c.jsLib.each(a, function(a) {
                var b = c.mathLib.mapValue(d, f, 0, 1, a[0])
                  , e = c.mathLib.mapValue(d, f, 0, 1, a[1]);
                p.push({
                    r: g,
                    innerR: k,
                    cxy: l,
                    start: b,
                    end: e,
                    caps: m,
                    pos: a
                })
            });
            return p
        }
        ;
        b.prototype.splitArcs = function(a, b) {
            var e = [];
            c.jsLib.each(a, function(a) {
                return e.push.apply(e, H(ic(a, b)))
            });
            this._cornerR && this.applyMinCornerR(e);
            return e
        }
        ;
        b.prototype.applyMinCornerR = function(a) {
            var b = [];
            if (this._cornerR) {
                for (var d in a) {
                    var f = a[d];
                    b.push(c.shapeLib.arcCornerR(f.r, f.innerR, f.start, f.end, this._cornerR).cornerR)
                }
                var m = Math.min.apply(Math, H(b))
                  , g = function(a) {
                    return "gap" === a ? "gap" : "round" === a ? "cornerR" : "flat"
                };
                for (d in a)
                    b = a[d],
                    f = b.caps,
                    b.cornerR = m,
                    b.caps = {
                        start: g(f.start),
                        end: g(f.end)
                    }
            }
        }
        ;
        b.prototype.arcsToGradients = function(a, b) {
            var e = Math.abs((b.end - b.start) / (2 * ba)), d = c.colorLib.toHexOpacity(c.colorLib.simplify(b.fill)).hex, m = b.altColor || c.colorLib.toHexOpacity(c.colorLib.modifyColor(c.colorLib.colorMods.hueEffect, d)).hex, g = [0, e], k = function(a) {
                return c.colorLib.tween(d, m, 100 * c.mathLib.mapValue(g[0], g[1], 0, 1, a))
            }, l;
            if (l = b.fill.stops) {
                var n = c.jsLib.map(l, function(a) {
                    return a[0]
                });
                k = function(a) {
                    for (var b, e, d = 0, f = l.length; d < f; d++)
                        if (d && (e = l[d],
                        b = l[d - 1],
                        a >= b[0] && a <= e[0]))
                            return a = c.mathLib.mapValue(0, 1, b[0], e[0], a),
                            c.colorLib.tween(c.colorLib.toHexOpacity(b[1]).hex, c.colorLib.toHexOpacity(e[1]).hex, 100 * a);
                    b = l[l.length - 1];
                    if (a > b[0])
                        return b[1]
                }
            }
            b = function(a) {
                a = a.slice(0);
                var b = a[1] - a[0];
                a[0] += .01 * b;
                a[1] -= .01 * b;
                b = a.slice(0);
                for (var e = 0, d = n.length; e < d; e++) {
                    var f = n[e];
                    f > a[0] && f < a[1] && b.push(f)
                }
                return c.jsLib.sortBy(b)
            }
            ;
            e = [];
            for (var p = 0, q = a.length; p < q; p++) {
                var t = a[p];
                e[p] = t.colors = c.jsLib.map(l ? b(t.pos) : t.pos, function(a) {
                    return k(a)
                });
                e[p].push(c.trigLib.toDegrees(t.start + (t.end - t.start) / 2) + 90)
            }
            return e
        }
        ;
        b.prototype.arcPathToGradient = function(a, b, d, f) {
            d = c.colorLib.parseJscFill(d);
            var e = (a.innerR / a.r + 1.8) / 3;
            b = this.registerPathObj(b, f);
            b = Fa(a, 0, {
                widthFactor: e,
                pathObj: b
            });
            d.linearGradient = a.inverted ? [b[2], b[3], b[0], b[1]] : b;
            return d
        }
        ;
        b.prototype.shadowClip = function(a, b) {
            if (!1 !== a.shadow) {
                var e = a.cxy
                  , d = a.r
                  , m = a.innerR
                  , g = a.caps
                  , k = b.end
                  , l = b.inverted;
                if (b.autoShadow || a.shadow)
                    return a = k + .08 * (l ? -1 : 1),
                    b = P("round" === g.end ? ["insideround", "round"] : ["", ""], 2),
                    g = b[0],
                    b = b[1],
                    k = P(l ? [a, k, b, g] : [k, a, g, b], 4),
                    c.pathLib.fromString(c.shapeLib.arc(e[0], e[1], d, d, {
                        r: d,
                        innerR: m,
                        cxy: e,
                        start: k[0],
                        end: k[1],
                        caps: {
                            start: k[2],
                            end: k[3]
                        }
                    }))
            }
        }
        ;
        return b
    }(c.CompositeAttrApplier)
      , Ka = {
        padding: 0,
        stroke: "#4b4b4b",
        none: "none",
        axisMarkerColor: "gray",
        markerRadius: 3,
        dataDelimiter: /[ ,]/,
        colorsDelimiter: /(?=[^\d.]),(?=[^\d.])/
    }
      , Y = function() {
        function d(b, a) {
            var e = this;
            this.currentOptions = {
                data: []
            };
            this.elements = [];
            this.defaults = Ka;
            this.getColor = function(a) {
                var b = e.currentOptions;
                return b.colors && b.colors[a]
            }
            ;
            this.allColors = function() {
                return e.currentOptions.colors || []
            }
            ;
            this.renderer = b;
            this.palette = c.palettes.getPalette("default");
            this.options(a)
        }
        d.prototype.updateOptions = function(b) {
            c.jsLib.extend(this.currentOptions, this.normalizeOptions(b))
        }
        ;
        d.prototype.options = function(b, a) {
            this.updateOptions(b);
            b = this.currentOptions;
            var c = this.defaultSize();
            b = {
                width: parseInt(b.width || b.size || c.width),
                height: parseInt(b.height || b.size || c.height)
            };
            this.render(b, a)
        }
        ;
        d.prototype.fixedSize = function() {
            return {
                width: void 0,
                height: void 0
            }
        }
        ;
        d.prototype.max = function(b) {
            return this.extremum(b, function(a, b) {
                return a > b
            })
        }
        ;
        d.prototype.min = function(b) {
            return this.extremum(b, function(a, b) {
                return a < b
            })
        }
        ;
        d.prototype.extremum = function(b, a) {
            for (var c = b[0], d = 1, f = b.length; d < f; d++) {
                var m = b[d];
                !this.isEmptyValue(m) && a(m, c) && (c = m)
            }
            return c
        }
        ;
        d.prototype.isEmptyValue = function(b) {
            return null === b || void 0 === b || b !== b
        }
        ;
        d.prototype.parseData = function(b) {
            return Ja(b)
        }
        ;
        d.prototype.normalizeOptions = function(b) {
            var a = b.data
              , e = b.colors
              , d = b.axisMarker
              , f = b.snapToZero
              , m = b.antialias
              , g = b.size
              , k = b.rotate
              , l = b.radius;
            a && (a.length ? b.data = this.parseData(a) : c.jsLib.isNumber(a) && (b.data = [a]));
            e && c.jsLib.isString(e) && (b.colors = e.split(Ka.colorsDelimiter));
            (a = b.padding) && c.jsLib.isString(a) ? b.padding = parseInt(a) : a && c.jsLib.isArray(a) && (b.padding = parseInt(a[0]));
            c.jsLib.def(d) && (c.jsLib.isString(d) ? b.axisMarker = Ja(d) : c.jsLib.isNumber(d) ? b.axisMarker = [d] : c.jsLib.isArray(d) && d.length && (b.axisMarker = d));
            c.jsLib.def(f) && (b.snapToZero = "true" === f || !0 === f);
            c.jsLib.def(m) && (b.antialias = "true" === m || !0 === m);
            c.jsLib.def(k) && (b.rotate = parseFloat(k) || 0);
            c.jsLib.def(l) && (b.radius = parseFloat(l) || 0);
            c.jsLib.def(g) && c.jsLib.isString(g) && -1 < g.indexOf("x") && (d = g.split("x"),
            b.width = b.width || d[0],
            b.height = b.height || d[1],
            delete b.size);
            return b
        }
        ;
        d.prototype.primaryColor = function() {
            return this.getColor(0) || this.currentOptions.color || this.palette[0]
        }
        ;
        d.prototype.stroke = function() {
            return this.currentOptions.stroke || this.defaults.stroke
        }
        ;
        d.prototype.secondaryColor = function() {
            return this.getColor(1) || this.palette[1]
        }
        ;
        d.prototype.axisMarkerColor = function() {
            return this.getColor(3) || this.defaults.axisMarkerColor
        }
        ;
        d.prototype.addShading = function(b, a) {
            switch (parseInt(a)) {
            case 1:
                var e = c.colorLib.cushionEffect(b, [0, .25]);
                break;
            case 2:
                e = c.colorLib.aquaEffect(b, !0);
                break;
            case 3:
                e = c.colorLib.roundedEffect(b, !0);
                break;
            case 4:
                e = c.colorLib.modifyFill("jumpButton", b);
                break;
            case 5:
                e = c.colorLib.modifyFill("titleBox", b)
            }
            return e || b
        }
        ;
        d.prototype.padding = function() {
            var b = this.currentOptions.padding || this.defaults.padding;
            0 < b && 1 > b && (b = Math.floor(b * Math.max(this.width, this.height)));
            return b
        }
        ;
        d.prototype.defaultSize = function() {
            return {
                width: 80,
                height: 20
            }
        }
        ;
        d.prototype.render = function(b, a, e) {
            var d = this.currentOptions;
            this.gWrapper || (this.gWrapper = this.renderer.element("g"),
            d.tooltip && (this.renderer.element("title").attr({
                text: d.tooltip
            }).add(this.gWrapper),
            this.hoverRect = this.renderer.element("rect").attr({
                width: b.width,
                height: b.height,
                fill: "transparent",
                strokeWidth: 0
            }).add(this.gWrapper)));
            d = d.rotate;
            var f = this.width !== b.width || this.height !== b.height
              , m = d !== this.angle;
            if (c.jsLib.def(d) && 0 !== d && (m || f)) {
                m = b.width;
                var g = b.height;
                m = c.bboxLib.rotatedAt([0, 0, m, g], [d, m / 2, g / 2]);
                this.rotatedWidth = m[2];
                this.rotatedHeight = m[3];
                this.gWrapper.attr({
                    rotate: [d, Math.round(b.width / 2), Math.round(b.height / 2)],
                    translate: [-m[0], -m[1]]
                });
                this.angle = d
            }
            (f || a) && this.renderData(b, e)
        }
        ;
        d.prototype.getChartData = function(b, a) {
            return {
                elements: []
            }
        }
        ;
        d.prototype.getAxisMarkerElement = function(b, a, e, d) {
            var f = this.currentOptions.axisMarker
              , h = f[0] || 0
              , g = f[1];
            f = c.jsLib.def(g) && null !== g;
            h = Math.round((b - h) * d / (b - a)) + .5;
            b = f ? Math.round((b - g) * d / (b - a)) + .5 : h + 1;
            return this.renderer.path({
                d: "M 0.5 " + h + " L " + (Math.floor(e) + .5) + " " + h + " L " + (Math.floor(e) + .5) + " " + b + " L 0.5 " + b + " Z",
                strokeWidth: 0,
                stroke: this.defaults.none,
                opacity: f ? .6 : .9,
                fill: this.axisMarkerColor()
            })
        }
        ;
        d.prototype.correctSize = function(b, a) {
            return 0 < b && 0 < a
        }
        ;
        d.prototype.renderData = function(b, a) {
            var e = this
              , d = b.width
              , f = b.height;
            if (e.correctSize(d, f)) {
                e.width = d;
                e.height = f;
                c.jsLib.each(e.elements, function(a) {
                    return a.destroy()
                });
                this.updateBackground(d, f);
                if (d = e.getChartData(d, f))
                    f = d.size,
                    e.rotatedWidth && (f = f || {},
                    f = c.jsLib.extend(f, {
                        width: e.rotatedWidth,
                        height: e.rotatedHeight
                    }),
                    e.height = f.height,
                    e.width = f.width),
                    a && a(f),
                    e.elements = d.elements,
                    c.jsLib.each(e.elements, function(a) {
                        return a.add(e.gWrapper)
                    });
                e.hoverRect && e.hoverRect.attr(b)
            }
        }
        ;
        d.prototype.add = function(b) {
            this.gWrapper.add(b);
            return this
        }
        ;
        d.prototype.getElement = function() {
            return this.gWrapper && this.gWrapper.el
        }
        ;
        d.prototype.pixelCorrection = function(b) {
            var a = this.currentOptions.rotate;
            a && a % 90 || (a ? (a = this.gWrapper.attr("transform").translate || [0, 0],
            a = P(c.snapPixels([a[0], a[1], 0, 0], 1, b), 2),
            b = a[0],
            a = a[1]) : (a = P(c.snapPixels([0, 0, 0, 0], 1, b), 2),
            b = a[0],
            a = a[1]),
            this.gWrapper.attr({
                translate: [b, a]
            }))
        }
        ;
        d.prototype.rectPath = function(b, a, c, d, f) {
            void 0 === f && (f = [0, 0, 0, 0]);
            var e = f[0]
              , h = f[1]
              , k = f[2];
            f = f[3];
            return "M" + (b + e) + "," + a + "h" + (c - h - e) + (h ? "a" + h + "," + h + " 0 0 1 " + h + "," + h : "") + "v" + (d - k - h) + (k ? "a" + k + "," + k + " 0 0 1 " + -k + "," + k : "") + "h" + (f + k - c) + (f ? "a" + f + "," + f + " 0 0 1 " + -f + "," + -f : "") + "v" + (e + f - d) + (e ? "a" + e + "," + e + " 0 0 1 " + e + "," + -e : "") + "z"
        }
        ;
        d.prototype.updateBackground = function(b, a) {
            var c = this.currentOptions;
            if (c.fill || c.outline)
                b = {
                    d: "M .5 .5 l " + b + " 0 l 0 " + a + " l " + -b + " 0 Z",
                    fill: c.fill
                },
                this.background ? this.background.attr(b) : this.background = this.renderer.path(b).add(this.gWrapper)
        }
        ;
        d.prototype.destroy = function() {
            var b = this.gWrapper;
            b = b && b.el && b.el.parentNode;
            c.jsLib.each(this.elements, function(a) {
                return a.destroy()
            });
            this.gWrapper.destroy();
            b && "svg" === b.tagName && b.parentNode.removeChild(b)
        }
        ;
        return d
    }()
      , Fb = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.primaryColor = function() {
            return this.defaults.none
        }
        ;
        b.prototype.stroke = function() {
            return this.getColor(0) || this.currentOptions.color || this.defaults.stroke
        }
        ;
        b.prototype.complexPath = function(a, b, c) {
            return [this.renderer.path({
                d: a,
                strokeWidth: 1,
                stroke: this.stroke(),
                fill: this.primaryColor()
            })]
        }
        ;
        b.prototype.axisMarkerColor = function() {
            return this.getColor(3) || this.palette[0]
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var e = this
              , d = this
              , m = d.currentOptions.data || []
              , g = m.length
              , k = [];
            if (!m || 2 > g)
                return {
                    elements: k
                };
            var l = this.currentOptions
              , n = parseFloat(l.max)
              , p = parseFloat(l.min);
            l = l.axisMarker ? m.concat(l.axisMarker) : m;
            var q = c.jsLib.isNaN(n) ? d.max(l) : n
              , t = c.jsLib.isNaN(p) ? d.min(l) : p
              , r = a / (g - 1);
            p = d.allColors();
            n = p[1];
            p = p[2];
            var v = q === t;
            0 < q && 0 > t && (l = Math.round(q * b / (q - t)),
            k.push(this.renderer.path({
                d: "M 0 " + l + " L " + a + " " + l,
                strokeWidth: .3,
                stroke: this.axisMarkerColor(),
                opacity: .6,
                fill: this.defaults.none
            })));
            var u = "", w = [], x = [], y;
            c.jsLib.each(m, function(c, e) {
                if (d.isEmptyValue(c))
                    e === g - 1 && (u += "L " + a + " " + y + " ");
                else {
                    var f = u ? "L" : "M"
                      , h = Math.floor(e * r) + .5
                      , k = c < t ? t : c > q ? q : c;
                    y = Math.round(v ? 0 === q ? b : b / 2 : (q - k) * b / (q - t));
                    u += f + " " + h + " " + y + " ";
                    0 === e && (w[0] = {
                        x: h,
                        y: y
                    });
                    e === g - 1 && (w[1] = {
                        x: h,
                        y: y
                    });
                    v || (c === q && (x[0] = {
                        x: h,
                        y: y
                    }),
                    c === t && (x[1] = {
                        x: h,
                        y: y
                    }))
                }
            });
            m = this.complexPath(u, a, b);
            k.push(m[0]);
            m[1] && k.push(m[1]);
            (l = d.currentOptions.axisMarker) && l.length && k.push(d.getAxisMarkerElement(q, t, a, b));
            var z = "";
            l = function(c, f) {
                var h = e.defaults.markerRadius + 1
                  , g = c.x;
                c = c.y;
                k.push(d.renderer.circle(g, c, e.defaults.markerRadius).attr({
                    fill: f
                }));
                z = z || "M -1 -1 l " + (a + 2) + " 0 l 0 " + (b + 2) + " l " + (-a - 2) + " 0 l 0 " + (-b - 2);
                z += "M " + (g - h) + ", " + c + " A " + h + "," + h + " 0 1,0 " + (g + h) + "," + c + " A " + h + "," + h + " 0 1,0 " + (g - h) + "," + c
            }
            ;
            n && n !== this.defaults.none && (l(w[0], n),
            l(w[1], n));
            p && p !== this.defaults.none && !v && (l(x[0], p),
            l(x[1], p));
            z && m[0].attr({
                clipPath: z
            });
            z && m[1] && m[1].attr({
                clipPath: z
            });
            return {
                elements: k
            }
        }
        ;
        return b
    }(Y)
      , ld = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.primaryColor = function() {
            return this.getColor(0) || this.currentOptions.color || this.palette[0]
        }
        ;
        b.prototype.complexPath = function(a, b, d) {
            return [this.renderer.path({
                d: a,
                strokeWidth: 1,
                stroke: this.primaryColor(),
                fill: this.defaults.none
            }), this.renderer.path({
                d: a + ("L " + (Math.floor(b) + .5) + " " + (Math.floor(d) + .5) + " L 0.5 " + (Math.floor(d) + .5) + " Z"),
                strokeWidth: 0,
                stroke: this.defaults.none,
                fill: c.colorLib.addOpacity(this.primaryColor(), .5)
            })]
        }
        ;
        return b
    }(Fb)
      , Gb = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.getColumns = function() {
            return 1
        }
        ;
        b.prototype.primaryColor = function() {
            var a = d.prototype.primaryColor.call(this)
              , b = this.currentOptions.shading;
            b && (a = this.addShading(a, b));
            return a
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var e = this.currentOptions
              , d = c.jsLib.pick(e.radius, 3)
              , m = e.data
              , g = m ? m[0] : 0;
            m = m[1];
            var k = c.jsLib.isNumber(m)
              , l = parseFloat(e.max);
            e = parseFloat(e.min);
            if (c.jsLib.isNumber(g) && !c.jsLib.isNaN(g)) {
                if (!c.jsLib.isNumber(l) || c.jsLib.isNaN(l)) {
                    var n = k ? Math.max(g, m) : g;
                    l = 0 > n && !k ? 0 : n + (1.33 - 1) * Math.abs(k ? g - m : n)
                }
                if (!c.jsLib.isNumber(e) || c.jsLib.isNaN(e))
                    n = k ? Math.min(g, m) : g,
                    e = 0 < n && !k ? 0 : n - (1.33 - 1) * Math.abs(k ? g - m : n);
                if (!(l < e)) {
                    g = g > l ? l : g < e ? e : g;
                    k && (m = m > l ? l : m < e ? e : m);
                    n = k ? Math.min(g, m) : 0;
                    m = Math.round(a * ((k ? Math.max(g, m) : g) - e) / (l - e));
                    l = k ? Math.round(a * Math.abs(n - e) / (l - e)) : 0 <= e ? 0 : 0 >= l ? a : Math.round(a * Math.abs(e) / (l - e));
                    g = k || 0 < g ? this.primaryColor() : this.secondaryColor();
                    k = [this.renderer.path({
                        d: this.rectPath(.5, .5, a, b, [d, d, d, d]),
                        stroke: this.defaults.none,
                        fill: this.getColor(2) || "rgba(0,0,0,0.05)"
                    })];
                    for (e = this.getColumns(); 5 > a / e && 1 < e; )
                        --e;
                    n = Math.ceil((a - 2 * (e - 1)) / e);
                    for (var p = Math.max(l, m) + .5, q = Math.min(l, m) - .5, t = 0; q < p; q += n + 2,
                    t++) {
                        var r = q + n + 2 > p ? Math.round(p - q) : n
                          , v = d && 0 === Math.min(l, m) && 0 === t
                          , u = d && p > a - d && (0 === t && 1 === e || q + n > a - d);
                        v = [v ? d : 0, u ? d : 0, u ? d : 0, v ? d : 0];
                        2 < r && k.push(this.renderer.path({
                            d: this.rectPath(q, .5, r, b, v),
                            stroke: "none",
                            strokeWidth: 0,
                            fill: g
                        }))
                    }
                    k.push(this.renderer.path({
                        d: this.rectPath(0, 0, a, b, [d, d, d, d]),
                        strokeWidth: 1,
                        stroke: this.getColor(3) || this.defaults.none,
                        fill: this.defaults.none
                    }));
                    return {
                        elements: k
                    }
                }
            }
        }
        ;
        return b
    }(Y)
      , md = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.primaryColor = function() {
            var a = this.getColor(0) || this.currentOptions.color || this.defaults.stroke
              , b = this.currentOptions.shading;
            b && (a = this.addShading(a, b));
            return a
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var e = this.currentOptions.data || []
              , d = parseFloat(this.currentOptions.max)
              , m = parseFloat(this.currentOptions.min)
              , g = P(e)
              , k = g[0]
              , l = g[1];
            g = g.slice(2);
            var n = this.currentOptions.color;
            if (X(k) && X(l) && (X(d) || (d = 0 > k ? 0 : 1.33 * this.max(e)),
            X(m) || (m = 0 < k ? 0 : 1.33 * this.min(e)),
            !(d < m || d < k || d < l || m > l || m > k))) {
                var p = Math.max(1, 7 * b / 24)
                  , q = Math.floor(Math.max(1, 3 * b / 24));
                e = Math.floor((0 > k ? a : 0) + a * (k - Math.max(m, 0) - Math.min(d, 0)) / (d - m));
                var t = Math.floor((0 > k ? a : 0) + a * (l - Math.max(m, 0) - Math.min(d, 0)) / (d - m)) + .5;
                l = Math.ceil(p) - .5;
                var r = Math.ceil(b - p) + .5
                  , v = l - q;
                q = r + q;
                var u = 0 > k ? Math.floor(a) : 0;
                e = this.rectPath(0 > k ? e + .5 : u + .5, l, Math.abs(e - u), r - l, 20 > b ? [0, 0, 0, 0] : [0 === u ? 0 : 1, 0 === u ? 1 : 0, 0 === u ? 1 : 0, 0 === u ? 0 : 1]);
                p = Math.min(p - 1, c.jsLib.pick(this.currentOptions.radius, c.jsLib.clamp(Math.floor(b / 10), 2, 5)));
                l = Math.ceil(Math.min(5, Math.max(1, b / 20)));
                t = "M " + t + " " + v + " L " + t + " " + q;
                v = [this.renderer.path({
                    d: this.rectPath(.5, .5, Math.floor(a), Math.floor(b), [p, p, p, p]),
                    stroke: this.defaults.none,
                    fill: this.getColor(g.length + 2) || "rgba(0,0,0,0.05)"
                })];
                q = 1 < g.length && g[0] > g[1];
                r = 1 < g.length && X(g[0]) && X(g[1]) && g[0] < g[1] || !g[1] && 0 < g[0];
                r = [r ? p : 0, r ? 0 : p, r ? 0 : p, r ? p : 0];
                n = n || "#666666";
                u = (1 - c.colorLib.brightness(n)) / (g.length + 1);
                for (var w = g.length - 1; 0 <= w; w--) {
                    var x = g[w];
                    if (X(x)) {
                        var y = this.getColor(w + 2) || c.colorLib.changeBrightness(n, (w + 1) * u);
                        if (!(x < m || x > d)) {
                            var z = (0 > k ? Math.floor(a) : 0) + .5;
                            x = Math.floor((0 > k ? a : 0) + a * (x - Math.max(m, 0)) / (d - m)) + .5;
                            q && (z = x,
                            x = Math.floor(a) + .5);
                            v.push(this.renderer.path({
                                d: this.rectPath(Math.min(x, z), .5, Math.abs(x - z), b, r),
                                stroke: "none",
                                fill: y
                            }))
                        }
                    }
                }
                v = v.concat([this.renderer.path({
                    d: e,
                    strokeWidth: 0,
                    stroke: this.defaults.none,
                    fill: this.primaryColor()
                }), this.renderer.path({
                    d: t,
                    stroke: this.getColor(1) || "#262626",
                    fill: this.defaults.none,
                    "stroke-width": 2 * l,
                    "stroke-linecap": "round"
                }), this.renderer.path({
                    d: this.rectPath(0, 0, Math.floor(a), Math.floor(b), [p, p, p, p]),
                    strokeWidth: 1,
                    stroke: this.getColor(g.length + 3) || this.defaults.none,
                    fill: this.defaults.none
                })]);
                return {
                    elements: v
                }
            }
        }
        ;
        return b
    }(Y)
      , nd = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.secondaryColor = function() {
            return this.getColor(1) || "red"
        }
        ;
        b.prototype.axisMarkerColor = function() {
            return this.getColor(2) || this.defaults.axisMarkerColor
        }
        ;
        b.prototype.normalizeOptions = function(a) {
            var b = a.columnWidth;
            b && c.jsLib.isString(b) && (a.columnWidth = parseInt(b));
            return d.prototype.normalizeOptions.call(this, a)
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var e = this
              , d = this
              , m = d.currentOptions
              , g = m.data || [];
            if (2 > g.length)
                return {
                    elements: []
                };
            var k = []
              , l = 1 * (g.length + 1)
              , n = parseFloat(m.max)
              , p = parseFloat(m.min)
              , q = m.axisMarker ? g.concat(m.axisMarker) : g
              , t = c.jsLib.isNaN(n) ? d.max(q) : n
              , r = c.jsLib.isNaN(p) ? Math.min(d.min(q), 0) : p
              , v = d.primaryColor()
              , u = d.secondaryColor()
              , w = Math.ceil(b * (t === r ? 1 : t / (t - r))) - .5;
            n = m.columnWidth || (a - l) / g.length;
            var x = m.antialias ? n : Math.floor(n);
            l = Math.round((a - (m.antialias ? a : l + x * g.length)) / 2);
            var y = (m.columnWidth ? 0 : l) + 1 + .5;
            (m = d.currentOptions.axisMarker) && m.length && k.push(d.getAxisMarkerElement(t, r, a, b));
            var z = 4 > x ? void 0 : [1, 1, 0, 0]
              , A = 4 > x ? void 0 : [0, 0, 1, 1];
            c.jsLib.each(g, function(a) {
                if (!d.isEmptyValue(a)) {
                    var c = Math.floor(t === r ? 0 : b * a / (t - r)) || 1;
                    k.push(d.renderer.path({
                        d: e.rectPath(y, 0 > c ? w : w - c, x, Math.abs(c), 0 > c ? A : z),
                        strokeWidth: 0,
                        fill: 0 <= a ? v : u
                    }))
                }
                y += 1 + x
            });
            return {
                elements: k
            }
        }
        ;
        return b
    }(Y)
      , od = function(c) {
        function b() {
            return null !== c && c.apply(this, arguments) || this
        }
        F(b, c);
        b.prototype.getColumns = function() {
            return 10
        }
        ;
        return b
    }(Gb)
      , pd = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.defaultSize = function() {
            return {
                width: 30,
                height: 30
            }
        }
        ;
        b.prototype.addShading = function(a, b) {
            switch (parseInt(b)) {
            case 1:
                var c = {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [[0, "#fff", .66], [.4, "#fff", 0], [.6, "#fff", 0], [1, "#fff", .66]]
                };
                break;
            case 2:
                c = {
                    radialGradient: {
                        cx: .5,
                        cy: .5,
                        r: .5
                    },
                    stops: [[0, "#fff", 0], [.8, "#fff", .2], [1, "#fff", .8]]
                };
                break;
            case 3:
                c = {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [[0, "#000", .33], [.4, "#000", 0], [.6, "#000", 0], [1, "#000", .33]]
                };
                break;
            case 4:
                c = {
                    radialGradient: {
                        cx: .5,
                        cy: .5,
                        r: .5
                    },
                    stops: [[0, "#000", 0], [1, "#000", .25]]
                }
            }
            return c || a
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var e = this
              , d = this
              , m = d.currentOptions
              , g = m.data || []
              , k = g.length;
            if (1 > k)
                return {
                    elements: []
                };
            var l = m.color
              , n = "black" === l ? 0 : k
              , p = m.colors && m.colors.slice(1) || (l ? c.jsLib.slice(c.colorLib.colorToPalette(l, {
                lightness: 1
            }, k + n, 0), n) : d.palette)
              , q = a / 2
              , t = b / 2
              , r = Math.min(a, b) / 2
              , v = c.jsLib.sum(c.jsLib.map(g, Math.abs));
            a = m.shading;
            var u = []
              , w = 0
              , x = 0
              , y = Math.PI / 90;
            c.jsLib.each(g, function(a, b) {
                a = Math.abs(a);
                0 < a && (a = 2 * Math.PI * a / v,
                w += a,
                1 < k ? u.push(d.renderer.path({
                    d: "M " + q + ", " + t + " \n\t\t\t\t\t\t\tL " + (q + r * Math.sin(w)) + ", " + (t - r * Math.cos(w)) + "\n\t\t\t\t\t\t\tA " + r + "," + r + " 0 " + (a > Math.PI ? 1 : 0) + " 0 " + (q + r * Math.sin(x)) + ", " + (t - r * Math.cos(x)) + " \n\t\t\t\t\t\t\tL " + q + ", " + t,
                    strokeWidth: .5,
                    stroke: d.getColor(0) || e.defaults.none,
                    fill: p[b]
                })) : u.push(d.renderer.circle(q, t, r).attr({
                    strokeWidth: .5,
                    stroke: d.getColor(0) || e.defaults.none,
                    fill: p[b]
                })),
                x = y > w ? w : w - y)
            });
            a && (g = Math.ceil(r),
            u.push(d.renderer.path({
                d: "M " + (q - g) + ", " + t + "\n\t\t\t\tA " + g + "," + g + " 0 1,0 " + (q + g) + "," + t + "\n\t\t\t\tA " + g + "," + g + " 0 1,0 " + (q - g) + "," + t,
                strokeWidth: 0,
                stroke: this.defaults.none,
                fill: d.addShading("transparent", a)
            })));
            return {
                elements: u
            }
        }
        ;
        return b
    }(Y)
      , qd = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.render = function(a, b) {
            var c = this.currentOptions
              , e = c.cellSize
              , m = c.padding || this.defaults.padding
              , g = c.data.length
              , k = c.cells;
            k || (k = this.autoGrid(g));
            c.cells = k;
            e && k && (0 < m && 1 > m ? (c.width = e[0] * k[0] / (1 - m * (k[0] + 1)),
            c.height = e[1] * k[1] + (k[1] + 1) * m * c.width) : (m = 1 < m ? m : 1,
            c.width = e[0] * k[0] + (k[0] + 1) * m,
            c.height = e[1] * k[1] + (k[1] + 1) * m));
            d.prototype.render.call(this, a, b)
        }
        ;
        b.prototype.fixedSize = function() {
            var a = this.currentOptions;
            return a.cells && a.cellSize ? {
                width: a.width,
                height: a.height
            } : d.prototype.fixedSize.call(this)
        }
        ;
        b.prototype.autoGrid = function(a) {
            var b = Math.ceil(Math.sqrt(a))
              , c = Math.floor(Math.sqrt(a));
            for (b * c < a && b++; 1.618 > (b + 1) / c && ((b + 1) * c - a < b / 2 || (b + 1) * (c - 1) > a); )
                b++,
                (c - 1) * b >= a && c--;
            return [b, c]
        }
        ;
        b.prototype.normalizeXValue = function(a, b, d) {
            var e = a[b];
            e && c.jsLib.isString(e) && (e = c.jsLib.map(e.split("x"), function(a) {
                return d(a)
            }),
            X(e[0]) && X(e[1]) ? a[b] = e : X(e[0]) ? a[b] = [e[0], e[0]] : delete a[b])
        }
        ;
        b.prototype.normalizeOptions = function(a) {
            var b = a.colorsNumber
              , h = a.padding;
            h && c.jsLib.isString(h) && (a.padding = parseFloat(h));
            b && c.jsLib.isString(b) && (a.colorsNumber = parseInt(b));
            this.normalizeXValue(a, "cells", parseInt);
            this.normalizeXValue(a, "cellSize", parseFloat);
            return d.prototype.normalizeOptions.call(this, a)
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var d = this.currentOptions
              , e = this.currentOptions.data || []
              , m = d.cells
              , g = d.cellSize
              , k = d.colors || []
              , l = k && 3 === k.length;
            if (!e.length)
                return {
                    elements: []
                };
            var n = m[1];
            m = m[0];
            var p = this.padding() || 1
              , q = g ? g[0] : (a - p * (m + 1)) / m
              , t = g ? g[1] : (b - p * (n + 1)) / n;
            g = d.antialias ? q : Math.floor(q);
            q = d.antialias ? t : Math.floor(t);
            var r = parseFloat(this.currentOptions.max)
              , v = parseFloat(this.currentOptions.min);
            t = this.max(e);
            var u = this.min(e);
            r = c.jsLib.isNaN(r) ? t : r;
            v = c.jsLib.isNaN(v) ? u : v;
            var w = Math.max(Math.max(r, -u), 0)
              , x = Math.max(v, 0)
              , y = Math.min(0, r)
              , z = Math.min(0, Math.min(v, -t));
            if (d.snapToZero || t === u)
                y = x = 0;
            d = function(a) {
                return 0 <= a ? c.colorLib.tween(l ? k[1] : "white", l ? k[2] : "#4285f4", 100 * (a - x) / (w - x || 1)) : c.colorLib.tween(l ? k[1] : "white", l ? k[0] : "#fe4c14", 100 * (a - y) / (z - y || 1))
            }
            ;
            t = [];
            a = Math.round((a - (g * m + p * (m + 1))) / 2);
            u = .5 + p + Math.round((b - (q * n + p * (n + 1))) / 2);
            for (r = v = 0; r < n; r++) {
                b = .5 + p + a;
                for (var A = 0; A < m; A++) {
                    var C = e[v];
                    this.isEmptyValue(C) || t.push(this.renderer.path({
                        d: this.rectPath(b, u, g, q, [1.5, 1.5, 1.5, 1.5]),
                        strokeWidth: 0,
                        stroke: this.defaults.none,
                        fill: c.jsLib.def(C) ? d(C) : this.defaults.none
                    }));
                    b += p + g;
                    v++
                }
                u += p + q
            }
            return {
                elements: t
            }
        }
        ;
        return b
    }(Y)
      , rd = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.defaultSize = function() {
            return {
                width: 80,
                height: void 0
            }
        }
        ;
        b.prototype.stroke = function() {
            return this.getColor(0) || this.currentOptions.color || this.defaults.stroke
        }
        ;
        b.prototype.parseData = function(a) {
            return c.jsLib.isString(a) ? a.split(this.defaults.dataDelimiter) : a
        }
        ;
        b.prototype.normalizeOptions = function(a) {
            var b = a.interval;
            b && c.jsLib.isString(b) && (a.interval = parseFloat(b));
            return d.prototype.normalizeOptions.call(this, a)
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var d = this
              , e = d.currentOptions
              , m = parseFloat(e.min || 0) || 0
              , g = parseFloat(e.max || 0) || 0
              , k = "bottom" === e.orientation
              , l = e.interval
              , n = e.data || []
              , p = !!n.length;
            if (n || g - m) {
                if (!n.length) {
                    var q = g - m;
                    if (l && l < q) {
                        q %= l;
                        var t = m + q;
                        n = [m];
                        for (q && n.push(t); t < g; )
                            t += l,
                            n.push(t)
                    } else
                        n = [m, ((g + m) / 2).toFixed(g % 1 ? Math.min(2, ("" + g % 1).length - 2) : 0), g]
                }
                var r = n.length - 1
                  , v = e.value
                  , u = function(a) {
                    return v ? v.replace("%value", a) : "" + a
                }
                  , w = b ? Math.ceil(Math.max(0, (b - 18) / 2)) : 0
                  , x = Math.floor(a / r)
                  , y = 0
                  , z = 0
                  , A = [this.renderer.path({
                    d: "M 0 " + (k ? w + 3 : (b || 18) - w - 3) + " l 0 " + 1.5 * (k ? -1 : 1) + " " + ("a 1.5, 1.5 0 0 " + (k ? 1 : 0) + " 1.5, " + (k ? -1.5 : 1.5)) + (" l " + (a - 3) + " 0 ") + ("a 1.5, 1.5 0 0 " + (k ? 1 : 0) + " 1.5, " + (k ? 1.5 : -1.5)) + (" l 0 " + 1.5 * (k ? 1 : -1)),
                    strokeWidth: 1,
                    stroke: d.getColor(1) || d.stroke(),
                    fill: this.defaults.none
                })];
                a = function(a) {
                    0 < a && a < r && A.push(C.renderer.path({
                        d: "M " + y + " " + (k ? w : (b || 18) - w - 3) + " l 0 3",
                        strokeWidth: 1,
                        stroke: d.getColor(1) || d.stroke(),
                        fill: C.defaults.none
                    }));
                    var f = u("" + n[a])
                      , g = {
                        fontFamily: "tahoma, geneva, sans-serif",
                        fontSize: 12,
                        fontWeight: "normal",
                        fontStyle: "normal"
                    }
                      , h = c.textLib.measureText(f, g, {})
                      , l = y - h * (a === r ? 1 : 0 === a ? 0 : .5)
                      , m = z > l && a !== r;
                    if (z > l && a === r) {
                        var q = p || 1 === r ? .3 : 0;
                        A.slice(A.length - 2).forEach(function(a) {
                            return a.attr({
                                opacity: q
                            })
                        })
                    }
                    g.text = f;
                    g.fill = d.stroke();
                    g.x = l;
                    g.y = (k ? 3 : 0) + w + 14 - 2;
                    m ? g.opacity = .3 : g.zIndex = 1;
                    e.rotate && 1 === Math.abs(e.rotate) / 90 % 2 && (g.rotate = .1);
                    m && !p && 1 !== r || A.push(C.renderer.element("text", g));
                    y += x;
                    z = m ? z : l + h
                }
                ;
                var C = this;
                for (m = 0; m <= r; m++)
                    a(m);
                a = {
                    elements: A
                };
                b || (a.size = {
                    height: 18
                });
                return a
            }
        }
        ;
        b.prototype.correctSize = function(a, b) {
            return 0 < a
        }
        ;
        return b
    }(Y)
      , sd = function(d) {
        function b() {
            return null !== d && d.apply(this, arguments) || this
        }
        F(b, d);
        b.prototype.addShading = function(a, b) {
            return d.prototype.addShading.call(this, a, "1" === b ? "5" : b)
        }
        ;
        b.prototype.getChartData = function(a, b) {
            var d = this
              , e = this
              , m = e.currentOptions
              , g = m.data || []
              , k = g.length
              , l = c.jsLib.pick(m.radius, 3);
            if (2 > k)
                return {
                    elements: []
                };
            var n = m.color
              , p = "black" === n ? 0 : k
              , q = m.colors && m.colors.slice(1) || (n ? c.jsLib.slice(c.colorLib.colorToPalette(n, {
                lightness: 1
            }, k + p, 0), p) : e.palette)
              , t = m.shading
              , r = c.jsLib.sum(c.jsLib.map(g, Math.abs))
              , v = []
              , u = .5;
            c.jsLib.each(g, function(c, f) {
                c = Math.abs(c);
                0 < c && (c = Math.round(a * c / r),
                v.push(e.renderer.path({
                    d: d.rectPath(u, .5, Math.round((f === g.length - 1 ? a : u + c) - u), b, [0 === f ? l : 0, f === g.length - 1 ? l : 0, f === g.length - 1 ? l : 0, 0 === f ? l : 0]),
                    strokeWidth: 0,
                    stroke: d.defaults.none,
                    fill: t ? d.addShading(q[f], t) : q[f]
                })),
                u += c)
            });
            v.push(this.renderer.path({
                d: this.rectPath(0, 0, a, b, [l, l, l, l]),
                strokeWidth: 1,
                stroke: this.getColor(0) || this.defaults.none,
                fill: this.defaults.none
            }));
            return {
                elements: v
            }
        }
        ;
        return b
    }(Y)
      , Aa = {
        sparkline: Fb,
        arealine: ld,
        bar: Gb,
        bullet: md,
        column: nd,
        progress: od,
        pie: pd,
        heatmap: qd,
        scale: rd,
        barfull: sd
    }
      , td = function(d) {
        function b(a, b) {
            var e = this
              , f = b.data;
            e = function() {
                return f && f.length && (1 === Ja(f).length ? Aa.bar : Aa.sparkline) || Aa.sparkline
            }
            ;
            if (b.type) {
                var m = void 0;
                return (m = "chart" === b.type ? e() : Aa[b.type.toLowerCase()] || e()) && new m(a,c.jsLib.omit(b, ["type"]))
            }
            return e = d.call(this, a, b) || this
        }
        F(b, d);
        return b
    }(Y)
      , oc = function() {
        function d(b, a) {
            this.currentOptions = {};
            this.renderer = b;
            this.options(a)
        }
        d.prototype.options = function(b, a) {
            var d = this.currentOptions
              , h = b.size;
            c.jsLib.def(h) && c.jsLib.isString(h) && -1 < h.indexOf("x") && (h = h.split("x"),
            b.width = b.width || h[0],
            b.height = b.height || h[1],
            delete b.size);
            c.jsLib.extend(d, b);
            this.nanoChart && this.nanoChart.updateOptions(b);
            this.render(a)
        }
        ;
        d.prototype.render = function(b) {
            var a = this
              , c = a.currentOptions
              , d = function(b) {
                a.skipSetSize = !0;
                b && b.height && a.rootPanel && a.rootPanel.attr({
                    height: b.height
                });
                b && b.width && a.rootPanel && a.rootPanel.attr({
                    width: b.width
                })
            };
            if (a.rootPanel)
                a.nanoChart.render(a.getRootSize(), b, d);
            else {
                a.nanoChart = new td(a.renderer.renderer,c);
                var f = a.nanoChart.defaultSize()
                  , m = a.nanoChart.fixedSize();
                a.rootPanel = a.renderer.panel({
                    width: c.width || c.size || m.width || f.width,
                    height: c.height || c.size || m.height || f.height,
                    margin: c.margin,
                    xAlignment: c.align || "left",
                    yAlignment: c.verticalAlign || "top"
                });
                a.nanoChart.render(a.getRootSize(), b, d);
                a.nanoChart.add(a.rootPanel)
            }
        }
        ;
        d.prototype.add = function(b) {
            var a = this
              , c = this.rootPanel;
            c.add(b);
            c.on("setSize", function() {
                !0 !== a.skipSetSize && a.nanoChart.render(a.getRootSize());
                a.skipSetSize = !1
            });
            c.on("pixelCorrection", function() {
                a.nanoChart.pixelCorrection(c)
            });
            this.nanoChart.pixelCorrection(c);
            return c
        }
        ;
        d.prototype.getRootSize = function() {
            var b = this.rootPanel;
            return {
                width: b.width.px,
                height: b.height.px
            }
        }
        ;
        d.prototype.destroy = function() {
            this.nanoChart.destroy();
            this.rootPanel.destroy()
        }
        ;
        return d
    }()
      , nc = "sparkline arealine bar bullet column progress pie heatmap scale chart barfull".split(" ");
    (function() {
        c.registerTag("arcShape", function(c, b) {
            return c.createElement(kd, "g", b)
        });
        lc()
    }
    )();
    c.moduleLoader.registerModule("modules/types") && (c.registerSeriesType("annotation", Nc),
    c.registerPanes(Sc),
    c.registerSeriesType("treemap", Tc),
    c.registerSeriesType("funnel", Pa),
    c.registerSeriesType("cone", Pa),
    c.registerSeriesType("pyramid", Pa),
    c.registerSeriesType("heatmap", xb),
    c.registerSeriesType("calendar", Yc),
    c.registerSeriesType("pie", Zc),
    c.chartOptionsAppliers.navigator = $b,
    bc(c.chartOptionsAppliers, c.chartOptionsModifiers),
    mc(),
    c.chartInitializers.types = pc)
}
)(JSC.internal._modules.types.export);
