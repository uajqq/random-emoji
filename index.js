document.getElementById("emoji-total").innerHTML = "Total emoji in database: " + emoji["emojis"].length
const delay = ms => new Promise(res => setTimeout(res, ms));
const url = "https://www.random.org/integers/?num=1&min=1&max=" + (emoji["emojis"].length + 1) + "&col=1&base=10&format=plain&rnd=new"

// Function to generate a random emoji
async function generateRandomEmoji() {
    let randomIndex;
    const response = await fetch(url);
    randomIndex = await response.text();
    randomIndex = Number(randomIndex) - 1;
    console.log(randomIndex);

    document.getElementById('random-emoji').innerHTML = emoji["emojis"][randomIndex]["emoji"]
    document.getElementById('random-emoji-name').innerHTML = emoji["emojis"][randomIndex]["name"]
        + "<br>(" + emoji["emojis"][randomIndex]["group"] + ")"
    response2 = await fetch("https://www.random.org/quota/?format=plain");
    randomRemaining = await response2.text();
    document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
}

async function generateRandomThreeEmoji() {
    var emojigroup = ""
    var emojidescriptiongroup = ""
    for (let i = 0; i < 3; i++) {
        let randomIndex;
        response = await fetch(url);
        randomIndex = await response.text();
        randomIndex = Number(randomIndex) - 1;
        console.log(randomIndex);
        emojigroup = emojigroup + emoji["emojis"][randomIndex]["emoji"];
        emojidescriptiongroup = emojidescriptiongroup + emoji["emojis"][randomIndex]["name"]
            + " (" + emoji["emojis"][randomIndex]["group"] + ")" + "<br>";
        document.getElementById('random-three-emoji').innerHTML = emojigroup;
        document.getElementById('random-three-emoji-description').innerHTML = emojidescriptiongroup;
        response2 = await fetch("https://www.random.org/quota/?format=plain");
        randomRemaining = await response2.text();
        document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
    }
}

async function generateStory() {
    var emojigroup = ""
    var emojidescriptiongroup = ""
    for (let i = 0; i < (Math.floor(Math.random() * 4 + 2)); i++) {
        let randomIndex;
        response = await fetch(url);
        randomIndex = await response.text();
        randomIndex = Number(randomIndex) - 1;
        console.log(randomIndex);
        emojigroup = emojigroup + emoji["emojis"][randomIndex]["emoji"];
        emojidescriptiongroup = emojidescriptiongroup + emoji["emojis"][randomIndex]["name"] + ", "
        document.getElementById('random-story').innerHTML = emojigroup;
        document.getElementById('random-story-description').innerHTML = emojidescriptiongroup
        response2 = await fetch("https://www.random.org/quota/?format=plain");
        randomRemaining = await response2.text();
        document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
    }
    emojigroup = emojigroup + "&ensp;🔜&ensp;"
    emojidescriptiongroup = emojidescriptiongroup + ". Soon: "
    for (let i = 0; i < (Math.floor(Math.random() * 4 + 2)); i++) {
        let randomIndex;
        response = await fetch(url);
        randomIndex = await response.text();
        randomIndex = Number(randomIndex) - 1;
        console.log(randomIndex);
        emojigroup = emojigroup + emoji["emojis"][randomIndex]["emoji"];
        emojidescriptiongroup = emojidescriptiongroup + emoji["emojis"][randomIndex]["name"] + ", "
        document.getElementById('random-story-description').innerHTML = emojidescriptiongroup
        document.getElementById('random-story').innerHTML = emojigroup;
        response2 = await fetch("https://www.random.org/quota/?format=plain");
        randomRemaining = await response2.text();
        document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
    }
    
    sentence = emojidescriptiongroup.charAt(0).toUpperCase() + emojidescriptiongroup.slice(1)
    sentence = "&quot" + sentence.replaceAll(/Flag: /gi, '').replaceAll(', .', '.').slice(0, -2) + ".&quot";
    document.getElementById('random-story-description').innerHTML = sentence
        
}

async function generateStoryNoFlags() {
    var emojigroup = ""
    var emojidescriptiongroup = ""
    for (let i = 0; i < (Math.floor(Math.random() * 4 + 2)); i++) {
        let randomIndex;
        response = await fetch(url);
        randomIndex = await response.text();
        randomIndex = Number(randomIndex) - 1;
        console.log(randomIndex);
        if (emoji["emojis"][randomIndex]["subgroup"] == "country-flag") {
            i = i - 1;
            continue
        }
        emojigroup = emojigroup + emoji["emojis"][randomIndex]["emoji"];
        emojidescriptiongroup = emojidescriptiongroup + emoji["emojis"][randomIndex]["name"] + ", "
        document.getElementById('random-story').innerHTML = emojigroup;
        document.getElementById('random-story-description').innerHTML = emojidescriptiongroup
        response2 = await fetch("https://www.random.org/quota/?format=plain");
        randomRemaining = await response2.text();
        document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
    }
    emojigroup = emojigroup + "&ensp;🔜&ensp;"
    emojidescriptiongroup = emojidescriptiongroup + ". Soon: "
    for (let i = 0; i < (Math.floor(Math.random() * 4 + 2)); i++) {
        let randomIndex;
        response = await fetch(url);
        randomIndex = await response.text();
        randomIndex = Number(randomIndex) - 1;
        console.log(randomIndex);
        if (emoji["emojis"][randomIndex]["subgroup"] == "country-flag") {
            i = i - 1;
            continue
        }
        emojigroup = emojigroup + emoji["emojis"][randomIndex]["emoji"];
        emojidescriptiongroup = emojidescriptiongroup + emoji["emojis"][randomIndex]["name"] + ", "
        document.getElementById('random-story-description').innerHTML = emojidescriptiongroup
        document.getElementById('random-story').innerHTML = emojigroup;
        response2 = await fetch("https://www.random.org/quota/?format=plain");
        randomRemaining = await response2.text();
        document.getElementById('randomness').innerHTML = "Random.org bits remaining: " + randomRemaining
    }
    
    sentence = emojidescriptiongroup.charAt(0).toUpperCase() + emojidescriptiongroup.slice(1)
    sentence = "&quot" + sentence.replaceAll(/Flag: /gi, '').replaceAll(', .', '.').slice(0, -2) + ".&quot";
    document.getElementById('random-story-description').innerHTML = sentence
        
}

async function copyOne() {
    var copyText = document.getElementById('random-emoji').innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById('copy-one').innerHTML = "Copied!";
    await delay(1000);
    document.getElementById('copy-one').innerHTML = "Copy emoji";
}

async function copyOneDesc() {
    var copyText = document.getElementById('random-emoji-name').innerText;
    navigator.clipboard.writeText(copyText.split("\n")[0]);
    document.getElementById('copy-one-desc').innerHTML = "Copied!";
    await delay(1000);
    document.getElementById('copy-one-desc').innerHTML = "Copy emoji description";
}

async function copyThree() {
    var copyText = document.getElementById('random-three-emoji').innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById('copyThree').innerHTML = "Copied!";
    await delay(1000);
    document.getElementById('copyThree').innerHTML = "Copy emojis";
}

async function copyStory() {
    var copyText = document.getElementById('random-story').innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById('copy-story').innerHTML = "Copied!";
    await delay(1000);
    document.getElementById('copy-story').innerHTML = "Copy story";
}

async function copyStoryDesc() {
    var copyText = document.getElementById('random-story-description').innerText;
    navigator.clipboard.writeText(copyText);
    document.getElementById('copy-story-description').innerHTML = "Copied!";
    await delay(1000);
    document.getElementById('copy-story-description').innerHTML = "Copy emoji story narration";
}