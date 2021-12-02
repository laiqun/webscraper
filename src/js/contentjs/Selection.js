import * as SelectionError from "./SelectionError.js"
import * as ElementQuery2 from "./ElementQuery2.js"
import  {applyController} from "./IM/applyController.js";
import {Targets} from "./HighlightOverly/Targets.js";


let Selection = class {
    constructor(parentElementOfHTML, cssSelector, allowedElementsStr) {//约定 Selection 的构造函数的三个参数类型分别为HTMLElement, a.default, String
        this.parent = parentElementOfHTML;
        this.cssSelector = cssSelector;
        this.allowedElements = allowedElementsStr;
        this.clicked = [];  //单击的元素,单击两个后会自动选择相似元素
        this.selected = []; //选择的元素
        this.selectionLevel = 0;
    }

    getLockedSelector() {
        if( undefined === this.acceptLocked && undefined === this.rejectLocked){
            return new Promise((resolve, reject) => {
                this.acceptLocked = resolve;
                this.rejectLocked = reject;
            });
        }
        else {
            return Promise.reject("Could not create Promise");
        }
    }

    lockActive() {  //这个由嵌入的frame.html来执行
        if( undefined !== this.acceptLocked)
        {
            this.acceptLocked(this.activeCssSelector);
            this.acceptLocked = this.rejectLocked = undefined;
        }
        return Promise.resolve();
    }

    traverseDom(forwardOrback) {
        if (this.cssSelector.getElementGroups(this.selected).length > 1)
            throw new SelectionError.SelectionError("Can't traverse multiple groups");
        const step = forwardOrback ? 1 : -1;
        return this.updateSelected(true, step);
    }

    updateActive(selectedElement, allowMultipleSelectorsFlag) {
        try {
            if (this.isAllowed(selectedElement))
            {
                this.assertElement(selectedElement, allowMultipleSelectorsFlag);
                this.updateClickedElements(selectedElement);
                let result = this.updateSelected(allowMultipleSelectorsFlag, 0);
                return result;
            }
            {
                const e = this.activeCssSelector || "";
                return Promise.resolve(e);
            }
        } catch (e) {
            return Promise.reject(e);
        }
    }

    updateClickedElements(e) {
        if ( this.canAddElement(e) )
            this.clicked.push(e);
        else
            this.clicked = this.clicked.filter(t => t !== e);//剔除e
    }

    updateSelected(allowMultipleSelectors, step) {
        if (this.clicked.length > 0) {
            const level = this.selectionLevel + step;
            const r = this.cssSelector.getCssSelector(this.clicked, level, allowMultipleSelectors);
            if(r && this.activeCssSelector !== r)
            {
                 this.activeCssSelector = r;
                 this.selectionLevel = level;
                 this.selected = Array.from(ElementQuery2.ElementQuery2.find(this.activeCssSelector, this.parent))
            }
        }
        else {
            this.selectionLevel = 0;
            this.active = "";
            this.selected = [];
        }
        return Promise.resolve(this.activeCssSelector);
    }

    canAddElement(e) { //即不在点击的元素列表里; 也不在已选择的元素列表里,那么就可以添加
        return !this.clicked.includes(e) && !this.selected.includes(e);
    }

    assertElement(selectedElement, allowMultipleSelectors) {
        if(this.clicked.length > 0 && this.canAddElement(selectedElement) )
            this.cssSelector.getCssSelector([...this.clicked, selectedElement], this.selectionLevel, allowMultipleSelectors);
        if ( selectedElement !== this.parent && !this.parent.contains(selectedElement))
            throw new SelectionError.SelectionError("Parent does not contain selected element");
    }

    isAllowed(e) {
        return undefined === this.allowedElements || e.matches(this.allowedElements);
    }
};
let extFunc =  applyController(Targets.selection );
let outputClass = extFunc(Selection);
export {outputClass as Selection}