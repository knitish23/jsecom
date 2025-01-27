export function showToast(operation, id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  // set the text content of the toast based on the operation
  if (operation === "add") {
    toast.className = `toast ${"add"}`;
    toast.textContent = `Product with ID ${id} has been added successfully.`;
  } else {
    toast.textContent = `Product with ID ${id} has been delete.`;
  }
  document.body.appendChild(toast);

  // Automatically remove the toast after a few seconds
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

