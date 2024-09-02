const locationTypeDefs = `#graphql
  type Country {
    id: ID!
    name: String
    iso3: String
    iso2: String
    numeric_code: Int
    phone_code: String
    capital: String
    currency: String
    currency_name: String
    currency_symbol: String
    tld: String
    native: String
    region: String
    region_id: Int
    subregion: String
    subregion_id: Int
    nationality: String
    latitude: Float
    longitude: Float
    emoji: String
    emojiU: String
  }

  type State {
    id: ID!
    name: String
    country_id: Int
    country_code: String
    country_name: String
    state_code: String
    type: String
    latitude: Float
    longitude: Float
  }

  type City {
    id: ID!
    name: String
    state_id: Int
    state_code: String
    state_name: String
    country_id: Int
    country_code: String
    country_name: String
    latitude: Float
    longitude: Float
    wikiDataId: String
  }

  type CountryResponse {
    countries: [Country!]
  }

  type StateResponse {
    states: [State!]
  }
  
  type CityResponse {
    cities: [City!]
  }

  union CountryResult = CountryResponse | NotFoundError
  union StateResult = StateResponse | NotFoundError
  union CityResult = CityResponse | NotFoundError
`;

export default locationTypeDefs;
