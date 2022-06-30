// scrollTo.js

import { animateScroll } from "./animateScroll";

const logError = () =>
    console.error(
        `Invalid element, are you sure you've provided element id or react ref?`
    );

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 2000 }) => {
    // the position of the scroll bar before the user clicks the button
    const initialPosition = window.scrollY;

    // if the reference is id
    if (id) {
        const element = document.getElementById(id);

        if (!element) {
            // log error if the reference passed is invalid
            logError();
            return;
        }

        animateScroll({
            // target position is the elements offsetTop
            targetPosition: getElementPosition(element),
            initialPosition,
            duration
        });
    }
};
