// in operator narrowing: Checks if a property exists in an object, helping TypeScript narrow the type.
// Example: if ("prop" in obj) { /* obj has prop */ }

function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
