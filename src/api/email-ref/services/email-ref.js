'use strict';

/**
 * email-ref service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-ref.email-ref');
