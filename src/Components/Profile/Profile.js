
import React, { Component } from 'react';

class Profile extends Component {
    state={
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaONwI5bHv0H85WmyPixe6_OjDplsaTJ7Vtg&usqp=CAU",
        fullName:"Link Neal",
        profession:'Entertainer',
        bio:'Good Mythical Morning/summer depending on the season',
        date:0,
        likes: 0,
      }
      componentDidMount(){
        setInterval( () => {
          this.timer= this.setState({date: this.state.date + 1});
        }, 1000);
      }
      componentWillUnmount(){
        clearInterval(this.timer);
      }
      addLikes=()=>{
        this.setState({
          likes: this.state.likes +1
        })
      }
      removeLikes=()=>{
        this.state.likes>0?
        this.setState({
          likes: this.state.likes  
        }): alert("cannot dislike")
      }
     
    render() { 
        return ( 
          <div className="pro" style={{textAlign:"center"}}>
            <img src={this.state.imgSrc} alt="profile"/>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <p>{this.state.bio}</p>
            <button onClick={this.addLikes}>
            like
            </button>
            {this.state.likes}
            <button onClick={this.removeLikes}>
              dislike
            </button>
            <p>{this.state.date}</p>
        </div>

         );
    }
}
 
export default Profile;