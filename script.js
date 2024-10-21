$(document).ready(() => {
    console.log('oi');
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const productsObj = data.products;
            for (const key in productsObj) {
                if (productsObj.hasOwnProperty(key)) {
                    const product = productsObj[key];
                    const formattedPrice = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.preco);
                    const productHTML = `
                        <a href="${product.link}" target="_blank" class="product bg-gray-800 rounded-lg p-6 w-full flex items-center justify-between shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                            <img src="${product.foto}" alt="${product.titulo}" class="w-24 h-24 object-cover rounded sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                            <div class="ml-6 flex-1">
                                <h2 class="text-2xl font-semibold text-purple-400">${product.titulo}</h2>
                                <p class="text-gray-400 mb-2 break-words">${product.descricao}</p>
                                <p class="text-red-400 font-bold">Preço: R$ ${formattedPrice}</p>
                            </div>
                        </a>
                    `;
                    $('#tree').append(productHTML);
                }
            }
        })
        .catch(err => console.error('Erro ao carregar o JSON:', err));
});