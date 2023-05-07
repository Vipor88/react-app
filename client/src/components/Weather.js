// import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
// import { format } from 'date-fns'



const Weather = () =>{

// const data = useSelector((state) => state.weather);

    return(

        <CardContent>
            
            </CardContent>  

    )
}

        const mapStateToProps = (state)=>{
            return{
                weather: state.weather
            }
        }
export default connect(mapStateToProps,null)(Weather);


