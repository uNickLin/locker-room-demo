console.log('success')

// load apparelList json file
var apparelList
$.ajax({
	method: "get",
	url: "js/apparelList.json",
})
	.done(function (data) {
		console.log("JSON access !", data)
		apparelList = data
	})
	.fail(function(data){
		console.log('fail')
	})

//show item panel once on click category
$('.categories').click(function(){
	$('.itemPanel').css('margin-left', '0')
	$('.modelPanel').css('width', '70%')
})

//hide item panel and all others
$('.model').click(function(){
	//remove category active class
	$('.categories').removeClass('active')

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

	//後續加入 髮型 類別, 因為髮型無法加入清單, 要另外計算
	if(!$(this).hasClass('hair')){
		var itemClickName, itemClickDisplayUrl, itemClickUseUrl, itemClickDisplayOrder, itemClickLabel, currentUseUrl, currentLabel, replaceThis
		var itemArr = []
		var repeatItem = 0
		var repeatCategory = 0
		itemClickName = $(this).find('p').eq(1).text() //e.g. 極簡無袖上衣
		itemClickDisplayUrl = $(this).attr('data-itemImg')
		////store item image on model
		for (var i = 0; i < apparelList.length; i += 1) {
			$.each(apparelList[i].list, function (index, v) {
				// 在json物件陣列中找名稱符合點擊商品的資訊(沒有符合則會回傳 -1, != -1 有符合物件)
				if (v.name.search(itemClickName) != -1) {
					itemClickDisplayOrder = apparelList[i].displayOrder // 服裝分類 z-index 權重
					itemClickUseUrl = v.images.use // '../img/......./use/....png'
					itemClickLabel = apparelList[i].categoryName //記錄分類名稱後續可以做替換取代
				}
			})
		}

		//find repeat item
		for (var i = 0; i < $('.modelItem').length; i += 1) {
			currentUseUrl = $(this).attr('data-modelItemImg')

			//detect repeat item by compare use.url image
			if (currentUseUrl === itemClickUseUrl) {
				//如果點選的商品已經在選擇清單中, repeatItem 就會一直累加以致於不會進入下方的function
				repeatItem += 1
			}
		}

		////if there's no repeat item url, 'repeatCounts' will maintain 0
		if (repeatItem === 0) {
			//經檢查過後點選的商品沒有被加到選擇清單, 接著開始判斷取代順序, e.g. 上衣跟洋裝不能同時出現; 褲子跟裙子不能同時出現, 佯裝取代 上衣 ＋ （褲子or裙子）
			for (var i = 0; i < $('.modelItem').length; i += 1) {
				currentLabel = $('.modelItem').eq(i).attr('data-label')
				if (currentLabel === itemClickLabel) {
					//repeatCategory 檢查服裝的部位是不是能夠被替換, 若 = 0 則為新的商品必須新增到清單中, 否則就找可替換的商品欄位做取代 => 不做新增
					repeatCategory += 1
					//紀錄這筆要取代的物品在清單中的id(因為清單與套在model上的樣式順序一致, 可以藉此id同時替換掉model身上的樣式)
					replaceThis = i
				}

				////// replace the same part of suit
				if (itemClickLabel === '洋裝') {
					//如果點選的是 洋裝 , 則清除選擇清單及 model 樣式上的 '上衣' '褲子' '裙子' 
					for (var x = 0; x < $('.modelItem').length; x += 1) {
						if ($('.modelItem').eq(x).attr('data-label') === '上衣') {
							$('.modelItem').eq(x).remove()
							$('.selectListItem').eq(x).remove()
						}
						if ($('.modelItem').eq(x).attr('data-label') === '褲子') {
							$('.modelItem').eq(x).remove()
							$('.selectListItem').eq(x).remove()
						}
						if ($('.modelItem').eq(x).attr('data-label') === '裙子') {
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
				//點選有重複類別的商品就依紀錄的 id 替換掉 model 上原有的 圖片 z-index權重 類別標籤
				$('.modelItem').eq(replaceThis).css({
					'background-image': 'url(' + itemClickUseUrl + ')',
					'z-index': itemClickDisplayOrder,
					'data-label': itemClickLabel
				})
				//依紀錄的 id 替換選擇清單中的縮圖
				$('.selectListItem').eq(replaceThis).css('background-image', 'url(' + itemClickDisplayUrl + ')').attr('data-selectImg', itemClickDisplayUrl)
			} else {
				//若無重複類別的商品, 新增 model 上的樣式及選擇清單中的縮圖
				$('.model')
					.prepend('<div class="modelItem" style="background-image:url(' + itemClickUseUrl + ');background-position: center -30px; z-index:' + itemClickDisplayOrder + ';" data-label="' + itemClickLabel + '" data-modelItemImg="' + itemClickUseUrl + '"></div>')
				$('ul.demoList')
					.prepend('<li class="selectListItem" style="background-image: url(' + itemClickDisplayUrl + ');" data-selectImg="' + itemClickDisplayUrl +'"><div class="deleteBtn">✖</div></li>')
				$('.add-all-in-cart').show()
			}
		}

		//歸零所有紀錄
		repeatItem = 0
		repeatCategory = 0
	}
	//若選擇 髮型 僅需替換display
	else{
		var hairUrl = $(this).attr('data-itemImg')
		$('.modelHairItem').css({
			'background-image': 'url(' + hairUrl + ')',
			'background-position': 'center -30px;'
		})
	}

})


//delete select item in list
$('.demoList').on('click', '.deleteBtn', function (e) { //要監聽不會動的物件，不然無法辨認新增的DOM
	e.stopPropagation()
	var id = $(this).closest('li').index()
	$(this).closest('.selectListItem').remove()
	$('.modelItem').eq(id).remove()
	checkSelect()
})

//add all in shopping cart button visibility
function checkSelect(){
	//選擇清單被清空的話隱藏 '一鍵加入' button
	if ($('.selectListItem').length === 0) {
		$('.add-all-in-cart').hide()
	} else {
		$('.add-all-in-cart').show()
	}
}
checkSelect()

//delete select item when click list on small device
$('.demoList').on('click', '.selectListItem', function () {
	if (window.innerWidth <= 479) {
		var id = $(this).closest('li').index()
		$(this).remove()
		$('.modelItem').eq(id).remove()
		// 每次刪除清單物件都執行一次檢查是否隱藏 一鍵加入 按鈕
		checkSelect()
	}
	//click select item trigger info btn when larger than mobile width
	else{
		var thisSelectItem = $(this).attr('data-selectImg')
		if (window.innerWidth >= 479) {
			for (var item = 0; item < $('.items').length; item++) {
				if (thisSelectItem === $('.items').eq(item).attr('data-itemImg')) {
					$('.items').eq(item).find('.infoBtn').click()
				}
			}
		}
	}
})

//info modal data
$('.infoBtn').click(function (e) {

	var infoName, infoBrand, infoPrice, infoDesc, infoMtr
	var infoImages = [], infoSize = []

	e.stopPropagation()
	$('#myModal').modal('show');
	infoBrand = $(this).siblings('p').eq(0).text() // e.g. AUSTIN W.
	infoName = $(this).siblings('p').eq(1).text() //e.g. 極簡無袖上衣

	for (var i = 0; i < apparelList.length; i += 1) {
		// 在json物件陣列中找名稱符合點擊商品的資訊(沒有符合則會回傳 -1, != -1 有符合物件)
		$.each(apparelList[i].list, function (index, v) {
			if (v.name.search(infoName) != -1) {
				infoPrice = v.price
				infoSize = v.size
				infoDesc = v.desc
				infoMtr = v.material

				for (var p = 0; p < v.images.info.length; p++) {
					// 存放在 modal 資訊中商品圖片的陣列
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
	// 清空所有小圖重新塞入存取的商品圖片陣列
	for (var image = 0; image < infoImages.length; image++) {
		$('ul.itemList').append('<li class="itemAvatar" style="background-image:url(' + infoImages[image] + ');background-position:center;background-size:cover;" data-modalImg="' + infoImages[image] + '"></li>')
	}
	//預設大圖設為第一張商品圖片
	$('.itemSample').css('background-image', 'url(' + infoImages[0] + ')')
	infoImages.length = 0 //clear images array

	//insert information
	$('.itemInfos h2').text(infoBrand)
	$('.itemInfos h3').text(infoName)
	$('.itemInfos h4').text(infoPrice)

	//append size
	$('.itemInfos select.form-control').find('option').remove()
	for (var size = 0; size < infoSize.length; size++) {
		$('.itemInfos select.form-control').append('<option>' + infoSize[size] + '</option>')
	}

	//append desc
	$('.itemInfos .itemDesc p').eq(0).text(infoMtr)
	$('.itemInfos .itemDesc p').eq(1).text(infoDesc)

})

//當商品圖片清單被點選時要替換掉預設大圖
$('ul.itemList').on('click', '.itemAvatar', function () {
	var imgUrl = $(this).attr('data-modalImg')
	$('.itemSample').css('background-image', 'url(' + imgUrl + ')')
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
		//在單一商品的 modal 中加入購物車時, 先檢查購物車內是否有相同名稱的商品, 若有就先刪除購物車那筆物件
		for (var index = 0; index < cartItems.length; index++) {
			if (cartItems[index].name === cartItemName) {
				cartItems.splice(index, 1)
			}
		}
	}

	//新增點選加入購物車的商品資訊到購物車清單中, 因為前面有先刪除重複物件, 此處僅需做新增
	cartItems.push({
		brand: cartItemBrand,
		name: cartItemName,
		price: cartItemPrice,
		image: cartItemImage
	})

	//每次點選加入購物車的按鈕時, 都將右上角的購物車清單清空, 再重新依現有的 cartItems 陣列依序填入
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
	var allCartItemName, allCartItemBrand, allCartItemPrice, allCartItemImage, listItem
	var selectListLength = $('.selectListItem').length

	$('.cartItem').remove()
	//比對資料庫圖片名稱撈出名字及價錢等資訊
	for (var sl = 0; sl < selectListLength; sl++) {
		listItem = $('.selectListItem').eq(sl).css('background-image').split('display/')[1].split('.png')[0] // e.g. bag_000
		//透過每個選擇清單的圖片名稱去找到對應的 json 物件位置, 在儲存所有所需資訊
		for (var i = 0; i < apparelList.length; i += 1) {
			$.each(apparelList[i].list, function (index, v) {
				if (v.images.display.search(listItem) != -1) {
					allCartItemName = v.name
					allCartItemBrand = v.brand
					allCartItemPrice = v.price
					allCartItemImage = v.images.display
				}
			})
		}
		//比對選擇的項目與購物車內的名稱是否有重複, 若有則先刪除購物車內該筆物件
		if (cartItems.length !== 0) {
			for (var index = 0; index < cartItems.length; index++) {
				if (cartItems[index].name === allCartItemName) {
					cartItems.splice(index, 1)
				}
			}
		}

		//將選擇清單中的所有項目依序填入 cartItems 陣列中
		cartItems.push({
			brand: allCartItemBrand,
			name: allCartItemName,
			price: allCartItemPrice,
			image: allCartItemImage
		})
	}

	//依目前的 cartItems 陣列重新 render 購物車清單
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
	var delCartConfirm = confirm('是否要刪除此項目？')
	if (delCartConfirm === true) {
		/* ===================================================================================
		因為 cartItems 在新增物件時是依序 push , 但 render 到 .cartList 中的 li 時則是反向的 prepend 
		, 因此要用總數量減掉點選的 id + 1 才能正確刪除 cartItems 陣列中的物件

		cartItems = [0, 1, 2, 3, 4, 5]
		li.cartItem = cartItems prepend = [5, 4, 3, 2, 1, 0] -> cartItems id
		li.cartItem = 										[0, 1, 2, 3, 4, 5] -> li.cartItem id
																			[1, 2, 3, 4, 5, 6] -> li.cartItem id+1
		欲刪除 li.cartItem id(1) = cartItems id(4) = cartItems.length(6) - li.cartItem id+1(2) = 4
		====================================================================================*/
		var id = $(this).parent('li').index() + 1
		cartItems.splice( cartItems.length - id , 1)

		$(this).parent('li').remove()
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