import { Component } from "react"
// import check from "/images/check.png"
class Success extends Component{
    render(){
        return(
        <div className="container">
                <h3 className="center">Your Order has been placed</h3>
                <div className="box">
                    <div className="item-img"> 
                        <img src="/images/check.jpg" alt="" className=""/>
                    </div>
                </div>
            </div>
        )

    }

}

export default Success

