import fetch from "node-fetch"

const baseUrl = "https://animeyabu.com/"

/**
 * Faz uma requisição ao animeyabu.com
 * @param {string} path
 * @returns {Promise<string | null>}
 */
export default async function request(path = "") {
    const requestUrl = baseUrl + path
    const response = await fetch(requestUrl)
    return response.url !== requestUrl ? null : response.text()
}