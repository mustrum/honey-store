import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductsList, Hero, Section, Loader} from "../components";
import {productsListAction} from "../actions/products.actions";


const HomePage = () => {
  const dispatch = useDispatch();

  const stateProductList = useSelector(state => state.productsList);

  const {products, loading, error} = stateProductList;

  useEffect(() => {
    dispatch(productsListAction())
  }, [dispatch]);
  return (
    <>
      <Hero
        title="Хънни Бънни"
        copy="автентичен вкус на български пчелен мед и пчелни продукти от нашите кoшери, с доказано качество и произход"
        image="./images/her.png"
        url="/products"
        btnText="виж продукти"
      />

      <Section
        title="Нашите продукти"
        copy="Разгледайте нашия онлайн магазин"
        alignment="center"
        background="rgba(211, 168, 99, .3)">
        {
          loading
            ? <Loader/>
            : error
              ? <h3>{error}</h3>
              : <ProductsList products={products} />
        }

      </Section>
    </>
  )
};

export default HomePage;
