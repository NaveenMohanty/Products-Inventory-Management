import React, { useState, useEffect } from "react";
import HeadFoot from "../components/headerfooter";
import { Container, Text, Input, Button } from "../styled";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editAProduct } from "../redux/actions/product";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "61vh",
    minHeight: "300px",
    width: "30vw",
    minWidth: "300px",
  },

  textareadiv: {
    height: "70px",
    width: "80%",
    margin: "10px 0px",
  },
  textarea: {
    background: "#EDF8DF",
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: "5px",
    width: "100%",
    height: "70px",
  },
}));

const EditProduct = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const editProduct = useSelector((state) => state.product.editProduct);
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (editProduct) {
      setDetails(editProduct);
    }
  }, [editProduct]);

  const onchange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (editProduct) dispatch(editAProduct(details));
    else dispatch(addProduct(details));
  };
  return (
    <HeadFoot>
      <Container justify="center" align="center" height="100%">
        <Paper className={classes.paper} elevation={3}>
          <Container justify="center" align="center">
            <Text size="20px">
              {editProduct ? "Edit Product" : "Create Product"}
            </Text>
          </Container>
          <form onSubmit={onsubmit}>
            <Container direction="column" align="center">
              <Input
                margin="10px 0px"
                type="text"
                width="80%"
                height="40px"
                name="name"
                placeholder="Name"
                value={details["name"] || ""}
                onChange={onchange}
                maxLength={30}
                required
              />
              <div className={classes.textareadiv}>
                <textarea
                  className={classes.textarea}
                  placeholder="Description"
                  name="description"
                  value={details["description"] || ""}
                  onChange={onchange}
                ></textarea>
              </div>
              <Container width="80%" direction="row" justify="space-between">
                <Input
                  margin="10px 0px"
                  height="40px"
                  type="number"
                  name="price"
                  width="48%"
                  value={details["price"] || ""}
                  onChange={onchange}
                  placeholder="Price"
                  required
                />
                <Input
                  margin="10px 0px"
                  height="40px"
                  type="number"
                  name="quantity"
                  width="48%"
                  value={details["quantity"] || ""}
                  onChange={onchange}
                  placeholder="Quantity"
                  required
                />
              </Container>

              <Input
                margin="10px 0px"
                height="40px"
                type="text"
                name="imageUrl"
                width="80%"
                placeholder="Product Image URL"
                value={details["imageUrl"] || ""}
                onChange={onchange}
              />
              <Container width="80%" justify="flex-end">
                <Button height="35px" width="100px" type="submit">
                  Save
                </Button>
              </Container>
            </Container>
          </form>
        </Paper>
      </Container>
    </HeadFoot>
  );
};

export default EditProduct;
