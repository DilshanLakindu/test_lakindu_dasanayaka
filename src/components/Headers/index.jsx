const Index = ({ Heading, Description }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center pt-5">
        <h2 className="text-uppercase">{Heading}</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <hr
          className="rounded"
          style={{ border: "1px solid black", width: "10%" }}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center pt-5 pb-5">
        <div className="container text-center px-xl-5">{Description}</div>
      </div>
    </>
  );
};

export default Index;
