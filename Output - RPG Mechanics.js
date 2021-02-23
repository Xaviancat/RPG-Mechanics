const modifier = (text) => {

    let modifiedText = text
    actions = {
        "balance": ["Act", "Athlete"],
        "make him": ["Manipulate", "Puppeteer"],
        "make her": ["Manipulate", "Puppeteer"],
        "make them": ["Manipulate", "Puppeteer"],
        "force him": ["Manipulate", "Puppeteer"],
        "force her": ["Manipulate", "Puppeteer"],
        "force them": ["Manipulate", "Puppeteer"],
        "cast": ["Manipulate", "Puppeteer"],
        "make": ["Create", "Make"],
        "destroy": ["Destroy", "Destroy"],
        "attack": ["Destroy", "Fight"],
        "fight": ["Destroy", "Fight"],
        "battle": ["Destroy", "Fight"],
        "bandage": ["Create", "Heal"],
        "stab": ["Destroy", "Fight"],
        "murder": ["Destroy", "Fight"],
        "hit": ["Destroy", "Fight"],
        "kill": ["Destroy", "Fight"],
        "strike": ["Destroy", "Fight"],
        "shoot": ["Destroy", "Fight"],
        "ambush": ["Destroy", "Fight"],
        "kidnap": ["Manipulate", "Sneak"],
        "befriend": ["Act", "Talk"],
        "threaten": ["Manipulate", "Puppeteer"],
        "break": ["Destroy", "Destroy"],
        "build": ["Create", "Make"],
        "charm": ["Act", "Talk"],
        "climb": ["Act", "Athlete"],
        "conceal": ["Manipulate", "Deceive"],
        "conclude": ["Observe", "Deduce"],
        "deduce": ["Observe", "Deduce"],
        "craft": ["Create", "Make"],
        "crawl": ["Act", "Athlete"],
        "deceive": ["Manipulate", "Deceive"],
        "dive": ["Act", "Athlete"],
        "drag": ["Act", "Athlete"],
        "drive": ["Act", "Athlete"],
        "ensnare": ["Act", "Athlete"],
        "escape": ["Manipulate", "Sneak"],
        "evade": ["Manipulate", "Sneak"],
        "fix": ["Create", "Repair"],
        "flip": ["Act", "Athlete"],
        "grow": ["Create", "Make"],
        "harvest": ["Create", "Make"],
        "heal": ["Create", "Heal"],
        "patch up": ["Create", "Heal"],
        "restore": ["Create", "Heal"],
        "hack": ["Manipulate", "Puppeteer"],
        "investigate": ["Observe", "Discover", true],
        "discover": ["Observe", "Discover"],
        "jump": ["Act", "Athlete", true],
        "know": ["Observe", "Deduce"],
        "lasso": ["Act", "Athlete"],
        "lie": ["Manipulate", "Deceive"],
        "lift": ["Act", "Athlete"],
        "pull": ["Act", "Athlete"],
        "push": ["Act", "Athlete"],
        "read": ["Observe", "Discover"],
        "rappel": ["Act", "Athlete"],
        "restrain": ["Act", "Athlete"],
        "ride": ["Act", "Athlete"],
        "run from": ["Act", "Athlete"],
        "run away": ["Act", "Athlete"],
        "run": ["Act", "Athlete", true],
        "walk": ["Act", "Athlete", true],
        "search": ["Observe", "Discover"],
        "find": ["Observe", "Discover"],
        "sing": ["Act", "Talk"],
        "speak": ["Act", "Talk", true],
        "chat": ["Act", "Talk"],
        "talk": ["Act", "Talk", true],
        "say": ["Act", "Talk", true],
        "slide": ["Act", "Athlete"],
        "sneak": ["Manipulate", "Sneak"],
        "steal": ["Manipulate", "Sneak"],
        "swim": ["Act", "Athlete"],
        "swing": ["Act", "Athlete"],
        "tame": ["Manipulate", "Puppeteer"],
        "tumble": ["Act", "Athlete"],
        "unlock": ["Manipulate", "Puppeteer"],
        "write": ["Act", "Talk"]
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