import FooterButton from '../basic/FooterButton'
import HeaderSelector from '../basic/HeaderSelector'
const ContainerThreeRows = ({children})=>{
  return<>
    <HeaderSelector />
    {children} 
    <FooterButton/>
  </>
}

export default ContainerThreeRows