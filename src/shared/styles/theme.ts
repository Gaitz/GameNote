import { extendTheme } from "@chakra-ui/react"

export const collection = {
  color: {
    primary: "purple.500",
    secondary: "purple.400"
  }
}

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: "100%"
      },
      body: {
        minHeight: "auto"
      }
    }
  },
  components: {
    Spinner: {
      baseStyle: {
        color: collection.color.primary
      }
    },
    Heading: {
      baseStyle: {
        color: collection.color.primary
      }
    },
    Text: {
      variants: {
        heading: {
          color: collection.color.secondary
        }
      }
    },
    Button: {
      defaultProps: {
        colorScheme: "twitter"
      }
    },
    Menu: {
      parts: ["item", "command", "list", "button", "groupTitle", "divider"],
      baseStyle: {
        groupTitle: {
          textAlign: "center",
          mb: "2"
        },
        item: {
          justifyContent: "center"
        }
      }
    }
  }
})

export default theme
