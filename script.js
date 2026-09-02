const form = document.querySelector("#inquiryForm");
const status = document.querySelector("#formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = form.querySelector("button[type='submit']");
  button.disabled = true;
  button.textContent = "Sending…";
  status.textContent = "Sending your inquiry…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Submission failed");
    form.reset();
    status.textContent = "Thank you! Your inquiry has been received.";
    status.className = "form-status success";
  } catch {
    status.textContent = "Something went wrong. Please try again or email sunesocialcart@gmail.com.";
    status.className = "form-status error";
  } finally {
    button.disabled = false;
    button.textContent = "Send inquiry";
  }
});
