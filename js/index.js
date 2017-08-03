console.log('success')

var apparelList = [{
		categoryId: 1,
		categoryName: '上衣',
		displayOrder: 3,
		list: [{
				brand: 'AUSTIN W.',
				name: '極簡無袖上衣',
				color: '黑',
				size: ['Free Size'],
				price: '790',
				material: '棉',
				desc: '簡約解構版型-超舒適純棉材質',
				images: {
					display: '../img/top/display/top_000.png',
					use: '../img/top/use/top_00.png',
					info: [
						'../img/top/info/top_00_0.png',
						'../img/top/info/top_00_1.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '真絲粉色Oversize襯衫',
				color: '淺粉紅',
				size: ['Free Size'],
				price: '1990',
				material: '絲質',
				desc: '流行Pantone粉-Oversize寬版襯衫 - 高質感真絲材質',
				images: {
					display: '../img/top/display/top_001.png',
					use: '../img/top/use/top_01.png',
					info: [
						'../img/top/info/top_01_0.png',
						'../img/top/info/top_01_1.png',
						'../img/top/info/top_01_2.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '黑色綁帶及膝外罩背心',
				color: '黑',
				size: ['Free Size'],
				price: '990',
				material: '聚酯纖維',
				desc: '及膝長板背心-帥氣綁帶設計-時尚部落客必備款式',
				images: {
					display: '../img/top/display/top_002.png',
					use: '../img/top/use/top_02.png',
					info: [
						'../img/top/info/top_02_0.png',
						'../img/top/info/top_02_1.png'
					]
				}
			},
		]
	},
	{
		categoryId: 2,
		categoryName: '褲子',
		displayOrder: 2,
		list: [{
				brand: 'FashionMax',
				name: '刷色Skinny單寧褲',
				color: '藍',
				size: [24, 25, 26, 27, 28, 29, 30, 31, 32],
				price: '990',
				material: '丹寧',
				desc: '顯瘦Skinny版型-彈性纖維不壓迫-自然刷色效果',
				images: {
					display: '../img/bottom/display/bottom_007.png',
					use: '../img/bottom/use/bottom_07.png',
					info: [
						'../img/bottom/info/bottom_07_0.png',
						'../img/bottom/info/bottom_07_1.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '修身黑色小喇叭褲',
				color: '黑',
				size: ['S', 'M', 'L'],
				price: '1090',
				material: '聚酯纖維',
				desc: '小喇叭開口款式-秋冬流行穿搭單品',
				images: {
					display: '../img/bottom/display/bottom_008.png',
					use: '../img/bottom/use/bottom_08.png',
					info: [
						'../img/bottom/info/bottom_08_0.png',
						'../img/bottom/info/bottom_08_1.png'
					]
				}
			}
		]
	},
	{
		categoryId: 2,
		categoryName: '裙子',
		displayOrder: 2,
		list: [{
				brand: 'FashionMax',
				name: '藍 x 白撞色迷你短裙',
				color: '白藍',
				size: ['S', 'M', 'L'],
				price: '1490',
				material: '聚酯纖維',
				desc: '清新白藍配色-雙色迷你短裙',
				images: {
					display: '../img/bottom/display/bottom_009.png',
					use: '../img/bottom/use/bottom_09.png',
					info: [
						'../img/bottom/info/bottom_09_0.png',
						'../img/bottom/info/bottom_09_1.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '單排扣單寧短裙',
				color: '藍',
				size: ['S', 'M', 'L'],
				price: '1990',
				material: '刷色丹寧',
				desc: '排釦設計-女孩兒牛仔短裙',
				images: {
					display: '../img/bottom/display/bottom_010.png',
					use: '../img/bottom/use/bottom_10.png',
					info: [
						'../img/bottom/info/bottom_10_0.png',
						'../img/bottom/info/bottom_10_1.png'
					]
				}
			}
		]
	},
	{
		categoryId: 3,
		categoryName: '洋裝',
		displayOrder: 4,
		list: [{
				brand: 'FashionMax',
				name: '菱紋膝上連身衣',
				color: '黑 x 白',
				size: ['S', 'M', 'L'],
				price: '790',
				material: '棉',
				desc: '幾何黑白菱蚊-膝上連身衣設計',
				images: {
					display: '../img/dress/display/dress_000.png',
					use: '../img/dress/use/dress_00.png',
					info: [
						'../img/dress/info/dress_00_0.png',
						'../img/dress/info/dress_00_1.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '草綠率性洋裝',
				color: '草綠色',
				size: ['S', 'M', 'L'],
				price: '990',
				material: '棉',
				desc: 'Ｖ領設計修飾臉型-雙口袋輕鬆放置',
				images: {
					display: '../img/dress/display/dress_001.png',
					use: '../img/dress/use/dress_01.png',
					info: [
						'../img/dress/info/dress_01_0.png',
						'../img/dress/info/dress_01_1.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '牛仔長裙',
				color: '藍',
				size: ['S', 'M', 'L'],
				price: '1090',
				material: '純色丹寧',
				desc: '創造專屬美式風格-局部刷白處理-排釦性感設計',
				images: {
					display: '../img/dress/display/dress_002.png',
					use: '../img/dress/use/dress_02.png',
					info: [
						'../img/dress/info/dress_02_0.png',
						'../img/dress/info/dress_02_1.png'
					]
				}
			},
		]
	},
	{
		categoryId: 4,
		categoryName: '包包',
		displayOrder: 5,
		list: [{
				brand: 'AUSTIN W.',
				name: 'Pashli 經典設計兩用包',
				color: '紅',
				size: ['25 x 32 x 10 cm'],
				price: '1190',
				material: '100% 牛皮',
				desc: 'Pashli 系列的經典不言而喻，為許多女星、部落客愛不釋手的人氣時尚單品，好萊塢女星瑞絲微絲朋、花邊教主布蕾克•萊芙莉、全球知名部落 Zina Charkoplia 等的衣櫥裡都有這麼一只，獨到的設計與令人聚焦的魅力讓人很難不多看一眼。',
				images: {
					display: '../img/bag/display/bag_000.png',
					use: '../img/bag/use/bag_00.png',
					info: [
						'../img/bag/info/bag_00_0.png',
						'../img/bag/info/bag_00_1.png',
						'../img/bag/info/bag_00_2.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '質感系靚皮硬挺包 ',
				color: '紅',
				size: ['21.5 x 16 cm'],
				price: '890',
				material: '100% 牛皮',
				desc: '精緻工法與細膩摺耨打造品牌意象的低調奢華，硬挺皮質撐起優雅自信地姿態，無論是 casual 還是 leisure，裝載滿滿的美麗就可即刻出發，不遺落你的必需，也妝點你的霸氣。',
				images: {
					display: '../img/bag/display/bag_001.png',
					use: '../img/bag/use/bag_01.png',
					info: [
						'../img/bag/info/bag_01_0.png',
						'../img/bag/info/bag_01_1.png',
						'../img/bag/info/bag_01_2.png'
					]
				}
			},
			{
				brand: 'AUSTIN W.',
				name: '圖騰烙印橫紋托特包',
				color: '鐵灰',
				size: ['39 x 31 x 20 cm'],
				price: '2900',
				material: '50% PVC 50% 聚氨酯',
				desc: '獨具特色的獨到材質設計，冷都調的城市風格，帶入中性時尚的純色紋路，不禁懾服於包面上的工整調理，不拘束的裝載繁雜的必需品，擄獲商務族群的眼光也攻陷每一位需要帶孩子出門的新手媽媽。',
				images: {
					display: '../img/bag/display/bag_002.png',
					use: '../img/bag/use/bag_02.png',
					info: [
						'../img/bag/info/bag_02_0.png',
						'../img/bag/info/bag_02_1.png',
						'../img/bag/info/bag_02_2.png'
					]
				}
			},
		]
	},
	{
		categoryId: 5,
		categoryName: '鞋子',
		displayOrder: 1,
		list: [{
				brand: 'FashionMax',
				name: '真皮露跟樂福鞋',
				color: '黑',
				size: [14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5],
				price: '3900',
				material: '外：100% 皮革 - 內：豬皮內裡',
				desc: '黑色平底鞋-柔軟真皮選料""',
				images: {
					display: '../img/shoes/display/shoes_000.png',
					use: '../img/shoes/use/shoes_00.png',
					info: [
						'../img/shoes/info/shoes_00_0.png',
						'../img/shoes/info/shoes_00_1.png',
						'../img/shoes/info/shoes_00_2.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '黃金女神涼鞋',
				color: '金',
				size: [14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5],
				price: '2990',
				material: '外：100% 漆皮革 - 內：豬皮內裡',
				desc: '舒適平底設計，休閒渡假首選-萬人迷亮眼金屬選色-營造波希米亞風格首選單品',
				images: {
					display: '../img/shoes/display/shoes_001.png',
					use: '../img/shoes/use/shoes_01.png',
					info: [
						'../img/shoes/info/shoes_01_0.png',
						'../img/shoes/info/shoes_01_1.png',
						'../img/shoes/info/shoes_01_2.png'
					]
				}
			},
			{
				brand: 'FashionMax',
				name: '黑色厚底台涼鞋',
				color: '黑',
				size: [14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5],
				price: '1990',
				material: '外：人造皮革 - 內：聚酯纖維',
				desc: '松糕露趾涼鞋-穿搭必備款式',
				images: {
					display: '../img/shoes/display/shoes_002.png',
					use: '../img/shoes/use/shoes_02.png',
					info: [
						'../img/shoes/info/shoes_02_0.png',
						'../img/shoes/info/shoes_02_1.png'
					]
				}
			},
		]
	}
]





$('.categories').click(function(){
	$('.itemPanel').css('margin-left', '0')
	$('.modelPanel').css('width', '70%')
})

$('.model').click(function(){
	$('.itemPanel').css('margin-left', '-30%')
	$('.modelPanel').css('width', '100%')
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

$('.selectListItem').on('click', function(){
	if (window.innerWidth <= 479) {
		var id = $(this).closest('li').index()
		$(this).remove()
		$('.modelItem').eq(id).remove()
		checkSelect()
	}
})

//add all in shopping cart
function checkSelect(){
	if ($('.selectListItem').length === 0) {
		$('.add-all-in-cart').hide()
	} else {
		$('.add-all-in-cart').show()
	}
}



if ($('.selectListItem').length === 0) {
	$('.add-all-in-cart').hide()
} else {
	$('.add-all-in-cart').show()
}

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

	cartItems.push({
		brand: cartItemBrand,
		name: cartItemName,
		price: cartItemPrice,
		image: cartItemImage
	})

	$('.cartItemCounts').text(cartItems.length)

	$('.cartList').prepend('<li class="cartItem"><div class="cartItemImage"><img src="' + cartItemImage + '" alt=""></div><div class="cartItemInfo"><span>' + cartItemBrand + '</span><h5>' + cartItemName + '</h5><span>' + cartItemPrice + '</span></div><button class="delCartItem fa fa-trash-o"></button></li>')

	$('#myModal').find('button.close').click()
	snack()
})

//add all in shopping cart
$('.add-all-in-cart').on('click', function(){
	var allCartItemName, allCartItemBrand, allCartItemPrice, allCartItemImage
	var selectListLength = $('.selectListItem').length

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

		
		cartItems.push({
			brand: allCartItemBrand,
			name: allCartItemName,
			price: allCartItemPrice,
			image: allCartItemImage
		})
		$('.cartItemCounts').text(cartItems.length)
		$('.cartList').prepend('<li class="cartItem"><div class="cartItemImage"><img src="' + allCartItemImage + '" alt=""></div><div class="cartItemInfo"><span>' + allCartItemBrand + '</span><h5>' + allCartItemName + '</h5><span>' + allCartItemPrice + '</span></div><button class="delCartItem fa fa-trash-o"></button></li>')
		snack()

	}
})


//cart icon trigger display
$('.cart a').on('click', function () {
	if (cartItems.length !== 0) {
		if (window.innerWidth <= 479) {
			$(this).siblings('.cartList').toggleClass('showCartMobile')
		}
		else {
			$(this).siblings('.cartList').toggleClass('show')
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
	}
	else{
		$(this).siblings('.loginOptions').toggleClass('showLogIn')
	}
})


//display menu list on mobile device
$('.mobileMenu').on('click', function () {
	$('.genderSelectMobile').toggleClass('showMenu')
})


//Cart notification
function snack() {
	$('#snackBar').addClass('show')
	setTimeout(function () {
		$('#snackBar').removeClass('show');
	}, 2000);
}