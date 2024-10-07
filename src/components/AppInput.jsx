import { Alert } from "./Alert";

export const AppInput = ( props ) => {
    const {id, label, onChange, type, emailError } = props;
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label fw-bold">{label}</label>  
        <input 
              id={id}
              type={type} 
              autoComplete="off" 
              onChange={onChange}  
              placeholder="Your Email.."
              className="form-control mb-2"        
              />
            
              <Alert variant='secondary'>
              {emailError}
              </Alert>
              
    </div>
  )
}
