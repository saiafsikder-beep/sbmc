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
            "প্রথম গ্রুপ", 
            "দ্বিতীয় গ্রুপ", 
            "তৃতীয় গ্রুপ", 
            "চতুর্থ গ্রুপ", 
            "পঞ্চম গ্রুপ", 
            "ষষ্ঠ গ্রুপ"
        ];
        
        // রেফারেন্স তারিখ (যেদিন থেকে প্রথম গ্রুপ কাজ শুরু করেছে)
        // ধরুন, আপনার কাজ শুরু হয়েছিল মঙ্গলবারে (প্রথম গ্রুপ)
        const startDate = new Date('2024-10-14'); // আজকের তারিখ দিন, যদি আজ প্রথম গ্রুপের কাজ হয়
        const today = new Date();
        
        // দিনের পার্থক্য বের করা
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        // আজকের গ্রুপের ইনডেক্স বের করা
        const todayGroupIndex = (diffDays + 1) % 6; // +1 কারণ আপনার সিরিয়াল দ্বিতীয় গ্রুপ থেকে শুরু
        const specialTaskIndex = Math.floor(diffDays / 42) % 6; // প্রতি ৬ সপ্তাহ (৪২ দিন) পর গ্রুপ পরিবর্তন

        // দৈনন্দিন কাজের গ্রুপ লিস্ট তৈরি করা
        const dailyTaskContainer1 = document.getElementById('daily-task-groups-1');
        const dailyTaskContainer2 = document.getElementById('daily-task-groups-2');
        groups.forEach((group, index) => {
            const div1 = document.createElement('div');
            div1.textContent = group;
            div1.className = 'task-group';

            const div2 = document.createElement('div');
            div2.textContent = group;
            div2.className = 'task-group';

            if (index === todayGroupIndex) {
                div1.classList.add('today');
                div2.classList.add('today');
                div1.textContent += " (আজকের দায়িত্ব)";
                div2.textContent += " (আজকের দায়িত্ব)";
            }
            dailyTaskContainer1.appendChild(div1);
            dailyTaskContainer2.appendChild(div2);
        });

        // বিশেষ দায়িত্বের গ্রুপ লিস্ট তৈরি করা
        const specialTaskContainer1 = document.getElementById('special-task-groups-1');
        const specialTaskContainer2 = document.getElementById('special-task-groups-2');
        groups.forEach((group, index) => {
            const div1 = document.createElement('div');
            div1.textContent = group;
            div1.className = 'task-group';

            const div2 = document.createElement('div');
            div2.textContent = group;
            div2.className = 'task-group';
            
            if (index === specialTaskIndex) {
                div1.classList.add('today');
                div2.classList.add('today');
                 div1.textContent += " (এই সপ্তাহের দায়িত্ব)";
                 div2.textContent += " (এই সপ্তাহের দায়িত্ব)";
            }
            specialTaskContainer1.appendChild(div1);
            specialTaskContainer2.appendChild(div2);
        });
    }
});