
import { AuthContext } from '../context-api/AuthContext';
import { useContext, useState } from 'react';


const Passcode = (props) => {



    const authContext = useContext(AuthContext);
    const [passcodeInput, setPasscodeInput] = useState(null);

    //defining onChangeHandler
    const onChangeHandler = e => {

        e.preventDefault();

        setPasscodeInput({value: e.target.value});
        console.log(passcodeInput);

    }


    //defining onSubmitHandler
    const onSubmitHandler = (e) => {
        e.preventDefault();

        authContext.setPasscode(passcodeInput.value);
        // authContext.injectPasscodeToRequest(passcodeInput);

        // console.log(`hello`);
        // console.log(authContext.passcode);
    }


    return (
        <form onSubmit={onSubmitHandler} className="landing-form">
            <input required onChange={onChangeHandler} style={{ width: "40vw" }} className="binary-input" type="text" placeholder="Type Passcode and Hit Enter" />
        </form>
    )
}


export default Passcode;