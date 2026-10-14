/* Dismiss only on this page; a refresh shows the announcement again. */
(() => {
    const banner = document.getElementById('acl-announcement');
    if (!banner) return;
    banner.hidden = false;
    banner.querySelector('.announcement-close').addEventListener('click', () => {
        banner.hidden = true;
    });
})();
