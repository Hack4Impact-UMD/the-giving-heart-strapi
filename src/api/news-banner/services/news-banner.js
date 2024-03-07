'use strict';

/**
 * news-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-banner.news-banner');
