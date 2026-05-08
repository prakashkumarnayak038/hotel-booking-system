function calculateTotal() {

    const roomType = document.getElementById("room_type");
    const price = roomType.options[roomType.selectedIndex]?.dataset.price || 0;

    const checkinValue = document.querySelector("input[name='checkin']").value;
    const checkoutValue = document.querySelector("input[name='checkout']").value;
    const rooms = document.querySelector("input[name='no_of_rooms']").value || 0;

    if(checkinValue && checkoutValue){

        const checkin = new Date(checkinValue);
        const checkout = new Date(checkoutValue);

        if(checkout > checkin){

            const diffTime = checkout - checkin;
            const days = diffTime / (1000 * 3600 * 24);

            const total = price * days * rooms;

            document.getElementById("totalAmount").innerText = total;

            // ✅ QR generate yahi hoga
            generateQR(total);

        } else {
            document.getElementById("totalAmount").innerText = 0;
            generateQR(0);
        }
    }
}

document.getElementById("room_type").addEventListener("change", calculateTotal);
document.querySelector("input[name='checkin']").addEventListener("change", calculateTotal);
document.querySelector("input[name='checkout']").addEventListener("change", calculateTotal);
document.querySelector("input[name='no_of_rooms']").addEventListener("input", calculateTotal);


function generateQR(total){

    if(total <= 0){
        document.getElementById("qrCode").src = "";
        return;
    }

    const upiId = "9348296013@ibl";  // 👈 yahan apna real UPI id likho
    const name = "Your Hotel";

    const qrData = `upi://pay?pa=${upiId}&pn=${name}&am=${total}&cu=INR`;

    document.getElementById("qrCode").src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
        + encodeURIComponent(qrData);
}