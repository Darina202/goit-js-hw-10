export function createCatList(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

export function createCatCard(arr) {
  return arr
    .map(({ url, breeds }) => {
      const { name, description, temperament } = breeds[0];
      return `<img src="${url}" alt="${name}" width="400px" class="cat-image"/> 
      <div class="cat-view">
      <h2 class="cat-name">${name}</h2>
      <p class="cat-desc">${description}</p>
      <p class="cat-temp"><span class="temp-span">Temperament:</span> ${temperament}</p>
      </div>`;
    })
    .join('');
}
