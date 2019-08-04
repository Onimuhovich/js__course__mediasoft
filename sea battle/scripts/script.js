import {shep} from '/scripts/sheps.js';

function fieldPlayers() {
    let doc = document;
    
    let iDiv = doc.createElement('div');
        iDiv.className = 'field players';
    
    let pDiv = doc.createElement('p');
        pDiv.className = 'name-field';
    
    let contentDiv = doc.createTextNode('Ваше поле');
        iDiv.appendChild(pDiv);
        pDiv.appendChild(contentDiv);
    
    console.log(iDiv);
    
        //Нужно добавить название полю Игрока
    
    let tbl = doc.createElement('table');
        tbl.className = 'table';
    
    let tblBody = doc.createElement('tbody');
        tblBody.className = 'tblbody';
    
    for (let i = 0; i < 10; i++) {
        let line = doc.createElement('tr');
        
        for (let x = 0; x < 10; x++) {
            let box = doc.createElement('td');
            box.className = 'cell';
            line.appendChild(box);
        }
        
    tblBody.appendChild(line);
        
    }
    
    tbl.appendChild(tblBody);
    iDiv.appendChild(tbl);
    doc.getElementById('sea').appendChild(iDiv);
}

// 
//function fieldOponent() {
//    let doc = document,
//        iDiv = doc.createElement('div');
//        iDiv.className = 'field oponent';
//    let pDiv = doc.createElement('p');
//        pDiv.className = 'name-field';
//    
//    let contentDiv = doc.createTextNode('Поле опонента');
//        iDiv.appendChild(pDiv);
//        pDiv.appendChild(contentDiv);
//    
//    //Нужно добавить название поля Опонента
//    
//    let tbl = doc.createElement('table');
//        tbl.className = 'table';
//    let tblBody = doc.createElement('tbody');
//        tblBody.className = 'tblbody';
//    
//    for (let i = 0; i < 10; i++) {
//        let line = doc.createElement('tr');
//        
//        for (let x = 0; x < 10; x++) {
//            let box = doc.createElement('td');
//            box.className = 'cell';
//            line.appendChild(box);
//        }
//        
//    tblBody.appendChild(line);
//        
//    }
//    
//    tbl.appendChild(tblBody);
//    iDiv.appendChild(tbl);
//    doc.getElementById('sea').appendChild(iDiv);
//}

fieldPlayers();
//fieldOponent();
shep();