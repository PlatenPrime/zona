
export const getQuant = async (art) => {
	const searchValue = "У наявності";
	const urlCA = 'https://corsproxy.io/?';
	const baseUrl = "https://sharik.ua/ua";
	const apiRequest = `/search/?q=${art}`
	const corsUrl = `${urlCA}${baseUrl}${apiRequest}`;

	try {
		const response = await fetch(corsUrl);
		const responseString = await response.text();
		const index = responseString.indexOf(searchValue);
		const stringOfQuant = responseString.slice(index, index + 50);
		const quants = stringOfQuant.match(/\d+/g);
		const quant = quants ? quants[0] : null;
		return quant;
	} catch (error) {
		console.error(error);
		throw error; // Rethrow the error to let the caller handle it
	}
}
