import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b60a2066183b09fcc2a32585f5363a42";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
    // icon: undefined
  };

  convertToCelsius = (temperature) => {
    let cel = Math.floor(temperature - 273.15);
    return cel
  };


  getWeather = async e => {
    //this prevent our app from loading the whole page again
    e.preventDefault();
    //these are to get a target city and country
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
    //here we have our api call
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      
    
      this.setState({
       temperature: this.convertToCelsius(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        // icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        // icon: undefined,
        error: "Please fill the boxes"
      });
    }
  }
  render() {
    return (
      
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">


                        <div className="col-xs-5 title-container">
                          <Title />
                        </div>


                          <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather} />
                            <Weather
                              temperature={this.state.temperature}
                              city={this.state.city}
                              country={this.state.country}
                              humidity={this.state.humidity}
                              description={this.state.description}
                              error={this.state.error} />
                          </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      

    );
  
  
  
}
}
export default App;
