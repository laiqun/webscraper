//const n = i(686);
import * as n from "d3"

class SelectorGraphv2 {
	constructor(e) {
		this.diagonal = n.svg.diagonal().projection(e => [e.y, e.x]);
		this.sitemap = e;
	}

	initTree(e, t) {
		this.tree = n.layout.tree().size([t, e]);
		this.tree.children(this.getSelectorVisibleChildren.bind(this));
	}

	getSelectorChildren(e) {
		if (void 0 === e.childSelectors) {
			e.childSelectors = this.sitemap.selectors.getDirectChildSelectors(e.id).fullClone();
		}
		if (0 === e.childSelectors.length)
			return undefined;
		else
			return e.childSelectors;
	}

	getSelectorVisibleChildren(e) {
		if (undefined === e.visibleChildren)
			e.visibleChildren = false;
		if (false !== e.visibleChildren)
			return this.getSelectorChildren(e);
	}

	selectorHasChildren(e) {
		return this.sitemap.selectors.getDirectChildSelectors(e.id).length > 0;
	}

	draw(e, t, i) {
		const r = [20, 120, 20, 120], a = t - r[1] - r[3], o = i - r[0] - r[2];
		this.initTree(a, o);
		this.svg = n.select(e).append("svg:svg").attr("width", a + r[1] + r[3]).attr("height", o + r[0] + r[2]).append("svg:g").attr("transform", `translate(${r[3]},${r[0]})`);
		this.root = {
			id: "_root",
			x0: o / 2,
			y0: 0,
			i: "_root"
		};
		this.update(this.root);
	}

	getNodeColor(e) {
		return this.selectorHasChildren(e) && !e.visibleChildren ? "lightsteelblue" : "#fff";
	}

	update(e) {
		const t = this.tree.nodes(this.root).reverse();
		t.forEach(e => {
			e.y = 100 * e.depth;
		});
		const i = this.svg.selectAll("g.node").data(t, t => (void 0 === t.i && (t.i = t.id,
			t.i = `${e.i}/${t.i}`), t.i));
		const n = i.enter().append("svg:g").attr("class", "node").attr("transform", t => `translate(${e.y0},${e.x0})`).on("click", function (e) {
			this.toggle(e), this.update(e);
		}.bind(this));
		n.append("svg:circle").attr("r", 1e-6).style("fill", this.getNodeColor.bind(this));
		n.append("svg:text").attr("x", function (e) {
			return this.selectorHasChildren(e) ? -10 : 10;
		}.bind(this)).attr("dy", ".35em").attr("text-anchor", function (e) {
			return this.selectorHasChildren(e) ? "end" : "start";
		}.bind(this)).text(e => e.id).style("fill-opacity", 1e-6);
		const r = i.transition().duration(500).attr("transform", e => `translate(${e.y},${e.x})`);
		r.select("circle").attr("r", 6).style("fill", this.getNodeColor.bind(this)), r.select("text").style("fill-opacity", 1);
		const a = i.exit().transition().duration(500).attr("transform", t => `translate(${e.y},${e.x})`).remove();
		a.select("circle").attr("r", 1e-6), a.select("text").style("fill-opacity", 1e-6);
		const o = this.svg.selectAll("path.link").data(this.tree.links(t), e => e.target.i);
		o.enter().insert("svg:path", "g").attr("class", "link").attr("d", function (t) {
			const i = {
				x: e.x0,
				y: e.y0
			};
			return this.diagonal({
				source: i,
				target: i
			});
		}.bind(this)).transition().duration(500).attr("d", this.diagonal);
		o.transition().duration(500).attr("d", this.diagonal);
		o.exit().transition().duration(500).attr("d", function (t) {
				const i = {
					x: e.x,
					y: e.y
				};
				return this.diagonal({
					source: i,
					target: i
				});
			}.bind(this)).remove(), t.forEach(e => {
			e.x0 = e.x, e.y0 = e.y;
		});
	}

	toggle(e) {
		e.visibleChildren = !e.visibleChildren;
	}
}

export {SelectorGraphv2}