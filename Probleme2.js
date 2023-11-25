function paireProgramming(experiences,mostExperienced) {
    let array = [];
    let isMostExperience=false;
    let temporaire1 = experiences[0];
    let nombre = experiences.length;
    let temporaire2=experiences[nombre-2];
    let mostExperienced2=0;
    let i=1;
    while (i<nombre && nombre - 1>=0) {
        if (temporaire1 < experiences[i]) {
            temporaire1 = experiences[i];
            mostExperienced = i;
            mostExperienced2 = mostExperienced;
            if (temporaire2 < experiences[nombre-1] && experiences[nombre - 1]!=temporaire1) {
                temporaire2=experiences[nombre-1];
                mostExperienced=nombre-1;
            }
            isMostExperience=true;
            (mostExperienced > mostExperienced2) ? array.push(mostExperienced, mostExperienced2)
            :array.push(mostExperienced2,mostExperienced)
            return array;
        }
        if (temporaire1 > experiences[i]) {
            temporaire1 = experiences[i];
            mostExperienced = i;
            mostExperienced2 = mostExperienced;
            if (temporaire2 > experiences[nombre-1] && experiences[nombre - 1]!=temporaire1) {
                temporaire2=experiences[nombre-1];
                mostExperienced=nombre-1;
            }
            isMostExperience=false;
            (mostExperienced > mostExperienced2) ? array.push(mostExperienced, mostExperienced2)
            :array.push(mostExperienced2,mostExperienced)
            return array;
        }
    }
    return []; 
    
}

console.log(paireProgramming([1,4,3,2,8,3]))