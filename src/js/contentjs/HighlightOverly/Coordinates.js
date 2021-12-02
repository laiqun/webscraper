 class Coordinates {
     static pointWithinElement(element, pos_x, pos_y) {
         const { top: top, bottom: bottom, left: left, right: right } = element.getBoundingClientRect();
         return pos_x <= right && pos_x >= left && pos_y <= bottom && pos_y >= top;
     }
 }

 export { Coordinates }