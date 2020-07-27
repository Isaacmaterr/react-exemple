export const Cep = (cep)=>{
    fetch("https://viacep.com.br/ws/"+cep+"/json")
      .then(res => res.json())
      .then(
        (result) => {
         return result;
        },
        (error) => {
            console.log(error);
        }
      )

}