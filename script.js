const rune = {
  "phase": 2,
  "glyphs": [
    {
      "sigil": [
        "apm",
        "apm",
        "enhance",
        "stab",
        "enhance",
        "fire",
        "enhance",
        "apm"
      ],
      "connections": [1, 2, 3, 4]
    },
    {
      "sigil": [
        "fire",
        "enhance",
        "stab",
        "stab",
        "stab",
        "stab",
        "stab",
        "enhance"
      ],
      "connections": [4, 5, 8, 9]
    },
    {
      "sigil": [
        "apm",
        "enhance",
        "fire",
        "fire",
        "enhance",
        "fire",
        "fire",
        "enhance"
      ],
      "connections": [3, 7, 9, 10]
    },
    {
      "sigil": [
        "enhance",
        "stab",
        "enhance",
        "fire",
        "enhance",
        "amp",
        "enhance",
        "apm"
      ],
      "connections": [2, 6, 8, 10]
    },
    {
      "sigil": [
        "apm",
        "enhance",
        "fire",
        "enhance",
        "enhance",
        "fire",
        "enhance",
        "apm"
      ],
      "connections": [1, 5, 6, 7]
    }
  ],
  "bindings": [
    "acc",
    "acc",
    "acc",
    "multi",
    "multi",
    "multi",
    "aug",
    "forti",
    "aug",
    "aug"
  ]
};

const calcRune = (glyph) => {

  const agents = glyph.connections
    .map(binding => rune.bindings[binding - 1])
    .reduce((obj, binding) => {
      if (!obj[binding]) obj[binding] = 0;
      obj[binding]++;
      return obj;
    }, {});

  const sigils = glyph.sigil
    .reduce((obj, sigil) => {
      if(!obj[sigil]) obj[sigil] = 0;
      obj[sigil]++;
      return obj;
    }, {});

  // ADD Values
  let mathglyph = [...glyph.sigil];

  if (sigils[mathglyph[0]] < 8) {
    while (mathglyph[0] === mathglyph[7]) {
      mathglyph.push(mathglyph[7]);
      mathglyph = mathglyph.splice(1,8);
    }
    // Sigils are rotated and ready for use
    

  }else{
    // calc with 8 :)
  }




  console.log(mathglyph);
  
} 

window.onload =  () => {
  document.getElementById("rune").innerHTML = JSON.stringify(rune);

  if(rune.bindings.reduce((count, elem) => elem === "acc" ? count += 1 : count, 0) > rune.bindings.length / 3) {
    console.log("TO MANY ACC");
    return;
  }

switch(rune.phase){
  case 0:
    console.log("Phase 0");
    break;
  
  case 1:
    console.log("Phase 1");
    break;

  case 2:
    console.log("Phase 2");

    const values = rune.glyphs.map(elem => calcRune(elem));    

    break;
}


};
