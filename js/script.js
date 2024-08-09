document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const textBoxes = document.querySelectorAll('.text-box');

    // ページロード時にハンバーガーメニューをフェードイン
    setTimeout(() => {
        hamburgerMenu.classList.add('visible');
    }, 100); // 0.1秒の遅延でフェードイン開始

    hamburgerMenu.addEventListener('click', function() {
        fullScreenMenu.classList.toggle('hidden');
    });

    window.addEventListener('scroll', function() {
        textBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxPosition < windowHeight - 100) {
                box.classList.add('visible');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const menuItems = fullScreenMenu.querySelectorAll('a');
    const textBoxes = document.querySelectorAll('.text-box');

    // ハンバーガーメニューの開閉
    hamburgerMenu.addEventListener('click', function() {
        fullScreenMenu.classList.toggle('visible');
    });

    // メニュー項目クリックでメニューを閉じる
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            fullScreenMenu.classList.remove('visible');
        });
    });

    /*
    // スクロール時のテキストボックスアニメーション
    window.addEventListener('scroll', function() {
        textBoxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxPosition < windowHeight - 100) {
                box.classList.add('visible');
            }
        });
    });*/

    // スクロール時にセクションごとにハンバーガーアイコンの色を変更
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navbarToggler = document.querySelector('.navbar-toggler-icon');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                const bgColor = window.getComputedStyle(section).backgroundColor;
                if (section.id === 'title-section') {
                    navbarToggler.style.backgroundImage = "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27white%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')";
                } else if (section.id === 'synopsis-section') {
                    navbarToggler.style.backgroundImage = "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27black%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')";
                } else if (section.id === 'info-section') {
                    navbarToggler.style.backgroundImage = "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27red%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')";
                }
                // 他のセクションも同様に設定可能
            }
        });
    });
});
