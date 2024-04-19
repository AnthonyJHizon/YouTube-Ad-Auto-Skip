const AD_PLAYERS = ['.ytp-ad-player-overlay', '.ytp-ad-module'];
const SKIP_BUTTONS = ['.ytp-ad-skip-button-modern', '.ytp-skip-ad-button'];

//skips ad by "clicking" the skip button
const clickSkipButton = (adElement) => {
	for (let i = 0; i < SKIP_BUTTONS.length; i++) {
		const skipButton = adElement.querySelector(SKIP_BUTTONS[i]);
		if (skipButton) {
			skipButton.click();
			return;
		}
	}
};

//detects if a video ad is present and tries to skip if button is available
const getAd = () => {
	for (let i = 0; i < AD_PLAYERS.length; i++) {
		const adPlayer = document.querySelector(AD_PLAYERS[i]);
		if (adPlayer) {
			clickSkipButton(adPlayer);
			return;
		}
	}
};

const adObserver = new MutationObserver(() => {
	try {
		getAd();
	} catch (e) {
		console.log(e);
	}
});

//observer to detect changes in the body
adObserver.observe(document.querySelector('body'), {
	characterData: true,
	childList: true,
	attributes: true,
	subtree: true,
});
