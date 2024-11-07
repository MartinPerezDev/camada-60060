import { mixed, object, string } from "yup"

let userSchema = object({
  fullname: string().required("El campo nombre es requerido"),
  phone: mixed().required("El campo telefono es requerido"),
  email: string().email("El campo email, debe tener un @")
})

const validateForm = async(dataForm) => {
  try {
    //esperamos que termine de validar los datos
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm