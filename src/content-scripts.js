function addDom(link_url) {
    
    const olpMerukariTag = document.createElement("span");
    olpMerukariTag.className = "olp-merukari olp-link";
    
    const linkElem = document.createElement("a");
    linkElem.className = "a-size-mini a-link-normal"
    linkElem.href = link_url;
    linkElem.target = "_blank";
    
    const olpFromTag = document.createElement("sapn");
    olpFromTag.className = "olp-from";
    const textNode = document.createTextNode("メルカリで見る");
    olpFromTag.appendChild(textNode);
    linkElem.appendChild(olpFromTag)
    olpMerukariTag.appendChild(linkElem);
    
    tmmOlpLinksTag = document.getElementsByClassName("swatchElement selected")[0].getElementsByClassName("tmm-olp-links");
    tmmOlpLinksTag = tmmOlpLinksTag[tmmOlpLinksTag.length - 1];
    tmmOlpLinksTag.appendChild(olpMerukariTag);
}

function createMarcariLink(productTitle) {
    return `https://jp.mercari.com/search?keyword=${productTitle}&shipping_payer_id=2&status=on_sale`
}

const main = () => {
    const productTitle = document.getElementById("productTitle");
    const linkUrl = createMarcariLink(productTitle.innerText);
    addDom(linkUrl);
}

main();