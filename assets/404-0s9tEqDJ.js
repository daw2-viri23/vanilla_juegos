const _404 = {
  template: `
    <div class="container">
    <div class="row">
      <div class="col-md-12 error-container">
        <h1 class="error-heading">Error 404</h1>
        <p class="error-message">Lo sentimos, la página que estás buscando no pudo ser encontrada.</p>
        <a href="/" class="btn btn-primary">Volver a la página de inicio</a>
      </div>
    </div>
  </div>
    `,
  script: () => {
    console.log("XD");
  }
};
export {
  _404 as default
};
