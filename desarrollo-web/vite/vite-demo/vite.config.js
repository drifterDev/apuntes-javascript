import { defineConfig, loadEnv  } from "vite"

export default defineConfig(({ command, mode }) => {
  let port = 3000

  // Tienen que ser así VITE_nombre
  const env = loadEnv(mode, process.cwd())
  console.log(env)

  console.log(command, mode)
  if (mode === 'development') {
    port = 8080
    console.log('Estoy en modo DEV')
  } else {
    console.log('Estoy en modo BUILD')
  }

  return {
    server: {
      port
    }
  }
})