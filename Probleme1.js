function isValidHTML(html) {
    let regex1='^[aZ-Az]';//on conside un regex d'écriture d'une balise mais je suis pas sûr avec la regex(çq marche ou pas car on utilise pas de connexion)
    let regex2='^[aZ-Az]';
    let baliseOuvrante="<"+regex1+">";
    let baliseFerment="</"+regex2+">";
    html=baliseOuvrante + baliseFerment;
    const isValidHTML = true;
    if (baliseFerment=="") {
        html=baliseOuvrante;
        isValidHTML =false;
    } else if (baliseOuvrante="") {
        html=baliseFerment;
        isValidHTML=false;
    }else if (regex1!=regex2) {
        html=baliseOuvrante + baliseFerment;
        isValidHTML=false;
    }else{
        isValidHTML=true
    }
    return isValidHTML;
}