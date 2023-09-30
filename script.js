// JavaScript code for calculating and updating the total value

//object to store all compatible items for each class, to avoid invalid selections.
classItems = {
    fighter: {
        mainHand: ["a", "b"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    barbarian: {
        mainHand: ["c", "d"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        feet: ["test", "test"],
        ring1: ["test", "test"],
        ring2: ["test", "test"],
        neck: ["test", "test"],
        cloak: ["test", "test"],
    },
    rogue: {
        mainHand: ["test", "test"],
        offHand: ["test", "test"],
        head: ["test", "test"],
        chest: ["test", "test"],
        legs: ["test", "test"],
        feet: ["test", "test"],
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
    selectElement.innerHTML = '';
    classItems[playerClassSelect.value].mainHand.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        item1Select.appendChild(option);
    });
}

const playerClassSelect = document.getElementById('playerClass');
const mainHandSelect = document.getElementById('item1');
// Add an event listener to the select element that reacts to changes
playerClassSelect.addEventListener('change', () => {
    const selectedClass = playerClassSelect.value;
    console.log(`Selected value: ${selectedClass}`);
    const item1Select = document.getElementById('item1');
    item1Select.innerHTML = '';
    classItems[playerClassSelect.value].mainHand.forEach(item => {
    const option = document.createElement('option');
    option.value = item;
    option.text = item;
    item1Select.appendChild(option);
    });
});



const item1Attribute = document.getElementById("item1Attribute");
const item1Slider = document.getElementById("item1Slider");
const item1Value = document.getElementById("item1Value");

const item2Attribute = document.getElementById("item2Attribute");
const item2Slider = document.getElementById("item2Slider");
const item2Value = document.getElementById("item2Value");

const totalValue = document.getElementById("totalValue");

item1Attribute.addEventListener("change", updateTotal);
item1Slider.addEventListener("input", updateTotal);

item2Attribute.addEventListener("change", updateTotal);
item2Slider.addEventListener("input", updateTotal);

function updateTotal() {
    const item1AttributeValue = parseInt(item1Attribute.value);
    const item1SliderValue = parseInt(item1Slider.value);

    const item2AttributeValue = parseInt(item2Attribute.value);
    const item2SliderValue = parseInt(item2Slider.value);

    const totalPrice = item1AttributeValue + item1SliderValue + item2AttributeValue + item2SliderValue;
    totalValue.textContent = totalPrice;
}