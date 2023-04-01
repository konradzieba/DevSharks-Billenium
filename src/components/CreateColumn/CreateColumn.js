import React, { useContext } from 'react';
import storeApi from '../../utils/storeApi';
import { useTranslation } from 'react-i18next';

export default function CreateColumn() {
	const { t } = useTranslation();
	const { addMoreList } = useContext(storeApi);
	return <button onClick={addMoreList}>{t('addColumn')}</button>;
}
