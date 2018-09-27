const ACTION_HANDLERS = {
    SEARCH_CITY: cities => ({ ...cities, isFetching: true }),
    RECEIVE_SEARCH_CITY: (cities, action) => ({
        isFetching: false,
        items: action.data._embedded['city:search-results'].map(item => (
            {
                name: item.matching_full_name,
                geoname: item._links['city:item'].href.match(/[0-9]+/)[0],
                isFull: false
            })),
        count: action.data.count
    }),
    LOAD_CITY_INFO: cities => ({ ...cities, isFetching: true }),
    RECEIVE_CITY_INFO: (cities, action) => ({
        ...cities,
        isFetching: false,
        items: cities.items.map((item) => {
            if (item.geoname === action.geonameid) {
                return {
                    ...item,
                    isFull: true,
                    shortName: action.data.name,
                    population: action.data.population,
                    location: action.data.location,
                    country: action.data._links['city:country'].name
                };
            }

            return item;
        })
    }),
    ERROR_SEARCH_CITY: (cities, action) => ({ ...cities, errorSearch: action.error })
};

export default (items = {
    isFetching: false
}, action) => {
    if (action.type) {
        return ACTION_HANDLERS[action.type]
            ? ACTION_HANDLERS[action.type](items, action)
            : items;
    }

    return items;
};
