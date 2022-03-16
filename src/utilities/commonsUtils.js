import Home from "../portfolioContainer/Home/Home";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    }
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) {
        return -1;
    }
    for (let index = 0; index < TOTAL_SCREENS.length; index++) {

        if (TOTAL_SCREENS[index].screen_name === screen_name) {
            return index;

        }
        return -1;

    }
};