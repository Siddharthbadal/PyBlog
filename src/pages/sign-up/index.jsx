import { useSignUp } from "./useSignUp"

const SignUp = () => {
  const {
        userDataLoading,
        disabled,
        successMessage,
        onSubmitHandler,
        inputEmailHandler
  } = useSignUp()

  
  return (
    <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 text-center m-auto mt-5">
    <form 
      onSubmit={onSubmitHandler}
      className="card"
    >
      <div className="card-header mb-2">
          <h1>Sign Up</h1>
      </div>

      <div className="card-body">

        <div className="mb-3">
          {/* <label htmlFor="email" className="form-label fw-bold">Email</label>   */}
          {successMessage && (
              <div className="alert alert-warning fw-bold" role="alert">
                {successMessage}
              </div>
              )}
            <input 
              type="text" 
              autoComplete="off" 
              onChange={inputEmailHandler}  
              placeholder="Your Email.."
              className="form-control mb-2"        
              />
          </div>
          
          <div className="text-center">
            <button disabled={disabled || userDataLoading}
              className="btn btn-primary text-white fw-bolder"
              >
                {userDataLoading && (<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              )}
                SignUp
            </button>
          </div>

        </div>
      
    </form>

    </div>
  )
}

export default SignUp