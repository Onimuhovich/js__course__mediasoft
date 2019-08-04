import {unit} from './unitMovement.js';

export function shep() {
    let doc = document;
    
    let shepDiv = doc.createElement('div');
    shepDiv.className = 'shep';
    shepDiv.setAttribute('id', 'shep');
    
    let tblUnitsFour = unit(1, 4, 1),
        tblUnitsThree = unit(2, 3, 1),
        tblUnitsTwo = unit(3, 2, 1),
        tblUnitsOne = unit(4, 1, 1);
    
    shepDiv.appendChild(tblUnitsFour);
    shepDiv.appendChild(tblUnitsThree);
    shepDiv.appendChild(tblUnitsTwo);
    shepDiv.appendChild(tblUnitsOne);
    doc.getElementById('sea').appendChild(shepDiv);
}
