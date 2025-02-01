import { Button } from "@nextui-org/react";
import usePostMutate from "../hooks/shared/usePostMutate";
import toast from "react-hot-toast";


const Home = () => {
  const onSuccess = (data)=> {
    console.log(data)
    toast.success("product is created")
  }
  const onError = (err)=> {
console.log(err)
toast.error("somewthing went wrong")

  }
  const {isPending: isLoading, mutate} = usePostMutate('/products/add', onSuccess, onError)


  return(
   <>

<Button isLoading={isLoading} onClick={()=> {mutate({
   title: 'Shirt',  
   price: 20
})}} >Add Product</Button>

    </>
  );
};

export default Home;
