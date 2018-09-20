const ACTION_HANDLERS = {
    SEARCH_CITY: cities => ({ ...cities, isFetching: true }),
    RECEIVE_SEARCH_CITY: (cities, action) => ({
        isFetching: false,
        items: action.data._embedded['city:search-results'].map(item => (
            {
                name: item.matching_full_name,
                href: item._links['city:item'].href
            })),
        count: action.data.count
    })
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
