import React from "react"
import Footer from "./Footer"
import UserData from "../TestRequests/user.json"

function UserHome() {
    return(
        <div className="user-home">
            <header>
                <h2 className="welcome">Welcome {UserData.firstName} {UserData.lastName}</h2>
            </header>
            <button className="search-derm" type="button">Search Nearest Dermatologists</button>
            <Footer />
        </div>
    )
}

export default UserHome