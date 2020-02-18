import * as types from '../mutationTypes';

const layout = {
    // 导航目录面板状态
    [types.MENU_TOGGLE_STATUS](state) {
        state.layout.menuCollapseStatus = !state.layout.menuCollapseStatus;
    },
};

export default layout;