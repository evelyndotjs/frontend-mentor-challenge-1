$("button").on("click", () => {
	const email = $(".email").val();
	const properEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (email == "") {
		$(".blank-error").show();
		return false;
	} else if (!properEmail.test(email)) {
		$(".blank-error").hide();
		$(".valid-error").show()
		return false;
	} else {
		alert("You've been added!")
	}
});

