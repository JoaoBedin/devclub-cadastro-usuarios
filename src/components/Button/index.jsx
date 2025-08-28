import { Children } from 'react'
import{Button} from './styles.js' 



function DefaultButton({ children,theme, ...props}) {
  //spread operator -> Todo o resto
  console.log(props)
  return <Button {...props} theme={theme}>{children}</Button>
}


export default DefaultButton