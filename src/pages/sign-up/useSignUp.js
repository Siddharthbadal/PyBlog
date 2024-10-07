import { useCallback, useState } from "react"


export function useSignUp(){
    const [email, setEmail] = useState();
    const [userDataLoading, setUserDataLoading] =useState(false);
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [emailFormatError, setEmailFormatError] = useState([]);

    const inputEmailHandler = (event)=>{
        setEmail(event.target.value)
        setEmailFormatError({});
      }

    const onSubmitHandler = useCallback(async (event)=>{
        event.preventDefault();
        setSuccessMessage();
        setErrorMessage();

        // this will check format error before sending request
        const form = event.target
        if(!form.checkValidity()){
          setEmailFormatError({email: "Invalid Error Format!"})
          return;
        }

        setUserDataLoading(true);
        try{

          const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({email})
          });
          const body = await response.json();
          if(response.ok){
            setSuccessMessage(body.message)
          } else if(response.status === 400){
            setEmailFormatError(body.validationErrors)
          }
        } catch{  
            setErrorMessage('Unexpected error, try again later!')

        } finally{
          setUserDataLoading(false)
        }
      }, [email]);

    return {
        userDataLoading,
        disabled: !email,
        successMessage,
        errorMessage,
        emailFormatError,
        onSubmitHandler,
        inputEmailHandler
    }
}