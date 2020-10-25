const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("Working!!!!")
  });
  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);




    // user details fetching
    //   app.use('/user',(req, res, next) =>{
    //     const user = [{
    //       userId: 1,
    //       name: "rahul"
    //     },
    //     {
    //       userId:2,
    //       name:"ramesh"
    //     },
    //   {
    //     userId: 3,
    //     name: "ankitha"
    //   }];
    // res.status(200).json({
    //   message: "posts are fetched successfully !",
    //   users: user
    // })

    // user.updateOne({_id:req.params.id}, user).then(
    //   result => {
    //     if(result.n > 0){
    //       res.status(200).json({
    //         success: true,
    //           message: "update is successful!!!"
    //       })
    //   }else{
    //       res.status(401).json({
    //         success: false,
    //           message: "update is faild!!!"
    //       })
    //   }
    //   }
    //   )
    //   });
      // fetching orders
      // app.use('/orders' ,(req, res, next) => {
      //   const orders = [{
      //     orderId: 1,
      //     userId : 1,
      //     subtotal: 500,
      //     date: "23 jan 2019"
      //   }];
      //   res.status(200).json({
      //     message: "orders are fetched successfully !",
      //     orders: orders
      //   });


      // })
      // function calCulate() {
//   var orderCollcetion = 4200/orders
//   var UserCollcetion = 4200/users
// console.log(orderCollcetion)
// console.log(UserCollcetion)
// }

      function calculate() {
        var orderCollection = [{
          orderId: 1,
           userId : 1,
           subtotal: 500,
           date: "23 jan 2019"
        },
        {
          orderId: 2,
           userId : 2,
           subtotal: 400,
           date: "16 mar 2019"
        },
        {
          orderId: 3,
           userId : 1,
           subtotal: 150,
           date: "20 mar 2019"
        },
        {
          orderId: 1,
           userId : 1,
           subtotal: 700,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 3,
           subtotal: 200,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 3,
           subtotal: 1500,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 1,
           subtotal: 1200,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 2,
           subtotal: 1600,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 2,
           subtotal: 900,
           date: "23 jan 2019"
        },
        {
          orderId: 1,
           userId : 1,
           subtotal: 700,
           date: "23 jan 2019"
        },
      ];
var UserCollcetion = [{
        userId: 1,
        name: "rahul"
      },
      {
        userId:2,
        name:"ramesh"
      },
    {
      userId: 3,
      name: "ankitha"
    }]
      }
  });
