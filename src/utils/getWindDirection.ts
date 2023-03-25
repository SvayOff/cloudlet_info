export const getWindDirection = (degree: number | null, lang: string) => {
  if (degree === null) {
    return '';
  }
  if ((degree >= 0 && degree <= 23) || (degree >= 337 && degree <= 360)) {
    return lang === 'en' ? 'North' : 'Пiвнiчний';
  }
  if (degree >= 24 && degree <= 68) {
    return lang === 'en' ? 'Northeast' : 'Пн - Східний';
  }
  if (degree >= 69 && degree <= 113) {
    return lang === 'en' ? 'East' : 'Східний';
  }
  if (degree >= 114 && degree <= 158) {
    return lang === 'en' ? 'Southeast' : 'Пд - Схiдний';
  }
  if (degree >= 159 && degree <= 203) {
    return lang === 'en' ? 'South' : 'Південний';
  }
  if (degree >= 204 && degree <= 248) {
    return lang === 'en' ? 'Southwest' : 'Пд - Західний';
  }
  if (degree >= 249 && degree <= 293) {
    return lang === 'en' ? 'West' : 'Західний';
  }
  if (degree >= 294 && degree <= 336) {
    return lang === 'en' ? 'Northwest' : 'Пн - Західний';
  }
};
