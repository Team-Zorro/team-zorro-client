const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateWebsite = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createWebsite(data)
    .then(ui.createWebsiteSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

const onGetAllWebsites = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllWebsites(data)
    .then(ui.getWebsiteSuccess)
    .catch(ui.failure) // if your request failed
}

const onUpdateWebsite = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const websiteId = $(event.target).closest('section').data('id')
  api.updateWebsite(websiteId, data)
    .then(ui.updateWebsiteSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
  $(event.target).trigger('reset')
}

const onDeleteWebsite = event => {
  event.preventDefault()
  const websiteId = $(event.target).closest('section').data('id')
  api.deleteWebsite(websiteId)
    .then(() => onGetAllWebsites(event)) // if your request was succesful
    .then(ui.deleteWebsiteSuccess)
    .catch(ui.failure) // if your request failed
}

module.exports = {

  onGetAllWebsites,
  onCreateWebsite,
  onUpdateWebsite,
  onDeleteWebsite
}
