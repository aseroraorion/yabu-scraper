/**
 * Extraí o nome da série e o número de um título de episódio
 * @param {string} fullTitle 
 * @returns { {animeTitle?: string, episodeNumber?: string} }
 */
export default function getTitleInformation(fullTitle) {
    const [animeTitle, episodeNumber] = fullTitle.includes("&#8211;")
      ? fullTitle.split("&#8211;")
      : fullTitle.split("–");
    return episodeNumber
      ? {
          animeTitle: animeTitle.trim(),
          episodeNumber: /\d+/.exec(episodeNumber)[0],
        }
      : {};
  }
