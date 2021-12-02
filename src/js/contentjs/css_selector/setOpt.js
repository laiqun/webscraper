class setOpt{
    static mergeUnique(e, t) {
        return [...new Set([...e, ...t])];
    }

    static removeEmpty(e) {
        let t = e.length;
        for (; t--;) {
            e[t] || e.splice(t, 1);
        }
        return e;
    }

    static intersect(e, t) {
        return e.filter(e => t.includes(e));
    }

    static randomElement(e) {
        return e[Math.floor(Math.random() * e.length)];
    }
}

export  {setOpt}