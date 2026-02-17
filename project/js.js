function order(productName) {
    const phoneNumber = "91XXXXXXXXXX"; // your WhatsApp number
    const message = `Hello, I want to order: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
