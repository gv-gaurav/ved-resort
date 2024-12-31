import { BASE_URL } from "./baseApi.js";

// Add a new contact
export const createContact = async (contactData) => {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating contact:", error);
    return null;
  }
};

export const handleSubmitContactForm = async (event) => {
  event.preventDefault(); // Prevent form reload

  const checkIn = document.getElementById("contact-checkin")?.value;
  const checkOut = document.getElementById("contact-checkout")?.value;
  const adults = document.getElementById("contact-adult")?.value;
  const children = document.getElementById("contact-children")?.value;

  console.log({ checkIn, checkOut, adults, children });

  try {
    // Call the API to create a contact
    const response = await createContact({
      checkIn,
      checkOut,
      adults: adults,
      children: children,
    });
    // Clear the form after successful submission

    if (response) {
      console.log("Form submitted successfully. We will reach you soon!");
      document.getElementById("contact-checkin").value = "";
      document.getElementById("contact-checkout").value = "";
      document.getElementById("contact-adult").value = "0";
      document.getElementById("contact-children").value = "0";
    } else {
      alert("Failed to submit the form.");
    }
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    alert("An error occurred while submitting the form.");
  }
};
export const handleSubmitContactForm2 = async (event) => {
  event.preventDefault(); // Prevent form reload

  const name = document.getElementById("contact-name")?.value;
  const email = document.getElementById("contact-email")?.value;
  const phone = document.getElementById("contact-phone")?.value;
  const subject = document.getElementById("contact-subject")?.value;
  const message = document.getElementById("contact-message")?.value;

  console.log({ name, email, phone, subject, message });

  try {
    // Call the API to create a contact
    const response = await createContact({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (response) {
      console.log("Form submitted successfully. We will reach you soon!");

      // Clear the form after successful submission
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-phone").value = "";
      document.getElementById("contact-subject").value = "";
      document.getElementById("contact-message").value = "";
    } else {
      alert("Failed to submit the form.");
    }
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    alert("An error occurred while submitting the form.");
  }
};