document.addEventListener('DOMContentLoaded', () => {

    // --- Homepage Student Card Door Open Effect ---
    const doorCards = document.querySelectorAll('.door-card');
    if (doorCards.length) {
        doorCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Prevent card from closing if a link is clicked
                if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                    return;
                }
                // Close other open cards
                doorCards.forEach(c => {
                    if (c !== card && c.classList.contains('is-open')) {
                        c.classList.remove('is-open');
                    }
                });
                // Toggle the clicked card
                card.classList.toggle('is-open');
            });
        });
    }

    // --- Groups Page Accordion ---
    const groupHeaders = document.querySelectorAll('.group-header');
    groupHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const membersList = header.nextElementSibling;
            if (membersList.style.maxHeight) {
                membersList.style.maxHeight = null;
                membersList.style.padding = "0";
            } else {
                membersList.style.padding = "10px 0";
                membersList.style.maxHeight = membersList.scrollHeight + "px";
            }
        });
    });

    // --- Tasks Page Accordion and Duty Highlighting ---
    function setupTasks(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Daily Logic: Saturday is the 6th group's turn.
        const referenceDay = 6; // Saturday (0=Sun, ..., 6=Sat)
        const referenceGroupIndex = 5; // Group 6 (0-indexed)
        
        const today = new Date();
        const todayDayIndex = today.getDay();
        
        let dayDifference = todayDayIndex - referenceDay;
        const dutyGroupIndex = (referenceGroupIndex + dayDifference + 7) % 6;

        const taskColumns = container.querySelectorAll('.task-column');
        
        taskColumns.forEach(column => {
            const taskGroups = column.querySelectorAll('.task-group-item');
            taskGroups.forEach((group, index) => {
                if (index === dutyGroupIndex) {
                    group.classList.add('on-duty');
                }
                const header = group.querySelector('.task-group-header');
                header.addEventListener('click', () => {
                    const membersList = header.nextElementSibling;
                    const isAlreadyOpen = membersList.style.maxHeight;

                    column.querySelectorAll('.task-group-members').forEach(list => {
                        list.style.maxHeight = null;
                        list.style.padding = "0 20px 0 40px";
                    });

                    if (!isAlreadyOpen) {
                        membersList.style.padding = "10px 20px 10px 40px";
                        membersList.style.maxHeight = membersList.scrollHeight + "px";
                    }
                });
            });
        });
    }

    setupTasks('daily-work');

});
