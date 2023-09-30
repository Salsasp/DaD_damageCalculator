// JavaScript code for calculating and updating the total value

//object to store all compatible items for each class, to avoid invalid selections.
classItems = {
    fighter: {
        mainHand: ["Battle Axe", "Crossbow", "Halberd", "Longsword", "Pavise", "Spear", "Zweihander",
            "Arming Sword",
            "Buckler",
            "Falchion",
            "Flanged Mace",
            "Hatchet",
            "Heater Shield",
            "Horsemans Axe",
            "Round Shield",
            "Short Sword",
            "Viking Sword"
        ],
        offHand: ["Battle Axe", "Crossbow", "Halberd", "Longsword", "Pavise", "Spear", "Zweihander",
            "Castillon Dagger",
            "Buckler",
            "Heater Shield",
            "Round Shield",
            "Short Sword",
            "Lantern"
        ],
        head: [
            "Armet",
            "Barbuta Helmet",
            "Chapel De Fer",
            "Chaperon",
            "Hounskull",
            "Kettle Hat",
            "Leather Cap",
            "Visored Barbuta Helmet"
        ],
        chest: [
            "Dark Plate Armor",
            "Doublet",
            "Fine Cuirass",
            "Padded Tunic",
            "Regal Gambeson",
            "Templar Armor"
        ],
        legs: [
            "Cloth Pants",
            "Heavy Leather Leggings",
            "Leather Leggings",
            "Loose Trousers",
            "Padded Leggings",
            "Plate Pants"
        ],
        hands: [
            "Heavy Gauntlet",
            "Leather Gloves",
            "Rawhide Gloves",
            "Reinforced Gloves",
            "Riveted Gloves"
        ],
        feet: [
            "Adventurer Boots",
            "Heavy Boots",
            "Laced Turnshoe",
            "Lightfoot Boots",
            "Old Shoes",
            "Plate Boots",
            "Rugged Boots"
        ],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    barbarian: {
        mainHand: [
            "Bardiche",
            "Battle Axe",
            "Double Axe",
            "Felling Axe",
            "Quarterstaff",
            "War Maul",
            "Zweihander",
            "Horsemans Axe",
            "Viking Sword"
        ],
        offHand: [
            "Bardiche",
            "Battle Axe",
            "Double Axe",
            "Felling Axe",
            "Quarterstaff",
            "War Maul",
            "Zweihander"
        ],
        head: ["Barbuta Helmet", "Gjermundbu", "Leather Cap", "Viking Helmet"],
        chest: ["Northern Full Tunic", "Padded Tunic", "Regal Gambeson"],
        legs: [
            "Cloth Pants", 
            "Heavy Leather Leggings", 
            "Leather Leggings", 
            "Loose Trousers", 
            "Padded Leggings"
        ],
        hands: ["Leather Gloves", "Rawhide Gloves", "Reinforced Gloves", "Riveted Gloves"],
        feet: [
            "Adventurer Boots", 
            "Heavy Boots", 
            "Laced Turnshoe", 
            "Lightfoot Boots", 
            "Old Shoes", 
            "Rugged Boots"
        ],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    rogue: {
        mainHand: ["Kris Dagger", "Rapier", "Rondel Dagger"],
        offHand: ["Castillon Dagger", "Short Sword", "Stiletto Dagger", "Lantern"],
        head: ["Leather Cap", "Rogue Cowl", "Shadow Hood", "Shadow Mask"],
        chest: ["Doublet", "Marauder Outfit", "Padded Tunic", "Regal Gambeson"],
        legs: [
            "Cloth Pants", 
            "Heavy Leather Leggings",
            "Leather Leggings", 
            "Loose Trousers", 
            "Padded Leggings"
        ],
        hands: ["Leather Gloves", "Rawhide Gloves", "Reinforced Gloves", "Riveted Gloves"],
        feet: [
            "Adventurer Boots", 
            "Heavy Boots", 
            "Laced Turnshoe", 
            "Lightfoot Boots", 
            "Old Shoes", 
            "Rugged Boots"
        ],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    cleric: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        hands: [],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    wizard: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        hands: [],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    ranger: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        hands: [],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    warlock: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        hands: [],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    bard: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        hands: [],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    }
}

//damage formula : 
//((((((Base Weapon/Magical Damage + "Buff" Weapon Damage) * Combo Bonus * Impact Zone Bonus) + "Gear" Weapon Damage/Magical Damage + Divine Strike Damage) 
//* (1 + Power Bonus)) + Additional Damage) * (Hit Location Bonus) * (1 - (Damage Reduction * (1 - Penetration))) * (1 - Projectile Reduction)) + True Damage

function populateSelect(selectElement, playerClassSelect){
    console.log(selectElement.value);
    selectElement.innerHTML = '';
    classItems[playerClassSelect.value][selectElement.getAttribute('id')].forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        selectElement.appendChild(option);
    });
}

const playerClassSelect = document.getElementById('playerClass');
const mainHandSelect = document.getElementById('mainHand');
const offHandSelect = document.getElementById('offHand');
const headSelect = document.getElementById('head');
const chestSelect = document.getElementById('chest');
const handsSelect = document.getElementById('hands');
const legsSelect = document.getElementById('legs');
const feetSelect = document.getElementById('feet');
itemSelects = [mainHandSelect, offHandSelect, headSelect, chestSelect, handsSelect, legsSelect, feetSelect];
itemSelects.forEach(item => {
    populateSelect(item, playerClassSelect);
});
// Add an event listener to the select element that reacts to changes
playerClassSelect.addEventListener('change', () => {
    const selectedClass = playerClassSelect.value;
    console.log(`Selected value: ${selectedClass}`);
    itemSelects.forEach(item => {
        populateSelect(item, playerClassSelect);
    });
});
