import { toast } from 'react-toastify'

export function errorMessage(error: any) {
  console.log('error testing in error page', error)
  toast.error(error, {
    position: 'bottom-right',
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    onClick: function () {}
  })
}

export function alertSuccess(message: string) {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    onClick: function () {}
  })
}
export default {
  errorMessage,
  alertSuccess
}
