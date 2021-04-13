/**
 * @description Initalizes raw data for dinosaur objects
 * @returns the raw dinosaur data object
 */
function initializeDinoData() {
    return [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbivore",
            "where": "North America",
            "when": "Late Jurassic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbivore",
            "where": "North America, Europe, Asia",
            "when": "Late Jurassic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate plates and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivore",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbivore",
            "where": "Worldwide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ];
}

/**
 * @description Represents a dino
 * &constructor
 * @param {obect} dino - a raw dino data object
 */
function Dino(dino) {
    this.species = dino.species
    this.weight = dino.weight
    this.height = dino.height
    this.diet = dino.diet
    this.where = dino.where
    this.when = dino.when
    this.fact = dino.fact
}

// Set compare methods to the prototype of the Dino constructor
Dino.prototype = {
    /**
     * @description Compares the given weight to the dino's weight
     * @param {int} weight - the weight of another creature
     * @returns a string which tells that how the argument weight compares to the dino's weight
     */
    compareWeight: function(weight) {
        if (this.weight > weight) {
            return `${this.species}'s weight (${this.weight}) is greater than yours (${weight}).`;
        } else if (this.weight < weight) {
            return `${this.species}'s weight (${this.weight}) is lesser than yours (${weight}).`;
        } else if (this.weight === weight) {
            return `You have the same weight as the ${this.species} (${this.weight}).`;
        }
    },
    
    /**
     * @description Compares the given height to the dino's height
     * @param {int} height - the height of another creature
     * @returns a string which tells that how the argument height compares to the dino's height
     */
    compareHeight: function(height) {
        if (this.height > height) {
            return `${this.species}'s height (${this.height}) is greater than yours (${height}).`;
        } else if (this.height < height) {
            return `${this.species}'s height (${this.height}) is lesser than yours (${height}).`;
        } else if (this.height === height) {
            return `You have the same height as the ${this.species} (${this.height}).`;
        }
    },
    
    /**
     * @description Compares the given diet to the dino's diet
     * @param {string} diet - the diet of another creature
     * @returns a string which tells that how the argument diet compares to the dino's diet
     */
    compareDiet: function(diet) {
        if (this.diet === diet) {
            return `Your diet is ${diet}, while ${this.species}'s was ${this.diet}.`;
        } else {
            return `You have the same diet as the ${this.species}: ${this.diet}.`;
        }
    }
};

/**
 * Creates a dino tile DOM-element
 * @param {object} dino - a dino object
 * @returns a new tile DOM-element with the data of the dino object
 */
function createDinoTile(dino) {
    const tile = document.createElement('div');
    tile.className = 'grid-item';
    tile.innerHTML = `<h3>${dino.species}</h3><img src="images/${(dino.species.toLowerCase())}.png" alt="${dino.species}"><p>${dino.fact}</p>`;
    return tile;
}

/**
 * Creates a human tile DOM-element
 * @param {object} human - a human object
 * @returns a human tile DOM-element with the data of the human object
 */
function createHumanTile(human) {
    const tile = document.createElement('div');
    tile.className = 'grid-item';
    tile.innerHTML = `<h3>${human.name}</h3><img src="images/human.png" alt="human">`;
    return tile;
}

/**
 * Gets human data from the input form
 * @returns a human object
 */
function getHumanData() {
    const humanData = {
        name: document.getElementById('name').value,
        height: calculateHeight(document.getElementById('feet').value, document.getElementById('inches').value),
        weight: weight = document.getElementById('weight').value,
        diet: document.getElementById('diet').value,
    };

    return humanData;
}

/**
 * Calculates the total height in feets
 * @param {string} feet - the feet input value
 * @param {string} inches - the inches input value
 * @returns the total height in feets
 */
function calculateHeight(feet, inches) {
    const intFeet = parseInt(feet)
    const intInches = parseInt(inches)
    return intFeet + (intInches / 12)
}

/**
 * Generates the tile grid and removes the input form from the DOM
 */
function generateTiles() {
    const human = getHumanData();
    const creatures = [...dinos];

    creatures.forEach(creature => {
        if (creature.species !== 'Pigeon') {
            const factSeed = Math.floor(Math.random() * 4)
            switch (factSeed) {
                case 0:
                    creature.fact = creature.compareDiet(human.diet)
                    break;
                case 1:
                    creature.fact = creature.compareHeight(human.height)
                    break;
                case 2:
                    creature.fact = creature.compareWeight(human.weight)
                    break;
                default:
                    creature.fact = creature.fact
            }
        }
    });

    creatures.splice(4, 0, human);

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 9; i++) {
        const gridTile = i == 4 ? createHumanTile(creatures[i]) : createDinoTile(creatures[i]);
        fragment.appendChild(gridTile);
    }

    document.getElementById('grid').appendChild(fragment);
    document.getElementById('reset-btn').style.display = 'block';
    const form = document.getElementById('dino-compare');
    form.style.display = 'none';
}

/**
 * Resets the form, remove the tile grid
 */
function reset() {
    document.getElementById('grid').innerHTML = '';
    document.getElementById('reset-btn').style.display = 'none';
    const form = document.getElementById('dino-compare');
    form.style.display = 'block';
}

// Initalizes dino data
const dinos = (() => {
    const dinoData = initializeDinoData();
    return dinoData.map(dinoObject => new Dino(dinoObject));
})();

/**
 * Listener function for comparsion
 * @param {event} e 
 */
function onCompareClick(e) {
    e.preventDefault();
    generateTiles();
}

/**
 * Listener function for resetting
 * @param {event} e 
 */
function onResetClick(e) {
    e.preventDefault();
    reset();
}

// Add event listeners
document.getElementById('btn').addEventListener('click', onCompareClick);
document.getElementById('reset-btn').addEventListener('click', onResetClick);