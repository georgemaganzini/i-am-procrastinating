// import uuid from 'uuid/v1';


export const logReducer = (state, action) => {
    switch(action.type){
        case 'ADD_INSPIRATION':
            return [...state, {
                category: action.log.category,
                entry: action.log.entry,
                // id: uuid()
            }]
        // case 'REMOVE_INSPIRATION':
        //     return state.filter(log => log.id !== id)
        default:
            return state;
    }
}