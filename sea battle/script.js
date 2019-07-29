function field() {
    let doc = document,
        iDiv = doc.createElement('div');
        iDiv.className = 'field';
    
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

field();