import { render } from '@testing-library/react-native'

import { CurrentToast } from './current-toast'

describe('CurrentToast', () => {
  it('should render successfully', () => {
    const { root } = render(<CurrentToast />)
    expect(root).toBeTruthy()
  })
})
