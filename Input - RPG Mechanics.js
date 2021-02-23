/*
The scripter and script used as a foundation:
je09
https://github.com/je09/AIDungeonRPG

The scripter and script they based their script on:
Atampy26
https://www.reddit.com/r/AIDungeon/comments/htf1p2/adding_rpg_mechanics_through_scripting_was_a_bad/fyi95xq/

All credit goes to those two. All I did was tweak the script so it could be used anywhere in any sentence. -Xaviancat
*/

//–------------//
//Default stats//
//-------------//

const defaultSats = {
    act: 2,
    destroy: 2,
    create: 2,
    observe: 2,
    manipulate: 2,
}

const defaultSkills = {
    talk: 3,
    athlete: 3,
    destroy: 3,
    fight: 3,
    make: 3,
    repair: 3,
    heal: 3,
    discover: 3,
    deduce: 3,
    deceive: 3,
    sneak: 3,
    puppeteer: 3,
    shapeshifting: 1,
    performance: 4
}

//–------------------//
//Action descriptions//
//-------------------//

const avaliableActions = {
"-destroy": ["Destroy", "Destroy"],
"-break": ["Destroy", "Destroy"],
"-attack": ["Destroy", "Fight"],
"-fight": ["Destroy", "Fight"],
"-slit": ["Destroy", "Fight"],
"-battle": ["Destroy", "Fight"],
"-stab": ["Destroy", "Fight"],
"-murder": ["Destroy", "Fight"],
"-hit": ["Destroy", "Fight"],
"-kick": ["Destroy", "Fight"],
"-punch": ["Destroy", "Fight"],
"-kill": ["Destroy", "Fight"],
"-strike": ["Destroy", "Fight"],
"-shoot": ["Destroy", "Fight"],
"-ambush": ["Destroy", "Fight"],
"-build": ["Create", "Make"],
"-craft": ["Create", "Make"],
"-make": ["Create", "Make"],
"-grow": ["Create", "Make"],
"-harvest": ["Create", "Make"],
"-heal": ["Create", "Heal"],
"-bandage": ["Create", "Heal"],
"-patch up": ["Create", "Heal"],
"-restore": ["Create", "Heal"],
"-fix": ["Create", "Repair"],
"-climb": ["Act", "Athlete"],
"-dive": ["Act", "Athlete"],
"-crawl": ["Act", "Athlete"],
"-drag": ["Act", "Athlete"],
"-drive": ["Act", "Athlete"],
"-ensnare": ["Act", "Athlete"],
"-jump": ["Act", "Athlete", true],
"-lasso": ["Act", "Athlete"],
"-lift": ["Act", "Athlete"],
"-pull": ["Act", "Athlete"],
"-push": ["Act", "Athlete"],
"-rappel": ["Act", "Athlete"],
"-restrain": ["Act", "Athlete"],
"-ride": ["Act", "Athlete"],
"-run from": ["Act", "Athlete"],
"-run away": ["Act", "Athlete"],
"-slide": ["Act", "Athlete"],
"-swim": ["Act", "Athlete"],
"-swing": ["Act", "Athlete"],
"-run": ["Act", "Athlete", true],
"-walk": ["Act", "Athlete", true],
"-tumble": ["Act", "Athlete"],
"-balance": ["Act", "Athlete"],
"-flip": ["Act", "Athlete"],
"-sing": ["Act", "Talk"],
"-speak": ["Act", "Talk", true],
"-chat": ["Act", "Talk"],
"-talk": ["Act", "Talk", true],
"-say": ["Act", "Talk", true],
"-write": ["Act", "Talk"],
"-charm": ["Act", "Talk"],
"-befriend": ["Act", "Talk"],
"-make sure": ["Act", "Talk", true],
"-read": ["Observe", "Discover", true],
"-search": ["Observe", "Discover"],
"-find": ["Observe", "Discover"],
"-investigate": ["Observe", "Discover", true],
"-discover": ["Observe", "Discover"],
"-know": ["Observe", "Deduce"],
"-conclude": ["Observe", "Deduce"],
"-deduce": ["Observe", "Deduce"],
"-make him": ["Manipulate", "Puppeteer"],
"-make her": ["Manipulate", "Puppeteer"],
"-make them": ["Manipulate", "Puppeteer"],
"-force him": ["Manipulate", "Puppeteer"],
"-force her": ["Manipulate", "Puppeteer"],
"-cast": ["Manipulate", "Puppeteer"],
"-force them": ["Manipulate", "Puppeteer"],
"-threaten": ["Manipulate", "Puppeteer"],
"-tame": ["Manipulate", "Puppeteer"],
"-unlock": ["Manipulate", "Puppeteer"],
"-hack": ["Manipulate", "Puppeteer"],
"-conceal": ["Manipulate", "Deceive"],
"-deceive": ["Manipulate", "Deceive"],
"-lie": ["Manipulate", "Deceive"],
"-escape": ["Manipulate", "Sneak"],
"-evade": ["Manipulate", "Sneak"],
"-kidnap": ["Manipulate", "Sneak"],
"-sneak": ["Manipulate", "Sneak"],
"-steal": ["Manipulate", "Sneak"]
}

const actionDescriptions = [
    ["completely fail to", "spectacularly fail to", "utterly fail to"], // 0
    ["unsuccessfully try to", "fail to"],                               // 1
    ["try to", "attempt to"],                                           // 2
    [""],                                                               // 3
    ["successfully"],                                                   // 4
    ["masterfully", "professionally", "gracefully", "skillfully"]       // 5
    [""]                                                                // Usual action
]

const actionResultDescriptions = [
    "spectacular fail!",                                                // 0
    "fail!",                                                            // 1
    "uncertain outcome!",                                               // 2
    "",                                                                 // 3
    "success!",                                                         // 4
    "complete success!",                                                // 5
    ""                                                                  // Usual action
]

const experienceDistribution = [
    3,                                                                  // 0
    3,                                                                  // 1
    2,                                                                  // 2
    2,                                                                  // 3
    1,                                                                  // 4
    1,                                                                  // 5
    1,                                                                  // Usual action
]

const maxTurn = 3; // Turns to show tips
const maxLevel = 20;  // Max XP for a character
const debug = true;

//–---------------//
//Custom functions//
//----------------//

function debugLog(message) {
    if (debug) {
        console.log(message)
    }
}

function checkSkill(skill) {
    if (state.skills[skill] <= 3) {
        return 'incompetent'
    }
    if (state.skills[skill] > 3 && state.skills[skill] < 5) {
        return 'a novice'
    }
    if (state.skills[skill] >= 5 && state.skills[skill] < 6) {
        return 'competent'
    }
    if (state.skills[skill] >= 6 && state.skills[skill] < 7) {
        return 'capable'
    }
    if (state.skills[skill] >= 7) {
        return 'good'
    }
}

function checkSkillDescriptor(skill) {
    if (state.skills[skill] <= 3) {
        return 'poor'
    }
    if (state.skills[skill] > 3 && state.skills[skill] < 5) {
        return 'fair'
    }
    if (state.skills[skill] >= 5 && state.skills[skill] < 6) {
        return 'okay'
    }
    if (state.skills[skill] >= 6 && state.skills[skill] < 7) {
        return 'capable'
    }
    if (state.skills[skill] >= 7) {
        return 'good'
    }
}

function randomNumber(max) {
    // From 0 to max
    return Math.floor(Math.random() * Math.floor(max));
}

function initialise() {
    // Set default stats, skills and turns
    debugLog("Initilizing first game")
    state.stats = defaultSats;
    state.skills = defaultSkills;

    state.turn = 0;
    state.initialised = true;

    debugLog("stats " + state.stats);
}

function turnIncrease() {
    state.turn += 1;
    if (state.turn >= maxTurn) {
        state.turn = 0;
    }
}

function actionResultHandler(roll, index, singleAction, keyword) {
    actionDescription = actionDescriptions[index]  //This gets a description from actionDescriptions.
    currentStat = avaliableActions[keyword][0].toLowerCase()
    currentSkill = avaliableActions[keyword][1].toLowerCase()
    
    action = singleAction //This is any avaliableActions WITHOUT a "True" at the end.
    message = `Rolled: ${roll.toString()} | +${experienceDistribution[index]} XP for ${currentStat} and ${currentSkill}`
    
    debugLog("Current stat is " + currentStat)
    debugLog("Current skill is " + currentSkill)
    debugLog(action)
    debugLog(message)

    if(action.includes("-")) {
        action = action.replace(/-/g, (actionDescription[randomNumber(actionDescription.length)] + " "))
    }
    if (state.stats[currentStat] < maxLevel) {
        state.stats[currentStat] += experienceDistribution[index] / 16
    }
    if (state.skills[currentSkill] < maxLevel) {
        state.skills[currentSkill] += experienceDistribution[index] / 8
    }

    return [action, message]
}

function simpleActionHandler(singleAction, keyword) {
    currentStat = avaliableActions[keyword][0].toLowerCase()
    currentSkill = avaliableActions[keyword][1].toLowerCase()
    action = singleAction //This is any avaliableActions with a "True" at the end.
    message = `+1 XP for ${currentStat} and ${currentSkill}`
    
    debugLog(action)
    debugLog(message)

    if(action.includes("-")) {
        action = action.replace(/-/g, "")
    }
    if (state.stats[currentStat] < maxLevel) {
        state.stats[currentStat] += experienceDistribution[6] / 16
    }
    if (state.skills[currentSkill] < maxLevel) {
        state.skills[currentSkill] += experienceDistribution[6] / 8
    }

    return [action, message]
}

function singleActionHandler(singleAction, keyword) {
    debugLog("Single action: " + singleAction + " and keyword is: " + keyword)

    var currentStat = avaliableActions[keyword][0].toLowerCase() // Name of the stat of this action
    var roll = Math.round((randomNumber(19)+ 1) + (state.stats[currentStat] - 8/state.stats[currentStat] -1)) // Rolling formula for actionResultHandler.
    debugLog("Roll: " + roll.toString())

    if (avaliableActions[keyword][2]) { //This is any avaliableActions with a "True" at the end.
        debugLog("This action is a usual one")
        return simpleActionHandler(singleAction, keyword);
    }

    switch (true) { //This is any avaliableActions WITHOUT a "True" at the end.
        case (roll <= 1):
            return actionResultHandler(roll, 0, singleAction, keyword);
        case (roll <= 5):
            return actionResultHandler(roll, 1, singleAction, keyword);
        case (roll <= 10):
            return actionResultHandler(roll, 2, singleAction, keyword);
        case (roll <= 15):
            return actionResultHandler(roll, 3, singleAction, keyword);
        case (roll <= 19):
            return actionResultHandler(roll, 4, singleAction, keyword);
        case (roll >= 20):
            return actionResultHandler(roll, 5, singleAction, keyword);
    }
}

function actionHandler(action) {
    debugLog("No Actions found...");
  
    for (keyword of Object.keys(avaliableActions)) {
        if (action != undefined && action.toLowerCase().includes(keyword)) { //Finds any of the words in avaliableActions.
            return singleActionHandler(action, keyword);
        }
    }
    return [action, tipsAndStats()] // If no actions were found
}

function tipsAndStats() {
    turn = state.turn;
    switch (turn) {
        case 0:
            return `You are ${checkSkill('talk')} at talking to people.`;
        case maxTurn:
            state.turn = 0; // It'll keep going to the default case
        default:
            tips = [ `Performance is a vital skill for a musician. You're ${checkSkillDescriptor('performance')} at it.`
                ];
            return tips[randomNumber(tips.length - 1)]
    }
}

//–--------------------
// Default modifier
//---------------------

const modifier = (text) => {
    let modifiedText = text;  // User input

    if (!state.initialised) {  // It's a custom value
        initialise();
        return {text: modifiedText}
    }

    if (state.initialised) {
        turnIncrease();
        parsedAction = actionHandler(modifiedText);  // User perfomed action with a custom RPG output style

        actionText = parsedAction[0];  // Text for the input
        messageText = "" + parsedAction[1];  // Tips'n'stuff
        
        state.message = messageText;
        return {text: actionText}
    }
}

modifier(text)
