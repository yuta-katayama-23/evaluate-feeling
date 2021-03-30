// for using async/await in babel
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// js module
import { selectFeeling } from './module/select-feeling'
import { removeIcon } from './module/remove-icon'

/**
 * i am module and i judge feeling from input text
 */
export async function sentimentAnalysis(event) {
    event.preventDefault();

    const data = await fetchData('/fetchMeaningCloud', { txt: txtEl.value });
    renderResult(data.score_tag);
}

// Element
const txtEl = document.querySelector('#txt');
const cardBodyEl = document.querySelector('.card-body');

const fetchData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const fetchData = await response.json();
        return fetchData;
    } catch (error) {
        console.log("error", error);
    }
}

/**
 * i render result
 * @param {string} scoreTag 
 */
function renderResult(scoreTag) {
    const resultsEl = document.createElement('div');
    resultsEl.innerHTML = `now your feeling is <strong>${selectFeeling(scoreTag)['value']}</strong>`;
    cardBodyEl.append(resultsEl);

    removeIcon();
    let img = document.createElement('img');
    img.classList.add('icon-examples');
    img.src = selectFeeling(scoreTag)['icon'];
    document.getElementById('icon').appendChild(img);
}