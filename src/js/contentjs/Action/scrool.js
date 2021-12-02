import * as i from "../ElementQuery2.js"

class o {
    static async  scrollElementToTop(e) {
            0 !== o.getElementScrollYPosition(e) && (await o.scrollToY(0, e));
    }

    static getElementScrollYPosition(e) {
        return e === window ? window.pageYOffset : e.scrollTop;
    }

    static scrollToY(start_offset, element) {
        return new Promise((resolve, reject) => {
            const pos_y = o.getElementScrollYPosition(element);
            const start = .5 * (pos_y + start_offset);
            const length = pos_y - start;
            const start_time = performance.now();
            window.requestAnimationFrame((function e() {
                let r = (performance.now() - start_time) / 2e3;
                if(r > 1 )
                    r = 1;
                element.scrollTo(0, start + length * Math.cos(r * Math.PI));
                if(r < 1 )
                    window.requestAnimationFrame(e);
                else
                    resolve();
            }));
        });
    }

    static async  scrollToBottomElement(context, selector, target) {
            let r = 0;
            const s = i.ElementQuery2.find(selector, context);
            if (0 === s.length) r = o.getWrapperElementScrollBottomPosition(target); else {
                for (const e of s) {
                    const t = o.getElementBottomPosition(e, target);
                    r < t && (r = t);
                }
                r = r - o.getWrapperElementVisibleHeight(target) + 200;
            }
            await o.scrollToY(r, target);
    }

    static getWrapperElementScrollBottomPosition(e) {
        if (e === window) {
            return document.body.scrollHeight - window.innerHeight + 500;
        }
        return e.scrollHeight - e.clientHeight;//实际高度，减去可视高度
    }

    static getElementBottomPosition(e, t) {
        const n = e.getBoundingClientRect();
        if (t === window) {
            return n.bottom + window.pageYOffset;
        }
        return e.getBoundingClientRect().bottom - t.getBoundingClientRect().top + t.scrollTop;
    }

    static getWrapperElementVisibleHeight(e) {
        return e === window ? window.innerHeight : e.offsetHeight;
    }
}

export { o as default}