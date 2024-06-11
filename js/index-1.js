
$(document).ready(function () {//jsده اخر حاجه بعملها بعد م اخلاص ال

	let aboutOffsetTop = $("#about").offset().top;	//element ده بيجيب اي مكان  

	$(window).scroll(function () {
		let wScroll = $(window).scrollTop();	//نزل لحد فين uesrده ال

		if (wScroll > aboutOffsetTop - 50)//aboutال50 ده انا كده بطرح 50 من الطول ال 
		{
			$("#main-nav").css("backgroundColor", "rgba(142, 119, 84,0.9)");//غير ل اسود شفافtransparentغير اللون بتاع من navbarانا كده بقول هدخل علي ال

			$("#btnUp").fadeIn(500);//انا كده بظهر السهم في نص ثانيه 
		}
		else {
			$("#main-nav").css("backgroundColor", "transparent");

			$("#btnUp").fadeOut(500);//انا كده بخفي السهم في نص ثانيه 
		}
	})

	$("#btnUp").click(function () {//ده علشان لم اضغط علي السهم يطلع ل فوق 

		$("html,body").animate({ scrollTop: 0 }, 3000);//ده كده هيطلع ل فوق 0
	})

	//------------------
	//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال

	$("a[href^='#']").click(function () {//ده اللي هو اللينك aال
		//#اول علامه ال href انا كده بقول لم اضغط علي لينك في  

		let aHref = $(this).attr("href");	//srcهيجيب ال Attributeانا كده بقول هات الattrولم بضغط بيقولي ضغط فين والaبتعود علي لينك ال thisال
		//setter علشان بعد كده هستخدم aHref وبعد كده حطها في getter ده هستخدم هنا $ (this).attr("href");


		//$("#about").offset().top;//aboutانا كده بقول هات ابعاد ال
		let sectionOffset = $(aHref).offset().top;//كده هيجيب ابعاد اللينكات كلها
		//setter ده هستخدم هنا aHref 

		$("html,body").animate({ scrollTop: sectionOffset }, 2000);
	});

	//----------------------------
	//ده علشان بوكس الالوان
	let colorBoxWidth = $("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth

	$("#sideBar").css({ left: `-${colorBoxWidth}` }); // يبقي جوه اول م افتح الموقع Boxده علشان ال

	$("#sideBarToggle").click(function () {


		if ($('#sideBar').css("left") == "0px")//البوكس كده بره
		{
			$("#sideBar").animate({ left: `-${colorBoxWidth}` }, 2000);//left ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
		}
		else {
			$('#sideBar').animate({ left: `0px` }, 2000);//ده كده يبقي بره	0 = left ب sideBar انا كده بقول لو البوكس
		}

	})

	//تغير اللون في البوكس 
	for (let i = 0; i < $(".color-item").length; i++) {
		let red = Math.round(Math.random() * 255);
		let green = Math.round(Math.random() * 255);
		let blue = Math.round(Math.random() * 255);

		$(".color-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
	}

	
	if (JSON.parse(localStorage.getItem("myBg"))) {
		$("*").css("color", JSON.parse(localStorage.getItem("myBg")));
	}
	else {
		console.log('no')
	}

	$(".color-item").click(function () {
		let bkgColor = $(this).css("backgroundColor");
		// PopStateEvent.push(bkgColor)
		localStorage.setItem('myBg', JSON.stringify(bkgColor));
		$("*").css("color", bkgColor);
	})



























	//-----------------------------
	// ده علشان لم الموقع يحمل يطلع شكل اعقبال م يحمل 
	$("#loading").fadeOut(2000, function () {
		$("body").css("overflow", "auto");
	});

})