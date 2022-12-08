
import Add_to_cart from "../Constants"
const addtocart = (data)=>{
    return {
        payload:data,
        type:Add_to_cart

    }
}
export default addtocart