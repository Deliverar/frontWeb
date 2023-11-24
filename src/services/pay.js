export const sendPay = async () => {
    const res = await fetch(
      "http://abmpersonalinternoapi.deliver.ar/api/payment/pay",
      {
        method: "POST",
      }
    )
  
    if (res.status === 200) {
      return res
    } else {
      throw new Error("Error")
    }
  }
  