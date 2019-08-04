export function shepsTablBody(tr, td) {
    let doc = document;

let tblBody = doc.createElement('tbody');
        tblBody.className = 'tblbody';
    
    for (let i = 0; i < tr; i++) {
        let line = doc.createElement('tr');
        
        for (let x = 0; x < td; x++) {
            let box = doc.createElement('td');
            box.className = 'cell';
            line.appendChild(box);
        }
        
    tblBody.appendChild(line);
        
    }
    
    return tblBody;
    
}