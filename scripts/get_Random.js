function cityExplore(adjective, noun, shop, shopkeep, stall, feature, statue, quest, uselessPerson){
    var inn_adjective = getRandom(adjective)
    var inn_noun = getRandom(noun)
    var shop_description = getRandom(shop)
    var shop_keeper = getRandom(shopkeep)
    var market_stall = getRandom(stall)
    var city_feature = getRandom(feature)
    var city_statue = getRandom(statue)
    var city_quest = getRandom(quest)
    var useless_person = getRandom(uselessPerson)

    
    var text = "<b>Inn name:</b> The " + inn_adjective + " " + inn_noun
    text += "<br><br><b>Shop name:</b> " + shop_description
    text += "<br><br><b>Shopkeeper:</b> " + shop_keeper
    text += "<br><br><b>Market Stall:</b> " + market_stall
    text += "<br><br><b>City Feature:</b> " + city_feature
    text += "<br><br><b>City Statue:</b> " + city_statue
    text += "<br><br><b>City Quest:</b> " + city_quest
    text += "<br><br><b>Useless Person: (Gather information/Investigation)</b> " + useless_person


    document.getElementById('output-text').innerHTML = text
}

function npcGenerate(firstname, lastname, gender, race, height, body, notable, clothing, profession, personality, motive, catchPhrase) {

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
    var npc_catch_phrase = getRandom(catchPhrase)



    var text = "<b>NPC: " + name_first + " " + name_last + "</b>. " + npc_gender + " " + npc_race + ". " 
    text += "<br><br>They are " + npc_height + " and their body is " + npc_body +". This person's most notable feature is " + npc_notable + ". Their clothing is " + npc_clothing + " and they look like they might work as a(an) " + npc_profession + ". "
    text += "They appear " + npc_personality + ". " + npc_motive
    text += "<br><br>Their catchphrase is \"" + npc_catch_phrase +"\""

    document.getElementById('output-text').innerHTML = text
}

function itemGenerate(curious_item, treasure_item, mundane_item) {
    var curious = getRandom(curious_item)
    var treasure = getRandom(treasure_item)
    var mundane = getRandom(mundane_item)


    var text = "<b>Curious Item:</b> " + curious
    text += "<br><br><b>Treasure Item:</b> " + treasure
    text += "<br><br><b>Mundane Item:</b> " + mundane

    document.getElementById('output-text').innerHTML = text
}

function trapGenerate(challenges, physical_trigger, physical_reaction, physical_trap, arcane_trigger, arcane_reaction, arcane_trap, trap_reset) {
    var challenge = getRandom(challenges)
    var physicalTrigger = getRandom(physical_trigger)
    var physicalReaction = getRandom(physical_reaction)
    var physicalTrap = getRandom(physical_trap)
    var arcaneTrigger = getRandom(arcane_trigger)
    var arcaneReaction = getRandom(arcane_reaction)
    var arcaneTrap = getRandom(arcane_trap)
    var reset = getRandom(trap_reset)


    var text = "<b>Challenge:</b> " + challenge
    text += "<br><br><br><b>Physical trap:</b> "
    text += "<br>Trigger: " + physicalTrigger
    text += "<br>Reaction: " + physicalReaction
    text += "<br>Trap: " + physicalTrap

    text += "<br><br><br><b>Arcane trap:</b> "
    text += "<br>Trigger: " + arcaneTrigger
    text += "<br>Reaction: " + arcaneReaction
    text += "<br>Trap: " + arcaneTrap

    document.getElementById('output-text').innerHTML = text
}

function dungeonRoom(roomAccentMundane, roomAccentExotic, minorRoomItems, majorRoomItems) {
    var minorAccent = getRandom(roomAccentMundane)
    var exoticAccent = getRandom(roomAccentExotic)
    var minorRoomItem1 = getRandom(minorRoomItems)
    var minorRoomItem2 = getRandom(minorRoomItems)
    var minorRoomItem3 = getRandom(minorRoomItems)
    var majorRoomItem = getRandom(majorRoomItems)


    var text = "<b>Dungeon room accent:</b> " + minorAccent
    text += "<br><b>Exotic room accent:</b> " + exoticAccent
    text += "<br><b>Exotic room feature:</b> " + majorRoomItem
    text += "<br><br><b>Mundane Item:</b> " + minorRoomItem1
    text += "<br><b>Mundane Item:</b> " + minorRoomItem2
    text += "<br><b>Mundane Item:</b> " + minorRoomItem3


    document.getElementById('output-text').innerHTML = text
}

function worldExplore(worldFeature, worldweather, worldclimate){
    var feature = getRandom(worldFeature)
    var weather = getRandom(worldweather)
    var climate = getRandom(worldclimate)

    
    var text = "<b>World Feature:</b> The " + feature
    text += "<br><br><b>World Weather:</b> " + weather
    text += "<br><br><b>World Climate:</b> " + climate


    document.getElementById('output-text').innerHTML = text
}

function randomAdventurer(adventuererList) {
    var adventurer = getRandom(adventuererList)

    var text = "<b>Adventurer Class:</b> " + adventurer

    document.getElementById('output-text').innerHTML = text
}

function potionGenerate(potion_container, potion_shape, potion_color, potion_descriptor_variant, potion_closure, potion_decoration, potion_label, potion_texture, potion_smell, potion_effect, potion_temporary_side_effect) {
   var container = getRandom(potion_container)
   var shape = getRandom(potion_shape)
   var color = getRandom(potion_color)
   var descriptor = getRandom(potion_descriptor_variant)
   var closure = getRandom(potion_closure)
   var decoration = getRandom(potion_decoration)
   var label = getRandom(potion_label)
   var texture = getRandom(potion_texture)
   var smell = getRandom(potion_smell)
   var effect = getRandom(potion_effect)
   var side_effect = getRandom(potion_temporary_side_effect)

   var text = "<b>Potion container:</b> " + container
   text += "<br><b>Potion shape:</b> " + shape
   text += "<br><b>Potion color:</b> " + color
   text += "<br><b>Potion descriptor:</b> " + descriptor
   text += "<br><b>Potion closure:</b> " + closure
   text += "<br><b>Potion decoration:</b> " + decoration
   text += "<br><b>Potion label:</b> " + label
   text += "<br><b>Potion texture:</b> " + texture
   text += "<br><b>Potion smell:</b> " + smell
   text += "<br><b>Potion effect:</b> " + effect
   text += "<br><b>Potion side effect:</b> " + side_effect


   document.getElementById('output-text').innerHTML = text
}

function getRandom(inputArray){
    var item = inputArray[Math.floor(Math.random()*inputArray.length)];
    return item
}







