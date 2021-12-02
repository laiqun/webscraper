//const n = i(87);//, r = i(523);
//681
import * as r from "./SyncState.js" //r = i(523)
import * as n from "./Arr.js" //n = i(87)
class SitemapSync {
    static matchSitemaps(e) {
        const sorted_array = n.Arr.sortByObjectKey(e, "name");
        const result = [];
        for (let index = 0; index < sorted_array.length; index++) {
            let domain, sync_state;
            if (sorted_array[index + 1] && sorted_array[index].name === sorted_array[index + 1].name) {
                const i = sorted_array[index].localStorage ? sorted_array[index] : sorted_array[index + 1];
                const o = sorted_array[index].localStorage ? sorted_array[index + 1] : sorted_array[index];
                if (i.domain === o.domain)
                    sync_state = this.getSitemapSyncState(i.hashHistory, o.hashHistory);
                else
                {
                    domain = "Domain names between extension and cloud sitemaps are different. Re-name extension sitemap or overwrite sitemap.",
                    sync_state = r.SyncState.undeterminedLatest;
                }
                index++;
            }
            else {
                sync_state = sorted_array[index].localStorage ? r.SyncState.local : r.SyncState.cloud;
            }
            result.push({
                name: sorted_array[index].name,
                domain: null != domain ? domain : sorted_array[index].domain,
                syncState: sync_state
            });
        }
        return result;
    }

    static getSitemapSyncState(e, t) {
        e.reverse();
        t.reverse();
        if ( e[0] === t[0])
            return r.SyncState.synced;
        const i = e.find(e => t.includes(e));
        if (void 0 !== i) {
            const n = e.findIndex(e => e === i);
            const a = t.findIndex(e => e === i);
            if(0 !== n && 0 !== a)
                return r.SyncState.undeterminedLatest;
            else
            {
                if( n > a )
                    return r.SyncState.latestLocal;
                else
                    return r.SyncState.latestCloud;
            }
        }
        return r.SyncState.undeterminedLatest;
    }
}

export {SitemapSync}