const modifier = (text) => {

    let modifiedText = text
    actions = {
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
    for (actionType of Object.keys(actions)) {
        if (text.toLowerCase().includes("you " + actionType)) {
            if (state.stats[actions[actionType][0].toLowerCase()] < 20) {
                state.stats[actions[actionType][0].toLowerCase()] += 0.0625
            }
            if (state.skills[actions[actionType][1].toLowerCase()] < 20) {
                state.skills[actions[actionType][1].toLowerCase()] += 0.125
            }
        }
    }
    return {
        text: modifiedText
    }
}

// Don't modify this part
modifier(text)
