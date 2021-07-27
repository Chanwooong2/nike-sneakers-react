import React from 'react';
import styles from './sneakers.module.css';

const Sneakers = ({ sneakers }) => {

	const openDrawPage =(url)=>{
		window.open(url);
	}

	return (
		<div className={styles.card}>	
			<div className={styles.releaseDate}>{sneakers.drawDate}<span>{sneakers.drawDay}</span></div>	
			<div className={styles.theme}>{sneakers.theme}</div>	
			<div className={styles.img}>
				<img src={sneakers.imgUrl} alt={sneakers.theme + " loading..."} onClick={()=>{openDrawPage(sneakers.drawPageUrl)}} loading="lazy"/>
			</div>
			<div className={`${styles.title} ${styles.ellipsis}`}>{sneakers.title}</div>
			<div className={styles.detailTime}>{sneakers.dateInfo[0]}<br/>{sneakers.dateInfo[1]}</div>	
			<button className={styles.button} onClick={()=>{openDrawPage(sneakers.drawPageUrl)}} title="Go! ✨Nike✨"></button>
		</div>
	);


};

export default Sneakers;