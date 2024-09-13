import { render } from '@testing-library/react-native'

import { ToastControl } from './toast-control'

describe('ToastControl', () => {
  it('should render successfully', () => {
    const { root } = render(<ToastControl />)
    expect(root).toBeTruthy()
  })
})
