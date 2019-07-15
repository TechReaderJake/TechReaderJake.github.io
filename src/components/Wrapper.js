import styled from 'styled-components'
import { colors } from '../tokens'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 5px;
  width: 80%;
  max-width: 1140px;
  word-wrap: break-word;
  background-color: ${colors.backgroundArticle};
  margin: 0px auto 30px auto;
  top: 30px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.2);

  @media (max-width: 767px) {
    width: 90%;
    padding: 20px;
    //margin-bottom: 60px;
  }
  @media (max-width: 525px) {
    width: 95%;
    padding: 15px;
    //margin-bottom: 60px;
  }
`

export default Wrapper
