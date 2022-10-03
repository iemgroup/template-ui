import type { ButtonHTMLAttributes } from "react"

import { gql } from "@apollo/client"
import type { Meta, Story } from "@storybook/react"

import { Button as ButtonComponent } from "./assets"
import { ButtonType, Variants } from "./assets/Button.propsTypes"

export default {
  title: "Button",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>

const Template: Story<ButtonType> = ({ variant, ...args }) => (
  <ButtonComponent variant={variant} {...args}>
    Example button
  </ButtonComponent>
)

export const Button = Template.bind({})

Button.argTypes = {
  variant: {
    options: Object.values(Variants),
    control: { type: "select" },
  },
}

Button.args = {
  variant: Variants.default,
}

Button.parameters = {
  controls: { hideNoControlsWarning: true },
  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: [
      {
        request: {
          query: gql`
            query i18n {
              i18n {
                _id
                key
                languages
                documents {
                  _id
                  translations
                  lang
                  createdAt
                }
                createdAt
              }
            }
          `,
        },
        result: {
          data: {
            viewer: null,
          },
        },
      },
    ],
  },
}
