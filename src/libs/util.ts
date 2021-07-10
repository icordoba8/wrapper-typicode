
 
class Utils {
  /**
  Función row retornar un elemento en la posición x 
  si no se le pasa la posición por defecto mola el elemento 0
 * @param <Array> items required
 * @param <number> position optional default 0
 */

  static row = (items: any, position?: number) => {
    let item:Object = {};
    if (Array.isArray(items)) {
      position = position ? position : 0;
      item = items[position];
    }
    return item;
  };

  static error = (error:any) => {
    //console.log(error)
    return { name: "error", message: "Error procesando datos" }
  };
}
export {Utils} 