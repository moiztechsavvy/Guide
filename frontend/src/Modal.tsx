import React from 'react';
import './Modal.css';

function _Modal(){
      
        return (
        
                <form>
                    <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

        )
      };
export default _Modal;