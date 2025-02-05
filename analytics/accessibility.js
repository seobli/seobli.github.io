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
(function(l) {
	function g(a, b, c, d) {
		void 0 === b && (b = 0);
		if (!a || null === a.tabIndex || "none" === a.tabIndex || -1 === a.tabIndex) return d ? null : -1;
		var e = l.jsLib.isUndefined(a.tabIndex);
		c = g(c);
		a = k(a) || e && a.description ? (-1 < c ? c : 0) + b : e ? -1 : a.tabIndex;
		return -1 < a || !d ? a : null
	}

	function k(a) {
		return "auto" == a.tabIndex || "auto" == a.tabindex
	}

	function n(a, b) {
		b.elGetter(a) && (b.parentGetter(a).currentOptions.useTabNavigation ? p(a, b) : m(a, b))
	}

	function p(a, b, c) {
		var d = a.chart.currentOptions,
			e = b.elGetter(a),
			f = a.currentOptions,
			h = f.description || k(f) && "%name";
		e.attr({
			role: h ? b.role : null,
			tabindex: c ? -1 : g(f, b.tabIndex, d),
			"aria-label": h ? b.tokenizer(a, h) : null
		});
		r(a, b);
		b.postSubscriptionApplier && b.postSubscriptionApplier(a)
	}

	function r(a, b) {
		if (!a.vkeyenterHandler) {
			var c = b.elGetter(a),
				d = b.parentGetter(a);
			a.vkeyenterHandler = c.on("vkeyenter", function(c) {
				return b.clickFn(a, c)
			});
			a.vchangefocusHandler = c.on("vchangefocus", function(c) {
				b.focusFn(a, c);
				d.focusedItem = c.hasFocus ? a : null;
				!c.hasFocus && b.isParentNavigatable && b.isParentNavigatable(d) &&
					b.elGetter(a).attr({
						tabindex: -1
					})
			})
		}
	}

	function m(a, b) {
		var c = b.parentGetter(a);
		if (!c.keysNavigationApplied) {
			var d = b.isParentNavigatable && b.isParentNavigatable(c);
			a.activeNavigationItem = !d;
			t(c, b, d);
			c.keysNavigationApplied = !0
		}
		p(a, b, !a.activeNavigationItem)
	}

	function t(a, b, c) {
		function d(a) {
			a = a.keyCode;
			return a === f.Up || a === f.Right || a === f.Down || a === f.Left
		}
		if (!a.keyupDocumentEvent) {
			var e = a.chart.renderer.renderer.documentElement;
			c && (a.vchangefocusHandler = b.parentElGetter(a).on("vchangefocus", function(b) {
				a.parentFocused =
					b.eventArgs.hasFocus ? a : null
			}));
			a.keydownDocumentEvent = e.on("keydown", function(b) {
				(a.focusedItem || a.parentFocused) && d(b) && b.preventDefault()
			});
			a.keyupDocumentEvent = e.on("keyup", function(c) {
				var e = a.parentFocused,
					h = a.focusedItem;
				if ((h || e) && d(c)) {
					var g = b.childrenGetter(a),
						l = g.length;
					e = e ? -1 : g.indexOf(h);
					c = c.keyCode;
					if (l) {
						if (c === f.Down || c === f.Right) var k = e === l - 1 ? 0 : e + 1;
						if (c === f.Up || c === f.Left) k = 1 > e ? l - 1 : e - 1;
						g = g[k];
						g.activeNavigationItem = !0;
						h && (h.activeNavigationItem = !1, m(h, b));
						m(g, b);
						b.elGetter(g).el.focus()
					}
				}
			});
			var f;
			(function(a) {
				a[a.Left = 37] = "Left";
				a[a.Up = 38] = "Up";
				a[a.Right = 39] = "Right";
				a[a.Down = 40] = "Down"
			})(f || (f = {}))
		}
	}

	function u(a) {
		var b = a.currentOptions,
			c = g(b);
		(l.jsLib.evalPath(a, "currentOptions.description") || -1 < c || k(b)) && a.flowEvents.optionsApplied.on(v)
	}

	function v(a) {
		q[a.type] && q[a.type](a.owner)
	}
	var w = {
			isParentNavigatable: function(a) {
				return a.isVisible && -1 < g(a.currentOptions, 50, a.chart.currentOptions)
			},
			parentGetter: function(a) {
				return a.legend
			},
			childrenGetter: function(a) {
				return a.items
			},
			elGetter: function(a) {
				return a.trackerElement
			},
			role: "menuitem",
			tabIndex: 55,
			parentTabIndex: 50,
			parentElGetter: function(a) {
				return a.rootPanel
			},
			tokenizer: function(a, b) {
				return a.target.replaceTokens(b)
			},
			clickFn: function(a, b) {
				return a.click(b)
			},
			focusFn: function(a, b) {
				b.hasFocus ? a.mouseover(b) : a.mouseout(b)
			}
		},
		x = {
			parentGetter: function(a) {
				return a.series
			},
			childrenGetter: function(a) {
				return a._points
			},
			elGetter: function(a) {
				return a.visuals.body
			},
			role: "presentation",
			tabIndex: 90,
			tokenizer: function(a, b) {
				return a.replaceTokens(b)
			},
			clickFn: function(a, b) {
				return a.series.visualizer.pointClick(b,
					a)
			},
			focusFn: function(a, b) {
				var c = a.series;
				b.hasFocus ? c.visualizer.pointMouseOver(b, a) : c.visualizer.pointMouseOut(b, a)
			},
			postSubscriptionApplier: function(a) {
				var b = a.visuals.label;
				b && b.attr({
					"aria-hidden": a.currentOptions.description ? "true" : null
				})
			}
		},
		q = {
			chart: function(a) {
				var b = a.currentOptions,
					c = a.renderer.renderer.root,
					d = b.description || k(b) && "%title";
				c.attr({
					role: d ? "presentation" : null,
					tabindex: g(b, 20, b, !0),
					"aria-label": d ? a.replaceTokens(d) : null
				})
			},
			chartArea: function(a) {
				var b = a.currentOptions,
					c = b.description;
				a.rootPanel.attr({
					role: c ? "region" : null,
					tabindex: g(b, 40, a.chart.currentOptions, !0),
					"aria-label": c ? a.replaceTokens(c) : null
				})
			},
			title: function(a) {
				var b = a.target.chart,
					c = b.currentOptions,
					d = a.currentOptions,
					e = d.description || k(d) && "%title",
					f = a.rootVisuals.content;
				a.rootPanel.attr({
					role: e ? "heading" : null,
					tabindex: g(d, 30, c, !0),
					"aria-label": e ? b.replaceTokens(e) : null
				});
				f.attr({
					"aria-hidden": e ? "true" : null
				})
			},
			legend: function(a) {
				var b = a.chart,
					c = b.currentOptions,
					d = a.currentOptions,
					e = a.isVisible && d.description;
				a.rootPanel.attr({
					role: e ?
						"menu" : null,
					tabindex: a.isVisible ? g(d, 50, c, !0) : null,
					"aria-label": e ? b.replaceTokens(e) : null
				});
				a.rootVisuals.stack.attr({
					"aria-hidden": e ? "true" : null
				})
			},
			legendEntry: function(a) {
				n(a, w)
			},
			series: function(a) {
				var b = a.chart.currentOptions,
					c = a.currentOptions,
					d = c.description || k(c) && "%name",
					e = a.rootVisuals.area;
				e && e.attr({
					role: d ? "group" : null,
					tabindex: g(c, 80, b, !0),
					"aria-label": d ? a.replaceTokens(d) : null
				})
			},
			point: function(a) {
				n(a, x)
			},
			toolbar: function(a) {
				var b = a.chart.currentOptions,
					c = b.toolbar; - 1 < g(b) && (c.tabIndex =
					l.jsLib.def(c.tabIndex) ? c.tabIndex : "auto");
				b = g(c, 100, b);
				a.activateAccessibility(-1 < b, b)
			},
			axis: function(a) {
				var b = a.chart.currentOptions,
					c = a.currentOptions,
					d = c.description,
					e = a.rootPanel && a.rootPanel,
					f = a.rootVisuals && a.rootVisuals.main;
				a = a.chartArea && a.chartArea.replaceTokens ? a.chartArea : a.chart;
				e && e.attr({
					role: d ? "group" : null,
					tabindex: g(c, 60, b, !0),
					"aria-label": d ? a.replaceTokens(d) : null
				});
				f && f.attr({
					"aria-hidden": d ? "true" : null
				})
			},
			annotation: function(a) {
				var b = a.chart.currentOptions,
					c = a.currentOptions,
					d = c.description,
					e = a.rootPanel && a.rootPanel,
					f = a.rootVisuals && a.rootVisuals.content;
				a = a.target || a.chart;
				e && e.attr({
					role: d ? "tooltip" : null,
					tabindex: g(c, 70, b, !0),
					"aria-label": d ? a.replaceTokens(d) : null
				});
				f && f.attr({
					"aria-hidden": d ? "true" : null
				})
			},
			uiitem: function(a) {
				var b = a.currentOptions.description,
					c = a.rootPanel && a.rootPanel;
				a = a.target || a.chart;
				c && c.attr({
					role: b ? "button" : null,
					"aria-label": b ? a.replaceTokens(b) : null
				})
			},
			label: function(a) {
				var b = a.chart.currentOptions,
					c = a.currentOptions,
					d = c.description,
					e = a.rootPanel &&
					a.rootPanel,
					f = a.rootVisuals && a.rootVisuals.text;
				a = a.chart;
				e && e.attr({
					role: d ? "tooltip" : null,
					tabindex: g(c, 110, b, !0),
					"aria-label": d ? a.replaceTokens(d) : null
				});
				f && f.attr({
					"aria-hidden": d ? "true" : null
				})
			},
			grid: function(a) {
				var b = a.currentOptions,
					c = b.grid;
				if (c && !1 !== c.enabled) {
					var d = c.description,
						e = a._grid,
						f = a._gridSwitch,
						h = g(c, 10, b, !0);
					if (f) {
						f.attr({
							role: d ? "menu" : null,
							tabindex: d ? h : -1,
							"aria-label": d ? a.replaceTokens(d) : null
						});
						var k = c.buttons || {};
						l.jsLib.eachKey(k, function(b) {
							var c = k[b] || {};
							b = f.buttons[b];
							var d =
								c.description;
							c = c.tabIndex || h + 1;
							b && b.attr({
								role: d ? "button" : null,
								tabindex: c,
								"aria-label": d ? a.replaceTokens(d) : null
							})
						})
					}
					e && (c = (b = l.jsLib.evalPath(c, "buttons.export")) && b.description, d = b && (b.tabIndex || h + 2), e = e.exportButton, b && e && e.attr({
						role: c ? "button" : null,
						tabindex: d,
						"aria-label": c ? a.replaceTokens(c) : null
					}))
				}
			}
		};
	l.moduleLoader.registerModule("modules/accessibility") && (l.chartInitializers.accessibility = u)
})(JSC.internal._modules.accessibility.export);