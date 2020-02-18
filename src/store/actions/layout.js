import * as types from '../mutationTypes';

const layout = {
    toggleMenuStatus(context) {
        context.commit(types['MENU_TOGGLE_STATUS']);
    },
}

export default layout;