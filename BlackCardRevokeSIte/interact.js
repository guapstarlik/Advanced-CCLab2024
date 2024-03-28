window.onload = function() {
    const logo = document.getElementById('logo');
    const logoLink = document.getElementById('logo-link');
    let swayInterval;

    function scaleUpLogo() {
        logo.style.transform = 'scale(1.2)';
        swayLogo();
    }

    function resetLogoScale() {
        logo.style.transform = 'scale(1)';
        clearInterval(swayInterval);
    }

    function swayLogo() {
        let swayDirection = 1;
        let swayPosition = 0;
        const maxSwayPosition = 20;

        swayInterval = setInterval(() => {
            swayPosition += swayDirection * 2;
            if (swayPosition >= maxSwayPosition) {
                swayDirection = -1;
            } else if (swayPosition <= -maxSwayPosition) {
                swayDirection = 1;
            }
            logo.style.transform = `translateX(${swayPosition}px) scale(1.2)`;
        }, 20);
    }

    logo.addEventListener('mouseover', scaleUpLogo);
    logo.addEventListener('mouseout', resetLogoScale);
    logoLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = event.currentTarget.href;
    });
};
