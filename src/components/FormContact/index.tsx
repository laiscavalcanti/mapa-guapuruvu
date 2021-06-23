import { useState } from 'react'

import * as S from './style'
import { useStyles } from './style'

const GETFORM_FORM_ENDPOINT =
  'https://getform.io/f/eb07aa98-68ec-4738-8619-a4f065496426'

function FormContact() {
  const classes = useStyles()

  const [formStatus, setFormStatus] = useState(false) //valor inicial
  const [query, setQuery] = useState({
    name: '',
    email: '',
    file: '',
    message: ''
  })

  const isFormValid = query.name.length === 0 || query.email.length === 0 || query.message.length === 0

  const handleFileChange = () => (e: any) => {
    setQuery((prevState) => ({
      ...prevState,
      files: e.target.files[0]
    }))
  }

  // Update inputs value
  const handleParam = () => (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  // Form Submit function
  const formSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })
    fetch(GETFORM_FORM_ENDPOINT, {
      method: 'POST',
      body: formData
    })
      .then((res) => {
        if (res.ok) {
          setFormStatus(true)
          setQuery({ name: '', email: '', file: '', message: '' })
        } else {
          console.log('Network response was not ok.')
        }
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        )
      })
  }
  return (
    <S.FormContactWrapper className={classes.root}>
      <S.Form onSubmit={formSubmit} encType="multipart/form-data">
        <S.InputWrapper>
          <S.CssTextField
            type="text"
            name="name"
            required
            placeholder="Nome"
            label="Nome"
            variant="outlined"
            className="field"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            value={query.name}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.CssTextField
            type="email"
            name="email"
            required
            placeholder="email"
            label="Email"
            variant="outlined"
            className="field"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            value={query.email}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.CssTextField
            type="text"
            name="message"
            required
            multiline
            rowsMax={10}
            placeholder="mensagem"
            label="mensagem"
            variant="outlined"
            className="field message"
            inputProps={{ style: { fontSize: 15, height: 100 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            value={query.message}
            onChange={handleParam()}
          />
        </S.InputWrapper>
        <S.CSSButton
          style={{
            backgroundColor:'#e4d901',
            borderRadius: 2,
            padding: '5px 5px',
            fontSize: '15px',
            marginLeft: '10px',
            color:'#222',
            textTransform:"lowercase"
          }}
          variant="contained"
          type="submit"
          disabled={isFormValid}
          classes={{  disabled: classes.disabled }}
        >
          enviar
        </S.CSSButton>
      </S.Form>
    </S.FormContactWrapper>
  )
}

export default FormContact
