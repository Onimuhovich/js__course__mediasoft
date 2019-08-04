import {shepsTablBody} from './sheps-tabl-body.js';

export function shep() {
    let doc = document;
    
    let shepDiv = doc.createElement('div');
    shepDiv.className = 'shep';
    shepDiv.setAttribute('id', 'shep');
    
    let tblUnits = doc.createElement('table');
        tblUnits.className = 'shep-units';
    
    let tblBody = shepsTablBody(4, 1);


    tblUnits.onmousedown = function(event) { 

      tblUnits.style.position = 'absolute';
      tblUnits.style.zIndex = 1000;
      document.body.appendChild(tblUnits);
      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        tblUnits.style.left = pageX - tblUnits.offsetWidth / 2 + 'px';
        tblUnits.style.top = pageY - tblUnits.offsetHeight / 2 + 'px';
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
    };



    
    tblUnits.appendChild(tblBody);
    shepDiv.appendChild(tblUnits);
    
    console.log(shepDiv);
    
    doc.getElementById('sea').appendChild(shepDiv);
}
