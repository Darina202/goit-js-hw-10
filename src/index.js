import { TheCatAPI } from '@thatapicompany/thecatapi';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createCatList, createCatCard } from './js/markup';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  loadingMessage: document.querySelector('.loader'),
  errorMessage: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
refs.errorMessage.hidden = true;
refs.breedSelect.style.display = 'none';

fetchBreeds()
  .then(data => {
    refs.loadingMessage.style.display = 'block';
    refs.breedSelect.innerHTML = createCatList(data);
    refs.breedSelect.style.display = 'block';
  })
  .catch(err => {
    Notify.failure(`${refs.errorMessage.textContent}`);
    // console.log(err);
    // refs.errorMessage.hidden = false;
  })
  .finally(() => {
    refs.loadingMessage.style.display = 'none';
  });

refs.breedSelect.addEventListener('change', handleChange);

function handleChange(event) {
  const selectedOptionValue = event.currentTarget.value;
  refs.loadingMessage.style.display = 'block';
  refs.catInfo.style.display = 'none';
  fetchCatByBreed(selectedOptionValue)
    .then(data => {
      refs.catInfo.innerHTML = createCatCard(data);
    })
    .catch(err => {
      Notify.failure(`${refs.errorMessage.textContent}`);
      // console.log(err);
      // refs.errorMessage.hidden = false;
    })
    .finally(() => {
      refs.loadingMessage.style.display = 'none';
      refs.catInfo.style.display = 'flex';
    });
}
