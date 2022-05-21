(function(sttc) {
	/* 
	 
	 Copyright The Closure Library Authors. 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var n;

	function aa(a) {
		var b = 0;
		return function() {
			return b < a.length ? {
				done: !1,
				value: a[b++]
			} : {
				done: !0
			}
		}
	}
	var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
		if (a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value;
		return a
	};

	function ca(a) {
		a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
		for (var b = 0; b < a.length; ++b) {
			var c = a[b];
			if (c && c.Math == Math) return c
		}
		throw Error("Cannot find global object");
	}
	var da = ca(this),
		ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
		p = {},
		fa = {};

	function r(a, b) {
		var c = fa[b];
		if (null == c) return a[b];
		c = a[c];
		return void 0 !== c ? c : a[b]
	}

	function ha(a, b, c) {
		if (b) a: {
			var d = a.split(".");a = 1 === d.length;
			var e = d[0],
				f;!a && e in p ? f = p : f = da;
			for (e = 0; e < d.length - 1; e++) {
				var g = d[e];
				if (!(g in f)) break a;
				f = f[g]
			}
			d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(p, d, {
				configurable: !0,
				writable: !0,
				value: b
			}) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
				configurable: !0,
				writable: !0,
				value: b
			})))
		}
	}
	ha("Symbol", function(a) {
		function b(f) {
			if (this instanceof b) throw new TypeError("Symbol is not a constructor");
			return new c(d + (f || "") + "_" + e++, f)
		}

		function c(f, g) {
			this.h = f;
			ba(this, "description", {
				configurable: !0,
				writable: !0,
				value: g
			})
		}
		if (a) return a;
		c.prototype.toString = function() {
			return this.h
		};
		var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
			e = 0;
		return b
	}, "es6");
	ha("Symbol.iterator", function(a) {
		if (a) return a;
		a = (0, p.Symbol)("Symbol.iterator");
		for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
			var d = da[b[c]];
			"function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function() {
					return ia(aa(this))
				}
			})
		}
		return a
	}, "es6");

	function ia(a) {
		a = {
			next: a
		};
		a[r(p.Symbol, "iterator")] = function() {
			return this
		};
		return a
	}

	function ja(a) {
		return a.raw = a
	}

	function u(a) {
		var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
		return b ? b.call(a) : {
			next: aa(a)
		}
	}

	function ka(a) {
		if (!(a instanceof Array)) {
			a = u(a);
			for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
			a = c
		}
		return a
	}

	function la(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}
	var ma = ea && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
		for (var c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if (d)
				for (var e in d) la(d, e) && (a[e] = d[e])
		}
		return a
	};
	ha("Object.assign", function(a) {
		return a || ma
	}, "es6");
	var na = "function" == typeof Object.create ? Object.create : function(a) {
			function b() {}
			b.prototype = a;
			return new b
		},
		oa;
	if (ea && "function" == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
	else {
		var pa;
		a: {
			var qa = {
					a: !0
				},
				ra = {};
			try {
				ra.__proto__ = qa;
				pa = ra.a;
				break a
			} catch (a) {}
			pa = !1
		}
		oa = pa ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var sa = oa;

	function v(a, b) {
		a.prototype = na(b.prototype);
		a.prototype.constructor = a;
		if (sa) sa(a, b);
		else
			for (var c in b)
				if ("prototype" != c)
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d)
					} else a[c] = b[c];
		a.Gb = b.prototype
	}

	function ta() {
		for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
		return b
	}
	ha("Promise", function(a) {
		function b(g) {
			this.h = 0;
			this.j = void 0;
			this.i = [];
			this.G = !1;
			var h = this.l();
			try {
				g(h.resolve, h.reject)
			} catch (k) {
				h.reject(k)
			}
		}

		function c() {
			this.h = null
		}

		function d(g) {
			return g instanceof b ? g : new b(function(h) {
				h(g)
			})
		}
		if (a) return a;
		c.prototype.i = function(g) {
			if (null == this.h) {
				this.h = [];
				var h = this;
				this.j(function() {
					h.m()
				})
			}
			this.h.push(g)
		};
		var e = da.setTimeout;
		c.prototype.j = function(g) {
			e(g, 0)
		};
		c.prototype.m = function() {
			for (; this.h && this.h.length;) {
				var g = this.h;
				this.h = [];
				for (var h = 0; h < g.length; ++h) {
					var k =
						g[h];
					g[h] = null;
					try {
						k()
					} catch (l) {
						this.l(l)
					}
				}
			}
			this.h = null
		};
		c.prototype.l = function(g) {
			this.j(function() {
				throw g;
			})
		};
		b.prototype.l = function() {
			function g(l) {
				return function(m) {
					k || (k = !0, l.call(h, m))
				}
			}
			var h = this,
				k = !1;
			return {
				resolve: g(this.P),
				reject: g(this.m)
			}
		};
		b.prototype.P = function(g) {
			if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
			else if (g instanceof b) this.U(g);
			else {
				a: switch (typeof g) {
					case "object":
						var h = null != g;
						break a;
					case "function":
						h = !0;
						break a;
					default:
						h = !1
				}
				h ? this.O(g) : this.A(g)
			}
		};
		b.prototype.O = function(g) {
			var h = void 0;
			try {
				h = g.then
			} catch (k) {
				this.m(k);
				return
			}
			"function" == typeof h ? this.ga(h, g) : this.A(g)
		};
		b.prototype.m = function(g) {
			this.C(2, g)
		};
		b.prototype.A = function(g) {
			this.C(1, g)
		};
		b.prototype.C = function(g, h) {
			if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
			this.h = g;
			this.j = h;
			2 === this.h && this.R();
			this.H()
		};
		b.prototype.R = function() {
			var g = this;
			e(function() {
				if (g.N()) {
					var h = da.console;
					"undefined" !== typeof h && h.error(g.j)
				}
			}, 1)
		};
		b.prototype.N =
			function() {
				if (this.G) return !1;
				var g = da.CustomEvent,
					h = da.Event,
					k = da.dispatchEvent;
				if ("undefined" === typeof k) return !0;
				"function" === typeof g ? g = new g("unhandledrejection", {
					cancelable: !0
				}) : "function" === typeof h ? g = new h("unhandledrejection", {
					cancelable: !0
				}) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
				g.promise = this;
				g.reason = this.j;
				return k(g)
			};
		b.prototype.H = function() {
			if (null != this.i) {
				for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
				this.i = null
			}
		};
		var f = new c;
		b.prototype.U = function(g) {
			var h = this.l();
			g.ia(h.resolve, h.reject)
		};
		b.prototype.ga = function(g, h) {
			var k = this.l();
			try {
				g.call(h, k.resolve, k.reject)
			} catch (l) {
				k.reject(l)
			}
		};
		b.prototype.then = function(g, h) {
			function k(t, y) {
				return "function" == typeof t ? function(F) {
					try {
						l(t(F))
					} catch (z) {
						m(z)
					}
				} : y
			}
			var l, m, q = new b(function(t, y) {
				l = t;
				m = y
			});
			this.ia(k(g, l), k(h, m));
			return q
		};
		b.prototype.catch = function(g) {
			return this.then(void 0, g)
		};
		b.prototype.ia = function(g, h) {
			function k() {
				switch (l.h) {
					case 1:
						g(l.j);
						break;
					case 2:
						h(l.j);
						break;
					default:
						throw Error("Unexpected state: " + l.h);
				}
			}
			var l = this;
			null == this.i ? f.i(k) : this.i.push(k);
			this.G = !0
		};
		b.resolve = d;
		b.reject = function(g) {
			return new b(function(h, k) {
				k(g)
			})
		};
		b.race = function(g) {
			return new b(function(h, k) {
				for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).ia(h, k)
			})
		};
		b.all = function(g) {
			var h = u(g),
				k = h.next();
			return k.done ? d([]) : new b(function(l, m) {
				function q(F) {
					return function(z) {
						t[F] = z;
						y--;
						0 == y && l(t)
					}
				}
				var t = [],
					y = 0;
				do t.push(void 0), y++, d(k.value).ia(q(t.length - 1), m), k = h.next();
				while (!k.done)
			})
		};
		return b
	}, "es6");
	ha("Array.prototype.find", function(a) {
		return a ? a : function(b, c) {
			a: {
				var d = this;d instanceof String && (d = String(d));
				for (var e = d.length, f = 0; f < e; f++) {
					var g = d[f];
					if (b.call(c, g, f, d)) {
						b = g;
						break a
					}
				}
				b = void 0
			}
			return b
		}
	}, "es6");
	ha("WeakMap", function(a) {
		function b(g) {
			this.h = (f += Math.random() + 1).toString();
			if (g) {
				g = u(g);
				for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
			}
		}

		function c() {}

		function d(g) {
			var h = typeof g;
			return "object" === h && null !== g || "function" === h
		}
		if (function() {
				if (!a || !Object.seal) return !1;
				try {
					var g = Object.seal({}),
						h = Object.seal({}),
						k = new a([
							[g, 2],
							[h, 3]
						]);
					if (2 != k.get(g) || 3 != k.get(h)) return !1;
					k.delete(g);
					k.set(h, 4);
					return !k.has(g) && 4 == k.get(h)
				} catch (l) {
					return !1
				}
			}()) return a;
		var e = "$jscomp_hidden_" + Math.random(),
			f = 0;
		b.prototype.set = function(g, h) {
			if (!d(g)) throw Error("Invalid WeakMap key");
			if (!la(g, e)) {
				var k = new c;
				ba(g, e, {
					value: k
				})
			}
			if (!la(g, e)) throw Error("WeakMap key fail: " + g);
			g[e][this.h] = h;
			return this
		};
		b.prototype.get = function(g) {
			return d(g) && la(g, e) ? g[e][this.h] : void 0
		};
		b.prototype.has = function(g) {
			return d(g) && la(g, e) && la(g[e], this.h)
		};
		b.prototype.delete = function(g) {
			return d(g) && la(g, e) && la(g[e], this.h) ? delete g[e][this.h] : !1
		};
		return b
	}, "es6");
	ha("Map", function(a) {
		function b() {
			var h = {};
			return h.L = h.next = h.head = h
		}

		function c(h, k) {
			var l = h.h;
			return ia(function() {
				if (l) {
					for (; l.head != h.h;) l = l.L;
					for (; l.next != l.head;) return l = l.next, {
						done: !1,
						value: k(l)
					};
					l = null
				}
				return {
					done: !0,
					value: void 0
				}
			})
		}

		function d(h, k) {
			var l = k && typeof k;
			"object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
			var m = h.i[l];
			if (m && la(h.i, l))
				for (h = 0; h < m.length; h++) {
					var q = m[h];
					if (k !== k && q.key !== q.key || k === q.key) return {
						id: l,
						list: m,
						index: h,
						B: q
					}
				}
			return {
				id: l,
				list: m,
				index: -1,
				B: void 0
			}
		}

		function e(h) {
			this.i = {};
			this.h = b();
			this.size = 0;
			if (h) {
				h = u(h);
				for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
			}
		}
		if (function() {
				if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
				try {
					var h = Object.seal({
							x: 4
						}),
						k = new a(u([
							[h, "s"]
						]));
					if ("s" != k.get(h) || 1 != k.size || k.get({
							x: 4
						}) || k.set({
							x: 4
						}, "t") != k || 2 != k.size) return !1;
					var l = k.entries(),
						m = l.next();
					if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
					m = l.next();
					return m.done || 4 != m.value[0].x ||
						"t" != m.value[1] || !l.next().done ? !1 : !0
				} catch (q) {
					return !1
				}
			}()) return a;
		var f = new p.WeakMap;
		e.prototype.set = function(h, k) {
			h = 0 === h ? 0 : h;
			var l = d(this, h);
			l.list || (l.list = this.i[l.id] = []);
			l.B ? l.B.value = k : (l.B = {
				next: this.h,
				L: this.h.L,
				head: this.h,
				key: h,
				value: k
			}, l.list.push(l.B), this.h.L.next = l.B, this.h.L = l.B, this.size++);
			return this
		};
		e.prototype.delete = function(h) {
			h = d(this, h);
			return h.B && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.B.L.next = h.B.next, h.B.next.L = h.B.L, h.B.head = null, this.size--,
				!0) : !1
		};
		e.prototype.clear = function() {
			this.i = {};
			this.h = this.h.L = b();
			this.size = 0
		};
		e.prototype.has = function(h) {
			return !!d(this, h).B
		};
		e.prototype.get = function(h) {
			return (h = d(this, h).B) && h.value
		};
		e.prototype.entries = function() {
			return c(this, function(h) {
				return [h.key, h.value]
			})
		};
		e.prototype.keys = function() {
			return c(this, function(h) {
				return h.key
			})
		};
		e.prototype.values = function() {
			return c(this, function(h) {
				return h.value
			})
		};
		e.prototype.forEach = function(h, k) {
			for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
				h.call(k, m[1], m[0], this)
		};
		e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
		var g = 0;
		return e
	}, "es6");

	function ua(a, b) {
		a instanceof String && (a += "");
		var c = 0,
			d = !1,
			e = {
				next: function() {
					if (!d && c < a.length) {
						var f = c++;
						return {
							value: b(f, a[f]),
							done: !1
						}
					}
					d = !0;
					return {
						done: !0,
						value: void 0
					}
				}
			};
		e[r(p.Symbol, "iterator")] = function() {
			return e
		};
		return e
	}
	ha("String.prototype.startsWith", function(a) {
		return a ? a : function(b, c) {
			if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
			if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
			var d = this.length,
				e = b.length;
			c = Math.max(0, Math.min(c | 0, this.length));
			for (var f = 0; f < e && c < d;)
				if (this[c++] != b[f++]) return !1;
			return f >= e
		}
	}, "es6");
	ha("globalThis", function(a) {
		return a || da
	}, "es_2020");
	ha("Set", function(a) {
		function b(c) {
			this.h = new p.Map;
			if (c) {
				c = u(c);
				for (var d; !(d = c.next()).done;) this.add(d.value)
			}
			this.size = this.h.size
		}
		if (function() {
				if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
				try {
					var c = Object.seal({
							x: 4
						}),
						d = new a(u([c]));
					if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
							x: 4
						}) != d || 2 != d.size) return !1;
					var e = d.entries(),
						f = e.next();
					if (f.done || f.value[0] != c || f.value[1] != c) return !1;
					f = e.next();
					return f.done || f.value[0] == c || 4 != f.value[0].x ||
						f.value[1] != f.value[0] ? !1 : e.next().done
				} catch (g) {
					return !1
				}
			}()) return a;
		b.prototype.add = function(c) {
			c = 0 === c ? 0 : c;
			this.h.set(c, c);
			this.size = this.h.size;
			return this
		};
		b.prototype.delete = function(c) {
			c = this.h.delete(c);
			this.size = this.h.size;
			return c
		};
		b.prototype.clear = function() {
			this.h.clear();
			this.size = 0
		};
		b.prototype.has = function(c) {
			return this.h.has(c)
		};
		b.prototype.entries = function() {
			return this.h.entries()
		};
		b.prototype.values = function() {
			return r(this.h, "values").call(this.h)
		};
		b.prototype.keys = r(b.prototype,
			"values");
		b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
		b.prototype.forEach = function(c, d) {
			var e = this;
			this.h.forEach(function(f) {
				return c.call(d, f, f, e)
			})
		};
		return b
	}, "es6");
	ha("Array.prototype.keys", function(a) {
		return a ? a : function() {
			return ua(this, function(b) {
				return b
			})
		}
	}, "es6");
	ha("Array.prototype.values", function(a) {
		return a ? a : function() {
			return ua(this, function(b, c) {
				return c
			})
		}
	}, "es8");
	ha("Number.isNaN", function(a) {
		return a ? a : function(b) {
			return "number" === typeof b && isNaN(b)
		}
	}, "es6");
	ha("Promise.prototype.finally", function(a) {
		return a ? a : function(b) {
			return this.then(function(c) {
				return p.Promise.resolve(b()).then(function() {
					return c
				})
			}, function(c) {
				return p.Promise.resolve(b()).then(function() {
					throw c;
				})
			})
		}
	}, "es9");
	var w = this || self;

	function va(a) {
		a = a.split(".");
		for (var b = w, c = 0; c < a.length; c++)
			if (b = b[a[c]], null == b) return null;
		return b
	}

	function wa(a) {
		var b = typeof a;
		return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
	}

	function xa(a) {
		var b = wa(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	}

	function ya(a) {
		var b = typeof a;
		return "object" == b && null != a || "function" == b
	}

	function za(a) {
		return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
	}
	var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Ba = 0;

	function Ca(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function Da(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function() {
				var e = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(e, d);
				return a.apply(b, e)
			}
		}
		return function() {
			return a.apply(b, arguments)
		}
	}

	function Ea(a, b, c) {
		Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
		return Ea.apply(null, arguments)
	}

	function Fa(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var d = c.slice();
			d.push.apply(d, arguments);
			return a.apply(this, d)
		}
	}

	function Ga(a) {
		var b = ["__uspapi"],
			c = w;
		b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
		for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
	}

	function Ha(a) {
		return a
	};
	var Ia = (new Date).getTime();

	function Ja(a) {
		return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
	}

	function Ka(a, b) {
		var c = 0;
		a = Ja(String(a)).split(".");
		b = Ja(String(b)).split(".");
		for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
			var f = a[e] || "",
				g = b[e] || "";
			do {
				f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
				if (0 == f[0].length && 0 == g[0].length) break;
				c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
				f = f[3];
				g = g[3]
			} while (0 == c)
		}
		return c
	}

	function La(a, b) {
		return a < b ? -1 : a > b ? 1 : 0
	};

	function Ma() {
		var a = w.navigator;
		return a && (a = a.userAgent) ? a : ""
	}

	function x(a) {
		return -1 != Ma().indexOf(a)
	};

	function Na() {
		return x("Trident") || x("MSIE")
	}

	function Oa() {
		return (x("Chrome") || x("CriOS")) && !x("Edge") || x("Silk")
	}

	function Pa(a) {
		var b = {};
		a.forEach(function(c) {
			b[c[0]] = c[1]
		});
		return function(c) {
			return b[r(c, "find").call(c, function(d) {
				return d in b
			})] || ""
		}
	}

	function Qa() {
		var a = Ma();
		if (Na()) {
			var b = /rv: *([\d\.]*)/.exec(a);
			if (b && b[1]) a = b[1];
			else {
				b = "";
				var c = /MSIE +([\d\.]+)/.exec(a);
				if (c && c[1])
					if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
						if (a && a[1]) switch (a[1]) {
							case "4.0":
								b = "8.0";
								break;
							case "5.0":
								b = "9.0";
								break;
							case "6.0":
								b = "10.0";
								break;
							case "7.0":
								b = "11.0"
						} else b = "7.0";
						else b = c[1];
				a = b
			}
			return a
		}
		c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
		b = [];
		for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
		a = Pa(b);
		return x("Opera") ? a(["Version", "Opera"]) :
			x("Edge") ? a(["Edge"]) : x("Edg/") ? a(["Edg"]) : x("Silk") ? a(["Silk"]) : Oa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
	};

	function Ra(a, b) {
		for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
	}

	function Sa(a, b) {
		for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
			if (g in f) {
				var h = f[g];
				b.call(void 0, h, g, a) && (d[e++] = h)
			} return d
	}

	function Ta(a, b) {
		for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
		return d
	}

	function Ua(a, b) {
		for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
			if (e in d && b.call(void 0, d[e], e, a)) return !0;
		return !1
	}

	function Va(a, b) {
		a: {
			for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
				if (e in d && b.call(void 0, d[e], e, a)) {
					b = e;
					break a
				} b = -1
		}
		return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
	}

	function Wa(a, b) {
		a: {
			for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
				if (d in c && b.call(void 0, c[d], d, a)) {
					b = d;
					break a
				} b = -1
		}
		return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
	}

	function Xa(a, b) {
		a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			else {
				for (var c = 0; c < a.length; c++)
					if (c in a && a[c] === b) {
						a = c;
						break a
					} a = -1
			}return 0 <= a
	}

	function Ya(a) {
		var b = a.length;
		if (0 < b) {
			for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	};

	function Za(a) {
		Za[" "](a);
		return a
	}
	Za[" "] = function() {};
	var $a = Na();
	!x("Android") || Oa();
	Oa();
	!x("Safari") || Oa();
	var ab = {},
		bb = null;
	var cb = "undefined" !== typeof Uint8Array;
	var db = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

	function eb(a, b) {
		Object.isFrozen(a) || (db ? a[db] |= b : void 0 !== a.ma ? a.ma |= b : Object.defineProperties(a, {
			ma: {
				value: b,
				configurable: !0,
				writable: !0,
				enumerable: !1
			}
		}))
	}

	function fb(a) {
		var b;
		db ? b = a[db] : b = a.ma;
		return null == b ? 0 : b
	}

	function gb(a) {
		eb(a, 1);
		return a
	}

	function hb(a) {
		return Array.isArray(a) ? !!(fb(a) & 2) : !1
	}

	function ib(a) {
		if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
		eb(a, 2)
	};

	function jb(a) {
		return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
	}
	var kb, lb = Object.freeze(gb([]));

	function mb(a) {
		if (hb(a.v)) throw Error("Cannot mutate an immutable Message");
	}
	var nb = "undefined" != typeof p.Symbol && "undefined" != typeof p.Symbol.hasInstance;

	function ob(a) {
		return {
			value: a,
			configurable: !1,
			writable: !1,
			enumerable: !1
		}
	};

	function pb(a) {
		switch (typeof a) {
			case "number":
				return isFinite(a) ? a : String(a);
			case "object":
				if (a && !Array.isArray(a) && cb && null != a && a instanceof Uint8Array) {
					var b;
					void 0 === b && (b = 0);
					if (!bb) {
						bb = {};
						for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
							var f = c.concat(d[e].split(""));
							ab[e] = f;
							for (var g = 0; g < f.length; g++) {
								var h = f[g];
								void 0 === bb[h] && (bb[h] = g)
							}
						}
					}
					b = ab[b];
					c = Array(Math.floor(a.length / 3));
					d = b[64] || "";
					for (e = f = 0; f < a.length -
						2; f += 3) {
						var k = a[f],
							l = a[f + 1];
						h = a[f + 2];
						g = b[k >> 2];
						k = b[(k & 3) << 4 | l >> 4];
						l = b[(l & 15) << 2 | h >> 6];
						h = b[h & 63];
						c[e++] = g + k + l + h
					}
					g = 0;
					h = d;
					switch (a.length - f) {
						case 2:
							g = a[f + 1], h = b[(g & 15) << 2] || d;
						case 1:
							a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
					}
					return c.join("")
				}
		}
		return a
	};

	function qb(a) {
		var b = rb;
		b = void 0 === b ? tb : b;
		return ub(a, b)
	}

	function vb(a, b) {
		if (null != a) {
			if (Array.isArray(a)) a = ub(a, b);
			else if (jb(a)) {
				var c = {},
					d;
				for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = vb(a[d], b));
				a = c
			} else a = b(a);
			return a
		}
	}

	function ub(a, b) {
		for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = vb(c[d], b);
		Array.isArray(a) && fb(a) & 1 && gb(c);
		return c
	}

	function rb(a) {
		if (a && "object" == typeof a && a.toJSON) return a.toJSON();
		a = pb(a);
		return Array.isArray(a) ? qb(a) : a
	}

	function tb(a) {
		return cb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
	};

	function A(a, b, c) {
		return -1 === b ? null : b >= a.l ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.v[b + a.j]
	}

	function B(a, b, c, d, e) {
		d = void 0 === d ? !1 : d;
		(void 0 === e ? 0 : e) || mb(a);
		b < a.l && !d ? a.v[b + a.j] = c : (a.i || (a.i = a.v[a.l + a.j] = {}))[b] = c;
		return a
	}

	function wb(a, b, c, d) {
		c = void 0 === c ? !0 : c;
		d = void 0 === d ? !1 : d;
		var e = A(a, b, d);
		null == e && (e = lb);
		if (hb(a.v)) c && (ib(e), Object.freeze(e));
		else if (e === lb || hb(e)) e = gb(e.slice()), B(a, b, e, d);
		return e
	}

	function xb(a, b) {
		a = A(a, b);
		return null == a ? a : !!a
	}

	function C(a, b, c) {
		a = A(a, b);
		return null == a ? c : a
	}

	function D(a, b, c) {
		a = xb(a, b);
		return null == a ? void 0 === c ? !1 : c : a
	}

	function yb(a, b, c) {
		a = A(a, b);
		a = null == a ? a : +a;
		return null == a ? void 0 === c ? 0 : c : a
	}

	function zb(a, b, c) {
		var d = void 0 === d ? !1 : d;
		return B(a, b, null == c ? gb([]) : Array.isArray(c) ? gb(c) : c, d)
	}

	function Ab(a, b, c) {
		mb(a);
		0 !== c ? B(a, b, c) : B(a, b, void 0, !1, !1);
		return a
	}

	function Bb(a, b, c, d) {
		mb(a);
		(c = Cb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), B(a, c, void 0));
		return B(a, b, d)
	}

	function Db(a, b, c) {
		return Cb(a, b) === c ? c : -1
	}

	function Cb(a, b) {
		for (var c = 0, d = 0; d < b.length; d++) {
			var e = b[d];
			null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), c = e)
		}
		return c
	}

	function G(a, b, c) {
		if (-1 === c) return null;
		a.h || (a.h = {});
		var d = a.h[c];
		if (d) return d;
		var e = A(a, c, !1);
		if (null == e) return d;
		b = new b(e);
		hb(a.v) && ib(b.v);
		return a.h[c] = b
	}

	function H(a, b, c) {
		a.h || (a.h = {});
		var d = hb(a.v),
			e = a.h[c];
		if (!e) {
			var f = wb(a, c, !0, !1);
			e = [];
			d = d || hb(f);
			for (var g = 0; g < f.length; g++) e[g] = new b(f[g]), d && ib(e[g].v);
			d && (ib(e), Object.freeze(e));
			a.h[c] = e
		}
		return e
	}

	function Eb(a, b, c) {
		var d = void 0 === d ? !1 : d;
		mb(a);
		a.h || (a.h = {});
		var e = c ? c.v : c;
		a.h[b] = c;
		return B(a, b, e, d)
	}

	function Fb(a, b, c, d) {
		mb(a);
		a.h || (a.h = {});
		var e = d ? d.v : d;
		a.h[b] = d;
		return Bb(a, b, c, e)
	}

	function Gb(a, b, c) {
		var d = void 0 === d ? !1 : d;
		mb(a);
		if (c) {
			var e = gb([]);
			for (var f = 0; f < c.length; f++) e[f] = c[f].v;
			a.h || (a.h = {});
			a.h[b] = c
		} else a.h && (a.h[b] = void 0), e = lb;
		return B(a, b, e, d)
	}

	function I(a, b, c) {
		return C(a, b, void 0 === c ? "" : c)
	}

	function Hb(a, b, c) {
		return C(a, Db(a, c, b), 0)
	}

	function Ib(a, b, c, d) {
		return G(a, b, Db(a, d, c))
	};

	function Jb(a, b, c) {
		a || (a = Kb);
		Kb = null;
		var d = this.constructor.messageId;
		a || (a = d ? [d] : []);
		this.j = (d ? 0 : -1) - (this.constructor.h || 0);
		this.h = void 0;
		this.v = a;
		a: {
			d = this.v.length;a = d - 1;
			if (d && (d = this.v[a], jb(d))) {
				this.l = a - this.j;
				this.i = d;
				break a
			}
			void 0 !== b && -1 < b ? (this.l = Math.max(b, a + 1 - this.j), this.i = void 0) : this.l = Number.MAX_VALUE
		}
		if (c)
			for (b = 0; b < c.length; b++)
				if (a = c[b], a < this.l) a += this.j, (d = this.v[a]) ? Array.isArray(d) && gb(d) : this.v[a] = lb;
				else {
					d = this.i || (this.i = this.v[this.l + this.j] = {});
					var e = d[a];
					e ? Array.isArray(e) &&
						gb(e) : d[a] = lb
				}
	}
	Jb.prototype.toJSON = function() {
		var a = this.v;
		return kb ? a : qb(a)
	};

	function Lb(a) {
		kb = !0;
		try {
			return JSON.stringify(a.toJSON(), Mb)
		} finally {
			kb = !1
		}
	}

	function Nb(a, b) {
		if (null == b || "" == b) return new a;
		b = JSON.parse(b);
		if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + wa(b) + ": " + b);
		Kb = b;
		a = new a(b);
		Kb = null;
		return a
	}

	function Mb(a, b) {
		return pb(b)
	}
	var Kb;

	function Ob() {
		Jb.apply(this, arguments)
	}
	v(Ob, Jb);
	if (nb) {
		var Pb = {};
		Object.defineProperties(Ob, (Pb[p.Symbol.hasInstance] = ob(function() {
			throw Error("Cannot perform instanceof checks for MutableMessage");
		}), Pb))
	};

	function J() {
		Ob.apply(this, arguments)
	}
	v(J, Ob);
	if (nb) {
		var Qb = {};
		Object.defineProperties(J, (Qb[p.Symbol.hasInstance] = ob(Object[p.Symbol.hasInstance]), Qb))
	};

	function Rb(a) {
		J.call(this, a, -1, Sb)
	}
	v(Rb, J);

	function Tb(a) {
		J.call(this, a)
	}
	v(Tb, J);
	var Sb = [2, 3];

	function Ub(a, b) {
		this.i = a === Vb && b || "";
		this.h = Wb
	}
	var Wb = {},
		Vb = {};

	function Xb(a, b) {
		var c = {},
			d;
		for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
		return c
	}

	function Yb(a, b) {
		for (var c in a)
			if (b.call(void 0, a[c], c, a)) return !0;
		return !1
	}

	function Zb(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b
	};
	var $b;

	function ac() {
		if (void 0 === $b) {
			var a = null,
				b = w.trustedTypes;
			if (b && b.createPolicy) {
				try {
					a = b.createPolicy("goog#html", {
						createHTML: Ha,
						createScript: Ha,
						createScriptURL: Ha
					})
				} catch (c) {
					w.console && w.console.error(c.message)
				}
				$b = a
			} else $b = a
		}
		return $b
	};

	function bc(a, b) {
		this.h = b === cc ? a : ""
	}

	function dc(a, b) {
		a = ec.exec(fc(a).toString());
		var c = a[3] || "";
		return gc(a[1] + hc("?", a[2] || "", b) + hc("#", c, void 0))
	}
	bc.prototype.toString = function() {
		return this.h + ""
	};

	function fc(a) {
		return a instanceof bc && a.constructor === bc ? a.h : "type_error:TrustedResourceUrl"
	}
	var ec = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		cc = {};

	function gc(a) {
		var b = ac();
		a = b ? b.createScriptURL(a) : a;
		return new bc(a, cc)
	}

	function hc(a, b, c) {
		if (null == c) return b;
		if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
		for (var d in c)
			if (Object.prototype.hasOwnProperty.call(c, d)) {
				var e = c[d];
				e = Array.isArray(e) ? e : [e];
				for (var f = 0; f < e.length; f++) {
					var g = e[f];
					null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
				}
			} return b
	};

	function ic(a, b) {
		this.h = b === jc ? a : ""
	}
	ic.prototype.toString = function() {
		return this.h.toString()
	};
	var jc = {};
	/* 
	 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var kc = {};

	function lc() {}

	function mc(a) {
		this.h = a
	}
	v(mc, lc);
	mc.prototype.toString = function() {
		return this.h.toString()
	};

	function nc(a) {
		var b, c = null == (b = ac()) ? void 0 : b.createScriptURL(a);
		return new mc(null != c ? c : a, kc)
	}

	function oc(a) {
		if (a instanceof mc) return a.h;
		throw Error("");
	};

	function pc(a) {
		return a instanceof lc ? oc(a) : fc(a)
	}

	function qc(a) {
		return a instanceof ic && a.constructor === ic ? a.h : "type_error:SafeUrl"
	}

	function rc(a) {
		return a instanceof lc ? oc(a).toString() : fc(a).toString()
	};
	var sc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

	function tc(a) {
		return function() {
			return !a.apply(this, arguments)
		}
	}

	function uc(a) {
		var b = !1,
			c;
		return function() {
			b || (c = a(), b = !0);
			return c
		}
	}

	function vc(a) {
		var b = a;
		return function() {
			if (b) {
				var c = b;
				b = null;
				c()
			}
		}
	};

	function wc(a, b, c) {
		a.addEventListener && a.addEventListener(b, c, !1)
	}

	function xc(a, b) {
		a.removeEventListener && a.removeEventListener("message", b, !1)
	};

	function yc(a) {
		return String(a).replace(/\-([a-z])/g, function(b, c) {
			return c.toUpperCase()
		})
	};

	function zc(a, b, c) {
		function d(h) {
			h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
		}
		for (var e = 1; e < c.length; e++) {
			var f = c[e];
			if (!xa(f) || ya(f) && 0 < f.nodeType) d(f);
			else {
				a: {
					if (f && "number" == typeof f.length) {
						if (ya(f)) {
							var g = "function" == typeof f.item || "string" == typeof f.item;
							break a
						}
						if ("function" === typeof f) {
							g = "function" == typeof f.item;
							break a
						}
					}
					g = !1
				}
				Ra(g ? Ya(f) : f, d)
			}
		}
	}

	function Ac(a) {
		this.h = a || w.document || document
	}
	n = Ac.prototype;
	n.getElementsByTagName = function(a, b) {
		return (b || this.h).getElementsByTagName(String(a))
	};
	n.createElement = function(a) {
		var b = this.h;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a)
	};
	n.createTextNode = function(a) {
		return this.h.createTextNode(String(a))
	};
	n.append = function(a, b) {
		zc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
	};
	n.contains = function(a, b) {
		if (!a || !b) return !1;
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};

	function Bc() {
		return !Cc() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
	}

	function Cc() {
		return x("iPad") || x("Android") && !x("Mobile") || x("Silk")
	};
	var Dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
		Ec = /#|$/;

	function Fc(a) {
		var b = a.search(Ec),
			c;
		a: {
			for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
				var d = a.charCodeAt(c - 1);
				if (38 == d || 63 == d)
					if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
				c += 7
			}
			c = -1
		}
		if (0 > c) return null;
		d = a.indexOf("&", c);
		if (0 > d || d > b) d = b;
		c += 7;
		return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
	};

	function Gc(a) {
		try {
			var b;
			if (b = !!a && null != a.location.href) a: {
				try {
					Za(a.foo);
					b = !0;
					break a
				} catch (c) {}
				b = !1
			}
			return b
		} catch (c) {
			return !1
		}
	}

	function Hc(a) {
		return Gc(a.top) ? a.top : null
	}

	function Ic(a, b) {
		var c = Jc("SCRIPT", a);
		c.src = pc(b);
		var d, e;
		(d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
		return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
	}

	function Mc(a, b) {
		return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
	}

	function Nc(a, b) {
		if (!Oc() && !Pc()) {
			var c = Math.random();
			if (c < b) return c = Qc(), a[Math.floor(c * a.length)]
		}
		return null
	}

	function Qc() {
		if (!p.globalThis.crypto) return Math.random();
		try {
			var a = new Uint32Array(1);
			p.globalThis.crypto.getRandomValues(a);
			return a[0] / 65536 / 65536
		} catch (b) {
			return Math.random()
		}
	}

	function Rc(a, b) {
		if (a)
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
	}

	function Sc(a) {
		var b = a.length;
		if (0 == b) return 0;
		for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
		return 0 < c ? c : 4294967296 + c
	}
	var Pc = uc(function() {
		return Ua(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Tc) || 1E-4 > Math.random()
	});

	function Uc(a, b) {
		var c = -1;
		try {
			a && (c = parseInt(a.getItem(b), 10))
		} catch (d) {
			return null
		}
		return 0 <= c && 1E3 > c ? c : null
	}

	function Vc(a, b) {
		var c = Pc() ? null : Math.floor(1E3 * Qc());
		var d;
		if (d = null != c && a) a: {
			var e = String(c);
			try {
				if (a) {
					a.setItem(b, e);
					d = e;
					break a
				}
			} catch (f) {}
			d = null
		}
		return d ? c : null
	}
	var Oc = uc(function() {
		return Tc("MSIE")
	});

	function Tc(a) {
		return -1 != Ma().indexOf(a)
	}
	var Wc = /^([0-9.]+)px$/,
		Xc = /^(-?[0-9.]{1,30})$/;

	function Yc(a) {
		var b = void 0 === b ? null : b;
		if (!Xc.test(a)) return b;
		a = Number(a);
		return isNaN(a) ? b : a
	}

	function K(a) {
		return (a = Wc.exec(a)) ? +a[1] : null
	}

	function Zc(a, b) {
		for (var c = 0; 50 > c; ++c) {
			try {
				var d = !(!a.frames || !a.frames[b])
			} catch (g) {
				d = !1
			}
			if (d) return a;
			a: {
				try {
					var e = a.parent;
					if (e && e != a) {
						var f = e;
						break a
					}
				} catch (g) {}
				f = null
			}
			if (!(a = f)) break
		}
		return null
	}
	var $c = uc(function() {
		return Bc() ? 2 : Cc() ? 1 : 0
	});

	function ad(a) {
		Rc({
			display: "none"
		}, function(b, c) {
			a.style.setProperty(c, b, "important")
		})
	}
	var bd = [];

	function cd() {
		var a = bd;
		bd = [];
		a = u(a);
		for (var b = a.next(); !b.done; b = a.next()) {
			b = b.value;
			try {
				b()
			} catch (c) {}
		}
	}

	function dd(a, b) {
		0 != a.length && b.head && a.forEach(function(c) {
			if (c && c && b.head) {
				var d = Jc("META");
				b.head.appendChild(d);
				d.httpEquiv = "origin-trial";
				d.content = c
			}
		})
	}

	function ed(a) {
		if ("number" !== typeof a.goog_pvsid) try {
			Object.defineProperty(a, "goog_pvsid", {
				value: Math.floor(Math.random() * Math.pow(2, 52)),
				configurable: !1
			})
		} catch (b) {}
		return Number(a.goog_pvsid) || -1
	}

	function fd(a) {
		var b = gd;
		"complete" === b.readyState || "interactive" === b.readyState ? (bd.push(a), 1 == bd.length && (p.Promise ? p.Promise.resolve().then(cd) : window.setImmediate ? setImmediate(cd) : setTimeout(cd, 0))) : b.addEventListener("DOMContentLoaded", a)
	}

	function Jc(a, b) {
		b = void 0 === b ? document : b;
		return b.createElement(String(a).toLowerCase())
	};
	var hd = null;
	var gd = document,
		L = window;
	var id = null;

	function jd(a, b) {
		b = void 0 === b ? [] : b;
		var c = !1;
		w.google_logging_queue || (c = !0, w.google_logging_queue = []);
		w.google_logging_queue.push([a, b]);
		if (a = c) {
			if (null == id) {
				id = !1;
				try {
					var d = Hc(w);
					d && -1 !== d.location.hash.indexOf("google_logging") && (id = !0);
					w.localStorage.getItem("google_logging") && (id = !0)
				} catch (e) {}
			}
			a = id
		}
		a && (d = w.document, a = new Ub(Vb, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = gc(a instanceof Ub && a.constructor === Ub && a.h === Wb ? a.i : "type_error:Const"), Ic(d, a))
	};

	function kd(a) {
		a = void 0 === a ? w : a;
		var b = a.context || a.AMP_CONTEXT_DATA;
		if (!b) try {
			b = a.parent.context || a.parent.AMP_CONTEXT_DATA
		} catch (c) {}
		try {
			if (b && b.pageViewId && b.canonicalUrl) return b
		} catch (c) {}
		return null
	}

	function ld(a) {
		return (a = a || kd()) ? Gc(a.master) ? a.master : null : null
	};

	function md(a) {
		var b = ta.apply(1, arguments);
		if (0 === b.length) return nc(a[0]);
		for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
		return nc(c.join(""))
	};

	function nd(a) {
		var b = void 0 === b ? 1 : b;
		a = ld(kd(a)) || a;
		a.google_unique_id = (a.google_unique_id || 0) + b;
		return a.google_unique_id
	}

	function od(a) {
		a = a.google_unique_id;
		return "number" === typeof a ? a : 0
	}

	function pd() {
		var a = void 0 === a ? L : a;
		if (!a) return !1;
		try {
			return !(!a.navigator.standalone && !a.top.navigator.standalone)
		} catch (b) {
			return !1
		}
	}

	function qd(a) {
		if (!a) return "";
		a = a.toLowerCase();
		"ca-" != a.substring(0, 3) && (a = "ca-" + a);
		return a
	};

	function rd() {
		this.i = new sd(this);
		this.h = 0
	}
	rd.prototype.resolve = function(a) {
		td(this);
		this.h = 1;
		this.l = a;
		ud(this.i)
	};
	rd.prototype.reject = function(a) {
		td(this);
		this.h = 2;
		this.j = a;
		ud(this.i)
	};

	function td(a) {
		if (0 != a.h) throw Error("Already resolved/rejected.");
	}

	function sd(a) {
		this.h = a
	}
	sd.prototype.then = function(a, b) {
		if (this.i) throw Error("Then functions already set.");
		this.i = a;
		this.j = b;
		ud(this)
	};

	function ud(a) {
		switch (a.h.h) {
			case 0:
				break;
			case 1:
				a.i && a.i(a.h.l);
				break;
			case 2:
				a.j && a.j(a.h.j);
				break;
			default:
				throw Error("Unhandled deferred state.");
		}
	};

	function vd(a) {
		this.h = a.slice(0)
	}
	n = vd.prototype;
	n.forEach = function(a) {
		var b = this;
		this.h.forEach(function(c, d) {
			return void a(c, d, b)
		})
	};
	n.filter = function(a) {
		return new vd(Sa(this.h, a))
	};
	n.apply = function(a) {
		return new vd(a(this.h.slice(0)))
	};
	n.sort = function(a) {
		return new vd(this.h.slice(0).sort(a))
	};
	n.get = function(a) {
		return this.h[a]
	};
	n.add = function(a) {
		var b = this.h.slice(0);
		b.push(a);
		return new vd(b)
	};

	function wd(a, b) {
		for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
		c.forEach(b, void 0)
	};

	function xd() {
		this.h = {};
		this.i = {}
	}
	xd.prototype.set = function(a, b) {
		var c = yd(a);
		this.h[c] = b;
		this.i[c] = a
	};
	xd.prototype.get = function(a, b) {
		a = yd(a);
		return void 0 !== this.h[a] ? this.h[a] : b
	};
	xd.prototype.clear = function() {
		this.h = {};
		this.i = {}
	};

	function yd(a) {
		return a instanceof Object ? String(za(a)) : a + ""
	};

	function zd(a, b) {
		this.h = a;
		this.i = b
	}

	function Ad(a) {
		return null != a.h ? a.h.value : null
	}

	function Bd(a, b) {
		null != a.h && b(a.h.value);
		return a
	}
	zd.prototype.map = function(a) {
		return null != this.h ? (a = a(this.h.value), a instanceof zd ? a : Cd(a)) : this
	};

	function Dd(a, b) {
		null != a.h || b(a.i);
		return a
	}

	function Cd(a) {
		return new zd({
			value: a
		}, null)
	}

	function Ed(a) {
		return new zd(null, a)
	}

	function Fd(a) {
		try {
			return Cd(a())
		} catch (b) {
			return Ed(b)
		}
	};

	function Gd(a) {
		this.h = new xd;
		if (a)
			for (var b = 0; b < a.length; ++b) this.add(a[b])
	}
	Gd.prototype.add = function(a) {
		this.h.set(a, !0)
	};
	Gd.prototype.contains = function(a) {
		return void 0 !== this.h.h[yd(a)]
	};

	function Hd() {
		this.h = new xd
	}
	Hd.prototype.set = function(a, b) {
		var c = this.h.get(a);
		c || (c = new Gd, this.h.set(a, c));
		c.add(b)
	};

	function Id(a) {
		J.call(this, a, -1, Jd)
	}
	v(Id, J);
	Id.prototype.getId = function() {
		return A(this, 3)
	};
	var Jd = [4];

	function Kd(a) {
		var b = void 0 === a.Ga ? void 0 : a.Ga,
			c = void 0 === a.gb ? void 0 : a.gb,
			d = void 0 === a.Ra ? void 0 : a.Ra;
		this.h = void 0 === a.bb ? void 0 : a.bb;
		this.l = new vd(b || []);
		this.j = d;
		this.i = c
	};

	function Ld(a) {
		var b = [],
			c = a.l;
		c && c.h.length && b.push({
			X: "a",
			ca: Md(c)
		});
		null != a.h && b.push({
			X: "as",
			ca: a.h
		});
		null != a.i && b.push({
			X: "i",
			ca: String(a.i)
		});
		null != a.j && b.push({
			X: "rp",
			ca: String(a.j)
		});
		b.sort(function(d, e) {
			return d.X.localeCompare(e.X)
		});
		b.unshift({
			X: "t",
			ca: "aa"
		});
		return b
	}

	function Md(a) {
		a = a.h.slice(0).map(Nd);
		a = JSON.stringify(a);
		return Sc(a)
	}

	function Nd(a) {
		var b = {};
		null != A(a, 7) && (b.q = A(a, 7));
		null != A(a, 2) && (b.o = A(a, 2));
		null != A(a, 5) && (b.p = A(a, 5));
		return b
	};

	function Od(a) {
		J.call(this, a)
	}
	v(Od, J);
	Od.prototype.setLocation = function(a) {
		return B(this, 1, a)
	};

	function Pd(a, b) {
		this.Ja = a;
		this.Qa = b
	}

	function Qd(a) {
		var b = [].slice.call(arguments).filter(tc(function(e) {
			return null === e
		}));
		if (!b.length) return null;
		var c = [],
			d = {};
		b.forEach(function(e) {
			c = c.concat(e.Ja || []);
			d = r(Object, "assign").call(Object, d, e.Qa)
		});
		return new Pd(c, d)
	}

	function Rd(a) {
		switch (a) {
			case 1:
				return new Pd(null, {
					google_ad_semantic_area: "mc"
				});
			case 2:
				return new Pd(null, {
					google_ad_semantic_area: "h"
				});
			case 3:
				return new Pd(null, {
					google_ad_semantic_area: "f"
				});
			case 4:
				return new Pd(null, {
					google_ad_semantic_area: "s"
				});
			default:
				return null
		}
	}

	function Sd(a) {
		if (null == a) a = null;
		else {
			var b = Ld(a);
			a = [];
			b = u(b);
			for (var c = b.next(); !c.done; c = b.next()) {
				c = c.value;
				var d = String(c.ca);
				a.push(c.X + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
			}
			a = new Pd(null, {
				google_placement_id: a.join("~")
			})
		}
		return a
	};
	var Td = {},
		Ud = new Pd(["google-auto-placed"], (Td.google_reactive_ad_format = 40, Td.google_tag_origin = "qs", Td));

	function Vd(a) {
		J.call(this, a)
	}
	v(Vd, J);

	function Wd(a) {
		J.call(this, a)
	}
	v(Wd, J);
	Wd.prototype.getName = function() {
		return A(this, 4)
	};

	function Xd(a) {
		J.call(this, a)
	}
	v(Xd, J);

	function Yd(a) {
		J.call(this, a)
	}
	v(Yd, J);

	function Zd(a) {
		J.call(this, a)
	}
	v(Zd, J);
	var $d = [1, 2, 3];

	function ae(a) {
		J.call(this, a)
	}
	v(ae, J);

	function be(a) {
		J.call(this, a, -1, ce)
	}
	v(be, J);
	var ce = [6, 7, 9, 10, 11];

	function de(a) {
		J.call(this, a, -1, ee)
	}
	v(de, J);

	function fe(a) {
		J.call(this, a)
	}
	v(fe, J);

	function ge(a) {
		J.call(this, a)
	}
	v(ge, J);
	var ee = [1],
		he = [1, 2];

	function ie(a) {
		J.call(this, a, -1, je)
	}
	v(ie, J);

	function ke(a) {
		J.call(this, a)
	}
	v(ke, J);

	function le(a) {
		J.call(this, a, -1, me)
	}
	v(le, J);

	function ne(a) {
		J.call(this, a)
	}
	v(ne, J);

	function oe(a) {
		J.call(this, a)
	}
	v(oe, J);

	function pe(a) {
		J.call(this, a)
	}
	v(pe, J);

	function qe(a) {
		J.call(this, a)
	}
	v(qe, J);
	var je = [1, 2, 5, 7],
		me = [2, 5, 6, 11];

	function re(a) {
		J.call(this, a)
	}
	v(re, J);

	function se(a) {
		if (1 != a.nodeType) var b = !1;
		else if (b = "INS" == a.tagName) a: {
			b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
			for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
			for (d = 0; d < b.length; ++d)
				if (!c[b[d]]) {
					b = !1;
					break a
				} b = !0
		}
		return b
	};

	function te(a, b, c) {
		switch (c) {
			case 0:
				b.parentNode && b.parentNode.insertBefore(a, b);
				break;
			case 3:
				if (c = b.parentNode) {
					var d = b.nextSibling;
					if (d && d.parentNode != c)
						for (; d && 8 == d.nodeType;) d = d.nextSibling;
					c.insertBefore(a, d)
				}
				break;
			case 1:
				b.insertBefore(a, b.firstChild);
				break;
			case 2:
				b.appendChild(a)
		}
		se(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
	};

	function M(a, b) {
		this.h = a;
		this.defaultValue = void 0 === b ? !1 : b
	}

	function N(a, b) {
		this.h = a;
		this.defaultValue = void 0 === b ? 0 : b
	}

	function ue(a, b) {
		b = void 0 === b ? [] : b;
		this.h = a;
		this.defaultValue = b
	};
	var ve = new M(1084),
		we = new M(1082, !0),
		xe = new N(62, .001),
		ye = new N(1130, 100),
		ze = new function(a, b) {
			this.h = a;
			this.defaultValue = void 0 === b ? "" : b
		}(14),
		Ae = new N(1114, 1),
		Be = new N(1110),
		Ce = new N(1111),
		De = new N(1112),
		Ee = new N(1113),
		Fe = new N(1104),
		Ge = new N(1108),
		He = new N(1106),
		Ie = new N(1107),
		Je = new N(1105),
		Ke = new N(1115, 1),
		Le = new M(1121),
		Me = new M(1144),
		Ne = new M(1143),
		Oe = new M(316),
		Pe = new M(313),
		Qe = new M(369),
		Re = new M(1093),
		Se = new N(1098),
		Te = new M(1129),
		Ue = new M(1128),
		Ve = new M(1026),
		We = new M(1090),
		Xe = new M(1053,
			!0),
		Ye = new M(1155),
		Ze = new M(1120),
		$e = new M(1100, !0),
		af = new M(1135),
		bf = new N(1046),
		cf = new M(1102, !0),
		df = new M(218),
		ef = new M(217),
		ff = new M(227),
		gf = new M(208),
		hf = new M(282),
		jf = new M(1086),
		kf = new N(1079, 5),
		lf = new M(1141),
		mf = new ue(1939),
		nf = new ue(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
			"A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
		]),
		of = new M(203),
		pf = new M(434462125),
		qf = new M(84),
		rf = new M(1928),
		sf = new M(1941),
		tf = new M(370946349),
		uf = new M(392736476),
		vf = new N(406149835),
		wf = new ue(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
			"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
			"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
		]),
		xf = new N(1935);

	function O(a) {
		var b = "sa";
		if (a.sa && a.hasOwnProperty(b)) return a.sa;
		b = new a;
		return a.sa = b
	};

	function yf() {
		var a = {};
		this.i = function(b, c) {
			return null != a[b] ? a[b] : c
		};
		this.j = function(b, c) {
			return null != a[b] ? a[b] : c
		};
		this.l = function(b, c) {
			return null != a[b] ? a[b] : c
		};
		this.h = function(b, c) {
			return null != a[b] ? a[b] : c
		};
		this.m = function() {}
	}

	function P(a) {
		return O(yf).i(a.h, a.defaultValue)
	}

	function Q(a) {
		return O(yf).j(a.h, a.defaultValue)
	}

	function zf() {
		return O(yf).l(ze.h, ze.defaultValue)
	};

	function Af(a, b, c) {
		function d(f) {
			f = Bf(f);
			return null == f ? !1 : c > f
		}

		function e(f) {
			f = Bf(f);
			return null == f ? !1 : c < f
		}
		switch (b) {
			case 0:
				return {
					init: Cf(a.previousSibling, e), ja: function(f) {
						return Cf(f.previousSibling, e)
					}, na: 0
				};
			case 2:
				return {
					init: Cf(a.lastChild, e), ja: function(f) {
						return Cf(f.previousSibling, e)
					}, na: 0
				};
			case 3:
				return {
					init: Cf(a.nextSibling, d), ja: function(f) {
						return Cf(f.nextSibling, d)
					}, na: 3
				};
			case 1:
				return {
					init: Cf(a.firstChild, d), ja: function(f) {
						return Cf(f.nextSibling, d)
					}, na: 3
				}
		}
		throw Error("Un-handled RelativePosition: " +
			b);
	}

	function Bf(a) {
		return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
	}

	function Cf(a, b) {
		return a && b(a) ? a : null
	};
	var Df = {
		rectangle: 1,
		horizontal: 2,
		vertical: 4
	};

	function Ef(a, b) {
		a.google_image_requests || (a.google_image_requests = []);
		var c = Jc("IMG", a.document);
		c.src = b;
		a.google_image_requests.push(c)
	}

	function Ff(a) {
		var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
		Rc(a, function(c, d) {
			c && (b += "&" + d + "=" + encodeURIComponent(c))
		});
		Gf(b)
	}

	function Gf(a) {
		var b = window;
		b.fetch ? b.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		}) : Ef(b, a)
	};

	function Hf() {
		this.j = "&";
		this.i = {};
		this.l = 0;
		this.h = []
	}

	function If(a, b) {
		var c = {};
		c[a] = b;
		return [c]
	}

	function Jf(a, b, c, d, e) {
		var f = [];
		Rc(a, function(g, h) {
			(g = Kf(g, b, c, d, e)) && f.push(h + "=" + g)
		});
		return f.join(b)
	}

	function Kf(a, b, c, d, e) {
		if (null == a) return "";
		b = b || "&";
		c = c || ",$";
		"string" == typeof c && (c = c.split(""));
		if (a instanceof Array) {
			if (d = d || 0, d < c.length) {
				for (var f = [], g = 0; g < a.length; g++) f.push(Kf(a[g], b, c, d + 1, e));
				return f.join(c[d])
			}
		} else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Jf(a, b, c, d, e + 1)) : "...";
		return encodeURIComponent(String(a))
	}

	function Lf(a, b) {
		var c = "https://pagead2.googlesyndication.com" + b,
			d = Mf(a) - b.length;
		if (0 > d) return "";
		a.h.sort(function(m, q) {
			return m - q
		});
		b = null;
		for (var e = "", f = 0; f < a.h.length; f++)
			for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
				if (!d) {
					b = null == b ? g : b;
					break
				}
				var l = Jf(h[k], a.j, ",$");
				if (l) {
					l = e + l;
					if (d >= l.length) {
						d -= l.length;
						c += l;
						e = a.j;
						break
					}
					b = null == b ? g : b
				}
			}
		a = "";
		null != b && (a = e + "trn=" + b);
		return c + a
	}

	function Mf(a) {
		var b = 1,
			c;
		for (c in a.i) b = c.length > b ? c.length : b;
		return 3997 - b - a.j.length - 1
	};

	function Nf() {
		this.h = Math.random()
	}

	function Of() {
		var a = Pf,
			b = w.google_srt;
		0 <= b && 1 >= b && (a.h = b)
	}

	function Qf(a, b, c, d, e) {
		if ((d ? a.h : Math.random()) < (e || .01)) try {
			if (c instanceof Hf) var f = c;
			else f = new Hf, Rc(c, function(h, k) {
				var l = f,
					m = l.l++;
				h = If(k, h);
				l.h.push(m);
				l.i[m] = h
			});
			var g = Lf(f, "/pagead/gen_204?id=" + b + "&");
			g && Ef(w, g)
		} catch (h) {}
	};
	var Rf = {
		overlays: 1,
		interstitials: 2,
		vignettes: 2,
		inserts: 3,
		immersives: 4,
		list_view: 5
	};

	function Sf() {
		this.wasPlaTagProcessed = !1;
		this.wasReactiveAdConfigReceived = {};
		this.adCount = {};
		this.wasReactiveAdVisible = {};
		this.stateForType = {};
		this.reactiveTypeEnabledInAsfe = {};
		this.wasReactiveTagRequestSent = !1;
		this.reactiveTypeDisabledByPublisher = {};
		this.tagSpecificState = {};
		this.messageValidationEnabled = !1;
		this.floatingAdsStacking = new Tf;
		this.sideRailProcessedFixedElements = new p.Set;
		this.sideRailAvailableSpace = new p.Map
	}

	function Uf(a) {
		a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new Sf;
		return a.google_reactive_ads_global_state
	}

	function Tf() {
		this.maxZIndexRestrictions = {};
		this.nextRestrictionId = 0;
		this.maxZIndexListeners = []
	};

	function Vf(a) {
		a = a.document;
		var b = {};
		a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
		return b || {}
	}

	function Wf(a) {
		return Vf(a).clientWidth
	};

	function Xf(a) {
		return null !== a && void 0 !== a
	}

	function Yf(a, b) {
		if (!b(a)) throw Error(String(a));
	};

	function Zf(a) {
		return "string" === typeof a
	}

	function $f(a) {
		return void 0 === a
	};

	function ag(a) {
		J.call(this, a, -1, bg)
	}
	v(ag, J);
	var bg = [2, 8],
		cg = [3, 4, 5],
		dg = [6, 7];
	var eg;
	eg = {
		wb: 0,
		Ya: 3,
		Za: 4,
		$a: 5
	};
	var fg = eg.Ya,
		gg = eg.Za,
		hg = eg.$a;

	function ig(a) {
		return null != a ? !a : a
	}

	function jg(a, b) {
		for (var c = !1, d = 0; d < a.length; d++) {
			var e = a[d]();
			if (e === b) return e;
			null == e && (c = !0)
		}
		if (!c) return !b
	}

	function kg(a, b) {
		var c = H(a, ag, 2);
		if (!c.length) return lg(a, b);
		a = C(a, 1, 0);
		if (1 === a) return ig(kg(c[0], b));
		c = Ta(c, function(d) {
			return function() {
				return kg(d, b)
			}
		});
		switch (a) {
			case 2:
				return jg(c, !1);
			case 3:
				return jg(c, !0)
		}
	}

	function lg(a, b) {
		var c = Cb(a, cg);
		a: {
			switch (c) {
				case fg:
					var d = Hb(a, 3, cg);
					break a;
				case gg:
					d = Hb(a, 4, cg);
					break a;
				case hg:
					d = Hb(a, 5, cg);
					break a
			}
			d = void 0
		}
		if (d && (b = (b = b[c]) && b[d])) {
			try {
				var e = b.apply(null, ka(wb(a, 8)))
			} catch (f) {
				return
			}
			b = C(a, 1, 0);
			if (4 === b) return !!e;
			d = null != e;
			if (5 === b) return d;
			if (12 === b) a = I(a, Db(a, dg, 7), void 0);
			else a: {
				switch (c) {
					case gg:
						a = yb(a, Db(a, dg, 6), void 0);
						break a;
					case hg:
						a = I(a, Db(a, dg, 7), void 0);
						break a
				}
				a = void 0
			}
			if (null != a) {
				if (6 === b) return e === a;
				if (9 === b) return null != e && 0 === Ka(String(e),
					a);
				if (d) switch (b) {
					case 7:
						return e < a;
					case 8:
						return e > a;
					case 12:
						return Zf(a) && Zf(e) && (new RegExp(a)).test(e);
					case 10:
						return null != e && -1 === Ka(String(e), a);
					case 11:
						return null != e && 1 === Ka(String(e), a)
				}
			}
		}
	}

	function mg(a, b) {
		return !a || !(!b || !kg(a, b))
	};

	function ng(a) {
		J.call(this, a, -1, og)
	}
	v(ng, J);
	var og = [4];

	function pg(a) {
		J.call(this, a)
	}
	v(pg, J);

	function qg(a) {
		J.call(this, a, -1, rg)
	}
	v(qg, J);
	var rg = [5],
		sg = [1, 2, 3, 6, 7];

	function tg(a) {
		a.Sa.apply(a, ka(ta.apply(1, arguments).map(function(b) {
			return {
				Xa: 4,
				message: b
			}
		})))
	}

	function ug(a) {
		a.Sa.apply(a, ka(ta.apply(1, arguments).map(function(b) {
			return {
				Xa: 7,
				message: b
			}
		})))
	};

	function vg(a) {
		return function() {
			var b = ta.apply(0, arguments);
			try {
				return a.apply(this, b)
			} catch (c) {}
		}
	}
	var wg = vg(function(a) {
		var b = [],
			c = {};
		a = u(a);
		for (var d = a.next(); !d.done; c = {
				ea: c.ea
			}, d = a.next()) c.ea = d.value, vg(function(e) {
			return function() {
				b.push('[{"' + e.ea.Xa + '":' + Lb(e.ea.message) + "}]")
			}
		}(c))();
		return "[[" + b.join(",") + "]]"
	});

	function xg(a, b) {
		if (p.globalThis.fetch) p.globalThis.fetch(a, {
			method: "POST",
			body: b,
			keepalive: 65536 > b.length,
			credentials: "omit",
			mode: "no-cors",
			redirect: "follow"
		});
		else {
			var c = new XMLHttpRequest;
			c.open("POST", a, !0);
			c.send(b)
		}
	};

	function yg(a) {
		var b = void 0 === b ? xg : b;
		this.l = void 0 === a ? 1E3 : a;
		this.j = b;
		this.i = [];
		this.h = null
	}
	yg.prototype.Sa = function() {
		var a = ta.apply(0, arguments),
			b = this;
		vg(function() {
			b.i.push.apply(b.i, ka(a));
			var c = vg(function() {
				var d = wg(b.i);
				b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
				b.i = [];
				b.h = null
			});
			100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
		})()
	};

	function zg(a) {
		J.call(this, a, -1, Ag)
	}
	v(zg, J);

	function Bg(a, b) {
		return Eb(a, 1, b)
	}

	function Cg(a, b) {
		return Gb(a, 2, b)
	}

	function Dg(a, b) {
		return zb(a, 4, b)
	}

	function Eg(a, b) {
		return Gb(a, 5, b)
	}

	function Fg(a, b) {
		return Ab(a, 6, b)
	}

	function Gg(a) {
		J.call(this, a)
	}
	v(Gg, J);
	Gg.prototype.V = function() {
		return C(this, 1, 0)
	};

	function Hg(a, b) {
		return Ab(a, 1, b)
	}

	function Ig(a, b) {
		return Ab(a, 2, b)
	}

	function Jg(a) {
		J.call(this, a)
	}
	v(Jg, J);
	var Ag = [2, 4, 5],
		Kg = [1, 2];

	function Lg(a) {
		J.call(this, a, -1, Mg)
	}
	v(Lg, J);

	function Ng(a) {
		J.call(this, a, -1, Og)
	}
	v(Ng, J);
	var Mg = [2, 3],
		Og = [5],
		Pg = [1, 2, 3, 4];

	function Qg(a) {
		J.call(this, a)
	}
	v(Qg, J);
	Qg.prototype.getTagSessionCorrelator = function() {
		return C(this, 2, 0)
	};

	function Rg(a) {
		var b = new Qg;
		return Fb(b, 4, Sg, a)
	}
	var Sg = [4, 5, 7];

	function Tg(a, b, c) {
		var d = void 0 === d ? new yg(b) : d;
		this.i = a;
		this.m = c;
		this.j = d;
		this.h = [];
		this.l = 0 < this.i && Qc() < 1 / this.i
	}

	function Ug(a, b, c, d, e, f) {
		var g = Ig(Hg(new Gg, b), c);
		b = Fg(Cg(Bg(Eg(Dg(new zg, d), e), g), a.h), f);
		b = Rg(b);
		a.l && tg(a.j, Vg(a, b));
		if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
				return h.V() === g.V() && C(h, 2, 0) === c
			})) a.h.push(g), 100 < a.h.length && a.h.shift()
	}

	function Wg(a, b, c, d) {
		if (a.m) {
			var e = new Lg;
			b = Gb(e, 2, b);
			c = Gb(b, 3, c);
			d && Ab(c, 1, d);
			d = new Qg;
			d = Fb(d, 7, Sg, c);
			a.l && tg(a.j, Vg(a, d))
		}
	}

	function Vg(a, b) {
		b = Ab(b, 1, Date.now());
		var c = ed(window);
		b = Ab(b, 2, c);
		return Ab(b, 6, a.i)
	};

	function Xg() {
		var a = {};
		this.h = (a[fg] = {}, a[gg] = {}, a[hg] = {}, a)
	};
	var bh = /^true$/.test("false");
	var ch = bh;

	function dh(a, b) {
		switch (b) {
			case 1:
				return Hb(a, 1, sg);
			case 2:
				return Hb(a, 2, sg);
			case 3:
				return Hb(a, 3, sg);
			case 6:
				return Hb(a, 6, sg);
			default:
				return null
		}
	}

	function eh(a, b) {
		if (!a) return null;
		switch (b) {
			case 1:
				return D(a, 1);
			case 7:
				return I(a, 3);
			case 2:
				return yb(a, 2);
			case 3:
				return I(a, 3);
			case 6:
				return wb(a, 4);
			default:
				return null
		}
	}
	var fh = uc(function() {
		if (!ch) return {};
		try {
			var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
			if (a) return JSON.parse(a)
		} catch (b) {}
		return {}
	});

	function gh(a, b, c, d) {
		var e = d = void 0 === d ? 0 : d,
			f, g;
		O(hh).j[e] = null != (g = null == (f = O(hh).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
		e = fh();
		if (null != e[b]) return e[b];
		b = ih(d)[b];
		if (!b) return c;
		b = new qg(b);
		b = jh(b);
		a = eh(b, a);
		return null != a ? a : c
	}

	function jh(a) {
		var b = O(Xg).h;
		if (b) {
			var c = Wa(H(a, pg, 5), function(d) {
				return mg(G(d, ag, 1), b)
			});
			if (c) return G(c, ng, 2)
		}
		return G(a, ng, 4)
	}

	function hh() {
		this.i = {};
		this.l = [];
		this.j = {};
		this.h = new p.Map
	}

	function kh(a, b, c) {
		return !!gh(1, a, void 0 === b ? !1 : b, c)
	}

	function lh(a, b, c) {
		b = void 0 === b ? 0 : b;
		a = Number(gh(2, a, b, c));
		return isNaN(a) ? b : a
	}

	function mh(a, b, c) {
		return gh(3, a, void 0 === b ? "" : b, c)
	}

	function nh(a, b, c) {
		b = void 0 === b ? [] : b;
		return gh(6, a, b, c)
	}

	function ih(a) {
		return O(hh).i[a] || (O(hh).i[a] = {})
	}

	function oh(a, b) {
		var c = ih(b);
		Rc(a, function(d, e) {
			return c[e] = d
		})
	}

	function ph(a, b, c, d, e) {
		e = void 0 === e ? !1 : e;
		var f = [],
			g = [];
		Ra(b, function(h) {
			var k = ih(h);
			Ra(a, function(l) {
				var m = Cb(l, sg),
					q = dh(l, m);
				if (q) {
					var t, y, F;
					var z = null != (F = null == (t = O(hh).h.get(h)) ? void 0 : null == (y = t.get(q)) ? void 0 : y.slice(0)) ? F : [];
					a: {
						t = new Ng;
						switch (m) {
							case 1:
								Bb(t, 1, Pg, q);
								break;
							case 2:
								Bb(t, 2, Pg, q);
								break;
							case 3:
								Bb(t, 3, Pg, q);
								break;
							case 6:
								Bb(t, 4, Pg, q);
								break;
							default:
								m = void 0;
								break a
						}
						zb(t, 5, z);m = t
					}
					if (z = m) {
						var E;
						z = !(null == (E = O(hh).j[h]) || !E.has(q))
					}
					z && f.push(m);
					if (E = m) {
						var S;
						E = !(null == (S = O(hh).h.get(h)) ||
							!S.has(q))
					}
					E && g.push(m);
					e || (S = O(hh), S.h.has(h) || S.h.set(h, new p.Map), S.h.get(h).has(q) || S.h.get(h).set(q, []), d && S.h.get(h).get(q).push(d));
					k[q] = l.toJSON()
				}
			})
		});
		(f.length || g.length) && Wg(c, f, g, null != d ? d : void 0)
	}

	function qh(a, b) {
		var c = ih(b);
		Ra(a, function(d) {
			var e = new qg(d),
				f = Cb(e, sg);
			(e = dh(e, f)) && (c[e] || (c[e] = d))
		})
	}

	function rh() {
		return Ta(r(Object, "keys").call(Object, O(hh).i), function(a) {
			return Number(a)
		})
	}

	function sh(a) {
		Xa(O(hh).l, a) || oh(ih(4), a)
	};

	function th(a) {
		this.methodName = a
	}
	var uh = new th(1),
		vh = new th(16),
		wh = new th(15),
		xh = new th(2),
		yh = new th(3),
		zh = new th(4),
		Ah = new th(5),
		Bh = new th(6),
		Ch = new th(7),
		Dh = new th(8),
		Eh = new th(9),
		Fh = new th(10),
		Gh = new th(11),
		Hh = new th(12),
		Ih = new th(13),
		Jh = new th(14);

	function Kh(a, b, c) {
		c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
			value: b
		})
	}

	function Lh(a, b, c) {
		return b[a.methodName] || c || function() {}
	}

	function Mh(a) {
		Kh(Ah, kh, a);
		Kh(Bh, lh, a);
		Kh(Ch, mh, a);
		Kh(Dh, nh, a);
		Kh(Ih, qh, a);
		Kh(wh, sh, a)
	}

	function Nh(a) {
		Kh(zh, function(b) {
			O(Xg).h = b
		}, a);
		Kh(Eh, function(b, c) {
			var d = O(Xg);
			d.h[fg][b] || (d.h[fg][b] = c)
		}, a);
		Kh(Fh, function(b, c) {
			var d = O(Xg);
			d.h[gg][b] || (d.h[gg][b] = c)
		}, a);
		Kh(Gh, function(b, c) {
			var d = O(Xg);
			d.h[hg][b] || (d.h[hg][b] = c)
		}, a);
		Kh(Jh, function(b) {
			for (var c = O(Xg), d = u([fg, gg, hg]), e = d.next(); !e.done; e = d.next()) e = e.value, r(Object, "assign").call(Object, c.h[e], b[e])
		}, a)
	}

	function Oh(a) {
		a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
			value: !0
		})
	};

	function Ph() {
		this.l = function() {};
		this.i = function() {};
		this.j = function() {};
		this.h = function() {
			return []
		}
	}

	function Qh(a, b, c) {
		a.l = Lh(uh, b, function() {});
		a.j = function(d) {
			Lh(xh, b, function() {
				return []
			})(d, c)
		};
		a.h = function() {
			return Lh(yh, b, function() {
				return []
			})(c)
		};
		a.i = function(d) {
			Lh(vh, b, function() {})(d, c)
		}
	};
	var R = {},
		Rh = (R[23] = .001, R[150] = "", R[211] = !1, R[253] = !1, R[172] = null, R[246] = [], R[226] = [], R[252] = null, R[258] = null, R[251] = null, R[259] = null, R[6] = function(a, b) {
			b = void 0 === b ? !0 : b;
			try {
				for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
					case "https:":
						return !0;
					case "file:":
						return b;
					case "http:":
						return !1
				}
			} catch (d) {}
			return !0
		}(window), R[36] = /^true$/.test("false"), R[148] = bh, R[221] = /^true$/.test("false"), R[260] = void 0, R),
		Sh, Th;
	Sh = null != (Th = w.googletag) ? Th : w.googletag = {
		cmd: []
	};
	r(Object, "assign").call(Object, Rh, Sh._vars_);
	Sh._vars_ = Rh;

	function Uh(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c
	}

	function Vh(a) {
		return !!(a.error && a.meta && a.id)
	};
	var Wh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

	function Xh(a, b) {
		this.h = a;
		this.i = b
	}

	function Yh(a, b, c) {
		this.url = a;
		this.u = b;
		this.La = !!c;
		this.depth = null
	};
	var Zh = null;

	function $h() {
		if (null === Zh) {
			Zh = "";
			try {
				var a = "";
				try {
					a = w.top.location.hash
				} catch (c) {
					a = w.location.hash
				}
				if (a) {
					var b = a.match(/\bdeid=([\d,]+)/);
					Zh = b ? b[1] : ""
				}
			} catch (c) {}
		}
		return Zh
	};

	function ai() {
		var a = void 0 === a ? w : a;
		return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
	}

	function bi() {
		var a = void 0 === a ? w : a;
		return (a = a.performance) && a.now ? a.now() : null
	};

	function ci(a, b) {
		var c = bi() || ai();
		this.label = a;
		this.type = b;
		this.value = c;
		this.duration = 0;
		this.uniqueId = Math.random();
		this.slotId = void 0
	};
	var di = w.performance,
		ei = !!(di && di.mark && di.measure && di.clearMarks),
		fi = uc(function() {
			var a;
			if (a = ei) a = $h(), a = !!a.indexOf && 0 <= a.indexOf("1337");
			return a
		});

	function gi() {
		this.i = [];
		this.j = w || w;
		var a = null;
		w && (w.google_js_reporting_queue = w.google_js_reporting_queue || [], this.i = w.google_js_reporting_queue, a = w.google_measure_js_timing);
		this.h = fi() || (null != a ? a : 1 > Math.random())
	}

	function hi(a) {
		a && di && fi() && (di.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), di.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
	}
	gi.prototype.start = function(a, b) {
		if (!this.h) return null;
		a = new ci(a, b);
		b = "goog_" + a.label + "_" + a.uniqueId + "_start";
		di && fi() && di.mark(b);
		return a
	};
	gi.prototype.end = function(a) {
		if (this.h && "number" === typeof a.value) {
			a.duration = (bi() || ai()) - a.value;
			var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
			di && fi() && di.mark(b);
			!this.h || 2048 < this.i.length || this.i.push(a)
		}
	};

	function ii() {
		var a = ji;
		this.m = Pf;
		this.i = null;
		this.l = this.I;
		this.h = void 0 === a ? null : a;
		this.j = !1
	}
	n = ii.prototype;
	n.Ua = function(a) {
		this.l = a
	};
	n.Ta = function(a) {
		this.i = a
	};
	n.Va = function(a) {
		this.j = a
	};
	n.oa = function(a, b, c) {
		try {
			if (this.h && this.h.h) {
				var d = this.h.start(a.toString(), 3);
				var e = b();
				this.h.end(d)
			} else e = b()
		} catch (h) {
			b = !0;
			try {
				hi(d), b = this.l(a, new Uh(h, {
					message: ki(h)
				}), void 0, c)
			} catch (k) {
				this.I(217, k)
			}
			if (b) {
				var f, g;
				null == (f = window.console) || null == (g = f.error) || g.call(f, h)
			} else throw h;
		}
		return e
	};
	n.Oa = function(a, b, c, d) {
		var e = this;
		return function() {
			var f = ta.apply(0, arguments);
			return e.oa(a, function() {
				return b.apply(c, f)
			}, d)
		}
	};
	n.I = function(a, b, c, d, e) {
		e = e || "jserror";
		try {
			var f = new Hf;
			f.h.push(1);
			f.i[1] = If("context", a);
			Vh(b) || (b = new Uh(b, {
				message: ki(b)
			}));
			if (b.msg) {
				var g = b.msg.substring(0, 512);
				f.h.push(2);
				f.i[2] = If("msg", g)
			}
			var h = b.meta || {};
			if (this.i) try {
				this.i(h)
			} catch (Kc) {}
			if (d) try {
				d(h)
			} catch (Kc) {}
			b = [h];
			f.h.push(3);
			f.i[3] = b;
			d = w;
			b = [];
			g = null;
			do {
				var k = d;
				if (Gc(k)) {
					var l = k.location.href;
					g = k.document && k.document.referrer || null
				} else l = g, g = null;
				b.push(new Yh(l || "", k));
				try {
					d = k.parent
				} catch (Kc) {
					d = null
				}
			} while (d && k != d);
			l = 0;
			for (var m =
					b.length - 1; l <= m; ++l) b[l].depth = m - l;
			k = w;
			if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
				for (m = 1; m < b.length; ++m) {
					var q = b[m];
					q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.La = !0)
				}
			var t = new Yh(w.location.href, w, !1);
			k = null;
			var y = b.length - 1;
			for (q = y; 0 <= q; --q) {
				var F = b[q];
				!k && Wh.test(F.url) && (k = F);
				if (F.url && !F.La) {
					t = F;
					break
				}
			}
			F = null;
			var z = b.length && b[y].url;
			0 != t.depth && z && (F = b[y]);
			var E = new Xh(t, F);
			if (E.i) {
				var S = E.i.url || "";
				f.h.push(4);
				f.i[4] = If("top", S)
			}
			var sb = {
				url: E.h.url || ""
			};
			if (E.h.url) {
				var Lc = E.h.url.match(Dc),
					Yg = Lc[1],
					Zg = Lc[3],
					$g = Lc[4];
				t = "";
				Yg && (t += Yg + ":");
				Zg && (t += "//", t += Zg, $g && (t += ":" + $g));
				var ah = t
			} else ah = "";
			sb = [sb, {
				url: ah
			}];
			f.h.push(5);
			f.i[5] = sb;
			Qf(this.m, e, f, this.j, c)
		} catch (Kc) {
			try {
				Qf(this.m, e, {
					context: "ecmserr",
					rctx: a,
					msg: ki(Kc),
					url: E && E.h.url
				}, this.j, c)
			} catch (Ep) {}
		}
		return !0
	};
	n.Pa = function(a, b) {
		var c = this;
		b.catch(function(d) {
			d = d ? d : "unknown rejection";
			c.I(a, d instanceof Error ? d : Error(d))
		})
	};

	function ki(a) {
		var b = a.toString();
		a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
		a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
		if (a.stack) {
			a = a.stack;
			try {
				-1 == a.indexOf(b) && (a = b + "\n" + a);
				for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
				b = a.replace(/\n */g, "\n")
			} catch (d) {}
		}
		return b
	};
	var li = ja(["https://www.googletagservices.com/console/host/host.js"]),
		mi = ja(["https://www.googletagservices.com/console/panel/index.html"]),
		ni = ja(["https://www.googletagservices.com/console/overlay/index.html"]);
	md(li);
	md(mi);
	md(ni);

	function oi(a, b) {
		do {
			var c = Mc(a, b);
			if (c && "fixed" == c.position) return !1
		} while (a = a.parentElement);
		return !0
	};

	function pi(a, b) {
		for (var c = ["width", "height"], d = 0; d < c.length; d++) {
			var e = "google_ad_" + c[d];
			if (!b.hasOwnProperty(e)) {
				var f = K(a[c[d]]);
				f = null === f ? null : Math.round(f);
				null != f && (b[e] = f)
			}
		}
	}

	function qi(a, b) {
		return !((Xc.test(b.google_ad_width) || Wc.test(a.style.width)) && (Xc.test(b.google_ad_height) || Wc.test(a.style.height)))
	}

	function ri(a, b) {
		return (a = si(a, b)) ? a.y : 0
	}

	function si(a, b) {
		try {
			var c = b.document.documentElement.getBoundingClientRect(),
				d = a.getBoundingClientRect();
			return {
				x: d.left - c.left,
				y: d.top - c.top
			}
		} catch (e) {
			return null
		}
	}

	function ti(a) {
		var b = 0,
			c;
		for (c in Df) - 1 != a.indexOf(c) && (b |= Df[c]);
		return b
	}

	function ui(a, b, c, d, e) {
		if (a !== a.top) return Hc(a) ? 3 : 16;
		if (!(488 > Wf(a))) return 4;
		if (!(a.innerHeight >= a.innerWidth)) return 5;
		var f = Wf(a);
		if (!f || (f - c) / f > d) a = 6;
		else {
			if (c = "true" != e.google_full_width_responsive) a: {
				c = Wf(a);
				for (b = b.parentElement; b; b = b.parentElement)
					if ((d = Mc(b, a)) && (e = K(d.width)) && !(e >= c) && "visible" != d.overflow) {
						c = !0;
						break a
					} c = !1
			}
			a = c ? 7 : !0
		}
		return a
	}

	function vi(a, b, c, d) {
		var e = ui(b, c, a, .3, d);
		!0 !== e ? a = e : "true" == d.google_full_width_responsive || oi(c, b) ? (b = Wf(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
		return a
	}

	function wi(a, b, c) {
		a = a.style;
		"rtl" == b ? a.marginRight = c : a.marginLeft = c
	}

	function xi(a, b) {
		if (3 == b.nodeType) return /\S/.test(b.data);
		if (1 == b.nodeType) {
			if (/^(script|style)$/i.test(b.nodeName)) return !1;
			try {
				var c = Mc(b, a)
			} catch (d) {}
			return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
		}
		return !1
	}

	function yi(a, b, c) {
		a = si(b, a);
		return "rtl" == c ? -a.x : a.x
	}

	function zi(a, b) {
		var c;
		c = (c = b.parentElement) ? (c = Mc(c, a)) ? c.direction : "" : "";
		if (c) {
			b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
			b.style.borderSpacing = b.style.padding = "0";
			wi(b, c, "0px");
			b.style.width = Wf(a) + "px";
			if (0 !== yi(a, b, c)) {
				wi(b, c, "0px");
				var d = yi(a, b, c);
				wi(b, c, -1 * d + "px");
				a = yi(a, b, c);
				0 !== a && a !== d && wi(b, c, d / (a - d) * d + "px")
			}
			b.style.zIndex = 30
		}
	};

	function Ai(a, b) {
		this.l = a;
		this.j = b
	}
	Ai.prototype.minWidth = function() {
		return this.l
	};
	Ai.prototype.height = function() {
		return this.j
	};
	Ai.prototype.h = function(a) {
		return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
	};
	Ai.prototype.i = function() {};

	function Bi(a, b, c, d) {
		d = void 0 === d ? function(f) {
			return f
		} : d;
		var e;
		return a.style && a.style[c] && d(a.style[c]) || (e = Mc(a, b)) && e[c] && d(e[c]) || null
	}

	function Ci(a) {
		return function(b) {
			return b.minWidth() <= a
		}
	}

	function Di(a, b, c, d) {
		var e = a && Ei(c, b),
			f = Fi(b, d);
		return function(g) {
			return !(e && g.height() >= f)
		}
	}

	function Gi(a) {
		return function(b) {
			return b.height() <= a
		}
	}

	function Ei(a, b) {
		return ri(a, b) < Vf(b).clientHeight - 100
	}

	function Hi(a, b) {
		var c = Bi(b, a, "height", K);
		if (c) return c;
		var d = b.style.height;
		b.style.height = "inherit";
		c = Bi(b, a, "height", K);
		b.style.height = d;
		if (c) return c;
		c = Infinity;
		do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = Bi(b, a, "maxHeight", K)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
		return c
	}

	function Fi(a, b) {
		var c = 0 == od(a);
		return b && c ? Math.max(250, 2 * Vf(a).clientHeight / 3) : 250
	};
	var T = {},
		Ii = (T.google_ad_channel = !0, T.google_ad_client = !0, T.google_ad_host = !0, T.google_ad_host_channel = !0, T.google_adtest = !0, T.google_tag_for_child_directed_treatment = !0, T.google_tag_for_under_age_of_consent = !0, T.google_tag_partner = !0, T.google_restrict_data_processing = !0, T.google_page_url = !0, T.google_debug_params = !0, T.google_adbreak_test = !0, T.google_ad_frequency_hint = !0, T.google_admob_interstitial_slot = !0, T.google_admob_rewarded_slot = !0, T.google_max_ad_content_rating = !0, T.google_traffic_source = !0,
			T),
		Ji = RegExp("(^| )adsbygoogle($| )");

	function Ki(a, b) {
		for (var c = 0; c < b.length; c++) {
			var d = b[c],
				e = yc(d.Db);
			a[e] = d.value
		}
	};

	function Li(a, b, c, d) {
		this.l = a;
		this.i = b;
		this.j = c;
		this.h = d
	}

	function Mi(a, b) {
		var c = [];
		try {
			c = b.querySelectorAll(a.l)
		} catch (g) {}
		if (!c.length) return [];
		b = Ya(c);
		b = Ni(a, b);
		"number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
		if ("number" === typeof a.j) {
			c = [];
			for (var d = 0; d < b.length; d++) {
				var e = Oi(b[d]),
					f = a.j;
				0 > f && (f += e.length);
				0 <= f && f < e.length && c.push(e[f])
			}
			b = c
		}
		return b
	}
	Li.prototype.toString = function() {
		return JSON.stringify({
			nativeQuery: this.l,
			occurrenceIndex: this.i,
			paragraphIndex: this.j,
			ignoreMode: this.h
		})
	};

	function Ni(a, b) {
		if (null == a.h) return b;
		switch (a.h) {
			case 1:
				return b.slice(1);
			case 2:
				return b.slice(0, b.length - 1);
			case 3:
				return b.slice(1, b.length - 1);
			case 0:
				return b;
			default:
				throw Error("Unknown ignore mode: " + a.h);
		}
	}

	function Oi(a) {
		var b = [];
		wd(a.getElementsByTagName("p"), function(c) {
			100 <= Pi(c) && b.push(c)
		});
		return b
	}

	function Pi(a) {
		if (3 == a.nodeType) return a.length;
		if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
		var b = 0;
		wd(a.childNodes, function(c) {
			b += Pi(c)
		});
		return b
	}

	function Qi(a) {
		return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
	};

	function Ri(a) {
		if (!a) return null;
		var b = A(a, 7);
		if (A(a, 1) || a.getId() || 0 < wb(a, 4).length) {
			var c = a.getId();
			b = wb(a, 4);
			var d = A(a, 1),
				e = "";
			d && (e += d);
			c && (e += "#" + Qi(c));
			if (b)
				for (c = 0; c < b.length; c++) e += "." + Qi(b[c]);
			a = (b = e) ? new Li(b, A(a, 2), A(a, 5), Si(A(a, 6))) : null
		} else a = b ? new Li(b, A(a, 2), A(a, 5), Si(A(a, 6))) : null;
		return a
	}
	var Ti = {
		1: 1,
		2: 2,
		3: 3,
		0: 0
	};

	function Si(a) {
		return null == a ? a : Ti[a]
	}
	var Ui = {
		1: 0,
		2: 1,
		3: 2,
		4: 3
	};

	function Vi(a) {
		return a.google_ama_state = a.google_ama_state || {}
	}

	function Wi(a) {
		a = Vi(a);
		return a.optimization = a.optimization || {}
	};

	function Xi(a) {
		switch (A(a, 8)) {
			case 1:
			case 2:
				if (null == a) var b = null;
				else b = G(a, Id, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new Kd({
					Ga: [b],
					Ra: a
				}));
				return null != b ? Cd(b) : Ed(Error("Missing dimension when creating placement id"));
			case 3:
				return Ed(Error("Missing dimension when creating placement id"));
			default:
				return Ed(Error("Invalid type: " + A(a, 8)))
		}
	};

	function U(a) {
		a = void 0 === a ? "" : a;
		var b = Error.call(this);
		this.message = b.message;
		"stack" in b && (this.stack = b.stack);
		this.name = "TagError";
		this.message = a ? "adsbygoogle.push() error: " + a : "";
		Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
	}
	v(U, Error);
	var Pf, Yi, ji = new gi;

	function Zi(a) {
		null != a && (w.google_measure_js_timing = a);
		w.google_measure_js_timing || (a = ji, a.h = !1, a.i != a.j.google_js_reporting_queue && (fi() && Ra(a.i, hi), a.i.length = 0))
	}(function(a) {
		Pf = a || new Nf;
		"number" !== typeof w.google_srt && (w.google_srt = Math.random());
		Of();
		Yi = new ii;
		Yi.Va(!0);
		"complete" == w.document.readyState ? Zi() : ji.h && wc(w, "load", function() {
			Zi()
		})
	})();

	function $i(a, b, c) {
		return Yi.oa(a, b, c)
	}

	function aj(a, b) {
		return Yi.Oa(a, b, void 0, void 0)
	}

	function bj(a, b, c) {
		var d = O(Ph).h();
		!b.eid && d.length && (b.eid = d.toString());
		Qf(Pf, a, b, !0, c)
	}

	function cj(a, b) {
		Yi.Pa(a, b)
	}

	function dj(a, b, c, d) {
		var e;
		Vh(b) ? e = b.msg || ki(b.error) : e = ki(b);
		return 0 == e.indexOf("TagError") ? (c = b instanceof Uh ? b.error : b, c.pbr || (c.pbr = !0, Yi.I(a, b, .1, d, "puberror")), !1) : Yi.I(a, b, c, d)
	};

	function ej(a) {
		a = void 0 === a ? window : a;
		a = a.googletag;
		return (null == a ? 0 : a.apiReady) ? a : void 0
	};

	function fj(a) {
		var b = ej(a);
		return b ? Sa(Ta(b.pubads().getSlots(), function(c) {
			return a.document.getElementById(c.getSlotElementId())
		}), function(c) {
			return null != c
		}) : null
	}

	function gj(a, b) {
		return Ya(a.document.querySelectorAll(b))
	}

	function hj(a) {
		var b = [];
		a = u(a);
		for (var c = a.next(); !c.done; c = a.next()) {
			c = c.value;
			for (var d = !0, e = 0; e < b.length; e++) {
				var f = b[e];
				if (f.contains(c)) {
					d = !1;
					break
				}
				if (c.contains(f)) {
					d = !1;
					b[e] = c;
					break
				}
			}
			d && b.push(c)
		}
		return b
	};

	function ij(a, b) {
		function c() {
			d.push({
				anchor: e.anchor,
				position: e.position
			});
			return e.anchor == b.anchor && e.position == b.position
		}
		for (var d = [], e = a; e;) {
			switch (e.position) {
				case 1:
					if (c()) return d;
					e.position = 2;
				case 2:
					if (c()) return d;
					if (e.anchor.firstChild) {
						e = {
							anchor: e.anchor.firstChild,
							position: 1
						};
						continue
					} else e.position = 3;
				case 3:
					if (c()) return d;
					e.position = 4;
				case 4:
					if (c()) return d
			}
			for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
				e = {
					anchor: e.anchor.parentNode,
					position: 3
				};
				if (c()) return d;
				e.position = 4;
				if (c()) return d
			}
			e && e.anchor.nextSibling ? e = {
				anchor: e.anchor.nextSibling,
				position: 1
			} : e = null
		}
		return d
	};

	function jj(a, b) {
		this.i = a;
		this.h = b
	}

	function kj(a, b) {
		var c = new Hd,
			d = new Gd;
		b.forEach(function(e) {
			if (Ib(e, Xd, 1, $d)) {
				e = Ib(e, Xd, 1, $d);
				if (G(e, Vd, 1) && G(G(e, Vd, 1), Id, 1) && G(e, Vd, 2) && G(G(e, Vd, 2), Id, 1)) {
					var f = lj(a, G(G(e, Vd, 1), Id, 1)),
						g = lj(a, G(G(e, Vd, 2), Id, 1));
					if (f && g)
						for (f = u(ij({
								anchor: f,
								position: A(G(e, Vd, 1), 2)
							}, {
								anchor: g,
								position: A(G(e, Vd, 2), 2)
							})), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
				}
				G(e, Vd, 3) && G(G(e, Vd, 3), Id, 1) && (f = lj(a, G(G(e, Vd, 3), Id, 1))) && c.set(za(f), A(G(e, Vd, 3), 2))
			} else Ib(e, Yd, 2, $d) ? mj(a, Ib(e, Yd, 2, $d),
				c) : Ib(e, Zd, 3, $d) && nj(a, Ib(e, Zd, 3, $d), d)
		});
		return new jj(c, d)
	}

	function mj(a, b, c) {
		G(b, Id, 1) && (a = oj(a, G(b, Id, 1))) && a.forEach(function(d) {
			d = za(d);
			c.set(d, 1);
			c.set(d, 4);
			c.set(d, 2);
			c.set(d, 3)
		})
	}

	function nj(a, b, c) {
		G(b, Id, 1) && (a = oj(a, G(b, Id, 1))) && a.forEach(function(d) {
			c.add(za(d))
		})
	}

	function lj(a, b) {
		return (a = oj(a, b)) && 0 < a.length ? a[0] : null
	}

	function oj(a, b) {
		return (b = Ri(b)) ? Mi(b, a) : null
	};

	function pj() {
		this.h = new p.Set
	}

	function qj(a) {
		a = rj(a);
		return a.has("all") || a.has("after")
	}

	function sj(a) {
		a = rj(a);
		return a.has("all") || a.has("before")
	}

	function tj(a, b, c) {
		switch (c) {
			case 2:
			case 3:
				break;
			case 1:
			case 4:
				b = b.parentElement;
				break;
			default:
				throw Error("Unknown RelativePosition: " + c);
		}
		for (c = []; b;) {
			if (uj(b)) return !0;
			if (a.h.has(b)) break;
			c.push(b);
			b = b.parentElement
		}
		c.forEach(function(d) {
			return a.h.add(d)
		});
		return !1
	}

	function uj(a) {
		var b = rj(a);
		return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
	}

	function rj(a) {
		return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
	};

	function vj(a, b) {
		if (!a) return !1;
		a = Mc(a, b);
		if (!a) return !1;
		a = a.cssFloat || a.styleFloat;
		return "left" == a || "right" == a
	}

	function wj(a) {
		for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
		return a ? a : null
	}

	function xj(a) {
		return !!a.nextSibling || !!a.parentNode && xj(a.parentNode)
	};

	function yj(a) {
		var b = {};
		a && wb(a, 6).forEach(function(c) {
			b[c] = !0
		});
		return b
	}

	function zj(a, b, c, d, e) {
		this.h = a;
		this.H = b;
		this.j = c;
		this.m = e || null;
		this.A = (this.C = d) ? kj(a.document, H(d, Wd, 5)) : kj(a.document, []);
		this.G = new pj;
		this.i = 0;
		this.l = !1
	}

	function Aj(a, b) {
		if (a.l) return !0;
		a.l = !0;
		var c = H(a.j, be, 1);
		a.i = 0;
		var d = yj(a.C);
		var e = a.h;
		try {
			var f = e.localStorage.getItem("google_ama_settings");
			var g = f ? Nb(re, f) : null
		} catch (S) {
			g = null
		}
		var h = null !== g && D(g, 2, !1);
		g = Vi(e);
		h && (g.eatf = !0, jd(7, [!0, 0, !1]));
		var k = P(Ue) || P(Te);
		f = P(Te);
		if (k) {
			b: {
				var l = {
						fb: !1
					},
					m = gj(e, ".google-auto-placed"),
					q = gj(e, 'ins.adsbygoogle[data-anchor-shown="true"]'),
					t = gj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
				var y = (fj(e) || gj(e, "div[id^=div-gpt-ad]")).concat(gj(e, "iframe[id^=google_ads_iframe]"));
				var F = gj(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
					z = gj(e, "ins.adsbygoogle-ablated-ad-slot"),
					E = gj(e, "div.googlepublisherpluginad");
				k = [].concat(gj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), gj(e, "ins.adsbygoogle"));h = [];l = u([
					[l.yb, m],
					[l.fb, q],
					[l.Bb, t],
					[l.zb, y],
					[l.Cb, F],
					[l.xb, z],
					[l.Ab, E]
				]);
				for (m = l.next(); !m.done; m = l.next()) q = u(m.value),
				m = q.next().value,
				q = q.next().value,
				!1 === m ? h = h.concat(q) : k = k.concat(q);k = hj(k);l = hj(h);h = k.slice(0);k = u(l);
				for (l = k.next(); !l.done; l = k.next())
					for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) && h.splice(m, 1);e = Vf(e).clientHeight;
				for (k = 0; k < h.length; k++)
					if (l = h[k].getBoundingClientRect(),
						!(0 === l.height && !f || l.top > e)) {
						e = !0;
						break b
					} e = !1
			}
			g = e ? g.eatfAbg = !0 : !1
		}
		else g = h;
		if (g) return !0;
		g = new Gd([2]);
		for (e = 0; e < c.length; e++) {
			f = a;
			k = c[e];
			h = e;
			l = b;
			if (!G(k, Od, 4) || !g.contains(A(G(k, Od, 4), 1)) || 1 !== A(k, 8) || k && null != A(k, 4) && d[A(G(k, Od, 4), 2)]) f = null;
			else {
				f.i++;
				if (k = Bj(f, k, l, d)) l = Vi(f.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
					index: h,
					element: k.ha
				}), jd(7, [!1, f.i, !0]);
				f = k
			}
			if (f) return !0
		}
		jd(7, [!1, a.i, !1]);
		return !1
	}

	function Bj(a, b, c, d) {
		if (b && null != A(b, 4) && d[A(G(b, Od, 4), 2)] || 1 != A(b, 8)) return null;
		d = G(b, Id, 1);
		if (!d) return null;
		d = Ri(d);
		if (!d) return null;
		d = Mi(d, a.h.document);
		if (0 == d.length) return null;
		d = d[0];
		var e = Ui[A(b, 2)];
		e = void 0 === e ? null : e;
		var f;
		if (!(f = null == e)) {
			a: {
				f = a.h;
				switch (e) {
					case 0:
						f = vj(wj(d), f);
						break a;
					case 3:
						f = vj(d, f);
						break a;
					case 2:
						var g = d.lastChild;
						f = vj(g ? 1 == g.nodeType ? g : wj(g) : null, f);
						break a
				}
				f = !1
			}
			if (c = !f && !(!c && 2 == e && !xj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
			c = !(c && !se(c) && 0 >= c.offsetWidth);f = !c
		}
		if (!(c =
				f)) {
			c = a.A;
			f = A(b, 2);
			g = za(d);
			g = c.i.h.get(g);
			if (!(g = g ? g.contains(f) : !1)) a: {
				if (c.h.contains(za(d))) switch (f) {
					case 2:
					case 3:
						g = !0;
						break a;
					default:
						g = !1;
						break a
				}
				for (f = d.parentElement; f;) {
					if (c.h.contains(za(f))) {
						g = !0;
						break a
					}
					f = f.parentElement
				}
				g = !1
			}
			c = g
		}
		if (!c && (c = P(af))) {
			c = a.G;
			f = A(b, 2);
			a: switch (f) {
				case 1:
					g = qj(d.previousElementSibling) || sj(d);
					break a;
				case 4:
					g = qj(d) || sj(d.nextElementSibling);
					break a;
				case 2:
					g = sj(d.firstElementChild);
					break a;
				case 3:
					g = qj(d.lastElementChild);
					break a;
				default:
					throw Error("Unknown RelativePosition: " +
						f);
			}
			c = g || tj(c, d, f)
		}
		if (c) return null;
		c = G(b, ae, 3);
		f = {};
		c && (f.Wa = A(c, 1), f.Ha = A(c, 2), f.cb = !!xb(c, 3));
		c = G(b, Od, 4) && A(G(b, Od, 4), 2) ? A(G(b, Od, 4), 2) : null;
		c = Rd(c);
		g = null != A(b, 12) ? A(b, 12) : null;
		g = null == g ? null : new Pd(null, {
			google_ml_rank: g
		});
		b = Cj(a, b);
		b = Qd(a.m, c, g, b);
		c = a.h;
		a = a.H;
		var h = c.document,
			k = f.cb || !1;
		g = (new Ac(h)).createElement("DIV");
		var l = g.style;
		l.width = "100%";
		l.height = "auto";
		l.clear = k ? "both" : "none";
		k = g.style;
		k.textAlign = "center";
		f.lb && Ki(k, f.lb);
		h = (new Ac(h)).createElement("INS");
		k = h.style;
		k.display =
			"block";
		k.margin = "auto";
		k.backgroundColor = "transparent";
		f.Wa && (k.marginTop = f.Wa);
		f.Ha && (k.marginBottom = f.Ha);
		f.ab && Ki(k, f.ab);
		g.appendChild(h);
		f = {
			ra: g,
			ha: h
		};
		f.ha.setAttribute("data-ad-format", "auto");
		g = [];
		if (h = b && b.Ja) f.ra.className = h.join(" ");
		h = f.ha;
		h.className = "adsbygoogle";
		h.setAttribute("data-ad-client", a);
		g.length && h.setAttribute("data-ad-channel", g.join("+"));
		a: {
			try {
				var m = f.ra;
				var q = void 0 === q ? 0 : q;
				if (P(Pe)) {
					q = void 0 === q ? 0 : q;
					var t = Af(d, e, q);
					if (t.init) {
						var y = t.init;
						for (d = y; d = t.ja(d);) y = d;
						var F = {
							anchor: y,
							position: t.na
						}
					} else F = {
						anchor: d,
						position: e
					};
					m["google-ama-order-assurance"] = q;
					te(m, F.anchor, F.position)
				} else te(m, d, e);
				b: {
					var z = f.ha;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";m = {
						element: z
					};
					var E = b && b.Qa;
					if (z.hasAttribute("data-pub-vars")) {
						try {
							E = JSON.parse(z.getAttribute("data-pub-vars"))
						} catch (S) {
							break b
						}
						z.removeAttribute("data-pub-vars")
					}
					E && (m.params = E);
					(c.adsbygoogle = c.adsbygoogle || []).push(m)
				}
			} catch (S) {
				(z = f.ra) && z.parentNode && (E = z.parentNode, E.removeChild(z),
					se(E) && (E.style.display = E.getAttribute("data-init-display") || "none"));
				z = !1;
				break a
			}
			z = !0
		}
		return z ? f : null
	}

	function Cj(a, b) {
		return Ad(Dd(Xi(b).map(Sd), function(c) {
			Vi(a.h).exception = c
		}))
	};

	function Dj(a) {
		if (P(Oe)) var b = null;
		else try {
			b = a.getItem("google_ama_config")
		} catch (d) {
			b = null
		}
		try {
			var c = b ? Nb(ie, b) : null
		} catch (d) {
			c = null
		}
		return c
	};

	function Ej(a) {
		J.call(this, a)
	}
	v(Ej, J);

	function Fj(a) {
		try {
			var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
		} catch (d) {
			b = null
		}
		var c = b;
		return c ? Fd(function() {
			return Nb(Ej, c)
		}) : Cd(null)
	};

	function Gj() {
		this.S = {}
	}

	function Hj() {
		if (Ij) return Ij;
		var a = ld() || window,
			b = a.google_persistent_state_async;
		return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Ij = b : a.google_persistent_state_async = Ij = new Gj
	}

	function Jj(a) {
		return Kj[a] || "google_ps_" + a
	}

	function Lj(a, b, c) {
		b = Jj(b);
		a = a.S;
		var d = a[b];
		return void 0 === d ? a[b] = c : d
	}
	var Ij = null,
		Mj = {},
		Kj = (Mj[8] = "google_prev_ad_formats_by_region", Mj[9] = "google_prev_ad_slotnames_by_region", Mj);

	function Nj(a) {
		this.h = a || {
			cookie: ""
		}
	}
	Nj.prototype.set = function(a, b, c) {
		var d = !1;
		if ("object" === typeof c) {
			var e = c.Eb;
			d = c.Fb || !1;
			var f = c.domain || void 0;
			var g = c.path || void 0;
			var h = c.jb
		}
		if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
		if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
		void 0 === h && (h = -1);
		this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
			e : "")
	};
	Nj.prototype.get = function(a, b) {
		for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
			f = Ja(d[e]);
			if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
			if (f == a) return ""
		}
		return b
	};
	Nj.prototype.isEmpty = function() {
		return !this.h.cookie
	};
	Nj.prototype.clear = function() {
		for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
		for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
			jb: 0,
			path: void 0,
			domain: void 0
		})
	};

	function Oj(a) {
		J.call(this, a)
	}
	v(Oj, J);

	function Pj(a) {
		var b = new Oj;
		return B(b, 5, a)
	};

	function Qj() {
		this.A = this.A;
		this.G = this.G
	}
	Qj.prototype.A = !1;
	Qj.prototype.j = function() {
		if (this.G)
			for (; this.G.length;) this.G.shift()()
	};

	function Rj(a) {
		void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
		void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
		return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
	}

	function Sj(a, b) {
		b = void 0 === b ? 500 : b;
		Qj.call(this);
		this.h = a;
		this.i = null;
		this.m = {};
		this.H = 0;
		this.C = b;
		this.l = null
	}
	v(Sj, Qj);
	Sj.prototype.j = function() {
		this.m = {};
		this.l && (xc(this.h, this.l), delete this.l);
		delete this.m;
		delete this.h;
		delete this.i;
		Qj.prototype.j.call(this)
	};

	function Tj(a) {
		return "function" === typeof a.h.__tcfapi || null != Uj(a)
	}
	Sj.prototype.addEventListener = function(a) {
		function b(f, g) {
			clearTimeout(e);
			f ? (c = f, c.internalErrorState = Rj(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
			a(c)
		}
		var c = {},
			d = vc(function() {
				return a(c)
			}),
			e = 0; - 1 !== this.C && (e = setTimeout(function() {
			c.tcString = "tcunavailable";
			c.internalErrorState = 1;
			d()
		}, this.C));
		try {
			Vj(this, "addEventListener", b)
		} catch (f) {
			c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
				e = 0), d()
		}
	};
	Sj.prototype.removeEventListener = function(a) {
		a && a.listenerId && Vj(this, "removeEventListener", null, a.listenerId)
	};

	function Vj(a, b, c, d) {
		c || (c = function() {});
		if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
		else if (Uj(a)) {
			Wj(a);
			var e = ++a.H;
			a.m[e] = c;
			a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
				command: b,
				version: 2,
				callId: e,
				parameter: d
			}, c), "*"))
		} else c({}, !1)
	}

	function Uj(a) {
		if (a.i) return a.i;
		a.i = Zc(a.h, "__tcfapiLocator");
		return a.i
	}

	function Wj(a) {
		a.l || (a.l = function(b) {
			try {
				var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
				a.m[c.callId](c.returnValue, c.success)
			} catch (d) {}
		}, wc(a.h, "message", a.l))
	};

	function Xj(a) {
		var b = a.u,
			c = a.ta,
			d = a.Ia;
		a = Yj({
			u: b,
			Z: a.Z,
			ka: void 0 === a.ka ? !1 : a.ka,
			la: void 0 === a.la ? !1 : a.la
		});
		null != a.h || "tcunav" != a.i.message ? d(a) : Zj(b, c).then(function(e) {
			return e.map(ak)
		}).then(function(e) {
			return e.map(function(f) {
				return bk(b, f)
			})
		}).then(d)
	}

	function Yj(a) {
		var b = a.u,
			c = a.Z,
			d = void 0 === a.ka ? !1 : a.ka;
		if (!(a = !(void 0 === a.la ? 0 : a.la) && Tj(new Sj(b)))) {
			if (d = !d) {
				if (c) {
					c = Fj(b);
					if (null == c.h) Yi.I(806, c.i, void 0, void 0), c = !1;
					else if ((c = c.h.value) && null != A(c, 1)) b: switch (c = A(c, 1), c) {
						case 1:
							c = !0;
							break b;
						default:
							throw Error("Unhandled AutoGdprFeatureStatus: " + c);
					} else c = !1;
					c = !c
				}
				d = c
			}
			a = d
		}
		if (!a) return bk(b, Pj(!0));
		c = Hj();
		return (c = Lj(c, 24, void 0)) ? bk(b, ak(c)) : Ed(Error("tcunav"))
	}

	function Zj(a, b) {
		return p.Promise.race([ck(), dk(a, b)])
	}

	function ck() {
		return (new p.Promise(function(a) {
			var b = Hj();
			a = {
				resolve: a
			};
			var c = Lj(b, 25, []);
			c.push(a);
			b.S[Jj(25)] = c
		})).then(ek)
	}

	function dk(a, b) {
		return new p.Promise(function(c) {
			a.setTimeout(c, b, Ed(Error("tcto")))
		})
	}

	function ek(a) {
		return a ? Cd(a) : Ed(Error("tcnull"))
	}

	function ak(a) {
		var b = void 0 === b ? !1 : b;
		if (!1 === a.gdprApplies) var c = !0;
		else void 0 === a.internalErrorState && (a.internalErrorState = Rj(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
		if (c)
			if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
			else {
				var d = void 0 === d ? "755" : d;
				b: {
					if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
							void 0 !== b)) {
						b = b[void 0 === d ? "755" : d];
						break b
					}
					b = void 0
				}
				0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
			}
		else a = !1;
		return Pj(a)
	}

	function bk(a, b) {
		a: {
			a = void 0 === a ? window : a;
			if (xb(b, 5)) try {
				var c = a.localStorage;
				break a
			} catch (d) {}
			c = null
		}
		return (b = c) ? Cd(b) : Ed(Error("unav"))
	};

	function fk(a) {
		J.call(this, a)
	}
	v(fk, J);

	function gk(a) {
		J.call(this, a, -1, hk)
	}
	v(gk, J);
	var hk = [1, 2];

	function ik(a) {
		this.exception = a
	}

	function jk(a, b, c) {
		this.j = a;
		this.h = b;
		this.i = c
	}
	jk.prototype.start = function() {
		this.l()
	};
	jk.prototype.l = function() {
		try {
			switch (this.j.document.readyState) {
				case "complete":
				case "interactive":
					Aj(this.h, !0);
					kk(this);
					break;
				default:
					Aj(this.h, !1) ? kk(this) : this.j.setTimeout(Ea(this.l, this), 100)
			}
		} catch (a) {
			kk(this, a)
		}
	};

	function kk(a, b) {
		try {
			var c = a.i,
				d = c.resolve,
				e = a.h;
			Vi(e.h);
			H(e.j, be, 1);
			d.call(c, new ik(b))
		} catch (f) {
			a.i.reject(f)
		}
	};

	function lk(a) {
		J.call(this, a, -1, mk)
	}
	v(lk, J);

	function nk(a) {
		J.call(this, a)
	}
	v(nk, J);

	function ok(a) {
		J.call(this, a)
	}
	v(ok, J);
	var mk = [7];

	function pk(a) {
		a = (a = (new Nj(a)).get("FCCDCF", "")) ? a : null;
		try {
			return a ? Nb(lk, a) : null
		} catch (b) {
			return null
		}
	};

	function qk(a) {
		function b() {
			if (!a.frames.__uspapiLocator)
				if (c.body) {
					var d = Jc("IFRAME", c);
					d.style.display = "none";
					d.style.width = "0px";
					d.style.height = "0px";
					d.style.border = "none";
					d.style.zIndex = "-1000";
					d.style.left = "-1000px";
					d.style.top = "-1000px";
					d.name = "__uspapiLocator";
					c.body.appendChild(d)
				} else a.setTimeout(b, 5)
		}
		var c = a.document;
		b()
	};

	function rk(a) {
		this.h = a;
		this.i = a.document;
		this.j = (a = (a = pk(this.i)) ? G(a, ok, 5) || null : null) ? A(a, 2) : null;
		(a = pk(this.i)) && G(a, nk, 4);
		(a = pk(this.i)) && G(a, nk, 4)
	}

	function sk() {
		var a = window;
		a.__uspapi || a.frames.__uspapiLocator || (a = new rk(a), tk(a))
	}

	function tk(a) {
		!a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", qk(a.h), Ga(function() {
			return a.l.apply(a, ka(ta.apply(0, arguments)))
		}))
	}
	rk.prototype.l = function(a, b, c) {
		"function" === typeof c && "getUSPData" === a && c({
			version: 1,
			uspString: this.j
		}, !0)
	};

	function uk(a) {
		J.call(this, a)
	}
	v(uk, J);
	uk.prototype.getWidth = function() {
		return C(this, 1, 0)
	};
	uk.prototype.getHeight = function() {
		return C(this, 2, 0)
	};

	function vk(a) {
		J.call(this, a)
	}
	v(vk, J);

	function wk(a) {
		J.call(this, a)
	}
	v(wk, J);
	var xk = [4, 5];

	function yk(a) {
		var b = /[a-zA-Z0-9._~-]/,
			c = /%[89a-zA-Z]./;
		return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
			if (!d.match(c)) {
				var e = decodeURIComponent(d);
				if (e.match(b)) return e
			}
			return d.toUpperCase()
		})
	}

	function zk(a) {
		for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
			var e = a[d];
			b = e.match(c) ? b + e : b + encodeURIComponent(e)
		}
		return b
	};

	function Ak(a, b) {
		a = zk(yk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
		var c = Sc(a),
			d = Bk(a);
		return r(b, "find").call(b, function(e) {
			var f = null != A(e, 7) ? A(G(e, ne, 7), 1) : A(e, 1);
			e = null != A(e, 7) ? A(G(e, ne, 7), 2) : 2;
			if ("number" !== typeof f) return !1;
			switch (e) {
				case 1:
					return f == c;
				case 2:
					return d[f] || !1
			}
			return !1
		}) || null
	}

	function Bk(a) {
		for (var b = {};;) {
			b[Sc(a)] = !0;
			if (!a) return b;
			a = a.substring(0, a.lastIndexOf("/"))
		}
	};
	var Ck = {},
		Dk = (Ck.google_ad_channel = !0, Ck.google_ad_host = !0, Ck);

	function Ek(a, b) {
		a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
		bj("ama", b, .01)
	}

	function Fk(a) {
		var b = {};
		Rc(Dk, function(c, d) {
			d in a && (b[d] = a[d])
		});
		return b
	};

	function Gk(a) {
		a = G(a, ke, 3);
		return !a || A(a, 1) <= Date.now() ? !1 : !0
	}

	function Hk(a) {
		return (a = Dj(a)) ? Gk(a) ? a : null : null
	}

	function Ik(a, b) {
		try {
			b.removeItem("google_ama_config")
		} catch (c) {
			Ek(a, {
				lserr: 1
			})
		}
	};

	function Jk(a) {
		J.call(this, a)
	}
	v(Jk, J);

	function Kk(a) {
		J.call(this, a, -1, Lk)
	}
	v(Kk, J);
	var Lk = [1];

	function Mk(a) {
		J.call(this, a, -1, Nk)
	}
	v(Mk, J);
	Mk.prototype.getId = function() {
		return C(this, 1, 0)
	};
	Mk.prototype.V = function() {
		return C(this, 7, 0)
	};
	var Nk = [2];

	function Ok(a) {
		J.call(this, a, -1, Pk)
	}
	v(Ok, J);
	Ok.prototype.V = function() {
		return C(this, 5, 0)
	};
	var Pk = [2];

	function Qk(a) {
		J.call(this, a, -1, Rk)
	}
	v(Qk, J);

	function Sk(a) {
		J.call(this, a, -1, Tk)
	}
	v(Sk, J);
	Sk.prototype.V = function() {
		return C(this, 1, 0)
	};

	function Uk(a) {
		J.call(this, a)
	}
	v(Uk, J);
	var Rk = [1, 4, 2, 3],
		Tk = [2];

	function Vk(a) {
		J.call(this, a, -1, Wk)
	}
	v(Vk, J);

	function Xk(a) {
		return Ib(a, Kk, 14, Yk)
	}
	var Wk = [19],
		Yk = [13, 14];
	var Zk = void 0;

	function $k() {
		Yf(Zk, Xf);
		return Zk
	}

	function al(a) {
		Yf(Zk, $f);
		Zk = a
	};

	function bl(a, b, c, d) {
		c = void 0 === c ? "" : c;
		return 1 === b && cl(c, void 0 === d ? null : d) ? !0 : dl(a, c, function(e) {
			return Ua(H(e, Tb, 2), function(f) {
				return A(f, 1) === b
			})
		})
	}

	function cl(a, b) {
		return b ? 13 === Cb(b, Yk) ? D(Ib(b, Jk, 13, Yk), 1) : 14 === Cb(b, Yk) && "" !== a && 1 === wb(Xk(b), 1).length && wb(Xk(b), 1)[0] === a ? D(G(Xk(b), Jk, 2), 1) : !1 : !1
	}

	function el(a, b) {
		b = C(b, 18, 0); - 1 !== b && (a.tmod = b)
	}

	function fl(a) {
		var b = void 0 === b ? "" : b;
		var c = Hc(L) || L;
		return gl(c, a) ? !0 : dl(L, b, function(d) {
			return Ua(wb(d, 3), function(e) {
				return e === a
			})
		})
	}

	function hl(a) {
		return dl(w, void 0 === a ? "" : a, function() {
			return !0
		})
	}

	function gl(a, b) {
		a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
		return !!a && Xa(a.split(","), b.toString())
	}

	function dl(a, b, c) {
		a = Hc(a) || a;
		var d = il(a);
		b && (b = qd(String(b)));
		return Yb(d, function(e, f) {
			return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
		})
	}

	function il(a) {
		a = jl(a);
		var b = {};
		Rc(a, function(c, d) {
			try {
				var e = new Rb(c);
				b[d] = e
			} catch (f) {}
		});
		return b
	}

	function jl(a) {
		return P(we) ? (a = Yj({
			u: a,
			Z: $k()
		}), null != a.h ? (kl("ok"), a = ll(a.h.value)) : (kl(a.i.message), a = {}), a) : ll(a.localStorage)
	}

	function ll(a) {
		try {
			var b = a.getItem("google_adsense_settings");
			if (!b) return {};
			var c = JSON.parse(b);
			return c !== Object(c) ? {} : Xb(c, function(d, e) {
				return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
			})
		} catch (d) {
			return {}
		}
	}

	function kl(a) {
		P(ve) && bj("abg_adsensesettings_lserr", {
			s: a,
			g: P(we),
			c: $k(),
			r: .01
		}, .01)
	};

	function ml(a, b, c, d) {
		nl(new ol(a, b, c, d))
	}

	function ol(a, b, c, d) {
		this.u = a;
		this.i = b;
		this.j = c;
		this.h = d
	}

	function nl(a) {
		Dd(Bd(Yj({
			u: a.u,
			Z: D(a.i, 6)
		}), function(b) {
			pl(a, b, !0)
		}), function() {
			ql(a)
		})
	}

	function pl(a, b, c) {
		Dd(Bd(rl(b), function(d) {
			sl("ok");
			a.h(d)
		}), function() {
			Ik(a.u, b);
			c ? ql(a) : a.h(null)
		})
	}

	function ql(a) {
		Dd(Bd(tl(a), a.h), function() {
			ul(a)
		})
	}

	function ul(a) {
		Xj({
			u: a.u,
			Z: D(a.i, 6),
			ta: 50,
			Ia: function(b) {
				vl(a, b)
			}
		})
	}

	function rl(a) {
		return (a = Hk(a)) ? Cd(a) : Ed(Error("invlocst"))
	}

	function tl(a) {
		a: {
			var b = a.u;
			var c = a.j;a = a.i;
			if (13 === Cb(a, Yk)) b = (b = G(G(Ib(a, Jk, 13, Yk), fk, 2), gk, 2)) && 0 < H(b, be, 1).length ? b : null;
			else {
				if (14 === Cb(a, Yk)) {
					var d = wb(Xk(a), 1),
						e = G(G(G(Xk(a), Jk, 2), fk, 2), gk, 2);
					if (1 === d.length && d[0] === c && e && 0 < H(e, be, 1).length && I(a, 17) === b.location.host) {
						b = e;
						break a
					}
				}
				b = null
			}
		}
		b ? (c = new ie, a = H(b, be, 1), c = Gb(c, 1, a), b = H(b, le, 2), b = Gb(c, 7, b), b = Cd(b)) : b = Ed(Error("invtag"));
		return b
	}

	function vl(a, b) {
		Dd(Bd(b, function(c) {
			pl(a, c, !1)
		}), function(c) {
			sl(c.message);
			a.h(null)
		})
	}

	function sl(a) {
		bj("abg::amalserr", {
			status: a,
			guarding: "true",
			timeout: 50,
			rate: .01
		}, .01)
	};

	function wl(a) {
		Ek(a, {
			atf: 1
		})
	}

	function xl(a, b) {
		(a.google_ama_state = a.google_ama_state || {}).exception = b;
		Ek(a, {
			atf: 0
		})
	};

	function V(a) {
		a.google_ad_modifications || (a.google_ad_modifications = {});
		return a.google_ad_modifications
	}

	function yl(a) {
		a = V(a);
		var b = a.space_collapsing || "none";
		return a.remove_ads_by_default ? {
			Fa: !0,
			tb: b,
			qa: a.ablation_viewport_offset
		} : null
	}

	function zl(a, b) {
		a = V(a);
		a.had_ads_ablation = !0;
		a.remove_ads_by_default = !0;
		a.space_collapsing = "slot";
		a.ablation_viewport_offset = b
	}

	function Al(a) {
		V(L).allow_second_reactive_tag = a
	}

	function Bl() {
		var a = V(window);
		a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
		return a.afg_slotcar_vars
	};

	function Cl(a, b) {
		if (!a) return !1;
		a = a.hash;
		if (!a || !a.indexOf) return !1;
		if (-1 != a.indexOf(b)) return !0;
		b = Dl(b);
		return "go" != b && -1 != a.indexOf(b) ? !0 : !1
	}

	function Dl(a) {
		var b = "";
		Rc(a.split("_"), function(c) {
			b += c.substr(0, 2)
		});
		return b
	};
	$a || !x("Safari") || Oa();

	function El() {
		var a = this;
		this.promise = new p.Promise(function(b, c) {
			a.resolve = b;
			a.reject = c
		})
	};

	function Fl() {
		var a = new El;
		return {
			promise: a.promise,
			resolve: a.resolve
		}
	};

	function Gl(a) {
		a = void 0 === a ? function() {} : a;
		w.google_llp || (w.google_llp = {});
		var b = w.google_llp,
			c = b[7];
		if (c) return c;
		c = Fl();
		b[7] = c;
		a();
		return c
	}

	function Hl(a) {
		return Gl(function() {
			Ic(w.document, a)
		}).promise
	};

	function Il(a) {
		var b = {};
		return {
			enable_page_level_ads: (b.pltais = !0, b),
			google_ad_client: a
		}
	};

	function Jl(a) {
		if (w.google_apltlad || w !== w.top || !a.google_ad_client) return null;
		w.google_apltlad = !0;
		var b = Il(a.google_ad_client),
			c = b.enable_page_level_ads;
		Rc(a, function(d, e) {
			Ii[e] && "google_ad_client" !== e && (c[e] = d)
		});
		c.google_pgb_reactive = 7;
		if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
		return b
	}

	function Kl(a) {
		return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
	};

	function Ll(a, b) {
		this.h = w;
		this.i = a;
		this.j = b
	}

	function Ml(a) {
		P(lf) ? ml(a.h, a.j, a.i.google_ad_client || "", function(b) {
			var c = a.h,
				d = a.i;
			V(L).ama_ran_on_page || b && Nl(c, d, b)
		}) : Xj({
			u: a.h,
			Z: D(a.j, 6),
			ta: 50,
			Ia: function(b) {
				return Ol(a, b)
			}
		})
	}

	function Ol(a, b) {
		Dd(Bd(b, function(c) {
			Pl("ok");
			var d = a.h,
				e = a.i;
			if (!V(L).ama_ran_on_page) {
				var f = Hk(c);
				f ? Nl(d, e, f) : Ik(d, c)
			}
		}), function(c) {
			return Pl(c.message)
		})
	}

	function Pl(a) {
		bj("abg::amalserr", {
			status: a,
			guarding: !0,
			timeout: 50,
			rate: .01
		}, .01)
	}

	function Nl(a, b, c) {
		if (null != A(c, 24)) {
			var d = Wi(a);
			d.availableAbg = !0;
			var e, f;
			d.ablationFromStorage = !!(null == (e = G(c, de, 24)) ? 0 : null == (f = G(e, fe, 3)) ? 0 : Ib(f, ge, 2, he))
		}
		if (Kl(b) && (d = Ak(a, H(c, le, 7)), !d || !xb(d, 8))) return;
		V(L).ama_ran_on_page = !0;
		var g;
		if (null == (g = G(c, qe, 15)) ? 0 : xb(g, 23)) V(a).enable_overlap_observer = !0;
		if ((g = G(c, oe, 13)) && 1 === A(g, 1)) {
			var h = 0,
				k = G(g, pe, 6);
			k && A(k, 3) && (h = A(k, 3) || 0);
			zl(a, h)
		} else if (null == (h = G(c, de, 24)) ? 0 : null == (k = G(h, fe, 3)) ? 0 : Ib(k, ge, 2, he)) Wi(a).ablatingThisPageview = !0, zl(a, 1);
		jd(3,
			[c.toJSON()]);
		var l = b.google_ad_client || "";
		b = Fk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
		var m = Qd(Ud, new Pd(null, b));
		$i(782, function() {
			var q = m;
			try {
				var t = Ak(a, H(c, le, 7)),
					y;
				if (y = t) a: {
					var F = wb(t, 2);
					if (F)
						for (var z = 0; z < F.length; z++)
							if (1 == F[z]) {
								y = !0;
								break a
							} y = !1
				}
				if (y) {
					if (A(t, 4)) {
						y = {};
						var E = new Pd(null, (y.google_package = A(t, 4), y));
						q = Qd(q, E)
					}
					var S = new zj(a, l, c, t, q),
						sb = new rd;
					(new jk(a, S, sb)).start();
					sb.i.then(Fa(wl, a), Fa(xl, a))
				}
			} catch (Lc) {
				Ek(a, {
					atf: -1
				})
			}
		})
	};
	/* 
	 Copyright The Closure Library Authors. 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var Ql = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]);

	function Rl(a, b) {
		return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
	}

	function Sl(a) {
		var b = L.document;
		if (b.currentScript) return Rl(b.currentScript, a);
		b = u(b.scripts);
		for (var c = b.next(); !c.done; c = b.next())
			if (0 === Rl(c.value, a)) return 0;
		return 1
	};

	function Tl(a, b) {
		var c = {},
			d = {},
			e = {},
			f = {};
		return f[fg] = (c[55] = function() {
			return 0 === a
		}, c[23] = function(g) {
			return bl(L, Number(g))
		}, c[24] = function(g) {
			return fl(Number(g))
		}, c[61] = function() {
			return D(b, 6)
		}, c[63] = function() {
			return D(b, 6) || ".google.ch" === I(b, 8)
		}, c), f[gg] = (d[7] = function(g) {
			try {
				var h = window.localStorage
			} catch (l) {
				h = null
			}
			g = Number(g);
			g = void 0 === g ? 0 : g;
			g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
			var k = Uc(h, g);
			h = null === k ? Vc(h, g) : k;
			return null != h ? h : void 0
		}, d), f[hg] = (e[6] = function() {
			return I(b,
				15)
		}, e), f
	};

	function Ul(a) {
		a = void 0 === a ? w : a;
		return a.ggeac || (a.ggeac = {})
	};

	function Vl(a, b) {
		try {
			var c = a.split(".");
			a = w;
			for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
			var f = a;
			if (typeof f === b) return f
		} catch (g) {}
	}

	function Wl() {
		var a = {};
		this[fg] = (a[8] = function(b) {
			try {
				return null != va(b)
			} catch (c) {}
		}, a[9] = function(b) {
			try {
				var c = va(b)
			} catch (d) {
				return
			}
			if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
			return b
		}, a[10] = function() {
			return window == window.top
		}, a[6] = function(b) {
			return Xa(O(Ph).h(), parseInt(b, 10))
		}, a[27] = function(b) {
			b = Vl(b, "boolean");
			return void 0 !== b ? b : void 0
		}, a[60] = function(b) {
			try {
				return !!w.document.querySelector(b)
			} catch (c) {}
		}, a);
		a = {};
		this[gg] =
			(a[3] = function() {
				return $c()
			}, a[6] = function(b) {
				b = Vl(b, "number");
				return void 0 !== b ? b : void 0
			}, a[11] = function(b) {
				b = void 0 === b ? "" : b;
				var c = w;
				b = void 0 === b ? "" : b;
				c = void 0 === c ? window : c;
				b = (c = (c = c.location.href.match(Dc)[3] || null) ? decodeURI(c) : c) ? Sc(c + b) : null;
				return null == b ? void 0 : b % 1E3
			}, a);
		a = {};
		this[hg] = (a[2] = function() {
			return window.location.href
		}, a[3] = function() {
			try {
				return window.top.location.hash
			} catch (b) {
				return ""
			}
		}, a[4] = function(b) {
			b = Vl(b, "string");
			return void 0 !== b ? b : void 0
		}, a[10] = function() {
			try {
				var b =
					w.document;
				return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
			} catch (c) {
				return ""
			}
		}, a[11] = function() {
			try {
				var b, c, d, e, f;
				return null != (f = null == (d = null == (b = va("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = r(d, "find").call(d, function(g) {
					return "Google Chrome" === g.brand
				})) ? void 0 : e.version) ? f : ""
			} catch (g) {
				return ""
			}
		}, a)
	};
	var Xl = [12, 13, 20];

	function Yl() {}
	Yl.prototype.init = function(a, b, c, d) {
		var e = this;
		d = void 0 === d ? {} : d;
		var f = void 0 === d.Ka ? !1 : d.Ka,
			g = void 0 === d.kb ? {} : d.kb;
		d = void 0 === d.mb ? [] : d.mb;
		this.l = a;
		this.A = {};
		this.G = f;
		this.m = g;
		a = {};
		this.i = (a[b] = [], a[4] = [], a);
		this.j = {};
		(b = $h()) && Ra(b.split(",") || [], function(h) {
			(h = parseInt(h, 10)) && (e.j[h] = !0)
		});
		Ra(d, function(h) {
			e.j[h] = !0
		});
		this.h = c;
		return this
	};

	function Zl(a, b, c) {
		var d = [],
			e = $l(a.l, b),
			f;
		if (f = 9 !== b) a.A[b] ? f = !0 : (a.A[b] = !0, f = !1);
		if (f) {
			var g;
			null == (g = a.h) || Ug(g, b, c, d, [], 4);
			return d
		}
		if (!e.length) {
			var h;
			null == (h = a.h) || Ug(h, b, c, d, [], 3);
			return d
		}
		var k = Xa(Xl, b),
			l = [];
		Ra(e, function(q) {
			var t = new Jg;
			if (q = am(a, q, c, t)) 0 !== Cb(t, Kg) && l.push(t), t = q.getId(), d.push(t), bm(a, t, k ? 4 : c), (q = H(q, qg, 2)) && (k ? ph(q, rh(), a.h, t) : ph(q, [c], a.h, t))
		});
		var m;
		null == (m = a.h) || Ug(m, b, c, d, l, 1);
		return d
	}

	function bm(a, b, c) {
		a.i[c] || (a.i[c] = []);
		a = a.i[c];
		Xa(a, b) || a.push(b)
	}

	function cm(a, b) {
		a.l.push.apply(a.l, ka(Sa(Ta(b, function(c) {
			return new Sk(c)
		}), function(c) {
			return !Xa(Xl, c.V())
		})))
	}

	function am(a, b, c, d) {
		var e = O(Xg).h;
		if (!mg(G(b, ag, 3), e)) return null;
		var f = H(b, Mk, 2),
			g = C(b, 6, 0);
		if (g) {
			Bb(d, 1, Kg, g);
			f = e[gg];
			switch (c) {
				case 2:
					var h = f[8];
					break;
				case 1:
					h = f[7]
			}
			c = void 0;
			if (h) try {
				c = h(g), Ab(d, 3, c)
			} catch (k) {}
			return (b = dm(b, c)) ? em(a, [b], 1) : null
		}
		if (g = C(b, 10, 0)) {
			Bb(d, 2, Kg, g);
			h = null;
			switch (c) {
				case 1:
					h = e[gg][9];
					break;
				case 2:
					h = e[gg][10];
					break;
				default:
					return null
			}
			c = h ? h(String(g)) : void 0;
			if (void 0 === c && 1 === C(b, 11, 0)) return null;
			void 0 !== c && Ab(d, 3, c);
			return (b = dm(b, c)) ? em(a, [b], 1) : null
		}
		d = e ? Sa(f, function(k) {
			return mg(G(k,
				ag, 3), e)
		}) : f;
		if (!d.length) return null;
		c = d.length * C(b, 1, 0);
		return (b = C(b, 4, 0)) ? fm(a, b, c, d) : em(a, d, c / 1E3)
	}

	function fm(a, b, c, d) {
		var e = null != a.m[b] ? a.m[b] : 1E3;
		if (0 >= e) return null;
		d = em(a, d, c / e);
		a.m[b] = d ? 0 : e - c;
		return d
	}

	function em(a, b, c) {
		var d = a.j,
			e = Va(b, function(f) {
				return !!d[f.getId()]
			});
		return e ? e : a.G ? null : Nc(b, c)
	}

	function gm(a, b) {
		Kh(uh, function(c) {
			a.j[c] = !0
		}, b);
		Kh(xh, function(c, d) {
			return Zl(a, c, d)
		}, b);
		Kh(yh, function(c) {
			return (a.i[c] || []).concat(a.i[4])
		}, b);
		Kh(Hh, function(c) {
			return cm(a, c)
		}, b);
		Kh(vh, function(c, d) {
			return bm(a, c, d)
		}, b)
	}

	function $l(a, b) {
		return (a = Va(a, function(c) {
			return c.V() == b
		})) && H(a, Ok, 2) || []
	}

	function dm(a, b) {
		var c = H(a, Mk, 2),
			d = c.length,
			e = C(a, 8, 0);
		a = d * C(a, 1, 0) - 1;
		b = void 0 !== b ? b : Math.floor(1E3 * Qc());
		d = (b - e) % d;
		if (b < e || b - e - d >= a) return null;
		c = c[d];
		e = O(Xg).h;
		return !c || e && !mg(G(c, ag, 3), e) ? null : c
	};

	function hm() {
		this.h = function() {}
	}

	function im(a) {
		O(hm).h(a)
	};
	var jm, km, lm, mm, nm, om;

	function pm(a, b, c, d) {
		var e = 1;
		d = void 0 === d ? Ul() : d;
		e = void 0 === e ? 0 : e;
		var f = void 0 === f ? new Tg(null != (mm = null == (jm = G(a, Uk, 5)) ? void 0 : C(jm, 2, 0)) ? mm : 0, null != (nm = null == (km = G(a, Uk, 5)) ? void 0 : C(km, 4, 0)) ? nm : 0, null != (om = null == (lm = G(a, Uk, 5)) ? void 0 : D(lm, 3)) ? om : !1) : f;
		d.hasOwnProperty("init-done") ? (Lh(Hh, d)(Ta(H(a, Sk, 2), function(g) {
			return g.toJSON()
		})), Lh(Ih, d)(Ta(H(a, qg, 1), function(g) {
			return g.toJSON()
		}), e), b && Lh(Jh, d)(b), qm(d, e)) : (gm(O(Yl).init(H(a, Sk, 2), e, f, c), d), Mh(d), Nh(d), Oh(d), qm(d, e), ph(H(a, qg, 1), [e], f,
			void 0, !0), ch = ch || !(!c || !c.hb), im(O(Wl)), b && im(b))
	}

	function qm(a, b) {
		a = void 0 === a ? Ul() : a;
		b = void 0 === b ? 0 : b;
		var c = a,
			d = b;
		d = void 0 === d ? 0 : d;
		Qh(O(Ph), c, d);
		rm(a, b);
		O(hm).h = Lh(Jh, a);
		O(yf).m()
	}

	function rm(a, b) {
		var c = O(yf);
		c.i = function(d, e) {
			return Lh(Ah, a, function() {
				return !1
			})(d, e, b)
		};
		c.j = function(d, e) {
			return Lh(Bh, a, function() {
				return 0
			})(d, e, b)
		};
		c.l = function(d, e) {
			return Lh(Ch, a, function() {
				return ""
			})(d, e, b)
		};
		c.h = function(d, e) {
			return Lh(Dh, a, function() {
				return []
			})(d, e, b)
		};
		c.m = function() {
			Lh(wh, a)(b)
		}
	};

	function sm(a, b, c) {
		var d = V(a);
		if (d.plle) qm(Ul(a), 1);
		else {
			d.plle = !0;
			try {
				var e = a.localStorage
			} catch (f) {
				e = null
			}
			d = e;
			null == Uc(d, "goog_pem_mod") && Vc(d, "goog_pem_mod");
			d = G(b, Qk, 12);
			e = D(b, 9);
			pm(d, Tl(c, b), {
				Ka: e && !!a.google_disable_experiments,
				hb: e
			}, Ul(a));
			if (c = I(b, 15)) c = Number(c), O(Ph).l(c);
			if (c = I(b, 10)) c = Number(c), O(Ph).i(c);
			b = u(wb(b, 19));
			for (c = b.next(); !c.done; c = b.next()) c = c.value, O(Ph).i(c);
			O(Ph).j(12);
			O(Ph).j(10);
			a = Hc(a) || a;
			Cl(a.location, "google_mc_lab") && O(Ph).i(44738307)
		}
	};

	function tm(a, b, c) {
		a = a.style;
		a.border = "none";
		a.height = c + "px";
		a.width = b + "px";
		a.margin = 0;
		a.padding = 0;
		a.position = "relative";
		a.visibility = "visible";
		a.backgroundColor = "transparent"
	};
	var um = {
		"120x90": !0,
		"160x90": !0,
		"180x90": !0,
		"200x90": !0,
		"468x15": !0,
		"728x15": !0
	};

	function vm(a, b) {
		if (15 == b) {
			if (728 <= a) return 728;
			if (468 <= a) return 468
		} else if (90 == b) {
			if (200 <= a) return 200;
			if (180 <= a) return 180;
			if (160 <= a) return 160;
			if (120 <= a) return 120
		}
		return null
	};

	function W(a, b, c, d) {
		d = void 0 === d ? !1 : d;
		Ai.call(this, a, b);
		this.da = c;
		this.ib = d
	}
	v(W, Ai);
	W.prototype.pa = function() {
		return this.da
	};
	W.prototype.i = function(a, b, c) {
		b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
	};

	function wm(a) {
		return function(b) {
			return !!(b.da & a)
		}
	};
	var xm = {},
		ym = (xm.image_stacked = 1 / 1.91, xm.image_sidebyside = 1 / 3.82, xm.mobile_banner_image_sidebyside = 1 / 3.82, xm.pub_control_image_stacked = 1 / 1.91, xm.pub_control_image_sidebyside = 1 / 3.82, xm.pub_control_image_card_stacked = 1 / 1.91, xm.pub_control_image_card_sidebyside = 1 / 3.74, xm.pub_control_text = 0, xm.pub_control_text_card = 0, xm),
		zm = {},
		Am = (zm.image_stacked = 80, zm.image_sidebyside = 0, zm.mobile_banner_image_sidebyside = 0, zm.pub_control_image_stacked = 80, zm.pub_control_image_sidebyside = 0, zm.pub_control_image_card_stacked =
			85, zm.pub_control_image_card_sidebyside = 0, zm.pub_control_text = 80, zm.pub_control_text_card = 80, zm),
		Bm = {},
		Cm = (Bm.pub_control_image_stacked = 100, Bm.pub_control_image_sidebyside = 200, Bm.pub_control_image_card_stacked = 150, Bm.pub_control_image_card_sidebyside = 250, Bm.pub_control_text = 100, Bm.pub_control_text_card = 150, Bm);

	function Dm(a) {
		var b = 0;
		a.T && b++;
		a.J && b++;
		a.K && b++;
		if (3 > b) return {
			M: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
		};
		b = a.T.split(",");
		var c = a.K.split(",");
		a = a.J.split(",");
		if (b.length !== c.length || b.length !== a.length) return {
			M: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
		};
		if (2 < b.length) return {
			M: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
		};
		for (var d = [], e = [], f = 0; f < b.length; f++) {
			var g =
				Number(c[f]);
			if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
				M: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
			};
			d.push(g);
			g = Number(a[f]);
			if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
				M: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
			};
			e.push(g)
		}
		return {
			K: d,
			J: e,
			Na: b
		}
	}

	function Em(a) {
		return 1200 <= a ? {
			width: 1200,
			height: 600
		} : 850 <= a ? {
			width: a,
			height: Math.floor(.5 * a)
		} : 550 <= a ? {
			width: a,
			height: Math.floor(.6 * a)
		} : 468 <= a ? {
			width: a,
			height: Math.floor(.7 * a)
		} : {
			width: a,
			height: Math.floor(3.44 * a)
		}
	};
	var Fm = Za("script");

	function Gm(a, b, c, d, e, f, g, h, k, l, m, q) {
		this.A = a;
		this.U = b;
		this.da = void 0 === c ? null : c;
		this.h = void 0 === d ? null : d;
		this.P = void 0 === e ? null : e;
		this.i = void 0 === f ? null : f;
		this.j = void 0 === g ? null : g;
		this.H = void 0 === h ? null : h;
		this.N = void 0 === k ? null : k;
		this.l = void 0 === l ? null : l;
		this.m = void 0 === m ? null : m;
		this.O = void 0 === q ? null : q;
		this.R = this.C = this.G = null
	}
	Gm.prototype.size = function() {
		return this.U
	};

	function Hm(a, b, c) {
		null != a.da && (c.google_responsive_formats = a.da);
		null != a.P && (c.google_safe_for_responsive_override = a.P);
		null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
		null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
		var d = a.m || c.google_ad_width;
		null != d && (c.google_resizing_width = d);
		d = a.l || c.google_ad_height;
		null != d && (c.google_resizing_height = d);
		d = a.size().h(b);
		var e = a.size().height();
		if (!c.google_ad_resize) {
			c.google_ad_width = d;
			c.google_ad_height =
				e;
			var f = a.size();
			b = f.h(b) + "x" + f.height();
			c.google_ad_format = b;
			c.google_responsive_auto_format = a.A;
			null != a.h && (c.armr = a.h);
			c.google_ad_resizable = !0;
			c.google_override_format = 1;
			c.google_loader_features_used = 128;
			!0 === a.i && (c.gfwrnh = a.size().height() + "px")
		}
		null != a.H && (c.gfwroml = a.H);
		null != a.N && (c.gfwromr = a.N);
		null != a.l && (c.gfwroh = a.l);
		null != a.m && (c.gfwrow = a.m);
		null != a.O && (c.gfwroz = a.O);
		null != a.G && (c.gml = a.G);
		null != a.C && (c.gmr = a.C);
		null != a.R && (c.gzi = a.R);
		b = Hc(window) || window;
		Cl(b.location, "google_responsive_dummy_ad") &&
			(Xa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
				googMsgType: "adpnt",
				key_value: [{
					key: "qid",
					value: "DUMMY_AD"
				}]
			}), c.dash = "<" + Fm + ">window.top.postMessage('" + a + "', '*');\n          </" + Fm + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
	};
	var Im = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

	function Jm(a, b) {
		Ai.call(this, a, b)
	}
	v(Jm, Ai);
	Jm.prototype.h = function(a) {
		return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
	};

	function Km(a, b) {
		Lm(a, b);
		if ("pedestal" == b.google_content_recommendation_ui_type) return new Gm(9, new Jm(a, Math.floor(a * b.google_phwr)));
		var c = Bc();
		468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * ym.mobile_banner_image_sidebyside + Am.mobile_banner_image_sidebyside) + 96), a = {
			aa: a,
			$: c,
			J: 1,
			K: 12,
			T: "mobile_banner_image_sidebyside"
		}) : (a = Em(a), a = {
			aa: a.width,
			$: a.height,
			J: 1,
			K: 13,
			T: "image_sidebyside"
		}) : (a = Em(a), a = {
			aa: a.width,
			$: a.height,
			J: 4,
			K: 2,
			T: "image_stacked"
		});
		Mm(b, a);
		return new Gm(9, new Jm(a.aa, a.$))
	}

	function Nm(a, b) {
		Lm(a, b);
		var c = Dm({
			K: b.google_content_recommendation_rows_num,
			J: b.google_content_recommendation_columns_num,
			T: b.google_content_recommendation_ui_type
		});
		if (c.M) a = {
			aa: 0,
			$: 0,
			J: 0,
			K: 0,
			T: "image_stacked",
			M: c.M
		};
		else {
			var d = 2 === c.Na.length && 468 <= a ? 1 : 0;
			var e = c.Na[d];
			e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
			var f = Cm[e];
			for (var g = c.J[d]; a / g < f && 1 < g;) g--;
			f = g;
			c = c.K[d];
			d = Math.floor(((a - 8 * f - 8) / f * ym[e] + Am[e]) * c + 8 * c + 8);
			a = 1500 < a ? {
					width: 0,
					height: 0,
					rb: "Calculated slot width is too large: " + a
				} :
				1500 < d ? {
					width: 0,
					height: 0,
					rb: "Calculated slot height is too large: " + d
				} : {
					width: a,
					height: d
				};
			a = {
				aa: a.width,
				$: a.height,
				J: f,
				K: c,
				T: e
			}
		}
		if (a.M) throw new U(a.M);
		Mm(b, a);
		return new Gm(9, new Jm(a.aa, a.$))
	}

	function Lm(a, b) {
		if (0 >= a) throw new U("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
	}

	function Mm(a, b) {
		a.google_content_recommendation_ui_type = b.T;
		a.google_content_recommendation_columns_num = b.J;
		a.google_content_recommendation_rows_num = b.K
	};

	function Om(a, b) {
		Ai.call(this, a, b)
	}
	v(Om, Ai);
	Om.prototype.h = function() {
		return this.minWidth()
	};
	Om.prototype.i = function(a, b, c) {
		zi(a, c);
		b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
	};
	var Pm = {
		"image-top": function(a) {
			return 600 >= a ? 284 + .414 * (a - 250) : 429
		},
		"image-middle": function(a) {
			return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
		},
		"image-side": function(a) {
			return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
		},
		"text-only": function(a) {
			return 500 >= a ? 187 - .228 * (a - 250) : 130
		},
		"in-article": function(a) {
			return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
		}
	};

	function Qm(a, b) {
		Ai.call(this, a, b)
	}
	v(Qm, Ai);
	Qm.prototype.h = function() {
		return Math.min(1200, this.minWidth())
	};

	function Rm(a, b, c, d, e) {
		var f = e.google_ad_layout || "image-top";
		if ("in-article" == f) {
			var g = a;
			if ("false" == e.google_full_width_responsive) a = g;
			else if (a = ui(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
			else if (a = Wf(b))
				if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
					b: {
						g = c;
						for (var h = 0; 100 > h && g.parentElement; ++h) {
							for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
								var m = k[l];
								if (m != g && xi(b, m)) break b
							}
							g = g.parentElement;
							g.style.width = "100%";
							g.style.height = "auto"
						}
					}
					zi(b, c)
				}
			else a = g;
			else a = g
		}
		if (250 > a) throw new U("Fluid responsive ads must be at least 250px wide: availableWidth=" +
			a);
		a = Math.min(1200, Math.floor(a));
		if (d && "in-article" != f) {
			f = Math.ceil(d);
			if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
			return new Gm(11, new Ai(a, f))
		}
		if ("in-article" != f && (d = e.google_ad_layout_key)) {
			f = "" + d;
			b = Math.pow(10, 3);
			if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
				e = [];
				for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
				b = e
			} else b = null;
			if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
			f = (a + -725) / 1E3;
			c = 0;
			d = 1;
			e = b.length;
			for (g = 0; g < e; g++) c += b[g] * d, d *= f;
			f = Math.ceil(1E3 *
				c - -725 + 10);
			if (isNaN(f)) throw new U("Invalid height: height=" + f);
			if (50 > f) throw new U("Fluid responsive ads must be at least 50px tall: height=" + f);
			if (1200 < f) throw new U("Fluid responsive ads must be at most 1200px tall: height=" + f);
			return new Gm(11, new Ai(a, f))
		}
		d = Pm[f];
		if (!d) throw new U("Invalid data-ad-layout value: " + f);
		c = Ei(c, b);
		b = Wf(b);
		b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
		return new Gm(11, "in-article" == f ? new Qm(a, b) : new Ai(a, b))
	};

	function Sm(a) {
		return function(b) {
			for (var c = a.length - 1; 0 <= c; --c)
				if (!a[c](b)) return !1;
			return !0
		}
	}

	function Tm(a, b) {
		for (var c = Um.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
			var g = c[f];
			if (a(g)) {
				if (!b || b(g)) return g;
				null === e && (e = g)
			}
		}
		return e
	};
	var Vm = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
		Um = [Vm[6], Vm[12], Vm[3], Vm[0], Vm[7], Vm[14], Vm[1], Vm[8], Vm[10], Vm[4], Vm[15], Vm[2], Vm[11], Vm[5], Vm[13], Vm[9], Vm[16]];

	function Wm(a, b, c, d, e) {
		"false" == e.google_full_width_responsive ? c = {
			D: a,
			F: 1
		} : "autorelaxed" == b && e.google_full_width_responsive || Xm(b) || e.google_ad_resize ? (b = vi(a, c, d, e), c = !0 !== b ? {
			D: a,
			F: b
		} : {
			D: Wf(c) || a,
			F: !0
		}) : c = {
			D: a,
			F: 2
		};
		b = c.F;
		return !0 !== b ? {
			D: a,
			F: b
		} : d.parentElement ? {
			D: c.D,
			F: b
		} : {
			D: a,
			F: b
		}
	}

	function Ym(a, b, c, d, e) {
		var f = $i(247, function() {
				return Wm(a, b, c, d, e)
			}),
			g = f.D;
		f = f.F;
		var h = !0 === f,
			k = K(d.style.width),
			l = K(d.style.height),
			m = Zm(g, b, c, d, e, h);
		g = m.Y;
		h = m.W;
		var q = m.pa;
		m = m.Ma;
		var t = $m(b, q),
			y, F = (y = Bi(d, c, "marginLeft", K)) ? y + "px" : "",
			z = (y = Bi(d, c, "marginRight", K)) ? y + "px" : "";
		y = Bi(d, c, "zIndex") || "";
		return new Gm(t, g, q, null, m, f, h, F, z, l, k, y)
	}

	function Xm(a) {
		return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
	}

	function Zm(a, b, c, d, e, f) {
		b = "auto" == b ? .25 >= a / Math.min(1200, Wf(c)) ? 4 : 3 : ti(b);
		var g = !1,
			h = !1;
		if (488 > Wf(c)) {
			var k = oi(d, c);
			var l = Ei(d, c);
			g = !l && k;
			h = l && k
		}
		l = [Ci(a), wm(b)];
		l.push(Di(488 > Wf(c), c, d, h));
		null != e.google_max_responsive_height && l.push(Gi(e.google_max_responsive_height));
		var m = [function(t) {
			return !t.ib
		}];
		if (g || h) g = Hi(c, d), m.push(Gi(g));
		var q = Tm(Sm(l), Sm(m));
		if (!q) throw new U("No slot size for availableWidth=" + a);
		l = $i(248, function() {
			var t;
			a: if (f) {
				if (e.gfwrnh && (t = K(e.gfwrnh))) {
					t = {
						Y: new Om(a, t),
						W: !0
					};
					break a
				}
				t = a / 1.2;
				var y = Math;
				var F = y.min;
				if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var z = Infinity;
				else {
					z = d;
					var E = Infinity;
					do {
						var S = Bi(z, c, "height", K);
						S && (E = Math.min(E, S));
						(S = Bi(z, c, "maxHeight", K)) && (E = Math.min(E, S))
					} while ((z = z.parentElement) && "HTML" != z.tagName);
					z = E
				}
				y = F.call(y, t, z);
				if (y < .5 * t || 100 > y) y = t;
				P(hf) && !Ei(d, c) && (y = Math.max(y, .5 * Vf(c).clientHeight));
				t = {
					Y: new Om(a, Math.floor(y)),
					W: y < t ? 102 : !0
				}
			} else t = {
				Y: q,
				W: 100
			};
			return t
		});
		g = l.Y;
		l = l.W;
		return "in-article" === e.google_ad_layout &&
			an(c) ? {
				Y: bn(a, c, d, g, e),
				W: !1,
				pa: b,
				Ma: k
			} : {
				Y: g,
				W: l,
				pa: b,
				Ma: k
			}
	}

	function $m(a, b) {
		if ("auto" == a) return 1;
		switch (b) {
			case 2:
				return 2;
			case 1:
				return 3;
			case 4:
				return 4;
			case 3:
				return 5;
			case 6:
				return 6;
			case 5:
				return 7;
			case 7:
				return 8
		}
		throw Error("bad mask");
	}

	function bn(a, b, c, d, e) {
		var f = e.google_ad_height || Bi(c, b, "height", K);
		b = Rm(a, b, c, f, e).size();
		return b.minWidth() * b.height() > a * d.height() ? new W(b.minWidth(), b.height(), 1) : d
	}

	function an(a) {
		return P(ff) || a.location && "#hffwroe2etoq" == a.location.hash
	};

	function cn(a, b, c, d, e) {
		var f;
		(f = Wf(b)) ? 488 > Wf(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, zi(b, c), f = {
			D: f,
			F: !0
		}) : f = {
			D: a,
			F: 5
		} : f = {
			D: a,
			F: 4
		}: f = {
			D: a,
			F: 10
		};
		var g = f;
		f = g.D;
		g = g.F;
		if (!0 !== g || a == f) return new Gm(12, new Ai(a, d), null, null, !0, g, 100);
		a = Zm(f, "auto", b, c, e, !0);
		return new Gm(1, a.Y, a.pa, 2, !0, g, a.W)
	};

	function dn(a, b) {
		var c = b.google_ad_format;
		if ("autorelaxed" == c) {
			a: {
				if ("pedestal" != b.google_content_recommendation_ui_type)
					for (a = u(Im), c = a.next(); !c.done; c = a.next())
						if (null != b[c.value]) {
							b = !0;
							break a
						} b = !1
			}
			return b ? 9 : 5
		}
		if (Xm(c)) return 1;
		if ("link" === c) return 4;
		if ("fluid" == c) {
			if (c = "in-article" === b.google_ad_layout) c = P(gf) || P(ff) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
			return c ? (en(b), 1) : 8
		}
		if (27 === b.google_reactive_ad_format) return en(b), 1
	}

	function fn(a, b, c, d, e) {
		e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Bi(b, d, "width", K) || c.google_ad_width || 0;
		4 === a && (c.google_ad_format = "auto", a = 1);
		var f = (f = gn(a, e, b, c, d)) ? f : Ym(e, c.google_ad_format, d, b, c);
		f.size().i(d, c, b);
		Hm(f, e, c);
		1 != a && (a = f.size().height(), b.style.height = a + "px")
	}

	function gn(a, b, c, d, e) {
		var f = d.google_ad_height || Bi(c, e, "height", K);
		switch (a) {
			case 5:
				return f = $i(247, function() {
					return Wm(b, d.google_ad_format, e, c, d)
				}), a = f.D, f = f.F, !0 === f && b != a && zi(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Km(a, d);
			case 9:
				return Nm(b, d);
			case 8:
				return Rm(b, e, c, f, d);
			case 10:
				return cn(b, e, c, f, d)
		}
	}

	function en(a) {
		a.google_ad_format = "auto";
		a.armr = 3
	};

	function hn(a, b) {
		var c = Hc(b);
		if (c) {
			c = Wf(c);
			var d = Mc(a, b) || {},
				e = d.direction;
			if ("0px" === d.width && "none" !== d.cssFloat) return -1;
			if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
			if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
		}
		return -1
	};
	var jn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
		kn = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
		ln = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
		mn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
		nn = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

	function on(a) {
		Yi.Ta(function(b) {
			b.shv = String(a);
			b.mjsv = "m202203210101";
			var c = O(Ph).h(),
				d = V(w);
			d.eids || (d.eids = []);
			b.eid = c.concat(d.eids).join(",")
		})
	};

	function pn(a) {
		var b = a.nb;
		return a.eb || ("dev" === b ? "dev" : "")
	};
	var qn = {},
		rn = (qn.google_ad_modifications = !0, qn.google_analytics_domain_name = !0, qn.google_analytics_uacct = !0, qn.google_pause_ad_requests = !0, qn.google_user_agent_client_hint = !0, qn);

	function sn(a) {
		return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
	}

	function tn(a) {
		if (a = a.innerText || a.innerHTML)
			if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
		return null
	}

	function un(a) {
		switch (a) {
			case "true":
				return !0;
			case "false":
				return !1;
			case "null":
				return null;
			case "undefined":
				break;
			default:
				try {
					var b = a.match(/^(?:'(.*)'|"(.*)")$/);
					if (b) return b[1] || b[2] || "";
					if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
						var c = parseFloat(a);
						return c === c ? c : void 0
					}
				} catch (d) {}
		}
	};

	function vn(a) {
		if (a.google_ad_client) return String(a.google_ad_client);
		var b, c, d, e, f;
		if (null != (e = null != (d = null == (b = V(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
		else {
			b: {
				b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
					"i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !pd() ? sn : tn;
				for (c = b.length - 1; 0 <= c; c--)
					if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
						b = d;
						break b
					} b = null
			}
			if (b) {
				a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
				for (c = {}; d = a.exec(b);) c[d[1]] = un(d[2]);
				b = c.google_ad_client ? c.google_ad_client : ""
			} else b = ""
		}
		return null != (f = b) ? f : ""
	};
	var wn = "undefined" === typeof sttc ? void 0 : sttc;

	function xn(a) {
		var b = Yi;
		try {
			return Yf(a, Zf), new Vk(JSON.parse(a))
		} catch (c) {
			b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
				d.jspb = String(a)
			})
		}
		return new Vk
	};
	var yn = O(yf).h(mf.h, mf.defaultValue);

	function zn() {
		var a = L.document;
		a = void 0 === a ? window.document : a;
		dd(yn, a)
	};
	var An = O(yf).h(nf.h, nf.defaultValue);

	function Bn() {
		var a = L.document;
		a = void 0 === a ? window.document : a;
		dd(An, a)
	};
	var Cn = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

	function Dn() {
		this.h = null;
		this.j = !1;
		this.l = Math.random();
		this.i = this.I;
		this.m = null
	}
	n = Dn.prototype;
	n.Ta = function(a) {
		this.h = a
	};
	n.Va = function(a) {
		this.j = a
	};
	n.Ua = function(a) {
		this.i = a
	};
	n.I = function(a, b, c, d, e) {
		if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
		Vh(b) || (b = new Uh(b, {
			context: a,
			id: void 0 === e ? "jserror" : e
		}));
		if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
		w.google_js_errors = w.google_js_errors || [];
		w.google_js_errors.push(b);
		if (!w.error_rep_loaded) {
			a = md(Cn);
			var f;
			Ic(w.document, null != (f = this.m) ? f : gc(pc(a).toString()));
			w.error_rep_loaded = !0
		}
		return !1
	};
	n.oa = function(a, b, c) {
		try {
			return b()
		} catch (d) {
			if (!this.i(a, d, .01, c, "jserror")) throw d;
		}
	};
	n.Oa = function(a, b, c, d) {
		var e = this;
		return function() {
			var f = ta.apply(0, arguments);
			return e.oa(a, function() {
				return b.apply(c, f)
			}, d)
		}
	};
	n.Pa = function(a, b) {
		var c = this;
		b.catch(function(d) {
			d = d ? d : "unknown rejection";
			c.I(a, d instanceof Error ? d : Error(d))
		})
	};

	function En(a, b, c) {
		var d = window;
		return function() {
			var e = bi(),
				f = 3;
			try {
				var g = b.apply(this, arguments)
			} catch (h) {
				f = 13;
				if (c) return c(a, h), g;
				throw h;
			} finally {
				d.google_measure_js_timing && e && (e = {
					label: a.toString(),
					value: e,
					duration: (bi() || 0) - e,
					type: f
				}, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
			}
			return g
		}
	}

	function Fn(a, b) {
		return En(a, b, function(c, d) {
			(new Dn).I(c, d)
		})
	};

	function Gn(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
	}

	function Hn(a, b) {
		return "&" + a + "=" + b.toFixed(3)
	}

	function In() {
		var a = new p.Set,
			b = ej();
		try {
			if (!b) return a;
			for (var c = b.pubads(), d = u(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
		} catch (f) {}
		return a
	}

	function Jn(a) {
		a = a.id;
		return null != a && (In().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
	}

	function Kn(a, b, c) {
		if (!a.sources) return !1;
		switch (Ln(a)) {
			case 2:
				var d = Mn(a);
				if (d) return c.some(function(f) {
					return Nn(d, f)
				});
			case 1:
				var e = On(a);
				if (e) return b.some(function(f) {
					return Nn(e, f)
				})
		}
		return !1
	}

	function Ln(a) {
		if (!a.sources) return 0;
		a = a.sources.filter(function(b) {
			return b.previousRect && b.currentRect
		});
		if (1 <= a.length) {
			a = a[0];
			if (a.previousRect.top < a.currentRect.top) return 2;
			if (a.previousRect.top > a.currentRect.top) return 1
		}
		return 0
	}

	function On(a) {
		return Pn(a, function(b) {
			return b.currentRect
		})
	}

	function Mn(a) {
		return Pn(a, function(b) {
			return b.previousRect
		})
	}

	function Pn(a, b) {
		return a.sources.reduce(function(c, d) {
			d = b(d);
			return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
		}, null)
	}

	function Qn() {
		Qj.call(this);
		this.i = this.h = this.P = this.O = this.H = 0;
		this.Ba = this.ya = Number.NEGATIVE_INFINITY;
		this.ua = this.wa = this.xa = this.za = this.Ea = this.m = this.Da = this.U = 0;
		this.va = !1;
		this.R = this.N = this.C = 0;
		var a = document.querySelector("[data-google-query-id]");
		this.Ca = a ? a.getAttribute("data-google-query-id") : null;
		this.l = null;
		this.Aa = !1;
		this.ga = function() {}
	}
	v(Qn, Qj);

	function Rn() {
		var a = new Qn;
		if (P( of )) {
			var b = window;
			if (!b.google_plmetrics && window.PerformanceObserver) {
				b.google_plmetrics = !0;
				b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
				for (var c = b.next(); !c.done; c = b.next()) c = c.value, Sn(a).observe({
					type: c,
					buffered: !0
				});
				Tn(a)
			}
		}
	}

	function Sn(a) {
		a.l || (a.l = new PerformanceObserver(Fn(640, function(b) {
			var c = Un !== window.scrollX || Vn !== window.scrollY ? [] : Wn,
				d = Xn();
			b = u(b.getEntries());
			for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
				case "layout-shift":
					var f = a;
					if (!e.hadRecentInput) {
						f.H += Number(e.value);
						Number(e.value) > f.O && (f.O = Number(e.value));
						f.P += 1;
						var g = Kn(e, c, d);
						g && (f.m += e.value, f.za++);
						if (5E3 < e.startTime - f.ya || 1E3 < e.startTime - f.Ba) f.ya = e.startTime, f.h = 0, f.i = 0;
						f.Ba = e.startTime;
						f.h += e.value;
						g && (f.i += e.value);
						f.h > f.U && (f.U = f.h, f.Ea = f.i, f.Da = e.startTime + e.duration)
					}
					break;
				case "largest-contentful-paint":
					a.xa = Math.floor(e.renderTime || e.loadTime);
					a.wa = e.size;
					break;
				case "first-input":
					a.ua = Number((e.processingStart - e.startTime).toFixed(3));
					a.va = !0;
					break;
				case "longtask":
					e = Math.max(0, e.duration - 50), a.C += e, a.N = Math.max(a.N, e), a.R += 1
			}
		})));
		return a.l
	}

	function Tn(a) {
		var b = Fn(641, function() {
				var d = document;
				2 == (d.prerendering ? 3 : {
					visible: 1,
					hidden: 2,
					prerender: 3,
					preview: 4,
					unloaded: 5
				} [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Yn(a)
			}),
			c = Fn(641, function() {
				return void Yn(a)
			});
		document.addEventListener("visibilitychange", b);
		document.addEventListener("unload", c);
		a.ga = function() {
			document.removeEventListener("visibilitychange", b);
			document.removeEventListener("unload", c);
			Sn(a).disconnect()
		}
	}
	Qn.prototype.j = function() {
		Qj.prototype.j.call(this);
		this.ga()
	};

	function Yn(a) {
		if (!a.Aa) {
			a.Aa = !0;
			Sn(a).takeRecords();
			var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift && (b += Hn("cls", a.H), b += Hn("mls", a.O), b += Gn("nls", a.P), window.LayoutShiftAttribution && (b += Hn("cas", a.m), b += Gn("nas", a.za)), b += Hn("wls", a.U), b += Hn("tls", a.Da), window.LayoutShiftAttribution && (b += Hn("was", a.Ea)));
			window.LargestContentfulPaint && (b += Gn("lcp", a.xa), b += Gn("lcps", a.wa));
			window.PerformanceEventTiming && a.va && (b += Gn("fid", a.ua));
			window.PerformanceLongTaskTiming &&
				(b += Gn("cbt", a.C), b += Gn("mbt", a.N), b += Gn("nlt", a.R));
			for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Jn(e.value) && c++;
			b += Gn("nif", c);
			b += Gn("ifi", od(window));
			c = O(Ph).h();
			b += "&eid=" + encodeURIComponent(c.join());
			b += "&top=" + (w === w.top ? 1 : 0);
			b += a.Ca ? "&qqid=" + encodeURIComponent(a.Ca) : Gn("pvsid", ed(w));
			window.googletag && (b += "&gpt=1");
			window.fetch(b, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
			a.A || (a.A = !0, a.j())
		}
	}

	function Nn(a, b) {
		var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
		a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
		return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
	}

	function Xn() {
		var a = [].concat(ka(document.getElementsByTagName("iframe"))).filter(Jn),
			b = [].concat(ka(In())).map(function(c) {
				return document.getElementById(c)
			}).filter(function(c) {
				return null !== c
			});
		Un = window.scrollX;
		Vn = window.scrollY;
		return Wn = [].concat(ka(a), ka(b)).map(function(c) {
			return c.getBoundingClientRect()
		})
	}
	var Un = void 0,
		Vn = void 0,
		Wn = [];
	var X = {
			issuerOrigin: "https://attestation.android.com",
			issuancePath: "/att/i",
			redemptionPath: "/att/r"
		},
		Y = {
			issuerOrigin: "https://pagead2.googlesyndication.com",
			issuancePath: "/dtt/i",
			redemptionPath: "/dtt/r",
			getStatePath: "/dtt/s"
		};
	var Zn = O(yf).h(wf.h, wf.defaultValue);

	function $n(a, b, c) {
		Qj.call(this);
		var d = this;
		this.i = a;
		this.h = [];
		b && ao() && this.h.push(X);
		c && this.h.push(Y);
		if (document.hasTrustToken && !P(tf)) {
			var e = new p.Map;
			this.h.forEach(function(f) {
				e.set(f.issuerOrigin, {
					issuerOrigin: f.issuerOrigin,
					state: d.i ? 1 : 12,
					hasRedemptionRecord: !1
				})
			});
			window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(ka(e), ka(window.goog_tt_state_map))) : e;
			window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
				new p.Map)
		}
	}
	v($n, Qj);

	function ao() {
		var a = void 0 === a ? window : a;
		a = a.navigator.userAgent;
		var b = /Chrome/.test(a);
		return /Android/.test(a) && b
	}

	function bo() {
		var a = void 0 === a ? window.document : a;
		dd(Zn, a)
	}

	function co(a, b) {
		return a || ".google.ch" === b || "function" === typeof L.__tcfapi
	}

	function Z(a, b, c) {
		var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
		e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
	}

	function eo() {
		var a = X.issuerOrigin + X.redemptionPath,
			b = {
				keepalive: !0,
				trustToken: {
					type: "token-redemption",
					issuer: X.issuerOrigin,
					refreshPolicy: "none"
				}
			};
		Z(X.issuerOrigin, 2);
		return window.fetch(a, b).then(function(c) {
			if (!c.ok) throw Error(c.status + ": Network response was not ok!");
			Z(X.issuerOrigin, 6, !0)
		}).catch(function(c) {
			c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
		})
	}

	function fo() {
		var a = X.issuerOrigin + X.issuancePath;
		Z(X.issuerOrigin, 8);
		return window.fetch(a, {
			keepalive: !0,
			trustToken: {
				type: "token-request"
			}
		}).then(function(b) {
			if (!b.ok) throw Error(b.status + ": Network response was not ok!");
			Z(X.issuerOrigin, 10);
			return eo()
		}).catch(function(b) {
			if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), eo();
			Z(X.issuerOrigin, 9)
		})
	}

	function go() {
		Z(X.issuerOrigin, 13);
		return document.hasTrustToken(X.issuerOrigin).then(function(a) {
			return a ? eo() : fo()
		})
	}

	function ho() {
		Z(Y.issuerOrigin, 13);
		if (p.Promise) {
			var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
					return e
				}).catch(function(e) {
					return p.Promise.reject({
						state: 19,
						error: e
					})
				}),
				b = Y.issuerOrigin + Y.redemptionPath,
				c = {
					keepalive: !0,
					trustToken: {
						type: "token-redemption",
						refreshPolicy: "none"
					}
				};
			Z(Y.issuerOrigin, 16);
			a = a.then(function(e) {
				return window.fetch(b, c).then(function(f) {
					if (!f.ok) throw Error(f.status + ": Network response was not ok!");
					Z(Y.issuerOrigin, 18, !0)
				}).catch(function(f) {
					if (f && "NoModificationAllowedError" ===
						f.name) Z(Y.issuerOrigin, 18, !0);
					else {
						if (e) return p.Promise.reject({
							state: 17,
							error: f
						});
						Z(Y.issuerOrigin, 17)
					}
				})
			}).then(function() {
				return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
					return e
				}).catch(function(e) {
					return p.Promise.reject({
						state: 19,
						error: e
					})
				})
			}).then(function(e) {
				var f = Y.issuerOrigin + Y.getStatePath;
				Z(Y.issuerOrigin, 20);
				return window.fetch(f + "?ht=" + e, {
					trustToken: {
						type: "send-redemption-record",
						issuers: [Y.issuerOrigin]
					}
				}).then(function(g) {
					if (!g.ok) throw Error(g.status + ": Network response was not ok!");
					Z(Y.issuerOrigin, 22);
					return g.text().then(function(h) {
						return JSON.parse(h)
					})
				}).catch(function(g) {
					return p.Promise.reject({
						state: 21,
						error: g
					})
				})
			});
			var d = ed(window);
			return a.then(function(e) {
				var f = Y.issuerOrigin + Y.issuancePath;
				return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
					keepalive: !0,
					trustToken: {
						type: "token-request"
					}
				}).then(function(g) {
					if (!g.ok) throw Error(g.status + ": Network response was not ok!");
					Z(Y.issuerOrigin, 25);
					return e
				}).catch(function(g) {
					return p.Promise.reject({
						state: 24,
						error: g
					})
				})) : e
			}).then(function(e) {
				if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
					keepalive: !0,
					trustToken: {
						type: "token-redemption",
						refreshPolicy: "refresh"
					}
				}).then(function(f) {
					if (!f.ok) throw Error(f.status + ": Network response was not ok!");
					Z(Y.issuerOrigin, 28, !0)
				}).catch(function(f) {
					return p.Promise.reject({
						state: 27,
						error: f
					})
				})
			}).then(function() {
				Z(Y.issuerOrigin, 29)
			}).catch(function(e) {
				if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
					if ("number" ===
						typeof e.state && e.error instanceof Error) {
						Z(Y.issuerOrigin, e.state);
						var f = Q(vf);
						Math.random() <= f && Ff({
							state: e.state,
							err: e.error.toString()
						})
					} else throw Error(e);
				else throw e;
			})
		}
	}

	function io(a) {
		if (document.hasTrustToken && !P(tf) && a.i) {
			var b = window.goog_tt_promise_map;
			if (b && b instanceof p.Map) {
				var c = [];
				if (a.h.some(function(e) {
						return e.issuerOrigin === X.issuerOrigin
					})) {
					var d = b.get(X.issuerOrigin);
					d || (d = go(), b.set(X.issuerOrigin, d));
					c.push(d)
				}
				a.h.some(function(e) {
					return e.issuerOrigin === Y.issuerOrigin
				}) && (a = b.get(Y.issuerOrigin), a || (a = ho(), b.set(Y.issuerOrigin, a)), c.push(a));
				if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
			}
		}
	};

	function jo(a) {
		J.call(this, a, -1, ko)
	}
	v(jo, J);

	function lo(a, b) {
		return B(a, 2, b)
	}

	function mo(a, b) {
		return B(a, 3, b)
	}

	function no(a, b) {
		return B(a, 4, b)
	}

	function oo(a, b) {
		return B(a, 5, b)
	}

	function po(a, b) {
		return B(a, 9, b)
	}

	function qo(a, b) {
		return Gb(a, 10, b)
	}

	function ro(a, b) {
		return B(a, 11, b)
	}

	function so(a, b) {
		return B(a, 1, b)
	}

	function to(a) {
		J.call(this, a)
	}
	v(to, J);
	to.prototype.getVersion = function() {
		return I(this, 2)
	};
	var ko = [10, 6];
	var uo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

	function vo() {
		var a;
		return null != (a = L.google_tag_data) ? a : L.google_tag_data = {}
	}

	function wo() {
		var a, b;
		if ("function" !== typeof(null == (a = L.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
		var c = vo();
		if (c.uach_promise) return c.uach_promise;
		a = L.navigator.userAgentData.getHighEntropyValues(uo).then(function(d) {
			null != c.uach || (c.uach = d);
			return d
		});
		return c.uach_promise = a
	}

	function xo(a) {
		var b;
		return ro(qo(po(oo(no(mo(lo(so(new jo, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
			var d = new to;
			d = B(d, 1, c.brand);
			return B(d, 2, c.version)
		})) || []), a.wow64 || !1)
	}

	function yo() {
		if (P(pf)) {
			var a, b;
			return null != (b = null == (a = wo()) ? void 0 : a.then(function(f) {
				return xo(f)
			})) ? b : null
		}
		var c, d;
		if ("function" !== typeof(null == (c = L.navigator) ? void 0 : null == (d = c.userAgentData) ? void 0 : d.getHighEntropyValues)) return null;
		var e;
		return null != (e = L.navigator.userAgentData.getHighEntropyValues(uo).then(function(f) {
			return xo(f)
		})) ? e : null
	};

	function zo(a, b) {
		b.google_ad_host || (a = Ao(a)) && (b.google_ad_host = a)
	}

	function Bo(a, b, c) {
		c = void 0 === c ? "" : c;
		L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
		L.google_sa_queue || (L.google_sa_queue = [], L.google_process_slots = aj(215, function() {
			return Co(L.google_sa_queue)
		}), a = Do(c, a, b), Ic(L.document, a).id = "google_shimpl")
	}

	function Co(a) {
		var b = a.shift();
		"function" === typeof b && $i(216, b);
		a.length && w.setTimeout(aj(215, function() {
			return Co(a)
		}), 0)
	}

	function Eo(a, b, c) {
		a.google_sa_queue = a.google_sa_queue || [];
		a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
	}

	function Do(a, b, c) {
		var d = Math.random() < Q(bf) ? gc(pc(b.pb).toString()) : null;
		b = D(c, 4) ? b.ob : b.qb;
		d = d ? d : gc(pc(b).toString());
		b = {};
		a: {
			if (D(c, 4)) {
				if (c = a || vn(L)) {
					var e = {};
					c = (e.client = c, e.plah = L.location.host, e);
					break a
				}
				throw Error("PublisherCodeNotFoundForAma");
			}
			c = {}
		}
		Fo(c, b);
		a: {
			if (P(Ze) || P(Ne)) {
				a = a || vn(L);
				var f;
				var g = (c = null == (g = V(L)) ? void 0 : null == (f = g.head_tag_slot_vars) ? void 0 : f.google_ad_host) ? c : Ao(L);
				if (a) {
					f = {};
					g = (f.client = a, f.plah = L.location.host, f.ama_t = "adsense", f.asntp = Q(Fe), f.asntpv = Q(Je), f.asntpl =
						Q(He), f.asntpm = Q(Ie), f.asntpc = Q(Ge), f.asna = Q(Be), f.asnd = Q(Ce), f.asnp = Q(De), f.asns = Q(Ee), f.asmat = Q(Ae), f.asptt = Q(Ke), f.easpi = P(Ze), f.asro = P(Le), f.host = g, f.easai = P(Ye), f);
					break a
				}
			}
			g = {}
		}
		Fo(g, b);
		Fo(zf() ? {
			bust: zf()
		} : {}, b);
		return dc(d, b)
	}

	function Fo(a, b) {
		Rc(a, function(c, d) {
			void 0 === b[d] && (b[d] = c)
		})
	}

	function Ao(a) {
		if (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) return a.getAttribute("content")
	}

	function Go(a) {
		a: {
			var b = void 0 === b ? !1 : b;
			var c = void 0 === c ? 1024 : c;
			for (var d = [w.top], e = [], f = 0, g; g = d[f++];) {
				b && !Gc(g) || e.push(g);
				try {
					if (g.frames)
						for (var h = 0; h < g.frames.length && d.length < c; ++h) d.push(g.frames[h])
				} catch (l) {}
			}
			for (b = 0; b < e.length; b++) try {
				var k = e[b].frames.google_esf;
				if (k) {
					hd = k;
					break a
				}
			} catch (l) {}
			hd = null
		}
		if (hd) return null;e = Jc("IFRAME");e.id = "google_esf";e.name = "google_esf";e.src = rc(a.vb);e.style.display = "none";
		return e
	}

	function Ho(a, b, c, d) {
		Io(a, b, c, d, function(e, f) {
			e = e.document;
			for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor");) g = "aswift_" + h++;
			e = g;
			g = Number(f.google_ad_width || 0);
			f = Number(f.google_ad_height || 0);
			h = Jc("INS");
			h.id = e + "_anchor";
			tm(h, g, f);
			h.style.display = "block";
			var k = Jc("INS");
			k.id = e + "_expand";
			tm(k, g, f);
			k.style.display = "inline-table";
			k.appendChild(h);
			c.appendChild(k);
			return e
		})
	}

	function Io(a, b, c, d, e) {
		e = e(a, b);
		Jo(a, c, b);
		c = Ia;
		var f = (new Date).getTime();
		b.google_lrv = I(d, 2);
		b.google_async_iframe_id = e;
		b.google_start_time = c;
		b.google_bpp = f > c ? f - c : 1;
		a.google_sv_map = a.google_sv_map || {};
		a.google_sv_map[e] = b;
		d = a.document.getElementById(e + "_anchor") ? function(h) {
			return h()
		} : function(h) {
			return window.setTimeout(h, 0)
		};
		var g = {
			pubWin: a,
			vars: b
		};
		Eo(a, function() {
			var h = a.google_sa_impl(g);
			h && h.catch && cj(911, h)
		}, d)
	}

	function Jo(a, b, c) {
		var d = c.google_ad_output,
			e = c.google_ad_format,
			f = c.google_ad_width || 0,
			g = c.google_ad_height || 0;
		e || "html" != d && null != d || (e = f + "x" + g);
		d = !c.google_ad_slot || c.google_override_format || !um[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
		e && d ? e = e.toLowerCase() : e = "";
		c.google_ad_format = e;
		if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
			e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
				c.google_orig_ad_height || c.google_ad_height
			];
			d = [];
			f = 0;
			for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
			(d = d.join()) && e.push(d);
			c.google_ad_unit_key = Sc(e.join(":")).toString();
			var h = void 0 === h ? !1 : h;
			e = [];
			for (d = 0; b && 25 > d; ++d) {
				f = "";
				void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
				a: {
					if (b && b.nodeName && b.parentElement) {
						g = b.nodeName.toString().toLowerCase();
						for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
							var q = k[m];
							if (q.nodeName && q.nodeName.toString().toLowerCase() ===
								g) {
								if (b === q) {
									g = "." + l;
									break a
								}++l
							}
						}
					}
					g = ""
				}
				e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
				b = b.parentElement
			}
			h = e.join() + ":";
			b = [];
			if (a) try {
				var t = a.parent;
				for (e = 0; t && t !== a && 25 > e; ++e) {
					var y = t.frames;
					for (d = 0; d < y.length; ++d)
						if (a === y[d]) {
							b.push(d);
							break
						} a = t;
					t = a.parent
				}
			} catch (F) {}
			c.google_ad_dom_fingerprint = Sc(h + b.join()).toString()
		}
	}

	function Ko() {
		var a = Hc(w);
		a && (a = Uf(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
			debugCard: null,
			debugCardRequested: !1
		}))
	}

	function Lo(a) {
		bo();
		co($k(), I(a, 8)) || aj(779, function() {
			var b = window;
			b = void 0 === b ? window : b;
			b = P(b.PeriodicSyncManager ? rf : sf);
			var c = P(uf);
			b = new $n(!0, b, c);
			0 < Q(xf) ? L.google_trust_token_operation_promise = io(b) : io(b)
		})();
		a = yo();
		null != a && a.then(function(b) {
			L.google_user_agent_client_hint = Lb(b)
		});
		Bn();
		zn()
	};

	function Mo(a, b) {
		switch (a) {
			case "google_reactive_ad_format":
				return a = parseInt(b, 10), isNaN(a) ? 0 : a;
			case "google_allow_expandable_ads":
				return /^true$/.test(b);
			default:
				return b
		}
	}

	function No(a, b) {
		if (a.getAttribute("src")) {
			var c = a.getAttribute("src") || "";
			(c = Fc(c)) && (b.google_ad_client = Mo("google_ad_client", c))
		}
		a = a.attributes;
		c = a.length;
		for (var d = 0; d < c; d++) {
			var e = a[d];
			if (/data-/.test(e.name)) {
				var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
				b.hasOwnProperty(f) || (e = Mo(f, e.value), null !== e && (b[f] = e))
			}
		}
	}

	function Oo(a) {
		if (a = kd(a)) switch (a.data && a.data.autoFormat) {
			case "rspv":
				return 13;
			case "mcrspv":
				return 15;
			default:
				return 14
		} else return 12
	}

	function Po(a, b, c, d) {
		No(a, b);
		if (c.document && c.document.body && !dn(c, b) && !b.google_reactive_ad_format) {
			var e = parseInt(a.style.width, 10),
				f = hn(a, c);
			if (0 < f && e > f) {
				var g = parseInt(a.style.height, 10);
				e = !!um[e + "x" + g];
				var h = f;
				if (e) {
					var k = vm(f, g);
					if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
					else throw new U("No slot size for availableWidth=" + f);
				}
				b.google_ad_resize = !0;
				b.google_ad_width = h;
				e || (b.google_ad_format = null, b.google_override_format = !0);
				f = h;
				a.style.width = f + "px";
				g = Ym(f, "auto", c, a, b);
				h = f;
				g.size().i(c, b,
					a);
				Hm(g, h, b);
				g = g.size();
				b.google_responsive_formats = null;
				g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
			}
		}
		e = a.offsetWidth || Bi(a, c, "width", K) || b.google_ad_width || 0;
		f = Fa(Ym, e, "auto", c, a, b, !1, !0);
		if (!P(We) && 488 > Wf(c)) {
			g = Hc(c) || c;
			h = b.google_ad_client;
			d = g.location && "#ftptohbh" === g.location.hash ? 2 : Cl(g.location, "google_responsive_slot_preview") || P(ef) ? 1 : P(df) ? 2 : bl(g, 1, h, d) ? 1 : 0;
			if (g = 0 !== d) b: if (b.google_reactive_ad_format || dn(c, b) || qi(a, b)) g = !1;
				else {
					for (g = a; g; g = g.parentElement) {
						h =
							Mc(g, c);
						if (!h) {
							b.gfwrnwer = 18;
							g = !1;
							break b
						}
						if (!Xa(["static", "relative"], h.position)) {
							b.gfwrnwer = 17;
							g = !1;
							break b
						}
					}
					g = ui(c, a, e, .3, b);
					!0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
				} g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Hm(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
		} else d = !1;
		if (e = dn(c, b)) fn(e, a, b, c, d);
		else {
			if (qi(a, b)) {
				if (d = Mc(a, c)) a.style.width = d.width, a.style.height =
					d.height, pi(d, b);
				b.google_ad_width || (b.google_ad_width = a.offsetWidth);
				b.google_ad_height || (b.google_ad_height = a.offsetHeight);
				b.google_loader_features_used = 256;
				b.google_responsive_auto_format = Oo(c)
			} else pi(a.style, b);
			c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? fn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = vi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer =
				a) : b.efwr = !0)
		}
	};

	function Qo(a) {
		this.j = new p.Set;
		this.u = ld() || window;
		this.h = Q(ye);
		var b = 0 < this.h && Qc() < 1 / this.h;
		this.A = (this.i = !!Lj(Hj(), 30, b)) ? ed(this.u) : 0;
		this.m = this.i ? vn(this.u) : "";
		this.l = null != a ? a : new yg(100)
	}

	function Ro() {
		var a = O(Qo);
		var b = new uk;
		b = B(b, 1, Vf(a.u).scrollWidth);
		b = B(b, 2, Vf(a.u).scrollHeight);
		var c = new uk;
		c = B(c, 1, Wf(a.u));
		c = B(c, 2, Vf(a.u).clientHeight);
		var d = new wk;
		d = B(d, 1, a.A);
		d = B(d, 2, a.m);
		d = B(d, 3, a.h);
		var e = new vk;
		b = Eb(e, 2, b);
		b = Eb(b, 1, c);
		b = Fb(d, 4, xk, b);
		a.i && !a.j.has(1) && (a.j.add(1), ug(a.l, b))
	};

	function So(a) {
		var b = window;
		var c = void 0 === c ? null : c;
		wc(b, "message", function(d) {
			try {
				var e = JSON.parse(d.data)
			} catch (f) {
				return
			}!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
		})
	};

	function To(a, b) {
		b = void 0 === b ? 500 : b;
		Qj.call(this);
		this.i = a;
		this.ta = b;
		this.h = null;
		this.m = {};
		this.l = null
	}
	v(To, Qj);
	To.prototype.j = function() {
		this.m = {};
		this.l && (xc(this.i, this.l), delete this.l);
		delete this.m;
		delete this.i;
		delete this.h;
		Qj.prototype.j.call(this)
	};

	function Uo(a) {
		Qj.call(this);
		this.h = a;
		this.i = null;
		this.l = !1
	}
	v(Uo, Qj);
	var Vo = null,
		Wo = [],
		Xo = new p.Map,
		Yo = -1;

	function Zo(a) {
		return Ji.test(a.className) && "done" != a.dataset.adsbygoogleStatus
	}

	function $o(a, b, c) {
		a.dataset.adsbygoogleStatus = "done";
		ap(a, b, c)
	}

	function ap(a, b, c) {
		var d = window;
		d.google_spfd || (d.google_spfd = Po);
		var e = b.google_reactive_ads_config;
		e || Po(a, b, d, c);
		zo(d, b);
		if (!bp(a, b, d)) {
			e || (d.google_lpabyc = ri(a, d) + Bi(a, d, "height", K));
			if (e) {
				e = e.page_level_pubvars || {};
				if (V(L).page_contains_reactive_tag && !V(L).allow_second_reactive_tag) {
					if (e.pltais) {
						Al(!1);
						return
					}
					throw new U("Only one 'enable_page_level_ads' allowed per page.");
				}
				V(L).page_contains_reactive_tag = !0;
				Al(7 === e.google_pgb_reactive)
			}
			b.google_unique_id = nd(d);
			Rc(rn, function(f, g) {
				b[g] = b[g] ||
					d[g]
			});
			b.google_loader_used = "aa";
			b.google_reactive_tag_first = 1 === (V(L).first_tag_on_page || 0);
			$i(164, function() {
				Ho(d, b, a, c)
			})
		}
	}

	function bp(a, b, c) {
		var d = b.google_reactive_ads_config,
			e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
			f = yl(c);
		if (f && f.Fa && "on" != b.google_adtest && !e) {
			e = ri(a, c);
			var g = Vf(c).clientHeight;
			if (!f.qa || f.qa && ((0 == g ? null : e / g) || 0) >= f.qa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.tb && (null !== Yc(a.getAttribute("width")) &&
				a.setAttribute("width", 0), null !== Yc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
		}
		if ((f = Mc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
		a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
		return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
			!a ? !1 : (w.console && w.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
	}

	function cp(a) {
		var b = document.getElementsByTagName("INS");
		for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
			var e = d;
			if (Zo(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
		}
		return null
	}

	function dp(a, b, c) {
		if (a && a.shift)
			for (var d = 20; 0 < a.length && 0 < d;) {
				try {
					ep(a.shift(), b, c)
				} catch (e) {
					setTimeout(function() {
						throw e;
					})
				}--d
			}
	}

	function fp() {
		var a = Jc("INS");
		a.className = "adsbygoogle";
		a.className += " adsbygoogle-noablate";
		ad(a);
		return a
	}

	function gp(a, b) {
		var c = {};
		Rc(Rf, function(f, g) {
			!1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
		});
		ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
		var d = fp();
		gd.body.appendChild(d);
		var e = {};
		e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
		e.google_pause_ad_requests = !!V(L).pause_ad_requests;
		$o(d, e, b)
	}

	function hp(a, b) {
		function c() {
			return gp(a, b)
		}
		Uf(w).wasPlaTagProcessed = !0;
		var d = w.document;
		if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
		else {
			var e = vc(aj(191, c));
			wc(d, "DOMContentLoaded", e);
			(new w.MutationObserver(function(f, g) {
				d.body && (e(), g.disconnect())
			})).observe(d, {
				childList: !0,
				subtree: !0
			})
		}
	}

	function ep(a, b, c) {
		var d = {};
		$i(165, function() {
			ip(a, d, b, c)
		}, function(e) {
			e.client = e.client || d.google_ad_client || a.google_ad_client;
			e.slotname = e.slotname || d.google_ad_slot;
			e.tag_origin = e.tag_origin || d.google_tag_origin
		})
	}

	function jp(a) {
		delete a.google_checked_head;
		Rc(a, function(b, c) {
			Ii[c] || (delete a[c], w.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
		})
	}

	function kp(a, b) {
		var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
		if (c) {
			c.setAttribute("data-checked-head", "true");
			var d = V(window);
			if (d.head_tag_slot_vars) lp(c);
			else {
				var e = {};
				No(c, e);
				jp(e);
				var f = Zb(e);
				d.head_tag_slot_vars = f;
				c = {
					google_ad_client: e.google_ad_client,
					enable_page_level_ads: e
				};
				L.adsbygoogle || (L.adsbygoogle = []);
				d = L.adsbygoogle;
				d.loaded ? d.push(c) : d.splice(0, 0, c);
				var g;
				e.google_adbreak_test || (null == (g = Ib(b, Jk, 13, Yk)) ? 0 : D(g, 3)) && P(jf) ? mp(f, a) : So(function() {
					mp(f, a)
				})
			}
		}
	}

	function lp(a) {
		var b = V(window).head_tag_slot_vars,
			c = a.getAttribute("src") || "";
		if ((a = Fc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new U("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
	}

	function np(a) {
		if ("object" === typeof a && null != a) {
			if ("string" === typeof a.type) return 2;
			if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
		}
		return 0
	}

	function ip(a, b, c, d) {
		if (null == a) throw new U("push() called with no parameters.");
		14 === Cb(d, Yk) && op(a, wb(Xk(d), 1), I(d, 2));
		var e = np(a);
		if (0 !== e) P($e) && (d = Bl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia)), null == Vo ? (pp(a), Wo.push(a)) : 3 === e ? $i(787, function() {
			Vo.handleAdConfig(a)
		}) : cj(730, Vo.handleAdBreak(a));
		else {
			Ia = (new Date).getTime();
			Bo(c, d, qp(a));
			rp();
			a: {
				if (void 0 != a.enable_page_level_ads) {
					if ("string" === typeof a.google_ad_client) {
						e = !0;
						break a
					}
					throw new U("'google_ad_client' is missing from the tag config.");
				}
				e = !1
			}
			if (e) sp(a, d);
			else if ((e = a.params) && Rc(e, function(g, h) {
					b[h] = g
				}), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
			else {
				e = tp(a.element);
				No(e, b);
				c = V(w).head_tag_slot_vars || {};
				Rc(c, function(g, h) {
					b.hasOwnProperty(h) || (b[h] = g)
				});
				if (e.hasAttribute("data-require-head") && !V(w).head_tag_slot_vars) throw new U("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
				if (!b.google_ad_client) throw new U("Ad client is missing from the slot.");
				b.google_apsail = hl(b.google_ad_client);
				var f = (c = 0 === (V(L).first_tag_on_page || 0) && Jl(b)) && Kl(c);
				c && !f && (sp(c, d), V(L).skip_next_reactive_tag = !0);
				0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 2);
				b.google_pause_ad_requests = !!V(L).pause_ad_requests;
				$o(e, b, d);
				c && f && up(c)
			}
		}
	}
	var vp = !1;

	function op(a, b, c) {
		P(Xe) && !vp && (vp = !0, a = qp(a) || vn(L), bj("predictive_abg", {
			a_c: a,
			p_c: b,
			b_v: c
		}, .01))
	}

	function qp(a) {
		return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
	}

	function rp() {
		if (P(Qe)) {
			var a = yl(L);
			if (!(a = a && a.Fa)) {
				try {
					var b = L.localStorage
				} catch (c) {
					b = null
				}
				b = b ? Dj(b) : null;
				a = !(b && Gk(b) && b)
			}
			a || zl(L, 1)
		}
	}

	function up(a) {
		fd(function() {
			Uf(w).wasPlaTagProcessed || w.adsbygoogle && w.adsbygoogle.push(a)
		})
	}

	function sp(a, b) {
		if (V(L).skip_next_reactive_tag) V(L).skip_next_reactive_tag = !1;
		else {
			0 === (V(L).first_tag_on_page || 0) && (V(L).first_tag_on_page = 1);
			if (a.tag_partner) {
				var c = a.tag_partner,
					d = V(w);
				d.tag_partners = d.tag_partners || [];
				d.tag_partners.push(c)
			}
			V(L).ama_ran_on_page || Ml(new Ll(a, b));
			hp(a, b)
		}
	}

	function tp(a) {
		if (a) {
			if (!Zo(a) && (a.id ? a = cp(a.id) : a = null, !a)) throw new U("'element' has already been filled.");
			if (!("innerHTML" in a)) throw new U("'element' is not a good DOM element.");
		} else if (a = cp(), !a) throw new U("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
		return a
	}

	function wp() {
		var a = new Sj(L),
			b = new To(L),
			c = new Uo(L),
			d = L.__cmp ? 1 : 0;
		a = Tj(a) ? 1 : 0;
		var e, f;
		(f = "function" === typeof(null == (e = b.i) ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Zc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
		c.l || (c.i || (c.i = c.h.googlefc ? c.h : Zc(c.h, "googlefcPresent")), c.l = !0);
		bj("cmpMet", {
			tcfv1: d,
			tcfv2: a,
			usp: f ? 1 : 0,
			fc: c.i ? 1 : 0,
			ptt: 9
		}, Q(xe))
	}

	function xp(a) {
		a = {
			value: D(a, 16)
		};
		var b = .01;
		Q(Se) && (a.eid = Q(Se), b = 1);
		a.frequency = b;
		bj("new_abg_tag", a, b)
	}

	function yp(a) {
		Hj().S[Jj(26)] = !!Number(a)
	}

	function zp(a) {
		Number(a) ? V(L).pause_ad_requests = !0 : (V(L).pause_ad_requests = !1, a = function() {
			if (!V(L).pause_ad_requests) {
				var b = void 0 === b ? {} : b;
				if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
				else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
				L.dispatchEvent(c)
			}
		}, w.setTimeout(a, 0), w.setTimeout(a, 1E3))
	}

	function Ap(a) {
		bj("adsenseGfpKnob", {
			value: a,
			ptt: 9
		}, .1);
		switch (a) {
			case 0:
			case 2:
				a = !0;
				break;
			case 1:
				a = !1;
				break;
			default:
				throw Error("Illegal value of cookieOptions: " + a);
		}
		L._gfp_a_ = a
	}

	function Bp(a) {
		a && a.call && "function" === typeof a && window.setTimeout(a, 0)
	}

	function mp(a, b) {
		b = Hl(dc(gc(pc(b.sb).toString()), zf() ? {
			bust: zf()
		} : {})).then(function(c) {
			null == Vo && (c.init(a), Vo = c, Cp())
		});
		cj(723, b);
		r(b, "finally").call(b, function() {
			Wo.length = 0;
			bj("slotcar", {
				event: "api_ld",
				time: Date.now() - Ia,
				time_pr: Date.now() - Yo
			})
		})
	}

	function Cp() {
		for (var a = u(r(Xo, "keys").call(Xo)), b = a.next(); !b.done; b = a.next()) {
			b = b.value;
			var c = Xo.get(b); - 1 !== c && (w.clearTimeout(c), Xo.delete(b))
		}
		a = {};
		for (b = 0; b < Wo.length; a = {
				fa: a.fa,
				ba: a.ba
			}, b++) Xo.has(b) || (a.ba = Wo[b], a.fa = np(a.ba), $i(723, function(d) {
			return function() {
				3 === d.fa ? Vo.handleAdConfig(d.ba) : 2 === d.fa && cj(730, Vo.handleAdBreakBeforeReady(d.ba))
			}
		}(a)))
	}

	function pp(a) {
		var b = Wo.length;
		if (2 === np(a) && "preroll" === a.type && null != a.adBreakDone) {
			-1 === Yo && (Yo = Date.now());
			var c = w.setTimeout(function() {
				try {
					(0, a.adBreakDone)({
						breakType: "preroll",
						breakName: a.name,
						breakFormat: "preroll",
						breakStatus: "timeout"
					}), Xo.set(b, -1), bj("slotcar", {
						event: "pr_to",
						source: "adsbygoogle"
					})
				} catch (d) {
					console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
				}
			}, 1E3 * Q(kf));
			Xo.set(b, c)
		}
	}

	function Dp() {
		if (P(Me) && !P(Le)) {
			var a = L.document,
				b = a.createElement("LINK"),
				c = md(Ql);
			if (c instanceof bc || c instanceof lc) b.href = rc(c);
			else {
				if (-1 === sc.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
				b.href = qc(c)
			}
			b.rel = "stylesheet";
			a.head.appendChild(b)
		}
	};
	(function(a, b, c, d) {
		d = void 0 === d ? function() {} : d;
		Yi.Ua(dj);
		$i(166, function() {
			var e = xn(b);
			on(I(e, 2));
			al(D(e, 6));
			d();
			jd(16, [1, e.toJSON()]);
			var f = ld(kd(L)) || L,
				g = c(pn({
					eb: a,
					nb: I(e, 2)
				}), e);
			P(cf) && el(f, e);
			sm(f, e, null === L.document.currentScript ? 1 : Sl(g.ub));
			Ro();
			if ((!Na() || 0 <= Ka(Qa(), 11)) && (null == (L.Prototype || {}).Version || !P(Ve))) {
				Zi(P(qf));
				Lo(e);
				sk();
				try {
					Rn()
				} catch (q) {}
				Ko();
				kp(g, e);
				f = window;
				var h = f.adsbygoogle;
				if (!h || !h.loaded) {
					if (P(Re) && !D(e, 16)) try {
						if (L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
					} catch (q) {}
					Dp();
					xp(e);
					Q(xe) && wp();
					var k = {
						push: function(q) {
							ep(q, g, e)
						},
						loaded: !0
					};
					try {
						Object.defineProperty(k, "requestNonPersonalizedAds", {
							set: yp
						}), Object.defineProperty(k, "pauseAdRequests", {
							set: zp
						}), Object.defineProperty(k, "cookieOptions", {
							set: Ap
						}), Object.defineProperty(k, "onload", {
							set: Bp
						})
					} catch (q) {}
					if (h)
						for (var l = u(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
					"_gfp_a_" in window || (window._gfp_a_ = !0);
					dp(h, g, e);
					f.adsbygoogle = k;
					h &&
						(k.onload = h.onload);
					(f = Go(g)) && document.documentElement.appendChild(f)
				}
			}
		})
	})("m202203210101", wn, function(a, b) {
		var c = 2012 < C(b, 1, 0) ? "_fy" + C(b, 1, 0) : "",
			d = I(b, 3),
			e = I(b, 2);
		b = md(jn, a, c);
		d = md(kn, e, d);
		return {
			sb: b,
			qb: md(ln, a, c),
			ob: md(mn, a, c),
			pb: md(nn, a, c),
			vb: d,
			ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
		}
	});
}).call(this, "[2012,\"r20220323\",\"r20190131\",1,null,1,null,\".google.se\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,5000]],[null,1044,null,[null,200]],[1153,null,null,[1]],[1132,null,null,[1]],[1131,null,null,[1]],[null,1142,null,[null,8]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1159,null,[null,500]],[1145,null,null,[1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1146,null,null,[1]],[1152,null,null,[1]],[1053,null,null,[1]],[1100,null,null,[1]],[1135,null,null,[1]],[1102,null,null,[1]],[1149,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1036,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,null,null,[null,null,null,[\"A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A4\/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme\/J33Q\/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\"]],null,1934],[1959,null,null,[1]],[1953,null,null,[1]],[1954,null,null,[1]],[1960,null,null,[1]],[1947,null,null,[1]],[1938,null,null,[1]],[1948,null,null,[1]],[null,null,null,[null,null,null,[\"AxujKG9INjsZ8\/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=\",\"Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt\/P\/H4\/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxBHdr0J44vFBQtZUqX9sjiqf5yWZ\/OcHRcRMN3H9TH+t90V\/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1932],[null,397907552,null,[null,500]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[1,[[42531496],[42531497,[[1161,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44760474],[44760475,[[1129,null,null,[1]]]]]],[1,[[44760911],[44760912,[[1160,null,null,[1]]]]]],[10,[[44761043],[44761044]]],[1,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656]]],[null,[[44755592],[44755593,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755594,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755653,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[1,[[31064180],[31064181,[[null,1137,null,[null,120]]]],[31064182,[[null,1137,null,[null,3600]]]]]],[10,[[31065342],[31065343,[[1147,null,null,[1]]]]]],[100,[[31065370],[31065371,[[1148,null,null,[1]]]]]],[50,[[31065544],[31065545,[[1154,null,null,[1]]]]]],[1,[[31065688,[[null,1103,null,[null,31065688]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[31065689,[[null,1158,null,[null,45]],[null,1157,null,[null,600]],[null,1103,null,[null,31065689]],[null,1114,null,[null,-1]],[null,1104,null,[null,100]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1155,null,null,[1]],[1120,null,null,[1]]]]]],[100,[[31065741],[31065742,[[1134,null,null,[1]]]]]],[1000,[[31065814,[[null,null,14,[null,null,\"31065814\"]]],[6,null,null,null,6,null,\"31065814\"]],[31065815,[[null,null,14,[null,null,\"31065815\"]]],[6,null,null,null,6,null,\"31065815\"]]],[4,null,55]],[1000,[[31065831,[[null,null,14,[null,null,\"31065831\"]]],[6,null,null,null,6,null,\"31065831\"]],[31065832,[[null,null,14,[null,null,\"31065832\"]]],[6,null,null,null,6,null,\"31065832\"]]],[4,null,55]],[1000,[[31065858,[[null,null,14,[null,null,\"31065858\"]]],[6,null,null,null,6,null,\"31065858\"]],[31065859,[[null,null,14,[null,null,\"31065859\"]]],[6,null,null,null,6,null,\"31065859\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[null,[[44760283,[[null,1103,null,[null,44760283]]]],[44760284,[[null,1103,null,[null,44760284]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760285,[[null,1103,null,[null,44760285]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760286,[[null,1103,null,[null,44760286]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760287,[[null,1103,null,[null,44760287]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760288,[[null,1103,null,[null,44760288]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2]],[1,[[44760289,[[null,1103,null,[null,44760289]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44760290,[[null,1103,null,[null,44760290]],[1121,null,null,[1]],[1143,null,null,[1]],[null,1119,null,[null,300]]]],[44760291,[[null,1103,null,[null,44760291]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760292,[[null,1103,null,[null,44760292]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760293,[[null,1103,null,[null,44760293]],[null,1114,null,[null,0.9]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760294,[[null,1103,null,[null,44760294]],[null,1114,null,[null,0.9]],[null,1110,null,[null,1]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760295,[[null,1103,null,[null,44760295]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760296,[[null,1103,null,[null,44760296]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760298,[[null,1103,null,[null,44760298]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760299,[[null,1103,null,[null,44760299]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44760300,[[null,1103,null,[null,44760300]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761051,[[null,1103,null,[null,44761051]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.5]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44761052,[[null,1103,null,[null,44761052]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[6,null,null,3,null,2]],[150,[[31061760],[31061761,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063913,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31065341,[[1150,null,null,[1]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[50,[[31062202,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063912],[44756455,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[null,[[31063202,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[null,[[44753753,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[13,[[10,[[44759847],[44759848,[[1947,null,null,[]]]]]],[10,[[44759849],[44759850]]],[50,[[31065653],[31065654,[[1960,null,null,[]]]]]],[50,[[31065655],[31065656]]],[50,[[31065657],[31065658]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,[\"document.prerendering\"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,[\"document.prerendering\"]]]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]]]],[11,[[50,[[44760494],[44760495,[[1957,null,null,[1]]]]],null,48],[1,[[44760496],[44760497,[[1957,null,null,[1]]]],[44760498,[[1957,null,null,[1]]]]],null,48]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[50,[[31061828],[31061829,[[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]],[31065659,[[1150,null,null,[1]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,10000]],[427841102,null,null,[1]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]],[31065787]],null,15],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]],null,21],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]],null,21],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]],null,45],[250,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]],[null,432059203,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],45],[100,[[31065550],[31065551,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]],[432938498,null,null,[1]],[null,432059203,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],45],[10,[[31065721],[31065722,[[432946749,null,null,[1]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,null,1,null,788326902,[44759876,44759927,44759837]]");