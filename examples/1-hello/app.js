const result = document.querySelector(".result");

const fetchData = async () => {
  try {
    const { data } = await axios.get("/.netlify/functions/1-hello");
    result.innerText = data;
  } catch (error) {
    console.log(error.response);
    result.innerText = error.response.data;
  }
};
fetchData();
