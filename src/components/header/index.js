import React from 'react';
import './index.css';

const HeaderComponent = () => {
	return (
		<section className="header">
			<div className="header__controls">
				<div className="header__controls__inner">
					<div className="button button--min" id="minButton">
						<i className="far fa-window-minimize" />
					</div>
					<div id="closeButton" className="button button--close">
						<i className="fas fa-times" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderComponent;
