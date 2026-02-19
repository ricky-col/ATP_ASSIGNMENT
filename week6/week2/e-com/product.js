const products = [
                    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },                        { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
              ];
export function getProductId(id){
    return products.find(p=>p.id==id)
}
export function getAllProducts(){
    return getAllProduct=()=>products;
}
export function getProductsByCategory(category){
    return products.filter(p=>p.category===category)
}
export function searchProducts(query) {
    return products.filter(p=>p.name.toLocaleLowerCase().includes(query.toLowercase()))
}
export function checkStock(productId, quantity) {
    const p=getProductId(productId)
    return p? p.stock>=quantity:false;
}  
export function reduceStock(productId, quantity) {
    const p=getProductId(productId)
    if(p) p.stock-=qty;
}