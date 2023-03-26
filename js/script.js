/* 


BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
 */




const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];




// console.log(icons[0].name);


/////////////////// racchiudo tutto dentro una funzione unica //////////////////////////

function init(){


// TEST CREAZIONE OPZIONI SELETTORE

//////////////////////////////////////////////////////////




    function createOpt(){



    // ricavo un nuovo array che come contenuto avrá il valore della proprietá scelta


    const iconTypes = icons.map(icon => icon.type);
    console.log(iconTypes); 


    // TEST 3 RICAVARE I VALORI DESIDERATI DELL'ARRAY


    // usando set e spread


    ////////////////////////////////////////////////////////////////////////


    // const uniqueIconTypes = [...new Set(iconTypes)];
    // console.log(uniqueIconTypes); 


    ///////////////////////////////////////////////////////////////////////////



    // usando un ciclo e push...OK

    const uniqueIconTypes = [];
    iconTypes.forEach(iconType => {
        if (!uniqueIconTypes.includes(iconType)) {
        uniqueIconTypes.push(iconType);
        }
    });
    console.log(uniqueIconTypes);


    ///////////////////////////////////////////////////////////////////////////

    for (let i = 0 ; i < uniqueIconTypes.length ; i++){
    
        const opt = document.createElement('option');
        opt.value = uniqueIconTypes[i];
        opt.textContent = uniqueIconTypes[i];
    
        optSel.appendChild(opt);
    
    } 
    
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////

    /* Milestone 1
    Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa. */



    // devo creare una card per ogni icona contenente l'icona e il suo nome

    function createBoxes(icon) {



            // devo creare i contenitori dove inserire il tutto

            const col = document.createElement('div');
            const card = document.createElement('div');
            const cardBody = document.createElement('div')
            const iconElement = document.createElement('i');
            const nameIcon = document.createElement('p');

            // devo inserire il testo dentro il p creato
            nameIcon.textContent = `${icon.name}`;


            // dare le classi a tutti gli elementi creati
            col.classList.add('col-12' ,'col-md-6','col-lg-3');
            card.classList.add('card', 'my-3');
            cardBody.classList.add('card-body' , 'text-center', 'text-uppercase', 'fw-bold');
            iconElement.classList.add('fas', icon.prefix + icon.name, 'fa-' + icon.family, 'display-2');


            ///////////////////////////////////////////////////////////////////////
            /* Milestone 2
            Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente. */

            // devo assegnare ad ogni categoria di icona il suo colore

            iconElement.style.color = icon.color;

            ////////////////////////////////////////////////////////////////////////////

            // appendo ttuo quello che ho creato con il suo contenuto
            cardBody.appendChild(iconElement);
            cardBody.appendChild(nameIcon);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);
            console.log(iconElement);

    }; 


    /* Milestone 3
    Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla  select, visualizzare solamente le icone corrispondenti. */

    //UTILIZZO EVENTO AL CHANGE DELLE VARIE OPZIONI CREATE SU 


    //////////////////////////////////////////////////////////////////////////////////////////




    const selections = document.querySelector('select');
    selections.addEventListener('change' , (event) => {


        const selectedValue = event.target.value;
        console.log(selectedValue);
        const iconTypeArr = icons.filter(icon => selectedValue === 'all' || icon.type === selectedValue);
        row.innerHTML = '';
        console.log(iconTypeArr);
        iconTypeArr.forEach(icon => createBoxes(icon));



    });


    /////////////////////////////////////////////////////////////////////////////////

    const optSel = document.querySelector('select');

    const optPrint = createOpt()

    console.log(optSel);


    //dove voglio che tutte le card siano inserite?

    const row = document.getElementById('row');


    // provo a richiamare la funzione che mi genera tuttle le card al caricamento della pagina

    icons.forEach(icon => createBoxes(icon));


    /////////////////////////////////////////////////////////////////////////////////////


}

init();


























// TEST 1 RICAVARE I VALORI DESIDERATI DELL'ARRAY 

///////////////////////////////////////////////////////////////////////



// tentativo creazione funzione generale riutilizzabile

//dato l'array iniziale e una proprietá a scelta devo ricavare una lista contenente tutti i valori della proprietá


/* function  arrForProp(myArr, propriety){

    const arrProp = [];
    //const propFirstArr = myArr[0][propriety];

    for (let i = 0 ; i < myArr.length ; i++){
        
        let arrPropAdder = myArr[i][propriety];

        
        arrProp.push(arrPropAdder);
        
    }
    

    return arrProp
}

console.log(arrForProp(icons,'type'));

 */


///////////////////////////////////////////////////////////////////////


// TEST 2 RICAVARE I VALORI DESIDERATI DELL'ARRAY





/////////////////////////////////////////////////////////////////////////////////

/* filteredOptions = [];
icons.forEach(icon => !filteredOptions.includes(icon.type) && filteredOptions.push(icon.type) )


console.log(filteredOptions);


 */
/////////////////////////////////////////////////////////////////////////////////








































