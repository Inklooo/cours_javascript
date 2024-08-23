let string = "hello world";
let number = 25;
let boolean = true

//les tableaux
let array = ["loic", 25, true, "julien"]
//console.log(array[0][3])

let array2 = ["loic", 24, true ,[1,2], {nom: "denis"}]
//console.log(array2[4].nom)

let objet = {
  pseudo: "deadpool",
  age: 38,
  techno: ["javascript", "SCSS", "python"],
  admin: false
}
//objet.adress = "22 rue du code" => cela va ajouter l'adresse, ou la remplacer si le clé adress existe deja

let data = [
  {
    pseudo: "deadpool",
    age: 38,
    techno: ["javascript", "SCSS", "python"],
    admin: false,
  },

  {
    pseudo: "julien",
    age: 42,
    techno: ["PHP", "SCSS", "python"],
    admin: true,
  },

  {
    pseudo: "Alex",
    age: 38,
    techno: ["javascript", "SCSS", "python"],
    admin: false
  }
]
//les datas vont dans un tableau
//console.log(data[2].pseudo[0]) => on affiche alex

//-------------------------
// LES STRUCUTRES DE CONTROLE
//-------------------------

if(data[0].age > data[1].age) {
  console.log("deadpool est plus vieux que Julien")
} else { console.log("Julien est plus vieux que deadpool")
  };

  //WHILE

  let a = 0;

  while (a < 10) {
    a ++
    console.log(a)
  }
  // tant que a est inferieur a 10, ajoute 1 à A

  // DO WHILE
  let b = 0;

  do{
    b++
    console.log(b)
  } while (b < 5);

  //BOUCLE FOR
  for(const user of data) {
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
  }


  //on declare la valeur de i / jusuq'ou on boucle / on incrémente i si la condition 2 n'est pas remplie
  for (i = 0; i < data.length; i++ ) {
    //console.log(i)
    //console.log(data[i].techno[0])
    //document.body.innerHTML += "<h2>" + data[1].techno + "</h2>";
  };

  //SWITCH
  document.body.addEventListener("click", (e) =>{
    switch (e.target.id) {
      case "javascript":
        document.body.style.background = "yellow";
        break;
      case "php":
        document.body.style.background = "violet";
        break;
      case "python":
        document.body.style.background = "blue";
    }
  });


// METHODE DE STRING

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//-----------------
// Méthodes Numbers
//-----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1)); ---- pour redure le nombre apres la virgule, dans ce cas 2 chiffres apres la virgule
// console.log(parseInt("43")); --- --changer une chaine de caractere en number
// console.log(parseInt(numberString)); ------ convertir en string
// console.log(parseFloat(numberString));---- convertir avec un chiffre a virgule dans le cas ci-dessus , il convertir 42,12


// Math

// console.log(Math.PI);
// console.log(Math.round(4.5)); ----arrondir le chiffre
// console.log(Math.floor(4.9));-----arrondir au superieur
// console.log(Math.ceil(4.1)); ----- arrondir a l'inferieur
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16)); ------calcul la racine carre

// console.log(Math.floor(Math.random() * 50)); ------ avoir un chiffre random entre 0 et 50, si on veut pas de virgule on ajoute Math.floor



//-----------------
// Méthodes Arrays
//-----------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];


//----------FUSIONNER DES TABLEAUX--------------------------------------------------
// let newArray = array3.concat(array4);
// console.log(newArray);
// let newArray = [...array3, ...array4];
// console.log(newArray);


//---------RETIRER DES ESPACES VIGULES OU AUTRES ET EN INJECTER D'AUTRE--------------
// console.log(array3.join(' '));


//-------------DECOUPER UN ELEMENT DU TABLEAU -- SLICE[0], EFFACER ELEMENT 1---------
// console.log(array3.slice(1));

///------RETIRER LES TROIS PREMIER ELEMENTS ET GARDER LE 5---------------------------
// console.log(newArray.slice(3, 5));


//------------POUR FAIRE UNE RECHERCHE DANS UN TABLEAU--------------------------------
// console.log(array3.indexOf("Python"));


//-----AFFICHIER LE NOM DE CHARQUE ELEMENT DU TABLEAU-----------------------------------
// array3.forEach((languages) => console.log(languages));



//--------------- ON TEST DANS CHAQUE ELEMENT SI IL Y A PHP -----------------------------
// console.log(array3.every((language) => language == "Php"));
// console.log(array3.some((language) => language == "Php"));

//---------SHIFT EST POUR RETIRER LE PREMIER ELEMENT DU TABLEAU --------------------------
// let shift = array3.shift();
// console.log(array3);

//-------------POP EST POUR RETIRER LE DERNIER ELEMENT DU TABLEAU -------------------------
// console.log(array3.pop());


//---------------------SPLICE ON RETIRE LES ELEMENT 2 ELEMENT A PARTIR DE 0 ET ON LE REMPLACE PARCE QU'ON VEUT ---------------------
// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);



// IMPORTANT //

//------------- METHODE POUR AJOUTER TOUT CE QU'IL A DANS LE TABLEAU --------------
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));

//---------------------AJOUTER UNE DONNER AU TABLEAU ------------------------------
arrayNumber.push(17);
// console.log(arrayNumber);


//---------FILTER = GARDER CERTAINS ELEMENTS D'UN TABLEAU----------------------------
//---------SORT = TRIER DU + PETIT AU + GRAND OU INVERSEMENT OU ALPHABETIQUE -------------------------
//---------- MAP =  COMME UN EACH, ON PEUT AJOUTER DES <li>${number}</li> ETC...git-------------------------------
// FILTER, SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");



//----------METHODE SUR LES OBJETS ------------------------------------------
document.body.innerHTML = data
.sort((a , b) => b.age - a.age)
.map((user) =>
  // ---------  ON MAP ET ON FAIT CE QU'ON VEUT --------------
`
  <div class="user-card">
    <h2>${user.pseudo}</h2>
    <p> Age : ${user.age} ans </p>
    <p> Status : ${user.admin ? "Modérateur" : "Member"}</p>
  </div>
`
).join("");
