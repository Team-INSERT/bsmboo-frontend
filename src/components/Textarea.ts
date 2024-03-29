import styled from 'styled-components'

export const Textarea = styled.textarea`
	outline: none;
	resize: none;
	border: 2px solid #30363d;
	border-radius: 6px;
	background-color: #0d1117;
	color: #e5edf5;
	width: 65vw;
	height: ${({ rows, theme }) => +theme.listSize * (rows || 1) + 4}px;
	padding: 15px;
	font-size: 14px;
	min-height: 160px;
	max-height: 600px;
`
