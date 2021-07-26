import React from 'react';
import Sneakers from '../sneakers/sneakers';
import styles from './sneakersList.module.css';

const SneakersList = ({ sneakersList }) => {
		return <div className={styles.cardList}>
				{
					sneakersList.map(ele => {
						return <Sneakers 
									key={Date.now()+ele.theme}
									sneakers={ele}/>
					})
				}
			</div>;
};

export default SneakersList;