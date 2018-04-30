angular
    .module('moose.configuration', [])
    .value('CONFIGURATION', {
        api: 'https://api.efood.real.de/api/v2/real',
        oauth: 'https://api.efood.real.de/authorizationserver/oauth/token',
        images: 'https://www.real.de/lebensmittelshop/images'
    });