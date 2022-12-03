const productosModel = use("App/Models/Producto");


class ProductosController {
    async getAll({ request, response}) {
        return productosModel.all();
    }
    async getOne({ request, response, view, params: { id } }) {
        return productosModel.find(id);
    }
    async create({ request, response}) {
        const { nombre, precio, descripcion, cantidad } = request.all();
        const producto = new productosModel();
        producto.nombre = nombre;
        producto.precio = precio;
        producto.descripcion = descripcion;
        producto.cantidad = cantidad;
        await producto.save();
        return producto;

    }
    async update({ request, response, params: { id } }) {
        const { nombre, precio, descripcion, cantidad } = request.all();
        const producto = await productosModel.find(id);
        producto.nombre = nombre;
        producto.precio = precio;
        producto.descripcion = descripcion;
        producto.cantidad = cantidad;
        await producto.save();
        return producto;
    }
    async delete({ request, response, params: { id } }) {
        const producto = await productosModel.find(id);
        await producto.delete();
        return producto;
    }
}

module.exports = ProductosController
