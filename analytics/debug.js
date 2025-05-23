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
	function u(b, a) {
		var d = "function" === typeof Symbol && b[Symbol.iterator];
		if (!d) return b;
		b = d.call(b);
		var c, e = [];
		try {
			for (;
				(void 0 === a || 0 < a--) && !(c = b.next()).done;) e.push(c.value)
		} catch (l) {
			var f = {
				error: l
			}
		} finally {
			try {
				c && !c.done && (d = b["return"]) && d.call(b)
			} finally {
				if (f) throw f.error;
			}
		}
		return e
	}

	function m(b, a) {
		b = document.createElement(b);
		if (a)
			for (var d in a) b.style[d] = a[d];
		return b
	}

	function t(b, a) {
		b = document.createElementNS("http://www.w3.org/2000/svg", b);
		if (a)
			for (var d in a) b.style[d] =
				a[d];
		return b
	}

	function v(b, a) {
		function d(a, b) {
			a && a.map(function(a) {
				if (a.title) {
					var c = m("h4", {
						marginTop: "0px",
						marginBottom: "4px",
						color: b
					});
					c.innerText = a.title;
					g.appendChild(c)
				}
				a.text && (c = m("p", {
					marginTop: "0px",
					marginBottom: "4px"
				}), c.innerText = a.text, g.appendChild(c))
			})
		}
		if (b.tagName) {
			var c = a.errors ? "M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z" : "M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z",
				e = a.errors ? n.iconError : n.iconWarning,
				f = window.getComputedStyle(b).position,
				l = "absolute" === f || "relative" === f ? "absolute" : "static";
			f = m("div", {
				bottom: "8px",
				right: "8px",
				position: l
			});
			e = t("svg", {
				pointerEvents: "none",
				fill: e
			});
			var p = t("path");
			e.setAttribute("width", 18);
			e.setAttribute("height", 18);
			e.setAttribute("viewBox", "0 0 16 16");
			p.setAttribute("d", c);
			e.appendChild(p);
			f.appendChild(e);
			var g = m("div", {
				pointerEvents: "none"
			});
			c = m("div", {
				maxHeight: "200px",
				overflowY: "auto"
			});
			var h = m("div", r({
				padding: "12px",
				backgroundColor: n.tooltipBackground,
				borderRadius: "16px",
				position: l,
				display: "none",
				textAlign: "left",
				maxWidth: "400px",
				zIndex: "999"
			}, w));
			d(a.errors, n.textError);
			d(a.warnings, n.textWarning);
			a = m("p", {
				marginBottom: "4px",
				color: n.disableMessage
			});
			a.innerText = "To disable these messages, remove or set chart debug option to false";
			g.appendChild(a);
			b.appendChild(f);
			c.appendChild(g);
			h.appendChild(c);
			b.appendChild(h);
			var q;
			f.addEventListener("mouseover", function() {
				var a = b.getBoundingClientRect(),
					c = ["left", "right"],
					d = ["top", "bottom"],
					f = [1, 1],
					e = [26, 26];
				290 > a.left + a.width && (f[0] = 0, e[0] = a.width - 8);
				158 > a.top + a.height && (f[1] = 0, e[1] = a.height - 8);
				h.style.removeProperty(c[f[0] ? 0 : 1]);
				h.style.removeProperty(d[f[1] ? 0 : 1]);
				h.style[c[f[0]]] = e[0] + "px";
				h.style[d[f[1]]] = e[1] + "px";
				h.style.display = "block"
			});
			f.addEventListener("mouseout", function() {
				q = setTimeout(function() {
					h.style.display = "none"
				}, 500)
			});
			h.addEventListener("mouseover", function() {
				q && (clearTimeout(q), q = void 0)
			});
			h.addEventListener("mouseout", function() {
				var a = event.toElement ||
					event.relatedTarget;
				a.parentNode != this && a != this && (h.style.display = "none")
			}, !0)
		}
	}
	var r = function() {
			r = Object.assign || function(b) {
				for (var a, c = 1, k = arguments.length; c < k; c++) {
					a = arguments[c];
					for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (b[e] = a[e])
				}
				return b
			};
			return r.apply(this, arguments)
		},
		n = {
			textError: "#ad1f2d",
			textWarning: "#cc9900",
			iconError: "#e3293b",
			iconWarning: "#ffc107",
			disableMessage: "gray",
			tooltipBackground: "#eeeeee"
		},
		w = {
			fontFamily: "tahoma, geneva, sans-serif",
			fontSize: "12px",
			fontWeight: "normal",
			fontStyle: "normal"
		},
		x = c.en.error.general,
		y = function() {
			function b() {
				this.errors = [];
				this.warnings = [];
				this.logs = [];
				this.idleDefer = new c.idleDefer
			}
			b.prototype.addWarning = function(a, b, k) {
				var d = this;
				this.addItem(arguments, c.en.error.warnPrefix, function() {
					return d.warnings
				}, function(a) {
					return d.warnings.push(a)
				})
			};
			b.prototype.addCdnWarning = function() {
				var a = this;
				clearTimeout(this._cdnWarningTimeoutId);
				this._cdnWarningTimeoutId = setTimeout(function() {
					a.addItem(["dom", "cdnLoad"], c.en.error.warnPrefix, function() {
							return a.warnings
						},
						function(c) {
							return a.warnings.push(c)
						})
				}, 1E3)
			};
			b.prototype.addError = function(a, b, k) {
				var d = this;
				this.addItem(arguments, c.en.error.errorPrefix, function() {
					return d.errors
				}, function(a) {
					return d.errors.push(a)
				})
			};
			b.prototype.addLog = function(a, b, k) {
				var d = this;
				this.addItem(arguments, c.en.error.logPrefix, function() {
					return d.logs
				}, function(a) {
					return d.logs.push(a)
				})
			};
			b.prototype.addItem = function(a, b, k, e) {
				var d = u(a, 3),
					l = d[0];
				a = d[1];
				d = d[2];
				var p = d.data || [],
					g = x[a];
				g || (g = a.text || a.title ? a : {
						text: a
					}, g.title = g.title ||
					b);
				g.text = g.text.replace(/%%/g, p[0] || "?").replace(/##/g, p[1] || "?");
				c.jsLib.find(k(), function(a) {
					return a.source === l && a.message.text === g.text
				}) || e({
					source: l,
					message: g,
					container: d.container
				});
				this.pushUpdates()
			};
			b.prototype.pushUpdates = function() {
				var a = this;
				this.idleDefer.defer("consoleUpdate", function() {
					return a.exec()
				}, 100)
			};
			b.prototype.exec = function() {
				c.jsLib.each(this.warnings, function(a) {
					var b = "log";
					c.platform.win.console && c.platform.win.console.warn && (b = "warn");
					c.platform.win.console[b](c.en.error.warnPrefix +
						a.message.text)
				});
				c.jsLib.each(this.errors, function(a) {
					var b = "log";
					c.platform.win.console && c.platform.win.console.error && (b = "error");
					c.platform.win.console[b](c.en.error.errorPrefix + a.message.text)
				});
				c.jsLib.each(this.logs, function(a) {
					c.platform.win.console.log(c.en.error.logPrefix + a.message.text)
				});
				this.showNotifications();
				this.reset()
			};
			b.prototype.showNotifications = function() {
				function a(a) {
					c.jsLib.each(e[a], function(c) {
						var d = c.container;
						if (d) {
							var e = b.get(d);
							e ? (e[a] = e[a] || [], e[a].push(c.message)) :
								(e = {}, e[a] = [c.message], b.set(d, e), k.push(d))
						}
					})
				}
				var b = new Map,
					k = [],
					e = this;
				a("warnings");
				a("errors");
				c.jsLib.each(k, function(a) {
					v(a, b.get(a))
				})
			};
			b.prototype.reset = function() {
				this.warnings = [];
				this.errors = []
			};
			return b
		}();
	(function() {
		c.moduleLoader.registerModule("modules/debug");
		var b = new y;
		c.emitter.on("warning", b.addWarning, b);
		c.emitter.on("error", b.addError, b);
		c.emitter.on("log", b.addLog, b)
	})()
})(JSC.internal._modules.debug.export);