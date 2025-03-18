import AlertMessage from "./AlertMessage";
import Card from "./Card";
import Pricing from "./Pricing";

export const App = () => {
  const apiResponse = {
    status: 400,
    message: "Unsuccessful Operation!",
  };


  const handleClick = (msg) => {
    alert(msg);
  }


  return (
    <>
    <Pricing/>



      {/* <div className="container w-50">
        <Card title="Demo1" description="Demo descprition 1" image="https://placehold.co/150" buttonAction={ () => alert("Demo1") }/>

        <Card title="Demo2" description="Demo descprition 2" image="https://placehold.co/200" buttonAction={ () => handleClick("Demo2") }/>
      </div> */}


      {/* {apiResponse && apiResponse.status === 200 && (
        <AlertMessage alertType="alert-success" message={apiResponse.message} />
      )} */}

      {/* {apiResponse && apiResponse.status === 400 && (
        <AlertMessage alertType="alert-danger" message={apiResponse.message} />
      )} */}

      {/* 
      <AlertMessage alertType="alert-info" message="INFORMATION HERE"/> 
      */}
    </>
  );
};
