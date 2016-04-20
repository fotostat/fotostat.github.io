angular.module("RelocationUi.config", [])

  .constant("API", {
    "env": "live",
    "relocationServiceUrl": "https://api.umzugsauktion.de/service/relocation-ua-coredata",
    "geoServiceUrl": "https://api.immonet.de/geo-service",
    "relocationEmployeeServiceUrl" : "https://api.umzugsauktion.de/service/relocation-employee",
    "relocationBoxcalculatorServiceUrl" : "https://api.umzugsauktion.de/service/relocation-boxcalculator"
  })
;
