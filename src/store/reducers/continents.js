const ACTION_HANDLERS = {
    LOAD_CONTINENTS: continents => ({ ...continents, isFetching: true }),
    RECEIVE_CONTINENTS: (continents, action) => ({
        isFetching: false,
        items: action.data._links['continent:items'],
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
