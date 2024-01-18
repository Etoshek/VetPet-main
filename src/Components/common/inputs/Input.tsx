import { TextField, TextFieldProps } from '@mui/material';
// import styled from 'styled-components';

type InputType = TextFieldProps & {};

export const Input = (props: InputType) => {
	return <TextField {...props} type='text' variant='outlined' />;
}