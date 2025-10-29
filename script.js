// === কাজের পেজের ট্যাব ফাংশন ===
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    
    // === হ্যামবার্গার মেনুর জন্য কোড ===
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // === মোবাইলে টাচ করে স্টুডেন্ট কার্ড ফ্লিপ করার জন্য নতুন কোড ===
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        card.addEventListener('click', () => {
            // অন্য সব খোলা কার্ড বন্ধ করে দেওয়া (ঐচ্ছিক, কিন্তু ভালো অভিজ্ঞতা দেয়)
            studentCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            // বর্তমান কার্ডটি ফ্লিপ করা
            card.classList.toggle('flipped');
        });
    });

    // === স্বয়ংক্রিয় দায়িত্ব বন্টন (আগের মতোই) ===
    if (document.getElementById('daily-task-groups-1')) {
        const groups = [ "প্রথম গ্রুপ (ইমরান মৃধা)", "দ্বিতীয় গ্রুপ (সাদিক মুরসালিন)", "তৃতীয় গ্রুপ (মাহমুদ বিন মুঈন)", "চতুর্থ গ্রুপ (হাসিব মিয়া)", "পঞ্চম গ্রুপ (মুহাম্মদ সাফওয়ান)", "ষষ্ঠ গ্রুপ (মারুফুর রহমান)" ];
        const startDate = new Date('2024-10-13'); 
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const todayGroupIndex = diffDays % 6;
        const specialTaskIndex = Math.floor(diffDays / 42) % 6;
        
        const dailyTaskContainers = [document.getElementById('daily-task-groups-1'), document.getElementById('daily-task-groups-2')];
        dailyTaskContainers.forEach(container => {
            if (container) {
                container.innerHTML = ''; 
                groups.forEach((group, index) => {
                    const div = document.createElement('div');
                    div.textContent = group;
                    div.className = 'task-group';
                    if (index === todayGroupIndex) {
                        div.classList.add('today');
                        div.textContent += " (আজকের দায়িত্ব)";
                    }
                    container.appendChild(div);
                });
            }
        });

        const specialTaskContainers = [document.getElementById('special-task-groups-1'), document.getElementById('special-task-groups-2')];
        specialTaskContainers.forEach(container => {
            if (container) {
                container.innerHTML = '';
                groups.forEach((group, index) => {
                    const div = document.createElement('div');
                    div.textContent = group;
                    div.className = 'task-group';
                    if (index === specialTaskIndex) {
                        div.classList.add('today');
                        div.textContent += " (এই সপ্তাহের দায়িত্ব)";
                    }
                    container.appendChild(div);
                });
            }
        });
    }
});
