const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// 1. Get all role names
const roleNames = Object.keys(roles);

// 2. Check if student can delete
const studentCanDelete = roles.student.includes("delete");

// 3. Create a flat list of all unique permissions
const allPermissions = [...new Set(Object.values(roles).flat())];

// 4. Add moderator role immutably
const addModerator = newPermissions => ({
  ...roles,
  moderator: newPermissions
});

export {roleNames,studentCanDelete,allPermissions,addModerator};