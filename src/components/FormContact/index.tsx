import { useState } from 'react'

const GETFORM_FORM_ENDPOINT = 'https://getform.io/f/eb07aa98-68ec-4738-8619-a4f065496426'

function FormContact() {
  const [formStatus, setFormStatus] = useState(false)
  const [query, setQuery] = useState({
    name: '',
    email: '',
    file: '',
    message: ''
  })

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
    <div className="App">

      <form onSubmit={formSubmit} encType="multipart/form-data">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
      
        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Message"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormContact
