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
(function(e) {
	function p(d, b) {
		function a() {
			this.constructor = d
		}
		B(d, b);
		d.prototype = null === b ? Object.create(b) : (a.prototype = b.prototype, new a)
	}

	function I(d) {
		var b = "function" === typeof Symbol && d[Symbol.iterator],
			a = 0;
		return b ? b.call(d) : {
			next: function() {
				d && a >= d.length && (d = void 0);
				return {
					value: d && d[a++],
					done: !d
				}
			}
		}
	}

	function C(d, b) {
		var a = "function" === typeof Symbol && d[Symbol.iterator];
		if (!a) return d;
		d = a.call(d);
		var c, f = [];
		try {
			for (;
				(void 0 === b || 0 < b--) && !(c = d.next()).done;) f.push(c.value)
		} catch (g) {
			var h = {
				error: g
			}
		} finally {
			try {
				c && !c.done && (a = d["return"]) && a.call(d)
			} finally {
				if (h) throw h.error;
			}
		}
		return f
	}

	function L() {
		for (var d = [], b = 0; b < arguments.length; b++) d = d.concat(C(arguments[b]));
		return d
	}

	function M(d) {
		var b, a, c, f = [];
		d = e.jsLib.map(d, function(a) {
			return [
				[a[0], a[1]],
				[a[0] + a[2], a[1]],
				[a[0], a[1] + a[3]],
				[a[0] + a[2], a[1] + a[3]]
			]
		});
		try {
			for (var h = I(d), g = h.next(); !g.done; g = h.next()) {
				var l = g.value;
				try {
					for (var k = (a = void 0, I(l)), m = k.next(); !m.done; m = k.next()) {
						var n = m.value;
						f.push(n);
						var r = e.jsLib.isUndefined(r) ||
							n[0] < r ? n[0] : r;
						var p = e.jsLib.isUndefined(p) || n[1] < p ? n[1] : p;
						var z = e.jsLib.isUndefined(z) || n[0] > z ? n[0] : z;
						var q = e.jsLib.isUndefined(q) || n[1] > q ? n[1] : q
					}
				} catch (D) {
					a = {
						error: D
					}
				} finally {
					try {
						m && !m.done && (c = k.return) && c.call(k)
					} finally {
						if (a) throw a.error;
					}
				}
			}
		} catch (D) {
			var t = {
				error: D
			}
		} finally {
			try {
				g && !g.done && (b = h.return) && b.call(h)
			} finally {
				if (t) throw t.error;
			}
		}
		var u = {
				min: null,
				max: null
			},
			v = {
				min: null,
				max: null
			},
			w = {
				min: null,
				max: null
			},
			x = {
				min: null,
				max: null
			};
		e.jsLib.each(f, function(a) {
			var c = a[0];
			a = a[1];
			if (c == r) {
				var f =
					v;
				f.min = null == f.min || a < f.min ? a : f.min;
				f.max = null == f.max || a > f.max ? a : f.max
			}
			c == z && (f = w, f.min = null == f.min || a < f.min ? a : f.min, f.max = null == f.max || a > f.max ? a : f.max);
			a == p && (f = u, f.min = null == f.min || c < f.min ? c : f.min, f.max = null == f.max || c > f.max ? c : f.max);
			a == q && (f = x, f.min = null == f.min || c < f.min ? c : f.min, f.max = null == f.max || c > f.max ? c : f.max)
		});
		t = [];
		b = [
			[u.min, p],
			[u.max, p],
			[z, w.min],
			[z, w.max],
			[x.max, q],
			[x.min, q],
			[r, v.max],
			[r, v.min]
		];
		a = b.length;
		c = b[0];
		for (f = 0; f < a; f++)
			if (h = b[f], !y || y[0] !== h[0] || y[1] !== h[1])
				if (f != a - 1 || c[0] !== h[0] ||
					c[1] !== h[1]) {
					var y = h;
					t.push(h)
				} t.push(c);
		return t
	}

	function N(d) {
		d = d.keyCode;
		return d === q.Up || d === q.Right || d === q.Down || d === q.Left
	}

	function E(d) {
		var b = d.items,
			a = d.defaultItem,
			c = d.itemsBox;
		c && "vertical" === c.layout && (d.defaultItem = d.defaultItem || {}, d.defaultItem.width = "*");
		O(d);
		b && e.jsLib.eachKey(b, function(c) {
			var f = b[c];
			if (f && !e.jsLib.isString(f)) {
				var g = f.icon;
				g && g.path && (g.width = e.jsLib.def(g.width) ? g.width : "auto", g.height = e.jsLib.def(g.height) ? g.height : "auto");
				b[c] = a && !0 !== f.ignoreDefault ? e.jsLib.merge({},
					a, f) : f;
				E(b[c])
			}
		})
	}

	function O(d) {
		if (d && d.type) {
			var b = d.type.split(":");
			d.type = b[0];
			d.mode || (d.mode = b[1] || null)
		}
	}

	function P() {
		e.chartInitializers.toolbar = Q;
		e.chartOptionsAppliers.toolbar = function(d, b, a) {
			b.isRendered && (b._toolbar.options(d), a.needRefresh = !0)
		}
	}

	function Q(d) {
		d.flowEvents.beforeSetUserOptions.on(function(b) {
			"chart" === b.type && (b = b.owner, b._toolbar = new R(b))
		});
		d.flowEvents.beforeApplyLayout.on(function(b) {
			"chart" === b.type && (b = b.owner, b._toolbar.options(b.currentOptions.toolbar || {}), b.triggerOptionsApplied("toolbar",
				b._toolbar))
		});
		d.flowEvents.beforeSnapshot.on(function(b) {
			"chart" === b.type && b.owner._toolbar.visible(!1)
		});
		d.flowEvents.afterSnapshot.on(function(b) {
			"chart" === b.type && b.owner._toolbar.visible(!0)
		});
		d.flowEvents.beforeOptionsNormalization.on(function(b) {
			if ("chart" === b.type) {
				var a = b.owner;
				b = b.options;
				a._toolbar && b.toolbar && a._toolbar.normalizeToolbarOptions(b.toolbar)
			}
		});
		d.flowEvents.beforeDefaultsApply.on(function(b) {
			"chart" === b.type && (b.options.toolbar = b.owner._toolbar.defaults())
		})
	}
	var B = function(d,
			b) {
			B = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(a, c) {
				a.__proto__ = c
			} || function(a, c) {
				for (var f in c) c.hasOwnProperty(f) && (a[f] = c[f])
			};
			return B(d, b)
		},
		J = function(d) {
			d = d ? d.boxDefaults(1) : e.consts.boxDefaults(1);
			return {
				fill: d.fill,
				radius: 3,
				padding: [3, 6],
				visible: !0,
				boxVisible: !1,
				animation: !1,
				outline: d.outline,
				label: {},
				states: {
					hover: {
						fill: "rgb(220,220,220)"
					}
				}
			}
		},
		S = e.jsLib.plainArray(["margin"]),
		T = e.jsLib.plainArray(["padding", "shape"]),
		U = e.jsLib.plainArray(["stroke", "stroke-dasharray",
			"stroke-opacity", "stroke-width"
		]),
		F = !1,
		t = function(d) {
			function b(a, c, f, b) {
				var g = d.call(this, a, c, f) || this;
				g.target = f;
				g.parentItem = b;
				g._itemsVisible = !1;
				g._itemsBoxVisible = !1;
				g._itemsBoxHideTimeoutId = null;
				g._rootPanelShowTimeoutId = null;
				g._toolbarLocked = !1;
				g._items = [];
				g._selectedChildItem = null;
				g._isStackReversed = !1;
				g._stackedPosition = !1;
				g._parentVisibility = !0;
				g.documentClickHandler = function(a) {
					F = !0;
					a = a.target;
					g.rootPanel.isPatched && !g.isDescendant(a, g.rootPanel.el.el) && g.showItems(!1)
				};
				g.documentMoveHandler =
					function(a) {
						var c = g.rootVisuals.main;
						a = c.toRelativeXY(a);
						var f = [0, 0, c.width.px, c.height.px],
							b = e.bboxLib.pointInside(f, a),
							h = function() {
								g._itemsBoxHideTimeoutId = setTimeout(function() {
									g.hideItemsBox()
								}, 30);
								return !1
							};
						b && !g._mainEntered && g.mainEnterHandler();
						!b && g._mainEntered && g.mainAreaLeaveHandler();
						g._mainEntered = b;
						if (g._focusObtained || !g._itemsVisible || b) return clearTimeout(g._itemsBoxHideTimeoutId);
						b = g.rootVisuals.itemsBox;
						c = [b.globalX - c.globalX, b.globalY - c.globalY, b.width.px, b.height.px];
						if (e.bboxLib.pointInside(c,
								a)) return clearTimeout(g._itemsBoxHideTimeoutId);
						c = M([f, c]);
						return e.trigLib.pointInsidePolygon(a, c) ? clearTimeout(g._itemsBoxHideTimeoutId) : h()
					};
				g.mainEnterHandler = function() {
					g.chart.hideTooltip();
					!1 !== g.currentOptions.expandOnHover && (g.stopShowItems(), g._rootPanelShowTimeoutId = setTimeout(function() {
						g.showItemsWithCheck(!0)
					}, 100))
				};
				g.mainAreaLeaveHandler = function() {
					g._toolbarLocked && g.rootVisuals.main.hover(!0);
					g.stopShowItems()
				};
				g.initFP();
				return g
			}
			p(b, d);
			b.prototype.selectedChildItem = function() {
				return this._selectedChildItem
			};
			b.prototype.itemsVisible = function() {
				return this._itemsVisible
			};
			b.prototype.children = function() {
				return this._items
			};
			b.prototype.initFP = function() {
				var a = this,
					c = function(a, b) {
						e.jsLib.each(a._items, function(a) {
							c(a, b);
							b.push(a)
						})
					};
				a.items = e.collectionPropFactory(e.UpdatablesCollection, function() {
					var f = [];
					c(a, f);
					return f
				}, function(c) {
					var f = a.items().items;
					e.jsLib.each(f, function(a) {
						return a.destroy()
					});
					e.jsLib.each(c, function(c) {
						return a.addChildren(c)
					});
					a.refresh()
				}, {
					push: function(c, b) {
						c.push ? e.jsLib.each(c,
							function(c) {
								return a.addChildren(c)
							}) : a.addChildren(c);
						a.refresh()
					},
					splice: function(c, b, g, d) {
						d = a.items().items;
						var f = d[c].parentItem,
							h = [],
							l = f._items.indexOf(d[c]);
						g = g || [];
						for (var r = c; r < c + b; r++) h.push(d[r]);
						e.jsLib.each(h, function(a) {
							return a.destroy()
						});
						e.jsLib.each(g, function(a) {
							return f.addChildren(a, l++)
						});
						a.refresh()
					},
					remove: function(c) {
						(c = a.items(c)) && c.remove()
					}
				})
			};
			b.prototype.select = function(a) {
				this.rootVisuals.main.select(a)
			};
			b.prototype.hover = function(a) {
				this.rootVisuals.main.hover(a)
			};
			b.prototype.refresh =
				function() {
					(this.rootVisuals ? this.rootVisuals.main : this.chart.rootVisuals.uiItemsFront).isPatched && this.chart.chartAreaSet.reflow(e.undefVal, !1, !0)
				};
			b.prototype.value = function(a) {
				if (e.jsLib.isUndefined(a)) return this.getValue();
				this.setValue(a);
				return this
			};
			b.prototype.getValue = function() {
				var a = this._value;
				return e.jsLib.def(a) ? a : this.key
			};
			b.prototype.setValue = function(a) {
				this._value = a
			};
			b.prototype.defaultOptions = function() {
				var a = e.jsLib.merge(e.annotationDefaults(this.chart), J(this.chart)),
					c = this.userOptions;
				return !e.jsLib.evalPath(c, "itemsBox.visible") && e.jsLib.evalPath(c, "label.text") && c.items ? e.jsLib.merge(a, {
					icon: {
						name: "system/default/expand-more",
						xAlignment: "right",
						fill: "rgb(123,123,123)"
					},
					itemsBox: {
						boxVisible: !1
					}
				}) : a
			};
			b.prototype.normalizeOptions = function(a) {
				a = d.prototype.normalizeOptions.call(this, a);
				var c = a.items;
				if (e.jsLib.isString(c)) {
					var f = {},
						b = function(a) {
							return f[a.trim()] = {}
						};
					0 === c.indexOf("enum_") ? (c = e.miUtils.getApiEnum(c.replace("enum_", ""))) && e.jsLib.eachKey(c.members, b) : e.jsLib.each(c.split(","),
						b);
					a.items = f
				}
				return a
			};
			b.prototype.setRootVisuals = function() {
				d.prototype.setRootVisuals.call(this);
				var a = this.rootPanel;
				this.rootVisuals.main || this.createVisuals();
				a.attr({
					transition: !1
				});
				return this
			};
			b.prototype.fillEventActions = function() {
				var a = this;
				return {
					showItems: function(c, f, b) {
						if (!a.hasItems) return !0;
						if (!a._toolbarLocked) return !a._itemsVisible && a.showItems(), a._toolbarLocked = !0, !1;
						c = a.chart.rootPanel.events.vclick;
						!F && c && c.trigger({
							el: b.el,
							eventArgs: {
								target: b.el.el,
								clientX: 0,
								clientY: 0
							}
						});
						F = !1;
						a.showItems();
						return !1
					}
				}
			};
			b.prototype.createVisual = function() {
				return this.renderer.button()
			};
			b.prototype.createContentVisual = function(a) {
				return null
			};
			b.prototype.createMainVisual = function() {
				return this.renderer.button()
			};
			b.prototype.getRole = function() {
				return this.currentOptions.description ? "UiItem" : null
			};
			b.prototype.getDescription = function() {
				return this.currentOptions.description
			};
			b.prototype.createVisuals = function() {
				var a = this,
					c = a.rootPanel,
					f = a.rootVisuals,
					b = a.currentOptions,
					g = b.items,
					d = a.renderer,
					k = f.main = a.createMainVisual();
				k.on("mouseenter", function(c) {
					a.chart.chartAreas().each(function(a) {
						return a.mouseOut(c)
					})
				});
				a.hasItems = !e.jsLib.isEmpty(g);
				if (a.hasItems) {
					b = a._stackedPosition = !0 === e.jsLib.evalPath(b, "itemsBox.visible");
					var m = a.chart.rootVisuals.uiItemsFront;
					b ? (m = f.mainStack = d.panel({
						type: "stack:y",
						yContentAlignment: "center",
						xContentAlignment: "center"
					}).add(c), k.add(m)) : k.add(c);
					c = a.createItemsBox(m);
					a.createUiItems(g);
					e.jsLib.evalPath(a.currentOptions, "itemsBox.visible") ? (a._itemsBoxVisible = !0, a._itemsVisible = !0, a._toolbarLocked = !0, a.updateChildrenVisibility(!0)) : (c.visible(!1, !0), a.updateChildrenVisibility(!1), a.subscribeEvents())
				} else k.add(c)
			};
			b.prototype.createItemsBox = function(a) {
				var c = this.rootVisuals,
					f = this.renderer,
					b = this.currentOptions;
				a = c.itemsBox = f.box().add(a);
				c.itemsStack = f.panel({
					type: "stack",
					orientation: this.toOrientation(b.itemsBox),
					width: "100%",
					yContentAlignment: "center",
					xContentAlignment: "center"
				}).add(a);
				return a
			};
			b.prototype.createUiItems = function(a, c) {
				void 0 === c &&
					(c = !1);
				var f = this,
					b = [],
					g = function(a, c) {
						for (var f = e.jsLib.def(c.order) ? c.order : 0, g = 0, h = 0; h < b.length && !(b[h].order > f); h++) g = h + 1;
						b.splice(g, 0, {
							key: a,
							value: c,
							order: f
						})
					};
				e.jsLib.isArray(a) ? e.jsLib.each(a, function(c, f) {
					return g(c, a[f])
				}) : e.jsLib.eachKey(a, function(c) {
					return g(c, a[c])
				});
				e.jsLib.each(b, function(a) {
					return f.createUiItem(a.key, a.value, c)
				})
			};
			b.prototype.createUiItem = function(a, c, f, b) {
				void 0 === f && (f = !1);
				if (c) {
					var g = this.currentOptions,
						h = this.rootVisuals && this.rootVisuals.itemsStack ? this.rootVisuals.itemsStack :
						this.chart.rootVisuals.uiItemsFront;
					if (!c.exclude && !1 !== c.enable && (f || !1 !== c.visible)) return e.jsLib.isObject(c) || (c = {
						label_text: c.toString()
					}), c = e.jsLib.merge({}, {
						events: {
							click: "showItems"
						}
					}, c), c = e.jsLib.merge({}, !0 === c.ignoreDefault ? {} : g.defaultItem, c), c.actions = e.jsLib.extend(g.actions, c.actions), c.key = a, g = this.chart, f = c.type, f && e.jsLib.has(w, f) || (f = (f = c.defaultItem) && f.type, f = (e.jsLib.has(w, f) ? w[f][2] : null) || "default", c.type = f), f = w[f], b = (new(f ? f[0] : t)(g, void 0, void 0, this)).options(f && f[1] ? f[1](c) :
						c).add(h, b), b.key = a, this._items.push(b), b
				}
			};
			b.prototype.addChildren = function(a, c) {
				var f = this.userOptions.items;
				if (c = this.createUiItem(a.key, a, !1, c)) f[c.key] = a, c.options(a), c.updateParentVisibility(this.isVisible && this._itemsBoxVisible)
			};
			b.prototype.removeChildren = function(a) {
				var c = this._items,
					f = this.userOptions.items;
				c.splice(c.indexOf(a), 1);
				f && delete f[a.key]
			};
			b.prototype.remove = function() {
				var a = this.parentItem || this;
				this.destroy();
				a.refresh()
			};
			b.prototype.destroy = function() {
				var a = this.rootVisuals,
					c = this.chart.renderer.renderer.documentElement;
				c.un("vmove", this.documentMoveHandler);
				c.un("vclick", this.documentClickHandler);
				this.parentItem && this.parentItem.removeChildren(this);
				e.jsLib.each(this._items, function(a) {
					return a.destroy()
				});
				this._items = [];
				a.itemsBox && a.itemsBox.destroy();
				d.prototype.destroy.call(this)
			};
			b.prototype.activateAccessibility = function(a, c) {
				this._needFocusActivation = a;
				this.activateFocus(a, c)
			};
			b.prototype.applyOptions = function(a) {
				void 0 === a && (a = {});
				if (!1 === a) return this;
				var c =
					this.currentOptions,
					f = this.userOptions,
					b = this.rootVisuals,
					g = b.itemsStack,
					l = b.itemsBox,
					k = e.jsLib.copy(c.itemsBox),
					m = !1 !== f.boxVisible,
					n = f.itemsBox && f.itemsBox.visible;
				if (this.hasItems && k) {
					this.correctItemAttrs(k.key, k);
					!1 === k.boxVisible && (k.fill = "none", k.stroke = "none");
					l.attr(k);
					if (e.jsLib.def(k.visible)) {
						var r = k.visible;
						this._toolbarLocked = this._itemsVisible = this._itemsBoxVisible = r;
						l.visible(r, !0);
						this.updateChildrenVisibility(r)
					}
					l = {
						orientation: this.toOrientation(k)
					};
					k.verticalAlign && (l.yContentAlignment =
						k.verticalAlign);
					k.align && (l.xContentAlignment = k.align);
					g.attr(l)
				}
				d.prototype.applyOptions.call(this, a);
				b = b.main;
				g = e.jsLib.extendCopyScopedNegate({}, c, S);
				k = this._eventActions = this._eventActions || this.fillEventActions();
				c.actions && e.jsLib.extend(k, c.actions);
				this.correctItemAttrs(g.key, g, !0);
				k = e.jsLib.evalPath(g, "text.val");
				e.jsLib.def(k) || (k = g.icon && !g.icon.ingorableForText ? null : g.key, g.text = g.text || {});
				this.text = k;
				g.text.val = this.processTokens(k) || this.currentOptions.placeholder || "";
				m || (g.fill = "none",
					g.stroke = "none", k = !e.jsLib.isEmpty(this.currentOptions.items), e.jsLib.evalPath(g, "events.click") && ("default" !== g.type || k) || (g.cursor = "default"), g.padding = 0, l = g.states = g.states || {}, k = l.hover = l.hover || {}, k.fill = "none", k.stroke = "none");
				"label" === g.type && n && (g.cursor = "default");
				m && (g.boxVisible = !0, e.jsLib.extend(g, e.stylingLib.boxToLayoutBoxAttr(g)), k = (l = g.states) && l.hover, m = l && l.select, k && e.jsLib.extend(k, e.stylingLib.boxToLayoutBoxAttr(k)), m && e.jsLib.extend(m, e.stylingLib.boxToLayoutBoxAttr(m)));
				b.attr(g);
				e.jsLib.has(c, "value") && (this._denyTriggerEvents = !0, this.value(c.value), this._denyTriggerEvents = !1, delete f.value);
				!0 !== a.skipReflow && this.refresh();
				this.activateFocus(this._focusActivated, this._tabIndex);
				return this
			};
			b.prototype.completeUserOptions = function() {
				return this.userOptions
			};
			b.prototype.triggerOptionsApplied = function() {
				this.chart.triggerOptionsApplied("uiitem", this)
			};
			b.prototype.transformRootAttr = function(a) {
				return e.jsLib.extendCopyScopedNegate({
					"stroke-width": 0
				}, a, T)
			};
			b.prototype.positionApplied =
				function(a) {
					var c = this;
					if (c.hasItems) {
						var b = c.currentOptions.itemsBox || {},
							h = b.position;
						if (a && a[2]) {
							var g = a[2] - 30;
							e.jsLib.each(c._items, function(c) {
								c.rootVisuals.main.attr({
									maxWidth: g
								});
								c.positionApplied(a)
							})
						}
						if (c._stackedPosition) c.updateStackedPosition(h || "bottom");
						else {
							var d = function() {
									var a = C(e.cachedPositionInfo(c), 2);
									if (a[0]) return "bottomLeft";
									var b = C(a[1], 4);
									a = b[3];
									b = "b" === b[2] ? "top" : "bottom";
									if ("bottom" === b) {
										var f = c.rootVisuals.main.getGlobalBbox();
										f = f.y + f.height;
										var g = c.chart.rootVisuals.uiItemsFront.height.px,
											h = m.height.px;
										b = f > g / 2 && f + h > g ? "top" : b
									}
									"l" === a && (b += "Left");
									"r" === a && (b += "Right");
									return b
								},
								k = c.rootVisuals;
							b = e.jsLib.parseMargin(b.margin);
							var m = k.itemsBox;
							h = h && "none" !== h ? h : d();
							h = V(h, b);
							m.state.needRecalculation && m.update();
							m.attr(e.getAlignToOffsets(m, k.main, h[0][0], h[0][1], h[2]))
						}
					}
				};
			b.prototype.updateStackedPosition = function(a) {
				var c = this.currentOptions;
				a = a.toLowerCase();
				var b = -1 < a.indexOf("right"),
					h = -1 < a.indexOf("left");
				a = -1 < a.indexOf("top");
				a = e.jsLib.has(c, "reversed") ? c.reversed : h || a;
				var g = e.jsLib.detect(["orientation",
					"layout"
				], c) ? this.toOrientation(c) : h || b ? "x" : "y";
				b = a !== this._isStackReversed;
				h = this.rootVisuals.mainStack;
				g = {
					xContentAlignment: c.align || "center",
					orientation: g
				};
				c.verticalAlign && (g.yContentAlignment = c.verticalAlign);
				h.attr(g);
				b && (this._isStackReversed = a, h.reverse())
			};
			b.prototype.toOrientation = function(a) {
				return a ? a.orientation ? a.orientation : a.layout && "vertical" === a.layout ? "y" : "x" : "x"
			};
			b.prototype.showItemsWithCheck = function(a) {
				this._toolbarLocked || this.showItems(a)
			};
			b.prototype.showItems = function(a) {
				var c =
					this.rootVisuals,
					b = c.main,
					h = c.itemsBox;
				!this._itemsBoxVisible && this.hasItems && (this._toolbarLocked = !1, a = e.jsLib.def(a) ? a : !this._itemsVisible, c.mouseArea && c.mouseArea.attr({
					fill: a ? "white" : "none"
				}), this._itemsVisible = a, h.visible(a, !0), b.hover(a), this.select(a), h.isPatched && h.patch())
			};
			b.prototype.subscribeEvents = function() {
				var a = this.chart.renderer.renderer.documentElement;
				a.on("vmove", this.documentMoveHandler);
				a.on("vclick", this.documentClickHandler)
			};
			b.prototype.visible = function(a) {
				var c = this.rootVisuals.itemsBox,
					b = d.prototype.visible.call(this, a);
				this._itemsBoxVisible && (c.visible(this.isVisible), this.updateChildrenVisibility(this.isVisible));
				a ? this._needFocusActivation && this.activateFocus(this._needFocusActivation, this._tabIndex) : this.activateFocus(!1);
				return b
			};
			b.prototype.activateFocus = function(a, c) {
				this._tabIndex = c;
				this.skipFocusActivation(a) || (this.subscribeUiItemEvents(a), this.subscribeDocEvents(a), this._focusActivated = a)
			};
			b.prototype.skipFocusActivation = function(a) {
				return a === this._focusActivated &&
					a !== this._ownVisibility ? !0 : !1
			};
			b.prototype.subscribeUiItemEvents = function(a) {
				var c = this;
				c.rootPanel.useMainElementForEvents(!0);
				a && c._ownVisibility ? (c.rootPanel.attr({
					tabindex: c.currentOptions.tabIndex || c._tabIndex,
					role: c.getRole(),
					"aria-label": c.getDescription()
				}), c.rootPanel.on("vchangefocus", function(a) {
					c.focusObtained(a.eventArgs.hasFocus)
				})) : (c.rootPanel.attr({
					tabindex: null,
					role: null,
					"aria-label": null
				}), c.rootPanel.un("vchangefocus"));
				c.rootPanel.useMainElementForEvents(!1)
			};
			b.prototype.subscribeDocEvents =
				function(a) {
					var c = this,
						b = c.chart.renderer.renderer.documentElement;
					a ? (c._keyUpHandler || c._keyDownHandler || (c._keyUpHandler = function(a) {
						c.keyUpHandler(a)
					}, c._keyDownHandler = function(a) {
						c.keyDownHandler(a)
					}), b.on("keydown", c._keyDownHandler), b.on("keyup", c._keyUpHandler)) : c._keyUpHandler && c._keyDownHandler && (b.un("keydown", c._keyDownHandler), b.un("keyup", c._keyUpHandler))
				};
			b.prototype.vkeyEnterHandler = function() {
				this._selectedChildItem ? (this._selectedChildItem.rootVisuals.main.click(), this.unselectChildItem(),
					this.hover(!this.currentOptions.normalStateOnItemSelect), this.rootPanel.el.el.focus(), this.showItems(!1), this._childItemEnterPressed = !0) : (this.rootVisuals.main.click(), this.hover(this.hoverOnEnter()), this.currentOptions.autoSelectFirstItem && this.selectChildItem(!0))
			};
			b.prototype.hoverOnEnter = function() {
				return e.jsLib.def(this.currentOptions.hoverOnEnter) ? this.currentOptions.hoverOnEnter : !0
			};
			b.prototype.focusObtained = function(a) {
				if (this._focusObtained = a) this.unselectChildItem(), clearTimeout(this._keyUpTimeoutId);
				this._items && this._items.length && (this._childItemEnterPressed ? this._childItemEnterPressed = !1 : this.showItemsWithCheck(a))
			};
			b.prototype.afterChildItemSelected = function(a) {};
			b.prototype.selectChildItem = function(a, c) {
				if (this._items && this._items.length) {
					clearTimeout(this._keyUpTimeoutId);
					var b = 0;
					this._selectedChildItem && (b = this._items.indexOf(this._selectedChildItem), a ? b++ : b--, b >= this._items.length ? b = 0 : 0 > b && (b = this._items.length - 1), this.unselectChildItem());
					this._selectedChildItem = this.items(b);
					this._selectedChildItem.hover(!0);
					a = this._selectedChildItem.rootVisuals.main.el;
					a.attr({
						tabindex: this._tabIndex
					});
					c || a.el.focus();
					this.afterChildItemSelected(this._selectedChildItem)
				}
			};
			b.prototype.unselectChildItem = function() {
				this._selectedChildItem && (this._selectedChildItem.hover(!1), this._selectedChildItem.rootVisuals.main.el.attr({
					tabindex: null
				}), this._selectedChildItem = null)
			};
			b.prototype.keyUpHandler = function(a) {
				var c = this.currentOptions,
					b = c.invertKeys;
				c = c.multiple;
				a = a.keyCode;
				if (this._focusObtained || this._selectedChildItem)
					if (a ===
						q.Enter) this.vkeyEnterHandler();
					else if (this.itemsVisible() || !c)
					if (a === q.Esc) this.showItems(!1), this.hover(!this.currentOptions.normalStateOnItemSelect), this.unselectChildItem();
					else {
						this._toolbarLocked = !0;
						c = q.Right;
						var h = q.Up,
							g = q.Left,
							d = q.Down;
						b && (c = q.Left, h = q.Down, g = q.Right, d = q.Up);
						a === c || a === h ? this.selectChildItem(!1) : a !== g && a !== d || this.selectChildItem(!0)
					}
			};
			b.prototype.keyDownHandler = function(a) {
				var c = this,
					b = a.keyCode;
				c._itemsVisible && (b === q.Tab ? c._keyUpTimeoutId = setTimeout(function() {
					c._focusObtained ||
						(c._toolbarLocked = !1, c.unselectChildItem(), c.showItemsWithCheck(!1))
				}, 150) : N(a) && a.preventDefault())
			};
			b.prototype.updateChildrenVisibility = function(a) {
				var c = a && this._itemsBoxVisible;
				e.jsLib.each(this._items, function(a) {
					a.updateParentVisibility(c);
					a.updateChildrenVisibility(c)
				})
			};
			b.prototype.updateParentVisibility = function(a) {
				this.isVisible = (this._parentVisibility = a) && this._ownVisibility
			};
			b.prototype.setVisible = function(a) {
				this._ownVisibility = a;
				this.isVisible = this._parentVisibility && this._ownVisibility
			};
			b.prototype.isDescendant = function(a, c) {
				for (a = a.parentNode; a;) {
					if (a === c) return !0;
					a = a.parentNode
				}
				return !1
			};
			b.prototype.stopShowItems = function() {
				this._rootPanelShowTimeoutId && (clearTimeout(this._rootPanelShowTimeoutId), this._rootPanelShowTimeoutId = null)
			};
			b.prototype.hideItemsBox = function() {
				this.stopShowItems();
				this.showItemsWithCheck(!1)
			};
			b.prototype.processTokens = function(a) {
				return a
			};
			b.prototype.correctItemAttrs = function(a, c, b, h) {
				e.jsLib.has(c, "icon") && this.correctIcon(c, b, h);
				e.jsLib.has(c, "label") &&
					this.correctLabel(c);
				e.jsLib.has(c, "outline") && this.correctOutline(c);
				e.jsLib.has(c, "events") && this.correctEvents(a, c.events, b);
				b && (c.states = this.correctStates(a, c));
				e.jsLib.has(c, "tooltip") && (c.title = c.tooltip)
			};
			b.prototype.correctOutline = function(a) {
				var c = a.outline;
				"none" === c.color ? (a.stroke = "none", a["stroke-width"] = 0) : e.jsLib.extendScoped(a, e.stylingLib.lineToAttr(c), U)
			};
			b.prototype.correctIcon = function(a, c, b) {
				var f = a.icon;
				if (!f || "none" === f) return null;
				e.jsLib.isString(f) && (f = {
					name: f
				});
				if (c || !b.icon) f =
					e.jsLib.merge(f.path ? {
						width: "auto",
						height: "auto",
						outerShape: "none",
						fill: "#727272"
					} : {
						width: 16,
						height: 16,
						outerShape: "none",
						fill: "#727272"
					}, f), c || (b.icon = null);
				a.icon = e.jsLib.extend(f, e.stylingLib.shapeToAttr(f))
			};
			b.prototype.correctLabel = function(a) {
				var c = a.label;
				if (c) {
					if (e.jsLib.isString(c)) {
						var b = c;
						c = {}
					} else c = e.stylingLib.labelToAttr(c), b = e.jsLib.evalPath(a, "label.text");
					b = this.evalText(b);
					e.jsLib.def(b) && (c.val = b);
					a.text = c
				} else a.text = null
			};
			b.prototype.correctEvents = function(a, c, b) {
				var f = this,
					g =
					f._eventActions;
				e.jsLib.eachKey(c, function(a) {
					var b = c[a];
					e.jsLib.has(g, b) && (c[a] = g[b]);
					var d = c[a];
					c[a] = function(a) {
						return d(f.value(), f, a)
					}
				})
			};
			b.prototype.correctStates = function(a, c) {
				var b = this,
					d = {},
					g = c.states;
				e.jsLib.eachKey(g, function(f) {
					var h = g[f];
					h && "none" !== h ? (b.correctItemAttrs(a, h, !1, c), d[f] = h) : g[f] = null
				});
				return d
			};
			return b
		}(e.Annotation),
		W = e.jsLib.plainArray(["radio", "option"]),
		u = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.defaultOptions = function() {
				var a =
					this.userOptions;
				e.jsLib.def(a.boxVisible) && (this._boxVisible = a.boxVisible) && delete a.boxVisible;
				this._value = !1;
				return e.jsLib.merge(d.prototype.defaultOptions.call(this), this._boxVisible ? {} : {
					outline: {
						color: "none"
					},
					fill: "none",
					padding: [0],
					margin: [0],
					radius: 0,
					states: {
						hover: {
							fill: "none"
						}
					}
				})
			};
			b.prototype.createMainVisual = function() {
				var a = this.currentOptions;
				return this.renderer.button({
					type: a.type,
					triggerSelectIfFalse: a.triggerSelectIfFalse
				})
			};
			b.prototype.setValue = function(a) {
				var c = this.getValue();
				d.prototype.setValue.call(this,
					a);
				c !== a && this.rootVisuals.main.select(a)
			};
			b.prototype.correctEvents = function(a, c, b) {
				var f = this;
				if (b) {
					var g = c.change;
					c.change = function(a, c, b) {
						a = b.isSelected;
						d.prototype.setValue.call(f, a);
						g && (!c || !c._denyTriggerEvents && c.chart.inited) && g(a, c, b);
						c && c.parentItem && c.parentItem.itemChanged && c.parentItem.itemChanged(a, c, b)
					}
				}
				d.prototype.correctEvents.call(this, a, c, b)
			};
			return b
		}(t),
		X = {
			simple: function() {
				return {
					outline: {
						color: "none"
					},
					fill: "none",
					cursor: "default",
					margin: 1,
					padding: [0],
					align: "left",
					states: {
						hover: {
							fill: "none"
						}
					},
					defaultItem: {
						events: {}
					},
					itemsBox: {
						outline: {
							color: "none"
						},
						fill: "none",
						layout: "vertical",
						align: "left"
					}
				}
			},
			dropdown: function() {
				return {
					padding: [1],
					margin: 1,
					fill: "rgb(255,255,255)",
					outline: {
						color: "rgb(123,123,123)"
					},
					radius: 2,
					corners: "round",
					align: "left",
					autoWrap: "none",
					expandOnHover: !1,
					label: {
						text: "%value",
						style: {
							textOverflow: "ellipsis",
							autoWrap: "none"
						}
					},
					icon: {
						ingorableForText: !0,
						name: "system/default/expand-more",
						width: 14,
						height: 14,
						xAlignment: "right",
						fill: "#a5a5a5"
					},
					states: {
						hover: {
							outline: {
								color: "#7ba8e5"
							},
							fill: "#eff8ff"
						}
					},
					itemsBox: {
						margin: [-1, 0, 0, 0],
						fill: "rgb(255,255,255)",
						layout: "vertical",
						align: "left",
						outline: {
							color: "rgb(123,123,123)"
						}
					},
					defaultItem: {
						margin: [0],
						height: 18,
						autoWrap: "none",
						label: {
							color: "rgb(0,0,0)",
							style: {
								fontWeight: "normal",
								textOverflow: "ellipsis",
								autoWrap: "none"
							}
						},
						outline: {
							width: 1,
							color: "rgb(255,255,255)"
						},
						icon: {
							ingorableForText: !0,
							name: "none"
						},
						events: {},
						states: {
							hover: {
								fill: "rgb(144,144,144)",
								label: {
									color: "rgb(255,255,255)"
								},
								outline: {
									width: 1,
									color: "rgb(144,144,144)"
								}
							},
							select: {
								icon: {
									name: "system/default/check",
									width: 14,
									height: 14,
									xAlignment: "right",
									fill: "rgb(123,123,123)"
								}
							}
						}
					}
				}
			}
		},
		v = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.showItems = function(a) {
				var c = this.rootVisuals.scroll;
				!this.itemsVisible() && a && c.moveVerticalSliderToPosition(0);
				return d.prototype.showItems.call(this, a)
			};
			b.prototype.afterChildItemSelected = function(a) {
				var c = this.rootVisuals,
					b = c.scroll,
					d = b.globalY;
				c = c.scroll.height.px;
				var g = a.rootVisuals.main;
				a = g.globalY;
				g = g.height.px;
				this.itemsVisible() &&
					(c = a + g - (d + c), 0 < c && b.increaseVerticalScrollPosition(c), c = a - g - d, 0 > c && b.increaseVerticalScrollPosition(c))
			};
			b.prototype.createItemsBox = function(a) {
				var c = this,
					b = c.rootVisuals,
					d = c.renderer,
					g = c.currentOptions;
				a = b.itemsBox = d.box({
					zIndex: 2
				}).add(a);
				b.scroll = d.panel({
					type: "scroll",
					width: "100%",
					height: g.scrollPanelHeight,
					scrollBarWidth: g.scrollBarWidth || "6px",
					frontPanel: c.chart.rootVisuals.uiItemsFront
				}).add(a);
				b.scroll.scrollHandler(function(a) {
					a || c.rootPanel.el.el.focus();
					c._scrolling = a
				});
				b.itemsStack = d.panel({
					type: "stack",
					orientation: c.toOrientation(g.itemsBox),
					width: "100%",
					yContentAlignment: "center",
					xContentAlignment: "center"
				}).add(b.scroll);
				return a
			};
			b.prototype.focusObtained = function(a) {
				!a && this._scrolling || d.prototype.focusObtained.call(this, a)
			};
			b.prototype.positionApplied = function(a) {
				d.prototype.positionApplied.call(this, a);
				var c = this.userOptions,
					b = this.rootVisuals.itemsBox;
				this.rootVisuals.scroll.checkAddScroll() && d.prototype.positionApplied.call(this, a);
				"*" === e.jsLib.evalPath(c, "itemsBox.width") && (a = this.rootPanel.getBbox().width,
					e.jsLib.setPathVal(c, "itemsBox.width", a), b.attr({
						width: a
					}))
			};
			return b
		}(function(d) {
			function b() {
				var a = null !== d && d.apply(this, arguments) || this;
				a._singleSelection = !0;
				a._hideAfterSelect = !1;
				a._selectedItems = {};
				return a
			}
			p(b, d);
			b.prototype.vkeyEnterHandler = function() {
				this.selectedChildItem() && !this._hideAfterSelect && this.showItems(!1);
				d.prototype.vkeyEnterHandler.call(this)
			};
			b.prototype.defaultOptions = function() {
				var a = this.userOptions;
				var c = e.jsLib.evalPath(a, "defaultItem.type");
				c = this._theme = !c || "radio" !==
					c && "checkbox" !== c && "toggle" !== c && "button" !== c ? "dropdown" : "simple";
				var b = e.jsLib.merge(e.annotationDefaults(), J(), X[c]());
				a.multiple && (b.defaultItem.multiple = !0);
				"dropdown" === c && e.jsLib.evalPath(a, "itemsBox.visible") && (b.icon = null);
				return b
			};
			b.prototype.selectChildItem = function(a) {
				var c = this.currentOptions.multiple,
					b = e.jsLib.keys(this._selectedItems)[0];
				c || this._selectedChildItem || this.itemsVisible() || (this._selectedChildItem = this._selectedItems[b]);
				d.prototype.selectChildItem.call(this, a, !this.itemsVisible());
				this._selectedChildItem && !this.itemsVisible() && (this._selectedChildItem.rootVisuals.main.click(), this.unselectChildItem(), this.hover(!0))
			};
			b.prototype.checkForAutoSize = function() {
				this._autoSized = !0;
				if ("dropdown" === this._theme) {
					var a = this.userOptions,
						c = this.rootVisuals,
						b = this.rootPanel,
						d = c.main;
					c = c.itemsBox;
					var g = e.jsLib.evalPath(a, "itemsBox.width"),
						l = a.width;
					if (!l) {
						var k = [];
						g ? k.push(g) : e.jsLib.each(this._items, function(a) {
							k.push(a.rootVisuals.main.textVisual.setPreliminarySize().getBbox().width + 40)
						});
						b.setPreliminarySize().getBbox();
						if ((l = e.jsLib.evalPath(a, "label.text")) && -1 < l.indexOf("%value")) {
							var m = "",
								n = 0;
							e.jsLib.each(this._items, function(a) {
								a = a.text || "";
								a.length > n && (m = a, n = a.length)
							});
							var r = l.replace("%value", m);
							l = d.textVisual;
							var p = l.val();
							l.val(r);
							r = l.setPreliminarySize().getBbox().width + 40;
							l.val(p);
							k.push(r)
						}
						l = a.width = e.jsLib.max(k);
						d.attr({
							width: l
						});
						b.attr({
							width: l
						})
					}
					g || (e.jsLib.setPathVal(a, "itemsBox.width", l), c.attr({
						width: l
					}));
					e.jsLib.evalPath(a, "label.width") || (b = l - 30, e.jsLib.setPathVal(a,
						"label.width", b), d.attr({
						text: {
							width: b
						}
					}));
					e.jsLib.setPathVal(a, "defaultItem.width", "*");
					e.jsLib.each(this._items, function(a) {
						a.rootVisuals.main.attr({
							width: "*"
						});
						a.rootPanel.attr({
							width: "*"
						})
					})
				}
			};
			b.prototype.applyOptions = function(a) {
				void 0 === a && (a = {});
				if (!1 === a) return this;
				var c = this.currentOptions;
				e.jsLib.has(c, "multiple") && (this._singleSelection = !c.multiple);
				this._singleSelection && !e.jsLib.evalPath(c, "itemsBox.visible") && (this._hideAfterSelect = !0);
				!this._value && c.selectFirstIfEmpty && !c.value &&
					this._items.length && (c.value = this._items[0].key);
				d.prototype.applyOptions.call(this, a);
				this._autoSized || this.checkForAutoSize();
				return this
			};
			b.prototype.correctEvents = function(a, c, b) {
				if (b && e.jsLib.has(c, "change")) {
					var f = this._eventActions,
						g = c.change;
					this._changeHandler = e.jsLib.has(f, g) ? f[g] : g;
					delete c.change
				}
				d.prototype.correctEvents.call(this, a, c, b)
			};
			b.prototype.selectedItems = function() {
				return this._selectedItems
			};
			b.prototype.selectedItem = function() {
				for (var a in this._selectedItems) return a;
				return null
			};
			b.prototype.clearSelection = function() {
				for (var a in this._selectedItems) this._selectedItems[a].visual.select(!1);
				this._selectedItems = {}
			};
			b.prototype.getValue = function() {
				var a = this._selectedItems,
					c = [],
					b;
				for (b in a) c.push(b);
				return c.join(",")
			};
			b.prototype.setValue = function(a) {
				d.prototype.setValue.call(this, a);
				var c = this,
					b = c._items;
				this.clearSelection();
				if (!a) return this;
				e.jsLib.each(a.split(","), function(a) {
					var f = e.jsLib.find(b, function(c) {
						return c.key === a
					});
					f ? f.value(!0) : (c.currentOptions.placeholder =
						a, c.updatePlaceholder())
				});
				return c
			};
			b.prototype.itemChanged = function(a, c, b) {
				var f = this,
					g = c.key;
				c = f._items;
				if (f._singleSelection) {
					if (!a) return;
					e.jsLib.each(c, function(a) {
						a.key === g ? (f._selectedItems = {}, f._selectedItems[g] = a) : a.value(!1)
					})
				} else {
					c = e.jsLib.find(c, function(a) {
						return a.key === g
					});
					if (!c) return;
					a ? f._selectedItems[g] = c : delete f._selectedItems[g]
				}
				f._hideAfterSelect && f.showItems(!1);
				f.updatePlaceholder();
				!f._denyTriggerEvents && f.chart.inited && f._changeHandler && f._changeHandler(f.value(), f)
			};
			b.prototype.updatePlaceholder = function() {
				this.rootVisuals.main.attr({
					text: this.processTokens(this.text) || this.currentOptions.placeholder || "",
					states: {}
				})
			};
			b.prototype.processTokens = function(a) {
				if (!a || 0 > a.indexOf("%value")) return a;
				var c = [],
					b;
				for (b in this._selectedItems) c.push(this._selectedItems[b].text);
				return a.replace("%value", c.join(","))
			};
			return b
		}(t)),
		x = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.defaultOptions = function() {
				var a = this.userOptions.mode;
				a = a ? a.toLowerCase() : null;
				var c = d.prototype.defaultOptions.call(this);
				"file" === a && (c.hoverOnEnter = !1);
				return c
			};
			b.prototype.activateFocus = function(a, c) {
				var b = this.currentOptions.mode;
				"range" === (b ? b.toLowerCase() : null) ? this.rootVisuals.main.activateFocus(a, c): d.prototype.activateFocus.call(this, a, c)
			};
			b.prototype.focusObtained = function(a) {
				var c = this.currentOptions.mode;
				c = c ? c.toLowerCase() : null;
				"file" === c || "color" === c ? d.prototype.focusObtained.call(this, a) : (this.rootVisuals.main.setHtmlElementTabIndex(this.rootPanel.attr("tabindex")),
					this.rootVisuals.main.displayHtmlInput(!0))
			};
			b.prototype.createMainVisual = function() {
				var a = this.currentOptions.mode;
				if (a) {
					a = a.toLowerCase();
					if ("file" === a) return this.renderer.file();
					if ("color" === a) return this.renderer.color();
					if ("range" === a) return this.renderer.range()
				}
				return this.renderer.input()
			};
			b.prototype.getValue = function() {
				return this.rootVisuals.main.value()
			};
			b.prototype.setValue = function(a) {
				var c = this.getValue();
				d.prototype.setValue.call(this, a);
				c !== a && this.rootVisuals.main.value(a)
			};
			return b
		}(t),
		G = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.defaultOptions = function() {
				var a = d.prototype.defaultOptions.call(this);
				a.hoverOnEnter = !1;
				return a
			};
			b.prototype.activateFocus = function(a, c) {
				d.prototype.activateFocus.call(this, a, c)
			};
			b.prototype.createMainVisual = function() {
				return this.renderer.file()
			};
			b.prototype.getValue = function() {
				return this.rootVisuals.main.value()
			};
			b.prototype.setValue = function(a) {};
			return b
		}(t),
		H = function(d) {
			function b() {
				return null !==
					d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.isDisabled = function() {
				return this.rootVisuals.main.isDisabled()
			};
			b.prototype.disable = function(a) {
				this.rootVisuals.main.disable(a)
			};
			b.prototype.activateFocus = function(a, c) {
				this.rootVisuals.main.activateFocus(a, c)
			};
			b.prototype.createMainVisual = function() {
				return this.renderer.range()
			};
			b.prototype.getValue = function() {
				return this.rootVisuals.main.value()
			};
			b.prototype.setValue = function(a) {
				this.rootVisuals.main.value(a)
			};
			b.prototype.positionApplied = function(a) {
				d.prototype.positionApplied.call(this,
					a)
			};
			return b
		}(t),
		y = function(d) {
			K(d);
			var b = d.defaultItem.type;
			"option" === b && (d.selectFirstIfEmpty = !0);
			e.jsLib.has(W, b) && !d.multiple && (d.defaultItem.triggerSelectIfFalse = !0);
			return d
		},
		K = function(d) {
			var b = d.defaultItem = d.defaultItem || {};
			b.type = b.type || "option";
			return d
		},
		w = {
			option: [u, null, null],
			radio: [u, null, "select"],
			checkbox: [u, null, null],
			toggle: [u, null, null],
			select: [v, y, null],
			scroll: [v, y, null],
			selectMultiple: [v, function(d) {
				K(d);
				d.multiple = !0;
				return d
			}, null],
			input: [x, null, null],
			file: [G, null, null],
			range: [H,
				null, null
			],
			label: [t, null, null]
		},
		V = function(d, b, a) {
			void 0 === a && (a = [0, 0]);
			var c = ["top|left", "bottom|left"],
				f = [b[3], b[0], b[3], b[3], -b[2]];
			switch (d) {
				case "left":
					c = ["middle|left", "middle|right"];
					f = [b[3], b[0], -b[1], b[0]];
					break;
				case "right":
					c = ["middle|right", "middle|left"];
					f = [-b[1], b[0], b[3], b[0]];
					break;
				case "top":
					c = ["top|center", "bottom|center"];
					f = [b[3], b[0], b[3], -b[2]];
					break;
				case "bottom":
					c = ["bottom|center", "top|center"];
					f = [b[3], -b[2], b[3], b[0]];
					break;
				case "center":
				case "middle":
				case "middleCenter":
					c = ["middle|center", "middle|center"];
					f = [b[3], b[0], b[3], b[0]];
					break;
				case "topRight":
					c = ["top|right", "bottom|right"];
					f = [-b[1], b[0], -b[1], -b[2]];
					break;
				case "bottomLeft":
					c = ["bottom|left", "top|left"];
					f = [b[3], -b[2], b[3], b[0]];
					break;
				case "bottomRight":
					c = ["bottom|right", "top|right"], f = [-b[1], -b[2], -b[1], b[0]]
			}
			return [c, [f[0] + a[0], f[1] + a[1]],
				[f[2] + a[0], f[3] + a[1]]
			]
		},
		q;
	(function(d) {
		d[d.Tab = 9] = "Tab";
		d[d.Enter = 13] = "Enter";
		d[d.Esc = 27] = "Esc";
		d[d.Left = 37] = "Left";
		d[d.Up = 38] = "Up";
		d[d.Right = 39] = "Right";
		d[d.Down = 40] = "Down"
	})(q ||
		(q = {}));
	var Y = function(d) {
			d = d ? e.jsLib.evalPath(d.renderer, "errorReporting.chart") : {};
			return {
				cursor: "pointer",
				padding: [3, 6],
				radius: 0,
				fill: (d ? d.boxDefaults() : e.consts.boxDefaults()).fill,
				text: {
					yContentAlignment: "middle",
					yAlignment: "middle"
				},
				style: "user-select: none;",
				states: {
					hover: {
						fill: "rgb(220,220,220)"
					}
				}
			}
		},
		Z = e.jsLib.plainArray(["venter", "vdown", "vclick", "vleave"]);
	u = function(d) {
		function b(a, c) {
			var b = d.call(this, a, c) || this;
			b._eventsHandler = function(a) {
				var c = b._events;
				switch (a.customEventType || a.type) {
					case "venter":
						c.mouseover &&
							c.mouseover(b);
						b.setHoverState(!0);
						break;
					case "vleave":
						c.mouseout && c.mouseout(b);
						b.setHoverState(!1);
						break;
					case "vdown":
						b.setActiveState();
						break;
					case "vclick":
						b.click(), a.stopPropagation(), a.preventDefault()
				}
			};
			return b
		}
		p(b, d);
		b.prototype.applyDestroy = function() {
			var a = this.isPatched;
			d.prototype.applyDestroy.call(this);
			a && this.destroyMouseArea()
		};
		b.prototype.hover = function(a) {
			e.jsLib.isUndefined(a) && (a = !this.isHovered);
			this.setHoverState(a)
		};
		b.prototype.select = function(a) {
			var c = a;
			e.jsLib.isUndefined(a) &&
				(c = !this.isSelected);
			c !== this.isSelected && (this.isSelected = c, this.setCurrentState(), this.triggerSelected())
		};
		b.prototype.init = function() {
			d.prototype.init.call(this);
			this._events = {};
			this._states = {};
			this._triggerSelectIfFalse = this.isHovered = this.isSelected = !1
		};
		b.prototype.defaultConfig = function() {
			return e.jsLib.extend(d.prototype.defaultConfig.call(this), Y(this.layout))
		};
		b.prototype.fillProperties = function(a) {
			a = a || {};
			e.jsLib.has(a, "events") && (this._events = a.events || {}, delete a.events);
			var c = e.jsLib.has(a,
				"state");
			if (c) {
				var b = a.state;
				e.jsLib.has(b, "select") && (b = b.select, this.isSelected !== b && (this.isSelected = b));
				delete a.state
			}
			if (e.jsLib.has(a, "states") || c) {
				b = e.jsLib.merge(this._prevStates || {}, a.states ? e.jsLib.cloneDeep(a.states) : {});
				delete a.states;
				var h = e.jsLib.cloneDeep(a);
				h = b.normal = b.normal ? e.jsLib.merge(e.jsLib.cloneDeep(b.normal), h) : h;
				this._prevStates = e.jsLib.cloneDeep(b);
				b.active && (b.active = e.jsLib.merge(e.jsLib.cloneDeep(h), b.active));
				b.select && (b.select = e.jsLib.merge(e.jsLib.cloneDeep(h),
					b.select));
				b.hoverNormal = e.jsLib.merge(e.jsLib.cloneDeep(h), b.hover || {});
				b.hoverSelect = e.jsLib.merge(b.select ? e.jsLib.cloneDeep(b.select) : {}, b.hover);
				this._states = b;
				this.setCurrentState(!0)
			}
			if (!this._currentState || c) this.setCurrentState(!0), e.jsLib.extend(a, this._currentState);
			e.jsLib.has(a, "icon") && (c = a.icon, "none" === c && (c = null), (e.jsLib.isNull(c) || "none" === c.name && !c.path) && this._icon && (this._icon.applyDestroy(), this._icon.patch(), this._icon = c = null), c && (this._icon = this._icon || this.layout.icon().add(this),
				this._icon.attr(e.jsLib.extendCopy(c, {
					zIndex: 1
				}))), delete a.icon);
			if ((c = a.text) && c.val) {
				b = a.margin || [0, 0, 0, 0];
				var g = this._icon;
				if (g) {
					h = g.getIconSize();
					var l = g.xAlignment || "left";
					g = g.yAlignment;
					if (h) {
						var k = 3;
						g || "right" !== l ? "top" === g ? k = 0 : "bottom" === g && (k = 2) : k = 1;
						b[k] = b[k] + h + 4
					}
				}
				c.margin = b
			}
			e.jsLib.has(a, "triggerSelectIfFalse") && (this._triggerSelectIfFalse = a.triggerSelectIfFalse, delete a.triggerSelectIfFalse);
			d.prototype.fillProperties.call(this, a)
		};
		b.prototype.rectAttrsApplied = function(a) {
			this._mouseArea ?
				(a = e.jsLib.extendScopedNegate({}, a, {
					fill: void 0
				}), this._mouseArea.attr(a)) : (this._mouseArea = this.renderer.path(e.jsLib.extendCopy(a, {
					fill: "rgb(255,255,255)",
					zIndex: 2,
					opacity: 0
				})).add(this.el), this.subscribeEvents())
		};
		b.prototype.destroyMouseArea = function() {
			this._mouseArea && (this._mouseArea.destroy(), this._mouseArea = null)
		};
		b.prototype.subscribeEvents = function() {
			var a = this;
			e.jsLib.eachKey(Z, function(c) {
				return a._mouseArea.on(c, a._eventsHandler)
			})
		};
		b.prototype.setCurrentState = function(a) {
			var c = this._states;
			this._currentState = this.isSelected && c.select ? this.isHovered ? c.hoverSelect : c.select : this.isHovered ? c.hoverNormal : c.normal;
			!a && this.applyCurrentState()
		};
		b.prototype.applyCurrentState = function() {
			this.attr(this._currentState);
			this.isPatched && this.refresh()
		};
		b.prototype.setHoverState = function(a) {
			a !== this.isHovered && (this.isHovered = a, this.setCurrentState(), this.triggerHovered())
		};
		b.prototype.setActiveState = function() {
			var a = this._states.active;
			a && (this._currentState = a, this.applyCurrentState())
		};
		b.prototype.generateClick =
			function() {
				var a = this._events.click;
				return a ? a(this) : null
			};
		b.prototype.click = function() {
			var a = !this._triggerSelectIfFalse || !this.isSelected;
			!1 === this.generateClick() && (a = !1);
			a && (this.isSelected = !this.isSelected);
			var c = !this.isHovered;
			c && (this.isHovered = !0);
			this.setCurrentState();
			a && this.triggerSelected();
			c && this.triggerHovered()
		};
		b.prototype.extendDefault = function(a, c) {
			return e.jsLib.merge(a, c)
		};
		b.prototype.triggerSelected = function() {
			var a = this._events.change;
			a && a(this)
		};
		b.prototype.triggerHovered =
			function() {
				var a = this._events.hover;
				a && a(this)
			};
		return b
	}(e.TextBox);
	v = function(d) {
		function b() {
			return null !== d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.defaultConfig = function() {
			return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), {
				stroke: "none",
				fill: "none",
				states: {
					hover: {
						fill: "none"
					}
				}
			})
		};
		return b
	}(u);
	x = function(d) {
		function b() {
			return null !== d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.defaultConfig = function() {
			return e.jsLib.merge(d.prototype.defaultConfig.call(this), {
				icon: {
					name: "system/default/checkbox-blank",
					width: 16,
					height: 16,
					fill: "rgb(0, 0, 0)",
					"fill-rule": "evenodd",
					yAlignment: "middle"
				},
				states: {
					select: {
						icon: {
							name: "system/default/checkbox"
						}
					}
				}
			})
		};
		return b
	}(v);
	G = function(d) {
		function b() {
			return null !== d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.defaultConfig = function() {
			return e.jsLib.merge(d.prototype.defaultConfig.call(this), {
				icon: {
					name: "system/default/toggle-off",
					size: 32,
					fill: "#8e8e93",
					transform: {
						translate: [0, -.5]
					}
				},
				states: {
					select: {
						icon: {
							name: "system/default/toggle-on",
							fill: "#44db5e"
						}
					}
				}
			})
		};
		return b
	}(x);
	H = function(d) {
		function b() {
			return null !== d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.defaultConfig = function() {
			return e.jsLib.merge(d.prototype.defaultConfig.call(this), {
				icon: {
					name: "system/default/radio-button-blank",
					width: 16,
					height: 16,
					fill: "rgb(0, 0, 0)",
					"fill-rule": "evenodd",
					yAlignment: "middle"
				},
				states: {
					select: {
						icon: {
							name: "system/default/radio-button"
						}
					}
				}
			})
		};
		b.prototype.init = function() {
			d.prototype.init.call(this);
			this._triggerSelectIfFalse = !0
		};
		return b
	}(v);
	y = function(d) {
		function b() {
			return null !==
				d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.getLowermostElement = function() {
			return this._htmlElement
		};
		b.prototype.value = function(a) {
			var c = "value";
			"button" === this._type && (c = "innerText");
			if (void 0 === a) return this._htmlElement ? this._htmlElement.el[c] : null;
			this._value = a;
			this._htmlElement && (this._htmlElement.el[c] = a);
			if (this._svgElement) {
				c = this._svgElement.childNodes[1];
				var b = this.attrs["text-align"] || "left";
				c.attr({
					text: a
				});
				a = c.getBbox();
				var d = this._svgElement.childNodes[0].getBbox();
				b = {
					left: 0,
					center: .5,
					right: 1
				} [b];
				b = {
					x: b ? (d.width - a.width) * b : 2
				};
				0 > a.y && (b.y = (d.height - a.height) / 2 - a.y);
				c.attr(b)
			}
		};
		b.prototype.applyPatch = function(a) {
			d.prototype.applyPatch.call(this, a);
			this.patchInput(a)
		};
		b.prototype.emptyPatch = function() {
			d.prototype.emptyPatch.call(this);
			this.patchInput()
		};
		b.prototype.applyDestroy = function() {
			d.prototype.applyDestroy.call(this);
			this._htmlElement && this._htmlElement.destroy();
			this._svgElement && this._svgElement.destroy()
		};
		b.prototype.init = function() {
			d.prototype.init.call(this);
			this._events = {};
			this._type = null
		};
		b.prototype.fillProperties = function(a) {
			a = a || {};
			e.jsLib.has(a, "events") && (this._events = a.events || {}, delete a.events);
			e.jsLib.has(a, "mode") && (this._type = a.mode || "text", this._type = this._type.toLowerCase ? this._type.toLowerCase() : "text");
			d.prototype.fillProperties.call(this, a)
		};
		b.prototype.defaultConfig = function() {
			return e.jsLib.merge(d.prototype.defaultConfig.call(this), {
				width: 150,
				height: 20
			})
		};
		b.prototype.patchInput = function(a) {
			var c = this;
			c._htmlElement ? c.applyStyles() :
				(c._htmlElement = this.createHtmlElement(), c.attach(c._htmlElement, {}), c._svgElement = this.createSvgElement(), c._svgElement && c.attach(c._svgElement, {}), c.applyStyles(a), e.jsLib.eachKey(c._events, function(a) {
					c.on(a, c._events[a])
				}), c.value(c._value))
		};
		b.prototype.createHtmlElement = function() {
			var a = this,
				c = a._type;
			if ("button" === c) return a.renderer.element("button");
			c = a.renderer.element("input", {
				type: c
			});
			c.on("blur", function() {
				a._svgElement.childNodes[1].attr({
					text: a._htmlElement.el.value
				});
				a.displayHtmlInput(!1)
			});
			return c
		};
		b.prototype.setHtmlElementTabIndex = function(a) {
			this._htmlElement.attr({
				tabindex: a
			})
		};
		b.prototype.displayHtmlInput = function(a) {
			var c = this._svgElement.getBbox();
			a ? (this._htmlElement.attr({
				width: c.width + "px",
				height: c.height + "px",
				visibility: "visible"
			}), this._htmlElement.el.focus()) : this._htmlElement.attr({
				width: "0px",
				height: "0px",
				visibility: "hidden"
			})
		};
		b.prototype.createSvgElement = function() {
			var a = this,
				c = a._type;
			if (!c || "text" === c) return c = a.renderer.element("g", {
				cursor: "text"
			}), a.renderer.element("rect", {
				fill: "#ffffff"
			}).add(c), a.renderer.element("text", {
				fill: "#323232",
				strokeWidth: 0
			}).add(c), c.on("click", function() {
				a.displayHtmlInput(!0)
			}), c
		};
		b.prototype.applyStyles = function(a) {
			var c = this.getGlobalBbox();
			a = e.stylingLib.annotationToHtmlAttr(e.jsLib.extendCopy(a, {
				offsetX: c.x,
				offsetY: c.y,
				width: 0,
				height: 0,
				visibility: "hidden"
			}));
			this._htmlElement.attr(a);
			c = e.dmUtils.snapToPanel(this, [0, 0, c.width, c.height], 1);
			this._svgElement && this._svgElement.childNodes[0].attr({
				x: c[0],
				y: c[1],
				width: c[2],
				height: c[3]
			})
		};
		return b
	}(e.Panel);
	var A = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.applyPatch = function(a) {
				d.prototype.applyPatch.call(this, a);
				this.patchInput(a)
			};
			b.prototype.emptyPatch = function() {
				d.prototype.emptyPatch.call(this);
				this.patchInput()
			};
			b.prototype.applyDestroy = function() {
				d.prototype.applyDestroy.call(this);
				this.htmlElement && this.htmlElement.destroy()
			};
			b.prototype.fillProperties = function(a) {
				delete a.text;
				var c = this;
				e.jsLib.has(a, "events") || (a.events = {});
				a.events.click && (c._clickEventHandler = a.events.click);
				a.events.click = function() {
					for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
					c.buttonClickHandler(a)
				};
				a.events.change && (c._changeEventHandler = a.events.change);
				delete a.events.change;
				d.prototype.fillProperties.call(this, a)
			};
			b.prototype.buttonClickHandler = function() {
				for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
				this.htmlElement.el.focus();
				this.htmlElement.el.click();
				this._clickEventHandler && this._clickEventHandler(a)
			};
			b.prototype.inputChangeHandler =
				function() {
					for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
					this._changeEventHandler && this._changeEventHandler(a)
				};
			b.prototype.patchInput = function(a) {
				var c = this;
				c.htmlElement || (c.htmlElement = this.createHtmlElement(), c.attach(c.htmlElement, {}), c.htmlElement.on("change", function() {
					for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
					c.inputChangeHandler(a)
				}));
				c.applyStyles()
			};
			b.prototype.applyStyles = function() {
				var a = this.getGlobalBbox();
				a = e.stylingLib.annotationToHtmlAttr({
					width: 0,
					height: 0,
					left: a.x,
					top: a.y + a.height - 2,
					zIndex: -1
				});
				this.htmlElement.attr(a)
			};
			return b
		}(u),
		aa = function(d) {
			function b() {
				return null !== d && d.apply(this, arguments) || this
			}
			p(b, d);
			b.prototype.value = function() {
				return this.htmlElement.el.files
			};
			b.prototype.createHtmlElement = function() {
				return this.renderer.element("input", {
					type: "file",
					accept: this._accept
				})
			};
			b.prototype.defaultConfig = function() {
				return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), {
					width: 34,
					height: 30,
					icon: {
						name: "material/editor/attach-file",
						width: 20,
						height: 20,
						fill: "rgb(60, 60, 60)",
						"fill-rule": "evenodd",
						yAlignment: "middle"
					}
				})
			};
			b.prototype.fillProperties = function(a) {
				this._accept = a.accept;
				d.prototype.fillProperties.call(this, a)
			};
			return b
		}(A);
	A = function(d) {
		function b() {
			return null !== d && d.apply(this, arguments) || this
		}
		p(b, d);
		b.prototype.value = function() {
			return this.htmlElement.el.value
		};
		b.prototype.fillProperties = function(a) {
			d.prototype.fillProperties.call(this, a);
			void 0 !== a.innerPadding && (this.innerPadding = a.innerPadding, delete a.innerPadding)
		};
		b.prototype.defaultConfig =
			function() {
				return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), {
					width: 34,
					height: 30,
					icon: {},
					innerPadding: 5
				})
			};
		b.prototype.patchInput = function(a) {
			d.prototype.patchInput.call(this, a);
			a = this.getBbox();
			this.colorRect = this.layout.renderer.rect(this.innerPadding, this.innerPadding, a.width - 2 * this.innerPadding, a.height - 2 * this.innerPadding).add(this);
			this.colorRect.attr({
				fill: this.value()
			})
		};
		b.prototype.createHtmlElement = function() {
			return this.renderer.element("input", {
				type: "color"
			})
		};
		b.prototype.inputChangeHandler =
			function() {
				for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
				try {
					d.prototype.inputChangeHandler.apply(this, L(a))
				} catch (f) {}
				this.colorRect.attr({
					fill: this.value()
				})
			};
		return b
	}(A);
	var ba = function(d) {
			d = d ? e.jsLib.evalPath(d.renderer, "errorReporting.chart") : {};
			return {
				height: 20,
				sliderPathSize: 3,
				min: 0,
				max: 1,
				width: 220,
				value: 0,
				layout: "auto",
				state: {
					sizeOffset: 3,
					normal: {
						cursor: "ew-resize",
						zIndex: 2,
						val: [{
							fill: "rgb(72,72,72)",
							strokeWidth: 0,
							type: "shape",
							mode: "circle",
							animation: 200
						}]
					},
					hover: {
						zIndex: 3,
						val: [{
							fill: "rgb(72,72,72)",
							animation: 200
						}]
					},
					active: {
						zIndex: 3,
						val: [{
							fill: "rgb(72,72,72)",
							animation: 200
						}]
					},
					disabled: {
						cursor: "normal",
						val: [{
							borderColor: (d ? d.boxDefaults() : e.consts.boxDefaults()).fill,
							fill: "rgb(208,216,220)",
							strokeWidth: 2
						}]
					}
				},
				path: {
					state: {
						normal: {
							fill: "rgb(208,216,220)",
							strokeWidth: "0px"
						},
						hover: {},
						active: {},
						disabled: {}
					}
				},
				decorator: {
					state: {
						normal: {
							fill: "rgb(72,72,72)",
							strokeWidth: "0px"
						},
						hover: {},
						active: {},
						disabled: {
							fill: "rgb(208,216,220)"
						}
					}
				},
				overlay: {
					type: "circle",
					config: {
						zIndex: 5,
						fill: "white",
						opacity: .001
					}
				}
			}
		},
		ca = function(d) {
			function b() {
				var a = null !== d && d.apply(this, arguments) || this;
				a._focusedSlider = null;
				a._focusProcessing = !1;
				return a
			}
			p(b, d);
			b.prototype.init = function() {
				d.prototype.init.call(this);
				this._min = 0;
				this._max = 1
			};
			b.prototype.value = function(a) {
				if (void 0 !== a) {
					e.jsLib.isArray(a) || (a = [a]);
					this._firstValue = a[0];
					this._secondValue = a[1];
					this._startedFirstValue = this.converValueToScrollValue(this._firstValue);
					this._startedSecondValue = this.converValueToScrollValue(this._secondValue);
					if (!this._firstSlider) return;
					this.setSliderValues(this._startedFirstValue, this._startedSecondValue);
					return null
				}
				a = this.converScrollValueToValue(this.getValueForSlider(this._firstSlider));
				var c = this.converScrollValueToValue(this.getValueForSlider(this._secondSlider));
				return null === c ? a : c < a ? [c, a] : [a, c]
			};
			b.prototype.isDisabled = function() {
				return this._disabled
			};
			b.prototype.disable = function(a) {
				this._disabled = a;
				this._selectedSlider = null;
				this._decoratoreSelected = !1;
				this.setDisabledState(this._disabled)
			};
			b.prototype.applyPatch = function(a) {
				this.drawSliderItems();
				this.updatePathDecoratorPosition(!1);
				if (e.isTouchDevice()) this.on("touchstart", function(a) {
					a.eventArgs.preventDefault()
				});
				this.activateFocusForSliders(this._accessibilityEnabled, this._tabIndex);
				d.prototype.applyPatch.call(this, a)
			};
			b.prototype.applyDestroy = function() {
				d.prototype.applyDestroy.call(this);
				var a = this.layout.renderer.documentElement;
				a.un("vmove", this._docVMoveHandler);
				a.un("vup", this._docVUpHandler);
				a.un("keydown", this._docKeyDownHandler);
				this._sliderPath && this._sliderPath.applyDestroy();
				this._firstSlider && this._firstSlider.applyDestroy();
				this._secondSlider && this._secondSlider.applyDestroy()
			};
			b.prototype.emptyPatch = function() {
				d.prototype.emptyPatch.call(this)
			};
			b.prototype.activateFocus = function(a, c) {
				this._accessibilityEnabled = a;
				this._tabIndex = c;
				(this._firstSlider || this._secondSlider) && this.activateFocusForSliders(a, c)
			};
			b.prototype.activateFocusForSliders = function(a, c) {
				var b = this;
				if (b._hasAccessibility !== a) {
					b._firstFocusChangeHandler || b._secondFocusChangeHandler || (b._firstFocusChangeHandler =
						function(a) {
							b.changeFocusHandler(a, function() {
								return b._firstSlider
							})
						}, b._secondFocusChangeHandler = function(a) {
							b.changeFocusHandler(a, function() {
								return b._secondSlider
							})
						});
					if (a) {
						if (b._firstSlider.overlay.attr({
								tabindex: c,
								"aria-label": b.getSliderDescription(b._firstSlider),
								role: b.getSliderDescription(b._firstSlider)
							}), b._secondSlider && b._secondSlider.overlay.attr({
								tabindex: c,
								"aria-label": b.getSliderDescription(b._secondSlider),
								role: b.getSliderDescription(b._secondSlider)
							}), b._firstSlider.overlay.on("vchangefocus",
								b._firstFocusChangeHandler), b._secondSlider) b._secondSlider.overlay.on("vchangefocus", b._secondFocusChangeHandler)
					} else b._firstSlider.overlay.attr({
						tabindex: null,
						"aria-label": null,
						role: null
					}), b._secondSlider && b._secondSlider.overlay.attr({
						tabindex: null,
						"aria-label": null,
						role: null
					}), b._firstSlider.overlay.un("vchangefocus", b._firstFocusChangeHandler), b._secondSlider && b._secondSlider.overlay.un("vchangefocus", b._secondFocusChangeHandler);
					b._hasAccessibility = a
				}
			};
			b.prototype.changeFocusHandler = function(a,
				c) {
				this._focusProcessing || (this._focusProcessing = !0, this._disabled ? a.eventArgs.preventDefault() : (a.eventArgs.hasFocus ? (this._focusedSlider = c(), this._focusedSlider.overlay.el.attr({
						outline: "none"
					}), this._states && this._iconStates && this.setSliderAttr(this._focusedSlider, this._states.hover, this._iconStates.hover)) : this._focusedSlider && (this._states && this._iconStates && this.setSliderAttr(this._focusedSlider, this._states.normal, this._iconStates.normal), this._focusedSlider = null), this.updateAndApplyRefresh(),
					this._focusProcessing = !1))
			};
			b.prototype.defaultConfig = function() {
				return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), ba(this.layout))
			};
			b.prototype.fillProperties = function(a) {
				a.layout && (this._vertical = a.layout && "vertical" === a.layout.toLowerCase(), delete a.vertical);
				this._currentMoveCursor = this._vertical ? "ns-resize" : "ew-resize";
				a.events && (a.events.change && (a.throttle && e.jsLib.isNumber(a.throttle) ? this._changeEvent = e.jsLib.throttle(a.events.change, a.throttle) : this._changeEvent = a.events.change),
					delete a.events);
				void 0 !== a.state && (this._states = a.state, delete a.state);
				this._states && this._states.normal && (this._states.normal.cursor = this._currentMoveCursor);
				void 0 !== a.path && (this._path = a.path, delete a.path);
				void 0 !== a.decorator && (this._decorator = a.decorator, delete a.decorator);
				void 0 !== a.icon ? (this._icon = a.icon, this._iconStates = this._icon.state, delete a.icon) : (delete this._icon, this._iconStates = {});
				void 0 !== a.overlay && (this._overlay = a.overlay, delete a.overlay);
				void 0 !== a.sliderPathSize && (this._sliderPathSize =
					a.sliderPathSize, delete a.sliderPathSize);
				void 0 !== a.disabled && (this._disabled = a.disabled, delete a.disabled);
				void 0 !== a.min && (this._min = a.min, delete a.min);
				void 0 !== a.max && (this._max = a.max, delete a.max);
				d.prototype.fillProperties.call(this, a)
			};
			b.prototype.setSliderValues = function(a, c) {
				this.setValueForSlider(this._firstSlider, a);
				this.setSecondSliderValue(c);
				this.updatePathDecoratorPosition()
			};
			b.prototype.drawSliderItems = function() {
				var a = this,
					c = a.getBbox();
				a._sliderSize = a._vertical ? c.width : c.height;
				a._firstSlider || (a._firstSlider = a.createSlider());
				var b = c.width;
				c = c.height;
				a._sliderPath ? a._sliderPath && a._sliderPath.attr(a.getSliderPathAttrs(b, c)) : a.createSliderPath(b, c);
				a.createSliderPathHitArea(b, c);
				a._disabled && a.setDisabledState(a._disabled);
				a._docVMoveHandler || a._docVUpHandler || (b = a.layout.renderer.documentElement, a._docKeyDownHandler = function(c) {
						a.docKeyDownHandler(c)
					}, a._docVMoveHandler = function(c) {
						a.docVMoveHandler(c)
					}, a._docVUpHandler = function(c) {
						a.docVUpHandler(c)
					}, b.on("vmove", a._docVMoveHandler),
					b.on("vup", a._docVUpHandler), b.on("keydown", a._docKeyDownHandler));
				a.setSliderValues(a._startedFirstValue, a._startedSecondValue)
			};
			b.prototype.setDisabledState = function(a) {
				this._firstSlider && (a ? (this.setSliderAttr(this._firstSlider, this._states.disabled, this._iconStates.disabled), this.setSliderAttr(this._secondSlider, this._states.disabled, this._iconStates.disabled), this._sliderPath.attr(this._path.state.disabled), this._sliderPathHitArea.attr({
					cursor: "normal"
				}), this._sliderPathDecorator && (this._sliderPathDecorator.attr(this._decorator.state.disabled),
					this._sliderPathDecoratorHitArea.attr({
						cursor: "normal"
					}))) : (this.setSliderAttr(this._firstSlider, this._states.normal, this._iconStates.normal), this.setSliderAttr(this._secondSlider, this._states.normal, this._iconStates.normal), this._sliderPath.attr(this._path.state.normal), this._sliderPathHitArea.attr({
					cursor: "pointer"
				}), this._sliderPathDecorator && (this._sliderPathDecorator.attr(this._decorator.state.normal), this._sliderPathDecoratorHitArea.attr({
					cursor: "grab"
				}))))
			};
			b.prototype.docKeyDownHandler = function(a) {
				var c =
					this.getBbox(),
					b = c.width;
				c = c.height;
				if (this._focusedSlider) {
					var d = !1,
						g = this._focusedSlider.attr("offsetX"),
						e = this._focusedSlider.attr("offsetY");
					if (39 === a.keyCode || 40 === a.keyCode) g += .03 * b, e += .03 * c, d = !0;
					else if (37 === a.keyCode || 38 === a.keyCode) g -= .03 * b, e -= .03 * c, d = !0;
					this.setSliderPosition(g, e, b, c);
					this.triggerChangeEvent(a);
					d && a.preventDefault()
				}
			};
			b.prototype.docVMoveHandler = function(a) {
				var c = this.getBbox(),
					b = c.width;
				c = c.height;
				this._selectedSlider && this.processSelectedSliderOnMove(a, b, c);
				this._decoratoreSelected &&
					this.processSelectedDecoratorOnMove(a, b, c)
			};
			b.prototype.processSelectedSliderOnMove = function(a, c, b) {
				var f = this.toRelativeXY(a);
				this.setSliderPosition(f[0] - this._coordinatesDown[0], f[1] - this._coordinatesDown[1], c, b);
				this.triggerChangeEvent(a)
			};
			b.prototype.setSliderPosition = function(a, c, b, d) {
				var f = this._sliderSize,
					e = this.moveAnotherSlider(a, c, b, d); - 1 === e && (this._vertical ? c = 0 : a = 0);
				1 === e && (this._vertical ? c = d - f : a = b - f);
				c = this.truncateSliderPos(a, c, b, d);
				a = c[0];
				c = c[1];
				this.setSliderAttr(this._selectedSlider ||
					this._focusedSlider, {
						offsetX: a,
						offsetY: c
					});
				this.updateAndApplyRefresh();
				this.updatePathDecoratorPosition()
			};
			b.prototype.processSelectedDecoratorOnMove = function(a, c, b) {
				var f = this.toRelativeXY(a),
					d = f[0] - this._coordinatesDown[0],
					e = f[1] - this._coordinatesDown[1];
				this._coordinatesDown = [f[0], f[1]];
				f = this._firstSlider.attr("offsetX");
				var k = this._firstSlider.attr("offsetY"),
					m = this._secondSlider.attr("offsetX"),
					n = this._secondSlider.attr("offsetY");
				this._vertical ? (k += e, n += e, d = 0 > e) : (f += d, m += d, d = 0 > d);
				if (this._needLock) {
					if (this._vertical) {
						if (0 <
							this._lockDirection && this._coordinatesDown[1] > this._coordinatesToLock[1] || 0 > this._lockDirection && this._coordinatesDown[1] < this._coordinatesToLock[1]) return
					} else if (0 < this._lockDirection && this._coordinatesDown[0] > this._coordinatesToLock[0] || 0 > this._lockDirection && this._coordinatesDown[0] < this._coordinatesToLock[0]) return;
					this._needLock = !1
				}
				this._needLock || (d ? (c = this.truncateSliderPos(f, k, c, b), b = c[0] - f, d = c[1] - k, f = c[0], k = c[1], this._needLock = !!c[2], this._lockDirection = -1, this._coordinatesToLock = this._coordinatesDown,
					m += b, n += d) : (c = this.truncateSliderPos(m, n, c, b), b = c[0] - m, d = c[1] - n, m = c[0], n = c[1], this._needLock = !!c[2], this._lockDirection = 1, this._coordinatesToLock = this._coordinatesDown, f += b, k += d), this._vertical ? (this.setSliderAttr(this._firstSlider, {
					offsetY: k
				}), this.setSliderAttr(this._secondSlider, {
					offsetY: n
				})) : (this.setSliderAttr(this._firstSlider, {
					offsetX: f
				}), this.setSliderAttr(this._secondSlider, {
					offsetX: m
				})), this.updateAndApplyRefresh(), this.updatePathDecoratorPosition(), this.triggerChangeEvent(a))
			};
			b.prototype.truncateSliderPos =
				function(a, c, b, d) {
					var f = this._sliderSize,
						e = f / 2,
						h = 0;
					a < -e ? (a = -e, h = 1) : a + f > b + e && (a = b - e, h = 1);
					c < -e ? (c = -e, h = 1) : c + f > d + e && (c = d - e, h = 1);
					this._vertical ? a = 0 : c = 0;
					return [a, c, h]
				};
			b.prototype.moveAnotherSlider = function(a, c, b, d) {
				var f = this._sliderSize / 2,
					e = this._firstSlider,
					h = !0;
				(this._selectedSlider || this._focusedSlider) === this._firstSlider && (e = this._secondSlider, h = !1);
				if (!e) return 0;
				var m = e.attr("offsetX"),
					n = e.attr("offsetY"),
					r = !1;
				h ? this._vertical ? n + f > c && (n = c - f, r = !0) : m + f > a && (m = a - f, r = !0) : this._vertical ? n - f < c && (n = c +
					f, r = !0) : m - f < a && (m = a + f, r = !0);
				if (!r) return 0;
				a = this.truncateSliderPos(m, n, b, d);
				this.setSliderAttr(e, {
					offsetX: a[0],
					offsetY: a[1]
				});
				if (this._vertical) {
					if (a[1] <= -f) return -1;
					if (a[1] >= d - f) return 1
				} else {
					if (a[0] <= -f) return -1;
					if (a[0] >= b - f) return 1
				}
			};
			b.prototype.docVUpHandler = function(a) {
				this.docVUpSelectedSlider(a);
				this.docVUpSliderPathDecorator(a)
			};
			b.prototype.docVUpSelectedSlider = function(a) {
				if (this._selectedSlider) {
					if (this._states && this._states.normal) {
						this.setSliderAttr(this._selectedSlider, this._states.normal,
							this._iconStates.normal);
						try {
							this.updateAndApplyRefresh()
						} catch (c) {
							console.error(c)
						}
					}
					this._selectedSlider = null;
					this.triggerChangeEvent(a)
				}
			};
			b.prototype.docVUpSliderPathDecorator = function(a) {
				this._sliderPathDecoratorHitArea && this._sliderPathDecoratorHitArea.attr({
					cursor: "grab"
				});
				this._decoratoreSelected && (this.setSliderAttr(this._firstSlider, this._states.normal, this._iconStates.normal), this.setSliderAttr(this._secondSlider, this._states.normal, this._iconStates.normal), this.updateAndApplyRefresh(), this._decoratoreSelected = !1)
			};
			b.prototype.createSliderPath = function(a, c) {
				a = this.getSliderPathAttrs(a, c);
				a = e.jsLib.extendCopy({
					x: a.x,
					y: a.y,
					width: a.width,
					height: a.height,
					shape: {
						r: "5",
						corners: [{
							type: "round"
						}, {
							type: "round"
						}, {
							type: "round"
						}, {
							type: "round"
						}]
					}
				}, this._path.state.normal);
				a = this.layout.renderer.shape("rectangle", a);
				a.add(this);
				return this._sliderPath = a
			};
			b.prototype.getSliderPathAttrs = function(a, c) {
				var b = 0,
					d = 0,
					e = a,
					l = this._sliderPathSize;
				this._vertical ? (b = a / 2 - this._sliderPathSize / 2, e = this._sliderPathSize, l = c) : d = c / 2 - this._sliderPathSize /
					2;
				return {
					x: b,
					y: d,
					width: e,
					height: l
				}
			};
			b.prototype.moveItemsGroup = function(a) {
				var c = this._sliderPath.getBbox(),
					b = this.toRelativeXY(a),
					d = c.width;
				c = c.height;
				var e = this._sliderSize / 2;
				this._vertical ? (b = b[1], d = c) : b = b[0];
				if (this._secondSlider) {
					if (this._vertical) {
						c = this._firstSlider.attr("offsetY") + e;
						var l = this._secondSlider.attr("offsetY") + e
					} else c = this._firstSlider.attr("offsetX") + e, l = this._secondSlider.attr("offsetX") + e;
					e = l - c;
					l = e / 2;
					c = b - l;
					l = b + l;
					0 > c ? (c = 0, l = e) : l > d && (l = d, c = d - e);
					b = l / d;
					this.setValueForSlider(this._firstSlider,
						c / d, !0);
					this.setValueForSlider(this._secondSlider, b, !0);
					this.updatePathDecoratorPosition(!0)
				} else this.setValueForSlider(this._firstSlider, b / d, !0);
				this.updateAndApplyRefresh();
				this.triggerChangeEvent(a)
			};
			b.prototype.triggerChangeEvent = function(a) {
				var c = this.value();
				if (e.jsLib.isArray(c)) {
					if (this._firstValue === c[0] && this._secondValue === c[1]) return;
					this._firstValue = c[0];
					this._secondValue = c[1]
				} else {
					if (this._firstValue === c) return;
					this._firstValue = c
				}
				this._changeEvent && this._changeEvent(a)
			};
			b.prototype.createSliderPathDecorator =
				function() {
					if (this._firstSlider && this._secondSlider) {
						var a = e.jsLib.extend({}, this._decorator.state.normal);
						a = this.layout.renderer.shape("rectangle", a);
						a.add(this);
						this.createSliderPathDecoratorHitArea();
						return a
					}
				};
			b.prototype.setSliderAttr = function(a, c, b) {
				void 0 === c && (c = {});
				void 0 === b && (b = {});
				if (a) {
					var f = a.val();
					if (c.val)
						for (var d = 0; d < c.val.length; d++) f[d].attr(c.val[d]);
					a.icon && b && a.icon.attr(b);
					this._hasAccessibility && (b = this.getSliderDescription(a), a.attr("aria-label") != b && (c["aria-label"] = b));
					b = {};
					c.offsetX && (b.offsetX = c.offsetX);
					c.offsetY && (b.offsetY = c.offsetY);
					a.overlay.attr(b);
					return a.attr(c)
				}
			};
			b.prototype.updatePathDecoratorPosition = function(a) {
				void 0 === a && (a = !1);
				var c = this._sliderPathDecorator,
					b = this._sliderSize / 2;
				if (c) {
					var d = this._firstSlider.attr("offsetX"),
						e = this._secondSlider.attr("offsetX"),
						l = this._firstSlider.attr("offsetY"),
						k = this._secondSlider.attr("offsetY"),
						m = this._sliderPath.attr("x"),
						n = this._sliderPath.attr("y"),
						r = this._sliderPath.attr("width"),
						p = this._sliderPath.attr("height");
					if (d > e) {
						var q = d;
						d = e;
						e = q
					}
					l > k && (q = l, l = k, k = q);
					this._vertical ? (d = m, l += b, e = r, b = Math.abs(k - l) + b) : (d += b, l = n, e = Math.abs(e - d) + b, b = p);
					k = {
						x: d,
						y: l,
						width: e,
						height: b
					};
					a && (k.animation = 200);
					this.updateSliderPathDecoratorHitAreaPosition(d, l, e, b, a);
					c.attr(k)
				}
			};
			b.prototype.getSliderRole = function(a) {
				return "Range Slider"
			};
			b.prototype.getSliderDescription = function(a) {
				var c = this.value(),
					b = "";
				a === this._firstSlider ? b = e.jsLib.toString(Math.round(e.jsLib.isArray(c) ? c[0] : c)) : a === this._secondSlider && (b = e.jsLib.toString(Math.round(c[1])));
				return "Range Slider. Value: " + b
			};
			b.prototype.createSlider = function() {
				var a = this,
					c = a._states.sizeOffset || 0,
					b = c / 2,
					d = e.jsLib.extendCopy({
						x: 0,
						y: 0,
						width: a._sliderSize,
						height: a._sliderSize
					}, a._states.normal),
					g = d.val[0],
					l = a._states.hover && a._states.hover.val[0],
					k = a._states.active && a._states.active.val[0],
					m = a._sliderSize;
				c = m - c;
				g && e.jsLib.extend(g, {
					offsetX: b,
					offsetY: b,
					width: c,
					height: c
				});
				l && e.jsLib.extend(l, {
					offsetX: 0,
					offsetY: 0,
					width: m,
					height: m
				});
				k && e.jsLib.extend(k, {
					offsetX: 0,
					offsetY: 0,
					width: m,
					height: m
				});
				var n = a.layout.panel(d);
				a._overlay && (b = e.jsLib.extendCopy({
					x: 0,
					y: 0,
					width: a._sliderSize,
					height: a._sliderSize
				}, a._overlay.config), a.renderer.shape(a._overlay.type, b).add(n));
				n.on("vdown", function(c) {
					a._disabled || (a._selectedSlider = n, a._coordinatesDown = [c.pointers[0][0], c.pointers[0][1]], a.setSliderAttr(n, a._states.active, a._iconStates.active), a.updateAndApplyRefresh())
				});
				n.on("venter", function() {
					a._disabled || a._selectedSlider || a._decoratoreSelected || !a._states || !a._states.hover || (a.setSliderAttr(n,
						a._states.hover, a._iconStates.hover), a.updateAndApplyRefresh())
				});
				n.on("vleave", function(c) {
					!a._disabled && a._selectedSlider !== n && !a._decoratoreSelected && a._states && a._states.normal && (a.setSliderAttr(n, a._states.normal, a._iconStates.normal), a.updateAndApplyRefresh())
				});
				n.add(a);
				n.overlay = a.layout.shape("rectangle", {
					fill: "white",
					opacity: .01,
					x: 0,
					y: 0,
					width: a._sliderSize,
					height: a._sliderSize,
					"aria-label": a.getSliderDescription(null),
					role: a.getSliderRole(null)
				});
				n.overlay.add(a);
				return n
			};
			b.prototype.getValueForSlider =
				function(a) {
					if (null == a) return null;
					var c = this._sliderSize / 2,
						b = this.getBbox();
					this._vertical ? (a = a.attr("offsetY") + c, b = b.height) : (a = a.attr("offsetX") + c, b = b.width);
					return a / b
				};
			b.prototype.setValueForSlider = function(a, c, b) {
				void 0 === b && (b = !1);
				if (a) {
					c || (c = 0);
					0 > c && (c = 0);
					1 < c && (c = 1);
					var d = this.getBbox(),
						f = this._sliderSize / 2,
						e = d.width;
					d = d.height;
					var k = 0,
						m = 0;
					this._vertical ? m = d * c - f : k = e * c - f;
					c = {
						offsetX: k,
						offsetY: m
					};
					b && (c.animation = 200);
					this.setSliderAttr(a, c)
				}
			};
			b.prototype.updateAndApplyRefresh = function() {
				this.update();
				this.applyRefresh()
			};
			b.prototype.setSecondSliderValue = function(a) {
				null == a ? (this._secondSlider && (this._secondSlider.destroy(), this._secondSlider = null), this._sliderPathDecorator && (this._sliderPathDecorator.destroy(), this._sliderPathDecorator = null)) : (this._secondSlider || (this._secondSlider = this.createSlider()), this._sliderPathDecorator || (this._sliderPathDecorator = this.createSliderPathDecorator()), this.setValueForSlider(this._secondSlider, a), this.updatePathDecoratorPosition(), this.disable(this.isDisabled()))
			};
			b.prototype.converValueToScrollValue = function(a) {
				return null == a ? null : (a - this._min) / (this._max - this._min)
			};
			b.prototype.converScrollValueToValue = function(a) {
				return null == a ? null : a * (this._max - this._min) + this._min
			};
			b.prototype.createSliderPathHitArea = function(a, c) {
				var b = this,
					d = b._states.sizeOffset || 0,
					e = d / 2;
				b._sliderPathHitArea && b._sliderPathHitArea.destroy();
				var l = 0,
					k = e,
					m = a,
					n = c - d;
				b._vertical && (l = e, k = 0, m = a - d, n = c);
				a = b.layout.renderer.shape("rectangle", {
					x: l,
					y: k,
					width: m,
					height: n,
					color: "white",
					cursor: "pointer",
					opacity: .001
				});
				a.on("vclick", function(a) {
					b._disabled || b.moveItemsGroup(a)
				});
				b._sliderPathHitArea = a;
				a.add(b);
				return a
			};
			b.prototype.createSliderPathDecoratorHitArea = function() {
				var a = this;
				a._sliderPathDecoratorHitArea && a._sliderPathDecoratorHitArea.destroy();
				if (a._secondSlider) {
					var c = a.layout.renderer.shape("rectangle", {
						x: 0,
						y: 0,
						color: "white",
						cursor: "grab",
						opacity: .001
					});
					c.on("vdown", function(b) {
						a._disabled || (a._decoratoreSelected = !0, b = a.toRelativeXY(b), a._coordinatesDown = [b[0], b[1]], a.setSliderAttr(a._firstSlider,
							a._states.active, a._iconStates.active), a.setSliderAttr(a._secondSlider, a._states.active, a._iconStates.active), c.attr({
							cursor: "grabbing"
						}), a.updateAndApplyRefresh())
					});
					c.on("venter", function() {
						a._disabled || a._selectedSlider || a._decoratoreSelected || (a.setSliderAttr(a._firstSlider, a._states.hover, a._iconStates.hover), a.setSliderAttr(a._secondSlider, a._states.hover, a._iconStates.hover), a.updateAndApplyRefresh())
					});
					c.on("vleave", function() {
						a._disabled || a._selectedSlider || a._decoratoreSelected || (a.setSliderAttr(a._firstSlider,
							a._states.normal, a._iconStates.normal), a.setSliderAttr(a._secondSlider, a._states.normal, a._iconStates.normal), a.updateAndApplyRefresh())
					});
					c.on("vup", function() {
						a._disabled || (a._decoratoreSelected = !1, a.setSliderAttr(a._firstSlider, a._states.normal, a._iconStates.normal), a.setSliderAttr(a._secondSlider, a._states.normal, a._iconStates.normal), a.updateAndApplyRefresh())
					});
					a._sliderPathDecoratorHitArea = c;
					c.add(a);
					return c
				}
			};
			b.prototype.updateSliderPathDecoratorHitAreaPosition = function(a, c, b, d, e) {
				if (this._sliderPathDecoratorHitArea) {
					var f =
						this._states.sizeOffset || 0,
						g = f / 2;
					f = this._sliderSize - f;
					a = {
						x: a,
						y: c,
						width: b,
						height: d
					};
					this._vertical ? (a.x = g, a.width = f, b = d) : (a.y = g, a.height = f);
					e && (a.animation = 200);
					a.zIndex = b < this._sliderSize ? 4 : 1;
					this._sliderPathDecoratorHitArea.attr(a)
				}
			};
			return b
		}(e.Panel),
		da = function(d) {
			function b() {
				var a = null !== d && d.apply(this, arguments) || this;
				a._sliderPath = null;
				a._slider = null;
				return a
			}
			p(b, d);
			b.prototype.scrollHandler = function(a) {
				return e.jsLib.def(a) ? (this._scrollHandler = a, null) : this._scrollHandler
			};
			b.prototype.applyPatch =
				function(a) {
					this.patchInnerItems();
					d.prototype.applyPatch.call(this, a)
				};
			b.prototype.applyDestroy = function() {
				d.prototype.applyDestroy.call(this);
				var a = this.layout.renderer.documentElement;
				a.un("vmove", this._docVMoveHandler);
				a.un("vup", this._docVUpHandler);
				a.un("selectstart", this._docSelectHandler)
			};
			b.prototype.sliderSelected = function() {
				return !!this._selectedSlider
			};
			Object.defineProperty(b.prototype, "sliderSize", {
				get: function() {
					return this._sliderSize
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b.prototype,
				"scrollSize", {
					get: function() {
						return this._scrollSize
					},
					set: function(a) {
						this._scrollSize = a
					},
					enumerable: !0,
					configurable: !0
				});
			Object.defineProperty(b.prototype, "pageSize", {
				get: function() {
					return this._pageSize
				},
				set: function(a) {
					this._pageSize = a
				},
				enumerable: !0,
				configurable: !0
			});
			b.prototype.show = function() {
				this._slider.show();
				this._sliderPath.show()
			};
			b.prototype.hide = function() {
				this._slider.hide();
				this._sliderPath.hide()
			};
			b.prototype.isInArea = function(a) {
				var c = this.getBbox(),
					b = this.toRelativeXY(a);
				a = b[0];
				b = b[1];
				return 0 > a || 0 > b || a > c.width || b > c.height ? !1 : !0
			};
			b.prototype.increaseScrollPosition = function(a) {
				var b = this.getSliderPosition();
				if (this._vertical) {
					var d = b[1];
					a = this.moveSliderToPosition(b[0], d + a);
					a = d !== a
				} else d = b[0], a = this.moveSliderToPosition(d + a, b[1]), a = d !== a;
				return a
			};
			b.prototype.emptyPatch = function() {
				d.prototype.emptyPatch.call(this)
			};
			b.prototype.patchInnerItems = function() {
				var a = this.getBbox(),
					b = a.width;
				a = a.height;
				this._sliderPath = this.createSliderPath(b, a);
				this._slider = this.createSlider(b,
					a);
				this._sliderPath.add(this);
				this._slider.add(this);
				this.attachEvents()
			};
			b.prototype.moveSliderToPosition = function(a, b) {
				var c = this._sliderSize / 2,
					d = 0,
					e = 0;
				this._vertical ? (e = this.truncScrollPosition(b), a = e + c) : (d = this.truncScrollPosition(a), a = d + c);
				d = this.parent.snap([d, e], 0);
				this._slider.attr({
					x: d[0],
					y: d[1]
				});
				d = this._vertical ? d[1] : d[0];
				this.callback && this.callback(a / this._sliderPathSize);
				return d
			};
			b.prototype.init = function() {
				d.prototype.init.call(this);
				this._sliderSpeed = 13;
				this._minSliderSize = 20
			};
			b.prototype.defaultConfig =
				function() {
					return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), {
						vertical: !0,
						hasButtons: !0
					})
				};
			b.prototype.fillProperties = function(a) {
				this._vertical = a.vertical;
				delete a.events;
				d.prototype.fillProperties.call(this, a)
			};
			b.prototype.createSliderPath = function(a, b) {
				this._vertical ? (this._sliderStartPos = 0, this._sliderPathSize = b) : (this._sliderStartPos = 0, this._sliderPathSize = a);
				return this.layout.renderer.shape("rectangle", {
					x: 0,
					y: 0,
					width: a,
					height: b,
					fill: "#e6eaec",
					strokeWidth: "0px",
					opacity: .4,
					cursor: "pointer",
					shape: {
						r: this._vertical ? a / 2 : b / 2,
						corners: [{
							type: "round"
						}, {
							type: "round"
						}, {
							type: "round"
						}, {
							type: "round"
						}]
					}
				})
			};
			b.prototype.createSlider = function(a, b) {
				var c = 0,
					d = 0;
				this._vertical ? (d = this._sliderStartPos, this._sliderSize = b = this.calculateSliderSize(b)) : (c = this._sliderStartPos, this._sliderSize = a = this.calculateSliderSize(a));
				return this.layout.renderer.shape("rectangle", {
					x: c,
					y: d,
					width: a,
					height: b,
					fill: "#c3c8cb",
					opacity: .6,
					strokeWidth: "0px",
					shape: {
						r: this._vertical ? a / 2 : b / 2,
						corners: [{
								type: "round"
							}, {
								type: "round"
							},
							{
								type: "round"
							}, {
								type: "round"
							}
						]
					}
				})
			};
			b.prototype.attachEvents = function() {
				var a = this,
					b = a.layout.renderer.documentElement,
					d = function(b, c) {
						var d = c + a._sliderSize / 2,
							e = 0;
						d < b ? (c += a._sliderSpeed, e = 1) : d > b && (c -= a._sliderSpeed, e = -1);
						return {
							pos: c,
							direction: e
						}
					};
				a._sliderPath.on("vdown", function(b) {
					a.triggerScrollEvent(!0);
					a._downIntervalId = setInterval(function() {
						var c = a.toRelativeXY(b),
							e = a.getSliderPosition();
						if (a._vertical) {
							var f = d(c[1], e[1]);
							a.moveSliderToPosition(e[0], f.pos);
							e = a.getSliderPosition();
							c = d(c[1],
								e[1])
						} else f = d(c[0], e[0]), a.moveSliderToPosition(f.pos, e[1]), e = a.getSliderPosition(), c = d(c[0], e[0]);
						f.direction !== c.direction && clearInterval(a._downIntervalId)
					}, 50);
					b.stopPropagation()
				});
				a._sliderPath.on("vup", function() {
					a.triggerScrollEvent(!1);
					clearInterval(a._downIntervalId)
				});
				a._sliderPath.on("vleave", function() {
					a.triggerScrollEvent(!1);
					clearInterval(a._downIntervalId)
				});
				a._slider.on("vdown", function(b) {
					a.triggerScrollEvent(!0);
					a._selectedSlider = a._slider;
					var c = a.toRelativeXY(b);
					a._coordinatesDown = [c[0] - a._selectedSlider.x, c[1] - a._selectedSlider.y];
					b.stopPropagation()
				});
				e.isTouchDevice() && (a._sliderPath.on("touchstart", function(a) {
					a.preventDefault()
				}), a._slider.on("touchstart", function(a) {
					a.preventDefault()
				}));
				a._docVMoveHandler = function(b) {
					a.docVMoveHandler(b);
					b.preventDefault()
				};
				a._docVUpHandler = function(b) {
					a.docVUpHandler(b)
				};
				a._docSelectHandler = function(b) {
					a._selectedSlider && b.preventDefault()
				};
				b.on("vmove", a._docVMoveHandler);
				b.on("vup", a._docVUpHandler);
				b.on("selectstart", a._docSelectHandler)
			};
			b.prototype.triggerScrollEvent = function(a) {
				this._scrollHandler && this._scrollHandler(a)
			};
			b.prototype.docVMoveHandler = function(a) {
				this._selectedSlider && (a = this.toRelativeXY(a), this.moveSliderToPosition(a[0] - this._coordinatesDown[0], a[1] - this._coordinatesDown[1]))
			};
			b.prototype.truncScrollPosition = function(a) {
				a < this._sliderStartPos ? a = this._sliderStartPos : a + this._sliderSize > this._sliderStartPos + this._sliderPathSize && (a = this._sliderStartPos + this._sliderPathSize - this._sliderSize);
				return a
			};
			b.prototype.getSliderPosition =
				function() {
					var a = this._slider.attr("x"),
						b = this._slider.attr("y");
					return [a, b]
				};
			b.prototype.docVUpHandler = function(a) {
				this._selectedSlider && this.triggerScrollEvent(!1);
				this._selectedSlider = null
			};
			b.prototype.calculateSliderSize = function(a) {
				a *= this._pageSize / this._scrollSize;
				a < this._minSliderSize && (a = this._minSliderSize);
				return a
			};
			return b
		}(e.Panel),
		ea = function(d) {
			function b(a, b) {
				return d.call(this, a, b) || this
			}
			p(b, d);
			b.prototype.scrollHandler = function(a) {
				return e.jsLib.def(a) ? (this._scrollHandler = a, this._verticalScrollbar &&
					this._verticalScrollbar.scrollHandler(this._scrollHandler), this._horizontalScrollbar && this._horizontalScrollbar.scrollHandler(this._scrollHandler), null) : this._scrollHandler
			};
			b.prototype.addChild = function(a, b) {
				this._container || (this.createContainerPanel(), this._container.addChild(a, b));
				a.parent = this._container;
				a.notifyParentChanged();
				return !1
			};
			b.prototype.removeChild = function(a) {
				this._container.removeChild(a)
			};
			b.prototype.insertChild = function(a, b) {
				return this._container.insertChild(a, b)
			};
			b.prototype.val =
				function(a) {
					this.createContainerPanel();
					this._container.val(a);
					return this
				};
			b.prototype.applyPatch = function(a) {
				d.prototype.applyPatch.call(this, a);
				this.createRect();
				(e.jsLib.isUndefined(this._needHorizontal) || e.jsLib.isUndefined(this._needVertical)) && this.checkAddScroll();
				this.renderScrolls();
				this.createMask();
				this.attachEvents()
			};
			b.prototype.applyDestroy = function() {
				d.prototype.applyDestroy.call(this);
				this.detachEvents();
				this._rect.destroy()
			};
			b.prototype.checkAddScroll = function() {
				var a = this.hasHorizontalScroll(),
					b = this.hasVerticalScroll(),
					d = this.calculateNewHeight();
				d.needApply && this.attr({
					height: d.height
				});
				!this._horizontalScrollbar && a ? this._needHorizontal = !0 : this._horizontalScrollbar && !a && (this._needHorizontal = !1);
				!this._verticalScrollbar && b ? this._needVertical = !0 : this._verticalScrollbar && !b && (this._needVertical = !1);
				return d.needApply
			};
			b.prototype.increaseVerticalScrollPosition = function(a) {
				this._verticalScrollbar && this._verticalScrollbar.increaseScrollPosition(a)
			};
			b.prototype.increaseHorizontalScrollPosition =
				function(a) {
					this._horizontalScrollbar && this._horizontalScrollbar.increaseScrollPosition(a)
				};
			b.prototype.moveVerticalSliderToPosition = function(a) {
				this._verticalScrollbar && this._verticalScrollbar.moveSliderToPosition(0, a)
			};
			b.prototype.moveHorizontalSliderToPosition = function(a) {
				this._horizontalScrollbar && this._horizontalScrollbar.moveSliderToPosition(a, 0)
			};
			b.prototype.fillProperties = function(a) {
				a.scrollBarWidth && (this._scrollBarWidth = e.layoutLib.parseSize(a.scrollBarWidth), delete a.scrollBarWidth);
				a.frontPanel &&
					(this._frontPanel = a.frontPanel, delete a.frontPanel);
				a.padding && (this._padding = a.padding, delete a.padding);
				d.prototype.fillProperties.call(this, a)
			};
			b.prototype.getContentHeight = function() {
				return this._container.variant.minSize.height.px
			};
			b.prototype.getContentWidth = function() {
				return this._container.variant.minSize.width.px
			};
			b.prototype.createMask = function() {
				var a = this.getBbox(),
					b = a.width;
				a = a.height;
				var d = this.getContentWidth(),
					h = this.getContentHeight();
				b = {
					d: e.bboxLib.toPath([0, 0, b > d ? b : d, a > h ? a : h])
				};
				this._needVertical && !this._needHorizontal ? b.fill = this.createLinearGradient(!0) : this._needHorizontal && !this._needVertical ? b.fill = this.createLinearGradient(!1) : this._needHorizontal && this._needVertical && (b.fill = {
					radialGradient: {
						cx: .5,
						cy: .5,
						r: .9
					},
					stops: [
						[.5, "white"],
						[1, "black"]
					]
				});
				b.fill && this._container.attr({
					mask: b
				})
			};
			b.prototype.renderScrolls = function() {
				var a = this,
					b = a.getBbox(),
					d = b.width,
					e = b.height;
				b = !1;
				a._needHorizontal && !a._horizontalScrollbar ? (a._horizontalScrollbar = a.createScrollbar(!1, d, a.getContentWidth(),
					function(b) {
						b = -(a.getContentWidth() * b - d / 2);
						a._container.attr({
							offsetX: b
						});
						a._container.applyRefresh()
					}), a.addLayoutItemToMain(a._horizontalScrollbar), a._horizontalScrollbar.scrollHandler(a._scrollHandler), b = !0) : a._horizontalScrollbar && (a._horizontalScrollbar.destroy(), a._horizontalScrollbar = null, b = !0);
				a._needVertical && !a._verticalScrollbar ? (a._verticalScrollbar = a.createScrollbar(!0, e, a.getContentHeight(), function(b) {
						b = -(a.getContentHeight() * b - e / 2);
						a._container.attr({
							offsetY: b
						});
						a._container.applyRefresh()
					}),
					a.addLayoutItemToMain(a._verticalScrollbar), a._verticalScrollbar.scrollHandler(a._scrollHandler), b = !0) : a._verticalScrollbar && (a._verticalScrollbar.destroy(), a._verticalScrollbar = null, b = !0);
				b && a.refresh();
				a._horizontalScrollbar && a._horizontalScrollbar.hide();
				a._verticalScrollbar && a._verticalScrollbar.hide()
			};
			b.prototype.defaultConfig = function() {
				return e.jsLib.extendCopy(d.prototype.defaultConfig.call(this), {
					overflow: "hidden",
					padding: 10,
					scrollBarWidth: "6px"
				})
			};
			b.prototype.createLinearGradient = function(a) {
				return {
					linearGradient: [0,
						0, a ? 0 : 1, a ? 1 : 0
					],
					stops: [
						[0, "black"],
						[.05, "white"],
						[.95, "white"],
						[1, "black"]
					]
				}
			};
			b.prototype.createContainerPanel = function() {
				this._container || (this._container = this.layout.panel({
					width: "100%"
				}), this.addLayoutItemToMain(this._container))
			};
			b.prototype.createScrollbar = function(a, b, d, e) {
				this.createContainerPanel();
				var c = 0;
				if (a && this._needHorizontal || !a && this._needVertical) c = this._scrollBarWidth.px;
				a = new da(this.layout, {
					xAlignment: a ? "right" : "left",
					yAlignment: a ? "top" : "bottom",
					width: a ? this._scrollBarWidth.px : b - c,
					height: a ? b - c : this._scrollBarWidth.px,
					vertical: a,
					hasButtons: !1
				});
				a.pageSize = b;
				a.scrollSize = d;
				a.callback = e;
				return a
			};
			b.prototype.hasVerticalScroll = function() {
				var a = this.getBbox(),
					b = !1;
				this._frontPanel && (b = this._frontPanel.getBbox().height < a.height);
				return b || this.getContentHeight() > a.height
			};
			b.prototype.hasHorizontalScroll = function() {
				var a = this.getBbox(),
					b = !1;
				this._frontPanel && (b = this._frontPanel.getBbox().width < a.width);
				return b || this.getContentWidth() > a.width
			};
			b.prototype.calculateNewHeight = function() {
				var a =
					this.getGlobalBbox(),
					b = this._frontPanel ? this._frontPanel.getGlobalBbox() : null;
				if (!b) return {
					needApply: !1,
					height: a.height
				};
				b = e.bboxLib.clip([a.x, a.y, a.width, a.height], [b.x, b.y, b.width, b.height]);
				return b[3] !== a.height ? {
					needApply: !0,
					height: b[3] - this._padding
				} : {
					needApply: !1,
					height: b[3]
				}
			};
			b.prototype.addLayoutItemToMain = function(a, b) {
				this.childElements[b || "push"](a);
				this.itemsCount = this.childElements.length;
				a.parent = this;
				a.notifyParentChanged();
				a.wasAdded = !0;
				a.setRenewComplete(this.wasAdded)
			};
			b.prototype.showScrolls =
				function() {
					this._horizontalScrollbar && this._horizontalScrollbar.show();
					this._verticalScrollbar && this._verticalScrollbar.show()
				};
			b.prototype.hideScrolls = function() {
				this._horizontalScrollbar && this._horizontalScrollbar.hide();
				this._verticalScrollbar && this._verticalScrollbar.hide()
			};
			b.prototype.attachEvents = function() {
				this.attachWheelEvent();
				this.attachDocumentEvents()
			};
			b.prototype.getWheelDirection = function(a) {
				return Math.max(-1, Math.min(1, a.wheelDelta || -a.detail))
			};
			b.prototype.attachWheelEvent = function() {
				if (!e.isTouchDevice()) {
					var a =
						this;
					a.el.on("wheel", function(b) {
						var c = a.getWheelDirection(b),
							d = !1;
						b.shiftKey ? a._needHorizontal && (d = a._horizontalScrollbar.increaseScrollPosition(-c * a._horizontalScrollbar.sliderSize)) : a._needVertical && (d = a._verticalScrollbar.increaseScrollPosition(-c * a._verticalScrollbar.sliderSize));
						d && b.preventDefault()
					})
				}
			};
			b.prototype.sliderSelected = function() {
				return this._horizontalScrollbar && this._horizontalScrollbar.sliderSelected() || this._verticalScrollbar && this._verticalScrollbar.sliderSelected() ? !0 : !1
			};
			b.prototype.attachDocumentEvents = function() {
				var a = this,
					b = a.layout.renderer.documentElement,
					d = !1,
					h = null;
				e.isTouchDevice() && (a._docTouchstartHandler = function(b) {
					var c = b.changedTouches[0];
					a.isInPanelArea({
						clientX: c.clientX,
						clientY: c.clientY,
						pageX: c.pageX,
						pageY: c.pageY
					}) && b.preventDefault()
				}, b.el.addEventListener("touchstart", a._docTouchstartHandler, {
					passive: !1
				}));
				a._docVDownHandler = function(b) {
					var c = a.toRelativeXY(b);
					!a.isInPanelArea(b) || !e.isTouchDevice() || a._horizontalScrollbar && a._horizontalScrollbar.isInArea(b) ||
						a._verticalScrollbar && a._verticalScrollbar.isInArea(b) || (d = !0, h = c, b.preventDefault())
				};
				a._docVMoveHandler = function(b) {
					a.isInPanelArea(b) && !e.isTouchDevice() ? a.showScrolls() : a.sliderSelected() || a.hideScrolls();
					if (d) {
						b = a.toRelativeXY(b);
						if (a._horizontalScrollbar) {
							var c = h[0] - b[0];
							a._horizontalScrollbar.increaseScrollPosition(c)
						}
						a._verticalScrollbar && (c = h[1] - b[1], a._verticalScrollbar.increaseScrollPosition(c));
						h = b
					}
				};
				a._docVUpHandler = function() {
					d = !1
				};
				b.on("vdown", a._docVDownHandler);
				b.on("vmove", a._docVMoveHandler);
				b.on("vup", a._docVUpHandler)
			};
			b.prototype.isInPanelArea = function(a) {
				var b = this.toRelativeXY(a);
				a = b[0];
				b = b[1];
				var d = this.getBbox();
				return 0 > a || 0 > b || a > d.width || b > d.height ? !1 : !0
			};
			b.prototype.createRect = function() {
				var a = this.getBbox();
				this._rect = this.layout.rect({
					fill: "white",
					opacity: "0.0",
					width: a.width,
					height: a.height
				});
				this.addLayoutItemToMain(this._rect, "unshift")
			};
			b.prototype.detachEvents = function() {
				var a = this.layout.renderer.documentElement;
				a.un("vdown", this._docVDownHandler);
				a.un("vmove", this._docVMoveHandler);
				a.un("vup", this._docVUpHandler);
				this._docTouchstartHandler && a.el.removeEventListener("touchstart", this._docTouchstartHandler)
			};
			return b
		}(e.Panel),
		fa = e.jsLib.plainArray(["image/png", "image/jpeg", "application/pdf", "image/svg+xml"]),
		R = function(d) {
			function b() {
				var a = null !== d && d.apply(this, arguments) || this;
				a.defaults = function() {
					var b = {
							exportOptions: {
								server: null
							},
							items: {
								export: {
									position: "trtr",
									outline: {
										color: "none"
									},
									fill: "none",
									ignoreDefault: !0,
									padding: 0,
									margin: 1,
									autoSelectFirstItem: !0,
									normalStateOnItemSelect: !0,
									hoverOnEnter: !1,
									invertKeys: !0,
									description: "export menu",
									icon: {
										name: "system/{os}/export",
										width: 32,
										height: 32,
										padding: 8,
										fill: "rgb(90,90,90)",
										outerShape: "none"
									},
									events: {
										click: "showItems",
										changefocus: "changeFocus"
									},
									states: {
										hover: {
											fill: "none",
											icon: {
												outerShape: "circle"
											}
										},
										select: {
											icon: {
												outerShape: "circle"
											}
										}
									},
									defaultItem: {
										visible: !0,
										outline: {
											color: "none"
										},
										fill: "none",
										radius: 0,
										opacity: .7,
										margin: 0,
										padding: [10, 5],
										icon: {
											width: 32,
											height: 32,
											fill: "#FFFFFF"
										},
										states: {
											hover: {
												fill: "rgb(0,0,0)",
												opacity: .9
											}
										}
									},
									itemsBox: {
										layout: "horizontal",
										margin: [3, 0, 3, 0],
										fill: "rgba(0,0,0,.7)",
										outline: {
											color: "none"
										}
									},
									items: {
										png: {
											description: "png",
											icon: {
												name: "system/default/png"
											},
											events: {
												click: "image/png"
											}
										},
										jpg: {
											description: "jpg",
											icon: {
												name: "system/default/jpg"
											},
											events: {
												click: "image/jpeg"
											}
										},
										pdf: {
											description: "pdf",
											icon: {
												name: "system/default/pdf"
											},
											events: {
												click: "application/pdf"
											}
										},
										svg: {
											description: "svg",
											icon: {
												name: "system/default/svg"
											},
											events: {
												click: "image/svg+xml"
											}
										},
										print: {
											description: "print",
											icon: {
												name: "system/default/print"
											},
											events: {
												click: "print"
											}
										}
									}
								},
								resetZoom: {
									visible: !1,
									sortOrder: 3,
									zIndex: 2,
									margin: 10,
									position: "tltl",
									stackDirection: "none",
									ignoreDefault: !0,
									description: "reset zoom",
									fill: "rgb(250,250,250)",
									label: {
										text: "Reset Zoom",
										color: "rgb(0,0,0)"
									},
									icon: {
										name: "system/default/zoom/zoom-out",
										fill: "rgb(90,90,90)"
									},
									events: {
										click: "zoomOut"
									},
									states: {
										hover: {
											fill: "rgb(90,90,90)",
											label: {
												color: "#FFFFFF"
											},
											icon: {
												fill: "#FFFFFF"
											}
										}
									}
								}
							},
							defaultItem: {
								sortOrder: 2,
								margin: 2,
								position: "tltl",
								stackDirection: "auto",
								events: {
									click: "showItems"
								}
							}
						},
						d = a.chart.options("languageStrings");
					d && (e.jsLib.setPathVal(b, "items.export.tooltip", d.exportButtonTooltip), e.jsLib.setPathVal(b, "items.export.items.print.tooltip", d.printButtonTooltip), e.jsLib.setPathVal(b, "items.resetZoom.label.text", d.resetZoomText), e.jsLib.setPathVal(b, "items.resetZoom.tooltip", d.resetZoomTooltip));
					a._defaultApplied || (e.jsLib.evalPath(a, "chart.userOptions.toolbar.items.resetZoom.position") && e.jsLib.setPathVal(b, "items.resetZoom.stackDirection", "auto"), !1 === e.jsLib.evalPath(a, "chart.userOptions.toolbar.items.resetZoom.visible") &&
						e.jsLib.setPathVal(b, "items.resetZoom.exclude", !0));
					a._defaultApplied = !0;
					return b
				};
				a.normalizeToolbarOptions = E;
				return a
			}
			p(b, d);
			b.prototype.activateAccessibility = function(a, b) {
				var c = this;
				this._accessibilityActivated = a;
				var d = (this._accessibilityTabIndex = b) || 0,
					e = ["export", "resetZoom"],
					l = [];
				this.items().each(function(a) {
					a.activateAccessibility(!1)
				});
				a && (this.items().each(function(b) {
					b.parentItem === c && (0 <= e.indexOf(b.key) ? l.push(b) : (b.activateAccessibility(a, d), ++d))
				}), l.forEach(function(b) {
					b.activateAccessibility(a,
						d);
					++d
				}))
			};
			b.prototype.reactivateAccessibility = function() {
				this.activateAccessibility(this._accessibilityActivated, this._accessibilityTabIndex)
			};
			b.prototype.defaultOptions = function() {
				var a = this.userOptions,
					b = this.defaults();
				a.position && e.jsLib.setPathVal(b, "items.export.position", a.position);
				b.actions = this.getEventActions();
				return b
			};
			b.prototype.setRootVisuals = function() {
				return this
			};
			b.prototype.initFP = function() {
				this.isVisible = !0;
				d.prototype.initFP.call(this);
				this.chart.uiItems = this.items
			};
			b.prototype.options =
				function(a, b) {
					if (!this._enabled && a && !1 === a.visible) {
						var c = this.chart.currentOptions.axisToZoom;
						if (c && "none" !== c) a.items["export"].visible = !1, delete a.visible;
						else return this
					}!1 === e.jsLib.evalPath(a, "items.export.visible") && (a.items["export"].exclude = !0);
					this._enabled = !0;
					E(a);
					return d.prototype.options.call(this, a, b)
				};
			b.prototype.changeFocus = function(a, b, d) {
				d.eventArgs.hasFocus && this.showItems(!0)
			};
			b.prototype.applyOptions = function(a) {
				void 0 === a && (a = {});
				var b = this,
					d = this.currentOptions.items,
					h = b.currentOptions.defaultItem,
					g = b._items;
				a = function() {
					b.checkVisibility(b.currentOptions);
					return b
				};
				if (!d) return a();
				if (!g.length) return b.createUiItems(d, !0), a();
				e.jsLib.eachKey(d, function(a) {
					var b = e.jsLib.merge({}, h, d[a]),
						c = e.jsLib.find(g, function(b) {
							return b.key === a
						});
					c && c.options(b)
				});
				return a()
			};
			b.prototype.showItems = function(a) {
				var b = this.items().items;
				e.jsLib.each(b, function(b) {
					b.showItems(a, !0)
				})
			};
			b.prototype.visible = function(a) {
				var b = this._items,
					d = !0 === a,
					h = this._visibleState = d ? this._visibleState || {} : {};
				e.jsLib.each(b,
					function(a) {
						d || (h[a.key] = a.isVisible);
						a.options({
							visible: d ? h[a.key] : !1
						})
					});
				this.isVisible = a;
				return this
			};
			b.prototype.getEventActions = function() {
				var a = this,
					b = this,
					d = {
						print: function() {
							return b.print()
						},
						zoomOut: function() {
							return b.doZoomOut()
						},
						changeFocus: function(a, c, d) {
							return b.changeFocus(a, c, d)
						}
					};
				e.jsLib.eachKey(fa, function(b) {
					d[b] = function() {
						return a.export(b)
					}
				});
				return d
			};
			b.prototype.export = function(a) {
				this.showItems(!1);
				this.chart.exportImage({
					server: this.currentOptions.exportOptions.server,
					imageType: a
				})
			};
			b.prototype.print = function() {
				this.showItems(!1);
				this.chart.print()
			};
			b.prototype.zoomInOut = function(a) {
				var b = this._items;
				b && (b = e.jsLib.find(b, function(a) {
					return "resetZoom" === a.key
				})) && this.isVisible && (b.options({
					visible: a
				}, {
					skipReflow: !0
				}), b.select(!1))
			};
			b.prototype.doZoomOut = function() {
				var a = e.jsLib.find(this._items, function(a) {
					return "resetZoom" === a.key
				});
				a && (a.options({
					visible: !1
				}, {
					skipReflow: !0
				}), a.select(!1), a.hover(!1), this.chart.chartAreas(0).resetZoom())
			};
			return b
		}(t);
	e.iconsStore.registerIcons({
		"system/android/export": "M5.2 12.3h5.7V6.6h3.7L8 0 1.4 6.6h3.7l.1 5.7zM0 14.1h16V16H0v-1.9z",
		"system/default/add": "M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z",
		"system/default/check": "M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z",
		"system/default/checkbox-blank": "M38 10v28H10V10h28m0-4H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z",
		"system/default/checkbox": "M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM20 34L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z",
		"system/default/close": "M8.8 8L15.9.9c.2-.2.2-.6 0-.8-.2-.2-.6-.2-.8 0L8 7.2.9.2C.7 0 .3 0 .1.2S-.1.8.1 1l7.1 7-7.1 7.1c-.2.2-.2.6 0 .8.2.2.6.2.8 0L8 8.8l7.1 7.1c.2.2.6.2.8 0 .2-.2.2-.6 0-.8L8.8 8z",
		"system/default/expand-less": "M24 16L12 28l2.83 2.83L24 21.66l9.17 9.17L36 28z",
		"system/default/expand-more": "M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z",
		"system/default/export": "M15 12c-.6 0-1 .4-1 1v1H2v-1c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zM5.2 5.2L7 3.4V11c0 .6.4 1 1 1s1-.4 1-1V3.4l1.8 1.8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L8.7.3C8.6.2 8.5.1 8.4.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2L3.8 3.8c-.4.4-.4 1 0 1.4.3.4 1 .4 1.4 0z",
		"system/default/info": "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z",
		"system/default/jpg": "M12.4 14.8c.2-.2.2-.4.2-.6 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3h-1.1V15h1c.4 0 .5 0 .8-.2zm9.3-8.1L15.3.3c-.2-.2-.4-.3-.7-.3H3c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.4c0-.3-.1-.5-.3-.7zM15 1.4L20.6 7H15V1.4zM21 23H3v-3h18v3zM4.6 16.3h1.2c0 .3.1.5.2.6.1.1.3.2.6.2.2 0 .4-.1.5-.2.1-.1.2-.4.2-.7v-3.9h1.2v3.9c0 .4-.1.7-.2.9-.2.2-.2.4-.7.6-.3.2-.6.3-1 .3-.6 0-1.1-.2-1.4-.5s-.6-.6-.6-1.2zM9.4 18v-5.7h2.2c.4 0 .8.1 1.1.2s.6.4.7.7c.1.2.3.6.3 1 0 .6-.2 1-.6 1.3-.4.3-.9.5-1.6.5h-1v2H9.4zm6.6-1.3c.2.3.6.5 1 .5s.8-.1.9-.3v-1h-1.1V15H19v2.3c-.2.3-.5.4-.9.6-.4.2-.8.2-1.3.2s-.9-.1-1.3-.3-.7-.5-.9-.9c-.2-.4-.3-.9-.3-1.4V15c0-.6.1-1.1.3-1.5.2-.4.4-.7.8-.9.4-.3.8-.4 1.3-.4.7 0 1.2.2 1.6.5.4.3.6.8.7 1.4h-1c-.1-.3-.2-.5-.3-.6-.1-.1-.4-.3-.7-.3-.4 0-.7.1-.9.4-.2.3-.3.7-.3 1.3v.4c0 .3 0 1.1.2 1.4zm5-6.7H3V1h11v6c0 .6.4 1 1 1h6v2z",
		"system/default/pause": "M12 38h8V10h-8v28zm16-28v28h8V10h-8z",
		"system/default/pdf": "M8.8 13.9c0-1.1-1.8-.8-1.8-.8v1.6s1.8.3 1.8-.8zm4.5.7c0-.5-.1-.9-.3-1.2-.2-.3-.5-.4-.9-.4h-.5v3.3h.4c.4 0 .7-.1.9-.4.2-.3.4-.6.4-1.1v-.2zm8.4-7.9L15.3.3c-.2-.2-.4-.3-.7-.3H3c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.4c0-.3-.1-.5-.3-.7zM15 1.4L20.6 7H15V1.4zM21 23H3v-3h18v3zM6 17.4v-5.1h1.9c.4 0 .7.1 1 .2.3.1.5.3.7.6.2.3.2.5.2.9 0 .5-.2.9-.5 1.2s-.8.4-1.4.4H7v1.8H6zm4.5-.3v-4.8H12c.4 0 .8.1 1.2.3.3.2.6.5.8.8.2.3.3.8.3 1.2v.2c0 .5-.1.9-.3 1.2-.2.4-.5.6-.8.8s-.7.3-1.2.3h-1.5zm7.6-2.8v.9h-2v2h-1v-5h3.2v.8h-2.2v1.3h2zM21 10H3V1h11v6c0 .6.4 1 1 1h6v2z",
		"system/default/play": "M16 10v28l22-14z",
		"system/default/png": "M7.9 14.5c.1-.1.2-.3.2-.5s0-.4-.2-.6c-.1-.2-.4-.2-.6-.2h-.9v1.6h.9c.2 0 .4-.1.6-.3zm13.8-7.8L15.3.3c-.2-.2-.4-.3-.7-.3H3c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.4c0-.3-.1-.5-.3-.7zM15 1.4L20.6 7H15V1.4zM21 23H3v-3h18v3zM5.3 12.3h1.9c.4 0 .7.1 1 .2.3.1.5.3.7.6s.2.5.2.9c0 .5-.2.9-.5 1.2s-.8.4-1.4.4h-.8v1.8H5.3v-5.1zm4.5 5v-5h1l2 3.3v-3.3h1v5h-1l-2-3.3v3.3h-1zm6.2-1.2c.3.3.5.4.9.4s.7-.1.8-.2v-.9h-.9v-.8h2v2c-.2.2-.4.4-.8.5-.3.1-.7.2-1.1.2s-.8-.1-1.1-.3c-.3-.2-.6-.5-.8-.8-.1-.3-.3-.8-.3-1.3v-.3c0-.5.1-.9.3-1.3.2-.4.4-.6.7-.8s.7-.3 1.1-.3c.6 0 1.1.1 1.4.4.3.3.5.7.6 1.2h-1c0-.3-.1-.5-.3-.6-.2-.1-.4-.2-.6-.2-.3 0-.6.1-.8.4-.2.3-.3.7-.3 1.2v.3c0 .6 0 .9.2 1.2zm5-6.1H3V1h11v6c0 .6.4 1 1 1h6v2z",
		"system/default/print": "M23.3 4.5h-1.9V.8c0-.5-.4-.8-.8-.8H3.4c-.4 0-.8.3-.8.8v3.8H.8c-.5-.1-.8.2-.8.7v13.5c0 .4.3.8.8.8h1.9v3.8c-.1.3.3.6.7.6h17.3c.4 0 .8-.3.8-.8v-3.8h1.9c.4 0 .8-.3.8-.8V5.3c-.2-.5-.5-.8-.9-.8zM3.8 1.1h16.5v3.4H3.8V1.1zm16.5 21.8H3.8V12h16.5v10.9zM21.2 9c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3S21.9 9 21.2 9zm-2.1 4.1H4.9v1.5h14.3v-1.5zm0 3H4.9v1.5h14.3v-1.5zm-5.2 3h-9v1.5h9v-1.5z",
		"system/default/radio-button-blank": "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
		"system/default/radio-button": "M24 14c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
		"system/default/remove": "M38 26H10v-4h28v4z",
		"system/default/settings": "M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
		"system/default/svg": "M21.7 6.7L15.3.3c-.2-.2-.4-.3-.7-.3H3c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V7.4c0-.3-.1-.5-.3-.7zM15 1.4L20.6 7H15V1.4zM21 23H3v-3h18v3zM8 15.5c-.1-.1-.4-.2-.7-.3s-.6-.2-.8-.3c-.6-.3-.8-.7-.8-1.2 0-.3.1-.5.2-.7.2-.2.4-.4.7-.5.3-.1.6-.2 1-.2s.7.1 1 .2c.3.1.5.3.6.5.2.2.2.5.2.8h-1c0-.2-.1-.4-.2-.5-.3-.2-.5-.3-.8-.3-.3 0-.4.1-.6.2-.1.1-.2.2-.2.4s.1.3.2.4c.2.1.4.2.7.3.6.2 1 .4 1.3.7s.4.6.4 1-.2.8-.5 1-.7.3-1.3.3c-.4 0-.7-.1-1-.2s-.5-.3-.7-.6c-.1-.2-.2-.5-.2-.8h1c0 .5.3.8 1 .8.2 0 .4 0 .6-.1.1-.1.2-.2.2-.4s-.1-.4-.3-.5zm1.5-3.2h1.1l1.1 3.7 1.1-3.7h1.1l-1.7 5h-1.1l-1.6-5zm6.2 3.8c.2.3.5.4.9.4s.7-.1.8-.2v-.9h-.9v-.8h2v2c-.2.2-.4.4-.8.5-.3.1-.7.2-1.1.2s-.8-.1-1.1-.3c-.3-.2-.6-.5-.8-.8s-.3-.8-.3-1.3v-.3c0-.5.1-.9.3-1.3.2-.4.4-.6.7-.8s.7-.3 1.1-.3c.6 0 1.1.1 1.4.4.3.3.5.7.6 1.2h-1c0-.3-.1-.5-.3-.6-.2-.1-.5-.2-.7-.2-.3 0-.6.1-.8.4-.2.3-.3.7-.3 1.2v.3c0 .5.1.9.3 1.2zM21 10H3V1h11v6c0 .6.4 1 1 1h6v2z",
		"system/default/toggle-off": "M47 15H17C7.6 15 0 22.6 0 32s7.6 17 17 17h30c9.4 0 17-7.6 17-17s-7.6-17-17-17zM17 45C9.8 45 4 39.2 4 32s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z",
		"system/default/toggle-on": "M47 15H17C7.6 15 0 22.6 0 32s7.6 17 17 17h30c9.4 0 17-7.6 17-17s-7.6-17-17-17zm0 30c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z",
		"system/default/zoom/arrow-down": "M14.8 6.8H10V1c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5.8H1.2C.1 6.8-.4 8.1.3 8.9l6.8 6.8c.5.5 1.2.5 1.7 0l6.8-6.8c.8-.8.3-2.1-.8-2.1z",
		"system/default/zoom/arrow-left": "M9.2 14.8V10H15c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9.2V1.2C9.2.1 7.9-.4 7.1.3L.4 7.1c-.5.5-.5 1.2 0 1.7l6.8 6.8c.7.8 2 .3 2-.8z",
		"system/default/zoom/arrow-right": "M6.8 1.2V6H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h5.8v4.8c0 1.1 1.3 1.6 2.1.9l6.8-6.8c.5-.5.5-1.2 0-1.7L8.9.4c-.8-.8-2.1-.3-2.1.8z",
		"system/default/zoom/arrow-up": "M1.2 9.2H6V15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V9.2h4.8c1.1 0 1.6-1.3.9-2.1L8.9.4c-.5-.5-1.2-.5-1.7 0L.4 7.1c-.8.8-.3 2.1.8 2.1z",
		"system/default/zoom/zoom-out": "M19.1 15.6c.5.5 1.2.5 1.7 0l6.8-6.8c.8-.8.2-2.1-.9-2.1H22V1c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v5.8h-4.8c-1.1 0-1.6 1.3-.9 2.1l6.8 6.7zm-3.5 3.5l-6.8-6.8c-.8-.8-2.1-.2-2.1.9V18H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h5.8v4.8c0 1.1 1.3 1.6 2.1.9l6.8-6.8c.4-.5.4-1.3-.1-1.8zM39 18h-5.8v-4.8c0-1.1-1.3-1.6-2.1-.9l-6.8 6.8c-.5.5-.5 1.2 0 1.7l6.8 6.8c.8.8 2.1.2 2.1-.9V22H39c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm-18.1 6.4c-.5-.5-1.2-.5-1.7 0l-6.8 6.8c-.8.8-.2 2.1.9 2.1H18V39c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-5.8h4.8c1.1 0 1.6-1.3.9-2.1l-6.8-6.7z",
		"system/ios/export": "M10.5 4c-.3 0-.5.2-.5.5s.2.5.5.5H13v10H3V5h2.5c.3 0 .5-.2.5-.5S5.8 4 5.5 4H2v12h12V4h-3.5zM6.2 3l1.3-1.3v8.8c0 .3.2.5.5.5s.5-.2.5-.5V1.7L9.8 3c.2.2.5.2.7 0 .2-.2.2-.5 0-.7L8.4.1S8.3 0 8.2 0h-.4c-.1 0-.1.1-.2.1L5.5 2.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0z",
		"system/winphone/export": "M14 12v2H2v-2H0v4h16v-4h-2zm-7 0h2V3.8l2.6 2.6V3.6L8 0 4.4 3.6v2.8L7 3.8V12z"
	}, !1);
	e.registerPanel("checkbox", x);
	e.registerPanel("toggle", G);
	e.registerPanel("button", u);
	e.registerPanel("radio", H);
	e.registerPanel("option",
		v);
	e.registerPanel("input", y);
	e.registerPanel("file", aa);
	e.registerPanel("color", A);
	e.registerPanel("range", ca);
	e.registerPanel("scroll", ea);
	e.moduleLoader.registerModule("modules/toolbar") && P()
})(JSC.internal._modules.toolbar.export);