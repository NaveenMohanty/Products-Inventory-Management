import React, { useState, useEffect } from "react";
import HeadFoot from "../components/headerfooter";
import { Container, Input, Button } from "../styled";
import ProductCard from "../components/productcard";
import { useSelector } from "react-redux";
import IconButtons from "../components/materialui/IconButtons";
import AddIcon from "@material-ui/icons/Add";
import history from "../utils/createHistory";
import Paper from "@material-ui/core/Paper";
import searchIcon from "../assets/image/search.svg";
import { useDispatch } from "react-redux";
import { addEditProduct } from "../redux/actions/product";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [textSearch, setTextSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [prod, setProd] = useState([]);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setProd(products);
    dispatch(addEditProduct());
  }, [products, dispatch]);
  const onSearch = (e) => {
    e.preventDefault();
    if (textSearch)
      setProd(
        products.filter(
          (prod) =>
            prod.name.toLowerCase().search(textSearch.toLowerCase()) >= 0
        )
      );
    else setProd(products);
  };
  const onFilter = (e) => {
    e.preventDefault();

    onSearch(e);
    setTimeout(() => {
      setProd((pro) => [
        ...pro.filter((p) => {
          let check = true;
          if (price > 0) check = check && parseInt(p.price) <= price;
          if (quantity > 0) check = check && parseInt(p.quantity) <= quantity;
          return check;
        }),
      ]);
    }, 100);
  };
  return (
    <HeadFoot>
      <IconButtons
        tooltipTitle="Create Product"
        backgroundColor="green"
        color="white"
        position="absolute"
        top="5vh"
        right="9vw"
        zIndex={2}
        onClick={() => {
          history.push("/product");
        }}
      >
        <AddIcon fontSize="medium" />
      </IconButtons>

      <Container
        direction="column"
        align="center"
        width="100%"
        background="#EDF8DF"
      >
        <Paper
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "5vh",
            width: "45vw",
            minWidth: "400px",
            margin: "3px",
            padding: "10px",
          }}
        >
          <form onSubmit={onSearch}>
            <Container>
              <Input
                onChange={(e) => {
                  setTextSearch(e.target.value);
                }}
                width="100%"
                value={textSearch}
                margin="0px"
                border="1px solid rgba(128, 128, 128)"
                placeholder="Search"
              />
              <img
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "5px",
                  cursor: "pointer",
                }}
                src={searchIcon}
                onClick={onSearch}
                alt=""
              />
            </Container>
          </form>
          <form
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0px 10px",
            }}
            onSubmit={onFilter}
          >
            <Input
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
              width="40%"
              type="number"
              value={price || ""}
              margin="0px 5px"
              placeholder="Max Price"
              required
            />

            <Input
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
              width="40%"
              type="number"
              value={quantity || ""}
              margin="0px 5px"
              placeholder="Max Quantity"
              required
            />

            <Button height="30px" width="60px" onClick={onFilter}>
              Filter
            </Button>
          </form>
        </Paper>
        {prod.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </Container>
    </HeadFoot>
  );
};

export default Home;
