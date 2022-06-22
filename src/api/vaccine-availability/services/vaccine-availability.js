'use strict';

/**
 * vaccine-availability service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vaccine-availability.vaccine-availability');
