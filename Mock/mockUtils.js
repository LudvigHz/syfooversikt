const fs = require('fs');
const path = require('path');

const readDataFromJsonFile = (filename) => {
   const rawData = fs.readFileSync(path.join(__dirname, `/Data/${filename}`));
   return JSON.parse(rawData.toString());
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const randomChoice = (choices) => {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const generatePerson = () => {
    const e = ['Banan', 'Eple', 'Fersken', 'Rambutan', 'Durian', 'Stjernefrukt', 'Tomat', 'Drue', 'Vannmelon', 'Nektarin', 'Mandarin', 'Persimon'];
    const f = ['Rød', 'Gul', 'Blå', 'Grønn', 'Rosa', 'Oransje', 'Sort', 'Lilla', 'Hvit', 'Turkis', 'Fiolett', 'Infrarød'];

    const navn = `${randomChoice(f)} ${randomChoice(e)}`;
    const fnr = getRandomInt(31999999999).toString().padStart(11, '0');

    return {
       navn,
       fnr,
       skjermingskode: 'INGEN',
    };
};

const generatePersons = (amount) => new Array(amount).fill({}).map(_ => generatePerson());

const generatePersonoversiktEnhetFromPersons = (persons) => {
    return persons.map(person => {
        return {
            fnr: person.fnr,
            enhet: '0316',
            veilederIdent: 'Z202020',
            motebehovUbehandlet: null,
            moteplanleggerUbehandlet: true,
            oppfolgingstilfeller: []
        };
    })
};

const personInfo = readDataFromJsonFile('personInfo.json');
const personoversiktEnhet = readDataFromJsonFile('personoversiktEnhet.json');
const veiledere = readDataFromJsonFile('veiledere.json')

module.exports = {
    generatePersons: generatePersons,
    generatePersonoversiktEnhetFromPersons: generatePersonoversiktEnhetFromPersons,
    generatePerson: generatePerson,
    personInfo: personInfo,
    personoversiktEnhet: personoversiktEnhet,
    veiledere: veiledere,
};

