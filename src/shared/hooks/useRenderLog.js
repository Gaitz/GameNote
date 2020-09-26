import React from "react"

export function useRenderLog(componentName) {
  React.useEffect(() => {
    console.log(`${componentName} render`)
    return () => {
      console.log(`${componentName} render cleanup`)
    }
  })
}
