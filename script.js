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

// === স্বয়ংক্রিয় দায়িত্ব বন্টন ===
document.addEventListener('DOMContentLoaded', function() {
    // এই ফাংশনটি শুধুমাত্র tasks.html পেজে চললে কাজ করবে
    if (document.getElementById('daily-task-groups-1')) {
        
        const groups = [
            "প্রথম গ্রুপ (ইমরান মৃধা)", 
            "দ্বিতীয় গ্রুপ (সাদিক মুরসালিন)", 
            "তৃতীয় গ্রুপ (মাহমুদ বিন মুঈন)", 
            "চতুর্থ গ্রুপ (হাসিব মিয়া)", 
            "পঞ্চম গ্রুপ (মুহাম্মদ সাফওয়ান)", 
            "ষষ্ঠ গ্রুপ (মারুফুর রহমান)"
        ];
        
        // রেফারেন্স তারিখ (যেদিন থেকে প্রথম গ্রুপ কাজ শুরু করেছে)
        const startDate = new Date('2024-10-13'); 
        const today = new Date();
        
        // দিনের পার্থক্য বের করা
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        // আজকের গ্রুপের ইনডেক্স বের করা
        const todayGroupIndex = diffDays % 6;
        const specialTaskIndex = Math.floor(diffDays / 42) % 6;

        // দৈনন্দিন কাজের গ্রুপ লিস্ট তৈরি করা
        const dailyTaskContainers = [document.getElementById('daily-task-groups-1'), document.getElementById('daily-task-groups-2')];
        dailyTaskContainers.forEach(container => {
            if (container) {
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

        // বিশেষ দায়িত্বের গ্রুপ লিস্ট তৈরি করা
        const specialTaskContainers = [document.getElementById('special-task-groups-1'), document.getElementById('special-task-groups-2')];
        specialTaskContainers.forEach(container => {
            if (container) {
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
