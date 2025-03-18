import AlertMessage from "./AlertMessage";

export const App = () => {
  const apiResponse = {
    status: 400,
    message: "Unsuccessful Operation!",
  };

  return (
    <>
      {apiResponse && apiResponse.status === 200 && (
        <AlertMessage alertType="alert-success" message={apiResponse.message} />
      )}

      {apiResponse && apiResponse.status === 400 && (
        <AlertMessage alertType="alert-danger" message={apiResponse.message} />
      )}

      {/* 
      <AlertMessage alertType="alert-info" message="INFORMATION HERE"/> 
      */}
    </>
  );
};
