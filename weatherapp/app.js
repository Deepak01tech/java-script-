let api =
  "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=951ac41ed578215078a02d02a0e575ed";

  async function getData(){
    try {
      const response = await fetch(api);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  }
  getData();