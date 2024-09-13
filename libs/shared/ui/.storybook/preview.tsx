import '@tamagui/core/reset.css'

// import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsContainer, DocsContainerProps } from '@storybook/blocks'

import { ThemeProvider as TamaguiProvider } from '../src/index'
import React from 'react'

import { viewports as breakpoints } from './viewports'

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce(
  (breakpoint, key) => {
    breakpoint[`breakpoint${key}`] = {
      name: `Breakpoint - ${key}`,
      styles: {
        width: `${breakpoints[key as keyof typeof breakpoints]}px`,
        // Account for padding and border around viewport preview
        height: 'calc(100% - 20px)'
      },
      type: 'other'
    }
    return breakpoint
  },
  {} as typeof INITIAL_VIEWPORTS
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    toc: true,
    source: {
      excludeDecorators: true
    },
    container: (props: DocsContainerProps) => (
      <TamaguiProvider>
        <DocsContainer {...props} />
      </TamaguiProvider>
    )
  },
  controls: {
    // expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS
    }
  },
  chromatic: { disableSnapshot: true }
}
