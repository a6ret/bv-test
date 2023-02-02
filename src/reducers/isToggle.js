export default function toggleReducer(state = true, action) {
    switch (action.type) {
        case 'CLICKED':
            return !state;
        default:
            return state;
    }
}
