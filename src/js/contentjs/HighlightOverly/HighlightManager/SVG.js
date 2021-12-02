// void 0  equal undefined
class SVG {
    static setNamespaceProperties(element, propertyMap) {
        for (const key in propertyMap)
            element.setAttributeNS(void 0, key, propertyMap[key]); //setAttributeNS namespace name vlaue
        return element;
    }
    static getDimensionFromRect(boundingRect) {
        const { x: pos_x, y: pos_y, height: pos_height, width: pos_width, top: pos_top, left: pos_left } = boundingRect;
        return {
            x: SVG.positionFallback(pos_x, pos_left),
            y: SVG.positionFallback(pos_y, pos_top),
            height: void 0 !== pos_height ? pos_height.toString() : "0",
            width: void 0 !== pos_width ? pos_width.toString() : "0"
        };
    }
    static positionFallback(x_y, top_left) {
        if (void 0 !== x_y)
            return x_y.toString()
        else if (void 0 !== top_left)
            return top_left;
        else
            return "0"
    }
}
export { SVG };