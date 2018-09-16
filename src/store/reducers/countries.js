const ACTION_HANDLERS = {
    LOAD_COUNTRIES: countries => ({ ...countries, isFetching: true }),
    RECEIVE_COUNTRIES: (countries, action) => ({
        isFetching: false,
        items: action.data._links['country:items'],
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
