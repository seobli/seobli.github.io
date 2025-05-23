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
(function(f) {
	function va(b, a) {
		function d() {
			this.constructor = b
		}
		aa(b, a);
		b.prototype = null === a ? Object.create(a) : (d.prototype = a.prototype, new d)
	}

	function V(b) {
		var a = "function" === typeof Symbol && b[Symbol.iterator],
			d = 0;
		return a ? a.call(b) : {
			next: function() {
				b && d >= b.length && (b = void 0);
				return {
					value: b && b[d++],
					done: !b
				}
			}
		}
	}

	function ba(b, a) {
		var d = "function" === typeof Symbol && b[Symbol.iterator];
		if (!d) return b;
		b = d.call(b);
		var c, h = [];
		try {
			for (;
				(void 0 === a || 0 < a--) && !(c = b.next()).done;) h.push(c.value)
		} catch (g) {
			var e = {
				error: g
			}
		} finally {
			try {
				c && !c.done && (d = b["return"]) && d.call(b)
			} finally {
				if (e) throw e.error;
			}
		}
		return h
	}

	function wa(b) {
		var a, d, c, h = [];
		b = f.jsLib.map(b, function(a) {
			return [
				[a[0], a[1]],
				[a[0] + a[2], a[1]],
				[a[0], a[1] + a[3]],
				[a[0] + a[2], a[1] + a[3]]
			]
		});
		try {
			for (var e = V(b), g = e.next(); !g.done; g = e.next()) {
				var k = g.value;
				try {
					for (var l = (d = void 0, V(k)), m = l.next(); !m.done; m = l.next()) {
						var p = m.value;
						h.push(p);
						var r = f.jsLib.isUndefined(r) || p[0] < r ? p[0] : r;
						var q = f.jsLib.isUndefined(q) || p[1] < q ? p[1] : q;
						var C = f.jsLib.isUndefined(C) ||
							p[0] > C ? p[0] : C;
						var y = f.jsLib.isUndefined(y) || p[1] > y ? p[1] : y
					}
				} catch (A) {
					d = {
						error: A
					}
				} finally {
					try {
						m && !m.done && (c = l.return) && c.call(l)
					} finally {
						if (d) throw d.error;
					}
				}
			}
		} catch (A) {
			var K = {
				error: A
			}
		} finally {
			try {
				g && !g.done && (a = e.return) && a.call(e)
			} finally {
				if (K) throw K.error;
			}
		}
		var t = {
				min: null,
				max: null
			},
			w = {
				min: null,
				max: null
			},
			v = {
				min: null,
				max: null
			},
			n = {
				min: null,
				max: null
			};
		f.jsLib.each(h, function(a) {
			var d = a[0];
			a = a[1];
			if (d == r) {
				var c = w;
				c.min = null == c.min || a < c.min ? a : c.min;
				c.max = null == c.max || a > c.max ? a : c.max
			}
			d == C && (c = v, c.min =
				null == c.min || a < c.min ? a : c.min, c.max = null == c.max || a > c.max ? a : c.max);
			a == q && (c = t, c.min = null == c.min || d < c.min ? d : c.min, c.max = null == c.max || d > c.max ? d : c.max);
			a == y && (c = n, c.min = null == c.min || d < c.min ? d : c.min, c.max = null == c.max || d > c.max ? d : c.max)
		});
		K = [];
		a = [
			[t.min, q],
			[t.max, q],
			[C, v.min],
			[C, v.max],
			[n.max, y],
			[n.min, y],
			[r, w.max],
			[r, w.min]
		];
		d = a.length;
		c = a[0];
		for (h = 0; h < d; h++)
			if (e = a[h], !u || u[0] !== e[0] || u[1] !== e[1])
				if (h != d - 1 || c[0] !== e[0] || c[1] !== e[1]) {
					var u = e;
					K.push(e)
				} K.push(c);
		return K
	}

	function xa(b, a, d) {
		var c;
		if (f.bboxLib.intersect([a,
				b
			]) || f.bboxLib.intersect([d, b])) return !0;
		a = wa([a, d]);
		b = f.bboxLib.toPoints(b);
		try {
			for (var h = V(b), e = h.next(); !e.done; e = h.next())
				if (f.trigLib.pointInsidePolygon(e.value, a)) return !0
		} catch (k) {
			var g = {
				error: k
			}
		} finally {
			try {
				e && !e.done && (c = h.return) && c.call(h)
			} finally {
				if (g) throw g.error;
			}
		}
		return !1
	}

	function ca(b, a) {
		var d = new f.pathLib.Path({
				hasLines: b.hasLines,
				hasCurves: b.hasCurves,
				isClosed: b.isClosed,
				hasErrors: b.hasErrors
			}),
			c = [],
			h = 0;
		for (b = b.shapes; h < b.length; h++) {
			for (var e = [], g = {
					items: e
				}, k = 0, l = b[h].items; k <
				l.length; k++) {
				for (var m = l[k], p = [m[0]], r = 1; r < m.length; r++) p.push(a(m[r]));
				e.push(p)
			}
			c.push(g)
		}
		d.shapes = c;
		return d
	}

	function ya(b, a, d) {
		var c = b.series,
			h = c.indexer,
			e = c.chart.geoParser,
			g, k = c.chartArea.isZoomLive(),
			l = a.x,
			m = a.y,
			p = a.width,
			r = a.height,
			q = f.bboxLib.fromRect(a),
			C, y = c.getXYZTranslator(),
			K, t = function(a) {
				a = y(a[0], a[1]);
				return [l + a[0] * p, m + a[1] * r]
			};
		b.xyzTranslator = t;
		h.indexKeys(["coordinates", "bbox"], {}, 0);
		var n = c.userPoints,
			v = !1,
			u = function(a) {
				return ja(a, function(a, c) {
					return t([a, c])
				})
			},
			z = function(a) {
				return n[a].map ||
					h.getValue("map", a) || h.getValue("mapData", a)
			};
		b.everVisibleCount = 0;
		d = function(a, d) {
			h.getValue("pos", a);
			C = c.getMapData();
			var l = d = void 0,
				m = !0,
				p = h.getValue("coordinates", a, g),
				r = p && p.originalPath;
			if (C = C.features[0].id ? f.jsLib.find(C.features, function(c) {
					c = c.id;
					var d = n[a].mapDataId;
					return c && d && c.toLowerCase() === d.toLowerCase()
				}) || z(a) : c.userPoints[a].map) d = C.geometry.type, K = C.bbox, l = u(K), C.bbox && f.jsLib.def(C.bbox[0]) || (l = f.undefVal), v = !0, l && (v = f.bboxLib.intersect([q, l]), !p || p.isVisible || v || (m = v || xa(q,
				p.shapeBounds, l)), p && !p.everVisible && m && !k && r && (p.pathD = ca(r, p.translator).toString()));
			var y = void 0;
			if (m)
				if (r) y = ca(r, t);
				else {
					y = n[a];
					var w = z(a) || C;
					if (r = e.toPath(w)) {
						var M = function(a) {
								return a.getMapData ? a.getMapData() : a.mapData || a.map
							}(y),
							W = M.bbox || f.jsLib.evalPath(M, "properties.bbox");
						M = f.jsLib.evalPath(M, "properties.cent") || [W[0] + W[2] / 2, W[1] + W[3] / 2];
						M = t(M);
						y.plotX = M[0];
						y.plotY = M[1];
						y.tooltipPos = M
					}
					d = d || f.jsLib.evalPath(w, "geometry.type");
					y = ca(r, t);
					!l && (l = y.bbox()) && (v = f.bboxLib.intersect([q, l]))
				}
			else y =
				p.pathObj;
			m && b.everVisibleCount++;
			p && (w = p.prev) && (w.pathD && (w.pathD.clearCache && w.pathD.clearCache(!0), delete w.pathD), delete w.hitTest, delete p.prev);
			g = {
				meta: {},
				styleSet: p && k ? p.styleSet : c.getPointAttr(c.userPoints[a]),
				pathObj: y,
				isVisible: v,
				prev: p,
				originalPath: r,
				shapeBounds: l,
				translator: t,
				everVisible: m,
				fitBoxData: p ? p.fitBoxData : f.undefVal
			};
			l && (g.xyz = f.bboxLib.center(l));
			if (!k && v && ("Polygon" === d || "MultiPolygon" === d)) {
				b.altPossibleLabelPos = f.undefVal;
				var ka = v ? y : f.undefVal;
				g.hitTest = function(a, c) {
					return ka &&
						ka.hitTest(a, c)
				}
			}
			g.meta.bodyD = g.pathObj;
			h.setValue("coordinates", a, g)
		};
		for (var A = 0, Q = n.length; A < Q; A++) d(A, Q);
		f.jsLib.evalPath(C, "properties.cent");
		b.coordRect = a;
		b.validate(!0);
		b.renderOrder = h.sortBy("x", !0, function(a) {
			a = a.coordinates.shapeBounds;
			return a[2] * a[3]
		});
		b.renderOrderRev = b.renderOrder.slice(0)
	}

	function la(b, a) {
		var d = a.id,
			c = a.bbox,
			h = null == a.properties ? {} : a.properties;
		b = za(b, a);
		return null == d && null == c ? {
			type: "Feature",
			properties: h,
			geometry: b
		} : null == c ? {
			type: "Feature",
			id: d,
			properties: h,
			geometry: b
		} : {
			type: "Feature",
			id: d,
			bbox: c,
			properties: h,
			geometry: b
		}
	}

	function za(b, a) {
		function d(a) {
			return k(a)
		}

		function c(a) {
			for (var c = [], d = 0, b = a.length; d < b; ++d) {
				var e = a[d],
					h = c;
				h.length && h.pop();
				for (var g = f[0 > e ? ~e : e], l = 0, m = g.length; l < m; ++l) h.push(k(g[l], l));
				if (0 > e)
					for (e = h, h = e.length, g = h - m; g < --h;) m = e[g], e[g++] = e[h], e[h] = m
			}
			2 > c.length && c.push(c[0]);
			return c
		}

		function h(a) {
			for (a = c(a); 4 > a.length;) a.push(a[0]);
			return a
		}

		function e(a) {
			return a.map(h)
		}

		function g(a) {
			var b = a.type;
			switch (b) {
				case "GeometryCollection":
					return {
						type: b,
							geometries: a.geometries.map(g)
					};
				case "Point":
					a = k(a.coordinates);
					break;
				case "MultiPoint":
					a = a.coordinates.map(d);
					break;
				case "LineString":
					a = c(a.arcs);
					break;
				case "MultiLineString":
					a = a.arcs.map(c);
					break;
				case "Polygon":
					a = e(a.arcs);
					break;
				case "MultiPolygon":
					a = a.arcs.map(e);
					break;
				default:
					return null
			}
			return {
				type: b,
				coordinates: a
			}
		}
		var k = Aa(b.transform),
			f = b.arcs;
		return g(a)
	}

	function da(b, a) {
		a = a.toLowerCase();
		for (var d = 0, c = b.length; d < c; d++)
			if (b[d].toLowerCase() === a) return d
	}

	function X(b, a, d, c, h) {
		var e = [],
			g;
		h &&
			(d = d.toLowerCase());
		for (var k = 0, l = b.length; k < l; k++)
			if (f.jsLib.def(g = f.jsLib.evalPath(b[k], a)) && null !== g)
				if (h) {
					if (g.toLowerCase() === d)
						if (c) e.push(b[k]);
						else return b[k]
				} else if (g === d)
			if (c) e.push(b[k]);
			else return b[k];
		if (e.length) return e
	}

	function ma(b) {
		return b.replace(/\w\S*/g, function(a) {
			return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
		})
	}

	function na(b, a) {
		var d = b.chart,
			c = d.internal.mappingInfo,
			h = d.geoParser.isSoloCountry(c);
		a = h || !b.projection.type && a && (360 <= a[2] || 180 <= a[1]);
		var e, g = f.jsLib.def(e =
				d.options("mapping.projection")),
			k = a ? !1 : g ? e : c.projection;
		!h && g && c.projection !== e && (c.projection = k);
		if (c = b.zoomBBox || b.chart.geoParser.getDataBBox())
			if (h = b.getZoomAxes(), b.projection = oa("none"), h.length)
				if (k) {
					var l = "none" !== c;
					h = f.jsLib.isString(k) ? k : k.type;
					g = k.point || f.jsLib.map(l ? f.jsLib.map(f.bboxLib.center(c), G) : [0, 0], Y);
					k = k.parallels || f.jsLib.map(l ? f.jsLib.map([c[1] + .1 * c[3], c[1] + .9 * c[3]], G) : [0, 1], Y);
					b.projection = oa(h, g, k) || ea(g)
				} else b.projection = pa();
		a && e && "none" !== e.type && f.emitter.emit("warning",
			d.id, "mapIsAlreadyProjected", {
				container: d.getWraper()
			})
	}

	function Ba(b) {
		var a = b.chartArea,
			d = a.chart,
			c = a.chart.internal.mappingInfo,
			h = b.getMapData();
		a.ctManager.isMapLayer(b) && "object" === typeof h && (d = {
				data: d.options("dataSet"),
				binding: d.options("dataSetBinding"),
				points: b.userPoints,
				mode: "makePoints",
				series: b,
				cmi: c
			}, a = a.chart.geoParser.parse(h, d), d = b.options("type"), d = "marker" === a.type && "bubble" === d ? "bubble" : "marker" === a.type ? "marker" : "map", h = {
				points: a.points,
				map: {
					bbox: a.bbox,
					type: a.type,
					solo: h.solo
				}
			},
			d && (h.type = d), b.options(h, !1), b.seriesDirty.pointIndex(!0), b.setData())
	}

	function Ca(b, a) {
		var d = b.chart,
			c = [],
			h = [],
			e = [],
			g = [],
			k = [],
			l = d.options("mapping.base.layers"),
			m = d.options("mapping.referenceLayers"),
			p = d.options("mapping.base.series"),
			r = function(a) {
				var d, e = function(a) {
					return b.series().find(function(c) {
						var d = a.mapDataId;
						return c.options("mapDataId") === d
					})
				};
				c.length !== a.length && f.jsLib.each(a, function(a) {
					e(a) || (b.addSeries(a), d = !0)
				});
				b.series().each(function(c) {
					var d = c.options("map");
					f.jsLib.isString(d) &&
						!c.options("mapDataId") && (d = f.jsLib.find(a, {
							map: d
						}), c.options(d, !1))
				});
				return d
			};
		b.series().each(function(a) {
			a = a.getConfig();
			c.push(a);
			switch (Da(a)) {
				case "loaded":
					g.push(a);
					e.push(a);
					break;
				case "proto":
					e.push(a);
					k.push(a);
					break;
				case "config":
					h.push(a);
					k.push(a);
					break;
				case "none":
					e.push(a)
			}
		});
		var q = d.internal.mappingInfo;
		p = {
			chartMappingInfo: q,
			contextSeries: p,
			existingSeries: e
		};
		p.series = h;
		var C = b.readyDefer.hold("mapLoad"),
			y = d.inited && d.loading(!0);
		d.geoParser.loadMaps(l, m, p, function(c, e) {
			c = r(e);
			k.length ||
				c ? d.geoParser.populateSeriesWhenAble(b._series, q, function() {
					b.series().each(Ba);
					b.zoomBBoxMax = Z(d);
					if ("zoom" !== b.chart.action.last()) {
						var c = b.chart.geoParser.getDataBBox();
						c && fa(b, c);
						delete b.zoomBBox;
						delete b.zoomBBoxSet
					}
					d.isRendered && (b.isDirtyPreRender = !0, fa(b, b.chart.geoParser.getDataBBox()), f.jsLib.keys(b.readyDefer._onReady).length || !1 === a || b.chartAreaSet.reflow());
					b.readyDefer.release(C);
					y && d.loading(!1)
				}) : (b.readyDefer.release(C), y && d.loading(!1))
		}, function() {
			b.readyDefer.release(C);
			y && d.loading(!1)
		})
	}

	function Ea(b) {
		var a = b.chart,
			d = a.uiItems ? a.uiItems("zoom") : null,
			c = a.currentOptions.axisToZoom;
		if (!d && "" !== c && "none" !== c && !1 !== f.jsLib.evalPath(a.currentOptions, "toolbar.visible")) {
			d = {
				key: "zoom",
				label: {
					text: ""
				},
				margin: 10,
				boxVisible: !1,
				itemsBox: {
					boxVisible: !1,
					layout: "vertical",
					visible: !0
				},
				position: "brbr",
				stackDirection: "none",
				ignoreDefault: !0,
				items: {
					zoomIn: {
						y: .5,
						tooltip: "Zoom in",
						label: {
							text: "+"
						},
						events: {
							click: "zoom10In"
						},
						corners: ["round", "round", "square", "square"]
					},
					zoomOut: {
						label: {
							text: "-"
						},
						tooltip: "Zoom out",
						events: {
							click: "zoom10Out"
						},
						corners: ["square", "square", "round", "round"]
					}
				},
				defaultItem: {
					width: 30,
					height: 30,
					label: {
						align: "center",
						style: {
							fontSize: "16px"
						}
					}
				},
				actions: {
					zoom10In: function() {
						b.chart.zoom("+80%")
					},
					zoom10Out: function() {
						b.chart.zoom("-80%")
					}
				}
			};
			c = a.toolbar();
			var h = f.jsLib.evalPath(c, "currentOptions.items.zoom");
			h && !1 === h.visible || !c || !c.items || (c.items.add(h ? f.jsLib.extend(d, h) : d), a.chartAreaSet.reflow(f.undefVal, !1, !0), c.reactivateAccessibility())
		}
	}

	function Fa(b, a, d) {
		var c = b.chart,
			h = c.geoParser,
			e, g = [],
			k, l = f.jsLib.getValType(a);
		if ("object" === l || "function" === l)
			if (c.series().each(function(c) {
					k = c.points().filter(a);
					Array.prototype.push.apply(g, k)
				}), g.length) a = h.getBBoxOfPoints(g);
			else return f.emitter.emit("warning", this.id, "filterDidNotMatchAnyPoints", {
				container: c.getWraper()
			}), !1;
		else if ("string" === l && 1 < a.length && isNaN(parseInt(a[1])) && (e = h.findJsObjByMapCode(a))) {
			if (e.zoomTo) {
				e.zoomTo();
				return
			}
			a = h.getBBoxOfPoints(e)
		}
		qa(b, a, d);
		return !0
	}

	function qa(b, a, d) {
		function c(a) {
			var c = f.bboxLib.center(b.zoomBBox ||
				p);
			m && (a = Math.min(a, m));
			return h([c[0], c[1], a])
		}

		function h(a) {
			var c = [a[0], a[1]],
				d = a[2];
			a = f.jsLib.clamp(r[2] / d, 1, r[2]);
			d = f.jsLib.clamp(r[3] / d, 1, r[3]);
			return f.bboxLib.snapInside(f.bboxLib.fromCenter(c, [a, d]), r)
		}

		function e(a) {
			var d;
			if ("initial" === a) return Z(g);
			p = b.zoomBBox || p;
			var e = "+" === a[0] ? 1 : "-" === a[0] ? -1 : 0;
			(d = a.replace(/^\D+/g, "")).length && (d = parseFloat(d) / 100);
			if (0 === e) return c(d);
			a = b.zoomBBoxMax[2] / p[2];
			return c(Math.max(a + a * d * e, 1))
		}
		var g = b.chart,
			k = g.geoParser,
			l = f.jsLib.getValType(a);
		k = k.getDataBBox();
		var m = g.options("mapping.zoomLimit"),
			p = k.slice(0),
			r = b.zoomBBoxMax;
		if ("number" === l) a = c(a);
		else if ("string" === l) a = e(a);
		else if (4 !== a.length)
			if (3 === a.length) a = h(a);
			else if (2 === a.length) a = f.bboxLib.snapInside(f.bboxLib.translate(b.zoomBBox || p, a), r);
		else throw "Zooming config not supported.";
		l = b.zoomBBoxMax;
		!l || l[2] !== a[2] && l[3] !== a[3] || (a = l);
		Ga(b, a, d)
	}

	function Z(b) {
		var a = b.geoParser.getDefinedDataBBox(b.internal.mappingInfo);
		return a && a[2] ? a : b.geoParser.getDataBBox()
	}

	function fa(b, a) {
		b.zoomAxes.length ||
			b.setZoomAxes();
		(b = b.zoomAxes).length && (b[0].setDataRange([a[0], a[0] + a[2]]), b[1].setDataRange([a[1], a[1] + a[3]]))
	}

	function ra(b, a) {
		b.zoomAxes.length || b.setZoomAxes();
		b = b.zoomAxes;
		b[0].zoom(a[0], a[0] + a[2], !1);
		b[1].zoom(a[1], a[1] + a[3], !1);
		b[0].setViewState();
		b[1].setViewState()
	}

	function Ga(b, a, d) {
		ra(b, a);
		var c = b.chart;
		b.zoomBBox = a;
		b = b.zoomBBoxInitial = Z(c);
		a = !!f.bboxLib.compareBoxes(a, b, 3);
		(b = c.toolbar()) && b.zoomInOut(a);
		c.redraw(d)
	}

	function sa(b, a) {
		var d = b.zoomBBox || b.chart.geoParser.getDataBBox();
		b.zoomBBoxSet =
			d;
		var c;
		if (c = d) {
			c = d;
			d = b.chart;
			d.internal.mappingInfo.projection && (c = Ha(b, c));
			a && (a = c, d = d.options("defaultSeries.shape.padding") || .05, c = f.bboxLib.center(a), c = f.bboxLib.fromCenter(c, [a[2] + a[2] * d, a[3] + a[3] * d]));
			var h = f.bboxLib.fromRect(b.contentRect);
			b = c[0];
			a = b + c[2];
			d = c[1];
			c = d + c[3];
			var e = a - b,
				g = c - d,
				k = e / h[2],
				l = g / h[3];
			h = b + e / 2;
			var m = d + g / 2;
			k < l ? (e *= l / k, b = [h - e / 2, d, h + e / 2, c]) : (e = k / l * g, b = [b, m - e / 2, a, m + e / 2]);
			c = f.bboxLib.fromLTRB(b)
		}
		return c
	}
	var aa = function(b, a) {
			aa = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof
			Array && function(a, c) {
				a.__proto__ = c
			} || function(a, c) {
				for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
			};
			return aa(b, a)
		},
		ja = function(b, a) {
			for (var d = b[3] / 2, c = b[2] / 2, h, e, g, k, f = b[0], m = 0; 2 >= m; f += c, m++)
				for (var p = b[1], r = 0; 2 >= r; p += d, r++)
					if (0 === m || 2 === m || 0 === r || 2 === r) {
						var q = a(f, p);
						h = void 0 !== h ? Math.min(q[0], h) : q[0];
						e = void 0 !== e ? Math.min(q[1], e) : q[1];
						g = void 0 !== g ? Math.max(q[0], g) : q[0];
						k = void 0 !== k ? Math.max(q[1], k) : q[1]
					} return [h, e, g - h, k - e]
		},
		ta = function() {
			return {
				axes: "x,y",
				values: "map",
				requiredData: "",
				supportedData: "",
				privateAxes: "",
				customAxisOptions: {
					x: {
						visible: !1,
						type: "map"
					},
					y: {
						visible: !1,
						type: "map"
					}
				}
			}
		},
		Ia = function(b) {
			function a() {
				var a = null !== b && b.apply(this, arguments) || this;
				a.kind = "map";
				a.typeConfig = ta();
				a.everVisibleCount = 0;
				return a
			}
			va(a, b);
			a.prototype.getTypeConfigDefault = function() {
				return ta()
			};
			a.prototype.applyBoundsToAxes = function(a, c) {
				var d = this.series,
					b = d.xAxis;
				d = d.yAxis;
				a[2] < c[2] && (a[0] = c[0], a[2] = c[2]);
				a[3] < c[3] && (a[1] = c[1], a[3] = c[3]);
				b.setMapRange([a[0], a[0] + a[2]], [c[0], c[0] + c[2]]);
				d.setMapRange([a[1],
					a[1] + a[3]
				], [c[1], c[1] + c[3]])
			};
			a.prototype.setCoordinates = function(a, c) {
				ya(this, a, c);
				return this
			};
			a.prototype.possibleLabelPositions = function(a, c, b, e, g) {
				if (this.altPossibleLabelPos) return this.altPossibleLabelPos(this, a, c, b, e, g);
				g = this.series;
				b = e.meta;
				var d = a.getMapData();
				c = c || e.pathD || e.meta.bodyD;
				var h = f.bboxLib.fromRect(g.renderRect);
				g = this.xyzTranslator;
				var m = e.xyz;
				a = [];
				var p = b.labelSize;
				if (e.everVisible) {
					var r = f.jsLib.evalPath(e.prevCoord, "meta.label"),
						q = e.shapeBounds;
					h = e.everVisible || (r ? f.bboxLib.intersect([r,
						h
					]) : !0);
					if ((d = f.jsLib.evalPath(d, "properties.cent")) || !h) return [f.bboxLib.fromCenter(d ? g(d) : m, b.labelSize)];
					if (20 > this.everVisibleCount) a: {
						if (q && (e.fitBoxData || (c = c.isPath ? c : f.pathLib.fromString(c), e.fitBoxData = f.polyFitLib.fitBoxData(c, q)), e.fitBoxData)) {
							e = f.polyFitLib.fitBoxInScanData(e.fitBoxData, q, p, d ? g(d) : m);
							break a
						}
						e = void 0
					}
					else e = f.bboxLib.fromCenter(f.bboxLib.center(q), b.labelSize);
					e && a.push(e)
				}
				return a
			};
			a.prototype.getIconPaths = function(a, c) {
				return f.getColumnIconPathsStatic(this, a, c)
			};
			a.prototype.render_applyDynamicAttrVals =
				function(a, c, h) {
					a = b.prototype.render_applyDynamicAttrVals.call(this, a, c, h);
					delete a["fill-rule"];
					return a
				};
			a.prototype.getPointAnimatorOptions = function(a) {
				return {
					simple: !0
				}
			};
			return a
		}(f.SeriesBaseType),
		Ja = function(b) {
			return b
		},
		Aa = function(b) {
			if (null == b) return Ja;
			var a, d, c = b.scale[0],
				h = b.scale[1],
				e = b.translate[0],
				g = b.translate[1];
			return function(b, f) {
				f || (a = d = 0);
				f = 2;
				var k = b.length,
					l = Array(k);
				l[0] = (a += b[0]) * c + e;
				for (l[1] = (d += b[1]) * h + g; f < k;) l[f] = b[f], ++f;
				return l
			}
		},
		ha = function(b, a) {
			return "GeometryCollection" ===
				a.type ? {
					type: "FeatureCollection",
					features: a.geometries.map(function(a) {
						return la(b, a)
					})
				} : la(b, a)
		},
		E = f.en.error.mapping = {
			noType: "The type member is missing.",
			wrongType: "The geoJSON type %% is not supported.",
			noCoordinates: "The object %% does not contain a coordinates member",
			noGeometry: "The object type %% requires a geometry member.",
			noPropInType: "The object type %% requires a ## member.",
			notTopology: "The object is not topoJSON.",
			mapPathNotFound: "The map data path cannot be determined.",
			mapNotFound: 'Error loading map data: "%%"',
			codeInvalid: "Regional code %% not recognized or invalid."
		},
		R = ["map", "mapDataId", "map.id"],
		S = {
			Point: function(b, a, d, c) {
				b = a.coordinates || a;
				return {
					data: b,
					bbox: f.bboxLib.bboxFromPoints([b]),
					type: "marker"
				}
			},
			Polygon: function(b, a, d, c) {
				f.jsLib.def(a = a.coordinates) || b.error(E.noCoordinates, "Polygon");
				"number" === typeof a[0][0][0] && (a = a[0]);
				return {
					data: a,
					bbox: f.jsLib.evalPath(c, "properties.bbox") || f.bboxLib.bboxFromPoints(a)
				}
			},
			MultiPoint: function(b, a, d, c) {
				c = [];
				var h = [];
				f.jsLib.def(a = a.coordinates) || b.error(E.noCoordinates,
					"MultiPoint");
				for (var e = 0, g = a.length; e < g; e++) c[e] = S.Point(b, a[e], d), h[e] = c[e].bbox;
				return {
					type: "marker",
					points: c,
					bbox: f.bboxLib.bboxUnion(h)
				}
			},
			LineString: function(b, a, d, c) {
				c = [];
				var h = [];
				f.jsLib.def(a = a.coordinates) || b.error(E.noCoordinates, "LineString");
				for (var e = 0, g = a.length; e < g; e++) c[e] = S.Point(b, a[e], d), h[e] = c[e].bbox;
				return {
					type: "line",
					points: c,
					bbox: f.bboxLib.bboxUnion(h)
				}
			},
			MultiLineString: function(b, a, d, c) {
				c = [];
				var h, e = [];
				f.jsLib.def(h = a.coordinates) || b.error(E.noCoordinates, "MultiLineString");
				for (var g = 0, k = h.length; g < k; g++) {
					var l = h[g];
					a = {};
					a.coordinates = l;
					c[g] = S.LineString(b, a, d);
					e[g] = c[g].bbox
				}
				return {
					type: "line",
					points: c,
					bbox: f.bboxLib.bboxUnion(e)
				}
			},
			MultiPolygon: function(b, a, d, c) {
				var h = [],
					e, g = [];
				f.jsLib.def(e = a.coordinates) || b.error(E.noCoordinates, "MultiPolygon");
				for (var k = 0, l = e.length; k < l; k++) {
					var m = e[k];
					a = {};
					a.coordinates = m[0];
					h[k] = S.Polygon(b, a, d, c);
					g[k] = h[k].bbox
				}
				return {
					type: "polygon",
					points: h,
					bbox: f.jsLib.evalPath(c, "properties.bbox") || f.bboxLib.bboxUnion(g)
				}
			},
			GeometryCollection: function(b,
				a, d) {
				a = a.geometries;
				for (var c = [], h = 0, e = a.length; h < e; h++) c[h] = b.parseType(a[h], d);
				return c
			},
			Feature: function(b, a, d) {
				var c;
				f.jsLib.def(c = a.geometry) || b.error(E.noPropInType, "Feature", "geometry");
				f.jsLib.def(a.properties) || b.error(E.noPropInType, "Feature", "properties");
				return b.parseType(c, d, a)
			},
			FeatureCollection: function(b, a, d) {
				d = d || {};
				var c = [],
					h, e = [],
					g = [],
					k = d.data,
					l = d.binding,
					m = d.mode,
					p = d.points || [];
				f.jsLib.def(a = a.features) || b.error(E.noPropInType, "FeatureCollection", "features");
				if (l) {
					var r = l.split(",");
					if (2 === r.length) {
						var q = r[0];
						var C = r[1]
					}
				}
				var y;
				if ("makePoints" === m) {
					m = 0;
					for (r = a.length; m < r; m++) {
						var n = a[m];
						c[m] = n.id ? b.removePredef(p, n.id, d.cmi) || {} : {};
						c[m].map = n;
						f.jsLib.def(c[m].name) || f.jsLib.applySetting(c[m], n, "name", "properties.name");
						if (h = f.jsLib.evalPath(c[m], "map.bbox") || f.jsLib.evalPath(c[m], "map.properties.bbox")) c[m].x = [h[0], h[0] + h[2]], c[m].y = [h[1], h[3] + h[3]];
						b.setJscObjMapId(c[m], n.id, !0);
						h = n.properties;
						c[m].attributes = f.jsLib.extend(c[m].attributes || {}, h);
						f.jsLib.def(c[m].attributes) ||
							(c[m].attributes = h);
						if (l && h && k)
							for (var t = 0, u = k.length; t < u; t++) {
								var v = k[t];
								if (v[q] === h[C])
									for (var B in v) B !== q && (c[m].attributes[B] = v[B])
							}
						h = b.parseType(n, d);
						f.jsLib.setPathVal(c[m], "map.bbox", h.bbox);
						if ("marker" === h.type) {
							var z = !0;
							c[m].x = h.data[0];
							c[m].y = h.data[1];
							g.push(h.data)
						}
						"line" === h.type && (y = !0);
						0 !== h.bbox[2] && b.isIncludedInBBox(b.getJscObjMapId(d.series), n.id) && e.push(h.bbox)
					}
					g.length && e.push(f.bboxLib.bboxFromPoints(g))
				} else
					for (m = 0, r = a.length; m < r; m++) n = a[m], c[m] = b.parseType(n);
				c = {
					points: c,
					bbox: f.bboxLib.bboxUnion(e)
				};
				y && (c.type = "line");
				z && (c.type = "marker");
				return c
			}
		},
		T = function(b) {
			return b.getMapData ? b.getMapData() : b.mapData || b.map
		},
		ia = function(b, a) {
			b.getMapData ? b.setMapData(a) : b.mapData = a
		},
		La = function() {
			function b(a) {
				this.regionList = [];
				this.chart = a
			}
			b.prototype.throwMessage = function(a, d, c, b) {
				f.emitter.emit(a, "geoParser", d, {
					data: [c, b],
					container: this.chart.getWrapper()
				})
			};
			b.prototype.error = function(a, d, c) {
				this.throwMessage("error", a, d, c)
			};
			b.prototype.parse = function(a, d) {
				return this.parseType(a,
					d, {})
			};
			b.prototype.parseType = function(a, d, c) {
				var b, e;
				return f.jsLib.def(e = a.type) ? (b = S[e]) ? b(this, a, d, c) : this.error(E.wrongType, e) : this.error(E.noType)
			};
			b.prototype.toPath = function(a) {
				var d = a.type;
				f.jsLib.def(a = a.geometry) || this.error(E.noPropInType, d, "geometry");
				d = a.type;
				f.jsLib.def(a = a.coordinates) || this.error(E.noCoordinates, d);
				return f.pathLib.fromPoints(a, {
					isOpen: "LineString" === d || "MultiLineString" === d
				})
			};
			b.prototype.flatten = function(a) {
				return a && a.join ? a.join(" ").replace(/,/g, " ") : a
			};
			b.prototype.getBBoxOfPoints =
				function(a) {
					for (var d = [], c, b, e, g = 0, k = a.length; g < k; g++) {
						var l = a[g],
							m = T(l);
						(c = m.bbox || f.jsLib.evalPath(m, "properties.bbox")) ? c && d.push(c): f.jsLib.def(b = l.x) && f.jsLib.def(e = l.y) && d.push([b, e, 0, 0])
					}
					return f.bboxLib.bboxUnion(d)
				};
			b.prototype.getSeriesBBox = function(a) {
				var d = T(a),
					c = d ? d.bbox : this.getBBoxOfPoints(a.points().items);
				if (c) return c;
				var b = [];
				if (d && (f.jsLib.each(d.features, function(a) {
						b.push(a.bbox)
					}), c = f.bboxLib.bboxUnion(b))) return c;
				c = a.indexer;
				var e = c.hasKey("xs") ? ["xs", "xe"] : ["x", "x"],
					g = c.hasKey("ys") ? ["ys", "ye"] : ["y", "y"];
				a = c.min(e[0]);
				d = c.min(g[0]);
				e = c.max(e[1]);
				c = c.max(g[1]);
				if (!f.jsLib.isUndefined(a) && !f.jsLib.isUndefined(d)) return [a, d, e - a, c - d]
			};
			b.prototype.getDataBBox = function(a) {
				var d = [],
					c = this;
				a = a || this.chart.series();
				if (a.each && a.items.length) return a.each(function(a) {
					(a = c.getSeriesBBox(a)) && d.push(a)
				}), f.bboxLib.bboxUnion(d)
			};
			b.prototype.geoIterator = function(a, d) {
				function c(a) {
					for (var c = 0, b = a.length; c < b; c++) d(a[c])
				}

				function b(a) {
					for (var c = 0, b = a.length; c < b; c++) d(a[c])
				}
				var e, g;
				f.jsLib.def(g =
					a.features) && b(g);
				f.jsLib.def(e = a.geometries) && c(e)
			};
			b.prototype.polygonIterator = function(a, d) {
				var c = a.type;
				a = a.coordinates;
				if ("Polygon" === c)
					for (var b = 0, e = a.length; b < e; b++) {
						var g = a[b];
						var f = [];
						for (var l = 0, m = g.length; l < m; l++) c = g[l], f.push(c);
						d(f.slice(0))
					} else if ("MultiPolygon" === c) {
						g = 0;
						for (var p = a.length; g < p; g++) {
							var r = a[g];
							b = 0;
							for (e = r.length; b < e; b++) {
								var q = r[b];
								f = [];
								l = 0;
								for (m = q.length; l < m; l++) c = q[l], f.push(c);
								d(f.slice(0))
							}
						}
					}
			};
			b.prototype.arrToGeo = function(a) {
				return {
					type: "FeatureCollection",
					features: a
				}
			};
			b.prototype.identifyCodeType = function(a, d) {
				function c(a) {
					if (2 === a.length && 1 < a[0].length && 1 < a[1].length) return !0
				}
				d = d || [];
				var b = a.length,
					e = [],
					g = a.toLowerCase();
				this.regionList.length || (this.regionList = f.jsLib.keys(f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex")));
				var k = a.split(":");
				if (c(k)) return c(k[0].split(".")) ? "mapPropertyFilter" : "propertyFilter";
				if (k = -1 < a.indexOf(".")) e = a.split(".");
				else if (4 === b && 2 === a.indexOf("_s")) return "soloCountry";
				if ("albersusa" === g) return "albersUSA";
				if ("world" === g) return "region|-1";
				if (-1 < g.indexOf(".json")) return "custom|-2";
				if (3 < a.length && !k && -1 < da(this.regionList, a)) return "region|-1";
				if (2 === a.length) return "hasc|0";
				if (4 === a.length) return "fips|1";
				if (3 < a.length && k) return 2 === e.length && 2 !== e[0].length ? (d.length && -1 < da(d, e[0]) || this.getGeoObject(e[0]), "customFeature|-3") : "fips|1";
				"custom" === a || this.getGeoObject(g);
				return "custom|-2"
			};
			b.prototype.getMapCodeToLoad = function(a) {
				return a.split(".")[0]
			};
			b.prototype.findParentRegion = function(a) {
				var d = f.jsLib.evalPath(f.platform.win.JSCL,
						"mapIndex"),
					c = this.identifyCodeType(a);
				"albersUSA" === c ? a = "us" : "soloCountry" === c && (a = a.replace("_s", ""));
				if (2 === a.length)
					for (var b in d) {
						if (d.hasOwnProperty(b) && -1 < d[b].Countries.indexOf(a.toUpperCase())) return b
					} else throw "cant find region of non-isoA2 code.";
			};
			b.prototype.countryCode = function(a) {
				var d = this.identifyCodeType(a);
				if ("hasc|0" === d) return a;
				if ("fips|1" === d || "hasc|2" === d) return a.split(".")[0]
			};
			b.prototype.findCodeToLoadCountryFeature = function(a) {
				return this.findParentRegion(a)
			};
			b.prototype.isIncludedInBBox =
				function(a, d) {
					var c, b = f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex");
					a && (c = this.identifyCodeType(a));
					var e;
					return "region|-1" === c && (e = b[a.toLowerCase()].noBBox) && -1 < e.indexOf(d.toUpperCase()) ? !1 : !0
				};
			b.prototype.addAliasedAttributes = function(a) {
				var d = a.properties,
					c;
				if (c = a.id || d.hasc)
					if (a.id || (a.id = c), a = this.identifyCodeType(c), d.mapcode = c, "fips|1" === a) {
						d.mapLevel = "province";
						d.provincecode = d.statecode = d.postal;
						d.province = d.state = d.name;
						d.countrycode = d.hasc.split(".")[0];
						if (c = d.region) d.countryregion =
							c;
						a: {
							c = d.countrycode;c = c.toLowerCase();
							(a = f.jsLib.evalPath(f.platform.win.JSCL, "master.objects.countries.geometries")) || (a = f.jsLib.evalPath(f.platform.win.JSCL, "maps." + c + "_s.objects.countries.geometries"));
							if (a)
								for (var b = 0, e = a.length; b < e; b++) {
									var g = a[b].properties;
									if (g.hasc.toLowerCase() === c) {
										c = g;
										break a
									}
								}
							c = void 0
						}
						c && (d.country = c.name, c.region && (d.worldregion = c.region), c.continent && (d.continent = c.continent))
					} else if ("hasc|0" === a) {
					if (d.mapLevel = "country", d.countrycode = d.hasc, d.country = d.name, c = d.region) d.worldregion =
						c
				} else "region|-1" === a && (d.mapLevel = "region")
			};
			b.prototype.filenameWithoutExtension = function(a) {
				a = a.replace(/\\/g, "/").split("/");
				a = a[a.length - 1].split(".");
				1 < a.length && a.pop();
				return a.join(".")
			};
			b.prototype.idfyPath = function(a) {
				a = this.filenameWithoutExtension(a); - 1 < a.indexOf(".") && (a = a.split(".")[0]);
				a = a.replace(/\\/g, "/").replace(/\//g, "_").replace(/\./g, "_");
				return a.toLowerCase()
			};
			b.prototype.genericFilter = function(a, d) {
				d = d || {};
				var c = [],
					b = d.getProperties,
					e = d.conditions;
				f.jsLib.each(a, function(a,
					d) {
					d = b ? b(a) : a;
					var g = !0,
						h = !1;
					if ("function" === typeof e) var f = e(d);
					else {
						for (f in e)
							for (var k in d)
								if (k === f)
									if (e[f] === d[k]) {
										h = !0;
										break
									} else g = !1;
						f = h && g ? !0 : void 0
					}
					f && c.push(a)
				});
				return c
			};
			b.prototype.featureMatchesPropertyFilter = function(a, d) {
				var c = this.identifyCodeType(a);
				var b = f.jsLib.evalPath(d, "properties") || d;
				if ("propertyFilter" === c) {
					a = a.split(":");
					a[1] = a[1].toLowerCase();
					c = a[0];
					if (f.jsLib.def(d = f.jsLib.evalPath(b, c)) || f.jsLib.def(d = f.jsLib.evalPath(b, c.toLowerCase())) || f.jsLib.def(d = f.jsLib.evalPath(b,
							c.toUpperCase()))) b: {
						b = typeof(d = d.valueOf());
						if ("string" === b) {
							if (d.toLowerCase() === a[1]) {
								b = !0;
								break b
							}
						} else if (d === a[1].valueOf()) {
							b = !0;
							break b
						}
						b = void 0
					}
					else b = void 0;
					return b
				}
				if (a.toLowerCase() === d.id.toLowerCase()) return !0
			};
			b.prototype.removePredef = function(a, d, c) {
				d = d.toLowerCase();
				for (var b, e, g, f = 0, l = a.length; f < l; f++)
					if (g = a[f], e = this.getJscObjMapId(g, -1))
						if (e === d || (b = this.findGeoFeature(e, c)) && b.id && b.id.toLowerCase() === d.toLowerCase()) return a.splice(f, 1), g
			};
			b.prototype.findJsObjByMapCode = function(a) {
				function d(a,
					c) {
					if (b.getJscObjMapId(a).toLowerCase() === c.toLowerCase()) return !0
				}

				function c(a) {
					for (var c = e.series().items.slice(0), b = 0, g = c.length; b < g; b++) {
						var f = c[b];
						if (d(f, a)) return f;
						for (var h = 0, k = f._points.length; h < k; h++) {
							var l = f._points[h];
							if (d(l, a)) return l
						}
					}
				}
				var b = this,
					e = b.chart,
					g;
				if (g = b.findGeoFeature(a, b.chart.internal.mappingInfo)) {
					if (g.id) return c(g.id);
					if (g.features) {
						a = [];
						for (var k = 0, l = g.features.length; k < l; k++) {
							var m = g.features[k];
							a.push(b.findJsObjByMapCode(m.id || f.jsLib.evalPath(m, "properties.hasc")))
						}
						return a
					}
					return c(a)
				}
			};
			b.prototype.getJscObjMapId = function(a, d) {
				function c(a) {
					return -1 === d ? a.toLowerCase() : 1 === d ? a.toUpperCase() : a
				}
				if (a = (a.currentOptions || a)[R[1]] || f.jsLib.evalPath(a, "userOptions." + R[1])) return c(a);
				var b = 0;
				for (var e = R.length; b < e; b++)
					if ("string" === typeof a) return b = this.identifyCodeType(a), "custom|-2" === b && (a = this.idfyPath(a)), c(a)
			};
			b.prototype.setJscObjMapId = function(a, b, c) {
				var d = a.userOptions || a;
				if (c && d[R[1]]) return d;
				d[R[1]] = b;
				a.key = b;
				return d
			};
			b.prototype.getDefinedDataBBox = function(a) {
				var b = this,
					c, h = [],
					e, g, k = this.chart.ctManager;
				this.chart.series().each(function(a) {
					b.getJscObjMapId(a, -1);
					k.isMapLayer(a);
					if (!a.options("isBaseLayer"))
						if (e = b.getSeriesBBox(a)) h.push(e);
						else {
							g = [];
							for (var c = 0, d = a.userPoints.length; c < d; c++) {
								var l = a.userPoints[c];
								(e = T(l).bbox) ? h.push(e): g.push([l.x, l.y])
							}
							g.length && h.push(f.bboxLib.bboxFromPoints(g))
						}
				});
				h.length && (c = f.bboxLib.bboxUnion(h));
				return c
			};
			b.prototype.findTopoObjects = function(a, b) {
				var c = this.identifyCodeType(b);
				b = b.toLowerCase();
				f.jsLib.def(a = a.objects) ||
					this.error(E.noPropInType, "Topology", "objects");
				var d = a;
				if ("hasc|0" === c || "fips|1" === c) var e = {
					conditions: function(a) {
						var c;
						if ((c = a.id || a.properties.hasc) && 0 === c.toLowerCase().indexOf(b)) return !0
					}
				};
				else if ("region|-1" === c) {
					d = {
						countries: a.countries
					};
					var g = f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex." + b + ".Countries");
					e = this.getOtherRegionCountries(b);
					g += "," + e.join(",");
					e = {
						conditions: function(a) {
							if (-1 < g.indexOf("*") || -1 < g.indexOf(a.id)) return !0
						},
						getProperties: function(a) {
							return {
								id: a.id
							}
						}
					}
				}
				c = {
					objects: {}
				};
				for (var k in d) {
					d = {
						type: "GeometryCollection"
					};
					var l = this.genericFilter(a[k].geometries, e);
					if (l.length) {
						d.geometries = l;
						var m = !0;
						c.objects[k] = d
					}
				}
				return m ? c.objects : null
			};
			b.prototype.findFeatureProps = function(a, b) {
				var c = a;
				"string" !== typeof a && (c = this.getJscObjMapId(a));
				if (c) {
					a = this.identifyCodeType(c);
					var d, e;
					if ("custom|-2" === a) {
						if (e = this.findGeoFeature(c, b)) return e.properties
					} else {
						if ("soloCountry" === a) {
							var g = f.jsLib.evalPath(f.platform.win.JSCL, "maps." + c.toLowerCase());
							c = c.replace("_s", "")
						} else if ("fips|1" ===
							a && (e = this.findGeoFeature(c)) && e.properties) return e.properties;
						g || (g = f.jsLib.evalPath(f.platform.win.JSCL, "master"));
						if (g) {
							e = this.findTopoObjects(g, c);
							for (var k in e)
								for (b = e[k].geometries, g = 0, a = b.length; g < a; g++)
									if ((d = b[g].id || f.jsLib.evalPath(b[g], "properties.hasc")) && d.toLowerCase() === c.toLowerCase()) return b[g].properties
						}
					}
				}
			};
			b.prototype.findGeoFeature = function(a, b) {
				function c(a, c, b) {
					var d = f.strLib.lowerFirst(c[0]);
					e.isSoloCountry(b);
					if (k = e.getGeoObject(a, b))
						if (l = X(k.features, "properties." + d, c[1],
								!0, !0) || X(k.features, "properties." + d, c[1].toUpperCase(), !0, !0) || X(k.features, "properties." + d, c[1].toLowerCase(), !0, !0)) {
							if (l.pop) {
								if (1 === l.length) return l[0];
								l = e.arrToGeo(l)
							}
							return l
						}
				}

				function d(a) {
					if (b)
						for (var c = b.allMaps, d = 0, g = c.length; d < g; d++) {
							var f = c[d];
							if ("propertyFilter" !== e.identifyCodeType(f) && a.replace("_s", "").toLowerCase() === f.toLowerCase()) return !0
						} else return !0
				}
				var e = this,
					g = e.identifyCodeType(a),
					k, l, m = a,
					p = a.split(".");
				if ("fips|1" === g || "customFeature|-3" === g) {
					m = a.split(".")[0];
					var r = m.toLowerCase();
					if (k = e.getGeoObject(r, b)) m = "customFeature|-3" === g ? p[1] : a, (l = X(k.features, "id", m, !1, !0)) ? (l.length && (l = l[0]), "customFeature|-3" !== g && l.id && -1 === l.id.indexOf(p[0]) && (l.id = a)) : this.throwMessage("warning", "Map feature " + m + " was not found.");
					return l
				}
				if ("hasc|0" === g) {
					if (g = e.getRegionsFromCountries([a])[0], k = e.getGeoObject(g.toLowerCase(), b)) return l = f.jsLib.findInArrSimple(k.features, "id", a.toUpperCase()) || f.jsLib.findInArrSimple(k.features, "id", a.toLowerCase())
				} else if ("custom|-2" === g) {
					if (k = e.getGeoObject(a,
							b)) return l = f.jsLib.findInArrSimple(k.features, "id", a) || f.jsLib.findInArrSimple(k.features, "id", a.toUpperCase()) || f.jsLib.findInArrSimple(k.features, "id", a.toLowerCase())
				} else {
					if ("mapPropertyFilter" === g) return a = a.split(":"), g = a[0].split("."), c(g[0], [g[1], a[1]], b);
					if ("propertyFilter" === g || "mapPropertyFilter" === g) {
						a = a.split(":");
						for (var q in f.platform.win.JSCL.geo)
							if (d(q) && (r = c(q, a, b))) return r
					}
				}
			};
			b.prototype.getGeoObject = function(a, b) {
				b && this.isSoloCountry(b) && 2 === a.length && -1 === a.indexOf("_s") &&
					(a += "_s");
				return f.jsLib.evalPath(f.platform.win.JSCL, "geo." + a.toLowerCase())
			};
			b.prototype.setGeoObject = function(a, b) {
				f.jsLib.setPathVal(f.platform.win.JSCL, "geo." + a.toLowerCase(), b)
			};
			b.prototype.loadMaps = function(a, b, c, h, e) {
				function d(a) {
					var c = a.data;
					if (c) {
						var b = t.idfyPath(a.id);
						"Topology" === c.type ? t.updateDataWithCustomTopo(c, a) : f.jsLib.def(c.type) ? t.setGeoObject(b, c) : t.error(E.noPropInType, "map data", "type");
						a.state = 2;
						l()
					}
				}

				function k(a) {
					var c = t.identifyCodeType(a.id);
					"world" === a.id ? t.updateMasterTopo(f.jsLib.evalPath(f.platform.win.JSCL,
						"maps." + a.id.toLowerCase().replace("albersusa", "us")), a, "maps.masterWorld") : "soloCountry" !== c && t.updateMasterTopo(f.jsLib.evalPath(f.platform.win.JSCL, "maps." + a.id.toLowerCase().replace("albersusa", "us")), a);
					a.state = 2;
					l()
				}

				function l() {
					var a = !0;
					for (var b = [], d, e, g = c.chartMappingInfo, k = 0, l = A.length; k < l; k++) {
						e = A[k];
						d = -1 < e.codeType.indexOf("ustom");
						if (2 !== e.state && (a = !1, !d)) return;
						d || b.push(e.id)
					}
					if (b.length && !Q) {
						d = 0;
						for (e = b.length; d < e; d++) t.updateGeoFromMaster(b[d]);
						Q = !0
					}
					if (a) {
						g.mapsLoading = !1;
						K();
						a =
							g.loadedCallStack;
						if (a.length)
							for (b = 0, d = a.length; b < d; b++) a[b].cb();
						g.loadedCallStack = [];
						h(f.jsLib.evalPath(f.platform.win.JSCL, "master"), G)
					}
				}

				function m(a) {
					var b;
					if ("soloCountry" !== t.identifyCodeType(a) && (b = t.findParentRegion(a)) && -1 < da(v, b)) return !0
				}

				function p(a, b, c) {
					a.replace("_s", "");
					if (t.getGeoObject(a, c)) return !0
				}

				function r(a) {
					var b;
					try {
						for (var c = V(w.mapsLoadingList), d = c.next(); !d.done; d = c.next()) {
							var e = d.value;
							if (e && e.fls.id.toLowerCase() === a.toLowerCase()) return !0
						}
					} catch (Ka) {
						var g = {
							error: Ka
						}
					} finally {
						try {
							d &&
								!d.done && (b = c.return) && b.call(c)
						} finally {
							if (g) throw g.error;
						}
					}
				}

				function q() {
					var a = w.mapsLoadingList;
					if (a.length) {
						var b = a[0].fls.state;
						0 !== b && (a = a.shift(), b && a.cb(), q())
					}
				}

				function n(a, b, c, d) {
					var e = this,
						g = b + a;
					w.mapsLoadingList.push({
						fls: c,
						cb: function() {
							d(c)
						}
					});
					f.platform.getScript(g, function() {
						c.state = 1;
						q()
					}, function() {
						e.error(E.mapNotFound, g || "");
						c.state = -1;
						q()
					})
				}

				function u(a, b, c, d) {
					var e = b + a;
					w.mapsLoadingList.push({
						fls: c,
						cb: function() {
							d(c)
						}
					});
					f.platform.getJson(e, function(a) {
						c.data = a.data;
						c.state =
							1;
						q()
					}, function(a) {
						t.error(E.mapNotFound, e || "");
						c.state = -1;
						q()
					})
				}

				function K() {
					var a = f.jsLib.evalPath(f.platform.win.JSCL, "geo"),
						c;
					for (c in a) t.geoIterator(a[c], function(a) {
						t.addAliasedAttributes(a)
					})
				}
				c = c || {};
				var t = this,
					w = c.chartMappingInfo || {},
					v = w.regionList,
					B = !1,
					z = !1,
					A = [],
					Q = !1;
				a = a || [];
				b = b || [];
				if ("string" === typeof a) {
					a = a.split(",");
					for (var D = 0, x = a.length; D < x; D++) a[D] = a[D].trim().toLowerCase()
				}
				if ("string" === typeof b)
					for (b = b.split(","), D = 0, x = b.length; D < x; D++) b[D] = b[D].trim().toLowerCase();
				a.length &&
					(w.internalMapsUsed = !0);
				var G = t.getSeriesPrototypeFromList(a, b, c);
				a.sort();
				a = f.jsLib.sortedUniq(a).slice(0);
				D = 0;
				for (x = a.length; D < x; D++) {
					var F = t.identifyCodeType(a[D]);
					"region|-1" === F ? v.push(a[D]) : "fips|1" === F ? a[D] = a[D].split(".")[0] : "mapPropertyFilter" === F && (a[D] = this.getMapCodeToLoad(a[D]))
				}
				var J = t.isSoloCountry(w, a);
				if (b = (t.chart.userOptions.baseUrl || f.platform.getRootScriptPath()) + "/") {
					b += "resources/maps/";
					var H = !0;
					f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex");
					D = 0;
					for (x = a.length; D < x; D++) {
						var I =
							a[D];
						F = t.identifyCodeType(I);
						var L = "custom|-2" === F ? t.idfyPath(I) : I;
						(L = p(L, J, w)) || (H = !1);
						L || r(I) || ("custom|-2" === F ? (F = {
							id: t.idfyPath(I),
							fn: I,
							state: 0,
							codeType: F
						}, A.push(F), w.customMapsUsed = !0, u(I, "", F, d), B = !0) : (z = w.internalMapsUsed = !0, "hasc|0" === F || "soloCountry" === F || "albersUSA" === F ? (L = "Countries/", L += m(I) ? I + "_c" : I) : L = "fips|1" === F ? "Countries/" + I.split(".")[0] : I, L = (L + ".js").toLowerCase().replace("albersusa", "us"), F = {
							id: I,
							fn: L,
							state: 0,
							codeType: F
						}, A.push(F), n(L, b, F, k)))
					}
					if (B || z) w.mapsLoading = !0
				} else t.error(E.mapPathNotFound);
				B || z || !H ? B || z || H || h(f.jsLib.evalPath(f.platform.win.JSCL, "master"), G) : (0 === a.length && e && e(), h(f.jsLib.evalPath(f.platform.win.JSCL, "master"), G));
				return G
			};
			b.prototype.getSeriesPrototypeFromList = function(a, b, c) {
				function d(a) {
					a && (k.dataMaps.push(a), k.allMaps.push(a))
				}
				var e = this;
				c = c || {};
				var g = c.series || [],
					k = c.chartMappingInfo || {},
					l, m, p, r, q, n, u = [];
				"string" === typeof a && (a = a.split(","));
				var x = function(b) {
						if ("string" === typeof(l = f.jsLib.evalPath(b, "map"))) {
							r = e.identifyCodeType(l);
							"mapPropertyFilter" === r ?
								(e.setJscObjMapId(b, l), a.push(e.getMapCodeToLoad(l)), d(e.getMapCodeToLoad(l))) : "propertyFilter" !== r && a.push(l);
							if ("custom|-2" === r) e.setJscObjMapId(b, l = e.idfyPath(l));
							else {
								if ("region|-1" === r) {
									var c = e.getOtherRegionCountries(l);
									a.push.apply(a, c)
								}
								e.setJscObjMapId(b, l)
							}
							d(l)
						} else b.type && "map" !== b.type ? d("custom") : b.mapDataId && d(b.mapDataId);
						if (n = b.points) {
							c = 0;
							for (var g = n.length; c < g; c++) {
								var k = n[c];
								"string" === typeof(m = f.jsLib.evalPath(k, "map")) && (A = e.identifyCodeType(m, a), p = m, "custom|-2" === A ? (e.setJscObjMapId(k,
									e.idfyPath(m)), a.push(m)) : "customFeature|-3" === A ? e.setJscObjMapId(k, m) : "region|-1" === A ? e.error("Region points not supported.") : "hasc|0" === A ? (a.push(e.findCodeToLoadCountryFeature(m)), e.setJscObjMapId(k, m)) : "fips|1" === A ? (a.push(m.split(".")[0]), e.setJscObjMapId(k, m)) : "propertyFilter" === A ? e.setJscObjMapId(k, m) : "mapPropertyFilter" === A && (e.setJscObjMapId(k, m), a.push(e.getMapCodeToLoad(m))), d(p))
							}
						}!b.isBaseLayer && u.push(b)
					},
					t = this.isSoloCountry(k),
					w = [];
				k.dataMaps = [];
				k.allMaps = [];
				k.contextMaps = "";
				for (var v =
						0, B = a.length; v < B; v++) {
					var z = a[v];
					var A = this.identifyCodeType(z);
					"mapPropertyFilter" === A ? (a[v] = this.getMapCodeToLoad(z), k.allMaps.push(a[v])) : "propertyFilter" !== A ? (q = this.removePredef(g, z, k)) ? d(z) : (k.contextMaps = k.contextMaps || "", k.contextMaps += "," + z, k.allMaps.push(z)) : w.push(v);
					z = "custom|-2" === A ? this.idfyPath(z) : z;
					z = this.setJscObjMapId(q || f.jsLib.copy({
						legendEntry: {
							visible: !1
						},
						type: "map",
						mouseTracking: !1,
						defaultPoint: {
							outline: {
								color: "#a4a4a4",
								width: 1
							},
							color: "#d3d3d3"
						},
						isBaseLayer: !0
					}), z);
					c.contextSeries &&
						f.jsLib.extend(z, c.contextSeries);
					z.type || (z.type = "map");
					u.push(z)
				}
				v = 0;
				for (B = w.length; v < B; v++) a.splice(w[v], 1);
				v = 0;
				for (B = b.length; v < B; v++) q = b[v], a.push(q), k.allMaps.push(q);
				v = 0;
				for (B = g.length; v < B; v++) b = g[v], x(b);
				if (c = c.existingSeries ? c.existingSeries.items ? c.existingSeries.items : c.existingSeries : c.existingSeries) {
					v = 0;
					for (B = c.length; v < B; v++) b = c[v], x(b);
					if ((x = this.isSoloCountry(k)) !== t)
						for (v = 0, B = c.length; v < B; v++) b = c[v], t = T(b), "object" === typeof t && x !== t.solo && ((t = this.getJscObjMapId(b)) && -1 === a.indexOf(t) &&
							a.push(t), -1 === u.indexOf(b) && u.push(b))
				}
				return u
			};
			b.prototype.updateGeoFromMaster = function(a) {
				var b = f.jsLib.evalPath(f.platform.win.JSCL, "master"),
					c = a.toLowerCase(),
					h = c.replace("_s", "");
				if ("soloCountry" === this.identifyCodeType(a)) {
					var e = !0;
					b = f.jsLib.evalPath(f.platform.win.JSCL, "maps." + a.toLowerCase())
				}
				"world" === a && (b = f.jsLib.evalPath(f.platform.win.JSCL, "maps.masterWorld"));
				if (a = this.findTopoObjects(b, h)) b = ha(b, a.provinces || a.countries), e && (b.solo = !0), this.setGeoObject(c, b)
			};
			b.prototype.updateDataWithCustomTopo =
				function(a, b) {
					var c;
					"Topology" !== a.type && this.error(E.notTopology);
					f.jsLib.def(c = a.objects) || this.error(E.noPropInType, "Topology", "objects");
					var d = [],
						e;
					for (e in c) d.push(ha(a, c[e]));
					this.setGeoObject(b.id, 1 < d.length ? d : d[0])
				};
			b.prototype.populateSeriesWhenAble = function(a, b, c) {
				function d() {
					var d, g = f.jsLib.evalPath(f.platform.win.JSCL, "master");
					f.jsLib.evalPath(f.platform.win.JSCL, "geo");
					var h, q, n;
					k(b);
					l.isSoloCountry(b);
					for (var u = 0, x = a.length; u < x; u++) {
						var t = a[u];
						if (q = t.options("mapDataId")) {
							var w = l.identifyCodeType(q);
							var v = q;
							if ("propertyFilter" === w || "mapPropertyFilter" === w)(d = l.findGeoFeature(q, b)) && e(t, d.pop ? l.arrToGeo(d) : d, q);
							else if ("object" === typeof(d = T(t))) e(t, d);
							else if (d = l.getGeoObject(v, b)) e(t, d, q);
							else if (d = l.findTopoObjects(g, q)) d = ha(g, d.provinces || d.countries), e(t, d, q);
							else throw "map was not found for series " + q;
						} else if (t.userPoints) {
							var B = [];
							t.userPoints = f.jsLib.filter(t.userPoints, function(a) {
								if (n = l.getJscObjMapId(a))
									if (h = l.findGeoFeature(n, b)) B.push(h), ia(a, h);
									else return !1;
								return !0
							});
							if (B.length ||
								q) ia(t, {
								type: "FeatureCollection",
								id: q,
								features: B
							}), l.setJscObjMapId(t, q)
						}
					}
					c(a)
				}

				function e(a, c, d) {
					var e;
					a.userOptions.map = c;
					ia(a, c);
					!(e = c.properties) && d && (c = c.solo ? d + "_s" : d, e = l.findFeatureProps(c, b));
					if (d) {
						l.setJscObjMapId(a, d);
						var g = l.identifyCodeType(d)
					}
					if (e) a.userOptions.name = a.userOptions.name || e.name || "";
					else if ("region|-1" === g) a.userOptions.name = a.userOptions.name || ma(d);
					else if ("propertyFilter" === g || "mapPropertyFilter" === g) d = d.split(":"), a.userOptions.name = a.userOptions.name = ma(d[1])
				}

				function g(a) {
					var c =
						f.strLib.getRandomString();
					f.jsLib.findInArrSimple(b.loadedCallStack, "id", c) || b.loadedCallStack.push({
						id: c,
						cb: a
					})
				}

				function k(a) {
					for (var b = a.dataMaps, c = a.allMaps, d, e = 0, g = b.length; e < g; e++) {
						var f = b[e],
							k = l.identifyCodeType(f);
						"propertyFilter" === k && (d = l.findGeoFeature(f, a)) && d.id && (b[e] = d.id)
					}
					e = 0;
					for (g = c.length; e < g; e++) f = c[e], k = l.identifyCodeType(f), "propertyFilter" === k && (d = l.findGeoFeature(f, a)) && d.id && (c[e] = d.id)
				}
				var l = this;
				b.mapsLoading ? g(d) : d()
			};
			b.prototype.getRegionsFromCountries = function(a) {
				for (var b =
						f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex"), c = [], h = "", e = 0, g = a.length; e < g; e++)
					for (var k in b)
						if (b.hasOwnProperty(k) && -1 < b[k].Countries.indexOf(a[e].toUpperCase())) {
							-1 === h.indexOf(k) && (c.push(k), h += k);
							break
						} return c
			};
			b.prototype.updateMasterTopo = function(a, b, c) {
				c = c || "master";
				b = f.jsLib.evalPath(f.platform.win.JSCL, c);
				b || (b = {
					type: "Topology",
					transform: a.transform,
					objects: {},
					arcs: []
				}, f.jsLib.setPathVal(f.platform.win.JSCL, c, b));
				c = b.arcs;
				b = b.objects;
				for (var d = 0, e = 0, g = a.arcs.length; e < g; e++) {
					var k = a.arcs[e];
					"number" === typeof k ? d += k : (c[d] = k, d++)
				}
				for (var l in a.objects) b[l] ? Array.prototype.push.apply(b[l].geometries, a.objects[l].geometries) : b[l] = a.objects[l]
			};
			b.prototype.isSoloCountry = function(a, b) {
				var c, d = f.jsLib.evalPath(f.platform.win.JSCL, "solos");
				if (!1 === a.projection) return !1;
				if (1 === a.allMaps.length) "hasc|0" === this.identifyCodeType(a.allMaps[0], a) && -1 < d.indexOf(a.allMaps[0].toLowerCase()) && (c = !0);
				else
					for (var e = void 0, g = 0, k = a.allMaps.length; g < k; g++) {
						var l = this.identifyCodeType(a.allMaps[g]);
						var m =
							a.allMaps[g];
						"mapPropertyFilter" === l && (m = this.getMapCodeToLoad(m));
						if (m = this.countryCode(m)) {
							if (m = m.toLowerCase(), -1 < d.indexOf(m))
								if (!e) e = m, c = !0;
								else if (e !== m) {
								c = !1;
								break
							}
						} else if ("propertyFilter" !== l) {
							c = !1;
							break
						}
					}
				if (c && b)
					for (g = 0, k = b.length; g < k; g++) e = b[g], a = this.identifyCodeType(e), "hasc|0" === a && -1 < d.indexOf(e.toLowerCase()) && (b[g] = e + "_s");
				return c
			};
			b.prototype.getOtherRegionCountries = function(a) {
				var b = [],
					c;
				(c = f.jsLib.evalPath(f.platform.win.JSCL, "mapIndex." + a)) && c.noBBox && f.jsLib.each(c.noBBox.split(","),
					function(a, d) {
						-1 === c.Countries.indexOf(a) && b.push(a)
					});
				return b
			};
			return b
		}();
	f.jsLib.extend(f.en.error.general, {
		filterDidNotMatchAnyPoints: {
			title: "No points were matched",
			text: "The specified point filter did not match any points."
		},
		mapIsAlreadyProjected: {
			title: "Already projected",
			text: "The map is already projected."
		}
	});
	var pa = function() {
			return {
				val2lin: function(b) {
					return b
				},
				lin2val: function(b) {
					return b
				},
				val2linxy: function(b, a) {
					return [b, a]
				},
				lin2valxy: function(b, a) {
					return [b, a]
				},
				doPostTranslate: !1
			}
		},
		J = Math.PI,
		n = Math.cos,
		u = Math.sin,
		N = Math.tan,
		O = Math.atan,
		U = Math.abs,
		x = function(b, a) {
			return Math.pow(0 > b && 1 > U(a % 1) ? U(b) : b, a)
		},
		Ma = Math.atanh,
		Na = Math.sinh,
		H = Math.asin,
		Oa = Math.cosh,
		G = function(b) {
			return b * J / 180
		},
		Y = function(b) {
			return 180 * b / J
		},
		ua = function(b, a, d, c) {
			a = G(a);
			b = G(b);
			return [Y(d(b, a)), Y(c(b, a))]
		},
		P = function(b, a, d, c, f) {
			return {
				type: b,
				val2linxy: function(b, c) {
					return ua(b, c, a, d)
				},
				lin2valxy: function(a, b) {
					return ua(a, b, c, f)
				},
				doPostTranslate: !0
			}
		},
		ea = function(b) {
			return P("mercator", function(a, b) {
					return a
				},
				function(a, b) {
					return Math.log(U(N(J / 4 + b / 2)))
				},
				function(a, b) {
					return a
				},
				function(a, b) {
					return 2 * O(x(Math.E, b)) - J / 2
				})
		},
		Pa = {
			none: pa,
			mercator: ea,
			mercatortransverse: function(b) {
				b = ba(f.jsLib.map(b, G), 2);
				var a = b[0],
					d = b[1];
				return P("mercatorTransverse", function(b, d) {
					return Ma(n(d) * u(b - a))
				}, function(b, f) {
					return Math.atan2(N(f), n(b - a)) - d
				}, function(b, f) {
					return a + O(Na(b) / n(f + d))
				}, function(a, b) {
					return H(u(b + d) / Oa(a))
				})
			},
			lambertconformalconic: function(b, a) {
				if (0 === a[0] && 0 === a[1]) return ea(b);
				b = ba(f.jsLib.map(b, G),
					2);
				var d = b[0];
				b = b[1];
				a = f.jsLib.map(a, G);
				var c = Math.log(U(n(a[0]) / n(a[1]))) / Math.log(U(N(J / 4 + a[1] / 2) / N(J / 4 + a[0] / 2))),
					h = n(a[0]) * x(N(J / 4 + a[0] / 2), c) / c,
					e = h / x(N(J / 4 + b / 2), c);
				return P("lambertConformalConic", function(a, b) {
					return h / x(N(J / 4 + b / 2), c) * u(c * (a - d))
				}, function(a, b) {
					return e - h / x(N(J / 4 + b / 2), c) * n(c * (a - d))
				}, function(a, b) {
					return d + O(a / (e - b)) / c
				}, function(a, b) {
					a = (0 < c ? 1 : 0 > c ? -1 : 0) + Math.sqrt(x(a, 2) + x(e - b, 2));
					return 2 * O(x(h / a, 1 / c)) - J / 2
				})
			},
			lambertazimuthalequalarea: function(b, a) {
				var d = G(b[0]),
					c = f.jsLib.map(a,
						G),
					h = function(a, b) {
						return Math.sqrt(2 / (1 + u(c[0]) * u(b) + n(c[0]) * n(b) * n(a - d)))
					},
					e = function(a, b) {
						return Math.sqrt(a * a + b * b)
					};
				return P("lambertAzimuthalEqualArea", function(a, b) {
					return h(a, b) * n(b) * u(a - d)
				}, function(a, b) {
					return h(a, b) * (n(c[0]) * u(b) - u(c[0]) * n(b) * n(a - d))
				}, function(a, b) {
					return d + O(a * u(2 * H(e(a, b) / 2)) / (e(a, b) * n(c[0]) * n(2 * H(e(a, b) / 2)) - b * u(c[0]) * u(2 * H(e(a, b) / 2))))
				}, function(a, b) {
					return H(n(2 * H(e(a, b) / 2)) * u(c[0]) + b * u(2 * H(e(a, b) / 2)) * n(c[0]) / e(a, b))
				})
			},
			stereographic: function(b, a) {
				var d = G(b[0]),
					c = f.jsLib.map(a,
						G),
					h = function(a) {
						return Math.sqrt((x(1 * n(a), 2) + x(.990025 * u(a), 2)) / (x(1 * n(a), 2) + x(.995 * u(a), 2)))
					},
					e = function(a, b) {
						return 2 * h(b) / (1 + u(c[0]) * u(b) + n(c[0]) * n(b) * n(a - d))
					},
					g = function(a, b) {
						return 2 * O(Math.sqrt(a * a + b * b) / (2 * h(b)))
					};
				return P("stereographic", function(a, b) {
					return e(a, b) * n(b) * u(a - d)
				}, function(a, b) {
					return e(a, b) * (n(c[0]) * u(b) - u(c[0]) * n(b) * n(a - d))
				}, function(a, b) {
					return d + O(a * u(g(a, b) / (Math.sqrt(a * a + b * b) * n(c[0]) * n(g(a, b) - b * u(c[0]) * u(g(a, b))))))
				}, function(a, b) {
					return H(n(g(a, b)) * u(c[0]) + b * u(g(a, b)) *
						n(c[0]) / Math.sqrt(a * a + b * b))
				})
			},
			orthographic: function(b) {
				b = ba(f.jsLib.map(b, G), 2);
				var a = b[0],
					d = b[1],
					c = function(a) {
						return Math.sqrt((x(1 * n(a), 2) + x(.990025 * u(a), 2)) / (x(1 * n(a), 2) + x(.995 * u(a), 2)))
					},
					h = function(a, b) {
						return H(Math.min(Math.sqrt(a * a + b * b) / c(b), 1))
					};
				return P("orthographic", function(b, d) {
					return c(d) * n(d) * u(b - a)
				}, function(b, f) {
					return c(f) * (n(d) * u(f) - u(d) * n(f) * n(b - a))
				}, function(b, c) {
					return a + O(b * u(h(b, c)) / (Math.sqrt(b * b + c * c) * n(h(b, c)) * n(d) - c * u(h(b, c)) * u(d)))
				}, function(a, b) {
					return H(n(h(a, b)) * u(d) +
						b * u(h(a, b)) * n(d) / Math.sqrt(a * a + b * b))
				})
			}
		},
		oa = function(b, a, d) {
			return (b = Pa[b.toLowerCase()]) && b(a, d)
		},
		Da = function(b) {
			b.getConfig && (b = b.getConfig());
			var a = b,
				d, c, h = function(a) {
					return f.jsLib.isObject(a.map) ? "loaded" : a.mapDataId ? "proto" : a.map ? "config" : "none"
				};
			return "loaded" !== (d = h(b)) && "none" === d && f.jsLib.find(a.points, function(a) {
				return "none" !== (c = h(a))
			}) ? c : d
		},
		Ha = function(b, a) {
			return ja(a, function(a, c) {
				return b.projection.val2linxy(a, c)
			})
		};
	f.moduleLoader.registerModule("modules/maps", function(b, a) {
		if (!b.isRendered &&
			b.optionsNormalized && a.type && f.jsLib.startsWith(a.type, "map")) {
			b.geoParser = b.geoParser || new La(b);
			a = b.currentOptions;
			var d = b.options("mapping.base.layers");
			var c = b.options("mapping.referenceLayers");
			var h = b.options("mapping.base.series");
			d = b.geoParser.loadMaps(d, c, {
				contextSeries: h,
				series: a.series || [],
				chartMappingInfo: b.internal.mappingInfo
			}, function() {
				b.mapsLoaded = !0
			});
			a.series = d;
			a = a.events = a.events || {};
			a.updateMapData = a.updateMapData || function(a) {
				return Ca(a[0], a[1])
			};
			a.chartAreaRenderDataFirstTime =
				a.chartAreaRenderDataFirstTime || function(a) {
					if (a.ctManager.isType("map")) {
						var c = b.geoParser.getDefinedDataBBox(b.internal.mappingInfo),
							d = b.geoParser.getDataBBox();
						d && c && (c[2] || (c = f.bboxLib.pad(c, -Math.max(d[2], d[3]) / 20)), f.bboxLib.compareBoxes(c, d) && qa(a, c));
						a.zoomBBoxInitial = Z(b);
						a.zoomUpdated()
					}
				};
			a.setAxes = a.setAxes || function(a) {
				return na(a)
			};
			a.preRenderData = a.preRenderData || function(a) {
				var b = a[0];
				if (a[1]) {
					var c = b.chart.geoParser.getDataBBox();
					fa(b, c);
					if ((a = b.contentRect && sa(b, !0)) && b.contentRect) {
						var d =
							a;
						b.zoomAxes.length || b.setZoomAxes();
						var e = b.zoomAxes;
						e[0].setMapRange([c[0], c[0] + c[2]], [d[0], d[0] + d[2]]);
						e[1].setMapRange([c[1], c[1] + c[3]], [d[1], d[1] + d[3]]);
						e[0].setViewState(!0, !1);
						e[1].setViewState(!0, !1)
					}
				} else a = sa(b, !0), ra(b, a);
				Ea(b);
				a && na(b, a)
			};
			a.pan = a.pan || function(a) {
				var b = a[0],
					c = b.zoomBBox;
				c && (a = f.bboxLib.translate(c, a[1]), b.zoomBBox = f.bboxLib.snapInside(a, b.zoomBBoxMax))
			};
			a.cazoom = a.cazoom || function(a) {
				var b = a[0];
				b.zoomBBox = f.bboxLib.snapInside(a[1], b.zoomBBoxMax)
			};
			b.zoom = function(a, c) {
				b.action.log("zoom");
				Fa(b.chartAreas(0), a, c)
			}
		}
	}) && f.registerSeriesType("map", Ia);
	(function() {
		!f.jsLib.evalPath(f.platform.win.JSC, "internal._modules.maps.data") && f.jsLib.setPathVal(f.platform.win.JSC, "internal._modules.maps.data", {
			mapIndex: {
				europe: {
					Countries: "RU,AL,AX,AD,AT,BE,BG,BA,BY,CH,CZ,DE,DK,ES,EE,FI,FR,GB,GR,HR,HU,IM,IE,IS,IT,JE,XK,LI,LT,LU,LV,MC,MD,MK,MT,ME,PL,PT,RO,SM,RS,SK,SI,SE,UA,NL,NO",
					noBBox: "RU"
				},
				asia: {
					Countries: "AF,AE,AM,AZ,BD,BH,BN,BT,CN,CY,GE,HK,ID,IN,IR,IQ,IL,JO,JP,KZ,KG,KH,KR,KW,LA,LB,LK,MO,MM,MN,MY,NP,OM,PK,PH,KP,PS,QA,SA,SG,SY,TH,TJ,TM,TP,TR,TW,UZ,VN,YE",
					noBBox: "RU,ID"
				},
				africa: {
					Countries: "AO,BI,BJ,BF,BW,CF,CI,CM,CD,CG,KM,CV,DJ,DZ,EG,ER,ET,GA,GH,GN,GM,GW,KE,LR,LY,LS,MA,MG,ML,MZ,MR,MW,NA,NE,NG,RW,EH,SD,SS,SN,SL,SO,ST,SZ,TD,TG,TN,TZ,UG,ZM,ZW,GQ,ZA",
					noBBox: "CV"
				},
				oceania: {
					Countries: "AU,FJ,GU,NU,NR,PG,SB,TO,VU,WS,NZ,NC",
					noBBox: "ID"
				},
				americas: {
					Countries: "AW,AI,AR,AG,BS,BZ,BM,BO,BR,BB,CA,CL,CO,CU,CW,KY,DM,DO,EC,GD,GL,GT,GY,HN,HT,JM,KN,LC,MF,MX,MS,NI,PA,PE,PR,PY,SV,PM,SR,SX,TC,TT,UY,US,VC,VE,VG,VI,CR"
				},
				world: {
					Countries: "*"
				}
			},
			maps: {},
			solos: "ru,aw,af,ao,ai,al,ax,ad,ae,ar,am,as,tf,ag,au,at,az,bi,be,bj,bf,bd,bg,bh,bs,ba,bl,by,bz,bm,bo,br,bb,bn,bt,bw,cf,ch,cl,cn,ci,cm,cd,cg,ck,co,km,cv,cu,cw,ky,cy,cz,de,dj,dm,dk,do,dz,ec,eg,er,es,ee,et,fi,fj,fk,fr,fo,fm,ga,gb,ge,gg,gh,gi,gn,gm,gw,gr,gd,gl,gt,gu,gy,hk,hm,hn,hr,ht,hu,id,im,in,io,ie,ir,iq,is,il,it,jm,je,jo,jp,kz,ke,kg,kh,ki,kn,kr,xk,kw,la,lb,lr,ly,lc,li,lk,ls,lt,lu,lv,mo,mf,ma,mc,md,mg,mv,mx,mh,mk,ml,mt,mm,me,mn,mp,mz,mr,ms,mu,mw,my,na,ne,nf,ng,ni,nu,np,nr,om,pk,pa,pn,pe,ph,pw,pg,pl,pr,kp,pt,py,ps,pf,qa,ro,rw,eh,sa,sd,ss,sn,sg,gs,sh,sb,sl,sv,sm,so,pm,rs,st,sr,sk,si,se,sz,sx,sc,sy,tc,td,tg,th,tj,tm,tp,to,tt,tn,tr,tv,tw,tz,ug,ua,um,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,zm,zw,cr,gq,nz,nc,sq,yt,re,gp,gz,gf,bq,qo,mq,nl,bq,bq,za,no,us,ca",
			geo: {}
		});
		!f.platform.win.JSC.maps && (f.platform.win.JSC.maps = function() {
			return f.jsLib.evalPath(f.platform.win.JSC, "internal._modules.maps.data.maps")
		});
		!f.platform.win.JSCL && (f.platform.win.JSCL = f.jsLib.evalPath(f.platform.win.JSC, "internal._modules.maps.data"))
	})()
})(JSC.internal._modules.maps.export);