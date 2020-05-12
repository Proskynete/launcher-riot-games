const remote = require('electron').remote;

const win = remote.getCurrentWindow();

window.addEventListener('DOMContentLoaded', () => {
	handleControlsFunctionality();
});

const handleControlsFunctionality = () => {
	document.onreadystatechange = (_) => {
		if (document.readyState === 'complete') {
			handleWindowControls();
		}
	};

	window.onbeforeunload = (_) => {
		win.removeAllListeners();
	};

	const toggleMaxRestoreButtons = () => {
		if (win.isMaximized()) {
			document.body.classList.add('maximized');
		} else {
			document.body.classList.remove('maximized');
		}
	};

	const handleWindowControls = () => {
		document.querySelector('#minButton').addEventListener('click', (_) => {
			win.minimize();
		});

		document.querySelector('#closeButton').addEventListener('click', (_) => {
			win.close();
		});

		toggleMaxRestoreButtons();
		win.on('maximize', toggleMaxRestoreButtons);
		win.on('unmaximize', toggleMaxRestoreButtons);
	};
};
