const activity1 = document.querySelector('.activity');
const type1 = document.querySelector('.type');
const participants1 = document.querySelector('.participants');
const price1 = document.querySelector('.price');
const form = document.querySelector('#form');
const button = document.querySelector('.button');

const getActivity = async(codes) => {
    codes.preventDefault();
    const response = fetch('http://www.boredapi.com/api/activity/')
    const json = await (await response).json();
    const {activity, type, participants, price} = json; 

    activity1.innerHTML = activity;
    type1.innerHTML = type;
    participants1.innerHTML = participants;
    price1.innerHTML = price;
}
form.addEventListener("submit", getActivity);