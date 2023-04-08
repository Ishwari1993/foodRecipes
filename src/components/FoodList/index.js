import React from "react";
import "./foodList.scss";

const FoodList = () => {
  return (
    <div className="section-wrapper">
      <div className="container">
        <div className="sc-title">Food List</div>
        <section className="sc-meal grid">
          {foodtems?.map((item) => (
            <div
              className="meal-itm align-center justify-center"
              key={item?.id}
            >
              <div className="meal-itm-img">
                <img src={item?.image} alt="not found" />
                <div className="meal-itm-cat bg-green text-green fw-6">
                  $ {item?.price}
                </div>
              </div>

              <div className="meal-itm-body">
                <div className="meal-itm-body-info flex justify-between ">
                  <div className="area fs-14 ls-1 fw-5">{item?.area}</div>
                  <div className="meal fw-7 op-09 flex align-center justify-center">
                    {item?.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FoodList;
const foodtems = [
  {
    id: 1,
    name: "pizza",
    price: "2",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "kathmandu",
  },
  {
    id: 2,
    name: "pizza",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "Kathmandu",
    price: "3",
  },
  {
    id: 3,
    name: "pizza",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "Kathmandu",
    price: "3",
  },
  {
    id: 4,
    name: "pizza",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "Kathmandu",
    price: "3",
  },
  {
    id: 5,
    name: "pizza",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "Kathmandu",
    price: "3",
  },
  {
    id: 6,
    name: "pizza",
    image:
      "https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=is&k=20&c=cjrsXpA0waA1Ee50_aVdrY-FCpREkEuf0wkJmm20dAc=",
    area: "Kathmandu",
    price: "3",
  },
];
