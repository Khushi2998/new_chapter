const roleSelect = document.getElementById("roleSelect");
const selectAll = document.getElementById("selectAll");
const permissions = document.querySelectorAll(".permission");
const saveBtn = document.getElementById("saveBtn");
const output = document.getElementById("output");

// Select All functionality
selectAll.addEventListener("change", () => {
    permissions.forEach(p => p.checked = selectAll.checked);
});

// Uncheck Select All when one permission is unchecked manually
permissions.forEach(p => {
    p.addEventListener("change", () => {
        selectAll.checked = [...permissions].every(p => p.checked);
    });
});

// Save Permissions
saveBtn.addEventListener("click", () => {
    const role = roleSelect.value;
    const selectedPermissions = [...permissions]
        .filter(p => p.checked)
        .map(p => p.value);

    if (!role) {
        output.textContent = "Please select a role.";
        return;
    }

    output.textContent =
        `Role: ${role.toUpperCase()} | Permissions: ${selectedPermissions.join(", ") || "None"}`;
});
