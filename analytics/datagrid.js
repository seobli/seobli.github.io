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
	function K(a, c) {
		function b() {
			this.constructor = a
		}
		w(a, c);
		a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
	}

	function L(a, c) {
		var b = "function" === typeof Symbol && a[Symbol.iterator];
		if (!b) return a;
		a = b.call(a);
		var d, f = [];
		try {
			for (;
				(void 0 === c || 0 < c--) && !(d = a.next()).done;) f.push(d.value)
		} catch (k) {
			var g = {
				error: k
			}
		} finally {
			try {
				d && !d.done && (b = a["return"]) && b.call(a)
			} finally {
				if (g) throw g.error;
			}
		}
		return f
	}

	function C() {
		for (var a = [], c = 0; c < arguments.length; c++) a = a.concat(L(arguments[c]));
		return a
	}

	function D(a, c, b) {
		return c.addEventListener ? c.addEventListener(a, b, !1) : c.attachEvent("on" + a, b)
	}

	function E(a, c, b) {
		return c.removeEventListener ? c.removeEventListener(a, b, !1) : c.detachEvent("on" + a, b)
	}

	function x(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function v(a, c) {
		return window.getComputedStyle ? window.getComputedStyle(c)[a] : c.currentStyle[a]
	}

	function M(a) {
		a.isRendered && a._callback && (a._callback(), delete a._callback)
	}

	function N(a, c, b) {
		if (a.pop) {
			var d = {};
			e.jsLib.each(a,
				function(b, a) {
					d[a] = b
				});
			a = d
		}
		return e.tokenLib.parseGridTokens(c, a, {
			cultureName: b
		})
	}

	function O(a, c, b) {
		void 0 === b && (b = {});
		if ("object" === typeof c && (!c.kind || "DataGrid" !== c.kind)) {
			var d = u.find(c);
			d && d.destroy()
		}
		var f;
		d = e.jsLib.getValType(c);
		var g;
		"string" === d ? f = document.getElementById(c) : "object" === d && (c instanceof Element ? f = c : "DataGrid" === c.kind && (g = c));
		!g && f ? (c = u.find(f)) && c.element === f ? (g = c, g.options(b)) : (c && c.destroy(), g = new F(f, b)) : g && g.options(b);
		f = g;
		f.chart = a;
		f.setDataFromChart(!0 === a.isRendered);
		return f
	}

	function P(a, c) {
		var b = a.currentOptions,
			d = a._colDefs,
			f = G(a),
			g = a.data,
			k = function(c, f, k, m) {
				var l = d[c],
					p = "string" === typeof l ? l : l ? l.value : void 0,
					t = e.jsLib.getValType(p),
					n = e.jsLib.isString(k) && ~k.indexOf("%"),
					r = k,
					q = "" === r;
				if ("function" === t) r = l.value(k, c, f, g) + "";
				else if ("string" === t || n) "function" === typeof m.replaceTokens ? r = m.replaceTokens(p) : n ? r = e.tokenLib.parseObjectTokens(k, Q(k, e.jsLib.map(a.column(c), function(b) {
					return parseFloat(b) || 0
				}))) : q || (c = -1 < p.indexOf("%"), k = b.summaryRow && g.length - 1 ===
					f, c && !k && (r = N(g[f], p, b.cultureName)));
				return h(r, l || {})
			},
			h = function(a, c) {
				return "number" === typeof a ? "date" === c.type ? e.jsLib.isNaN(e.timeLib.toDateNum(a)) ? "#INV" : e.formatting.formatString(e.timeLib.toDate(a), "d", b.cultureName) : e.formatting.formatString(a, "n" + e.mathLib.decimalPlaces(a), b.cultureName) : "undefined" !== a && e.jsLib.def(a) ? a + "" : ""
			},
			m = g[c],
			q = [],
			n = e.jsLib.getValType(m),
			l = "function" === typeof m.replaceTokens;
		n = l || "object" !== n ? void 0 : Object.keys(m);
		for (var p = 0; p < f; p++) q[p] = k(p, c, l ? "" : n ? m[n[p]] : m[p],
			m);
		return q
	}

	function R(a) {
		var c = a.currentOptions,
			b = a._colDefs,
			d = c.header,
			f = c.headerRow;
		c = b.length;
		var g = [];
		if (f) {
			if (!d) var k = (a = (a = a.data) && a[0]) && "object" === typeof a && !a.pop && "Point" !== a.kind && Object.keys(a);
			a = b.length ? Math.max.apply(Math, C(b.map(function(b) {
				return e.jsLib.evalPath(b.header, "pop") ? b.header.length : b.header ? 1 : 0
			}))) : 0;
			e.jsLib.times(Math.max(a, d ? 1 : 0, f ? 1 : 0), function(b) {
				return g[b] = []
			});
			f = function(a) {
				var c = e.jsLib.evalPath(b[a], "header") || e.jsLib.evalPath(d, a + "") || e.jsLib.evalPath(k, a +
					"") || S(a);
				c && (c.pop ? e.jsLib.each(c, function(b, c) {
					return g[c][a] = b
				}) : g[0].push(c || ""))
			};
			for (a = 0; a < c; a++) f(a)
		}
		return g
	}

	function G(a) {
		var c = a.userOptions.columns;
		a = a.data;
		var b = function(b) {
			if ("function" === typeof b.pop) return b.length;
			if ("object" === typeof b) return Object.keys(b).length
		};
		return c && c.length ? c.length : a && Math.max.apply(Math, C(a.map(b))) || 0
	}

	function S(a) {
		for (var c = a + 1, b = ""; 0 < c;) a = (c - 1) % 26, b = String.fromCharCode(65 + a) + b, c = Math.floor((c - a) / 26);
		return b
	}

	function T(a, c) {
		if (!document.getElementById("datagridStyles")) {
			var b =
				document.createElement("link");
			b.setAttribute("rel", "stylesheet");
			b.setAttribute("type", "text/css");
			b.setAttribute("href", c);
			b.setAttribute("id", "datagridStyles");
			b.onload = a;
			a = document.head.getElementsByTagName("link");
			a.length ? document.head.insertBefore(b, a[0]) : document.head.appendChild(b)
		}
	}

	function U(a, c) {
		var b = "";
		e.jsLib.map(c, function(a) {
			b += '"' + a.join('","') + '"\n'
		});
		a = V(a);
		var d = new Blob(["\ufeff" + function(b) {
			var a = document.createElement("div");
			a.innerHTML = b;
			return a.innerText
		}(b)], {
			type: "text/csv;charset=utf-8;"
		});
		navigator.msSaveBlob ? navigator.msSaveBlob(d, a) : (c = document.createElement("a"), void 0 !== c.download && (d = URL.createObjectURL(d), c.setAttribute("href", d), c.setAttribute("download", a), c.style.visibility = "hidden", document.body.appendChild(c), c.click(), document.body.removeChild(c)))
	}

	function V(a, c) {
		void 0 === c && (c = "csv");
		var b;
		if (a && (b = a.length)) {
			var d = a.indexOf("."),
				f = a.lastIndexOf(".");
			if (!(0 < d && f < b - 1)) return a + (f === b - 1 ? "" : ".") + c
		}
		return a
	}

	function W(a, c, b) {
		var d = a.renderer.renderer;
		c = e.jsLib.isString(c) ?
			e.platform.doc.getElementById(c) : c;
		var f = d.element("div", {
				className: "chartGridSwitch"
			}),
			g = d.element("button", {
				className: "chartButton",
				innerHTML: b.buttonText("chart") || "Chart"
			}).add(f),
			k = d.element("button", {
				className: "gridButton",
				innerHTML: b.buttonText("grid") || "Grid"
			}).add(f),
			h = b.wrapper,
			m = a.renderer.renderer.wrapper,
			q = a.renderer.renderer.root,
			n = a.renderer.renderer.container;
		c.insertBefore(f.el, c.childNodes[0]);
		"100%" === m.attr("height") && m.attr({
			height: "calc(100% - " + f.getBbox().height + "px)"
		});
		"100%" ===
		h.attr("height") && h.attr({
			height: "calc(100% - " + f.getBbox().height + "px)"
		});
		h.attr({
			display: "none"
		});
		k.on("click", function() {
			"100%" !== q.attr("height") || n.attr("height") || q.attr({
				height: "350px"
			});
			m.attr({
				display: "none"
			});
			h.attr({
				display: "block"
			});
			g.attr({
				backgroundColor: "#f5f5f5"
			});
			k.attr({
				backgroundColor: "#d5d5d5"
			})
		});
		g.on("click", function() {
			m.attr({
				display: "block"
			});
			h.attr({
				display: "none"
			});
			g.attr({
				backgroundColor: "#d5d5d5"
			});
			k.attr({
				backgroundColor: "#f5f5f5"
			})
		});
		f.buttons = {
			chart: g,
			grid: k
		};
		return f
	}

	function Q(a, c) {
		a = a.match(X);
		var b = {};
		if (!a) return b;
		a.forEach(function(a) {
			b[a.slice(1)] = e.dataUtil.calculations(c, a.slice(1)) || a
		});
		return b
	}
	var w = function(a, c) {
			w = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(b, a) {
				b.__proto__ = a
			} || function(b, a) {
				for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
			};
			return w(a, c)
		},
		I = function() {
			for (var a = 3, c = document.createElement("b"), b = c.all || []; c.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i><![endif]--\x3e", b[0];);
			return 4 < a ? a : document.documentMode
		},
		z = function(a) {
			var c =
				navigator.platform.toLowerCase().indexOf("mac") + 1,
				b = this,
				d = {
					rows_in_block: 50,
					blocks_in_cluster: 4,
					tag: null,
					show_no_data_row: !0,
					no_data_class: "clusterize-no-data",
					no_data_text: "No data",
					keep_parity: !0,
					callbacks: {}
				};
			b.options = {};
			for (var f = "rows_in_block blocks_in_cluster show_no_data_row no_data_class no_data_text keep_parity tag callbacks".split(" "), g = 0, e; e = f[g]; g++) b.options[e] = "undefined" != typeof a[e] && null != a[e] ? a[e] : d[e];
			d = ["scroll", "content"];
			for (g = 0; f = d[g]; g++)
				if (b[f + "_elem"] = a[f + "Id"] ? document.getElementById(a[f +
						"Id"]) : a[f + "Elem"], !b[f + "_elem"]) throw Error("Error! Could not find " + f + " element");
			b.content_elem.hasAttribute("tabindex") || b.content_elem.setAttribute("tabindex", 0);
			var h = x(a.rows) ? a.rows : b.fetchMarkup(),
				m = {};
			a = b.scroll_elem.scrollTop;
			b.insertToDOM(h, m);
			b.scroll_elem.scrollTop = a;
			var q = !1,
				n = 0,
				l = !1,
				p = function() {
					c && (l || (b.content_elem.style.pointerEvents = "none"), l = !0, clearTimeout(n), n = setTimeout(function() {
						b.content_elem.style.pointerEvents = "auto";
						l = !1
					}, 50));
					q != (q = b.getClusterNum()) && b.insertToDOM(h,
						m);
					b.options.callbacks.scrollingProgress && b.options.callbacks.scrollingProgress(b.getScrollProgress())
				},
				r = 0,
				H = function() {
					clearTimeout(r);
					r = setTimeout(b.refresh, 100)
				};
			D("scroll", b.scroll_elem, p);
			D("resize", window, H);
			b.destroy = function(a) {
				E("scroll", b.scroll_elem, p);
				E("resize", window, H);
				b.html((a ? b.generateEmptyRow() : h).join(""))
			};
			b.refresh = function(a) {
				(b.getRowsHeight(h) || a) && b.update(h)
			};
			b.update = function(a) {
				h = x(a) ? a : [];
				a = b.scroll_elem.scrollTop;
				h.length * b.options.item_height < a && (q = b.scroll_elem.scrollTop =
					0);
				b.insertToDOM(h, m);
				b.scroll_elem.scrollTop = a
			};
			b.clear = function() {
				b.update([])
			};
			b.getRowsAmount = function() {
				return h.length
			};
			b.getScrollProgress = function() {
				return this.options.scroll_top / (h.length * this.options.item_height) * 100 || 0
			};
			var y = function(a, c) {
				c = x(c) ? c : [];
				c.length && (h = "append" == a ? h.concat(c) : c.concat(h), b.insertToDOM(h, m))
			};
			b.append = function(b) {
				y("append", b)
			};
			b.prepend = function(b) {
				y("prepend", b)
			}
		};
	z.prototype = {
		constructor: z,
		fetchMarkup: function() {
			for (var a = [], c = this.getChildNodes(this.content_elem); c.length;) a.push(c.shift().outerHTML);
			return a
		},
		exploreEnvironment: function(a, c) {
			var b = this.options,
				d = I();
			b.content_tag = this.content_elem.tagName.toLowerCase();
			a.length && (d && 9 >= d && !b.tag && (b.tag = a[0].match(/<([^>\s/]*)/)[1].toLowerCase()), 1 >= this.content_elem.children.length && (c.data = this.html(a[0] + a[0] + a[0])), b.tag || (b.tag = this.content_elem.children[0].tagName.toLowerCase()), this.getRowsHeight(a))
		},
		getRowsHeight: function(a) {
			var c = this.options,
				b = c.item_height;
			c.cluster_height = 0;
			if (a.length && (a = this.content_elem.children, a.length)) {
				var d =
					a[Math.floor(a.length / 2)];
				c.item_height = d.offsetHeight;
				"tr" == c.tag && "collapse" != v("borderCollapse", this.content_elem) && (c.item_height += parseInt(v("borderSpacing", this.content_elem), 10) || 0);
				"tr" != c.tag && (a = parseInt(v("marginTop", d), 10) || 0, d = parseInt(v("marginBottom", d), 10) || 0, c.item_height += Math.max(a, d));
				c.block_height = c.item_height * c.rows_in_block;
				c.rows_in_cluster = c.blocks_in_cluster * c.rows_in_block;
				c.cluster_height = c.blocks_in_cluster * c.block_height;
				return b != c.item_height
			}
		},
		getClusterNum: function() {
			this.options.scroll_top =
				this.scroll_elem.scrollTop;
			return Math.floor(this.options.scroll_top / (this.options.cluster_height - this.options.block_height)) || 0
		},
		generateEmptyRow: function() {
			var a = this.options;
			if (!a.tag || !a.show_no_data_row) return [];
			var c = document.createElement(a.tag),
				b = document.createTextNode(a.no_data_text);
			c.className = a.no_data_class;
			if ("tr" == a.tag) {
				var d = document.createElement("td");
				d.colSpan = 100;
				d.appendChild(b)
			}
			c.appendChild(d || b);
			return [c.outerHTML]
		},
		generate: function(a, c) {
			var b = this.options,
				d = a.length;
			if (d <
				b.rows_in_block) return {
				top_offset: 0,
				bottom_offset: 0,
				rows_above: 0,
				rows: d ? a : this.generateEmptyRow()
			};
			var f = Math.max((b.rows_in_cluster - b.rows_in_block) * c, 0);
			c = f + b.rows_in_cluster;
			var g = Math.max(f * b.item_height, 0);
			b = Math.max((d - c) * b.item_height, 0);
			d = [];
			var e = f;
			for (1 > g && e++; f < c; f++) a[f] && d.push(a[f]);
			return {
				top_offset: g,
				bottom_offset: b,
				rows_above: e,
				rows: d
			}
		},
		renderExtraTag: function(a, c) {
			var b = document.createElement(this.options.tag);
			b.className = ["clusterize-extra-row", "clusterize-" + a].join(" ");
			c && (b.style.height =
				c + "px");
			return b.outerHTML
		},
		insertToDOM: function(a, c) {
			this.options.cluster_height || this.exploreEnvironment(a, c);
			a = this.generate(a, this.getClusterNum());
			var b = a.rows.join(""),
				d = this.checkChanges("data", b, c),
				f = this.checkChanges("top", a.top_offset, c);
			c = this.checkChanges("bottom", a.bottom_offset, c);
			var g = this.options.callbacks,
				e = [];
			d || f ? (a.top_offset && (this.options.keep_parity && e.push(this.renderExtraTag("keep-parity")), e.push(this.renderExtraTag("top-space", a.top_offset))), e.push(b), a.bottom_offset &&
				e.push(this.renderExtraTag("bottom-space", a.bottom_offset)), g.clusterWillChange && g.clusterWillChange(), this.html(e.join("")), "ol" == this.options.content_tag && this.content_elem.setAttribute("start", a.rows_above), this.content_elem.style["counter-increment"] = "clusterize-counter " + (a.rows_above - 1), g.clusterChanged && g.clusterChanged()) : c && (this.content_elem.lastChild.style.height = a.bottom_offset + "px")
		},
		html: function(a) {
			var c = this.content_elem,
				b = I();
			if (b && 9 >= b && "tr" == this.options.tag) {
				b = document.createElement("div");
				for (b.innerHTML = "<table><tbody>" + a + "</tbody></table>"; a = c.lastChild;) c.removeChild(a);
				for (a = this.getChildNodes(b.firstChild.firstChild); a.length;) c.appendChild(a.shift())
			} else c.innerHTML = a
		},
		getChildNodes: function(a) {
			a = a.children;
			for (var c = [], b = 0, d = a.length; b < d; b++) c.push(a[b]);
			return c
		},
		checkChanges: function(a, c, b) {
			var d = c != b[a];
			b[a] = c;
			return d
		}
	};
	var Y = {
			date: "left",
			number: "right",
			string: "left"
		},
		X = /%[a-z]+/g,
		u = new(function() {
			function a() {
				this.byID = {}
			}
			a.prototype.add = function(a, b) {
				b && (this.byID[b.id] =
					a)
			};
			a.prototype.remove = function(a) {
				a.element && delete this.byID[a.element.id]
			};
			a.prototype.find = function(a) {
				if (a) return this.byID[a.id]
			};
			return a
		}()),
		F = function(a) {
			function c(b, c, f) {
				var d = a.call(this, null, c) || this;
				d.element = b;
				d.kind = "DataGrid";
				d.rowsStrings = [];
				d.tableWrapperId = e.generateIdRandom("tableWrapper_");
				d.tableBodyId = e.generateIdRandom("tableBody_");
				d.scrollHandler = function(b) {
					d.scroll(b)
				};
				var k = c || {};
				e.jsLib.isString(b) && (d.element = document.getElementById(b), d.element || e.emitter.emit("error",
					b, "targetElIdNotFound", {
						data: [b]
					}));
				d.register();
				d.initFP();
				d.data = c ? d.dataRows(c) : [];
				d.renderer = e.rendererFactory.create({
					noRender: !0
				});
				d.prerender();
				f && (d._callback = function() {
					return f(d)
				});
				d.element && d.element.style.height && (k.height = k.height || "100%");
				d.options(k);
				document.getElementById("datagridStyleDefault") || (d.renderer.cssText("\n.jscGrid table{\n\tfont-family:Helvetica;\n\tfont-size:12px;\n\tborder-collapse: separate;\n\tborder-spacing: 0;\n\twidth: 100%;\n\tcursor: default;\t\n}\n\n.jscGrid table tbody tr:nth-child(2n+1){\n\tbackground:#F5F5F5;\n}\n\n.jscGrid table thead th{\n\tbackground:#0277BD;\n\tcolor:white;\n}\n\n.jscGrid table th{\n\tbackground:#E0E0E0;\n\tfont-weight:normal;\n\tcolor:#424242;\n\tpadding:5px;\n\tborder-right: 1px solid white;\n\tborder-bottom: 1px solid white;\n}\n\n.jscGrid table td{\n\tborder-right: 1px solid #F5F5F5;\n\tpadding: 5px;\n\tvertical-align: top;\n\toverflow: hidden;\n\twhite-space: pre-line;\n\tbackground-clip: padding-box;\n\tcolor:#424242;\n}\n\n.jscGrid table td.summaryCell{\n\tcolor: #999;\n}\n\n.jscGrid .exportButton{\n\tmargin: 10px auto;\n\tdisplay: block;\n\tpadding: 6px 18px;\n\tcursor: pointer;\n\tbackground-color: #0277BD;\n\tcolor:white;\n\tborder-width: 0px;\n\tborder-radius: 3px;\n}\n\n.jscGrid .exportButton:hover{\n\tbox-shadow: 0 2px 4px rgba(0,0,0,.1);\n}\n.jscGrid .exportButton:active{\n\tbox-shadow: 0 0 6px rgba(0,0,0,.2) inset;\n}\n.jscGrid .exportButton:focus{\n\toutline: none;\n}\n\n.chartGridSwitch {\n\tmargin: 8px 0;\n\ttext-align: center;\n}\n\n.chartGridSwitch button{\n\tborder: 1px solid gray;\n\tpadding: 4px 8px;\n\tcursor: pointer;\n\tmargin-left: 0px;\n\tmargin-right: 0px;\n}\n\n.chartGridSwitch .gridButton{\n\tborder-top-right-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\tborder-left-width: 0px;\n\tbackground-color: #F5F5F5;\n}\n\n.chartGridSwitch .chartButton{\n\tborder-top-left-radius: 4px;\n\tborder-bottom-left-radius: 4px;\n\tbackground-color: #D5D5D5;\n}\n\n.chartGridSwitch button:focus{\n\toutline: none;\n}\n",
					"datagridStyleDefault"), d.updateScrollMeta());
				k.cssFile && T(function() {
					d.updateScrollMeta()
				}, k.cssFile);
				return d
			}
			K(c, a);
			c.prototype.prerender = function() {
				var b = e.platform.doc.createElement("div");
				b.classList.add("clusterize-scroll");
				b.classList.add("jscGrid");
				b.style.overflow = "auto";
				b.setAttribute("id", this.tableWrapperId);
				this.wrapper = new e.VirtualElement(b, this.renderer)
			};
			c.prototype.initFP = function() {
				var b = this,
					a = function(b, a) {
						var c = a;
						e.jsLib.isString(a) && (c = b.indexOf(a), -1 < c || (a = parseInt(a), c = 0 <=
							a && a < b.length ? a : void 0));
						return c
					};
				this.column = function(c) {
					if (void 0 === c) return [];
					var d = b._dataObj,
						f = d[0],
						h = a(f, c);
					return 0 <= h && h < f.length ? (c = e.jsLib.map(d, function(b) {
						return b[h]
					}), !1 !== b.currentOptions.headerRow && c.shift(), c) : []
				};
				this.cells = function(c) {
					if (!c) return [];
					var d = e.jsLib.isNumber(c) ? [c] : c.split(":");
					if (1 === d.length) return b.column(d[0]);
					var f = b._dataObj[0];
					c = [];
					var h = a(f, d[1]);
					for (d = a(f, d[0]); d <= h;) c.push(b.column(d++));
					return c
				}
			};
			c.prototype.normalizeOptions = function(b, a) {
				return e.jsLib.expandOptionsProperties(b,
					a || "data")
			};
			c.prototype.register = function() {
				u.add(this, this.element)
			};
			c.prototype.options = function(b, c) {
				var d = this.optionsGetter(b);
				if ("NotGetter" !== d) return d;
				b.data && b.data.length && (b.data = b.data.map(function(b) {
					return e.jsLib.clone(b)
				}));
				a.prototype.options.call(this, b);
				if (!this.data || !this.data.length || b.data || b.summaryRow) this.data = this.dataRows(b || J(this.chart)), this.rowLen = this.data.length;
				b = this.data && this.data.length;
				!1 !== c && b && (this.setColDefs(), this.render());
				return this
			};
			c.prototype.setColDefs =
				function() {
					var b = this.currentOptions,
						a = b.defaultColumn,
						c = this.userOptions.columns || [];
					if (c.length) {
						c = "string" === typeof c[0] ? b.columns = c.map(function(b) {
							return b.substr ? {
								value: b
							} : b
						}) : c.map(function(b) {
							return e.jsLib.merge({}, b)
						});
						var g = c.length
					} else g = G(this), e.jsLib.times(g, function(b) {
						return c.push({})
					});
					a && e.jsLib.isObject(a) && (c = c.map(function(b) {
						return e.jsLib.merge(e.jsLib.copy(a), b)
					}));
					var k = b.colWidths,
						h = b.headers,
						m = (b = b.types) && b.length,
						q = k && k.length;
					if (e.jsLib.evalPath(h, "0.length")) {
						this._headerCount =
							h.length;
						for (var n = function(b) {
								var a = [];
								e.jsLib.times(h.length, function(c) {
									a.push(h[c][b])
								});
								c[b].header = a
							}, l = 0; l < g; l++) n(l)
					}
					for (l = 0; l < c.length; l++) g = c[l], q && (g.width = e.jsLib.pick(c.width, k[l])), m && (g.type = b[l]), g.type && !g.align && (g.align = Y[g.type]);
					this._colDefs = c;
					return this
				};
			c.prototype.defaultOptions = function() {
				return {
					cultureName: "en-US",
					headerRow: !0,
					headerCol: !1,
					width: "100%"
				}
			};
			c.prototype.render = function() {
				var b = this,
					a = b.currentOptions,
					c = b._colDefs,
					g = c.length,
					k = R(b),
					h = b.rowLen || b.data.length,
					m = !!a.summaryRow,
					q = a.headerCol,
					n = q ? 1 : 0,
					l = a.headerRow && k.length ? b._headerCount || 1 : 0;
				b.renderTitle();
				b._renderRow = void 0;
				b._itemsRendered = 0;
				b._dataObj = [];
				var p = function(b, a, c) {
						var d = a.width;
						b.className = a.className || "col" + c;
						a.align && (b.style.textAlign = a.align);
						e.jsLib.def(d) && (b.style.width = d + (e.jsLib.isNumber(d) ? "px" : ""))
					},
					r = function(b, a, d) {
						var e = document.createElement("th");
						p(e, c[d] || {}, d);
						e.appendChild(y(a));
						b.appendChild(e);
						return e
					},
					v = ["chart", "icon", "img"],
					y = function(b) {
						b = b || "";
						e.jsLib.each(v,
							function(c) {
								b && -1 < b.indexOf("<" + c) && !a && (a = document.createElement("div"), e.jscLabel(a, b))
							});
						if (!a) {
							var a = document.createElement("div");
							a.innerHTML = b
						}
						return a
					},
					t = b.wrapper;
				200 < h ? (a.height = a.height || 600, !b._subscribedToScroll && t.on("scroll", b.scrollHandler), b._subscribedToScroll = !0) : (b._subscribedToScroll && t.un("scroll", b.scrollHandler), b._subscribedToScroll = !1);
				e.jsLib.def(a.height) && t.attr({
					height: a.height
				});
				e.jsLib.def(a.width) && t.attr({
					width: a.width
				});
				b.table && b.table.destroy();
				b.exportButton &&
					b.exportButton.destroy();
				var u = b.table = b.renderer.element("table", {
					className: a.className,
					id: a.id
				}, "html");
				b.thead = u.el.createTHead();
				l && e.jsLib.times(l, function(a) {
					a = k[a];
					b._dataObj.push(a);
					var c = b.thead.insertRow();
					n && r(c, "", -1);
					e.jsLib.each(a, function(b, a) {
						return r(c, b, a)
					})
				});
				l = Math.min(h, 200);
				var w = u.el.createTBody();
				2E3 < l && w.classList.add("clusterize-content");
				w.setAttribute("id", b.tableBodyId);
				for (var x = b._renderRow = function(a, d) {
						var f = P(b, a);
						b._dataObj.push(f);
						for (var h = w.insertRow(), k = 0, l =
								g + n; k < l; k++)
							if (!k && q) r(h, a + 1 + "", k - n);
							else {
								var m = f[k - n],
									u = k - n,
									t = d,
									v = h.insertCell();
								t = e.jsLib.extend(t || {}, c[u]);
								p(v, t, u);
								v.appendChild(y(m))
							} b.rowsStrings.push(h.outerHTML)
					}, z = {
						className: "summaryCell"
					}, A = 0; A < l; A++) x(A, m && A === l - 1 ? z : void 0);
				b._itemsRendered = l;
				b._itemsCount = h;
				u.add(b.wrapper);
				b.element && b.element.appendChild(t.el);
				var B = a.exportFile;
				B && (a = void 0, b.exportButton = a = b.renderer.element("input", {
					type: "button",
					class: "exportButton",
					value: b.buttonText("export") || "Download CSV"
				}, "html"), a.on("click",
					function() {
						var a = e.jsLib.isString(B) ? B : "datagrid.csv",
							c = b._dataObj,
							d = b.options("exportComment");
						d && (c = c.slice(0), c.unshift(["# " + d]));
						return U(a, c)
					}), a.add(b.wrapper));
				b.updateScrollMeta();
				b.isRendered = !0;
				M(b);
				return b
			};
			c.prototype.renderTitle = function() {
				var b = this.currentOptions.title,
					a = this.title;
				!this.title && b && (a = e.platform.doc.createElement("div"), a.classList.add("title"), this.title = a = new e.VirtualElement(a, this.renderer), this.title.add(this.wrapper));
				b && (a.el.innerHTML = b);
				return this
			};
			c.prototype.updateScrollMeta =
				function() {
					!this.isDestroyed && this.table && (this._scrollMeta = {
						scrollHeight: this.table.el.scrollHeight,
						viewHeight: this.wrapper.el.clientHeight
					})
				};
			c.prototype.scroll = function(b) {
				b = this._scrollMeta;
				if (0 > b.scrollHeight - this.wrapper.el.scrollTop - 5 * b.viewHeight / 4) {
					b = Math.min(this._itemsCount, this._itemsRendered + 200);
					for (var a = this._itemsRendered; a < b; a++) this._renderRow(a), this._itemsRendered++;
					2E3 < this._itemsRendered && (this.clusterize && this.clusterize.destroy(), this.clusterize = new z({
						rows: this.rowsStrings,
						scrollId: this.tableWrapperId,
						contentId: this.tableBodyId
					}));
					this.updateScrollMeta()
				}
			};
			c.prototype.setDataFromChart = function(b) {
				var a = this.userOptions.columns || Z(this.chart.series(0));
				this.options({
					data: J(this.chart),
					columns: a
				}, b)
			};
			c.prototype.destroy = function() {
				u.remove(this);
				this.wrapper && this.wrapper.destroy();
				this.table && this.table.destroy();
				this.isDestroyed = !0
			};
			c.prototype.dispose = function() {
				this.destroy()
			};
			c.prototype.buttonText = function(a) {
				return e.jsLib.evalPath(this.currentOptions, "buttons." +
					a + ".text")
			};
			c.prototype.dataRows = function(a) {
				var b = a.data;
				if (!b || !e.jsLib.isArray(b)) {
					var c = a.data || a;
					e.jsLib.isFunction(c) && (c = c());
					b = [];
					for (var g = 0, k = void 0; k = c[g++];) b.push(k)
				}!b.length && this.data && (b = this.data);
				a = a.summaryRow || this.userOptions.summaryRow;
				var h = ("function" === typeof b ? b() : b) || [];
				a && (b = e.jsLib.isArray(a) && e.jsLib.isObject(a[0]) ? a : [a], e.jsLib.map(b, function(a) {
					return h.push(a)
				}));
				return h
			};
			return c
		}(e.BaseOptions),
		J = function(a) {
			return a && function() {
				var c = [];
				a.series().each(function(a) {
					a.points().each(function(a) {
						return c.push(a)
					})
				});
				return c
			}
		},
		Z = function(a) {
			var c = a.info.labelTextInfo,
				b = a.chart.series().items.length,
				d = {
					time: "date",
					category: "string",
					number: "number"
				},
				e = [];
			a = function(a, b, c) {
				void 0 === c && (c = void 0);
				return e.push({
					header: a,
					value: b,
					type: c
				})
			};
			c.sName && 1 < b && a("Series", "%seriesName");
			c.hasX && a(c.xAxisLabel || ("time" === c.xScale ? "Date" : "X"), "%xValue", d[c.xScale] || void 0);
			b = c.yAxisLabel || "Y";
			c.hasRange ? (a(b + " Low", "%low", d[c.vScale]), a(b + " High", "%high", d[c.vScale])) : a(b, "%yValue", d[c.vScale]);
			d = c.zAxisLabel || "Z";
			c.hasZ && a(d,
				"%zValue");
			return e
		};
	(function() {
		e.moduleLoader.registerModule("modules/datagrid");
		e.registerDataGridFunction("chartToGrid", O);
		e.registerDataGridFunction("createGridSwitch", W);
		e.registerDataGridFunction("gridConstructor", function(a, c, b) {
			return new F(a, c, b)
		})
	})()
})(JSC.internal._modules.datagrid.export);