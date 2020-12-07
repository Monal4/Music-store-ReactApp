import React,{FC} from 'react'
import { user } from '../../types/user.types';
import './styles.css'

interface props {
    handleinput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user: user;
}

const LogInSignUp: FC<props> = (props) => {

    const{handleinput, user} = props;

    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>FirstName </label>
                        <input
                            className="form-control"
                            placeholder="Enter Email"
                            type="firstname"
                            name="firstname"
                            value={user.firstname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleinput(e)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>LastName </label>
                        <input
                            className="form-control"
                            placeholder="Enter Last Name"
                            type="lastname"
                            name="lastname"
                            value={user.lastname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleinput(e)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Email </label>
                        <input
                            className="form-control"
                            placeholder="Enter Email"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleinput(e)}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label>Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>

                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>

                    <div className="form-group col-md-2">
                        <label>Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">LogIn/SignUp</button>
            </form>
        </div>
    )
}

export default LogInSignUp;