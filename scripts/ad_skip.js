//skips ad by "clicking" the skip button
const clickSkipButton = (adElement) => {
	const skipButton = adElement.querySelector('.ytp-ad-skip-button-modern');
	if (skipButton) {
		skipButton.click();
	}
};

//detects if a video ad is present and tries to skip if button is available
const getAd = () => {
	const videoAdElement = document.querySelector('.ytp-ad-player-overlay');
	if (videoAdElement) {
		clickSkipButton(videoAdElement);
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
