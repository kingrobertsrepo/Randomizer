function cityExplore(adjective, noun, shop, stall, feature, quest){
    var inn_adjective = getRandom(adjective)
    var inn_noun = getRandom(noun)
    var shop_description = getRandom(shop)
    var market_stall = getRandom(stall)
    var city_feature = getRandom(feature)
    var city_quest = getRandom(quest)

    
    var text = "<b>Inn name:</b> The " + inn_adjective + " " + inn_noun
    text += "<br><br><b>Shop name:</b> " + shop_description
    text += "<br><br><b>Market Stall:</b> " + market_stall
    text += "<br><br><b>City Feature:</b> " + city_feature
    text += "<br><br><b>City Quest:</b> " + city_quest


    document.getElementById('output-text').innerHTML = text
}


function npcGenerate(firstname, lastname, gender, race, height, body, notable, clothing, profession, personality, motive) {

    var name_first = getRandom(firstname)
    var name_last = getRandom(lastname)
    var npc_gender = getRandom(gender)
    var npc_race = getRandom(race)
    var npc_height = getRandom(height)
    var npc_body = getRandom(body)
    var npc_notable = getRandom(notable)
    var npc_clothing = getRandom(clothing)
    var npc_profession = getRandom(profession)
    var npc_personality = getRandom(personality)
    var npc_motive = getRandom(motive)



    var text = "<b>NPC: " + name_first + " " + name_last + "</b>. " + npc_gender + " " + npc_race + ". " 
    text += "<br><br>They are " + npc_height + " and their body is " + npc_body +". This person's most notable feature is " + npc_notable + ". Their clothing is " + npc_clothing + " and they look like they might work as a(an) " + npc_profession + ". "
    text += "They appear " + npc_personality + ". " + npc_motive

    document.getElementById('output-text').innerHTML = text
}

function curiousItemGenerate(item) {
    var text = getRandom(item)
    document.getElementById('output-text').innerHTML = text
}


function getRandom(inputArray){
    var item = inputArray[Math.floor(Math.random()*inputArray.length)];
    return item
}







