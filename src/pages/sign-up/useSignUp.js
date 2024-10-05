import { useCallback, useState } from "react"


export function useSignUp(){
    const [email, setEmail] = useState()
    const [userDataLoading, setUserDataLoading] =useState(false)
    const [successMessage, setSuccessMessage] = useState()

    const inputEmailHandler = (event)=>{
        setEmail(event.target.value)
      }

    const onSubmitHandler = useCallback(async (event)=>{
        event.preventDefault();
        setUserDataLoading(true);
        setSuccessMessage();
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({email})
        });
        const body = await response.json()
        setSuccessMessage(body.message)
        setUserDataLoading(false)
      }, [email])

    return {
        userDataLoading,
        disabled: !email,
        successMessage,
        onSubmitHandler,
        inputEmailHandler
    }
}