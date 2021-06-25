import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
 
    },
    '& .Mui-disabled': {
      background: '#e4d901',
      opacity: '.7'
    }
  },
  disabled: {}
}))

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#8bae63',
      opacity: '.8'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8bae63',
      opacity: '.8'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#222',
        opacity: '.8'
      },
      '&:hover fieldset': {
        borderColor: '#e4d901',
        opacity: '.8'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8bae63'
      }
    }
  }
})(TextField)

export const FormContactWrapper = styled.div`
  width: 60%;
  height: auto;
  margin: 1rem 0 1rem 0;
  display: flex;
  justify-content: center;
  background-color: var(--white);
`
export const Form = styled.form`
  display: block;
  margin: 0 auto;
`
export const InputWrapper = styled.div`
  margin: .5rem 0 .5rem 0;
  font-size: 4rem;
  .field {
    width: 35rem;
  }
`
export const Label = styled.label``
export const Input = styled.input``

export const CSSButton = withStyles({
  disabled: {
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: 'black'
    }
  }
})(Button)
