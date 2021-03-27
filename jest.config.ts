import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    "game-note/(.*)": "<rootDir>/src/$1"
  }
}

export default config
