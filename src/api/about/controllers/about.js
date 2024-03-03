'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about');
