import { Item } from './gilded-rose';

//Despues de que empece a escribir documentacion me di cuenta de que piden codigo autodocumentado, espero y esto le sirva, me estoy esforzando mucho para formar parte de su gran equipo, vean mi potencial, oseaa programo como la hostia y estoy re motivado por entrar a ese incrieble empresa de ustedes, voy a estar con ustedes cuando estemos en todo el mundo, que mas piden, volar? jaja aun no puedo, quizas en unos años, cuando ustedes me enseñen XD jejjee
/* Mood Serio, ahora codigo */
const qualityMax: number = 50;
const qualityMin: number = 0;
const qualityLegendary: number = 80;

export const updateItemDefault = (item: Item) => {
  item.quality =
    item.sellIn < 1
      ? Math.max(qualityMin, item.quality - 2)
      : Math.max(qualityMin, item.quality - 1);
  item.sellIn -= 1;
  if (item.quality > 50) {
    item.quality = qualityMax;
  }
  return item;
};
export const updateAgedBrie = (item: Item) => {
  item.quality =
    item.sellIn < 0
      ? Math.min(qualityMax, item.quality + 2)
      : Math.min(qualityMax, item.quality + 1);
  item.sellIn -= 1;

  return item;
};
export const updateBackstagePasses = (item: Item) => {
  if (item.sellIn > 10) {
    item.quality = Math.min(qualityMax, item.quality + 1);
  } else if (item.sellIn <= 10) {
    item.quality = Math.min(qualityMax, item.quality + 2);
  } else if (item.sellIn <= 5) {
    item.quality = Math.min(qualityMax, item.quality + 3);
  } else if (item.sellIn < 0) {
    item.quality = 0;
  }
  item.sellIn -= 1;
  return item;
};
export const updateSulfuras = (item: Item) => {
  item.quality != qualityLegendary
    ? (item.quality = qualityLegendary)
    : item.quality;

  return item;
};
export const updateConjured = (item: Item) => {
  item.quality =
    item.sellIn < 1
      ? Math.max(qualityMin, item.quality - 4)
      : Math.max(qualityMin, item.quality - 2);
  item.sellIn -= 1;

  return item;
};
