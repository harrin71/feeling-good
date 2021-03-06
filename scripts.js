const hideElement = (elementId) => {
    const x = document.getElementById(elementId);
    x.style.display = "none";
}

const showElement = (elementId) => {
    const x = document.getElementById(elementId);
    x.style.display = "block";
}

const showFitlineInfo = () => {
    showElement('additionalFitlineInfo');
    showElement('additionalFitlineImages');
    hideElement('showFitlineInfoLink');
}

const hideFitlineInfo = () => {
    showElement('showFitlineInfoLink');
    hideElement('additionalFitlineInfo');
    hideElement('additionalFitlineImages');
}
