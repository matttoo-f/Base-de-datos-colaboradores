import { Alert } from "react-bootstrap";

const Alerts = ({ variant, message }) => {
    
    return (
      <Alert key={variant} variant={variant} className="text-center" >
        {message}
      </Alert>
    )
  }
  
  export default Alerts
  