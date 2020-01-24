const config = {
    "dev": {
        "keycloak": {
            "url": process.env.keycloak_url || "http://localhost:8443", 
            "realmName": process.env.keycloak_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_clientSecret || "9ebc2fc1-ced9-4774-a661-7e2c59991cfe"
        },
        "keycloak_ner": {
            "url": process.env.keycloak_ner_url || "http://localhost:8443",
            "realmName": process.env.keycloak_ner_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_ner_clientSecret || "f6ce7466-b04f-4ccf-b986-e9c61e5fb26b"
        },
        "notificationUrl": process.env.notificationUrl || "http://localhost:9012",
        "registryUrl": process.env.registry_url || "http://localhost:9080",
        "nerUtilServiceUrl": process.env.ner_utilservice_url || "http://localhost:9181"
    },
    "prod": {
        "keycloak": {
            "url": process.env.keycloak_url,
            "realmName": process.env.keycloak_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_clientSecret
        },
        "keycloak_ner": {
            "url": process.env.keycloak_ner_url,
            "realmName": process.env.keycloak_ner_realmName,
            "clientId": "utils",
            "clientSecret": process.env.keycloak_ner_clientSecret
        },
        "notificationUrl": process.env.notificationUrl,
        "registryUrl": process.env.registry_url,
        "nerUtilServiceUrl": process.env.ner_utilservice_url
    }
}

const logger = require('./log4j')

module.exports.getAllVars = function (envName) {
    var environment = envName
    if (envName === undefined) {
        environment = 'dev'
    }
    logger.info("Service running in mode = " + environment)
    return config[environment]
}