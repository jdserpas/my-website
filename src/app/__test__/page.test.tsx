import Home from "../page"
import {render} from '@testing-library/react'

describe('Home Page', ()=> {
  it('renders', ()=> {
    render(<Home/>)
  })
})