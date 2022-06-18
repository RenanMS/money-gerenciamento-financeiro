import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #e52e4d;
    --blue: #5429CC;
    --green: #33cc95;
    
    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --shape: #FFFFFF;
    --white: #FFFFFF;
  }

  html {
    // font-size padrão para desktop é 16px
    // 1 REM = 16px;

    @media (max-width: 992px) {
      // 16x0.9375 = 15px
      // 1 REM = 15px;
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      // 16x0.875 = 14px
      // 1 REM = 14px;
      font-size: 87.5%;
    }

    /**
    * Todas as medidas do sistema será em REM.
    * REM usa o tamanho da font-size como base.
    * 
    *
    * Configurando medidas adequadas para telas desktop, tablet e smartfone
    * garantimos que todos os elementos que recebe algum tipo
    * de medida em REM seja redimencionado na mesma proporção.
    */
  }

  body {
    background: var(--background);
    -webkit-font-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`