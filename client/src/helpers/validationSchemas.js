import * as yup from 'yup';
// create user validation schema
export const createUserValidationSchema = yup.object({
    userName: yup
      .string('Ingresa tu nombre de usuario')
      .required('El nombre de usuario es requerido')
      .min(6, 'El nombre de usuario debe tener al menos 6 caracteres')
      .max(20, 'El nombre de usuario debe tener como máximo 20 caracteres')
      .matches(/^[a-zA-Z0-9]+$/, 'El nombre de usuario solo puede contener letras y números'),
    firstName: yup
      .string('Ingresa tu nombre')
      .required('El nombre es requerido')
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .matches(/^[a-zA-Z]+$/, 'El nombre solo puede contener letras'),
    lastName: yup
      .string('Ingresa tu apellido')
      .required('El apellido es requerido')
      .min(2, 'El apellido debe tener al menos 2 caracteres')
      .matches(/^[a-zA-Z]+$/, 'El apellido solo puede contener letras'),
    email: yup
      .string('Ingresa tu email')
      .email('Ingresa un email válido')
      .required('El email es requerido'),
    password: yup
      .string('Ingresa tu contraseña')
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(16, 'La contraseña debe tener como máximo 16 caracteres'),
    confirmPassword: yup
      .string('Repite tu contraseña')
      .required('Debes confirmar tu contraseña')
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
    address: yup
      .string('Ingresa tu domicilio')
      .required('El domicilio es requerido')
      .min(5, 'El domicilio debe tener al menos 5 caracteres'),
    });
//login validation schema
export const loginValidationSchema = yup.object({
    email: yup
        .string('Ingresa tu email')
        .email('Ingresa un email válido')
        .required('El email es requerido'),
    password: yup
        .string('Ingresa tu contraseña')
        .required('La contraseña es requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(16, 'La contraseña debe tener como máximo 16 caracteres'),
    });
// validation for new product
export const newProductValidationSchema = yup.object({
    name: yup
        .string('Ingresa el nombre del producto')
        .required('El nombre del producto es requerido')
        .min(2, 'El nombre del producto debe tener al menos 2 caracteres')
        .max(20, 'El nombre del producto debe tener como máximo 20 caracteres'),
    price: yup
        .number('Ingresa el precio del producto')
        .required('El precio del producto es requerido')
        .min(1, 'El precio del producto debe ser mayor a 0'),
        //category is an autocomplete from a list of categories
    category: yup
        .string('Ingresa la categoría del producto')
        .required('La categoría del producto es requerida'),
        //image is a url to the image of the product, its optional
    image: yup
        .string('Ingresa la url de la imagen del producto')
        .url('Ingresa una url válida')
        .notRequired(),
    stock: yup
        .number('Ingresa el stock del producto')
        .required('El stock del producto es requerido')
        .min(1, 'El stock del producto debe ser mayor a 0'),
    description: yup
        .string('Ingresa la descripción del producto')
        .required('La descripción del producto es requerida')
        .min(10, 'La descripción del producto debe tener al menos 10 caracteres')
        .max(3000, 'La descripción del producto debe tener como máximo 3000 caracteres'),
    });
    

        

