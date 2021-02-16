import React from 'react';
class Title extends  React.Component{

    render(){
        return(
<div>
    <h1 className="title-container__title">
        Weather App
        </h1>
        <h3 className="title-container__subtitle">Find out weather condition <br/> and more.</h3>
    
</div>
        );
    }
}

export default Title