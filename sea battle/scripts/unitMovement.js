import {shepsTablBody} from './sheps-tabl-body.js';

export function unit(unit, tr, td) {
    let doc = document;
    
    let divUnits = doc.createElement('div');
        divUnits.className = 'divunits';
    
    
    // Перечитать статью про драг энд дроп :)
    
    for (let i = 0; i < unit; i++) {
    let tblUnits = doc.createElement('table');
        tblUnits.className = 'shep-units';
        tblUnits.setAttribute('id', 'shep-units')
        
          tblUnits.onmousedown = function unitMovement(event) { 

          tblUnits.style.position = 'absolute';
          tblUnits.style.zIndex = 1000;
          doc.body.appendChild(tblUnits);
          moveAt(event.pageX, event.pageY);

          function moveAt(pageX, pageY) {
            tblUnits.style.left = pageX - tblUnits.offsetWidth / 2 + 'px';
            tblUnits.style.top = pageY - tblUnits.offsetHeight / 1 + 'px';
          }

          function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
          }

          document.addEventListener('mousemove', onMouseMove);

          tblUnits.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            tblUnits.onmouseup = null;
          }

        }
          
        tblUnits.ondragstart = function() {
            return false;
        }
    
    let tblBody = shepsTablBody(tr, td);
        
        tblUnits.appendChild(tblBody);
        
        console.log(tblUnits);
        
        divUnits.appendChild(tblUnits);
    }
    
    return divUnits;
    
}