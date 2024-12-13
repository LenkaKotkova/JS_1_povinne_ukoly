const justFood = (pocetLidi) => {
return `catering od Just Food pro ${pocetLidi} za ${pocetLidi * 100} `
}

const yourMama = (pocetLidi) => {
    return `catering od Your Mama pro ${pocetLidi} za ${pocetLidi * 200} `
    }

const haven = (pocetLidi) => {
    return `catering od Haven pro ${pocetLidi} za ${pocetLidi * 400} `
    }

const createEvent = (nazev, pocetLidi, catering) => {
    return `Udalost ${nazev} s ${catering(pocetLidi)}`
}

    console.log(createEvent("Narozeniny od Radima", 7000, justFood))

