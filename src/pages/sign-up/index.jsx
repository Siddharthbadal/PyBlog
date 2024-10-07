import  {Alert}  from "../../components"
import  {AppButton}  from "../../components"
import  {AppInput}  from "../../components"
import { useSignUp } from "./useSignUp"

const SignUp = () => {
  const {
        userDataLoading,
        disabled,
        successMessage,
        errorMessage,
        emailFormatError,
        onSubmitHandler,
        inputEmailHandler
  } = useSignUp()

  
  return (
    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 text-center m-auto mt-5">
    <form 
      onSubmit={onSubmitHandler}
      className="card"
      noValidate
    >
      <div className="card-header mb-2">
          <h1>Sign Up</h1>
      </div>

      <div className="card-body">

          <Alert>
            {successMessage}
          </Alert>

          <Alert variant="warning">
            {errorMessage}
          </Alert>

          <AppInput
            id='email'
            label='Email'
            type='email'
            onChange={inputEmailHandler}
            emailError={emailFormatError.email}
          />
          
          
          <div className="text-center">
            <AppButton disabled={disabled}
              loading={userDataLoading}
            >
                SignUp
            </AppButton>
          </div>

        </div>
      
    </form>

    </div>
  )
}

export default SignUp