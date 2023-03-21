import React, { useContext } from 'react'
import storeApi from '../../utils/storeApi'

export default function CreateColumn() {
	const { addMoreList } = useContext(storeApi)
	return (
			<button onClick={addMoreList}>
				Dodaj kolumnę
			</button>
	)
}
