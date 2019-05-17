import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColoumns from "./CartColoumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends React.Component {
  render() {
    return (
      <section className="mx-5">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title=" Cart" />
                  <CartColoumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
