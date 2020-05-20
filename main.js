function genEleByObj(eleObj) {
    let tag = document.createElement(eleObj.tag);
    if (eleObj.classes !== undefined)
        tag.classList.add.apply(tag.classList, eleObj.classes);
    if (eleObj.text !== undefined) {
        let text = document.createTextNode(eleObj.text);
        tag.appendChild(text);
    }

    return tag;
}

function appendElesByObj(elesObj) {
    if (elesObj.eles !== undefined)
        for (ele of elesObj.eles)
            elesObj.own.appendChild(appendElesByObj(ele));
    return elesObj.own;
}

export {
    genEleByObj,
    appendElesByObj
}