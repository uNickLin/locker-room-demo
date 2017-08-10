console.log('success')

var apparelList
$.ajax({
	method: "get",
	url: "../js/apparelList.json",
})
	.done(function (data) {
		console.log("JSON access !", data)
		apparelList = data
	})
	.fail(function(data){
		console.log('fail')
	})

//show item panel
$('.categories').click(function(){
	$('.itemPanel').css('margin-left', '0')
	$('.modelPanel').css('width', '70%')
})

//hide item panel and all others
$('.model').click(function(){
	//close item panel
	$('.itemPanel').css('margin-left', '-30%')
	$('.modelPanel').css('width', '100%')

	//close cart
	$('.cartList').removeClass('showCartMobile')
	$('.cartList').removeClass('show')

	//close login
	$('.loginOptions').removeClass('showLogInMobile')
	$('.loginOptions').removeClass('showLogIn')

	//close gender mobile
	$('.genderSelectMobile').removeClass('showMenu')

})

//toggle item panel
$('.categories').on('click', function () {
	var part = $(this).prop('className').split(' ')[1]
	if (part !== undefined) {
		$('.row.text-center').hide()
		$('#' + part).show()
		$('.categories').removeClass('active')
		$('.categories.' + part).addClass('active')
	}
})


// toggle select item list
////store item name

$('.items').click(function () {
	var itemClickName, itemClickDisplayUrl, itemClickUseUrl, itemClickDisplayOrder, itemClickLabel, thisUseUrl, currentUseUrl, currentLabel, thisOne
	var itemArr = []
	var repeatItem = 0
	var repeatCategory = 0

	itemClickName = $(this).find('p').eq(1).text()
	itemClickDisplayUrl = '../img'.concat($(this).find('img').prop('src').split('/img')[1])

	////store item image on model
	for (var i = 0; i < apparelList.length; i += 1) {
		$.each(apparelList[i].list, function (index, v) {
			if (v.name.search(itemClickName) != -1) {
				itemClickDisplayOrder = apparelList[i].displayOrder
				itemClickUseUrl = v.images.use
				itemClickLabel = apparelList[i].categoryName
				// console.log(itemClickLabel)
			}
		})
	}

	//find repeat item
	for (var i = 0; i < $('.modelItem').length; i += 1) {
		thisUseUrl = '../img'.concat($('.modelItem').eq(i).css('background-image').split('/img')[1]) // " ...png") "
		currentUseUrl = thisUseUrl.slice(0, thisUseUrl.length - 2) // " ...png "

		//detect repeat item by compare use.url image
		if (currentUseUrl === itemClickUseUrl) {
			repeatItem += 1
		}

	}

	////if there's no repeat item url, 'repeatCounts' will maintain 0
	if (repeatItem === 0) {

		for (var i = 0; i < $('.modelItem').length; i += 1) {
			currentLabel = $('.modelItem').eq(i).attr('data-label')
			if (currentLabel === itemClickLabel) {
				repeatCategory += 1
				thisOne = i
			}

			////// replace the same part of suit
			if (itemClickLabel === '洋裝') {
				for (var x = 0; x < $('.modelItem').length; x += 1) {
					if ($('.modelItem').eq(x).attr('data-label') === '上衣') {
						console.log('remove top')
						$('.modelItem').eq(x).remove()
						$('.selectListItem').eq(x).remove()
					}
					if ($('.modelItem').eq(x).attr('data-label') === '褲子') {
						console.log('remove bottom')
						$('.modelItem').eq(x).remove()
						$('.selectListItem').eq(x).remove()
					}
					if ($('.modelItem').eq(x).attr('data-label') === '裙子') {
						console.log('remove skirt')
						$('.modelItem').eq(x).remove()
						$('.selectListItem').eq(x).remove()
					}
				}

			} else if (itemClickLabel === '上衣' && $('.modelItem').eq(i).attr('data-label') === '洋裝') {
				$('.modelItem').eq(i).remove()
				$('.selectListItem').eq(i).remove()
			} else if (itemClickLabel === '褲子' && $('.modelItem').eq(i).attr('data-label') === '洋裝') {
				$('.modelItem').eq(i).remove()
				$('.selectListItem').eq(i).remove()
			} else if (itemClickLabel === '裙子' && $('.modelItem').eq(i).attr('data-label') === '洋裝') {
				$('.modelItem').eq(i).remove()
				$('.selectListItem').eq(i).remove()
			} else if (itemClickLabel === '褲子' && $('.modelItem').eq(i).attr('data-label') === '裙子') {
				$('.modelItem').eq(i).remove()
				$('.selectListItem').eq(i).remove()
			} else if (itemClickLabel === '裙子' && $('.modelItem').eq(i).attr('data-label') === '褲子') {
				$('.modelItem').eq(i).remove()
				$('.selectListItem').eq(i).remove()
			}
		}

		////// if there's an identical item exist => replace bgi
		if (repeatCategory !== 0) {
			$('.modelItem').eq(thisOne).css({
				'background-image': 'url(' + itemClickUseUrl + ')',
				'z-index': itemClickDisplayOrder,
				'data-label': itemClickLabel
			})
			$('.selectListItem').eq(thisOne).css('background-image', 'url(' + itemClickDisplayUrl + ')')
		} else {
			$('.model')
				.prepend('<div class="modelItem" style="background-image:url(' + itemClickUseUrl + ');z-index:' + itemClickDisplayOrder + ';" data-label="' + itemClickLabel + '"></div>')
			$('ul.demoList')
				.prepend('<li class="selectListItem" style="background-image: url(' + itemClickDisplayUrl + ');"><div class="deleteBtn">✖</div></li>')
			$('.add-all-in-cart').show()
		}
	}

	repeatItem = 0
	repeatCategory = 0

})


//delete select item in list
$('.demoList').on('click', '.deleteBtn', function () { //要監聽不會動的物件，不然無法辨認新增的DOM
	var id = $(this).closest('li').index()
	$(this).closest('.selectListItem').remove()
	$('.modelItem').eq(id).remove()
	checkSelect()
})

//delete select item when click list on small device
$('.selectListItem').on('click', function(){
	if (window.innerWidth <= 479) {
		var id = $(this).closest('li').index()
		$(this).remove()
		$('.modelItem').eq(id).remove()
		checkSelect()
	}
})

//add all in shopping cart button visibility
function checkSelect(){
	if ($('.selectListItem').length === 0) {
		$('.add-all-in-cart').hide()
	} else {
		$('.add-all-in-cart').show()
	}
}

checkSelect()

//info modal data
$('.infoBtn').click(function (e) {

	var infoName, infoBrand, infoPrice, infoDesc, infoMtr
	var infoImages = [],
		infoSize = []

	e.stopPropagation()
	$('#myModal').modal('show');
	infoBrand = $(this).siblings('p').eq(0).text()
	infoName = $(this).siblings('p').eq(1).text()

	for (var i = 0; i < apparelList.length; i += 1) {
		$.each(apparelList[i].list, function (index, v) {
			if (v.name.search(infoName) != -1) {

				infoPrice = v.price
				infoSize = v.size
				infoDesc = v.desc
				infoMtr = v.material

				for (var p = 0; p < v.images.info.length; p++) {
					infoImages.push(v.images.info[p])
					/*===============================
					infoImages = [
						'...01.png',
						'...02.png',
						'...03.png'
					]
					===============================*/
				}
			}
		})
	}


	// clear all itemAvatar and append new list
	$('.itemAvatar').remove()
	for (var image = 0; image < infoImages.length; image++) {
		$('ul.itemList').append('<li class="itemAvatar" style="background-image:url(' + infoImages[image] + ');background-position:center;background-size:cover;"></li>')
	}
	$('.itemSample').css('background-image', 'url(' + infoImages[0] + ')')
	infoImages.length = 0 //clear images array

	//insert information
	$('.itemInfos h2').text(infoBrand)
	$('.itemInfos h3').text(infoName)
	$('.itemInfos h4').text('$ ' + infoPrice)

	//append size
	$('.itemInfos select.form-control').find('option').remove()
	for (var size = 0; size < infoSize.length; size++) {
		$('.itemInfos select.form-control').append('<option>' + infoSize[size] + '</option>')
	}

	//append desc
	$('.itemInfos .itemDesc p').eq(0).text(infoMtr)
	$('.itemInfos .itemDesc p').eq(1).text(infoDesc)

})

$('ul.itemList').on('click', '.itemAvatar', function () {
	var displayPhoto

	displayPhoto = '../img'.concat($(this).css('background-image').slice(30, $(this).css('background-image').length - 2))
	$('.itemSample').css('background-image', 'url(' + displayPhoto + ')')

})

var cartItems = []
//add shopping cart
$('.addCart').on('click', function () {
	var cartItemName, cartItemPrice, cartItemImage, cartItemBrand

	cartItemBrand = $(this).siblings('h2').text()
	cartItemName = $(this).siblings('h3').text()
	cartItemPrice = $(this).siblings('h4').text()

	for (var i = 0; i < apparelList.length; i += 1) {
		$.each(apparelList[i].list, function (index, v) {
			if (v.name.search(cartItemName) != -1) {
				cartItemImage = v.images.display
			}
		})
	}

	if (cartItems.length !== 0) {
		for (var index = 0; index < cartItems.length; index++) {
			if (cartItems[index].name === cartItemName) {
				cartItems.splice(index, 1)
			}
		}
	}

	cartItems.push({
		brand: cartItemBrand,
		name: cartItemName,
		price: cartItemPrice,
		image: cartItemImage
	})
	$('.cartItem').remove()
	for (var id = 0; id < cartItems.length; id++) {
		$('.cartItemCounts').text(cartItems.length)
		$('.cartList').prepend('<li class="cartItem"><div class="cartItemImage"><img src="' + cartItems[id].image + '" alt=""></div><div class="cartItemInfo"><span>' + cartItems[id].brand + '</span><h5>' + cartItems[id].name + '</h5><span>' + cartItems[id].price + '</span></div><button class="delCartItem fa fa-trash-o"></button></li>')
	}
	
	$('#myModal').find('button.close').click()
	snack()
})


//add all in shopping cart
$('.add-all-in-cart').on('click', function(){
	var allCartItemName, allCartItemBrand, allCartItemPrice, allCartItemImage
	var selectListLength = $('.selectListItem').length

	$('.cartItem').remove()
	//比對資料庫圖片名稱撈出名字及價錢等資訊
	for (var sl = 0; sl < selectListLength; sl++) {
		listItem = $('.selectListItem').eq(sl).css('background-image').split('display/')[1].split('.png')[0]
		console.log(listItem)
		for (var i = 0; i < apparelList.length; i += 1) {
			$.each(apparelList[i].list, function (index, v) {
				if (v.images.display.search(listItem) != -1) {
					console.log('I found it !')
					allCartItemName = v.name
					allCartItemBrand = v.brand
					allCartItemPrice = v.price
					allCartItemImage = v.images.display
					console.log(allCartItemName, allCartItemBrand, allCartItemPrice, allCartItemImage)
				}
			})
		}
		//比對選擇的項目與購物車名稱是否有重複
		if (cartItems.length !== 0) {
			for (var index = 0; index < cartItems.length; index++) {
				if (cartItems[index].name === allCartItemName) {
					cartItems.splice(index, 1)
				}
			}
		}
		cartItems.push({
			brand: allCartItemBrand,
			name: allCartItemName,
			price: allCartItemPrice,
			image: allCartItemImage
		})
	}
	for (var id = 0; id < cartItems.length; id++) {
		$('.cartItemCounts').text(cartItems.length)
		$('.cartList').prepend('<li class="cartItem"><div class="cartItemImage"><img src="' + cartItems[id].image + '" alt=""></div><div class="cartItemInfo"><span>' + cartItems[id].brand + '</span><h5>' + cartItems[id].name + '</h5><span>' + cartItems[id].price + '</span></div><button class="delCartItem fa fa-trash-o"></button></li>')
	}
	snack()
})


//cart icon trigger display
$('.cart a').on('click', function () {
	if (cartItems.length !== 0) {
		if (window.innerWidth <= 479) {
			$(this).siblings('.cartList').toggleClass('showCartMobile')
			$('.loginOptions').removeClass('showLogInMobile')
			$('.genderSelectMobile').removeClass('showMenu')
		}
		else {
			$(this).siblings('.cartList').toggleClass('show')
			$('.loginOptions').removeClass('showLogIn')
		}
	}
})

//cart delete list
$('.cartList').on('click', '.delCartItem', function (e) {
	e.stopPropagation()

	var delCartConfirm = confirm('是否要刪除此項目？')
	if (delCartConfirm === true) {
		$(this).parent('li').remove()
		cartItems.pop()
		$('.cartItemCounts').text(cartItems.length)
		if (cartItems.length === 0) {
			$('.cartList').removeClass('show')
			$('.cartList').removeClass('showCartMobile')
		}
	}
})

//user icon trigger login
$('.user a').on('click', function () {
	if (window.innerWidth <= 479) {
		$(this).siblings('.loginOptions').toggleClass('showLogInMobile')
		$('.cartList').removeClass('showCartMobile')
		$('.genderSelectMobile').removeClass('showMenu')
	}
	else{
		$(this).siblings('.loginOptions').toggleClass('showLogIn')
		$('.cartList').removeClass('show')
	}
})


//display menu list on mobile device
$('.mobileMenu').on('click', function () {
	$('.genderSelectMobile').toggleClass('showMenu')
	$('.loginOptions').removeClass('showLogInMobile')
	$('.cartList').removeClass('showCartMobile')
})


//Cart notification
function snack() {
	$('#snackBar').addClass('show')
	setTimeout(function () {
		$('#snackBar').removeClass('show');
	}, 2000);
}