var productsList = [];
if (localStorage.getItem("products") !== null) {
    productsList = JSON.parse(localStorage.getItem("products"))
    displayProducts()
}
function clrForm() {
    NameProduct.value = ''
    priceProduct.value = ''
    adsProduct.value = ''
    discountProduct.value = ''
    countPtoduct.value = ''
    categoryProduct.value = ''
    taxesProduct.value = ''
}

function localsave() {
    localStorage.setItem('products', JSON.stringify(productsList))
}
function addProduct() {
    product =
    {
        nameProducts: NameProduct.value,
        priceProducts: priceProduct.value,
        adsProducts: adsProduct.value,
        discountProducts: discountProduct.value,
        countPtoducts: countPtoduct.value,
        categoryProducts: categoryProduct.value,
        taxesProducts: taxesProduct.value
    }
    if (product.discountProducts === '') {
        product.discountProducts = 0
    }
    if (product.adsProducts === '') {
        product.adsProducts = 0
    }
    if (product.nameProducts === '' || product.priceProducts === '' || product.countPtoducts === '' || product.categoryProducts === '' || product.taxesProducts === '') {
        console.log('erro');

    } else {
        productsList.push(product);
        displayProducts()
        localsave()
        clrForm()
    }


}
btnCreate.addEventListener("click", addProduct);
function displayProducts() {
    var cartoona = ``

    for (var i = 0; i < productsList.length; i++) {
        var totalPrice = (Number(productsList[i].priceProducts) + Number(productsList[i].taxesProducts) + Number(productsList[i].adsProducts) - Number(productsList[i].discountProducts))
        cartoona += ` <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${productsList[i].nameProducts}</td>
                    <td>${productsList[i].priceProducts}</td>
                    <td>${productsList[i].taxesProducts}</td>
                    <td>${productsList[i].adsProducts}</td>
                    <td>${productsList[i].discountProducts}</td>
                    <td>${totalPrice}</td>
                    <td>${productsList[i].countPtoducts}</td>
                    <td>${(Number(productsList[i].countPtoducts) * totalPrice)}</td>
                    <td>${productsList[i].categoryProducts}</td>
                    <td><button onclick="setFOrmForUpdate(${i})" class="btn btn-warning btn-sm">Update</button></td>
                    <td><button  onclick="deleteProduct(${i})" class="btn btn-danger btn-sm btnde">Delete</button></td>
                </tr>`
    }
    bodyTable.innerHTML = cartoona;
}
var indexProduct;
function setFOrmForUpdate(i) {
    indexProduct = i
    NameProduct.value = productsList[i].nameProducts
    priceProduct.value = productsList[i].priceProducts
    adsProduct.value = productsList[i].adsProducts
    discountProduct.value = productsList[i].discountProducts
    countPtoduct.value = productsList[i].countPtoducts
    categoryProduct.value = productsList[i].categoryProducts
    taxesProduct.value = productsList[i].taxesProducts
    btnCreate.classList.add('d-none')
    btnUpdate.classList.remove('d-none')
    document.querySelector('.btnde').toggleAttribute('disabled', true)
    document.getElementById('deletAllBtn').toggleAttribute('disabled', true)
}

btnUpdate.addEventListener('click', function () {
    productsList[indexProduct].nameProducts = NameProduct.value
    productsList[indexProduct].priceProducts = priceProduct.value
    productsList[indexProduct].adsProducts = adsProduct.value
    productsList[indexProduct].discountProducts = discountProduct.value
    productsList[indexProduct].countPtoducts = countPtoduct.value
    productsList[indexProduct].categoryProducts = categoryProduct.value
    productsList[indexProduct].taxesProducts = taxesProduct.value
    if (productsList[indexProduct].discountProducts === '') {
        productsList[indexProduct].discountProducts = 0
    }
    if (productsList[indexProduct].adsProducts === '') {
        productsList[indexProduct].adsProducts = 0
    }
    displayProducts()
    localsave()
    clrForm()
    btnCreate.classList.remove('d-none')
    btnUpdate.classList.add('d-none')
    document.getElementById('deletAllBtn').toggleAttribute('disabled', false)

})

function deleteProduct(i) {
    productsList.splice(i, 1);
    displayProducts()
    localsave()
    clrForm()
    btnCreate.classList.remove('d-none')
    btnUpdate.classList.add('d-none')
}

deletAllBtn.addEventListener('click', function () {
    productsList = []
    displayProducts()
    localsave()
    clrForm()
    btnCreate.classList.remove('d-none')
    btnUpdate.classList.add('d-none')

})
searchProductNameBtn.addEventListener('click', function () {
    var cartoona = ''
    var trim = searchProduct.value
    for (let i = 0; i < productsList.length; i++) {
        var totalPrice = (Number(productsList[i].priceProducts) + Number(productsList[i].taxesProducts) + Number(productsList[i].adsProducts) - Number(productsList[i].discountProducts))
        if (productsList[i].nameProducts.toLowerCase().includes(trim.toLowerCase())) {
            cartoona += ` <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${productsList[i].nameProducts}</td>
                    <td>${productsList[i].priceProducts}</td>
                    <td>${productsList[i].taxesProducts}</td>
                    <td>${productsList[i].adsProducts}</td>
                    <td>${productsList[i].discountProducts}</td>
                    <td>${totalPrice}</td>
                    <td>${productsList[i].countPtoducts}</td>
                    <td>${(Number(productsList[i].countPtoducts) * totalPrice)}</td>
                    <td>${productsList[i].categoryProducts}</td>
                    <td><button onclick="setFOrmForUpdate(${i})" class="btn btn-warning btn-sm">Update</button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm btnde">Delete</button></td>
                </tr>`
        }

    }
    bodyTable.innerHTML = cartoona;
})

searchProductcateBtn.addEventListener('click', function () {
    var cartoona = ''
    var trim = searchProduct.value
    for (let i = 0; i < productsList.length; i++) {
        var totalPrice = (Number(productsList[i].priceProducts) + Number(productsList[i].taxesProducts) + Number(productsList[i].adsProducts) - Number(productsList[i].discountProducts))
        if (productsList[i].categoryProducts.toLowerCase().includes(trim.toLowerCase())) {
            cartoona += ` <tr>
                    <th scope="row">${i + 1}</th>
                    <td>${productsList[i].nameProducts}</td>
                    <td>${productsList[i].priceProducts}</td>
                    <td>${productsList[i].taxesProducts}</td>
                    <td>${productsList[i].adsProducts}</td>
                    <td>${productsList[i].discountProducts}</td>
                    <td>${totalPrice}</td>
                    <td>${productsList[i].countPtoducts}</td>
                    <td>${(Number(productsList[i].countPtoducts) * totalPrice)}</td>
                    <td>${productsList[i].categoryProducts}</td>
                    <td><button onclick="setFOrmForUpdate(${i})" class="btn btn-warning btn-sm">Update</button></td>
                    <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm btnde">Delete</button></td>
                </tr>`
        }

    }
    bodyTable.innerHTML = cartoona;
})
