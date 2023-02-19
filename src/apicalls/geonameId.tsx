
const grabGeonameId = (url: string) => {
  return fetch(url)
      .then(response => response.json())

}
export default grabGeonameId; 