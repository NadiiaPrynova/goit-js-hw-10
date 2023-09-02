import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

breedSelect.addEventListener('change', onBreedSelect);

loadBreeds();

function onBreedSelect(event) {
  catInfo.innerHTML = '';
  
  loader.classList.remove('hide');
fetchCatByBreed(event.target.value)
  .then(({ data }) => {
      loader.classList.add('hide')
      let { name, description, temperament } = data[0].breeds[0];
      let { url } = data[0];
      catInfo.innerHTML = markupCatCard({
        name,
        description,
        temperament,
        url,
      });
    })
    
    .catch(() =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!',
        {
          position: 'left-top',
        }
      )
    )
  
}

function loadBreeds() {
  loader.classList.remove('hide');

  
  fetchBreeds()
    .then(({ data }) => {
      loader.classList.add('hide')
      breedSelect.classList.remove('hide');
      breedSelect.innerHTML = markupOptions(data);
      new SlimSelect({
        select: breedSelectRef,
        settings: {},
      });
    })
    .catch(() =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!',
        {
          position: 'left-top',
        }
      )
    )
  
}

function markupOptions(data) {
  return data
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join('');
}

function markupCatCard({ name, description, temperament, url }) {
  return `
    <img src=${url} alt="${name}"/>
    <div class ='infobox'>
    <h2>${name}</h2>
    <p>${description}</p>
      <p><span>Temperament:</span> ${temperament}</p>`
}
