</body>
</html>
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
code
Code
const groups = [
        "প্রথম গ্রুপ (ইমরান মৃধা)", 
        "দ্বিতীয় গ্রুপ (সাদিক মুরসালিন)", 
        "তৃতীয় গ্রুপ (মাহমুদ বিন মুঈন)", 
        "চতুর্থ গ্রুপ (হাসিব মিয়া)", 
        "পঞ্চম গ্রুপ (মুহাম্মদ সাফওয়ান)", 
        "ষষ্ঠ গ্রুপ (মারুফুর রহমান)"
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
/* === বেসিক স্টাইল এবং ভেরিয়েবল === */
:root {
--primary-color: #008e48;
--secondary-color: #8dc63f;
--accent-color: #e8b55d;
--dark-color: #0f2920;
--light-color: #ffffff;
--text-color: #333;
--font-main: 'Hind Siliguri', sans-serif;
}
body {
font-family: var(--font-main);
margin: 0;
padding: 0;
background-color: #f9f9f9;
color: var(--text-color);
background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e0e0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.container {
max-width: 1200px;
margin: 0 auto;
padding: 20px;
}
/* === হেডার এবং নেভিগেশন === */
header {
background-color: var(--primary-color);
color: var(--light-color);
padding: 10px 0;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
position: sticky;
top: 0;
z-index: 1000;
}
nav {
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}
nav .logo {
font-size: 1.8em;
font-weight: 700;
color: var(--light-color);
text-decoration: none;
}
nav ul {
list-style: none;
margin: 0;
padding: 0;
display: flex;
}
nav ul li a {
color: var(--light-color);
text-decoration: none;
padding: 15px 20px;
font-weight: 500;
transition: background-color 0.3s;
}
nav ul li a:hover, nav ul li a.active {
background-color: var(--dark-color);
border-radius: 5px;
}
/* === হোমপেজ === */
.hero-section {
text-align: center;
padding: 60px 20px;
background: linear-gradient(rgba(0, 142, 72, 0.8), rgba(15, 41, 32, 0.8));
color: var(--light-color);
border-radius: 10px;
}
.hero-section h1 {
font-size: 2.5em;
margin-bottom: 10px;
}
.quotes-section {
display: flex;
justify-content: space-around;
margin: 40px 0;
flex-wrap: wrap;
}
.quote {
font-family: 'Hind Siliguri', sans-serif; /* লিপিঘর থেকে আনা ফন্টের নাম এখানে দিতে হবে */
font-size: 1.5em;
font-style: italic;
color: var(--primary-color);
border-left: 5px solid var(--secondary-color);
padding-left: 15px;
margin: 10px;
}
.about-section {
background: var(--light-color);
padding: 30px;
border-radius: 10px;
margin: 40px 0;
box-shadow: 0 0 20px rgba(0,0,0,0.05);
}
.about-section h2, .students-section h2, .leadership-section h2, .groups-section h2, .memory-section h2 {
text-align: center;
font-size: 2em;
color: var(--dark-color);
margin-bottom: 30px;
}
.about-text {
font-size: 1.1em;
line-height: 1.8;
color: var(--text-color);
text-align: center;
}
.about-text i {
color: #555;
}
/* === ছাত্রের কার্ড ডিজাইন === */
.student-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 25px;
}
.student-card {
background-color: transparent;
perspective: 1000px;
min-height: 200px;
cursor: pointer;
}
.card-inner {
position: relative;
width: 100%;
height: 100%;
transition: transform 0.8s;
transform-style: preserve-3d;
}
.student-card.flipped .card-inner {
transform: rotateY(180deg);
}
.card-front, .card-back {
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
border-radius: 10px;
box-shadow: 0 4px 15px rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
box-sizing: border-box;
}
.card-front {
background-color: var(--light-color);
transition: box-shadow 0.3s, transform 0.3s;
}
.student-card:hover .card-front {
box-shadow: 0 8px 30px rgba(0, 142, 72, 0.2);
transform: translateY(-5px);
}
.card-front img {
width: 80px;
height: 80px;
border-radius: 50%;
object-fit: cover;
border: 3px solid var(--secondary-color);
margin-bottom: 15px;
}
.card-front h3 {
margin: 10px 0 0;
color: var(--primary-color);
}
.card-back {
background-color: var(--dark-color);
color: var(--light-color);
transform: rotateY(180deg);
text-align: left;
align-items: flex-start;
}
.card-back h4 {
margin: 0 0 15px 0;
color: var(--secondary-color);
font-size: 1.2em;
}
.card-back p {
margin: 5px 0;
font-size: 0.9em;
}
/* === গ্রুপ পেজ === */
.leadership-section {
padding: 30px;
background-color: var(--light-color);
border-radius: 10px;
margin-bottom: 40px;
}
.leaders {
display: flex;
justify-content: space-around;
flex-wrap: wrap;
gap: 20px;
}
.leader-card {
background-color: var(--primary-color);
color: var(--light-color);
padding: 20px;
border-radius: 10px;
text-align: center;
flex-basis: 30%;
box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.leader-card h3 {
margin: 0 0 5px 0;
color: var(--light-color);
}
.leader-card p {
margin: 0;
color: var(--accent-color);
font-weight: 500;
}
.group-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 20px;
}
.group-card {
background-color: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0 4px 15px rgba(0,0,0,0.08);
transition: all 0.3s ease;
}
.group-card:hover {
transform: translateY(-5px);
box-shadow: 0 8px 25px rgba(0, 142, 72, 0.15);
}
.group-card h3 {
color: var(--primary-color);
margin: 0 0 15px 0;
border-bottom: 2px solid var(--secondary-color);
padding-bottom: 10px;
}
.group-card .leader-name {
font-weight: 700;
color: var(--dark-color);
margin-bottom: 10px;
background-color: #f0f0f0;
padding: 5px;
border-radius: 5px;
}
.group-card ul {
list-style: none;
padding: 0;
margin: 0;
}
.group-card ul li {
padding: 8px 0;
border-bottom: 1px solid #eee;
}
/* === কাজ পেজ === */
.tabs {
display: flex;
justify-content: center;
margin-bottom: 30px;
}
.tab-link {
padding: 10px 25px;
cursor: pointer;
border: none;
background-color: #eee;
font-size: 1.1em;
font-weight: 600;
transition: all 0.3s;
}
.tab-link.active {
background-color: var(--primary-color);
color: var(--light-color);
}
.tab-content {
display: none;
}
.task-schedule {
display: flex;
gap: 20px;
flex-wrap: wrap;
}
.task-card {
flex: 1;
background: #fff;
padding: 20px;
border-radius: 10px;
min-width: 280px;
}
.task-card h3 {
color: var(--primary-color);
}
.task-group {
padding: 10px;
margin: 5px 0;
border-radius: 5px;
font-weight: 600;
transition: background-color 0.3s;
}
.task-group.today {
background-color: var(--accent-color);
color: var(--dark-color);
animation: pulse 1.5s infinite;
}
@keyframes pulse {
0% { box-shadow: 0 0 0 0 rgba(232, 181, 93, 0.7); }
70% { box-shadow: 0 0 0 10px rgba(232, 181, 93, 0); }
100% { box-shadow: 0 0 0 0 rgba(232, 181, 93, 0); }
}
.notice-board {
margin-top: 40px;
padding: 20px;
background-color: #fff3cd;
border: 1px solid var(--accent-color);
border-radius: 10px;
}
.notice-board h3 {
color: var(--dark-color);
}
/* === স্মৃতি পেজ === */
.memory-grid {
display: grid;
grid-template-columns: 1fr;
gap: 25px;
}
.memory-card {
display: flex;
align-items: center;
background: #fff;
padding: 20px;
border-radius: 10px;
box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}
.memory-card img {
width: 80px;
height: 80px;
border-radius: 50%;
margin-right: 20px;
object-fit: cover;
}
.memory-content blockquote {
font-size: 1.2em;
font-style: italic;
color: var(--dark-color);
margin: 0;
border-left: 3px solid var(--primary-color);
padding-left: 15px;
}
.memory-content cite {
display: block;
text-align: right;
margin-top: 10px;
color: var(--primary-color);
font-weight: 600;
}
/* === ফুটার === */
footer {
background-color: var(--dark-color);
color: #aaa;
text-align: center;
padding: 20px;
margin-top: 40px;
}
