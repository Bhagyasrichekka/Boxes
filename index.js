const Box = (props) => {
  //  Write your code here.
  const { content, className } = props;
  return <p className={className}>{content}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1 className="heading">Boxes</h1>

    <div className="card">
      <Box content="Small" className="small" />

      <Box content="Medium" className="medium" />

      <Box content="Big" className="big" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
//ccbp submit RJSCPHB1SE
