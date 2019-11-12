const mockUtils = require("./mockUtils.js");

const generatedPersons = mockUtils.generatePersons(50);
const personInfo = [...mockUtils.personInfo, ...generatedPersons];
const personoversiktEnhet = [...mockUtils.personoversiktEnhet, ...mockUtils.generatePersonoversiktEnhetFromPersons(generatedPersons)];

function mockForLokal(server) {
  server.post("/syfoperson/api/person/info", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(personInfo));
  });

  server.get("/api/v1/personoversikt/enhet/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    res.send(JSON.stringify(personoversiktEnhet));
  });

  server.post("/api/v1/persontildeling/registrer", (req, res) => {
    res.send();
  });

  server.get("/syfomoteadmin/api/internad/veilederinfo", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const veilederInfo = {
      "navn": "F_Z101010 E_Z101010",
      "ident": "Z101010",
    };

    res.send(JSON.stringify(veilederInfo));
  });

  server.get("/syfomoteadmin/api/internad/veilederinfo/enheter", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const enheter = {
      "enhetliste": [
        {
          "enhetId": "0316",
          "navn": "Oslo",
        },
        {
          "enhetId": "1100",
          "navn": "Akershus",
        },
      ],
    };

    res.send(JSON.stringify(enheter));
  });

  server.get("/api/aktivenhet", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    const aktivEnhet = {
      "aktivBruker": null,
      "aktivEnhet": "0316",
    };

    res.send(JSON.stringify(aktivEnhet));
  });

  server.get("/syfoveileder/api/veiledere/enhet/:enhet", (req, res) => {
    res.setHeader("Content-Type", "application/json");

    res.send(JSON.stringify(mockUtils.veiledere));
  });
}

module.exports = {
  mockForLokal,
};
