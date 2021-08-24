const result = document.querySelector(".result");
/**
 * Getting Data From Severless Function and setting to inner text
 */

const fetchData = async () => {
  try {
    const { data } = await axios.get("/.netlify/functions/1-hello");
    result.innerHTML = data;
  } catch (error) {
    console.log(error.response);
    result.innerText = error.response.data;
  }
};
fetchData();
