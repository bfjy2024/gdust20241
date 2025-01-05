document.addEventListener('DOMContentLoaded', function() {
    // 加载时恢复状态
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const key = checkbox.id;
        if (localStorage.getItem(key) === 'true') {
            checkbox.checked = true;
        }
    });

    // 监听复选框变化并保存状态
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            localStorage.setItem(this.id, this.checked);
        });
    });
});
