const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf").value;

  const productElement = btn.closest("article");

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .then(data => {
      console.log(data);
      productElement.parentNode.removeChild(productElement); // works in all browser inc. IE
    })
    .catch((err) => {
      console.log(err);
    });
};
