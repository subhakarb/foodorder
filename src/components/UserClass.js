import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default"
            }
        };
    }
    async componentDidMount() {
        const userApi = await fetch("https://api.github.com/users/subhakarb");
        const userInfoJson =await userApi.json();
        this.setState ({
            userInfo: userInfoJson,
        })
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user_card">
                <img className="circle_element" src={avatar_url} />
                <h2>Name: {name}</h2>
                <p>Location: {location }</p>  
            </div>
        )
    }
}

export default UserClass;