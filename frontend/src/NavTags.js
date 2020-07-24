import React from "react"
import {Link} from "react-router-dom"


function HeaderNav() {
    return (
        <div>
            <nav>
              <ul>
                <li><Link to= "">Stuff</Link></li>
                <li><Link to= "">Stuff 2</Link></li>
              </ul>
            </nav>
        </div>
      )
}

export default HeaderNav