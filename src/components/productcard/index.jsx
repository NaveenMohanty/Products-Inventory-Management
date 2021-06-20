import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Text, Button } from "../../styled";
import { useDispatch } from "react-redux";
import { addEditProduct, deleteProduct } from "../../redux/actions/product";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    height: "30vh",
    minHeight: "200px",
    width: "40vw",
    minWidth: "300px",
    margin: "3px",
    padding: "10px",
  },
}));
const Index = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name, price, quantity } = product;
  return (
    <Paper className={classes.paper}>
      <Container
        height="100%"
        width="30%"
        justify="center"
        align="center"
        margin="5px"
      >
        <img src={product["imageUrl"]} height="100%" width="100%" alt={name} />
      </Container>
      <Container direction="column" margin="0px 0px 0px 20px">
        <Text size="20px" margin="5px" width="70%">
          <b>Name:</b> {name}
        </Text>
        <Text size="20px" margin="5px" width="70%">
          <b>Description:</b> {product["description"] || ""}
        </Text>
        <Text size="20px" margin="5px" width="70%">
          <b>Price:</b> Rs.{price}
        </Text>
        <Text size="20px" margin="5px" width="70%">
          <b>Quantity:</b> {quantity}
        </Text>
        <Container>
          <Button
            background="red"
            width="90px"
            margin="0px 5px 0px 0px"
            height="30px"
            onClick={() => {
              dispatch(deleteProduct(product.id));
            }}
          >
            Delete
          </Button>
          <Button
            background="darkBlue"
            width="90px"
            height="30px"
            onClick={() => {
              dispatch(addEditProduct(product));
            }}
          >
            Edit
          </Button>
        </Container>
      </Container>
    </Paper>
  );
};

export default Index;
