

function cityExplore(adjective, noun, shop){
    var inn_adjective = getRandom(adjective)
    var inn_noun = getRandom(noun)
    var shop_description = getRandom(shop)

    
    var text = "<b>Inn name:</b> The " + inn_adjective + " " + inn_noun
    text += "<br><b>Shop name:</b> " + shop_description
    document.getElementById('output-text').innerHTML = text
}


function getRandom(inputArray){
    var item = inputArray[Math.floor(Math.random()*inputArray.length)];
    return item
}









// window.onload = function(){
//     var name = prompt("What's your name?");
//     var lengthOfName = name.length

//     document.getElementById('output-text').innerHTML = lengthOfName;
// };
