function Legend() {
  return(
    <>
      <div>
        <h2>Emociones:</h2>
        <ul>
          <li>joy: alegria</li>
          <li>fear: miedo</li>
          <li>sadness: tristeza</li>
          <li>surprise: sorpresa</li>
          <li>disgust: disgusto</li>
          <li>anger: enojo</li>
          <li>others: otros</li>
        </ul>
      </div>
      <div>
        <h2>Sentimientos:</h2>
        <ul>
          <li>POS: positivo</li>
          <li>NEG: negativo</li>
          <li>NEU: neutral</li>
        </ul>
      </div>
      <div>
        <p>*Cuando aparece la etiqueta de "error", se debe a que hubo un problema al momento de procesar el texto (es posible reprocesar para que sean corregidos los casos fallidos).</p>
      </div>
    </>
  )
}

export default Legend