export const Cep = (cep)=>{
    fetch("https://viacep.com.br/ws/70730630/json")
      .then(res => res.json())
      .then(
        (result) => {
         console.log(result);
        },
        (error) => {
            console.log(error);
        }
      )

}