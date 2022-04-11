import fetch from "node-fetch"

const baseUrl = "https://animeyabu.com/"

/**
 * Faz uma requisição ao animeyabu.com
 * @param {string} path
 * @param {boolean} api Se a requisição deve ser feita a API do site
 * @returns {Promise<string | null>}
 */
export default async function request(path = "", api) {
    const url = `${baseUrl}${api ? "api/" : ""}${path}`;
    try {
        const responseStatus = await fetch(url);
        if (responseStatus.redirected) {
           return null;
        }
        const responseData = await (api ? response.json() : response.text)
        return responseData
    } catch(err) {
        console.log(`Algo deu errado ao fazer a requisição: ${err} ${err.stack}`);
        return null;
    }
}