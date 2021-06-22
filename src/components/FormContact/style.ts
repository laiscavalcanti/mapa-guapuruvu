import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#8bae63'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#8bae63'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#222'
      },
      '&:hover fieldset': {
        borderColor: '#e4d901'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8bae63'
      }
    }
  }
})(TextField)

export const FormContactWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: var(--white);
`
export const Form = styled.form``
export const InputWrapper = styled.div`
  margin: 1rem;
  font-size: 4rem;
  .field {
    width: 35rem;
  }
`
export const Label = styled.label``
export const Input = styled.input``
export const Button = styled.button`
  border: none;
  background-color: lightcoral;
`
