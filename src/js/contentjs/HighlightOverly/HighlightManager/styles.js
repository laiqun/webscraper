const r = {
    "fill-opacity": "0.2",
    "stroke-width": "1"
};
const hovered_style = Object.assign(   Object.assign({}, r), {
    fill: "#ffd83d",
    stroke: "#e0be34"
});
const clicked_style = Object.assign(Object.assign({}, r), {
    fill: "#de0700",
    stroke: "#ab0500"
});
const parent_style = Object.assign(Object.assign({}, r), {
    fill: "#6666ff",
    stroke: "#5151cc"
});
const mask_style = Object.assign(Object.assign({}, r), {
    fill: "black",
    "fill-opacity": "0.2"
});
let styles = {
    hovered: hovered_style,
    clicked: clicked_style,
    parent: parent_style,
    mask: mask_style
};

export { styles }