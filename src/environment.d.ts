declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_BASE_URL: string
      SALAM: string
    }
  }
}

// export is needed so that it is treated as module and takes effect
export {}
