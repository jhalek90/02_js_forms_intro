//////////////////////////////////////////////////////
//
// Javascript DnD character sheet.
// -Justin Halek
// justinhalek@gmail.com
//
/////////////////////////////////////////////////////

//#region page setup
console.log("hello JS"); // Sanity check to ensure JS loads. Remove before deployment.
hideClass("input_box",true);
hideClass("unique_section",true);
hideClass("description_section",true);
//#endregion

//#region Global Application Values
let skillPointsToSpend = 20;
//#endregion

//#region base object
const classes = {
  archer: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 15,
      perception: 5,
      polearms: 5,
      speechcraft: 10,
      trade: 5,
      unarmedCombat: 10
    },
    unique: {
      bonus: ["Fast feet","Wolfhead codpiece"],
      weakness: ["Bad breath","club foot"]
    },
    description: "Archer class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  assassin: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 15,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 10,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 10,
      perception: 10,
      polearms: 5,
      speechcraft: 10,
      trade: 5,
      unarmedCombat: 15
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Assassin class:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  engineer: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 10,
      heavyArmor: 5,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 5,
      perception: 15,
      polearms: 5,
      speechcraft: 15,
      trade: 15,
      unarmedCombat: 5
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Engineer class:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  guard: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 15,
      darkMagic: 5,
      heavyArmor: 10,
      leadership: 10,
      lightArmor: 10,
      lightMagic: 5,
      marksman: 5,
      perception: 10,
      polearms: 10,
      speechcraft: 10,
      trade: 5,
      unarmedCombat: 15
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Guard class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  knight: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 15,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 15,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 5,
      perception: 10,
      polearms: 15,
      speechcraft: 5,
      trade: 5,
      unarmedCombat: 15
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Knight class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  mage: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 10,
      heavyArmor: 5,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 15,
      marksman: 5,
      perception: 10,
      polearms: 5,
      speechcraft: 15,
      trade: 5,
      unarmedCombat: 5
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Mage class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  merchant: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 5,
      perception: 15,
      polearms: 5,
      speechcraft: 20,
      trade: 15,
      unarmedCombat: 10
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Merchant class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  priest: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 5,
      heavyArmor: 3,
      leadership: 15,
      lightArmor: 5,
      lightMagic: 15,
      marksman: 5,
      perception: 15,
      polearms: 5,
      speechcraft: 15,
      trade: 5,
      unarmedCombat: 5
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Preist class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  rogue: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 5,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 5,
      perception: 15,
      polearms: 5,
      speechcraft: 15,
      trade: 5,
      unarmedCombat: 15
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Rogue class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  scout: {
    baseStats: {
      charisma: 5,
      strength: 5,
      speed: 5,
      wisdom: 5
    },
    skills: {
      bladedWeapons: 5,
      darkMagic: 5,
      heavyArmor: 5,
      leadership: 10,
      lightArmor: 5,
      lightMagic: 5,
      marksman: 5,
      perception: 20,
      polearms: 5,
      speechcraft: 10,
      trade: 5,
      unarmedCombat: 5
    },
    unique: {
      bonus: [],
      weakness: []
    },
    description: "Scout class: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
}

// #endregion 

//#region constants from elememts 
const nameInput = document.getElementById("nameInput");

const classInput = document.getElementById("classInput");
const charismaInput = document.getElementById("charismaInput");
const speedInput = document.getElementById("speedInput");
const strengthInput = document.getElementById("strengthInput");
const wisdomInput = document.getElementById("wisdomInput");

//user editable stats
const bladedWeaponsInput = document.getElementById("bladedWeaponsInput");
const darkMagicInput = document.getElementById("darkMagicInput");
const heavyArmorInput = document.getElementById("heavyArmorInput");
const leadershipInput = document.getElementById("leadershipInput");
const lightArmorInput = document.getElementById("lightArmorInput");
const lightMagicInput = document.getElementById("lightMagicInput");
const marksmanInput = document.getElementById("marksmanInput");
const perceptionInput = document.getElementById("perceptionInput");
const polearmsInput = document.getElementById("polearmsInput");
const speechcraftInput = document.getElementById("speechcraftInput");
const tradeInput = document.getElementById("tradeInput");
const unarmedCombatInput = document.getElementById("unarmedCombatInput");
// #endregion 

//#region name listener

nameInput.addEventListener("focus", (event) => {
  console.log("Gained Focus, user has clicked on Input");
  console.log(event);
});

nameInput.addEventListener("blur", (event) => {
  console.log("Lost Focus, user has clicked away");
  console.log(event);
});

nameInput.addEventListener("input", (event) => {
  var val=document.getElementById("nameInput").value
  if (val !=""){
    if (validateName(val)){
      //do nothing, its fine.
    }else{
      var str=document.getElementById("nameInput").value
      var new_str=str.substr(0,str.length-1)
      document.getElementById("nameInput").value=new_str
      alert("Names must be alphanumeric!");
    }
  }
  console.log("name set to: "+document.getElementById("nameInput").value);
});
// #endregion

//#region class listener 
classInput.addEventListener("change", (event) => {

  var c = classInput.value.toLowerCase();
  console.log(c);
  if (c=="select a class"){
    hideClass("input_box",true);
    hideClass("unique_section",true);
    hideClass("description_section",true);
    console.log("User selected "+c+"... hiding stats")
  }else{
    hideClass("input_box",false);
    hideClass("unique_section",false);
    hideClass("description_section",false);

    document.getElementById("magickaInput").value=5;
    document.getElementById("charismaInput").value=classes[c].baseStats.charisma;
    document.getElementById("strengthInput").value=classes[c].baseStats.strength;
    document.getElementById("speedInput").value=classes[c].baseStats.speed;
    document.getElementById("wisdomInput").value=classes[c].baseStats.wisdom;
    document.getElementById("bladedWeaponsInput").value=classes[c].skills.bladedWeapons;
    document.getElementById("darkMagicInput").value=classes[c].skills.darkMagic;
    document.getElementById("heavyArmorInput").value=classes[c].skills.heavyArmor;
    document.getElementById("leadershipInput").value=classes[c].skills.leadership;
    document.getElementById("lightArmorInput").value=classes[c].skills.lightArmor;
    document.getElementById("lightMagicInput").value=classes[c].skills.lightMagic;
    document.getElementById("marksmanInput").value=classes[c].skills.marksman;
    document.getElementById("perceptionInput").value=classes[c].skills.perception;
    document.getElementById("polearmsInput").value=classes[c].skills.polearms;
    document.getElementById("speechcraftInput").value=classes[c].skills.speechcraft;
    document.getElementById("tradeInput").value=classes[c].skills.trade;
    document.getElementById("unarmedCombatInput").value=classes[c].skills.unarmedCombat;
    document.getElementById("description_text").innerHTML=classes[c].description;

    //clear and then populate lists.
    var bonus=classes[c].unique.bonus;
    var weakness=classes[c].unique.weakness;
    document.getElementById("bonus").innerHTML = "";
    document.getElementById("weakness").innerHTML = "";
    bonus.forEach(element => addtolist("bonus",element));
    weakness.forEach(element => addtolist("weakness",element));

    //load base 20 user editable points onto HTML
    document.getElementById("points_string").innerHTML = "Skill points: 20";
    
    //log activity to console
    console.log("User selected "+c+"... loading base stats")
  }
});
// #endregion

//#region Submit button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  var name=document.getElementById("nameInput").value
  if (name !=""){
    var c = classInput.value.toLowerCase();
    var output = new CreateCharacter(c);
    console.log(output);
  }else{
    alert("Name can't be blank");
  }
});
// #endregion

//#region baseStats
charismaInput.addEventListener("change", (event) => {
  var c = classInput.value.toLowerCase();
  document.getElementById("charismaInput").value=classes[c].baseStats.charisma
  alert("base stats are not user editable!");
});

speedInput.addEventListener("change", (event) => {
  var c = classInput.value.toLowerCase();
  document.getElementById("speedInput").value=classes[c].baseStats.speed
  alert("base stats are not user editable!");
});

strengthInput.addEventListener("change", (event) => {
  var c = classInput.value.toLowerCase();
  document.getElementById("strengthInput").value=classes[c].baseStats.strength
  alert("base stats are not user editable!");
});

wisdomInput.addEventListener("change", (event) => {
  var c = classInput.value.toLowerCase();
  document.getElementById("wisdomInput").value=classes[c].baseStats.wisdom
  alert("base stats are not user editable!");
});
// #endregion

//#region skills
bladedWeaponsInput.addEventListener("change", (event) => {
  changeValue('bladedWeapons',bladedWeaponsInput.value);
});

darkMagicInput.addEventListener("change", (event) => {
  changeValue('darkMagic',darkMagicInput.value);
});

heavyArmorInput.addEventListener("change", (event) => {
  changeValue('heavyArmor',heavyArmorInput.value);
});

leadershipInput.addEventListener("change", (event) => {
  changeValue('leadership',leadershipInput.value);
});

lightArmorInput.addEventListener("change", (event) => {
  changeValue('lightArmor',lightArmorInput.value);
});

lightMagicInput.addEventListener("change", (event) => {
  changeValue('lightMagic',lightMagicInput.value);
});

marksmanInput.addEventListener("change", (event) => {
  changeValue('marksman',marksmanInput.value);
});

perceptionInput.addEventListener("change", (event) => {
  changeValue('perception',perceptionInput.value);
});

polearmsInput.addEventListener("change", (event) => {
  changeValue('polearms',polearmsInput.value);
});

speechcraftInput.addEventListener("change", (event) => {
  changeValue('speechcraft',speechcraftInput.value);
});

tradeInput.addEventListener("change", (event) => {
  changeValue('trade',tradeInput.value);
});

unarmedCombatInput.addEventListener("change", (event) => {
  changeValue('unarmedCombat',unarmedCombatInput.value);
});
// #endregion

//#region functions
//function to change / limit stats based on base stats.
function changeValue(stat, value) {
  var c = classInput.value.toLowerCase();
  var old_value=classes[c].skills[stat]

  if (value<0){
    console.log(stat+"Can't be less than 0");
    document.getElementById(stat+"Input").value=0;
    alert("Can't be less than 0");
  }

  if (value<classes[c].skills[stat]-5){
    console.log(stat+" can't be less than base stat-5");
    document.getElementById(stat+"Input").value=classes[c].skills[stat]-5
    alert("Can't be less than base stat-5");
  }

  if (value>classes[c].skills[stat]+10){
    console.log(stat+" can't be more than 10 over the base value!");
    document.getElementById(stat+"Input").value=classes[c].skills[stat]+10
    alert("Can't be more than 10 over the base value!");
  }
  console.log("Changed "+stat+" to "+value);

  var points_used=checkPoints(c);
  if (points_used>20){
    document.getElementById(stat+"Input").value=old_value;
    alert("You are out of points to spend!");
  }else{
    document.getElementById("points_string").innerHTML = "Skill points: "+(20-points_used);
  }

}


function validateName(inputtxt){
  var letterNumber = /^[a-z0-9A-Z\-]+$/;
  if(inputtxt.match(letterNumber)){
    if (inputtxt.length<30){
      return true;
    }else{
      return true;
    }
  }else{ 
   return false; 
  }
}



function hideClass(str,hide) {
  var x = document.getElementsByClassName(str);
  for (var i = 0; i < x.length; i++) {
    if (hide){
      x[i].style.display = "none";
    }else{
      x[i].style.display = "block";
    }
  }
}


function addtolist(list,value) {
  var ul = document.getElementById(list);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
}


function CreateCharacter(c){
  //alert("Creating character from class: "+c);
  this.name=document.getElementById("nameInput").value;
  this.class=c;
  this.baseStats={};
  this.skills={};
  this.unique={};
  this.unique.bonus=classes[c].unique.bonus
  this.unique.weakness=classes[c].unique.weakness
  this.description=classes[c].description;

  this.baseStats.charisma=document.getElementById("charismaInput").value;
  this.baseStats.strength=document.getElementById("strengthInput").value;
  this.baseStats.speed=document.getElementById("speedInput").value;
  this.baseStats.wisdom=document.getElementById("wisdomInput").value;

  this.skills.bladedWeapons=document.getElementById("bladedWeaponsInput").value;
  this.skills.darkMagic=document.getElementById("darkMagicInput").value;
  this.skills.heavyArmor=document.getElementById("heavyArmorInput").value;
  this.skills.leadership=document.getElementById("leadershipInput").value;
  this.skills.lightArmor=document.getElementById("lightArmorInput").value;
  this.skills.lightMagic=document.getElementById("lightMagicInput").value;
  this.skills.marksman=document.getElementById("marksmanInput").value;
  this.skills.perception=document.getElementById("perceptionInput").value;
  this.skills.polearms=document.getElementById("polearmsInput").value;
  this.skills.speechcraft=document.getElementById("speechcraftInput").value;
  this.skills.trade=document.getElementById("tradeInput").value;
  this.skills.unarmedCombat=document.getElementById("unarmedCombatInput").value; 

  window.print();
}

function checkPoints(c){
  var spent=0;
  spent+=(document.getElementById("bladedWeaponsInput").value-classes[c].skills.bladedWeapons);
  spent+=(document.getElementById("darkMagicInput").value-classes[c].skills.darkMagic);
  spent+=(document.getElementById("heavyArmorInput").value-classes[c].skills.heavyArmor);
  spent+=(document.getElementById("leadershipInput").value-classes[c].skills.leadership);
  spent+=(document.getElementById("lightArmorInput").value-classes[c].skills.lightArmor);
  spent+=(document.getElementById("lightMagicInput").value-classes[c].skills.lightMagic);
  spent+=(document.getElementById("marksmanInput").value-classes[c].skills.marksman);
  spent+=(document.getElementById("perceptionInput").value-classes[c].skills.perception);
  spent+=(document.getElementById("polearmsInput").value-classes[c].skills.polearms);
  spent+=(document.getElementById("speechcraftInput").value-classes[c].skills.speechcraft);
  spent+=(document.getElementById("tradeInput").value-classes[c].skills.trade);
  spent+=(document.getElementById("unarmedCombatInput").value-classes[c].skills.unarmedCombat);
  return spent;
}
// #endregion

//#region mike's examples
// Example of how you can use JS to manipulate the values of inputs.
const healthInput = document.getElementById("healthInput");
healthInput.value = 5;
console.log("set health to default value of 5");
// #endregion

//Fin

/**
 * Example Character Schema
 */

// Name: String. Not Null, Alphanumeric, has MaxLength.
// Class: String. From Dropdown, Autopopulate skills and Base Stats. Apply minimums to skills and stats.

// Base Stats: Integers (range 0-20). Apply Max Count:
  // Charisma
  // Speed (movement, actions per turn)
  // Strength (hitpoints)
  // Wisdom (magicka)

// Active Stats: integers (readonly, autoGen):
  // HP (Strength)
  // Magicka (Wisdom)

// Skills: Integers (range 0-100) Max = governing base stat * 5:
  // Marksman (Strength)
  // Bladed Weapons (Strength + Speed)
  // Unarmed Combat (Strength + Speed)
  // Polearms (Speed)
  // Heavy Armor (Strength)
  // Light Armor (Speed)
  // Trade (Charisma)
  // Speechcraft (Charisma)
  // Leadership (Charisma)
  // Dark Magic (Wisdom)
  // Light Magic (Wisdom)
  // Perception (Wisdom)

// Unique:
  // Bonuses: Array[string]
  // Curses/Weaknesses. Array[string]

// Description: string