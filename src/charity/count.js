const { fetchJSON, stringifyQuery } = require('../helpers')

const ALLOWED_KEYS = [
  'apiKey',
  'ids.GB-CHC',
  'search',
  'incomeRange',
  'addressWithin',
  'areasOfOperation.id',
  'causes.id',
  'beneficiaries.id',
  'operations.id',
  'funders',
  'hasGrant',
  'grantDateRange',
]

const count = ({ baseUrl, apiVersion, apiKey }) => (query={}) => {

  query.apiKey = apiKey
  const queryString = stringifyQuery(query, ALLOWED_KEYS)

  const url = `${baseUrl}/${apiVersion}/count-charities/?${queryString}`
  const options = { method: 'GET' }
  
  return fetchJSON(url, options, query.accessToken)
}

module.exports = count